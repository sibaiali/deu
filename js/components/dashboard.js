// Bento Grid Dashboard - Calm, Professional & Focused
// Reduzierte kognitive Last: Tages-Check-in (Span 8), Überlebensmodus (Span 4),
// 3 Micro-Module (Vokabeln, Sprechen, Psychologie) und strukturierte Zeitachse (Tagesplan).

import { Storage } from '../storage.js';
import { SRS } from '../srs.js';
import { VOCABULARY_DATA } from '../data/vocabulary_data.js';
import { SIMULATIONS_DATA } from '../data/simulations_data.js';

export async function renderDashboard(container) {
  const settings = Storage.getSettings();
  const dueCards = await SRS.getDueCards(VOCABULARY_DATA);
  const dueCount = dueCards.length;

  let activePlanDuration = '45'; // '20' | '45' | '90'

  const dailyPlans = {
    '20': [
      { time: '08:00', title: 'SRS-Wiederholung', desc: 'Fällige Vokabeln festigen', duration: '7 Min', route: 'wiederholen' },
      { time: '12:30', title: 'BFD-Phrasen', desc: 'Stations-Kommunikation', duration: '5 Min', route: 'phrasen' },
      { time: '17:00', title: 'Sprechtraining', desc: '60-Sekunden Challenge', duration: '4 Min', route: 'sprechen' },
      { time: '20:30', title: 'Satz-Korrektor', desc: '1 persönlicher Satz', duration: '4 Min', route: 'satzkorrektor' }
    ],
    '45': [
      { time: '08:00', title: 'SRS-Wiederholung & Neue Vokabeln', desc: '10 Vokabeln im Kontext', duration: '12 Min', route: 'wiederholen' },
      { time: '12:30', title: 'BFD-Simulation', desc: 'Sicherheitstraining: Bedarfsmedikation', duration: '10 Min', route: 'simulation' },
      { time: '16:00', title: 'Psychologie & Deeskalation', desc: 'Trauma & Rollengrenzen', duration: '10 Min', route: 'psychologie' },
      { time: '19:00', title: 'Sprechtrainer & Aussprache', desc: 'Schichtübergabe sprechen', duration: '8 Min', route: 'sprechen' },
      { time: '21:00', title: 'Anti-Übersetzung', desc: 'Blitz-Reaktionstraining', duration: '5 Min', route: 'antitruebersetzung' }
    ],
    '90': [
      { time: '07:30', title: 'SRS-Mastery & Tiefen-Wiederholung', desc: 'Vokabeln & Grammatikdrills', duration: '20 Min', route: 'wiederholen' },
      { time: '10:00', title: 'Grammatik-Intensivlektion', desc: 'Nebensätze & Inversion', duration: '20 Min', route: 'grammatik' },
      { time: '13:00', title: '2x BFD-Simulationen', desc: 'Akutaufnahme & Deeskalation', duration: '20 Min', route: 'simulation' },
      { time: '17:00', title: 'Leseverstehen Klinikberichte', desc: 'Original-Dienstübergabe', duration: '15 Min', route: 'lesen' },
      { time: '20:30', title: 'Satz-Korrektor & Schreibtraining', desc: 'Freies Formulieren', duration: '15 Min', route: 'satzkorrektor' }
    ]
  };

  function renderView() {
    const plan = dailyPlans[activePlanDuration];

    container.innerHTML = `
      <div class="space-y-6 animate-fadeIn">
        <!-- 12-Column Bento Grid: Row 1 (Hero Check-in & Critical Survival Card) -->
        <div class="bento-grid">
          <!-- Span 8: Tages-Check-in / Dein nächster Schritt -->
          <div class="col-span-8 bento-card hero-checkin">
            <div class="space-y-3">
              <div class="flex-between">
                <span class="badge badge-blue">Tages-Check-in</span>
                <span class="text-xs text-secondary font-semibold">UKGM Marburg • Station 2</span>
              </div>
              <div>
                <h1 class="page-title">Guten Tag, Ali!</h1>
                <p class="subtitle mt-1">
                  Dein tägliches Lernsystem für BFD, klinische Kommunikation und den Weg zu starkem B2/C1.
                </p>
              </div>

              <!-- Dein nächster Schritt (Single Focused Primary Action) -->
              <div class="p-4 bg-surface rounded-xl border border-subtle mt-4 space-y-2">
                <div class="text-xs font-bold text-muted uppercase tracking-wider">Dein nächster Schritt</div>
                <div class="flex-between flex-wrap gap-3">
                  <div>
                    <div class="font-bold text-base text-primary">
                      ${dueCount > 0 ? `SRS-Wiederholung (${dueCount} Karten fällig)` : 'BFD-Simulation: Patient fordert Bedarfsmedikation'}
                    </div>
                    <div class="text-xs text-secondary">
                      ${dueCount > 0 ? 'Wiederhole deine fälligen Vokabeln für langfristige Beherrschung.' : 'Sicherheitstraining: Grenzen setzen und professionell deeskalieren.'}
                    </div>
                  </div>
                  <a href="${dueCount > 0 ? '#wiederholen' : '#simulation'}" class="btn btn-primary btn-sm">
                    Jetzt starten →
                  </a>
                </div>
              </div>
            </div>

            <!-- Compact Metrics Footer -->
            <div class="grid grid-cols-4 gap-2 pt-4 border-t border-subtle mt-4 text-center">
              <div>
                <div class="text-xs text-secondary">Fällig</div>
                <div class="font-bold text-base ${dueCount > 0 ? 'text-amber-500' : 'text-emerald-500'}">${dueCount}</div>
              </div>
              <div>
                <div class="text-xs text-secondary">Vokabeln</div>
                <div class="font-bold text-base text-primary">${VOCABULARY_DATA.length}</div>
              </div>
              <div>
                <div class="text-xs text-secondary">Serie</div>
                <div class="font-bold text-base text-primary">${settings.streak || 1} Tag</div>
              </div>
              <div>
                <div class="text-xs text-secondary">Niveau</div>
                <div class="font-bold text-base text-blue-500">B1+ → B2</div>
              </div>
            </div>
          </div>

          <!-- Span 4: Erster-Tag-Überlebensmodus (Critical Safety & Quick Reference) -->
          <div class="col-span-4 bento-card survival-card">
            <div class="space-y-3">
              <div class="flex-between">
                <span class="badge badge-amber">WICHTIG</span>
                <svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </div>
              <div>
                <h2 class="text-lg font-bold text-primary">Erster-Tag-Überlebensmodus</h2>
                <p class="text-xs text-secondary mt-1 leading-relaxed">
                  Die wichtigsten Sätze, Fragen und rechtlichen Grenzen für deinen ersten Tag auf Station.
                </p>
              </div>

              <div class="p-3 bg-subtle rounded-xl space-y-1 text-xs">
                <div class="font-semibold text-primary">Sofort-Orientierung:</div>
                <div class="text-secondary">• Was darf ich? Was darf ich NICHT?</div>
                <div class="text-secondary">• Der magische Satz bei Unklarheit</div>
                <div class="text-secondary">• Notfallnummern & Station 2 Regeln</div>
              </div>
            </div>

            <div class="pt-3">
              <a href="#bfd?tab=survival" class="btn btn-warning btn-sm w-full">
                Überlebensmodus öffnen →
              </a>
            </div>
          </div>
        </div>

        <!-- 12-Column Bento Grid: Row 2 (3 Micro-Modules) -->
        <div class="bento-grid">
          <!-- Card 1: Vokabeln & SRS (Span 4) -->
          <div class="col-span-4 bento-card justify-between">
            <div class="space-y-2">
              <div class="flex-between">
                <span class="badge badge-blue">Spaced Repetition</span>
                <span class="text-xs font-semibold ${dueCount > 0 ? 'text-amber-500' : 'text-emerald-500'}">
                  ${dueCount > 0 ? `${dueCount} fällig` : 'Alles erledigt'}
                </span>
              </div>
              <h3 class="font-bold text-base text-primary">Vokabeln & SRS</h3>
              <p class="text-xs text-secondary">
                ${dueCount > 0 ? 'Wiederhole deine Vokabeln im optimalen Zeitintervall.' : 'Deine heutigen Wiederholungen sind abgeschlossen.'}
              </p>
            </div>
            <div class="pt-4">
              <a href="#wiederholen" class="btn btn-secondary btn-sm w-full">
                ${dueCount > 0 ? 'Jetzt wiederholen →' : 'Wortschatz durchsuchen →'}
              </a>
            </div>
          </div>

          <!-- Card 2: Sprechtrainer (Span 4) -->
          <div class="col-span-4 bento-card justify-between">
            <div class="space-y-2">
              <div class="flex-between">
                <span class="badge badge-purple">Sprechen</span>
                <span class="text-xs text-secondary font-semibold">60 Sekunden</span>
              </div>
              <h3 class="font-bold text-base text-primary">Sprechtrainer</h3>
              <p class="text-xs text-secondary">
                Challenge: <em>Vorstellung bei der Stationsleitung & BFD-Motivation.</em>
              </p>
            </div>
            <div class="pt-4">
              <a href="#sprechen" class="btn btn-secondary btn-sm w-full">
                Sprechübung starten →
              </a>
            </div>
          </div>

          <!-- Card 3: Psychologie & Deeskalation (Span 4) -->
          <div class="col-span-4 bento-card justify-between">
            <div class="space-y-2">
              <div class="flex-between">
                <span class="badge badge-gray">Klinikwissen</span>
                <span class="text-xs text-secondary font-semibold">Psychiatrie</span>
              </div>
              <h3 class="font-bold text-base text-primary">Psychologie & Deeskalation</h3>
              <p class="text-xs text-secondary">
                Aktives Zuhören · Rollengrenzen · 5-4-3-2-1 Erdung bei Unruhe.
              </p>
            </div>
            <div class="pt-4">
              <a href="#psychologie" class="btn btn-secondary btn-sm w-full">
                Klinikwissen lernen →
              </a>
            </div>
          </div>
        </div>

        <!-- 12-Column Bento Grid: Row 3 (Timeline Daily Plan) -->
        <div class="bento-card col-span-12 space-y-4">
          <div class="flex-between flex-wrap gap-3">
            <div>
              <h2 class="section-title">Mein strukturierter Tagesplan</h2>
              <p class="text-xs text-secondary mt-0.5">
                Kompakte Zeitstruktur für deinen optimalen Lernfortschritt neben dem BFD-Alltag.
              </p>
            </div>

            <!-- Segmented Control for 20 / 45 / 90 Min -->
            <div class="flex items-center p-1 bg-subtle rounded-lg border border-subtle">
              <button class="btn btn-xs ${activePlanDuration === '20' ? 'btn-primary' : 'btn-ghost'} plan-toggle-btn" data-dur="20">
                20 Min
              </button>
              <button class="btn btn-xs ${activePlanDuration === '45' ? 'btn-primary' : 'btn-ghost'} plan-toggle-btn" data-dur="45">
                45 Min (Empfohlen)
              </button>
              <button class="btn btn-xs ${activePlanDuration === '90' ? 'btn-primary' : 'btn-ghost'} plan-toggle-btn" data-dur="90">
                90 Min Intensiv
              </button>
            </div>
          </div>

          <!-- Vertical Timeline -->
          <div class="timeline-list pt-2">
            ${plan.map((item, idx) => `
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="flex-1 p-3 bg-subtle rounded-xl flex-between flex-wrap gap-2">
                  <div>
                    <div class="text-xs font-semibold text-muted">${item.time} Uhr • ${item.duration}</div>
                    <div class="font-bold text-sm text-primary">${item.title}</div>
                    <div class="text-xs text-secondary">${item.desc}</div>
                  </div>
                  <a href="#${item.route}" class="btn btn-secondary btn-xs">
                    Öffnen →
                  </a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    // Event Bindings
    container.querySelectorAll('.plan-toggle-btn').forEach(btn => {
      btn.onclick = () => {
        activePlanDuration = btn.getAttribute('data-dur');
        renderView();
      };
    });
  }

  renderView();
}
