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
const mainView = document.getElementById('mainView');

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
  'fortschritt': (params) => renderSettingsStats(mainView)
};

export const appRouter = new Router(routes, 'heute');

// Global Search Overlay Logic
const searchModal = document.getElementById('searchModal');
const globalSearchInput = document.getElementById('globalSearchInput');
const searchResultsList = document.getElementById('searchResultsList');

function openSearch() {
  searchModal.classList.remove('hidden');
  globalSearchInput.value = '';
  searchResultsList.innerHTML = '<div class="p-6 text-center text-secondary text-sm">Tippe ein Wort oder Thema ein (z. B. "Freundin", "Bedarfsmedikation", "Passiv")...</div>';
  globalSearchInput.focus();
}

function closeSearch() {
  searchModal.classList.add('hidden');
}

globalSearchInput.addEventListener('input', (e) => {
  const query = e.target.value;
  const results = Search.search(query);

  if (results.length === 0) {
    searchResultsList.innerHTML = '<div class="p-6 text-center text-secondary text-sm">Keine Treffer gefunden.</div>';
    return;
  }

  searchResultsList.innerHTML = results.map(r => `
    <div class="p-3 bg-surface rounded-xl border border-glass cursor-pointer hover:bg-glass flex-between search-item" data-route="${r.route}">
      <div>
        <div class="flex items-center gap-2">
          <span class="badge badge-indigo text-xs">${r.type}</span>
          <span class="font-bold text-sm">${r.title}</span>
        </div>
        <div class="text-xs text-secondary mt-1">${r.subtitle}</div>
      </div>
      <span class="text-xs text-blue-400 font-semibold">Öffnen →</span>
    </div>
  `).join('');

  searchResultsList.querySelectorAll('.search-item').forEach(item => {
    item.onclick = () => {
      closeSearch();
      window.location.hash = item.getAttribute('data-route');
    };
  });
});

// Keyboard Shortcuts Listener
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    openSearch();
  }
  if (e.key === 'Escape' && !searchModal.classList.contains('hidden')) {
    closeSearch();
  }
});

document.getElementById('btnOpenSearch').onclick = openSearch;
document.getElementById('btnCloseSearch').onclick = closeSearch;
searchModal.onclick = (e) => {
  if (e.target === searchModal) closeSearch();
};

// Sidebar Mobile Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const sidebar = document.getElementById('sidebar');
if (mobileMenuBtn && sidebar) {
  mobileMenuBtn.onclick = () => sidebar.classList.toggle('sidebar-open');
}

// Dark/Light Theme Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.onclick = () => {
  document.body.classList.toggle('theme-light');
  const isLight = document.body.classList.contains('theme-light');
  themeToggle.innerHTML = isLight ? '☀️' : '🌙';
  const s = Storage.getSettings();
  Storage.saveSettings({ ...s, theme: isLight ? 'light' : 'dark' });
};

// Apply initial settings theme
const initialSettings = Storage.getSettings();
if (initialSettings.theme === 'light') {
  document.body.classList.add('theme-light');
  themeToggle.innerHTML = '☀️';
}

// Start Router
appRouter.init();
console.log('German BFD + Psychiatry + B2/C1 Platform loaded successfully!');
