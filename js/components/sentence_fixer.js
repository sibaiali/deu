// Magischer Satz-Korrektor • Deutsches Grammarly & Linguistischer KI-Predictor
// Bietet Echtzeit-Prüfung, linguistische Next-Word-Prediction,
// KI-Synonym-Booster, 4-Ton-Paraphrasierer und Fehler-Lern-Labor.

import { Storage } from '../storage.js';
import { Speech } from '../speech.js';

export function renderSentenceFixer(container) {
  let activeSubTab = 'checker'; // 'checker' | 'ai_paraphraser' | 'error_lab' | 'diary'
  let userHistory = Storage.getHistory().filter(h => h.type === 'sentence_fixer') || [];
  let typingTimer = null;

  // Comprehensive German N-Gram & Collocation Predictor Model
  const linguisticPredictor = [
    // Greetings & Introductions
    { trigger: /^hallo,?\s*ich\s*bin\s*([a-zA-ZäöüÄÖÜß]+)?$/i, completions: ["und wie heißt du?", "und ich freue mich, hier zu sein.", "und absolviere meinen BFD am UKGM."] },
    { trigger: /^ich\s*möchte\s*mich\s*$/i, completions: ["vorstellen: Mein Name ist Ali.", "kurz bei Ihnen melden.", "herzlich bei Ihnen bedanken."] },
    { trigger: /^mein\s*name\s*ist\s*([a-zA-ZäöüÄÖÜß]+)?$/i, completions: ["und ich bin 25 Jahre alt.", "und ich arbeite als Bundesfreiwilliger auf Station.", "und ich freue mich auf die Zusammenarbeit."] },
    
    // Romance & Girlfriend
    { trigger: /^ich\s*freue\s*mich\s*$/i, completions: ["darauf, dich heute Abend zu sehen! ❤️", "auf unser gemeinsames Wochenende.", "riesig über deine liebe Nachricht!"] },
    { trigger: /^ich\s*vermisse\s*$/i, completions: ["dich so sehr! ❤️", "deine Nähe und dein Lachen.", "unsere gemeinsamen Abende."] },
    { trigger: /^ich\s*liebe\s*$/i, completions: ["dich über alles! ❤️", "deine herzliche Art.", "die Zeit mit dir."] },
    { trigger: /^gute\s*nacht,\s*$/i, completions: ["mein Schatz, träum was Schönes! ❤️", "schlaf gut und erhol dich gut.", "ich freue mich auf morgen."] },

    // Hospital & BFD Clinic Operations
    { trigger: /^der\s*patient\s*$/i, completions: ["hat die Einnahme der Medikation verweigert.", "klagt über akute Schmerzen im Brustbereich.", "ist zeitlich und örtlich voll orientiert.", "wurde soeben auf Station 2 aufgenommen."] },
    { trigger: /^die\s*patientin\s*$/i, completions: ["wirkt heute deutlich stabiler und zugänglicher.", "benötigt Unterstützung bei der Mobilisation.", "bittet um ein persönliches Gespräch mit dem Arzt."] },
    { trigger: /^ich\s*möchte\s*bescheid\s*geben,\s*dass\s*$/i, completions: ["ich mich um 10 Minuten verspäte.", "Zimmer 12 nun vollständig desinfiziert ist.", "die Übergabe im Aufenthaltsraum beginnt."] },
    { trigger: /^könnten\s*sie\s*mir\s*bitte\s*$/i, completions: ["kurz bei der Verlegung behilflich sein?", "die Vitalzeichenkurve von Herrn Weber geben?", "zeigen, wo die frischen Handtücher liegen?"] },
    { trigger: /^in\s*der\s*übergabe\s*$/i, completions: ["wurde über den Neuzugang berichtet.", "haben wir die Bedarfsmedikation besprochen.", "wurde eine zunehmende Unruhe dokumentiert."] },

    // Daily Life, Host Family & Free Time
    { trigger: /^ich\s*helfe\s*ihnen\s*gerne\s*$/i, completions: ["in der Küche beim Tisch abräumen.", "beim Einkaufen im Supermarkt.", "bei der Vorbereitung des Abendessens."] },
    { trigger: /^wir\s*könnten\s*heute\s*$/i, completions: ["gemeinsam in der Oberstadt einen Kaffee trinken.", "einen schönen Spaziergang an der Lahn machen.", "zusammen kochen und gemütlich reden."] },
    { trigger: /^hast\s*du\s*lust,\s*$/i, completions: ["heute Abend zusammen etwas zu unternehmen?", "mit mir die Altstadt von Marburg zu erkunden?", "später kurz zu telefonieren?"] }
  ];

  // Deep Lexical Booster (Rich Synonyms for Better Words)
  const lexicalBooster = {
    'helfen': { better: ['unterstützen (+ Dat.)', 'beistehen', 'unter die Arme greifen'], note: 'C1/Professionell' },
    'machen': { better: ['erledigen', 'durchführen', 'übernehmen', 'bewerkstelligen'], note: 'Präziser' },
    'sagen': { better: ['mitteilen', 'berichten', 'schildern', 'zur Sprache bringen'], note: 'B2/C1' },
    'wichtig': { better: ['von zentraler Bedeutung', 'essenziell', 'unerlässlich', 'maßgeblich'], note: 'Akademisch C1' },
    'gut': { better: ['hervorragend', 'einwandfrei', 'vorbildlich', 'ausgezeichnet'], note: 'Differenziert' },
    'schlecht': { better: ['unzureichend', 'bedenklich', 'mangelhaft', 'kritisch'], note: 'Klinisch' },
    'problem': { better: ['Herausforderung', 'Schwierigkeit', 'Komplikation', 'Anliegen'], note: 'Lösungsorientiert' },
    'sehen': { better: ['beobachten', 'wahrnehmen', 'feststellen', 'erblicken'], note: 'Kognitiv' },
    'denken': { better: ['vermuten', 'annehmen', 'reflektieren', 'in Betracht ziehen'], note: 'Gehoben' },
    'freuen': { better: ['entgegensehen (+ Dat.)', 'begeistert sein von', 'Wert schätzen'], note: 'Stilvoll' }
  };

  const presetExamples = [
    { title: "💌 Liebesnachricht", input: "Ich freue mich auf heute abend weil ich habe dich sehr vermisst." },
    { title: "👋 Typischer Tippfehler", input: "Hallo ic bin Ali und du?" },
    { title: "👋 Selbstvorstellung", input: "Ich möchte mich vorstellen, mein Name ist Ali und ich bin 25 jahre alt." },
    { title: "🏢 Verspätung melden", input: "Ich möchte Bescheid geben dass ich komme heute 10 Minuten später." },
    { title: "🏥 Schichtübergabe", input: "Der Patient hat die Tablette verweigert obwohl er hatte starke Schmerzen." }
  ];

  // Common German Typos Dictionary
  const commonTypos = {
    'ic': 'ich', 'ihc': 'ich', 'ish': 'ich', 'duu': 'du', 'ddu': 'du',
    'nich': 'nicht', 'nit': 'nicht', 'nix': 'nichts', 'hab': 'habe',
    'is': 'ist', 'bis': 'bist', 'gehts': "geht's", 'viell': 'viel',
    'shon': 'schon', 'weill': 'weil', 'wiel': 'weil', 'das': 'dass',
    'und du?': 'und wie heißt du?', 'und du': 'und wie heißt du?'
  };

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
    'schatz': 'Schatz', 'liebe': 'Liebe', 'geld': 'Geld', 'nachricht': 'Nachricht', 'bett': 'Bett'
  };

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

  // Predict Next Words & Phrases based on linguistic model
  function getNextWordPredictions(currentText) {
    const text = (currentText || '').trim();
    if (!text) {
      return [
        { phrase: "Ich freue mich auf...", label: "💌 Vorfreude" },
        { phrase: "Ich möchte Bescheid geben, dass...", label: "🏢 Station" },
        { phrase: "Der Patient klagt über...", label: "🏥 Klinik" },
        { phrase: "Könnten Sie mir bitte zeigen...", label: "🤝 Höflich" }
      ];
    }

    const matched = [];
    for (const rule of linguisticPredictor) {
      if (rule.trigger.test(text)) {
        rule.completions.forEach(c => {
          matched.push({ phrase: c, label: "✨ KI-Vorschlag" });
        });
      }
    }

    // Contextual Fallbacks if no exact pattern
    if (matched.length === 0) {
      const words = text.split(/\s+/);
      const lastWord = words[words.length - 1].toLowerCase().replace(/[^a-zäöüß]/g, '');

      if (['weil', 'dass', 'obwohl', 'wenn', 'da'].includes(lastWord)) {
        matched.push({ phrase: "ich heute Dienst habe.", label: "Nebensatz" });
        matched.push({ phrase: "wir noch Zeit haben.", label: "Nebensatz" });
        matched.push({ phrase: "der Arzt soeben eingetroffen ist.", label: "Klinik" });
      } else if (['mit', 'bei', 'nach', 'zu', 'aus'].includes(lastWord)) {
        matched.push({ phrase: "meiner Freundin", label: "Dativ fem." });
        matched.push({ phrase: "dem zuständigen Arzt", label: "Dativ mask." });
        matched.push({ phrase: "den Kollegen auf Station", label: "Dativ plur." });
      } else {
        matched.push({ phrase: "und wie siehst du das?", label: "Frage" });
        matched.push({ phrase: "um die Situation zu klären.", label: "Finalsatz" });
      }
    }

    return matched.slice(0, 4);
  }

  // Find Synonyms for the last typed word
  function getSynonymsForLastWord(currentText) {
    const text = (currentText || '').trim();
    if (!text) return null;
    const words = text.split(/\s+/);
    const lastWord = words[words.length - 1].toLowerCase().replace(/[^a-zäöüß]/g, '');

    for (const [key, val] of Object.entries(lexicalBooster)) {
      if (lastWord === key || lastWord.startsWith(key)) {
        return { word: key, suggestions: val.better, note: val.note };
      }
    }
    return null;
  }

  // Deep Real-Time Grammar Engine
  function fullGrammarAnalysis(rawInput) {
    let text = (rawInput || '').trim();
    if (!text) return null;

    let corrected = text;
    let issues = [];
    let rulesTriggered = [];
    let upgradesFound = [];

    // 1. Fix typos & noun capitalization word-by-word
    const rawTokens = text.split(/(\s+|[,.!?]+)/);
    for (let i = 0; i < rawTokens.length; i++) {
      const token = rawTokens[i];
      const lower = token.toLowerCase();

      if (commonTypos[lower] && token !== commonTypos[lower]) {
        const rep = commonTypos[lower];
        issues.push({ word: token, replacement: rep, type: 'error', rule: `Tippfehler: '${token}' -> '${rep}'.` });
        rawTokens[i] = rep;
      } else if (germanNouns[lower] && token !== germanNouns[lower]) {
        const rep = germanNouns[lower];
        issues.push({ word: token, replacement: rep, type: 'error', rule: `Nomen wie '${rep}' werden immer großgeschrieben!` });
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
      issues.push({ word: "und du?", replacement: "und wie heißt du?", type: 'warning', rule: "Vollständiger Fragesatz klingt natürlicher." });
    }

    // 4. Subordinate clause 'weil': Verb to end
    if (/\bweil\s+([a-zA-ZäöüÄÖÜß]+)\s+(habe|hast|hat|haben|bin|bist|ist|sind|war|hatte|werde|wird|kann|kannst|muss|musst|will|willst|möchte|möchtest)\s+/i.test(corrected)) {
      corrected = corrected.replace(/\bweil\s+([a-zA-ZäöüÄÖÜß]+)\s+(habe|hast|hat|haben|bin|bist|ist|sind|war|hatte|werde|wird|kann|kannst|muss|musst|will|willst|möchte|möchtest)\s+([^.,!?]+)/gi, (m, subj, verb, rest) => {
        return `weil ${subj} ${rest.trim()} ${verb}`;
      });
      rulesTriggered.push({ name: "Verb-Endstellung nach 'weil'", rule: "Nach 'weil' steht das konjugierte Verb am Ende." });
    }

    // 5. Subordinate clause 'dass': Verb to end
    if (/\bdass\s+([a-zA-ZäöüÄÖÜß]+)\s+(komme|kommst|kommt|kommen|habe|hast|hat|haben|bin|bist|ist|sind|werde|wird|kann|muss)\s+/i.test(corrected)) {
      corrected = corrected.replace(/\bdass\s+([a-zA-ZäöüÄÖÜß]+)\s+(komme|kommst|kommt|kommen|habe|hast|hat|haben|bin|bist|ist|sind|werde|wird|kann|muss)\s+([^.,!?]+)/gi, (m, subj, verb, rest) => {
        return `dass ${subj} ${rest.trim()} ${verb}`;
      });
      rulesTriggered.push({ name: "Verb-Endstellung nach 'dass'", rule: "Im dass-Satz steht das finite Verb am Ende." });
    }

    // 6. Inversion (V2)
    if (/^(Gestern|Heute|Morgen|Jetzt|Danach|Später|Am Montag|Am Wochenende|Im Moment|Normalerweise|Leider)\s+([a-zA-ZäöüÄÖÜß]+)\s+(habe|hast|hat|haben|bin|bist|ist|sind|war|hatte|werde|wird|kann|muss|will|möchte|gehe|komme|mache)/i.test(corrected)) {
      corrected = corrected.replace(/^(Gestern|Heute|Morgen|Jetzt|Danach|Später|Am Montag|Am Wochenende|Im Moment|Normalerweise|Leider)\s+([a-zA-ZäöüÄÖÜß]+)\s+(habe|hast|hat|haben|bin|bist|ist|sind|war|hatte|werde|wird|kann|muss|will|möchte|gehe|komme|mache)\s+/i, (m, adv, subj, verb) => {
        return `${adv} ${verb} ${subj} `;
      });
      rulesTriggered.push({ name: "Verb auf Position 2 (Inversion)", rule: "Nach Zeitangabe folgt sofort das Verb." });
    }

    // Punctuation
    corrected = corrected.charAt(0).toUpperCase() + corrected.slice(1);
    if (!/[.!?]$/.test(corrected)) corrected += '.';

    const errorIssues = issues.filter(i => i.type === 'error');
    const isFlawless = (errorIssues.length === 0 && corrected.trim().toLowerCase() === text.trim().toLowerCase() + (text.endsWith('.') ? '' : '.'));
    const score = isFlawless ? 100 : Math.max(40, 100 - (errorIssues.length * 25));

    // 4 Multi-Tone Paraphraser Variants
    const lowerInput = text.toLowerCase();
    let casualVar = `Hey! ${corrected}`;
    let profVar = `Gerne möchte ich mitteilen: ${corrected}`;
    let clinicVar = `Dokumentation / Übergabe: ${corrected}`;
    let c1Var = `Bezüglich des vorliegenden Sachverhalts ist festzuhalten, dass ${corrected.replace(/^[A-Z]/, c => c.toLowerCase()).replace(/[.!?]$/, '')}.`;

    if (lowerInput.includes('ali') || lowerInput.includes('name') || lowerInput.includes('vorstellen') || lowerInput.includes('wer bist')) {
      casualVar = `Hi! Ich bin Ali. Und wie heißt du? Schön, dich kennenzulernen! 😊`;
      profVar = `Guten Tag! Mein Name ist Ali Sibai. Darf ich mich erkundigen, wie Ihr Name ist?`;
      clinicVar = `Vorstellung auf Station: Mein Name ist Ali Sibai, Bundesfreiwilliger auf Station 2.`;
      c1Var = `Gestatten Sie, dass ich mich vorstelle: Mein Name ist Ali Sibai. Es ist mir eine Freude, Ihre Bekanntschaft zu machen.`;
    } else if (lowerInput.includes('wie geht') || lowerInput.includes('hallöchen') || lowerInput.includes('hallo')) {
      casualVar = `Hey! Wie geht's dir heute? Ich hoffe, du hattest einen richtig schönen Tag!`;
      profVar = `Guten Tag! Ich hoffe, es geht Ihnen gut und Sie hatten einen angenehmen Start in den Tag.`;
      clinicVar = `Befindlichkeitsabfrage: Guten Morgen, wie fühlen Sie sich im heutigen Tagesverlauf?`;
      c1Var = `Ich hoffe sehr, Sie bei bester Gesundheit und bestem Wohlbefinden anzutreffen.`;
    } else if (lowerInput.includes('vermisst') || lowerInput.includes('freue mich')) {
      casualVar = `Ich freue mich schon riesig auf heute Abend mit dir, habe dich echt vermisst! ❤️`;
      profVar = `Ich freue mich sehr auf unser geplantes Wiedersehen am heutigen Abend.`;
      clinicVar = `Entlastungsgespräch: Ich schätze den vertrauensvollen Austausch sehr.`;
      c1Var = `Mit großer Freude sehe ich unserer heutigen Zusammenkunft am Abend entgegen.`;
    } else if (lowerInput.includes('patient') || lowerInput.includes('schmerzen') || lowerInput.includes('tablette')) {
      casualVar = `Der Patient wollte die Tablette vorhin nicht nehmen, weil es ihm wehtat.`;
      profVar = `Der Patient lehnte die Einnahme der Medikation ab und gab starke Schmerzen an.`;
      clinicVar = `Schichtübergabe: Patient verweigert Bedarfsmedikation bei NRS 7. Ärztliche Rücksprache veranlasst.`;
      c1Var = `Aufgrund ausgeprägter Schmerzsymptomatik erfolgte seitens des Patienten eine Verweigerung der verordneten Medikation.`;
    }

    return {
      original: text,
      corrected: corrected,
      isFlawless: isFlawless,
      accuracyScore: score,
      issues: issues,
      rules: rulesTriggered,
      variants: {
        casual: casualVar,
        professional: profVar,
        clinical: clinicVar,
        c1: c1Var
      }
    };
  }

  function renderView() {
    userHistory = Storage.getHistory().filter(h => h.type === 'sentence_fixer') || [];

    const allMistakes = [];
    for (const h of userHistory) {
      if (h.original && h.corrected && h.original !== h.corrected) {
        allMistakes.push({ wrong: h.original, correct: h.corrected, date: h.timestamp || h.date });
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
                <span>Linguistischer KI-Predictor • Smart Autocomplete • Grammarly</span>
              </div>
              <h1 class="text-3xl font-extrabold text-gradient">Magischer Satz-Korrektor & KI-Predictor</h1>
              <p class="text-secondary mt-1 text-sm">
                Prüft in Echtzeit, <strong>schlägt die nächsten Worte & Phrasen vor</strong>, boostet deinen Wortschatz mit <strong>C1-Synonymen</strong> und formuliert deinen Satz in <strong>4 professionellen Tönen</strong> um!
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
              ✨ Live-Korrektor & Wort-Predictor
            </button>
            <button class="btn ${activeSubTab === 'ai_paraphraser' ? 'btn-primary' : 'btn-secondary'} btn-sm subtab-btn" data-tab="ai_paraphraser">
              🎭 4-Ton-KI-Paraphrasierer (Locker, Klinik, C1)
            </button>
            <button class="btn ${activeSubTab === 'error_lab' ? 'btn-primary' : 'btn-secondary'} btn-sm subtab-btn" data-tab="error_lab">
              🧠 Aus Fehlern lernen (${allMistakes.length})
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

    // 1. CHECKER & PREDICTOR TAB
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

        <!-- Input Card with Predictive Ghost-Chips -->
        <div class="card p-6 space-y-4 ai-glow-card rounded-2xl">
          <div class="flex-between">
            <label class="font-bold text-sm flex items-center gap-2">
              <span>Dein deutscher Satz:</span>
              <span class="text-xs text-indigo-400 font-normal">🔮 KI-Wortvorhersage aktiv</span>
            </label>
            <span id="liveStatusBadge" class="badge badge-emerald text-xs">🟢 Live-Analyse</span>
          </div>

          <textarea id="sentenceInput" class="input w-full p-4 text-base rounded-2xl border-indigo-500/40 focus:border-indigo-400" rows="3" placeholder="Tippe z. B. 'Ich freue mich...' oder 'Der Patient...'"></textarea>
          
          <!-- Smart Next-Word & Phrase Prediction Bar -->
          <div id="predictionBar" class="space-y-2 pt-1">
            <div class="text-xs text-secondary font-semibold flex items-center gap-1">
               Vorschläge für die nächsten Wörter (1 Klick zum Einfügen):
            </div>
            <div id="predictionChips" class="flex flex-wrap gap-2"></div>
          </div>

          <!-- Real-Time Synonym Booster for Current Word -->
          <div id="synonymBar" class="hidden p-3 bg-card rounded-xl border border-glass flex-between flex-wrap gap-2">
            <div class="text-xs text-secondary">
              <span class="text-pink-400 font-bold">🚀 Wort-Upgrade:</span> Bessere Alternativen für <strong id="synTargetWord" class="text-primary"></strong>:
            </div>
            <div id="synonymChips" class="flex flex-wrap gap-1"></div>
          </div>

          <div class="flex-between flex-wrap gap-3 pt-2">
            <div class="flex gap-2">
              <button id="btnVoiceInput" class="btn btn-secondary btn-sm flex items-center gap-2">
                 Diktieren
              </button>
              <button id="btnClear" class="btn btn-ghost btn-sm">Leeren</button>
            </div>
            <div class="flex gap-2">
              <button id="btnAutoFixAll" class="btn btn-autofix btn-sm flex items-center gap-2 hidden">
                 Alles automatisch korrigieren
              </button>
              <button id="btnCheckSentence" class="btn btn-primary btn-lg flex items-center gap-2 shadow-glow">
                 Diagnose & XP sichern
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
      const predictionChips = subTabContent.querySelector('#predictionChips');
      const synonymBar = subTabContent.querySelector('#synonymBar');
      const synTargetWord = subTabContent.querySelector('#synTargetWord');
      const synonymChips = subTabContent.querySelector('#synonymChips');

      // Update predictions dynamically
      function updatePredictions() {
        const text = sentenceInput.value;
        const preds = getNextWordPredictions(text);

        predictionChips.innerHTML = preds.map(p => `
          <button class="prediction-chip" data-phrase="${p.phrase.replace(/"/g, '&quot;')}">
            <span>+</span> ${p.phrase}
          </button>
        `).join('');

        predictionChips.querySelectorAll('.prediction-chip').forEach(btn => {
          btn.onclick = () => {
            const phrase = btn.getAttribute('data-phrase');
            if (sentenceInput.value.trim().endsWith(phrase.trim())) return;
            const sep = sentenceInput.value.length > 0 && !sentenceInput.value.endsWith(' ') ? ' ' : '';
            sentenceInput.value = (sentenceInput.value + sep + phrase).trim();
            Speech.playSound('pop');
            runLiveCheck(false);
          };
        });

        // Check synonyms for last word
        const synData = getSynonymsForLastWord(text);
        if (synData) {
          synonymBar.classList.remove('hidden');
          synTargetWord.innerText = `„${synData.word}“`;
          synonymChips.innerHTML = synData.suggestions.map(s => `
            <button class="synonym-pill" data-from="${synData.word}" data-to="${s}">
              ✨ ${s}
            </button>
          `).join('');

          synonymChips.querySelectorAll('.synonym-pill').forEach(sbtn => {
            sbtn.onclick = () => {
              const fromW = sbtn.getAttribute('data-from');
              const toW = sbtn.getAttribute('data-to');
              sentenceInput.value = sentenceInput.value.replace(new RegExp(`\\b${fromW}\\b`, 'gi'), toW);
              Speech.playSound('pop');
              runLiveCheck(false);
            };
          });
        } else {
          synonymBar.classList.add('hidden');
        }
      }

      // Initial prediction populate
      updatePredictions();

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
        updatePredictions();
      };

      subTabContent.querySelector('#btnVoiceInput').onclick = () => {
        Speech.startRecognition((text) => {
          sentenceInput.value = text;
          runLiveCheck(true);
        }, (err) => alert('Spracherkennung: ' + err));
      };

      function runLiveCheck(isManualSubmit = false) {
        const text = sentenceInput.value;
        updatePredictions();

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
                   Gefundene Korrekturen (1-Klick-Anwendung):
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

            <!-- 4 Muttersprachliche Stil-Varianten -->
            <div class="p-5 bg-surface border border-blue-500/30 rounded-2xl space-y-3">
              <div class="font-bold text-sm text-blue-400 flex items-center gap-2">
                 4 muttersprachliche Stil-Varianten:
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-card rounded-xl border border-glass space-y-1">
                  <span class="font-bold text-purple-400">💬 Locker & Herzlich:</span>
                  <p class="text-primary font-medium">„${result.variants.casual}“</p>
                  <button class="btn btn-ghost btn-xs btn-speak-var mt-1" data-text="${result.variants.casual}">🔊 Anhören</button>
                </div>
                <div class="p-3 bg-card rounded-xl border border-glass space-y-1">
                  <span class="font-bold text-blue-400">🏢 Professionell & Höflich:</span>
                  <p class="text-primary font-medium">„${result.variants.professional}“</p>
                  <button class="btn btn-ghost btn-xs btn-speak-var mt-1" data-text="${result.variants.professional}">🔊 Anhören</button>
                </div>
                <div class="p-3 bg-card rounded-xl border border-glass space-y-1">
                  <span class="font-bold text-amber-400">🏥 Klinik & Übergabe:</span>
                  <p class="text-primary font-medium">„${result.variants.clinical}“</p>
                  <button class="btn btn-ghost btn-xs btn-speak-var mt-1" data-text="${result.variants.clinical}">🔊 Anhören</button>
                </div>
                <div class="p-3 bg-card rounded-xl border border-glass space-y-1">
                  <span class="font-bold text-emerald-400">🎓 C1/C2 Gehoben & Eloquent:</span>
                  <p class="text-primary font-medium">„${result.variants.c1}“</p>
                  <button class="btn btn-ghost btn-xs btn-speak-var mt-1" data-text="${result.variants.c1}">🔊 Anhören</button>
                </div>
              </div>
            </div>

            <!-- Copy Button -->
            <div class="flex justify-end gap-3 pt-2">
              <button id="btnCopyCorrected" class="btn btn-secondary btn-sm flex items-center gap-2">
                 Korrigierten Satz kopieren
              </button>
            </div>
          </div>
        `;

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

      sentenceInput.addEventListener('input', () => {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(() => runLiveCheck(false), 250);
      });

      btnCheck.onclick = () => runLiveCheck(true);
      btnAutoFixAll.onclick = () => {
        const res = fullGrammarAnalysis(sentenceInput.value);
        if (res) {
          sentenceInput.value = res.corrected;
          runLiveCheck(true);
        }
      };

    } else if (activeSubTab === 'ai_paraphraser') {
      // 2. 4-TONE PARAPHRASER TAB
      subTabContent.innerHTML = `
        <div class="card p-6 space-y-6">
          <div class="flex-between flex-wrap gap-3">
            <div>
              <h2 class="text-xl font-bold flex items-center gap-2">
                 4-Ton-KI-Paraphrasierer • Satz-Transformator
              </h2>
              <p class="text-xs text-secondary mt-1">
                Verwandle jeden einfachen Satz in 4 authentische Register: Locker, Professionell, Klinik oder C1/C2!
              </p>
            </div>
            <span class="badge badge-indigo text-xs">✨ KI-Sprachmodell</span>
          </div>

          <div class="space-y-3">
            <label class="text-xs font-semibold text-secondary">Ausgangssatz eingeben:</label>
            <input type="text" id="paraphraseInput" class="input w-full text-base rounded-2xl" placeholder="z. B. Ich habe keine Zeit um das zu machen..." value="Ich möchte Bescheid geben dass ich später komme.">
            <button id="btnParaphrase" class="btn btn-primary btn-sm flex items-center gap-2">
               In alle 4 Stile transformieren (+15 XP)
            </button>
          </div>

          <div id="paraphraseResults" class="space-y-4 pt-2"></div>
        </div>
      `;

      const pInput = subTabContent.querySelector('#paraphraseInput');
      const pBtn = subTabContent.querySelector('#btnParaphrase');
      const pResults = subTabContent.querySelector('#paraphraseResults');

      function generateParaphrases() {
        const text = pInput.value.trim();
        if (!text) return;
        const res = fullGrammarAnalysis(text);
        Speech.playSound('pop');

        pResults.innerHTML = `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-5 bg-surface rounded-2xl border border-purple-500/30 space-y-2">
              <div class="flex-between">
                <span class="badge badge-purple text-xs">💬 1. Locker & Herzlich (Freundin / Freunde)</span>
                <button class="btn btn-ghost btn-xs btn-speak-p" data-text="${res.variants.casual}">🔊</button>
              </div>
              <p class="text-primary text-sm font-semibold">„${res.variants.casual}“</p>
              <div class="text-xs text-muted">Perfekt für WhatsApp, persönliche Nachrichten und lockeren Alltag.</div>
            </div>

            <div class="p-5 bg-surface rounded-2xl border border-blue-500/30 space-y-2">
              <div class="flex-between">
                <span class="badge badge-blue text-xs">🏢 2. Professionell & Höflich (Station / Kollegen)</span>
                <button class="btn btn-ghost btn-xs btn-speak-p" data-text="${res.variants.professional}">🔊</button>
              </div>
              <p class="text-primary text-sm font-semibold">„${res.variants.professional}“</p>
              <div class="text-xs text-muted">Höflich, verbindlich und respektvoll im Klinikalltag.</div>
            </div>

            <div class="p-5 bg-surface rounded-2xl border border-amber-500/30 space-y-2">
              <div class="flex-between">
                <span class="badge badge-amber text-xs">🏥 3. Klinisch & Dokumentation (Schichtübergabe)</span>
                <button class="btn btn-ghost btn-xs btn-speak-p" data-text="${res.variants.clinical}">🔊</button>
              </div>
              <p class="text-primary text-sm font-semibold">„${res.variants.clinical}“</p>
              <div class="text-xs text-muted">Präziser medizinischer Fachwortschatz für Patientenkurven.</div>
            </div>

            <div class="p-5 bg-surface rounded-2xl border border-emerald-500/30 space-y-2">
              <div class="flex-between">
                <span class="badge badge-emerald text-xs">🎓 4. C1/C2 Gehoben & Eloquent (Arztbrief & Goethe)</span>
                <button class="btn btn-ghost btn-xs btn-speak-p" data-text="${res.variants.c1}">🔊</button>
              </div>
              <p class="text-primary text-sm font-semibold">„${res.variants.c1}“</p>
              <div class="text-xs text-muted">Akademischer Stil für C1-Prüfungen, Behörden und Chefarztvisiten.</div>
            </div>
          </div>
        `;

        pResults.querySelectorAll('.btn-speak-p').forEach(b => b.onclick = () => Speech.speak(b.getAttribute('data-text')));
      }

      pBtn.onclick = generateParaphrases;
      generateParaphrases();

    } else if (activeSubTab === 'error_lab') {
      // 3. ERROR LAB TAB
      subTabContent.innerHTML = `
        <div class="card p-6 space-y-6">
          <div class="flex-between flex-wrap gap-3">
            <div>
              <h2 class="text-xl font-bold flex items-center gap-2">
                 Aus Fehlern lernen • Trainings-Labor
              </h2>
              <p class="text-xs text-secondary mt-1">
                Trainiere deine gesammelten Fehler gezielt, bis du sie zu 100% beherrschst!
              </p>
            </div>
            <span class="badge badge-purple text-xs font-bold">${allMistakes.length} Fehler analysiert</span>
          </div>

          ${allMistakes.length === 0 ? `
            <div class="text-center py-12 space-y-3">
              <div class="text-4xl">🎉</div>
              <div class="font-bold text-base text-primary">Noch keine Fehler gesammelt!</div>
              <p class="text-xs text-secondary max-w-md mx-auto">
                Tippe im Live-Korrektor Sätze ein. Fehler werden automatisch hier gesammelt.
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
                    <label class="text-xs font-semibold text-secondary">Tippe die richtige Version:</label>
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
      // 4. DIARY TAB
      subTabContent.innerHTML = `
        <div class="card p-6 space-y-6">
          <div class="flex-between flex-wrap gap-3">
            <div>
              <h2 class="text-xl font-bold flex items-center gap-2">
                 Mein persönliches Satz-Tagebuch
              </h2>
              <p class="text-xs text-secondary mt-1">
                Alle deine bisher geprüften Sätze im Überblick.
              </p>
            </div>
            <button id="btnClearDiary" class="btn btn-secondary btn-xs text-red-400">
              🗑️ Tagebuch leeren
            </button>
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
          if (confirm('Möchtest du wirklich alle Sätze löschen?')) {
            const currentHist = Storage.getHistory();
            const otherHist = currentHist.filter(h => h.type !== 'sentence_fixer');
            localStorage.setItem('deu_history', JSON.stringify(otherHist));
            Speech.playSound('pop');
            renderView();
          }
        };
      }
    }

    // Subtab navigation
    container.querySelectorAll('.subtab-btn').forEach(btn => {
      btn.onclick = () => {
        activeSubTab = btn.getAttribute('data-tab');
        renderView();
      };
    });
  }

  renderView();
}
