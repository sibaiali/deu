// Psychology Hub Component — "Psychologie & KJP verstehen"

import { PSYCHOLOGY_DATA } from '../data/psychology_data.js';
import { Speech } from '../speech.js';

export function renderPsychologyHub(container) {
  let activeDomain = 'alle';
  let searchQuery = '';

  function renderView() {
    const q = searchQuery.toLowerCase().trim();
    const filtered = PSYCHOLOGY_DATA.concepts.filter(c => {
      const matchDomain = activeDomain === 'alle' || c.domain.includes(activeDomain);
      const matchQ = !q || c.term.toLowerCase().includes(q) || c.explanationGerman.toLowerCase().includes(q) || (c.relevantVocabulary && c.relevantVocabulary.some(v => v.toLowerCase().includes(q)));
      return matchDomain && matchQ;
    });

    container.innerHTML = `
      <div class="psychology-wrapper animate-fadeIn space-y-6 max-w-6xl mx-auto">
        <!-- Hero Header -->
        <div class="hero-card">
          <div class="flex-between flex-wrap gap-4">
            <div>
              <span class="badge badge-amber mb-2">KLINISCHES- & PÄDAGOGISCHES WISSEN</span>
              <h1 class="page-title">🧠 Psychologie & Kinder-/Jugendpsychiatrie</h1>
              <p class="subtitle mt-1">
                Handlungswissen für Station 2, Bindungstheorie, Co-Regulation bei Kindern, Wutanfälle und deeskalierende Gesprächsführung.
              </p>
            </div>
            <a href="#heute" class="btn btn-secondary btn-sm">← Zum Dashboard</a>
          </div>
          <div class="p-3 bg-surface rounded-xl border border-amber-500/30 text-xs text-secondary mt-3">
            ℹ️ ${PSYCHOLOGY_DATA.overview.disclaimer}
          </div>
        </div>

        <!-- Controls & Filter Tabs -->
        <div class="bento-card p-4 space-y-3">
          <div class="flex-between flex-wrap gap-3">
            <input type="text" id="psySearch" placeholder="Nach Konzepten suchen (z. B. 'Bindung', 'Wutanfall', 'ADHS', 'Erdung')..." class="p-2.5 bg-subtle border border-subtle rounded-lg text-primary text-xs outline-none flex-1 min-w-[260px] focus:border-amber-500" value="${searchQuery}" />
            <div class="flex gap-1.5 flex-wrap" id="psyDomainTabs">
              <button class="btn btn-xs ${activeDomain === 'alle' ? 'btn-primary' : 'btn-secondary'} psy-tab-btn" data-domain="alle">
                Alle (${PSYCHOLOGY_DATA.concepts.length})
              </button>
              <button class="btn btn-xs ${activeDomain === 'KJP' ? 'btn-primary' : 'btn-secondary'} psy-tab-btn" data-domain="KJP">
                👶 Kinder & KJP
              </button>
              <button class="btn btn-xs ${activeDomain === 'Traumapädagogik' ? 'btn-primary' : 'btn-secondary'} psy-tab-btn" data-domain="Traumapädagogik">
                🛡️ Traumapädagogik
              </button>
              <button class="btn btn-xs ${activeDomain === 'Deeskalation' ? 'btn-primary' : 'btn-secondary'} psy-tab-btn" data-domain="Deeskalation">
                ⚡ Deeskalation & Notfall
              </button>
            </div>
          </div>
        </div>

        <!-- Concepts Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${filtered.map(c => `
            <div class="bento-card p-6 space-y-4 border border-subtle justify-between">
              <div class="space-y-3">
                <div class="flex-between flex-wrap gap-2">
                  <span class="badge ${c.domain.includes('KJP') ? 'badge-amber' : 'badge-blue'} text-xs">${c.domain}</span>
                  <span class="text-[11px] font-mono text-muted">${c.source || ''}</span>
                </div>

                <h2 class="text-lg font-bold text-primary">${c.term}</h2>
                <p class="text-xs text-secondary leading-relaxed">${c.explanationGerman}</p>

                ${c.simpleExample ? `
                  <div class="p-2.5 bg-subtle rounded-lg text-xs text-primary border border-subtle">
                    💡 <strong>Alltagsbeispiel:</strong> ${c.simpleExample}
                  </div>
                ` : ''}

                ${c.workplaceContext ? `
                  <div class="p-3 bg-surface rounded-xl border border-blue-500/20 text-xs text-secondary space-y-0.5">
                    <div class="font-bold text-blue-400">🏥 Praxis- & Klinik-Kontext:</div>
                    <div>${c.workplaceContext}</div>
                  </div>
                ` : ''}

                <!-- Dos and Don'ts -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  ${c.whatToDo ? `
                    <div class="p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-xl space-y-1 text-xs">
                      <div class="font-bold text-emerald-400">✓ Was tun (Empfohlen):</div>
                      <ul class="list-disc list-inside text-secondary space-y-0.5">
                        ${c.whatToDo.map(d => `<li>${d}</li>`).join('')}
                      </ul>
                    </div>
                  ` : ''}

                  ${c.whatToAvoid ? `
                    <div class="p-3 bg-red-950/20 border border-red-500/30 rounded-xl space-y-1 text-xs">
                      <div class="font-bold text-red-400">❌ Zu vermeiden:</div>
                      <ul class="list-disc list-inside text-secondary space-y-0.5">
                        ${c.whatToAvoid.map(a => `<li>${a}</li>`).join('')}
                      </ul>
                    </div>
                  ` : ''}
                </div>

                <!-- Relevant Vocabulary Chips -->
                ${c.relevantVocabulary ? `
                  <div class="pt-2">
                    <div class="text-[11px] font-bold text-muted uppercase mb-1">Schlüsselbegriffe:</div>
                    <div class="flex gap-1.5 flex-wrap">
                      ${c.relevantVocabulary.map(v => `<span class="badge badge-gray text-[11px]">${v}</span>`).join('')}
                    </div>
                  </div>
                ` : ''}
              </div>

              <!-- Speaking Practice Drill -->
              ${c.speakingPractice ? `
                <div class="p-3 bg-surface rounded-xl border border-amber-500/30 space-y-2 mt-4">
                  <div class="flex-between items-center">
                    <span class="text-[11px] font-bold text-amber-400 uppercase">🎙️ Sprachmuster auf Station:</span>
                    <button class="btn btn-ghost btn-xs text-amber-400 btn-speak-psy" data-text="${c.speakingPractice}">
                      🔊 Anhören
                    </button>
                  </div>
                  <div class="text-xs font-semibold text-primary italic">
                    "${c.speakingPractice}"
                  </div>
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Event Bindings
    container.querySelectorAll('.psy-tab-btn').forEach(btn => {
      btn.onclick = () => {
        activeDomain = btn.getAttribute('data-domain');
        renderView();
      };
    });

    const searchInput = container.querySelector('#psySearch');
    if (searchInput) {
      searchInput.oninput = () => {
        searchQuery = searchInput.value;
        renderView();
      };
    }

    container.querySelectorAll('.btn-speak-psy').forEach(btn => {
      btn.onclick = () => {
        Speech.speak(btn.getAttribute('data-text'), 0.95);
      };
    });
  }

  renderView();
}
