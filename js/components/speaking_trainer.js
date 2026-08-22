// Speaking Trainer Component — Sprechtraining & Aussprache

import { Speech } from '../speech.js';

export function renderSpeakingTrainer(container, data) {
  const exercises = [
    {
      id: "spk_01",
      title: "Vorstellung bei der Stationsleitung",
      prompt: "Guten Morgen, Frau Schneider! Mein Name ist Ali, ich bin der neue Bundesfreiwillige auf dieser Station. Ich freue mich auf die Zusammenarbeit.",
      english: "Good morning, Ms. Schneider! My name is Ali, I am the new federal volunteer on this ward. I look forward to working together.",
      context: "Begrüßung und erste Kontaktaufnahme am ersten Tag."
    },
    {
      id: "spk_02",
      title: "Rückmeldung über erledigte Aufgaben",
      prompt: "Ich habe die Betten in Zimmer 4 und 5 frisch bezogen und die schmutzige Wäsche in den Wäschesack gebracht.",
      english: "I have changed the beds in rooms 4 and 5 and put the dirty laundry into the laundry bag.",
      context: "Pflegerückmeldung nach Verrichtung."
    },
    {
      id: "spk_03",
      title: "Höfliche Rollengrenze bei Medikamenten",
      prompt: "Herr Müller, ich darf Ihnen leider keine Medikamente verabreichen. Ich hole sofort die zuständige Pflegefachkraft für Sie.",
      english: "Mr. Müller, I am unfortunately not allowed to administer medication. I will immediately get the responsible nurse for you.",
      context: "Sicherheit & Deeskalation."
    }
  ];

  let currentEx = 0;

  function renderView() {
    const ex = exercises[currentEx];
    container.innerHTML = `
      <div class="speaking-wrapper max-w-2xl mx-auto animate-fadeIn">
        <div class="flex-between mb-6">
          <div>
            <div class="badge badge-purple mb-1">SPRECHTRAINER</div>
            <h1 class="text-3xl font-bold text-gradient">🎙️ Aussprache & Sprechtraining</h1>
          </div>
          <a href="#heute" class="btn btn-secondary btn-sm">← Zurück</a>
        </div>

        <div class="card card-glow p-8 text-center space-y-6">
          <div class="text-xs uppercase font-bold text-secondary">Übung ${currentEx + 1} von ${exercises.length}: ${ex.title}</div>
          
          <div class="p-6 bg-surface rounded-2xl border border-glass">
            <div class="text-2xl font-extrabold text-gradient mb-2">${ex.prompt}</div>
            <div class="text-sm text-secondary">${ex.english}</div>
          </div>

          <div class="text-xs text-purple-300">💡 Kontext: ${ex.context}</div>

          <!-- Controls -->
          <div class="flex justify-center gap-4 flex-wrap">
            <button id="btnListenModel" class="btn btn-secondary flex items-center gap-2">
              <span>🔊</span> Modell anhören (Normal)
            </button>
            <button id="btnListenSlow" class="btn btn-outline flex items-center gap-2">
              <span>🐢</span> Langsam anhören (0.7x)
            </button>
          </div>

          <!-- Recording Area -->
          <div class="pt-6 border-t border-glass space-y-3">
            <button id="btnRecord" class="btn btn-primary btn-lg flex-center gap-2 mx-auto">
              <span>🎙️</span> Sprechen & Überprüfen
            </button>
            <div id="recResult" class="text-sm font-semibold text-emerald-400 hidden"></div>
          </div>
        </div>

        <div class="flex-between mt-6">
          <button id="btnPrev" class="btn btn-outline btn-sm" ${currentEx === 0 ? 'disabled' : ''}>← Vorherige</button>
          <button id="btnNext" class="btn btn-outline btn-sm" ${currentEx === exercises.length - 1 ? 'disabled' : ''}>Nächste →</button>
        </div>
      </div>
    `;

    container.querySelector('#btnListenModel').onclick = () => Speech.speak(ex.prompt, 0.9);
    container.querySelector('#btnListenSlow').onclick = () => Speech.speak(ex.prompt, 0.65);

    const btnRecord = container.querySelector('#btnRecord');
    const recResult = container.querySelector('#recResult');

    btnRecord.onclick = () => {
      btnRecord.classList.add('btn-red');
      btnRecord.innerHTML = '<span>🔴</span> Aufnahme läuft...';
      Speech.startListening(
        (transcript) => {
          btnRecord.classList.remove('btn-red');
          btnRecord.innerHTML = '<span>🎙️</span> Sprechen & Überprüfen';
          recResult.classList.remove('hidden');
          recResult.innerHTML = `✅ Erkannt: "${transcript}"`;
        },
        (err) => {
          btnRecord.classList.remove('btn-red');
          btnRecord.innerHTML = '<span>🎙️</span> Sprechen & Überprüfen';
          recResult.classList.remove('hidden');
          recResult.innerHTML = `⚠️ Fehler / Nicht verstanden (${err})`;
        }
      );
    };

    container.querySelector('#btnPrev').onclick = () => {
      if (currentEx > 0) { currentEx--; renderView(); }
    };
    container.querySelector('#btnNext').onclick = () => {
      if (currentEx < exercises.length - 1) { currentEx++; renderView(); }
    };
  }

  renderView();
}
