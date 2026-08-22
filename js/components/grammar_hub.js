// Grammar Hub Component — 25 Lektionen & Der/Die/Das System

import { GRAMMAR_DATA } from '../data/grammar_data.js';

export function renderGrammarHub(container, params = {}) {
  const activeLessonId = params.id || (GRAMMAR_DATA.lessons[0] ? GRAMMAR_DATA.lessons[0].id : null);
  const currentLesson = GRAMMAR_DATA.lessons.find(l => l.id === activeLessonId) || GRAMMAR_DATA.lessons[0];

  container.innerHTML = `
    <div class="grammar-wrapper animate-fadeIn space-y-6">
      <div class="hero-card">
        <div class="flex-between flex-wrap gap-4">
          <div>
            <span class="badge badge-purple mb-2">GRAMMATIK-SYSTEM</span>
            <h1 class="text-3xl font-bold text-gradient">📖 Grammatik (B1 → B2 → C1)</h1>
            <p class="text-secondary mt-1">25 systematische Lektionen mit Regelerklärungen, klinischen Mustersätzen und interaktiven Übungsdrills.</p>
          </div>
          <a href="#heute" class="btn btn-secondary">← Zurück</a>
        </div>
      </div>

      <div class="grid md:grid-cols-4 gap-6">
        <!-- Sidebar: Lesson Index -->
        <div class="card p-4 space-y-2 max-h-[700px] overflow-y-auto">
          <div class="text-xs uppercase font-bold text-secondary mb-2">Lektionen-Verzeichnis:</div>
          ${GRAMMAR_DATA.lessons.map(l => `
            <a href="#grammatik?id=${l.id}" class="block p-3 rounded-xl text-xs transition-all ${l.id === currentLesson.id ? 'bg-primary text-white font-bold' : 'bg-surface hover:bg-glass text-secondary'}">
              <div class="flex-between">
                <span>Lektion ${l.number}</span>
                <span class="badge badge-xs badge-indigo">${l.level}</span>
              </div>
              <div class="mt-1 truncate">${l.title}</div>
            </a>
          `).join('')}
        </div>

        <!-- Main Lesson Content -->
        <div class="md:col-span-3 card p-8 space-y-6">
          <div class="flex-between border-b border-glass pb-4 flex-wrap gap-2">
            <div>
              <div class="badge badge-indigo text-xs mb-1">Lektion ${currentLesson.number} • ${currentLesson.category}</div>
              <h2 class="text-2xl font-bold text-gradient">${currentLesson.title}</h2>
            </div>
            <span class="badge badge-purple">${currentLesson.level}</span>
          </div>

          <!-- Explanation -->
          <div class="prose max-w-none text-gray-200 text-sm leading-relaxed whitespace-pre-line bg-surface p-6 rounded-2xl border border-glass">
${currentLesson.explanationGerman}
          </div>

          <!-- Examples -->
          <div>
            <h3 class="font-bold text-lg text-emerald-400 mb-3">📌 Mustersätze aus der Praxis</h3>
            <div class="space-y-2">
              ${currentLesson.examples.map(ex => `
                <div class="p-3 bg-surface rounded-xl border border-glass">
                  <div class="font-bold text-sm text-gray-100">${ex.german}</div>
                  <div class="text-xs text-secondary mt-1">${ex.english}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Common Pitfalls -->
          ${currentLesson.commonErrors && currentLesson.commonErrors.length > 0 ? `
            <div class="p-4 bg-amber-950/20 border border-amber-500/30 rounded-xl">
              <h4 class="font-bold text-amber-400 text-sm mb-2">⚠️ Typische Fehler vermeiden:</h4>
              <ul class="list-disc list-inside text-xs text-secondary space-y-1">
                ${currentLesson.commonErrors.map(err => `<li>${err}</li>`).join('')}
              </ul>
            </div>
          ` : ''}

          <!-- Interactive Exercise Drill -->
          ${currentLesson.exercises && currentLesson.exercises.length > 0 ? `
            <div class="pt-6 border-t border-glass space-y-4">
              <h3 class="font-bold text-lg text-blue-400">✍️ Interaktive Übung</h3>
              ${currentLesson.exercises.map(ex => `
                <div class="p-4 bg-surface rounded-xl border border-glass space-y-3" id="exBox_${ex.id}">
                  <div class="text-sm font-semibold">${ex.question}</div>
                  <input type="text" class="input w-full text-sm" id="inp_${ex.id}" placeholder="Tippe deine Lösung hier ein..." />
                  <div class="flex gap-2">
                    <button class="btn btn-sm btn-primary btn-check-ex" data-id="${ex.id}" data-correct="${ex.correctSentence}">
                      Überprüfen
                    </button>
                    <button class="btn btn-sm btn-ghost btn-hint-ex text-xs" data-hint="${ex.hint}">
                      💡 Tipp anzeigen
                    </button>
                  </div>
                  <div class="text-xs font-semibold hidden" id="res_${ex.id}"></div>
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;

  // Hook exercise check buttons
  container.querySelectorAll('.btn-check-ex').forEach(btn => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-id');
      const correct = btn.getAttribute('data-correct').trim().toLowerCase();
      const userInp = container.querySelector(`#inp_${id}`).value.trim().toLowerCase();
      const res = container.querySelector(`#res_${id}`);

      res.classList.remove('hidden');
      if (userInp === correct) {
        res.className = 'text-xs font-bold text-emerald-400';
        res.innerHTML = `✅ Perfekt gelöst: "${btn.getAttribute('data-correct')}"`;
      } else {
        res.className = 'text-xs font-bold text-amber-400';
        res.innerHTML = `⚠️ Fast! Musterlösung: "${btn.getAttribute('data-correct')}"`;
      }
    };
  });

  container.querySelectorAll('.btn-hint-ex').forEach(btn => {
    btn.onclick = () => alert('Tipp: ' + btn.getAttribute('data-hint'));
  });
}
