// Kostenlose externe Lernressourcen Component
import { RESOURCES_DATA } from '../data/resources_data.js';

export function renderExternalResources(container) {
  let activeFilter = 'alle';

  function renderView() {
    const filtered = activeFilter === 'alle' 
      ? RESOURCES_DATA 
      : RESOURCES_DATA.filter(r => r.category.toLowerCase().includes(activeFilter.toLowerCase()) || r.tags.includes(activeFilter));

    container.innerHTML = `
      <div class="space-y-6 animate-fadeIn max-w-5xl mx-auto">
        <!-- Header -->
        <div class="hero-card">
          <div class="flex-between flex-wrap gap-4">
            <div>
              <span class="badge badge-blue mb-2">Offizielle & Kostenfreie Ergänzungen</span>
              <h1 class="page-title">Kostenlose Externe Ressourcen</h1>
              <p class="subtitle mt-1">
                Kuratierte Links zu offiziellen Übungsmaterialien des <strong>Goethe-Instituts</strong>, <strong>telc</strong>, der <strong>Deutschen Welle</strong> und dem <strong>Duden</strong>.
              </p>
            </div>
            <span class="status-pill pill-blue">${RESOURCES_DATA.length} Kuratierte Quellen</span>
          </div>

          <!-- Filter Pills -->
          <div class="flex flex-wrap gap-2 mt-6 pt-4 border-t border-subtle">
            <button class="btn btn-xs ${activeFilter === 'alle' ? 'btn-primary' : 'btn-secondary'} filter-btn" data-filter="alle">Alle anzeigen</button>
            <button class="btn btn-xs ${activeFilter === 'goethe' ? 'btn-primary' : 'btn-secondary'} filter-btn" data-filter="goethe">Goethe-Institut</button>
            <button class="btn btn-xs ${activeFilter === 'telc' ? 'btn-primary' : 'btn-secondary'} filter-btn" data-filter="telc">telc Prüfungen</button>
            <button class="btn btn-xs ${activeFilter === 'hoeren' ? 'btn-primary' : 'btn-secondary'} filter-btn" data-filter="hoeren">Hören & Audio</button>
            <button class="btn btn-xs ${activeFilter === 'wohnen' ? 'btn-primary' : 'btn-secondary'} filter-btn" data-filter="wohnen">Deutschland & Alltag</button>
          </div>
        </div>

        <!-- Resources Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${filtered.map(res => `
            <div class="bento-card justify-between space-y-4">
              <div class="space-y-2">
                <div class="flex-between">
                  <span class="badge badge-blue text-xs">${res.category}</span>
                  <span class="badge badge-emerald text-xs">${res.level}</span>
                </div>
                <h3 class="font-bold text-base text-primary">${res.title}</h3>
                <p class="text-xs text-secondary leading-relaxed">${res.description}</p>
                <div class="text-xs font-semibold text-muted">Anbieter: ${res.provider}</div>
              </div>

              <div class="pt-3 border-t border-subtle flex-between">
                <span class="badge badge-gray text-xs">✓ Kostenlos & Legal</span>
                <a href="${res.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-xs flex items-center gap-1">
                  <span>Öffnen</span>
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    container.querySelectorAll('.filter-btn').forEach(btn => {
      btn.onclick = () => {
        activeFilter = btn.getAttribute('data-filter');
        renderView();
      };
    });
  }

  renderView();
}
