// BFD Hub Component — "Mein BFD auf einen Blick"

import { BFD_DATA } from '../data/bfd_data.js';

export function renderBFDHub(container, params = {}) {
  const activeTab = params.tab || 'overview';

  container.innerHTML = `
    <div class="bfd-hub animate-fadeIn">
      <!-- Header -->
      <div class="hero-card mb-6">
        <div class="flex-between flex-wrap gap-4">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="badge badge-emerald">BESTÄTIGT & SYNTHETISIERT</span>
              <span class="badge badge-blue">UKGM Marburg</span>
            </div>
            <h1 class="text-3xl font-bold text-gradient">${BFD_DATA.overview.title}</h1>
            <p class="text-secondary mt-1">${BFD_DATA.overview.subtitle}</p>
          </div>
          <a href="#heute" class="btn btn-secondary">← Zurück zum Dashboard</a>
        </div>

        <!-- Navigation Tabs -->
        <div class="flex gap-2 flex-wrap mt-6 pt-4 border-t border-glass">
          <button class="btn btn-sm ${activeTab === 'overview' ? 'btn-primary' : 'btn-outline'}" data-tab="overview">
            📊 Übersicht & Zeit
          </button>
          <button class="btn btn-sm ${activeTab === 'finances' ? 'btn-primary' : 'btn-outline'}" data-tab="finances">
            💰 Finanzen (420 €)
          </button>
          <button class="btn btn-sm ${activeTab === 'location' ? 'btn-primary' : 'btn-outline'}" data-tab="location">
            📍 Arbeitsplatz & Standorte
          </button>
          <button class="btn btn-sm ${activeTab === 'team' ? 'btn-primary' : 'btn-outline'}" data-tab="team">
            👥 Team & Rollengrenzen
          </button>
          <button class="btn btn-sm ${activeTab === 'survival' ? 'btn-primary' : 'btn-outline'}" data-tab="survival">
            🆘 Erster-Tag-Überlebensmodus
          </button>
        </div>
      </div>

      <!-- Tab Content Area -->
      <div id="tabContent"></div>
    </div>
  `;

  // Render specific tab content
  const tabContent = container.querySelector('#tabContent');

  if (activeTab === 'overview') {
    tabContent.innerHTML = `
      <div class="grid md:grid-cols-2 gap-6">
        <div class="card p-6">
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
            <span>⏱️</span> Arbeitszeit & Urlaub
          </h2>
          <div class="space-y-3">
            <div class="flex-between p-3 bg-surface rounded-lg border border-glass">
              <span class="font-semibold">Wöchentliche Arbeitszeit:</span>
              <span class="badge badge-blue">${BFD_DATA.workSchedule.weeklyHours} Stunden / Woche</span>
            </div>
            <div class="flex-between p-3 bg-surface rounded-lg border border-glass">
              <span class="font-semibold">Urlaubsanspruch:</span>
              <span class="badge badge-emerald">${BFD_DATA.workSchedule.vacationDays} Tage bezahlter Urlaub</span>
            </div>
            <div class="flex-between p-3 bg-surface rounded-lg border border-glass">
              <span class="font-semibold">Gesetzliche Seminartage:</span>
              <span class="badge badge-purple">${BFD_DATA.workSchedule.mandatorySeminarDays} Tage (inkl. 5 Tage Block)</span>
            </div>
            <div class="flex-between p-3 bg-surface rounded-lg border border-glass">
              <span class="font-semibold">Probezeit:</span>
              <span class="badge badge-amber">${BFD_DATA.workSchedule.probezeit.durationWeeks} Wochen (${BFD_DATA.workSchedule.probezeit.noticePeriod})</span>
            </div>
          </div>
          <div class="alert alert-info mt-4">
            ℹ️ ${BFD_DATA.workSchedule.seminarDetails}
          </div>
        </div>

        <div class="card p-6">
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
             Prioritäten: Was muss ich wissen?
          </h2>
          <div class="space-y-4">
            <div>
              <div class="text-xs uppercase font-bold text-red-400 mb-2">Muss ich wissen (Kritisch):</div>
              <ul class="list-disc list-inside text-sm space-y-1 text-secondary">
                ${BFD_DATA.knowledgePriorities.mussIchWissen.map(item => `<li>${item}</li>`).join('')}
              </ul>
            </div>

            <div>
              <div class="text-xs uppercase font-bold text-amber-400 mb-2">Sollte ich können (Praxis):</div>
              <ul class="list-disc list-inside text-sm space-y-1 text-secondary">
                ${BFD_DATA.knowledgePriorities.sollteIchKoennen.map(item => `<li>${item}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;
  } else if (activeTab === 'finances') {
    tabContent.innerHTML = `
      <div class="space-y-6">
        <div class="card p-6 bg-gradient-to-br from-emerald-900/30 to-blue-900/30 border border-emerald-500/30">
          <div class="flex-between flex-wrap gap-4">
            <div>
              <span class="badge badge-emerald mb-2">MONATLICHER BARBETRAG</span>
              <div class="text-4xl font-extrabold text-emerald-400">420,00 €</div>
              <p class="text-sm text-secondary mt-1">Gesamter monatlich auf das Girokonto überwiesener Barbetrag.</p>
            </div>
            <div class="text-right">
              <span class="badge badge-indigo mb-2">GESCHÄTZTER GESAMTWERT</span>
              <div class="text-2xl font-bold text-purple-300">ca. 700 – 950 € / Monat</div>
              <p class="text-xs text-secondary mt-1">Inkl. freies Wohnen, Essen & Sozialversicherung.</p>
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="card p-5">
            <h3 class="font-bold text-lg text-emerald-400 mb-3">1. Barleistungen (420 €)</h3>
            <div class="space-y-3">
              ${BFD_DATA.finances.cashItems.map(item => `
                <div class="p-3 bg-surface rounded-lg border border-glass">
                  <div class="flex-between font-semibold">
                    <span>${item.label}</span>
                    <span class="text-emerald">${item.amount.toFixed(2)} €</span>
                  </div>
                  <div class="text-xs text-secondary mt-1">${item.description}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="card p-5">
            <h3 class="font-bold text-lg text-purple-400 mb-3">2. Sachleistungen</h3>
            <div class="space-y-3">
              ${BFD_DATA.finances.nonCashBenefits.map(item => `
                <div class="p-3 bg-surface rounded-lg border border-glass">
                  <div class="flex-between font-semibold">
                    <span>${item.label}</span>
                    <span class="badge badge-purple">${item.estimatedValue}</span>
                  </div>
                  <div class="text-xs text-secondary mt-1">Bereitstellung: <strong>${item.provider}</strong></div>
                  <div class="text-xs text-secondary mt-1">${item.description || item.details}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="card p-5">
            <h3 class="font-bold text-lg text-blue-400 mb-3">3. Sozialversicherung</h3>
            <div class="p-4 bg-surface rounded-lg border border-glass">
              <div class="flex-between font-semibold">
                <span>100% Arbeitgeber</span>
                <span class="badge badge-blue">ca. 160,58 € / Mo</span>
              </div>
              <p class="text-xs text-secondary mt-2">
                Die Einsatzstelle übernimmt 100% der Beiträge zur Kranken-, Pflege-, Renten- und Arbeitslosenversicherung.
              </p>
            </div>
            <div class="alert alert-warning mt-4 text-xs">
              ⚠️ <strong>Wichtig:</strong> Der Gesamtwert ist kein Gehalt, sondern eine rechtliche und steuerfreie Gesamtkalkulation.
            </div>
          </div>
        </div>
      </div>
    `;
  } else if (activeTab === 'location') {
    tabContent.innerHTML = `
      <div class="grid md:grid-cols-2 gap-6">
        ${BFD_DATA.locations.map(loc => `
          <div class="card p-6 border ${loc.status === 'BESTÄTIGT' ? 'border-emerald-500/40' : 'border-amber-500/40'}">
            <div class="flex-between mb-3">
              <span class="badge ${loc.status === 'BESTÄTIGT' ? 'badge-emerald' : 'badge-amber'}">${loc.status}</span>
              <span class="text-xs text-secondary">${loc.provenance}</span>
            </div>
            <h3 class="text-lg font-bold mb-1">${loc.name}</h3>
            <div class="text-sm font-semibold text-blue-300 mb-2">📍 ${loc.address}</div>
            <p class="text-sm text-secondary mb-3">${loc.relevance}</p>
            <div class="p-3 bg-surface rounded-lg text-xs text-secondary border border-glass">
              💡 ${loc.notes}
            </div>
          </div>
        `).join('')}
      </div>

      <div class="card p-6 mt-6">
        <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
           Die psychiatrischen Stationen & Kriseninterventions-Einheit
        </h3>
        <div class="grid md:grid-cols-2 gap-4">
          ${BFD_DATA.wards.map(w => `
            <div class="p-4 bg-surface rounded-xl border border-glass">
              <div class="flex-between mb-2">
                <span class="font-bold text-lg">${w.name}</span>
                <span class="badge badge-purple">${w.capacity}</span>
              </div>
              <p class="text-xs text-secondary mb-3"><strong>Fokus:</strong> ${w.patientFocus}</p>
              ${w.keySafetyRules ? `
                <div class="text-xs font-semibold text-red-400 mb-1">Sicherheitsregeln:</div>
                <ul class="list-disc list-inside text-xs text-secondary space-y-1">
                  ${w.keySafetyRules.map(r => `<li>${r}</li>`).join('')}
                </ul>
              ` : `<p class="text-xs text-secondary">${w.environment}</p>`}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (activeTab === 'team') {
    tabContent.innerHTML = `
      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="card p-6 border-emerald-500/40 bg-emerald-950/10">
          <div class="flex items-center gap-2 mb-4">
            <span class="badge badge-emerald text-sm">✅ WAS ICH DARF & SOLL</span>
          </div>
          <div class="space-y-3">
            ${BFD_DATA.roleBoundaries.canDo.map(c => `
              <div class="p-3 bg-surface rounded-lg border border-glass">
                <div class="font-bold text-sm text-emerald-300">${c.action}</div>
                <div class="text-xs text-secondary mt-1">${c.examples}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="card p-6 border-red-500/40 bg-red-950/10">
          <div class="flex items-center gap-2 mb-4">
            <span class="badge badge-red text-sm">🚫 WAS ICH NICHT DARF (GRENZEN)</span>
          </div>
          <div class="space-y-3">
            ${BFD_DATA.roleBoundaries.cannotDo.map(c => `
              <div class="p-3 bg-surface rounded-lg border border-glass">
                <div class="flex-between font-bold text-sm text-red-300">
                  <span>${c.action}</span>
                  <span class="badge badge-red text-xs">${c.warningLevel}</span>
                </div>
                <div class="text-xs text-secondary mt-1">${c.reason}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="card p-6">
        <h3 class="text-xl font-bold mb-4">👥 Das multiprofessionelle Team auf Station</h3>
        <div class="grid md:grid-cols-3 gap-4">
          ${BFD_DATA.teamRoles.map(t => `
            <div class="p-4 bg-surface rounded-xl border border-glass">
              <div class="flex-between font-bold text-base mb-1">
                <span>${t.title}</span>
                ${t.abbrev ? `<span class="badge badge-blue">${t.abbrev}</span>` : ''}
              </div>
              <p class="text-xs text-secondary mb-2">${t.description}</p>
              <div class="text-xs font-semibold text-purple-300">Wann ansprechen?</div>
              <div class="text-xs text-secondary">${t.whenToContact || t.mindset}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (activeTab === 'survival') {
    tabContent.innerHTML = `
      <div class="space-y-6">
        <div class="card p-6 bg-gradient-to-r from-red-900/30 to-amber-900/30 border-red-500/40">
          <h2 class="text-2xl font-bold text-red-300 mb-2">🆘 Erster-Tag-Überlebensmodus</h2>
          <p class="text-secondary text-sm">
            Diese Seite ist dein Schnellzugriff für den ersten Arbeitstag. Hier findest du sofort die 10 unverzichtbaren Sätze, die 10 wichtigsten Fragen und die Notfallregeln.
          </p>
        </div>

        <div class="card p-6">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
             10 Sätze, die du am ersten Tag unbedingt brauchst
          </h3>
          <div class="space-y-3">
            ${BFD_DATA.firstDaySurvival.tenEssentialPhrases.map((p, idx) => `
              <div class="p-4 bg-surface rounded-xl border border-glass flex-between flex-wrap gap-3">
                <div class="flex-1">
                  <div class="text-xs text-purple-400 font-semibold mb-1">${idx + 1}. Situation: ${p.situation}</div>
                  <div class="font-bold text-base text-gradient">${p.german}</div>
                  <div class="text-xs text-secondary mt-1">${p.english}</div>
                </div>
                <button class="btn btn-sm btn-outline btn-speak" data-text="${p.german}">
                  🔊 Anhören
                </button>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="card p-6">
            <h3 class="text-xl font-bold mb-4">❓ 10 Fragen, die du klären solltest</h3>
            <ol class="list-decimal list-inside space-y-2 text-sm text-secondary">
              ${BFD_DATA.firstDaySurvival.tenCriticalQuestions.map(q => `
                <li class="p-2 bg-surface rounded border border-glass">${q}</li>
              `).join('')}
            </ol>
          </div>

          <div class="card p-6 bg-red-950/20 border-red-500/30">
            <h3 class="text-xl font-bold text-red-400 mb-4">🚨 Notfallprotokoll (5 Schritte)</h3>
            <div class="space-y-2 text-sm text-secondary">
              <div class="p-2 bg-surface rounded"><strong>Schritt 1:</strong> ${BFD_DATA.firstDaySurvival.emergencyProtocol.step1}</div>
              <div class="p-2 bg-surface rounded"><strong>Schritt 2:</strong> ${BFD_DATA.firstDaySurvival.emergencyProtocol.step2}</div>
              <div class="p-2 bg-surface rounded"><strong>Schritt 3:</strong> ${BFD_DATA.firstDaySurvival.emergencyProtocol.step3}</div>
              <div class="p-2 bg-surface rounded"><strong>Schritt 4:</strong> ${BFD_DATA.firstDaySurvival.emergencyProtocol.step4}</div>
              <div class="p-2 bg-surface rounded"><strong>Schritt 5:</strong> ${BFD_DATA.firstDaySurvival.emergencyProtocol.step5}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Hook tab buttons
  container.querySelectorAll('[data-tab]').forEach(btn => {
    btn.onclick = () => {
      window.location.hash = `#bfd?tab=${btn.getAttribute('data-tab')}`;
    };
  });

  // Hook TTS speak buttons
  container.querySelectorAll('.btn-speak').forEach(btn => {
    btn.onclick = () => {
      Speech.speak(btn.getAttribute('data-text'), 0.9);
    };
  });
}
