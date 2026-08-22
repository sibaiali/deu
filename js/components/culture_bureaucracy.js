// Culture & Bureaucracy Component

import { CULTURE_DATA } from '../data/culture_data.js';
import { BUREAUCRACY_DATA } from '../data/bureaucracy_data.js';
import { Speech } from '../speech.js';

export function renderCultureBureaucracy(container, params = {}) {
  const activeTab = params.tab || 'culture';

  container.innerHTML = `
    <div class="culture-bur-wrapper animate-fadeIn space-y-6">
      <div class="hero-card">
        <div class="flex-between flex-wrap gap-4">
          <div>
            <span class="badge badge-emerald mb-2">PRAXIS & ALLTAG</span>
            <h1 class="text-3xl font-bold text-gradient">🇩🇪 Arbeitskultur & Behördendeutsch</h1>
            <p class="text-secondary mt-1">Normen im deutschen Berufsleben, "Was sagen / Was vermeiden" und Amtssprache.</p>
          </div>
          <a href="#heute" class="btn btn-secondary">← Zurück</a>
        </div>

        <div class="flex gap-2 flex-wrap mt-6 pt-4 border-t border-glass">
          <button class="btn btn-sm ${activeTab === 'culture' ? 'btn-primary' : 'btn-outline'}" data-tab="culture">
            🏢 Arbeitskultur & Knigge
          </button>
          <button class="btn btn-sm ${activeTab === 'say_vs_avoid' ? 'btn-primary' : 'btn-outline'}" data-tab="say_vs_avoid">
            💬 Was sagen vs. Was vermeiden
          </button>
          <button class="btn btn-sm ${activeTab === 'bureaucracy' ? 'btn-primary' : 'btn-outline'}" data-tab="bureaucracy">
            📑 Behördendeutsch & Ämter
          </button>
        </div>
      </div>

      <div id="cultureTabContent"></div>
    </div>
  `;

  const contentArea = container.querySelector('#cultureTabContent');

  if (activeTab === 'culture') {
    contentArea.innerHTML = `
      <div class="grid md:grid-cols-2 gap-6">
        ${CULTURE_DATA.workplaceNorms.map(norm => `
          <div class="card p-6 space-y-3 border border-glass">
            <h3 class="text-xl font-bold text-blue-300">📌 ${norm.topic}</h3>
            <p class="text-sm text-secondary">${norm.explanation}</p>
            <div class="p-3 bg-surface rounded-xl border border-glass text-xs text-emerald-300">
              💡 <strong>Praxistipp:</strong> ${norm.tip}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (activeTab === 'say_vs_avoid') {
    contentArea.innerHTML = `
      <div class="space-y-4">
        ${CULTURE_DATA.whatToSayVsAvoid.map(item => `
          <div class="card p-6 space-y-3 border border-glass">
            <div class="badge badge-purple text-xs font-bold">${item.category}</div>
            <div class="grid md:grid-cols-3 gap-3">
              <div class="p-3 bg-red-950/20 border border-red-500/30 rounded-lg">
                <div class="text-xs font-bold text-red-400 uppercase mb-1">🚫 Vermeiden:</div>
                <div class="text-sm text-red-200">"${item.avoid}"</div>
              </div>
              <div class="p-3 bg-surface border border-glass rounded-lg">
                <div class="text-xs font-bold text-blue-400 uppercase mb-1">👍 Besser:</div>
                <div class="text-sm text-blue-200">"${item.better}"</div>
              </div>
              <div class="p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-lg">
                <div class="text-xs font-bold text-emerald-400 uppercase mb-1">⭐ Professionell (B2):</div>
                <div class="text-sm text-emerald-200 font-semibold">"${item.professionalB2}"</div>
              </div>
            </div>
            <div class="text-xs text-secondary italic">💡 Warum? ${item.whyExplanation}</div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (activeTab === 'bureaucracy') {
    contentArea.innerHTML = `
      <div class="space-y-6">
        ${BUREAUCRACY_DATA.topics.map(t => `
          <div class="card p-6 space-y-4 border border-glass">
            <h3 class="text-xl font-bold text-purple-300">📑 ${t.title}</h3>
            ${t.keyDocuments ? `
              <div>
                <div class="text-xs font-bold text-secondary uppercase mb-1">Erforderliche Unterlagen:</div>
                <div class="flex gap-2 flex-wrap">
                  ${t.keyDocuments.map(doc => `<span class="badge badge-gray text-xs">${doc}</span>`).join('')}
                </div>
              </div>
            ` : ''}
            <div class="space-y-2">
              <div class="text-xs font-bold text-emerald-400 uppercase">Wichtige Sätze:</div>
              ${t.usefulPhrases.map(p => `
                <div class="p-3 bg-surface rounded-xl border border-glass flex-between flex-wrap gap-2">
                  <div>
                    <div class="text-sm font-semibold text-gray-100">${p.german}</div>
                    <div class="text-xs text-secondary mt-1">${p.english}</div>
                  </div>
                  <button class="btn btn-ghost btn-xs text-blue-400 btn-speak-cb" data-text="${p.german}">🔊</button>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  container.querySelectorAll('[data-tab]').forEach(btn => {
    btn.onclick = () => {
      window.location.hash = `#kultur?tab=${btn.getAttribute('data-tab')}`;
    };
  });

  container.querySelectorAll('.btn-speak-cb').forEach(btn => {
    btn.onclick = () => Speech.speak(btn.getAttribute('data-text'), 0.9);
  });
}
