// Sources Library Component — Quellenprüfung & Nachweise

import { SOURCES_CATALOG } from '../data/sources_catalog.js';

export function renderSourcesLibrary(container) {
  container.innerHTML = `
    <div class="sources-wrapper animate-fadeIn space-y-6">
      <div class="hero-card">
        <div class="flex-between flex-wrap gap-4">
          <div>
            <span class="badge badge-emerald mb-2">TRANSPARENZ & PROVENIENZ</span>
            <h1 class="text-3xl font-bold text-gradient">📚 Quellenprüfung & Nachweise</h1>
            <p class="text-secondary mt-1">Lückenlose Übersicht über alle 14 analysierten Primärquellen, Notizen und deren Abdeckungsgrad.</p>
          </div>
          <a href="#heute" class="btn btn-secondary">← Zurück</a>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        ${SOURCES_CATALOG.map(src => `
          <div class="card p-6 space-y-3 border border-glass">
            <div class="flex-between">
              <span class="badge badge-indigo text-xs">${src.type} • ${src.pages} ${src.type === 'EPUB' ? 'Kapitel' : 'Seiten'}</span>
              <span class="badge badge-emerald text-xs">${src.coveragePercent}% Abdeckung</span>
            </div>

            <h3 class="text-lg font-bold text-gradient">${src.title || src.filename}</h3>
            <div class="text-xs text-secondary">Autor / Herkunft: <strong>${src.author}</strong></div>

            <div class="p-3 bg-surface rounded-xl border border-glass text-xs space-y-1">
              <div class="font-bold text-purple-300">Extrahierte Themen:</div>
              <ul class="list-disc list-inside text-secondary space-y-0.5">
                ${src.topicsFound.slice(0, 4).map(t => `<li>${t}</li>`).join('')}
              </ul>
            </div>

            <div class="flex-between text-xs text-secondary pt-2 border-t border-glass">
              <span>🧠 ${src.conceptsCount} Konzepte</span>
              <span>📖 ${src.vocabularyCount} Vokabeln</span>
              <span class="badge ${src.provenance === 'AUS_QUELLE' ? 'badge-emerald' : 'badge-amber'}">${src.provenance}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
