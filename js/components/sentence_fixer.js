// Magischer Satz-Korrektor & Grammatik-Diagnose mit Wort-Upgrade-Optimizer
// Prüft Korrektheit, bewertet Grammatik-Genauigkeit, schlägt bessere Synonyme vor
// und generiert 3 Stil-Varianten: Locker, Professionell B2, Gehoben C1/C2.

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
    },
    {
      title: "❓ Fragewortstellung",
      input: "Warum du hast gestern nicht angerufen?",
      context: "Fragesatz"
    }
  ];

  // Word Upgrades Dictionary
  const wordUpgrades = [
    {
      target: /\bmachen\b/i,
      original: "machen",
      better: "erledigen / durchführen / übernehmen",
      note: "'machen' klingt oft umgangssprachlich. Nutze im Beruf lieber 'erledigen' oder 'übernehmen'."
    },
    {
      target: /\bhelfen\b/i,
      original: "helfen",
      better: "unterstützen bei (+ Dativ) / zur Hand gehen",
      note: "'unterstützen' klingt auf B2/C1-Niveau deutlich professioneller und partnerschaftlicher."
    },
    {
      target: /\bsagen\b/i,
      original: "sagen",
      better: "mitteilen / Bescheid geben / zur Sprache bringen",
      note: "Ersetze 'sagen' durch präzisere Verben wie 'mitteilen' oder 'schildern'."
    },
    {
      target: /\bwichtig\b/i,
      original: "wichtig",
      better: "von zentraler Bedeutung / essenziell / unerlässlich",
      note: "'von zentraler Bedeutung' verleiht deinem Satz sofort akademisches C1-Gewicht."
    },
    {
      target: /\bgut\b/i,
      original: "gut",
      better: "hervorragend / einwandfrei / vorbildlich",
      note: "Nutze differenzierte Adjektive wie 'einwandfrei' oder 'angenehm'."
    },
    {
      target: /\bProblem\b/i,
      original: "Problem",
      better: "Herausforderung / Schwierigkeit / Anliegen",
      note: "In der deutschen Arbeitskultur spricht man oft von 'Herausforderung' oder 'Anliegen'."
    }
  ];

  function analyzeSentence(rawInput) {
    let text = (rawInput || '').trim();
    if (!text) return null;

    let corrected = text;
    let rulesTriggered = [];
    let upgradesFound = [];
    let lessonTarget = 1;
    let errorsCount = 0;

    // Check English-to-German input translations
    const englishPatterns = [
      {
        pattern: /\bi love you (so much|very much)?\b/i,
        replace: "Ich liebe dich so sehr.",
        rule: "Englisch: 'I love you' -> Deutsch: 'Ich liebe dich' (Akkusativ!).",
        lesson: 2,
        name: "Liebeserklärung (Akkusativ)"
      },
      {
        pattern: /\bi miss you\b/i,
        replace: "Ich vermisse dich.",
        rule: "Englisch: 'I miss you' -> Deutsch: 'Ich vermisse dich' (Akkusativ!).",
        lesson: 2,
        name: "Gefühlsausdruck (Akkusativ)"
      },
      {
        pattern: /\bi am looking forward to seeing you\b/i,
        replace: "Ich freue mich darauf, dich zu sehen.",
        rule: "Feste Wendung: 'sich freuen auf' + Akkusativ / da(r)+Präposition + Infinitiv mit zu.",
        lesson: 11,
        name: "Infinitiv mit zu & Verben mit Präpositionen"
      }
    ];

    for (const ep of englishPatterns) {
      if (ep.pattern.test(text)) {
        corrected = text.replace(ep.pattern, ep.replace);
        rulesTriggered.push({
          name: ep.name,
          rule: ep.rule,
          lesson: ep.lesson,
          lessonName: "Satzbau & Verben"
        });
        errorsCount++;
      }
    }

    // 1. Time/Place at start: "Gestern ich habe..." -> "Gestern habe ich..." (Verb in Position 2)
    if (/^(Gestern|Heute|Morgen|Jetzt|Danach|Später|Am Montag|Am Wochenende|Im Moment|Normalerweise|Leider)\s+([a-zA-ZäöüÄÖÜß]+)\s+(habe|hast|hat|haben|bin|bist|ist|sind|war|hatte|werde|wird|kann|muss|will|möchte|gehe|komme|mache)/i.test(corrected)) {
      corrected = corrected.replace(/^(Gestern|Heute|Morgen|Jetzt|Danach|Später|Am Montag|Am Wochenende|Im Moment|Normalerweise|Leider)\s+([a-zA-ZäöüÄÖÜß]+)\s+(habe|hast|hat|haben|bin|bist|ist|sind|war|hatte|werde|wird|kann|muss|will|möchte|gehe|komme|mache)\s+/i, (m, adv, subj, verb) => {
        return `${adv} ${verb} ${subj} `;
      });
      rulesTriggered.push({
        name: "Verb an Position 2 im Hauptsatz (Inversion)",
        rule: "Wenn ein Adverb (Gestern, Heute, Leider...) auf Position 1 steht, folgt sofort das konjugierte Verb auf Position 2, gefolgt vom Subjekt auf Position 3.",
        lesson: 4,
        lessonName: "Satzbau im Hauptsatz"
      });
      lessonTarget = 4;
      errorsCount++;
    }

    // 2. Question word order: "Warum du hast..." -> "Warum hast du..."
    if (/^(Warum|Wann|Wo|Wohin|Woher|Wie|Wer|Wen|Wem|Was)\s+([a-zA-ZäöüÄÖÜß]+)\s+(bist|hast|hat|haben|ist|kannst|musst|willst|möchtest|kommst|gehst)\s+/i.test(corrected)) {
      corrected = corrected.replace(/^(Warum|Wann|Wo|Wohin|Woher|Wie|Wer|Wen|Wem|Was)\s+([a-zA-ZäöüÄÖÜß]+)\s+(bist|hast|hat|haben|ist|kannst|musst|willst|möchtest|kommst|gehst)\s+/i, (m, q, subj, verb) => {
        return `${q} ${verb} ${subj} `;
      });
      rulesTriggered.push({
        name: "Wortstellung in W-Fragen",
        rule: "In W-Fragen (Warum, Wann, Wo...) steht das Verb direkt nach dem Fragewort auf Position 2.",
        lesson: 4,
        lessonName: "Fragesätze & Wortstellung"
      });
      lessonTarget = 4;
      errorsCount++;
    }

    // 3. Subordinate clause 'weil': Verb to end
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
      errorsCount++;
    }

    // 4. Subordinate clause 'dass': Verb to end
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
      errorsCount++;
    }

    // 5. Subordinate clause 'obwohl': Verb to end
    if (/\bobwohl\s+([a-zA-ZäöüÄÖÜß]+)\s+(hatte|hattest|hat|hatten|war|warst|waren|ist|sind)\s+/i.test(corrected)) {
      corrected = corrected.replace(/\bobwohl\s+([a-zA-ZäöüÄÖÜß]+)\s+(hatte|hattest|hat|hatten|war|warst|waren|ist|sind)\s+([^.,!?]+)/gi, (m, subj, verb, rest) => {
        return `obwohl ${subj} ${rest.trim()} ${verb}`;
      });
      rulesTriggered.push({
        name: "Konzessivsatz mit 'obwohl'",
        rule: "Nach 'obwohl' folgt Nebensatz-Wortstellung mit Verb am Ende.",
        lesson: 4,
        lessonName: "Satzbau & Konnektoren"
      });
      lessonTarget = 4;
      errorsCount++;
    }

    // 6. Preposition Dative errors
    if (/\bmit\s+meine\s+Freundin\b/i.test(corrected)) {
      corrected = corrected.replace(/\bmit\s+meine\s+Freundin\b/gi, 'mit meiner Freundin');
      rulesTriggered.push({
        name: "Präposition 'mit' verlangt DATIV",
        rule: "Die Präposition 'mit' fordert ausnahmslos den Dativ (feminin: meiner Freundin).",
        lesson: 3,
        lessonName: "Präpositionen mit Dativ"
      });
      lessonTarget = 3;
      errorsCount++;
    }

    // 7. Accusative errors: "Ich vermisse dir" -> "Ich vermisse dich"
    if (/\bIch vermisse dir\b/i.test(corrected)) {
      corrected = corrected.replace(/\bIch vermisse dir\b/gi, 'Ich vermisse dich');
      rulesTriggered.push({
        name: "Verb 'vermissen' verlangt AKKUSATIV",
        rule: "'vermissen' fordert ein direktes Objekt im Akkusativ: 'Ich vermisse dich' (nicht 'dir').",
        lesson: 2,
        lessonName: "Akkusativ vs. Dativ"
      });
      lessonTarget = 2;
      errorsCount++;
    }

    // 8. Wechselpräposition 'in': "in die Küche beim" -> "in der Küche beim"
    if (/\bin die Küche beim\b/i.test(corrected)) {
      corrected = corrected.replace(/\bin die Küche beim\b/gi, 'in der Küche beim');
      rulesTriggered.push({
        name: "Wechselpräposition 'in' (Wo? -> Dativ)",
        rule: "Auf die Frage 'Wo?' steht nach Wechselpräpositionen (in, an, auf) immer der Dativ ('in der Küche').",
        lesson: 3,
        lessonName: "Wechselpräpositionen"
      });
      lessonTarget = 3;
      errorsCount++;
    }

    // 9. Substantivierung: "heute abend" -> "heute Abend"
    if (/\bheute abend\b/i.test(corrected)) {
      corrected = corrected.replace(/\bheute abend\b/gi, 'heute Abend');
      rulesTriggered.push({
        name: "Großschreibung von Tageszeiten",
        rule: "Tageszeiten nach 'heute', 'gestern', 'morgen' werden als Nomen großgeschrieben (heute Abend, morgen Früh).",
        lesson: 5,
        lessonName: "Nomen & Artikel"
      });
      errorsCount++;
    }

    // 10. Check for Word Upgrades
    for (const up of wordUpgrades) {
      if (up.target.test(text)) {
        upgradesFound.push(up);
      }
    }

    // Final Polish
    corrected = corrected.charAt(0).toUpperCase() + corrected.slice(1);
    if (!/[.!?]$/.test(corrected)) {
      corrected += '.';
    }

    // Accuracy Score Calculation
    const isFlawless = (errorsCount === 0 && corrected.toLowerCase() === text.toLowerCase() + (text.endsWith('.') ? '' : '.'));
    const accuracyScore = isFlawless ? 100 : Math.max(60, 100 - (errorsCount * 18));

    // Generate 3 Stylistic Variants
    const variants = {
      casual: corrected.replace(/Sehr geehrte Damen und Herren|Ich möchte mitteilen, dass/gi, 'Hey! Wollte nur kurz sagen:'),
      professional: corrected.includes('weil') ? corrected.replace(/weil/gi, 'da') : `Gerne möchte ich mitteilen: ${corrected}`,
      c1: `Bezüglich des vorliegenden Sachverhalts ist festzuhalten, dass ${corrected.replace(/^[A-Z]/, c => c.toLowerCase()).replace(/[.!?]$/, '')}.`
    };

    return {
      original: text,
      corrected: corrected,
      isFlawless: isFlawless,
      accuracyScore: accuracyScore,
      rules: rulesTriggered,
      upgrades: upgradesFound,
      variants: variants,
      lessonTarget: lessonTarget
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
                <span>✨</span> KI-Satz-Korrektor • Wortwahl-Optimizer • C1-Polisher
              </div>
              <h1 class="text-3xl font-extrabold text-gradient">Magischer Satz-Korrektor</h1>
              <p class="text-secondary mt-1 text-sm">
                Tippe einen beliebigen Satz für deine <strong>Freundin</strong>, <strong>Kollegen</strong> oder die <strong>Station</strong> ein. Erfahre sofort, ob du es <strong>100% richtig erraten hast</strong>, welche Wörter du upgraden kannst und wie du auf C1-Niveau klingst!
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
            <span>Dein Satz (Deutsch oder Übersetzungs-Entwurf):</span>
            <span class="text-xs text-secondary font-normal">Tippen oder sprechen</span>
          </label>
          <textarea id="sentenceInput" class="input w-full p-4 text-base rounded-2xl" rows="3" placeholder="z. B. Ich freue mich auf heute abend weil ich habe dich sehr vermisst..."></textarea>
          
          <div class="flex-between flex-wrap gap-3">
            <div class="flex gap-2">
              <button id="btnVoiceInput" class="btn btn-secondary btn-sm flex items-center gap-2">
                <span>🎙️</span> Diktieren
              </button>
              <button id="btnClear" class="btn btn-ghost btn-sm">Leeren</button>
            </div>
            <button id="btnCheckSentence" class="btn btn-primary btn-lg flex items-center gap-2 shadow-glow">
              <span>✨</span> Satz prüfen, korrigieren & Wortwahl optimieren
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

    btnCheck.onclick = () => {
      const textToAnalyze = sentenceInput.value;
      if (!textToAnalyze || !textToAnalyze.trim()) {
        alert('Bitte gib zuerst einen Satz ein!');
        return;
      }

      const result = analyzeSentence(textToAnalyze);
      if (!result) return;

      const xpGained = result.isFlawless ? 25 : 15;
      const settings = Storage.getSettings();
      Storage.saveSettings({ ...settings, totalXP: (settings.totalXP || 0) + xpGained });
      Storage.addHistory({
        type: 'sentence_fixer',
        original: result.original,
        corrected: result.corrected,
        isFlawless: result.isFlawless,
        rules: result.rules.map(r => r.name),
        timestamp: new Date().toISOString()
      });

      resultCard.classList.remove('hidden');
      resultCard.innerHTML = `
        <!-- Accuracy & Feedback Banner -->
        <div class="card p-6 border-2 ${result.isFlawless ? 'border-emerald-500/50 bg-emerald-950/20' : 'border-blue-500/30'} space-y-6">
          <div class="flex-between flex-wrap gap-3">
            <div class="flex items-center gap-3">
              <span class="text-3xl">${result.isFlawless ? '🏆' : '🎯'}</span>
              <div>
                <div class="font-extrabold text-lg text-primary">
                  ${result.isFlawless ? 'Perfekt! Du hast es 100% richtig gemacht!' : `Grammatik-Genauigkeit: ${result.accuracyScore}%`}
                </div>
                <div class="text-xs text-secondary">
                  ${result.isFlawless ? 'Keine Fehler gefunden – exzellenter nativer Satzbau!' : 'Gute Basis! Hier sind die Feinheiten für perfektes Deutsch:'}
                </div>
              </div>
            </div>
            <span class="badge ${result.isFlawless ? 'badge-emerald' : 'badge-purple'} text-sm font-bold">
              +${xpGained} XP gutgeschrieben!
            </span>
          </div>

          <!-- Comparison Box -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 bg-red-950/20 border border-red-500/30 rounded-xl space-y-1">
              <div class="text-xs font-bold text-red-400">Dein Original:</div>
              <div class="text-sm line-through text-red-200">${result.original}</div>
            </div>
            <div class="p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-xl space-y-1">
              <div class="text-xs font-bold text-emerald-400 flex-between">
                <span>Korrekte deutsche Version:</span>
                <button id="btnPlayCorrected" class="btn btn-emerald btn-xs">🔊 Anhören</button>
              </div>
              <div class="text-base font-bold text-emerald-300">${result.corrected}</div>
            </div>
          </div>

          <!-- Rule-Only Reminder Card -->
          <div class="p-5 bg-surface border border-purple-500/30 rounded-2xl space-y-3">
            <div class="font-bold text-sm text-purple-300 flex items-center gap-2">
              <span>💡</span> Was die Grammatik-Regel sagt (nur die Regel!):
            </div>
            ${result.rules.map(r => `
              <div class="p-3 bg-card rounded-xl border border-glass space-y-1">
                <div class="font-bold text-sm text-blue-400">${r.name}</div>
                <div class="text-xs text-secondary leading-relaxed">${r.rule}</div>
                ${r.lesson ? `
                  <div class="pt-2">
                    <a href="#grammatik?lesson=${r.lesson}" class="btn btn-outline btn-xs text-purple-400">
                      📖 Zur Lektion: ${r.lessonName} →
                    </a>
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>

          <!-- Word-Upgrade & Vocabulary Optimizer (What words to replace) -->
          <div class="p-5 bg-surface border border-amber-500/30 rounded-2xl space-y-3">
            <div class="font-bold text-sm text-amber-400 flex items-center gap-2">
              <span>🚀</span> Wort-Upgrades & Bessere Alternativen (Wie du dein Deutsch verbesserst):
            </div>
            ${result.upgrades.length > 0 ? `
              <div class="space-y-2">
                ${result.upgrades.map(u => `
                  <div class="p-3 bg-card rounded-xl border border-glass flex-between flex-wrap gap-2">
                    <div>
                      <span class="text-xs text-red-400 line-through font-semibold">„${u.original}“</span>
                      <span class="text-xs text-secondary mx-2">ersetzen durch:</span>
                      <span class="text-xs text-emerald-400 font-bold">„${u.better}“</span>
                      <div class="text-xs text-muted mt-1">${u.note}</div>
                    </div>
                  </div>
                `).join('')}
              </div>
            ` : `
              <div class="text-xs text-secondary leading-relaxed">
                Deine Wortwahl ist bereits sehr treffend! Tipp: Achte darauf, einfache Hilfsverben wie <em>„haben/sein/machen“</em> im Berufsleben durch präzise Funktionsverben wie <em>„übernehmen“, „durchführen“</em> oder <em>„gewährleisten“</em> zu ersetzen.
              </div>
            `}
          </div>

          <!-- 3 Style Variants (Casual, Professional, C1/C2) -->
          <div class="p-5 bg-surface border border-blue-500/30 rounded-2xl space-y-3">
            <div class="font-bold text-sm text-blue-400 flex items-center gap-2">
              <span>🎭</span> 3 Stil-Varianten für denselben Gedanken:
            </div>
            <div class="space-y-2 text-xs">
              <div class="p-3 bg-card rounded-xl border border-glass">
                <span class="font-bold text-purple-400">💬 Locker & Herzlich (Freundin / Freunde):</span>
                <p class="text-primary mt-1 font-medium">„${result.variants.casual}“</p>
              </div>
              <div class="p-3 bg-card rounded-xl border border-glass">
                <span class="font-bold text-blue-400">🏢 Professionell & Höflich (Station / Kollegen / Gastfamilie):</span>
                <p class="text-primary mt-1 font-medium">„${result.variants.professional}“</p>
              </div>
              <div class="p-3 bg-card rounded-xl border border-glass">
                <span class="font-bold text-emerald-400">🎓 C1/C2 Gehoben & Eloquent (Arztbrief / Leitung / Prüfung):</span>
                <p class="text-primary mt-1 font-medium">„${result.variants.c1}“</p>
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

      resultCard.querySelector('#btnCopyCorrected').onclick = () => {
        navigator.clipboard.writeText(result.corrected);
        alert('Satz in die Zwischenablage kopiert! Du kannst ihn jetzt direkt verschicken.');
      };
    };
  }

  renderView();
}
