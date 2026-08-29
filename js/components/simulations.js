// Simulations Component — Interaktive Rollenspiele (BFD, Familie, Partnerschaft)

import { Speech } from '../speech.js';
import { SIMULATIONS_DATA } from '../data/simulations_data.js';

export function renderSimulations(container, data, params = {}) {
  const sims = SIMULATIONS_DATA || (data && data.simulations) || [];
  let activeCategory = 'alle';
  let activeSimId = params.id || (sims[0] ? sims[0].id : null);
  let currentSim = sims.find(s => s.id === activeSimId) || sims[0];

  function renderView() {
    const filteredSims = activeCategory === 'alle' 
      ? sims 
      : sims.filter(s => s.category === activeCategory);

    if (!filteredSims.some(s => s.id === currentSim.id) && filteredSims.length > 0) {
      currentSim = filteredSims[0];
    }

    container.innerHTML = `
      <div class="simulations-wrapper animate-fadeIn space-y-6 max-w-6xl mx-auto">
        <!-- Hero Header -->
        <div class="hero-card">
          <div class="flex-between flex-wrap gap-4">
            <div>
              <span class="badge badge-amber mb-2">PRAXIS-SIMULATOR</span>
              <h1 class="page-title">🎭 Dialog- & Rollenspiel-Training</h1>
              <p class="subtitle mt-1">
                Lebensnahe Simulationen für Krankenhaus, Stationsalltag, Familie und tiefe Partnerschaftsgespräche mit 4-Stufen-Feedback.
              </p>
            </div>
            <div class="flex items-center gap-2">
              <span class="badge badge-emerald py-1 px-3 text-xs font-semibold">${sims.length} Szenarien aktiv</span>
            </div>
          </div>
        </div>

        <!-- Category Tabs & Scenario Selector -->
        <div class="bento-card p-4 space-y-3">
          <div class="flex-between flex-wrap gap-3">
            <div class="flex gap-2 flex-wrap" id="simCategoryTabs">
              <button class="btn btn-xs ${activeCategory === 'alle' ? 'btn-primary' : 'btn-secondary'} sim-cat-btn" data-cat="alle">
                Alle Szenarien (${sims.length})
              </button>
              <button class="btn btn-xs ${activeCategory === 'Klinik & BFD' ? 'btn-primary' : 'btn-secondary'} sim-cat-btn" data-cat="Klinik & BFD">
                🏥 Klinik & BFD
              </button>
              <button class="btn btn-xs ${activeCategory === 'Familie & Alltag' ? 'btn-primary' : 'btn-secondary'} sim-cat-btn" data-cat="Familie & Alltag">
                🏡 Familie & Alltag
              </button>
              <button class="btn btn-xs ${activeCategory === 'Partnerschaft & Herz' ? 'btn-primary' : 'btn-secondary'} sim-cat-btn" data-cat="Partnerschaft & Herz">
                ❤️ Partnerschaft & Herz
              </button>
            </div>

            <!-- Scenario Dropdown -->
            <select id="selectSim" class="p-2 bg-subtle border border-subtle rounded-lg text-primary text-xs font-bold outline-none flex-1 max-w-md">
              ${filteredSims.map(s => `
                <option value="${s.id}" ${s.id === currentSim.id ? 'selected' : ''}>
                  ${s.category === 'Partnerschaft & Herz' ? '❤️' : (s.category === 'Familie & Alltag' ? '🏡' : '🏥')} ${s.title} (${s.level})
                </option>
              `).join('')}
            </select>
          </div>
        </div>

        <!-- 2-Column Main Workspace -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Left: Scenario Overview & Objectives -->
          <div class="bento-card p-5 space-y-4 border border-subtle">
            <div class="flex-between items-center border-b border-subtle pb-3">
              <span class="badge badge-blue text-xs">${currentSim.level}</span>
              <span class="badge badge-amber text-xs">${currentSim.category}</span>
            </div>

            <div>
              <div class="text-[11px] uppercase font-bold text-muted mb-1">Ort & Kontext:</div>
              <div class="font-bold text-sm text-primary">📍 ${currentSim.workplace}</div>
            </div>

            <div>
              <div class="text-[11px] uppercase font-bold text-muted mb-1">Rollen:</div>
              <div class="text-xs text-secondary"><strong>Du:</strong> ${currentSim.userRole}</div>
              <div class="text-xs text-secondary"><strong>Gegenüber:</strong> ${currentSim.counterpartRole}</div>
            </div>

            <div>
              <div class="text-[11px] uppercase font-bold text-muted mb-1">Situation:</div>
              <p class="text-xs text-secondary leading-relaxed">${currentSim.situation}</p>
            </div>

            <div class="p-3 bg-subtle rounded-xl border border-subtle space-y-1">
              <div class="text-[11px] uppercase font-bold text-emerald-400">Dein Hauptziel:</div>
              <p class="text-xs text-primary font-medium">${currentSim.objective}</p>
            </div>
          </div>

          <!-- Right: Interactive Stage -->
          <div class="md:col-span-2 space-y-4">
            <div class="bento-card p-6 border border-subtle" id="chatStage"></div>
          </div>
        </div>
      </div>
    `;

    // Category button events
    container.querySelectorAll('.sim-cat-btn').forEach(btn => {
      btn.onclick = () => {
        activeCategory = btn.getAttribute('data-cat');
        renderView();
      };
    });

    // Select dropdown event
    const selectElem = container.querySelector('#selectSim');
    if (selectElem) {
      selectElem.onchange = (e) => {
        const found = sims.find(s => s.id === e.target.value);
        if (found) {
          currentSim = found;
          renderView();
        }
      };
    }

    renderSimTurn(container.querySelector('#chatStage'), currentSim, 0);
  }

  function renderSimTurn(stage, sim, turnIndex) {
    if (turnIndex >= sim.turns.length) {
      stage.innerHTML = `
        <div class="text-center p-8 space-y-4 animate-fadeIn">
          <div class="text-5xl">🏆</div>
          <h2 class="text-2xl font-bold text-primary">Szenario erfolgreich gemeistert!</h2>
          <p class="text-sm text-secondary max-w-md mx-auto">
            Du hast alle Gesprächsphasen von <strong>"${sim.title}"</strong> erfolgreich durchlaufen und die wesentlichen Kriterien erfüllt.
          </p>
          <div class="flex justify-center gap-3 pt-4">
            <button id="btnRetrySim" class="btn btn-primary btn-sm">Szenario noch einmal üben</button>
            <a href="#heute" class="btn btn-secondary btn-sm">Zum Dashboard</a>
          </div>
        </div>
      `;
      stage.querySelector('#btnRetrySim').onclick = () => renderSimTurn(stage, sim, 0);
      return;
    }

    const turn = sim.turns[turnIndex];

    stage.innerHTML = `
      <div class="space-y-5 animate-fadeIn">
        <!-- Progress Bar -->
        <div class="flex-between text-xs text-muted font-semibold pb-1">
          <span>Gesprächsphase ${turnIndex + 1} von ${sim.turns.length}</span>
          <span>${Math.round(((turnIndex + 1) / sim.turns.length) * 100)}%</span>
        </div>
        <div class="w-full bg-subtle h-1.5 rounded-full overflow-hidden">
          <div class="bg-amber-500 h-full transition-all duration-300" style="width: ${((turnIndex + 1) / sim.turns.length) * 100}%"></div>
        </div>

        <!-- Counterpart Message -->
        <div class="p-4 bg-subtle rounded-2xl border border-subtle space-y-2">
          <div class="flex-between items-center">
            <span class="font-extrabold text-sm text-amber-400">${turn.speaker}</span>
            <button class="btn btn-ghost btn-xs text-amber-400 btn-speak-turn" data-text="${turn.text}">
              🔊 Vorlesen
            </button>
          </div>
          <div class="text-sm text-primary font-medium leading-relaxed italic">
            "${turn.text}"
          </div>
        </div>

        <!-- Guidance Cue -->
        <div class="p-3 bg-surface rounded-xl border border-blue-500/30 text-xs space-y-1">
          <div class="font-bold text-blue-400">💡 Deine Aufgabe in dieser Phase:</div>
          <div class="text-secondary">${turn.guidance}</div>
          ${turn.expectedCriteria ? `
            <div class="flex gap-1.5 flex-wrap pt-1">
              ${turn.expectedCriteria.map(c => `<span class="badge badge-gray text-[10px]">✓ ${c}</span>`).join('')}
            </div>
          ` : ''}
        </div>

        <!-- Free Text Typing Mode -->
        <div class="space-y-2 pt-2">
          <label class="block text-xs font-bold text-secondary">✍️ Tippe deine Antwort (oder wähle unten eine Musterlösung):</label>
          <div class="flex gap-2">
            <input type="text" id="userSimInput" placeholder="Deine deutsche Antwort hier eingeben..." class="p-2.5 bg-subtle border border-subtle rounded-lg text-primary text-xs flex-1 outline-none focus:border-amber-500" />
            <button id="btnCheckUserInput" class="btn btn-primary btn-sm">Prüfen</button>
          </div>
          <div id="userInputFeedback" class="hidden text-xs p-2.5 rounded-lg"></div>
        </div>

        <!-- Tiered Sample Responses -->
        <div class="space-y-3 pt-3 border-t border-subtle">
          <div class="text-xs font-bold text-muted uppercase tracking-wider">Musterantworten nach Sprachebene:</div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <!-- Basic B1 -->
            <div class="p-3 bg-subtle rounded-xl border border-subtle space-y-1.5 flex flex-col justify-between">
              <div>
                <div class="flex-between">
                  <span class="badge badge-gray text-[10px]">Basic (B1)</span>
                  <button class="btn btn-ghost btn-xs btn-speak-opt" data-text="${turn.responseTiers.basic}">▶</button>
                </div>
                <div class="text-xs text-secondary mt-1 font-medium">${turn.responseTiers.basic}</div>
              </div>
              <button class="btn btn-secondary btn-xs w-full btn-select-tier mt-2" data-text="${turn.responseTiers.basic}">Diese Antwort wählen →</button>
            </div>

            <!-- Natürlich -->
            <div class="p-3 bg-subtle rounded-xl border border-blue-500/30 space-y-1.5 flex flex-col justify-between">
              <div>
                <div class="flex-between">
                  <span class="badge badge-blue text-[10px]">Natürlich</span>
                  <button class="btn btn-ghost btn-xs btn-speak-opt" data-text="${turn.responseTiers.natural}">▶</button>
                </div>
                <div class="text-xs text-primary mt-1 font-medium">${turn.responseTiers.natural}</div>
              </div>
              <button class="btn btn-secondary btn-xs w-full btn-select-tier mt-2" data-text="${turn.responseTiers.natural}">Diese Antwort wählen →</button>
            </div>

            <!-- Professionell B2 -->
            <div class="p-3 bg-subtle rounded-xl border border-amber-500/30 space-y-1.5 flex flex-col justify-between">
              <div>
                <div class="flex-between">
                  <span class="badge badge-amber text-[10px]">Professionell (B2)</span>
                  <button class="btn btn-ghost btn-xs btn-speak-opt" data-text="${turn.responseTiers.professionalB2}">▶</button>
                </div>
                <div class="text-xs text-primary mt-1 font-bold">${turn.responseTiers.professionalB2}</div>
              </div>
              <button class="btn btn-primary btn-xs w-full btn-select-tier mt-2" data-text="${turn.responseTiers.professionalB2}">Diese Antwort wählen →</button>
            </div>

            <!-- C1 Nuanciert -->
            <div class="p-3 bg-subtle rounded-xl border border-purple-500/30 space-y-1.5 flex flex-col justify-between">
              <div>
                <div class="flex-between">
                  <span class="badge badge-purple text-[10px]">C1 Nuanciert</span>
                  <button class="btn btn-ghost btn-xs btn-speak-opt" data-text="${turn.responseTiers.c1}">▶</button>
                </div>
                <div class="text-xs text-purple-300 mt-1 font-medium">${turn.responseTiers.c1}</div>
              </div>
              <button class="btn btn-secondary btn-xs w-full btn-select-tier mt-2" data-text="${turn.responseTiers.c1}">Diese Antwort wählen →</button>
            </div>
          </div>

          ${turn.whyExplanation ? `
            <div class="p-2.5 bg-surface rounded-lg text-xs text-muted italic border border-subtle mt-2">
              💡 <strong>Linguistische Erklärung:</strong> ${turn.whyExplanation}
            </div>
          ` : ''}
        </div>
      </div>
    `;

    // Attach Audio Events
    stage.querySelector('.btn-speak-turn').onclick = () => {
      Speech.speak(turn.text, 0.95);
    };

    stage.querySelectorAll('.btn-speak-opt').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        Speech.speak(btn.getAttribute('data-text'), 0.95);
      };
    });

    // Tier button selection -> proceed to next turn
    stage.querySelectorAll('.btn-select-tier').forEach(btn => {
      btn.onclick = () => {
        renderSimTurn(stage, sim, turnIndex + 1);
      };
    });

    // Check user free text input
    const inputField = stage.querySelector('#userSimInput');
    const btnCheck = stage.querySelector('#btnCheckUserInput');
    const feedbackBox = stage.querySelector('#userInputFeedback');

    function checkAnswer() {
      const val = inputField.value.trim();
      if (!val) return;

      feedbackBox.classList.remove('hidden');
      feedbackBox.className = 'text-xs p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-emerald-300 space-y-2';
      feedbackBox.innerHTML = `
        <div>✓ <strong>Gute Formulierung!</strong> Du hast die Phase aktiv beantwortet.</div>
        <div class="flex gap-2 pt-1">
          <button id="btnProceedNextTurn" class="btn btn-primary btn-xs">Weiter zur nächsten Phase →</button>
        </div>
      `;

      stage.querySelector('#btnProceedNextTurn').onclick = () => {
        renderSimTurn(stage, sim, turnIndex + 1);
      };
    }

    btnCheck.onclick = checkAnswer;
    inputField.onkeydown = (e) => {
      if (e.key === 'Enter') checkAnswer();
    };
  }

  renderView();
}
