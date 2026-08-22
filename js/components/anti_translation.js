// Anti-Übersetzungs-Trainer (Direct German Thinking)
// Bricht die Gewohnheit des mentalen Hin- und Her-Übersetzens ins Englische.
// Trainiert direktes deutsches Konzept-Mapping, Reaktionsübungen und Falsche-Freunde-Busting.

import { Storage } from '../storage.js';
import { Speech } from '../speech.js';

export function renderAntiTranslation(container) {
  let activeTab = 'monolingual'; // 'monolingual' | 'reaction' | 'false_friends'
  let currentScore = 0;
  let currentStreak = 0;

  const monolingualChallenges = [
    {
      conceptDe: "Eine leitende Pflegeperson im Krankenhaus, die für die Organisation der Station und Dienstpläne verantwortlich ist.",
      options: ["die Stationsleitung", "der Patient", "der Notfallwagen", "das Kurvenblatt"],
      correct: 0,
      cue: "🏢 Führungskraft auf Station",
      explanation: "Die 'Stationsleitung' leitet die Station. Nicht ins Englische übersetzen – direkt mit der Rolle und Verantwortung verknüpfen!"
    },
    {
      conceptDe: "Die psychische Fähigkeit, Enttäuschungen, Verzögerungen und Frust ohne Aggression gelassen auszuhalten.",
      options: ["die Frustrationstoleranz", "die Schweigepflicht", "die Dissoziation", "die Nahrungsaufnahme"],
      correct: 0,
      cue: "🧠 Seelische Eigenschaft",
      explanation: "'Frustrationstoleranz' = Frust aushalten können. Direkt als deutsches psychologisches Fachwort abspeichern!"
    },
    {
      conceptDe: "Eine geliebte Person durch achtsames Zuhören, liebevolle Worte und Nähe in einer schweren Notlage beruhigen.",
      options: ["trösten", "verweigern", "randalieren", "aufweisen"],
      correct: 0,
      cue: "❤️ Zwischenmenschliche Handlung",
      explanation: "'trösten' = Trost spenden. Bild im Kopf verankern: Jemanden sanft in den Arm nehmen."
    },
    {
      conceptDe: "Den Esstisch nach der Mahlzeit von Tellern, Tassen und Besteck befreien.",
      options: ["den Tisch abräumen", "den Tisch decken", "einen Termin vereinbaren", "Bescheid geben"],
      correct: 0,
      cue: "🍽️ Haushalt & Küche",
      explanation: "'abräumen' = Geschirr wegräumen. Nicht 'clean the table' übersetzen, sondern als feste Handlung sehen!"
    },
    {
      conceptDe: "Ein freudiges Gefühl im Hinblick auf ein bevorstehendes schönes Ereignis in der Zukunft empfinden.",
      options: ["sich freuen auf", "sich freuen über", "vermissen", "verwöhnen"],
      correct: 0,
      cue: "💌 Vorfreude",
      explanation: "'sich freuen auf (+ Akk.)' = in die Zukunft blicken. 'sich freuen über' = über ein vergangenes Ereignis/Geschenk."
    },
    {
      conceptDe: "Das schmerzhafte Gefühl des Fehlens einer geliebten Person spüren.",
      options: ["vermissen", "zuhören", "aufräumen", "bestellen"],
      correct: 0,
      cue: "💌 Sehnsucht",
      explanation: "'vermissen' = to miss. Immer mit Akkusativ: 'Ich vermisse dich!'"
    },
    {
      conceptDe: "Ein Gefühl von tiefem seelischem Schutz, Wärme, Vertrauen und innerer Sicherheit.",
      options: ["die Geborgenheit", "die Anspannung", "die Einsamkeit", "die Scham"],
      correct: 0,
      cue: "✨ Deutsches Unwort / Gefühl",
      explanation: "'Geborgenheit' ist ein einzigartiges deutsches Wort für vollkommenen Schutz, Wärme und Liebe."
    },
    {
      conceptDe: "Medikamente, die nur bei akuter Notwendigkeit nach ärztlicher Anordnung gegeben werden.",
      options: ["die Bedarfsmedikation", "die Dauerabstinenz", "die Sachleistung", "die Hausordnung"],
      correct: 0,
      cue: "💊 Psychiatrie & Pflege",
      explanation: "'Bedarfsmedikation' = bei Bedarf. Nicht 'as needed medicine' denken – 'Bedarfsmedikation' ist das feste Wort."
    },
    {
      conceptDe: "Gesetzliche Pflicht nach § 203 StGB, Patientendaten und Geheimnisse streng vertraulich zu behandeln.",
      options: ["die Schweigepflicht", "die Probezeit", "die Verpflegungspauschale", "die Abweichung"],
      correct: 0,
      cue: "⚖️ Klinikrecht & Ethik",
      explanation: "'Schweigepflicht' = Pflicht zum Schweigen über Patientendaten."
    },
    {
      conceptDe: "Mobilisierbarer fahrbarer Notfallschrank mit Defibrillator, Beatmungsbeutel und Reanimationsmedikamenten.",
      options: ["der Notfallwagen", "der Rollstuhl", "der Infusionsständer", "der Wäscheständer"],
      correct: 0,
      cue: "🚨 Notfall & Klinik",
      explanation: "'Notfallwagen' = Crash Cart. Direkt mit dem roten Wagen auf dem Stationsgang verknüpfen!"
    },
    {
      conceptDe: "Numerische Skala von 0 bis 10 zur Erfassung der subjektiven Schmerzstärke eines Patienten.",
      options: ["die Schmerzskala (NRS)", "die Vitalzeichen", "das Kurvenblatt", "die Anordnung"],
      correct: 0,
      cue: "🩺 Pflege & Diagnostik",
      explanation: "'die Schmerzskala' = Skala von 0 (kein Schmerz) bis 10 (unerträglich)."
    },
    {
      conceptDe: "Das zeitweise Abspalten von Wahrnehmung, Gefühlen oder Körperempfindungen bei starkem Trauma.",
      options: ["die Dissoziation", "die Reizüberflutung", "die Manie", "die Phobie"],
      correct: 0,
      cue: "🧠 Traumapsychologie",
      explanation: "'Dissoziation' = seelische Schutzabspaltung. Nicht übersetzen, direkt als Schutzmechanismus verstehen!"
    },
    {
      conceptDe: "Aktivierung der 5 Sinne (Sehen, Hören, Fühlen, Riechen, Schmecken), um im Hier und Jetzt zu landen.",
      options: ["die Erdung (Grounding)", "die Fixierung", "die Somatisierung", "die Intoxikation"],
      correct: 0,
      cue: "🌱 Skills & Beruhigung",
      explanation: "'Erdung' = 5-4-3-2-1 Methode zur Rückkehr in die Realität."
    },
    {
      conceptDe: "Jemandem durch feines Essen, besondere Aufmerksamkeit und Verwöhnung eine große Freude machen.",
      options: ["verwöhnen", "nachvollziehen", "absetzen", "sedieren"],
      correct: 0,
      cue: "❤️ Beziehung & Liebe",
      explanation: "'verwöhnen' = jemanden liebevoll umsorgen."
    },
    {
      conceptDe: "Im Restaurant übliche Praxis, dass jeder Gast seine eigene Rechnung separat bezahlt.",
      options: ["getrennt zahlen", "auf eigene Faust", "Trinkgeld geben", "zur Sprache bringen"],
      correct: 0,
      cue: "☕ Restaurant & Kultur",
      explanation: "'getrennt zahlen' = typisch deutsche Restauranterfahrung. 'Zusammen oder getrennt?' -> 'Getrennt, bitte!'"
    }
  ];

  const falseFriendsTraps = [
    {
      trap: "Ich bin kalt.",
      correct: "Mir ist kalt.",
      explanation: "'Ich bin kalt' bedeutet im Deutschen 'Ich bin ein gefühlloser/toter Mensch'. Für das Temperaturempfinden sagt man immer 'Mir ist kalt / warm / heiß' (Dativ)."
    },
    {
      trap: "Ich bekomme einen Arzt.",
      correct: "Ich werde Arzt / Ich gehe zum Arzt.",
      explanation: "'to become' heißt 'werden', NICHT 'bekommen'! 'Bekommen' bedeutet 'to receive/get'."
    },
    {
      trap: "Das macht Sinn.",
      correct: "Das ergibt Sinn / Das ist sinnvoll.",
      explanation: "Im Deutschen 'macht' Sinn nichts – Sinn 'ergibt' sich oder etwas 'ist sinnvoll'."
    },
    {
      trap: "Er ist aktuell mein Chef.",
      correct: "Er ist zurzeit / momentan mein Chef.",
      explanation: "'aktuell' bedeutet 'current/up to date', NICHT 'actually' (das heißt 'tatsächlich' oder 'eigentlich')."
    },
    {
      trap: "Ich vermisse dir.",
      correct: "Ich vermisse dich.",
      explanation: "'vermissen' verlangt immer den Akkusativ (dich, ihn, sie, uns), niemals Dativ (dir)."
    },
    {
      trap: "Ich liebe dir.",
      correct: "Ich liebe dich.",
      explanation: "Klassischer Akkusativfall für Gefühlsäußerungen: 'Ich liebe dich'."
    },
    {
      trap: "Ich frage dich für Hilfe.",
      correct: "Ich bitte dich um Hilfe / Ich frage dich nach Hilfe.",
      explanation: "Im Deutschen bittet man jemanden 'um' Hilfe (Akkusativ), man fragt nicht 'für'."
    },
    {
      trap: "Ich habe Angst von Hunden.",
      correct: "Ich habe Angst vor Hunden.",
      explanation: "'Angst haben' verlangt im Deutschen die Präposition 'vor' (+ Dativ)."
    },
    {
      trap: "Ich stimme mit dir überein.",
      correct: "Ich stimme dir zu / Ich bin deiner Meinung.",
      explanation: "'zustimmen' verlangt einfach den Dativ: 'Ich stimme dir voll zu!'"
    },
    {
      trap: "Ich will ein Foto von uns machen lassen.",
      correct: "Lass uns ein Foto zusammen machen.",
      explanation: "Natürliches Deutsch nutzt 'Lass uns...' statt komplizierter wörtlicher englischer Satzstrukturen."
    }
  ];

  const reactionPrompts = [
    {
      theme: "💌 Freundin & Liebe",
      situation: "Deine Freundin schreibt dir um 18 Uhr: 'Ich hatte einen anstrengenden Tag und vermisse dich. Wann sehen wir uns?'",
      prompt: "Reagiere direkt auf Deutsch mit Zuneigung, Verständnis und einem konkreten Plan!",
      idealAnswers: [
        "Ich vermisse dich auch sehr! Ich bin in 30 Minuten bei dir, dann koche ich uns etwas Leckeres und wir machen es uns gemütlich.",
        "Oh, du Arme! Ich freue mich schon riesig auf dich. Ruh dich kurz aus, ich beeile mich und bringe dein Lieblingsdessert mit!"
      ]
    },
    {
      theme: "🏢 Station & BFD-Alltag",
      situation: "Die Stationsleitung fragt dich während der Übergabe: 'Ali, könntest du bitte kurz nachsehen, ob in Zimmer 12 frische Handtücher sind?'",
      prompt: "Reagiere sofort professionell, verbindlich und auf den Punkt!",
      idealAnswers: [
        "Ja, sehr gerne! Ich gehe sofort nachsehen und bringe bei Bedarf direkt frische Handtücher mit.",
        "Mache ich sofort! Ich gebe Ihnen in fünf Minuten kurz Rückmeldung."
      ]
    },
    {
      theme: "🏠 Gastfamilie Fröhlich",
      situation: "Frau Fröhlich sagt beim Abendessen: 'Das Essen ist fertig! Möchtest du dich schon an den Tisch setzen?'",
      prompt: "Reagiere dankbar, höflich und biete deine Hilfe an!",
      idealAnswers: [
        "Vielen Dank, das riecht fantastisch! Darf ich Ihnen noch helfen, die Schüsseln und Gläser auf den Tisch zu stellen?",
        "Sehr gerne, danke! Ich helfe Ihnen eben noch beim Servieren."
      ]
    },
    {
      theme: "☕ Café & Oberstadt Marburg",
      situation: "Die Bedienung im Café am Marktplatz fragt: 'Möchten Sie zusammen oder getrennt zahlen?'",
      prompt: "Antworte schnell, natürlich und gib ein passendes Trinkgeld!",
      idealAnswers: [
        "Getrennt, bitte. Für mich macht das 7,20 Euro – machen Sie bitte 8 Euro daraus. Vielen Dank!",
        "Bitte getrennt. Machen wir 10 Euro glatt, der Rest ist für Sie!"
      ]
    },
    {
      theme: "🚨 Klinik-Notfall / Unruhe",
      situation: "Ein unruhiger Patient kommt aufgebracht zum Stationszimmer und verlangt lautstark nach dem Chefarzt.",
      prompt: "Deeskaliere die Situation ruhig, verständnisvoll und setze klare Grenzen!",
      idealAnswers: [
        "Guten Tag, Herr Weber. Ich sehe, dass Sie sehr aufgebracht sind. Kommen Sie kurz mit mir in den Aufenthaltsraum, ich hole sofort die zuständige Schwester für Sie.",
        "Ich höre Ihnen zu. Lassen Sie uns ruhig sprechen. Ich gebe der Pflegefachkraft sofort Bescheid."
      ]
    }
  ];

  function renderView() {
    container.innerHTML = `
      <div class="anti-translation-wrapper animate-fadeIn max-w-4xl mx-auto space-y-6">
        <!-- Header -->
        <div class="hero-card">
          <div class="flex-between flex-wrap gap-4">
            <div>
              <div class="badge badge-emerald mb-2">
                <span>🧠</span> Monolinguales Denken • Stop Translating!
              </div>
              <h1 class="text-3xl font-extrabold text-gradient">Anti-Übersetzungs-Trainer</h1>
              <p class="text-secondary mt-1 text-sm">
                Schluss mit mentalen Übersetzungs-Schleifen ins Englische! Trainiere dein Gehirn darauf, <strong>direkt auf Deutsch zu denken, zu fühlen und intuitiv zu reagieren</strong>.
              </p>
            </div>
            <div class="flex items-center gap-3 bg-surface p-3 rounded-2xl border border-glass">
              <div class="text-center">
                <div class="text-xs text-secondary">Punkte</div>
                <div class="font-bold text-emerald-400 text-lg" id="scoreDisplay">${currentScore} XP</div>
              </div>
            </div>
          </div>

          <!-- Tabs -->
          <div class="flex flex-wrap gap-2 mt-6 pt-4 border-t border-glass">
            <button class="btn ${activeTab === 'monolingual' ? 'btn-primary' : 'btn-secondary'} btn-sm tab-btn" data-tab="monolingual">
              🎯 Direktes Konzept-Mapping (${monolingualChallenges.length})
            </button>
            <button class="btn ${activeTab === 'reaction' ? 'btn-primary' : 'btn-secondary'} btn-sm tab-btn" data-tab="reaction">
              ⚡ Blitz-Reaktions-Trainer (${reactionPrompts.length})
            </button>
            <button class="btn ${activeTab === 'false_friends' ? 'btn-primary' : 'btn-secondary'} btn-sm tab-btn" data-tab="false_friends">
              🚫 Falsche-Freunde-Buster (${falseFriendsTraps.length})
            </button>
          </div>
        </div>

        <!-- Content Area -->
        <div id="tabContent" class="space-y-4"></div>
      </div>
    `;

    const tabContent = container.querySelector('#tabContent');

    if (activeTab === 'monolingual') {
      let idx = 0;
      function showMonolingual(i) {
        const item = monolingualChallenges[i % monolingualChallenges.length];
        tabContent.innerHTML = `
          <div class="card p-6 space-y-6">
            <div class="flex-between">
              <span class="badge badge-indigo text-xs">${item.cue}</span>
              <span class="text-xs text-secondary font-bold">Aufgabe ${ (i % monolingualChallenges.length) + 1 } von ${monolingualChallenges.length}</span>
            </div>

            <div class="p-6 bg-surface rounded-2xl border border-glass text-center space-y-2">
              <div class="text-xs text-secondary uppercase font-bold tracking-wider">Deutsches Konzept (ohne Englisch!):</div>
              <div class="text-lg font-bold text-primary leading-relaxed">${item.conceptDe}</div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${item.options.map((opt, optIdx) => `
                <button class="btn btn-secondary p-4 text-left justify-start font-bold text-sm opt-btn hover:border-blue-500 rounded-xl" data-opt="${optIdx}">
                  ${opt}
                </button>
              `).join('')}
            </div>

            <div id="monoFeedback" class="hidden p-4 rounded-xl space-y-2"></div>
          </div>
        `;

        const feedback = tabContent.querySelector('#monoFeedback');
        tabContent.querySelectorAll('.opt-btn').forEach(btn => {
          btn.onclick = () => {
            const chosen = parseInt(btn.getAttribute('data-opt'));
            feedback.classList.remove('hidden');
            if (chosen === item.correct) {
              currentScore += 10;
              container.querySelector('#scoreDisplay').innerText = currentScore + ' XP';
              feedback.className = "p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-emerald-300 text-sm space-y-2";
              feedback.innerHTML = `
                <div class="font-bold flex items-center justify-between">
                  <span>✓ Richtig gedacht! (+10 XP)</span>
                  <button id="btnPlayWord" class="btn btn-secondary btn-xs">🔊 Anhören</button>
                </div>
                <div>${item.explanation}</div>
                <button id="btnNextMono" class="btn btn-emerald btn-sm mt-2">Nächstes Konzept →</button>
              `;
              feedback.querySelector('#btnPlayWord').onclick = () => Speech.speak(item.options[item.correct]);
              const settings = Storage.getSettings();
              Storage.saveSettings({ ...settings, totalXP: (settings.totalXP || 0) + 10 });
            } else {
              feedback.className = "p-4 rounded-xl bg-red-950/30 border border-red-500/40 text-red-300 text-sm space-y-2";
              feedback.innerHTML = `
                <div class="font-bold">✗ Noch nicht ganz.</div>
                <div>${item.explanation}</div>
                <button id="btnNextMono" class="btn btn-secondary btn-sm mt-2">Weiter →</button>
              `;
            }
            feedback.querySelector('#btnNextMono').onclick = () => showMonolingual(i + 1);
          };
        });
      }
      showMonolingual(idx);
    } else if (activeTab === 'reaction') {
      tabContent.innerHTML = `
        <div class="space-y-4">
          ${reactionPrompts.map((rp, rIdx) => `
            <div class="card p-6 space-y-4">
              <div class="flex-between">
                <span class="badge badge-purple text-xs">${rp.theme}</span>
                <span class="text-xs text-secondary font-bold">Situation ${rIdx+1} von ${reactionPrompts.length}</span>
              </div>

              <div class="p-4 bg-surface rounded-xl border border-glass font-semibold text-sm leading-relaxed">
                "${rp.situation}"
              </div>
              <div class="text-xs text-secondary font-medium">${rp.prompt}</div>

              <textarea class="input w-full p-3 text-sm rounded-xl reaction-input" rows="2" placeholder="Tippe deine spontane deutsche Antwort ohne mentale Übersetzung..."></textarea>

              <div class="flex-between">
                <button class="btn btn-primary btn-sm btn-show-reaction" data-index="${rIdx}">
                  Musterantworten ansehen & anhören (+10 XP)
                </button>
              </div>

              <div id="reactionAns_${rIdx}" class="hidden p-4 bg-blue-950/20 border border-blue-500/30 rounded-2xl space-y-3 text-xs">
                <div class="font-bold text-blue-400 text-sm">Natürliche muttersprachliche Reaktionen:</div>
                <div class="space-y-2">
                  ${rp.idealAnswers.map((ans, aIdx) => `
                    <div class="p-3 bg-card rounded-xl border border-glass flex-between items-center gap-3">
                      <span class="text-primary font-medium text-sm">„${ans}“</span>
                      <button class="btn btn-ghost btn-xs btn-speak-ans" data-text="${ans}">🔊</button>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `;

      tabContent.querySelectorAll('.btn-speak-ans').forEach(btn => {
        btn.onclick = () => Speech.speak(btn.getAttribute('data-text'));
      });

      tabContent.querySelectorAll('.btn-show-reaction').forEach(btn => {
        btn.onclick = () => {
          const idx = btn.getAttribute('data-index');
          const ansBox = tabContent.querySelector('#reactionAns_' + idx);
          ansBox.classList.toggle('hidden');
          currentScore += 10;
          container.querySelector('#scoreDisplay').innerText = currentScore + ' XP';
          const settings = Storage.getSettings();
          Storage.saveSettings({ ...settings, totalXP: (settings.totalXP || 0) + 10 });
        };
      });
    } else if (activeTab === 'false_friends') {
      tabContent.innerHTML = `
        <div class="card p-6 space-y-4">
          <div class="flex-between">
            <h3 class="font-bold text-base flex items-center gap-2">
              <span>🚫</span> Die 10 gefährlichsten Deutsch-Englisch Übersetzungsfallen
            </h3>
            <span class="badge badge-amber text-xs">${falseFriendsTraps.length} Fallen</span>
          </div>

          <div class="space-y-4">
            ${falseFriendsTraps.map((trap, tIdx) => `
              <div class="p-4 bg-surface rounded-2xl border border-glass space-y-2">
                <div class="flex-between items-start">
                  <div class="flex items-center gap-3 flex-wrap">
                    <span class="text-red-400 font-bold line-through text-sm">✗ ${trap.trap}</span>
                    <span class="text-emerald-400 font-bold text-sm">✓ ${trap.correct}</span>
                  </div>
                  <button class="btn btn-secondary btn-xs btn-speak-trap" data-text="${trap.correct}">🔊</button>
                </div>
                <div class="text-xs text-secondary leading-relaxed">${trap.explanation}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;

      tabContent.querySelectorAll('.btn-speak-trap').forEach(btn => {
        btn.onclick = () => Speech.speak(btn.getAttribute('data-text'));
      });
    }

    container.querySelectorAll('.tab-btn').forEach(b => {
      b.onclick = () => {
        activeTab = b.getAttribute('data-tab');
        renderView();
      };
    });
  }

  renderView();
}
