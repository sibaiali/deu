// Main Application Orchestrator
import { Storage } from './storage.js';
import { Router } from './router.js';
import { Search } from './search.js';
import { Speech } from './speech.js';

// Data Modules
import { BFD_DATA } from './data/bfd_data.js';
import { VOCABULARY_DATA } from './data/vocabulary_data.js';
import { GRAMMAR_DATA } from './data/grammar_data.js';
import { PSYCHOLOGY_DATA } from './data/psychology_data.js';
import { SIMULATIONS_DATA } from './data/simulations_data.js';
import { PHRASES_DATA } from './data/phrases_data.js';
import { READING_DATA } from './data/reading_data.js';
import { SOURCES_CATALOG } from './data/sources_catalog.js';

// View Components
import { renderDashboard } from './components/dashboard.js';
import { renderBFDHub } from './components/bfd_hub.js';
import { renderFlashcards } from './components/flashcards.js';
import { renderSimulations } from './components/simulations.js';
import { renderSpeakingTrainer } from './components/speaking_trainer.js';
import { renderPhraseTrainer } from './components/phrase_trainer.js';
import { renderGrammarHub } from './components/grammar_hub.js';
import { renderPsychologyHub } from './components/psychology_hub.js';
import { renderReadingHub } from './components/reading_hub.js';
import { renderRoadmaps } from './components/guided_roadmaps.js';
import { renderCultureBureaucracy } from './components/culture_bureaucracy.js';
import { renderEngineeringHub } from './components/engineering_hub.js';
import { renderSourcesLibrary } from './components/sources_library.js';
import { renderErrorLog } from './components/error_log.js';
import { renderSettingsStats } from './components/settings_stats.js';
import { renderExternalResources } from './components/external_resources.js';
import { renderSentenceFixer } from './components/sentence_fixer.js';
import { renderAntiTranslation } from './components/anti_translation.js';

const appDataset = {
  bfd: BFD_DATA,
  vocabulary: VOCABULARY_DATA,
  grammar: GRAMMAR_DATA,
  psychology: PSYCHOLOGY_DATA,
  simulations: SIMULATIONS_DATA,
  phrases: PHRASES_DATA,
  reading: READING_DATA,
  sources: SOURCES_CATALOG
};

// Initialize Search Index
Search.setDataset(appDataset);

// Setup Views Container
const mainView = document.getElementById('content-container') || document.getElementById('mainView');

const routes = {
  'heute': (params) => renderDashboard(mainView, appDataset),
  'bfd': (params) => renderBFDHub(mainView, params),
  'wiederholen': (params) => renderFlashcards(mainView, appDataset, params),
  'satzkorrektor': (params) => renderSentenceFixer(mainView),
  'antitruebersetzung': (params) => renderAntiTranslation(mainView),
  'simulation': (params) => renderSimulations(mainView, appDataset, params),
  'sprechen': (params) => renderSpeakingTrainer(mainView, appDataset),
  'phrasen': (params) => renderPhraseTrainer(mainView),
  'grammatik': (params) => renderGrammarHub(mainView, params),
  'psychologie': (params) => renderPsychologyHub(mainView),
  'lesen': (params) => renderReadingHub(mainView, params),
  'roadmaps': (params) => renderRoadmaps(mainView, params),
  'kultur': (params) => renderCultureBureaucracy(mainView, params),
  'engineering': (params) => renderEngineeringHub(mainView),
  'quellen': (params) => renderSourcesLibrary(mainView),
  'fehler': (params) => renderErrorLog(mainView),
  'fortschritt': (params) => renderSettingsStats(mainView),
  'ressourcen': (params) => renderExternalResources(mainView)
};

export const appRouter = new Router(routes, 'heute');

// Active link highlighter
function updateActiveNavigation() {
  const currentHash = (window.location.hash || '#heute').replace('#', '').split('?')[0];
  
  document.querySelectorAll('#sidebarNav .nav-link').forEach(link => {
    const route = link.getAttribute('data-route');
    if (route === currentHash || (currentHash === '' && route === 'heute')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  document.querySelectorAll('#mobile-bottom-nav .mobile-nav-item').forEach(link => {
    const href = (link.getAttribute('href') || '').replace('#', '');
    if (href === currentHash || (currentHash === '' && href === 'heute')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

window.addEventListener('hashchange', updateActiveNavigation);
window.addEventListener('load', updateActiveNavigation);

// Sidebar Collapse / Expand Toggle
const sidebar = document.getElementById('sidebar');
const mainWrapper = document.getElementById('main-wrapper');
const btnToggleSidebar = document.getElementById('btnToggleSidebar');

if (btnToggleSidebar && sidebar && mainWrapper) {
  btnToggleSidebar.onclick = () => {
    if (window.innerWidth <= 768) {
      sidebar.classList.toggle('mobile-open');
    } else {
      sidebar.classList.toggle('collapsed');
      mainWrapper.classList.toggle('sidebar-collapsed');
    }
  };
}

// Theme Switcher (Light / Dark)
const themeToggleBtn = document.getElementById('themeToggleBtn');
const htmlEl = document.documentElement;

if (themeToggleBtn) {
  themeToggleBtn.onclick = () => {
    const currentTheme = htmlEl.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlEl.setAttribute('data-theme', newTheme);
    const settings = Storage.getSettings();
    Storage.saveSettings({ ...settings, theme: newTheme });
  };
}

// Global Search Overlay Logic
function createSearchModal() {
  let modal = document.getElementById('searchModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'searchModal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm hidden';
    modal.innerHTML = `
      <div class="bg-surface border border-subtle w-full max-w-xl rounded-2xl shadow-xl overflow-hidden animate-popIn">
        <div class="p-4 border-b border-subtle flex items-center gap-3">
          <svg class="w-5 h-5 text-muted" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input type="text" id="globalSearchInput" class="w-full bg-transparent text-primary text-base outline-none" placeholder="Vokabel, Grammatik oder Thema suchen...">
          <button id="btnCloseSearchModal" class="btn btn-ghost btn-xs text-muted">ESC</button>
        </div>
        <div id="searchResultsContainer" class="p-4 max-h-96 overflow-y-auto space-y-2">
          <div class="p-6 text-center text-secondary text-sm">Tippe ein Wort oder Thema ein (z. B. "Freundin", "Bedarfsmedikation", "Inversion")...</div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const input = modal.querySelector('#globalSearchInput');
    const container = modal.querySelector('#searchResultsContainer');
    const btnClose = modal.querySelector('#btnCloseSearchModal');

    btnClose.onclick = () => modal.classList.add('hidden');
    modal.onclick = (e) => { if (e.target === modal) modal.classList.add('hidden'); };

    input.addEventListener('input', (e) => {
      const q = e.target.value;
      const res = Search.search(q);
      if (res.length === 0) {
        container.innerHTML = '<div class="p-6 text-center text-secondary text-sm">Keine Treffer gefunden.</div>';
        return;
      }
      container.innerHTML = res.map(r => `
        <div class="p-3 bg-subtle rounded-xl flex-between cursor-pointer hover:border-primary border border-transparent search-res-item" data-route="${r.route}">
          <div>
            <div class="flex items-center gap-2">
              <span class="badge badge-blue text-xs">${r.type}</span>
              <span class="font-bold text-sm text-primary">${r.title}</span>
            </div>
            <div class="text-xs text-secondary mt-0.5">${r.subtitle}</div>
          </div>
          <span class="text-xs text-blue-500 font-semibold">Öffnen →</span>
        </div>
      `).join('');

      container.querySelectorAll('.search-res-item').forEach(item => {
        item.onclick = () => {
          modal.classList.add('hidden');
          window.location.hash = item.getAttribute('data-route');
        };
      });
    });
  }
  return modal;
}

function openGlobalSearch() {
  const modal = createSearchModal();
  modal.classList.remove('hidden');
  const input = modal.querySelector('#globalSearchInput');
  input.value = '';
  input.focus();
}

const globalSearchTrigger = document.getElementById('globalSearchTrigger');
if (globalSearchTrigger) globalSearchTrigger.onclick = openGlobalSearch;

document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    openGlobalSearch();
  }
  if (e.key === 'Escape') {
    const modal = document.getElementById('searchModal');
    if (modal) modal.classList.add('hidden');
  }
});
