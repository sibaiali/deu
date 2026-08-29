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
      explanation: "Die 'Stationsleitung' leitet die Station. Nicht ins Englische übersetzen – direkt mit der Rolle verknüpfen!"
    },
    {
      conceptDe: "Ein tiefes seelisches Gefühl von Wärme, Schutz, Vertrauen und innerer Sicherheit bei einem geliebten Menschen.",
      options: ["die Geborgenheit", "die Anspannung", "die Einsamkeit", "die Scham"],
      correct: 0,
      cue: "❤️ Deutsches Gefühlswort",
      explanation: "'Geborgenheit' existiert so im Englischen nicht wörtlich – direkt als warmes Schutzgefühl im Herzen verankern!"
    },
    {
      conceptDe: "Der feinfühlige Prozess, bei dem eine Bezugsperson durch die eigene innere Ruhe einem übererregten Kind hilft, sein Nervensystem zu beruhigen.",
      options: ["die Co-Regulation", "die Bestrafung", "das Wegsperren", "die Gleichgültigkeit"],
      correct: 0,
      cue: "👶 Kinderpsychologie & KJP",
      explanation: "'Co-Regulation' = Beruhigung über das ruhige Nervensystem des Erwachsenen."
    },
    {
      conceptDe: "Die exklusive, ungestörte und liebevolle gemeinsame Zeit zweier Partner.",
      options: ["die Zweisamkeit", "die Einsamkeit", "die Schichtarbeit", "die Besprechung"],
      correct: 0,
      cue: "❤️ Partnerschaft",
      explanation: "'Zweisamkeit' = bewusste Zeit zu zweit. Nicht übersetzen, sondern als kostbare Paarzeit empfinden!"
    },
    {
      conceptDe: "Höflich und gezielt in ein laufendes Fachgespräch eingreifen, um einen Aspekt zu ergänzen.",
      options: ["einhaken", "schreien", "verlassen", "leugnen"],
      correct: 0,
      cue: "💬 Diskurs & Besprechung",
      explanation: "'Darf ich kurz einhaken?' = die eleganteste Formulierung für professionelle Einwände."
    },
    {
      conceptDe: "Vollkommen satt sein und beim Essen keinen Bissen mehr hinunterbekommen.",
      options: ["pappsatt", "hungrig", "durstig", "erschöpft"],
      correct: 0,
      cue: "🍽️ Tischkultur & Alltag",
      explanation: "'Ich bin pappsatt!' = herzliche deutsche Art zu sagen, dass man rundum gesättigt ist."
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
      cue: "🍽️ Haushalt & Familie",
      explanation: "'abräumen' = Geschirr wegräumen. Nicht 'clean the table' übersetzen, sondern als feste Handlung sehen!"
    }
  ];

  const falseFriendsTraps = [
    {
      trap: "Ich bekomme einen Arzt.",
      correct: "Ich werde Arzt / Ich werde Ärztin.",
      explanation: "'bekommen' bedeutet 'to receive / get' (z. B. 'Ich bekomme ein Geschenk'). 'To become' heißt im Deutschen 'werden'!"
    },
    {
      trap: "Ich bin eventuell zu spät.",
      correct: "Eventuell komme ich später (möglicherweise) vs. Schließlich / Am Ende kam ich zu spät (eventually).",
      explanation: "'eventuell' heißt im Deutschen 'vielleicht / möglicherweise' – NICHT 'am Ende' (eventually)."
    },
    {
      trap: "Er ist mein Chefkoch.",
      correct: "Er ist mein Chef / Vorgesetzter (im Beruf) vs. Chefkoch (in der Restaurantküche).",
      explanation: "'Chef' bedeutet auf Deutsch der Vorgesetzte/Arbeitgeber, nicht zwingend der Küchenchef."
    },
    {
      trap: "Ich spendiere meine Zeit im Krankenhaus.",
      correct: "Ich verbringe Zeit im Krankenhaus (to spend time) vs. Ich spendiere einen Kaffee (to treat someone).",
      explanation: "'Zeit verbringen' = to spend time. 'spendieren' = jemandem etwas spendieren/ausgeben."
    },
    {
      trap: "Das Kind ist sehr brav.",
      correct: "Das Kind ist brav (well-behaved / artig) vs. Er ist tapfer/mutig (brave).",
      explanation: "'brav' bedeutet folgsam/artig, NICHT mutig (brave = mutig/tapfer)."
    },
    {
      trap: "Ich liebe für dich.",
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
    }
  ];

  const reactionPrompts = [
    {
      theme: "❤️ Freundin / Ehefrau",
      situation: "Deine Freundin schreibt dir: 'Ich hatte einen schrecklichen Tag auf der Arbeit und vermisse dich so sehr. Wann kommst du nach Hause?'",
      prompt: "Reagiere direkt auf Deutsch mit Zuneigung, Verständnis und einem konkreten Entlastungsplan!",
      idealAnswers: [
        "Ich vermisse dich auch so sehr, mein Schatz! Ich mache mich sofort auf den Weg, koche uns etwas Schönes und dann ruhst du dich ganz fest an mich gekuschelt aus.",
        "Oh du Arme, lass dich ganz fest umarmen! Ich bin in 20 Minuten bei dir, bringe dein Lieblingsdessert mit und halte dir heute den Rücken frei."
      ]
    },
    {
      theme: "🏥 Station & BFD-Alltag",
      situation: "Die Stationsleitung fragt dich während der Übergabe: 'Ali, könntest du bitte kurz nachsehen, ob in Zimmer 12 frische Handtücher sind?'",
      prompt: "Reagiere sofort professionell, verbindlich und auf den Punkt!",
      idealAnswers: [
        "Ja, sehr gerne, Frau Schneider! Ich gehe sofort nachsehen und bringe bei Bedarf direkt frische Handtücher mit.",
        "Mache ich unverzüglich! Ich gebe Ihnen in fünf Minuten kurz Rückmeldung."
      ]
    },
    {
      theme: "🏡 Familie & Gastfreundschaft",
      situation: "Die Gastgeberin sagt beim Abendessen: 'Greif bitte noch einmal kräftig zu, Ali! Es ist noch reichlich Braten da.'",
      prompt: "Reagiere höflich, lobend und erkläre, ob du Nachschlag möchtest oder wunschlos satt bist!",
      idealAnswers: [
        "Vielen Dank, aber ich bin wirklich wunschlos satt! Es hat ganz hervorragend geschmeckt.",
        "Ein ganz kleines Stück nehme ich noch sehr gerne, es schmeckt wirklich vorzüglich!"
      ]
    },
    {
      theme: "👶 Kinderpsychologie & Beruhigung",
      situation: "Ein 5-jähriges Kind weint panisch vor dem Blutdruckmessen und zieht den Arm weg.",
      prompt: "Gehe auf Augenhöhe und beruhige das Kind mit kindgerechter Sprache!",
      idealAnswers: [
        "Schau mal, diese kleine Manschette pustet sich nur kurz wie ein Luftballon auf und umarmt deinen Arm ganz fest. Wollen wir zuerst deinem Teddy den Blutdruck messen?",
        "Ich bin ganz vorsichtig. Es tut überhaupt nicht weh, es kribbelt nur ein bisschen wie ein Zauberkissen."
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
              <span class="badge badge-amber mb-2">
                 Monolinguales Denken • Stop Translating!
              </span>
              <h1 class="page-title">🧠 Anti-Übersetzungs-Trainer</h1>
              <p class="subtitle mt-1">
                Schluss mit mentalen Übersetzungs-Schleifen ins Englische! Trainiere dein Gehirn darauf, <strong>direkt auf Deutsch zu denken, zu fühlen und intuitiv zu reagieren</strong>.
              </p>
            </div>
            <div class="flex items-center gap-3 bg-surface p-3 rounded-2xl border border-subtle">
              <div class="text-center">
                <div class="text-xs text-secondary">Lern-Punkte</div>
                <div class="font-extrabold text-amber-400 text-lg" id="scoreDisplay">${currentScore} XP</div>
              </div>
            </div>
          </div>

          <!-- Tabs -->
          <div class="flex flex-wrap gap-2 mt-4 pt-4 border-t border-subtle">
            <button class="btn ${activeTab === 'monolingual' ? 'btn-primary' : 'btn-secondary'} btn-xs tab-btn" data-tab="monolingual">
              🎯 Direktes Konzept-Mapping (${monolingualChallenges.length})
            </button>
            <button class="btn ${activeTab === 'reaction' ? 'btn-primary' : 'btn-secondary'} btn-xs tab-btn" data-tab="reaction">
              ⚡ Blitz-Reaktions-Trainer (${reactionPrompts.length})
            </button>
            <button class="btn ${activeTab === 'false_friends' ? 'btn-primary' : 'btn-secondary'} btn-xs tab-btn" data-tab="false_friends">
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
          <div class="bento-card p-6 space-y-6 border border-subtle">
            <div class="flex-between">
              <span class="badge badge-amber text-xs">${item.cue}</span>
              <span class="text-xs text-secondary font-bold">Aufgabe ${ (i % monolingualChallenges.length) + 1 } von ${monolingualChallenges.length}</span>
            </div>

            <div class="p-6 bg-subtle rounded-2xl border border-subtle text-center space-y-2">
              <div class="text-xs text-muted uppercase font-bold tracking-wider">Deutsches Konzept (ohne Englisch!):</div>
              <div class="text-lg font-bold text-primary leading-relaxed">${item.conceptDe}</div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3" id="optionsGrid">
              ${item.options.map((opt, oIdx) => `
                <button class="p-4 bg-surface rounded-xl border border-subtle text-left font-semibold text-sm hover:border-amber-500 transition-all opt-btn" data-idx="${oIdx}">
                  ${opt}
                </button>
              `).join('')}
            </div>

            <div id="monoFeedback" class="hidden p-4 rounded-xl text-xs space-y-2"></div>
          </div>
        `;

        const feedback = tabContent.querySelector('#monoFeedback');
        tabContent.querySelectorAll('.opt-btn').forEach(btn => {
          btn.onclick = () => {
            const selected = parseInt(btn.getAttribute('data-idx'));
            tabContent.querySelectorAll('.opt-btn').forEach(b => b.disabled = true);

            feedback.classList.remove('hidden');
            if (selected === item.correct) {
              currentScore += 10;
              currentStreak++;
              btn.classList.add('border-emerald-500', 'bg-emerald-950/20', 'text-emerald-300');
              feedback.className = 'p-4 rounded-xl text-xs bg-emerald-950/30 border border-emerald-500/40 text-emerald-300 space-y-2 animate-fadeIn';
              feedback.innerHTML = `
                <div>✓ <strong>Hervorragend!</strong> ${item.explanation}</div>
                <button id="btnNextMono" class="btn btn-primary btn-xs mt-2">Nächste Aufgabe →</button>
              `;
            } else {
              currentStreak = 0;
              btn.classList.add('border-red-500', 'bg-red-950/20', 'text-red-400');
              feedback.className = 'p-4 rounded-xl text-xs bg-red-950/30 border border-red-500/40 text-red-300 space-y-2 animate-fadeIn';
              feedback.innerHTML = `
                <div>❌ <strong>Nicht ganz:</strong> Richtig ist <em>${item.options[item.correct]}</em>. ${item.explanation}</div>
                <button id="btnNextMono" class="btn btn-secondary btn-xs mt-2">Weiter →</button>
              `;
            }

            container.querySelector('#scoreDisplay').textContent = `${currentScore} XP`;
            tabContent.querySelector('#btnNextMono').onclick = () => {
              idx++;
              showMonolingual(idx);
            };
          };
        });
      }
      showMonolingual(idx);

    } else if (activeTab === 'reaction') {
      let rIdx = 0;
      function showReaction(i) {
        const item = reactionPrompts[i % reactionPrompts.length];
        tabContent.innerHTML = `
          <div class="bento-card p-6 space-y-5 border border-subtle">
            <div class="flex-between">
              <span class="badge badge-amber text-xs">${item.theme}</span>
              <span class="text-xs text-secondary font-bold">Situation ${ (i % reactionPrompts.length) + 1 } von ${reactionPrompts.length}</span>
            </div>

            <div class="p-4 bg-subtle rounded-2xl border border-subtle space-y-1">
              <div class="text-xs font-bold text-amber-400 uppercase">Eingehende Situation:</div>
              <div class="text-sm font-semibold text-primary italic">"${item.situation}"</div>
            </div>

            <div class="p-3 bg-surface rounded-xl border border-blue-500/25 text-xs text-secondary">
              ⚡ <strong>Deine Aufgabe:</strong> ${item.prompt}
            </div>

            <div class="space-y-2">
              <textarea id="reactionInput" rows="3" placeholder="Tippe deine spontane deutsche Antwort hier ein..." class="w-full p-3 bg-subtle border border-subtle rounded-xl text-primary text-xs outline-none focus:border-amber-500"></textarea>
              <div class="flex justify-between items-center">
                <button id="btnRevealIdeal" class="btn btn-secondary btn-xs">Musterantworten anzeigen</button>
                <button id="btnNextReaction" class="btn btn-primary btn-xs">Nächste Situation →</button>
              </div>
            </div>

            <div id="idealAnswersBox" class="hidden p-4 bg-surface rounded-xl border border-emerald-500/30 space-y-2 animate-fadeIn text-xs">
              <div class="font-bold text-emerald-400">✓ Natürliche deutsche Musterantworten:</div>
              <ul class="list-disc list-inside text-secondary space-y-1">
                ${item.idealAnswers.map(ans => `<li class="italic font-medium text-primary">"${ans}"</li>`).join('')}
              </ul>
            </div>
          </div>
        `;

        tabContent.querySelector('#btnRevealIdeal').onclick = () => {
          tabContent.querySelector('#idealAnswersBox').classList.remove('hidden');
        };

        tabContent.querySelector('#btnNextReaction').onclick = () => {
          rIdx++;
          showReaction(rIdx);
        };
      }
      showReaction(rIdx);

    } else if (activeTab === 'false_friends') {
      tabContent.innerHTML = `
        <div class="space-y-4">
          <div class="p-3 bg-surface rounded-xl border border-amber-500/30 text-xs text-secondary">
            🚫 <strong>Falsche Freunde:</strong> Wörter und Satzstrukturen, die man aus dem Englischen oder der Muttersprache wörtlich falsch übersetzt.
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${falseFriendsTraps.map(trap => `
              <div class="bento-card p-4 space-y-2 border border-subtle">
                <div class="text-xs text-red-400 font-semibold">❌ Typischer Übersetzungsfehler:</div>
                <div class="p-2 bg-red-950/20 border border-red-500/30 rounded-lg text-xs text-red-300 font-mono">
                  ${trap.trap}
                </div>

                <div class="text-xs text-emerald-400 font-semibold pt-1">✓ Richtig auf Deutsch:</div>
                <div class="p-2 bg-emerald-950/20 border border-emerald-500/30 rounded-lg text-xs text-emerald-300 font-bold">
                  ${trap.correct}
                </div>

                <p class="text-[11px] text-muted italic pt-1 border-t border-subtle">
                  💡 ${trap.explanation}
                </p>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    container.querySelectorAll('.tab-btn').forEach(btn => {
      btn.onclick = () => {
        activeTab = btn.getAttribute('data-tab');
        renderView();
      };
    });
  }

  renderView();
}
