// Guided Roadmaps Component — Erste Woche, Erster Monat, Seminartage & Ethik

import { FIRST_WEEK_DATA } from '../data/first_week_data.js';
import { FIRST_MONTH_DATA } from '../data/first_month_data.js';
import { SEMINARS_DATA } from '../data/seminars_data.js';
import { ETHICS_DATA } from '../data/ethics_data.js';
import { Speech } from '../speech.js';

export function renderRoadmaps(container, params = {}) {
  const activeTab = params.tab || 'first_week';

  container.innerHTML = `
    <div class="roadmaps-wrapper animate-fadeIn space-y-6">
      <div class="hero-card">
        <div class="flex-between flex-wrap gap-4">
          <div>
            <span class="badge badge-purple mb-2">STRUKTURIERTE BEGLEITUNG</span>
            <h1 class="text-3xl font-bold text-gradient">🗺️ Praxis-Roadmaps & Onboarding</h1>
            <p class="text-secondary mt-1">Schritt-für-Schritt Pläne für die erste Woche, den ersten Monat, Seminare und Ethik.</p>
          </div>
          <a href="#heute" class="btn btn-secondary">← Zurück</a>
        </div>

        <div class="flex gap-2 flex-wrap mt-6 pt-4 border-t border-glass">
          <button class="btn btn-sm ${activeTab === 'first_week' ? 'btn-primary' : 'btn-outline'}" data-tab="first_week">
            📅 Meine erste Woche (Tag 1-7)
          </button>
          <button class="btn btn-sm ${activeTab === 'first_month' ? 'btn-primary' : 'btn-outline'}" data-tab="first_month">
            🎯 Mein erster Monat
          </button>
          <button class="btn btn-sm ${activeTab === 'seminars' ? 'btn-primary' : 'btn-outline'}" data-tab="seminars">
            🎓 26 Seminartage (DRK)
          </button>
          <button class="btn btn-sm ${activeTab === 'ethics' ? 'btn-primary' : 'btn-outline'}" data-tab="ethics">
            ⚖️ Ethik & Grenzen
          </button>
        </div>
      </div>

      <div id="roadmapTabContent"></div>
    </div>
  `;

  const contentArea = container.querySelector('#roadmapTabContent');

  if (activeTab === 'first_week') {
    contentArea.innerHTML = `
      <div class="grid md:grid-cols-2 gap-6">
        ${FIRST_WEEK_DATA.days.map(d => `
          <div class="card p-6 space-y-3 border border-glass">
            <div class="flex-between">
              <span class="badge badge-indigo">Tag ${d.day}</span>
              <span class="font-bold text-base text-gradient">${d.title}</span>
            </div>
            <p class="text-xs text-secondary">🎯 <strong>Ziel:</strong> ${d.goal}</p>
            <div class="space-y-1">
              <div class="text-xs font-semibold text-emerald-400">Aufgaben:</div>
              <ul class="list-disc list-inside text-xs text-secondary space-y-1">
                ${d.tasks.map(t => `<li>${t}</li>`).join('')}
              </ul>
            </div>
            ${d.phraseOfDay ? `
              <div class="p-3 bg-surface rounded-xl border border-glass flex-between text-xs">
                <span class="italic text-purple-200">💬 "${d.phraseOfDay}"</span>
                <button class="btn btn-ghost btn-xs text-purple-400 btn-speak-rd" data-text="${d.phraseOfDay}">🔊</button>
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    `;
  } else if (activeTab === 'first_month') {
    contentArea.innerHTML = `
      <div class="grid md:grid-cols-2 gap-6">
        ${FIRST_MONTH_DATA.weeks.map(w => `
          <div class="card p-6 space-y-3 border border-glass">
            <div class="flex-between">
              <span class="badge badge-purple">Woche ${w.week}</span>
              <span class="font-bold text-lg text-emerald-300">${w.theme}</span>
            </div>
            <p class="text-sm text-secondary">${w.focus}</p>
          </div>
        `).join('')}
      </div>
    `;
  } else if (activeTab === 'seminars') {
    contentArea.innerHTML = `
      <div class="space-y-6">
        <div class="card p-6">
          <h2 class="text-xl font-bold mb-2">🎓 ${SEMINARS_DATA.title}</h2>
          <p class="text-sm text-secondary mb-4">${SEMINARS_DATA.overview.purpose}</p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="p-3 bg-surface rounded-lg border border-glass">
              <div class="text-xs text-secondary">Gesamttage</div>
              <div class="text-xl font-bold text-emerald">${SEMINARS_DATA.overview.totalDays} Tage</div>
            </div>
            <div class="p-3 bg-surface rounded-lg border border-glass">
              <div class="text-xs text-secondary">Bildungszentrum</div>
              <div class="text-xl font-bold text-blue">${SEMINARS_DATA.overview.residentialBlockDays} Tage Block</div>
            </div>
            <div class="p-3 bg-surface rounded-lg border border-glass">
              <div class="text-xs text-secondary">Begleitung</div>
              <div class="text-xl font-bold text-purple">${SEMINARS_DATA.overview.educationalCoordinator}</div>
            </div>
            <div class="p-3 bg-surface rounded-lg border border-glass">
              <div class="text-xs text-secondary">Rechtsstatus</div>
              <div class="text-xs font-bold text-amber">100% Arbeitszeit</div>
            </div>
          </div>
        </div>

        <div class="card p-6">
          <h3 class="text-lg font-bold mb-4">💬 Redemittel für Seminardiskussionen</h3>
          <div class="space-y-3">
            ${SEMINARS_DATA.keyPhrasesForDiscussions.map(p => `
              <div class="p-3 bg-surface rounded-xl border border-glass flex-between flex-wrap gap-2">
                <div>
                  <div class="text-xs text-purple-400 font-bold mb-1">${p.category}</div>
                  <div class="font-semibold text-sm text-gray-100">${p.german}</div>
                  <div class="text-xs text-secondary mt-1">${p.english}</div>
                </div>
                <button class="btn btn-ghost btn-xs text-blue-400 btn-speak-rd" data-text="${p.german}">🔊</button>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  } else if (activeTab === 'ethics') {
    contentArea.innerHTML = `
      <div class="grid md:grid-cols-2 gap-6">
        ${ETHICS_DATA.sections.map(s => `
          <div class="card p-6 space-y-3 border border-glass">
            <div class="flex-between">
              <h3 class="font-bold text-lg text-emerald-300">${s.title}</h3>
              <span class="badge badge-emerald">${s.status}</span>
            </div>
            <p class="text-sm text-secondary">${s.content}</p>
            ${s.teamException ? `
              <div class="p-3 bg-amber-950/20 border border-amber-500/30 rounded-lg text-xs text-amber-300">
                ⚠️ <strong>Wichtig:</strong> ${s.teamException}
              </div>
            ` : ''}
            ${s.practicalRule ? `
              <div class="p-3 bg-surface rounded-lg border border-glass text-xs text-purple-300">
                💡 <strong>Praxisregel:</strong> ${s.practicalRule}
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    `;
  }

  container.querySelectorAll('[data-tab]').forEach(btn => {
    btn.onclick = () => {
      window.location.hash = `#roadmaps?tab=${btn.getAttribute('data-tab')}`;
    };
  });

  container.querySelectorAll('.btn-speak-rd').forEach(btn => {
    btn.onclick = () => Speech.speak(btn.getAttribute('data-text'), 0.9);
  });
}
