// Psychology Hub Component — "Psychologie verstehen"

import { PSYCHOLOGY_DATA } from '../data/psychology_data.js';
import { Speech } from '../speech.js';

export function renderPsychologyHub(container) {
  container.innerHTML = `
    <div class="psychology-wrapper animate-fadeIn space-y-6">
      <div class="hero-card">
        <div class="flex-between flex-wrap gap-4">
          <div>
            <div class="badge badge-emerald mb-2">KLINIK- & HANDLUNGSWISSEN</div>
            <h1 class="text-3xl font-bold text-gradient">${PSYCHOLOGY_DATA.overview.title}</h1>
            <p class="text-secondary mt-1">Verständnis für Patientenverhalten, Deeskalation, Bindungsmuster und Grenzen.</p>
          </div>
          <a href="#heute" class="btn btn-secondary">← Zurück</a>
        </div>
        <div class="alert alert-info text-xs mt-4">
          ℹ️ ${PSYCHOLOGY_DATA.overview.disclaimer}
        </div>
      </div>

      <!-- Concepts Grid -->
      <div class="grid md:grid-cols-2 gap-6">
        ${PSYCHOLOGY_DATA.concepts.map(c => `
          <div class="card p-6 space-y-4 border border-glass">
            <div class="flex-between">
              <span class="badge badge-indigo">${c.domain}</span>
              <span class="text-xs text-secondary">${c.source}</span>
            </div>

            <h2 class="text-xl font-bold text-emerald-300">${c.term}</h2>
            <p class="text-sm text-gray-200">${c.explanationGerman}</p>

            ${c.workplaceContext ? `
              <div class="p-3 bg-surface rounded-xl border border-glass text-xs text-secondary">
                🏥 <strong>Klinischer Kontext:</strong> ${c.workplaceContext}
              </div>
            ` : ''}

            ${c.steps ? `
              <div class="p-3 bg-blue-950/30 border border-blue-500/30 rounded-xl space-y-1">
                <div class="text-xs font-bold text-blue-400">Ablaufschritte:</div>
                <ul class="list-disc list-inside text-xs text-blue-200 space-y-1">
                  ${c.steps.map(s => `<li>${s}</li>`).join('')}
                </ul>
              </div>
            ` : ''}

            ${c.whatToDo ? `
              <div class="space-y-2">
                <div class="text-xs font-bold text-emerald-400">✅ Was ich tun sollte:</div>
                <ul class="list-disc list-inside text-xs text-secondary space-y-1">
                  ${c.whatToDo.map(d => `<li>${d}</li>`).join('')}
                </ul>
              </div>
            ` : ''}

            ${c.speakingPractice ? `
              <div class="p-3 bg-purple-950/30 border border-purple-500/30 rounded-xl flex-between flex-wrap gap-2">
                <div class="text-xs text-purple-200 italic">💬 "${c.speakingPractice}"</div>
                <button class="btn btn-ghost btn-xs text-purple-400 btn-speak-psy" data-text="${c.speakingPractice}">
                  🔊 Anhören
                </button>
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `;

  container.querySelectorAll('.btn-speak-psy').forEach(btn => {
    btn.onclick = () => Speech.speak(btn.getAttribute('data-text'), 0.9);
  });
}
