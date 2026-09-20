// Culture & Bureaucracy Component — Arbeitskultur, Hessen/Frankfurt Dialekt, Mietrecht & Humor

import { CULTURE_DATA } from '../data/culture_data.js';
import { HESSEN_FRANKFURT_DATA } from '../data/hessen_frankfurt_data.js';
import { Speech } from '../speech.js';

export function renderCultureBureaucracy(container) {
  let activeTab = 'hessen'; // 'hessen' | 'norms' | 'what_to_say' | 'bureaucracy'

  function renderView() {
    container.innerHTML = `
      <div class="culture-wrapper animate-fadeIn space-y-6 max-w-6xl mx-auto">
        <!-- Hero Header -->
        <div class="hero-card">
          <div class="flex-between flex-wrap gap-4">
            <div>
              <span class="badge badge-amber mb-2">LOKALKOLORIT & ARBEITSKULTUR</span>
              <h1 class="page-title">🏙️ Hessen, Alltag & Arbeitskultur</h1>
              <p class="subtitle mt-1">
                Authentischer Frankfurt-/Hessen-Dialekt, Kaffeeküchen-Humor, Schlagfertigkeit, Arbeitsnormen und Mietrecht.
              </p>
            </div>
            <a href="#heute" class="btn btn-secondary btn-sm">← Zum Dashboard</a>
          </div>

          <!-- Tabs -->
          <div class="flex flex-wrap gap-2 mt-4 pt-4 border-t border-subtle" id="cultureTabs">
            <button class="btn btn-xs ${activeTab === 'hessen' ? 'btn-primary' : 'btn-secondary'} cult-tab-btn" data-tab="hessen">
              🏙️ Hessen & Frankfurt Tone (${HESSEN_FRANKFURT_DATA.sections[0].items.length})
            </button>
            <button class="btn btn-xs ${activeTab === 'norms' ? 'btn-primary' : 'btn-secondary'} cult-tab-btn" data-tab="norms">
              💼 Arbeitsnormen & Verhalten
            </button>
            <button class="btn btn-xs ${activeTab === 'what_to_say' ? 'btn-primary' : 'btn-secondary'} cult-tab-btn" data-tab="what_to_say">
              💬 Was sage ich / Was nicht?
            </button>
            <button class="btn btn-xs ${activeTab === 'humor' ? 'btn-primary' : 'btn-secondary'} cult-tab-btn" data-tab="humor">
              😄 Humor & Schlagfertigkeit
            </button>
          </div>
        </div>

        <!-- Tab Content -->
        <div id="cultureContent" class="space-y-6"></div>
      </div>
    `;

    const contentDiv = container.querySelector('#cultureContent');

    if (activeTab === 'hessen') {
      contentDiv.innerHTML = `
        <div class="space-y-6">
          <div class="bento-card p-4 border border-amber-500/30 space-y-1">
            <div class="font-bold text-amber-400 text-sm">💡 Lokale Mentalität in Hessen & Rhein-Main:</div>
            <p class="text-xs text-secondary leading-relaxed">
              ${HESSEN_FRANKFURT_DATA.intro}
            </p>
          </div>

          <!-- Section 1: Hessen Basics -->
          <div class="bento-card p-6 space-y-4 border border-subtle">
            <h2 class="text-base font-bold text-primary flex items-center gap-2">
              <span>🗣️</span> ${HESSEN_FRANKFURT_DATA.sections[0].title}
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${HESSEN_FRANKFURT_DATA.sections[0].items.map(item => `
                <div class="p-4 bg-subtle rounded-xl border border-subtle space-y-2 flex flex-col justify-between">
                  <div class="space-y-1.5">
                    <div class="flex-between items-center">
                      <span class="font-bold text-base text-amber-400">${item.term}</span>
                      <button class="btn btn-ghost btn-xs text-amber-400 btn-speak-hessen" data-text="${item.example}">🔊 Audio</button>
                    </div>
                    <div class="text-xs text-primary font-medium">Bedeutung: <span class="text-secondary">${item.meaning}</span></div>
                    <div class="text-xs text-muted">Hochdeutsch: <em>${item.formalEquivalent}</em></div>
                    
                    <div class="p-2.5 bg-surface rounded-lg border border-subtle text-xs space-y-1 mt-2">
                      <div class="text-primary italic">"${item.example}"</div>
                      <div class="text-emerald-400 font-semibold">↪ Antwort: "${item.response}"</div>
                    </div>
                  </div>

                  <div class="text-[11px] text-muted italic pt-1 border-t border-subtle">
                    💡 ${item.humorTip}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Section 2: Contractions -->
          <div class="bento-card p-6 space-y-4 border border-subtle">
            <h2 class="text-base font-bold text-primary flex items-center gap-2">
              <span>⚡</span> ${HESSEN_FRANKFURT_DATA.sections[1].title}
            </h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${HESSEN_FRANKFURT_DATA.sections[1].items.map(item => `
                <div class="p-3.5 bg-subtle rounded-xl border border-subtle space-y-1.5">
                  <div class="flex-between">
                    <span class="font-bold text-sm text-primary font-mono">${item.pattern}</span>
                    <span class="text-xs text-muted font-mono">${item.formal}</span>
                  </div>
                  <div class="text-xs text-secondary italic">"${item.example}"</div>
                  <div class="text-[11px] text-amber-400">${item.usage}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    } else if (activeTab === 'humor') {
      const humorSection = HESSEN_FRANKFURT_DATA.sections[2];
      contentDiv.innerHTML = `
        <div class="bento-card p-6 space-y-4 border border-subtle">
          <h2 class="text-base font-bold text-primary flex items-center gap-2">
            <span>😄</span> ${humorSection.title}
          </h2>
          <p class="text-xs text-secondary">
            Wie man in der Kaffeeküche und bei Übergaben souverän, schlagfertig und charmant reagiert.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            ${humorSection.items.map(item => `
              <div class="p-4 bg-subtle rounded-xl border border-subtle space-y-2">
                <div class="flex-between">
                  <span class="badge badge-amber text-[10px]">${item.humorType}</span>
                  <span class="text-[11px] text-muted font-semibold">${item.tone}</span>
                </div>
                <div class="text-xs text-secondary font-medium">
                  📍 <strong>Situation:</strong> ${item.situation}
                </div>
                <div class="p-3 bg-surface rounded-xl border border-emerald-500/30 text-xs space-y-1">
                  <div class="text-emerald-400 font-bold">✨ Schlagfertige Antwort:</div>
                  <div class="text-primary italic font-semibold">"${item.wittyReply}"</div>
                </div>
                <button class="btn btn-ghost btn-xs text-amber-400 btn-speak-hessen w-full" data-text="${item.wittyReply}">🔊 Vorlesen</button>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (activeTab === 'norms') {
      contentDiv.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${CULTURE_DATA.workplaceNorms.map(norm => `
            <div class="bento-card p-5 space-y-2 border border-subtle">
              <h3 class="font-bold text-base text-primary">${norm.topic}</h3>
              <p class="text-xs text-secondary leading-relaxed">${norm.explanation}</p>
              <div class="p-2.5 bg-subtle rounded-lg text-xs text-emerald-300 font-medium border border-subtle mt-2">
                💡 <strong>Praxistipp:</strong> ${norm.tip}
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (activeTab === 'what_to_say') {
      contentDiv.innerHTML = `
        <div class="space-y-4">
          ${CULTURE_DATA.whatToSayVsAvoid.map(item => `
            <div class="bento-card p-5 space-y-3 border border-subtle">
              <span class="badge badge-amber text-xs">${item.category}</span>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div class="p-3 bg-red-950/20 border border-red-500/30 rounded-xl space-y-1">
                  <div class="font-bold text-red-400">❌ Vermeiden:</div>
                  <div class="text-secondary">${item.avoid}</div>
                </div>
                <div class="p-3 bg-subtle border border-subtle rounded-xl space-y-1">
                  <div class="font-bold text-primary">✓ Besser:</div>
                  <div class="text-secondary">${item.better}</div>
                </div>
                <div class="p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-xl space-y-1">
                  <div class="font-bold text-emerald-400">⭐ B2 / C1 Souverän:</div>
                  <div class="text-emerald-200 font-bold">${item.professionalB2}</div>
                </div>
              </div>
              <p class="text-[11px] text-muted italic">${item.whyExplanation}</p>
            </div>
          `).join('')}
        </div>
      `;
    }

    // Attach events
    container.querySelectorAll('.cult-tab-btn').forEach(btn => {
      btn.onclick = () => {
        activeTab = btn.getAttribute('data-tab');
        renderView();
      };
    });

    container.querySelectorAll('.btn-speak-hessen').forEach(btn => {
      btn.onclick = () => {
        Speech.speak(btn.getAttribute('data-text'), 0.95);
      };
    });
  }

  renderView();
}
