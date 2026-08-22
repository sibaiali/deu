// Engineering Hub Component — Technisches Deutsch (B2/C1)

import { ENGINEERING_DATA } from '../data/engineering_data.js';

export function renderEngineeringHub(container) {
  container.innerHTML = `
    <div class="engineering-wrapper animate-fadeIn space-y-6">
      <div class="hero-card">
        <div class="flex-between flex-wrap gap-4">
          <div>
            <span class="badge badge-indigo mb-2">ZUKUNFTS-MODUL (B2/C1)</span>
            <h1 class="text-3xl font-bold text-gradient">⚙️ ${ENGINEERING_DATA.title}</h1>
            <p class="text-secondary mt-1">${ENGINEERING_DATA.description}</p>
          </div>
          <a href="#heute" class="btn btn-secondary">← Zurück</a>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        ${ENGINEERING_DATA.categories.map(cat => `
          <div class="card p-6 space-y-4 border border-glass">
            <h3 class="text-xl font-bold text-blue-300">🔧 ${cat.name}</h3>
            ${cat.vocabulary ? `
              <div class="space-y-3">
                ${cat.vocabulary.map(v => `
                  <div class="p-3 bg-surface rounded-xl border border-glass">
                    <div class="flex-between mb-1">
                      <span class="font-bold text-sm text-emerald-300">${v.article ? v.article + ' ' : ''}${v.word}</span>
                      <span class="badge badge-indigo text-xs">${v.level}</span>
                    </div>
                    <p class="text-xs text-secondary mb-1">${v.definition}</p>
                    <div class="text-xs text-gray-300 italic">"${v.exampleGerman}"</div>
                  </div>
                `).join('')}
              </div>
            ` : ''}

            ${cat.phrases ? `
              <div class="space-y-2">
                ${cat.phrases.map(p => `
                  <div class="p-3 bg-surface rounded-xl border border-glass">
                    <div class="text-xs font-semibold text-gray-200">${p.german}</div>
                    <div class="text-xs text-secondary mt-1">${p.english}</div>
                  </div>
                `).join('')}
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
