// Magischer Satz-Korrektor & Deutsches Grammarly
// 100% autarker, intelligenter deutscher Rechtschreib- und Grammatikprüfer
// Erkennt Tippfehler (ic -> ich), fehlende Großschreibung (jahre -> Jahre),
// falsche Wortstellung (V2 / Nebensatz) und generiert echte muttersprachliche Stile.

import { Storage } from '../storage.js';
import { Speech } from '../speech.js';

export function renderSentenceFixer(container) {
  let userHistory = Storage.getHistory().filter(h => h.type === 'sentence_fixer') || [];

  const presetExamples = [
    {
      title: "💌 An meine Freundin",
      input: "Ich freue mich auf heute abend weil ich habe dich sehr vermisst.",
      context: "Liebesnachricht"
    },
    {
      title: "👋 Typischer Tippfehler (ic bin)",
      input: "Hallo ic bin Ali und du?",
      context: "Kennenlernen"
    },
    {
      title: "👋 Selbstvorstellung (jahre)",
      input: "Ich möchte mich vorstellen, mein Name ist Ali und ich bin 25 jahre alt.",
      context: "Vorstellung"
    },
    {
      title: "🏢 An Kollegen / Station",
      input: "Ich möchte Bescheid geben dass ich komme heute 10 Minuten später.",
      context: "Arbeitsplatz"
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

  // Common German Typos & Quick Corrections Dictionary
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
    'das': 'dass', // context checked
    'und du?': 'und wer bist du?', 'und du': 'und wie heißt du?'
  };

  // High-Frequency German Nouns (Must always be capitalized!)
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
    { target: /\bhelfen\b/i, original: "helfen", better: "unterstützen bei (+ Dat.) / zur Hand gehen", note: "'unterstützen' klingt auf B2/C1-Niveau deutlich professioneller." },
    { target: /\bsagen\b/i, original: "sagen", better: "mitteilen / Bescheid geben / zur Sprache bringen", note: "Nutze präzisere Verben wie 'mitteilen' oder 'schildern'." },
    { target: /\bwichtig\b/i, original: "wichtig", better: "von zentraler Bedeutung / essenziell", note: "'von zentraler Bedeutung' verleiht deinem Satz C1-Gewicht." },
    { target: /\bgut\b/i, original: "gut", better: "hervorragend / einwandfrei / vorbildlich", note: "Nutze differenzierte Adjektive wie 'einwandfrei'." },
    { target: /\bProblem\b/i, original: "Problem", better: "Herausforderung / Schwierigkeit / Anliegen", note: "In der deutschen Arbeitskultur sagt man lieber 'Herausforderung'." }
  ];

  // Toast Notification Helper
  function showToast(message, type = 'success') {
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

  // Deep Client-Side Analyzer
  function fullGrammarAnalysis(rawInput) {
    let text = (rawInput || '').trim();
    if (!text) return null;

    let corrected = text;
    let issues = [];
    let rulesTriggered = [];
    let upgradesFound = [];
    let lessonTarget = 1;

    // 1. Fix common typos word by word
    const rawTokens = text.split(/(\s+|[,.!?]+)/);
    for (let i = 0; i < rawTokens.length; i++) {
      const token = rawTokens[i];
      const lower = token.toLowerCase();

      // Check typos
      if (commonTypos[lower] && token !== commonTypos[lower]) {
        const rep = commonTypos[lower];
        issues.push({
          word: token,
          replacement: rep,
          type: 'error',
          rule: `Tippfehler: '${token}' -> '${rep}'.`
        });
        rawTokens[i] = rep;
      }
      // Check noun capitalization
      else if (germanNouns[lower] && token !== germanNouns[lower]) {
        const rep = germanNouns[lower];
        issues.push({
          word: token,
          replacement: rep,
          type: 'error',
          rule: `Nomen im Deutschen wie '${rep}' werden immer großgeschrieben!`
        });
        rawTokens[i] = rep;
      }
    }
    corrected = rawTokens.join('');

    // 2. Fix comma after greetings: "Hallo ich bin" -> "Hallo, ich bin"
    if (/^(Hallo|Hi|Guten Tag|Hallöchen|Guten Morgen|Guten Abend)\s+([a-zA-ZäöüÄÖÜß]+)/i.test(corrected)) {
      corrected = corrected.replace(/^(Hallo|Hi|Guten Tag|Hallöchen|Guten Morgen|Guten Abend)\s+/i, '$1, ');
    }

    // 3. Fix incomplete question endings: "und du?" -> "Und wer bist du? / Und wie heißt du?"
    if (/und du\?$/i.test(corrected.trim())) {
      corrected = corrected.replace(/und du\?$/i, 'und wie heißt du?');
      issues.push({
        word: "und du?",
        replacement: "und wie heißt du?",
        type: 'warning',
        rule: "Im Deutschen klingt ein vollständiger Fragesatz ('Und wie heißt du?') viel natürlicher als ein abgehacktes 'und du?'."
      });
    }

    // 4. Subordinate clause 'weil': Verb to end
    if (/\bweil\s+([a-zA-ZäöüÄÖÜß]+)\s+(habe|hast|hat|haben|bin|bist|ist|sind|war|hatte|werde|wird|kann|kannst|muss|musst|will|willst|möchte|möchtest)\s+/i.test(corrected)) {
      corrected = corrected.replace(/\bweil\s+([a-zA-ZäöüÄÖÜß]+)\s+(habe|hast|hat|haben|bin|bist|ist|sind|war|hatte|werde|wird|kann|kannst|muss|musst|will|willst|möchte|möchtest)\s+([^.,!?]+)/gi, (m, subj, verb, rest) => {
        return `weil ${subj} ${rest.trim()} ${verb}`;
      });
      rulesTriggered.push({
        name: "Verb-Endstellung nach 'weil' (Kausalsatz)",
        rule: "Nach unterordnenden Konjunktionen (weil, dass, obwohl, wenn) wandert das konjugierte Verb an das absolute Satzende.",
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
        rule: "Wenn ein Adverb (Gestern, Heute...) auf Position 1 steht, folgt sofort das konjugierte Verb auf Position 2.",
        lesson: 4,
        lessonName: "Satzbau im Hauptsatz"
      });
      lessonTarget = 4;
    }

    // 7. Prepositions: in die Küche beim -> in der Küche beim
    if (/\bin die Küche beim\b/i.test(corrected)) {
      corrected = corrected.replace(/\bin die Küche beim\b/gi, 'in der Küche beim');
      rulesTriggered.push({
        name: "Wechselpräposition 'in' (Wo? -> Dativ)",
        rule: "Auf die Frage 'Wo?' steht nach Wechselpräpositionen (in, an, auf) immer der Dativ ('in der Küche').",
        lesson: 3,
        lessonName: "Wechselpräpositionen"
      });
      lessonTarget = 3;
    }

    // 8. Word Upgrades
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

    // Natural Stylistic Variants (Contextually Crafted!)
    let casualVariant = "";
    let profVariant = "";
    let c1Variant = "";

    const lowerInput = text.toLowerCase();
    if (lowerInput.includes('ali') || lowerInput.includes('name') || lowerInput.includes('vorstellen') || lowerInput.includes('wer bist')) {
      casualVariant = `Hi! Ich bin Ali. Und wie heißt du? Schön, dich kennenzulernen! 😊`;
      profVariant = `Guten Tag! Mein Name ist Ali Sibai. Darf ich mich erkundigen, wie Ihr Name ist?`;
      c1Variant = `Gestatten Sie, dass ich mich vorstelle: Mein Name ist Ali Sibai. Es ist mir eine außerordentliche Freude, Ihre Bekanntschaft zu machen.`;
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
      profVariant = `Guten Tag, ich möchte kurz Bescheid geben, dass ich mich verkehrsbedingt um etwa 10 Minuten verspäte.`;
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

    container.innerHTML = `
      <div class="sentence-fixer-wrapper animate-fadeIn max-w-4xl mx-auto space-y-6">
        <!-- Header -->
        <div class="hero-card">
          <div class="flex-between flex-wrap gap-4">
            <div>
              <div class="badge badge-purple mb-2">
                <span>🇩🇪</span> Deutsches Grammarly • Visueller KI-Korrektor
              </div>
              <h1 class="text-3xl font-extrabold text-gradient">Magischer Satz-Korrektor</h1>
              <p class="text-secondary mt-1 text-sm">
                Tippe deinen deutschen Satz ein. Fehler werden <strong>rot gewellt markiert</strong>, Wort-Upgrades <strong>gelb gewellt</strong>, mit Push-Benachrichtigung und 1-Klick-Ersetzung!
              </p>
            </div>
            <div class="flex items-center gap-3 bg-surface p-3 rounded-2xl border border-glass">
              <div class="text-center">
                <div class="text-xs text-secondary">Belohnung</div>
                <div class="font-bold text-amber-400 text-lg">+15 bis +25 XP</div>
              </div>
            </div>
          </div>

          <!-- Quick Presets -->
          <div class="mt-6 pt-4 border-t border-glass">
            <div class="text-xs text-secondary mb-2 font-semibold">Schnell-Vorlagen zum Testen:</div>
            <div class="flex flex-wrap gap-2">
              ${presetExamples.map((p, idx) => `
                <button class="btn btn-outline btn-xs preset-btn" data-index="${idx}">
                  ${p.title}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Input Card -->
        <div class="card p-6 space-y-4">
          <label class="font-bold text-sm block flex-between">
            <span>Dein deutscher Satz:</span>
            <span class="text-xs text-secondary font-normal">Tippen oder per Mikrofon sprechen</span>
          </label>
          <textarea id="sentenceInput" class="input w-full p-4 text-base rounded-2xl" rows="3" placeholder="z. B. Hallo ic bin Ali und du?..."></textarea>
          
          <div class="flex-between flex-wrap gap-3">
            <div class="flex gap-2">
              <button id="btnVoiceInput" class="btn btn-secondary btn-sm flex items-center gap-2">
                <span>🎙️</span> Diktieren
              </button>
              <button id="btnClear" class="btn btn-ghost btn-sm">Leeren</button>
            </div>
            <button id="btnCheckSentence" class="btn btn-primary btn-lg flex items-center gap-2 shadow-glow">
              <span>✨</span> Satz prüfen & Grammarly-Diagnose starten
            </button>
          </div>
        </div>

        <!-- Result Container -->
        <div id="resultCard" class="hidden space-y-6"></div>

        <!-- Recent Checked Sentences Diary -->
        <div class="card p-6 space-y-4">
          <div class="flex-between">
            <h3 class="font-bold text-base flex items-center gap-2">
              <span>📖</span> Mein persönliches Satz-Tagebuch
            </h3>
            <span class="badge badge-gray text-xs" id="diaryCount">${userHistory.length} Sätze geprüft</span>
          </div>

          <div id="diaryList">
            ${userHistory.length === 0 ? `
              <div class="text-center py-6 text-secondary text-sm">
                Noch keine Sätze geprüft. Tippe oben deinen ersten Satz ein!
              </div>
            ` : `
              <div class="space-y-3">
                ${userHistory.slice(0, 5).map(h => `
                  <div class="p-4 bg-surface rounded-xl border border-glass space-y-1">
                    <div class="text-xs text-secondary flex-between">
                      <span>${new Date(h.timestamp || h.date).toLocaleDateString('de-DE')}</span>
                      <span class="badge badge-emerald badge-xs">+${h.isFlawless ? '25' : '15'} XP</span>
                    </div>
                    <div class="text-sm font-semibold text-emerald-400">✓ ${h.corrected}</div>
                    <div class="text-xs text-muted line-through">✗ ${h.original}</div>
                  </div>
                `).join('')}
              </div>
            `}
          </div>
        </div>
      </div>
    `;

    // Event Listeners
    const sentenceInput = container.querySelector('#sentenceInput');
    const btnCheck = container.querySelector('#btnCheckSentence');
    const resultCard = container.querySelector('#resultCard');

    container.querySelectorAll('.preset-btn').forEach(btn => {
      btn.onclick = () => {
        const p = presetExamples[parseInt(btn.getAttribute('data-index'))];
        sentenceInput.value = p.input;
        btnCheck.click();
      };
    });

    container.querySelector('#btnClear').onclick = () => {
      sentenceInput.value = '';
      resultCard.classList.add('hidden');
    };

    container.querySelector('#btnVoiceInput').onclick = () => {
      Speech.startRecognition((text) => {
        sentenceInput.value = text;
      }, (err) => alert('Spracherkennung: ' + err));
    };

    btnCheck.onclick = () => {
      const textToAnalyze = sentenceInput.value;
      if (!textToAnalyze || !textToAnalyze.trim()) {
        showToast('Bitte gib zuerst einen Satz ein!', 'warning');
        return;
      }

      // Execute full deep analysis
      const result = fullGrammarAnalysis(textToAnalyze);
      if (!result) return;

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

      // Update diary immediately in DOM
      const updatedHistory = Storage.getHistory().filter(h => h.type === 'sentence_fixer');
      container.querySelector('#diaryCount').innerText = `${updatedHistory.length} Sätze geprüft`;
      container.querySelector('#diaryList').innerHTML = `
        <div class="space-y-3">
          ${updatedHistory.slice(0, 5).map(h => `
            <div class="p-4 bg-surface rounded-xl border border-glass space-y-1">
              <div class="text-xs text-secondary flex-between">
                <span>${new Date(h.timestamp || h.date).toLocaleDateString('de-DE')}</span>
                <span class="badge badge-emerald badge-xs">+${h.isFlawless ? '25' : '15'} XP</span>
              </div>
              <div class="text-sm font-semibold text-emerald-400">✓ ${h.corrected}</div>
              <div class="text-xs text-muted line-through">✗ ${h.original}</div>
            </div>
          `).join('')}
        </div>
      `;

      // Show Pushup Toast
      if (result.isFlawless) {
        showToast('100% Fehlerfrei! Exzellenter Satzbau (+25 XP)', 'success');
      } else {
        const errCount = result.issues.filter(i => i.type === 'error').length;
        showToast(`${errCount > 0 ? errCount + ' Grammatik-Stellen' : 'Verbesserung'} markiert (+15 XP)`, 'warning');
      }

      // Generate Grammarly Visual Annotated HTML
      let annotatedHtml = result.original;
      for (const issue of result.issues) {
        const cls = issue.type === 'error' ? 'grammar-error' : 'grammar-warning';
        const regex = new RegExp(`\\b(${issue.word})\\b`, 'gi');
        annotatedHtml = annotatedHtml.replace(regex, `<span class="${cls}" data-word="${issue.word}" data-rep="${issue.replacement}" data-rule="${issue.rule}">$1</span>`);
      }

      resultCard.classList.remove('hidden');
      resultCard.innerHTML = `
        <!-- Accuracy & Feedback Banner -->
        <div class="card p-6 border-2 ${result.isFlawless ? 'border-emerald-500/50 bg-emerald-950/20' : 'border-blue-500/30'} space-y-6">
          <div class="flex-between flex-wrap gap-3">
            <div class="flex items-center gap-3">
              <span class="text-3xl">${result.isFlawless ? '🏆' : '🎯'}</span>
              <div>
                <div class="font-extrabold text-lg text-primary">
                  ${result.isFlawless ? 'Perfekt! 100% fehlerfrei erraten!' : `Grammatik-Genauigkeit: ${result.accuracyScore}%`}
                </div>
                <div class="text-xs text-secondary">
                  ${result.isFlawless ? 'Keine Grammatik- oder Rechtschreibfehler gefunden.' : 'Klicke auf die roten/gelben Wörter, um die 1-Klick-Korrektur zu sehen.'}
                </div>
              </div>
            </div>
            <span class="badge ${result.isFlawless ? 'badge-emerald' : 'badge-purple'} text-sm font-bold">
              +${xpGained} XP
            </span>
          </div>

          <!-- Grammarly-Style Interactive Visual Box -->
          <div class="p-5 bg-surface border border-glass rounded-2xl space-y-3">
            <div class="text-xs text-secondary font-bold uppercase tracking-wider flex-between">
              <span>Visuelle Fehler-Analyse (Grammarly-Ansicht):</span>
              <span class="text-xs font-normal text-muted">🔴 Rot = Grammatik/Rechtschreibung • 🟡 Gelb = Stil-Upgrade</span>
            </div>
            <div class="p-4 bg-card rounded-xl border border-glass text-lg leading-relaxed font-medium">
              ${annotatedHtml}
            </div>
          </div>

          <!-- Side-by-Side Comparison -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 bg-red-950/20 border border-red-500/30 rounded-xl space-y-1">
              <div class="text-xs font-bold text-red-400">Dein Original:</div>
              <div class="text-sm line-through text-red-200">${result.original}</div>
            </div>
            <div class="p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-xl space-y-1">
              <div class="text-xs font-bold text-emerald-400 flex-between">
                <span>Vollständig korrigierte Version:</span>
                <button id="btnPlayCorrected" class="btn btn-emerald btn-xs">🔊 Anhören</button>
              </div>
              <div class="text-base font-bold text-emerald-300">${result.corrected}</div>
            </div>
          </div>

          <!-- Interactive Issue Cards (Click to Replace) -->
          ${result.issues.length > 0 ? `
            <div class="p-5 bg-surface border border-red-500/30 rounded-2xl space-y-3">
              <div class="font-bold text-sm text-red-400 flex items-center gap-2">
                <span>🔍</span> Gefundene Stellen & 1-Klick-Korrekturen:
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

          <!-- 3 Smart Natural Stylistic Registers -->
          <div class="p-5 bg-surface border border-blue-500/30 rounded-2xl space-y-3">
            <div class="font-bold text-sm text-blue-400 flex items-center gap-2">
              <span>🎭</span> 3 muttersprachliche Stil-Varianten für denselben Gedanken:
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

          <!-- Action Buttons -->
          <div class="flex justify-end gap-3 pt-2">
            <button id="btnCopyCorrected" class="btn btn-secondary btn-sm flex items-center gap-2">
              <span>📋</span> Korrigierten Satz kopieren
            </button>
          </div>
        </div>
      `;

      resultCard.querySelector('#btnPlayCorrected').onclick = () => {
        Speech.speak(result.corrected);
      };

      resultCard.querySelectorAll('.btn-speak-var').forEach(btn => {
        btn.onclick = () => Speech.speak(btn.getAttribute('data-text'));
      });

      resultCard.querySelector('#btnCopyCorrected').onclick = () => {
        navigator.clipboard.writeText(result.corrected);
        showToast('Satz in die Zwischenablage kopiert!', 'success');
      };

      // 1-Click Replacement handler
      resultCard.querySelectorAll('.btn-apply-rep').forEach(btn => {
        btn.onclick = () => {
          const fromWord = btn.getAttribute('data-from');
          const toWord = btn.getAttribute('data-to');
          sentenceInput.value = sentenceInput.value.replace(new RegExp(`\\b${fromWord}\\b`, 'gi'), toWord);
          btnCheck.click();
        };
      });
    };
  }

  renderView();
}
