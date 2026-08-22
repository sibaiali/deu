// Reading Hub Component — Leseverstehen & Praxistexte

import { READING_DATA } from '../data/reading_data.js';

export function renderReadingHub(container, params = {}) {
  const activeTextId = params.id || (READING_DATA.texts[0] ? READING_DATA.texts[0].id : null);
  const currentText = READING_DATA.texts.find(t => t.id === activeTextId) || READING_DATA.texts[0];

  container.innerHTML = `
    <div class="reading-wrapper animate-fadeIn space-y-6">
      <div class="hero-card">
        <div class="flex-between flex-wrap gap-4">
          <div>
            <span class="badge badge-blue mb-2">LESEVERSTEHEN</span>
            <h1 class="text-3xl font-bold text-gradient">📑 ${READING_DATA.title}</h1>
            <p class="text-secondary mt-1">Authentische Stationsdokumente, Dienstpläne und Berichte (B1+ bis C1).</p>
          </div>
          <a href="#heute" class="btn btn-secondary">← Zurück</a>
        </div>
      </div>

      <div class="grid md:grid-cols-4 gap-6">
        <div class="card p-4 space-y-2">
          <div class="text-xs uppercase font-bold text-secondary mb-2">Verfügbare Texte:</div>
          ${READING_DATA.texts.map(t => `
            <a href="#lesen?id=${t.id}" class="block p-3 rounded-xl text-xs transition-all ${t.id === currentText.id ? 'bg-primary text-white font-bold' : 'bg-surface hover:bg-glass text-secondary'}">
              <div class="flex-between">
                <span class="font-bold">${t.title}</span>
                <span class="badge badge-xs badge-indigo">${t.level}</span>
              </div>
            </a>
          `).join('')}
        </div>

        <div class="md:col-span-3 card p-8 space-y-6">
          <div class="flex-between border-b border-glass pb-3">
            <div>
              <span class="badge badge-indigo text-xs">${currentText.level}</span>
              <h2 class="text-2xl font-bold mt-1">${currentText.title}</h2>
            </div>
            <span class="text-xs text-secondary">${currentText.source}</span>
          </div>

          <div class="p-6 bg-surface rounded-2xl border border-glass text-sm text-gray-200 leading-relaxed font-mono whitespace-pre-line">
${currentText.text}
          </div>

          <!-- Questions -->
          <div class="space-y-4 pt-4 border-t border-glass">
            <h3 class="font-bold text-lg text-emerald-400">❓ Fragen zum Textverständnis</h3>
            ${currentText.comprehensionQuestions.map((q, qIdx) => `
              <div class="p-4 bg-surface rounded-xl border border-glass space-y-3" id="qBox_${qIdx}">
                <div class="font-semibold text-sm">${qIdx + 1}. ${q.question}</div>
                <div class="space-y-2">
                  ${q.options.map((opt, oIdx) => `
                    <label class="flex items-center gap-2 text-xs p-2 rounded-lg bg-card cursor-pointer hover:bg-glass">
                      <input type="radio" name="q_${qIdx}" value="${oIdx}" />
                      <span>${opt}</span>
                    </label>
                  `).join('')}
                </div>
                <button class="btn btn-sm btn-outline btn-check-q" data-qindex="${qIdx}" data-correct="${q.correctIndex}" data-exp="${q.explanation}">
                  Antwort prüfen
                </button>
                <div class="text-xs font-semibold hidden" id="qRes_${qIdx}"></div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  container.querySelectorAll('.btn-check-q').forEach(btn => {
    btn.onclick = () => {
      const qIdx = btn.getAttribute('data-qindex');
      const correct = parseInt(btn.getAttribute('data-correct'));
      const exp = btn.getAttribute('data-exp');
      const selected = container.querySelector(`input[name="q_${qIdx}"]:checked`);
      const res = container.querySelector(`#qRes_${qIdx}`);

      res.classList.remove('hidden');
      if (!selected) {
        res.className = 'text-xs font-bold text-amber-400';
        res.innerHTML = 'Bitte wähle eine Antwort aus!';
        return;
      }

      if (parseInt(selected.value) === correct) {
        res.className = 'text-xs font-bold text-emerald-400';
        res.innerHTML = `✅ Richtig! ${exp}`;
      } else {
        res.className = 'text-xs font-bold text-red-400';
        res.innerHTML = `❌ Leider nicht korrekt. ${exp}`;
      }
    };
  });
}
