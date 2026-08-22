// Phrase Trainer Component — "Was sage ich?" & "Ich verstehe nicht!"

import { PHRASES_DATA } from '../data/phrases_data.js';
import { Speech } from '../speech.js';

export function renderPhraseTrainer(container) {
  container.innerHTML = `
    <div class="phrase-trainer animate-fadeIn space-y-6">
      <div class="hero-card">
        <div class="flex-between flex-wrap gap-4">
          <div>
            <span class="badge badge-blue mb-2">FORMULIERUNGS-TRANSFORMATOR</span>
            <h1 class="text-3xl font-bold text-gradient">${PHRASES_DATA.title}</h1>
            <p class="text-secondary mt-1">Lerne, wie du von einfachem B1 stufenweise zu natürlichem und hochprofessionellem B2/C1 wechselst.</p>
          </div>
          <a href="#heute" class="btn btn-secondary">← Zurück</a>
        </div>
      </div>

      <!-- Categories -->
      <div class="space-y-6">
        ${PHRASES_DATA.categories.map(cat => `
          <div class="card p-6">
            <h2 class="text-xl font-bold mb-4 text-purple-300 flex items-center gap-2">
              <span>💬</span> ${cat.name}
            </h2>
            <div class="space-y-4">
              ${cat.phrases.map(p => `
                <div class="p-4 bg-surface rounded-xl border border-glass space-y-3">
                  <div class="text-xs text-secondary font-semibold">📍 Situation: ${p.situation}</div>
                  
                  <div class="grid md:grid-cols-4 gap-3">
                    <div class="p-3 bg-gray-900/50 rounded-lg border border-gray-700">
                      <div class="text-xs font-bold text-gray-400 uppercase mb-1">Basic (B1):</div>
                      <div class="text-sm text-gray-300">${p.basic}</div>
                    </div>

                    <div class="p-3 bg-blue-950/30 rounded-lg border border-blue-500/30">
                      <div class="text-xs font-bold text-blue-400 uppercase mb-1">Natürlich:</div>
                      <div class="text-sm text-blue-200">${p.natural}</div>
                    </div>

                    <div class="p-3 bg-emerald-950/30 rounded-lg border border-emerald-500/30">
                      <div class="text-xs font-bold text-emerald-400 uppercase mb-1">Professionell (B2):</div>
                      <div class="text-sm text-emerald-200 font-semibold">${p.professionalB2}</div>
                    </div>

                    <div class="p-3 bg-purple-950/30 rounded-lg border border-purple-500/30">
                      <div class="text-xs font-bold text-purple-400 uppercase mb-1">C1-Register:</div>
                      <div class="text-sm text-purple-200">${p.c1}</div>
                    </div>
                  </div>

                  <div class="flex-between pt-2">
                    <span class="text-xs text-secondary italic">💡 ${p.whyExplanation || ''}</span>
                    <button class="btn btn-ghost btn-xs text-blue-400 btn-speak-p" data-text="${p.professionalB2}">
                      🔊 B2-Phrase anhören
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Emergency Understanding Trainer -->
      <div class="card p-6 bg-gradient-to-br from-amber-950/30 to-red-950/30 border border-amber-500/30">
        <h3 class="text-2xl font-bold text-amber-300 mb-3">🚨 ${PHRASES_DATA.emergencyUnderstandingTrainer.title}</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-6">
          ${PHRASES_DATA.emergencyUnderstandingTrainer.tips.map(tip => `
            <div class="p-3 bg-surface rounded-lg text-xs text-secondary border border-glass">
              ${tip}
            </div>
          `).join('')}
        </div>

        <div class="space-y-3">
          ${PHRASES_DATA.emergencyUnderstandingTrainer.scenarios.map(sc => `
            <div class="p-4 bg-surface rounded-xl border border-glass space-y-2">
              <div class="text-xs font-bold text-red-400 uppercase">Klinik-Alltagston (Schnell & Umgangssprachlich):</div>
              <div class="text-base text-gray-200 font-semibold">"${sc.spokenFast}"</div>
              <div class="text-xs font-bold text-emerald-400 uppercase mt-2">Souveräne B2-Klärung:</div>
              <div class="text-sm text-emerald-300">${sc.clarificationB2}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  container.querySelectorAll('.btn-speak-p').forEach(btn => {
    btn.onclick = () => Speech.speak(btn.getAttribute('data-text'), 0.9);
  });
}
