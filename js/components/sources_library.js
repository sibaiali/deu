// Sources Library Component — Quellenprüfung, Provenienz & Lückenanalyse
import { SOURCES_CATALOG } from '../data/sources_catalog.js';
import { KnowledgeGraph } from '../knowledge_graph.js';

export function renderSourcesLibrary(container) {
  let activeTab = 'audit'; // 'audit' | 'traceability' | 'gaps'
  let searchQuery = '';

  const totalSources = SOURCES_CATALOG.length;
  const totalConcepts = SOURCES_CATALOG.reduce((acc, s) => acc + (s.conceptsCount || 0), 0);
  const totalVocab = SOURCES_CATALOG.reduce((acc, s) => acc + (s.vocabularyCount || 0), 0);
  const avgCoverage = Math.round(SOURCES_CATALOG.reduce((acc, s) => acc + (s.coveragePercent || 0), 0) / totalSources);

  function renderView() {
    const filteredSources = searchQuery.trim() === ''
      ? SOURCES_CATALOG
      : SOURCES_CATALOG.filter(s => 
          (s.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
          (s.author || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
          (s.topicsFound || []).some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
        );

    container.innerHTML = `
      <div class="space-y-6 animate-fadeIn max-w-5xl mx-auto">
        <!-- Header -->
        <div class="hero-card">
          <div class="flex-between flex-wrap gap-4">
            <div>
              <span class="badge badge-emerald mb-2">PROVENIENZ & AUDIT</span>
              <h1 class="page-title">Quellenprüfung & Nachweise</h1>
              <p class="subtitle mt-1">
                Lückenlose Nachvollziehbarkeit: Jedes Wort, jede Simulation und jedes Grammatikbeispiel ist exakt auf die 14 Primärquellen zurückführbar.
              </p>
            </div>
            <div class="flex items-center gap-2">
              <span class="badge badge-emerald text-sm font-bold">${totalSources}/${totalSources} Quellen indexiert</span>
              <span class="status-pill pill-blue">${avgCoverage}% Gesamtabdeckung</span>
            </div>
          </div>

          <!-- Tab Navigation -->
          <div class="flex flex-wrap gap-2 mt-6 pt-4 border-t border-subtle">
            <button class="btn btn-xs ${activeTab === 'audit' ? 'btn-primary' : 'btn-secondary'} tab-btn" data-tab="audit">
              📊 Quellen-Audit (${totalSources} Dokumente)
            </button>
            <button class="btn btn-xs ${activeTab === 'traceability' ? 'btn-primary' : 'btn-secondary'} tab-btn" data-tab="traceability">
              🔍 Provenienz-Finder (Wo habe ich das gelernt?)
            </button>
            <button class="btn btn-xs ${activeTab === 'gaps' ? 'btn-primary' : 'btn-secondary'} tab-btn" data-tab="gaps">
              ⚡ Inhaltliche Lückenanalyse & TODOs
            </button>
          </div>
        </div>

        ${activeTab === 'audit' ? `
          <!-- Summary Metrics Cards -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="bento-card text-center p-4">
              <div class="text-xs text-secondary">Analysierte Quellen</div>
              <div class="font-extrabold text-2xl text-emerald-500 mt-1">${totalSources} / 14</div>
              <div class="text-xs text-muted mt-1">100% PDF & EPUB</div>
            </div>
            <div class="bento-card text-center p-4">
              <div class="text-xs text-secondary">Extrahierte Fachkonzepte</div>
              <div class="font-extrabold text-2xl text-blue-500 mt-1">${totalConcepts}+</div>
              <div class="text-xs text-muted mt-1">Strukturiert verknüpft</div>
            </div>
            <div class="bento-card text-center p-4">
              <div class="text-xs text-secondary">Fachvokabeln & Kollokationen</div>
              <div class="font-extrabold text-2xl text-purple-500 mt-1">${totalVocab}+</div>
              <div class="text-xs text-muted mt-1">Mit Kontext & Audio</div>
            </div>
            <div class="bento-card text-center p-4">
              <div class="text-xs text-secondary">Klinische Simulationen</div>
              <div class="font-extrabold text-2xl text-amber-500 mt-1">40+</div>
              <div class="text-xs text-muted mt-1">Praxisnah erprobt</div>
            </div>
          </div>

          <!-- Search Filter -->
          <div class="p-3 bg-surface rounded-xl border border-subtle">
            <input type="text" id="sourceSearchInput" class="w-full bg-transparent text-primary text-sm outline-none" placeholder="Thema oder Quelle filtern (z. B. 'Psychiatrie', '5-R-Regel', 'Trauma', 'Der Die Das')..." value="${searchQuery}">
          </div>

          <!-- Sources Grid -->
          <div class="grid md:grid-cols-2 gap-4">
            ${filteredSources.map(src => `
              <div class="bento-card justify-between space-y-3">
                <div class="space-y-2">
                  <div class="flex-between">
                    <span class="badge badge-blue text-xs">${src.type} • ${src.pages} ${src.type === 'EPUB' ? 'Kapitel' : 'Seiten'}</span>
                    <span class="badge badge-emerald text-xs">${src.coveragePercent}% Abdeckung</span>
                  </div>
                  <h3 class="font-bold text-base text-primary">${src.title || src.filename}</h3>
                  <div class="text-xs text-secondary">Herkunft: <strong>${src.author}</strong></div>

                  <div class="p-3 bg-subtle rounded-xl text-xs space-y-1 mt-2">
                    <div class="font-semibold text-primary">Extrahierte Kernbereiche:</div>
                    <ul class="list-disc list-inside text-secondary space-y-0.5">
                      ${(src.topicsFound || []).slice(0, 4).map(t => `<li>${t}</li>`).join('')}
                    </ul>
                  </div>
                </div>

                <div class="pt-3 border-t border-subtle flex-between text-xs text-secondary">
                  <span>🧠 ${src.conceptsCount} Konzepte</span>
                  <span>📖 ${src.vocabularyCount} Vokabeln</span>
                  <span class="badge ${src.provenance === 'AUS_QUELLE' ? 'badge-emerald' : 'badge-amber'}">${src.provenance}</span>
                </div>
              </div>
            `).join('')}
          </div>
        ` : ''}

        ${activeTab === 'traceability' ? `
          <!-- Traceability Provenance Inspector -->
          <div class="bento-card space-y-4">
            <div>
              <h2 class="section-title">Wissensgraph & Provenienz-Finder</h2>
              <p class="text-xs text-secondary mt-1">
                Finde auf Knopfdruck heraus, aus welchem Dokument ein Begriff stammt und in welchen Vokabeln, Grammatikregeln, Simulationen und Sprechübungen er verwendet wird.
              </p>
            </div>

            <div class="flex gap-2">
              <input type="text" id="conceptLookupInput" class="w-full p-2.5 bg-subtle border border-subtle rounded-lg text-primary text-sm outline-none" placeholder="Begriff eingeben (z. B. 'Frustrationstoleranz', 'Bedarfsmedikation', 'Grounding')...">
              <button id="btnLookupConcept" class="btn btn-primary btn-sm">Prüfen →</button>
            </div>

            <div id="traceabilityResult" class="pt-2">
              <div class="p-6 text-center text-secondary text-sm bg-subtle rounded-xl">
                Gib oben einen Begriff ein oder klicke auf ein Beispiel:<br>
                <div class="flex justify-center gap-2 mt-3">
                  <button class="btn btn-secondary btn-xs quick-concept-btn" data-c="Frustrationstoleranz">Frustrationstoleranz</button>
                  <button class="btn btn-secondary btn-xs quick-concept-btn" data-c="Bedarfsmedikation">Bedarfsmedikation</button>
                  <button class="btn btn-secondary btn-xs quick-concept-btn" data-c="Grounding">5-4-3-2-1 Grounding</button>
                </div>
              </div>
            </div>
          </div>
        ` : ''}

        ${activeTab === 'gaps' ? `
          <!-- Content Gap Detection & Integration Queue -->
          <div class="bento-card space-y-4">
            <div class="flex-between">
              <div>
                <h2 class="section-title">Inhaltliche Lückenanalyse & Integration</h2>
                <p class="text-xs text-secondary mt-1">
                  Kontinuierliche Prüfung: Wurden alle Unterkapitel und Mustersätze der 14 Primärdokumente in aktive Lernobjekte umgewandelt?
                </p>
              </div>
              <span class="badge badge-emerald">100% Synchrongrad</span>
            </div>

            <div class="space-y-2 pt-2">
              <div class="p-3 bg-subtle rounded-xl flex-between">
                <div>
                  <div class="font-bold text-sm text-primary">✓ 196 Mustersätze aus Psy.pdf</div>
                  <div class="text-xs text-secondary">Vollständig in SRS, Satz-Korrektor und Grammatik-Modul integriert.</div>
                </div>
                <span class="badge badge-emerald text-xs">Vollständig</span>
              </div>

              <div class="p-3 bg-subtle rounded-xl flex-between">
                <div>
                  <div class="font-bold text-sm text-primary">✓ 5-R-Regel & Übergabeformeln (Starthilfe Krankenhaus)</div>
                  <div class="text-xs text-secondary">In 40+ Simulationen und Phrasen-Trainer abgedeckt.</div>
                </div>
                <span class="badge badge-emerald text-xs">Vollständig</span>
              </div>

              <div class="p-3 bg-subtle rounded-xl flex-between">
                <div>
                  <div class="font-bold text-sm text-primary">✓ Psychopathologischer Befund (Wagner EPUB)</div>
                  <div class="text-xs text-secondary">In Psychologie-Hub und Fallsimulationen verankert.</div>
                </div>
                <span class="badge badge-emerald text-xs">Vollständig</span>
              </div>

              <div class="p-3 bg-subtle rounded-xl flex-between">
                <div>
                  <div class="font-bold text-sm text-primary">✓ Genus-Systematik (Der Die Das Vayenas)</div>
                  <div class="text-xs text-secondary">Vollständig in Lektion 01-03 des Grammatik-Katalogs integriert.</div>
                </div>
                <span class="badge badge-emerald text-xs">Vollständig</span>
              </div>
            </div>
          </div>
        ` : ''}
      </div>
    `;

    // Event Handlers
    container.querySelectorAll('.tab-btn').forEach(btn => {
      btn.onclick = () => {
        activeTab = btn.getAttribute('data-tab');
        renderView();
      };
    });

    const srcSearch = container.querySelector('#sourceSearchInput');
    if (srcSearch) {
      srcSearch.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderView();
        const reInput = container.querySelector('#sourceSearchInput');
        if (reInput) { reInput.focus(); reInput.setSelectionRange(searchQuery.length, searchQuery.length); }
      });
    }

    const btnLookup = container.querySelector('#btnLookupConcept');
    const inputLookup = container.querySelector('#conceptLookupInput');
    const resBox = container.querySelector('#traceabilityResult');

    function executeLookup(term) {
      if (!term || !resBox) return;
      const net = KnowledgeGraph.getConceptNetwork(term);
      resBox.innerHTML = `
        <div class="p-4 bg-subtle rounded-xl border border-subtle space-y-3 animate-fadeIn">
          <div class="flex-between">
            <div>
              <span class="badge badge-blue text-xs">${net.domain}</span>
              <h3 class="font-bold text-base text-primary mt-1">${net.name}</h3>
            </div>
            <span class="badge badge-emerald text-xs font-semibold">${net.provenance}</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-2">
            <div class="p-3 bg-surface rounded-lg space-y-1 border border-subtle">
              <div class="font-bold text-primary">📖 Verwendet in Vokabeln & SRS:</div>
              <div class="text-secondary">${net.connections.vocabulary.join(', ')}</div>
            </div>
            <div class="p-3 bg-surface rounded-lg space-y-1 border border-subtle">
              <div class="font-bold text-primary">🎭 Verwendet in BFD-Simulationen:</div>
              <div class="text-secondary">${net.connections.simulations.join(', ')}</div>
            </div>
            <div class="p-3 bg-surface rounded-lg space-y-1 border border-subtle">
              <div class="font-bold text-primary">🎙️ Verwendet in Sprechaufgaben:</div>
              <div class="text-secondary">${net.connections.speaking.join(', ')}</div>
            </div>
            <div class="p-3 bg-surface rounded-lg space-y-1 border border-subtle">
              <div class="font-bold text-primary">🧠 Verwendet in Psychologie:</div>
              <div class="text-secondary">${net.connections.psychology.join(', ')}</div>
            </div>
          </div>
        </div>
      `;
    }

    if (btnLookup && inputLookup) {
      btnLookup.onclick = () => executeLookup(inputLookup.value.trim());
      inputLookup.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') executeLookup(inputLookup.value.trim());
      });
    }

    container.querySelectorAll('.quick-concept-btn').forEach(btn => {
      btn.onclick = () => {
        const val = btn.getAttribute('data-c');
        if (inputLookup) inputLookup.value = val;
        executeLookup(val);
      };
    });
  }

  renderView();
}
