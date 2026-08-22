// Error Log Component — "Meine Fehler & Schwachstellen"

import { Storage } from '../storage.js';

export function renderErrorLog(container) {
  Storage.getAllErrors().then(errors => {
    container.innerHTML = `
      <div class="error-log-wrapper animate-fadeIn space-y-6">
        <div class="hero-card">
          <div class="flex-between flex-wrap gap-4">
            <div>
              <span class="badge badge-amber mb-2">FEHLER-TAGEBUCH</span>
              <h1 class="text-3xl font-bold text-gradient">❌ Meine Fehler & Schwachstellentraining</h1>
              <p class="text-secondary mt-1">Automatisch erfasste Fehler werden gezielt in zukünftige Wiederholungsdrills umgewandelt.</p>
            </div>
            <a href="#heute" class="btn btn-secondary">← Zurück</a>
          </div>
        </div>

        <div class="card p-6">
          <h2 class="text-xl font-bold mb-4">Erfasste Fehler (${errors.length})</h2>
          ${errors.length === 0 ? `
            <div class="p-8 text-center text-secondary">
              <div class="text-4xl mb-2">✨</div>
              <p>Aktuell sind keine wiederholten Fehler protokolliert. Weiter so!</p>
            </div>
          ` : `
            <div class="space-y-3">
              ${errors.map(err => `
                <div class="p-4 bg-surface rounded-xl border border-glass flex-between flex-wrap gap-3">
                  <div>
                    <span class="badge badge-amber text-xs">${err.category || 'Grammatik'}</span>
                    <div class="font-bold text-sm text-red-300 mt-1">Falsch: "${err.wrongAnswer}"</div>
                    <div class="text-xs text-emerald-400 mt-1">Richtig: "${err.correctAnswer}"</div>
                  </div>
                  <span class="text-xs text-secondary">${new Date(err.timestamp).toLocaleDateString('de-DE')}</span>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      </div>
    `;
  });
}
