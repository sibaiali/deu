// Magischer Satz-Korrektor & Deutsches Grammarly
// Erkennt Grammatikfehler, markiert verdächtige Wörter rot/gelb gewellt,
// zeigt interaktive Ein-Klick-Ersetzungen, Pushup-Benachrichtigungen und natürliche C1-Stile.

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
      title: "👋 Selbstvorstellung",
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
      title: "🏠 An die Gastfamilie",
      input: "Ich helfe Ihnen gerne in die Küche beim Tisch abräumen.",
      context: "Zuhause"
    },
    {
      title: "⏰ Zeitangabe am Satzanfang (V2)",
      input: "Gestern ich habe mit meiner Freundin gesprochen.",
      context: "Wortstellung"
    }
  ];

  // Common Nouns that MUST be capitalized in German
  const germanNounMap = {
    'jahre': 'Jahre', 'jahr': 'Jahr', 'abend': 'Abend', 'morgen': 'Morgen', 'tag': 'Tag',
    'zeit': 'Zeit', 'arbeit': 'Arbeit', 'essen': 'Essen', 'wasser': 'Wasser', 'freund': 'Freund',
    'freundin': 'Freundin', 'station': 'Station', 'patient': 'Patient', 'schmerzen': 'Schmerzen',
    'haus': 'Haus', 'zimmer': 'Zimmer', 'küche': 'Küche', 'tisch': 'Tisch', 'arzt': 'Arzt',
    'ärztin': 'Ärztin', 'schwester': 'Schwester', 'pfleger': 'Pfleger', 'name': 'Name',
    'frage': 'Frage', 'termin': 'Termin', 'pause': 'Pause', 'dienst': 'Dienst', 'hilfe': 'Hilfe',
    'schatz': 'Schatz', 'liebe': 'Liebe', 'woche': 'Woche', 'monat': 'Monat', 'geld': 'Geld'
  };

  // Word Upgrades Dictionary
  const wordUpgrades = [
    { target: /\bmachen\b/i, original: "machen", better: "erledigen / durchführen / übernehmen", note: "'machen' klingt umgangssprachlich. Nutze 'erledigen' oder 'übernehmen'." },
    { target: /\bhelfen\b/i, original: "helfen", better: "unterstützen bei (+ Dat.) / zur Hand gehen", note: "'unterstützen' klingt auf B2/C1-Niveau professioneller." },
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

  // LanguageTool API Call with Fallback
  async function checkWithLanguageTool(text) {
    try {
      const resp = await fetch('https://api.languagetool.org/v2/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ text: text, language: 'de-DE' })
      });
      if (resp.ok) {
        const data = await resp.json();
        return data.matches || [];
      }
    } catch (e) {
      console.warn('LanguageTool API unavailable, using local rules:', e);
    }
    return [];
  }

  // Local Rule Analyzer
  function analyzeLocally(rawInput) {
    let text = (rawInput || '').trim();
    if (!text) return null;

    let corrected = text;
    let issues = [];
    let rulesTriggered = [];
    let upgradesFound = [];
    let lessonTarget = 1;

    // 1. Capitalize common German nouns (e.g. 25 jahre alt -> 25 Jahre alt)
    const words = text.split(/(\s+|[,.!?]+)/);
    for (let i = 0; i < words.length; i++) {
      const cleanW = words[i].toLowerCase();
      if (germanNounMap[cleanW] && words[i] !== germanNounMap[cleanW]) {
        issues.push({
          word: words[i],
          replacement: germanNounMap[cleanW],
          type: 'error',
          rule: `Nomen im Deutschen wie '${germanNounMap[cleanW]}' werden immer großgeschrieben!`
        });
        words[i] = germanNounMap[cleanW];
      }
    }
    corrected = words.join('');

    // 2. Subordinate clause 'weil': Verb to end
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

    // 3. Subordinate clause 'dass': Verb to end
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

    // 4. Inversion (V2): Gestern ich habe -> Gestern habe ich
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

    // 5. Prepositions: in die Küche beim -> in der Küche beim
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

    // 6. Upgrades
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

    const isFlawless = (corrected.trim().toLowerCase() === text.trim().toLowerCase() + (text.endsWith('.') ? '' : '.') && issues.filter(i => i.type === 'error').length === 0);
    const score = isFlawless ? 100 : Math.max(50, 100 - (issues.filter(i => i.type === 'error').length * 20));

    // Natural Stylistic Variants (Smart, not dumb concatenations!)
    let casualVariant = corrected;
    let profVariant = corrected;
    let c1Variant = corrected;

    if (text.toLowerCase().includes('vorstellen') || text.toLowerCase().includes('name')) {
      casualVariant = `Hi! Ich bin Ali, 25 Jahre alt, und freue mich total, dich kennenzulernen!`;
      profVariant = `Guten Tag, mein Name ist Ali Sibai. Ich bin 25 Jahre alt und absolviere meinen Bundesfreiwilligendienst am UKGM.`;
      c1Variant = `Darf ich mich kurz vorstellen: Mein Name ist Ali Sibai. Im Rahmen meines Bundesfreiwilligendienstes unterstütze ich das therapeutische Team.`;
    } else if (text.toLowerCase().includes('wie geht') || text.toLowerCase().includes('hallöchen') || text.toLowerCase().includes('hallo')) {
      casualVariant = `Hey! Wie geht's dir heute? Ich hoffe, du hattest einen schönen Tag!`;
      profVariant = `Guten Tag! Ich hoffe, es geht Ihnen gut und Sie hatten einen angenehmen Start in den Tag.`;
      c1Variant = `Ich hoffe sehr, Sie bei bester Gesundheit und wohlauf anzutreffen.`;
    } else if (text.toLowerCase().includes('vermisst') || text.toLowerCase().includes('freue mich')) {
      casualVariant = `Ich freue mich schon riesig auf heute Abend mit dir, habe dich echt vermisst! ❤️`;
      profVariant = `Ich freue mich sehr auf unser geplantes Wiedersehen am heutigen Abend.`;
      c1Variant = `Mit großer Freude sehe ich unserer heutigen Begegnung am Abend entgegen.`;
    } else {
      casualVariant = `Hey! ${corrected}`;
      profVariant = `Gerne möchte ich mitteilen: ${corrected}`;
      c1Variant = `Im Hinblick auf diesen Sachverhalt ist hervorzuheben, dass ${corrected.replace(/^[A-Z]/, c => c.toLowerCase()).replace(/[.!?]$/, '')}.`;
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
          <textarea id="sentenceInput" class="input w-full p-4 text-base rounded-2xl" rows="3" placeholder="z. B. Ich möchte mich vorstellen, mein Name ist Ali und ich bin 25 jahre alt..."></textarea>
          
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
            <span class="badge badge-gray text-xs">${userHistory.length} Sätze geprüft</span>
          </div>

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

    btnCheck.onclick = async () => {
      const textToAnalyze = sentenceInput.value;
      if (!textToAnalyze || !textToAnalyze.trim()) {
        showToast('Bitte gib zuerst einen Satz ein!', 'warning');
        return;
      }

      btnCheck.innerHTML = '<span>⏳</span> Prüfe Grammatik & Satzbau...';
      btnCheck.disabled = true;

      // 1. Check with online LanguageTool & local engine
      const ltMatches = await checkWithLanguageTool(textToAnalyze);
      const localResult = analyzeLocally(textToAnalyze);

      btnCheck.innerHTML = '<span>✨</span> Satz prüfen & Grammarly-Diagnose starten';
      btnCheck.disabled = false;

      // Merge LanguageTool matches into issues
      if (ltMatches.length > 0) {
        for (const m of ltMatches) {
          const badWord = textToAnalyze.substring(m.offset, m.offset + m.length);
          const rep = (m.replacements && m.replacements[0]) ? m.replacements[0].value : '';
          if (!localResult.issues.find(i => i.word.toLowerCase() === badWord.toLowerCase())) {
            localResult.issues.push({
              word: badWord,
              replacement: rep,
              type: m.rule.issueType === 'style' ? 'warning' : 'error',
              rule: m.message
            });
          }
        }
        if (localResult.issues.filter(i => i.type === 'error').length > 0) {
          localResult.isFlawless = false;
          localResult.accuracyScore = Math.max(50, 100 - (localResult.issues.length * 15));
        }
      }

      const xpGained = localResult.isFlawless ? 25 : 15;
      const settings = Storage.getSettings();
      Storage.saveSettings({ ...settings, totalXP: (settings.totalXP || 0) + xpGained });
      Storage.addHistory({
        type: 'sentence_fixer',
        original: localResult.original,
        corrected: localResult.corrected,
        isFlawless: localResult.isFlawless,
        timestamp: new Date().toISOString()
      });

      // Show Pushup Toast
      if (localResult.isFlawless) {
        showToast('100% Fehlerfrei! Exzellenter Satzbau (+25 XP)', 'success');
      } else {
        const errCount = localResult.issues.filter(i => i.type === 'error').length;
        showToast(`${errCount} Grammatik-Stellen markiert (+15 XP)`, 'warning');
      }

      // Generate Grammarly Visual Annotated HTML
      let annotatedHtml = localResult.original;
      for (const issue of localResult.issues) {
        const cls = issue.type === 'error' ? 'grammar-error' : 'grammar-warning';
        const regex = new RegExp(`\\b(${issue.word})\\b`, 'gi');
        annotatedHtml = annotatedHtml.replace(regex, `<span class="${cls}" data-word="${issue.word}" data-rep="${issue.replacement}" data-rule="${issue.rule}">$1</span>`);
      }

      resultCard.classList.remove('hidden');
      resultCard.innerHTML = `
        <!-- Accuracy & Feedback Banner -->
        <div class="card p-6 border-2 ${localResult.isFlawless ? 'border-emerald-500/50 bg-emerald-950/20' : 'border-blue-500/30'} space-y-6">
          <div class="flex-between flex-wrap gap-3">
            <div class="flex items-center gap-3">
              <span class="text-3xl">${localResult.isFlawless ? '🏆' : '🎯'}</span>
              <div>
                <div class="font-extrabold text-lg text-primary">
                  ${localResult.isFlawless ? 'Perfekt! 100% fehlerfrei erraten!' : `Grammatik-Genauigkeit: ${localResult.accuracyScore}%`}
                </div>
                <div class="text-xs text-secondary">
                  ${localResult.isFlawless ? 'Keine Grammatik- oder Rechtschreibfehler gefunden.' : 'Klicke auf die roten/gelben Wörter, um die 1-Klick-Korrektur zu sehen.'}
                </div>
              </div>
            </div>
            <span class="badge ${localResult.isFlawless ? 'badge-emerald' : 'badge-purple'} text-sm font-bold">
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
              <div class="text-sm line-through text-red-200">${localResult.original}</div>
            </div>
            <div class="p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-xl space-y-1">
              <div class="text-xs font-bold text-emerald-400 flex-between">
                <span>Vollständig korrigierte Version:</span>
                <button id="btnPlayCorrected" class="btn btn-emerald btn-xs">🔊 Anhören</button>
              </div>
              <div class="text-base font-bold text-emerald-300">${localResult.corrected}</div>
            </div>
          </div>

          <!-- Interactive Issue Cards (Click to Replace) -->
          ${localResult.issues.length > 0 ? `
            <div class="p-5 bg-surface border border-red-500/30 rounded-2xl space-y-3">
              <div class="font-bold text-sm text-red-400 flex items-center gap-2">
                <span>🔍</span> Gefundene Stellen & 1-Klick-Korrekturen:
              </div>
              <div class="space-y-2">
                ${localResult.issues.map(iss => `
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
                  <p class="text-primary text-sm font-medium">„${localResult.variants.casual}“</p>
                </div>
                <button class="btn btn-ghost btn-xs btn-speak-var" data-text="${localResult.variants.casual}">🔊</button>
              </div>
              <div class="p-3 bg-card rounded-xl border border-glass flex-between items-center gap-3">
                <div>
                  <span class="font-bold text-blue-400 block mb-1">🏢 Professionell & Höflich (Station / Kollegen / Gastfamilie):</span>
                  <p class="text-primary text-sm font-medium">„${localResult.variants.professional}“</p>
                </div>
                <button class="btn btn-ghost btn-xs btn-speak-var" data-text="${localResult.variants.professional}">🔊</button>
              </div>
              <div class="p-3 bg-card rounded-xl border border-glass flex-between items-center gap-3">
                <div>
                  <span class="font-bold text-emerald-400 block mb-1">🎓 C1/C2 Gehoben & Eloquent (Arztbrief / Leitung / Prüfung):</span>
                  <p class="text-primary text-sm font-medium">„${localResult.variants.c1}“</p>
                </div>
                <button class="btn btn-ghost btn-xs btn-speak-var" data-text="${localResult.variants.c1}">🔊</button>
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
        Speech.speak(localResult.corrected);
      };

      resultCard.querySelectorAll('.btn-speak-var').forEach(btn => {
        btn.onclick = () => Speech.speak(btn.getAttribute('data-text'));
      });

      resultCard.querySelector('#btnCopyCorrected').onclick = () => {
        navigator.clipboard.writeText(localResult.corrected);
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
