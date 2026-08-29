// Phrase Trainer Component — "Was sage ich?" & "Ich verstehe nicht!"

import { PHRASES_DATA } from '../data/phrases_data.js';
import { Speech } from '../speech.js';

export function renderPhraseTrainer(container) {
  let activeCatId = 'alle';
  let searchQuery = '';

  function renderView() {
    const q = searchQuery.toLowerCase().trim();
    const allCategories = PHRASES_DATA.categories;

    const filteredCategories = allCategories.map(cat => {
      if (activeCatId !== 'alle' && cat.id !== activeCatId) return null;
      const matchingPhrases = cat.phrases.filter(p => {
        if (!q) return true;
        return p.situation.toLowerCase().includes(q) ||
               p.basic.toLowerCase().includes(q) ||
               p.natural.toLowerCase().includes(q) ||
               p.professionalB2.toLowerCase().includes(q) ||
               p.c1.toLowerCase().includes(q) ||
               (p.relatedWords && p.relatedWords.some(w => w.toLowerCase().includes(q)));
      });
      if (matchingPhrases.length === 0) return null;
      return { ...cat, phrases: matchingPhrases };
    }).filter(Boolean);

    container.innerHTML = `
      <div class="phrase-trainer animate-fadeIn space-y-6 max-w-6xl mx-auto">
        <!-- Hero Card -->
        <div class="hero-card">
          <div class="flex-between flex-wrap gap-4">
            <div>
              <span class="badge badge-amber mb-2">FORMULIERUNGS-TRANSFORMATOR</span>
              <h1 class="page-title">💬 Was sage ich? (Redemittel für jede Situation)</h1>
              <p class="subtitle mt-1">
                Verwandle einfache B1-Sätze stufenweise in natürliches Deutsch, professionelles B2 und hochpräzises C1.
              </p>
            </div>
            <a href="#heute" class="btn btn-secondary btn-sm">← Zum Dashboard</a>
          </div>
        </div>

        <!-- Search & Category Filters -->
        <div class="bento-card p-4 space-y-3">
          <div class="flex-between flex-wrap gap-3">
            <input type="text" id="phraseSearch" placeholder="Nach Situation oder Phrase suchen (z. B. 'wiederholen', 'trösten', 'Grenze', 'satt')..." class="p-2.5 bg-subtle border border-subtle rounded-lg text-primary text-xs outline-none flex-1 min-w-[260px] focus:border-amber-500" value="${searchQuery}" />
            <div class="flex gap-1.5 flex-wrap" id="phraseCatTabs">
              <button class="btn btn-xs ${activeCatId === 'alle' ? 'btn-primary' : 'btn-secondary'} phr-cat-btn" data-cat="alle">
                Alle Bereiche
              </button>
              ${allCategories.map(cat => `
                <button class="btn btn-xs ${activeCatId === cat.id ? 'btn-primary' : 'btn-secondary'} phr-cat-btn" data-cat="${cat.id}">
                  ${cat.icon || '💬'} ${cat.name}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Category Groups -->
        <div class="space-y-6">
          ${filteredCategories.length === 0 ? `
            <div class="bento-card p-8 text-center text-muted">Keine passenden Phrasen gefunden.</div>
          ` : filteredCategories.map(cat => `
            <div class="bento-card p-6 space-y-4 border border-subtle">
              <div class="flex items-center gap-2 border-b border-subtle pb-3">
                <span class="text-xl">${cat.icon || '💬'}</span>
                <h2 class="text-lg font-bold text-primary">${cat.name}</h2>
                <span class="badge badge-gray text-xs ml-auto">${cat.phrases.length} Situationen</span>
              </div>

              <div class="space-y-4">
                ${cat.phrases.map(p => `
                  <div class="p-4 bg-subtle rounded-xl border border-subtle space-y-3">
                    <div class="flex-between items-center flex-wrap gap-2">
                      <div class="text-xs font-bold text-amber-400">
                        📍 Situation: <span class="text-primary font-medium">${p.situation}</span>
                      </div>
                      ${p.relatedWords ? `
                        <div class="flex gap-1 flex-wrap">
                          ${p.relatedWords.map(w => `<span class="badge badge-gray text-[10px]">${w}</span>`).join('')}
                        </div>
                      ` : ''}
                    </div>

                    <!-- 4 Tier Comparison Grid -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-1">
                      <!-- Basic B1 -->
                      <div class="p-3 bg-surface rounded-lg border border-subtle space-y-1 flex flex-col justify-between">
                        <div>
                          <div class="flex-between">
                            <span class="badge badge-gray text-[10px]">Basic (B1)</span>
                            <button class="btn btn-ghost btn-xs btn-speak-p" data-text="${p.basic}">▶</button>
                          </div>
                          <div class="text-xs text-secondary mt-1">${p.basic}</div>
                        </div>
                        <button class="btn btn-ghost btn-xs text-[10px] text-muted btn-copy-p mt-1" data-text="${p.basic}">📋 Kopieren</button>
                      </div>

                      <!-- Natürlich -->
                      <div class="p-3 bg-surface rounded-lg border border-blue-500/25 space-y-1 flex flex-col justify-between">
                        <div>
                          <div class="flex-between">
                            <span class="badge badge-blue text-[10px]">Natürlich</span>
                            <button class="btn btn-ghost btn-xs text-blue-400 btn-speak-p" data-text="${p.natural}">▶</button>
                          </div>
                          <div class="text-xs text-primary font-medium mt-1">${p.natural}</div>
                        </div>
                        <button class="btn btn-ghost btn-xs text-[10px] text-blue-400 btn-copy-p mt-1" data-text="${p.natural}">📋 Kopieren</button>
                      </div>

                      <!-- Professionell B2 -->
                      <div class="p-3 bg-surface rounded-lg border border-amber-500/35 space-y-1 flex flex-col justify-between">
                        <div>
                          <div class="flex-between">
                            <span class="badge badge-amber text-[10px]">Professionell (B2)</span>
                            <button class="btn btn-ghost btn-xs text-amber-400 btn-speak-p" data-text="${p.professionalB2}">▶</button>
                          </div>
                          <div class="text-xs text-primary font-bold mt-1">${p.professionalB2}</div>
                        </div>
                        <button class="btn btn-ghost btn-xs text-[10px] text-amber-400 btn-copy-p mt-1" data-text="${p.professionalB2}">📋 Kopieren</button>
                      </div>

                      <!-- C1 Nuanciert -->
                      <div class="p-3 bg-surface rounded-lg border border-purple-500/25 space-y-1 flex flex-col justify-between">
                        <div>
                          <div class="flex-between">
                            <span class="badge badge-purple text-[10px]">C1 Nuanciert</span>
                            <button class="btn btn-ghost btn-xs text-purple-400 btn-speak-p" data-text="${p.c1}">▶</button>
                          </div>
                          <div class="text-xs text-purple-300 font-medium mt-1">${p.c1}</div>
                        </div>
                        <button class="btn btn-ghost btn-xs text-[10px] text-purple-400 btn-copy-p mt-1" data-text="${p.c1}">📋 Kopieren</button>
                      </div>
                    </div>

                    ${p.whyExplanation ? `
                      <div class="p-2 bg-surface rounded-lg text-xs text-muted italic border border-subtle">
                        💡 <strong>Warum dieser Unterschied zählt:</strong> ${p.whyExplanation}
                      </div>
                    ` : ''}
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Event Bindings
    container.querySelectorAll('.phr-cat-btn').forEach(btn => {
      btn.onclick = () => {
        activeCatId = btn.getAttribute('data-cat');
        renderView();
      };
    });

    const searchInput = container.querySelector('#phraseSearch');
    if (searchInput) {
      searchInput.oninput = () => {
        searchQuery = searchInput.value;
        renderView();
      };
    }

    container.querySelectorAll('.btn-speak-p').forEach(btn => {
      btn.onclick = () => {
        Speech.speak(btn.getAttribute('data-text'), 0.95);
      };
    });

    container.querySelectorAll('.btn-copy-p').forEach(btn => {
      btn.onclick = () => {
        const text = btn.getAttribute('data-text');
        navigator.clipboard.writeText(text).then(() => {
          const original = btn.textContent;
          btn.textContent = '✓ Kopiert!';
          setTimeout(() => btn.textContent = original, 1500);
        });
      };
    });
  }

  renderView();
}
