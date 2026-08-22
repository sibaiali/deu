// Simulations Component — Interaktive Rollenspiele mit Stufen-Feedback

import { Speech } from '../speech.js';

export function renderSimulations(container, data, params = {}) {
  const activeSimId = params.id || (data.simulations[0] ? data.simulations[0].id : null);
  const currentSim = data.simulations.find(s => s.id === activeSimId) || data.simulations[0];

  container.innerHTML = `
    <div class="simulations-wrapper animate-fadeIn">
      <div class="flex-between flex-wrap gap-4 mb-6">
        <div>
          <div class="badge badge-emerald mb-2">PRAXIS-SIMULATOR</div>
          <h1 class="text-3xl font-bold text-gradient">🎭 BFD- & Klinik-Simulationen</h1>
          <p class="text-secondary mt-1">Interaktive Dialoge mit mehrstufigem Feedback (Basic, Natürlich, B2, C1).</p>
        </div>
        <select id="selectSim" class="select select-sm max-w-xs">
          ${data.simulations.map(s => `
            <option value="${s.id}" ${s.id === currentSim.id ? 'selected' : ''}>${s.title} (${s.level})</option>
          `).join('')}
        </select>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <!-- Sidebar: Scenario Overview -->
        <div class="card p-5 space-y-4">
          <div class="flex-between">
            <span class="badge badge-indigo">${currentSim.level}</span>
            <span class="badge badge-purple">${currentSim.category}</span>
          </div>
          <div>
            <div class="text-xs uppercase font-bold text-secondary mb-1">Einsatzort:</div>
            <div class="font-semibold text-blue-300">📍 ${currentSim.workplace}</div>
          </div>
          <div>
            <div class="text-xs uppercase font-bold text-secondary mb-1">Situation:</div>
            <p class="text-sm text-secondary">${currentSim.situation}</p>
          </div>
          <div>
            <div class="text-xs uppercase font-bold text-secondary mb-1">Dein Ziel:</div>
            <p class="text-sm text-emerald-300 font-medium">${currentSim.objective}</p>
          </div>
        </div>

        <!-- Main: Interactive Dialogue Stage -->
        <div class="md:col-span-2 space-y-4">
          <div class="card p-6" id="chatStage"></div>
        </div>
      </div>
    </div>
  `;

  // Hook simulation selector
  container.querySelector('#selectSim').onchange = (e) => {
    window.location.hash = `#simulation?id=${e.target.value}`;
  };

  renderSimTurn(container.querySelector('#chatStage'), currentSim, 0);
}

function renderSimTurn(stage, sim, turnIndex) {
  if (turnIndex >= sim.turns.length) {
    stage.innerHTML = `
      <div class="text-center p-8">
        <div class="text-5xl mb-3">🏆</div>
        <h2 class="text-2xl font-bold mb-2">Simulation erfolgreich abgeschlossen!</h2>
        <p class="text-secondary mb-6">Du hast alle Gesprächsphasen dieses Szenarios souverän gemeistert.</p>
        <div class="flex justify-center gap-3">
          <a href="#heute" class="btn btn-primary">Zurück zum Dashboard</a>
          <button id="btnRetrySim" class="btn btn-outline">Simulation wiederholen</button>
        </div>
      </div>
    `;
    const btnRetry = stage.querySelector('#btnRetrySim');
    if (btnRetry) btnRetry.onclick = () => renderSimTurn(stage, sim, 0);
    return;
  }

  const turn = sim.turns[turnIndex];

  stage.innerHTML = `
    <div class="space-y-4">
      <div class="flex-between text-xs text-secondary border-b border-glass pb-2">
        <span>Gesprächsschritt ${turnIndex + 1} von ${sim.turns.length}</span>
        <span>Rolle: ${turn.speaker}</span>
      </div>

      <!-- Counterpart Message Bubble -->
      <div class="p-4 bg-surface rounded-2xl border border-glass flex items-start gap-3">
        <div class="text-2xl">👤</div>
        <div class="flex-1">
          <div class="font-bold text-sm text-purple-300 mb-1">${turn.speaker} (${sim.counterpartRole}):</div>
          <div class="text-base text-gray-100 font-medium">${turn.text}</div>
          <button id="btnPlayCounterpart" class="btn btn-ghost btn-xs text-xs text-blue-400 mt-2">🔊 Vorlesen</button>
        </div>
      </div>

      <!-- Guidance -->
      <div class="p-3 bg-blue-950/20 border border-blue-500/30 rounded-xl text-xs text-blue-300">
        💡 <strong>Deine Aufgabe:</strong> ${turn.guidance}
      </div>

      <!-- Input Area -->
      <div class="space-y-2">
        <label class="block text-xs font-semibold text-secondary">Deine Antwort auf Deutsch:</label>
        <div class="flex gap-2">
          <textarea id="userResponseInput" rows="2" class="input w-full text-sm" placeholder="Tippe deine Antwort oder nutze das Mikrofon..."></textarea>
          <button id="btnMic" class="btn btn-outline flex-center px-4" title="Sprechen">🎙️</button>
        </div>
        <button id="btnSubmitResponse" class="btn btn-primary w-full">Antwort überprüfen & Stufen vergleichen</button>
      </div>

      <!-- Feedback & Response Tiers Area (Hidden initially) -->
      <div id="feedbackArea" class="hidden space-y-4 mt-6 border-t border-glass pt-4 animate-fadeIn"></div>
    </div>
  `;

  const btnPlay = stage.querySelector('#btnPlayCounterpart');
  const btnMic = stage.querySelector('#btnMic');
  const txtInput = stage.querySelector('#userResponseInput');
  const btnSubmit = stage.querySelector('#btnSubmitResponse');
  const feedbackArea = stage.querySelector('#feedbackArea');

  btnPlay.onclick = () => Speech.speak(turn.text, 0.9);

  let isRecording = false;
  btnMic.onclick = () => {
    if (!isRecording) {
      isRecording = true;
      btnMic.classList.add('btn-red');
      Speech.startListening(
        (transcript) => {
          txtInput.value = transcript;
          btnMic.classList.remove('btn-red');
          isRecording = false;
        },
        (err) => {
          alert('Spracherkennung: ' + err);
          btnMic.classList.remove('btn-red');
          isRecording = false;
        }
      );
    } else {
      Speech.stopListening();
      btnMic.classList.remove('btn-red');
      isRecording = false;
    }
  };

  btnSubmit.onclick = () => {
    const userText = txtInput.value.trim();
    feedbackArea.classList.remove('hidden');
    feedbackArea.innerHTML = `
      <div class="space-y-4">
        <div class="card p-4 bg-emerald-950/20 border border-emerald-500/30">
          <h4 class="font-bold text-emerald-400 text-sm mb-2">🎯 Auswertung & Vergleichsstufen</h4>
          <p class="text-xs text-secondary mb-4">${turn.whyExplanation}</p>

          <div class="space-y-3">
            <div class="p-3 bg-surface rounded-lg border border-glass">
              <div class="text-xs font-bold text-gray-400 uppercase">1. Basic (B1):</div>
              <div class="text-sm text-gray-300">${turn.responseTiers.basic}</div>
            </div>

            <div class="p-3 bg-surface rounded-lg border border-glass">
              <div class="text-xs font-bold text-blue-400 uppercase">2. Natürlich & Alltäglich:</div>
              <div class="text-sm text-blue-200">${turn.responseTiers.natural}</div>
            </div>

            <div class="p-3 bg-surface rounded-lg border border-emerald-500/30 bg-emerald-950/10">
              <div class="text-xs font-bold text-emerald-400 uppercase">3. Professionell (B2 - Empfohlen):</div>
              <div class="text-sm text-emerald-200 font-semibold">${turn.responseTiers.professionalB2}</div>
            </div>

            <div class="p-3 bg-surface rounded-lg border border-purple-500/30 bg-purple-950/10">
              <div class="text-xs font-bold text-purple-400 uppercase">4. C1-Niveau (Souverän & Nuanciert):</div>
              <div class="text-sm text-purple-200">${turn.responseTiers.c1}</div>
            </div>
          </div>
        </div>

        <button id="btnNextTurn" class="btn btn-primary w-full">Nächster Gesprächsschritt →</button>
      </div>
    `;

    feedbackArea.querySelector('#btnNextTurn').onclick = () => {
      renderSimTurn(stage, sim, turnIndex + 1);
    };
  };
}
