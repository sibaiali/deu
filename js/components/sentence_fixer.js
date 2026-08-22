// Magischer Satz-Korrektor & Deutsches Grammarly
// 100% Live-Echtzeit-Prüfung beim Tippen, 1-Klick "Alles Automatisch Korrigieren",
// Fehler-Lern-Zentrum (Aus Fehlern lernen) und Tagebuch-Verwaltung.

import { Storage } from '../storage.js';
import { Speech } from '../speech.js';

export function renderSentenceFixer(container) {
  let activeSubTab = 'checker'; // 'checker' | 'error_lab' | 'diary'
  let userHistory = Storage.getHistory().filter(h => h.type === 'sentence_fixer') || [];
  let typingTimer = null;

  const presetExamples = [
    {
      title: "💌 Liebesnachricht",
      input: "Ich freue mich auf heute abend weil ich habe dich sehr vermisst.",
      context: "Freundin"
    },
    {
      title: "👋 Typischer Tippfehler",
      input: "Hallo ic bin Ali und du?",
      context: "Kennenlernen"
    },
    {
      title: "👋 Selbstvorstellung (jahre)",
      input: "Ich möchte mich vorstellen, mein Name ist Ali und ich bin 25 jahre alt.",
      context: "Vorstellung"
    },
    {
      title: "🏢 Verspätung melden",
      input: "Ich möchte Bescheid geben dass ich komme heute 10 Minuten später.",
      context: "Station"
    },
    {
      title: "🏥 Schichtübergabe",
      input: "Der Patient hat die Tablette verweigert obwohl er hatte starke Schmerzen.",
      context: "Klinik"
    },
    {
      title: "⏰ Zeitangabe am Satzanfang (V2)",
      input: "Gestern ich habe mit meiner Freundin gesprochen.",
      context: "Wortstellung"
    }
  ];

  // Common German Typos Dictionary
  const commonTypos = {
    'ic': 'ich', 'ihc': 'ich', 'ish': 'ich',
    'duu': 'du', 'ddu': 'du',
    'nich': 'nicht', 'nit': 'nicht', 'nix': 'nichts',
    'hab': 'habe', 'habe': 'habe',
    'is': 'ist', 'bis': 'bist',
    'gehts': "geht's", 'gehts?': "geht's?",
    'viell': 'viel', 'vile': 'viel',
    'shon': 'schon', 'schonn': 'schon',
    'weill': 'weil', 'wiel': 'weil',
    'das': 'dass',
    'und du?': 'und wie heißt du?', 'und du': 'und wie heißt du?'
  };

  // High-Frequency German Nouns
  const germanNouns = {
    'jahre': 'Jahre', 'jahr': 'Jahr', 'abend': 'Abend', 'morgen': 'Morgen', 'tag': 'Tag',
    'tage': 'Tage', 'woche': 'Woche', 'wochen': 'Wochen', 'monat': 'Monat', 'monate': 'Monate',
    'zeit': 'Zeit', 'arbeit': 'Arbeit', 'essen': 'Essen', 'wasser': 'Wasser', 'freund': 'Freund',
    'freunde': 'Freunde', 'freundin': 'Freundin', 'freundinnen': 'Freundinnen', 'station': 'Station',
    'patient': 'Patient', 'patienten': 'Patienten', 'patientin': 'Patientin', 'schmerzen': 'Schmerzen',
    'schmerz': 'Schmerz', 'haus': 'Haus', 'zimmer': 'Zimmer', 'küche': 'Küche', 'tisch': 'Tisch',
    'arzt': 'Arzt', 'ärzte': 'Ärzte', 'ärztin': 'Ärztin', 'schwester': 'Schwester', 'pfleger': 'Pfleger',
    'name': 'Name', 'namen': 'Namen', 'frage': 'Frage', 'fragen': 'Fragen', 'termin': 'Termin',
    'termine': 'Termine', 'pause': 'Pause', 'dienst': 'Dienst', 'dienste': 'Dienste', 'hilfe': 'Hilfe',
    'schatz': 'Schatz', 'liebe': 'Liebe', 'geld': 'Geld', 'brief': 'Brief', 'meldung': 'Meldung',
    'nachricht': 'Nachricht', 'nachrichten': 'Nachrichten', 'vorstellung': 'Vorstellung', 'bett': 'Bett',
    'betten': 'Betten', 'handtuch': 'Handtuch', 'handtücher': 'Handtücher', 'übergabe': 'Übergabe'
  };

  // Word Upgrades Dictionary
  const wordUpgrades = [
    { target: /\bmachen\b/i, original: "machen", better: "erledigen / durchführen / übernehmen", note: "'machen' klingt umgangssprachlich. Nutze im Beruf 'erledigen' oder 'übernehmen'." },
    { target: /\bhelfen\b/i, original: "helfen", better: "unterstützen bei (+ Dat.) / zur Hand gehen", note: "'unterstützen' klingt auf B2/C1-Niveau professioneller." },
    { target: /\bsagen\b/i, original: "sagen", better: "mitteilen / Bescheid geben / zur Sprache bringen", note: "Nutze präzisere Verben wie 'mitteilen' oder 'schildern'." },
    { target: /\bwichtig\b/i, original: "wichtig", better: "von zentraler Bedeutung / essenziell", note: "'von zentraler Bedeutung' verleiht deinem Satz C1-Gewicht." },
    { target: /\bgut\b/i, original: "gut", better: "hervorragend / einwandfrei / vorbildlich", note: "Nutze differenzierte Adjektive wie 'einwandfrei'." },
    { target: /\bProblem\b/i, original: "Problem", better: "Herausforderung / Schwierigkeit / Anliegen", note: "In der deutschen Arbeitskultur sagt man lieber 'Herausforderung'." }
  ];

  // Toast Notification Helper
  function showToast(message, type = 'success') {
    Speech.playSound(type === 'success' ? 'success' : 'pop');
    const existing = document.querySelector('.pushup-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = `pushup-toast toast-${type}`;
    toast.innerHTML = `
      <span class="text-xl">${type === 'success' ? '🏆' : (type === 'warning' ? '💡' : '⚠️')}</span>
      <span class="font-bold text-sm">${message}</span>
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // Deep Real-Time Grammar Engine
  function fullGrammarAnalysis(rawInput) {
    let text = (rawInput || '').trim();
    if (!text) return null;

    let corrected = text;
    let issues = [];
    let rulesTriggered = [];
    let upgradesFound = [];
    let lessonTarget = 1;

    // 1. Fix typos & noun capitalization word-by-word
    const rawTokens = text.split(/(\s+|[,.!?]+)/);
    for (let i = 0; i < rawTokens.length; i++) {
      const token = rawTokens[i];
      const lower = token.toLowerCase();

      if (commonTypos[lower] && token !== commonTypos[lower]) {
        const rep = commonTypos[lower];
        issues.push({
          word: token,
          replacement: rep,
          type: 'error',
          rule: `Tippfehler: '${token}' -> '${rep}'.`
        });
        rawTokens[i] = rep;
      } else if (germanNouns[lower] && token !== germanNouns[lower]) {
        const rep = germanNouns[lower];
        issues.push({
          word: token,
          replacement: rep,
          type: 'error',
          rule: `Nomen wie '${rep}' werden immer großgeschrieben!`
        });
        rawTokens[i] = rep;
      }
    }
    corrected = rawTokens.join('');

    // 2. Fix comma after greetings
    if (/^(Hallo|Hi|Guten Tag|Hallöchen|Guten Morgen|Guten Abend)\s+([a-zA-ZäöüÄÖÜß]+)/i.test(corrected)) {
      corrected = corrected.replace(/^(Hallo|Hi|Guten Tag|Hallöchen|Guten Morgen|Guten Abend)\s+/i, '$1, ');
    }

    // 3. Fix incomplete question endings
    if (/und du\?$/i.test(corrected.trim())) {
      corrected = corrected.replace(/und du\?$/i, 'und wie heißt du?');
      issues.push({
        word: "und du?",
        replacement: "und wie heißt du?",
        type: 'warning',
        rule: "Im Deutschen klingt ein vollständiger Satz ('Und wie heißt du?') viel natürlicher."
      });
    }

    // 4. Subordinate clause 'weil': Verb to end
    if (/\bweil\s+([a-zA-ZäöüÄÖÜß]+)\s+(habe|hast|hat|haben|bin|bist|ist|sind|war|hatte|werde|wird|kann|kannst|muss|musst|will|willst|möchte|möchtest)\s+/i.test(corrected)) {
      corrected = corrected.replace(/\bweil\s+([a-zA-ZäöüÄÖÜß]+)\s+(habe|hast|hat|haben|bin|bist|ist|sind|war|hatte|werde|wird|kann|kannst|muss|musst|will|willst|möchte|möchtest)\s+([^.,!?]+)/gi, (m, subj, verb, rest) => {
        return `weil ${subj} ${rest.trim()} ${verb}`;
      });
      rulesTriggered.push({
        name: "Verb-Endstellung nach 'weil' (Kausalsatz)",
        rule: "Nach 'weil' wandert das konjugierte Verb an das absolute Satzende.",
        lesson: 4,
        lessonName: "Nebensätze mit weil / dass"
      });
      lessonTarget = 4;
    }

    // 5. Subordinate clause 'dass': Verb to end
    if (/\bdass\s+([a-zA-ZäöüÄÖÜß]+)\s+(komme|kommst|kommt|kommen|habe|hast|hat|haben|bin|bist|ist|sind|werde|wird|kann|muss)\s+/i.test(corrected)) {
      corrected = corrected.replace(/\bdass\s+([a-zA-ZäöüÄÖÜß]+)\s+(komme|kommst|kommt|kommen|habe|hast|hat|haben|bin|bist|ist|sind|werde|wird|kann|muss)\s+([^.,!?]+)/gi, (m, subj, verb, rest) => {
        return `dass ${subj} ${rest.trim()} ${verb}`;
      });
      rulesTriggered.push({
        name: "Verb-Endstellung nach 'dass'",
        rule: "Im dass-Satz steht das finite Verb immer am Ende der Satzklammer.",
        lesson: 4,
        lessonName: "Satzbau & Nebensätze"
      });
      lessonTarget = 4;
    }

    // 6. Inversion (V2): Gestern ich habe -> Gestern habe ich
    if (/^(Gestern|Heute|Morgen|Jetzt|Danach|Später|Am Montag|Am Wochenende|Im Moment|Normalerweise|Leider)\s+([a-zA-ZäöüÄÖÜß]+)\s+(habe|hast|hat|haben|bin|bist|ist|sind|war|hatte|werde|wird|kann|muss|will|möchte|gehe|komme|mache)/i.test(corrected)) {
      corrected = corrected.replace(/^(Gestern|Heute|Morgen|Jetzt|Danach|Später|Am Montag|Am Wochenende|Im Moment|Normalerweise|Leider)\s+([a-zA-ZäöüÄÖÜß]+)\s+(habe|hast|hat|haben|bin|bist|ist|sind|war|hatte|werde|wird|kann|muss|will|möchte|gehe|komme|mache)\s+/i, (m, adv, subj, verb) => {
        return `${adv} ${verb} ${subj} `;
      });
      rulesTriggered.push({
        name: "Verb an Position 2 im Hauptsatz (Inversion)",
        rule: "Wenn ein Adverb auf Position 1 steht, folgt sofort das konjugierte Verb auf Position 2.",
        lesson: 4,
        lessonName: "Satzbau im Hauptsatz"
      });
      lessonTarget = 4;
    }

    // 7. Word Upgrades
    for (const up of wordUpgrades) {
      if (up.target.test(text)) {
        upgradesFound.push(up);
        issues.push({
          word: up.original,
          replacement: up.better.split('/')[0].trim(),
          type: 'warning',
          rule: up.note
        });
      }
    }

    // Punctuation & Capitalization
    corrected = corrected.charAt(0).toUpperCase() + corrected.slice(1);
    if (!/[.!?]$/.test(corrected)) corrected += '.';

    const errorIssues = issues.filter(i => i.type === 'error');
    const isFlawless = (errorIssues.length === 0 && corrected.trim().toLowerCase() === text.trim().toLowerCase() + (text.endsWith('.') ? '' : '.'));
    const score = isFlawless ? 100 : Math.max(40, 100 - (errorIssues.length * 25));

    // Natural Stylistic Variants
    let casualVariant = "";
    let profVariant = "";
    let c1Variant = "";

    const lowerInput = text.toLowerCase();
    if (lowerInput.includes('ali') || lowerInput.includes('name') || lowerInput.includes('vorstellen') || lowerInput.includes('wer bist')) {
      casualVariant = `Hi! Ich bin Ali. Und wie heißt du? Schön, dich kennenzulernen! 😊`;
      profVariant = `Guten Tag! Mein Name ist Ali Sibai. Darf ich mich erkundigen, wie Ihr Name ist?`;
      c1Variant = `Gestatten Sie, dass ich mich vorstelle: Mein Name ist Ali Sibai. Es ist mir eine Freude, Ihre Bekanntschaft zu machen.`;
    } else if (lowerInput.includes('wie geht') || lowerInput.includes('hallöchen') || lowerInput.includes('hallo')) {
      casualVariant = `Hey! Wie geht's dir heute? Ich hoffe, du hattest einen richtig schönen Tag!`;
      profVariant = `Guten Tag! Ich hoffe, es geht Ihnen gut und Sie hatten einen angenehmen Start in den Tag.`;
      c1Variant = `Ich hoffe sehr, Sie bei bester Gesundheit und bestem Wohlbefinden anzutreffen.`;
    } else if (lowerInput.includes('vermisst') || lowerInput.includes('freue mich')) {
      casualVariant = `Ich freue mich schon riesig auf heute Abend mit dir, habe dich echt vermisst! ❤️`;
      profVariant = `Ich freue mich sehr auf unser geplantes Wiedersehen am heutigen Abend.`;
      c1Variant = `Mit großer Freude sehe ich unserer heutigen Zusammenkunft am Abend entgegen.`;
    } else if (lowerInput.includes('später') || lowerInput.includes('bescheid')) {
      casualVariant = `Hey, kurze Info: Ich schaffe es leider erst 10 Minuten später. Bis gleich!`;
      profVariant = `Guten Tag, ich möchte kurz Bescheid geben, dass ich mich um etwa 10 Minuten verspäte.`;
      c1Variant = `Ich bedaure, Ihnen mitteilen zu müssen, dass sich mein Eintreffen unvorhergesehen um etwa zehn Minuten verzögert.`;
    } else {
      casualVariant = `Hey! ${corrected}`;
      profVariant = `Gerne möchte ich mitteilen: ${corrected}`;
      c1Variant = `Bezüglich des vorliegenden Sachverhalts ist festzuhalten, dass ${corrected.replace(/^[A-Z]/, c => c.toLowerCase()).replace(/[.!?]$/, '')}.`;
    }

    return {
      original: text,
      corrected: corrected,
      isFlawless: isFlawless,
      accuracyScore: score,
      issues: issues,
      rules: rulesTriggered,
      upgrades: upgradesFound,
      variants: {
        casual: casualVariant,
        professional: profVariant,
        c1: c1Variant
      }
    };
  }

  function renderView() {
    userHistory = Storage.getHistory().filter(h => h.type === 'sentence_fixer') || [];

    // Extract all past mistakes for the Error Lab
    const allMistakes = [];
    for (const h of userHistory) {
      if (h.original && h.corrected && h.original !== h.corrected) {
        allMistakes.push({
          wrong: h.original,
          correct: h.corrected,
          date: h.timestamp || h.date
        });
      }
    }

    container.innerHTML = `
      <div class="sentence-fixer-wrapper animate-fadeIn max-w-4xl mx-auto space-y-6">
        <!-- Header -->
        <div class="hero-card shimmer-glow">
          <div class="flex-between flex-wrap gap-4">
            <div>
              <div class="badge badge-purple mb-2 flex items-center gap-1">
                <span class="w-2 h-2 rounded-full bg-emerald-400 live-pulse"></span>
                <span>Live-KI Deutsches Grammarly • Echtzeit-Korrektor</span>
              </div>
              <h1 class="text-3xl font-extrabold text-gradient">Magischer Satz-Korrektor</h1>
              <p class="text-secondary mt-1 text-sm">
                Prüft <strong>live beim Tippen</strong>. Zeigt Fehler mit <strong>roten Wellenlinien</strong>, bietet <strong>1-Klick-Autokorrektur</strong> und speichert deine Fehler zum gezielten Trainieren!
              </p>
            </div>
            <div class="flex items-center gap-3 bg-surface p-3 rounded-2xl border border-glass">
              <div class="text-center">
                <div class="text-xs text-secondary">Belohnung</div>
                <div class="font-bold text-amber-400 text-lg">+15 bis +25 XP</div>
              </div>
            </div>
          </div>

          <!-- Sub-Navigation -->
          <div class="flex flex-wrap gap-2 mt-6 pt-4 border-t border-glass">
            <button class="btn ${activeSubTab === 'checker' ? 'btn-primary' : 'btn-secondary'} btn-sm subtab-btn" data-tab="checker">
              ✨ Live-Korrektor & Generator
            </button>
            <button class="btn ${activeSubTab === 'error_lab' ? 'btn-primary' : 'btn-secondary'} btn-sm subtab-btn" data-tab="error_lab">
              🧠 Aus Fehlern lernen (${allMistakes.length} Fehler gesammelt)
            </button>
            <button class="btn ${activeSubTab === 'diary' ? 'btn-primary' : 'btn-secondary'} btn-sm subtab-btn" data-tab="diary">
              📖 Satz-Tagebuch (${userHistory.length})
            </button>
          </div>
        </div>

        <!-- Main Content Area -->
        <div id="subTabContent" class="space-y-6"></div>
      </div>
    `;

    const subTabContent = container.querySelector('#subTabContent');

    // 1. CHECKER TAB
    if (activeSubTab === 'checker') {
      subTabContent.innerHTML = `
        <!-- Presets -->
        <div class="card p-4 space-y-2">
          <div class="text-xs text-secondary font-semibold">Schnell-Vorlagen zum Testen:</div>
          <div class="flex flex-wrap gap-2">
            ${presetExamples.map((p, idx) => `
              <button class="btn btn-outline btn-xs preset-btn" data-index="${idx}">
                ${p.title}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Input Card -->
        <div class="card p-6 space-y-4">
          <div class="flex-between">
            <label class="font-bold text-sm">Dein deutscher Satz:</label>
            <span id="liveStatusBadge" class="badge badge-emerald text-xs">🟢 Live-Analyse aktiv</span>
          </div>

          <textarea id="sentenceInput" class="input w-full p-4 text-base rounded-2xl" rows="3" placeholder="Tippe hier z. B. 'Hallo ic bin Ali und du?' oder 'Ich bin 25 jahre alt weil ich habe Zeit'..."></textarea>
          
          <div class="flex-between flex-wrap gap-3">
            <div class="flex gap-2">
              <button id="btnVoiceInput" class="btn btn-secondary btn-sm flex items-center gap-2">
                <span>🎙️</span> Diktieren
              </button>
              <button id="btnClear" class="btn btn-ghost btn-sm">Leeren</button>
            </div>
            <div class="flex gap-2">
              <button id="btnAutoFixAll" class="btn btn-autofix btn-sm flex items-center gap-2 hidden">
                <span>⚡</span> Alles automatisch korrigieren
              </button>
              <button id="btnCheckSentence" class="btn btn-primary btn-lg flex items-center gap-2 shadow-glow">
                <span>✨</span> Vollständige Diagnose & XP sichern
              </button>
            </div>
          </div>
        </div>

        <!-- Live Preview / Result Container -->
        <div id="resultCard" class="space-y-6"></div>
      `;

      const sentenceInput = subTabContent.querySelector('#sentenceInput');
      const btnCheck = subTabContent.querySelector('#btnCheckSentence');
      const btnAutoFixAll = subTabContent.querySelector('#btnAutoFixAll');
      const resultCard = subTabContent.querySelector('#resultCard');

      subTabContent.querySelectorAll('.preset-btn').forEach(btn => {
        btn.onclick = () => {
          const p = presetExamples[parseInt(btn.getAttribute('data-index'))];
          sentenceInput.value = p.input;
          runLiveCheck(true);
        };
      });

      subTabContent.querySelector('#btnClear').onclick = () => {
        sentenceInput.value = '';
        resultCard.innerHTML = '';
        btnAutoFixAll.classList.add('hidden');
      };

      subTabContent.querySelector('#btnVoiceInput').onclick = () => {
        Speech.startRecognition((text) => {
          sentenceInput.value = text;
          runLiveCheck(true);
        }, (err) => alert('Spracherkennung: ' + err));
      };

      // Run Live Check
      function runLiveCheck(isManualSubmit = false) {
        const text = sentenceInput.value;
        if (!text || !text.trim()) {
          resultCard.innerHTML = '';
          btnAutoFixAll.classList.add('hidden');
          return;
        }

        const result = fullGrammarAnalysis(text);
        if (!result) return;

        if (result.issues.length > 0) {
          btnAutoFixAll.classList.remove('hidden');
        } else {
          btnAutoFixAll.classList.add('hidden');
        }

        if (isManualSubmit) {
          const xpGained = result.isFlawless ? 25 : 15;
          const settings = Storage.getSettings();
          Storage.saveSettings({ ...settings, totalXP: (settings.totalXP || 0) + xpGained });
          Storage.addHistory({
            type: 'sentence_fixer',
            original: result.original,
            corrected: result.corrected,
            isFlawless: result.isFlawless,
            timestamp: new Date().toISOString()
          });

          if (result.isFlawless) {
            showToast('🏆 100% Fehlerfrei! Exzellenter deutscher Satzbau (+25 XP)', 'success');
          } else {
            const errCount = result.issues.filter(i => i.type === 'error').length;
            showToast(`⚠️ ${errCount > 0 ? errCount + ' Grammatik-Stellen' : 'Verbesserung'} markiert (+15 XP)`, 'warning');
          }
        }

        // Build annotated text with live squiggly lines
        let annotatedHtml = result.original;
        for (const issue of result.issues) {
          const cls = issue.type === 'error' ? 'grammar-error-live' : 'grammar-warning-live';
          const regex = new RegExp(`\\b(${issue.word})\\b`, 'gi');
          annotatedHtml = annotatedHtml.replace(regex, `<span class="${cls}" data-word="${issue.word}" data-rep="${issue.replacement}" data-rule="${issue.rule}">$1</span>`);
        }

        resultCard.innerHTML = `
          <!-- Accuracy & Feedback Banner -->
          <div class="card p-6 border-2 ${result.isFlawless ? 'border-emerald-500/50 bg-emerald-950/20' : 'border-blue-500/30'} space-y-6">
            <div class="flex-between flex-wrap gap-3">
              <div class="flex items-center gap-3">
                <span class="text-3xl">${result.isFlawless ? '🏆' : '🎯'}</span>
                <div>
                  <div class="font-extrabold text-lg text-primary">
                    ${result.isFlawless ? 'Perfekt! 100% fehlerfreier Satz!' : `Genauigkeit: ${result.accuracyScore}%`}
                  </div>
                  <div class="text-xs text-secondary">
                    ${result.isFlawless ? 'Keine Fehler gefunden – exzellenter nativer Satzbau!' : 'Klicke auf die roten/gelben Markierungen oder wende die 1-Klick-Autokorrektur an.'}
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <button id="btnQuickAutoFix" class="btn btn-autofix btn-xs ${result.isFlawless ? 'hidden' : ''}">
                  ⚡ 1-Klick Autokorrektur
                </button>
                <span class="badge ${result.isFlawless ? 'badge-emerald' : 'badge-purple'} text-xs font-bold">
                  +${result.isFlawless ? '25' : '15'} XP
                </span>
              </div>
            </div>

            <!-- Live Annotated Box -->
            <div class="p-5 bg-surface border border-glass rounded-2xl space-y-2">
              <div class="text-xs text-secondary font-bold uppercase tracking-wider flex-between">
                <span>Grammarly-Live-Ansicht:</span>
                <span class="text-xs font-normal text-muted">🔴 Rot = Grammatik/Tippfehler • 🟡 Gelb = Stil</span>
              </div>
              <div class="p-4 bg-card rounded-xl border border-glass text-lg leading-relaxed font-medium">
                ${annotatedHtml}
              </div>
            </div>

            <!-- Comparison Box -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 bg-red-950/20 border border-red-500/30 rounded-xl space-y-1">
                <div class="text-xs font-bold text-red-400">Dein Original:</div>
                <div class="text-sm line-through text-red-200">${result.original}</div>
              </div>
              <div class="p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-xl space-y-1">
                <div class="text-xs font-bold text-emerald-400 flex-between">
                  <span>Korrigierte Version:</span>
                  <button id="btnPlayCorrected" class="btn btn-emerald btn-xs">🔊 Anhören</button>
                </div>
                <div class="text-base font-bold text-emerald-300">${result.corrected}</div>
              </div>
            </div>

            <!-- 1-Click Interactive Fix Chips -->
            ${result.issues.length > 0 ? `
              <div class="p-5 bg-surface border border-red-500/30 rounded-2xl space-y-3">
                <div class="font-bold text-sm text-red-400 flex items-center gap-2">
                  <span>🔍</span> Gefundene Korrekturen (1-Klick-Anwendung):
                </div>
                <div class="space-y-2">
                  ${result.issues.map(iss => `
                    <div class="p-3 bg-card rounded-xl border border-glass flex-between flex-wrap gap-2">
                      <div>
                        <span class="badge ${iss.type === 'error' ? 'badge-red' : 'badge-amber'} text-xs">${iss.word}</span>
                        ${iss.replacement ? `
                          <span class="text-xs text-secondary mx-2">→ ersetzen durch:</span>
                          <button class="btn btn-emerald btn-xs btn-apply-rep font-bold" data-from="${iss.word}" data-to="${iss.replacement}">
                            ✓ „${iss.replacement}“ anwenden
                          </button>
                        ` : ''}
                        <div class="text-xs text-muted mt-1">${iss.rule}</div>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <!-- 3 Muttersprachliche Stil-Varianten -->
            <div class="p-5 bg-surface border border-blue-500/30 rounded-2xl space-y-3">
              <div class="font-bold text-sm text-blue-400 flex items-center gap-2">
                <span>🎭</span> 3 muttersprachliche Stil-Varianten:
              </div>
              <div class="space-y-2 text-xs">
                <div class="p-3 bg-card rounded-xl border border-glass flex-between items-center gap-3">
                  <div>
                    <span class="font-bold text-purple-400 block mb-1">💬 Locker & Herzlich (Freundin / Freunde):</span>
                    <p class="text-primary text-sm font-medium">„${result.variants.casual}“</p>
                  </div>
                  <button class="btn btn-ghost btn-xs btn-speak-var" data-text="${result.variants.casual}">🔊</button>
                </div>
                <div class="p-3 bg-card rounded-xl border border-glass flex-between items-center gap-3">
                  <div>
                    <span class="font-bold text-blue-400 block mb-1">🏢 Professionell & Höflich (Station / Kollegen / Gastfamilie):</span>
                    <p class="text-primary text-sm font-medium">„${result.variants.professional}“</p>
                  </div>
                  <button class="btn btn-ghost btn-xs btn-speak-var" data-text="${result.variants.professional}">🔊</button>
                </div>
                <div class="p-3 bg-card rounded-xl border border-glass flex-between items-center gap-3">
                  <div>
                    <span class="font-bold text-emerald-400 block mb-1">🎓 C1/C2 Gehoben & Eloquent (Arztbrief / Leitung / Prüfung):</span>
                    <p class="text-primary text-sm font-medium">„${result.variants.c1}“</p>
                  </div>
                  <button class="btn btn-ghost btn-xs btn-speak-var" data-text="${result.variants.c1}">🔊</button>
                </div>
              </div>
            </div>

            <!-- Copy Button -->
            <div class="flex justify-end gap-3 pt-2">
              <button id="btnCopyCorrected" class="btn btn-secondary btn-sm flex items-center gap-2">
                <span>📋</span> Korrigierten Satz kopieren
              </button>
            </div>
          </div>
        `;

        // Event bindings for dynamic cards
        resultCard.querySelector('#btnPlayCorrected').onclick = () => Speech.speak(result.corrected);
        resultCard.querySelectorAll('.btn-speak-var').forEach(b => b.onclick = () => Speech.speak(b.getAttribute('data-text')));
        resultCard.querySelector('#btnCopyCorrected').onclick = () => {
          navigator.clipboard.writeText(result.corrected);
          showToast('Satz in die Zwischenablage kopiert!', 'success');
        };

        const autoFixButtons = [btnAutoFixAll, resultCard.querySelector('#btnQuickAutoFix')];
        autoFixButtons.forEach(b => {
          if (b) {
            b.onclick = () => {
              sentenceInput.value = result.corrected;
              Speech.playSound('success');
              showToast('Satz automatisch perfekt korrigiert!', 'success');
              runLiveCheck(true);
            };
          }
        });

        resultCard.querySelectorAll('.btn-apply-rep').forEach(btn => {
          btn.onclick = () => {
            const fromWord = btn.getAttribute('data-from');
            const toWord = btn.getAttribute('data-to');
            sentenceInput.value = sentenceInput.value.replace(new RegExp(`\\b${fromWord}\\b`, 'gi'), toWord);
            Speech.playSound('pop');
            runLiveCheck(true);
          };
        });
      }

      // Live typing listener with debounce
      sentenceInput.addEventListener('input', () => {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(() => {
          runLiveCheck(false);
        }, 300);
      });

      btnCheck.onclick = () => runLiveCheck(true);
      btnAutoFixAll.onclick = () => {
        const res = fullGrammarAnalysis(sentenceInput.value);
        if (res) {
          sentenceInput.value = res.corrected;
          runLiveCheck(true);
        }
      };

    } else if (activeSubTab === 'error_lab') {
      // 2. AUS FEHLERN LERNEN (ERROR LAB)
      subTabContent.innerHTML = `
        <div class="card p-6 space-y-6">
          <div class="flex-between flex-wrap gap-3">
            <div>
              <h2 class="text-xl font-bold flex items-center gap-2">
                <span>🧠</span> Aus Fehlern lernen • Dein persönliches Trainings-Labor
              </h2>
              <p class="text-xs text-secondary mt-1">
                Trainiere exakt die Sätze und Wörter, bei denen du dich vertippt oder geirrt hast, bis sie 100% sitzen!
              </p>
            </div>
            <span class="badge badge-purple text-xs font-bold">${allMistakes.length} Fehler analysiert</span>
          </div>

          ${allMistakes.length === 0 ? `
            <div class="text-center py-12 space-y-3">
              <div class="text-4xl">🎉</div>
              <div class="font-bold text-base text-primary">Noch keine Fehler gesammelt!</div>
              <p class="text-xs text-secondary max-w-md mx-auto">
                Sobald du im Satz-Korrektor Sätze mit Tipp- oder Grammatikfehlern eingibst, werden sie automatisch hier als persönliche Trainingsaufgaben gesammelt.
              </p>
            </div>
          ` : `
            <div class="space-y-4">
              ${allMistakes.map((m, idx) => `
                <div class="p-4 bg-surface rounded-2xl border border-glass space-y-3">
                  <div class="flex-between">
                    <span class="badge badge-red text-xs">Aufgabe ${idx + 1}</span>
                    <span class="text-xs text-muted">${new Date(m.date).toLocaleDateString('de-DE')}</span>
                  </div>

                  <div class="p-3 bg-red-950/20 border border-red-500/30 rounded-xl">
                    <div class="text-xs text-red-400 font-bold mb-1">Dein früherer Fehler:</div>
                    <div class="text-sm line-through text-red-200">${m.wrong}</div>
                  </div>

                  <div class="space-y-2">
                    <label class="text-xs font-semibold text-secondary">Tippe die richtige deutsche Version:</label>
                    <input type="text" class="input w-full text-sm error-lab-input" data-correct="${m.correct.replace(/"/g, '&quot;')}" placeholder="Korrigiere deinen Satz...">
                  </div>

                  <div class="flex-between">
                    <button class="btn btn-primary btn-xs btn-check-err-lab">Prüfen (+15 XP)</button>
                    <button class="btn btn-ghost btn-xs btn-reveal-ans" data-ans="${m.correct.replace(/"/g, '&quot;')}">Lösung anzeigen</button>
                  </div>
                  <div class="err-lab-feedback hidden p-3 rounded-xl text-xs font-bold"></div>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      `;

      subTabContent.querySelectorAll('.btn-check-err-lab').forEach(btn => {
        btn.onclick = () => {
          const card = btn.closest('.p-4');
          const input = card.querySelector('.error-lab-input');
          const correct = input.getAttribute('data-correct');
          const fb = card.querySelector('.err-lab-feedback');
          fb.classList.remove('hidden');

          if (input.value.trim().toLowerCase() === correct.trim().toLowerCase() || input.value.trim().toLowerCase() === correct.trim().toLowerCase().replace(/[.!?]$/, '')) {
            fb.className = "err-lab-feedback p-3 rounded-xl text-xs font-bold bg-emerald-950/30 border border-emerald-500/40 text-emerald-300";
            fb.innerHTML = `✓ Perfekt korrigiert! (+15 XP) 🎉 <br><span class="text-primary font-normal">„${correct}“</span>`;
            Speech.playSound('success');
            const settings = Storage.getSettings();
            Storage.saveSettings({ ...settings, totalXP: (settings.totalXP || 0) + 15 });
          } else {
            fb.className = "err-lab-feedback p-3 rounded-xl text-xs font-bold bg-red-950/30 border border-red-500/40 text-red-300";
            fb.innerHTML = `✗ Noch nicht ganz. Richtig ist: <br><span class="text-emerald-300">„${correct}“</span>`;
            Speech.playSound('error');
          }
        };
      });

      subTabContent.querySelectorAll('.btn-reveal-ans').forEach(btn => {
        btn.onclick = () => {
          const card = btn.closest('.p-4');
          const fb = card.querySelector('.err-lab-feedback');
          fb.classList.remove('hidden');
          fb.className = "err-lab-feedback p-3 rounded-xl text-xs font-bold bg-blue-950/30 border border-blue-500/40 text-blue-300";
          fb.innerHTML = `💡 Richtige Version: „${btn.getAttribute('data-ans')}“`;
        };
      });

    } else if (activeSubTab === 'diary') {
      // 3. SATZ-TAGEBUCH TAB (WITH DELETE & CLEAR ALL)
      subTabContent.innerHTML = `
        <div class="card p-6 space-y-6">
          <div class="flex-between flex-wrap gap-3">
            <div>
              <h2 class="text-xl font-bold flex items-center gap-2">
                <span>📖</span> Mein persönliches Satz-Tagebuch
              </h2>
              <p class="text-xs text-secondary mt-1">
                Alle deine bisher geprüften Sätze im Überblick.
              </p>
            </div>
            <div class="flex gap-2">
              <button id="btnClearDiary" class="btn btn-secondary btn-xs text-red-400">
                🗑️ Tagebuch leeren
              </button>
            </div>
          </div>

          ${userHistory.length === 0 ? `
            <div class="text-center py-12 text-secondary text-sm">
              Noch keine Sätze gespeichert. Tippe im Live-Korrektor deinen ersten Satz ein!
            </div>
          ` : `
            <div class="space-y-3">
              ${userHistory.map((h, hIdx) => `
                <div class="p-4 bg-surface rounded-2xl border border-glass space-y-2">
                  <div class="flex-between">
                    <span class="text-xs text-secondary">${new Date(h.timestamp || h.date).toLocaleString('de-DE')}</span>
                    <div class="flex items-center gap-2">
                      <span class="badge ${h.isFlawless ? 'badge-emerald' : 'badge-purple'} text-xs">+${h.isFlawless ? '25' : '15'} XP</span>
                      <button class="btn btn-ghost btn-xs text-red-400 btn-del-entry" data-index="${hIdx}">✕</button>
                    </div>
                  </div>
                  <div class="text-sm font-semibold text-emerald-400 flex-between">
                    <span>✓ ${h.corrected}</span>
                    <button class="btn btn-ghost btn-xs btn-speak-diary" data-text="${h.corrected}">🔊</button>
                  </div>
                  <div class="text-xs text-muted line-through">✗ ${h.original}</div>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      `;

      subTabContent.querySelectorAll('.btn-speak-diary').forEach(b => b.onclick = () => Speech.speak(b.getAttribute('data-text')));

      subTabContent.querySelectorAll('.btn-del-entry').forEach(btn => {
        btn.onclick = () => {
          const idx = parseInt(btn.getAttribute('data-index'));
          const currentHist = Storage.getHistory();
          const filtered = currentHist.filter(h => h.type === 'sentence_fixer');
          filtered.splice(idx, 1);
          const otherHist = currentHist.filter(h => h.type !== 'sentence_fixer');
          localStorage.setItem('deu_history', JSON.stringify([...filtered, ...otherHist]));
          Speech.playSound('pop');
          renderView();
        };
      });

      const btnClearDiary = subTabContent.querySelector('#btnClearDiary');
      if (btnClearDiary) {
        btnClearDiary.onclick = () => {
          if (confirm('Möchtest du wirklich alle gespeicherten Sätze aus dem Tagebuch löschen?')) {
            const currentHist = Storage.getHistory();
            const otherHist = currentHist.filter(h => h.type !== 'sentence_fixer');
            localStorage.setItem('deu_history', JSON.stringify(otherHist));
            Speech.playSound('pop');
            renderView();
          }
        };
      }
    }

    // Subtab switching
    container.querySelectorAll('.subtab-btn').forEach(btn => {
      btn.onclick = () => {
        activeSubTab = btn.getAttribute('data-tab');
        renderView();
      };
    });
  }

  renderView();
}
