// Dashboard Component — "Heute" & Tagesplan

import { Storage } from '../storage.js';
import { SRS } from '../srs.js';
import { Speech } from '../speech.js';

export function renderDashboard(container, data) {
  const settings = Storage.getSettings();
  const userName = "Ali";

  SRS.setVocabList(data.vocabulary);
  SRS.getDueCards().then(({ dueCards, newCards, totalDueCount, totalLearnedCount }) => {
    container.innerHTML = `
      <div class="dashboard-wrapper animate-fadeIn">
        <!-- Hero Header -->
        <div class="hero-card mb-6">
          <div class="flex-between flex-wrap gap-4">
            <div>
              <div class="badge badge-emerald mb-2">
                <span class="pulse-dot"></span> BFD & Psychiatrie Vorbereitung
              </div>
              <h1 class="text-3xl font-bold text-gradient">Guten Tag, ${userName}!</h1>
              <p class="text-secondary mt-1">
                Dein tägliches Lernsystem für BFD, klinische Kommunikation und den Weg zu starkem B2/C1.
              </p>
            </div>
            <div class="flex gap-3">
              <button id="btnCheckIn" class="btn btn-secondary flex items-center gap-2">
                <span>⚡</span> Tages-Check-in
              </button>
              <a href="#bfd" class="btn btn-primary flex items-center gap-2">
                <span>🏢</span> Mein BFD auf einen Blick
              </a>
            </div>
          </div>

          <!-- Quick Stats Bar -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-glass">
            <div class="stat-box">
              <span class="stat-label">Wiederholungen fällig</span>
              <span class="stat-value text-amber">${totalDueCount}</span>
            </div>
            <div class="stat-box">
              <span class="stat-label">Gelernte Vokabeln</span>
              <span class="stat-value text-emerald">${totalLearnedCount}</span>
            </div>
            <div class="stat-box">
              <span class="stat-label">Aktuelle Serie</span>
              <span class="stat-value text-blue">${settings.streak} Tage 🔥</span>
            </div>
            <div class="stat-box">
              <span class="stat-label">Sprachniveau</span>
              <span class="stat-value text-purple">B1+ → B2</span>
            </div>
          </div>
        </div>

        <!-- Next Action Hero Card -->
        <div class="card card-glow mb-6 p-6">
          <div class="flex-between items-center mb-4">
            <h2 class="text-xl font-bold flex items-center gap-2">
              <span>🎯</span> Dein nächster Schritt
            </h2>
            <span class="badge badge-blue">Empfohlen für heute</span>
          </div>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="action-card bg-surface p-4 rounded-xl border border-glass">
              <div class="text-2xl mb-2">🃏</div>
              <h3 class="font-bold text-lg">SRS Wiederholung</h3>
              <p class="text-sm text-secondary mt-1">${totalDueCount} Karten warten auf Wiederholung.</p>
              <a href="#wiederholen" class="btn btn-sm btn-primary w-full mt-4">Jetzt wiederholen (${totalDueCount})</a>
            </div>

            <div class="action-card bg-surface p-4 rounded-xl border border-glass">
              <div class="text-2xl mb-2">🎭</div>
              <h3 class="font-bold text-lg">BFD-Simulation</h3>
              <p class="text-sm text-secondary mt-1">Sicherheitstraining: Patient fordert Bedarfsmedikation.</p>
              <a href="#simulation?id=sim_patient_medication_request" class="btn btn-sm btn-secondary w-full mt-4">Simulation starten</a>
            </div>

            <div class="action-card bg-surface p-4 rounded-xl border border-glass">
              <div class="text-2xl mb-2">🎙️</div>
              <h3 class="font-bold text-lg">Sprechübung (60s)</h3>
              <p class="text-sm text-secondary mt-1">Spontansprechen: Vorstellung bei der Stationsleitung.</p>
              <a href="#sprechen" class="btn btn-sm btn-outline w-full mt-4">Sprechtraining</a>
            </div>
          </div>
        </div>

        <!-- Quick Emergency Access -->
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="card p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/30">
            <div class="flex-between mb-3">
              <h3 class="text-lg font-bold text-blue-300 flex items-center gap-2">
                <span>🆘</span> Erster-Tag-Überlebensmodus
              </h3>
              <span class="badge badge-indigo">Mobil optimiert</span>
            </div>
            <p class="text-sm text-secondary mb-4">
              10 unverzichtbare Sätze, 10 kritische Fragen und das Deeskalationsprotokoll für deinen ersten Tag auf Station.
            </p>
            <a href="#bfd?tab=survival" class="btn btn-sm btn-primary">Überlebensmodus öffnen →</a>
          </div>

          <div class="card p-6 bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border-emerald-500/30">
            <div class="flex-between mb-3">
              <h3 class="text-lg font-bold text-emerald-300 flex items-center gap-2">
                <span>🧠</span> Psychologie & Deeskalation
              </h3>
              <span class="badge badge-emerald">Klinikwissen</span>
            </div>
            <p class="text-sm text-secondary mb-4">
              Trauma, Bindungsmuster, 5-4-3-2-1 Erdungstechnik und professionelle Rollengrenzen.
            </p>
            <a href="#psychologie" class="btn btn-sm btn-secondary">Psychologie verstehen →</a>
          </div>
        </div>

        <!-- Mein Tagesplan -->
        <div class="card p-6">
          <div class="flex-between mb-4">
            <h2 class="text-xl font-bold flex items-center gap-2">
              <span>📅</span> Mein Tagesplan (Zeitstruktur)
            </h2>
            <div class="flex gap-2">
              <button class="btn btn-sm btn-outline active-plan" data-time="20">20 Min</button>
              <button class="btn btn-sm btn-outline" data-time="45">45 Min</button>
              <button class="btn btn-sm btn-outline" data-time="90">90 Min (Intensiv)</button>
            </div>
          </div>
          <div id="planContent" class="space-y-3">
            <div class="p-3 bg-surface rounded-lg flex-between border border-glass">
              <div class="flex items-center gap-3">
                <span class="text-emerald font-bold">1.</span>
                <div>
                  <div class="font-bold">SRS Vokabel-Wiederholung</div>
                  <div class="text-xs text-secondary">Fällige Karten festigen</div>
                </div>
              </div>
              <span class="badge badge-gray">7 Min</span>
            </div>

            <div class="p-3 bg-surface rounded-lg flex-between border border-glass">
              <div class="flex items-center gap-3">
                <span class="text-blue font-bold">2.</span>
                <div>
                  <div class="font-bold">BFD-Phrasen & Rollengrenzen</div>
                  <div class="text-xs text-secondary">Was sage ich bei Patientenanfragen?</div>
                </div>
              </div>
              <span class="badge badge-gray">5 Min</span>
            </div>

            <div class="p-3 bg-surface rounded-lg flex-between border border-glass">
              <div class="flex items-center gap-3">
                <span class="text-purple font-bold">3.</span>
                <div>
                  <div class="font-bold">Sprechtraining & Aussprache</div>
                  <div class="text-xs text-secondary">Laut vorlesen & Nachsprechen mit TTS</div>
                </div>
              </div>
              <span class="badge badge-gray">4 Min</span>
            </div>

            <div class="p-3 bg-surface rounded-lg flex-between border border-glass">
              <div class="flex items-center gap-3">
                <span class="text-amber font-bold">4.</span>
                <div>
                  <div class="font-bold">1 BFD-Simulation</div>
                  <div class="text-xs text-secondary">Reales Rollenspiel mit Feedback</div>
                </div>
              </div>
              <span class="badge badge-gray">4 Min</span>
            </div>
          </div>
        </div>
      </div>
    `;

    // Hook check-in button
    const btnCheckIn = container.querySelector('#btnCheckIn');
    if (btnCheckIn) {
      btnCheckIn.addEventListener('click', () => showCheckInModal(container));
    }
  });
}

function showCheckInModal(container) {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay animate-fadeIn';
  modal.innerHTML = `
    <div class="modal-card p-6 max-w-md w-full bg-card rounded-2xl shadow-2xl border border-glass">
      <div class="flex-between mb-4">
        <h3 class="text-xl font-bold">⚡ Täglicher Check-in</h3>
        <button id="closeModal" class="btn btn-sm btn-ghost">✕</button>
      </div>
      <p class="text-sm text-secondary mb-4">Wie fühlst du dich heute und wie viel Zeit möchtest du investieren?</p>
      
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-semibold mb-2">Energie-Level:</label>
          <div class="grid grid-cols-3 gap-2">
            <button class="btn btn-outline btn-energy" data-energy="low">😴 Niedrig</button>
            <button class="btn btn-outline btn-energy active" data-energy="medium">⚡ Normal</button>
            <button class="btn btn-outline btn-energy" data-energy="high">🚀 Hoch</button>
          </div>
        </div>

        <div>
          <label class="block text-sm font-semibold mb-2">Geplante Zeit:</label>
          <div class="grid grid-cols-3 gap-2">
            <button class="btn btn-outline btn-time" data-time="15">15 Min</button>
            <button class="btn btn-outline btn-time active" data-time="30">30 Min</button>
            <button class="btn btn-outline btn-time" data-time="60">60 Min</button>
          </div>
        </div>
      </div>

      <button id="saveCheckIn" class="btn btn-primary w-full mt-6">Tagesplan anpassen & Starten</button>
    </div>
  `;
  document.body.appendChild(modal);

  modal.querySelector('#closeModal').onclick = () => modal.remove();
  modal.querySelector('#saveCheckIn').onclick = () => {
    modal.remove();
    Speech.speak("Willkommen zurück, Ali. Dein Tagesplan ist bereit.", 1.0);
  };
}
