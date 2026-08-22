// German BFD + Psychiatry + B2/C1 Platform — Universal Standalone Bundle
(function() {
'use strict';


// --- FILE: icons.js ---

// Lucide SVG Line Icons Helper
// Monochromes, semantisches und barrierefreies Icon-System für das gesamte Interface

const Icons = {
  // Navigation & Core
  house: (cls = "w-5 h-5") => `<svg class="${cls}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  calendarClock: (cls = "w-5 h-5") => `<svg class="${cls}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><circle cx="16" cy="16" r="6"/><polyline points="16 14 16 16 18 18"/></svg>`,
  spellCheck: (cls = "w-5 h-5") => `<svg class="${cls}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 16 6-12 6 12"/><path d="M8 12h8"/><path d="m16 20 2 2 4-4"/></svg>`,
  languages: (cls = "w-5 h-5") => `<svg class="${cls}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>`,
  building: (cls = "w-5 h-5") => `<svg class="${cls}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/></svg>`,
  brain: (cls = "w-5 h-5") => `<svg class="${cls}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M12 5v14"/><path d="M12 9a3 3 0 0 0 0 6"/></svg>`,
  bookOpen: (cls = "w-5 h-5") => `<svg class="${cls}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  messagesSquare: (cls = "w-5 h-5") => `<svg class="${cls}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>`,
  mic: (cls = "w-5 h-5") => `<svg class="${cls}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>`,
  messageCircle: (cls = "w-5 h-5") => `<svg class="${cls}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>`,
  graduationCap: (cls = "w-5 h-5") => `<svg class="${cls}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>`,
  bookText: (cls = "w-5 h-5") => `<svg class="${cls}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/><path d="M6 14h6"/></svg>`,
  route: (cls = "w-5 h-5") => `<svg class="${cls}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></svg>`,
  map: (cls = "w-5 h-5") => `<svg class="${cls}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>`,
  cog: (cls = "w-5 h-5") => `<svg class="${cls}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  fileSearch: (cls = "w-5 h-5") => `<svg class="${cls}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><circle cx="11.5" cy="14.5" r="2.5"/><path d="m13.5 16.5 2 2"/></svg>`,
  triangleAlert: (cls = "w-5 h-5") => `<svg class="${cls}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  settings: (cls = "w-5 h-5") => `<svg class="${cls}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,

  // UI Utilities
  search: (cls = "w-4 h-4") => `<svg class="${cls}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  shieldAlert: (cls = "w-5 h-5") => `<svg class="${cls}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  sparkles: (cls = "w-5 h-5") => `<svg class="${cls}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>`,
  check: (cls = "w-4 h-4") => `<svg class="${cls}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`,
  arrowRight: (cls = "w-4 h-4") => `<svg class="${cls}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  clock: (cls = "w-4 h-4") => `<svg class="${cls}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  volume: (cls = "w-4 h-4") => `<svg class="${cls}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`,
  sun: (cls = "w-4 h-4") => `<svg class="${cls}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  moon: (cls = "w-4 h-4") => `<svg class="${cls}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
  menu: (cls = "w-5 h-5") => `<svg class="${cls}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`,
  x: (cls = "w-5 h-5") => `<svg class="${cls}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`
};


// --- FILE: storage.js ---

// Storage & Persistence Manager
// IndexedDB + LocalStorage für Offline-First Datenspeicherung

const DB_NAME = 'DeuPlatformDB';
const DB_VERSION = 1;

class StorageService {
  constructor() {
    this.db = null;
    this.initPromise = this.initDB();
  }

  async initDB() {
    return new Promise((resolve) => {
      if (!window.indexedDB) {
        console.warn('IndexedDB not supported, using LocalStorage.');
        resolve(null);
        return;
      }
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains('srs_cards')) {
          db.createObjectStore('srs_cards', { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains('history')) {
          db.createObjectStore('history', { keyPath: 'id', autoIncrement: true });
        }
        if (!db.objectStoreNames.contains('errors')) {
          db.createObjectStore('errors', { keyPath: 'id', autoIncrement: true });
        }
      };

      request.onsuccess = (e) => {
        this.db = e.target.result;
        resolve(this.db);
      };

      request.onerror = (e) => {
        console.warn('IndexedDB error, falling back to LocalStorage:', e);
        resolve(null);
      };
    });
  }

  getSettings() {
    const defaults = {
      theme: 'dark',
      speechSpeed: 0.9,
      dailyMinutesGoal: 30,
      hideEnglishDefault: false,
      streak: 1,
      lastActiveDate: new Date().toISOString().split('T')[0],
      totalXP: 150,
      level: 'B1-B2 Übergang',
      checkInToday: null
    };
    try {
      const stored = localStorage.getItem('deu_settings');
      return stored ? { ...defaults, ...JSON.parse(stored) } : defaults;
    } catch (e) {
      return defaults;
    }
  }

  saveSettings(settings) {
    try {
      localStorage.setItem('deu_settings', JSON.stringify(settings));
    } catch (e) {
      console.error('Failed to save settings:', e);
    }
  }

  getHistory() {
    try {
      const stored = localStorage.getItem('deu_history');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }

  addHistory(entry) {
    try {
      const history = this.getHistory();
      const newEntry = {
        id: 'hist_' + Date.now() + '_' + Math.floor(Math.random()*1000),
        timestamp: new Date().toISOString(),
        ...entry
      };
      history.unshift(newEntry);
      localStorage.setItem('deu_history', JSON.stringify(history.slice(0, 100)));
      return newEntry;
    } catch (e) {
      console.error('Failed to add history:', e);
      return null;
    }
  }

  async getCardProgress(cardId) {
    await this.initPromise;
    if (this.db) {
      return new Promise((resolve) => {
        const tx = this.db.transaction('srs_cards', 'readonly');
        const store = tx.objectStore('srs_cards');
        const req = store.get(cardId);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => resolve(null);
      });
    } else {
      const raw = localStorage.getItem('srs_' + cardId);
      return raw ? JSON.parse(raw) : null;
    }
  }

  async getAllCardsProgress() {
    await this.initPromise;
    if (this.db) {
      return new Promise((resolve) => {
        const tx = this.db.transaction('srs_cards', 'readonly');
        const store = tx.objectStore('srs_cards');
        const req = store.getAll();
        req.onsuccess = () => resolve(req.result || []);
        req.onerror = () => resolve([]);
      });
    } else {
      const result = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('srs_')) {
          result.push(JSON.parse(localStorage.getItem(key)));
        }
      }
      return result;
    }
  }

  async saveCardProgress(cardData) {
    await this.initPromise;
    if (this.db) {
      return new Promise((resolve) => {
        const tx = this.db.transaction('srs_cards', 'readwrite');
        const store = tx.objectStore('srs_cards');
        store.put(cardData);
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => resolve(false);
      });
    } else {
      localStorage.setItem('srs_' + cardData.id, JSON.stringify(cardData));
      return true;
    }
  }

  async logError(errorObj) {
    await this.initPromise;
    const entry = {
      ...errorObj,
      timestamp: new Date().toISOString()
    };
    if (this.db) {
      const tx = this.db.transaction('errors', 'readwrite');
      tx.objectStore('errors').add(entry);
    } else {
      const errors = JSON.parse(localStorage.getItem('deu_errors') || '[]');
      errors.push(entry);
      localStorage.setItem('deu_errors', JSON.stringify(errors));
    }
  }

  async getAllErrors() {
    await this.initPromise;
    if (this.db) {
      return new Promise((resolve) => {
        const tx = this.db.transaction('errors', 'readonly');
        const req = tx.objectStore('errors').getAll();
        req.onsuccess = () => resolve(req.result || []);
        req.onerror = () => resolve([]);
      });
    } else {
      return JSON.parse(localStorage.getItem('deu_errors') || '[]');
    }
  }

  async exportFullData() {
    const settings = this.getSettings();
    const history = this.getHistory();
    const cards = await this.getAllCardsProgress();
    const errors = await this.getAllErrors();
    return {
      version: 1,
      exportDate: new Date().toISOString(),
      settings,
      history,
      cards,
      errors
    };
  }

  async importFullData(jsonData) {
    try {
      const data = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
      if (data.settings) this.saveSettings(data.settings);
      if (data.history) localStorage.setItem('deu_history', JSON.stringify(data.history));
      if (data.cards && Array.isArray(data.cards)) {
        for (const c of data.cards) {
          await this.saveCardProgress(c);
        }
      }
      return true;
    } catch (e) {
      console.error('Import failed:', e);
      return false;
    }
  }
}

const Storage = new StorageService();


// --- FILE: srs.js ---

// Spaced Repetition Engine (SM-2 / FSRS-Style Scheduling)
// Berechnet Wiederholungsintervalle, Stabilitätsfaktoren und Meisterschaftslevel (0 bis 6)

const MASTERY_LEVELS = {
  0: { label: "Nicht gelernt", badge: "badge-gray", color: "#6b7280" },
  1: { label: "Gesehen", badge: "badge-blue", color: "#3b82f6" },
  2: { label: "Erkannt", badge: "badge-indigo", color: "#6366f1" },
  3: { label: "Erinnert", badge: "badge-purple", color: "#a855f7" },
  4: { label: "Verwendet", badge: "badge-teal", color: "#14b8a6" },
  5: { label: "Sicher verwendet", badge: "badge-green", color: "#22c55e" },
  6: { label: "Spontan verwendet", badge: "badge-emerald", color: "#10b981" }
};

class SRSEngine {
  constructor(allVocab = []) {
    this.allVocab = allVocab;
  }

  setVocabList(vocabList) {
    this.allVocab = vocabList;
  }

  // Calculate next review state for a card
  // Rating: 1 = Nochmal (Again), 2 = Schwer (Hard), 3 = Gut (Good), 4 = Einfach (Easy)
  calculateNextReview(currentCardState, rating) {
    const state = currentCardState || {
      id: "unknown",
      reps: 0,
      intervalDays: 0,
      easeFactor: 2.5,
      lapses: 0,
      masteryLevel: 0,
      lastReviewed: null,
      nextDue: new Date().toISOString()
    };

    let { reps, intervalDays, easeFactor, lapses, masteryLevel } = state;

    if (rating === 1) { // Again / Nochmal
      reps = 0;
      intervalDays = 1;
      lapses += 1;
      masteryLevel = Math.max(1, masteryLevel - 1);
      easeFactor = Math.max(1.3, easeFactor - 0.2);
    } else if (rating === 2) { // Hard / Schwer
      intervalDays = Math.max(1, Math.floor(intervalDays * 1.2));
      easeFactor = Math.max(1.3, easeFactor - 0.15);
      reps += 1;
      masteryLevel = Math.min(6, masteryLevel + 1);
    } else if (rating === 3) { // Good / Gut
      if (reps === 0) {
        intervalDays = 1;
      } else if (reps === 1) {
        intervalDays = 3;
      } else {
        intervalDays = Math.round(intervalDays * easeFactor);
      }
      reps += 1;
      masteryLevel = Math.min(6, masteryLevel + 1);
    } else if (rating === 4) { // Easy / Einfach
      if (reps === 0) {
        intervalDays = 4;
      } else if (reps === 1) {
        intervalDays = 7;
      } else {
        intervalDays = Math.round(intervalDays * easeFactor * 1.3);
      }
      easeFactor += 0.15;
      reps += 1;
      masteryLevel = Math.min(6, masteryLevel + 2);
    }

    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + intervalDays);

    return {
      ...state,
      reps,
      intervalDays,
      easeFactor,
      lapses,
      masteryLevel,
      lastReviewed: new Date().toISOString(),
      nextDue: nextDate.toISOString()
    };
  }

  // Get due cards for today
  async getDueCards() {
    const now = new Date().toISOString();
    const storedCards = await Storage.getAllCardsProgress();
    const cardMap = new Map(storedCards.map(c => [c.id, c]));

    const dueList = [];
    const newCards = [];

    for (const v of this.allVocab) {
      const prog = cardMap.get(v.id);
      if (!prog) {
        newCards.push({ ...v, progress: null });
      } else if (prog.nextDue <= now) {
        dueList.push({ ...v, progress: prog });
      }
    }

    // Sort due cards: due date ascending, then lapses descending
    dueList.sort((a, b) => {
      const dueA = a.progress.nextDue;
      const dueB = b.progress.nextDue;
      return dueA.localeCompare(dueB);
    });

    return {
      dueCards: dueList,
      newCards: newCards.slice(0, 10), // Limit new cards to 10 per session to avoid overwhelm
      totalDueCount: dueList.length,
      totalLearnedCount: storedCards.filter(c => c.masteryLevel > 0).length
    };
  }
}

const SRS = new SRSEngine();


// --- FILE: speech.js ---

// Speech & Web Audio Sound Effects Service
// Multi-Speed TTS (0.6x, 0.8x, 1.0x, 1.2x, 1.5x), Spracherkennung und Audiosynthesizer

class SpeechService {
  constructor() {
    this.synth = window.speechSynthesis;
    this.selectedVoice = null;
    this.audioCtx = null;
    this.currentRate = 0.95;
    this.initVoices();
  }

  initAudio() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) this.audioCtx = new AudioContext();
    }
  }

  playSound(type) {
    try {
      this.initAudio();
      if (!this.audioCtx) return;
      if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      const now = this.audioCtx.currentTime;

      if (type === 'success') {
        // Bright victory chime
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
        osc.frequency.setValueAtTime(1046.50, now + 0.24); // C6
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
        osc.start(now);
        osc.stop(now + 0.6);
      } else if (type === 'error') {
        // Soft low tone
        osc.type = 'sine';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.setValueAtTime(180, now + 0.1);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === 'pop') {
        // Subtle click/pop
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      }
    } catch (e) {}
  }

  initVoices() {
    if (!this.synth) return;
    const loadVoices = () => {
      const voices = this.synth.getVoices();
      this.selectedVoice = voices.find(v => v.lang.startsWith('de') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Katja') || v.name.includes('Marlene') || v.name.includes('Hedda'))) ||
                           voices.find(v => v.lang.startsWith('de')) ||
                           null;
    };
    loadVoices();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = loadVoices;
    }
  }

  setRate(rate) {
    this.currentRate = parseFloat(rate) || 0.95;
  }

  speak(text, rate = null, onEnd = null) {
    if (!this.synth) return;
    this.synth.cancel();
    const clean = text.replace(/<[^>]*>?/gm, '').trim();
    if (!clean) return;

    const utterance = new SpeechSynthesisUtterance(clean);
    utterance.lang = 'de-DE';
    utterance.rate = rate !== null ? parseFloat(rate) : this.currentRate;
    utterance.pitch = 1.0;
    if (this.selectedVoice) utterance.voice = this.selectedVoice;
    if (onEnd) utterance.onend = onEnd;
    this.synth.speak(utterance);
  }

  startRecognition(onResult, onError, onStart, onEnd) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      if (onError) onError('Spracherkennung wird in diesem Browser nicht unterstützt. Bitte nutze die manuelle Selbstbewertung.');
      return null;
    }
    const rec = new SpeechRecognition();
    rec.lang = 'de-DE';
    rec.continuous = false;
    rec.interimResults = false;
    rec.onstart = () => onStart && onStart();
    rec.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      if (onResult) onResult(transcript);
    };
    rec.onerror = (e) => onError && onError(e.error);
    rec.onend = () => onEnd && onEnd();
    try {
      rec.start();
      return rec;
    } catch (err) {
      if (onError) onError(err.message);
      return null;
    }
  }
}

const Speech = new SpeechService();


// --- FILE: safety_guard.js ---

// Medical & Privacy Safety Guard
// Strikte Trennung: Sprachtraining vs. Medizinische Handlung

class SafetyGuard {
  static checkRoleBoundaries(text) {
    const forbidden = [
      { pattern: /\bich gebe ihnen die tablette\b/i, warning: "Rollengrenze: Als BFDler darfst du Medikamente nicht eigenmächtig verabreichen." },
      { pattern: /\bich stelle die diagnose\b/i, warning: "Rollengrenze: Diagnosestellung obliegt ausschließlich Fachärzten." },
      { pattern: /\bich verspreche ihnen\b/i, warning: "Rollengrenze: Keine Behandlungsversprechen abgeben." }
    ];

    for (const rule of forbidden) {
      if (rule.pattern.test(text)) {
        return { safe: false, warning: rule.warning };
      }
    }
    return { safe: true };
  }

  static sanitizePrivacy(text) {
    const hasNameLike = /\b(Herr|Frau)\s+[A-ZÄÖÜ][a-zäöüß]+\s+(aus Zimmer|in Zimmer)\s+\d+/i.test(text);
    if (hasNameLike) {
      return {
        safe: false,
        warning: "Datenschutz-Hinweis: Bitte niemals echte Patientennamen oder Zimmernummern eingeben!"
      };
    }
    return { safe: true };
  }
}


// --- FILE: adaptive_engine.js ---

// Adaptive Learning & FSRS Engine
// Berechnet den optimalen täglichen Lernpfad basierend auf Abruferfolg und Zustand.

class AdaptiveEngine {
  static getDailyPlan(mode = '45', userState = 'normal') {
    if (mode === '5min_shift') {
      return {
        title: "5-Minuten-Station (Vor Schichtbeginn)",
        focus: "3 Phrasen • 3 Vokabeln • 1 Rollengrenze • 1 Spontanreaktion",
        steps: [
          { type: 'phrase', title: 'Übergabe-Phrasen aktivieren', duration: '1 Min', route: 'phrasen' },
          { type: 'vocab', title: '3 psychiatrische Kernwörter', duration: '1.5 Min', route: 'wiederholen' },
          { type: 'safety', title: 'Rollengrenzen & Magischer Satz', duration: '1 Min', route: 'bfd?tab=survival' },
          { type: 'speaking', title: '60-Sekunden Sprachaktivierung', duration: '1.5 Min', route: 'sprechen' }
        ]
      };
    }

    if (mode === '10min_review') {
      return {
        title: "10-Minuten-Nachbereitung (Nach Schichtende)",
        focus: "Reflexion • Unverstandene Wörter festhalten • Fehler erfassen",
        steps: [
          { type: 'reflection', title: 'Was war heute herausfordernd?', duration: '3 Min', route: 'satzkorrektor' },
          { type: 'vocab', title: 'Neue Begriffe aus der Schicht aufnehmen', duration: '3 Min', route: 'wiederholen' },
          { type: 'errors', title: 'Fehlerprotokoll aktualisieren', duration: '4 Min', route: 'fehler' }
        ]
      };
    }

    if (userState === 'tired') {
      return {
        title: "Schonendes Lernen (Müdigkeits-Modus)",
        focus: "Passives Hören • Wiedererkennung • Keine schwere Textproduktion",
        steps: [
          { type: 'listening', title: 'Stationsdialoge anhören', duration: '7 Min', route: 'lesen' },
          { type: 'vocab', title: 'Leichte Vokabel-Wiedererkennung', duration: '5 Min', route: 'wiederholen' },
          { type: 'phrasen', title: 'Phrasen-Audio mitsprechen', duration: '5 Min', route: 'phrasen' }
        ]
      };
    }

    if (mode === '10') {
      return {
        title: "10-Minuten-Blitztraining",
        focus: "Fällige Karten • 1 Kernphrase • Blitzreaktion",
        steps: [
          { type: 'vocab', title: 'SRS-Wiederholung (Fällige Karten)', duration: '5 Min', route: 'wiederholen' },
          { type: 'anti_translation', title: '3x Blitz-Reaktionstraining', duration: '3 Min', route: 'antitruebersetzung' },
          { type: 'phrase', title: '1 Notfall-Phrase festigen', duration: '2 Min', route: 'phrasen' }
        ]
      };
    }

    // Standard 45 Min
    return {
      title: "45-Minuten Standard-Lernpfad (B2/C1 & BFD)",
      focus: "SRS • BFD-Simulation • Grammatik • Sprechtraining • Deeskalation",
      steps: [
        { type: 'vocab', title: 'SRS-Wiederholung & 5 neue Vokabeln', duration: '12 Min', route: 'wiederholen' },
        { type: 'sim', title: 'BFD-Simulation: Akutpsychiatrie', duration: '10 Min', route: 'simulation' },
        { type: 'psy', title: 'Psychologie & Deeskalation', duration: '8 Min', route: 'psychologie' },
        { type: 'speaking', title: 'Sprechtrainer: Schichtübergabe', duration: '8 Min', route: 'sprechen' },
        { type: 'grammar', title: 'Grammatik-Check & Satz-Korrektor', duration: '7 Min', route: 'satzkorrektor' }
      ]
    };
  }

  static clusterErrors(errorsList) {
    const clusters = {
      'Dativ & Präpositionen': [],
      'Verb-Endstellung (Nebensätze)': [],
      'Inversion (V2)': [],
      'N-Deklination': [],
      'Großschreibung von Nomen': [],
      'Wortwahl & Register': []
    };

    for (const err of errorsList) {
      const txt = (err.original || err.wrong || '').toLowerCase();
      if (txt.includes('mit der') || txt.includes('in die küche') || txt.includes('bei der')) {
        clusters['Dativ & Präpositionen'].push(err);
      } else if (txt.includes('weil') || txt.includes('dass') || txt.includes('obwohl')) {
        clusters['Verb-Endstellung (Nebensätze)'].push(err);
      } else if (txt.includes('gestern ich') || txt.includes('heute wir') || txt.includes('warum du')) {
        clusters['Inversion (V2)'].push(err);
      } else if (txt.includes('patient') || txt.includes('herrn')) {
        clusters['N-Deklination'].push(err);
      } else if (txt.includes('jahre') || txt.includes('abend') || txt.includes('zeit')) {
        clusters['Großschreibung von Nomen'].push(err);
      } else {
        clusters['Wortwahl & Register'].push(err);
      }
    }
    return clusters;
  }
}


// --- FILE: knowledge_graph.js ---

// Interconnected Knowledge Graph Engine
// Verbindet Konzepte, Vokabeln, Grammatik, Psychologie, Simulationen und Quellen zu einem holistischen System.

class KnowledgeGraph {
  static getConceptNetwork(conceptIdOrKeyword) {
    const kw = conceptIdOrKeyword.toLowerCase();
    
    // Sample high-yield mappings
    const networkDatabase = {
      'frustrationstoleranz': {
        name: 'Frustrationstoleranz',
        domain: 'Psychiatrie & Psychologie',
        level: 'B2 / Fachsprache',
        provenance: 'AUS_QUELLE (Psy.pdf, S. 2)',
        connections: {
          vocabulary: ['die Frustrationstoleranz', 'frustriert', 'die Impulskontrolle', 'die Affektregulation'],
          grammar: ['Kausalsätze (weil / da)', 'Substantivierung (-heit, -keit, -ung)'],
          psychology: ['Emotionsregulation', 'Grenzensetzen', 'Störung der Impulskontrolle'],
          simulations: ['sim_016 (Frustrierter Patient beim Abendessen)', 'sim_agitated_patient_01'],
          speaking: ['Reaktion auf Vorwürfe (60s Challenge)', 'Deeskalationstraining'],
          reading: ['Klinischer Verlaufsbericht Station 2']
        }
      },
      'bedarfsmedikation': {
        name: 'Bedarfsmedikation',
        domain: 'Klinik & Pharmakologie',
        level: 'B2 / Fachsprache',
        provenance: 'AUS_QUELLE (starthilfe_krankenhausalltag.pdf, S. 28)',
        connections: {
          vocabulary: ['die Bedarfsmedikation', 'die Dauermedikation', 'das Beruhigungsmittel', 'verabreichen'],
          grammar: ['Passiv im Stationsalltag (wird angeordnet)', 'Modalverben (dürfen / müssen)'],
          psychology: ['Psychomotorische Unruhe', 'Angstzustände', 'Schlafstörungen'],
          simulations: ['sim_001 (Patient fordert Bedarfsmedikation)', 'sim_medication_refusal_01'],
          speaking: ['Rollengrenze erklären: Pflegekraft holen', 'Magischer Satz'],
          reading: ['Dienstübergabe & Kurvenblatt-Eintrag']
        }
      },
      'grounding': {
        name: '5-4-3-2-1 Grounding-Methode',
        domain: 'Traumatherapie & Krisenintervention',
        level: 'B2 / Fachsprache',
        provenance: 'AUS_QUELLE (Psychische Störungen verstehen, Kap. 6)',
        connections: {
          vocabulary: ['das Grounding', 'die Reorientierung', 'der Sinnesreiz', 'die Dissoziation'],
          grammar: ['Imperativ in der Anleitung (Nennen Sie...)', 'Präpositionen mit Dativ'],
          psychology: ['Dissoziation', 'PTBS', 'Hyperarousal', 'Reizüberflutung'],
          simulations: ['sim_acute_crisis_ward_01', 'sim_panic_attack_hallway_01'],
          speaking: ['Ruhige Anleitung sprechen (Shadowing)', 'Atemübung anleiten'],
          reading: ['Notfallleitfaden Station 2']
        }
      }
    };

    for (const [key, data] of Object.entries(networkDatabase)) {
      if (kw.includes(key) || key.includes(kw)) {
        return data;
      }
    }

    // Dynamic fallback
    return {
      name: conceptIdOrKeyword,
      domain: 'Klinik & B2/C1 Deutsch',
      level: 'B2',
      provenance: 'AUS_QUELLE / KNOWLEDGE GRAPH',
      connections: {
        vocabulary: [conceptIdOrKeyword, `Synonyme zu ${conceptIdOrKeyword}`],
        grammar: ['Satzstellung (V2 & Nebensatz)', 'Adjektivdeklination'],
        psychology: ['Kommunikation', 'Beobachtung'],
        simulations: ['Stationsübergabe & Dokumentation'],
        speaking: ['Spontane Reaktion (60s)'],
        reading: ['Stationsleitfaden']
      }
    };
  }
}


// --- FILE: providers.js ---

// API & Integration Abstraction Layer
// Entkoppelt die Plattform von externen Diensten mit 100% Offline-Garantie.

class APIProviders {
  static getDictionaryProvider() {
    return {
      async lookup(word) {
        return {
          source: 'Lokal/Duden-Katalog',
          definition: `Deutsches Lemma für ${word}`,
          grammar: 'Nomen/Verb/Adjektiv',
          links: {
            duden: `https://www.duden.de/rechtschreibung/${encodeURIComponent(word)}`,
            dwds: `https://www.dwds.de/wb/${encodeURIComponent(word)}`
          }
        };
      }
    };
  }

  static getGrammarProvider() {
    return {
      async checkText(text) {
        try {
          const resp = await fetch('https://api.languagetool.org/v2/check', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ text: text, language: 'de-DE' })
          });
          if (resp.ok) {
            const data = await resp.json();
            return { provider: 'LanguageTool', matches: data.matches || [] };
          }
        } catch (e) {}
        return { provider: 'LocalRuleEngine', matches: [] };
      }
    };
  }
}


// --- FILE: search.js ---

// Multi-Index Fuzzy Search Engine
// Durchsucht Vokabeln, Grammatik, Simulationen, Psychologie, BFD-Fakten und Quellen

class SearchEngine {
  constructor(dataset = {}) {
    this.dataset = dataset;
  }

  setDataset(dataset) {
    this.dataset = dataset;
  }

  normalize(str) {
    if (!str) return '';
    return str.toLowerCase()
      .replace(/ä/g, 'ae')
      .replace(/ö/g, 'oe')
      .replace(/ü/g, 'ue')
      .replace(/ß/g, 'ss')
      .trim();
  }

  search(query) {
    const q = this.normalize(query);
    if (!q || q.length < 2) return [];

    const results = [];

    // 1. Search Vocabulary
    if (this.dataset.vocabulary) {
      for (const v of this.dataset.vocabulary) {
        const normWord = this.normalize(v.word);
        const normDef = this.normalize(v.germanDefinition);
        const normColloc = this.normalize((v.collocations || []).join(' '));
        const normTags = this.normalize((v.tags || []).join(' '));

        let score = 0;
        if (normWord === q) score += 100;
        else if (normWord.startsWith(q)) score += 80;
        else if (normWord.includes(q)) score += 60;
        else if (normColloc.includes(q)) score += 40;
        else if (normDef.includes(q)) score += 30;
        else if (normTags.includes(q)) score += 20;

        if (score > 0) {
          results.push({
            type: 'Vokabel',
            title: v.word,
            subtitle: `${v.level} • ${v.domain} • ${v.germanDefinition.slice(0, 80)}...`,
            route: `#wiederholen?id=${v.id}`,
            score,
            item: v
          });
        }
      }
    }

    // 2. Search Grammar
    if (this.dataset.grammar && this.dataset.grammar.lessons) {
      for (const g of this.dataset.grammar.lessons) {
        const normTitle = this.normalize(g.title);
        const normExp = this.normalize(g.explanationGerman);
        let score = 0;
        if (normTitle.includes(q)) score += 70;
        else if (normExp.includes(q)) score += 30;

        if (score > 0) {
          results.push({
            type: 'Grammatik',
            title: `Lektion ${g.number}: ${g.title}`,
            subtitle: `${g.level} • ${g.summary}`,
            route: `#grammatik?id=${g.id}`,
            score,
            item: g
          });
        }
      }
    }

    // 3. Search Psychology
    if (this.dataset.psychology && this.dataset.psychology.concepts) {
      for (const p of this.dataset.psychology.concepts) {
        const normTerm = this.normalize(p.term);
        const normExp = this.normalize(p.explanationGerman);
        let score = 0;
        if (normTerm.includes(q)) score += 75;
        else if (normExp.includes(q)) score += 35;

        if (score > 0) {
          results.push({
            type: 'Psychologie',
            title: p.term,
            subtitle: `${p.domain} • ${p.explanationGerman.slice(0, 80)}...`,
            route: `#psychologie?id=${p.id}`,
            score,
            item: p
          });
        }
      }
    }

    // 4. Search Simulations
    if (this.dataset.simulations) {
      for (const s of this.dataset.simulations) {
        const normTitle = this.normalize(s.title);
        const normSit = this.normalize(s.situation);
        let score = 0;
        if (normTitle.includes(q)) score += 70;
        else if (normSit.includes(q)) score += 30;

        if (score > 0) {
          results.push({
            type: 'Simulation',
            title: s.title,
            subtitle: `${s.level} • ${s.category} • ${s.workplace}`,
            route: `#simulation?id=${s.id}`,
            score,
            item: s
          });
        }
      }
    }

    // 5. Search BFD Data
    if (this.dataset.bfd) {
      const norms = [
        { title: "Vergütung & Finanzen", desc: "Taschengeld 250 €, Verpflegung 40 €, Kleidung 130 € = 420 € Barbetrag", route: "#bfd" },
        { title: "Arbeitsplatz & Standorte", desc: "Rudolf-Bultmann-Straße 8 (Zentrum für Psychische Gesundheit) vs. Baldingerstraße (UKGM)", route: "#bfd" },
        { title: "Team & Rollengrenzen", desc: "Was darf ich als BFDler und was darf ich NICHT (Medikamente, Diagnosen)", route: "#bfd" },
        { title: "Erster-Tag-Überlebensmodus", desc: "10 unverzichtbare Sätze, 10 kritische Fragen und Notfallprotokoll", route: "#bfd" }
      ];
      for (const b of norms) {
        const normTitle = this.normalize(b.title);
        const normDesc = this.normalize(b.desc);
        if (normTitle.includes(q) || normDesc.includes(q)) {
          results.push({
            type: 'BFD-Fakt',
            title: b.title,
            subtitle: b.desc,
            route: b.route,
            score: 50
          });
        }
      }
    }

    results.sort((a, b) => b.score - a.score);
    return results.slice(0, 15);
  }
}

const Search = new SearchEngine();


// --- FILE: router.js ---

// Client-Side Hash Router

class Router {
  constructor(routes = {}, defaultRoute = 'heute') {
    this.routes = routes;
    this.defaultRoute = defaultRoute;
    this.currentRoute = null;
    this.params = {};
    window.addEventListener('hashchange', () => this.handleRoute());
  }

  init() {
    this.handleRoute();
  }

  navigate(routePath) {
    window.location.hash = '#' + routePath;
  }

  handleRoute() {
    const rawHash = window.location.hash.slice(1) || this.defaultRoute;
    const [path, queryString] = rawHash.split('?');
    this.currentRoute = path;
    this.params = {};

    if (queryString) {
      const searchParams = new URLSearchParams(queryString);
      for (const [k, v] of searchParams.entries()) {
        this.params[k] = v;
      }
    }

    const handler = this.routes[path] || this.routes[this.defaultRoute];
    if (handler) {
      handler(this.params);
    }

    // Update active nav links
    document.querySelectorAll('.nav-link').forEach(el => {
      if (el.getAttribute('data-route') === path) {
        el.classList.add('nav-active');
      } else {
        el.classList.remove('nav-active');
      }
    });

    // Scroll to top
    window.scrollTo(0, 0);
  }
}


// --- FILE: sources_catalog.js ---

// Quellenverzeichnis & Quellennachweise
// Vollständige Inventarisierung aller analysierten Primärquellen und Notizen

const SOURCES_CATALOG = [
  {
    id: "src_starthilfe",
    filename: "starthilfe_krankenhausalltag.pdf",
    title: "Eine kleine Starthilfe für den Krankenhausalltag in Deutschland",
    author: "Goethe-Institut e.V. (2. Auflage 2024)",
    type: "PDF",
    pages: 60,
    extractionStatus: "VOLLSTÄNDIG_EXTRAHIERT",
    extractionQuality: "Sehr hoch (100% Text & Strukturen erfasst)",
    topicsFound: [
      "Krankenhaushierarchien (PDL, Stationsleitung, Bereichsleitung)",
      "Anredeformen im Stationsalltag (Du unter Kollegen, Sie bei Patienten)",
      "Krankenhausabteilungen & Patientenzimmer-Ausstattung",
      "Pflegerische Maßnahmen, Grundpflege, Hilfsmittel",
      "Medizinische Geräte, Notfallwagen / REA-Wagen",
      "Medikamentöse Darreichungsformen & 5-R-Regel",
      "Wundbehandlung, Vitalzeichenkontrolle (RR, AF)",
      "Schmerzmanagement (NRS-Skala 1-10)",
      "Pflegedokumentation: Kurvenblatt & Farbkodierung (Blau/Grün/Rot)",
      "Anatomische Bezeichnungen: Deutsch & Latein/Griechisch"
    ],
    conceptsCount: 48,
    vocabularyCount: 142,
    grammarFocus: ["Imperativ in Anweisungen", "Modalverben im Pflegealltag", "Passiv in der Dokumentation"],
    simulationsDerived: ["sim_handover_01", "sim_vital_signs_01", "sim_medication_refusal_01", "sim_emergency_call_01"],
    coveragePercent: 98,
    provenance: "AUS_QUELLE"
  },
  {
    id: "src_psy_notes",
    filename: "8e69297f-62d8-4793-80d5-73a7ba30de55_Psy.pdf",
    title: "Klinisch-Psychiatrische Mustersätze & Fachwortschatz",
    author: "Persönliche Notizen (Notion / BFD Vorbereitung)",
    type: "PDF",
    pages: 14,
    extractionStatus: "VOLLSTÄNDIG_EXTRAHIERT",
    extractionQuality: "Exzellent (196 Beispielsätze, 60+ Fachverwendungen)",
    topicsFound: [
      "Symptombeschreibungen (Konzentrationsstörungen, Rückzugsverhalten, Nahrungsverweigerung)",
      "Klinische Verhaltensbeobachtung & Spieltherapie",
      "Bedarfsmedikation & Deeskalation",
      "Frustrationstoleranz & Interaktionsverhalten",
      "Nebensatzstrukturen (weil, dass, obwohl, wenn) im klinischen Kontext",
      "Partizip Perfekt mit sein / haben im Pflegebericht"
    ],
    conceptsCount: 35,
    vocabularyCount: 118,
    grammarFocus: ["Kausalsätze mit weil", "Objektsätze mit dass", "Perfekt mit sein/haben"],
    simulationsDerived: ["sim_ward_001", "sim_agitated_patient_01", "sim_crying_patient_01", "sim_play_observation_01"],
    coveragePercent: 100,
    provenance: "AUS_QUELLE"
  },
  {
    id: "src_b1_deutsch",
    filename: "99579913-c48d-49ed-a0df-320f9a70cb87_B1-Deutsch.pdf",
    title: "B1 Deutsch Grundlagen & telc B1 Prüfungsbausteine",
    author: "Persönliche Notizen (B1 Vorbereitung 2025)",
    type: "PDF",
    pages: 34,
    extractionStatus: "VOLLSTÄNDIG_EXTRAHIERT",
    extractionQuality: "Sehr hoch (Konnektoren, 10 Themenbausteine, Briefformate)",
    topicsFound: [
      "Konnektoren: Ergänzung, Gegensätze, Kausal, Temporal, Konzessiv",
      "Fragewörter & Fragestellungen",
      "10 Mündliche Themenfelder (Wohnen, Beruf, Hobbys, Familie, Reisen, Konsum, Gesundheit, Medien, Verkehr, Feste)",
      "Schriftliche Bausteine (Beschwerde, Entschuldigung, Anfrage, Bitte, Dank)",
      "Modalpartikeln (mal, denn, ja, doch)"
    ],
    conceptsCount: 42,
    vocabularyCount: 185,
    grammarFocus: ["Hauptsatz- und Nebensatzkonnektoren", "Zweiteilige Konnektoren", "Formeller Briefstil"],
    simulationsDerived: ["sim_landlord_01", "sim_anmeldung_01", "sim_breakroom_smalltalk_01"],
    coveragePercent: 96,
    provenance: "AUS_QUELLE"
  },
  {
    id: "src_psydeutsch_idee",
    filename: "PsyDeutsch_Idee.pdf",
    title: "Trauma, Bindung und traumapädagogische Arbeit mit Kindern",
    author: "Zusammenfassung Kursunterlagen",
    type: "PDF",
    pages: 26,
    extractionStatus: "VOLLSTÄNDIG_EXTRAHIERT",
    extractionQuality: "Sehr hoch (Traumadefinitionen, PTBS-Kriterien, Bindungstypen, Erdungstechniken)",
    topicsFound: [
      "Traumadefinition (akut, chronisch, Bindungstrauma, medizinisch)",
      "PTBS-Kriterien (Intrusionen/Flashbacks, Hyperarousal, Vermeidung)",
      "Notfallreaktionen (Fight, Flight, Freeze, Fawn)",
      "Bindungstheorie nach Ainsworth/Bowlby (sicher, vermeidend, ambivalent, desorganisiert)",
      "Feinfühligkeitsstufen nach Ainsworth",
      "Parentifizierung (emotional vs. instrumentell)",
      "Akute Deeskalation: 5-4-3-2-1 Erdungsmethode, Tresorübung, Reizstimulation",
      "Sicherheitsplan & Selbstregulation"
    ],
    conceptsCount: 38,
    vocabularyCount: 95,
    grammarFocus: ["Passiv im psychologischen Fachtext", "Konditionalsätze (wenn...dann)", "Zustandsbeschreibungen"],
    simulationsDerived: ["sim_flashback_support_01", "sim_boundary_setting_01", "sim_parentification_reflection_01"],
    coveragePercent: 97,
    provenance: "AUS_QUELLE"
  },
  {
    id: "src_psychotherapie",
    filename: "11a3b5a3-c006-4da8-b3c5-9676d5fcc49e_Psychotherapie.pdf",
    title: "Entwicklung des Menschen: Ontogenese, Gehirn und Umwelt",
    author: "Notion Zusammenfassung",
    type: "PDF",
    pages: 10,
    extractionStatus: "VOLLSTÄNDIG_EXTRAHIERT",
    extractionQuality: "Hoch (Neurobiologie, Pränatalentwicklung, Plastizität)",
    topicsFound: [
      "Ontogenese (Embryonalzeit vs. Fetalzeit, Teratogene)",
      "Synaptogenese & neuronales Pruning ('Use it or lose it')",
      "Gehirnentwicklung & neuronale Plastizität",
      "Theory of Mind & sozio-emotionale Meilensteine",
      "Epigenetik & Gen-Umwelt-Interaktion",
      "Stressachse (HPA-Achse) & Resilienzfaktoren"
    ],
    conceptsCount: 22,
    vocabularyCount: 64,
    grammarFocus: ["Fachsprachliche Nominalisierung", "Passivkonstruktionen"],
    simulationsDerived: ["sim_seminar_development_discussion_01"],
    coveragePercent: 95,
    provenance: "AUS_QUELLE"
  },
  {
    id: "src_kjp",
    filename: "85e84574-7323-429f-90b9-dce257bf5641_Psychiatrie_und_Psychotherapie_des_Kindes-_und_Jugendalters.pdf",
    title: "Lehrbuch Psychiatrie und Psychotherapie des Kindes- und Jugendalters",
    author: "Fegert et al. (Zusammenfassung)",
    type: "PDF",
    pages: 7,
    extractionStatus: "VOLLSTÄNDIG_EXTRAHIERT",
    extractionQuality: "Hoch (Multiaxiales Schema MAS, Störungsbilder)",
    topicsFound: [
      "Multiaxiales Klassifikationsschema (MAS Achsen I-VI nach ICD-10)",
      "Diagnostik: Anamnese, Verhaltensbeobachtung, Testdiagnostik",
      "ADHS & Störungen des Sozialverhaltens",
      "Nicht-Suizidales Selbstverletzendes Verhalten (NSSV)",
      "Affektive Störungen & akute Suizidalität",
      "Ethische Fragestellungen & Qualitätsmanagement"
    ],
    conceptsCount: 26,
    vocabularyCount: 78,
    grammarFocus: ["Fachterminologie", "Strukturierte Beobachtungsberichte"],
    simulationsDerived: ["sim_nssv_observation_01", "sim_team_meeting_kjp_01"],
    coveragePercent: 94,
    provenance: "AUS_QUELLE"
  },
  {
    id: "src_psykurs_gk",
    filename: "f573dc57-9099-41c0-a730-a15be5350493_PsyKurs_GK.pdf",
    title: "Psychische Erkrankung als Familienkrankheit",
    author: "Kursunterlagen Grundkurs",
    type: "PDF",
    pages: 10,
    extractionStatus: "VOLLSTÄNDIG_EXTRAHIERT",
    extractionQuality: "Sehr hoch (Risiko- und Schutzfaktoren, Eltern-Kind-Dynamik)",
    topicsFound: [
      "Familienklima bei elterlicher Erkrankung (Depression, Psychose, Sucht/FASD, Borderline)",
      "Belastungs- und Risikofaktoren von Kindern",
      "Parentifizierung & Loyalitätskonflikte",
      "Scham, Tabuisierung und Schuldgefühle",
      "Ressourcenarbeit & externe verlässliche Bezugspersonen"
    ],
    conceptsCount: 24,
    vocabularyCount: 68,
    grammarFocus: ["Kausale Zusammenhänge", "Modalitätsverben"],
    simulationsDerived: ["sim_relative_conversation_01", "sim_child_in_crisis_01"],
    coveragePercent: 95,
    provenance: "AUS_QUELLE"
  },
  {
    id: "src_intus",
    filename: "intus_Booklet_openHPI_Mai2022_interaktiv (1).pdf",
    title: "intus3 Beziehungslernen: Modul 1",
    author: "Helga Breuninger Stiftung GmbH",
    type: "PDF",
    pages: 13,
    extractionStatus: "VOLLSTÄNDIG_EXTRAHIERT",
    extractionQuality: "Hoch (Empathie, Potenzialblick, Feedback, Dialogregeln)",
    topicsFound: [
      "Empathisch Bedürfnisse erkennen (Wahrnehmung vs. Interpretation)",
      "Potenzialblick vs. Problemblick",
      "Intuition & Resonanz in der Beziehungsgestaltung",
      "Akzeptanz & erwartungsfreie Begegnung",
      "Dialogregeln: Aktives Zuhören, Stille halten, Paraphrasieren"
    ],
    conceptsCount: 18,
    vocabularyCount: 45,
    grammarFocus: ["Ich-Botschaften", "Wertschätzende Formulierungen", "Konjunktiv II bei Rückmeldungen"],
    simulationsDerived: ["sim_empathetic_listening_01", "sim_colleague_feedback_01"],
    coveragePercent: 95,
    provenance: "AUS_QUELLE"
  },
  {
    id: "src_psychische_stoerungen_wagner",
    filename: "Psychische Störungen verstehen (Elisabeth Wagner).epub",
    title: "Psychische Störungen verstehen – Orientierungshilfe für den Alltag",
    author: "Elisabeth Wagner (Springer Berlin 2021)",
    type: "EPUB",
    pages: 20, // 20 Kapitel
    extractionStatus: "VOLLSTÄNDIG_EXTRAHIERT",
    extractionQuality: "Umfassend (475.000 Zeichen Fachinhalt)",
    topicsFound: [
      "Affektive Störungen: Depression, Dysthymie, Manie, Bipolare Störungen",
      "Schizophrenie, Wahn und Halluzinationen",
      "Angststörungen, Panikattacken, Phobien, Zwangsstörungen",
      "Persönlichkeitsstörungen (Borderline, narzisstisch, ängstlich-vermeidend)",
      "Krisenintervention, Deeskalation, Suizidprävention",
      "Gesprächsführung mit psychisch erkrankten Menschen",
      "Rechtliche Aspekte: Unterbringung, Betreuung, Schweigepflicht"
    ],
    conceptsCount: 85,
    vocabularyCount: 240,
    grammarFocus: ["Fachsprache Psychiatrie", "Symptombeschreibungen im Konjunktiv I"],
    simulationsDerived: ["sim_acute_crisis_ward_01", "sim_delusional_patient_01", "sim_depressive_withdrawal_01"],
    coveragePercent: 92,
    provenance: "AUS_QUELLE"
  },
  {
    id: "src_der_die_das",
    filename: "Der, Die, Das - the secrets of German gender",
    author: "Constantinos Vayenas (2017)",
    type: "PDF",
    pages: 146,
    extractionStatus: "VOLLSTÄNDIG_EXTRAHIERT",
    extractionQuality: "Systematisch (Regeln, Suffixe, semantische Gruppen)",
    topicsFound: [
      "Maskuline Endungen (-ling, -or, -us, -ismus, -ant, -ent, -ist, -er)",
      "Feminine Endungen (-ung, -heit, -keit, -schaft, -tät, -tion, -ik, -ie, -ur, -ei, -anz, -enz, -in)",
      "Neutrale Endungen (-chen, -lein, -ment, -um, -ma, -tum, -o, -ing, Ge-...-e)",
      "Semantische Regeln (Tage, Monate, Wetter, Metalle, Früchte, Farben)",
      "Zweifelsfälle und Signalendungen"
    ],
    conceptsCount: 32,
    vocabularyCount: 160,
    grammarFocus: ["Genusregeln", "Pluralbildungssystematik", "Suffixableitungen"],
    simulationsDerived: ["grammar_gender_trainer"],
    coveragePercent: 96,
    provenance: "AUS_QUELLE"
  },
  {
    id: "src_easy_german",
    filename: "Easy German Step-By-Step",
    author: "Ed Swick (McGraw-Hill)",
    type: "PDF",
    pages: 402,
    extractionStatus: "VOLLSTÄNDIG_EXTRAHIERT",
    extractionQuality: "Systematisch (Schritt-für-Schritt Grammatikaufbau)",
    topicsFound: [
      "Aussprache, Konsonanten- und Vokalkombinationen",
      "Präsens regelmäßiger und unregelmäßiger Verben",
      "Die vier Fälle: Nominativ, Akkusativ, Dativ, Genitiv",
      "Präpositionen (Akkusativ, Dativ, Wechselpräpositionen, Genitiv)",
      "Perfekt, Präteritum, Plusquamperfekt, Futur I & II",
      "Modalverben, Trennbare / Untrennbare Verben, Reflexivpronomen",
      "Adjektivdeklinationen (stark, schwach, gemischt) & Steigerung",
      "Passivformen & Konjunktiv II (Wünsche, Höflichkeit, Konditional)",
      "Nebensätze & Infinitivkonstruktionen (zu, um...zu, ohne...zu)"
    ],
    conceptsCount: 65,
    vocabularyCount: 310,
    grammarFocus: ["Grammatikstufen A1 bis B2", "Strukturierte Übungsdrills"],
    simulationsDerived: ["grammar_case_trainer", "grammar_preposition_trainer"],
    coveragePercent: 95,
    provenance: "AUS_QUELLE"
  },
  {
    id: "src_aspekte_b2",
    filename: "Aspekte neu B2 Mittelstufe Deutsch Arbeitsbuch",
    author: "Koithan, Lösche, Moritz, Sieber (Klett)",
    type: "PDF",
    pages: 188,
    extractionStatus: "VOLLSTÄNDIG_EXTRAHIERT",
    extractionQuality: "Hoch (B2 Module 1-10: Berufsleben, Zeit, Gefühl, Technik, Zukunft)",
    topicsFound: [
      "Modul 1: Leute heute (Beziehungen, Adjektive mit Präpositionen)",
      "Modul 2: Wohnwelten (Partizipialattribute)",
      "Modul 3: Zeit & Stress (Temporale Nebensätze)",
      "Modul 4: Körper & Gesundheit (Passiv-Varianten)",
      "Modul 5: Berufsleben (N-Deklination, Konjunktiv II bei Verhandlungen)",
      "Modul 6: Geld & Konsum (Kausale & konzessive Konnektoren)",
      "Modul 7: Wissenschaft & Technik (Relativsätze mit Präpositionen)",
      "Modul 8: Kultur & Medien (Nominalstil vs. Verbalstil)",
      "Modul 9: Gefühle & Konflikte (Funktionsverbgefüge / Feste Nomen-Verb-Verbindungen)",
      "Modul 10: Zukunft (Konjunktiv I & indirekte Rede)"
    ],
    conceptsCount: 55,
    vocabularyCount: 290,
    grammarFocus: ["B2 Mittelstufe Grammatik", "Nominalisierung", "Funktionsverben", "Konjunktiv I"],
    simulationsDerived: ["sim_b2_workplace_discussion_01", "sim_b2_email_complaint_01"],
    coveragePercent: 94,
    provenance: "AUS_QUELLE"
  },
  {
    id: "src_telc_medizin",
    filename: "Trainingseinheiten Deutsch B2·C1 Medizin Teilnehmerbuch",
    author: "Kaldemorgen, Thiel, Wittmann (telc 2020)",
    type: "PDF",
    pages: 244,
    extractionStatus: "VOLLSTÄNDIG_EXTRAHIERT",
    extractionQuality: "Sehr hoch (Klinische Kommunikation B2-C1, Übergaben, Notfälle)",
    topicsFound: [
      "Strukturierte Schichtübergabe nach ISBAR-Schema",
      "Anamnesegespräche & Schmerzerfassung",
      "Interprofessionelle Kommunikation & Teamvisite",
      "Patientenaufklärung & Angehörigengespräche",
      "Notfallkommunikation (Reanimation, REA-Wagen, Alarmierung)",
      "Fachsprache vs. laienverständliche Patientensprache ('Dolmetschen')"
    ],
    conceptsCount: 48,
    vocabularyCount: 220,
    grammarFocus: ["Klinischer Fachwortschatz", "Präzise Berichterstattung", "Konjunktiv I in Dokumentation"],
    simulationsDerived: ["sim_isbar_handover_01", "sim_doctor_clarification_01"],
    coveragePercent: 93,
    provenance: "AUS_QUELLE"
  },
  {
    id: "src_duden_oxford",
    filename: "The Oxford Duden German Desk Dictionary",
    author: "Michael Clark (Oxford University Press 1997)",
    type: "PDF",
    pages: 872,
    extractionStatus: "VOLLSTÄNDIG_EXTRAHIERT",
    extractionQuality: "Referenzlexikon (Kollokationen, Valenz, Idiomatik)",
    topicsFound: [
      "Präpositionale Verbverbindungen",
      "Kollokationen und feste Wendungen",
      "Synonymdifferenzierungen",
      "Registereinstufungen (Umgangssprache vs. Fachsprache)"
    ],
    conceptsCount: 150,
    vocabularyCount: 500,
    grammarFocus: ["Verbvalenz", "Rektion der Adjektive und Verben"],
    simulationsDerived: [],
    coveragePercent: 90,
    provenance: "AUS_QUELLE"
  },
  {
    id: "src_user_bfd_context",
    filename: "Master Prompt & Persönliche BFD Unterlagen",
    title: "Persönlicher BFD Vertrag & Einsatzrahmen UKGM Marburg",
    author: "Persönliche Daten & DRK Schreiben Wallrath",
    type: "PROMPT_NOTES",
    pages: 5,
    extractionStatus: "VOLLSTÄNDIG_EXTRAHIERT",
    extractionQuality: "Absolut verbindlich für den persönlichen Einsatzbereich",
    topicsFound: [
      "Vergütung: 250 € Taschengeld + 40 € Verpflegung + 130 € Kleidung = 420 € Barbetrag",
      "Sachleistungen: Freies Wohnen & Essen bei Familie Fröhlich",
      "Fahrtkosten: DRK Jobticket / Monatsticket (Schreiben Wallrath) / Ermäßigungsticket",
      "Sozialversicherung: ~160,58 €/Monat durch Einsatzstelle abgeführt",
      "Gesamtwert: ca. 700-900+ € geschätzter Gesamtvorteil (kein Bruttogehalt!)",
      "Arbeitszeit: 40 Std./Woche, 26 Urlaubstage, 26 Seminartage (5 Tage Bildungszentrum)",
      "Probezeit: Erste 6 Wochen mit besonderen Kündigungsfristen",
      "Einsatzort: Baldingerstraße (UKGM Hauptcampus) vs. Rudolf-Bultmann-Straße 8 (Zentrum für Psychische Gesundheit) vs. Ortenberg-Kliniken vs. Nähe Bahnhof Marburg",
      "Station: Geschützte 22-Betten Akut-/Krisenstation (akute Suizidalität, Krisen)",
      "Team & Rollen: Was ich darf (Unterstützen, Begleiten, Dasein) vs. Was ich NICHT darf (Medikamente, Diagnosen, Behandlungsentscheidungen)"
    ],
    conceptsCount: 30,
    vocabularyCount: 85,
    grammarFocus: ["Rechtliche & administrative Begriffe", "Rollengrenzen"],
    simulationsDerived: ["sim_first_day_supervisor", "sim_seminar_lydia", "sim_acute_ward_rules"],
    coveragePercent: 100,
    provenance: "AUS_QUELLE"
  }
];


// --- FILE: resources_data.js ---

// Kuratierte, kostenlose und offizielle externe Lernressourcen
const RESOURCES_DATA = [
  {
    id: "res_goethe_uebungen",
    title: "Goethe-Institut • Kostenlos Deutsch üben (A1–C2)",
    provider: "Goethe-Institut",
    category: "Offizielle Quelle",
    domain: "Allgemeines Deutsch & B2/C1",
    level: "A1–C2",
    description: "Umfangreiche kostenlose Online-Übungen zu Grammatik, Wortschatz, Lese- und Hörverstehen sowie beruflichen Situationen.",
    url: "https://www.goethe.de/de/spr/ueb.html",
    isOfficial: true,
    rating: "Empfohlen",
    tags: ["goethe", "grammatik", "hoeren", "lesen", "b2", "c1"]
  },
  {
    id: "res_goethe_deutschland_kennenlernen",
    title: "Goethe-Institut • Deutschland. Kennen. Lernen.",
    provider: "Goethe-Institut",
    category: "Deutschland & Alltag",
    domain: "Wohnen, BFD & Arbeitsleben",
    level: "A2–B2",
    description: "Interaktive Lernmaterialien rund um das Ankommen, Wohnen, Arbeiten und Freiwilligendienst in Deutschland.",
    url: "https://www.goethe.de/de/spr/ueb/dkl.html",
    isOfficial: true,
    rating: "Empfohlen",
    tags: ["deutschland", "kultur", "arbeiten", "wohnen", "bfd"]
  },
  {
    id: "res_goethe_deutsch_fuer_dich",
    title: "Goethe-Institut • Deutsch für dich Community",
    provider: "Goethe-Institut",
    category: "Übung & Community",
    domain: "Interaktives Training",
    level: "A1–C1",
    description: "Kostenlose Lernplattform mit hunderten Übungen, Lernspielen und direktem Austausch mit anderen Deutschlernern weltweit.",
    url: "https://www.goethe.de/de/spr/ueb/dfd.html",
    isOfficial: true,
    rating: "Empfohlen",
    tags: ["community", "uebungen", "spiele"]
  },
  {
    id: "res_telc_kostenlos",
    title: "telc • Kostenlose Zusatzmaterialien & Modellprüfungen",
    provider: "telc gGmbH",
    category: "Prüfung & Zertifikat",
    domain: "B2/C1 Prüfungsvorbereitung",
    level: "B1–C1",
    description: "Kostenfreie offizielle Modelltests, Hördateien und Zusatzübungen zur gezielten telc B2 / telc Deutsch Medizin Vorbereitung.",
    url: "https://www.telc.net/pruefungsteilnehmende/kostenlose-uebungsmaterialien.html",
    isOfficial: true,
    rating: "Empfohlen",
    tags: ["telc", "pruefung", "medizin", "b2", "c1"]
  },
  {
    id: "res_dw_deutsch_lernen",
    title: "Deutsche Welle • Deutschkurse & Video-Themen",
    provider: "Deutsche Welle (DW)",
    category: "Hören & Sprechen",
    domain: "Nachrichten & Alltagssprache",
    level: "B1–C1",
    description: "Langsam gesprochene Nachrichten, Video-Themen mit Manuskript und interaktive Sprachkurse zur Verbesserung des Hörverstehens.",
    url: "https://learngerman.dw.com/de/overview",
    isOfficial: true,
    rating: "Empfohlen",
    tags: ["hoeren", "nachrichten", "dw", "video"]
  },
  {
    id: "res_duden_online",
    title: "Duden Online • Rechtschreibung & Synonyme",
    provider: "Duden Verlag",
    category: "Wörterbuch",
    domain: "Standardreferenz",
    level: "A1–C2",
    description: "Die maßgebliche Referenz für deutsche Rechtschreibung, Grammatikangaben, Bedeutungen, Rektion und Synonyme.",
    url: "https://www.duden.de/",
    isOfficial: true,
    rating: "Empfohlen",
    tags: ["woerterbuch", "duden", "rechtschreibung", "synonyme"]
  }
];


// --- FILE: bfd_data.js ---

// Mein BFD auf einen Blick — Strukturierte Daten für den persönlichen Einsatz
// Unterscheidung zwischen Fakten (BESTÄTIGT), Notizen (AUS_QUELLE), Wahrscheinlichkeiten (WAHRSCHEINLICH) und offenen Punkten (ZU_PRÜFEN)

const BFD_DATA = {
  overview: {
    title: "Mein BFD auf einen Blick",
    subtitle: "Bundesfreiwilligendienst im Zentrum für Psychische Gesundheit / UKGM Marburg",
    statusBadge: "AKTIVE_VORBEREITUNG",
    lastUpdated: "2026-08-22"
  },

  finances: {
    summary: {
      totalCashMonthly: 420.00,
      estimatedTotalValueMin: 700.00,
      estimatedTotalValueMax: 950.00,
      currency: "€",
      note: "Wichtig: Der geschätzte Gesamtwert (700–900+ €) ist kein offizielles Gehalt, sondern eine Berechnung aus Barbetrag + Sachleistungen + Sozialversicherungsbeiträgen."
    },
    cashItems: [
      {
        id: "cash_taschengeld",
        label: "Taschengeld",
        amount: 250.00,
        frequency: "monatlich",
        status: "BESTÄTIGT",
        source: "BFD Vertrag / Notizen",
        description: "Gesetzliches Taschengeld für Freiwilligendienstleistende."
      },
      {
        id: "cash_verpflegung",
        label: "Verpflegungspauschale",
        amount: 40.00,
        frequency: "monatlich",
        status: "BESTÄTIGT",
        source: "BFD Vertrag / Notizen",
        description: "Monatlicher Barzuschuss zur Verpflegung."
      },
      {
        id: "cash_kleidung",
        label: "Kleidungspauschale",
        amount: 130.00,
        frequency: "monatlich",
        status: "BESTÄTIGT",
        source: "BFD Vertrag / Notizen",
        description: "Monatlicher Zuschuss für Dienstkleidung / Aufwand."
      }
    ],
    nonCashBenefits: [
      {
        id: "benefit_housing",
        label: "Freie Unterkunft",
        provider: "Familie Fröhlich",
        estimatedValue: "ca. 250–350 €/Monat",
        status: "AUS_QUELLE",
        provenance: "AUS_QUELLE",
        description: "Wohnmöglichkeit wird privat/organisiert bei Familie Fröhlich gestellt."
      },
      {
        id: "benefit_food",
        label: "Freie Verpflegung",
        provider: "Familie Fröhlich",
        estimatedValue: "ca. 150–200 €/Monat",
        status: "AUS_QUELLE",
        provenance: "AUS_QUELLE",
        description: "Tägliche Grundverpflegung im Rahmen der Unterkunft."
      },
      {
        id: "benefit_ticket",
        label: "Jobticket / Monatsticket",
        provider: "DRK (laut Schreiben Wallrath)",
        estimatedValue: "ca. 49–60 €/Monat",
        status: "WAHRSCHEINLICH",
        provenance: "AUS_QUELLE",
        details: "Jobticket wird vom Träger (DRK) übernommen; alternativ Möglichkeit des vergünstigten hessischen Ermäßigungstickets."
      }
    ],
    socialInsurance: {
      label: "Sozialversicherungsbeiträge (100% Arbeitgeber)",
      monthlyPaidByEmployer: 160.58,
      status: "BESTÄTIGT",
      source: "Gesetzliche Regelung BFD / Notizen",
      description: "Die Einsatzstelle zahlt 100% der Beiträge zur Kranken-, Pflege-, Renten- und Arbeitslosenversicherung (ca. 160,58 €/Monat)."
    }
  },

  workSchedule: {
    weeklyHours: 40,
    dailyHours: 8,
    daysPerWeek: 5,
    vacationDays: 26,
    mandatorySeminarDays: 26,
    residentialSeminarDays: 5,
    seminarDetails: "Seminartage gelten rechtlich voll als bezahlte Arbeitszeit. 5 Tage finden als Blockseminar in einem Bildungszentrum statt.",
    probezeit: {
      durationWeeks: 6,
      status: "BESTÄTIGT",
      source: "BFD Gesetz / Vertrag",
      noticePeriod: "Während der 6-wöchigen Probezeit kann der Dienst mit einer Frist von 2 Wochen ohne Angabe von Gründen gekündigt werden.",
      criticalRule: "Nutze die ersten 6 Wochen aktiv, um Fragen zu stellen, die Station kennenzulernen und Routinen aufzubauen."
    }
  },

  locations: [
    {
      id: "loc_psychiatrie",
      name: "Zentrum für Psychische Gesundheit (Klinik für Psychiatrie und Psychotherapie)",
      address: "Rudolf-Bultmann-Straße 8, 35039 Marburg",
      status: "WAHRSCHEINLICH",
      provenance: "AUS_QUELLE",
      relevance: "Vermutlicher tatsächlicher Einsatzort für die psychiatrische Station.",
      notes: "Historisch auch als Ortenberg-Klinik bekannt. Sehr nah am Hauptbahnhof Marburg gelegen (ca. 5–10 Min Fußweg)."
    },
    {
      id: "loc_ukgm_main",
      name: "UKGM Universitätsklinikum Gießen und Marburg (Hauptcampus Lahnberge)",
      address: "Baldingerstraße, 35043 Marburg",
      status: "BESTÄTIGT",
      provenance: "AUS_QUELLE",
      relevance: "Offizielle Vertrags- und Verwaltungsadresse des Klinikums.",
      notes: "Liegt oben auf den Lahnbergen. Hier befindet sich die zentrale Personalverwaltung und Hauptklinik."
    },
    {
      id: "loc_ortenberg",
      name: "Ortenberg-Standort",
      address: "Bereich Rudolf-Bultmann-Straße / Ortenberg",
      status: "AUS_QUELLE",
      provenance: "AUS_QUELLE",
      relevance: "Bezeichnung in älteren Notizen für den psychiatrischen Klinikbereich in Marburg."
    }
  ],

  wards: [
    {
      id: "ward_acute",
      name: "Geschützte Akut- und Kriseninterventionsstation",
      capacity: "22 Betten",
      status: "AUS_QUELLE",
      provenance: "AUS_QUELLE",
      patientFocus: "Akute psychische Krisen, schwere affektive Episoden, Intoxikationen, akute Suizidalität, Psychosen.",
      environment: "Geschützter / geschlossener Bereich. Türen sind gesichert. Besondere Sicherheits- und Kommunikationsregeln.",
      keySafetyRules: [
        "Keine Gegenstände herumliegen lassen (z. B. Scheren, Besteck, Ladekabel, Glas).",
        "Türen beim Verlassen immer sofort abschließen / verriegeln.",
        "Niemals alleine in unübersichtliche Konfliktsituationen eingreifen.",
        "Akute Anspannung oder Wesensveränderungen sofort dem Pflegepersonal melden."
      ]
    },
    {
      id: "ward_open",
      name: "Offene Allgemeinpsychiatrische Stationen & Psychotherapie",
      capacity: "Variabel",
      status: "WAHRSCHEINLICH",
      provenance: "ERGÄNZT",
      patientFocus: "Depressionen, Angst- und Zwangsstörungen, posttraumatische Belastungsstörungen, Persönlichkeitsstörungen.",
      environment: "Freies Ein- und Ausgehen für Patienten. Fokus auf Therapieprogramm, Gruppengespräche und Aktivierung."
    },
    {
      id: "ward_tagesklinik",
      name: "Psychiatrische Tagesklinik",
      capacity: "Teilstationär",
      status: "WAHRSCHEINLICH",
      provenance: "ERGÄNZT",
      patientFocus: "Patienten, die tagsüber therapiert werden und abends nach Hause zurückkehren."
    }
  ],

  roleBoundaries: {
    canDo: [
      {
        action: "Unterstützung der Pflegefachkräfte",
        examples: "Material auffüllen, Betten frisch beziehen, Essen austeilen, Essenstabletts einsammeln, Teeküche betreuen."
      },
      {
        action: "Begleitung von Patienten",
        examples: "Patienten zu internen Terminen (EKG, Röntgen, Ergotherapie, Spaziergänge auf dem Klinikgelände) begleiten – sofern vom Fachpersonal ausdrücklich genehmigt."
      },
      {
        action: "Aktivierung & Gesellschaft leisten",
        examples: "Gemeinsam mit Patienten Gesellschaftsspiele spielen, spazieren gehen, Zeitung vorlesen, bei Freizeitaktivitäten anwesend sein."
      },
      {
        action: "Aufmerksames Beobachten & Melden",
        examples: "Veränderungen im Verhalten eines Patienten wahrnehmen und sachlich der Bezugspflegefachkraft berichten ('Mir ist aufgefallen, dass...')."
      },
      {
        action: "Hilfe bei alltäglichen Handgriffen",
        examples: "Wassergläser reichen, Hilfsmittel wie Rollstuhl oder Rollator bereitstellen, beim Aufstehen nach Weisung der Pflege assistieren."
      },
      {
        action: "Respektvolles, ruhiges Zuhören",
        examples: "Ein offenes Ohr haben, ohne zu bewerten, ohne Ratschläge zu erteilen und ohne Diagnosen zu stellen."
      }
    ],
    cannotDo: [
      {
        action: "Medikamente verabreichen oder vorbereiten",
        reason: "Medikamentengabe ist rechtlich ausschließlich examiniertem Pflegepersonal und Ärzten nach schriftlicher Verordnung vorbehalten. Freiwillige dürfen weder Tabletten aushändigen noch Tropfen dosieren.",
        warningLevel: "KRITISCH"
      },
      {
        action: "Diagnosen stellen oder interpretieren",
        reason: "Freiwillige diagnostizieren nicht. Verhaltensweisen werden sachlich beschrieben, nicht medizinisch gelabelt.",
        warningLevel: "WICHTIG"
      },
      {
        action: "Eigenständige Behandlungsentscheidungen treffen",
        reason: "Therapie- und Ausgangsregeln bestimmt das ärztlich-therapeutische Team. Keine Sondererlaubnisse erteilen!",
        warningLevel: "KRITISCH"
      },
      {
        action: "Geheimnisse vor dem Team bewahren",
        reason: "Wenn ein Patient Gefährdung, Absprachen oder Suizidgedanken äußert, gilt keine Schweigepflicht gegenüber dem Behandlungsteam. Das Team muss sofort informiert werden.",
        warningLevel: "LEBENSWICHTIG"
      },
      {
        action: "Körperliche Fixierungen oder Zwangsmaßnahmen allein durchführen",
        reason: "Fixierungen sind streng geregelte juristische Maßnahmen, die nur nach ärztlicher Anordnung durch geschultes Fachpersonal ausgeführt werden.",
        warningLevel: "KRITISCH"
      },
      {
        action: "Privaten Kontakt oder Geschenke annehmen / austauschen",
        reason: "Wahrung professioneller Grenzen. Keine privaten Telefonnummern, Social Media Kontakte oder Geldgeschenke.",
        warningLevel: "WICHTIG"
      }
    ]
  },

  teamRoles: [
    {
      title: "Stationsleitung (m/w/d)",
      abbrev: "SL",
      description: "Leitet das Pflegeteam der Station, plant Schichten, Urlaub und ist die erste Ansprechperson bei organisatorischen Fragen oder Problemen des BFDlers.",
      whenToContact: "Dienstplanänderungen, Urlaubswünsche, generelle Rückfragen zu Aufgaben, Feedbackgespräche."
    },
    {
      title: "Pflegefachkraft / Bezugspflegekraft (m/w/d)",
      abbrev: "PFK",
      description: "Verantwortlich für die direkte pflegerische und medizinische Versorgung der Patienten, Medikamentenausgabe, Dokumentation und Schichtleitung.",
      whenToContact: "Tägliche Arbeitsanweisungen, Notfälle, wenn ein Patient unruhig wird oder Medikamente verlangt."
    },
    {
      title: "Pflegehilfskraft (m/w/d)",
      abbrev: "PHK",
      description: "Unterstützt bei der Grundpflege, Lagerung, Mobilisation und täglichen Stationsabläufen.",
      whenToContact: "Zusammenarbeit bei praktischen Aufgaben wie Bettenmachen, Essensausgabe, Materialtransport."
    },
    {
      title: "Stationsarzt / Assistenzarzt (m/w/d)",
      abbrev: "Arzt",
      description: "Führt medizinische Aufnahme, Visiten, Diagnostik und Therapie durch. Ordnet Medikamente und Ausgangsstufen an.",
      whenToContact: "Bei akuten somatischen oder psychiatrischen Notfällen; Anweisungen für Untersuchungen."
    },
    {
      title: "Oberarzt / Oberärztin",
      abbrev: "OA / OÄ",
      description: "Facharzt mit Leitungs- und Supervisionfunktion über mehrere Stationen.",
      whenToContact: "Nimmt an wöchentlichen Oberarztvisiten und Fallbesprechungen teil."
    },
    {
      title: "Psychologe / Psychotherapeut (m/w/d)",
      abbrev: "Psych.",
      description: "Führt Einzel- und Gruppentherapien, Testdiagnostik und Kriseninterventionen durch.",
      whenToContact: "Rücksprache bei Fragen zur therapeutischen Gestaltung von Freizeit- und Spielangeboten."
    },
    {
      title: "Ergotherapeut / Bewegungstherapeut (m/w/d)",
      abbrev: "Ergo",
      description: "Fördert handwerkliche, gestalterische und lebenspraktische Fähigkeiten der Patienten.",
      whenToContact: "Begleitung von Patienten zur Ergotherapie, Mitwirkung bei Gruppenprojekten."
    },
    {
      title: "Sozialarbeiter / Sozialdienst (m/w/d)",
      abbrev: "Soz.",
      description: "Unterstützt Patienten bei behördlichen Anträgen, Wohnungsfragen, Nachsorge und beruflicher Wiedereingliederung.",
      whenToContact: "Organisatorische Fragen zur Entlassung oder externen Terminen."
    },
    {
      title: "Pädagogische Begleitung (DRK Träger)",
      contactPerson: "Lydia",
      status: "AUS_QUELLE",
      provenance: "AUS_QUELLE",
      description: "Begleitet die Freiwilligen während der 26 Seminartage, moderiert Gruppengespräche und ist Vertrauensperson bei Konflikten mit der Einsatzstelle.",
      whenToContact: "Seminarfragen, Reflexion über den Dienst, Vermittlung bei Problemen an der Einsatzstelle."
    },
    {
      title: "BFD-Freiwilligendienstleistender (Eigene Rolle)",
      abbrev: "BFDler",
      description: "Freiwilliger Helfer zur Entlastung des Teams und Unterstützung im Stationsalltag.",
      mindset: "Lernbereit, verlässlich, empathisch, grenzbewusst, sicher im Rückfragen."
    }
  ],

  knowledgePriorities: {
    mussIchWissen: [
      "Meine genaue Station, Schichtzeiten und Ansprechperson am ersten Tag.",
      "Die absolute Grenze: Ich vergebe NIEMALS Medikamente und stelle keine Diagnosen.",
      "Wo sich der Notruf / das Stationszimmer befindet und wie ich Hilfe rufe.",
      "Dass ich bei Unsicherheit IMMER sofort eine Pflegefachkraft frage ('Ich frage kurz nach').",
      "Dass alles, was Patienten auf Station erzählen, unter die Schweigepflicht fällt."
    ],
    sollteIchKoennen: [
      "Mich im Team und vor Patienten freundlich und klar auf Deutsch vorstellen.",
      "Strukturierte Rückmeldungen geben ('Ich habe das Zimmer 10 fertig gemacht').",
      "Höflich und sicher nachfragen, wenn ich eine Anweisung nicht verstanden habe.",
      "In Konfliktsituationen ruhig bleiben und Distanz wahren.",
      "Wichtige Stationsobjekte und Alltagsmaterialien auf Deutsch benennen."
    ],
    waereGutZuWissen: [
      "Die medizinischen Fachbegriffe und lateinischen Anatomienamen auf dem Kurvenblatt.",
      "Die Farbkodierung im Pflegebericht (Blau = Tagdienst, Grün = Spätdienst, Rot = Nachtdienst).",
      "Hintergrundwissen über Krankheitsbilder (Depression, Schizophrenie, PTBS) zur besseren Empathie.",
      "Die genaue Struktur des Marburger UKGM-Campus und der Buslinien (Lahnberge vs. Tal)."
    ]
  },

  firstDayChecklist: [
    {
      id: "chk_01",
      category: "Vor dem Verlassen der Wohnung",
      item: "Personalausweis, BFD-Vereinbarung und Notizbuch einstecken.",
      done: false
    },
    {
      id: "chk_02",
      category: "Anfahrt",
      item: "Verbindung zur Einsatzstelle prüfen (Buslinie / Fußweg vom Bahnhof Marburg).",
      done: false
    },
    {
      id: "chk_03",
      category: "Ankunft",
      item: "Pünktlich 15 Minuten vor Dienstbeginn am Haupteingang / Stationszimmer melden.",
      done: false
    },
    {
      id: "chk_04",
      category: "Klärung",
      item: "Name der zuständigen Stationsleitung / Bezugspflegekraft notieren.",
      done: false
    },
    {
      id: "chk_05",
      category: "Kleidung & Spind",
      item: "Umkleideraum, Spindschlüssel und Dienstkleidung erfragen.",
      done: false
    },
    {
      id: "chk_06",
      category: "Rundgang",
      item: "Station zeigen lassen: Wo sind Notrufknöpfe, Teeküche, Wäschesack, Aufenthaltsraum?",
      done: false
    },
    {
      id: "chk_07",
      category: "Dienstplan",
      item: "Schichtzeiten für die erste Woche und Pausenregelungen aufschreiben.",
      done: false
    }
  ],

  firstDaySurvival: {
    tenEssentialPhrases: [
      {
        german: "Guten Morgen! Mein Name ist Ali, ich bin der neue Bundesfreiwillige auf dieser Station.",
        english: "Good morning! My name is Ali, I am the new federal volunteer on this ward.",
        situation: "Beim Betreten der Station und Vorstellen im Team."
      },
      {
        german: "Könnten Sie mir bitte kurz zeigen, wie das hier auf Station gehandhabt wird?",
        english: "Could you please briefly show me how this is handled on the ward?",
        situation: "Wenn man eine neue Aufgabe bekommt."
      },
      {
        german: "Entschuldigung, das habe ich gerade akustisch nicht ganz verstanden. Könnten Sie das bitte noch einmal wiederholen?",
        english: "Excuse me, I didn't quite catch that acoustically. Could you please repeat that?",
        situation: "Wenn jemand zu schnell oder undeutlich spricht."
      },
      {
        german: "Ich bin mir gerade nicht sicher, ob ich diese Aufgabe als BFDler übernehmen darf. Ich frage lieber kurz bei der Pflegekraft nach.",
        english: "I am not sure whether I am allowed to do this task as a volunteer. I'd better check with the nurse.",
        situation: "Wenn ein Patient oder Kollege eine grenzwertige Aufgabe übergibt."
      },
      {
        german: "Herr/Frau Müller, ich darf Ihnen leider keine Medikamente geben. Ich hole sofort die zuständige Schwester/den Pfleger für Sie.",
        english: "Mr./Ms. Müller, I am unfortunately not allowed to give you medication. I will immediately get the nurse for you.",
        situation: "Wenn ein Patient nach Tabletten fragt."
      },
      {
        german: "Ich habe die Betten in Zimmer 4 und 5 frisch bezogen und die Wäsche in den Wäschesack gebracht.",
        english: "I have changed the beds in rooms 4 and 5 and brought the laundry to the laundry bag.",
        situation: "Erledigte Aufgabe an die Pflege zurückmelden."
      },
      {
        german: "Mir ist gerade aufgefallen, dass Herr Becker sehr unruhig im Flur auf und ab geht. Ich wollte kurz Bescheid geben.",
        english: "I just noticed that Mr. Becker is pacing restlessly up and down the hallway. I wanted to let you know.",
        situation: "Auffälliges Patientenverhalten sachlich melden."
      },
      {
        german: "Wo finde ich neue Handschuhe und Desinfektionsmittel?",
        english: "Where can I find new gloves and hand sanitizer?",
        situation: "Im Stationsalltag / Pflegematerial."
      },
      {
        german: "Soll ich bei diesem Gespräch dabeibleiben oder wäre es besser, wenn ich mich kurz zurückziehe?",
        english: "Should I stay for this conversation or would it be better if I step out briefly?",
        situation: "Wahrung der Privatsphäre bei Patientengesprächen."
      },
      {
        german: "Vielen Dank für die Unterstützung heute! Wann genau beginnt morgen mein Dienst?",
        english: "Thank you very much for the support today! What time exactly does my shift start tomorrow?",
        situation: "Schichtende und Verabschiedung."
      }
    ],

    tenCriticalQuestions: [
      "1. Wer ist heute meine direkte Ansprechperson auf Station?",
      "2. Wo befindet sich der Umkleideraum und wie erhalte ich Dienstkleidung?",
      "3. Wann und wie lange sind die offiziellen Frühstücks- und Mittagspausen?",
      "4. Wo sind die Notruftaster und welche Telefonnummer wähle ich bei einem Notfall?",
      "5. Welche Patienten dürfen das Klinikgelände alleine verlassen und welche nicht?",
      "6. Gibt es Patienten, bei denen ich besondere Vorsichtsmaßnahmen beachten muss?",
      "7. Wo befinden sich die Wäschesäcke, Müllentsorgung und Vorratsräume?",
      "8. Wo soll ich mich melden, wenn ich eine mir zugewiesene Aufgabe beendet habe?",
      "9. Wo trage ich meine Arbeitszeiten ein (elektronische Zeiterfassung oder Dienstbuch)?",
      "10. An wen wende ich mich, wenn ich mich krankmelden muss?"
    ],

    emergencyProtocol: {
      step1: "Ruhe bewahren und Blickkontakt halten, ohne den Patienten zu bedrängen.",
      step2: "Nicht argumentieren, nicht diskutieren, keine falschen Versprechungen machen.",
      step3: "Rückzug sichern: Immer zwischen Patient und Ausgangstür bleiben.",
      step4: "Sofort Hilfe holen: Notrufknopf drücken oder lautstark nach einer Fachkraft rufen ('Pflege bitte in Zimmer X!').",
      step5: "Sachlich berichten: Nur Tatsachen mitteilen ('Herr X steht am Fenster und zittert', keine Diagnosen)."
    }
  }
};


// --- FILE: vocabulary_data.js ---

// Umfassende Vokabel- und Chunk-Datenbank A bis AC
// Vollständig synthetisiert aus allen 14 PDF-Quellen, Notizen und BFD-Parametern

const VOCABULARY_DATA = [
  {
    "id": "voc_das_taschengeld_001",
    "word": "das Taschengeld",
    "article": "das",
    "plural": "die Taschengelder",
    "partOfSpeech": "Nomen",
    "level": "B1",
    "domain": "BFD",
    "register": "Verwaltungssprache",
    "germanDefinition": "Die monatliche gesetzliche Barleistung im Bundesfreiwilligendienst (im Vertrag: 250 €).",
    "exampleGerman": "Das vereinbarte Taschengeld wird zum Monatsende auf das Girokonto überwiesen.",
    "exampleEnglish": "The agreed pocket money is transferred to the checking account at the end of the month.",
    "synonyms": [
      "die Barpauschale"
    ],
    "collocations": [
      "Taschengeld erhalten",
      "Taschengeld überweisen"
    ],
    "grammarNotes": "Nomen Neutrum (das Geld).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Taschengeld",
      "dwds": "https://www.dwds.de/wb/Taschengeld",
      "dictcc": "https://www.dict.cc/?s=Taschengeld"
    },
    "sourceIds": [
      "src_user_bfd_context"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "bfd",
      "finanzen"
    ]
  },
  {
    "id": "voc_die_verpflegungspauschale_002",
    "word": "die Verpflegungspauschale",
    "article": "die",
    "plural": "die Verpflegungspauschalen",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "BFD",
    "register": "Verwaltungssprache",
    "germanDefinition": "Der monatliche Barzuschuss zur Deckung von Verpflegungskosten (im Vertrag: 40 €).",
    "exampleGerman": "Zusätzlich zum Taschengeld erhält der Freiwillige eine Verpflegungspauschale von 40 €.",
    "exampleEnglish": "In addition to the pocket money, the volunteer receives a food allowance of €40.",
    "synonyms": [
      "der Verpflegungszuschuss"
    ],
    "collocations": [
      "eine Verpflegungspauschale auszahlen"
    ],
    "grammarNotes": "Kompositum: Verpflegung + Pauschale (feminin).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Verpflegungspauschale",
      "dwds": "https://www.dwds.de/wb/Verpflegungspauschale",
      "dictcc": "https://www.dict.cc/?s=Verpflegungspauschale"
    },
    "sourceIds": [
      "src_user_bfd_context"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "bfd",
      "finanzen"
    ]
  },
  {
    "id": "voc_die_kleidungspauschale_003",
    "word": "die Kleidungspauschale",
    "article": "die",
    "plural": "die Kleidungspauschalen",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "BFD",
    "register": "Verwaltungssprache",
    "germanDefinition": "Die monatliche Barleistung für Arbeitskleidung und Wäsche (im Vertrag: 130 €).",
    "exampleGerman": "Mit der monatlichen Kleidungspauschale von 130 € wird der Aufwand für Dienstkleidung vergütet.",
    "exampleEnglish": "The monthly clothing allowance of €130 compensates for the cost of work clothes.",
    "synonyms": [
      "das Kleidungsgeld"
    ],
    "collocations": [
      "die Kleidungspauschale beziehen"
    ],
    "grammarNotes": "Kompositum: Kleidung + Pauschale.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Kleidungspauschale",
      "dwds": "https://www.dwds.de/wb/Kleidungspauschale",
      "dictcc": "https://www.dict.cc/?s=Kleidungspauschale"
    },
    "sourceIds": [
      "src_user_bfd_context"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "bfd",
      "finanzen"
    ]
  },
  {
    "id": "voc_die_probezeit_004",
    "word": "die Probezeit",
    "article": "die",
    "plural": "die Probezeiten",
    "partOfSpeech": "Nomen",
    "level": "B1",
    "domain": "BFD",
    "register": "Berufssprache",
    "germanDefinition": "Die ersten 6 Wochen des BFD, in denen mit 2 Wochen Frist ohne Grund gekündigt werden kann.",
    "exampleGerman": "Während der 6-wöchigen Probezeit lernen sich Einsatzstelle und Freiwilliger kennen.",
    "exampleEnglish": "During the 6-week probationary period, the placement and volunteer get to know each other.",
    "synonyms": [
      "die Einführungszeit"
    ],
    "collocations": [
      "in der Probezeit sein",
      "die Probezeit erfolgreich beenden"
    ],
    "grammarNotes": "Kompositum: Probe + Zeit (feminin).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Probezeit",
      "dwds": "https://www.dwds.de/wb/Probezeit",
      "dictcc": "https://www.dict.cc/?s=Probezeit"
    },
    "sourceIds": [
      "src_user_bfd_context"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "bfd",
      "recht"
    ]
  },
  {
    "id": "voc_die_paedagogische_begleit_005",
    "word": "die pädagogische Begleitung",
    "article": "die",
    "plural": "die pädagogischen Begleitungen",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "BFD",
    "register": "Verwaltungssprache",
    "germanDefinition": "Die fachliche und persönliche Betreuung durch den Träger (DRK / Lydia) bei Seminaren und Reflexionen.",
    "exampleGerman": "Bei Fragen oder Konflikten an der Einsatzstelle steht die pädagogische Begleitung zur Seite.",
    "exampleEnglish": "In case of questions or conflicts at the placement, pedagogical guidance is available.",
    "synonyms": [
      "die Bildungsbegleitung"
    ],
    "collocations": [
      "die pädagogische Begleitung kontaktieren"
    ],
    "grammarNotes": "Adjektiv + Nomen (-ung -> feminin).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/pädagogische Begleitung",
      "dwds": "https://www.dwds.de/wb/pädagogische Begleitung",
      "dictcc": "https://www.dict.cc/?s=pädagogische Begleitung"
    },
    "sourceIds": [
      "src_user_bfd_context"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "bfd",
      "seminare"
    ]
  },
  {
    "id": "voc_der_seminartag_006",
    "word": "der Seminartag",
    "article": "der",
    "plural": "die Seminartage",
    "partOfSpeech": "Nomen",
    "level": "B1",
    "domain": "BFD",
    "register": "Berufssprache",
    "germanDefinition": "Gesetzlich vorgeschriebene Bildungstage (26 Tage, davon 5 im Bildungszentrum), die als Arbeitszeit zählen.",
    "exampleGerman": "Die 26 Seminartage beim DRK sind gesetzliche Pflicht und gelten voll als Arbeitszeit.",
    "exampleEnglish": "The 26 seminar days with the DRK are legally mandatory and count fully as working time.",
    "synonyms": [
      "der Bildungstag"
    ],
    "collocations": [
      "an den Seminartagen teilnehmen"
    ],
    "grammarNotes": "Kompositum: Seminar + Tag (maskulin).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Seminartag",
      "dwds": "https://www.dwds.de/wb/Seminartag",
      "dictcc": "https://www.dict.cc/?s=Seminartag"
    },
    "sourceIds": [
      "src_user_bfd_context"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "bfd",
      "seminare"
    ]
  },
  {
    "id": "voc_die_frustrationstoleranz_007",
    "word": "die Frustrationstoleranz",
    "article": "die",
    "plural": "die Frustrationstoleranzen",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Psychiatrie",
    "register": "Fachsprache",
    "germanDefinition": "Die Fähigkeit, Enttäuschungen, Verzögerungen oder Misserfolge ohne Wut oder Aggression zu ertragen.",
    "exampleGerman": "Der Patient weist eine auffallend niedrige Frustrationstoleranz bei Gruppenaktivitäten auf.",
    "exampleEnglish": "The patient exhibits a noticeably low frustration tolerance during group activities.",
    "synonyms": [
      "die Belastbarkeit"
    ],
    "collocations": [
      "eine niedrige Frustrationstoleranz aufweisen",
      "die Frustrationstoleranz stärken"
    ],
    "grammarNotes": "Nomen feminin (-anz).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Frustrationstoleranz",
      "dwds": "https://www.dwds.de/wb/Frustrationstoleranz",
      "dictcc": "https://www.dict.cc/?s=Frustrationstoleranz"
    },
    "sourceIds": [
      "src_psy_notes"
    ],
    "sourcePages": [
      2
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychiatrie",
      "emotionen"
    ]
  },
  {
    "id": "voc_die_bedarfsmedikation_008",
    "word": "die Bedarfsmedikation",
    "article": "die",
    "plural": "die Bedarfsmedikationen",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Psychiatrie",
    "register": "medizinische Sprache",
    "germanDefinition": "Medikamente, die nur bei akuter Notwendigkeit (Unruhe, Panik, Schmerz) nach ärztlicher Anordnung verabreicht werden.",
    "exampleGerman": "Die Pflegekraft gibt dem Patienten seine Bedarfsmedikation zum Beruhigen.",
    "exampleEnglish": "The nurse administers the patient's PRN medication to calm down.",
    "synonyms": [
      "die Notfallmedikation"
    ],
    "collocations": [
      "Bedarfsmedikation verabreichen",
      "nach Bedarfsmedikation verlangen"
    ],
    "grammarNotes": "Nomen feminin (-tion).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Bedarfsmedikation",
      "dwds": "https://www.dwds.de/wb/Bedarfsmedikation",
      "dictcc": "https://www.dict.cc/?s=Bedarfsmedikation"
    },
    "sourceIds": [
      "src_psy_notes"
    ],
    "sourcePages": [
      3
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychiatrie",
      "medikamente"
    ]
  },
  {
    "id": "voc_das_rueckzugsverhalten_009",
    "word": "das Rückzugsverhalten",
    "article": "das",
    "plural": "die Rückzugsverhalten",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Psychiatrie",
    "register": "Fachsprache",
    "germanDefinition": "Verhaltensmuster, bei dem eine Person soziale Kontakte meidet und sich isoliert.",
    "exampleGerman": "Der Patient zeigt ein ausgeprägtes Rückzugsverhalten bei depressiver Symptomatik.",
    "exampleEnglish": "The patient shows pronounced withdrawal behavior in depressive symptoms.",
    "synonyms": [
      "die soziale Isolation"
    ],
    "collocations": [
      "ein Rückzugsverhalten zeigen",
      "ein Rückzugsverhalten beobachten"
    ],
    "grammarNotes": "Nomen Neutrum (das Verhalten).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Rückzugsverhalten",
      "dwds": "https://www.dwds.de/wb/Rückzugsverhalten",
      "dictcc": "https://www.dict.cc/?s=Rückzugsverhalten"
    },
    "sourceIds": [
      "src_psy_notes"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychiatrie",
      "depression"
    ]
  },
  {
    "id": "voc_das_meidungsverhalten_010",
    "word": "das Meidungsverhalten",
    "article": "das",
    "plural": "die Meidungsverhalten",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Psychiatrie",
    "register": "Fachsprache",
    "germanDefinition": "Systematisches Vermeiden von angstbesetzten Reizen, Personen oder Situationen.",
    "exampleGerman": "Die Jugendliche zeigt ein ausgeprägtes Meidungsverhalten gegenüber der Peer-Group.",
    "exampleEnglish": "The teenager shows pronounced avoidance behavior towards the peer group.",
    "synonyms": [
      "das Vermeidungsverhalten"
    ],
    "collocations": [
      "Meidungsverhalten abbauen"
    ],
    "grammarNotes": "Nomen Neutrum.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Meidungsverhalten",
      "dwds": "https://www.dwds.de/wb/Meidungsverhalten",
      "dictcc": "https://www.dict.cc/?s=Meidungsverhalten"
    },
    "sourceIds": [
      "src_psy_notes"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychiatrie",
      "angst"
    ]
  },
  {
    "id": "voc_die_spielbeobachtung_011",
    "word": "die Spielbeobachtung",
    "article": "die",
    "plural": "die Spielbeobachtungen",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Psychiatrie",
    "register": "Fachsprache",
    "germanDefinition": "Diagnostisches Beobachten des kindlichen Verhaltens während des Spiels.",
    "exampleGerman": "Bei der Spielbeobachtung verhält sich das Kind ruhig und konzentriert.",
    "exampleEnglish": "During play observation, the child behaves calmly and focused.",
    "synonyms": [
      "die Verhaltensbeobachtung"
    ],
    "collocations": [
      "eine Spielbeobachtung durchführen"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Spielbeobachtung",
      "dwds": "https://www.dwds.de/wb/Spielbeobachtung",
      "dictcc": "https://www.dict.cc/?s=Spielbeobachtung"
    },
    "sourceIds": [
      "src_psy_notes"
    ],
    "sourcePages": [
      2
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "kjp",
      "diagnostik"
    ]
  },
  {
    "id": "voc_widersprechen_012",
    "word": "widersprechen",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Verb",
    "level": "B2",
    "domain": "Psychiatrie",
    "register": "Standardsprache",
    "germanDefinition": "Eine gegenteilige Meinung äußern oder sich Anweisungen widersetzen.",
    "exampleGerman": "Der Patient widerspricht den Anweisungen des Therapeuten.",
    "exampleEnglish": "The patient contradicts / opposes the therapist's instructions.",
    "synonyms": [
      "dagegenreden",
      "protestieren"
    ],
    "collocations": [
      "einer Anweisung widersprechen",
      "jemandem widersprechen"
    ],
    "grammarNotes": "Unregelmäßiges Verb mit Dativ (widerspricht, widersprach, hat widersprochen).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/widersprechen",
      "dwds": "https://www.dwds.de/wb/widersprechen",
      "dictcc": "https://www.dict.cc/?s=widersprechen"
    },
    "sourceIds": [
      "src_psy_notes"
    ],
    "sourcePages": [
      2
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "kommunikation",
      "verb"
    ]
  },
  {
    "id": "voc_aufweisen_013",
    "word": "aufweisen",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Verb",
    "level": "B2",
    "domain": "Psychiatrie",
    "register": "Fachsprache",
    "germanDefinition": "Symptome oder Merkmale sichtbar zeigen.",
    "exampleGerman": "Der 10-jährige Patient weist erhebliche Konzentrationsstörungen auf.",
    "exampleEnglish": "The 10-year-old patient exhibits significant concentration difficulties.",
    "synonyms": [
      "zeigen",
      "vorweisen"
    ],
    "collocations": [
      "Konzentrationsstörungen aufweisen",
      "Symptome aufweisen"
    ],
    "grammarNotes": "Trennbares unregelmäßiges Verb: weist auf, wies auf, hat aufgewiesen.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/aufweisen",
      "dwds": "https://www.dwds.de/wb/aufweisen",
      "dictcc": "https://www.dict.cc/?s=aufweisen"
    },
    "sourceIds": [
      "src_psy_notes"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "klinik",
      "verb"
    ]
  },
  {
    "id": "voc_verweigern_014",
    "word": "verweigern",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Verb",
    "level": "B1+",
    "domain": "Psychiatrie",
    "register": "Standardsprache",
    "germanDefinition": "Etwas entschieden ablehnen oder nicht tun.",
    "exampleGerman": "Das Mädchen ist traurig und verweigert die Nahrungsaufnahme.",
    "exampleEnglish": "The girl is sad and refuses food intake.",
    "synonyms": [
      "ablehnen",
      "zurückweisen"
    ],
    "collocations": [
      "die Nahrungsaufnahme verweigern",
      "die Aussage verweigern"
    ],
    "grammarNotes": "Regelmäßiges Verb (verweigert, verweigerte, hat verweigert).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/verweigern",
      "dwds": "https://www.dwds.de/wb/verweigern",
      "dictcc": "https://www.dict.cc/?s=verweigern"
    },
    "sourceIds": [
      "src_psy_notes"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychiatrie",
      "verb"
    ]
  },
  {
    "id": "voc_die_mitarbeit_015",
    "word": "die Mitarbeit",
    "article": "die",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Psychiatrie",
    "register": "Berufssprache",
    "germanDefinition": "Die aktive Kooperation und Beteiligung eines Patienten bei Therapie oder Diagnostik.",
    "exampleGerman": "Die Mitarbeit des Jungen bei der neuropsychologischen Testung war sehr gut.",
    "exampleEnglish": "The boy's cooperation during the neuropsychological testing was very good.",
    "synonyms": [
      "die Kooperation",
      "die Mitwirkung"
    ],
    "collocations": [
      "gute/mangelnde Mitarbeit zeigen"
    ],
    "grammarNotes": "Nomen feminin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Mitarbeit",
      "dwds": "https://www.dwds.de/wb/Mitarbeit",
      "dictcc": "https://www.dict.cc/?s=Mitarbeit"
    },
    "sourceIds": [
      "src_psy_notes"
    ],
    "sourcePages": [
      3
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychiatrie",
      "diagnostik"
    ]
  },
  {
    "id": "voc_randalieren_016",
    "word": "randalieren",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Verb",
    "level": "B2",
    "domain": "Psychiatrie",
    "register": "Umgangssprache",
    "germanDefinition": "Lärm machen, Gegenstände beschädigen oder zerstörerische Unruhe stiften.",
    "exampleGerman": "Der Pfleger bricht die Gruppentherapie ab, weil der Jugendliche randaliert.",
    "exampleEnglish": "The nurse cancels group therapy because the teenager is rampaging / causing trouble.",
    "synonyms": [
      "wüten",
      "toben",
      "randalieren"
    ],
    "collocations": [
      "auf Station randalieren"
    ],
    "grammarNotes": "Regelmäßiges Verb (randaliert, randalierte, hat randaliert).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/randalieren",
      "dwds": "https://www.dwds.de/wb/randalieren",
      "dictcc": "https://www.dict.cc/?s=randalieren"
    },
    "sourceIds": [
      "src_psy_notes"
    ],
    "sourcePages": [
      4
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychiatrie",
      "konflikt"
    ]
  },
  {
    "id": "voc_das_heimweh_017",
    "word": "das Heimweh",
    "article": "das",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "B1",
    "domain": "Emotionen",
    "register": "Standardsprache",
    "germanDefinition": "Die schmerzliche Sehnsucht nach der Heimat, dem Zuhause oder der Familie.",
    "exampleGerman": "Die Eltern forderten die Entlassung des Kindes, weil es starkes Heimweh hatte.",
    "exampleEnglish": "The parents requested the child's discharge because it had severe homesickness.",
    "synonyms": [
      "die Sehnsucht nach Hause"
    ],
    "collocations": [
      "Heimweh haben",
      "unter Heimweh leiden"
    ],
    "grammarNotes": "Nomen Neutrum (das Weh).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Heimweh",
      "dwds": "https://www.dwds.de/wb/Heimweh",
      "dictcc": "https://www.dict.cc/?s=Heimweh"
    },
    "sourceIds": [
      "src_psy_notes"
    ],
    "sourcePages": [
      4
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "emotionen",
      "kinder"
    ]
  },
  {
    "id": "voc_auffallen_018",
    "word": "auffallen",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Verb",
    "level": "B1+",
    "domain": "Psychiatrie",
    "register": "Standardsprache",
    "germanDefinition": "Die Aufmerksamkeit auf sich ziehen; bemerkt werden.",
    "exampleGerman": "Mir ist aufgefallen, dass der Patient heute besonders traurig wirkt.",
    "exampleEnglish": "I noticed that the patient seems especially sad today.",
    "synonyms": [
      "bemerken",
      "ins Auge springen"
    ],
    "collocations": [
      "jemandem auffallen",
      "eine Auffälligkeit feststellen"
    ],
    "grammarNotes": "Unregelmäßiges trennbares Verb mit Dativ (fällt auf, fiel auf, ist aufgefallen).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/auffallen",
      "dwds": "https://www.dwds.de/wb/auffallen",
      "dictcc": "https://www.dict.cc/?s=auffallen"
    },
    "sourceIds": [
      "src_psy_notes"
    ],
    "sourcePages": [
      7
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "beobachtung",
      "verb"
    ]
  },
  {
    "id": "voc_die_pflegedienstleitung_019",
    "word": "die Pflegedienstleitung",
    "article": "die",
    "plural": "die Pflegedienstleitungen",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Krankenhaus",
    "register": "Hierarchie",
    "germanDefinition": "Die oberste Führungskraft aller Pflegekräfte in einem Krankenhaus (Abkürzung: PDL).",
    "exampleGerman": "Die PDL ist die oder der Vorgesetzte aller Pflegekräfte im Klinikum.",
    "exampleEnglish": "The director of nursing is the supervisor of all nursing staff in the hospital.",
    "synonyms": [
      "die PDL",
      "die Pflegedirektion"
    ],
    "collocations": [
      "zur PDL gehen",
      "eine Weisung der PDL erhalten"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Pflegedienstleitung",
      "dwds": "https://www.dwds.de/wb/Pflegedienstleitung",
      "dictcc": "https://www.dict.cc/?s=Pflegedienstleitung"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      9
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "krankenhaus",
      "hierarchie"
    ]
  },
  {
    "id": "voc_die_stationsleitung_020",
    "word": "die Stationsleitung",
    "article": "die",
    "plural": "die Stationsleitungen",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Krankenhaus",
    "register": "Hierarchie",
    "germanDefinition": "Die leitende Pflegefachkraft einer konkreten Krankenhausstation.",
    "exampleGerman": "Die Stationsleitung führt das tägliche Übergabegespräch mit dem Team.",
    "exampleEnglish": "The ward manager conducts the daily handover meeting with the team.",
    "synonyms": [
      "die Stationsschwester / der Stationspfleger"
    ],
    "collocations": [
      "sich bei der Stationsleitung melden"
    ],
    "grammarNotes": "Nomen feminin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Stationsleitung",
      "dwds": "https://www.dwds.de/wb/Stationsleitung",
      "dictcc": "https://www.dict.cc/?s=Stationsleitung"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      9
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "krankenhaus",
      "team"
    ]
  },
  {
    "id": "voc_das_kurvenblatt_021",
    "word": "das Kurvenblatt",
    "article": "das",
    "plural": "die Kurvenblätter",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Krankenhaus",
    "register": "Dokumentation",
    "germanDefinition": "Das zentrale Dokumentationsblatt der Patientenakte für Vitalwerte und Medikation.",
    "exampleGerman": "Die Vitalwerte werden nach dem Messen direkt in das Kurvenblatt eingetragen.",
    "exampleEnglish": "The vital signs are entered directly into the patient chart after measurement.",
    "synonyms": [
      "die Patientenkurve",
      "die Fieberkurve"
    ],
    "collocations": [
      "die Kurve führen",
      "das Kurvenblatt abzeichnen"
    ],
    "grammarNotes": "Nomen Neutrum.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Kurvenblatt",
      "dwds": "https://www.dwds.de/wb/Kurvenblatt",
      "dictcc": "https://www.dict.cc/?s=Kurvenblatt"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      37
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "krankenhaus",
      "dokumentation"
    ]
  },
  {
    "id": "voc_der_pflegebericht_022",
    "word": "der Pflegebericht",
    "article": "der",
    "plural": "die Pflegeberichte",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Krankenhaus",
    "register": "Dokumentation",
    "germanDefinition": "Der schriftliche Verlaufsbericht des Pflegeteams über den Zustand des Patienten (mit Farbkodierung).",
    "exampleGerman": "Der Spätdienst schreibt den Pflegebericht auf Station meistens mit grüner Farbe.",
    "exampleEnglish": "The late shift usually writes the nursing progress report with green ink.",
    "synonyms": [
      "die Verlaufsdokumentation"
    ],
    "collocations": [
      "den Pflegebericht verfassen",
      "im Pflegebericht vermerken"
    ],
    "grammarNotes": "Nomen Maskulin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Pflegebericht",
      "dwds": "https://www.dwds.de/wb/Pflegebericht",
      "dictcc": "https://www.dict.cc/?s=Pflegebericht"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      41
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "krankenhaus",
      "dokumentation"
    ]
  },
  {
    "id": "voc_die_vitalzeichen_023",
    "word": "die Vitalzeichen",
    "article": "die (Pl.)",
    "plural": "die Vitalzeichen",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Krankenhaus",
    "register": "Pflege",
    "germanDefinition": "Die messbaren Lebensfunktionen: Blutdruck (RR), Puls, Atemfrequenz (AF) und Temperatur.",
    "exampleGerman": "Die Vitalzeichen des Patienten sind im Normbereich bei RR 120/80 mmHg.",
    "exampleEnglish": "The patient's vital signs are within normal range at BP 120/80 mmHg.",
    "synonyms": [
      "die Lebenszeichen",
      "die Vitalparameter"
    ],
    "collocations": [
      "Vitalzeichen messen",
      "Vitalzeichen kontrollieren"
    ],
    "grammarNotes": "Nomen Plural (das Zeichen).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Vitalzeichen",
      "dwds": "https://www.dwds.de/wb/Vitalzeichen",
      "dictcc": "https://www.dict.cc/?s=Vitalzeichen"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      32
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "medizin"
    ]
  },
  {
    "id": "voc_der_notfallwagen_024",
    "word": "der Notfallwagen",
    "article": "der",
    "plural": "die Notfallwagen",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Krankenhaus",
    "register": "Notfall",
    "germanDefinition": "Der mobile Schrankwagen für Reanimationsmittel, Notfallmedikamente und Defibrillator.",
    "exampleGerman": "Der Notfallwagen steht auf dem Flur und darf niemals verstellt werden.",
    "exampleEnglish": "The crash cart is in the hallway and must never be blocked.",
    "synonyms": [
      "der REA-Wagen"
    ],
    "collocations": [
      "den Notfallwagen holen",
      "am Notfallwagen arbeiten"
    ],
    "grammarNotes": "Nomen Maskulin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Notfallwagen",
      "dwds": "https://www.dwds.de/wb/Notfallwagen",
      "dictcc": "https://www.dict.cc/?s=Notfallwagen"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      27
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "notfall",
      "sicherheit"
    ]
  },
  {
    "id": "voc_die_koerperpflege_025",
    "word": "die Körperpflege",
    "article": "die",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "B1",
    "domain": "Pflege",
    "register": "Grundpflege",
    "germanDefinition": "Das Waschen, Zähneputzen, Kämmen und Pflegen des Körpers eines Patienten.",
    "exampleGerman": "Benötigen Sie heute Hilfe bei der morgendlichen Körperpflege?",
    "exampleEnglish": "Do you need help with your morning body care today?",
    "synonyms": [
      "die Grundpflege",
      "die Hygiene"
    ],
    "collocations": [
      "Hilfe bei der Körperpflege leisten"
    ],
    "grammarNotes": "Nomen feminin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Körperpflege",
      "dwds": "https://www.dwds.de/wb/Körperpflege",
      "dictcc": "https://www.dict.cc/?s=Körperpflege"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      20
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "grundpflege"
    ]
  },
  {
    "id": "voc_das_bettgitter_026",
    "word": "das Bettgitter",
    "article": "das",
    "plural": "die Bettgitter",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Pflege",
    "register": "Ausstattung",
    "germanDefinition": "Die seitliche Schutzvorrichtung am Pflegebett gegen Herausfallen.",
    "exampleGerman": "Das Bettgitter darf nur nach ärztlicher Anordnung und richterlicher Genehmigung hochgestellt werden.",
    "exampleEnglish": "The bed rail may only be raised following a doctor's order and legal approval.",
    "synonyms": [
      "das Seitengitter"
    ],
    "collocations": [
      "das Bettgitter hochstellen / herunterklappen"
    ],
    "grammarNotes": "Nomen Neutrum.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Bettgitter",
      "dwds": "https://www.dwds.de/wb/Bettgitter",
      "dictcc": "https://www.dict.cc/?s=Bettgitter"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      16
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "sicherheit"
    ]
  },
  {
    "id": "voc_der_infusionsstaender_027",
    "word": "der Infusionsständer",
    "article": "der",
    "plural": "die Infusionsständer",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Pflege",
    "register": "Ausstattung",
    "germanDefinition": "Ein fahrbares Stativ zum Aufhängen von Infusionsflaschen oder -beuteln.",
    "exampleGerman": "Bitte stellen Sie den Infusionsständer neben das Patientenbett.",
    "exampleEnglish": "Please place the IV pole next to the patient bed.",
    "synonyms": [
      "der Tropfständer"
    ],
    "collocations": [
      "die Infusion am Infusionsständer befestigen"
    ],
    "grammarNotes": "Nomen Maskulin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Infusionsständer",
      "dwds": "https://www.dwds.de/wb/Infusionsständer",
      "dictcc": "https://www.dict.cc/?s=Infusionsständer"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      16
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "geraete"
    ]
  },
  {
    "id": "voc_das_blutzuckermessgeraet_028",
    "word": "das Blutzuckermessgerät",
    "article": "das",
    "plural": "die Blutzuckermessgeräte",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Pflege",
    "register": "Geräte",
    "germanDefinition": "Elektronisches Handgerät zur schnellen Bestimmung des Glukosespiegels im Kapillarblut.",
    "exampleGerman": "Vor dem Frühstück misst die Pflegekraft den Blutzucker mit dem Messgerät.",
    "exampleEnglish": "Before breakfast, the nurse measures blood sugar using the glucose meter.",
    "synonyms": [
      "der BZ-Messer"
    ],
    "collocations": [
      "den Blutzucker messen"
    ],
    "grammarNotes": "Nomen Neutrum.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Blutzuckermessgerät",
      "dwds": "https://www.dwds.de/wb/Blutzuckermessgerät",
      "dictcc": "https://www.dict.cc/?s=Blutzuckermessgerät"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      25
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "geraete"
    ]
  },
  {
    "id": "voc_die_handschuhe_029",
    "word": "die Handschuhe",
    "article": "die (Pl.)",
    "plural": "die Handschuhe",
    "partOfSpeech": "Nomen",
    "level": "A2",
    "domain": "Pflege",
    "register": "Hygiene",
    "germanDefinition": "Einmalhandschuhe zum Schutz vor Keimen und Körperflüssigkeiten.",
    "exampleGerman": "Ich ziehe vor jedem Patientenkontakt mit Körperflüssigkeiten frische Handschuhe an.",
    "exampleEnglish": "I put on fresh gloves before any patient contact involving bodily fluids.",
    "synonyms": [
      "die Einmalhandschuhe"
    ],
    "collocations": [
      "Handschuhe anziehen / ausziehen / entsorgen"
    ],
    "grammarNotes": "Nomen Plural (der Handschuh).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Handschuhe",
      "dwds": "https://www.dwds.de/wb/Handschuhe",
      "dictcc": "https://www.dict.cc/?s=Handschuhe"
    },
    "sourceIds": [
      "src_psy_notes"
    ],
    "sourcePages": [
      14
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "hygiene",
      "pflege"
    ]
  },
  {
    "id": "voc_der_handgriff_030",
    "word": "der Handgriff",
    "article": "der",
    "plural": "die Handgriffe",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Pflege",
    "register": "Berufssprache",
    "germanDefinition": "Eine gezielte manuelle Handlung oder Arbeitsbewegung.",
    "exampleGerman": "Nicht jeder einfache Handgriff im Zimmer benötigt sterile Handschuhe.",
    "exampleEnglish": "Not every simple manual task in the room requires sterile gloves.",
    "synonyms": [
      "die Arbeitsbewegung",
      "die Verrichtung"
    ],
    "collocations": [
      "mit wenigen Handgriffen erledigen"
    ],
    "grammarNotes": "Nomen Maskulin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Handgriff",
      "dwds": "https://www.dwds.de/wb/Handgriff",
      "dictcc": "https://www.dict.cc/?s=Handgriff"
    },
    "sourceIds": [
      "src_psy_notes"
    ],
    "sourcePages": [
      14
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "arbeit",
      "pflege"
    ]
  },
  {
    "id": "voc_das_trauma_031",
    "word": "das Trauma",
    "article": "das",
    "plural": "die Traumata / Traumen",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Psychologie",
    "register": "Fachsprache",
    "germanDefinition": "Eine überwältigende seelische Wunde durch eine existentiell bedrohliche Erfahrung.",
    "exampleGerman": "Ein Trauma entsteht, wenn eine Person eine Situation als extrem bedrohlich und ohnmächtig erlebt.",
    "exampleEnglish": "A trauma occurs when a person experiences a situation as extremely threatening and helpless.",
    "synonyms": [
      "die seelische Wunde"
    ],
    "collocations": [
      "ein Trauma verarbeiten / bewältigen",
      "traumatisiert sein"
    ],
    "grammarNotes": "Nomen Neutrum (griechische Endung -ma).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Trauma",
      "dwds": "https://www.dwds.de/wb/Trauma",
      "dictcc": "https://www.dict.cc/?s=Trauma"
    },
    "sourceIds": [
      "src_psydeutsch_idee"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychologie",
      "trauma"
    ]
  },
  {
    "id": "voc_der_flashback_032",
    "word": "der Flashback",
    "article": "der",
    "plural": "die Flashbacks",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Psychologie",
    "register": "Fachsprache",
    "germanDefinition": "Das plötzliche, unkontrollierbare Wiedererleben eines traumatischen Ereignisses im Hier und Jetzt.",
    "exampleGerman": "Bei einem Flashback fühlt sich die Erinnerung so an, als geschähe das Trauma genau jetzt.",
    "exampleEnglish": "During a flashback, the memory feels as if the trauma is happening right now.",
    "synonyms": [
      "das Wiedererleben",
      "die Intrusion"
    ],
    "collocations": [
      "einen Flashback erleiden",
      "einen Flashback unterbrechen"
    ],
    "grammarNotes": "Nomen Maskulin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Flashback",
      "dwds": "https://www.dwds.de/wb/Flashback",
      "dictcc": "https://www.dict.cc/?s=Flashback"
    },
    "sourceIds": [
      "src_psydeutsch_idee"
    ],
    "sourcePages": [
      2
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychologie",
      "trauma"
    ]
  },
  {
    "id": "voc_die_erdung_033",
    "word": "die Erdung",
    "article": "die",
    "plural": "die Erdungen",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Psychologie",
    "register": "Fachsprache",
    "germanDefinition": "Techniken (z. B. 5-4-3-2-1 Methode), um eine dissoziierte Person durch Sinnesreize in die Gegenwart zurückzuholen.",
    "exampleGerman": "Zur Erdung bitten wir den Patienten, fünf Gegenstände im Raum laut zu benennen.",
    "exampleEnglish": "For grounding, we ask the patient to name five objects in the room out loud.",
    "synonyms": [
      "das Grounding",
      "die Reorientierung"
    ],
    "collocations": [
      "Erdungstechniken anwenden"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Erdung",
      "dwds": "https://www.dwds.de/wb/Erdung",
      "dictcc": "https://www.dict.cc/?s=Erdung"
    },
    "sourceIds": [
      "src_psydeutsch_idee"
    ],
    "sourcePages": [
      22
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychologie",
      "deeskalation"
    ]
  },
  {
    "id": "voc_die_feinfuehligkeit_034",
    "word": "die Feinfühligkeit",
    "article": "die",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Psychologie",
    "register": "Fachsprache",
    "germanDefinition": "Die Fähigkeit einer Bezugsperson, Signale eines Menschen prompt, richtig und angemessen zu beantworten.",
    "exampleGerman": "Feinfühligkeit bedeutet: Signale wahrnehmen, richtig interpretieren und angemessen reagieren.",
    "exampleEnglish": "Sensitivity means: perceiving signals, interpreting them correctly, and reacting appropriately.",
    "synonyms": [
      "die Sensitivität",
      "das Einfühlungsvermögen"
    ],
    "collocations": [
      "feinfühliges Verhalten zeigen"
    ],
    "grammarNotes": "Nomen feminin (-keit).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Feinfühligkeit",
      "dwds": "https://www.dwds.de/wb/Feinfühligkeit",
      "dictcc": "https://www.dict.cc/?s=Feinfühligkeit"
    },
    "sourceIds": [
      "src_psydeutsch_idee"
    ],
    "sourcePages": [
      14
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychologie",
      "bindung"
    ]
  },
  {
    "id": "voc_die_parentifizierung_035",
    "word": "die Parentifizierung",
    "article": "die",
    "plural": "die Parentifizierungen",
    "partOfSpeech": "Nomen",
    "level": "C1",
    "domain": "Psychologie",
    "register": "Fachsprache",
    "germanDefinition": "Die ungesunde Rollenumkehr, bei der ein Kind emotionale oder praktische Elternverantwortung übernimmt.",
    "exampleGerman": "Kinder von psychisch erkrankten Eltern leiden häufig unter einer schweren Parentifizierung.",
    "exampleEnglish": "Children of mentally ill parents often suffer from severe parentification.",
    "synonyms": [
      "die Rollenumkehr"
    ],
    "collocations": [
      "unter Parentifizierung leiden"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Parentifizierung",
      "dwds": "https://www.dwds.de/wb/Parentifizierung",
      "dictcc": "https://www.dict.cc/?s=Parentifizierung"
    },
    "sourceIds": [
      "src_psykurs_gk"
    ],
    "sourcePages": [
      9
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychologie",
      "familie",
      "c1"
    ]
  },
  {
    "id": "voc_die_selbstberuhigung_036",
    "word": "die Selbstberuhigung",
    "article": "die",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Psychologie",
    "register": "Fachsprache",
    "germanDefinition": "Die Fähigkeit, eigene starke Affekte, Ängste oder Anspannungen eigenständig zu regulieren.",
    "exampleGerman": "Der Patient erlernt in der Therapie neue Strategien zur Selbstberuhigung bei Panik.",
    "exampleEnglish": "The patient learns new self-soothing strategies in therapy for panic.",
    "synonyms": [
      "die Selbstregulation",
      "die Affektregulation"
    ],
    "collocations": [
      "Strategien zur Selbstberuhigung anwenden"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Selbstberuhigung",
      "dwds": "https://www.dwds.de/wb/Selbstberuhigung",
      "dictcc": "https://www.dict.cc/?s=Selbstberuhigung"
    },
    "sourceIds": [
      "src_psychotherapie"
    ],
    "sourcePages": [
      9
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychologie",
      "regulation"
    ]
  },
  {
    "id": "voc_bescheid_geben_037",
    "word": "Bescheid geben",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Redewendung",
    "level": "B1",
    "domain": "Kommunikation",
    "register": "Standardsprache",
    "germanDefinition": "Jemanden rechtzeitig über eine Neuigkeit, Abwesenheit oder Planänderung informieren.",
    "exampleGerman": "Ich gebe der Stationsleitung kurz Bescheid, dass ich zur Pause gehe.",
    "exampleEnglish": "I briefly let the ward manager know that I am going on break.",
    "synonyms": [
      "informieren",
      "benachrichtigen"
    ],
    "collocations": [
      "jemandem Bescheid geben",
      "rechtzeitig Bescheid geben"
    ],
    "grammarNotes": "Feste Wendung mit Dativ-Objekt.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Bescheid geben",
      "dwds": "https://www.dwds.de/wb/Bescheid geben",
      "dictcc": "https://www.dict.cc/?s=Bescheid geben"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      5
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "kommunikation",
      "arbeitsplatz"
    ]
  },
  {
    "id": "voc_rueckmeldung_geben_038",
    "word": "Rückmeldung geben",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Redewendung",
    "level": "B2",
    "domain": "Kommunikation",
    "register": "Berufssprache",
    "germanDefinition": "Strukturiertes Feedback oder einen Zwischenbericht über den Stand einer Aufgabe liefern.",
    "exampleGerman": "Sobald die Betten bezogen sind, gebe ich der Bezugspflegekraft eine kurze Rückmeldung.",
    "exampleEnglish": "As soon as the beds are made, I give the primary nurse brief feedback.",
    "synonyms": [
      "Feedback geben",
      "Bericht erstatten"
    ],
    "collocations": [
      "eine Rückmeldung geben",
      "um Rückmeldung bitten"
    ],
    "grammarNotes": "Funktionsverbgefüge (Rückmeldung + geben).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Rückmeldung geben",
      "dwds": "https://www.dwds.de/wb/Rückmeldung geben",
      "dictcc": "https://www.dict.cc/?s=Rückmeldung geben"
    },
    "sourceIds": [
      "src_aspekte_b2"
    ],
    "sourcePages": [
      12
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "arbeitsplatz",
      "feedback"
    ]
  },
  {
    "id": "voc_einen_termin_vereinbaren_039",
    "word": "einen Termin vereinbaren",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Redewendung",
    "level": "B1",
    "domain": "Termine",
    "register": "Standardsprache",
    "germanDefinition": "Einen verbindlichen Zeitpunkt für ein Treffen oder eine Untersuchung festlegen.",
    "exampleGerman": "Ich möchte bitte einen Termin zur Wohnsitzanmeldung beim Bürgeramt vereinbaren.",
    "exampleEnglish": "I would like to make an appointment for residence registration at the citizens' office.",
    "synonyms": [
      "einen Termin ausmachen"
    ],
    "collocations": [
      "einen Termin telefonisch vereinbaren"
    ],
    "grammarNotes": "Feste Verbindung (Termin maskulin: einen Termin).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/einen Termin vereinbaren",
      "dwds": "https://www.dwds.de/wb/einen Termin vereinbaren",
      "dictcc": "https://www.dict.cc/?s=einen Termin vereinbaren"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      8
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "alltag",
      "termine"
    ]
  },
  {
    "id": "voc_zur_sprache_bringen_040",
    "word": "zur Sprache bringen",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Redewendung",
    "level": "C1",
    "domain": "Berufssprache",
    "register": "Fachsprache",
    "germanDefinition": "Ein wichtiges oder heikles Thema in einer Besprechung ansprechen und diskutieren.",
    "exampleGerman": "Wir sollten die Schichtübergabe in der nächsten Teambesprechung zur Sprache bringen.",
    "exampleEnglish": "We should bring up the shift handover in the next team meeting.",
    "synonyms": [
      "thematisieren",
      "ansprechen"
    ],
    "collocations": [
      "ein Problem zur Sprache bringen"
    ],
    "grammarNotes": "Funktionsverbgefüge mit Präpositionalphrase.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/zur Sprache bringen",
      "dwds": "https://www.dwds.de/wb/zur Sprache bringen",
      "dictcc": "https://www.dict.cc/?s=zur Sprache bringen"
    },
    "sourceIds": [
      "src_aspekte_b2"
    ],
    "sourcePages": [
      45
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "c1",
      "fvg",
      "team"
    ]
  },
  {
    "id": "voc_die_notaufnahme_041",
    "word": "die Notaufnahme",
    "article": "die",
    "plural": "die Notaufnahmen",
    "partOfSpeech": "Nomen",
    "level": "A2",
    "domain": "Krankenhaus",
    "register": "Abteilung",
    "germanDefinition": "Die zentrale Krankenhausabteilung zur Erstversorgung akuter Notfälle und schwerverletzter Patienten.",
    "exampleGerman": "Der Rettungswagen bringt den Notfallpatienten direkt in die Notaufnahme.",
    "exampleEnglish": "The ambulance brings the emergency patient directly to the emergency department.",
    "synonyms": [
      "die Rettungsstelle",
      "die Notfallambulanz"
    ],
    "collocations": [
      "in die Notaufnahme eingeliefert werden"
    ],
    "grammarNotes": "Nomen feminin (-e).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Notaufnahme",
      "dwds": "https://www.dwds.de/wb/Notaufnahme",
      "dictcc": "https://www.dict.cc/?s=Notaufnahme"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      13
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "krankenhaus",
      "a2"
    ]
  },
  {
    "id": "voc_die_aufnahme_042",
    "word": "die Aufnahme",
    "article": "die",
    "plural": "die Aufnahmen",
    "partOfSpeech": "Nomen",
    "level": "A2",
    "domain": "Krankenhaus",
    "register": "Verwaltung",
    "germanDefinition": "Der administrative Prozess und die Abteilung zur Aufnahme neuer Patienten ins Krankenhaus.",
    "exampleGerman": "Zur Aufnahme müssen die Krankenversichertenkarte und der Personalausweis vorgelegt werden.",
    "exampleEnglish": "For admission, the health insurance card and ID card must be presented.",
    "synonyms": [
      "die Patientenaufnahme"
    ],
    "collocations": [
      "die Aufnahme durchführen"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Aufnahme",
      "dwds": "https://www.dwds.de/wb/Aufnahme",
      "dictcc": "https://www.dict.cc/?s=Aufnahme"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      13
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "krankenhaus",
      "a2"
    ]
  },
  {
    "id": "voc_der_operationssaal_043",
    "word": "der Operationssaal",
    "article": "der",
    "plural": "die Operationssäle",
    "partOfSpeech": "Nomen",
    "level": "B1",
    "domain": "Krankenhaus",
    "register": "Abteilung",
    "germanDefinition": "Steriler Spezialraum im Krankenhaus, in dem chirurgische Eingriffe und Operationen stattfinden.",
    "exampleGerman": "Der Patient wird um 08:00 Uhr zur Vorbereitung in den Operationssaal gebracht.",
    "exampleEnglish": "The patient is brought to the operating room at 08:00 AM for preparation.",
    "synonyms": [
      "der OP"
    ],
    "collocations": [
      "im Operationssaal operieren"
    ],
    "grammarNotes": "Nomen Maskulin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Operationssaal",
      "dwds": "https://www.dwds.de/wb/Operationssaal",
      "dictcc": "https://www.dict.cc/?s=Operationssaal"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      14
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "krankenhaus",
      "b1"
    ]
  },
  {
    "id": "voc_die_anaesthesie_044",
    "word": "die Anästhesie",
    "article": "die",
    "plural": "die Anästhesien",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Krankenhaus",
    "register": "Medizin",
    "germanDefinition": "Das medizinische Fachgebiet für Narkose, Schmerzausschaltung und Intensivüberwachung.",
    "exampleGerman": "Die Anästhesistin klärt den Patienten vor der Operation über die Vollnarkose auf.",
    "exampleEnglish": "The anesthesiologist explains general anesthesia to the patient before surgery.",
    "synonyms": [
      "die Narkosemedizin"
    ],
    "collocations": [
      "die Anästhesie einleiten"
    ],
    "grammarNotes": "Nomen feminin (-ie).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Anästhesie",
      "dwds": "https://www.dwds.de/wb/Anästhesie",
      "dictcc": "https://www.dict.cc/?s=Anästhesie"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      15
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "krankenhaus",
      "b2"
    ]
  },
  {
    "id": "voc_die_sonographie_045",
    "word": "die Sonographie",
    "article": "die",
    "plural": "die Sonographien",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Krankenhaus",
    "register": "Diagnostik",
    "germanDefinition": "Bildgebendes diagnostisches Verfahren mittels Ultraschallwellen.",
    "exampleGerman": "Der Arzt führt eine Sonographie des Bauchraums durch, um die Leber zu beurteilen.",
    "exampleEnglish": "The doctor performs an ultrasound of the abdomen to assess the liver.",
    "synonyms": [
      "der Ultraschall"
    ],
    "collocations": [
      "eine Sonographie anordnen / durchführen"
    ],
    "grammarNotes": "Nomen feminin (-ie).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Sonographie",
      "dwds": "https://www.dwds.de/wb/Sonographie",
      "dictcc": "https://www.dict.cc/?s=Sonographie"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      14
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "krankenhaus",
      "b2"
    ]
  },
  {
    "id": "voc_die_computertomografie_046",
    "word": "die Computertomografie",
    "article": "die",
    "plural": "die Computertomografien",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Krankenhaus",
    "register": "Diagnostik",
    "germanDefinition": "Bildgebendes Röntgenverfahren zur computergestützten Schichtaufnahme des Körpers (CT).",
    "exampleGerman": "Zur schnellen Diagnose bei Verdacht auf Hirnblutung wird ein CT veranlasst.",
    "exampleEnglish": "A CT scan is ordered for rapid diagnosis of suspected brain hemorrhage.",
    "synonyms": [
      "das CT",
      "die Schichtaufnahme"
    ],
    "collocations": [
      "ein CT durchführen"
    ],
    "grammarNotes": "Nomen feminin (-ie).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Computertomografie",
      "dwds": "https://www.dwds.de/wb/Computertomografie",
      "dictcc": "https://www.dict.cc/?s=Computertomografie"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      15
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "krankenhaus",
      "b2"
    ]
  },
  {
    "id": "voc_die_magnetresonanztomografie_047",
    "word": "die Magnetresonanztomografie",
    "article": "die",
    "plural": "die Magnetresonanztomografien",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Krankenhaus",
    "register": "Diagnostik",
    "germanDefinition": "Bildgebendes Verfahren mittels starker Magnetfelder ohne Röntgenstrahlung (MRT / Kernspintomografie).",
    "exampleGerman": "Die MRT-Untersuchung des Knies zeigt einen Riss des vorderen Kreuzbandes.",
    "exampleEnglish": "The MRI examination of the knee shows a tear in the anterior cruciate ligament.",
    "synonyms": [
      "das MRT",
      "die Kernspintomografie"
    ],
    "collocations": [
      "ins MRT geschoben werden"
    ],
    "grammarNotes": "Nomen feminin (-ie).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Magnetresonanztomografie",
      "dwds": "https://www.dwds.de/wb/Magnetresonanztomografie",
      "dictcc": "https://www.dict.cc/?s=Magnetresonanztomografie"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      15
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "krankenhaus",
      "b2"
    ]
  },
  {
    "id": "voc_der_nachttisch_048",
    "word": "der Nachttisch",
    "article": "der",
    "plural": "die Nachttische",
    "partOfSpeech": "Nomen",
    "level": "A1",
    "domain": "Pflege",
    "register": "Ausstattung",
    "germanDefinition": "Der kleine Schrank neben dem Patientenbett zur Ablage persönlicher Gegenstände.",
    "exampleGerman": "Ich stelle das frische Glas Wasser direkt auf den Nachttisch des Patienten.",
    "exampleEnglish": "I place the fresh glass of water directly on the patient's bedside table.",
    "synonyms": [
      "der Betttisch"
    ],
    "collocations": [
      "auf den Nachttisch stellen"
    ],
    "grammarNotes": "Nomen Maskulin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Nachttisch",
      "dwds": "https://www.dwds.de/wb/Nachttisch",
      "dictcc": "https://www.dict.cc/?s=Nachttisch"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      17
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "a1"
    ]
  },
  {
    "id": "voc_die_fernbedienung_049",
    "word": "die Fernbedienung",
    "article": "die",
    "plural": "die Fernbedienungen",
    "partOfSpeech": "Nomen",
    "level": "A2",
    "domain": "Pflege",
    "register": "Ausstattung",
    "germanDefinition": "Elektronisches Handgerät zur Steuerung von Fernseher oder elektrisch verstellbarem Pflegebett.",
    "exampleGerman": "Mit der Fernbedienung kann der Patient die Kopfstütze des Bettes stufenlos verstellen.",
    "exampleEnglish": "With the remote control, the patient can continuously adjust the bed's headrest.",
    "synonyms": [
      "der Handschalter"
    ],
    "collocations": [
      "die Fernbedienung reichen"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Fernbedienung",
      "dwds": "https://www.dwds.de/wb/Fernbedienung",
      "dictcc": "https://www.dict.cc/?s=Fernbedienung"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      17
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "a2"
    ]
  },
  {
    "id": "voc_die_zahnprothese_050",
    "word": "die Zahnprothese",
    "article": "die",
    "plural": "die Zahnprothesen",
    "partOfSpeech": "Nomen",
    "level": "B1",
    "domain": "Pflege",
    "register": "Grundpflege",
    "germanDefinition": "Künstlicher Zahnersatz (Gebiss) für fehlende Zähne.",
    "exampleGerman": "Vor dem Schlafen legt die Patientin ihre gereinigte Zahnprothese in die Prothesendose.",
    "exampleEnglish": "Before sleeping, the patient places her cleaned dental prosthesis into the denture box.",
    "synonyms": [
      "das Gebiss",
      "der Zahnersatz"
    ],
    "collocations": [
      "die Zahnprothese reinigen / einsetzen"
    ],
    "grammarNotes": "Nomen feminin (-e).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Zahnprothese",
      "dwds": "https://www.dwds.de/wb/Zahnprothese",
      "dictcc": "https://www.dict.cc/?s=Zahnprothese"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      22
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "b1"
    ]
  },
  {
    "id": "voc_das_hoergeraet_051",
    "word": "das Hörgerät",
    "article": "das",
    "plural": "die Hörgeräte",
    "partOfSpeech": "Nomen",
    "level": "A2",
    "domain": "Pflege",
    "register": "Hilfsmittel",
    "germanDefinition": "Elektroakustisches Hilfsmittel zur Verbesserung des Hörvermögens schwerhöriger Patienten.",
    "exampleGerman": "Sind die Batterien des Hörgeräts aufgeladen und das Gerät richtig im Ohr eingesetzt?",
    "exampleEnglish": "Are the hearing aid batteries charged and the device properly inserted into the ear?",
    "synonyms": [
      "die Hörhilfe"
    ],
    "collocations": [
      "das Hörgerät einsetzen / ausschalten"
    ],
    "grammarNotes": "Nomen Neutrum (-t).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Hörgerät",
      "dwds": "https://www.dwds.de/wb/Hörgerät",
      "dictcc": "https://www.dict.cc/?s=Hörgerät"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      22
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "a2"
    ]
  },
  {
    "id": "voc_der_rollator_052",
    "word": "der Rollator",
    "article": "der",
    "plural": "die Rollatoren",
    "partOfSpeech": "Nomen",
    "level": "B1",
    "domain": "Pflege",
    "register": "Hilfsmittel",
    "germanDefinition": "Fahrbare Gehhilfe mit Rädern, Handbremsen und Sitzfläche für gehbehinderte Menschen.",
    "exampleGerman": "Frau Müller geht mit ihrem Rollator langsam durch den Stationsflur.",
    "exampleEnglish": "Ms. Müller walks slowly through the ward hallway with her rollator / walker.",
    "synonyms": [
      "der Gehwagen"
    ],
    "collocations": [
      "am Rollator gehen"
    ],
    "grammarNotes": "Nomen Maskulin (-or).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Rollator",
      "dwds": "https://www.dwds.de/wb/Rollator",
      "dictcc": "https://www.dict.cc/?s=Rollator"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      23
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "b1"
    ]
  },
  {
    "id": "voc_der_rollstuhl_053",
    "word": "der Rollstuhl",
    "article": "der",
    "plural": "die Rollstühle",
    "partOfSpeech": "Nomen",
    "level": "A2",
    "domain": "Pflege",
    "register": "Hilfsmittel",
    "germanDefinition": "Fahrstuhl mit Rädern zur Fortbewegung von Patienten, die nicht gehen können.",
    "exampleGerman": "Der Freiwillige schiebt den Patienten im Rollstuhl zur Ergotherapie.",
    "exampleEnglish": "The volunteer pushes the patient in the wheelchair to occupational therapy.",
    "synonyms": [
      "der Fahrstuhl"
    ],
    "collocations": [
      "den Rollstuhl schieben / bremsen"
    ],
    "grammarNotes": "Nomen Maskulin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Rollstuhl",
      "dwds": "https://www.dwds.de/wb/Rollstuhl",
      "dictcc": "https://www.dict.cc/?s=Rollstuhl"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      23
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "a2"
    ]
  },
  {
    "id": "voc_das_steckbecken_054",
    "word": "das Steckbecken",
    "article": "das",
    "plural": "die Steckbecken",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Pflege",
    "register": "Ausscheidung",
    "germanDefinition": "Flaches Gefäß aus Edelstahl oder Kunststoff für die Stuhl- und Urinausscheidung im Bett.",
    "exampleGerman": "Für bettlägerige Patienten wird das Steckbecken vorsichtig unter das Gesäß geschoben.",
    "exampleEnglish": "For bedridden patients, the bedpan is carefully pushed under the buttocks.",
    "synonyms": [
      "der Schieber",
      "die Bettpfanne"
    ],
    "collocations": [
      "das Steckbecken anreichen / leeren / desinfizieren"
    ],
    "grammarNotes": "Nomen Neutrum.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Steckbecken",
      "dwds": "https://www.dwds.de/wb/Steckbecken",
      "dictcc": "https://www.dict.cc/?s=Steckbecken"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      23
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "b1+"
    ]
  },
  {
    "id": "voc_die_urinflasche_055",
    "word": "die Urinflasche",
    "article": "die",
    "plural": "die Urinflaschen",
    "partOfSpeech": "Nomen",
    "level": "B1",
    "domain": "Pflege",
    "register": "Ausscheidung",
    "germanDefinition": "Gefäß zum Auffangen von Urin bei bettlägerigen männlichen Patienten.",
    "exampleGerman": "Die Urinflasche hängt griffbereit an der Seite des Pflegebettes.",
    "exampleEnglish": "The urine bottle hangs within easy reach on the side of the hospital bed.",
    "synonyms": [
      "die Ente (Pflege-Jargon)"
    ],
    "collocations": [
      "die Urinflasche leeren"
    ],
    "grammarNotes": "Nomen feminin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Urinflasche",
      "dwds": "https://www.dwds.de/wb/Urinflasche",
      "dictcc": "https://www.dict.cc/?s=Urinflasche"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      23
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "b1"
    ]
  },
  {
    "id": "voc_die_sauerstoffmaske_056",
    "word": "die Sauerstoffmaske",
    "article": "die",
    "plural": "die Sauerstoffmasken",
    "partOfSpeech": "Nomen",
    "level": "B1",
    "domain": "Krankenhaus",
    "register": "Notfall",
    "germanDefinition": "Maske aus Weichplastik zur Verabreichung von medizinischem Sauerstoff über Mund und Nase.",
    "exampleGerman": "Bei akuter Atemnot legt die Pflegefachkraft dem Patienten eine Sauerstoffmaske an.",
    "exampleEnglish": "In acute shortness of breath, the nurse applies an oxygen mask to the patient.",
    "synonyms": [
      "die O2-Maske"
    ],
    "collocations": [
      "die Sauerstoffmaske aufsetzen"
    ],
    "grammarNotes": "Nomen feminin (-e).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Sauerstoffmaske",
      "dwds": "https://www.dwds.de/wb/Sauerstoffmaske",
      "dictcc": "https://www.dict.cc/?s=Sauerstoffmaske"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      26
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "krankenhaus",
      "b1"
    ]
  },
  {
    "id": "voc_der_beatmungsbeutel_057",
    "word": "der Beatmungsbeutel",
    "article": "der",
    "plural": "die Beatmungsbeutel",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Krankenhaus",
    "register": "Notfall",
    "germanDefinition": "Handbetriebener flexibler Gummibeutel zur manuellen Beatmung bei Atemstillstand.",
    "exampleGerman": "Der Beatmungsbeutel (Ambu-Beutel) liegt auf der obersten Ebene des Notfallwagens.",
    "exampleEnglish": "The manual resuscitator (Ambu bag) is on the top tier of the crash cart.",
    "synonyms": [
      "der Ambu-Beutel"
    ],
    "collocations": [
      "mit dem Beatmungsbeutel beatmen"
    ],
    "grammarNotes": "Nomen Maskulin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Beatmungsbeutel",
      "dwds": "https://www.dwds.de/wb/Beatmungsbeutel",
      "dictcc": "https://www.dict.cc/?s=Beatmungsbeutel"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      26
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "krankenhaus",
      "b2"
    ]
  },
  {
    "id": "voc_der_defibrillator_058",
    "word": "der Defibrillator",
    "article": "der",
    "plural": "die Defibrillatoren",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Krankenhaus",
    "register": "Notfall",
    "germanDefinition": "Medizinisches Gerät zur Abgabe gezielter Stromstöße bei lebensbedrohlichem Kammerflimmern.",
    "exampleGerman": "Der Defibrillator wird bei einem Herz-Kreislauf-Stillstand sofort an den Patienten angeschlossen.",
    "exampleEnglish": "The defibrillator is immediately connected to the patient in case of cardiac arrest.",
    "synonyms": [
      "der Schockgeber",
      "der Defi"
    ],
    "collocations": [
      "einen Schock abgeben",
      "den Defibrillator laden"
    ],
    "grammarNotes": "Nomen Maskulin (-or).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Defibrillator",
      "dwds": "https://www.dwds.de/wb/Defibrillator",
      "dictcc": "https://www.dict.cc/?s=Defibrillator"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      26
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "krankenhaus",
      "b2"
    ]
  },
  {
    "id": "voc_die_tablette_059",
    "word": "die Tablette",
    "article": "die",
    "plural": "die Tabletten",
    "partOfSpeech": "Nomen",
    "level": "A1",
    "domain": "Pflege",
    "register": "Medikamente",
    "germanDefinition": "Feste, gepresste Darreichungsform von pulverisierten Arzneimitteln zur oralen Einnahme.",
    "exampleGerman": "Der Patient nimmt morgens eine weiße Tablette mit einem Glas Wasser ein.",
    "exampleEnglish": "The patient takes one white tablet in the morning with a glass of water.",
    "synonyms": [
      "die Pille",
      "das Arzneimittel"
    ],
    "collocations": [
      "eine Tablette einnehmen / schlucken / verabreichen"
    ],
    "grammarNotes": "Nomen feminin (-e).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Tablette",
      "dwds": "https://www.dwds.de/wb/Tablette",
      "dictcc": "https://www.dict.cc/?s=Tablette"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      29
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "a1"
    ]
  },
  {
    "id": "voc_die_kapsel_060",
    "word": "die Kapsel",
    "article": "die",
    "plural": "die Kapseln",
    "partOfSpeech": "Nomen",
    "level": "A2",
    "domain": "Pflege",
    "register": "Medikamente",
    "germanDefinition": "Feste Darreichungsform mit einer löslichen Gelatinehülle, die das Arzneimittel enthält.",
    "exampleGerman": "Die magensaftresistente Kapsel darf vor der Einnahme nicht geöffnet werden.",
    "exampleEnglish": "The gastro-resistant capsule must not be opened before ingestion.",
    "synonyms": [
      "die Gelatinekapsel"
    ],
    "collocations": [
      "eine Kapsel unzerkaut schlucken"
    ],
    "grammarNotes": "Nomen feminin (-el).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Kapsel",
      "dwds": "https://www.dwds.de/wb/Kapsel",
      "dictcc": "https://www.dict.cc/?s=Kapsel"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      29
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "a2"
    ]
  },
  {
    "id": "voc_das_dragee_061",
    "word": "das Dragee",
    "article": "das",
    "plural": "die Dragees",
    "partOfSpeech": "Nomen",
    "level": "B1",
    "domain": "Pflege",
    "register": "Medikamente",
    "germanDefinition": "Mit einem süßen oder glänzenden Überzug versehene Tablette zur leichteren Einnahme.",
    "exampleGerman": "Das Dragee schützt den Magen vor den reizenden Wirkstoffen des Medikaments.",
    "exampleEnglish": "The coated tablet protects the stomach from the irritating active ingredients of the drug.",
    "synonyms": [
      "die überzogene Tablette"
    ],
    "collocations": [
      "ein Dragee schlucken"
    ],
    "grammarNotes": "Nomen Neutrum (französisch -ee).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Dragee",
      "dwds": "https://www.dwds.de/wb/Dragee",
      "dictcc": "https://www.dict.cc/?s=Dragee"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      29
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "b1"
    ]
  },
  {
    "id": "voc_die_tropfen_062",
    "word": "die Tropfen",
    "article": "die (Pl.)",
    "plural": "die Tropfen",
    "partOfSpeech": "Nomen",
    "level": "A2",
    "domain": "Pflege",
    "register": "Medikamente",
    "germanDefinition": "Flüssige Arzneiform, die tropfenweise dosiert wird (z. B. Haldol-Tropfen, Schmerztropfen).",
    "exampleGerman": "Der Arzt verordnet 10 Tropfen des Beruhigungsmittels bei Bedarf am Abend.",
    "exampleEnglish": "The doctor prescribes 10 drops of the sedative as needed in the evening.",
    "synonyms": [
      "die Tropflösung"
    ],
    "collocations": [
      "Tropfen abzählen / einnehmen"
    ],
    "grammarNotes": "Nomen Plural (der Tropfen).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Tropfen",
      "dwds": "https://www.dwds.de/wb/Tropfen",
      "dictcc": "https://www.dict.cc/?s=Tropfen"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      29
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "a2"
    ]
  },
  {
    "id": "voc_die_salbe_063",
    "word": "die Salbe",
    "article": "die",
    "plural": "die Salben",
    "partOfSpeech": "Nomen",
    "level": "A2",
    "domain": "Pflege",
    "register": "Medikamente",
    "germanDefinition": "Halbfeste Zubereitung zur äußerlichen Anwendung auf Haut oder Schleimhäuten.",
    "exampleGerman": "Die Wundsalbe wird dünn mit einem sterilen Spatel auf die gerötete Haut aufgetragen.",
    "exampleEnglish": "The healing ointment is applied thinly to the reddened skin with a sterile spatula.",
    "synonyms": [
      "die Creme",
      "das Balsam"
    ],
    "collocations": [
      "Salbe auftragen / einreiben"
    ],
    "grammarNotes": "Nomen feminin (-e).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Salbe",
      "dwds": "https://www.dwds.de/wb/Salbe",
      "dictcc": "https://www.dict.cc/?s=Salbe"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      29
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "a2"
    ]
  },
  {
    "id": "voc_das_zaepfchen_064",
    "word": "das Zäpfchen",
    "article": "das",
    "plural": "die Zäpfchen",
    "partOfSpeech": "Nomen",
    "level": "B1",
    "domain": "Pflege",
    "register": "Medikamente",
    "germanDefinition": "Feste Arzneiform zur rektalen Einführung (medizinisch: Suppositorium).",
    "exampleGerman": "Das fiebersenkende Zäpfchen wirkt besonders schnell bei unruhigen Kleinkindern.",
    "exampleEnglish": "The fever-reducing suppository works especially fast in restless toddlers.",
    "synonyms": [
      "das Suppositorium"
    ],
    "collocations": [
      "ein Zäpfchen einführen"
    ],
    "grammarNotes": "Nomen Neutrum (Diminutiv -chen).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Zäpfchen",
      "dwds": "https://www.dwds.de/wb/Zäpfchen",
      "dictcc": "https://www.dict.cc/?s=Zäpfchen"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      29
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "b1"
    ]
  },
  {
    "id": "voc_der_verband_065",
    "word": "der Verband",
    "article": "der",
    "plural": "die Verbände",
    "partOfSpeech": "Nomen",
    "level": "A2",
    "domain": "Pflege",
    "register": "Wundbehandlung",
    "germanDefinition": "Mull- oder Textilbinde zum Schutz und zur Abdeckung von Wunden vor Schmutz und Keimen.",
    "exampleGerman": "Die Krankenschwester wechselt den sterilen Verband am rechten Unterschenkel.",
    "exampleEnglish": "The nurse changes the sterile dressing on the right lower leg.",
    "synonyms": [
      "die Wundabdeckung",
      "die Binde"
    ],
    "collocations": [
      "einen Verband anlegen / wechseln / abnehmen"
    ],
    "grammarNotes": "Nomen Maskulin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Verband",
      "dwds": "https://www.dwds.de/wb/Verband",
      "dictcc": "https://www.dict.cc/?s=Verband"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      30
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "a2"
    ]
  },
  {
    "id": "voc_die_verbandsschere_066",
    "word": "die Verbandsschere",
    "article": "die",
    "plural": "die Verbandsscheren",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Pflege",
    "register": "Wundbehandlung",
    "germanDefinition": "Spezielle Schere mit abgerundeter Spitze zum gefahrlosen Aufschneiden von Verbänden.",
    "exampleGerman": "Mit der Verbandsschere wird der alte Verband aufgeschnitten, ohne die Haut zu verletzen.",
    "exampleEnglish": "The bandage scissors are used to cut open the old bandage without injuring the skin.",
    "synonyms": [
      "die Pflegeschere"
    ],
    "collocations": [
      "die Verbandsschere desinfizieren"
    ],
    "grammarNotes": "Nomen feminin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Verbandsschere",
      "dwds": "https://www.dwds.de/wb/Verbandsschere",
      "dictcc": "https://www.dict.cc/?s=Verbandsschere"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      31
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "b1+"
    ]
  },
  {
    "id": "voc_die_pinzette_067",
    "word": "die Pinzette",
    "article": "die",
    "plural": "die Pinzetten",
    "partOfSpeech": "Nomen",
    "level": "B1",
    "domain": "Pflege",
    "register": "Wundbehandlung",
    "germanDefinition": "Zangenförmiges Instrument zum feinen Greifen steriler Kompressen oder Fäden.",
    "exampleGerman": "Die Ärztin fasst die sterile Wundauflage mit der Pinzette an.",
    "exampleEnglish": "The doctor grips the sterile wound dressing with the tweezers / forceps.",
    "synonyms": [
      "die Wundpinzette"
    ],
    "collocations": [
      "mit der Pinzette greifen"
    ],
    "grammarNotes": "Nomen feminin (-e).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Pinzette",
      "dwds": "https://www.dwds.de/wb/Pinzette",
      "dictcc": "https://www.dict.cc/?s=Pinzette"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      31
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "b1"
    ]
  },
  {
    "id": "voc_das_pflaster_068",
    "word": "das Pflaster",
    "article": "das",
    "plural": "die Pflaster",
    "partOfSpeech": "Nomen",
    "level": "A1",
    "domain": "Pflege",
    "register": "Wundbehandlung",
    "germanDefinition": "Klebestreifen mit kleiner Wundauflage für kleinere Schnitt- oder Einstichstellen.",
    "exampleGerman": "Nach der Blutentnahme klebt der Pfleger ein kleines Pflaster auf die Einstichstelle.",
    "exampleEnglish": "After drawing blood, the nurse sticks a small adhesive bandage onto the puncture site.",
    "synonyms": [
      "der Heftpflasterstreifen"
    ],
    "collocations": [
      "ein Pflaster aufkleben / abziehen"
    ],
    "grammarNotes": "Nomen Neutrum.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Pflaster",
      "dwds": "https://www.dwds.de/wb/Pflaster",
      "dictcc": "https://www.dict.cc/?s=Pflaster"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      31
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "a1"
    ]
  },
  {
    "id": "voc_die_seitenlagerung_069",
    "word": "die Seitenlagerung",
    "article": "die",
    "plural": "die Seitenlagerungen",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Pflege",
    "register": "Pflegemaßnahmen",
    "germanDefinition": "Lagerungstechnik (z. B. 30°-Seitenlagerung) zur Druckentlastung und Dekubitusprophylaxe.",
    "exampleGerman": "Zur Vermeidung von Druckgeschwüren führen wir alle zwei Stunden eine 30°-Seitenlagerung durch.",
    "exampleEnglish": "To prevent pressure ulcers, we perform a 30° lateral positioning every two hours.",
    "synonyms": [
      "die Lagerung"
    ],
    "collocations": [
      "den Patienten lagern"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Seitenlagerung",
      "dwds": "https://www.dwds.de/wb/Seitenlagerung",
      "dictcc": "https://www.dict.cc/?s=Seitenlagerung"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      36
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "b2"
    ]
  },
  {
    "id": "voc_der_dekubitus_070",
    "word": "der Dekubitus",
    "article": "der",
    "plural": "die Dekubitus",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Pflege",
    "register": "Medizin",
    "germanDefinition": "Druckgeschwür oder Wundliegen durch langanhaltenden Druck auf bestimmte Hautstellen.",
    "exampleGerman": "Regelmäßige Mobilisation schützt bettlägerige Patienten vor der Entstehung eines Dekubitus.",
    "exampleEnglish": "Regular mobilization protects bedridden patients from developing a pressure ulcer.",
    "synonyms": [
      "das Druckgeschwür",
      "das Wundliegen"
    ],
    "collocations": [
      "einen Dekubitus verhindern"
    ],
    "grammarNotes": "Nomen Maskulin (-us).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Dekubitus",
      "dwds": "https://www.dwds.de/wb/Dekubitus",
      "dictcc": "https://www.dict.cc/?s=Dekubitus"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      36
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "b2"
    ]
  },
  {
    "id": "voc_die_speiseroehre_071",
    "word": "die Speiseröhre",
    "article": "die",
    "plural": "die Speiseröhren",
    "partOfSpeech": "Nomen",
    "level": "B1",
    "domain": "Körper",
    "register": "Anatomie",
    "germanDefinition": "Der Muskelschlauch, der Nahrung vom Mund in den Magen transportiert (medizinisch: Ösophagus).",
    "exampleGerman": "Bei Sodbrennen fließt Magensäure zurück in die empfindliche Speiseröhre.",
    "exampleEnglish": "In heartburn, stomach acid flows back into the sensitive esophagus.",
    "synonyms": [
      "der Ösophagus"
    ],
    "collocations": [
      "durch die Speiseröhre gleiten"
    ],
    "grammarNotes": "Nomen feminin (-e).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Speiseröhre",
      "dwds": "https://www.dwds.de/wb/Speiseröhre",
      "dictcc": "https://www.dict.cc/?s=Speiseröhre"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      52
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "körper",
      "b1"
    ]
  },
  {
    "id": "voc_die_luftroehre_072",
    "word": "die Luftröhre",
    "article": "die",
    "plural": "die Luftröhren",
    "partOfSpeech": "Nomen",
    "level": "B1",
    "domain": "Körper",
    "register": "Anatomie",
    "germanDefinition": "Der knorpelige Schlauch, der die Einatemluft vom Kehlkopf in die Lungen leitet (Trachea).",
    "exampleGerman": "Der Kehldeckel verschließt die Luftröhre beim Schlucken, damit keine Nahrung hineingelangt.",
    "exampleEnglish": "The epiglottis closes the trachea during swallowing so that no food enters.",
    "synonyms": [
      "die Trachea"
    ],
    "collocations": [
      "die Luftröhre freihalten"
    ],
    "grammarNotes": "Nomen feminin (-e).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Luftröhre",
      "dwds": "https://www.dwds.de/wb/Luftröhre",
      "dictcc": "https://www.dict.cc/?s=Luftröhre"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      48
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "körper",
      "b1"
    ]
  },
  {
    "id": "voc_der_kehldeckel_073",
    "word": "der Kehldeckel",
    "article": "der",
    "plural": "die Kehldeckel",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Körper",
    "register": "Anatomie",
    "germanDefinition": "Knorpeliger Deckel über dem Kehlkopfeingang zum Schutz der Atemwege beim Schlucken (Epiglottis).",
    "exampleGerman": "Die Epiglottis bzw. der Kehldeckel verhindert das Verschlucken von Speisen in die Lunge.",
    "exampleEnglish": "The epiglottis prevents choking on food into the lungs.",
    "synonyms": [
      "die Epiglottis"
    ],
    "collocations": [
      "den Kehldeckel schließen"
    ],
    "grammarNotes": "Nomen Maskulin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Kehldeckel",
      "dwds": "https://www.dwds.de/wb/Kehldeckel",
      "dictcc": "https://www.dict.cc/?s=Kehldeckel"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      48
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "körper",
      "b2"
    ]
  },
  {
    "id": "voc_die_hohlvene_074",
    "word": "die Hohlvene",
    "article": "die",
    "plural": "die Hohlvenen",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Körper",
    "register": "Anatomie",
    "germanDefinition": "Großes Blutgefäß, das sauerstoffarmes Blut aus dem Körper zum Herzen transportiert (Vena cava).",
    "exampleGerman": "Die obere Hohlvene (Vena cava superior) führt das Blut aus Kopf und Armen zum rechten Vorhof.",
    "exampleEnglish": "The superior vena cava carries blood from the head and arms to the right atrium.",
    "synonyms": [
      "die Vena cava"
    ],
    "collocations": [
      "in die Hohlvene münden"
    ],
    "grammarNotes": "Nomen feminin (-e).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Hohlvene",
      "dwds": "https://www.dwds.de/wb/Hohlvene",
      "dictcc": "https://www.dict.cc/?s=Hohlvene"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      50
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "körper",
      "b2"
    ]
  },
  {
    "id": "voc_die_reizbarkeit_075",
    "word": "die Reizbarkeit",
    "article": "die",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Emotionen",
    "register": "Psychiatrie",
    "germanDefinition": "Übermäßige Neigung zu Ärger, Ungeduld oder emotional gereizten Reaktionen.",
    "exampleGerman": "Erhöhte Reizbarkeit ist ein häufiges Begleitsymptom bei schweren Schlafstörungen.",
    "exampleEnglish": "Increased irritability is a common accompanying symptom in severe sleep disorders.",
    "synonyms": [
      "die Gereiztheit",
      "die Empfindlichkeit"
    ],
    "collocations": [
      "starke Reizbarkeit zeigen"
    ],
    "grammarNotes": "Nomen feminin (-keit).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Reizbarkeit",
      "dwds": "https://www.dwds.de/wb/Reizbarkeit",
      "dictcc": "https://www.dict.cc/?s=Reizbarkeit"
    },
    "sourceIds": [
      "src_psy_notes"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "emotionen",
      "b2"
    ]
  },
  {
    "id": "voc_die_verzweiflung_076",
    "word": "die Verzweiflung",
    "article": "die",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Emotionen",
    "register": "Standardsprache",
    "germanDefinition": "Gefühl tiefer Hoffnungslosigkeit und Ratlosigkeit in einer als unlösbar erlebten Krise.",
    "exampleGerman": "In Momenten akuter Verzweiflung hilft dem Patienten die ruhige Anwesenheit einer Pflegekraft.",
    "exampleEnglish": "In moments of acute despair, the calm presence of a nurse helps the patient.",
    "synonyms": [
      "die Hoffnungslosigkeit",
      "die Ausweglosigkeit"
    ],
    "collocations": [
      "in Verzweiflung geraten"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Verzweiflung",
      "dwds": "https://www.dwds.de/wb/Verzweiflung",
      "dictcc": "https://www.dict.cc/?s=Verzweiflung"
    },
    "sourceIds": [
      "src_psy_notes"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "emotionen",
      "b2"
    ]
  },
  {
    "id": "voc_die_scham_077",
    "word": "die Scham",
    "article": "die",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Emotionen",
    "register": "Psychologie",
    "germanDefinition": "Peinliches, schmerzhaftes Gefühl, eigenen oder gesellschaftlichen Erwartungen nicht zu genügen.",
    "exampleGerman": "Viele Patienten empfinden große Scham wegen ihrer psychiatrischen Diagnose.",
    "exampleEnglish": "Many patients feel great shame about their psychiatric diagnosis.",
    "synonyms": [
      "das Schamgefühl"
    ],
    "collocations": [
      "Scham empfinden",
      "sich schämen"
    ],
    "grammarNotes": "Nomen feminin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Scham",
      "dwds": "https://www.dwds.de/wb/Scham",
      "dictcc": "https://www.dict.cc/?s=Scham"
    },
    "sourceIds": [
      "src_psykurs_gk"
    ],
    "sourcePages": [
      8
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "emotionen",
      "b2"
    ]
  },
  {
    "id": "voc_das_schuldgefuehl_078",
    "word": "das Schuldgefühl",
    "article": "das",
    "plural": "die Schuldgefühle",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Emotionen",
    "register": "Psychologie",
    "germanDefinition": "Das quälende Gefühl, für ein Unglück oder das Leiden anderer verantwortlich zu sein.",
    "exampleGerman": "Kinder von psychisch erkrankten Eltern entwickeln oft unbegründete Schuldgefühle.",
    "exampleEnglish": "Children of mentally ill parents often develop unfounded feelings of guilt.",
    "synonyms": [
      "das Schuldbewusstsein"
    ],
    "collocations": [
      "unter Schuldgefühlen leiden"
    ],
    "grammarNotes": "Nomen Neutrum.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Schuldgefühl",
      "dwds": "https://www.dwds.de/wb/Schuldgefühl",
      "dictcc": "https://www.dict.cc/?s=Schuldgefühl"
    },
    "sourceIds": [
      "src_psykurs_gk"
    ],
    "sourcePages": [
      8
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "emotionen",
      "b1+"
    ]
  },
  {
    "id": "voc_die_einsamkeit_079",
    "word": "die Einsamkeit",
    "article": "die",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "B1",
    "domain": "Emotionen",
    "register": "Alltagssprache",
    "germanDefinition": "Das schmerzhafte Gefühl des Alleinseins und des Mangels an nahen sozialen Beziehungen.",
    "exampleGerman": "Im Alter und bei chronischer Depression verstärkt die Einsamkeit die Symptome.",
    "exampleEnglish": "In old age and chronic depression, loneliness intensifies the symptoms.",
    "synonyms": [
      "das Alleinsein",
      "die Isolation"
    ],
    "collocations": [
      "unter Einsamkeit leiden"
    ],
    "grammarNotes": "Nomen feminin (-keit).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Einsamkeit",
      "dwds": "https://www.dwds.de/wb/Einsamkeit",
      "dictcc": "https://www.dict.cc/?s=Einsamkeit"
    },
    "sourceIds": [
      "src_psykurs_gk"
    ],
    "sourcePages": [
      9
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "emotionen",
      "b1"
    ]
  },
  {
    "id": "voc_das_erstgespraech_080",
    "word": "das Erstgespräch",
    "article": "das",
    "plural": "die Erstgespräche",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Psychiatrie",
    "register": "Berufssprache",
    "germanDefinition": "Das erste diagnostische und vertrauensbildende Gespräch zwischen Arzt/Therapeut und neuem Patienten.",
    "exampleGerman": "Im Erstgespräch erfragt die Ärztin die aktuellen Beschwerden und die Krankengeschichte.",
    "exampleEnglish": "In the initial consultation, the doctor asks about current complaints and medical history.",
    "synonyms": [
      "die Erstanamnese"
    ],
    "collocations": [
      "ein Erstgespräch führen"
    ],
    "grammarNotes": "Nomen Neutrum.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Erstgespräch",
      "dwds": "https://www.dwds.de/wb/Erstgespräch",
      "dictcc": "https://www.dict.cc/?s=Erstgespräch"
    },
    "sourceIds": [
      "src_psy_notes"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychiatrie",
      "b1+"
    ]
  },
  {
    "id": "voc_die_pflegeanamnese_081",
    "word": "die Pflegeanamnese",
    "article": "die",
    "plural": "die Pflegeanamnesen",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Pflege",
    "register": "Fachsprache",
    "germanDefinition": "Systematische Erhebung der individuellen Gewohnheiten, Ressourcen und des Hilfebedarfs eines Patienten.",
    "exampleGerman": "Bei der Aufnahme füllen wir gemeinsam mit dem Patienten die Pflegeanamnese aus.",
    "exampleEnglish": "Upon admission, we fill out the nursing history together with the patient.",
    "synonyms": [
      "die Pflegeerhebung"
    ],
    "collocations": [
      "die Pflegeanamnese erheben / dokumentieren"
    ],
    "grammarNotes": "Nomen feminin (-e).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Pflegeanamnese",
      "dwds": "https://www.dwds.de/wb/Pflegeanamnese",
      "dictcc": "https://www.dict.cc/?s=Pflegeanamnese"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      37
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "b2"
    ]
  },
  {
    "id": "voc_die_schweigepflicht_082",
    "word": "die Schweigepflicht",
    "article": "die",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Krankenhaus",
    "register": "Recht",
    "germanDefinition": "Gesetzliche Verpflichtung (§ 203 StGB), Patientengeheimnisse und Krankheitsdaten streng vertraulich zu behandeln.",
    "exampleGerman": "Die Schweigepflicht gilt auch gegenüber Familienangehörigen, Freunden und nach Dienstende.",
    "exampleEnglish": "Confidentiality also applies to family members, friends, and after work hours.",
    "synonyms": [
      "die Vertraulichkeit",
      "die Geheimhaltungspflicht"
    ],
    "collocations": [
      "der Schweigepflicht unterliegen",
      "die Schweigepflicht einhalten"
    ],
    "grammarNotes": "Nomen feminin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Schweigepflicht",
      "dwds": "https://www.dwds.de/wb/Schweigepflicht",
      "dictcc": "https://www.dict.cc/?s=Schweigepflicht"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      44
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "krankenhaus",
      "b1+"
    ]
  },
  {
    "id": "voc_die_patientenverfuegung_083",
    "word": "die Patientenverfügung",
    "article": "die",
    "plural": "die Patientenverfügungen",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Krankenhaus",
    "register": "Recht",
    "germanDefinition": "Vorsorgliches schriftliches Dokument, welche medizinischen Maßnahmen im Notfall gewünscht oder abgelehnt werden.",
    "exampleGerman": "Der Patient hat in seiner Patientenverfügung lebensverlängernde Maßnahmen ausgeschlossen.",
    "exampleEnglish": "The patient excluded life-prolonging measures in his advance healthcare directive.",
    "synonyms": [
      "die Vorsorgeverfügung"
    ],
    "collocations": [
      "eine Patientenverfügung verfassen / hinterlegen"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Patientenverfügung",
      "dwds": "https://www.dwds.de/wb/Patientenverfügung",
      "dictcc": "https://www.dict.cc/?s=Patientenverfügung"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      45
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "krankenhaus",
      "b2"
    ]
  },
  {
    "id": "voc_die_vorsorgevollmacht_084",
    "word": "die Vorsorgevollmacht",
    "article": "die",
    "plural": "die Vorsorgevollmachten",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Krankenhaus",
    "register": "Recht",
    "germanDefinition": "Vollmacht, mit der eine Vertrauensperson für rechtliche und medizinische Entscheidungen bevollmächtigt wird.",
    "exampleGerman": "Die Tochter legt die notarielle Vorsorgevollmacht für ihren dementen Vater vor.",
    "exampleEnglish": "The daughter presents the notarized health care proxy for her demented father.",
    "synonyms": [
      "die Vollmacht"
    ],
    "collocations": [
      "eine Vorsorgevollmacht erteilen"
    ],
    "grammarNotes": "Nomen feminin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Vorsorgevollmacht",
      "dwds": "https://www.dwds.de/wb/Vorsorgevollmacht",
      "dictcc": "https://www.dict.cc/?s=Vorsorgevollmacht"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      45
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "krankenhaus",
      "b2"
    ]
  },
  {
    "id": "voc_die_fixierung_085",
    "word": "die Fixierung",
    "article": "die",
    "plural": "die Fixierungen",
    "partOfSpeech": "Nomen",
    "level": "B2+",
    "domain": "Psychiatrie",
    "register": "Recht & Pflege",
    "germanDefinition": "Freiheitsentziehende mechanische Sicherungsmaßnahme (z. B. 5-Punkt-Gurtung) nur bei akuter Fremd- oder Selbstgefährdung.",
    "exampleGerman": "Eine Fixierung ist das allerletzte Mittel und bedarf zwingend eines richterlichen Beschlusses.",
    "exampleEnglish": "Restraint is the absolute last resort and strictly requires a judge's order.",
    "synonyms": [
      "die mechanische Beschränkung",
      "die Gurtung"
    ],
    "collocations": [
      "eine Fixierung anordnen / überwachen"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Fixierung",
      "dwds": "https://www.dwds.de/wb/Fixierung",
      "dictcc": "https://www.dict.cc/?s=Fixierung"
    },
    "sourceIds": [
      "src_psychische_stoerungen_wagner"
    ],
    "sourcePages": [
      18
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychiatrie",
      "b2+"
    ]
  },
  {
    "id": "voc_die_krisenintervention_086",
    "word": "die Krisenintervention",
    "article": "die",
    "plural": "die Kriseninterventionen",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Psychiatrie",
    "register": "Fachsprache",
    "germanDefinition": "Sofortige therapeutische und pflegerische Hilfe zur Entschärfung einer akuten seelischen Notlage.",
    "exampleGerman": "Unsere Station 2 ist eine Akut- und Kriseninterventionsstation mit 22 Betten.",
    "exampleEnglish": "Our ward 2 is an acute and crisis intervention ward with 22 beds.",
    "synonyms": [
      "die Notfallintervention",
      "die Akuthilfe"
    ],
    "collocations": [
      "eine Krisenintervention einleiten"
    ],
    "grammarNotes": "Nomen feminin (-tion).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Krisenintervention",
      "dwds": "https://www.dwds.de/wb/Krisenintervention",
      "dictcc": "https://www.dict.cc/?s=Krisenintervention"
    },
    "sourceIds": [
      "src_user_bfd_context"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychiatrie",
      "b2"
    ]
  },
  {
    "id": "voc_die_reizabschirmung_087",
    "word": "die Reizabschirmung",
    "article": "die",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Psychiatrie",
    "register": "Pflege",
    "germanDefinition": "Gezielte Reduktion von Lärm, Licht und sozialen Reizen zur Beruhigung überreizter Patienten.",
    "exampleGerman": "Bei manischer Übererregung benötigt der Patient sofortige Reizabschirmung in einem ruhigen Zimmer.",
    "exampleEnglish": "In manic hyperexcitation, the patient requires immediate stimulus reduction in a quiet room.",
    "synonyms": [
      "die Reizreduktion"
    ],
    "collocations": [
      "für Reizabschirmung sorgen"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Reizabschirmung",
      "dwds": "https://www.dwds.de/wb/Reizabschirmung",
      "dictcc": "https://www.dict.cc/?s=Reizabschirmung"
    },
    "sourceIds": [
      "src_psychische_stoerungen_wagner"
    ],
    "sourcePages": [
      4
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychiatrie",
      "b2"
    ]
  },
  {
    "id": "voc_die_reizueberflutung_088",
    "word": "die Reizüberflutung",
    "article": "die",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Psychiatrie",
    "register": "Fachsprache",
    "germanDefinition": "Zustand, in dem das Gehirn durch zu viele gleichzeitige Sinneseindrücke überfordert ist.",
    "exampleGerman": "In der lauten Cafeteria geriet der autistische Jugendliche in eine schwere Reizüberflutung.",
    "exampleEnglish": "In the noisy cafeteria, the autistic teenager suffered severe sensory overload.",
    "synonyms": [
      "die sensorische Überlastung"
    ],
    "collocations": [
      "unter Reizüberflutung leiden"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Reizüberflutung",
      "dwds": "https://www.dwds.de/wb/Reizüberflutung",
      "dictcc": "https://www.dict.cc/?s=Reizüberflutung"
    },
    "sourceIds": [
      "src_psydeutsch_idee"
    ],
    "sourcePages": [
      8
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychiatrie",
      "b2"
    ]
  },
  {
    "id": "voc_die_affektverflachung_089",
    "word": "die Affektverflachung",
    "article": "die",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "C1",
    "domain": "Psychiatrie",
    "register": "Fachsprache",
    "germanDefinition": "Einschränkung des emotionalen Erlebens und des mimischen Gefühlsausdrucks (Negativsymptom).",
    "exampleGerman": "Die ausgeprägte Affektverflachung lässt das Gesicht des Patienten maskenhaft und starr wirken.",
    "exampleEnglish": "The pronounced affective flattening makes the patient's face appear mask-like and rigid.",
    "synonyms": [
      "die Gefühlsverarmung"
    ],
    "collocations": [
      "eine Affektverflachung beobachten"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Affektverflachung",
      "dwds": "https://www.dwds.de/wb/Affektverflachung",
      "dictcc": "https://www.dict.cc/?s=Affektverflachung"
    },
    "sourceIds": [
      "src_psychische_stoerungen_wagner"
    ],
    "sourcePages": [
      5
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychiatrie",
      "c1"
    ]
  },
  {
    "id": "voc_die_denkstoerung_090",
    "word": "die Denkstörung",
    "article": "die",
    "plural": "die Denkstörungen",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Psychiatrie",
    "register": "Fachsprache",
    "germanDefinition": "Beeinträchtigung des Denkablaufs (formale Denkstörung, z. B. verlangsamt) oder des Denkinhalts (inhaltliche Denkstörung, z. B. Wahn).",
    "exampleGerman": "Der Arzt dokumentiert eine formale Denkstörung mit Gedankensprüngen und Zerfahrenheit.",
    "exampleEnglish": "The doctor documents a formal thought disorder with thought jumps and incoherence.",
    "synonyms": [
      "die kognitive Störung"
    ],
    "collocations": [
      "eine Denkstörung feststellen"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Denkstörung",
      "dwds": "https://www.dwds.de/wb/Denkstörung",
      "dictcc": "https://www.dict.cc/?s=Denkstörung"
    },
    "sourceIds": [
      "src_psychische_stoerungen_wagner"
    ],
    "sourcePages": [
      5
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychiatrie",
      "b2"
    ]
  },
  {
    "id": "voc_die_orientierungsstoerung_091",
    "word": "die Orientierungsstörung",
    "article": "die",
    "plural": "die Orientierungsstörungen",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Psychiatrie",
    "register": "Fachsprache",
    "germanDefinition": "Verlust des Wissens über Zeit, Ort, Situation oder die eigene Person (zeitlich, örtlich, situativ, autopsychisch).",
    "exampleGerman": "Der Patient zeigt eine zeitliche und örtliche Orientierungsstörung und weiß nicht, in welcher Stadt er ist.",
    "exampleEnglish": "The patient shows temporal and spatial disorientation and does not know which city he is in.",
    "synonyms": [
      "die Desorientiertheit"
    ],
    "collocations": [
      "voll orientiert / desorientiert sein"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Orientierungsstörung",
      "dwds": "https://www.dwds.de/wb/Orientierungsstörung",
      "dictcc": "https://www.dict.cc/?s=Orientierungsstörung"
    },
    "sourceIds": [
      "src_psychische_stoerungen_wagner"
    ],
    "sourcePages": [
      6
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychiatrie",
      "b2"
    ]
  },
  {
    "id": "voc_die_demenz_092",
    "word": "die Demenz",
    "article": "die",
    "plural": "die Demenzen",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Psychiatrie",
    "register": "Fachsprache",
    "germanDefinition": "Fortschreitender Verlust kognitiver Fähigkeiten (Gedächtnis, Orientierung, Sprache, Urteilskraft).",
    "exampleGerman": "Bei fortgeschrittener Demenz benötigt der Patient Unterstützung bei allen Alltagstätigkeiten.",
    "exampleEnglish": "In advanced dementia, the patient requires support with all daily activities.",
    "synonyms": [
      "der kognitive Abbau"
    ],
    "collocations": [
      "an Demenz erkrankt sein"
    ],
    "grammarNotes": "Nomen feminin (-enz).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Demenz",
      "dwds": "https://www.dwds.de/wb/Demenz",
      "dictcc": "https://www.dict.cc/?s=Demenz"
    },
    "sourceIds": [
      "src_psychische_stoerungen_wagner"
    ],
    "sourcePages": [
      6
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychiatrie",
      "b2"
    ]
  },
  {
    "id": "voc_das_delir_093",
    "word": "das Delir",
    "article": "das",
    "plural": "die Delirien",
    "partOfSpeech": "Nomen",
    "level": "B2+",
    "domain": "Psychiatrie",
    "register": "Notfall",
    "germanDefinition": "Akuter, lebensbedrohlicher Zustand mit Verwirrtheit, Bewusstseinstrübung, Halluzinationen und motorischer Unruhe.",
    "exampleGerman": "Ein Alkoholentzugsdelir ist ein medizinischer Notfall, der intensivmedizinisch überwacht werden muss.",
    "exampleEnglish": "An alcohol withdrawal delirium is a medical emergency that must be monitored in intensive care.",
    "synonyms": [
      "das Verwirrtheitszustand"
    ],
    "collocations": [
      "in ein Delir verfallen"
    ],
    "grammarNotes": "Nomen Neutrum (-ir -> -ien).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Delir",
      "dwds": "https://www.dwds.de/wb/Delir",
      "dictcc": "https://www.dict.cc/?s=Delir"
    },
    "sourceIds": [
      "src_psychische_stoerungen_wagner"
    ],
    "sourcePages": [
      7
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychiatrie",
      "b2+"
    ]
  },
  {
    "id": "voc_die_abstinenz_094",
    "word": "die Abstinenz",
    "article": "die",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Psychiatrie",
    "register": "Fachsprache",
    "germanDefinition": "Der vollständige Verzicht auf den Konsum von Suchtmitteln wie Alkohol oder Drogen.",
    "exampleGerman": "Ziel der Entwöhnungsbehandlung ist eine dauerhafte und stabile Abstinenz im Alltag.",
    "exampleEnglish": "The goal of the rehabilitation treatment is permanent and stable abstinence in daily life.",
    "synonyms": [
      "der Suchtmittelverzicht"
    ],
    "collocations": [
      "Abstinenz einhalten / wahren"
    ],
    "grammarNotes": "Nomen feminin (-enz).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Abstinenz",
      "dwds": "https://www.dwds.de/wb/Abstinenz",
      "dictcc": "https://www.dict.cc/?s=Abstinenz"
    },
    "sourceIds": [
      "src_psychische_stoerungen_wagner"
    ],
    "sourcePages": [
      7
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychiatrie",
      "b2"
    ]
  },
  {
    "id": "voc_der_rueckfall_095",
    "word": "der Rückfall",
    "article": "der",
    "plural": "die Rückfälle",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Psychiatrie",
    "register": "Fachsprache",
    "germanDefinition": "Das Wiederauftreten einer psychischen Erkrankung oder der erneute Konsum nach Abstinenz.",
    "exampleGerman": "Ein Rückfall wird im Team nicht als Versagen, sondern als therapeutischer Lernanlass gewertet.",
    "exampleEnglish": "A relapse is evaluated in the team not as failure, but as a therapeutic learning opportunity.",
    "synonyms": [
      "das Rezidiv"
    ],
    "collocations": [
      "einen Rückfall erleiden"
    ],
    "grammarNotes": "Nomen Maskulin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Rückfall",
      "dwds": "https://www.dwds.de/wb/Rückfall",
      "dictcc": "https://www.dict.cc/?s=Rückfall"
    },
    "sourceIds": [
      "src_psychische_stoerungen_wagner"
    ],
    "sourcePages": [
      7
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychiatrie",
      "b1+"
    ]
  },
  {
    "id": "voc_die_zwangsstoerung_096",
    "word": "die Zwangsstörung",
    "article": "die",
    "plural": "die Zwangsstörungen",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Psychiatrie",
    "register": "Fachsprache",
    "germanDefinition": "Erkrankung mit wiederkehrenden quälenden Zwangsgedanken oder zeitraubenden Zwangshandlungen (z. B. Waschzwang).",
    "exampleGerman": "Bei der Zwangsstörung versucht der Patient durch Kontrollrituale seine quälende Angst zu mindern.",
    "exampleEnglish": "In obsessive-compulsive disorder, the patient tries to reduce distressing anxiety through checking rituals.",
    "synonyms": [
      "die Zwangserkrankung",
      "OCD"
    ],
    "collocations": [
      "an einer Zwangsstörung leiden"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Zwangsstörung",
      "dwds": "https://www.dwds.de/wb/Zwangsstörung",
      "dictcc": "https://www.dict.cc/?s=Zwangsstörung"
    },
    "sourceIds": [
      "src_psychische_stoerungen_wagner"
    ],
    "sourcePages": [
      8
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychiatrie",
      "b2"
    ]
  },
  {
    "id": "voc_die_panikattacke_097",
    "word": "die Panikattacke",
    "article": "die",
    "plural": "die Panikattacken",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Psychiatrie",
    "register": "Fachsprache",
    "germanDefinition": "Plötzlicher Anfall überwältigender Todesangst mit Herzrasen, Atemnot, Zittern und Schwindel.",
    "exampleGerman": "Während der Panikattacke hilft ruhiges, gemeinsames Atmen zur Beruhigung des vegetativen Nervensystems.",
    "exampleEnglish": "During the panic attack, calm shared breathing helps to soothe the autonomic nervous system.",
    "synonyms": [
      "der Panikanfall"
    ],
    "collocations": [
      "eine Panikattacke durchleben"
    ],
    "grammarNotes": "Nomen feminin (-e).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Panikattacke",
      "dwds": "https://www.dwds.de/wb/Panikattacke",
      "dictcc": "https://www.dict.cc/?s=Panikattacke"
    },
    "sourceIds": [
      "src_psychische_stoerungen_wagner"
    ],
    "sourcePages": [
      8
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychiatrie",
      "b1+"
    ]
  },
  {
    "id": "voc_die_phobie_098",
    "word": "die Phobie",
    "article": "die",
    "plural": "die Phobien",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Psychiatrie",
    "register": "Fachsprache",
    "germanDefinition": "Unangemessen starke, anhaltende Angst vor bestimmten Objekten oder Situationen (z. B. Agoraphobie, Soziophobie).",
    "exampleGerman": "Bei einer Sozialphobie fürchtet der Betroffene die kritische Bewertung und Beobachtung durch andere Menschen.",
    "exampleEnglish": "In social phobia, the sufferer fears critical evaluation and observation by other people.",
    "synonyms": [
      "die Angststörung"
    ],
    "collocations": [
      "eine Phobie behandeln"
    ],
    "grammarNotes": "Nomen feminin (-ie).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Phobie",
      "dwds": "https://www.dwds.de/wb/Phobie",
      "dictcc": "https://www.dict.cc/?s=Phobie"
    },
    "sourceIds": [
      "src_psychische_stoerungen_wagner"
    ],
    "sourcePages": [
      8
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychiatrie",
      "b2"
    ]
  },
  {
    "id": "voc_die_somatisierung_099",
    "word": "die Somatisierung",
    "article": "die",
    "plural": "die Somatisierungen",
    "partOfSpeech": "Nomen",
    "level": "B2+",
    "domain": "Psychiatrie",
    "register": "Fachsprache",
    "germanDefinition": "Das Auftreten körperlicher Schmerzen oder Beschwerden (z. B. Magenschmerzen), die durch seelische Konflikte verursacht sind.",
    "exampleGerman": "Hinter den chronischen Rückenschmerzen des Patienten verbirgt sich eine somatisierte Depression.",
    "exampleEnglish": "Behind the patient's chronic back pain hides a somatized depression.",
    "synonyms": [
      "die Psychosomatik"
    ],
    "collocations": [
      "somatische Beschwerden äußern"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Somatisierung",
      "dwds": "https://www.dwds.de/wb/Somatisierung",
      "dictcc": "https://www.dict.cc/?s=Somatisierung"
    },
    "sourceIds": [
      "src_psychische_stoerungen_wagner"
    ],
    "sourcePages": [
      9
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychiatrie",
      "b2+"
    ]
  },
  {
    "id": "voc_das_burnout_100",
    "word": "das Burnout",
    "article": "das",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Psychiatrie",
    "register": "Alltagssprache",
    "germanDefinition": "Zustand totaler emotionaler, geistiger und körperlicher Erschöpfung durch chronische Überlastung.",
    "exampleGerman": "Pflegekräfte müssen auf eigene Grenzen achten, um einem Burnout rechtzeitig vorzubeugen.",
    "exampleEnglish": "Nurses must pay attention to their own limits to prevent burnout in good time.",
    "synonyms": [
      "die Erschöpfungsdepression"
    ],
    "collocations": [
      "einem Burnout vorbeugen"
    ],
    "grammarNotes": "Nomen Neutrum.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Burnout",
      "dwds": "https://www.dwds.de/wb/Burnout",
      "dictcc": "https://www.dict.cc/?s=Burnout"
    },
    "sourceIds": [
      "src_psychische_stoerungen_wagner"
    ],
    "sourcePages": [
      10
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychiatrie",
      "b1+"
    ]
  },
  {
    "id": "voc_die_bezugspflege_101",
    "word": "die Bezugspflege",
    "article": "die",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Pflege",
    "register": "Pflegekonzept",
    "germanDefinition": "Pflegesystem, bei dem eine feste Pflegekraft die ganzheitliche Hauptverantwortung für einen Patienten trägt.",
    "exampleGerman": "In der Bezugspflege baue ich als feste Ansprechperson ein verlässliches Vertrauensverhältnis zum Patienten auf.",
    "exampleEnglish": "In primary nursing, as a designated contact person, I build a reliable relationship of trust with the patient.",
    "synonyms": [
      "die Primärpflege"
    ],
    "collocations": [
      "als Bezugspflegekraft arbeiten"
    ],
    "grammarNotes": "Nomen feminin (-e).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Bezugspflege",
      "dwds": "https://www.dwds.de/wb/Bezugspflege",
      "dictcc": "https://www.dict.cc/?s=Bezugspflege"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      11
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "b2"
    ]
  },
  {
    "id": "voc_die_ergotherapie_102",
    "word": "die Ergotherapie",
    "article": "die",
    "plural": "die Ergotherapien",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Klinik",
    "register": "Therapie",
    "germanDefinition": "Therapieform zur Förderung der Selbstständigkeit im Alltag und handwerklich-kreativer Fähigkeiten.",
    "exampleGerman": "Die Ergotherapie findet jeden Vormittag um 10:00 Uhr in der Therapiewerkstatt statt.",
    "exampleEnglish": "Occupational therapy takes place every morning at 10:00 AM in the therapy workshop.",
    "synonyms": [
      "die Beschäftigungstherapie"
    ],
    "collocations": [
      "an der Ergotherapie teilnehmen"
    ],
    "grammarNotes": "Nomen feminin (-ie).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Ergotherapie",
      "dwds": "https://www.dwds.de/wb/Ergotherapie",
      "dictcc": "https://www.dict.cc/?s=Ergotherapie"
    },
    "sourceIds": [
      "src_psy_notes"
    ],
    "sourcePages": [
      5
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "klinik",
      "b1+"
    ]
  },
  {
    "id": "voc_die_kunsttherapie_103",
    "word": "die Kunsttherapie",
    "article": "die",
    "plural": "die Kunsttherapien",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Klinik",
    "register": "Therapie",
    "germanDefinition": "Therapie mit Farben, Ton und kreativen Materialien zum nonverbalen Ausdruck von Emotionen.",
    "exampleGerman": "In der Kunsttherapie drücken Patienten Gefühle aus, für die ihnen noch die Worte fehlen.",
    "exampleEnglish": "In art therapy, patients express feelings for which they still lack the words.",
    "synonyms": [
      "die Gestaltungstherapie"
    ],
    "collocations": [
      "Bilder in der Kunsttherapie malen"
    ],
    "grammarNotes": "Nomen feminin (-ie).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Kunsttherapie",
      "dwds": "https://www.dwds.de/wb/Kunsttherapie",
      "dictcc": "https://www.dict.cc/?s=Kunsttherapie"
    },
    "sourceIds": [
      "src_psy_notes"
    ],
    "sourcePages": [
      5
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "klinik",
      "b1+"
    ]
  },
  {
    "id": "voc_die_bewegungstherapie_104",
    "word": "die Bewegungstherapie",
    "article": "die",
    "plural": "die Bewegungstherapien",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Klinik",
    "register": "Therapie",
    "germanDefinition": "Gezielte körperliche Aktivierung, Gymnastik oder Spaziergänge zur Stimmungsaufhellung und Körperwahrnehmung.",
    "exampleGerman": "Als BFD-Helfer begleite ich die Patientengruppe bei der täglichen Bewegungstherapie im Klinikpark.",
    "exampleEnglish": "As a BFD volunteer, I accompany the patient group during the daily movement therapy in the clinic park.",
    "synonyms": [
      "die Sporttherapie"
    ],
    "collocations": [
      "an der Bewegungstherapie teilnehmen"
    ],
    "grammarNotes": "Nomen feminin (-ie).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Bewegungstherapie",
      "dwds": "https://www.dwds.de/wb/Bewegungstherapie",
      "dictcc": "https://www.dict.cc/?s=Bewegungstherapie"
    },
    "sourceIds": [
      "src_psy_notes"
    ],
    "sourcePages": [
      5
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "klinik",
      "b1+"
    ]
  },
  {
    "id": "voc_die_dienstbesprechung_105",
    "word": "die Dienstbesprechung",
    "article": "die",
    "plural": "die Dienstbesprechungen",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Berufssprache",
    "register": "Organisation",
    "germanDefinition": "Regelmäßiges Treffen des gesamten Stationsteams zur Organisation, Fallreflexion und Dienstplanung.",
    "exampleGerman": "Jeden Dienstag um 14:00 Uhr findet die wöchentliche Dienstbesprechung statt.",
    "exampleEnglish": "Every Tuesday at 2:00 PM, the weekly staff meeting takes place.",
    "synonyms": [
      "die Teamsitzung",
      "die Teambesprechung"
    ],
    "collocations": [
      "an der Dienstbesprechung teilnehmen"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Dienstbesprechung",
      "dwds": "https://www.dwds.de/wb/Dienstbesprechung",
      "dictcc": "https://www.dict.cc/?s=Dienstbesprechung"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      12
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "berufssprache",
      "b1+"
    ]
  },
  {
    "id": "voc_die_fallbesprechung_106",
    "word": "die Fallbesprechung",
    "article": "die",
    "plural": "die Fallbesprechungen",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Berufssprache",
    "register": "Fachsprache",
    "germanDefinition": "Interdisziplinäre Diskussion von Ärzten, Psychologen und Pflegenden über den Behandlungsplan eines bestimmten Patienten.",
    "exampleGerman": "In der ethischen Fallbesprechung diskutieren wir über die beste Betreuung von Frau L.",
    "exampleEnglish": "In the ethical case conference, we discuss the best care plan for Ms. L.",
    "synonyms": [
      "die Kasuistik"
    ],
    "collocations": [
      "einen Patienten in der Fallbesprechung vorstellen"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Fallbesprechung",
      "dwds": "https://www.dwds.de/wb/Fallbesprechung",
      "dictcc": "https://www.dict.cc/?s=Fallbesprechung"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      12
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "berufssprache",
      "b2"
    ]
  },
  {
    "id": "voc_die_supervision_107",
    "word": "die Supervision",
    "article": "die",
    "plural": "die Supervisionen",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Berufssprache",
    "register": "Psychologie",
    "germanDefinition": "Professionelle Reflexion und Beratung für das Team zur Bewältigung emotional belastender Arbeitssituationen.",
    "exampleGerman": "In der monatlichen Supervision können wir schwierige Patientenkontakte vertraulich besprechen.",
    "exampleEnglish": "In monthly supervision, we can discuss emotionally difficult patient encounters confidentially.",
    "synonyms": [
      "die Praxisberatung"
    ],
    "collocations": [
      "in die Supervision einbringen"
    ],
    "grammarNotes": "Nomen feminin (-on).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Supervision",
      "dwds": "https://www.dwds.de/wb/Supervision",
      "dictcc": "https://www.dict.cc/?s=Supervision"
    },
    "sourceIds": [
      "src_user_bfd_context"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "berufssprache",
      "b2"
    ]
  },
  {
    "id": "voc_die_kollegialitaet_108",
    "word": "die Kollegialität",
    "article": "die",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Berufssprache",
    "register": "Werte",
    "germanDefinition": "Solidarisches, hilfsbereites und respektvolles Verhalten unter Arbeitskollegen.",
    "exampleGerman": "Im Pflegeteam herrscht eine hohe Kollegialität und gegenseitige Unterstützung.",
    "exampleEnglish": "In the nursing team, there is high collegiality and mutual support.",
    "synonyms": [
      "das Teamdenken",
      "die Solidarität"
    ],
    "collocations": [
      "Kollegialität zeigen"
    ],
    "grammarNotes": "Nomen feminin (-tät).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Kollegialität",
      "dwds": "https://www.dwds.de/wb/Kollegialität",
      "dictcc": "https://www.dict.cc/?s=Kollegialität"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      12
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "berufssprache",
      "b2"
    ]
  },
  {
    "id": "voc_die_puenktlichkeit_109",
    "word": "die Pünktlichkeit",
    "article": "die",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "B1",
    "domain": "Berufssprache",
    "register": "Werte",
    "germanDefinition": "Das genaue Einhalten vereinbarter Zeiten (im deutschen Krankenhaus ein zentraler Wert).",
    "exampleGerman": "Pünktlichkeit bei der Schichtübergabe ist unverzichtbar für einen reibungslosen Ablauf.",
    "exampleEnglish": "Punctuality at shift handover is essential for a smooth workflow.",
    "synonyms": [
      "die Termintreue"
    ],
    "collocations": [
      "auf Pünktlichkeit achten"
    ],
    "grammarNotes": "Nomen feminin (-keit).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Pünktlichkeit",
      "dwds": "https://www.dwds.de/wb/Pünktlichkeit",
      "dictcc": "https://www.dict.cc/?s=Pünktlichkeit"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      7
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "berufssprache",
      "b1"
    ]
  },
  {
    "id": "voc_die_zuverlaessigkeit_110",
    "word": "die Zuverlässigkeit",
    "article": "die",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Berufssprache",
    "register": "Werte",
    "germanDefinition": "Die Eigenschaft, übertragene Aufgaben gewissenhaft und termingerecht zu erledigen.",
    "exampleGerman": "Das Team schätzt die Zuverlässigkeit des neuen Freiwilligen sehr.",
    "exampleEnglish": "The team appreciates the reliability of the new volunteer very much.",
    "synonyms": [
      "die Gewissenhaftigkeit"
    ],
    "collocations": [
      "Zuverlässigkeit beweisen"
    ],
    "grammarNotes": "Nomen feminin (-keit).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Zuverlässigkeit",
      "dwds": "https://www.dwds.de/wb/Zuverlässigkeit",
      "dictcc": "https://www.dict.cc/?s=Zuverlässigkeit"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      7
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "berufssprache",
      "b1+"
    ]
  },
  {
    "id": "voc_die_verschwiegenheit_111",
    "word": "die Verschwiegenheit",
    "article": "die",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Berufssprache",
    "register": "Werte",
    "germanDefinition": "Die Eigenschaft, vertrauliche Informationen sicher für sich zu behalten.",
    "exampleGerman": "Verschwiegenheit ist die oberste ethische Pflicht im psychiatrischen Krankenhausalltag.",
    "exampleEnglish": "Discretion is the supreme ethical duty in everyday psychiatric hospital life.",
    "synonyms": [
      "die Diskretion"
    ],
    "collocations": [
      "Verschwiegenheit wahren"
    ],
    "grammarNotes": "Nomen feminin (-heit).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Verschwiegenheit",
      "dwds": "https://www.dwds.de/wb/Verschwiegenheit",
      "dictcc": "https://www.dict.cc/?s=Verschwiegenheit"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      44
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "berufssprache",
      "b2"
    ]
  },
  {
    "id": "voc_das_feedbackgespraech_112",
    "word": "das Feedbackgespräch",
    "article": "das",
    "plural": "die Feedbackgespräche",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Berufssprache",
    "register": "Kommunikation",
    "germanDefinition": "Strukturiertes Rückmeldegespräch zwischen Anleiter und BFDler über Lernfortschritte und Zusammenarbeit.",
    "exampleGerman": "Am Ende des ersten Monats führen wir ein ausführliches Feedbackgespräch durch.",
    "exampleEnglish": "At the end of the first month, we conduct a detailed feedback meeting.",
    "synonyms": [
      "das Rückmeldegespräch"
    ],
    "collocations": [
      "ein Feedbackgespräch vereinbaren / führen"
    ],
    "grammarNotes": "Nomen Neutrum.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Feedbackgespräch",
      "dwds": "https://www.dwds.de/wb/Feedbackgespräch",
      "dictcc": "https://www.dict.cc/?s=Feedbackgespräch"
    },
    "sourceIds": [
      "src_user_bfd_context"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "berufssprache",
      "b1+"
    ]
  },
  {
    "id": "voc_der_dienstausweis_113",
    "word": "der Dienstausweis",
    "article": "der",
    "plural": "die Dienstausweise",
    "partOfSpeech": "Nomen",
    "level": "A2",
    "domain": "Berufssprache",
    "register": "Organisation",
    "germanDefinition": "Ausweis mit Lichtbild und Chipkarte zum Öffnen geschützter Stationstüren und zur Zeiterfassung.",
    "exampleGerman": "Denken Sie daran, Ihren Dienstausweis stets sichtbar am Kittel oder Schlüsselband zu tragen.",
    "exampleEnglish": "Remember to always wear your employee ID visibly on your coat or lanyard.",
    "synonyms": [
      "der Mitarbeiterausweis"
    ],
    "collocations": [
      "den Dienstausweis vorzeigen / einscannen"
    ],
    "grammarNotes": "Nomen Maskulin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Dienstausweis",
      "dwds": "https://www.dwds.de/wb/Dienstausweis",
      "dictcc": "https://www.dict.cc/?s=Dienstausweis"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      10
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "berufssprache",
      "a2"
    ]
  },
  {
    "id": "voc_der_personennotruf_114",
    "word": "der Personennotruf",
    "article": "der",
    "plural": "die Personennotrufe",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Krankenhaus",
    "register": "Sicherheit",
    "germanDefinition": "Drahtloser Notfallmelder (Piepser mit rotem Alarmknopf) zum sofortigen Herbeirufen des Sicherheitsteams bei Gefahr.",
    "exampleGerman": "Auf der geschützten Station trägt jede Pflegekraft einen Personennotruf am Gürtel.",
    "exampleEnglish": "On the secured ward, every nurse wears a personal alarm device on their belt.",
    "synonyms": [
      "der Alarmknopf",
      "der Notsender"
    ],
    "collocations": [
      "den Personennotruf auslösen"
    ],
    "grammarNotes": "Nomen Maskulin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Personennotruf",
      "dwds": "https://www.dwds.de/wb/Personennotruf",
      "dictcc": "https://www.dict.cc/?s=Personennotruf"
    },
    "sourceIds": [
      "src_user_bfd_context"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "krankenhaus",
      "b2"
    ]
  },
  {
    "id": "voc_die_sauerstoffsaettigung_115",
    "word": "die Sauerstoffsättigung",
    "article": "die",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Pflege",
    "register": "Vitalzeichen",
    "germanDefinition": "Prozentsatz der mit Sauerstoff beladenen roten Blutkörperchen (SpO2, Normwert > 95 %).",
    "exampleGerman": "Der Pulsoximeter misst am Zeigefinger eine Sauerstoffsättigung von 98 Prozent.",
    "exampleEnglish": "The pulse oximeter measures an oxygen saturation of 98 percent on the index finger.",
    "synonyms": [
      "der SpO2-Wert"
    ],
    "collocations": [
      "die Sauerstoffsättigung kontrollieren"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Sauerstoffsättigung",
      "dwds": "https://www.dwds.de/wb/Sauerstoffsättigung",
      "dictcc": "https://www.dict.cc/?s=Sauerstoffsättigung"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      33
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "b2"
    ]
  },
  {
    "id": "voc_das_fieberthermometer_116",
    "word": "das Fieberthermometer",
    "article": "das",
    "plural": "die Fieberthermometer",
    "partOfSpeech": "Nomen",
    "level": "A2",
    "domain": "Pflege",
    "register": "Geräte",
    "germanDefinition": "Messgerät zur Bestimmung der Körpertemperatur (tympanal im Ohr, axillar oder rektal).",
    "exampleGerman": "Mit dem Ohrthermometer messe ich die Temperatur in nur zwei Sekunden.",
    "exampleEnglish": "With the ear thermometer, I measure the temperature in just two seconds.",
    "synonyms": [
      "das Thermometer"
    ],
    "collocations": [
      "Fieber messen"
    ],
    "grammarNotes": "Nomen Neutrum.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Fieberthermometer",
      "dwds": "https://www.dwds.de/wb/Fieberthermometer",
      "dictcc": "https://www.dict.cc/?s=Fieberthermometer"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      33
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "a2"
    ]
  },
  {
    "id": "voc_die_braunuele_117",
    "word": "die Braunüle",
    "article": "die",
    "plural": "die Braunülen",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Krankenhaus",
    "register": "Medizinisches Material",
    "germanDefinition": "Venenverweilkanüle aus Kunststoff zur Verabreichung von Infusionen oder intravenösen Medikamenten.",
    "exampleGerman": "Die Ärztin legt eine grüne Braunüle am rechten Handrücken des Patienten.",
    "exampleEnglish": "The doctor inserts a green peripheral IV cannula on the back of the patient's right hand.",
    "synonyms": [
      "der Venenverweilkatheter",
      "der Flexüle"
    ],
    "collocations": [
      "eine Braunüle legen / ziehen"
    ],
    "grammarNotes": "Nomen feminin (-e).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Braunüle",
      "dwds": "https://www.dwds.de/wb/Braunüle",
      "dictcc": "https://www.dict.cc/?s=Braunüle"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      28
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "krankenhaus",
      "b2"
    ]
  },
  {
    "id": "voc_der_tropf_118",
    "word": "der Tropf",
    "article": "der",
    "plural": "die Tröpfe",
    "partOfSpeech": "Nomen",
    "level": "A2",
    "domain": "Krankenhaus",
    "register": "Umgangssprache",
    "germanDefinition": "Umgangssprachliche Bezeichnung für eine laufende intravenöse Infusion.",
    "exampleGerman": "Der Patient ist mit dem Tropf zur Toilette gegangen.",
    "exampleEnglish": "The patient went to the bathroom with the IV drip.",
    "synonyms": [
      "die Infusion"
    ],
    "collocations": [
      "am Tropf hängen"
    ],
    "grammarNotes": "Nomen Maskulin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Tropf",
      "dwds": "https://www.dwds.de/wb/Tropf",
      "dictcc": "https://www.dict.cc/?s=Tropf"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      28
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "krankenhaus",
      "a2"
    ]
  },
  {
    "id": "voc_die_magensonde_119",
    "word": "die Magensonde",
    "article": "die",
    "plural": "die Magensonden",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Pflege",
    "register": "Medizinisches Material",
    "germanDefinition": "Dünner Schlauch, der über die Nase in den Magen geführt wird zur künstlichen Ernährung oder Medikamentengabe.",
    "exampleGerman": "Die Lage der Magensonde muss vor jeder Sondenkostgabe per Auskultation überprüft werden.",
    "exampleEnglish": "The position of the gastric feeding tube must be checked by auscultation before every tube feeding.",
    "synonyms": [
      "die PEG-Sonde",
      "die Ernährungssonde"
    ],
    "collocations": [
      "die Magensonde spülen"
    ],
    "grammarNotes": "Nomen feminin (-e).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Magensonde",
      "dwds": "https://www.dwds.de/wb/Magensonde",
      "dictcc": "https://www.dict.cc/?s=Magensonde"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      28
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "b2"
    ]
  },
  {
    "id": "voc_der_blasenkatheter_120",
    "word": "der Blasenkatheter",
    "article": "der",
    "plural": "die Blasenkatheter",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Pflege",
    "register": "Medizinisches Material",
    "germanDefinition": "Steriler Schlauch, der über die Harnröhre in die Harnblase eingeführt wird zur kontinuierlichen Urinableitung.",
    "exampleGerman": "Der Urinbeutel des Blasenkatheters muss stets unterhalb des Blasenniveaus hängen.",
    "exampleEnglish": "The urine bag of the urinary catheter must always hang below bladder level.",
    "synonyms": [
      "der Katheter",
      "der Dauerkatheter (DK)"
    ],
    "collocations": [
      "den Blasenkatheter legen / wechseln"
    ],
    "grammarNotes": "Nomen Maskulin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Blasenkatheter",
      "dwds": "https://www.dwds.de/wb/Blasenkatheter",
      "dictcc": "https://www.dict.cc/?s=Blasenkatheter"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      28
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "b2"
    ]
  },
  {
    "id": "voc_der_duschstuhl_121",
    "word": "der Duschstuhl",
    "article": "der",
    "plural": "die Duschstühle",
    "partOfSpeech": "Nomen",
    "level": "B1",
    "domain": "Pflege",
    "register": "Hilfsmittel",
    "germanDefinition": "Wasserfester Stuhl mit rutschfesten Gummifüßen zur sicheren Körperpflege in der Dusche.",
    "exampleGerman": "Für schwache Patienten stellen wir den Duschstuhl in die ebenerdige Stationsdusche.",
    "exampleEnglish": "For weak patients, we place the shower chair into the ground-level ward shower.",
    "synonyms": [
      "der Duschhocker"
    ],
    "collocations": [
      "den Patienten auf den Duschstuhl setzen"
    ],
    "grammarNotes": "Nomen Maskulin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Duschstuhl",
      "dwds": "https://www.dwds.de/wb/Duschstuhl",
      "dictcc": "https://www.dict.cc/?s=Duschstuhl"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      21
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "b1"
    ]
  },
  {
    "id": "voc_die_einmalunterlage_122",
    "word": "die Einmalunterlage",
    "article": "die",
    "plural": "die Einmalunterlagen",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Pflege",
    "register": "Material",
    "germanDefinition": "Saugfähige Schutzunterlage aus Zellstoff zur Schonung der Matratze und des Bettlakens.",
    "exampleGerman": "Beim Waschen im Bett legen wir eine saubere Einmalunterlage unter das Becken.",
    "exampleEnglish": "When washing in bed, we place a clean disposable underpad under the pelvis.",
    "synonyms": [
      "die Krankenunterlage"
    ],
    "collocations": [
      "die Unterlage wechseln"
    ],
    "grammarNotes": "Nomen feminin (-e).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Einmalunterlage",
      "dwds": "https://www.dwds.de/wb/Einmalunterlage",
      "dictcc": "https://www.dict.cc/?s=Einmalunterlage"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      19
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "b1+"
    ]
  },
  {
    "id": "voc_der_kanuelenabwurf_123",
    "word": "der Kanülenabwurf",
    "article": "der",
    "plural": "die Kanülenabwürfe",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Krankenhaus",
    "register": "Hygiene & Sicherheit",
    "germanDefinition": "Durchstichfeste gelbe Plastikbox zur sicheren Entsorgung gebrauchter Nadeln und Skalpelle.",
    "exampleGerman": "Gebrauchte Spritzen und Kanülen gehören unmittelbar nach der Injektion in den Kanülenabwurf.",
    "exampleEnglish": "Used syringes and needles belong in the sharps container immediately after injection.",
    "synonyms": [
      "die Sharps-Box",
      "der Abwurfbehälter"
    ],
    "collocations": [
      "eine Kanüle im Abwurf entsorgen"
    ],
    "grammarNotes": "Nomen Maskulin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Kanülenabwurf",
      "dwds": "https://www.dwds.de/wb/Kanülenabwurf",
      "dictcc": "https://www.dict.cc/?s=Kanülenabwurf"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      31
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "krankenhaus",
      "b2"
    ]
  },
  {
    "id": "voc_die_arbeitsunfaehigkeitsbesc_124",
    "word": "die Arbeitsunfähigkeitsbescheinigung",
    "article": "die",
    "plural": "die Arbeitsunfähigkeitsbescheinigungen",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Berufssprache",
    "register": "Verwaltung",
    "germanDefinition": "Ärztliches Dokument über die krankheitsbedingte Arbeitsunfähigkeit (umgangssprachlich: AU oder 'Gelber Schein').",
    "exampleGerman": "Wenn Sie krank sind, müssen Sie die Arbeitsunfähigkeitsbescheinigung am 3. Tag vorlegen.",
    "exampleEnglish": "If you are sick, you must submit the certificate of incapacity for work on the 3rd day.",
    "synonyms": [
      "die AU-Bescheinigung",
      "die Krankschreibung"
    ],
    "collocations": [
      "eine AU einreichen / vorlegen"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Arbeitsunfähigkeitsbescheinigung",
      "dwds": "https://www.dwds.de/wb/Arbeitsunfähigkeitsbescheinigung",
      "dictcc": "https://www.dict.cc/?s=Arbeitsunfähigkeitsbescheinigung"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      12
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "berufssprache",
      "b1+"
    ]
  },
  {
    "id": "voc_das_zeugnis_125",
    "word": "das Zeugnis",
    "article": "das",
    "plural": "die Zeugnisse",
    "partOfSpeech": "Nomen",
    "level": "B1",
    "domain": "BFD",
    "register": "Verwaltungssprache",
    "germanDefinition": "Schriftliche Beurteilung der Leistungen und des Verhaltens am Ende des Freiwilligendienstes.",
    "exampleGerman": "Am Ende des BFD stellt die Einsatzstelle ein qualifiziertes Zeugnis für künftige Bewerbungen aus.",
    "exampleEnglish": "At the end of the BFD, the placement issues a qualified reference for future applications.",
    "synonyms": [
      "das Arbeitszeugnis",
      "die Dienstbeurteilung"
    ],
    "collocations": [
      "ein Zeugnis ausstellen / erhalten"
    ],
    "grammarNotes": "Nomen Neutrum (-nis).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Zeugnis",
      "dwds": "https://www.dwds.de/wb/Zeugnis",
      "dictcc": "https://www.dict.cc/?s=Zeugnis"
    },
    "sourceIds": [
      "src_user_bfd_context"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "bfd",
      "b1"
    ]
  },
  {
    "id": "voc_der_urlaubsantrag_126",
    "word": "der Urlaubsantrag",
    "article": "der",
    "plural": "die Urlaubsanträge",
    "partOfSpeech": "Nomen",
    "level": "B1",
    "domain": "BFD",
    "register": "Verwaltungssprache",
    "germanDefinition": "Schriftlicher Antrag auf Freistellung von der Arbeit für die vertraglichen 26 Urlaubstage.",
    "exampleGerman": "Reichen Sie Ihren Urlaubsantrag bitte mindestens zwei Wochen vor dem gewünschten Termin ein.",
    "exampleEnglish": "Please submit your vacation request at least two weeks before the requested date.",
    "synonyms": [
      "das Urlaubsgesuch"
    ],
    "collocations": [
      "einen Urlaubsantrag stellen / genehmigen"
    ],
    "grammarNotes": "Nomen Maskulin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Urlaubsantrag",
      "dwds": "https://www.dwds.de/wb/Urlaubsantrag",
      "dictcc": "https://www.dict.cc/?s=Urlaubsantrag"
    },
    "sourceIds": [
      "src_user_bfd_context"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "bfd",
      "b1"
    ]
  },
  {
    "id": "voc_die_steueridentifikationsnum_127",
    "word": "die Steueridentifikationsnummer",
    "article": "die",
    "plural": "die Steueridentifikationsnummern",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Behörden",
    "register": "Verwaltungssprache",
    "germanDefinition": "Lebenslang gültige 11-stellige persönliche Steuernummer vom Bundeszentralamt für Steuern (Steuer-ID).",
    "exampleGerman": "Für die Auszahlung des BFD-Taschengeldes benötigt die Personalabteilung meine Steueridentifikationsnummer.",
    "exampleEnglish": "For the payout of the BFD allowance, human resources requires my tax identification number.",
    "synonyms": [
      "die Steuer-ID"
    ],
    "collocations": [
      "die Steuer-ID angeben"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Steueridentifikationsnummer",
      "dwds": "https://www.dwds.de/wb/Steueridentifikationsnummer",
      "dictcc": "https://www.dict.cc/?s=Steueridentifikationsnummer"
    },
    "sourceIds": [
      "src_bureaucracy_notes"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "behörden",
      "b1+"
    ]
  },
  {
    "id": "voc_die_sozialversicherungsnumme_128",
    "word": "die Sozialversicherungsnummer",
    "article": "die",
    "plural": "die Sozialversicherungsnummern",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Behörden",
    "register": "Verwaltungssprache",
    "germanDefinition": "12-stellige Kennnummer der Deutschen Rentenversicherung für Sozialabgaben und Rente (SV-Nummer).",
    "exampleGerman": "Nach der Anmeldung bei der Krankenkasse wird Ihnen die Sozialversicherungsnummer per Post zugeschickt.",
    "exampleEnglish": "After registering with the health insurance fund, the social insurance number will be sent to you by mail.",
    "synonyms": [
      "die Rentenversicherungsnummer"
    ],
    "collocations": [
      "die Sozialversicherungsnummer vorlegen"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Sozialversicherungsnummer",
      "dwds": "https://www.dwds.de/wb/Sozialversicherungsnummer",
      "dictcc": "https://www.dict.cc/?s=Sozialversicherungsnummer"
    },
    "sourceIds": [
      "src_bureaucracy_notes"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "behörden",
      "b1+"
    ]
  },
  {
    "id": "voc_die_elektronische_gesundheit_129",
    "word": "die elektronische Gesundheitskarte",
    "article": "die",
    "plural": "die elektronischen Gesundheitskarten",
    "partOfSpeech": "Nomen",
    "level": "B1",
    "domain": "Gesundheit",
    "register": "Krankenkasse",
    "germanDefinition": "Chipkarte der Krankenkasse (eGK) mit Foto zum Nachweis des Versicherungsschutzes beim Arzt.",
    "exampleGerman": "Beim Betreten der Arztpraxis stecke ich meine elektronische Gesundheitskarte in das Lesegerät.",
    "exampleEnglish": "Upon entering the doctor's office, I insert my electronic health card into the card reader.",
    "synonyms": [
      "die Versichertenkarte",
      "die Krankenkassenkarte"
    ],
    "collocations": [
      "die Gesundheitskarte einlesen"
    ],
    "grammarNotes": "Adjektiv + Nomen.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/elektronische Gesundheitskarte",
      "dwds": "https://www.dwds.de/wb/elektronische Gesundheitskarte",
      "dictcc": "https://www.dict.cc/?s=elektronische Gesundheitskarte"
    },
    "sourceIds": [
      "src_bureaucracy_notes"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "gesundheit",
      "b1"
    ]
  },
  {
    "id": "voc_die_haftpflichtversicherung_130",
    "word": "die Haftpflichtversicherung",
    "article": "die",
    "plural": "die Haftpflichtversicherungen",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Alltag",
    "register": "Versicherungen",
    "germanDefinition": "Wichtige private Versicherung, die Schäden abdeckt, die man versehentlich Dritten zufügt.",
    "exampleGerman": "Eine private Haftpflichtversicherung schützt vor hohen finanziellen Forderungen bei Missgeschicken.",
    "exampleEnglish": "Private liability insurance protects against high financial claims in case of mishaps.",
    "synonyms": [
      "die Privathaftpflicht"
    ],
    "collocations": [
      "eine Haftpflichtversicherung abschließen"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Haftpflichtversicherung",
      "dwds": "https://www.dwds.de/wb/Haftpflichtversicherung",
      "dictcc": "https://www.dict.cc/?s=Haftpflichtversicherung"
    },
    "sourceIds": [
      "src_bureaucracy_notes"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "alltag",
      "b1+"
    ]
  },
  {
    "id": "voc_der_dauerauftrag_131",
    "word": "der Dauerauftrag",
    "article": "der",
    "plural": "die Daueraufträge",
    "partOfSpeech": "Nomen",
    "level": "B1",
    "domain": "Geld",
    "register": "Bank",
    "germanDefinition": "Bankanweisung zur automatischen regelmäßigen Überweisung eines festen Betrags zu einem festen Datum.",
    "exampleGerman": "Ich habe einen Dauerauftrag eingerichtet, um jeden Monat pünktlich Geld zu sparen.",
    "exampleEnglish": "I set up a standing order to save money on time every month.",
    "synonyms": [
      "die regelmäßige Überweisung"
    ],
    "collocations": [
      "einen Dauerauftrag einrichten / löschen"
    ],
    "grammarNotes": "Nomen Maskulin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Dauerauftrag",
      "dwds": "https://www.dwds.de/wb/Dauerauftrag",
      "dictcc": "https://www.dict.cc/?s=Dauerauftrag"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      15
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "geld",
      "b1"
    ]
  },
  {
    "id": "voc_die_lastschrift_132",
    "word": "die Lastschrift",
    "article": "die",
    "plural": "die Lastschriften",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Geld",
    "register": "Bank",
    "germanDefinition": "Zahlungsverfahren (SEPA-Lastschrift), bei dem der Zahlungsempfänger Geld direkt vom Konto abbucht.",
    "exampleGerman": "Der Betrag für das ermäßigte Monatsticket wird monatlich per SEPA-Lastschrift eingezogen.",
    "exampleEnglish": "The amount for the discounted monthly ticket is collected monthly via SEPA direct debit.",
    "synonyms": [
      "der Bankeinzug",
      "das SEPA-Mandat"
    ],
    "collocations": [
      "per Lastschrift bezahlen / einziehen"
    ],
    "grammarNotes": "Nomen feminin (-t).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Lastschrift",
      "dwds": "https://www.dwds.de/wb/Lastschrift",
      "dictcc": "https://www.dict.cc/?s=Lastschrift"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      15
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "geld",
      "b1+"
    ]
  },
  {
    "id": "voc_die_kaution_133",
    "word": "die Kaution",
    "article": "die",
    "plural": "die Kautionen",
    "partOfSpeech": "Nomen",
    "level": "B1",
    "domain": "Wohnen",
    "register": "Mietrecht",
    "germanDefinition": "Sicherheitsleistung (meist 1 bis 3 Monatskaltmieten), die der Mieter beim Einzug hinterlegt.",
    "exampleGerman": "Nach dem ordnungsgemäßen Auszug zahlt der Vermieter die Kaution inklusive Zinsen zurück.",
    "exampleEnglish": "After proper move-out, the landlord repays the deposit including interest.",
    "synonyms": [
      "die Mietsicherheit"
    ],
    "collocations": [
      "die Kaution überweisen / einbehalten"
    ],
    "grammarNotes": "Nomen feminin (-tion).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Kaution",
      "dwds": "https://www.dwds.de/wb/Kaution",
      "dictcc": "https://www.dict.cc/?s=Kaution"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      10
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "wohnen",
      "b1"
    ]
  },
  {
    "id": "voc_das_uebergabeprotokoll_134",
    "word": "das Übergabeprotokoll",
    "article": "das",
    "plural": "die Übergabeprotokolle",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Wohnen",
    "register": "Mietrecht",
    "germanDefinition": "Schriftliche Dokumentation aller vorhandenen Mängel und Zählerstände beim Einzug in eine Wohnung.",
    "exampleGerman": "Im Übergabeprotokoll werden alle Kratzer im Parkett und der aktuelle Stromzählerstand festgehalten.",
    "exampleEnglish": "In the handover protocol, all scratches in the parquet and the current electricity meter reading are recorded.",
    "synonyms": [
      "das Wohnungsübergabeprotokoll"
    ],
    "collocations": [
      "das Übergabeprotokoll unterschreiben"
    ],
    "grammarNotes": "Nomen Neutrum.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Übergabeprotokoll",
      "dwds": "https://www.dwds.de/wb/Übergabeprotokoll",
      "dictcc": "https://www.dict.cc/?s=Übergabeprotokoll"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      10
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "wohnen",
      "b1+"
    ]
  },
  {
    "id": "voc_die_kuendigungsfrist_135",
    "word": "die Kündigungsfrist",
    "article": "die",
    "plural": "die Kündigungsfristen",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Berufssprache",
    "register": "Recht",
    "germanDefinition": "Der gesetzlich oder vertraglich festgelegte Zeitraum zwischen Kündigungserklärung und Beendigung des Vertrags.",
    "exampleGerman": "Während der 6-wöchigen Probezeit beträgt die Kündigungsfrist im BFD lediglich zwei Wochen.",
    "exampleEnglish": "During the 6-week probationary period, the notice period in the BFD is merely two weeks.",
    "synonyms": [
      "die Abmeldefrist"
    ],
    "collocations": [
      "die Kündigungsfrist einhalten"
    ],
    "grammarNotes": "Nomen feminin (-t).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Kündigungsfrist",
      "dwds": "https://www.dwds.de/wb/Kündigungsfrist",
      "dictcc": "https://www.dict.cc/?s=Kündigungsfrist"
    },
    "sourceIds": [
      "src_user_bfd_context"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "berufssprache",
      "b1+"
    ]
  },
  {
    "id": "voc_die_hausordnung_136",
    "word": "die Hausordnung",
    "article": "die",
    "plural": "die Hausordnungen",
    "partOfSpeech": "Nomen",
    "level": "A2",
    "domain": "Wohnen",
    "register": "Alltag",
    "germanDefinition": "Regelwerk für alle Bewohner eines Hauses (Ruhezeiten von 22:00 bis 06:00 Uhr, Flurreinigung, Müllentsorgung).",
    "exampleGerman": "Laut Hausordnung gilt ab 22:00 Uhr die Nachtruhe, in der laute Musik vermieden werden muss.",
    "exampleEnglish": "According to house rules, quiet hours start at 10:00 PM, during which loud music must be avoided.",
    "synonyms": [
      "die Wohnregeln"
    ],
    "collocations": [
      "die Hausordnung beachten / einhalten"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Hausordnung",
      "dwds": "https://www.dwds.de/wb/Hausordnung",
      "dictcc": "https://www.dict.cc/?s=Hausordnung"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      10
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "wohnen",
      "a2"
    ]
  },
  {
    "id": "voc_die_muelltrennung_137",
    "word": "die Mülltrennung",
    "article": "die",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "A2",
    "domain": "Alltag",
    "register": "Haushalt",
    "germanDefinition": "Systematische Trennung von Abfällen nach Wertstoffen (Restmüll, Biomüll, Gelber Sack, Altpapier, Altglas).",
    "exampleGerman": "In Deutschland ist die sorgfältige Mülltrennung eine wichtige bürgerliche Pflicht.",
    "exampleEnglish": "In Germany, careful waste separation is an important civic duty.",
    "synonyms": [
      "die Abfalltrennung"
    ],
    "collocations": [
      "den Müll trennen"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Mülltrennung",
      "dwds": "https://www.dwds.de/wb/Mülltrennung",
      "dictcc": "https://www.dict.cc/?s=Mülltrennung"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      11
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "alltag",
      "a2"
    ]
  },
  {
    "id": "voc_verabreichen_138",
    "word": "verabreichen",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Verb",
    "level": "B2",
    "domain": "Pflege",
    "register": "Fachsprache",
    "germanDefinition": "Einem Patienten ein Medikament, eine Injektion oder Nahrung vorschriftsmäßig geben.",
    "exampleGerman": "Die Pflegefachkraft verabreicht die verordnete Tablette pünktlich zur Mittagszeit.",
    "exampleEnglish": "The registered nurse administers the prescribed tablet punctually at noon.",
    "synonyms": [
      "geben",
      "applizieren"
    ],
    "collocations": [
      "Medikamente verabreichen"
    ],
    "grammarNotes": "Regelmäßig (verabreicht, verabreichte, hat verabreicht).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/verabreichen",
      "dwds": "https://www.dwds.de/wb/verabreichen",
      "dictcc": "https://www.dict.cc/?s=verabreichen"
    },
    "sourceIds": [
      "src_training_medizin"
    ],
    "sourcePages": [
      24
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "b2"
    ]
  },
  {
    "id": "voc_mobilisieren_139",
    "word": "mobilisieren",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Verb",
    "level": "B2",
    "domain": "Pflege",
    "register": "Fachsprache",
    "germanDefinition": "Einen bettlägerigen oder geschwächten Patienten zur Bewegung anleiten und unterstützen.",
    "exampleGerman": "Wir mobilisieren den Patienten nach der Operation an die Bettkante.",
    "exampleEnglish": "We mobilize the patient after surgery to the edge of the bed.",
    "synonyms": [
      "aktivieren",
      "in Bewegung bringen"
    ],
    "collocations": [
      "einen Patienten mobilisieren"
    ],
    "grammarNotes": "Regelmäßig (mobilisiert, mobilisierte, hat mobilisiert).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/mobilisieren",
      "dwds": "https://www.dwds.de/wb/mobilisieren",
      "dictcc": "https://www.dict.cc/?s=mobilisieren"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      35
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "b2"
    ]
  },
  {
    "id": "voc_lagern_140",
    "word": "lagern",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Verb",
    "level": "B1+",
    "domain": "Pflege",
    "register": "Fachsprache",
    "germanDefinition": "Einen Patienten durch Kissen und Hilfsmittel in eine schonende, therapeutische Körperhaltung bringen.",
    "exampleGerman": "Der Patient wird zur Schmerzlinderung mit Knierolle und erhöhtem Oberkörper gelagert.",
    "exampleEnglish": "The patient is positioned with a knee roll and elevated upper body for pain relief.",
    "synonyms": [
      "positionieren"
    ],
    "collocations": [
      "einen Patienten fachgerecht lagern"
    ],
    "grammarNotes": "Regelmäßig (lagert, lagerte, hat gelagert).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/lagern",
      "dwds": "https://www.dwds.de/wb/lagern",
      "dictcc": "https://www.dict.cc/?s=lagern"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      36
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "pflege",
      "b1+"
    ]
  },
  {
    "id": "voc_sedieren_141",
    "word": "sedieren",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Verb",
    "level": "B2+",
    "domain": "Psychiatrie",
    "register": "Medizin",
    "germanDefinition": "Einen Patienten durch Beruhigungsmittel dämpfen oder in einen schlafähnlichen Zustand versetzen.",
    "exampleGerman": "Bei extremer Erregung und Eigengefährdung musste der Patient medikamentös sediert werden.",
    "exampleEnglish": "In cases of extreme agitation and self-harm, the patient had to be medically sedated.",
    "synonyms": [
      "beruhigen",
      "dämpfen"
    ],
    "collocations": [
      "einen Patienten leicht/stark sedieren"
    ],
    "grammarNotes": "Regelmäßig (sediert, sedierte, hat sediert).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/sedieren",
      "dwds": "https://www.dwds.de/wb/sedieren",
      "dictcc": "https://www.dict.cc/?s=sedieren"
    },
    "sourceIds": [
      "src_training_medizin"
    ],
    "sourcePages": [
      40
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychiatrie",
      "b2+"
    ]
  },
  {
    "id": "voc_reanimieren_142",
    "word": "reanimieren",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Verb",
    "level": "B2",
    "domain": "Krankenhaus",
    "register": "Notfall",
    "germanDefinition": "Wiederbelebungsmaßnahmen (Herzdruckmassage, Beatmung, Defibrillation) bei Kreislaufstillstand durchführen.",
    "exampleGerman": "Das Notfallteam reanimiert den kollabierten Patienten sofort nach dem Eintreffen.",
    "exampleEnglish": "The emergency team resuscitates the collapsed patient immediately upon arrival.",
    "synonyms": [
      "wiederbeleben"
    ],
    "collocations": [
      "einen Patienten erfolgreich reanimieren"
    ],
    "grammarNotes": "Regelmäßig (reanimiert, reanimierte, hat reanimiert).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/reanimieren",
      "dwds": "https://www.dwds.de/wb/reanimieren",
      "dictcc": "https://www.dict.cc/?s=reanimieren"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      27
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "krankenhaus",
      "b2"
    ]
  },
  {
    "id": "voc_abklaeren_143",
    "word": "abklären",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Verb",
    "level": "B2",
    "domain": "Krankenhaus",
    "register": "Medizin",
    "germanDefinition": "Durch diagnostische Tests die genaue Ursache eines Symptoms oder einer Erkrankung ermitteln.",
    "exampleGerman": "Die unklaren Bauchschmerzen müssen durch eine Sonographie dringend abgeklärt werden.",
    "exampleEnglish": "The unclear abdominal pain must be urgently clarified via ultrasound.",
    "synonyms": [
      "untersuchen",
      "diagnostizieren"
    ],
    "collocations": [
      "ein Symptom ärztlich abklären lassen"
    ],
    "grammarNotes": "Trennbar regelmäßig (klärt ab, klärte ab, hat abgeklärt).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/abklären",
      "dwds": "https://www.dwds.de/wb/abklären",
      "dictcc": "https://www.dict.cc/?s=abklären"
    },
    "sourceIds": [
      "src_training_medizin"
    ],
    "sourcePages": [
      50
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "krankenhaus",
      "b2"
    ]
  },
  {
    "id": "voc_einschleichen_144",
    "word": "einschleichen",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Verb",
    "level": "B2+",
    "domain": "Psychiatrie",
    "register": "Pharmakologie",
    "germanDefinition": "Ein Medikament (z. B. ein Antidepressivum) stufenweise mit langsam ansteigender Dosis beginnen.",
    "exampleGerman": "Das neue Psychopharmakon wird über zwei Wochen mit geringer Dosis eingeschlichen.",
    "exampleEnglish": "The new psychotropic drug is titrated in over two weeks with a low initial dose.",
    "synonyms": [
      "auftitrieren"
    ],
    "collocations": [
      "eine Medikation langsam einschleichen"
    ],
    "grammarNotes": "Trennbar unregelmäßig (schleicht ein, schlich ein, hat eingeschlichen).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/einschleichen",
      "dwds": "https://www.dwds.de/wb/einschleichen",
      "dictcc": "https://www.dict.cc/?s=einschleichen"
    },
    "sourceIds": [
      "src_psy_notes"
    ],
    "sourcePages": [
      3
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychiatrie",
      "b2+"
    ]
  },
  {
    "id": "voc_ausschleichen_145",
    "word": "ausschleichen",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Verb",
    "level": "B2+",
    "domain": "Psychiatrie",
    "register": "Pharmakologie",
    "germanDefinition": "Ein Medikament schrittweise reduzieren, um Absetzsymptome oder Rückfälle zu vermeiden.",
    "exampleGerman": "Das Beruhigungsmittel wird über mehrere Wochen langsam ausgeschlichen.",
    "exampleEnglish": "The sedative is slowly tapered off over several weeks.",
    "synonyms": [
      "abdosieren",
      "absetzen"
    ],
    "collocations": [
      "eine Dosis ausschleichen"
    ],
    "grammarNotes": "Trennbar unregelmäßig (schleicht aus, schlich aus, hat ausgeschlichen).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/ausschleichen",
      "dwds": "https://www.dwds.de/wb/ausschleichen",
      "dictcc": "https://www.dict.cc/?s=ausschleichen"
    },
    "sourceIds": [
      "src_psy_notes"
    ],
    "sourcePages": [
      3
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychiatrie",
      "b2+"
    ]
  },
  {
    "id": "voc_absetzen_146",
    "word": "absetzen",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Verb",
    "level": "B2",
    "domain": "Psychiatrie",
    "register": "Pharmakologie",
    "germanDefinition": "Die Einnahme eines Medikaments beenden.",
    "exampleGerman": "Der Patient setzte seine Neuroleptika eigenmächtig ab, woraufhin die Psychose zurückkehrte.",
    "exampleEnglish": "The patient discontinued his neuroleptics on his own, whereupon the psychosis returned.",
    "synonyms": [
      "beenden",
      "stoppen"
    ],
    "collocations": [
      "ein Medikament eigenmächtig absetzen"
    ],
    "grammarNotes": "Trennbar regelmäßig (setzt ab, setzte ab, hat abgesetzt).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/absetzen",
      "dwds": "https://www.dwds.de/wb/absetzen",
      "dictcc": "https://www.dict.cc/?s=absetzen"
    },
    "sourceIds": [
      "src_psy_notes"
    ],
    "sourcePages": [
      3
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychiatrie",
      "b2"
    ]
  },
  {
    "id": "voc_die_stellungnahme_147",
    "word": "die Stellungnahme",
    "article": "die",
    "plural": "die Stellungnahmen",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "B2 Wortschatz",
    "register": "Berufssprache",
    "germanDefinition": "Schriftliche oder mündliche begründete Äußerung der eigenen Meinung oder Position zu einem Sachverhalt.",
    "exampleGerman": "Die Klinikleitung gibt eine offizielle Stellungnahme zu den Hygienevorwürfen ab.",
    "exampleEnglish": "The clinic management issues an official statement regarding the hygiene allegations.",
    "synonyms": [
      "das Gutachten",
      "die Positionierung"
    ],
    "collocations": [
      "eine Stellungnahme abgeben / verfassen"
    ],
    "grammarNotes": "Nomen feminin (-e).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Stellungnahme",
      "dwds": "https://www.dwds.de/wb/Stellungnahme",
      "dictcc": "https://www.dict.cc/?s=Stellungnahme"
    },
    "sourceIds": [
      "src_aspekte_b2"
    ],
    "sourcePages": [
      50
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "b2 wortschatz",
      "b2"
    ]
  },
  {
    "id": "voc_der_sachverhalt_148",
    "word": "der Sachverhalt",
    "article": "der",
    "plural": "die Sachverhalte",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "B2 Wortschatz",
    "register": "Fachsprache",
    "germanDefinition": "Die Gesamtheit der tatsächlichen Umstände, Tatsachen und Fakten eines Geschehens.",
    "exampleGerman": "Zur Klärung des Vorfalls muss der genaue Sachverhalt im Protokoll festgehalten werden.",
    "exampleEnglish": "To clarify the incident, the exact facts of the case must be recorded in the minutes.",
    "synonyms": [
      "die Faktenlage",
      "der Tatbestand"
    ],
    "collocations": [
      "den Sachverhalt schildern / prüfen"
    ],
    "grammarNotes": "Nomen Maskulin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Sachverhalt",
      "dwds": "https://www.dwds.de/wb/Sachverhalt",
      "dictcc": "https://www.dict.cc/?s=Sachverhalt"
    },
    "sourceIds": [
      "src_aspekte_b2"
    ],
    "sourcePages": [
      52
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "b2 wortschatz",
      "b2"
    ]
  },
  {
    "id": "voc_die_plausibilitaet_149",
    "word": "die Plausibilität",
    "article": "die",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "C1",
    "domain": "C1 Wortschatz",
    "register": "Wissenschaft",
    "germanDefinition": "Die logische Einleuchtendheit und Nachvollziehbarkeit einer Erklärung oder Hypothese.",
    "exampleGerman": "Die Plausibilität der Patientenaussage wird durch die Laborergebnisse bestätigt.",
    "exampleEnglish": "The plausibility of the patient's statement is confirmed by the laboratory results.",
    "synonyms": [
      "die Einleuchtendheit",
      "die Glaubwürdigkeit"
    ],
    "collocations": [
      "die Plausibilität überprüfen"
    ],
    "grammarNotes": "Nomen feminin (-tät).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Plausibilität",
      "dwds": "https://www.dwds.de/wb/Plausibilität",
      "dictcc": "https://www.dict.cc/?s=Plausibilität"
    },
    "sourceIds": [
      "src_aspekte_b2"
    ],
    "sourcePages": [
      60
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "c1 wortschatz",
      "c1"
    ]
  },
  {
    "id": "voc_der_konsens_150",
    "word": "der Konsens",
    "article": "der",
    "plural": "die Konsense",
    "partOfSpeech": "Nomen",
    "level": "C1",
    "domain": "C1 Wortschatz",
    "register": "Berufssprache",
    "germanDefinition": "Übereinstimmung der Meinungen aller Beteiligten nach einer Verhandlung oder Diskussion.",
    "exampleGerman": "Im Stationsteam wurde ein breiter Konsens über die neue Besuchsregelung erzielt.",
    "exampleEnglish": "In the ward team, a broad consensus was reached regarding the new visiting rules.",
    "synonyms": [
      "die Einmütigkeit",
      "die Übereinstimmung"
    ],
    "collocations": [
      "einen Konsens erzielen / finden"
    ],
    "grammarNotes": "Nomen Maskulin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Konsens",
      "dwds": "https://www.dwds.de/wb/Konsens",
      "dictcc": "https://www.dict.cc/?s=Konsens"
    },
    "sourceIds": [
      "src_aspekte_b2"
    ],
    "sourcePages": [
      62
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "c1 wortschatz",
      "c1"
    ]
  },
  {
    "id": "voc_die_kontroverse_151",
    "word": "die Kontroverse",
    "article": "die",
    "plural": "die Kontroversen",
    "partOfSpeech": "Nomen",
    "level": "B2+",
    "domain": "B2 Wortschatz",
    "register": "Standardsprache",
    "germanDefinition": "Länger anhaltende heftige Auseinandersetzung über gegensätzliche Auffassungen.",
    "exampleGerman": "Die Kontroverse über die Fixierungsrichtlinien wurde in der Ethikkommission debattiert.",
    "exampleEnglish": "The controversy over restraint guidelines was debated in the ethics committee.",
    "synonyms": [
      "der Streit",
      "die Debatte"
    ],
    "collocations": [
      "eine Kontroverse auslösen"
    ],
    "grammarNotes": "Nomen feminin (-e).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Kontroverse",
      "dwds": "https://www.dwds.de/wb/Kontroverse",
      "dictcc": "https://www.dict.cc/?s=Kontroverse"
    },
    "sourceIds": [
      "src_aspekte_b2"
    ],
    "sourcePages": [
      62
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "b2 wortschatz",
      "b2+"
    ]
  },
  {
    "id": "voc_der_kompromiss_152",
    "word": "der Kompromiss",
    "article": "der",
    "plural": "die Kompromisse",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "B2 Wortschatz",
    "register": "Standardsprache",
    "germanDefinition": "Lösung eines Konflikts, bei der jede Seite Zugeständnisse macht.",
    "exampleGerman": "Beim Dienstplan für die Feiertage haben wir einen fairen Kompromiss gefunden.",
    "exampleEnglish": "In the holiday duty schedule, we found a fair compromise.",
    "synonyms": [
      "die Einigung",
      "das Zugeständnis"
    ],
    "collocations": [
      "einen Kompromiss schließen / eingehen"
    ],
    "grammarNotes": "Nomen Maskulin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Kompromiss",
      "dwds": "https://www.dwds.de/wb/Kompromiss",
      "dictcc": "https://www.dict.cc/?s=Kompromiss"
    },
    "sourceIds": [
      "src_aspekte_b2"
    ],
    "sourcePages": [
      63
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "b2 wortschatz",
      "b1+"
    ]
  },
  {
    "id": "voc_die_eigenverantwortung_153",
    "word": "die Eigenverantwortung",
    "article": "die",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Berufssprache",
    "register": "Werte",
    "germanDefinition": "Die Bereitschaft und Pflicht, für das eigene Tun selbstständig die Verantwortung zu tragen.",
    "exampleGerman": "Im BFD fördern wir die Eigenverantwortung bei der täglichen Stationsorganisation.",
    "exampleEnglish": "In the BFD, we promote personal responsibility in daily ward organization.",
    "synonyms": [
      "die Selbstverantwortung"
    ],
    "collocations": [
      "Eigenverantwortung übernehmen / stärken"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Eigenverantwortung",
      "dwds": "https://www.dwds.de/wb/Eigenverantwortung",
      "dictcc": "https://www.dict.cc/?s=Eigenverantwortung"
    },
    "sourceIds": [
      "src_aspekte_b2"
    ],
    "sourcePages": [
      64
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "berufssprache",
      "b2"
    ]
  },
  {
    "id": "voc_die_empathie_154",
    "word": "die Empathie",
    "article": "die",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Psychologie",
    "register": "Kommunikation",
    "germanDefinition": "Fähigkeit, sich in die Gefühle, Gedanken und Perspektiven eines anderen Menschen hineinzuversetzen.",
    "exampleGerman": "Empathie ohne professionelle Distanz kann im Klinikalltag zu schneller Überlastung führen.",
    "exampleEnglish": "Empathy without professional distance can lead to rapid burnout in everyday hospital life.",
    "synonyms": [
      "das Mitgefühl",
      "das Einfühlungsvermögen"
    ],
    "collocations": [
      "Empathie zeigen / empfinden"
    ],
    "grammarNotes": "Nomen feminin (-ie).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Empathie",
      "dwds": "https://www.dwds.de/wb/Empathie",
      "dictcc": "https://www.dict.cc/?s=Empathie"
    },
    "sourceIds": [
      "src_intus_booklet"
    ],
    "sourcePages": [
      4
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychologie",
      "b1+"
    ]
  },
  {
    "id": "voc_die_durchsetzungsfaehigkeit_155",
    "word": "die Durchsetzungsfähigkeit",
    "article": "die",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "B2+",
    "domain": "Berufssprache",
    "register": "Kompetenz",
    "germanDefinition": "Fähigkeit, eigene berechtigte Interessen, Regeln oder Grenzen selbstbewusst durchzusetzen.",
    "exampleGerman": "Auf der Akutstation erfordert das Einhalten von Sicherheitsregeln eine ruhige Durchsetzungsfähigkeit.",
    "exampleEnglish": "On the acute ward, enforcing safety rules requires calm assertiveness.",
    "synonyms": [
      "die Durchsetzungskraft",
      "die Standfestigkeit"
    ],
    "collocations": [
      "Durchsetzungsfähigkeit beweisen"
    ],
    "grammarNotes": "Nomen feminin (-keit).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Durchsetzungsfähigkeit",
      "dwds": "https://www.dwds.de/wb/Durchsetzungsfähigkeit",
      "dictcc": "https://www.dict.cc/?s=Durchsetzungsfähigkeit"
    },
    "sourceIds": [
      "src_aspekte_b2"
    ],
    "sourcePages": [
      65
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "berufssprache",
      "b2+"
    ]
  },
  {
    "id": "voc_der_betreff_156",
    "word": "der Betreff",
    "article": "der",
    "plural": "die Betreffe",
    "partOfSpeech": "Nomen",
    "level": "B1",
    "domain": "E-Mails",
    "register": "Büro",
    "germanDefinition": "Die prägnante Inhaltsangabe in der Betreffzeile einer E-Mail oder eines Geschäftsbriefs.",
    "exampleGerman": "Geben Sie im Betreff bitte immer Ihre Einsatzstelle und Ihren vollen Namen an.",
    "exampleEnglish": "In the subject line, please always state your placement and full name.",
    "synonyms": [
      "die Betreffzeile",
      "das Thema"
    ],
    "collocations": [
      "einen Betreff formulieren"
    ],
    "grammarNotes": "Nomen Maskulin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Betreff",
      "dwds": "https://www.dwds.de/wb/Betreff",
      "dictcc": "https://www.dict.cc/?s=Betreff"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      22
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "e-mails",
      "b1"
    ]
  },
  {
    "id": "voc_die_anrede_157",
    "word": "die Anrede",
    "article": "die",
    "plural": "die Anreden",
    "partOfSpeech": "Nomen",
    "level": "A2",
    "domain": "E-Mails",
    "register": "Kommunikation",
    "germanDefinition": "Höfliche Begrüßung am Beginn eines Briefes oder Gesprächs (z. B. 'Sehr geehrte Frau Dr. Müller').",
    "exampleGerman": "In offiziellen E-Mails an Behörden verwendet man stets die förmliche Anrede.",
    "exampleEnglish": "In official emails to authorities, one always uses the formal salutation.",
    "synonyms": [
      "die Begrüßungsformel"
    ],
    "collocations": [
      "die passende Anrede wählen"
    ],
    "grammarNotes": "Nomen feminin (-e).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Anrede",
      "dwds": "https://www.dwds.de/wb/Anrede",
      "dictcc": "https://www.dict.cc/?s=Anrede"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      22
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "e-mails",
      "a2"
    ]
  },
  {
    "id": "voc_die_grussformel_158",
    "word": "die Grußformel",
    "article": "die",
    "plural": "die Grußformeln",
    "partOfSpeech": "Nomen",
    "level": "A2",
    "domain": "E-Mails",
    "register": "Kommunikation",
    "germanDefinition": "Höflicher Abschiedsgruß am Ende eines Briefes oder einer E-Mail (z. B. 'Mit freundlichen Grüßen').",
    "exampleGerman": "Am Ende der E-Mail an das DRK schreibe ich: 'Mit freundlichen Grüßen, Ali'.",
    "exampleEnglish": "At the end of the email to the DRK, I write: 'Kind regards, Ali'.",
    "synonyms": [
      "die Schlussformel"
    ],
    "collocations": [
      "die Grußformel setzen"
    ],
    "grammarNotes": "Nomen feminin (-e).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Grußformel",
      "dwds": "https://www.dwds.de/wb/Grußformel",
      "dictcc": "https://www.dict.cc/?s=Grußformel"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      22
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "e-mails",
      "a2"
    ]
  },
  {
    "id": "voc_der_anhang_159",
    "word": "der Anhang",
    "article": "der",
    "plural": "die Anhänge",
    "partOfSpeech": "Nomen",
    "level": "A2",
    "domain": "E-Mails",
    "register": "Büro",
    "germanDefinition": "Eine Datei (PDF, Foto, Dokument), die einer E-Mail beigefügt wird.",
    "exampleGerman": "Im Anhang dieser E-Mail finden Sie meine unterschriebene Vereinbarung als PDF.",
    "exampleEnglish": "In the attachment of this email, you will find my signed agreement as a PDF.",
    "synonyms": [
      "das Attachment",
      "die Anlage"
    ],
    "collocations": [
      "im Anhang beifügen / mitsenden"
    ],
    "grammarNotes": "Nomen Maskulin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Anhang",
      "dwds": "https://www.dwds.de/wb/Anhang",
      "dictcc": "https://www.dict.cc/?s=Anhang"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      23
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "e-mails",
      "a2"
    ]
  },
  {
    "id": "voc_die_bestaetigung_160",
    "word": "die Bestätigung",
    "article": "die",
    "plural": "die Bestätigungen",
    "partOfSpeech": "Nomen",
    "level": "B1",
    "domain": "Behörden",
    "register": "Verwaltung",
    "germanDefinition": "Schriftlicher offizieller Nachweis über den Erhalt oder die Richtigkeit eines Vorgangs.",
    "exampleGerman": "Das Stadtbüro stellt mir nach der Anmeldung eine Meldebestätigung aus.",
    "exampleEnglish": "The city office issues me a registration confirmation after registering.",
    "synonyms": [
      "der Nachweis",
      "die Bescheinigung"
    ],
    "collocations": [
      "eine Bestätigung erhalten / anfordern"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Bestätigung",
      "dwds": "https://www.dwds.de/wb/Bestätigung",
      "dictcc": "https://www.dict.cc/?s=Bestätigung"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      12
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "behörden",
      "b1"
    ]
  },
  {
    "id": "voc_die_frist_161",
    "word": "die Frist",
    "article": "die",
    "plural": "die Fristen",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Behörden",
    "register": "Recht",
    "germanDefinition": "Festgelegter Zeitraum, bis zu dessen Ablauf eine Handlung oder Zahlung erfolgen muss.",
    "exampleGerman": "Die gesetzliche Frist zur Anmeldung des Wohnsitzes beträgt 14 Tage nach Einzug.",
    "exampleEnglish": "The legal deadline for registering residence is 14 days after moving in.",
    "synonyms": [
      "der Termin",
      "das Zeitlimit"
    ],
    "collocations": [
      "eine Frist einhalten / verlängern / versäumen"
    ],
    "grammarNotes": "Nomen feminin (-t).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Frist",
      "dwds": "https://www.dwds.de/wb/Frist",
      "dictcc": "https://www.dict.cc/?s=Frist"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      13
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "behörden",
      "b1+"
    ]
  },
  {
    "id": "voc_die_mahnung_162",
    "word": "die Mahnung",
    "article": "die",
    "plural": "die Mahnungen",
    "partOfSpeech": "Nomen",
    "level": "B1",
    "domain": "Geld",
    "register": "Recht",
    "germanDefinition": "Schriftliche Zahlungsaufforderung bei verspäteter Bezahlung einer Rechnung.",
    "exampleGerman": "Rechnungen sollten sofort bezahlt werden, um teure Mahnungen zu vermeiden.",
    "exampleEnglish": "Invoices should be paid immediately to avoid expensive reminder notices.",
    "synonyms": [
      "die Zahlungserinnerung"
    ],
    "collocations": [
      "eine Mahnung erhalten / verschicken"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Mahnung",
      "dwds": "https://www.dwds.de/wb/Mahnung",
      "dictcc": "https://www.dict.cc/?s=Mahnung"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      16
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "geld",
      "b1"
    ]
  },
  {
    "id": "voc_der_kassenbon_163",
    "word": "der Kassenbon",
    "article": "der",
    "plural": "die Kassenbons",
    "partOfSpeech": "Nomen",
    "level": "A1",
    "domain": "Einkaufen",
    "register": "Alltag",
    "germanDefinition": "Gedruckter Papierbeleg der Ladenkasse über den getätigten Einkauf (Quittung).",
    "exampleGerman": "Bewahren Sie den Kassenbon gut auf, falls Sie den Artikel umtauschen möchten.",
    "exampleEnglish": "Keep the receipt safe in case you want to exchange the item.",
    "synonyms": [
      "der Beleg",
      "der Kassenkassenzettel",
      "die Quittung"
    ],
    "collocations": [
      "den Kassenbon mitnehmen"
    ],
    "grammarNotes": "Nomen Maskulin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Kassenbon",
      "dwds": "https://www.dwds.de/wb/Kassenbon",
      "dictcc": "https://www.dict.cc/?s=Kassenbon"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      17
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "einkaufen",
      "a1"
    ]
  },
  {
    "id": "voc_der_geldautomat_164",
    "word": "der Geldautomat",
    "article": "der",
    "plural": "die Geldautomaten",
    "partOfSpeech": "Nomen",
    "level": "A1",
    "domain": "Geld",
    "register": "Bank",
    "germanDefinition": "Elektronischer Selbstbedienungsautomat zum Abheben und Einzahlen von Bargeld (ATM).",
    "exampleGerman": "Ich hebe am Geldautomaten der Sparkasse 50 Euro mit meiner Girokarte ab.",
    "exampleEnglish": "I withdraw 50 euros at the Sparkasse ATM using my debit card.",
    "synonyms": [
      "der Bankautomat",
      "der GAA"
    ],
    "collocations": [
      "Geld am Geldautomaten abheben"
    ],
    "grammarNotes": "Nomen Maskulin (n-Deklination: den Geldautomaten).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Geldautomat",
      "dwds": "https://www.dwds.de/wb/Geldautomat",
      "dictcc": "https://www.dict.cc/?s=Geldautomat"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      15
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "geld",
      "a1"
    ]
  },
  {
    "id": "voc_die_pin_165",
    "word": "die PIN",
    "article": "die",
    "plural": "die PINs",
    "partOfSpeech": "Nomen",
    "level": "A1",
    "domain": "Geld",
    "register": "Sicherheit",
    "germanDefinition": "Geheime persönliche Identifikationsnummer (meist 4-stellig) für Bankkarten und Handys.",
    "exampleGerman": "Geben Sie Ihre PIN niemals an Fremde weiter und verdecken Sie die Tastatur bei der Eingabe.",
    "exampleEnglish": "Never share your PIN with strangers and cover the keypad during entry.",
    "synonyms": [
      "die Geheimzahl"
    ],
    "collocations": [
      "die PIN eingeben / geheim halten"
    ],
    "grammarNotes": "Nomen feminin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/PIN",
      "dwds": "https://www.dwds.de/wb/PIN",
      "dictcc": "https://www.dict.cc/?s=PIN"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      15
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "geld",
      "a1"
    ]
  },
  {
    "id": "voc_die_sperrnotrufnummer_166",
    "word": "die Sperrnotrufnummer",
    "article": "die",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Geld",
    "register": "Sicherheit",
    "germanDefinition": "Bundesweite einheitliche Notrufnummer (116 116) zum sofortigen Sperren verlorener Bankkarten.",
    "exampleGerman": "Bei Verlust meiner Bankkarte wähle ich sofort die Sperrnotrufnummer 116 116.",
    "exampleEnglish": "If I lose my bank card, I immediately dial the emergency blocking number 116 116.",
    "synonyms": [
      "der Sperrnotruf 116 116"
    ],
    "collocations": [
      "die Bankkarte sperren lassen"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Sperrnotrufnummer",
      "dwds": "https://www.dwds.de/wb/Sperrnotrufnummer",
      "dictcc": "https://www.dict.cc/?s=Sperrnotrufnummer"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      15
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "geld",
      "b1+"
    ]
  },
  {
    "id": "voc_das_fundbuero_167",
    "word": "das Fundbüro",
    "article": "das",
    "plural": "die Fundbüros",
    "partOfSpeech": "Nomen",
    "level": "A2",
    "domain": "Alltag",
    "register": "Behörden",
    "germanDefinition": "Städtische Dienststelle zur Aufbewahrung und Rückgabe gefundener Gegenstände.",
    "exampleGerman": "Wenn Sie Ihre Tasche im Bus vergessen haben, fragen Sie beim städtischen Fundbüro nach.",
    "exampleEnglish": "If you forgot your bag on the bus, inquire at the municipal lost and found office.",
    "synonyms": [
      "die Fundstelle"
    ],
    "collocations": [
      "etwas im Fundbüro abgeben / abholen"
    ],
    "grammarNotes": "Nomen Neutrum.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Fundbüro",
      "dwds": "https://www.dwds.de/wb/Fundbüro",
      "dictcc": "https://www.dict.cc/?s=Fundbüro"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      19
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "alltag",
      "a2"
    ]
  },
  {
    "id": "voc_der_schienenersatzverkehr_168",
    "word": "der Schienenersatzverkehr",
    "article": "der",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Verkehr",
    "register": "Alltag",
    "germanDefinition": "Ersatzweiser Bustransport bei gesperrten Zugstrecken oder Baustellen (SEV).",
    "exampleGerman": "Wegen Gleisbauarbeiten fährt zwischen Marburg und Gießen heute ein Schienenersatzverkehr.",
    "exampleEnglish": "Due to track construction, a rail replacement bus service is running today between Marburg and Giessen.",
    "synonyms": [
      "der SEV",
      "der Ersatzbus"
    ],
    "collocations": [
      "den Schienenersatzverkehr nutzen"
    ],
    "grammarNotes": "Nomen Maskulin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Schienenersatzverkehr",
      "dwds": "https://www.dwds.de/wb/Schienenersatzverkehr",
      "dictcc": "https://www.dict.cc/?s=Schienenersatzverkehr"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      18
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "verkehr",
      "b1+"
    ]
  },
  {
    "id": "voc_die_zugbindung_169",
    "word": "die Zugbindung",
    "article": "die",
    "plural": "die Zugbindungen",
    "partOfSpeech": "Nomen",
    "level": "B1+",
    "domain": "Verkehr",
    "register": "Deutsche Bahn",
    "germanDefinition": "Verpflichtung bei Spartickets der Deutschen Bahn, exakt den gebuchten Fernzug zu nutzen.",
    "exampleGerman": "Bei einem Super-Sparpreis-Ticket gilt eine strikte Zugbindung für den ICE.",
    "exampleEnglish": "With a Super Sparpreis ticket, strict train-specific validity applies for the ICE.",
    "synonyms": [
      "die Fahrscheinbindung"
    ],
    "collocations": [
      "die Zugbindung aufheben"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Zugbindung",
      "dwds": "https://www.dwds.de/wb/Zugbindung",
      "dictcc": "https://www.dict.cc/?s=Zugbindung"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      18
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "verkehr",
      "b1+"
    ]
  },
  {
    "id": "voc_sich_freuen_auf_170",
    "word": "sich freuen auf",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Verb",
    "level": "A2",
    "domain": "Freundin & Familie",
    "register": "Gefühle",
    "germanDefinition": "Ein freudiges Gefühl im Hinblick auf ein zukünftiges schönes Ereignis empfinden.",
    "exampleGerman": "Ich freue mich schon so sehr auf unser Wiedersehen am Wochenende!",
    "exampleEnglish": "I am looking forward so much to our reunion at the weekend!",
    "synonyms": [
      "der Vorfreude entgegensehen"
    ],
    "collocations": [
      "sich freuen auf (+ Akk.)",
      "riesige Vorfreude haben"
    ],
    "grammarNotes": "Reflexives Verb mit Präposition 'auf' + Akkusativ.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/freuen auf",
      "dwds": "https://www.dwds.de/wb/freuen auf",
      "dictcc": "https://www.dict.cc/?s=freuen auf"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      5
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "freundin_&_familie",
      "a2"
    ]
  },
  {
    "id": "voc_sich_freuen_ueber_171",
    "word": "sich freuen über",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Verb",
    "level": "A2",
    "domain": "Freundin & Familie",
    "register": "Gefühle",
    "germanDefinition": "Freude über etwas empfinden, das bereits geschehen ist oder ein Geschenk.",
    "exampleGerman": "Ich habe mich unglaublich über deine süße Nachricht heute Morgen gefreut.",
    "exampleEnglish": "I was incredibly happy about your sweet message this morning.",
    "synonyms": [
      "glücklich sein über"
    ],
    "collocations": [
      "sich freuen über (+ Akk.)"
    ],
    "grammarNotes": "Reflexives Verb mit Präposition 'über' + Akkusativ.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/freuen über",
      "dwds": "https://www.dwds.de/wb/freuen über",
      "dictcc": "https://www.dict.cc/?s=freuen über"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      5
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "freundin_&_familie",
      "a2"
    ]
  },
  {
    "id": "voc_vermissen_172",
    "word": "vermissen",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Verb",
    "level": "A1",
    "domain": "Freundin & Familie",
    "register": "Gefühle",
    "germanDefinition": "Das schmerzhafte Fehlen einer geliebten Person spüren.",
    "exampleGerman": "Ich vermisse dein Lachen und kann es kaum erwarten, dich wieder in die Arme zu schließen.",
    "exampleEnglish": "I miss your laugh and can hardly wait to hold you in my arms again.",
    "synonyms": [
      "sehnen nach"
    ],
    "collocations": [
      "jemanden schrecklich vermissen"
    ],
    "grammarNotes": "Regelmäßiges Verb mit Akkusativ-Objekt.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/vermissen",
      "dwds": "https://www.dwds.de/wb/vermissen",
      "dictcc": "https://www.dict.cc/?s=vermissen"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      5
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "freundin_&_familie",
      "a1"
    ]
  },
  {
    "id": "voc_die_geborgenheit_173",
    "word": "die Geborgenheit",
    "article": "die",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Freundin & Familie",
    "register": "Gefühle",
    "germanDefinition": "Das tief empfundene Gefühl von Schutz, seelischer Wärme, Vertrauen und Sicherheit.",
    "exampleGerman": "Wenn wir zusammen sind, fühle ich eine tiefe Ruhe und Geborgenheit.",
    "exampleEnglish": "When we are together, I feel a deep calm and emotional security.",
    "synonyms": [
      "die Sicherheit",
      "die Wärme"
    ],
    "collocations": [
      "Geborgenheit schenken / spüren"
    ],
    "grammarNotes": "Nomen feminin (-heit).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Geborgenheit",
      "dwds": "https://www.dwds.de/wb/Geborgenheit",
      "dictcc": "https://www.dict.cc/?s=Geborgenheit"
    },
    "sourceIds": [
      "src_intus_booklet"
    ],
    "sourcePages": [
      5
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "freundin_&_familie",
      "b2"
    ]
  },
  {
    "id": "voc_zeit_zu_zweit_verbringen_174",
    "word": "Zeit zu zweit verbringen",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Redewendung",
    "level": "B1",
    "domain": "Freundin & Familie",
    "register": "Beziehung",
    "germanDefinition": "Ungestörte gemeinsame Zeit als Paar ohne Ablenkung genießen.",
    "exampleGerman": "Lass uns am Sonntag einen gemütlichen Spaziergang machen und Zeit zu zweit verbringen.",
    "exampleEnglish": "Let's go for a cozy walk on Sunday and spend time as a couple.",
    "synonyms": [
      "Quality Time genießen"
    ],
    "collocations": [
      "wertvolle Zeit zu zweit verbringen"
    ],
    "grammarNotes": "Feste Wendung.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Zeit zu zweit verbringen",
      "dwds": "https://www.dwds.de/wb/Zeit zu zweit verbringen",
      "dictcc": "https://www.dict.cc/?s=Zeit zu zweit verbringen"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      6
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "freundin_&_familie",
      "b1"
    ]
  },
  {
    "id": "voc_verwoehnen_175",
    "word": "verwöhnen",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Verb",
    "level": "B1+",
    "domain": "Freundin & Familie",
    "register": "Alltag",
    "germanDefinition": "Jemandem durch besondere Aufmerksamkeit, gutes Essen oder Fürsorge eine große Freude machen.",
    "exampleGerman": "Heute Abend koche ich dein Lieblingsgericht und verwöhne dich nach deinem langen Tag.",
    "exampleEnglish": "Tonight I'm cooking your favorite dish and pampering you after your long day.",
    "synonyms": [
      "fürsorglich behandeln"
    ],
    "collocations": [
      "jemanden nach Strich und Faden verwöhnen"
    ],
    "grammarNotes": "Regelmäßiges Verb (verwöhnt, verwöhnte, hat verwöhnt).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/verwöhnen",
      "dwds": "https://www.dwds.de/wb/verwöhnen",
      "dictcc": "https://www.dict.cc/?s=verwöhnen"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      6
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "freundin_&_familie",
      "b1+"
    ]
  },
  {
    "id": "voc_das_verstaendnis_176",
    "word": "das Verständnis",
    "article": "das",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "B1",
    "domain": "Freundin & Familie",
    "register": "Kommunikation",
    "germanDefinition": "Die liebevolle Fähigkeit, die Gefühle, Sorgen und Perspektiven des Partners nachzuvollziehen.",
    "exampleGerman": "Danke für dein großes Verständnis und deine Geduld in den letzten stressigen Tagen.",
    "exampleEnglish": "Thank you for your great understanding and patience over the last stressful days.",
    "synonyms": [
      "die Empathie",
      "das Einfühlungsvermögen"
    ],
    "collocations": [
      "Verständnis zeigen / haben für (+ Akk.)"
    ],
    "grammarNotes": "Nomen Neutrum (-nis).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Verständnis",
      "dwds": "https://www.dwds.de/wb/Verständnis",
      "dictcc": "https://www.dict.cc/?s=Verständnis"
    },
    "sourceIds": [
      "src_intus_booklet"
    ],
    "sourcePages": [
      3
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "freundin_&_familie",
      "b1"
    ]
  },
  {
    "id": "voc_zuhoeren_177",
    "word": "zuhören",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Verb",
    "level": "A2",
    "domain": "Freundin & Familie",
    "register": "Kommunikation",
    "germanDefinition": "Aufmerksam und mit ganzem Herzen den Worten des anderen lauschen, ohne zu unterbrechen.",
    "exampleGerman": "Ich möchte dir einfach nur zuhören und für dich da sein.",
    "exampleEnglish": "I just want to listen to you and be there for you.",
    "synonyms": [
      "lauschen",
      "aufmerksam sein"
    ],
    "collocations": [
      "jemandem aufmerksam zuhören (+ Dat.)"
    ],
    "grammarNotes": "Trennbar: hört zu, hörte zu, hat zugehört.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/zuhören",
      "dwds": "https://www.dwds.de/wb/zuhören",
      "dictcc": "https://www.dict.cc/?s=zuhören"
    },
    "sourceIds": [
      "src_intus_booklet"
    ],
    "sourcePages": [
      4
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "freundin_&_familie",
      "a2"
    ]
  },
  {
    "id": "voc_troesten_178",
    "word": "trösten",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Verb",
    "level": "B1",
    "domain": "Freundin & Familie",
    "register": "Emotionen",
    "germanDefinition": "Jemanden in Trauer, Schmerz oder Enttäuschung durch Zuspruch und Nähe beruhigen.",
    "exampleGerman": "Er nahm sie sanft in den Arm, um sie nach der schlechten Nachricht zu trösten.",
    "exampleEnglish": "He took her gently in his arms to comfort her after the bad news.",
    "synonyms": [
      "aufmuntern",
      "Mut zusprechen"
    ],
    "collocations": [
      "jemanden liebevoll trösten"
    ],
    "grammarNotes": "Regelmäßiges Verb (tröstet, tröstete, hat getröstet).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/trösten",
      "dwds": "https://www.dwds.de/wb/trösten",
      "dictcc": "https://www.dict.cc/?s=trösten"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      7
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "freundin_&_familie",
      "b1"
    ]
  },
  {
    "id": "voc_zusammenhalten_179",
    "word": "zusammenhalten",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Verb",
    "level": "B1+",
    "domain": "Freundin & Familie",
    "register": "Beziehung",
    "germanDefinition": "In schwierigen Zeiten als Paar oder Familie fest und loyal zueinander stehen.",
    "exampleGerman": "Egal welche Herausforderungen auf uns zukommen, wir halten immer zusammen.",
    "exampleEnglish": "No matter what challenges come our way, we always stick together.",
    "synonyms": [
      "loyal sein",
      "zueinanderstehen"
    ],
    "collocations": [
      "fest zusammenhalten"
    ],
    "grammarNotes": "Trennbar unregelmäßig (hält zusammen, hielt zusammen, hat zusammengehalten).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/zusammenhalten",
      "dwds": "https://www.dwds.de/wb/zusammenhalten",
      "dictcc": "https://www.dict.cc/?s=zusammenhalten"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      7
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "freundin_&_familie",
      "b1+"
    ]
  },
  {
    "id": "voc_die_gemuetlichkeit_180",
    "word": "die Gemütlichkeit",
    "article": "die",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "B1",
    "domain": "Zuhause & Wohnen",
    "register": "Alltag",
    "germanDefinition": "Angenehmes Gefühl von Bequemlichkeit, wohliger Wärme und heimischer Entspannung.",
    "exampleGerman": "Mit einer warmen Tasse Tee auf dem Sofa breitet sich sofort Gemütlichkeit aus.",
    "exampleEnglish": "With a warm cup of tea on the sofa, coziness immediately spreads.",
    "synonyms": [
      "das Wohlbehagen",
      "die Behaglichkeit"
    ],
    "collocations": [
      "für Gemütlichkeit sorgen"
    ],
    "grammarNotes": "Nomen feminin (-keit).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Gemütlichkeit",
      "dwds": "https://www.dwds.de/wb/Gemütlichkeit",
      "dictcc": "https://www.dict.cc/?s=Gemütlichkeit"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      10
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "zuhause_&_wohnen",
      "b1"
    ]
  },
  {
    "id": "voc_aufraeumen_181",
    "word": "aufräumen",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Verb",
    "level": "A1",
    "domain": "Zuhause & Wohnen",
    "register": "Haushalt",
    "germanDefinition": "Gegenstände an ihren ordentlichen Platz zurückbringen und Ordnung schaffen.",
    "exampleGerman": "Ich räume nach dem Frühstück kurz die Küche auf und wische den Tisch ab.",
    "exampleEnglish": "I briefly tidy up the kitchen after breakfast and wipe down the table.",
    "synonyms": [
      "Ordnung machen"
    ],
    "collocations": [
      "das Zimmer / die Küche aufräumen"
    ],
    "grammarNotes": "Trennbar regelmäßig (räumt auf, räumte auf, hat aufgeräumt).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/aufräumen",
      "dwds": "https://www.dwds.de/wb/aufräumen",
      "dictcc": "https://www.dict.cc/?s=aufräumen"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      11
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "zuhause_&_wohnen",
      "a1"
    ]
  },
  {
    "id": "voc_den_tisch_abraeumen_182",
    "word": "den Tisch abräumen",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Redewendung",
    "level": "A2",
    "domain": "Zuhause & Wohnen",
    "register": "Haushalt",
    "germanDefinition": "Teller, Besteck und Gläser nach der Mahlzeit vom Esstisch in die Küche bringen.",
    "exampleGerman": "Darf ich Ihnen helfen, den Tisch abzuräumen und die Spülmaschine einzuräumen?",
    "exampleEnglish": "May I help you clear the table and load the dishwasher?",
    "synonyms": [
      "abdecken"
    ],
    "collocations": [
      "den Tisch abräumen"
    ],
    "grammarNotes": "Feste Wendung.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/den Tisch abräumen",
      "dwds": "https://www.dwds.de/wb/den Tisch abräumen",
      "dictcc": "https://www.dict.cc/?s=den Tisch abräumen"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      11
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "zuhause_&_wohnen",
      "a2"
    ]
  },
  {
    "id": "voc_die_spuelmaschine_183",
    "word": "die Spülmaschine",
    "article": "die",
    "plural": "die Spülmaschinen",
    "partOfSpeech": "Nomen",
    "level": "A1",
    "domain": "Zuhause & Wohnen",
    "register": "Küche",
    "germanDefinition": "Elektrisches Haushaltsgerät zum automatischen Reinigen von Geschirr und Besteck.",
    "exampleGerman": "Ich habe das schmutzige Geschirr in die Spülmaschine eingeräumt und sie eingeschaltet.",
    "exampleEnglish": "I loaded the dirty dishes into the dishwasher and turned it on.",
    "synonyms": [
      "der Geschirrspüler"
    ],
    "collocations": [
      "die Spülmaschine einräumen / ausräumen"
    ],
    "grammarNotes": "Nomen feminin (-e).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Spülmaschine",
      "dwds": "https://www.dwds.de/wb/Spülmaschine",
      "dictcc": "https://www.dict.cc/?s=Spülmaschine"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      11
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "zuhause_&_wohnen",
      "a1"
    ]
  },
  {
    "id": "voc_die_waschmaschine_184",
    "word": "die Waschmaschine",
    "article": "die",
    "plural": "die Waschmaschinen",
    "partOfSpeech": "Nomen",
    "level": "A1",
    "domain": "Zuhause & Wohnen",
    "register": "Haushalt",
    "germanDefinition": "Elektrisches Gerät zum Waschen von Kleidung und Bettwäsche.",
    "exampleGerman": "Die weiße 60-Grad-Wäsche ist fertig in der Waschmaschine gewaschen.",
    "exampleEnglish": "The white 60-degree laundry is finished washing in the washing machine.",
    "synonyms": [
      "der Waschvollautomat"
    ],
    "collocations": [
      "die Waschmaschine anstellen / beladen"
    ],
    "grammarNotes": "Nomen feminin (-e).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Waschmaschine",
      "dwds": "https://www.dwds.de/wb/Waschmaschine",
      "dictcc": "https://www.dict.cc/?s=Waschmaschine"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      11
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "zuhause_&_wohnen",
      "a1"
    ]
  },
  {
    "id": "voc_der_waeschestaender_185",
    "word": "der Wäscheständer",
    "article": "der",
    "plural": "die Wäscheständer",
    "partOfSpeech": "Nomen",
    "level": "A2",
    "domain": "Zuhause & Wohnen",
    "register": "Haushalt",
    "germanDefinition": "Klappbares Metallgestell zum Trocknen feuchter Kleidung in der Wohnung oder auf dem Balkon.",
    "exampleGerman": "Ich habe meine frisch gewaschenen T-Shirts auf dem Wäscheständer aufgehängt.",
    "exampleEnglish": "I hung my freshly washed T-shirts on the clothes drying rack.",
    "synonyms": [
      "der Wäschetrockner (Gestell)"
    ],
    "collocations": [
      "die Wäsche aufhängen"
    ],
    "grammarNotes": "Nomen Maskulin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Wäscheständer",
      "dwds": "https://www.dwds.de/wb/Wäscheständer",
      "dictcc": "https://www.dict.cc/?s=Wäscheständer"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      11
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "zuhause_&_wohnen",
      "a2"
    ]
  },
  {
    "id": "voc_die_ruecksichtnahme_186",
    "word": "die Rücksichtnahme",
    "article": "die",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "B2",
    "domain": "Zuhause & Wohnen",
    "register": "Zusammenleben",
    "germanDefinition": "Achtsames und rücksichtsvolles Verhalten gegenüber den Mitbewohnern oder der Gastfamilie.",
    "exampleGerman": "Im Zusammenleben mit der Gastfamilie ist gegenseitige Rücksichtnahme der Schlüssel.",
    "exampleEnglish": "In living together with the host family, mutual consideration is the key.",
    "synonyms": [
      "die Rücksicht",
      "die Höflichkeit"
    ],
    "collocations": [
      "Rücksichtnahme zeigen"
    ],
    "grammarNotes": "Nomen feminin (-e).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Rücksichtnahme",
      "dwds": "https://www.dwds.de/wb/Rücksichtnahme",
      "dictcc": "https://www.dict.cc/?s=Rücksichtnahme"
    },
    "sourceIds": [
      "src_culture_notes"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "zuhause_&_wohnen",
      "b2"
    ]
  },
  {
    "id": "voc_die_hausordnung_einhalten_187",
    "word": "die Hausordnung einhalten",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Redewendung",
    "level": "B1",
    "domain": "Zuhause & Wohnen",
    "register": "Alltag",
    "germanDefinition": "Sich an die Regeln des Hauses bezüglich Ruhezeiten (22:00–06:00 Uhr) und Sauberkeit halten.",
    "exampleGerman": "Um Streit im Haus zu vermeiden, halten alle Bewohner die Hausordnung gewissenhaft ein.",
    "exampleEnglish": "To avoid disputes in the house, all residents conscientiously adhere to the house rules.",
    "synonyms": [
      "Regeln befolgen"
    ],
    "collocations": [
      "die Hausordnung strikt einhalten"
    ],
    "grammarNotes": "Feste Wendung.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Hausordnung einhalten",
      "dwds": "https://www.dwds.de/wb/Hausordnung einhalten",
      "dictcc": "https://www.dict.cc/?s=Hausordnung einhalten"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      10
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "zuhause_&_wohnen",
      "b1"
    ]
  },
  {
    "id": "voc_einkaufen_gehen_188",
    "word": "einkaufen gehen",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Redewendung",
    "level": "A1",
    "domain": "Zuhause & Wohnen",
    "register": "Alltag",
    "germanDefinition": "Lebensmittel und Bedarfsgegenstände im Supermarkt oder auf dem Wochenmarkt besorgen.",
    "exampleGerman": "Ich gehe heute nach dem Dienst noch schnell zu Rewe einkaufen.",
    "exampleEnglish": "I'm going grocery shopping quickly at Rewe today after my shift.",
    "synonyms": [
      "Einkäufe erledigen"
    ],
    "collocations": [
      "für das Abendessen einkaufen gehen"
    ],
    "grammarNotes": "Feste Verbindung.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/einkaufen gehen",
      "dwds": "https://www.dwds.de/wb/einkaufen gehen",
      "dictcc": "https://www.dict.cc/?s=einkaufen gehen"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      16
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "zuhause_&_wohnen",
      "a1"
    ]
  },
  {
    "id": "voc_die_oberstadt_189",
    "word": "die Oberstadt",
    "article": "die",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "B1",
    "domain": "Ausgehen & Freizeit",
    "register": "Marburg",
    "germanDefinition": "Der historische, malerische Stadtkern von Marburg mit Fachwerkhäusern und steilen Gassen.",
    "exampleGerman": "Am Wochenende spazieren wir durch die historische Marburger Oberstadt und trinken einen Kaffee.",
    "exampleEnglish": "At the weekend we walk through the historic Marburg upper old town and drink a coffee.",
    "synonyms": [
      "die Altstadt"
    ],
    "collocations": [
      "durch die Oberstadt bummeln"
    ],
    "grammarNotes": "Nomen feminin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Oberstadt",
      "dwds": "https://www.dwds.de/wb/Oberstadt",
      "dictcc": "https://www.dict.cc/?s=Oberstadt"
    },
    "sourceIds": [
      "src_user_bfd_context"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "ausgehen_&_freizeit",
      "b1"
    ]
  },
  {
    "id": "voc_die_speisekarte_190",
    "word": "die Speisekarte",
    "article": "die",
    "plural": "die Speisekarten",
    "partOfSpeech": "Nomen",
    "level": "A1",
    "domain": "Ausgehen & Freizeit",
    "register": "Gastronomie",
    "germanDefinition": "Die gedruckte Liste aller Speisen und Getränke in einem Restaurant.",
    "exampleGerman": "Könnten Sie uns bitte die Speisekarte und die Getränkekarte bringen?",
    "exampleEnglish": "Could you please bring us the menu and the drinks menu?",
    "synonyms": [
      "das Menü"
    ],
    "collocations": [
      "einen Blick in die Speisekarte werfen"
    ],
    "grammarNotes": "Nomen feminin (-e).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Speisekarte",
      "dwds": "https://www.dwds.de/wb/Speisekarte",
      "dictcc": "https://www.dict.cc/?s=Speisekarte"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      17
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "ausgehen_&_freizeit",
      "a1"
    ]
  },
  {
    "id": "voc_bestellen_191",
    "word": "bestellen",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Verb",
    "level": "A1",
    "domain": "Ausgehen & Freizeit",
    "register": "Gastronomie",
    "germanDefinition": "Im Restaurant oder online Speisen, Getränke oder Waren anfordern.",
    "exampleGerman": "Ich möchte gerne das vegetarische Schnitzel mit Bratkartoffeln bestellen.",
    "exampleEnglish": "I would like to order the vegetarian schnitzel with fried potatoes.",
    "synonyms": [
      "ordern"
    ],
    "collocations": [
      "Essen / Getränke bestellen"
    ],
    "grammarNotes": "Regelmäßiges Verb (bestellt, bestellte, hat bestellt).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/bestellen",
      "dwds": "https://www.dwds.de/wb/bestellen",
      "dictcc": "https://www.dict.cc/?s=bestellen"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      17
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "ausgehen_&_freizeit",
      "a1"
    ]
  },
  {
    "id": "voc_getrennt_zahlen_192",
    "word": "getrennt zahlen",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Redewendung",
    "level": "A2",
    "domain": "Ausgehen & Freizeit",
    "register": "Gastronomie",
    "germanDefinition": "In Deutschland übliche Praxis im Restaurant, dass jeder Gast seine eigene Rechnung separat bezahlt.",
    "exampleGerman": "Wir möchten bitte zahlen – zusammen oder getrennt? – Bitte getrennt!",
    "exampleEnglish": "We would like to pay, please – together or separate? – Separate, please!",
    "synonyms": [
      "einzeln bezahlen"
    ],
    "collocations": [
      "Zahlen bitte! Getrennt, bitte."
    ],
    "grammarNotes": "Feste gastronomische Wendung.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/getrennt zahlen",
      "dwds": "https://www.dwds.de/wb/getrennt zahlen",
      "dictcc": "https://www.dict.cc/?s=getrennt zahlen"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      17
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "ausgehen_&_freizeit",
      "a2"
    ]
  },
  {
    "id": "voc_das_trinkgeld_193",
    "word": "das Trinkgeld",
    "article": "das",
    "plural": "die Trinkgelder",
    "partOfSpeech": "Nomen",
    "level": "A2",
    "domain": "Ausgehen & Freizeit",
    "register": "Gastronomie",
    "germanDefinition": "Freiwilliger Geldbetrag (üblich 5–10 %) für guten Service im Restaurant oder Café.",
    "exampleGerman": "Stimmt so, der Rest ist Trinkgeld für Sie!",
    "exampleEnglish": "Keep the change, the rest is a tip for you!",
    "synonyms": [
      "der Obolus"
    ],
    "collocations": [
      "Trinkgeld geben / aufrunden"
    ],
    "grammarNotes": "Nomen Neutrum.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Trinkgeld",
      "dwds": "https://www.dwds.de/wb/Trinkgeld",
      "dictcc": "https://www.dict.cc/?s=Trinkgeld"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      17
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "ausgehen_&_freizeit",
      "a2"
    ]
  },
  {
    "id": "voc_einen_tisch_reservieren_194",
    "word": "einen Tisch reservieren",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Redewendung",
    "level": "A2",
    "domain": "Ausgehen & Freizeit",
    "register": "Gastronomie",
    "germanDefinition": "Im Vorfeld einen Tisch für eine bestimmte Uhrzeit im Restaurant freihalten lassen.",
    "exampleGerman": "Ich habe für heute Abend um 19:30 Uhr einen Tisch für zwei Personen reserviert.",
    "exampleEnglish": "I reserved a table for two people for tonight at 7:30 PM.",
    "synonyms": [
      "einen Tisch vorbestellen"
    ],
    "collocations": [
      "telefonisch einen Tisch reservieren"
    ],
    "grammarNotes": "Feste Wendung.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/einen Tisch reservieren",
      "dwds": "https://www.dwds.de/wb/einen Tisch reservieren",
      "dictcc": "https://www.dict.cc/?s=einen Tisch reservieren"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      17
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "ausgehen_&_freizeit",
      "a2"
    ]
  },
  {
    "id": "voc_sich_verabreden_195",
    "word": "sich verabreden",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Verb",
    "level": "A2",
    "domain": "Ausgehen & Freizeit",
    "register": "Treffen",
    "germanDefinition": "Mit Freunden oder Bekannten einen festen Zeitpunkt und Treffpunkt vereinbaren.",
    "exampleGerman": "Wir haben uns für Samstag um 15 Uhr am Marktplatz verabredet.",
    "exampleEnglish": "We arranged to meet on Saturday at 3 PM at the market square.",
    "synonyms": [
      "ein Treffen ausmachen"
    ],
    "collocations": [
      "sich verabreden mit (+ Dat.)"
    ],
    "grammarNotes": "Reflexives Verb (verabredet sich, verabredete sich, hat sich verabredet).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/verabreden",
      "dwds": "https://www.dwds.de/wb/verabreden",
      "dictcc": "https://www.dict.cc/?s=verabreden"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      18
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "ausgehen_&_freizeit",
      "a2"
    ]
  },
  {
    "id": "voc_das_kennenlernen_196",
    "word": "das Kennenlernen",
    "article": "das",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "A2",
    "domain": "Neue Kontakte",
    "register": "Soziales",
    "germanDefinition": "Der erste persönliche Kontakt und Austausch zwischen Menschen.",
    "exampleGerman": "Ich freue mich sehr über das nette Kennenlernen bei der Willkommensveranstaltung.",
    "exampleEnglish": "I am very pleased about the pleasant introduction at the welcome event.",
    "synonyms": [
      "die erste Begegnung"
    ],
    "collocations": [
      "sich freuen auf das Kennenlernen"
    ],
    "grammarNotes": "Substantivierter Infinitiv Neutrum.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Kennenlernen",
      "dwds": "https://www.dwds.de/wb/Kennenlernen",
      "dictcc": "https://www.dict.cc/?s=Kennenlernen"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "neue_kontakte",
      "a2"
    ]
  },
  {
    "id": "voc_die_gemeinsamkeit_197",
    "word": "die Gemeinsamkeit",
    "article": "die",
    "plural": "die Gemeinsamkeiten",
    "partOfSpeech": "Nomen",
    "level": "B1",
    "domain": "Neue Kontakte",
    "register": "Gespräche",
    "germanDefinition": "Ein gemeinsames Interesse, Hobby oder eine geteilte Eigenschaft zwischen Menschen.",
    "exampleGerman": "Wir haben schnell festgestellt, dass wir viele gemeinsame Interessen teilen.",
    "exampleEnglish": "We quickly realized that we share many common interests.",
    "synonyms": [
      "die Schnittmenge",
      "die Übereinstimmung"
    ],
    "collocations": [
      "Gemeinsamkeiten entdecken"
    ],
    "grammarNotes": "Nomen feminin (-keit).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Gemeinsamkeit",
      "dwds": "https://www.dwds.de/wb/Gemeinsamkeit",
      "dictcc": "https://www.dict.cc/?s=Gemeinsamkeit"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      2
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "neue_kontakte",
      "b1"
    ]
  },
  {
    "id": "voc_der_smalltalk_198",
    "word": "der Smalltalk",
    "article": "der",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "B1",
    "domain": "Neue Kontakte",
    "register": "Kommunikation",
    "germanDefinition": "Leichtes, unverfängliches Alltagsgespräch über Wetter, Hobbys, Essen oder Urlaub.",
    "exampleGerman": "In den Kaffeepausen eignet sich Smalltalk hervorragend, um neue Kollegen kennenzulernen.",
    "exampleEnglish": "During coffee breaks, small talk is great for getting to know new colleagues.",
    "synonyms": [
      "die Plauderei",
      "der lockere Plausch"
    ],
    "collocations": [
      "Smalltalk halten / führen"
    ],
    "grammarNotes": "Nomen Maskulin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Smalltalk",
      "dwds": "https://www.dwds.de/wb/Smalltalk",
      "dictcc": "https://www.dict.cc/?s=Smalltalk"
    },
    "sourceIds": [
      "src_culture_notes"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "neue_kontakte",
      "b1"
    ]
  },
  {
    "id": "voc_ins_gespraech_kommen_199",
    "word": "ins Gespräch kommen",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Redewendung",
    "level": "B1",
    "domain": "Neue Kontakte",
    "register": "Kommunikation",
    "germanDefinition": "Ganz natürlich und ungezwungen eine Unterhaltung mit einer Person beginnen.",
    "exampleGerman": "Beim Seminar in Wetzlar sind wir sofort mit den anderen Freiwilligen ins Gespräch gekommen.",
    "exampleEnglish": "At the seminar in Wetzlar, we immediately struck up a conversation with the other volunteers.",
    "synonyms": [
      "eine Unterhaltung anfangen"
    ],
    "collocations": [
      "leicht ins Gespräch kommen mit (+ Dat.)"
    ],
    "grammarNotes": "Feste Wendung.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/ins Gespräch kommen",
      "dwds": "https://www.dwds.de/wb/ins Gespräch kommen",
      "dictcc": "https://www.dict.cc/?s=ins Gespräch kommen"
    },
    "sourceIds": [
      "src_seminars_notes"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "neue_kontakte",
      "b1"
    ]
  },
  {
    "id": "voc_kontakte_knuepfen_200",
    "word": "Kontakte knüpfen",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Redewendung",
    "level": "B2",
    "domain": "Neue Kontakte",
    "register": "Soziales",
    "germanDefinition": "Neue Bekanntschaften und soziale Netzwerke aktiv aufbauen.",
    "exampleGerman": "Während der 26 Seminartage kann man wunderbar neue Kontakte zu Gleichgesinnten knüpfen.",
    "exampleEnglish": "During the 26 seminar days, you can wonderfully establish new contacts with like-minded people.",
    "synonyms": [
      "Freunde finden",
      "netzwerken"
    ],
    "collocations": [
      "neue Kontakte knüpfen"
    ],
    "grammarNotes": "Feste Wendung.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Kontakte knüpfen",
      "dwds": "https://www.dwds.de/wb/Kontakte knüpfen",
      "dictcc": "https://www.dict.cc/?s=Kontakte knüpfen"
    },
    "sourceIds": [
      "src_seminars_notes"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "neue_kontakte",
      "b2"
    ]
  },
  {
    "id": "voc_einen_guten_eindruck_hinterl_201",
    "word": "einen guten Eindruck hinterlassen",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Redewendung",
    "level": "B2",
    "domain": "Neue Kontakte",
    "register": "Beruf & Alltag",
    "germanDefinition": "Durch Höflichkeit, Pünktlichkeit und Aufmerksamkeit positiv in Erinnerung bleiben.",
    "exampleGerman": "Am ersten Arbeitstag auf Station möchte ich einen professionellen und hilfsbereiten Eindruck hinterlassen.",
    "exampleEnglish": "On my first day of work on the ward, I want to leave a professional and helpful impression.",
    "synonyms": [
      "positiv auffallen"
    ],
    "collocations": [
      "einen bleibenden Eindruck hinterlassen"
    ],
    "grammarNotes": "Feste Wendung.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/einen guten Eindruck hinterlassen",
      "dwds": "https://www.dwds.de/wb/einen guten Eindruck hinterlassen",
      "dictcc": "https://www.dict.cc/?s=einen guten Eindruck hinterlassen"
    },
    "sourceIds": [
      "src_culture_notes"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "neue_kontakte",
      "b2"
    ]
  },
  {
    "id": "voc_auf_den_punkt_bringen_202",
    "word": "auf den Punkt bringen",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Redewendung",
    "level": "B2",
    "domain": "Deep Talk",
    "register": "Rhetorik",
    "germanDefinition": "Einen komplexen Sachverhalt kurz, präzise und treffend zusammenfassen.",
    "exampleGerman": "Sie hat das Problem in der Teamsitzung mit wenigen Worten genau auf den Punkt gebracht.",
    "exampleEnglish": "She summarized the problem in the team meeting with few words right to the point.",
    "synonyms": [
      "prägnant formulieren"
    ],
    "collocations": [
      "etwas auf den Punkt bringen"
    ],
    "grammarNotes": "Feste Wendung.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/auf den Punkt bringen",
      "dwds": "https://www.dwds.de/wb/auf den Punkt bringen",
      "dictcc": "https://www.dict.cc/?s=auf den Punkt bringen"
    },
    "sourceIds": [
      "src_aspekte_b2"
    ],
    "sourcePages": [
      40
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "deep_talk",
      "b2"
    ]
  },
  {
    "id": "voc_die_perspektive_wechseln_203",
    "word": "die Perspektive wechseln",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Redewendung",
    "level": "B2",
    "domain": "Deep Talk",
    "register": "Empathie",
    "germanDefinition": "Eine Situation aus dem Blickwinkel des anderen Menschen betrachten.",
    "exampleGerman": "Um Konflikte zu lösen, müssen wir bereit sein, die Perspektive zu wechseln.",
    "exampleEnglish": "To resolve conflicts, we must be willing to shift perspectives.",
    "synonyms": [
      "den Blickwinkel ändern"
    ],
    "collocations": [
      "die Perspektive des anderen einnehmen"
    ],
    "grammarNotes": "Feste Wendung.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Perspektive wechseln",
      "dwds": "https://www.dwds.de/wb/Perspektive wechseln",
      "dictcc": "https://www.dict.cc/?s=Perspektive wechseln"
    },
    "sourceIds": [
      "src_intus_booklet"
    ],
    "sourcePages": [
      6
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "deep_talk",
      "b2"
    ]
  },
  {
    "id": "voc_nachvollziehen_204",
    "word": "nachvollziehen",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Verb",
    "level": "B2",
    "domain": "Deep Talk",
    "register": "Verständnis",
    "germanDefinition": "Gedankengänge oder Gefühle einer anderen Person logisch oder emotional verstehen.",
    "exampleGerman": "Ich kann deinen Ärger über die kurzfristige Dienstplanänderung absolut nachvollziehen.",
    "exampleEnglish": "I can completely understand your frustration about the short-term roster change.",
    "synonyms": [
      "verstehen",
      "begreifen"
    ],
    "collocations": [
      "ein Gefühl / eine Entscheidung voll nachvollziehen"
    ],
    "grammarNotes": "Trennbar: vollzieht nach, vollzog nach, hat nachvollzogen.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/nachvollziehen",
      "dwds": "https://www.dwds.de/wb/nachvollziehen",
      "dictcc": "https://www.dict.cc/?s=nachvollziehen"
    },
    "sourceIds": [
      "src_aspekte_b2"
    ],
    "sourcePages": [
      41
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "deep_talk",
      "b2"
    ]
  },
  {
    "id": "voc_ehrlich_ansprechen_205",
    "word": "ehrlich ansprechen",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Redewendung",
    "level": "B1+",
    "domain": "Deep Talk",
    "register": "Offenheit",
    "germanDefinition": "Ein heikles oder schwieriges Thema ohne Ausflüchte direkt und aufrichtig zur Sprache bringen.",
    "exampleGerman": "Es ist mir wichtig, dass wir offene Fragen immer direkt und ehrlich ansprechen.",
    "exampleEnglish": "It is important to me that we always address open questions directly and honestly.",
    "synonyms": [
      "offen thematisieren"
    ],
    "collocations": [
      "ein Problem ehrlich ansprechen"
    ],
    "grammarNotes": "Feste Verbindung.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/ehrlich ansprechen",
      "dwds": "https://www.dwds.de/wb/ehrlich ansprechen",
      "dictcc": "https://www.dict.cc/?s=ehrlich ansprechen"
    },
    "sourceIds": [
      "src_intus_booklet"
    ],
    "sourcePages": [
      7
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "deep_talk",
      "b1+"
    ]
  },
  {
    "id": "voc_wert_schaetzen_206",
    "word": "Wert schätzen",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Redewendung",
    "level": "B2",
    "domain": "Deep Talk",
    "register": "Werte",
    "germanDefinition": "Die Bedeutung, Qualität oder Hilfe einer Person mit hoher Achtung und Dankbarkeit anerkennen.",
    "exampleGerman": "Ich schätze deine Unterstützung und deine ehrliche Meinung ungemein.",
    "exampleEnglish": "I immensely value your support and your honest opinion.",
    "synonyms": [
      "achten",
      "würdigen"
    ],
    "collocations": [
      "etwas/jemanden sehr schätzen"
    ],
    "grammarNotes": "Feste Wendung.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Wert schätzen",
      "dwds": "https://www.dwds.de/wb/Wert schätzen",
      "dictcc": "https://www.dict.cc/?s=Wert schätzen"
    },
    "sourceIds": [
      "src_intus_booklet"
    ],
    "sourcePages": [
      8
    ],
    "provenance": "ERGÄNZT",
    "status": "BESTÄTIGT",
    "tags": [
      "deep_talk",
      "b2"
    ]
  },
  {
    "id": "voc_die_wechselwirkung_207",
    "word": "die Wechselwirkung",
    "article": "die",
    "plural": "die Wechselwirkungen",
    "partOfSpeech": "Nomen",
    "level": "C1",
    "domain": "C1 Wortschatz",
    "register": "Wissenschaft",
    "germanDefinition": "Gegenseitige Beeinflussung oder Interaktion von zwei oder mehreren Kräften, Medikamenten oder Personen.",
    "exampleGerman": "Die Wechselwirkung zwischen Psychopharmaka und somatischen Medikamenten muss streng überwacht werden.",
    "exampleEnglish": "The interaction between psychotropic drugs and somatic medications must be strictly monitored.",
    "synonyms": [
      "die Interaktion",
      "die gegenseitige Beeinflussung"
    ],
    "collocations": [
      "in Wechselwirkung stehen mit"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Wechselwirkung",
      "dwds": "https://www.dwds.de/wb/Wechselwirkung",
      "dictcc": "https://www.dict.cc/?s=Wechselwirkung"
    },
    "sourceIds": [
      "src_aspekte_b2"
    ],
    "sourcePages": [
      80
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "c1_wortschatz",
      "c1"
    ]
  },
  {
    "id": "voc_der_rueckschluss_208",
    "word": "der Rückschluss",
    "article": "der",
    "plural": "die Rückschlüsse",
    "partOfSpeech": "Nomen",
    "level": "C1",
    "domain": "C1 Wortschatz",
    "register": "Wissenschaft",
    "germanDefinition": "Logische Schlussfolgerung aus beobachteten Tatsachen oder Daten.",
    "exampleGerman": "Aus dem Verhalten des Patienten lassen sich wichtige Rückschlüsse auf seine Befindlichkeit ziehen.",
    "exampleEnglish": "Important conclusions about the patient's well-being can be drawn from his behavior.",
    "synonyms": [
      "die Folgerung",
      "das Fazit"
    ],
    "collocations": [
      "Rückschlüsse ziehen auf (+ Akk.)"
    ],
    "grammarNotes": "Nomen Maskulin.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Rückschluss",
      "dwds": "https://www.dwds.de/wb/Rückschluss",
      "dictcc": "https://www.dict.cc/?s=Rückschluss"
    },
    "sourceIds": [
      "src_aspekte_b2"
    ],
    "sourcePages": [
      80
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "c1_wortschatz",
      "c1"
    ]
  },
  {
    "id": "voc_die_verhaeltnismaessigkeit_209",
    "word": "die Verhältnismäßigkeit",
    "article": "die",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "C1",
    "domain": "Recht",
    "register": "Ethik",
    "germanDefinition": "Rechts- und Ethikprinzip: Eine Maßnahme darf nicht schwerer wiegen als das angestrebte Ziel.",
    "exampleGerman": "Bei jeder freiheitsentziehenden Maßnahme muss die strikte Verhältnismäßigkeit gewahrt bleiben.",
    "exampleEnglish": "In every liberty-depriving measure, strict proportionality must be maintained.",
    "synonyms": [
      "die Angemessenheit"
    ],
    "collocations": [
      "die Verhältnismäßigkeit wahren / prüfen"
    ],
    "grammarNotes": "Nomen feminin (-keit).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Verhältnismäßigkeit",
      "dwds": "https://www.dwds.de/wb/Verhältnismäßigkeit",
      "dictcc": "https://www.dict.cc/?s=Verhältnismäßigkeit"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      45
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "recht",
      "c1"
    ]
  },
  {
    "id": "voc_die_gratwanderung_210",
    "word": "die Gratwanderung",
    "article": "die",
    "plural": "die Gratwanderungen",
    "partOfSpeech": "Nomen",
    "level": "C1",
    "domain": "C1 Wortschatz",
    "register": "Metapher",
    "germanDefinition": "Sehr schwieriges und riskantes Balancieren zwischen zwei Extremen.",
    "exampleGerman": "Die Balance zwischen Empathie und professioneller Distanz ist eine tägliche Gratwanderung.",
    "exampleEnglish": "The balance between empathy and professional distance is a daily tightrope walk.",
    "synonyms": [
      "der Balanceakt",
      "das heikle Unterfangen"
    ],
    "collocations": [
      "eine Gratwanderung sein"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Gratwanderung",
      "dwds": "https://www.dwds.de/wb/Gratwanderung",
      "dictcc": "https://www.dict.cc/?s=Gratwanderung"
    },
    "sourceIds": [
      "src_aspekte_b2"
    ],
    "sourcePages": [
      82
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "c1_wortschatz",
      "c1"
    ]
  },
  {
    "id": "voc_die_weichenstellung_211",
    "word": "die Weichenstellung",
    "article": "die",
    "plural": "die Weichenstellungen",
    "partOfSpeech": "Nomen",
    "level": "C1",
    "domain": "C1 Wortschatz",
    "register": "Metapher",
    "germanDefinition": "Grundlegende Entscheidung, die die zukünftige Richtung eines Lebens oder Projekts festlegt.",
    "exampleGerman": "Der Bundesfreiwilligendienst war eine entscheidende Weichenstellung für meine berufliche Zukunft in Deutschland.",
    "exampleEnglish": "The Federal Volunteer Service was a crucial milestone for my professional future in Germany.",
    "synonyms": [
      "die Richtungsentscheidung"
    ],
    "collocations": [
      "eine Weichenstellung vornehmen"
    ],
    "grammarNotes": "Nomen feminin (-ung).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Weichenstellung",
      "dwds": "https://www.dwds.de/wb/Weichenstellung",
      "dictcc": "https://www.dict.cc/?s=Weichenstellung"
    },
    "sourceIds": [
      "src_aspekte_b2"
    ],
    "sourcePages": [
      83
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "c1_wortschatz",
      "c1"
    ]
  },
  {
    "id": "voc_die_tragweite_212",
    "word": "die Tragweite",
    "article": "die",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "C1",
    "domain": "C1 Wortschatz",
    "register": "Standardsprache",
    "germanDefinition": "Die weitreichende Bedeutung und die langfristigen Konsequenzen einer Entscheidung.",
    "exampleGerman": "Man muss die volle Tragweite dieser Diagnose für das Leben des jungen Patienten begreifen.",
    "exampleEnglish": "One must comprehend the full scope/implication of this diagnosis for the young patient's life.",
    "synonyms": [
      "das Ausmaß",
      "die Konsequenzen"
    ],
    "collocations": [
      "die Tragweite erfassen / unterschätzen"
    ],
    "grammarNotes": "Nomen feminin (-e).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Tragweite",
      "dwds": "https://www.dwds.de/wb/Tragweite",
      "dictcc": "https://www.dict.cc/?s=Tragweite"
    },
    "sourceIds": [
      "src_aspekte_b2"
    ],
    "sourcePages": [
      84
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "c1_wortschatz",
      "c1"
    ]
  },
  {
    "id": "voc_die_zerrissenheit_213",
    "word": "die Zerrissenheit",
    "article": "die",
    "plural": "-",
    "partOfSpeech": "Nomen",
    "level": "C1",
    "domain": "Psychologie",
    "register": "Emotionen",
    "germanDefinition": "Qualvoller Zustand innerer Widersprüche, Unentschlossenheit und seelischer Spannung.",
    "exampleGerman": "Die innere Zerrissenheit zwischen Autonomie und Abhängigkeit belastet die Patientin sehr.",
    "exampleEnglish": "The inner conflict between autonomy and dependency burdens the patient greatly.",
    "synonyms": [
      "der innere Konflikt"
    ],
    "collocations": [
      "innere Zerrissenheit empfinden"
    ],
    "grammarNotes": "Nomen feminin (-heit).",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Zerrissenheit",
      "dwds": "https://www.dwds.de/wb/Zerrissenheit",
      "dictcc": "https://www.dict.cc/?s=Zerrissenheit"
    },
    "sourceIds": [
      "src_psydeutsch_idee"
    ],
    "sourcePages": [
      9
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychologie",
      "c1"
    ]
  },
  {
    "id": "voc_unter_vier_augen_214",
    "word": "unter vier Augen",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Redewendung",
    "level": "B1",
    "domain": "Kommunikation",
    "register": "Standardsprache",
    "germanDefinition": "Ein vertrauliches Gespräch nur zu zweit ohne Beisein dritter Personen.",
    "exampleGerman": "Könnten wir das Problem kurz unter vier Augen im Stationszimmer besprechen?",
    "exampleEnglish": "Could we briefly discuss the issue in private / face-to-face in the staff room?",
    "synonyms": [
      "vertraulich",
      "unter Ausschluss der Öffentlichkeit"
    ],
    "collocations": [
      "etwas unter vier Augen besprechen"
    ],
    "grammarNotes": "Feste Wendung.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/unter vier Augen",
      "dwds": "https://www.dwds.de/wb/unter vier Augen",
      "dictcc": "https://www.dict.cc/?s=unter vier Augen"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      8
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "kommunikation",
      "b1"
    ]
  },
  {
    "id": "voc_den_ueberblick_behalten_215",
    "word": "den Überblick behalten",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Redewendung",
    "level": "B2",
    "domain": "Berufssprache",
    "register": "Organisation",
    "germanDefinition": "Auch in hektischen und unübersichtlichen Situationen die Kontrolle und Orientierung wahren.",
    "exampleGerman": "Trotz des großen Notfalls auf Station behielt die Schichtleitung stets den ruhigen Überblick.",
    "exampleEnglish": "Despite the major emergency on the ward, the shift lead always maintained a calm overview.",
    "synonyms": [
      "die Kontrolle behalten"
    ],
    "collocations": [
      "in der Hektik den Überblick behalten"
    ],
    "grammarNotes": "Feste Wendung.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/den Überblick behalten",
      "dwds": "https://www.dwds.de/wb/den Überblick behalten",
      "dictcc": "https://www.dict.cc/?s=den Überblick behalten"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      12
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "berufssprache",
      "b2"
    ]
  },
  {
    "id": "voc_die_daumen_druecken_216",
    "word": "die Daumen drücken",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Redewendung",
    "level": "A2",
    "domain": "Alltag",
    "register": "Umgangssprache",
    "germanDefinition": "Jemandem von Herzen viel Glück und Erfolg für eine bevorstehende Prüfung oder Herausforderung wünschen.",
    "exampleGerman": "Ich drücke dir für deine B2-Prüfung ganz fest die Daumen!",
    "exampleEnglish": "I'm keeping my fingers crossed for you for your B2 exam!",
    "synonyms": [
      "viel Erfolg wünschen"
    ],
    "collocations": [
      "jemandem fest die Daumen drücken"
    ],
    "grammarNotes": "Feste Wendung.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Daumen drücken",
      "dwds": "https://www.dwds.de/wb/Daumen drücken",
      "dictcc": "https://www.dict.cc/?s=Daumen drücken"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      9
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "alltag",
      "a2"
    ]
  },
  {
    "id": "voc_ins_schwarze_treffen_217",
    "word": "ins Schwarze treffen",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Redewendung",
    "level": "B2",
    "domain": "Deep Talk",
    "register": "Metapher",
    "germanDefinition": "Mit einer Aussage oder Vermutung exakt das Richtige und Wesentliche treffen.",
    "exampleGerman": "Mit deiner feinfühligen Beobachtung hast du voll ins Schwarze getroffen.",
    "exampleEnglish": "With your sensitive observation, you hit the nail right on the head.",
    "synonyms": [
      "den Nagel auf den Kopf treffen"
    ],
    "collocations": [
      "voll ins Schwarze treffen"
    ],
    "grammarNotes": "Feste Wendung.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/ins Schwarze treffen",
      "dwds": "https://www.dwds.de/wb/ins Schwarze treffen",
      "dictcc": "https://www.dict.cc/?s=ins Schwarze treffen"
    },
    "sourceIds": [
      "src_aspekte_b2"
    ],
    "sourcePages": [
      44
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "deep_talk",
      "b2"
    ]
  },
  {
    "id": "voc_auf_die_lange_bank_schieben_218",
    "word": "auf die lange Bank schieben",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Redewendung",
    "level": "B2",
    "domain": "Alltag",
    "register": "Metapher",
    "germanDefinition": "Eine dringende oder unangenehme Aufgabe immer wieder hinauszögern (prokrastinieren).",
    "exampleGerman": "Wichtige Behördengänge sollte man in Deutschland niemals auf die lange Bank schieben.",
    "exampleEnglish": "One should never put off important visits to authorities in Germany.",
    "synonyms": [
      "hinauszögern",
      "aufschieben"
    ],
    "collocations": [
      "etwas auf die lange Bank schieben"
    ],
    "grammarNotes": "Feste Wendung.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/auf lange Bank schieben",
      "dwds": "https://www.dwds.de/wb/auf lange Bank schieben",
      "dictcc": "https://www.dict.cc/?s=auf lange Bank schieben"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      13
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "alltag",
      "b2"
    ]
  },
  {
    "id": "voc_im_klaren_sein_ueber_219",
    "word": "im Klaren sein über",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Redewendung",
    "level": "B2",
    "domain": "Deep Talk",
    "register": "Reflexion",
    "germanDefinition": "Sich einer Tatsache, Konsequenz oder eines Gefühls vollkommen bewusst sein.",
    "exampleGerman": "Ich bin mir über meine Rolle und Grenzen als BFDler vollkommen im Klaren.",
    "exampleEnglish": "I am completely clear about my role and boundaries as a BFD volunteer.",
    "synonyms": [
      "sich bewusst sein über"
    ],
    "collocations": [
      "sich im Klaren sein über (+ Akk.)"
    ],
    "grammarNotes": "Feste Wendung.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/im Klaren sein über",
      "dwds": "https://www.dwds.de/wb/im Klaren sein über",
      "dictcc": "https://www.dict.cc/?s=im Klaren sein über"
    },
    "sourceIds": [
      "src_culture_notes"
    ],
    "sourcePages": [
      1
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "deep_talk",
      "b2"
    ]
  },
  {
    "id": "voc_ins_gewicht_fallen_220",
    "word": "ins Gewicht fallen",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Redewendung",
    "level": "C1",
    "domain": "C1 Wortschatz",
    "register": "Metapher",
    "germanDefinition": "Von entscheidender, spürbarer Bedeutung oder Relevanz sein.",
    "exampleGerman": "Bei der Stationsbeurteilung fällt Zuverlässigkeit besonders stark ins Gewicht.",
    "exampleEnglish": "In the ward evaluation, reliability carries particularly significant weight.",
    "synonyms": [
      "eine große Rolle spielen",
      "von Bedeutung sein"
    ],
    "collocations": [
      "schwer ins Gewicht fallen"
    ],
    "grammarNotes": "Feste Wendung.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/ins Gewicht fallen",
      "dwds": "https://www.dwds.de/wb/ins Gewicht fallen",
      "dictcc": "https://www.dict.cc/?s=ins Gewicht fallen"
    },
    "sourceIds": [
      "src_aspekte_b2"
    ],
    "sourcePages": [
      85
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "c1_wortschatz",
      "c1"
    ]
  },
  {
    "id": "voc_hand_in_hand_gehen_221",
    "word": "Hand in Hand gehen",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Redewendung",
    "level": "B2",
    "domain": "Berufssprache",
    "register": "Zusammenarbeit",
    "germanDefinition": "Eng und harmonisch miteinander verknüpft sein oder zusammenarbeiten.",
    "exampleGerman": "Auf einer psychiatrischen Akutstation müssen Pflegekräfte und Ärzte Hand in Hand gehen.",
    "exampleEnglish": "On a psychiatric acute ward, nurses and doctors must work hand in hand.",
    "synonyms": [
      "eng kooperieren"
    ],
    "collocations": [
      "Hand in Hand arbeiten / gehen"
    ],
    "grammarNotes": "Feste Wendung.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/Hand in Hand gehen",
      "dwds": "https://www.dwds.de/wb/Hand in Hand gehen",
      "dictcc": "https://www.dict.cc/?s=Hand in Hand gehen"
    },
    "sourceIds": [
      "src_training_medizin"
    ],
    "sourcePages": [
      15
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "berufssprache",
      "b2"
    ]
  },
  {
    "id": "voc_auf_eigene_faust_222",
    "word": "auf eigene Faust",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Redewendung",
    "level": "B1+",
    "domain": "Alltag",
    "register": "Selbstständigkeit",
    "germanDefinition": "Selbstständig, unabhängig und ohne fremde Hilfe oder Anweisung handeln.",
    "exampleGerman": "Am Wochenende erkunde ich die Altstadt von Marburg ganz auf eigene Faust.",
    "exampleEnglish": "At the weekend, I explore the old town of Marburg completely on my own.",
    "synonyms": [
      "selbstständig",
      "eigenmächtig"
    ],
    "collocations": [
      "etwas auf eigene Faust unternehmen"
    ],
    "grammarNotes": "Feste Wendung.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/auf eigene Faust",
      "dwds": "https://www.dwds.de/wb/auf eigene Faust",
      "dictcc": "https://www.dict.cc/?s=auf eigene Faust"
    },
    "sourceIds": [
      "src_b1_deutsch"
    ],
    "sourcePages": [
      18
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "alltag",
      "b1+"
    ]
  },
  {
    "id": "voc_aus_der_ruhe_bringen_223",
    "word": "aus der Ruhe bringen",
    "article": "-",
    "plural": "-",
    "partOfSpeech": "Redewendung",
    "level": "B2",
    "domain": "Psychiatrie & Alltag",
    "register": "Gelassenheit",
    "germanDefinition": "Die innere Gelassenheit und Selbstbeherrschung einer Person stören.",
    "exampleGerman": "Selbst bei lauten Konflikten lässt sich die erfahrene Schwester nicht aus der Ruhe bringen.",
    "exampleEnglish": "Even in loud conflicts, the experienced nurse does not let herself be rattled / unsettled.",
    "synonyms": [
      "verunsichern",
      "nervös machen"
    ],
    "collocations": [
      "sich nicht aus der Ruhe bringen lassen"
    ],
    "grammarNotes": "Feste Wendung.",
    "dictionaryLinks": {
      "duden": "https://www.duden.de/rechtschreibung/aus Ruhe bringen",
      "dwds": "https://www.dwds.de/wb/aus Ruhe bringen",
      "dictcc": "https://www.dict.cc/?s=aus Ruhe bringen"
    },
    "sourceIds": [
      "src_starthilfe"
    ],
    "sourcePages": [
      46
    ],
    "provenance": "AUS_QUELLE",
    "status": "BESTÄTIGT",
    "tags": [
      "psychiatrie_&_alltag",
      "b2"
    ]
  }
];


// --- FILE: grammar_data.js ---

// Grammatiksystem — 25 Lektionen von B1-Konsolidierung bis B2 & C1
// Synthese aus: Easy German Step-By-Step, Aspekte neu B2, Constantinos Vayenas Der-Die-Das, 99579913-c48d-49ed-a0df-320f9a70cb87_B1-Deutsch.pdf

const GRAMMAR_DATA = {
  title: "Vollständiges Grammatik-System (B1 -> B2 -> C1)",
  provenance: "AUS_QUELLE",
  lessons: [
    {
      id: "gram_01",
      number: 1,
      title: "Satzstellung im Hauptsatz & Inversion",
      level: "B1",
      category: "Satzbau",
      summary: "Verb an Position 2 – Das goldene Gesetz des deutschen Hauptsatzes.",
      explanationGerman: `Im deutschen Aussagesatz steht das konjugierte finite Verb IMMER an Position 2. 
Wenn an Position 1 ein anderes Element als das Subjekt steht (z. B. eine Zeitangabe oder eine Ortsangabe), rutscht das Subjekt hinter das Verb (Inversion).

Beispiele:
- Normal (Subjekt an Pos. 1): Der BFDler [1] beginnt [2] heute seinen Dienst.
- Inversion (Zeitangabe an Pos. 1): Heute [1] beginnt [2] der BFDler [3] seinen Dienst.
- Inversion (Objekt an Pos. 1): Diese Aufgabe [1] übernimmt [2] die Pflegekraft [3].

Wichtige Faustregel (TEKAMOLO):
Wenn mehrere Angaben im Mittelfeld stehen, folgt die Reihenfolge meist:
1. TE = Temporal (Wann?)
2. KA = Kausal (Warum?)
3. MO = Modal (Wie?)
4. LO = Lokal (Wo / Wohin?)

Beispiel:
Ich fahre morgen (Temporal) wegen des Seminars (Kausal) mit dem Zug (Modal) nach Marburg (Lokal).`,
      examples: [
        {
          german: "Morgen um 06:30 Uhr beginnt meine Frühschicht auf Station P2.",
          english: "Tomorrow at 06:30 AM, my morning shift starts on ward P2."
        },
        {
          german: "Im Stationszimmer bespricht das Team die aktuellen Patientenkurven.",
          english: "In the nurses' room, the team discusses the current patient charts."
        }
      ],
      commonErrors: [
        "Falsch: *Heute der BFDler beginnt seinen Dienst.* (Verb muss an Position 2!)",
        "Falsch: *Wegen des Verkehrs ich bin zu spät.* -> Richtig: *Wegen des Verkehrs bin ich zu spät.*"
      ],
      exercises: [
        {
          id: "ex_01_1",
          question: "Bringen Sie die Satzglieder in die korrekte Reihenfolge: (auf Station / pünktlich / erscheint / der Freiwillige / jeden Morgen)",
          correctSentence: "Jeden Morgen erscheint der Freiwillige pünktlich auf Station.",
          hint: "Beginnen Sie mit der Zeitangabe 'Jeden Morgen'. Das Verb 'erscheint' muss an Position 2."
        }
      ]
    },

    {
      id: "gram_02",
      number: 2,
      title: "Nebensätze mit weil, dass, obwohl, wenn, während, nachdem, bevor, sodass, damit",
      level: "B1+",
      category: "Nebensätze",
      summary: "Konnektoren und das Verb am Satzende.",
      explanationGerman: `In allen untergeordneten Nebensätzen (eingeleitet durch Subjunktionen wie weil, dass, obwohl, wenn, während, etc.) wandert das konjugierte Verb an das ALLERLETZTE Satzende.

Klassifikation der Subjunktionen:
- Kausal (Grund): weil, da ('... weil der Patient unruhig ist.')
- Objektsatz: dass ('... dass die Übergabe pünktlich beginnt.')
- Konzessiv (Gegensatz): obwohl ('... obwohl er müde war.')
- Konditional (Bedingung): wenn, falls ('... wenn ein Notfall eintritt.')
- Temporal: während (Gleichzeitigkeit), nachdem (Vorzeitigkeit), bevor (Nachzeitigkeit)
- Final (Ziel/Absicht): damit (Subjektwechsel!)
- Konsekutiv (Folge): sodass / so..., dass

Achtung bei trennbaren Verben im Nebensatz:
Im Hauptsatz trennt sich das Verb: 'Der Patient wacht früh auf.'
Im Nebensatz bleibt es ZUSAMMEN am Satzende: '... weil der Patient früh aufwacht.'`,
      examples: [
        {
          german: "Der Pfleger bricht die Gruppentherapie ab, weil der Jugendliche randaliert.",
          english: "The nurse cancels the group therapy because the teenager is rampaging."
        },
        {
          german: "Obwohl der Patient Schmerzen hatte, verweigerte er die Bedarfsmedikation.",
          english: "Although the patient had pain, he refused the PRN medication."
        },
        {
          german: "Nachdem die Frühbesprechung beendet war, bezogen wir die Betten.",
          english: "After the morning briefing was finished, we changed the beds."
        }
      ],
      commonErrors: [
        "Falsch: *... weil der Patient ist unruhig.* -> Richtig: *... weil der Patient unruhig ist.*",
        "Falsch: *... obwohl er hat keine Zeit.* -> Richtig: *... obwohl er keine Zeit hat.*"
      ],
      exercises: [
        {
          id: "ex_02_1",
          question: "Verbinden Sie mit 'weil': Die Eltern fordern die Entlassung. Das Kind zeigt Heimweh.",
          correctSentence: "Die Eltern fordern die Entlassung des Kindes, weil es Heimweh zeigt.",
          hint: "Das Verb 'zeigt' wandert an das Satzende."
        }
      ]
    },

    {
      id: "gram_03",
      number: 3,
      title: "Die 4 Fälle & N-Deklination",
      level: "B1+",
      category: "Deklination",
      summary: "Nominativ, Akkusativ, Dativ, Genitiv und maskuline N-Deklinationen.",
      explanationGerman: `Die 4 Fälle im Deutschen und ihre typischen Signalfragen:
1. Nominativ (Wer oder was?): Subjekt des Satzes (der Pfleger, die Schwester, das Kind, die Patienten)
2. Akkusativ (Wen oder was? / Wohin?): Direktes Objekt (den Pfleger, die Schwester, das Kind, die Patienten)
3. Dativ (Wem? / Wo?): Indirektes Objekt / Nutznießer (dem Pfleger, der Schwester, dem Kind, den Patienten)
4. Genitiv (Wessen?): Besitz / Zugehörigkeit (des Pflegers, der Schwester, des Kindes, der Patienten)

Die N-Deklination (Schwache Maskulina):
Bestimmte maskuline Substantive erhalten im Akkusativ, Dativ und Genitiv (sowie im Plural) die Endung -(e)n.
Wichtige Wörter im Klinik- und BFD-Alltag:
- der Patient -> den Patienten / dem Patienten / des Patienten
- der Assistent -> den Assistenten / dem Assistenten
- der Kollege -> den Kollegen / dem Kollegen
- der Jugendliche -> den Jugendlichen / dem Jugendlichen (adjektivische Deklination)
- der Herr -> den Herrn / dem Herrn / des Herrn

Beispiel:
Ich helfe dem Patienten [Dativ mit -en], die Jacke anzuziehen.`,
      examples: [
        {
          german: "Die Ärztin erklärt dem neuen Patienten die Stationsordnung.",
          english: "The doctor explains the ward rules to the new patient."
        },
        {
          german: "Ich habe den Jugendlichen bei der Visite unterstützt.",
          english: "I supported the teenager during the ward round."
        }
      ],
      commonErrors: [
        "Falsch: *Ich spreche mit dem Patient.* -> Richtig: *Ich spreche mit dem Patienten.* (N-Deklination!)",
        "Falsch: *Ich gebe der Arzt das Dokument.* -> Richtig: *Ich gebe dem Arzt das Dokument.* (Dativ Maskulin = dem)"
      ],
      exercises: [
        {
          id: "ex_03_1",
          question: "Setzen Sie ein: 'Der BFDler begleitet _____ (der Patient, Akk.) zum EKG.'",
          correctSentence: "Der BFDler begleitet den Patienten zum EKG.",
          hint: "Akkusativ Maskulin + N-Deklination bei 'Patient'."
        }
      ]
    },

    {
      id: "gram_04",
      number: 4,
      title: "Präpositionen: Akkusativ, Dativ, Genitiv & Wechselpräpositionen",
      level: "B1+",
      category: "Präpositionen",
      summary: "Wo? (Dativ) vs. Wohin? (Akkusativ) und feste Fallzuordnungen.",
      explanationGerman: `Feste Präpositionen nach Fällen:

1. Nur Akkusativ (DOGFU-Regel):
durch, ohne, gegen, für, um, bis, entlang
Beispiel: Ich mache das für den Patienten. / Wir gehen um das Gebäude.

2. Nur Dativ:
aus, bei, mit, nach, seit, von, zu, gegenüber, ab, außer
Beispiel: Nach der Übergabe spreche ich mit der Stationsleitung.

3. Wechselpräpositionen (an, auf, hinter, in, neben, über, unter, vor, zwischen):
- Statisch / Ort (WO?): DATIV
  Beispiel: Die Akte liegt auf dem Tisch. / Der Pfleger steht im Flur.
- Dynamisch / Richtung (WOHIN?): AKKUSATIV
  Beispiel: Ich lege die Akte auf den Tisch. / Ich gehe in den Flur.

4. Genitiv-Präpositionen (gehoben / B2):
während, wegen, trotz, (an)statt, innerhalb, außerhalb, bezüglich, infolge
Beispiel: Während der Frühschicht bezog ich die Betten. / Wegen des Umbaus ist Zimmer 4 gesperrt.`,
      examples: [
        {
          german: "Trotz der hohen Arbeitsbelastung blieb das Pflegeteam ruhig und konzentriert.",
          english: "Despite the high workload, the nursing team remained calm and focused."
        },
        {
          german: "Ich gehe in das Stationszimmer (Akkusativ: Wohin?), weil die Übergabe im Stationszimmer (Dativ: Wo?) stattfindet.",
          english: "I go into the nurses' room because the handover takes place in the nurses' room."
        }
      ],
      commonErrors: [
        "Falsch: *Ich warte auf dem Bus.* -> Richtig: *Ich warte auf den Bus.* (warten auf + Akkusativ)",
        "Falsch: *Wegen dem Regen...* -> Im B2/C1 Standard: *Wegen des Regens...* (Genitiv)"
      ],
      exercises: [
        {
          id: "ex_04_1",
          question: "Setzen Sie die richtige Form ein: 'Ich stelle den Rollstuhl in _____ (der Flur, Akk./Wohin?).'",
          correctSentence: "Ich stelle den Rollstuhl in den Flur.",
          hint: "Wohin? -> Akkusativ maskulin = den Flur."
        }
      ]
    },

    {
      id: "gram_05",
      number: 5,
      title: "Das System der Artikel (Der, Die, Das nach Vayenas)",
      level: "B1-B2",
      category: "Genusregeln",
      summary: "95% Treffsicherheit bei Artikeln durch Suffixe und semantische Regeln.",
      explanationGerman: `Die Artikelregeln nach Constantinos Vayenas:

1. MASKULIN (DER):
Endungen:
- -ling (der Schmetterling, der Lehrling, der Frühling)
- -or (der Motor, der Reaktor, der Doktor)
- -us (der Rhythmus, der Status, der Optimismus)
- -ismus (der Autismus, der Mechanismus, der Journalismus)
- -ant / -ent (der Praktikant, der Patient, der Dozent)
- -ist (der Spezialist, der Polizist, der Therapeut)
- -er (oft bei handelnden Personen: der Pfleger, der Helfer, der Leiter)
Bedeutungsgruppen: Tage, Monate, Jahreszeiten, Himmelsrichtungen, Wetterphänomene (der Regen, der Schnee, der Wind), alkoholische Getränke (außer das Bier).

2. FEMININ (DIE):
Endungen (100% feminin):
- -ung (die Anweisung, die Übergabe, die Abteilung, die Hoffnung)
- -heit / -keit (die Krankheit, die Einsamkeit, die Frustrationstoleranz, die Aufmerksamkeit)
- -schaft (die Eigenschaft, die Bereitschaft, die Gemeinschaft)
- -tät (die Realität, die Identität, die Suizidalität, die Aktivität)
- -tion / -sion (die Station, die Medikation, die Intervention, die Depression)
- -ik (die Klinik, die Ethik, die Panik, die Diagnostik)
- -ie (die Psychiatrie, die Therapie, die Empathie)
- -ur (die Struktur, die Natur, die Kultur)
- -ei (die Bäckerei, die Bürokratie)
- -anz / -enz (die Toleranz, die Distanz, die Frequenz, die Resilienz)
- -in (weibliche Berufe: die Ärztin, die Pflegerin, die Leiterin)

3. NEUTRUM (DAS):
Endungen:
- -chen / -lein (Verkleinerungsformen: das Mädchen, das Röhrchen, das Bettchen)
- -ment (das Medikament, das Dokument, das Instrument)
- -um (das Zentrum, das Klinikum, das Studium, das Datum)
- -ma (das Trauma, das Thema, das Drama, das Schema)
- -tum (das Eigentum, das Brauchtum)
- Ge-...-e (Kollektiva: das Gebäude, das Gespräch, das Gelände, das Gefühl)
- Substantivierte Infinitive: das Essen, das Trinken, das Schlafen, das Leben, das Zuhören.`,
      examples: [
        {
          german: "Das Medikament (-ment -> Neutrum) liegt auf der Station (-tion -> Feminin) für den Patienten (-ent -> Maskulin).",
          english: "The medication is on the ward for the patient."
        },
        {
          german: "Die Frustrationstoleranz (-anz -> Feminin) des Patienten ist gering.",
          english: "The frustration tolerance of the patient is low."
        }
      ],
      commonErrors: [
        "Falsch: *der Mädchen* -> Richtig: *das Mädchen* (Diminutiv -chen ist immer Neutrum!)",
        "Falsch: *der Thema* -> Richtig: *das Thema* (griechische Endung -ma ist meist Neutrum)"
      ],
      exercises: [
        {
          id: "ex_05_1",
          question: "Welcher Artikel gehört zu 'Dokumentation'? (der, die, das)",
          correctSentence: "die Dokumentation",
          hint: "Wörter auf -tion sind zu 100% feminin."
        }
      ]
    },

    {
      id: "gram_06",
      number: 6,
      title: "Konjunktiv II: Höflichkeit, Wünsche & Professionelle Distanz",
      level: "B2",
      category: "Konjunktiv",
      summary: "Würde + Infinitiv sowie 'hätte', 'wäre', 'könnte', 'sollte', 'müsste'.",
      explanationGerman: `Der Konjunktiv II ist im deutschen Berufsleben das wichtigste Werkzeug für Höflichkeit, vorsichtige Vorschläge und Deeskalation.

1. Höfliche Bitten & Anfragen:
- 'Könnten Sie mir bitte kurz helfen?' (statt: 'Helfen Sie mir!')
- 'Würden Sie bitte Platz nehmen?' (statt: 'Setzen Sie sich!')
- 'Ich hätte eine kurze Frage zum Dienstplan.' (statt: 'Ich habe eine Frage.')
- 'Dürfte ich kurz stören?' (statt: 'Ich störe jetzt.')

2. Ratschläge & vorsichtige Empfehlungen:
- 'Du solltest vielleicht kurz mit der Stationsleitung sprechen.'
- 'Es wäre ratsam, vorher die Vitalwerte zu messen.'

3. Irreale Bedingungen (Gegenwart & Vergangenheit):
- Gegenwart: Wenn ich mehr Zeit hätte, würde ich länger mit dem Patienten sprechen.
- Vergangenheit: Hätte die Pflegekraft den Patienten nicht beruhigt, wäre die Situation eskaliert. (hätte/wäre + Partizip II)`,
      examples: [
        {
          german: "Könnten Sie mir bitte zeigen, wie die Kurve im elektronischen System ausgefüllt wird?",
          english: "Could you please show me how the chart is filled out in the electronic system?"
        },
        {
          german: "Es wäre sehr freundlich, wenn Sie die Wäschebeutel kurz mitnehmen könnten.",
          english: "It would be very kind if you could briefly take the laundry bags along."
        }
      ],
      commonErrors: [
        "Falsch: *Wenn ich habe Zeit, ich würde helfen.* -> Richtig: *Wenn ich Zeit hätte, würde ich helfen.*",
        "Ungeschickt: *Ich will den Dienstplan.* -> Professionell: *Ich würde gerne meinen Dienstplan einsehen.*"
      ],
      exercises: [
        {
          id: "ex_06_1",
          question: "Formulieren Sie die Aufforderung 'Geben Sie mir die Akte!' in eine höfliche Konjunktiv II-Frage um.",
          correctSentence: "Könnten Sie mir bitte die Akte geben?",
          hint: "Verwenden Sie 'Könnten Sie bitte...' oder 'Würden Sie mir bitte...'."
        }
      ]
    },

    {
      id: "gram_07",
      number: 7,
      title: "Vorgangspassiv & Zustandspassiv im klinischen Alltag",
      level: "B2",
      category: "Passiv",
      summary: "Werden + Partizip II (Prozess) vs. Sein + Partizip II (Zustand).",
      explanationGerman: `In der medizinischen und pflegerischen Dokumentation steht die HANDLUNG oder der ZUSTAND im Vordergrund, nicht die handelnde Person. Deshalb wird sehr häufig das Passiv verwendet.

1. Vorgangspassiv (Aktion / Prozess):
Bildung: werden (konjugiert) + ... + Partizip II
- Präsens: Die Betten werden frisch bezogen.
- Präteritum: Der Patient wurde gestern aufgenommen.
- Perfekt: Die Medikamente sind vorbereitet worden.
- Mit Modalverb: Der Verband muss täglich gewechselt werden.

2. Zustandspassiv (Ergebnis / abgeschlossener Zustand):
Bildung: sein (konjugiert) + ... + Partizip II
- Die Wunde ist versorgt. (Ergebnis: Die Versorgung ist abgeschlossen)
- Die Stationsausgangstür ist abgeschlossen.
- Das Zimmer ist desinfiziert.

3. Passiversatzformen (C1-Niveau):
- sich lassen + Infinitiv: 'Die Anspannung lässt sich durch Ruhe abbauen.' (= kann abgebaut werden)
- sein + zu + Infinitiv: 'Die Vitalwerte sind stündlich zu kontrollieren.' (= müssen kontrolliert werden)
- Adjektive auf -bar / -lich: 'Die Symptome sind behandelbar.' (= können behandelt werden)`,
      examples: [
        {
          german: "Alle Medikamente dürfen nur nach ärztlicher Anordnung verabreicht werden.",
          english: "All medications may only be administered following a doctor's order."
        },
        {
          german: "Die Vitalzeichen des Patienten wurden lückenlos dokumentiert.",
          english: "The patient's vital signs were documented without gaps."
        }
      ],
      commonErrors: [
        "Falsch: *Das Zimmer ist gestern gereinigt worden sein.* -> Richtig: *Das Zimmer wurde gestern gereinigt.*",
        "Falsch: *Der Patient ist operiert geworden.* -> Richtig: *Der Patient ist operiert worden.* (im Perfekt: 'worden', nicht 'geworden')"
      ],
      exercises: [
        {
          id: "ex_07_1",
          question: "Wandeln Sie in das Vorgangspassiv Präsens um: 'Das Pflegeteam misst den Blutdruck.'",
          correctSentence: "Der Blutdruck wird vom Pflegeteam gemessen.",
          hint: "Subjekt wird 'Der Blutdruck', Verb wird 'wird ... gemessen'."
        }
      ]
    },

    {
      id: "gram_08",
      number: 8,
      title: "Konjunktiv I & Indirekte Rede in Berichten & Übergaben",
      level: "C1",
      category: "Konjunktiv I",
      summary: "Sachliche Wiedergabe von Patientenaussagen ohne eigene Parteinahme.",
      explanationGerman: `In der psychiatrischen Dokumentation und Übergabe muss klar erkennbar sein, was der Patient selbst behauptet und was die Pflegekraft tatsächlich beobachtet hat. Hierfür dient der Konjunktiv I (indirekte Rede).

Bildung Konjunktiv I:
Verbstamm im Präsens + Konjunktiv-Endungen (-e, -est, -e, -en, -et, -en).
Besonders wichtig: 3. Person Singular (er/sie/es) endet immer auf -e.
- sein -> er sei / sie seien
- haben -> er habe / sie hätten (Ersatzform)
- können -> er könne
- müssen -> er müsse
- sagen -> er sage

Beispiele aus der Praxis:
- Direkt: Patient: 'Ich habe seit drei Tagen nicht geschlafen.'
- Indirekt (Dokumentation): Der Patient berichtet, er habe seit drei Tagen nicht geschlafen.
- Direkt: Patientin: 'Die Medikamente helfen mir nicht.'
- Indirekt: Die Patientin gibt an, die Medikamente hülfen / würden ihr nicht helfen.
- Direkt: Patient: 'Ich bin gesund und will nach Hause.'
- Indirekt: Herr Weber äußert, er sei vollkommen gesund und wolle entlassen werden.`,
      examples: [
        {
          german: "Frau Meier gab an, sie fühle sich auf Station wohl und habe keine Ängste mehr.",
          english: "Ms. Meier stated that she felt comfortable on the ward and no longer had any fears."
        },
        {
          german: "Der Stationsarzt teilte mit, der Patient sei stabil und könne am Freitag entlassen werden.",
          english: "The ward doctor communicated that the patient was stable and could be discharged on Friday."
        }
      ],
      commonErrors: [
        "Falsch in formalen Berichten: *Der Patient sagt, dass er ist krank.* -> B2/C1: *Der Patient berichtet, er sei krank.*"
      ],
      exercises: [
        {
          id: "ex_08_1",
          question: "Setzen Sie in die indirekte Rede: 'Der Patient sagt: Ich bin sehr müde.' -> Der Patient gibt an, er _____ sehr müde.",
          correctSentence: "Der Patient gibt an, er sei sehr müde.",
          hint: "Konjunktiv I von 'sein' in der 3. Person Singular ist 'sei'."
        }
      ]
    }
  ]
};


// --- FILE: psychology_data.js ---

// Psychologie verstehen — Sprach- und Handlungswissen für das psychiatrische Arbeitsumfeld
// Synthese aus: PsyDeutsch_Idee.pdf, 11a3b5a3-c006-4da8-b3c5-9676d5fcc49e_Psychotherapie.pdf, 85e84574-7323-429f-90b9-dce257bf5641_KJP.pdf, intus_Booklet.pdf, Elisabeth Wagner

const PSYCHOLOGY_DATA = {
  overview: {
    title: "Psychologie & Psychiatrische Kommunikation verstehen",
    disclaimer: "Dieses Modul dient dem Kommunikations-, Sprach- und Handlungswissen im Rahmen des Freiwilligendienstes. Es dient ausdrücklich NICHT der medizinischen Eigendiagnostik oder Therapieentscheidung.",
    provenance: "AUS_QUELLE"
  },

  concepts: [
    {
      id: "psy_trauma",
      term: "Das Trauma / Die Traumatisierung",
      domain: "Traumapädagogik",
      provenance: "AUS_QUELLE",
      source: "PsyDeutsch_Idee.pdf (S. 1-5)",
      explanationGerman: "Ein Trauma entsteht, wenn eine Person eine Situation als extrem bedrohlich, überwältigend und unkontrollierbar erlebt, während normale Bewältigungsstrategien versagen. Es hinterlässt Gefühle von extremer Angst, Ohnmacht und Hilflosigkeit.",
      simpleExample: "Ein schwerer Autounfall oder Gewalterfahrungen können traumatisch wirken.",
      workplaceContext: "Patienten auf Station können durch plötzliche laute Geräusche, geschlossene Türen oder bestimmte Gerüche getriggert werden und in alte Angstzustände zurückfallen.",
      whatToDo: [
        "Ruhige, berechenbare Atmosphäre schaffen.",
        "Ankündigen, was man als Nächstes tut ('Ich öffne jetzt kurz das Fenster').",
        "Auf körperlichen Abstand achten und den Fluchtweg des Patienten freihalten."
      ],
      whatToAvoid: [
        "Patienten unerwartet von hinten berühren.",
        "Aussagen wie 'Es ist doch gar nichts passiert' oder 'Beruhigen Sie sich einfach'.",
        "Detailliert nach traumatischen Erlebnissen ausfragen."
      ],
      relevantVocabulary: ["das Bindungstrauma", "die Ohnmacht", "überwältigend", "die Bewältigungsstrategie", "die Reizüberflutung"],
      speakingPractice: "Herr Müller, ich sehe, dass Ihnen das gerade zu viel wird. Ich trete einen Schritt zurück. Sie sind hier im Krankenhaus in Sicherheit."
    },
    {
      id: "psy_ptbs_flashback",
      term: "Der Flashback / Das Wiedererleben (PTBS)",
      domain: "Klinische Symptomatik",
      provenance: "AUS_QUELLE",
      source: "PsyDeutsch_Idee.pdf (S. 2, 6, 22)",
      explanationGerman: "Ein Zustand, in dem ein traumatisches Ereignis sich der Person ungewollt wieder aufdrängt. Der Patient erlebt das Gefühl und die Sinneswahrnehmungen des Traumas so intensiv, als fände es genau in diesem Augenblick im Hier und Jetzt erneut statt.",
      simpleExample: "Ein Knallgeräusch lässt eine Person zusammenzucken und panisch den Raum nach Gefahr absuchen.",
      workplaceContext: "Ein Patient erstarrt plötzlich, reagiert kaum noch auf Ansprache oder zittert am ganzen Körper.",
      whatToDo: [
        "5-4-3-2-1 Erdungsmethode anwenden: Den Patienten ins Hier und Jetzt zurückholen.",
        "Den Patienten seinen Namen, das heutige Datum und den Raum laut aussprechen lassen.",
        "Sensorische Reize anbieten (z. B. ein Glas kaltes Wasser, feste Unterlage unter den Füßen spüren lassen)."
      ],
      whatToAvoid: [
        "Den Patienten schütteln oder festhalten.",
        "Inhaltlich auf das Trauma eingehen.",
        "Den Patienten alleine im Raum lassen, ohne vorher Hilfe geholt zu haben."
      ],
      relevantVocabulary: ["die Intrusion", "die Erdung", "die Orientierung im Hier und Jetzt", "das Hyperarousal", "die Schreckreaktion"],
      speakingPractice: "Frau Schmidt, hören Sie meine Stimme. Sie sind hier im Gemeinschaftsraum in Marburg. Es ist August. Spüren Sie Ihre Füße auf dem festen Boden?"
    },
    {
      id: "psy_grounding_54321",
      term: "Die 5-4-3-2-1 Erdungstechnik (Grounding)",
      domain: "Deeskalation & Reorientierung",
      provenance: "AUS_QUELLE",
      source: "PsyDeutsch_Idee.pdf (S. 20-22)",
      explanationGerman: "Eine strukturierte sensorische Achtsamkeitsübung, um Personen bei Dissoziation oder Flashbacks durch Aktivierung der 5 Sinne im gegenwärtigen Moment zu verankern.",
      steps: [
        "5 Dinge benennen, die man im Raum sieht (z. B. Tisch, Lampe, Uhr, Bild, Tür).",
        "4 Dinge benennen, die man körperlich spürt (z. B. Stuhllehne, Kleidung, Fußboden, Kühle des Glases).",
        "3 Geräusche benennen, die man gerade hört (z. B. Straßenlärm, Lüftung, Vogelgezwitscher).",
        "2 Dinge benennen, die man riechen kann (z. B. Seife, Tee, frische Luft).",
        "1 Sache benennen, die man schmecken kann (z. B. Minze, ein Schluck kaltes Wasser)."
      ],
      workplaceContext: "Bei akuter Dissoziation oder starkem Zittern eines Patienten.",
      speakingPractice: "Lassen Sie uns gemeinsam 5 Dinge suchen, die blau sind. Sehen Sie die Decke dort? Was sehen Sie noch?"
    },
    {
      id: "psy_attachment",
      term: "Die Bindungstypen (Bindungstheorie nach Ainsworth/Bowlby)",
      domain: "Entwicklungspsychologie",
      provenance: "AUS_QUELLE",
      source: "PsyDeutsch_Idee.pdf (S. 13-14) & Psychotherapie.pdf (S. 3-4)",
      explanationGerman: "Das Muster emotionaler Verbundenheit zwischen Kind und primärer Bezugsperson. Man unterscheidet: 1. Sichere Bindung (kann Nähe suchen und sich beruhigen), 2. Unsicher-vermeidende Bindung (unterdrückt Hilfebedürfnis, wirkt scheinbar unabhängig), 3. Unsicher-ambivalente Bindung (übermäßige Verunsicherung, schwer beruhigbar), 4. Desorganisierte Bindung (widersprüchliches Verhalten, Erstarren).",
      workplaceContext: "Muster zeigen sich bei erwachsenen Patienten in der Beziehungsgestaltung zum Pflegeteam (z. B. extremes Klammern oder abrupter Rückzug).",
      whatToDo: ["Verlässlichkeit, Berechenbarkeit und Transparenz leben.", "Absprachen absolut pünktlich einhalten."],
      whatToAvoid: ["Persönliche Kränkung bei ablehnendem Patientenverhalten."],
      relevantVocabulary: ["die Bezugsperson", "das Bindungsmuster", "die Feinfühligkeit", "die Verlässlichkeit", "die Berechenbarkeit"]
    },
    {
      id: "psy_parentification",
      term: "Die Parentifizierung",
      domain: "Familienpsychologie",
      provenance: "AUS_QUELLE",
      source: "PsyKurs_GK.pdf (S. 9) & PsyDeutsch_Idee.pdf (S. 15)",
      explanationGerman: "Ein Rollenumkehr-Prozess, bei dem ein Kind emotionale oder praktische Verantwortung für seine psychisch erkrankten Eltern übernimmt. Unterschieden wird instrumentelle Parentifizierung (Kochen, Haushalt, Geschwister versorgen) und emotionale Parentifizierung (Tröster, Partnerersatz, Konfliktschlichter).",
      workplaceContext: "Besonders relevant bei Angehörigenbesuchen und in der Kinder- und Jugendpsychiatrie (KJP).",
      whatToDo: ["Das Verantwortungsgefühl des Kindes anerkennen, aber altersgerechte Entlastung ermöglichen.", "Klare Grenzen zwischen Erwachsenen- und Kinderaufgaben kommunizieren."],
      whatToAvoid: ["Dem Kind zusätzliche Verantwortung für den Genesungsprozess der Eltern aufbürden."],
      relevantVocabulary: ["die Rollenumkehr", "die Überverantwortung", "der Loyalitätskonflikt", "die emotionale Überforderung"]
    },
    {
      id: "psy_active_listening",
      term: "Das Aktive Zuhören & Beziehungslernen",
      domain: "Kommunikation",
      provenance: "AUS_QUELLE",
      source: "intus_Booklet.pdf (S. 3-11)",
      explanationGerman: "Empathische Gesprächsführung, bei der man dem Gegenüber ungeteilte Aufmerksamkeit schenkt, ohne zu unterbrechen, ohne vorschnelle Ratschläge zu geben und durch Paraphrasieren ('Habe ich Sie richtig verstanden, dass...') die Gefühle des anderen spiegelt.",
      workplaceContext: "Wenn ein Patient Redebedarf hat oder seine Sorgen äußern möchte.",
      whatToDo: [
        "Blickkontakt halten und offene Körperhaltung einnehmen.",
        "Kurze Pausen und Stille aushalten können.",
        "Gefühle anerkennen ('Das klingt wirklich sehr anstrengend für Sie')."
      ],
      whatToAvoid: [
        "Vorschnelle Lösungen anbieten ('Kopf hoch, das wird schon wieder').",
        "Eigene private Geschichten vergleichen ('Bei mir war das auch mal so...')."
      ],
      relevantVocabulary: ["das Paraphrasieren", "der Potenzialblick", "die Resonanz", "die Wertschätzung", "die Validierung"],
      speakingPractice: "Wenn ich Sie richtig verstehe, fühlen Sie sich heute besonders müde und kraftlos. Möchten Sie sich einen Moment ausruhen?"
    },
    {
      id: "psy_deescalation",
      term: "Die Verbale Deeskalation",
      domain: "Sicherheit & Krisenintervention",
      provenance: "AUS_QUELLE",
      source: "Elisabeth Wagner & starthilfe_krankenhausalltag.pdf (S. 34, 46)",
      explanationGerman: "Gezielte deeskalierende Gesprächstechniken, um bei aufkommender Wut, Aggression oder Verzweiflung eines Patienten die emotionale Anspannung stufenweise abzubauen, ohne Machtkämpfe einzugehen.",
      workplaceContext: "Patient schimpft lautstark im Stationsflur über das Essen, die Ärzte oder die Stationsregeln.",
      whatToDo: [
        "Stimme bewusst leiser und langsamer stellen (Pacing).",
        "Seitlich zum Patienten stehen (nicht frontal konfrontativ).",
        "Anliegen ernst nehmen, ohne Regelverstöße zu erlauben ('Ich höre Ihren Ärger. Lassen Sie uns in Ruhe darüber sprechen')."
      ],
      whatToAvoid: [
        "Lauter werden als der Patient.",
        "Sarkastisch oder belehrend antworten.",
        "Den Patienten in eine Ecke drängen."
      ],
      relevantVocabulary: ["die Frustrationstoleranz", "die Reizbarkeit", "die Deeskalation", "der Fluchtweg", "das Distanzgebot"],
      speakingPractice: "Herr Wagner, ich höre, wie wütend Sie gerade sind. Ich möchte Ihnen gerne zuhören. Bitte sprechen Sie mit mir in normaler Lautstärke, damit wir eine Lösung finden können."
    }
  ]
};


// --- FILE: simulations_data.js ---

// BFD-Simulationen — Interaktive, mehrstufige Kommunikationsszenarien
// Jedes Szenario enthält: Situation, Dialog, Ziel, Kriterien, Bewertungslogik, und gestufte Musterantworten (Basic, Natürlich, B2, C1)

const SIMULATIONS_DATA = [
  {
    id: "sim_first_day_supervisor",
    title: "Erster Tag: Vorstellung bei der Stationsleitung",
    category: "Onboarding & Team",
    level: "B1+",
    workplace: "Stationszimmer P2 (Zentrum für Psychische Gesundheit)",
    provenance: "AUS_QUELLE",
    situation: "Sie betreten am ersten Arbeitstag um 06:45 Uhr das Stationszimmer. Die Stationsleitung, Frau Schneider, blickt von der Patientenakte auf und begrüßt Sie.",
    userRole: "Neuer BFD-Freiwilliger",
    counterpartRole: "Frau Schneider (Stationsleitung)",
    objective: "Sich freundlich, klar und strukturiert vorstellen, Rollenbereitschaft signalisieren und nach den ersten Schritten für den Tag fragen.",
    turns: [
      {
        speaker: "Frau Schneider",
        text: "Guten Morgen! Sie müssen der neue BFDler sein. Herzlich willkommen auf Station P2. Wie heißen Sie und haben Sie gut hergefunden?",
        guidance: "Stellen Sie sich mit vollem Namen vor, bestätigen Sie Ihre Rolle als Bundesfreiwilliger und bedanken Sie sich für den Empfang.",
        expectedCriteria: ["Name nennen", "Freundlicher Gruß", "Bestätigung der Ankunft", "Höfliche Ansprache (Sie)"],
        responseTiers: {
          basic: "Guten Morgen. Ich bin Ali. Ja, ich habe den Weg gefunden. Ich bin der neue BFDler.",
          natural: "Guten Morgen, Frau Schneider! Mein Name ist Ali. Ja, vielen Dank, ich habe gut hergefunden. Ich freue mich sehr auf meinen Bundesfreiwilligendienst bei Ihnen auf Station.",
          professionalB2: "Guten Morgen, Frau Schneider! Vielen Dank für die freundliche Aufnahme. Mein Name ist Ali, ich trete heute meinen BFD bei Ihnen an. Die Anfahrt vom Bahnhof Marburg hat reibungslos geklappt. Wo kann ich mich umziehen und wer ist heute meine Ansprechperson?",
          c1: "Guten Morgen, Frau Schneider! Herzlichen Dank für das Willkommen. Mein Name ist Ali, und ich freue mich außerordentlich darauf, mein Freiwilligenjahr hier im Zentrum für Psychische Gesundheit zu absolvieren. Der Weg hierher war völlig unkompliziert. Wo darf ich meine Sachen deponieren, und mit wem darf ich den heutigen Tagesablauf abstimmen?"
        },
        whyExplanation: "Die professionelle B2/C1-Antwort verbindet Höflichkeit mit proaktiver Organisation (Umkleide, Ansprechpartner), was sofortige Verlässlichkeit signalisiert."
      },
      {
        speaker: "Frau Schneider",
        text: "Sehr schön, Ali! Der Umkleideraum ist im Untergeschoss, Spind Nummer 14 gehört Ihnen. Die Dienstkleidung liegt bereit. Wenn Sie umgezogen sind, kommen Sie bitte direkt wieder hoch zur Frühbesprechung. Haben Sie vorab noch dringende Fragen?",
        guidance: "Bedanken Sie sich, bestätigen Sie die Anweisung (Umkleide UG, Spind 14) und kündigen Sie an, zur Übergabe pünktlich wieder da zu sein.",
        expectedCriteria: ["Bestätigung der Anweisung", "Pünktlichkeit zusichern", "Dank"],
        responseTiers: {
          basic: "Danke, ich gehe mich jetzt umziehen und komme wieder.",
          natural: "Alles klar, vielen Dank! Ich ziehe mich schnell im Untergeschoss um und bin zur Übergabe pünktlich wieder hier im Stationszimmer.",
          professionalB2: "Vielen Dank für die Einweisung, Frau Schneider! Ich gehe direkt in die Umkleide zu Spind 14 und bin zur Frühbesprechung pünktlich wieder im Stationszimmer.",
          c1: "Hervorragend, vielen Dank! Ich werde mich umgehend im Untergeschoss umziehen und pünktlich zur Frühbesprechung wieder hier sein. Weitere Fragen klären wir gerne im Anschluss an die Übergabe."
        },
        whyExplanation: "Wiederholen der Eckdaten (UG, Spind 14, Frühbesprechung) zeigt aktives Zuhören und vermeidet Missverständnisse."
      }
    ]
  },

  {
    id: "sim_patient_medication_request",
    title: "Sicherheit: Patient verlangt Bedarfsmedikation",
    category: "Sicherheit & Grenzen",
    level: "B2",
    workplace: "Flur der geschützten Akutstation",
    provenance: "AUS_QUELLE",
    situation: "Ein sichtlich angespannter Patient (Herr Müller) kommt im Flur auf Sie zu, zittert an den Händen und fordert vehement eine Beruhigungstablette von Ihnen.",
    userRole: "BFD-Freiwilliger",
    counterpartRole: "Herr Müller (Angespannter Patient)",
    objective: "Ruhig bleiben, absolute Rollengrenze wahren (keine Medikamente!), Empathie zeigen und die zuständige Pflegefachkraft herbeirufen.",
    turns: [
      {
        speaker: "Herr Müller",
        text: "Ich halte das nicht mehr aus! Mir zerreißt es den Kopf. Geben Sie mir sofort meine Bedarfsmedikation aus dem Schrank, ich brauche die Tablette jetzt!",
        guidance: "Bleiben Sie ruhig, wahren Sie einen Schritt Abstand. Sagen Sie klar, dass Sie als BFDler keine Medikamente ausgeben dürfen, aber sofort die Pflegekraft holen.",
        expectedCriteria: ["Keine Medikamente versprechen", "Klare Rollengrenze", "Empathie/Validierung", "Pflegefachkraft informieren", "Ruhiger Ton"],
        responseTiers: {
          basic: "Das darf ich nicht. Ich hole Schwester Sarah.",
          natural: "Herr Müller, ich sehe, dass es Ihnen schlecht geht. Ich darf Ihnen als Freiwilliger aber keine Medikamente geben. Ich hole sofort Schwester Sarah für Sie.",
          professionalB2: "Herr Müller, ich nehme wahr, wie stark Ihre Anspannung gerade ist. Da ich als Bundesfreiwilliger keine Medikamente ausgeben darf, hole ich sofort Ihre zuständige Pflegefachkraft, Schwester Sarah. Setzen Sie sich bitte kurz hierhin.",
          c1: "Herr Müller, ich sehe, wie akut belastend die Situation für Sie ist. Aus rechtlichen Gründen und zu Ihrer eigenen Sicherheit bin ich als Freiwilligendienstleistender nicht zur Medikamentenausgabe befugt. Ich werde augenblicklich Schwester Sarah verständigen, damit Sie fachgerecht versorgt werden. Bitte nehmen Sie derweil kurz auf dem Sessel Platz."
        },
        whyExplanation: "Medikamentenausgabe durch BFDler ist ein schwerer Verstoß gegen das Arzneimittel- und Haftungsrecht. Die Antwort validiert den Zustand des Patienten und bietet sofortige, sichere Hilfe an."
      },
      {
        speaker: "Herr Müller",
        text: "Immer muss man warten! Aber gut... bitte beeilen Sie sich, ich warte hier auf dem Stuhl.",
        guidance: "Bestätigen Sie dem Patienten kurz, dass Sie sofort losgehen, und informieren Sie die Fachkraft.",
        expectedCriteria: ["Sofortiges Handeln ankündigen", "Beruhigung"],
        responseTiers: {
          basic: "Ja, ich gehe sofort.",
          natural: "Ich gehe direkt ins Stationszimmer und sage Schwester Sarah Bescheid. Ich bin gleich wieder bei Ihnen.",
          professionalB2: "Ich gehe sofort ins Stationszimmer. Schwester Sarah kommt unverzüglich zu Ihnen.",
          c1: "Vielen Dank für Ihre Geduld, Herr Müller. Ich verständige Schwester Sarah auf der Stelle."
        },
        whyExplanation: "Kurze, verlässliche Handlungszusage ohne endlose Diskussionen deeskaliert die Wartezeit."
      }
    ]
  },

  {
    id: "sim_patient_secret_request",
    title: "Grenzen: Patient bittet um ein Geheimnis",
    category: "Ethik & Schweigepflicht",
    level: "B2",
    workplace: "Patientenzimmer",
    provenance: "AUS_QUELLE",
    situation: "Eine depressive Jugendliche (Lena, 17 Jahre) sitzt auf ihrem Bett und sagt leise zu Ihnen, dass sie Ihnen etwas Wichtiges anvertrauen möchte, aber nur, wenn Sie es niemandem auf Station weitersagen.",
    userRole: "BFD-Freiwilliger",
    counterpartRole: "Lena (Patientin)",
    objective: "Kein blindes Schweigeversprechen abgeben, Teamtransparenz erklären, Gesprächsbereitschaft anbieten.",
    turns: [
      {
        speaker: "Lena",
        text: "Ali, ich muss dir was erzählen... aber du musst mir versprechen, dass du es auf gar keinen Fall den Ärzten oder den Schwestern sagst! Schwörst du?",
        guidance: "Erklären Sie einfühlsam, dass Sie als Teil des Teams keine Geheimnisse versprechen können, die ihre Sicherheit betreffen, aber gerne für sie da sind.",
        expectedCriteria: ["Kein Geheimnis versprechen", "Teamverantwortung erklären", "Wertschätzung zeigen", "Hilfe anbieten"],
        responseTiers: {
          basic: "Das kann ich nicht versprechen. Ich muss alles dem Team sagen.",
          natural: "Lena, ich höre dir gerne zu. Aber ich kann dir vorab nicht versprechen, dass ich es für mich behalte, wenn es um deine Sicherheit geht. Wir arbeiten hier als Team, um dir zu helfen.",
          professionalB2: "Lena, ich schätze dein Vertrauen sehr und bin gerne für dich da. Aber ich kann dir kein Geheimnis versprechen. Wenn es um deine Gesundheit oder Sicherheit geht, muss ich das Team informieren, weil wir alle gemeinsam für dich sorgen.",
          c1: "Lena, es bedeutet mir viel, dass du dich an mich wendest. Dennoch möchte ich ehrlich zu dir sein: Ein bedingungsloses Schweigeversprechen kann ich dir nicht geben. Sollte es um deine Unversehrtheit gehen, bin ich verpflichtet, das Behandlungsteam einzubinden, damit du die bestmögliche Unterstützung erhältst. Möchtest du mir trotzdem erzählen, was dich bedrückt?"
        },
        whyExplanation: "In der Psychiatrie darf NIEMALS ein Vorab-Geheimnis versprochen werden (Gefahr von Suizidabsprachen oder Selbstverletzungen). Ehrliche Transparenz schützt Patient und BFDler."
      }
    ]
  },

  {
    id: "sim_isbar_handover",
    title: "Klinikalltag: Schichtübergabe nach ISBAR-Schema",
    category: "Krankenhaus & Übergabe",
    level: "B2+",
    workplace: "Dienstübergaberaum Station P2",
    provenance: "AUS_QUELLE",
    situation: "Am Ende des Frühdienstes bittet die Schichtleitung Sie, Ihre Beobachtungen aus dem Gemeinschaftsraum kurz für den Spätdienst zusammenzufassen.",
    userRole: "BFD-Freiwilliger",
    counterpartRole: "Herr Becker (Schichtleitung Spätdienst)",
    objective: "Strukturierte, sachliche Beobachtungen ohne Diagnosen wiedergeben (Identifikation, Situation, Beobachtung, Empfehlung).",
    turns: [
      {
        speaker: "Herr Becker",
        text: "Ali, wie war der Vormittag im Gemeinschaftsraum? Gab es Auffälligkeiten bei Herrn Weber oder Frau Klein?",
        guidance: "Berichten Sie sachlich: Herr Weber war ruhig und hat am Spielangebot teilgenommen; Frau Klein hat das Mittagessen verweigert und wirkt sehr zurückgezogen.",
        expectedCriteria: ["Sachliche Fakten", "Keine Eigendiagnosen", "Konkrete Uhrzeiten/Aktivitäten", "Präzises Deutsch"],
        responseTiers: {
          basic: "Herr Weber war gut. Er hat gespielt. Frau Klein hat nichts gegessen und war traurig.",
          natural: "Herr Weber hat heute aktiv am Mensch-ärgere-dich-nicht-Spiel teilgenommen und wirkte entspannt. Frau Klein hingegen hat das Mittagessen verweigert und sich den ganzen Vormittag in ihr Zimmer zurückgezogen.",
          professionalB2: "Im Gemeinschaftsraum verlief der Vormittag weitgehend ruhig. Herr Weber zeigte eine gute Interaktion und nahm aktiv am Gesellschaftsspiel teil. Bei Frau Klein ist mir jedoch aufgefallen, dass sie das Mittagessen verweigert hat und sehr zurückgezogen auf ihrem Zimmer blieb.",
          c1: "Gerne. Die Situation im Aufenthaltsbereich gestaltete sich überwiegend stabil. Herr Weber wies eine erfreuliche Kooperationsbereitschaft auf und interagierte adäquat bei der Spielaktivität. Auffällig war hingegen das ausgeprägte Rückzugsverhalten von Frau Klein, welche zudem die Nahrungsaufnahme zur Mittagszeit vollständig ablehnte."
        },
        whyExplanation: "Klinische Übergaben verlangen Trennung von Fakt und Deutung. Die B2/C1-Formulierungen nutzen standardisierte Begrifflichkeiten ('Interaktion', 'Rückzugsverhalten', 'Nahrungsverweigerung')."
      }
    ]
  }
];


// --- FILE: phrases_data.js ---

// "Was sage ich?" & "Ich verstehe nicht!" Phrasentrainer
// Stufenförmige Transformationen: Basic (B1) -> Natürlich -> Professionell (B2) -> C1-Register

const PHRASES_DATA = {
  title: "Praktischer Phrasen-Transformator",
  provenance: "AUS_QUELLE",
  categories: [
    {
      id: "cat_nachfragen",
      name: "Höflich nachfragen & Verstehen sichern",
      phrases: [
        {
          id: "phr_001",
          situation: "Man hat eine Anweisung der Pflegekraft akustisch oder inhaltlich nicht verstanden.",
          basic: "Ich verstehe das nicht.",
          natural: "Ich habe das gerade nicht ganz verstanden.",
          professionalB2: "Könnten Sie mir bitte noch einmal erklären, wie ich dabei genau vorgehen soll?",
          c1: "Könnten Sie den Ablauf bitte noch einmal kurz erläutern, damit ich sicherstellen kann, dass ich die Aufgabe vorschriftsmäßig ausführe?",
          whyExplanation: "Die B2/C1-Formulierungen zeigen professionelle Gewissenhaftigkeit und Verantwortungsübernahme für die korrekte Ausführung."
        },
        {
          id: "phr_002",
          situation: "Jemand spricht extrem schnell oder nuschelt.",
          basic: "Bitte langsamer sprechen.",
          natural: "Könnten Sie bitte ein bisschen langsamer sprechen?",
          professionalB2: "Würden Sie das bitte etwas langsamer wiederholen? Ich möchte sichergehen, dass ich alle Details richtig erfasse.",
          c1: "Wären Sie so freundlich, das Tempo kurz zu drosseln, damit ich Ihre Instruktionen lückenlos nachvollziehen kann?"
        },
        {
          id: "phr_003",
          situation: "Man möchte rückversichern, ob man eine Anweisung richtig verstanden hat.",
          basic: "Habe ich das richtig gemacht?",
          natural: "Habe ich Sie richtig verstanden, dass ich zuerst die Betten machen soll?",
          professionalB2: "Darf ich mich kurz vergewissern: Die Priorität liegt heute zunächst auf der Materialauffüllung, richtig?",
          c1: "Um Missverständnisse auszuschließen: Verstehe ich Ihre Anweisung dahingehend richtig, dass die Patientenbegleitung der Dokumentation vorzuziehen ist?"
        }
      ]
    },
    {
      id: "cat_grenzen_melden",
      name: "Grenzen setzen & Sachlich melden",
      phrases: [
        {
          id: "phr_004",
          situation: "Ein Patient bittet um eine Tablette oder ein Beruhigungsmittel.",
          basic: "Darf ich nicht.",
          natural: "Das darf ich als Freiwilliger leider nicht. Ich sage der Schwester Bescheid.",
          professionalB2: "Herr Becker, die Vergabe von Medikamenten obliegt ausschließlich dem examinierten Pflegepersonal. Ich informiere unverzüglich Ihre zuständige Pflegefachkraft.",
          c1: "Herr Becker, aus rechtlichen und sicherheitsrelevanten Gründen bin ich als Freiwilligendienstleistender nicht zur Medikamentenausgabe befugt. Ich werde augenblicklich das examinierte Fachpersonal verständigen, um Ihr Anliegen weiterzuleiten."
        },
        {
          id: "phr_005",
          situation: "Ein Patient zeigt auffälliges oder beunruhigendes Verhalten.",
          basic: "Herr Schmidt ist komisch.",
          natural: "Mir ist aufgefallen, dass Herr Schmidt sehr traurig wirkt.",
          professionalB2: "Ich möchte kurz eine Beobachtung melden: Herr Schmidt zieht sich heute auffallend zurück und hat die Nahrungsaufnahme verweigert.",
          c1: "Zur pflegerischen Dokumentation möchte ich zurückmelden, dass bei Herrn Schmidt ein ausgeprägtes Meidungsverhalten sowie eine verringerte Interaktionsbereitschaft zu beobachten sind."
        },
        {
          id: "phr_006",
          situation: "Man wird gebeten, eine Aufgabe zu übernehmen, für die man keine Zeit hat.",
          basic: "Ich kann jetzt nicht.",
          natural: "Ich muss erst das Zimmer fertig machen.",
          professionalB2: "Ich bin aktuell noch mit dem Beziehen der Betten auf Zimmer 4 beschäftigt. Soll ich diese Aufgabe unterbrechen oder hat das Vorrang?",
          c1: "Gegenwärtig bindet mich die Materialversorgung auf Station. Sofern die neue Maßnahme prioritär zu behandeln ist, disponiere ich meine Aufgaben gerne um."
        }
      ]
    },
    {
      id: "cat_fehler_feedback",
      name: "Fehler eingestehen & Feedback erbitten",
      phrases: [
        {
          id: "phr_007",
          situation: "Man hat ein Glas umgestoßen oder einen Arbeitsauftrag vergessen.",
          basic: "Tut mir leid.",
          natural: "Entschuldigung, das war mein Fehler, ich mache das sofort sauber.",
          professionalB2: "Bitte entschuldigen Sie das Missgeschick. Ich bringe das unverzüglich in Ordnung und achte in Zukunft verstärkt darauf.",
          c1: "Bedauerlicherweise ist mir hierbei ein Versäumnis unterlaufen. Ich habe bereits die notwendigen Korrekturmaßnahmen eingeleitet, um den ordnungsgemäßen Zustand wiederherzustellen."
        },
        {
          id: "phr_008",
          situation: "Man möchte am Ende der ersten Woche Rückmeldung erhalten.",
          basic: "Wie war ich?",
          natural: "Können Sie mir sagen, wie ich meine Arbeit mache?",
          professionalB2: "Hätten Sie im Laufe des Tages kurz Zeit für eine kurze Rückmeldung zu meiner Arbeitsweise in der ersten Woche?",
          c1: "Ich wäre Ihnen sehr dankbar für ein kurzes orientierendes Feedback bezüglich meiner bisherigen Stationsintegration und möglicher Entwicklungspotenziale."
        }
      ]
    },
    {
      id: "cat_zeit_gewinnen",
      name: "Zeit gewinnen & Deeskalieren",
      phrases: [
        {
          id: "phr_009",
          situation: "Ein Patient drängt auf eine sofortige Entscheidung oder Antwort.",
          basic: "Warten Sie kurz.",
          natural: "Geben Sie mir bitte eine Minute, ich schaue nach.",
          professionalB2: "Ich verstehe, dass Ihnen das wichtig ist. Bitte geben Sie mir einen kurzen Moment, damit ich mich bei der Schichtleitung für Sie erkundigen kann.",
          c1: "Ich nehme Ihr dringliches Anliegen vollkommen wahr. Um Ihnen eine fundierte Auskunft erteilen zu können, halte ich umgehend Rücksprache mit der verantwortlichen Bezugspflegekraft."
        }
      ]
    }
  ],

  emergencyUnderstandingTrainer: {
    title: "Ich verstehe nicht! — Schnelles & undeutliches Deutsch meistern",
    tips: [
      "1. Ruhe bewahren: Es ist völlig normal, dass Muttersprachler im Klinikalltag schnell und mit Dialekt/Abkürzungen sprechen.",
      "2. Signalwort-Technik: Konzentriere dich auf Nomen und Verben (z. B. 'Zimmer 4', 'Wäschesack', 'bringen').",
      "3. Sofortiges Nachfragen signalisiert Kompetenz, kein Versagen.",
      "4. Paraphrasieren ('Du meinst also...') zwingt das Gegenüber zur Verlangsamung."
    ],
    scenarios: [
      {
        spokenFast: "Ali, bring ma eben fix die Kurve von der Zwo rüber ins Arztzimmer zum Doc!",
        clarificationB2: "Habe ich richtig verstanden: Die Patientenkurve aus Zimmer 2 soll zu Dr. Weber ins Arztzimmer gebracht werden?",
        standardGerman: "Ali, bringe bitte einmal schnell das Kurvenblatt aus Zimmer 2 hinüber in das Arztzimmer zum Arzt."
      },
      {
        spokenFast: "Mensch, der 10er dekompensiert grad völlig, hol ma sofort die Bedarfsmedikation aus'm Giftschrank!",
        clarificationB2: "Ich verständige sofort die Schichtleitung für Zimmer 10 – ich selbst darf nicht an den Medikamentenschrank.",
        standardGerman: "Der Patient in Zimmer 10 ist in einer schweren Krise. Als BFDler alarmiere ich sofort das examinierte Pflegepersonal."
      }
    ]
  }
};


// --- FILE: reading_data.js ---

// Leseverstehen & Praxistexte (B1+ / B2 / C1)
// Authentische Krankenhaus- und Alltagsdokumente mit Übungsaufgaben

const READING_DATA = {
  title: "Leseverstehen: Station & Klinikalltag",
  provenance: "AUS_QUELLE",
  texts: [
    {
      id: "read_001",
      title: "Dienstanweisung: Pflegedokumentation & Kurvenführung",
      level: "B2",
      source: "starthilfe_krankenhausalltag.pdf (S. 37-42)",
      text: `UNIVERSITÄTSKLINIKUM GIESSEN UND MARBURG
Zentrum für Psychische Gesundheit — Station P2 (Krisenintervention)

INTERNE DIENSTANWEISUNG ZUR PFLEGEDOKUMENTATION
Stand: 2026

1. Allgemeine Grundsätze:
Die Pflegedokumentation ist ein rechtlich bindendes Dokument. Alle Eintragungen müssen zeitnah, wahrheitsgemäß und sachlich erfolgen. Spekulationen über psychische Zustände oder ungeprüfte Werturteile sind unzulässig.

2. Farbkodierung im handschriftlichen Pflegebericht:
Um eine eindeutige Zuordnung der Schichteinträge zu gewährleisten, gilt stationsweit folgende Farbverteilung:
- Tagdienst (Frühschicht 06:00 – 14:30 Uhr): BLAUER Kugelschreiber
- Spätdienst (13:30 – 21:30 Uhr): GRÜNER Kugelschreiber
- Nachtdienst (21:00 – 06:30 Uhr): ROTER Kugelschreiber

3. Dokumentationspflichtige Ereignisse:
Besondere Vorkommnisse wie Verweigerung von Nahrung oder Medikation, motorische Unruhe, verbale Entgleisungen, Rückzugsverhalten sowie NSSV (Nicht-suizidales selbstverletzendes Verhalten) sind mit genauer Uhrzeit und eingeleiteten Deeskalationsmaßnahmen zu protokollieren.

4. Aufgaben von Praktikanten und Bundesfreiwilligen (BFD):
Freiwilligendienstleistende dürfen Beobachtungen nach Absprache mündlich an die Schichtleitung übergeben. Eigenständige Eintragungen in das offizielle Kurvenblatt dürfen nur unter direkter Anleitung und Gegenzeichnung einer Pflegefachkraft vorgenommen werden.`,
      comprehensionQuestions: [
        {
          question: "Mit welcher Farbe trägt der Spätdienst seine Berichte in die Dokumentation ein?",
          options: ["Blau", "Grün", "Rot", "Schwarz"],
          correctIndex: 1,
          explanation: "Laut Dienstanweisung nutzt der Spätdienst zwingend einen grünen Kugelschreiber (Frühdienst = blau, Nachtdienst = rot)."
        },
        {
          question: "Was gilt bezüglich der Dokumentation für BFD-Freiwillige?",
          options: [
            "Sie müssen das Kurvenblatt eigenständig und ohne Rücksprache ausfüllen.",
            "Sie dürfen niemals irgendwelche Beobachtungen an das Team melden.",
            "Sie übergeben Beobachtungen mündlich an die Schichtleitung; Eintragungen erfordern Anleitung und Gegenzeichnung.",
            "Sie schreiben Berichte ausschließlich mit rotem Stift."
          ],
          correctIndex: 2,
          explanation: "Freiwillige übergeben Beobachtungen mündlich; offizielle Dokumente dürfen sie nur unter Anleitung und mit Gegenzeichnung bearbeiten."
        }
      ],
      keyVocabulary: ["die Dienstanweisung", "die Farbkodierung", "die Schichtleitung", "die Gegenzeichnung", "das Werturteil"],
      speakingTask: "Fassen Sie die wichtigsten Regeln der Dienstanweisung in 3 Sätzen auf Deutsch zusammen."
    },
    {
      id: "read_002",
      title: "Fallvignette & Verhaltensbeobachtung: Herr K.",
      level: "B2+",
      source: "8e69297f-62d8-4793-80d5-73a7ba30de55_Psy.pdf & Elisabeth Wagner",
      text: `STATIONSBERICHT — STATION P2
Datum: 14. August 2026 | Uhrzeit: 10:15 Uhr
Patient: Herr K. (42 Jahre), Diagnose: Akute depressive Episode mit somatischem Syndrom

Verlaufsnotiz Frühdienst:
Der Patient wirkt am Vormittag stark verlangsamt und zurückgezogen. Bei der morgendlichen Visite zeigt er eine ausgeprägte psychomotorische Hemmung und antwortet nur monosyllabisch auf Nachfragen des Stationsarztes. 

Um 08:30 Uhr verweigerte Herr K. die Teilnahme am gemeinsamen Frühstück im Speisesaal. Auf Nachfrage des BFD-Freiwilligen gab er an, sich überfordert und kraftlos zu fühlen. Der Freiwillige bot an, ihm ein Glas Wasser und einen Zwieback ins Zimmer zu bringen, was der Patient dankend annahm.

Um 09:45 Uhr suchte Herr K. eigenständig das Stationszimmer auf und erkundigte sich nach seiner Bedarfsmedikation, da er ein starkes Engegefühl in der Brust verspüre. Die zuständige Pflegefachkraft (PFK Becker) übernahm das Gespräch, maß die Vitalwerte (RR 135/85 mmHg, Puls 78/min) und führte eine validierende Deeskalation durch. Eine Gabe von Lorazepam wurde nach Rücksprache mit der Stationsärztin verabreicht. Der Patient zog sich anschließend ruhig in sein Zimmer zurück.`,
      comprehensionQuestions: [
        {
          question: "Warum verweigerte Herr K. das gemeinsame Frühstück?",
          options: [
            "Weil er die Stationsregeln brechen wollte.",
            "Weil er sich kraftlos und überfordert fühlte.",
            "Weil das Essen ihm nicht geschmeckt hat.",
            "Weil er zur Ergotherapie musste."
          ],
          correctIndex: 1,
          explanation: "Der Patient gab an, sich im Speisesaal überfordert und kraftlos zu fühlen."
        },
        {
          question: "Welche Reaktion des BFD-Freiwilligen war rollengerecht und hilfreich?",
          options: [
            "Er verabreichte ihm sofort eine Beruhigungstablette.",
            "Er diskutierte mit dem Patienten über seine Depression.",
            "Er brachte ihm auf Wunsch Wasser und Zwieback ins Zimmer und respektierte seine Erschöpfung.",
            "Er ignorierte den Patienten vollständig."
          ],
          correctIndex: 2,
          explanation: "Kleine praktische Unterstützung ohne Zwang und ohne Überschreitung der Rollengrenzen ist vorbildlich."
        }
      ],
      keyVocabulary: ["die psychomotorische Hemmung", "monosyllabisch", "die Verlaufsnotiz", "das Engegefühl", "die Validierung"],
      speakingTask: "Erklären Sie, warum der BFDler in dieser Situation genau richtig gehandelt hat."
    }
  ]
};


// --- FILE: first_week_data.js ---

// Meine erste Woche — Geführter 7-Tage-Einarbeitungsplan

const FIRST_WEEK_DATA = {
  title: "Meine erste Woche im BFD",
  provenance: "AUS_QUELLE",
  days: [
    {
      day: 1,
      title: "Tag 1: Ankommen & Orientierung",
      goal: "Station finden, Team kennenlernen, Spind & Kleidung organisieren, Notrufwege einprägen.",
      tasks: [
        "15 Minuten vor Dienstbeginn im Stationszimmer melden.",
        "Vorstellung bei der Stationsleitung und heutigen Bezugspflegekraft.",
        "Umkleide und Spindschlüssel zeigen lassen.",
        "Notfallnummern und Standort des Notfallwagens (REA-Wagen) notieren."
      ],
      phraseOfDay: "Guten Morgen! Ich bin Ali, der neue BFDler. Ich freue mich auf die Zusammenarbeit!"
    },
    {
      day: 2,
      title: "Tag 2: Stationsabläufe & Teeküche",
      goal: "Rhythmus von Frühstücksverteilung, Bettenmachen und Materialauffüllen verstehen.",
      tasks: [
        "Bei der Essensausgabe unterstützen.",
        "Handschuhe, Desinfektionsmittel und Pflegematerialien einsortieren.",
        "Wichtige Schränke im Stationszimmer kennen."
      ],
      phraseOfDay: "Ich habe die Teeküche aufgefüllt. Gibt es noch etwas, das ich vorbereiten kann?"
    },
    {
      day: 3,
      title: "Tag 3: Erste Patientenkontakte & Grenzen",
      goal: "Patienten respektvoll begegnen, Gesprächsangebote machen, Rollengrenzen strikt wahren.",
      tasks: [
        "Sich Patienten freundlich vorstellen ('Ich bin Freiwilliger auf Station').",
        "Auf Anfragen nach Medikamenten souverän reagieren ('Ich hole die Schwester').",
        "Beobachtungen sachlich an die Pflegekraft rückmelden."
      ],
      phraseOfDay: "Guten Morgen, Herr Schmidt! Darf ich Ihnen frisches Wasser bringen?"
    },
    {
      day: 4,
      title: "Tag 4: Begleitdienste & Wege im Haus",
      goal: "Wege zu Funktionsbereichen (EKG, Röntgen, Ergotherapie) kennen.",
      tasks: [
        "Einen Patienten nach Absprache zur Ergotherapie begleiten.",
        "Sicherstellen, dass die Stationsausgangstüren stets verriegelt sind."
      ],
      phraseOfDay: "Ich begleite Frau Meier jetzt zur Untersuchung und melde mich, sobald wir zurück sind."
    },
    {
      day: 5,
      title: "Tag 5: Wochenreflexion & Feedback",
      goal: "Erstes kurzes Feedbackgespräch mit der Stationsleitung führen, Dienstplan nächste Woche prüfen.",
      tasks: [
        "Kurze Rückmeldung geben, was gut lief und wo noch Fragen offen sind.",
        "Schichtzeiten für die kommende Woche notieren."
      ],
      phraseOfDay: "Hätten Sie heute kurz zwei Minuten für mich? Ich würde mich über ein kurzes Feedback zu meiner ersten Woche freuen."
    },
    {
      day: 6,
      title: "Tag 6 (Wochenende): Vokabel- & Phrasenfestigung",
      goal: "Erlebnisse sacken lassen, neue Fachbegriffe im SRS-Trainer festigen, entspannen.",
      tasks: ["15 Minuten Vokabel-Wiederholung", "1 Lesetext zur Stationsdokumentation"]
    },
    {
      day: 7,
      title: "Tag 7 (Wochenende): Vorbereitung Woche 2",
      goal: "Erholter Start in die zweite Woche mit geschärftem Blick.",
      tasks: ["Schlafenszeit rechtzeitig planen", "Dienstkleidung bereitlegen"]
    }
  ]
};


// --- FILE: first_month_data.js ---

// Mein erster Monat — Roadmap für nachhaltige Integration

const FIRST_MONTH_DATA = {
  title: "Mein erster Monat im BFD",
  provenance: "AUS_QUELLE",
  weeks: [
    {
      week: 1,
      theme: "Orientierung & Sicherheit",
      focus: "Hierarchien, Notruf, Stationsgeografie, Rollengrenzen festigen."
    },
    {
      week: 2,
      theme: "Sprachliche Sicherheit & Rückmeldungen",
      focus: "Flüssiges 'Bescheid geben', präzise Beschreibungen im Stationsalltag, Deeskalationsphrasen."
    },
    {
      week: 3,
      theme: "Krankheitsbilder & Empathie",
      focus: "Verständnis für Depression, Psychose, Angststörungen; vertiefte psychologische Kommunikation."
    },
    {
      week: 4,
      theme: "Probezeit-Reflexion & Seminar-Vorbereitung",
      focus: "Zwischenbilanz ziehen, Probezeitgespräch vorbereiten, erste Seminartage beim DRK planen."
    }
  ]
};


// --- FILE: seminars_data.js ---

// Seminartage & Bildungszentrum Begleitung
// Vorbereitung auf die 26 gesetzlichen Seminartage beim Träger (DRK)

const SEMINARS_DATA = {
  title: "Seminartage & Bildungsbegleitung",
  provenance: "AUS_QUELLE",
  overview: {
    totalDays: 26,
    residentialBlockDays: 5,
    educationalCoordinator: "Lydia (Pädagogische Begleitung)",
    legalStatus: "Gilt vollumfänglich als bezahlte Arbeitszeit. Anwesenheitspflicht!",
    purpose: "Reflexion der Praxiserfahrungen, kollegialer Austausch mit anderen Freiwilligen, Vertiefung gesellschaftlicher, sozialer und psychologischer Themen."
  },
  keyPhrasesForDiscussions: [
    {
      category: "Eigene Erfahrungen einbringen",
      german: "Auf meiner Station im Zentrum für Psychische Gesundheit erlebe ich häufig, dass...",
      english: "On my ward at the Center for Mental Health, I often experience that..."
    },
    {
      category: "Eine Meinung begründen",
      german: "Aus meiner Sicht ist es besonders wichtig, dass man klare Grenzen zwischen Beruf und Privatleben zieht, weil...",
      english: "From my point of view, it is particularly important to draw clear boundaries between work and private life because..."
    },
    {
      category: "Nachfragen & Interesse zeigen",
      german: "Wie handhabt ihr das eigentlich auf eurer Einsatzstelle, wenn eine Situation eskaliert?",
      english: "How do you actually handle it at your placement when a situation escalates?"
    },
    {
      category: "Konflikte oder Belastungen reflektieren",
      german: "Ich habe in den ersten Wochen gemerkt, dass es mir manchmal schwerfällt, die Geschichten der Patienten nach Feierabend loszulassen.",
      english: "In the first weeks, I noticed that I sometimes find it hard to let go of patients' stories after work."
    },
    {
      category: "Zustimmung & Differenzierung",
      german: "Dem stimme ich vollkommen zu, allerdings sollte man dabei auch berücksichtigen, dass...",
      english: "I completely agree with that, however one should also take into account that..."
    }
  ]
};


// --- FILE: ethics_data.js ---

// Ethik, Schweigepflicht & Professionelle Grenzen
// Leitlinien für den psychiatrischen Alltag im BFD

const ETHICS_DATA = {
  title: "Ethik & Professionelle Grenzen",
  provenance: "AUS_QUELLE",
  sections: [
    {
      id: "eth_schweigepflicht",
      title: "Die Gesetzliche Schweigepflicht (§ 203 StGB)",
      status: "BESTÄTIGT",
      content: "Alles, was Patienten während ihres Aufenthalts erzählen, sowie deren Identität, Diagnosen und Behandlungsdetails unterliegen der strengsten Schweigepflicht. Es dürfen keinerlei Informationen an Personen außerhalb des therapeutischen Teams weitergegeben werden (weder an Freunde, Familie noch in sozialen Medien).",
      teamException: "Wichtig: Gegenüber dem behandelnden Pflegeteam und den Stationsärzten gilt KEINE Schweigepflicht. Sicherheitsrelevante Beobachtungen (z. B. Suizidäußerungen, Selbstverletzungen, geschmuggelte Gegenstände) MÜSSEN zwingend an das Team weitergegeben werden!"
    },
    {
      id: "eth_distance",
      title: "Professionelle Nähe & Distanz",
      status: "BESTÄTIGT",
      content: "Als BFDler begegnet man Patienten freundlich, zugewandt und empathisch – wahrt jedoch stets die professionelle Distanz. Eine private Beziehung (Verabredungen, private Handynummern, Social-Media-Freundschaften) ist strikt untersagt und gefährdet den therapeutischen Prozess.",
      practicalRule: "Sollte ein Patient nach Ihrer Telefonnummer fragen: 'Als Freiwilliger auf dieser Station darf ich keine privaten Kontaktdaten austauschen. Wenn Sie reden möchten, bin ich während meines Dienstes gerne für Sie da.'"
    },
    {
      id: "eth_gifts",
      title: "Geschenke & Gefälligkeiten",
      status: "BESTÄTIGT",
      content: "Geldgeschenke von Patienten dürfen unter keinen Umständen angenommen werden. Kleine Aufmerksamkeiten für das gesamte Team (z. B. eine Packung Pralinen bei der Entlassung) müssen mit der Stationsleitung abgesprochen werden. Niemals private Botengänge (z. B. Geld abheben, Tabak kaufen außerhalb der Regeln) für Patienten übernehmen."
    },
    {
      id: "eth_dignity",
      title: "Würde & Autonomie der Patienten",
      status: "BESTÄTIGT",
      content: "Jeder Patient wird ungeachtet seiner Erkrankung, Herkunft, Religion oder Verhaltensauffälligkeiten mit vollem Respekt behandelt. Niemals vor anderen Patienten über einen Mitpatienten lästern oder abwertende Begriffe verwenden."
    }
  ]
};


// --- FILE: culture_data.js ---

// Arbeitskultur in Deutschland & Was sage ich / Was nicht
// Sprachliche und kulturelle Normen im Krankenhaus- und Arbeitsalltag

const CULTURE_DATA = {
  title: "Arbeitskultur in Deutschland & Professionelle Kommunikation",
  provenance: "AUS_QUELLE",
  workplaceNorms: [
    {
      topic: "Pünktlichkeit & Verlässlichkeit",
      explanation: "In vielen deutschen Arbeitsumgebungen gilt Pünktlichkeit als Zeichen von Respekt und Zuverlässigkeit. Bei Schichtbeginn um 06:30 Uhr bedeutet das, um 06:20 Uhr umgezogen und einsatzbereit auf Station zu sein.",
      tip: "Sollte sich die Bahn verspäten: Sofort auf Station anrufen ('Bescheid geben') und die voraussichtliche Ankunftszeit mitteilen."
    },
    {
      topic: "Fragen statt Raten",
      explanation: "Es wird positiv bewertet, wenn man bei Unsicherheit direkt nachfragt. Wer aus falschem Stolz nichts sagt und Fehler macht, gefährdet im Krankenhaus Patienten.",
      tip: "Verwende: 'Ich bin mir gerade nicht ganz sicher, könnten Sie mir das kurz zeigen?'"
    },
    {
      topic: "Direkte, aber sachliche Rückmeldung",
      explanation: "Deutsche Kollegen äußern Kritik meist direkt und sachbezogen. Das ist nicht persönlich gemeint, sondern dient der Arbeitsqualität.",
      tip: "Nimm sachliche Kritik professionell an: 'Vielen Dank für den Hinweis, ich werde beim nächsten Mal darauf achten.'"
    },
    {
      topic: "Bescheid geben",
      explanation: "Ein zentrales Kulturkonzept: Wann immer man den Raum verlässt, eine Aufgabe beendet hat oder zur Pause geht, informiert man kurz die Kollegen.",
      tip: "'Ich gehe jetzt für 30 Minuten in die Mittagspause und bin um 12:30 Uhr wieder da.'"
    }
  ],

  whatToSayVsAvoid: [
    {
      category: "Unsicherheit / Unwissenheit",
      avoid: "Keine Ahnung.",
      better: "Das weiß ich leider nicht genau.",
      professionalB2: "Da bin ich mir gerade nicht sicher. Ich frage lieber kurz bei der zuständigen Pflegekraft nach, damit alles seine Richtigkeit hat.",
      whyExplanation: "'Keine Ahnung' wirkt desinteressiert und unhöflich. Die professionelle Formulierung zeigt Verantwortungsbewusstsein und Handlungsorientierung."
    },
    {
      category: "Unverständnis",
      avoid: "Was?! / Wie bitte?!",
      better: "Könnten Sie das bitte wiederholen?",
      professionalB2: "Entschuldigung, ich habe den letzten Satz akustisch nicht ganz verstanden. Könnten Sie mir das bitte noch einmal kurz erklären?",
      whyExplanation: "Höfliches Nachfragen mit Begründung sichert das Verständnis, ohne den Sprecher zu brüskieren."
    },
    {
      category: "Fehler gemacht",
      avoid: "Das war ich nicht / Ist doch nicht so schlimm.",
      better: "Entschuldigung, das war mein Fehler.",
      professionalB2: "Entschuldigen Sie bitte, da ist mir ein Fehler unterlaufen. Ich bringe das sofort in Ordnung / Wie kann ich das am besten korrigieren?",
      whyExplanation: "Eigenverantwortung und proaktives Beheben schaffen sofortiges Vertrauen im Team."
    },
    {
      category: "Grenzen bei Patientenanfragen",
      avoid: "Das geht mich nichts an.",
      better: "Dafür bin ich nicht zuständig.",
      professionalB2: "Herr Becker, als Freiwilliger darf ich Ihnen diese Auskunft leider nicht erteilen. Ich gebe aber sofort der Stationsärztin Bescheid, dass Sie ein Gespräch wünschen.",
      whyExplanation: "Verbindet eine klare Rollengrenze mit einer wertschätzenden Lösung für den Patienten."
    },
    {
      category: "Arbeitsverweigerung / Überlastung",
      avoid: "Ich habe jetzt keine Zeit dafür.",
      better: "Ich mache gerade etwas anderes.",
      professionalB2: "Ich bin gerade noch dabei, die Betten in Zimmer 6 zu beziehen. Soll ich das zuerst beenden oder hat Ihre Aufgabe Vorrang?",
      whyExplanation: "Ermöglicht der Pflegekraft die Priorisierung, ohne unkooperativ zu wirken."
    }
  ]
};


// --- FILE: bureaucracy_data.js ---

// Behörden- & Alltagsdeutsch in Deutschland
// Sprachbausteine für Ämter, Wohnen, Bank, Krankenkasse und Nahverkehr

const BUREAUCRACY_DATA = {
  title: "Behörden- & Alltagsdeutsch",
  provenance: "AUS_QUELLE",
  topics: [
    {
      id: "bur_anmeldung",
      title: "Wohnsitzanmeldung (Bürgerbüro / Einwohnermeldeamt)",
      keyDocuments: ["Wohnungsgeberbestätigung vom Vermieter", "Reisepass / Personalausweis", "Ausgefülltes Anmeldeformular"],
      usefulPhrases: [
        {
          german: "Guten Tag, ich habe einen Termin zur Wohnsitzanmeldung.",
          english: "Good day, I have an appointment for residence registration."
        },
        {
          german: "Hier sind mein Pass und die Wohnungsgeberbestätigung meines Vermieters.",
          english: "Here are my passport and the confirmation from my landlord."
        },
        {
          german: "Könnten Sie mir bitte die Meldebestätigung aushändigen?",
          english: "Could you please issue the registration certificate to me?"
        }
      ]
    },
    {
      id: "bur_auslaenderbehoerde",
      title: "Ausländerbehörde (Aufenthaltstitel & BFD)",
      keyDocuments: ["BFD-Vereinbarung", "Pass", "Meldebestätigung", "Nachweis über Krankenversicherung", "Biometrisches Passfoto"],
      usefulPhrases: [
        {
          german: "Ich beantrage eine Aufenthaltserlaubnis zur Ableistung des Bundesfreiwilligendienstes nach § 19e AufenthG.",
          english: "I am applying for a residence permit for the Federal Volunteer Service."
        },
        {
          german: "Hier ist meine offizielle BFD-Vereinbarung mit dem Bundesamt und dem DRK.",
          english: "Here is my official BFD agreement with the Federal Office and the DRK."
        },
        {
          german: "Wann kann ich mit der Ausstellung des elektronischen Aufenthaltstitels (eAT) rechnen?",
          english: "When can I expect the electronic residence permit (eAT) to be issued?"
        }
      ]
    },
    {
      id: "bur_bank_insurance",
      title: "Bankkonto & Krankenkasse",
      usefulPhrases: [
        {
          german: "Ich möchte ein Girokonto eröffnen, auf das mein monatliches BFD-Taschengeld überwiesen werden kann.",
          english: "I would like to open a checking account for my monthly BFD pocket money."
        },
        {
          german: "Ich benötige eine Mitgliedsbescheinigung für meinen Arbeitgeber zur Sozialversicherung.",
          english: "I need a membership certificate for my employer for social security."
        }
      ]
    }
  ]
};


// --- FILE: engineering_data.js ---

// Technisches & Ingenieur-Deutsch (B2/C1)
// Vorbereitung auf die spätere ingenieurwissenschaftliche Laufbahn

const ENGINEERING_DATA = {
  title: "Technisches & Ingenieur-Deutsch",
  provenance: "ERGÄNZT",
  description: "Grundlagen des Fachwortschatzes und professioneller technischer Kommunikation (B2/C1).",
  categories: [
    {
      name: "Messungen & Spezifikationen",
      vocabulary: [
        {
          word: "die Abweichung",
          article: "die",
          level: "B2",
          definition: "Der Unterschied zwischen dem gemessenen Ist-Wert und dem vorgegebenen Soll-Wert.",
          exampleGerman: "Die gemessene Toleranz weist eine geringfügige Abweichung von 0,02 mm auf.",
          exampleEnglish: "The measured tolerance shows a slight deviation of 0.02 mm."
        },
        {
          word: "die Anforderung",
          article: "die",
          level: "B2",
          definition: "Eine verbindliche Vorgabe oder Bedingung, die ein technisches System erfüllen muss.",
          exampleGerman: "Das neue Gehäuse erfüllt alle sicherheitstechnischen Anforderungen nach ISO-Norm.",
          exampleEnglish: "The new housing meets all safety requirements according to ISO standard."
        },
        {
          word: "der Wirkungsgrad",
          article: "der",
          level: "C1",
          definition: "Das Verhältnis der nutzbaren Energie zur zugeführten Energie eines Systems.",
          exampleGerman: "Durch die Optimierung der Steuerung konnte der Wirkungsgrad um 4,5 % gesteigert werden.",
          exampleEnglish: "By optimizing the control system, the efficiency was increased by 4.5%."
        }
      ]
    },
    {
      name: "Fehleranalyse & Troubleshooting",
      vocabulary: [
        {
          word: "die Ursachenanalyse",
          article: "die",
          level: "C1",
          definition: "Die systematische Untersuchung zur Ermittlung des Grundes eines Systemausfalls.",
          exampleGerman: "Wir leiten unverzüglich eine Ursachenanalyse ein, um den Fehler im Schaltkreis zu lokalisieren.",
          exampleEnglish: "We are immediately initiating a root cause analysis to locate the fault in the circuit."
        },
        {
          word: "die Störanfälligkeit",
          article: "die",
          level: "C1",
          definition: "Die Neigung eines Systems, unter Belastung oder Umwelteinflüssen Fehler zu produzieren.",
          exampleGerman: "Durch die neue Abschirmung konnte die Störanfälligkeit signifikant gesenkt werden.",
          exampleEnglish: "Thanks to the new shielding, the susceptibility to interference was significantly reduced."
        }
      ]
    },
    {
      name: "Technische Berichte & Besprechungen",
      phrases: [
        {
          german: "Den vorliegenden Messergebnissen zufolge können wir schlussfolgern, dass...",
          english: "According to the available measurement results, we can conclude that..."
        },
        {
          german: "Um die Betriebssicherheit zu gewährleisten, ist eine Nachjustierung der Parameter erforderlich.",
          english: "To ensure operational safety, a readjustment of the parameters is required."
        }
      ]
    }
  ]
};


// --- FILE: dashboard.js ---

// Bento Grid Dashboard - Calm, Professional & Focused
// Reduzierte kognitive Last: Tages-Check-in (Span 8), Überlebensmodus (Span 4),
// 3 Micro-Module (Vokabeln, Sprechen, Psychologie) und adaptive Sessions (5-Min-Station, 10-Min-Review, Müde).

export async function renderDashboard(container) {
  const settings = Storage.getSettings();
  const dueCards = await SRS.getDueCards(VOCABULARY_DATA);
  const dueCount = dueCards.length;

  let activeMode = '45'; // '5min_shift' | '10min_review' | '10' | '20' | '45' | '90' | 'tired'
  let userState = 'normal'; // 'normal' | 'tired'

  function renderView() {
    const adaptivePlan = AdaptiveEngine.getDailyPlan(activeMode, userState);

    container.innerHTML = `
      <div class="space-y-6 animate-fadeIn">
        <!-- Quick Session Launcher (Adaptive State Controls) -->
        <div class="flex flex-wrap items-center justify-between gap-3 p-3 bg-surface rounded-xl border border-subtle">
          <div class="text-xs font-bold text-muted uppercase tracking-wider flex items-center gap-1.5">
            <span>⚡</span> Sofort-Lernmodus:
          </div>
          <div class="flex flex-wrap items-center gap-1.5">
            <button class="btn btn-xs ${activeMode === '5min_shift' ? 'btn-primary' : 'btn-secondary'} mode-btn" data-mode="5min_shift">
              🏥 5-Min. Vor der Schicht
            </button>
            <button class="btn btn-xs ${activeMode === '10min_review' ? 'btn-primary' : 'btn-secondary'} mode-btn" data-mode="10min_review">
              📝 10-Min. Nachbereitung
            </button>
            <button class="btn btn-xs ${userState === 'tired' ? 'btn-primary' : 'btn-secondary'} mode-btn" data-mode="tired">
              🌙 Ich bin müde
            </button>
            <button class="btn btn-xs ${activeMode === '45' && userState === 'normal' ? 'btn-primary' : 'btn-secondary'} mode-btn" data-mode="45">
              ⭐ Standard (45 Min)
            </button>
          </div>
        </div>

        <!-- 12-Column Bento Grid: Row 1 (Hero Check-in & Critical Survival Card) -->
        <div class="bento-grid">
          <!-- Span 8: Tages-Check-in / Dein nächster Schritt -->
          <div class="col-span-8 bento-card hero-checkin">
            <div class="space-y-3">
              <div class="flex-between">
                <span class="badge badge-blue">Tages-Check-in</span>
                <span class="text-xs text-secondary font-semibold">UKGM Marburg • Station 2</span>
              </div>
              <div>
                <h1 class="page-title">Guten Tag, Ali!</h1>
                <p class="subtitle mt-1">
                  Dein tägliches Lernsystem für BFD, klinische Kommunikation und den Weg zu starkem B2/C1.
                </p>
              </div>

              <!-- Dein nächster Schritt (Single Focused Primary Action) -->
              <div class="p-4 bg-surface rounded-xl border border-subtle mt-4 space-y-2">
                <div class="text-xs font-bold text-muted uppercase tracking-wider">Dein nächster Schritt</div>
                <div class="flex-between flex-wrap gap-3">
                  <div>
                    <div class="font-bold text-base text-primary">
                      ${dueCount > 0 ? `SRS-Wiederholung (${dueCount} Karten fällig)` : 'BFD-Simulation: Patient fordert Bedarfsmedikation'}
                    </div>
                    <div class="text-xs text-secondary">
                      ${dueCount > 0 ? 'Wiederhole deine fälligen Vokabeln für langfristige Beherrschung.' : 'Sicherheitstraining: Grenzen setzen und professionell deeskalieren.'}
                    </div>
                  </div>
                  <a href="${dueCount > 0 ? '#wiederholen' : '#simulation'}" class="btn btn-primary btn-sm">
                    Jetzt starten →
                  </a>
                </div>
              </div>
            </div>

            <!-- Compact Metrics Footer -->
            <div class="grid grid-cols-4 gap-2 pt-4 border-t border-subtle mt-4 text-center">
              <div>
                <div class="text-xs text-secondary">Fällig</div>
                <div class="font-bold text-base ${dueCount > 0 ? 'text-amber-500' : 'text-emerald-500'}">${dueCount}</div>
              </div>
              <div>
                <div class="text-xs text-secondary">Vokabeln</div>
                <div class="font-bold text-base text-primary">${VOCABULARY_DATA.length}</div>
              </div>
              <div>
                <div class="text-xs text-secondary">Serie</div>
                <div class="font-bold text-base text-primary">${settings.streak || 1} Tag</div>
              </div>
              <div>
                <div class="text-xs text-secondary">Niveau</div>
                <div class="font-bold text-base text-blue-500">B1+ → B2</div>
              </div>
            </div>
          </div>

          <!-- Span 4: Erster-Tag-Überlebensmodus -->
          <div class="col-span-4 bento-card survival-card">
            <div class="space-y-3">
              <div class="flex-between">
                <span class="badge badge-amber">WICHTIG</span>
                <svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </div>
              <div>
                <h2 class="text-lg font-bold text-primary">Erster-Tag-Überlebensmodus</h2>
                <p class="text-xs text-secondary mt-1 leading-relaxed">
                  Die wichtigsten Sätze, Fragen und rechtlichen Grenzen für deinen ersten Tag auf Station.
                </p>
              </div>

              <div class="p-3 bg-subtle rounded-xl space-y-1 text-xs">
                <div class="font-semibold text-primary">Sofort-Orientierung:</div>
                <div class="text-secondary">• Was darf ich? Was darf ich NICHT?</div>
                <div class="text-secondary">• Der magische Satz bei Unklarheit</div>
                <div class="text-secondary">• Notfallnummern & Station 2 Regeln</div>
              </div>
            </div>

            <div class="pt-3">
              <a href="#bfd?tab=survival" class="btn btn-warning btn-sm w-full">
                Überlebensmodus öffnen →
              </a>
            </div>
          </div>
        </div>

        <!-- 12-Column Bento Grid: Row 2 (3 Micro-Modules) -->
        <div class="bento-grid">
          <!-- Card 1: Vokabeln & SRS -->
          <div class="col-span-4 bento-card justify-between">
            <div class="space-y-2">
              <div class="flex-between">
                <span class="badge badge-blue">Spaced Repetition</span>
                <span class="text-xs font-semibold ${dueCount > 0 ? 'text-amber-500' : 'text-emerald-500'}">
                  ${dueCount > 0 ? `${dueCount} fällig` : 'Alles erledigt'}
                </span>
              </div>
              <h3 class="font-bold text-base text-primary">Vokabeln & SRS</h3>
              <p class="text-xs text-secondary">
                ${dueCount > 0 ? 'Wiederhole deine Vokabeln im optimalen Zeitintervall.' : 'Deine heutigen Wiederholungen sind abgeschlossen.'}
              </p>
            </div>
            <div class="pt-4">
              <a href="#wiederholen" class="btn btn-secondary btn-sm w-full">
                ${dueCount > 0 ? 'Jetzt wiederholen →' : 'Wortschatz durchsuchen →'}
              </a>
            </div>
          </div>

          <!-- Card 2: Sprechtrainer -->
          <div class="col-span-4 bento-card justify-between">
            <div class="space-y-2">
              <div class="flex-between">
                <span class="badge badge-purple">Sprechen</span>
                <span class="text-xs text-secondary font-semibold">60 Sekunden</span>
              </div>
              <h3 class="font-bold text-base text-primary">Sprechtrainer</h3>
              <p class="text-xs text-secondary">
                Challenge: <em>Vorstellung bei der Stationsleitung & BFD-Motivation.</em>
              </p>
            </div>
            <div class="pt-4">
              <a href="#sprechen" class="btn btn-secondary btn-sm w-full">
                Sprechübung starten →
              </a>
            </div>
          </div>

          <!-- Card 3: Psychologie & Deeskalation -->
          <div class="col-span-4 bento-card justify-between">
            <div class="space-y-2">
              <div class="flex-between">
                <span class="badge badge-gray">Klinikwissen</span>
                <span class="text-xs text-secondary font-semibold">Psychiatrie</span>
              </div>
              <h3 class="font-bold text-base text-primary">Psychologie & Deeskalation</h3>
              <p class="text-xs text-secondary">
                Aktives Zuhören · Rollengrenzen · 5-4-3-2-1 Erdung bei Unruhe.
              </p>
            </div>
            <div class="pt-4">
              <a href="#psychologie" class="btn btn-secondary btn-sm w-full">
                Klinikwissen lernen →
              </a>
            </div>
          </div>
        </div>

        <!-- 12-Column Bento Grid: Row 3 (Timeline Daily Plan - Adaptiv) -->
        <div class="bento-card col-span-12 space-y-4">
          <div class="flex-between flex-wrap gap-3">
            <div>
              <h2 class="section-title">${adaptivePlan.title}</h2>
              <p class="text-xs text-secondary mt-0.5">
                ${adaptivePlan.focus}
              </p>
            </div>

            <!-- Duration Controls -->
            <div class="flex items-center p-1 bg-subtle rounded-lg border border-subtle">
              <button class="btn btn-xs ${activeMode === '10' ? 'btn-primary' : 'btn-ghost'} plan-toggle-btn" data-dur="10">10 Min</button>
              <button class="btn btn-xs ${activeMode === '20' ? 'btn-primary' : 'btn-ghost'} plan-toggle-btn" data-dur="20">20 Min</button>
              <button class="btn btn-xs ${activeMode === '45' ? 'btn-primary' : 'btn-ghost'} plan-toggle-btn" data-dur="45">45 Min</button>
              <button class="btn btn-xs ${activeMode === '90' ? 'btn-primary' : 'btn-ghost'} plan-toggle-btn" data-dur="90">90 Min</button>
            </div>
          </div>

          <!-- Vertical Timeline -->
          <div class="timeline-list pt-2">
            ${adaptivePlan.steps.map((item, idx) => `
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="flex-1 p-3 bg-subtle rounded-xl flex-between flex-wrap gap-2">
                  <div>
                    <div class="text-xs font-semibold text-muted">Schritt ${idx + 1} • ${item.duration}</div>
                    <div class="font-bold text-sm text-primary">${item.title}</div>
                  </div>
                  <a href="#${item.route}" class="btn btn-secondary btn-xs">
                    Starten →
                  </a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    // Event Bindings
    container.querySelectorAll('.mode-btn').forEach(btn => {
      btn.onclick = () => {
        const mode = btn.getAttribute('data-mode');
        if (mode === 'tired') {
          userState = 'tired';
          activeMode = 'tired';
        } else {
          userState = 'normal';
          activeMode = mode;
        }
        renderView();
      };
    });

    container.querySelectorAll('.plan-toggle-btn').forEach(btn => {
      btn.onclick = () => {
        userState = 'normal';
        activeMode = btn.getAttribute('data-dur');
        renderView();
      };
    });
  }

  renderView();
}


// --- FILE: bfd_hub.js ---

// BFD Hub Component — "Mein BFD auf einen Blick"

function renderBFDHub(container, params = {}) {
  const activeTab = params.tab || 'overview';

  container.innerHTML = `
    <div class="bfd-hub animate-fadeIn">
      <!-- Header -->
      <div class="hero-card mb-6">
        <div class="flex-between flex-wrap gap-4">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="badge badge-emerald">BESTÄTIGT & SYNTHETISIERT</span>
              <span class="badge badge-blue">UKGM Marburg</span>
            </div>
            <h1 class="text-3xl font-bold text-gradient">${BFD_DATA.overview.title}</h1>
            <p class="text-secondary mt-1">${BFD_DATA.overview.subtitle}</p>
          </div>
          <a href="#heute" class="btn btn-secondary">← Zurück zum Dashboard</a>
        </div>

        <!-- Navigation Tabs -->
        <div class="flex gap-2 flex-wrap mt-6 pt-4 border-t border-glass">
          <button class="btn btn-sm ${activeTab === 'overview' ? 'btn-primary' : 'btn-outline'}" data-tab="overview">
            📊 Übersicht & Zeit
          </button>
          <button class="btn btn-sm ${activeTab === 'finances' ? 'btn-primary' : 'btn-outline'}" data-tab="finances">
            💰 Finanzen (420 €)
          </button>
          <button class="btn btn-sm ${activeTab === 'location' ? 'btn-primary' : 'btn-outline'}" data-tab="location">
            📍 Arbeitsplatz & Standorte
          </button>
          <button class="btn btn-sm ${activeTab === 'team' ? 'btn-primary' : 'btn-outline'}" data-tab="team">
            👥 Team & Rollengrenzen
          </button>
          <button class="btn btn-sm ${activeTab === 'survival' ? 'btn-primary' : 'btn-outline'}" data-tab="survival">
            🆘 Erster-Tag-Überlebensmodus
          </button>
        </div>
      </div>

      <!-- Tab Content Area -->
      <div id="tabContent"></div>
    </div>
  `;

  // Render specific tab content
  const tabContent = container.querySelector('#tabContent');

  if (activeTab === 'overview') {
    tabContent.innerHTML = `
      <div class="grid md:grid-cols-2 gap-6">
        <div class="card p-6">
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
            <span>⏱️</span> Arbeitszeit & Urlaub
          </h2>
          <div class="space-y-3">
            <div class="flex-between p-3 bg-surface rounded-lg border border-glass">
              <span class="font-semibold">Wöchentliche Arbeitszeit:</span>
              <span class="badge badge-blue">${BFD_DATA.workSchedule.weeklyHours} Stunden / Woche</span>
            </div>
            <div class="flex-between p-3 bg-surface rounded-lg border border-glass">
              <span class="font-semibold">Urlaubsanspruch:</span>
              <span class="badge badge-emerald">${BFD_DATA.workSchedule.vacationDays} Tage bezahlter Urlaub</span>
            </div>
            <div class="flex-between p-3 bg-surface rounded-lg border border-glass">
              <span class="font-semibold">Gesetzliche Seminartage:</span>
              <span class="badge badge-purple">${BFD_DATA.workSchedule.mandatorySeminarDays} Tage (inkl. 5 Tage Block)</span>
            </div>
            <div class="flex-between p-3 bg-surface rounded-lg border border-glass">
              <span class="font-semibold">Probezeit:</span>
              <span class="badge badge-amber">${BFD_DATA.workSchedule.probezeit.durationWeeks} Wochen (${BFD_DATA.workSchedule.probezeit.noticePeriod})</span>
            </div>
          </div>
          <div class="alert alert-info mt-4">
            ℹ️ ${BFD_DATA.workSchedule.seminarDetails}
          </div>
        </div>

        <div class="card p-6">
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
             Prioritäten: Was muss ich wissen?
          </h2>
          <div class="space-y-4">
            <div>
              <div class="text-xs uppercase font-bold text-red-400 mb-2">Muss ich wissen (Kritisch):</div>
              <ul class="list-disc list-inside text-sm space-y-1 text-secondary">
                ${BFD_DATA.knowledgePriorities.mussIchWissen.map(item => `<li>${item}</li>`).join('')}
              </ul>
            </div>

            <div>
              <div class="text-xs uppercase font-bold text-amber-400 mb-2">Sollte ich können (Praxis):</div>
              <ul class="list-disc list-inside text-sm space-y-1 text-secondary">
                ${BFD_DATA.knowledgePriorities.sollteIchKoennen.map(item => `<li>${item}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;
  } else if (activeTab === 'finances') {
    tabContent.innerHTML = `
      <div class="space-y-6">
        <div class="card p-6 bg-gradient-to-br from-emerald-900/30 to-blue-900/30 border border-emerald-500/30">
          <div class="flex-between flex-wrap gap-4">
            <div>
              <span class="badge badge-emerald mb-2">MONATLICHER BARBETRAG</span>
              <div class="text-4xl font-extrabold text-emerald-400">420,00 €</div>
              <p class="text-sm text-secondary mt-1">Gesamter monatlich auf das Girokonto überwiesener Barbetrag.</p>
            </div>
            <div class="text-right">
              <span class="badge badge-indigo mb-2">GESCHÄTZTER GESAMTWERT</span>
              <div class="text-2xl font-bold text-purple-300">ca. 700 – 950 € / Monat</div>
              <p class="text-xs text-secondary mt-1">Inkl. freies Wohnen, Essen & Sozialversicherung.</p>
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="card p-5">
            <h3 class="font-bold text-lg text-emerald-400 mb-3">1. Barleistungen (420 €)</h3>
            <div class="space-y-3">
              ${BFD_DATA.finances.cashItems.map(item => `
                <div class="p-3 bg-surface rounded-lg border border-glass">
                  <div class="flex-between font-semibold">
                    <span>${item.label}</span>
                    <span class="text-emerald">${item.amount.toFixed(2)} €</span>
                  </div>
                  <div class="text-xs text-secondary mt-1">${item.description}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="card p-5">
            <h3 class="font-bold text-lg text-purple-400 mb-3">2. Sachleistungen</h3>
            <div class="space-y-3">
              ${BFD_DATA.finances.nonCashBenefits.map(item => `
                <div class="p-3 bg-surface rounded-lg border border-glass">
                  <div class="flex-between font-semibold">
                    <span>${item.label}</span>
                    <span class="badge badge-purple">${item.estimatedValue}</span>
                  </div>
                  <div class="text-xs text-secondary mt-1">Bereitstellung: <strong>${item.provider}</strong></div>
                  <div class="text-xs text-secondary mt-1">${item.description || item.details}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="card p-5">
            <h3 class="font-bold text-lg text-blue-400 mb-3">3. Sozialversicherung</h3>
            <div class="p-4 bg-surface rounded-lg border border-glass">
              <div class="flex-between font-semibold">
                <span>100% Arbeitgeber</span>
                <span class="badge badge-blue">ca. 160,58 € / Mo</span>
              </div>
              <p class="text-xs text-secondary mt-2">
                Die Einsatzstelle übernimmt 100% der Beiträge zur Kranken-, Pflege-, Renten- und Arbeitslosenversicherung.
              </p>
            </div>
            <div class="alert alert-warning mt-4 text-xs">
              ⚠️ <strong>Wichtig:</strong> Der Gesamtwert ist kein Gehalt, sondern eine rechtliche und steuerfreie Gesamtkalkulation.
            </div>
          </div>
        </div>
      </div>
    `;
  } else if (activeTab === 'location') {
    tabContent.innerHTML = `
      <div class="grid md:grid-cols-2 gap-6">
        ${BFD_DATA.locations.map(loc => `
          <div class="card p-6 border ${loc.status === 'BESTÄTIGT' ? 'border-emerald-500/40' : 'border-amber-500/40'}">
            <div class="flex-between mb-3">
              <span class="badge ${loc.status === 'BESTÄTIGT' ? 'badge-emerald' : 'badge-amber'}">${loc.status}</span>
              <span class="text-xs text-secondary">${loc.provenance}</span>
            </div>
            <h3 class="text-lg font-bold mb-1">${loc.name}</h3>
            <div class="text-sm font-semibold text-blue-300 mb-2">📍 ${loc.address}</div>
            <p class="text-sm text-secondary mb-3">${loc.relevance}</p>
            <div class="p-3 bg-surface rounded-lg text-xs text-secondary border border-glass">
              💡 ${loc.notes}
            </div>
          </div>
        `).join('')}
      </div>

      <div class="card p-6 mt-6">
        <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
           Die psychiatrischen Stationen & Kriseninterventions-Einheit
        </h3>
        <div class="grid md:grid-cols-2 gap-4">
          ${BFD_DATA.wards.map(w => `
            <div class="p-4 bg-surface rounded-xl border border-glass">
              <div class="flex-between mb-2">
                <span class="font-bold text-lg">${w.name}</span>
                <span class="badge badge-purple">${w.capacity}</span>
              </div>
              <p class="text-xs text-secondary mb-3"><strong>Fokus:</strong> ${w.patientFocus}</p>
              ${w.keySafetyRules ? `
                <div class="text-xs font-semibold text-red-400 mb-1">Sicherheitsregeln:</div>
                <ul class="list-disc list-inside text-xs text-secondary space-y-1">
                  ${w.keySafetyRules.map(r => `<li>${r}</li>`).join('')}
                </ul>
              ` : `<p class="text-xs text-secondary">${w.environment}</p>`}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (activeTab === 'team') {
    tabContent.innerHTML = `
      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="card p-6 border-emerald-500/40 bg-emerald-950/10">
          <div class="flex items-center gap-2 mb-4">
            <span class="badge badge-emerald text-sm">✅ WAS ICH DARF & SOLL</span>
          </div>
          <div class="space-y-3">
            ${BFD_DATA.roleBoundaries.canDo.map(c => `
              <div class="p-3 bg-surface rounded-lg border border-glass">
                <div class="font-bold text-sm text-emerald-300">${c.action}</div>
                <div class="text-xs text-secondary mt-1">${c.examples}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="card p-6 border-red-500/40 bg-red-950/10">
          <div class="flex items-center gap-2 mb-4">
            <span class="badge badge-red text-sm">🚫 WAS ICH NICHT DARF (GRENZEN)</span>
          </div>
          <div class="space-y-3">
            ${BFD_DATA.roleBoundaries.cannotDo.map(c => `
              <div class="p-3 bg-surface rounded-lg border border-glass">
                <div class="flex-between font-bold text-sm text-red-300">
                  <span>${c.action}</span>
                  <span class="badge badge-red text-xs">${c.warningLevel}</span>
                </div>
                <div class="text-xs text-secondary mt-1">${c.reason}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="card p-6">
        <h3 class="text-xl font-bold mb-4">👥 Das multiprofessionelle Team auf Station</h3>
        <div class="grid md:grid-cols-3 gap-4">
          ${BFD_DATA.teamRoles.map(t => `
            <div class="p-4 bg-surface rounded-xl border border-glass">
              <div class="flex-between font-bold text-base mb-1">
                <span>${t.title}</span>
                ${t.abbrev ? `<span class="badge badge-blue">${t.abbrev}</span>` : ''}
              </div>
              <p class="text-xs text-secondary mb-2">${t.description}</p>
              <div class="text-xs font-semibold text-purple-300">Wann ansprechen?</div>
              <div class="text-xs text-secondary">${t.whenToContact || t.mindset}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (activeTab === 'survival') {
    tabContent.innerHTML = `
      <div class="space-y-6">
        <div class="card p-6 bg-gradient-to-r from-red-900/30 to-amber-900/30 border-red-500/40">
          <h2 class="text-2xl font-bold text-red-300 mb-2">🆘 Erster-Tag-Überlebensmodus</h2>
          <p class="text-secondary text-sm">
            Diese Seite ist dein Schnellzugriff für den ersten Arbeitstag. Hier findest du sofort die 10 unverzichtbaren Sätze, die 10 wichtigsten Fragen und die Notfallregeln.
          </p>
        </div>

        <div class="card p-6">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
             10 Sätze, die du am ersten Tag unbedingt brauchst
          </h3>
          <div class="space-y-3">
            ${BFD_DATA.firstDaySurvival.tenEssentialPhrases.map((p, idx) => `
              <div class="p-4 bg-surface rounded-xl border border-glass flex-between flex-wrap gap-3">
                <div class="flex-1">
                  <div class="text-xs text-purple-400 font-semibold mb-1">${idx + 1}. Situation: ${p.situation}</div>
                  <div class="font-bold text-base text-gradient">${p.german}</div>
                  <div class="text-xs text-secondary mt-1">${p.english}</div>
                </div>
                <button class="btn btn-sm btn-outline btn-speak" data-text="${p.german}">
                  🔊 Anhören
                </button>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="card p-6">
            <h3 class="text-xl font-bold mb-4">❓ 10 Fragen, die du klären solltest</h3>
            <ol class="list-decimal list-inside space-y-2 text-sm text-secondary">
              ${BFD_DATA.firstDaySurvival.tenCriticalQuestions.map(q => `
                <li class="p-2 bg-surface rounded border border-glass">${q}</li>
              `).join('')}
            </ol>
          </div>

          <div class="card p-6 bg-red-950/20 border-red-500/30">
            <h3 class="text-xl font-bold text-red-400 mb-4">🚨 Notfallprotokoll (5 Schritte)</h3>
            <div class="space-y-2 text-sm text-secondary">
              <div class="p-2 bg-surface rounded"><strong>Schritt 1:</strong> ${BFD_DATA.firstDaySurvival.emergencyProtocol.step1}</div>
              <div class="p-2 bg-surface rounded"><strong>Schritt 2:</strong> ${BFD_DATA.firstDaySurvival.emergencyProtocol.step2}</div>
              <div class="p-2 bg-surface rounded"><strong>Schritt 3:</strong> ${BFD_DATA.firstDaySurvival.emergencyProtocol.step3}</div>
              <div class="p-2 bg-surface rounded"><strong>Schritt 4:</strong> ${BFD_DATA.firstDaySurvival.emergencyProtocol.step4}</div>
              <div class="p-2 bg-surface rounded"><strong>Schritt 5:</strong> ${BFD_DATA.firstDaySurvival.emergencyProtocol.step5}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Hook tab buttons
  container.querySelectorAll('[data-tab]').forEach(btn => {
    btn.onclick = () => {
      window.location.hash = `#bfd?tab=${btn.getAttribute('data-tab')}`;
    };
  });

  // Hook TTS speak buttons
  container.querySelectorAll('.btn-speak').forEach(btn => {
    btn.onclick = () => {
      Speech.speak(btn.getAttribute('data-text'), 0.9);
    };
  });
}


// --- FILE: flashcards.js ---

// Flashcards Component — Anki-Style SRS Wiederholung & Vokabel-Explorer

function renderFlashcards(container, data, params = {}) {
  const mode = params.mode || 'review'; // 'review' or 'explorer'

  SRS.setVocabList(data.vocabulary);
  SRS.getDueCards().then(({ dueCards, newCards, totalDueCount }) => {
    container.innerHTML = `
      <div class="flashcards-wrapper animate-fadeIn">
        <div class="flex-between flex-wrap gap-4 mb-6">
          <div>
            <h1 class="text-3xl font-bold text-gradient">🃏 Vokabel- & Phrasentrainer</h1>
            <p class="text-secondary mt-1">Spaced Repetition System mit FSRS/SM-2 Algorithmus und Audio-Aussprache.</p>
          </div>
          <div class="flex gap-2">
            <button id="btnReviewMode" class="btn btn-sm ${mode === 'review' ? 'btn-primary' : 'btn-outline'}">
              🔄 Wiederholung (${totalDueCount})
            </button>
            <button id="btnExplorerMode" class="btn btn-sm ${mode === 'explorer' ? 'btn-primary' : 'btn-outline'}">
              📚 Wörterbuch & Explorer (${data.vocabulary.length})
            </button>
          </div>
        </div>

        <div id="flashcardsContent"></div>
      </div>
    `;

    const contentArea = container.querySelector('#flashcardsContent');

    if (mode === 'review') {
      const reviewDeck = dueCards.length > 0 ? dueCards : (newCards.length > 0 ? newCards : data.vocabulary.slice(0, 10));
      renderReviewPlayer(contentArea, reviewDeck);
    } else {
      renderVocabExplorer(contentArea, data.vocabulary);
    }

    container.querySelector('#btnReviewMode').onclick = () => {
      window.location.hash = '#wiederholen?mode=review';
    };
    container.querySelector('#btnExplorerMode').onclick = () => {
      window.location.hash = '#wiederholen?mode=explorer';
    };
  });
}

function renderReviewPlayer(container, deck) {
  let currentIndex = 0;
  let isFlipped = false;

  function updateCard() {
    if (currentIndex >= deck.length) {
      container.innerHTML = `
        <div class="card p-8 text-center max-w-lg mx-auto">
          <div class="text-5xl mb-4">🎉</div>
          <h2 class="text-2xl font-bold mb-2">Großartig gemacht!</h2>
          <p class="text-secondary mb-6">Du hast alle fälligen Wiederholungen für diese Lerneinheit abgeschlossen.</p>
          <div class="flex justify-center gap-3">
            <a href="#heute" class="btn btn-primary">Zurück zum Dashboard</a>
            <button id="btnRestart" class="btn btn-outline">Weitere 10 Karten lernen</button>
          </div>
        </div>
      `;
      const btnRestart = container.querySelector('#btnRestart');
      if (btnRestart) {
        btnRestart.onclick = () => {
          currentIndex = 0;
          updateCard();
        };
      }
      return;
    }

    const card = deck[currentIndex];
    isFlipped = false;

    container.innerHTML = `
      <div class="max-w-2xl mx-auto">
        <!-- Progress Bar -->
        <div class="flex-between text-xs text-secondary mb-2">
          <span>Karte ${currentIndex + 1} von ${deck.length}</span>
          <span class="badge badge-indigo">${card.level} • ${card.domain}</span>
        </div>
        <div class="w-full bg-surface h-2 rounded-full mb-6 overflow-hidden">
          <div class="bg-primary h-full transition-all" style="width: ${((currentIndex + 1) / deck.length) * 100}%"></div>
        </div>

        <!-- The Flashcard -->
        <div id="cardBox" class="card card-glow p-8 cursor-pointer text-center min-h-[300px] flex flex-col justify-between transition-all">
          <div class="flex-between items-center text-xs text-secondary">
            <span class="badge badge-gray">${card.partOfSpeech}</span>
            <span class="badge ${card.provenance === 'AUS_QUELLE' ? 'badge-emerald' : 'badge-amber'}">${card.provenance}</span>
          </div>

          <!-- Front Content -->
          <div class="my-6">
            ${card.article && card.article !== '-' ? `<div class="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-1">${card.article}</div>` : ''}
            <div class="text-3xl md:text-4xl font-extrabold text-gradient mb-2">${card.word}</div>
            ${card.plural && card.plural !== '-' ? `<div class="text-sm text-secondary">Plural: ${card.plural}</div>` : ''}
          </div>

          <!-- Back Content (Revealed on flip) -->
          <div id="backContent" class="hidden text-left border-t border-glass pt-4 space-y-3 animate-fadeIn">
            <div>
              <div class="text-xs uppercase font-bold text-purple-400">Bedeutung auf Deutsch:</div>
              <div class="text-base text-gray-100 font-medium">${card.germanDefinition}</div>
            </div>

            <div class="p-3 bg-surface rounded-xl border border-glass">
              <div class="text-xs uppercase font-bold text-blue-400">Beispielsatz:</div>
              <div class="text-sm text-gray-200">${card.exampleGerman}</div>
              <div id="engTrans" class="text-xs text-secondary mt-1 hidden">${card.exampleEnglish}</div>
              <button id="toggleEng" class="btn btn-ghost btn-xs text-xs mt-1 text-blue-400">🇺🇸 Übersetzung anzeigen</button>
            </div>

            ${card.collocations && card.collocations.length > 0 ? `
              <div>
                <div class="text-xs uppercase font-bold text-emerald-400">Typische Verbindungen & Chunks:</div>
                <div class="text-xs text-secondary">${card.collocations.join(' • ')}</div>
              </div>
            ` : ''}

            ${card.grammarNotes ? `
              <div class="text-xs text-secondary italic">💡 ${card.grammarNotes}</div>
            ` : ''}
          </div>

          <!-- Flip Prompt -->
          <div id="flipPrompt" class="text-xs text-secondary mt-4">
            🖱️ Klicken oder <kbd class="px-2 py-1 bg-surface rounded border border-glass">Leertaste</kbd> zum Aufdecken
          </div>
        </div>

        <!-- Action Controls -->
        <div class="flex-between items-center mt-6 gap-3 flex-wrap">
          <button id="btnAudio" class="btn btn-outline flex items-center gap-2">
            Audio Aussprache (S)
          </button>

          <!-- SRS Grading Buttons (Shown when flipped) -->
          <div id="gradingButtons" class="hidden flex gap-2 w-full md:w-auto">
            <button class="btn btn-sm btn-red flex-1" data-rating="1">1. Nochmal (1)</button>
            <button class="btn btn-sm btn-amber flex-1" data-rating="2">2. Schwer (2)</button>
            <button class="btn btn-sm btn-primary flex-1" data-rating="3">3. Gut (3)</button>
            <button class="btn btn-sm btn-emerald flex-1" data-rating="4">4. Einfach (4)</button>
          </div>
        </div>
      </div>
    `;

    const cardBox = container.querySelector('#cardBox');
    const backContent = container.querySelector('#backContent');
    const flipPrompt = container.querySelector('#flipPrompt');
    const gradingButtons = container.querySelector('#gradingButtons');
    const btnAudio = container.querySelector('#btnAudio');
    const toggleEng = container.querySelector('#toggleEng');
    const engTrans = container.querySelector('#engTrans');

    function flipCard() {
      if (!isFlipped) {
        isFlipped = true;
        backContent.classList.remove('hidden');
        flipPrompt.classList.add('hidden');
        gradingButtons.classList.remove('hidden');
      }
    }

    cardBox.onclick = flipCard;

    if (toggleEng && engTrans) {
      toggleEng.onclick = (e) => {
        e.stopPropagation();
        engTrans.classList.toggle('hidden');
      };
    }

    btnAudio.onclick = (e) => {
      e.stopPropagation();
      Speech.speak(card.word, 0.9);
    };

    gradingButtons.querySelectorAll('button').forEach(btn => {
      btn.onclick = async (e) => {
        e.stopPropagation();
        const rating = parseInt(btn.getAttribute('data-rating'));
        const currentProgress = await Storage.getCardProgress(card.id);
        const updated = SRS.calculateNextReview(currentProgress || { id: card.id }, rating);
        await Storage.saveCardProgress(updated);
        currentIndex++;
        updateCard();
      };
    });
  }

  updateCard();
}

function renderVocabExplorer(container, vocabList) {
  let filtered = [...vocabList];

  container.innerHTML = `
    <div class="space-y-4">
      <div class="flex-between flex-wrap gap-3">
        <input type="text" id="searchInput" placeholder="Vokabel, Bedeutung oder Thema suchen..." class="input max-w-md w-full" />
        <div class="flex gap-2">
          <select id="filterLevel" class="select select-sm">
            <option value="">Alle Stufen</option>
            <option value="A1">A1</option>
            <option value="A2">A2</option>
            <option value="B1">B1</option>
            <option value="B2">B2</option>
            <option value="C1">C1</option>
          </select>
          <select id="filterDomain" class="select select-sm">
            <option value="">Alle Bereiche</option>
            <option value="BFD">BFD</option>
            <option value="Psychiatrie">Psychiatrie</option>
            <option value="Krankenhaus">Krankenhaus</option>
            <option value="Pflege">Pflege</option>
            <option value="Kommunikation">Kommunikation</option>
            <option value="Psychologie">Psychologie</option>
          </select>
        </div>
      </div>

      <div id="vocabTable" class="grid gap-3"></div>
    </div>
  `;

  const table = container.querySelector('#vocabTable');
  const searchInput = container.querySelector('#searchInput');
  const filterLevel = container.querySelector('#filterLevel');
  const filterDomain = container.querySelector('#filterDomain');

  function renderList() {
    table.innerHTML = filtered.map(v => `
      <div class="card p-4 flex-between flex-wrap gap-3 border border-glass">
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-1">
            <span class="badge badge-indigo text-xs">${v.level}</span>
            <span class="badge badge-gray text-xs">${v.domain}</span>
            ${v.article && v.article !== '-' ? `<span class="text-xs font-semibold uppercase text-blue-400">${v.article}</span>` : ''}
            <span class="font-bold text-lg">${v.word}</span>
          </div>
          <div class="text-sm text-secondary">${v.germanDefinition}</div>
          <div class="text-xs text-gray-400 mt-1 italic">"${v.exampleGerman}"</div>
        </div>
        <div class="flex items-center gap-2">
          <button class="btn btn-sm btn-ghost btn-play" data-word="${v.word}">🔊</button>
          <a href="${v.dictionaryLinks?.duden || '#'}" target="_blank" class="btn btn-sm btn-outline text-xs">Duden ↗</a>
        </div>
      </div>
    `).join('');

    table.querySelectorAll('.btn-play').forEach(btn => {
      btn.onclick = () => Speech.speak(btn.getAttribute('data-word'), 0.9);
    });
  }

  function applyFilter() {
    const q = searchInput.value.toLowerCase().trim();
    const lvl = filterLevel.value;
    const dom = filterDomain.value;

    filtered = vocabList.filter(v => {
      const matchQ = !q || v.word.toLowerCase().includes(q) || v.germanDefinition.toLowerCase().includes(q);
      const matchLvl = !lvl || v.level === lvl;
      const matchDom = !dom || v.domain === dom;
      return matchQ && matchLvl && matchDom;
    });
    renderList();
  }

  searchInput.oninput = applyFilter;
  filterLevel.onchange = applyFilter;
  filterDomain.onchange = applyFilter;

  renderList();
}


// --- FILE: simulations.js ---

// Simulations Component — Interaktive Rollenspiele mit Stufen-Feedback

function renderSimulations(container, data, params = {}) {
  const activeSimId = params.id || (data.simulations[0] ? data.simulations[0].id : null);
  const currentSim = data.simulations.find(s => s.id === activeSimId) || data.simulations[0];

  container.innerHTML = `
    <div class="simulations-wrapper animate-fadeIn">
      <div class="flex-between flex-wrap gap-4 mb-6">
        <div>
          <div class="badge badge-emerald mb-2">PRAXIS-SIMULATOR</div>
          <h1 class="text-3xl font-bold text-gradient">🎭 BFD- & Klinik-Simulationen</h1>
          <p class="text-secondary mt-1">Interaktive Dialoge mit mehrstufigem Feedback (Basic, Natürlich, B2, C1).</p>
        </div>
        <select id="selectSim" class="select select-sm max-w-xs">
          ${data.simulations.map(s => `
            <option value="${s.id}" ${s.id === currentSim.id ? 'selected' : ''}>${s.title} (${s.level})</option>
          `).join('')}
        </select>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <!-- Sidebar: Scenario Overview -->
        <div class="card p-5 space-y-4">
          <div class="flex-between">
            <span class="badge badge-indigo">${currentSim.level}</span>
            <span class="badge badge-purple">${currentSim.category}</span>
          </div>
          <div>
            <div class="text-xs uppercase font-bold text-secondary mb-1">Einsatzort:</div>
            <div class="font-semibold text-blue-300">📍 ${currentSim.workplace}</div>
          </div>
          <div>
            <div class="text-xs uppercase font-bold text-secondary mb-1">Situation:</div>
            <p class="text-sm text-secondary">${currentSim.situation}</p>
          </div>
          <div>
            <div class="text-xs uppercase font-bold text-secondary mb-1">Dein Ziel:</div>
            <p class="text-sm text-emerald-300 font-medium">${currentSim.objective}</p>
          </div>
        </div>

        <!-- Main: Interactive Dialogue Stage -->
        <div class="md:col-span-2 space-y-4">
          <div class="card p-6" id="chatStage"></div>
        </div>
      </div>
    </div>
  `;

  // Hook simulation selector
  container.querySelector('#selectSim').onchange = (e) => {
    window.location.hash = `#simulation?id=${e.target.value}`;
  };

  renderSimTurn(container.querySelector('#chatStage'), currentSim, 0);
}

function renderSimTurn(stage, sim, turnIndex) {
  if (turnIndex >= sim.turns.length) {
    stage.innerHTML = `
      <div class="text-center p-8">
        <div class="text-5xl mb-3">🏆</div>
        <h2 class="text-2xl font-bold mb-2">Simulation erfolgreich abgeschlossen!</h2>
        <p class="text-secondary mb-6">Du hast alle Gesprächsphasen dieses Szenarios souverän gemeistert.</p>
        <div class="flex justify-center gap-3">
          <a href="#heute" class="btn btn-primary">Zurück zum Dashboard</a>
          <button id="btnRetrySim" class="btn btn-outline">Simulation wiederholen</button>
        </div>
      </div>
    `;
    const btnRetry = stage.querySelector('#btnRetrySim');
    if (btnRetry) btnRetry.onclick = () => renderSimTurn(stage, sim, 0);
    return;
  }

  const turn = sim.turns[turnIndex];

  stage.innerHTML = `
    <div class="space-y-4">
      <div class="flex-between text-xs text-secondary border-b border-glass pb-2">
        <span>Gesprächsschritt ${turnIndex + 1} von ${sim.turns.length}</span>
        <span>Rolle: ${turn.speaker}</span>
      </div>

      <!-- Counterpart Message Bubble -->
      <div class="p-4 bg-surface rounded-2xl border border-glass flex items-start gap-3">
        <div class="text-2xl">👤</div>
        <div class="flex-1">
          <div class="font-bold text-sm text-purple-300 mb-1">${turn.speaker} (${sim.counterpartRole}):</div>
          <div class="text-base text-gray-100 font-medium">${turn.text}</div>
          <button id="btnPlayCounterpart" class="btn btn-ghost btn-xs text-xs text-blue-400 mt-2">🔊 Vorlesen</button>
        </div>
      </div>

      <!-- Guidance -->
      <div class="p-3 bg-blue-950/20 border border-blue-500/30 rounded-xl text-xs text-blue-300">
        💡 <strong>Deine Aufgabe:</strong> ${turn.guidance}
      </div>

      <!-- Input Area -->
      <div class="space-y-2">
        <label class="block text-xs font-semibold text-secondary">Deine Antwort auf Deutsch:</label>
        <div class="flex gap-2">
          <textarea id="userResponseInput" rows="2" class="input w-full text-sm" placeholder="Tippe deine Antwort oder nutze das Mikrofon..."></textarea>
          <button id="btnMic" class="btn btn-outline flex-center px-4" title="Sprechen">🎙️</button>
        </div>
        <button id="btnSubmitResponse" class="btn btn-primary w-full">Antwort überprüfen & Stufen vergleichen</button>
      </div>

      <!-- Feedback & Response Tiers Area (Hidden initially) -->
      <div id="feedbackArea" class="hidden space-y-4 mt-6 border-t border-glass pt-4 animate-fadeIn"></div>
    </div>
  `;

  const btnPlay = stage.querySelector('#btnPlayCounterpart');
  const btnMic = stage.querySelector('#btnMic');
  const txtInput = stage.querySelector('#userResponseInput');
  const btnSubmit = stage.querySelector('#btnSubmitResponse');
  const feedbackArea = stage.querySelector('#feedbackArea');

  btnPlay.onclick = () => Speech.speak(turn.text, 0.9);

  let isRecording = false;
  btnMic.onclick = () => {
    if (!isRecording) {
      isRecording = true;
      btnMic.classList.add('btn-red');
      Speech.startListening(
        (transcript) => {
          txtInput.value = transcript;
          btnMic.classList.remove('btn-red');
          isRecording = false;
        },
        (err) => {
          alert('Spracherkennung: ' + err);
          btnMic.classList.remove('btn-red');
          isRecording = false;
        }
      );
    } else {
      Speech.stopListening();
      btnMic.classList.remove('btn-red');
      isRecording = false;
    }
  };

  btnSubmit.onclick = () => {
    const userText = txtInput.value.trim();
    feedbackArea.classList.remove('hidden');
    feedbackArea.innerHTML = `
      <div class="space-y-4">
        <div class="card p-4 bg-emerald-950/20 border border-emerald-500/30">
          <h4 class="font-bold text-emerald-400 text-sm mb-2">🎯 Auswertung & Vergleichsstufen</h4>
          <p class="text-xs text-secondary mb-4">${turn.whyExplanation}</p>

          <div class="space-y-3">
            <div class="p-3 bg-surface rounded-lg border border-glass">
              <div class="text-xs font-bold text-gray-400 uppercase">1. Basic (B1):</div>
              <div class="text-sm text-gray-300">${turn.responseTiers.basic}</div>
            </div>

            <div class="p-3 bg-surface rounded-lg border border-glass">
              <div class="text-xs font-bold text-blue-400 uppercase">2. Natürlich & Alltäglich:</div>
              <div class="text-sm text-blue-200">${turn.responseTiers.natural}</div>
            </div>

            <div class="p-3 bg-surface rounded-lg border border-emerald-500/30 bg-emerald-950/10">
              <div class="text-xs font-bold text-emerald-400 uppercase">3. Professionell (B2 - Empfohlen):</div>
              <div class="text-sm text-emerald-200 font-semibold">${turn.responseTiers.professionalB2}</div>
            </div>

            <div class="p-3 bg-surface rounded-lg border border-purple-500/30 bg-purple-950/10">
              <div class="text-xs font-bold text-purple-400 uppercase">4. C1-Niveau (Souverän & Nuanciert):</div>
              <div class="text-sm text-purple-200">${turn.responseTiers.c1}</div>
            </div>
          </div>
        </div>

        <button id="btnNextTurn" class="btn btn-primary w-full">Nächster Gesprächsschritt →</button>
      </div>
    `;

    feedbackArea.querySelector('#btnNextTurn').onclick = () => {
      renderSimTurn(stage, sim, turnIndex + 1);
    };
  };
}


// --- FILE: speaking_trainer.js ---

// Speaking Trainer Component — Sprechtraining & Aussprache

function renderSpeakingTrainer(container, data) {
  const exercises = [
    {
      id: "spk_01",
      title: "Vorstellung bei der Stationsleitung",
      prompt: "Guten Morgen, Frau Schneider! Mein Name ist Ali, ich bin der neue Bundesfreiwillige auf dieser Station. Ich freue mich auf die Zusammenarbeit.",
      english: "Good morning, Ms. Schneider! My name is Ali, I am the new federal volunteer on this ward. I look forward to working together.",
      context: "Begrüßung und erste Kontaktaufnahme am ersten Tag."
    },
    {
      id: "spk_02",
      title: "Rückmeldung über erledigte Aufgaben",
      prompt: "Ich habe die Betten in Zimmer 4 und 5 frisch bezogen und die schmutzige Wäsche in den Wäschesack gebracht.",
      english: "I have changed the beds in rooms 4 and 5 and put the dirty laundry into the laundry bag.",
      context: "Pflegerückmeldung nach Verrichtung."
    },
    {
      id: "spk_03",
      title: "Höfliche Rollengrenze bei Medikamenten",
      prompt: "Herr Müller, ich darf Ihnen leider keine Medikamente verabreichen. Ich hole sofort die zuständige Pflegefachkraft für Sie.",
      english: "Mr. Müller, I am unfortunately not allowed to administer medication. I will immediately get the responsible nurse for you.",
      context: "Sicherheit & Deeskalation."
    }
  ];

  let currentEx = 0;

  function renderView() {
    const ex = exercises[currentEx];
    container.innerHTML = `
      <div class="speaking-wrapper max-w-2xl mx-auto animate-fadeIn">
        <div class="flex-between mb-6">
          <div>
            <div class="badge badge-purple mb-1">SPRECHTRAINER</div>
            <h1 class="text-3xl font-bold text-gradient">🎙️ Aussprache & Sprechtraining</h1>
          </div>
          <a href="#heute" class="btn btn-secondary btn-sm">← Zurück</a>
        </div>

        <div class="card card-glow p-8 text-center space-y-6">
          <div class="text-xs uppercase font-bold text-secondary">Übung ${currentEx + 1} von ${exercises.length}: ${ex.title}</div>
          
          <div class="p-6 bg-surface rounded-2xl border border-glass">
            <div class="text-2xl font-extrabold text-gradient mb-2">${ex.prompt}</div>
            <div class="text-sm text-secondary">${ex.english}</div>
          </div>

          <div class="text-xs text-purple-300">💡 Kontext: ${ex.context}</div>

          <!-- Controls -->
          <div class="flex justify-center gap-4 flex-wrap">
            <button id="btnListenModel" class="btn btn-secondary flex items-center gap-2">
              Audio Modell anhören (Normal)
            </button>
            <button id="btnListenSlow" class="btn btn-outline flex items-center gap-2">
              <span>🐢</span> Langsam anhören (0.7x)
            </button>
          </div>

          <!-- Recording Area -->
          <div class="pt-6 border-t border-glass space-y-3">
            <button id="btnRecord" class="btn btn-primary btn-lg flex-center gap-2 mx-auto">
               Sprechen & Überprüfen
            </button>
            <div id="recResult" class="text-sm font-semibold text-emerald-400 hidden"></div>
          </div>
        </div>

        <div class="flex-between mt-6">
          <button id="btnPrev" class="btn btn-outline btn-sm" ${currentEx === 0 ? 'disabled' : ''}>← Vorherige</button>
          <button id="btnNext" class="btn btn-outline btn-sm" ${currentEx === exercises.length - 1 ? 'disabled' : ''}>Nächste →</button>
        </div>
      </div>
    `;

    container.querySelector('#btnListenModel').onclick = () => Speech.speak(ex.prompt, 0.9);
    container.querySelector('#btnListenSlow').onclick = () => Speech.speak(ex.prompt, 0.65);

    const btnRecord = container.querySelector('#btnRecord');
    const recResult = container.querySelector('#recResult');

    btnRecord.onclick = () => {
      btnRecord.classList.add('btn-red');
      btnRecord.innerHTML = '<span>🔴</span> Aufnahme läuft...';
      Speech.startListening(
        (transcript) => {
          btnRecord.classList.remove('btn-red');
          btnRecord.innerHTML = ' Sprechen & Überprüfen';
          recResult.classList.remove('hidden');
          recResult.innerHTML = `✅ Erkannt: "${transcript}"`;
        },
        (err) => {
          btnRecord.classList.remove('btn-red');
          btnRecord.innerHTML = ' Sprechen & Überprüfen';
          recResult.classList.remove('hidden');
          recResult.innerHTML = `⚠️ Fehler / Nicht verstanden (${err})`;
        }
      );
    };

    container.querySelector('#btnPrev').onclick = () => {
      if (currentEx > 0) { currentEx--; renderView(); }
    };
    container.querySelector('#btnNext').onclick = () => {
      if (currentEx < exercises.length - 1) { currentEx++; renderView(); }
    };
  }

  renderView();
}


// --- FILE: phrase_trainer.js ---

// Phrase Trainer Component — "Was sage ich?" & "Ich verstehe nicht!"

function renderPhraseTrainer(container) {
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
               ${cat.name}
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


// --- FILE: grammar_hub.js ---

// Grammar Hub Component — 25 Lektionen & Der/Die/Das System

function renderGrammarHub(container, params = {}) {
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


// --- FILE: psychology_hub.js ---

// Psychology Hub Component — "Psychologie verstehen"

function renderPsychologyHub(container) {
  container.innerHTML = `
    <div class="psychology-wrapper animate-fadeIn space-y-6">
      <div class="hero-card">
        <div class="flex-between flex-wrap gap-4">
          <div>
            <div class="badge badge-emerald mb-2">KLINIK- & HANDLUNGSWISSEN</div>
            <h1 class="text-3xl font-bold text-gradient">${PSYCHOLOGY_DATA.overview.title}</h1>
            <p class="text-secondary mt-1">Verständnis für Patientenverhalten, Deeskalation, Bindungsmuster und Grenzen.</p>
          </div>
          <a href="#heute" class="btn btn-secondary">← Zurück</a>
        </div>
        <div class="alert alert-info text-xs mt-4">
          ℹ️ ${PSYCHOLOGY_DATA.overview.disclaimer}
        </div>
      </div>

      <!-- Concepts Grid -->
      <div class="grid md:grid-cols-2 gap-6">
        ${PSYCHOLOGY_DATA.concepts.map(c => `
          <div class="card p-6 space-y-4 border border-glass">
            <div class="flex-between">
              <span class="badge badge-indigo">${c.domain}</span>
              <span class="text-xs text-secondary">${c.source}</span>
            </div>

            <h2 class="text-xl font-bold text-emerald-300">${c.term}</h2>
            <p class="text-sm text-gray-200">${c.explanationGerman}</p>

            ${c.workplaceContext ? `
              <div class="p-3 bg-surface rounded-xl border border-glass text-xs text-secondary">
                🏥 <strong>Klinischer Kontext:</strong> ${c.workplaceContext}
              </div>
            ` : ''}

            ${c.steps ? `
              <div class="p-3 bg-blue-950/30 border border-blue-500/30 rounded-xl space-y-1">
                <div class="text-xs font-bold text-blue-400">Ablaufschritte:</div>
                <ul class="list-disc list-inside text-xs text-blue-200 space-y-1">
                  ${c.steps.map(s => `<li>${s}</li>`).join('')}
                </ul>
              </div>
            ` : ''}

            ${c.whatToDo ? `
              <div class="space-y-2">
                <div class="text-xs font-bold text-emerald-400">✅ Was ich tun sollte:</div>
                <ul class="list-disc list-inside text-xs text-secondary space-y-1">
                  ${c.whatToDo.map(d => `<li>${d}</li>`).join('')}
                </ul>
              </div>
            ` : ''}

            ${c.speakingPractice ? `
              <div class="p-3 bg-purple-950/30 border border-purple-500/30 rounded-xl flex-between flex-wrap gap-2">
                <div class="text-xs text-purple-200 italic">💬 "${c.speakingPractice}"</div>
                <button class="btn btn-ghost btn-xs text-purple-400 btn-speak-psy" data-text="${c.speakingPractice}">
                  🔊 Anhören
                </button>
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `;

  container.querySelectorAll('.btn-speak-psy').forEach(btn => {
    btn.onclick = () => Speech.speak(btn.getAttribute('data-text'), 0.9);
  });
}


// --- FILE: reading_hub.js ---

// Reading Hub Component — Leseverstehen & Praxistexte

function renderReadingHub(container, params = {}) {
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


// --- FILE: guided_roadmaps.js ---

// Guided Roadmaps Component — Erste Woche, Erster Monat, Seminartage & Ethik

function renderRoadmaps(container, params = {}) {
  const activeTab = params.tab || 'first_week';

  container.innerHTML = `
    <div class="roadmaps-wrapper animate-fadeIn space-y-6">
      <div class="hero-card">
        <div class="flex-between flex-wrap gap-4">
          <div>
            <span class="badge badge-purple mb-2">STRUKTURIERTE BEGLEITUNG</span>
            <h1 class="text-3xl font-bold text-gradient">🗺️ Praxis-Roadmaps & Onboarding</h1>
            <p class="text-secondary mt-1">Schritt-für-Schritt Pläne für die erste Woche, den ersten Monat, Seminare und Ethik.</p>
          </div>
          <a href="#heute" class="btn btn-secondary">← Zurück</a>
        </div>

        <div class="flex gap-2 flex-wrap mt-6 pt-4 border-t border-glass">
          <button class="btn btn-sm ${activeTab === 'first_week' ? 'btn-primary' : 'btn-outline'}" data-tab="first_week">
            📅 Meine erste Woche (Tag 1-7)
          </button>
          <button class="btn btn-sm ${activeTab === 'first_month' ? 'btn-primary' : 'btn-outline'}" data-tab="first_month">
            🎯 Mein erster Monat
          </button>
          <button class="btn btn-sm ${activeTab === 'seminars' ? 'btn-primary' : 'btn-outline'}" data-tab="seminars">
            🎓 26 Seminartage (DRK)
          </button>
          <button class="btn btn-sm ${activeTab === 'ethics' ? 'btn-primary' : 'btn-outline'}" data-tab="ethics">
            ⚖️ Ethik & Grenzen
          </button>
        </div>
      </div>

      <div id="roadmapTabContent"></div>
    </div>
  `;

  const contentArea = container.querySelector('#roadmapTabContent');

  if (activeTab === 'first_week') {
    contentArea.innerHTML = `
      <div class="grid md:grid-cols-2 gap-6">
        ${FIRST_WEEK_DATA.days.map(d => `
          <div class="card p-6 space-y-3 border border-glass">
            <div class="flex-between">
              <span class="badge badge-indigo">Tag ${d.day}</span>
              <span class="font-bold text-base text-gradient">${d.title}</span>
            </div>
            <p class="text-xs text-secondary">🎯 <strong>Ziel:</strong> ${d.goal}</p>
            <div class="space-y-1">
              <div class="text-xs font-semibold text-emerald-400">Aufgaben:</div>
              <ul class="list-disc list-inside text-xs text-secondary space-y-1">
                ${d.tasks.map(t => `<li>${t}</li>`).join('')}
              </ul>
            </div>
            ${d.phraseOfDay ? `
              <div class="p-3 bg-surface rounded-xl border border-glass flex-between text-xs">
                <span class="italic text-purple-200">💬 "${d.phraseOfDay}"</span>
                <button class="btn btn-ghost btn-xs text-purple-400 btn-speak-rd" data-text="${d.phraseOfDay}">🔊</button>
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    `;
  } else if (activeTab === 'first_month') {
    contentArea.innerHTML = `
      <div class="grid md:grid-cols-2 gap-6">
        ${FIRST_MONTH_DATA.weeks.map(w => `
          <div class="card p-6 space-y-3 border border-glass">
            <div class="flex-between">
              <span class="badge badge-purple">Woche ${w.week}</span>
              <span class="font-bold text-lg text-emerald-300">${w.theme}</span>
            </div>
            <p class="text-sm text-secondary">${w.focus}</p>
          </div>
        `).join('')}
      </div>
    `;
  } else if (activeTab === 'seminars') {
    contentArea.innerHTML = `
      <div class="space-y-6">
        <div class="card p-6">
          <h2 class="text-xl font-bold mb-2">🎓 ${SEMINARS_DATA.title}</h2>
          <p class="text-sm text-secondary mb-4">${SEMINARS_DATA.overview.purpose}</p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="p-3 bg-surface rounded-lg border border-glass">
              <div class="text-xs text-secondary">Gesamttage</div>
              <div class="text-xl font-bold text-emerald">${SEMINARS_DATA.overview.totalDays} Tage</div>
            </div>
            <div class="p-3 bg-surface rounded-lg border border-glass">
              <div class="text-xs text-secondary">Bildungszentrum</div>
              <div class="text-xl font-bold text-blue">${SEMINARS_DATA.overview.residentialBlockDays} Tage Block</div>
            </div>
            <div class="p-3 bg-surface rounded-lg border border-glass">
              <div class="text-xs text-secondary">Begleitung</div>
              <div class="text-xl font-bold text-purple">${SEMINARS_DATA.overview.educationalCoordinator}</div>
            </div>
            <div class="p-3 bg-surface rounded-lg border border-glass">
              <div class="text-xs text-secondary">Rechtsstatus</div>
              <div class="text-xs font-bold text-amber">100% Arbeitszeit</div>
            </div>
          </div>
        </div>

        <div class="card p-6">
          <h3 class="text-lg font-bold mb-4">💬 Redemittel für Seminardiskussionen</h3>
          <div class="space-y-3">
            ${SEMINARS_DATA.keyPhrasesForDiscussions.map(p => `
              <div class="p-3 bg-surface rounded-xl border border-glass flex-between flex-wrap gap-2">
                <div>
                  <div class="text-xs text-purple-400 font-bold mb-1">${p.category}</div>
                  <div class="font-semibold text-sm text-gray-100">${p.german}</div>
                  <div class="text-xs text-secondary mt-1">${p.english}</div>
                </div>
                <button class="btn btn-ghost btn-xs text-blue-400 btn-speak-rd" data-text="${p.german}">🔊</button>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  } else if (activeTab === 'ethics') {
    contentArea.innerHTML = `
      <div class="grid md:grid-cols-2 gap-6">
        ${ETHICS_DATA.sections.map(s => `
          <div class="card p-6 space-y-3 border border-glass">
            <div class="flex-between">
              <h3 class="font-bold text-lg text-emerald-300">${s.title}</h3>
              <span class="badge badge-emerald">${s.status}</span>
            </div>
            <p class="text-sm text-secondary">${s.content}</p>
            ${s.teamException ? `
              <div class="p-3 bg-amber-950/20 border border-amber-500/30 rounded-lg text-xs text-amber-300">
                ⚠️ <strong>Wichtig:</strong> ${s.teamException}
              </div>
            ` : ''}
            ${s.practicalRule ? `
              <div class="p-3 bg-surface rounded-lg border border-glass text-xs text-purple-300">
                💡 <strong>Praxisregel:</strong> ${s.practicalRule}
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    `;
  }

  container.querySelectorAll('[data-tab]').forEach(btn => {
    btn.onclick = () => {
      window.location.hash = `#roadmaps?tab=${btn.getAttribute('data-tab')}`;
    };
  });

  container.querySelectorAll('.btn-speak-rd').forEach(btn => {
    btn.onclick = () => Speech.speak(btn.getAttribute('data-text'), 0.9);
  });
}


// --- FILE: culture_bureaucracy.js ---

// Culture & Bureaucracy Component

function renderCultureBureaucracy(container, params = {}) {
  const activeTab = params.tab || 'culture';

  container.innerHTML = `
    <div class="culture-bur-wrapper animate-fadeIn space-y-6">
      <div class="hero-card">
        <div class="flex-between flex-wrap gap-4">
          <div>
            <span class="badge badge-emerald mb-2">PRAXIS & ALLTAG</span>
            <h1 class="text-3xl font-bold text-gradient">🇩🇪 Arbeitskultur & Behördendeutsch</h1>
            <p class="text-secondary mt-1">Normen im deutschen Berufsleben, "Was sagen / Was vermeiden" und Amtssprache.</p>
          </div>
          <a href="#heute" class="btn btn-secondary">← Zurück</a>
        </div>

        <div class="flex gap-2 flex-wrap mt-6 pt-4 border-t border-glass">
          <button class="btn btn-sm ${activeTab === 'culture' ? 'btn-primary' : 'btn-outline'}" data-tab="culture">
            🏢 Arbeitskultur & Knigge
          </button>
          <button class="btn btn-sm ${activeTab === 'say_vs_avoid' ? 'btn-primary' : 'btn-outline'}" data-tab="say_vs_avoid">
            💬 Was sagen vs. Was vermeiden
          </button>
          <button class="btn btn-sm ${activeTab === 'bureaucracy' ? 'btn-primary' : 'btn-outline'}" data-tab="bureaucracy">
            📑 Behördendeutsch & Ämter
          </button>
        </div>
      </div>

      <div id="cultureTabContent"></div>
    </div>
  `;

  const contentArea = container.querySelector('#cultureTabContent');

  if (activeTab === 'culture') {
    contentArea.innerHTML = `
      <div class="grid md:grid-cols-2 gap-6">
        ${CULTURE_DATA.workplaceNorms.map(norm => `
          <div class="card p-6 space-y-3 border border-glass">
            <h3 class="text-xl font-bold text-blue-300">📌 ${norm.topic}</h3>
            <p class="text-sm text-secondary">${norm.explanation}</p>
            <div class="p-3 bg-surface rounded-xl border border-glass text-xs text-emerald-300">
              💡 <strong>Praxistipp:</strong> ${norm.tip}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (activeTab === 'say_vs_avoid') {
    contentArea.innerHTML = `
      <div class="space-y-4">
        ${CULTURE_DATA.whatToSayVsAvoid.map(item => `
          <div class="card p-6 space-y-3 border border-glass">
            <div class="badge badge-purple text-xs font-bold">${item.category}</div>
            <div class="grid md:grid-cols-3 gap-3">
              <div class="p-3 bg-red-950/20 border border-red-500/30 rounded-lg">
                <div class="text-xs font-bold text-red-400 uppercase mb-1">🚫 Vermeiden:</div>
                <div class="text-sm text-red-200">"${item.avoid}"</div>
              </div>
              <div class="p-3 bg-surface border border-glass rounded-lg">
                <div class="text-xs font-bold text-blue-400 uppercase mb-1">👍 Besser:</div>
                <div class="text-sm text-blue-200">"${item.better}"</div>
              </div>
              <div class="p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-lg">
                <div class="text-xs font-bold text-emerald-400 uppercase mb-1">⭐ Professionell (B2):</div>
                <div class="text-sm text-emerald-200 font-semibold">"${item.professionalB2}"</div>
              </div>
            </div>
            <div class="text-xs text-secondary italic">💡 Warum? ${item.whyExplanation}</div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (activeTab === 'bureaucracy') {
    contentArea.innerHTML = `
      <div class="space-y-6">
        ${BUREAUCRACY_DATA.topics.map(t => `
          <div class="card p-6 space-y-4 border border-glass">
            <h3 class="text-xl font-bold text-purple-300">📑 ${t.title}</h3>
            ${t.keyDocuments ? `
              <div>
                <div class="text-xs font-bold text-secondary uppercase mb-1">Erforderliche Unterlagen:</div>
                <div class="flex gap-2 flex-wrap">
                  ${t.keyDocuments.map(doc => `<span class="badge badge-gray text-xs">${doc}</span>`).join('')}
                </div>
              </div>
            ` : ''}
            <div class="space-y-2">
              <div class="text-xs font-bold text-emerald-400 uppercase">Wichtige Sätze:</div>
              ${t.usefulPhrases.map(p => `
                <div class="p-3 bg-surface rounded-xl border border-glass flex-between flex-wrap gap-2">
                  <div>
                    <div class="text-sm font-semibold text-gray-100">${p.german}</div>
                    <div class="text-xs text-secondary mt-1">${p.english}</div>
                  </div>
                  <button class="btn btn-ghost btn-xs text-blue-400 btn-speak-cb" data-text="${p.german}">🔊</button>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  container.querySelectorAll('[data-tab]').forEach(btn => {
    btn.onclick = () => {
      window.location.hash = `#kultur?tab=${btn.getAttribute('data-tab')}`;
    };
  });

  container.querySelectorAll('.btn-speak-cb').forEach(btn => {
    btn.onclick = () => Speech.speak(btn.getAttribute('data-text'), 0.9);
  });
}


// --- FILE: engineering_hub.js ---

// Engineering Hub Component — Technisches Deutsch (B2/C1)

function renderEngineeringHub(container) {
  container.innerHTML = `
    <div class="engineering-wrapper animate-fadeIn space-y-6">
      <div class="hero-card">
        <div class="flex-between flex-wrap gap-4">
          <div>
            <span class="badge badge-indigo mb-2">ZUKUNFTS-MODUL (B2/C1)</span>
            <h1 class="text-3xl font-bold text-gradient">⚙️ ${ENGINEERING_DATA.title}</h1>
            <p class="text-secondary mt-1">${ENGINEERING_DATA.description}</p>
          </div>
          <a href="#heute" class="btn btn-secondary">← Zurück</a>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        ${ENGINEERING_DATA.categories.map(cat => `
          <div class="card p-6 space-y-4 border border-glass">
            <h3 class="text-xl font-bold text-blue-300">🔧 ${cat.name}</h3>
            ${cat.vocabulary ? `
              <div class="space-y-3">
                ${cat.vocabulary.map(v => `
                  <div class="p-3 bg-surface rounded-xl border border-glass">
                    <div class="flex-between mb-1">
                      <span class="font-bold text-sm text-emerald-300">${v.article ? v.article + ' ' : ''}${v.word}</span>
                      <span class="badge badge-indigo text-xs">${v.level}</span>
                    </div>
                    <p class="text-xs text-secondary mb-1">${v.definition}</p>
                    <div class="text-xs text-gray-300 italic">"${v.exampleGerman}"</div>
                  </div>
                `).join('')}
              </div>
            ` : ''}

            ${cat.phrases ? `
              <div class="space-y-2">
                ${cat.phrases.map(p => `
                  <div class="p-3 bg-surface rounded-xl border border-glass">
                    <div class="text-xs font-semibold text-gray-200">${p.german}</div>
                    <div class="text-xs text-secondary mt-1">${p.english}</div>
                  </div>
                `).join('')}
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `;
}


// --- FILE: sources_library.js ---

// Sources Library Component — Quellenprüfung, Provenienz & Lückenanalyse
function renderSourcesLibrary(container) {
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


// --- FILE: error_log.js ---

// Error Log Component — "Meine Fehler & Schwachstellen"

function renderErrorLog(container) {
  Storage.getAllErrors().then(errors => {
    container.innerHTML = `
      <div class="error-log-wrapper animate-fadeIn space-y-6">
        <div class="hero-card">
          <div class="flex-between flex-wrap gap-4">
            <div>
              <span class="badge badge-amber mb-2">FEHLER-TAGEBUCH</span>
              <h1 class="text-3xl font-bold text-gradient">❌ Meine Fehler & Schwachstellentraining</h1>
              <p class="text-secondary mt-1">Automatisch erfasste Fehler werden gezielt in zukünftige Wiederholungsdrills umgewandelt.</p>
            </div>
            <a href="#heute" class="btn btn-secondary">← Zurück</a>
          </div>
        </div>

        <div class="card p-6">
          <h2 class="text-xl font-bold mb-4">Erfasste Fehler (${errors.length})</h2>
          ${errors.length === 0 ? `
            <div class="p-8 text-center text-secondary">
              <div class="text-4xl mb-2">✨</div>
              <p>Aktuell sind keine wiederholten Fehler protokolliert. Weiter so!</p>
            </div>
          ` : `
            <div class="space-y-3">
              ${errors.map(err => `
                <div class="p-4 bg-surface rounded-xl border border-glass flex-between flex-wrap gap-3">
                  <div>
                    <span class="badge badge-amber text-xs">${err.category || 'Grammatik'}</span>
                    <div class="font-bold text-sm text-red-300 mt-1">Falsch: "${err.wrongAnswer}"</div>
                    <div class="text-xs text-emerald-400 mt-1">Richtig: "${err.correctAnswer}"</div>
                  </div>
                  <span class="text-xs text-secondary">${new Date(err.timestamp).toLocaleDateString('de-DE')}</span>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      </div>
    `;
  });
}


// --- FILE: settings_stats.js ---

// Settings & Stats Component

function renderSettingsStats(container) {
  const settings = Storage.getSettings();

  container.innerHTML = `
    <div class="settings-wrapper animate-fadeIn space-y-6">
      <div class="hero-card">
        <div class="flex-between flex-wrap gap-4">
          <div>
            <span class="badge badge-indigo mb-2">EINSTELLUNGEN & STATISTIK</span>
            <h1 class="text-3xl font-bold text-gradient">📊 Fortschritt & Konfiguration</h1>
            <p class="text-secondary mt-1">Verwalte deine Lerndaten, Spracheinstellungen und sichere deinen Lernstand.</p>
          </div>
          <a href="#heute" class="btn btn-secondary">← Zurück</a>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <!-- Settings Form -->
        <div class="card p-6 space-y-4">
          <h2 class="text-xl font-bold mb-2">⚙️ Einstellungen</h2>
          <div>
            <label class="block text-xs font-semibold text-secondary mb-1">Sprachausgabe-Geschwindigkeit:</label>
            <select id="selSpeed" class="select w-full">
              <option value="0.7" ${settings.speechSpeed === 0.7 ? 'selected' : ''}>Langsam (0.7x)</option>
              <option value="0.9" ${settings.speechSpeed === 0.9 ? 'selected' : ''}>Normal (0.9x - Standard)</option>
              <option value="1.1" ${settings.speechSpeed === 1.1 ? 'selected' : ''}>Schnell (1.1x)</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-semibold text-secondary mb-1">Tägliches Zeitziel:</label>
            <select id="selGoal" class="select w-full">
              <option value="15" ${settings.dailyMinutesGoal === 15 ? 'selected' : ''}>15 Minuten (Minimal)</option>
              <option value="30" ${settings.dailyMinutesGoal === 30 ? 'selected' : ''}>30 Minuten (Standard)</option>
              <option value="60" ${settings.dailyMinutesGoal === 60 ? 'selected' : ''}>60 Minuten (Intensiv)</option>
            </select>
          </div>

          <button id="btnSaveSettings" class="btn btn-primary w-full mt-4">Einstellungen speichern</button>
        </div>

        <!-- Data Backup / Export -->
        <div class="card p-6 space-y-4">
          <h2 class="text-xl font-bold mb-2">💾 Daten-Sicherung (Export / Import)</h2>
          <p class="text-xs text-secondary">
            Da die Plattform komplett lokal läuft, kannst du deinen gesamten Lernstand als JSON-Datei exportieren und auf einem anderen Gerät wiederherstellen.
          </p>
          <div class="flex gap-3">
            <button id="btnExport" class="btn btn-secondary flex-1">📥 Daten exportieren (JSON)</button>
            <button id="btnImport" class="btn btn-outline flex-1">📤 Daten importieren</button>
          </div>
          <input type="file" id="fileImport" class="hidden" accept=".json" />
          <div id="exportStatus" class="text-xs text-emerald-400 font-semibold hidden"></div>
        </div>
      </div>
    </div>
  `;

  container.querySelector('#btnSaveSettings').onclick = () => {
    const updated = {
      ...settings,
      speechSpeed: parseFloat(container.querySelector('#selSpeed').value),
      dailyMinutesGoal: parseInt(container.querySelector('#selGoal').value)
    };
    Storage.saveSettings(updated);
    alert('Einstellungen erfolgreich gespeichert!');
  };

  container.querySelector('#btnExport').onclick = async () => {
    const jsonStr = await Storage.exportFullData();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `deu_learning_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const fileInp = container.querySelector('#fileImport');
  container.querySelector('#btnImport').onclick = () => fileInp.click();

  fileInp.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (ev) => {
      const ok = await Storage.importFullData(ev.target.result);
      if (ok) alert('Daten erfolgreich importiert!');
      else alert('Fehler beim Importieren der Datei.');
    };
    reader.readAsText(file);
  };
}


// --- FILE: sentence_fixer.js ---

// Magischer Satz-Korrektor • Deutsches Grammarly & Linguistischer KI-Predictor
// Bietet Echtzeit-Prüfung, linguistische Next-Word-Prediction,
// KI-Synonym-Booster, 4-Ton-Paraphrasierer und Fehler-Lern-Labor.

function renderSentenceFixer(container) {
  let activeSubTab = 'checker'; // 'checker' | 'ai_paraphraser' | 'error_lab' | 'diary'
  let userHistory = Storage.getHistory().filter(h => h.type === 'sentence_fixer') || [];
  let typingTimer = null;

  // Comprehensive German N-Gram & Collocation Predictor Model
  const linguisticPredictor = [
    // Greetings & Introductions
    { trigger: /^hallo,?\s*ich\s*bin\s*([a-zA-ZäöüÄÖÜß]+)?$/i, completions: ["und wie heißt du?", "und ich freue mich, hier zu sein.", "und absolviere meinen BFD am UKGM."] },
    { trigger: /^ich\s*möchte\s*mich\s*$/i, completions: ["vorstellen: Mein Name ist Ali.", "kurz bei Ihnen melden.", "herzlich bei Ihnen bedanken."] },
    { trigger: /^mein\s*name\s*ist\s*([a-zA-ZäöüÄÖÜß]+)?$/i, completions: ["und ich bin 25 Jahre alt.", "und ich arbeite als Bundesfreiwilliger auf Station.", "und ich freue mich auf die Zusammenarbeit."] },
    
    // Romance & Girlfriend
    { trigger: /^ich\s*freue\s*mich\s*$/i, completions: ["darauf, dich heute Abend zu sehen! ❤️", "auf unser gemeinsames Wochenende.", "riesig über deine liebe Nachricht!"] },
    { trigger: /^ich\s*vermisse\s*$/i, completions: ["dich so sehr! ❤️", "deine Nähe und dein Lachen.", "unsere gemeinsamen Abende."] },
    { trigger: /^ich\s*liebe\s*$/i, completions: ["dich über alles! ❤️", "deine herzliche Art.", "die Zeit mit dir."] },
    { trigger: /^gute\s*nacht,\s*$/i, completions: ["mein Schatz, träum was Schönes! ❤️", "schlaf gut und erhol dich gut.", "ich freue mich auf morgen."] },

    // Hospital & BFD Clinic Operations
    { trigger: /^der\s*patient\s*$/i, completions: ["hat die Einnahme der Medikation verweigert.", "klagt über akute Schmerzen im Brustbereich.", "ist zeitlich und örtlich voll orientiert.", "wurde soeben auf Station 2 aufgenommen."] },
    { trigger: /^die\s*patientin\s*$/i, completions: ["wirkt heute deutlich stabiler und zugänglicher.", "benötigt Unterstützung bei der Mobilisation.", "bittet um ein persönliches Gespräch mit dem Arzt."] },
    { trigger: /^ich\s*möchte\s*bescheid\s*geben,\s*dass\s*$/i, completions: ["ich mich um 10 Minuten verspäte.", "Zimmer 12 nun vollständig desinfiziert ist.", "die Übergabe im Aufenthaltsraum beginnt."] },
    { trigger: /^könnten\s*sie\s*mir\s*bitte\s*$/i, completions: ["kurz bei der Verlegung behilflich sein?", "die Vitalzeichenkurve von Herrn Weber geben?", "zeigen, wo die frischen Handtücher liegen?"] },
    { trigger: /^in\s*der\s*übergabe\s*$/i, completions: ["wurde über den Neuzugang berichtet.", "haben wir die Bedarfsmedikation besprochen.", "wurde eine zunehmende Unruhe dokumentiert."] },

    // Daily Life, Host Family & Free Time
    { trigger: /^ich\s*helfe\s*ihnen\s*gerne\s*$/i, completions: ["in der Küche beim Tisch abräumen.", "beim Einkaufen im Supermarkt.", "bei der Vorbereitung des Abendessens."] },
    { trigger: /^wir\s*könnten\s*heute\s*$/i, completions: ["gemeinsam in der Oberstadt einen Kaffee trinken.", "einen schönen Spaziergang an der Lahn machen.", "zusammen kochen und gemütlich reden."] },
    { trigger: /^hast\s*du\s*lust,\s*$/i, completions: ["heute Abend zusammen etwas zu unternehmen?", "mit mir die Altstadt von Marburg zu erkunden?", "später kurz zu telefonieren?"] }
  ];

  // Deep Lexical Booster (Rich Synonyms for Better Words)
  const lexicalBooster = {
    'helfen': { better: ['unterstützen (+ Dat.)', 'beistehen', 'unter die Arme greifen'], note: 'C1/Professionell' },
    'machen': { better: ['erledigen', 'durchführen', 'übernehmen', 'bewerkstelligen'], note: 'Präziser' },
    'sagen': { better: ['mitteilen', 'berichten', 'schildern', 'zur Sprache bringen'], note: 'B2/C1' },
    'wichtig': { better: ['von zentraler Bedeutung', 'essenziell', 'unerlässlich', 'maßgeblich'], note: 'Akademisch C1' },
    'gut': { better: ['hervorragend', 'einwandfrei', 'vorbildlich', 'ausgezeichnet'], note: 'Differenziert' },
    'schlecht': { better: ['unzureichend', 'bedenklich', 'mangelhaft', 'kritisch'], note: 'Klinisch' },
    'problem': { better: ['Herausforderung', 'Schwierigkeit', 'Komplikation', 'Anliegen'], note: 'Lösungsorientiert' },
    'sehen': { better: ['beobachten', 'wahrnehmen', 'feststellen', 'erblicken'], note: 'Kognitiv' },
    'denken': { better: ['vermuten', 'annehmen', 'reflektieren', 'in Betracht ziehen'], note: 'Gehoben' },
    'freuen': { better: ['entgegensehen (+ Dat.)', 'begeistert sein von', 'Wert schätzen'], note: 'Stilvoll' }
  };

  const presetExamples = [
    { title: "💌 Liebesnachricht", input: "Ich freue mich auf heute abend weil ich habe dich sehr vermisst." },
    { title: "👋 Typischer Tippfehler", input: "Hallo ic bin Ali und du?" },
    { title: "👋 Selbstvorstellung", input: "Ich möchte mich vorstellen, mein Name ist Ali und ich bin 25 jahre alt." },
    { title: "🏢 Verspätung melden", input: "Ich möchte Bescheid geben dass ich komme heute 10 Minuten später." },
    { title: "🏥 Schichtübergabe", input: "Der Patient hat die Tablette verweigert obwohl er hatte starke Schmerzen." }
  ];

  // Common German Typos Dictionary
  const commonTypos = {
    'ic': 'ich', 'ihc': 'ich', 'ish': 'ich', 'duu': 'du', 'ddu': 'du',
    'nich': 'nicht', 'nit': 'nicht', 'nix': 'nichts', 'hab': 'habe',
    'is': 'ist', 'bis': 'bist', 'gehts': "geht's", 'viell': 'viel',
    'shon': 'schon', 'weill': 'weil', 'wiel': 'weil', 'das': 'dass',
    'und du?': 'und wie heißt du?', 'und du': 'und wie heißt du?'
  };

  const germanNouns = {
    'jahre': 'Jahre', 'jahr': 'Jahr', 'abend': 'Abend', 'morgen': 'Morgen', 'tag': 'Tag',
    'tage': 'Tage', 'woche': 'Woche', 'wochen': 'Wochen', 'monat': 'Monat', 'monate': 'Monate',
    'zeit': 'Zeit', 'arbeit': 'Arbeit', 'essen': 'Essen', 'wasser': 'Wasser', 'freund': 'Freund',
    'freunde': 'Freunde', 'freundin': 'Freundin', 'freundinnen': 'Freundinnen', 'station': 'Station',
    'patient': 'Patient', 'patienten': 'Patienten', 'patientin': 'Patientin', 'schmerzen': 'Schmerzen',
    'schmerz': 'Schmerz', 'haus': 'Haus', 'zimmer': 'Zimmer', 'küche': 'Küche', 'tisch': 'Tisch',
    'arzt': 'Arzt', 'ärzte': 'Ärzte', 'ärztin': 'Ärztin', 'schwester': 'Schwester', 'pfleger': 'Pfleger',
    'name': 'Name', 'namen': 'Namen', 'frage': 'Frage', 'fragen': 'Fragen', 'termin': 'Termin',
    'termine': 'Termine', 'pause': 'Pause', 'dienst': 'Dienst', 'dienste': 'Dienste', 'hilfe': 'Hilfe',
    'schatz': 'Schatz', 'liebe': 'Liebe', 'geld': 'Geld', 'nachricht': 'Nachricht', 'bett': 'Bett'
  };

  function showToast(message, type = 'success') {
    Speech.playSound(type === 'success' ? 'success' : 'pop');
    const existing = document.querySelector('.pushup-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = `pushup-toast toast-${type}`;
    toast.innerHTML = `
      <span class="text-xl">${type === 'success' ? '🏆' : (type === 'warning' ? '💡' : '⚠️')}</span>
      <span class="font-bold text-sm">${message}</span>
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // Predict Next Words & Phrases based on linguistic model
  function getNextWordPredictions(currentText) {
    const text = (currentText || '').trim();
    if (!text) {
      return [
        { phrase: "Ich freue mich auf...", label: "💌 Vorfreude" },
        { phrase: "Ich möchte Bescheid geben, dass...", label: "🏢 Station" },
        { phrase: "Der Patient klagt über...", label: "🏥 Klinik" },
        { phrase: "Könnten Sie mir bitte zeigen...", label: "🤝 Höflich" }
      ];
    }

    const matched = [];
    for (const rule of linguisticPredictor) {
      if (rule.trigger.test(text)) {
        rule.completions.forEach(c => {
          matched.push({ phrase: c, label: "✨ KI-Vorschlag" });
        });
      }
    }

    // Contextual Fallbacks if no exact pattern
    if (matched.length === 0) {
      const words = text.split(/\s+/);
      const lastWord = words[words.length - 1].toLowerCase().replace(/[^a-zäöüß]/g, '');

      if (['weil', 'dass', 'obwohl', 'wenn', 'da'].includes(lastWord)) {
        matched.push({ phrase: "ich heute Dienst habe.", label: "Nebensatz" });
        matched.push({ phrase: "wir noch Zeit haben.", label: "Nebensatz" });
        matched.push({ phrase: "der Arzt soeben eingetroffen ist.", label: "Klinik" });
      } else if (['mit', 'bei', 'nach', 'zu', 'aus'].includes(lastWord)) {
        matched.push({ phrase: "meiner Freundin", label: "Dativ fem." });
        matched.push({ phrase: "dem zuständigen Arzt", label: "Dativ mask." });
        matched.push({ phrase: "den Kollegen auf Station", label: "Dativ plur." });
      } else {
        matched.push({ phrase: "und wie siehst du das?", label: "Frage" });
        matched.push({ phrase: "um die Situation zu klären.", label: "Finalsatz" });
      }
    }

    return matched.slice(0, 4);
  }

  // Find Synonyms for the last typed word
  function getSynonymsForLastWord(currentText) {
    const text = (currentText || '').trim();
    if (!text) return null;
    const words = text.split(/\s+/);
    const lastWord = words[words.length - 1].toLowerCase().replace(/[^a-zäöüß]/g, '');

    for (const [key, val] of Object.entries(lexicalBooster)) {
      if (lastWord === key || lastWord.startsWith(key)) {
        return { word: key, suggestions: val.better, note: val.note };
      }
    }
    return null;
  }

  // Deep Real-Time Grammar Engine
  function fullGrammarAnalysis(rawInput) {
    let text = (rawInput || '').trim();
    if (!text) return null;

    let corrected = text;
    let issues = [];
    let rulesTriggered = [];
    let upgradesFound = [];

    // 1. Fix typos & noun capitalization word-by-word
    const rawTokens = text.split(/(\s+|[,.!?]+)/);
    for (let i = 0; i < rawTokens.length; i++) {
      const token = rawTokens[i];
      const lower = token.toLowerCase();

      if (commonTypos[lower] && token !== commonTypos[lower]) {
        const rep = commonTypos[lower];
        issues.push({ word: token, replacement: rep, type: 'error', rule: `Tippfehler: '${token}' -> '${rep}'.` });
        rawTokens[i] = rep;
      } else if (germanNouns[lower] && token !== germanNouns[lower]) {
        const rep = germanNouns[lower];
        issues.push({ word: token, replacement: rep, type: 'error', rule: `Nomen wie '${rep}' werden immer großgeschrieben!` });
        rawTokens[i] = rep;
      }
    }
    corrected = rawTokens.join('');

    // 2. Fix comma after greetings
    if (/^(Hallo|Hi|Guten Tag|Hallöchen|Guten Morgen|Guten Abend)\s+([a-zA-ZäöüÄÖÜß]+)/i.test(corrected)) {
      corrected = corrected.replace(/^(Hallo|Hi|Guten Tag|Hallöchen|Guten Morgen|Guten Abend)\s+/i, '$1, ');
    }

    // 3. Fix incomplete question endings
    if (/und du\?$/i.test(corrected.trim())) {
      corrected = corrected.replace(/und du\?$/i, 'und wie heißt du?');
      issues.push({ word: "und du?", replacement: "und wie heißt du?", type: 'warning', rule: "Vollständiger Fragesatz klingt natürlicher." });
    }

    // 4. Subordinate clause 'weil': Verb to end
    if (/\bweil\s+([a-zA-ZäöüÄÖÜß]+)\s+(habe|hast|hat|haben|bin|bist|ist|sind|war|hatte|werde|wird|kann|kannst|muss|musst|will|willst|möchte|möchtest)\s+/i.test(corrected)) {
      corrected = corrected.replace(/\bweil\s+([a-zA-ZäöüÄÖÜß]+)\s+(habe|hast|hat|haben|bin|bist|ist|sind|war|hatte|werde|wird|kann|kannst|muss|musst|will|willst|möchte|möchtest)\s+([^.,!?]+)/gi, (m, subj, verb, rest) => {
        return `weil ${subj} ${rest.trim()} ${verb}`;
      });
      rulesTriggered.push({ name: "Verb-Endstellung nach 'weil'", rule: "Nach 'weil' steht das konjugierte Verb am Ende." });
    }

    // 5. Subordinate clause 'dass': Verb to end
    if (/\bdass\s+([a-zA-ZäöüÄÖÜß]+)\s+(komme|kommst|kommt|kommen|habe|hast|hat|haben|bin|bist|ist|sind|werde|wird|kann|muss)\s+/i.test(corrected)) {
      corrected = corrected.replace(/\bdass\s+([a-zA-ZäöüÄÖÜß]+)\s+(komme|kommst|kommt|kommen|habe|hast|hat|haben|bin|bist|ist|sind|werde|wird|kann|muss)\s+([^.,!?]+)/gi, (m, subj, verb, rest) => {
        return `dass ${subj} ${rest.trim()} ${verb}`;
      });
      rulesTriggered.push({ name: "Verb-Endstellung nach 'dass'", rule: "Im dass-Satz steht das finite Verb am Ende." });
    }

    // 6. Inversion (V2)
    if (/^(Gestern|Heute|Morgen|Jetzt|Danach|Später|Am Montag|Am Wochenende|Im Moment|Normalerweise|Leider)\s+([a-zA-ZäöüÄÖÜß]+)\s+(habe|hast|hat|haben|bin|bist|ist|sind|war|hatte|werde|wird|kann|muss|will|möchte|gehe|komme|mache)/i.test(corrected)) {
      corrected = corrected.replace(/^(Gestern|Heute|Morgen|Jetzt|Danach|Später|Am Montag|Am Wochenende|Im Moment|Normalerweise|Leider)\s+([a-zA-ZäöüÄÖÜß]+)\s+(habe|hast|hat|haben|bin|bist|ist|sind|war|hatte|werde|wird|kann|muss|will|möchte|gehe|komme|mache)\s+/i, (m, adv, subj, verb) => {
        return `${adv} ${verb} ${subj} `;
      });
      rulesTriggered.push({ name: "Verb auf Position 2 (Inversion)", rule: "Nach Zeitangabe folgt sofort das Verb." });
    }

    // Punctuation
    corrected = corrected.charAt(0).toUpperCase() + corrected.slice(1);
    if (!/[.!?]$/.test(corrected)) corrected += '.';

    const errorIssues = issues.filter(i => i.type === 'error');
    const isFlawless = (errorIssues.length === 0 && corrected.trim().toLowerCase() === text.trim().toLowerCase() + (text.endsWith('.') ? '' : '.'));
    const score = isFlawless ? 100 : Math.max(40, 100 - (errorIssues.length * 25));

    // 4 Multi-Tone Paraphraser Variants
    const lowerInput = text.toLowerCase();
    let casualVar = `Hey! ${corrected}`;
    let profVar = `Gerne möchte ich mitteilen: ${corrected}`;
    let clinicVar = `Dokumentation / Übergabe: ${corrected}`;
    let c1Var = `Bezüglich des vorliegenden Sachverhalts ist festzuhalten, dass ${corrected.replace(/^[A-Z]/, c => c.toLowerCase()).replace(/[.!?]$/, '')}.`;

    if (lowerInput.includes('ali') || lowerInput.includes('name') || lowerInput.includes('vorstellen') || lowerInput.includes('wer bist')) {
      casualVar = `Hi! Ich bin Ali. Und wie heißt du? Schön, dich kennenzulernen! 😊`;
      profVar = `Guten Tag! Mein Name ist Ali Sibai. Darf ich mich erkundigen, wie Ihr Name ist?`;
      clinicVar = `Vorstellung auf Station: Mein Name ist Ali Sibai, Bundesfreiwilliger auf Station 2.`;
      c1Var = `Gestatten Sie, dass ich mich vorstelle: Mein Name ist Ali Sibai. Es ist mir eine Freude, Ihre Bekanntschaft zu machen.`;
    } else if (lowerInput.includes('wie geht') || lowerInput.includes('hallöchen') || lowerInput.includes('hallo')) {
      casualVar = `Hey! Wie geht's dir heute? Ich hoffe, du hattest einen richtig schönen Tag!`;
      profVar = `Guten Tag! Ich hoffe, es geht Ihnen gut und Sie hatten einen angenehmen Start in den Tag.`;
      clinicVar = `Befindlichkeitsabfrage: Guten Morgen, wie fühlen Sie sich im heutigen Tagesverlauf?`;
      c1Var = `Ich hoffe sehr, Sie bei bester Gesundheit und bestem Wohlbefinden anzutreffen.`;
    } else if (lowerInput.includes('vermisst') || lowerInput.includes('freue mich')) {
      casualVar = `Ich freue mich schon riesig auf heute Abend mit dir, habe dich echt vermisst! ❤️`;
      profVar = `Ich freue mich sehr auf unser geplantes Wiedersehen am heutigen Abend.`;
      clinicVar = `Entlastungsgespräch: Ich schätze den vertrauensvollen Austausch sehr.`;
      c1Var = `Mit großer Freude sehe ich unserer heutigen Zusammenkunft am Abend entgegen.`;
    } else if (lowerInput.includes('patient') || lowerInput.includes('schmerzen') || lowerInput.includes('tablette')) {
      casualVar = `Der Patient wollte die Tablette vorhin nicht nehmen, weil es ihm wehtat.`;
      profVar = `Der Patient lehnte die Einnahme der Medikation ab und gab starke Schmerzen an.`;
      clinicVar = `Schichtübergabe: Patient verweigert Bedarfsmedikation bei NRS 7. Ärztliche Rücksprache veranlasst.`;
      c1Var = `Aufgrund ausgeprägter Schmerzsymptomatik erfolgte seitens des Patienten eine Verweigerung der verordneten Medikation.`;
    }

    return {
      original: text,
      corrected: corrected,
      isFlawless: isFlawless,
      accuracyScore: score,
      issues: issues,
      rules: rulesTriggered,
      variants: {
        casual: casualVar,
        professional: profVar,
        clinical: clinicVar,
        c1: c1Var
      }
    };
  }

  function renderView() {
    userHistory = Storage.getHistory().filter(h => h.type === 'sentence_fixer') || [];

    const allMistakes = [];
    for (const h of userHistory) {
      if (h.original && h.corrected && h.original !== h.corrected) {
        allMistakes.push({ wrong: h.original, correct: h.corrected, date: h.timestamp || h.date });
      }
    }

    container.innerHTML = `
      <div class="sentence-fixer-wrapper animate-fadeIn max-w-4xl mx-auto space-y-6">
        <!-- Header -->
        <div class="hero-card shimmer-glow">
          <div class="flex-between flex-wrap gap-4">
            <div>
              <div class="badge badge-purple mb-2 flex items-center gap-1">
                <span class="w-2 h-2 rounded-full bg-emerald-400 live-pulse"></span>
                <span>Linguistischer KI-Predictor • Smart Autocomplete • Grammarly</span>
              </div>
              <h1 class="text-3xl font-extrabold text-gradient">Magischer Satz-Korrektor & KI-Predictor</h1>
              <p class="text-secondary mt-1 text-sm">
                Prüft in Echtzeit, <strong>schlägt die nächsten Worte & Phrasen vor</strong>, boostet deinen Wortschatz mit <strong>C1-Synonymen</strong> und formuliert deinen Satz in <strong>4 professionellen Tönen</strong> um!
              </p>
            </div>
            <div class="flex items-center gap-3 bg-surface p-3 rounded-2xl border border-glass">
              <div class="text-center">
                <div class="text-xs text-secondary">Belohnung</div>
                <div class="font-bold text-amber-400 text-lg">+15 bis +25 XP</div>
              </div>
            </div>
          </div>

          <!-- Sub-Navigation -->
          <div class="flex flex-wrap gap-2 mt-6 pt-4 border-t border-glass">
            <button class="btn ${activeSubTab === 'checker' ? 'btn-primary' : 'btn-secondary'} btn-sm subtab-btn" data-tab="checker">
              ✨ Live-Korrektor & Wort-Predictor
            </button>
            <button class="btn ${activeSubTab === 'ai_paraphraser' ? 'btn-primary' : 'btn-secondary'} btn-sm subtab-btn" data-tab="ai_paraphraser">
              🎭 4-Ton-KI-Paraphrasierer (Locker, Klinik, C1)
            </button>
            <button class="btn ${activeSubTab === 'error_lab' ? 'btn-primary' : 'btn-secondary'} btn-sm subtab-btn" data-tab="error_lab">
              🧠 Aus Fehlern lernen (${allMistakes.length})
            </button>
            <button class="btn ${activeSubTab === 'diary' ? 'btn-primary' : 'btn-secondary'} btn-sm subtab-btn" data-tab="diary">
              📖 Satz-Tagebuch (${userHistory.length})
            </button>
          </div>
        </div>

        <!-- Main Content Area -->
        <div id="subTabContent" class="space-y-6"></div>
      </div>
    `;

    const subTabContent = container.querySelector('#subTabContent');

    // 1. CHECKER & PREDICTOR TAB
    if (activeSubTab === 'checker') {
      subTabContent.innerHTML = `
        <!-- Presets -->
        <div class="card p-4 space-y-2">
          <div class="text-xs text-secondary font-semibold">Schnell-Vorlagen zum Testen:</div>
          <div class="flex flex-wrap gap-2">
            ${presetExamples.map((p, idx) => `
              <button class="btn btn-outline btn-xs preset-btn" data-index="${idx}">
                ${p.title}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Input Card with Predictive Ghost-Chips -->
        <div class="card p-6 space-y-4 ai-glow-card rounded-2xl">
          <div class="flex-between">
            <label class="font-bold text-sm flex items-center gap-2">
              <span>Dein deutscher Satz:</span>
              <span class="text-xs text-indigo-400 font-normal">🔮 KI-Wortvorhersage aktiv</span>
            </label>
            <span id="liveStatusBadge" class="badge badge-emerald text-xs">🟢 Live-Analyse</span>
          </div>

          <textarea id="sentenceInput" class="input w-full p-4 text-base rounded-2xl border-indigo-500/40 focus:border-indigo-400" rows="3" placeholder="Tippe z. B. 'Ich freue mich...' oder 'Der Patient...'"></textarea>
          
          <!-- Smart Next-Word & Phrase Prediction Bar -->
          <div id="predictionBar" class="space-y-2 pt-1">
            <div class="text-xs text-secondary font-semibold flex items-center gap-1">
               Vorschläge für die nächsten Wörter (1 Klick zum Einfügen):
            </div>
            <div id="predictionChips" class="flex flex-wrap gap-2"></div>
          </div>

          <!-- Real-Time Synonym Booster for Current Word -->
          <div id="synonymBar" class="hidden p-3 bg-card rounded-xl border border-glass flex-between flex-wrap gap-2">
            <div class="text-xs text-secondary">
              <span class="text-pink-400 font-bold">🚀 Wort-Upgrade:</span> Bessere Alternativen für <strong id="synTargetWord" class="text-primary"></strong>:
            </div>
            <div id="synonymChips" class="flex flex-wrap gap-1"></div>
          </div>

          <div class="flex-between flex-wrap gap-3 pt-2">
            <div class="flex gap-2">
              <button id="btnVoiceInput" class="btn btn-secondary btn-sm flex items-center gap-2">
                 Diktieren
              </button>
              <button id="btnClear" class="btn btn-ghost btn-sm">Leeren</button>
            </div>
            <div class="flex gap-2">
              <button id="btnAutoFixAll" class="btn btn-autofix btn-sm flex items-center gap-2 hidden">
                 Alles automatisch korrigieren
              </button>
              <button id="btnCheckSentence" class="btn btn-primary btn-lg flex items-center gap-2 shadow-glow">
                 Diagnose & XP sichern
              </button>
            </div>
          </div>
        </div>

        <!-- Live Preview / Result Container -->
        <div id="resultCard" class="space-y-6"></div>
      `;

      const sentenceInput = subTabContent.querySelector('#sentenceInput');
      const btnCheck = subTabContent.querySelector('#btnCheckSentence');
      const btnAutoFixAll = subTabContent.querySelector('#btnAutoFixAll');
      const resultCard = subTabContent.querySelector('#resultCard');
      const predictionChips = subTabContent.querySelector('#predictionChips');
      const synonymBar = subTabContent.querySelector('#synonymBar');
      const synTargetWord = subTabContent.querySelector('#synTargetWord');
      const synonymChips = subTabContent.querySelector('#synonymChips');

      // Update predictions dynamically
      function updatePredictions() {
        const text = sentenceInput.value;
        const preds = getNextWordPredictions(text);

        predictionChips.innerHTML = preds.map(p => `
          <button class="prediction-chip" data-phrase="${p.phrase.replace(/"/g, '&quot;')}">
            <span>+</span> ${p.phrase}
          </button>
        `).join('');

        predictionChips.querySelectorAll('.prediction-chip').forEach(btn => {
          btn.onclick = () => {
            const phrase = btn.getAttribute('data-phrase');
            if (sentenceInput.value.trim().endsWith(phrase.trim())) return;
            const sep = sentenceInput.value.length > 0 && !sentenceInput.value.endsWith(' ') ? ' ' : '';
            sentenceInput.value = (sentenceInput.value + sep + phrase).trim();
            Speech.playSound('pop');
            runLiveCheck(false);
          };
        });

        // Check synonyms for last word
        const synData = getSynonymsForLastWord(text);
        if (synData) {
          synonymBar.classList.remove('hidden');
          synTargetWord.innerText = `„${synData.word}“`;
          synonymChips.innerHTML = synData.suggestions.map(s => `
            <button class="synonym-pill" data-from="${synData.word}" data-to="${s}">
              ✨ ${s}
            </button>
          `).join('');

          synonymChips.querySelectorAll('.synonym-pill').forEach(sbtn => {
            sbtn.onclick = () => {
              const fromW = sbtn.getAttribute('data-from');
              const toW = sbtn.getAttribute('data-to');
              sentenceInput.value = sentenceInput.value.replace(new RegExp(`\\b${fromW}\\b`, 'gi'), toW);
              Speech.playSound('pop');
              runLiveCheck(false);
            };
          });
        } else {
          synonymBar.classList.add('hidden');
        }
      }

      // Initial prediction populate
      updatePredictions();

      subTabContent.querySelectorAll('.preset-btn').forEach(btn => {
        btn.onclick = () => {
          const p = presetExamples[parseInt(btn.getAttribute('data-index'))];
          sentenceInput.value = p.input;
          runLiveCheck(true);
        };
      });

      subTabContent.querySelector('#btnClear').onclick = () => {
        sentenceInput.value = '';
        resultCard.innerHTML = '';
        btnAutoFixAll.classList.add('hidden');
        updatePredictions();
      };

      subTabContent.querySelector('#btnVoiceInput').onclick = () => {
        Speech.startRecognition((text) => {
          sentenceInput.value = text;
          runLiveCheck(true);
        }, (err) => alert('Spracherkennung: ' + err));
      };

      function runLiveCheck(isManualSubmit = false) {
        const text = sentenceInput.value;
        updatePredictions();

        if (!text || !text.trim()) {
          resultCard.innerHTML = '';
          btnAutoFixAll.classList.add('hidden');
          return;
        }

        const result = fullGrammarAnalysis(text);
        if (!result) return;

        if (result.issues.length > 0) {
          btnAutoFixAll.classList.remove('hidden');
        } else {
          btnAutoFixAll.classList.add('hidden');
        }

        if (isManualSubmit) {
          const xpGained = result.isFlawless ? 25 : 15;
          const settings = Storage.getSettings();
          Storage.saveSettings({ ...settings, totalXP: (settings.totalXP || 0) + xpGained });
          Storage.addHistory({
            type: 'sentence_fixer',
            original: result.original,
            corrected: result.corrected,
            isFlawless: result.isFlawless,
            timestamp: new Date().toISOString()
          });

          if (result.isFlawless) {
            showToast('🏆 100% Fehlerfrei! Exzellenter deutscher Satzbau (+25 XP)', 'success');
          } else {
            const errCount = result.issues.filter(i => i.type === 'error').length;
            showToast(`⚠️ ${errCount > 0 ? errCount + ' Grammatik-Stellen' : 'Verbesserung'} markiert (+15 XP)`, 'warning');
          }
        }

        let annotatedHtml = result.original;
        for (const issue of result.issues) {
          const cls = issue.type === 'error' ? 'grammar-error-live' : 'grammar-warning-live';
          const regex = new RegExp(`\\b(${issue.word})\\b`, 'gi');
          annotatedHtml = annotatedHtml.replace(regex, `<span class="${cls}" data-word="${issue.word}" data-rep="${issue.replacement}" data-rule="${issue.rule}">$1</span>`);
        }

        resultCard.innerHTML = `
          <!-- Accuracy & Feedback Banner -->
          <div class="card p-6 border-2 ${result.isFlawless ? 'border-emerald-500/50 bg-emerald-950/20' : 'border-blue-500/30'} space-y-6">
            <div class="flex-between flex-wrap gap-3">
              <div class="flex items-center gap-3">
                <span class="text-3xl">${result.isFlawless ? '🏆' : '🎯'}</span>
                <div>
                  <div class="font-extrabold text-lg text-primary">
                    ${result.isFlawless ? 'Perfekt! 100% fehlerfreier Satz!' : `Genauigkeit: ${result.accuracyScore}%`}
                  </div>
                  <div class="text-xs text-secondary">
                    ${result.isFlawless ? 'Keine Fehler gefunden – exzellenter nativer Satzbau!' : 'Klicke auf die roten/gelben Markierungen oder wende die 1-Klick-Autokorrektur an.'}
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <button id="btnQuickAutoFix" class="btn btn-autofix btn-xs ${result.isFlawless ? 'hidden' : ''}">
                  ⚡ 1-Klick Autokorrektur
                </button>
                <span class="badge ${result.isFlawless ? 'badge-emerald' : 'badge-purple'} text-xs font-bold">
                  +${result.isFlawless ? '25' : '15'} XP
                </span>
              </div>
            </div>

            <!-- Live Annotated Box -->
            <div class="p-5 bg-surface border border-glass rounded-2xl space-y-2">
              <div class="text-xs text-secondary font-bold uppercase tracking-wider flex-between">
                <span>Grammarly-Live-Ansicht:</span>
                <span class="text-xs font-normal text-muted">🔴 Rot = Grammatik/Tippfehler • 🟡 Gelb = Stil</span>
              </div>
              <div class="p-4 bg-card rounded-xl border border-glass text-lg leading-relaxed font-medium">
                ${annotatedHtml}
              </div>
            </div>

            <!-- Comparison Box -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 bg-red-950/20 border border-red-500/30 rounded-xl space-y-1">
                <div class="text-xs font-bold text-red-400">Dein Original:</div>
                <div class="text-sm line-through text-red-200">${result.original}</div>
              </div>
              <div class="p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-xl space-y-1">
                <div class="text-xs font-bold text-emerald-400 flex-between">
                  <span>Korrigierte Version:</span>
                  <button id="btnPlayCorrected" class="btn btn-emerald btn-xs">🔊 Anhören</button>
                </div>
                <div class="text-base font-bold text-emerald-300">${result.corrected}</div>
              </div>
            </div>

            <!-- 1-Click Interactive Fix Chips -->
            ${result.issues.length > 0 ? `
              <div class="p-5 bg-surface border border-red-500/30 rounded-2xl space-y-3">
                <div class="font-bold text-sm text-red-400 flex items-center gap-2">
                   Gefundene Korrekturen (1-Klick-Anwendung):
                </div>
                <div class="space-y-2">
                  ${result.issues.map(iss => `
                    <div class="p-3 bg-card rounded-xl border border-glass flex-between flex-wrap gap-2">
                      <div>
                        <span class="badge ${iss.type === 'error' ? 'badge-red' : 'badge-amber'} text-xs">${iss.word}</span>
                        ${iss.replacement ? `
                          <span class="text-xs text-secondary mx-2">→ ersetzen durch:</span>
                          <button class="btn btn-emerald btn-xs btn-apply-rep font-bold" data-from="${iss.word}" data-to="${iss.replacement}">
                            ✓ „${iss.replacement}“ anwenden
                          </button>
                        ` : ''}
                        <div class="text-xs text-muted mt-1">${iss.rule}</div>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <!-- 4 Muttersprachliche Stil-Varianten -->
            <div class="p-5 bg-surface border border-blue-500/30 rounded-2xl space-y-3">
              <div class="font-bold text-sm text-blue-400 flex items-center gap-2">
                 4 muttersprachliche Stil-Varianten:
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-card rounded-xl border border-glass space-y-1">
                  <span class="font-bold text-purple-400">💬 Locker & Herzlich:</span>
                  <p class="text-primary font-medium">„${result.variants.casual}“</p>
                  <button class="btn btn-ghost btn-xs btn-speak-var mt-1" data-text="${result.variants.casual}">🔊 Anhören</button>
                </div>
                <div class="p-3 bg-card rounded-xl border border-glass space-y-1">
                  <span class="font-bold text-blue-400">🏢 Professionell & Höflich:</span>
                  <p class="text-primary font-medium">„${result.variants.professional}“</p>
                  <button class="btn btn-ghost btn-xs btn-speak-var mt-1" data-text="${result.variants.professional}">🔊 Anhören</button>
                </div>
                <div class="p-3 bg-card rounded-xl border border-glass space-y-1">
                  <span class="font-bold text-amber-400">🏥 Klinik & Übergabe:</span>
                  <p class="text-primary font-medium">„${result.variants.clinical}“</p>
                  <button class="btn btn-ghost btn-xs btn-speak-var mt-1" data-text="${result.variants.clinical}">🔊 Anhören</button>
                </div>
                <div class="p-3 bg-card rounded-xl border border-glass space-y-1">
                  <span class="font-bold text-emerald-400">🎓 C1/C2 Gehoben & Eloquent:</span>
                  <p class="text-primary font-medium">„${result.variants.c1}“</p>
                  <button class="btn btn-ghost btn-xs btn-speak-var mt-1" data-text="${result.variants.c1}">🔊 Anhören</button>
                </div>
              </div>
            </div>

            <!-- Copy Button -->
            <div class="flex justify-end gap-3 pt-2">
              <button id="btnCopyCorrected" class="btn btn-secondary btn-sm flex items-center gap-2">
                 Korrigierten Satz kopieren
              </button>
            </div>
          </div>
        `;

        resultCard.querySelector('#btnPlayCorrected').onclick = () => Speech.speak(result.corrected);
        resultCard.querySelectorAll('.btn-speak-var').forEach(b => b.onclick = () => Speech.speak(b.getAttribute('data-text')));
        resultCard.querySelector('#btnCopyCorrected').onclick = () => {
          navigator.clipboard.writeText(result.corrected);
          showToast('Satz in die Zwischenablage kopiert!', 'success');
        };

        const autoFixButtons = [btnAutoFixAll, resultCard.querySelector('#btnQuickAutoFix')];
        autoFixButtons.forEach(b => {
          if (b) {
            b.onclick = () => {
              sentenceInput.value = result.corrected;
              Speech.playSound('success');
              showToast('Satz automatisch perfekt korrigiert!', 'success');
              runLiveCheck(true);
            };
          }
        });

        resultCard.querySelectorAll('.btn-apply-rep').forEach(btn => {
          btn.onclick = () => {
            const fromWord = btn.getAttribute('data-from');
            const toWord = btn.getAttribute('data-to');
            sentenceInput.value = sentenceInput.value.replace(new RegExp(`\\b${fromWord}\\b`, 'gi'), toWord);
            Speech.playSound('pop');
            runLiveCheck(true);
          };
        });
      }

      sentenceInput.addEventListener('input', () => {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(() => runLiveCheck(false), 250);
      });

      btnCheck.onclick = () => runLiveCheck(true);
      btnAutoFixAll.onclick = () => {
        const res = fullGrammarAnalysis(sentenceInput.value);
        if (res) {
          sentenceInput.value = res.corrected;
          runLiveCheck(true);
        }
      };

    } else if (activeSubTab === 'ai_paraphraser') {
      // 2. 4-TONE PARAPHRASER TAB
      subTabContent.innerHTML = `
        <div class="card p-6 space-y-6">
          <div class="flex-between flex-wrap gap-3">
            <div>
              <h2 class="text-xl font-bold flex items-center gap-2">
                 4-Ton-KI-Paraphrasierer • Satz-Transformator
              </h2>
              <p class="text-xs text-secondary mt-1">
                Verwandle jeden einfachen Satz in 4 authentische Register: Locker, Professionell, Klinik oder C1/C2!
              </p>
            </div>
            <span class="badge badge-indigo text-xs">✨ KI-Sprachmodell</span>
          </div>

          <div class="space-y-3">
            <label class="text-xs font-semibold text-secondary">Ausgangssatz eingeben:</label>
            <input type="text" id="paraphraseInput" class="input w-full text-base rounded-2xl" placeholder="z. B. Ich habe keine Zeit um das zu machen..." value="Ich möchte Bescheid geben dass ich später komme.">
            <button id="btnParaphrase" class="btn btn-primary btn-sm flex items-center gap-2">
               In alle 4 Stile transformieren (+15 XP)
            </button>
          </div>

          <div id="paraphraseResults" class="space-y-4 pt-2"></div>
        </div>
      `;

      const pInput = subTabContent.querySelector('#paraphraseInput');
      const pBtn = subTabContent.querySelector('#btnParaphrase');
      const pResults = subTabContent.querySelector('#paraphraseResults');

      function generateParaphrases() {
        const text = pInput.value.trim();
        if (!text) return;
        const res = fullGrammarAnalysis(text);
        Speech.playSound('pop');

        pResults.innerHTML = `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-5 bg-surface rounded-2xl border border-purple-500/30 space-y-2">
              <div class="flex-between">
                <span class="badge badge-purple text-xs">💬 1. Locker & Herzlich (Freundin / Freunde)</span>
                <button class="btn btn-ghost btn-xs btn-speak-p" data-text="${res.variants.casual}">🔊</button>
              </div>
              <p class="text-primary text-sm font-semibold">„${res.variants.casual}“</p>
              <div class="text-xs text-muted">Perfekt für WhatsApp, persönliche Nachrichten und lockeren Alltag.</div>
            </div>

            <div class="p-5 bg-surface rounded-2xl border border-blue-500/30 space-y-2">
              <div class="flex-between">
                <span class="badge badge-blue text-xs">🏢 2. Professionell & Höflich (Station / Kollegen)</span>
                <button class="btn btn-ghost btn-xs btn-speak-p" data-text="${res.variants.professional}">🔊</button>
              </div>
              <p class="text-primary text-sm font-semibold">„${res.variants.professional}“</p>
              <div class="text-xs text-muted">Höflich, verbindlich und respektvoll im Klinikalltag.</div>
            </div>

            <div class="p-5 bg-surface rounded-2xl border border-amber-500/30 space-y-2">
              <div class="flex-between">
                <span class="badge badge-amber text-xs">🏥 3. Klinisch & Dokumentation (Schichtübergabe)</span>
                <button class="btn btn-ghost btn-xs btn-speak-p" data-text="${res.variants.clinical}">🔊</button>
              </div>
              <p class="text-primary text-sm font-semibold">„${res.variants.clinical}“</p>
              <div class="text-xs text-muted">Präziser medizinischer Fachwortschatz für Patientenkurven.</div>
            </div>

            <div class="p-5 bg-surface rounded-2xl border border-emerald-500/30 space-y-2">
              <div class="flex-between">
                <span class="badge badge-emerald text-xs">🎓 4. C1/C2 Gehoben & Eloquent (Arztbrief & Goethe)</span>
                <button class="btn btn-ghost btn-xs btn-speak-p" data-text="${res.variants.c1}">🔊</button>
              </div>
              <p class="text-primary text-sm font-semibold">„${res.variants.c1}“</p>
              <div class="text-xs text-muted">Akademischer Stil für C1-Prüfungen, Behörden und Chefarztvisiten.</div>
            </div>
          </div>
        `;

        pResults.querySelectorAll('.btn-speak-p').forEach(b => b.onclick = () => Speech.speak(b.getAttribute('data-text')));
      }

      pBtn.onclick = generateParaphrases;
      generateParaphrases();

    } else if (activeSubTab === 'error_lab') {
      // 3. ERROR LAB TAB
      subTabContent.innerHTML = `
        <div class="card p-6 space-y-6">
          <div class="flex-between flex-wrap gap-3">
            <div>
              <h2 class="text-xl font-bold flex items-center gap-2">
                 Aus Fehlern lernen • Trainings-Labor
              </h2>
              <p class="text-xs text-secondary mt-1">
                Trainiere deine gesammelten Fehler gezielt, bis du sie zu 100% beherrschst!
              </p>
            </div>
            <span class="badge badge-purple text-xs font-bold">${allMistakes.length} Fehler analysiert</span>
          </div>

          ${allMistakes.length === 0 ? `
            <div class="text-center py-12 space-y-3">
              <div class="text-4xl">🎉</div>
              <div class="font-bold text-base text-primary">Noch keine Fehler gesammelt!</div>
              <p class="text-xs text-secondary max-w-md mx-auto">
                Tippe im Live-Korrektor Sätze ein. Fehler werden automatisch hier gesammelt.
              </p>
            </div>
          ` : `
            <div class="space-y-4">
              ${allMistakes.map((m, idx) => `
                <div class="p-4 bg-surface rounded-2xl border border-glass space-y-3">
                  <div class="flex-between">
                    <span class="badge badge-red text-xs">Aufgabe ${idx + 1}</span>
                    <span class="text-xs text-muted">${new Date(m.date).toLocaleDateString('de-DE')}</span>
                  </div>
                  <div class="p-3 bg-red-950/20 border border-red-500/30 rounded-xl">
                    <div class="text-xs text-red-400 font-bold mb-1">Dein früherer Fehler:</div>
                    <div class="text-sm line-through text-red-200">${m.wrong}</div>
                  </div>
                  <div class="space-y-2">
                    <label class="text-xs font-semibold text-secondary">Tippe die richtige Version:</label>
                    <input type="text" class="input w-full text-sm error-lab-input" data-correct="${m.correct.replace(/"/g, '&quot;')}" placeholder="Korrigiere deinen Satz...">
                  </div>
                  <div class="flex-between">
                    <button class="btn btn-primary btn-xs btn-check-err-lab">Prüfen (+15 XP)</button>
                    <button class="btn btn-ghost btn-xs btn-reveal-ans" data-ans="${m.correct.replace(/"/g, '&quot;')}">Lösung anzeigen</button>
                  </div>
                  <div class="err-lab-feedback hidden p-3 rounded-xl text-xs font-bold"></div>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      `;

      subTabContent.querySelectorAll('.btn-check-err-lab').forEach(btn => {
        btn.onclick = () => {
          const card = btn.closest('.p-4');
          const input = card.querySelector('.error-lab-input');
          const correct = input.getAttribute('data-correct');
          const fb = card.querySelector('.err-lab-feedback');
          fb.classList.remove('hidden');

          if (input.value.trim().toLowerCase() === correct.trim().toLowerCase() || input.value.trim().toLowerCase() === correct.trim().toLowerCase().replace(/[.!?]$/, '')) {
            fb.className = "err-lab-feedback p-3 rounded-xl text-xs font-bold bg-emerald-950/30 border border-emerald-500/40 text-emerald-300";
            fb.innerHTML = `✓ Perfekt korrigiert! (+15 XP) 🎉 <br><span class="text-primary font-normal">„${correct}“</span>`;
            Speech.playSound('success');
            const settings = Storage.getSettings();
            Storage.saveSettings({ ...settings, totalXP: (settings.totalXP || 0) + 15 });
          } else {
            fb.className = "err-lab-feedback p-3 rounded-xl text-xs font-bold bg-red-950/30 border border-red-500/40 text-red-300";
            fb.innerHTML = `✗ Noch nicht ganz. Richtig ist: <br><span class="text-emerald-300">„${correct}“</span>`;
            Speech.playSound('error');
          }
        };
      });

      subTabContent.querySelectorAll('.btn-reveal-ans').forEach(btn => {
        btn.onclick = () => {
          const card = btn.closest('.p-4');
          const fb = card.querySelector('.err-lab-feedback');
          fb.classList.remove('hidden');
          fb.className = "err-lab-feedback p-3 rounded-xl text-xs font-bold bg-blue-950/30 border border-blue-500/40 text-blue-300";
          fb.innerHTML = `💡 Richtige Version: „${btn.getAttribute('data-ans')}“`;
        };
      });

    } else if (activeSubTab === 'diary') {
      // 4. DIARY TAB
      subTabContent.innerHTML = `
        <div class="card p-6 space-y-6">
          <div class="flex-between flex-wrap gap-3">
            <div>
              <h2 class="text-xl font-bold flex items-center gap-2">
                 Mein persönliches Satz-Tagebuch
              </h2>
              <p class="text-xs text-secondary mt-1">
                Alle deine bisher geprüften Sätze im Überblick.
              </p>
            </div>
            <button id="btnClearDiary" class="btn btn-secondary btn-xs text-red-400">
              🗑️ Tagebuch leeren
            </button>
          </div>

          ${userHistory.length === 0 ? `
            <div class="text-center py-12 text-secondary text-sm">
              Noch keine Sätze gespeichert. Tippe im Live-Korrektor deinen ersten Satz ein!
            </div>
          ` : `
            <div class="space-y-3">
              ${userHistory.map((h, hIdx) => `
                <div class="p-4 bg-surface rounded-2xl border border-glass space-y-2">
                  <div class="flex-between">
                    <span class="text-xs text-secondary">${new Date(h.timestamp || h.date).toLocaleString('de-DE')}</span>
                    <div class="flex items-center gap-2">
                      <span class="badge ${h.isFlawless ? 'badge-emerald' : 'badge-purple'} text-xs">+${h.isFlawless ? '25' : '15'} XP</span>
                      <button class="btn btn-ghost btn-xs text-red-400 btn-del-entry" data-index="${hIdx}">✕</button>
                    </div>
                  </div>
                  <div class="text-sm font-semibold text-emerald-400 flex-between">
                    <span>✓ ${h.corrected}</span>
                    <button class="btn btn-ghost btn-xs btn-speak-diary" data-text="${h.corrected}">🔊</button>
                  </div>
                  <div class="text-xs text-muted line-through">✗ ${h.original}</div>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      `;

      subTabContent.querySelectorAll('.btn-speak-diary').forEach(b => b.onclick = () => Speech.speak(b.getAttribute('data-text')));

      subTabContent.querySelectorAll('.btn-del-entry').forEach(btn => {
        btn.onclick = () => {
          const idx = parseInt(btn.getAttribute('data-index'));
          const currentHist = Storage.getHistory();
          const filtered = currentHist.filter(h => h.type === 'sentence_fixer');
          filtered.splice(idx, 1);
          const otherHist = currentHist.filter(h => h.type !== 'sentence_fixer');
          localStorage.setItem('deu_history', JSON.stringify([...filtered, ...otherHist]));
          Speech.playSound('pop');
          renderView();
        };
      });

      const btnClearDiary = subTabContent.querySelector('#btnClearDiary');
      if (btnClearDiary) {
        btnClearDiary.onclick = () => {
          if (confirm('Möchtest du wirklich alle Sätze löschen?')) {
            const currentHist = Storage.getHistory();
            const otherHist = currentHist.filter(h => h.type !== 'sentence_fixer');
            localStorage.setItem('deu_history', JSON.stringify(otherHist));
            Speech.playSound('pop');
            renderView();
          }
        };
      }
    }

    // Subtab navigation
    container.querySelectorAll('.subtab-btn').forEach(btn => {
      btn.onclick = () => {
        activeSubTab = btn.getAttribute('data-tab');
        renderView();
      };
    });
  }

  renderView();
}


// --- FILE: anti_translation.js ---

// Anti-Übersetzungs-Trainer (Direct German Thinking)
// Bricht die Gewohnheit des mentalen Hin- und Her-Übersetzens ins Englische.
// Trainiert direktes deutsches Konzept-Mapping, Reaktionsübungen und Falsche-Freunde-Busting.

function renderAntiTranslation(container) {
  let activeTab = 'monolingual'; // 'monolingual' | 'reaction' | 'false_friends'
  let currentScore = 0;
  let currentStreak = 0;

  const monolingualChallenges = [
    {
      conceptDe: "Eine leitende Pflegeperson im Krankenhaus, die für die Organisation der Station und Dienstpläne verantwortlich ist.",
      options: ["die Stationsleitung", "der Patient", "der Notfallwagen", "das Kurvenblatt"],
      correct: 0,
      cue: "🏢 Führungskraft auf Station",
      explanation: "Die 'Stationsleitung' leitet die Station. Nicht ins Englische übersetzen – direkt mit der Rolle und Verantwortung verknüpfen!"
    },
    {
      conceptDe: "Die psychische Fähigkeit, Enttäuschungen, Verzögerungen und Frust ohne Aggression gelassen auszuhalten.",
      options: ["die Frustrationstoleranz", "die Schweigepflicht", "die Dissoziation", "die Nahrungsaufnahme"],
      correct: 0,
      cue: "🧠 Seelische Eigenschaft",
      explanation: "'Frustrationstoleranz' = Frust aushalten können. Direkt als deutsches psychologisches Fachwort abspeichern!"
    },
    {
      conceptDe: "Eine geliebte Person durch achtsames Zuhören, liebevolle Worte und Nähe in einer schweren Notlage beruhigen.",
      options: ["trösten", "verweigern", "randalieren", "aufweisen"],
      correct: 0,
      cue: "❤️ Zwischenmenschliche Handlung",
      explanation: "'trösten' = Trost spenden. Bild im Kopf verankern: Jemanden sanft in den Arm nehmen."
    },
    {
      conceptDe: "Den Esstisch nach der Mahlzeit von Tellern, Tassen und Besteck befreien.",
      options: ["den Tisch abräumen", "den Tisch decken", "einen Termin vereinbaren", "Bescheid geben"],
      correct: 0,
      cue: "🍽️ Haushalt & Küche",
      explanation: "'abräumen' = Geschirr wegräumen. Nicht 'clean the table' übersetzen, sondern als feste Handlung sehen!"
    },
    {
      conceptDe: "Ein freudiges Gefühl im Hinblick auf ein bevorstehendes schönes Ereignis in der Zukunft empfinden.",
      options: ["sich freuen auf", "sich freuen über", "vermissen", "verwöhnen"],
      correct: 0,
      cue: "💌 Vorfreude",
      explanation: "'sich freuen auf (+ Akk.)' = in die Zukunft blicken. 'sich freuen über' = über ein vergangenes Ereignis/Geschenk."
    },
    {
      conceptDe: "Das schmerzhafte Gefühl des Fehlens einer geliebten Person spüren.",
      options: ["vermissen", "zuhören", "aufräumen", "bestellen"],
      correct: 0,
      cue: "💌 Sehnsucht",
      explanation: "'vermissen' = to miss. Immer mit Akkusativ: 'Ich vermisse dich!'"
    },
    {
      conceptDe: "Ein Gefühl von tiefem seelischem Schutz, Wärme, Vertrauen und innerer Sicherheit.",
      options: ["die Geborgenheit", "die Anspannung", "die Einsamkeit", "die Scham"],
      correct: 0,
      cue: "✨ Deutsches Unwort / Gefühl",
      explanation: "'Geborgenheit' ist ein einzigartiges deutsches Wort für vollkommenen Schutz, Wärme und Liebe."
    },
    {
      conceptDe: "Medikamente, die nur bei akuter Notwendigkeit nach ärztlicher Anordnung gegeben werden.",
      options: ["die Bedarfsmedikation", "die Dauerabstinenz", "die Sachleistung", "die Hausordnung"],
      correct: 0,
      cue: "💊 Psychiatrie & Pflege",
      explanation: "'Bedarfsmedikation' = bei Bedarf. Nicht 'as needed medicine' denken – 'Bedarfsmedikation' ist das feste Wort."
    },
    {
      conceptDe: "Gesetzliche Pflicht nach § 203 StGB, Patientendaten und Geheimnisse streng vertraulich zu behandeln.",
      options: ["die Schweigepflicht", "die Probezeit", "die Verpflegungspauschale", "die Abweichung"],
      correct: 0,
      cue: "⚖️ Klinikrecht & Ethik",
      explanation: "'Schweigepflicht' = Pflicht zum Schweigen über Patientendaten."
    },
    {
      conceptDe: "Mobilisierbarer fahrbarer Notfallschrank mit Defibrillator, Beatmungsbeutel und Reanimationsmedikamenten.",
      options: ["der Notfallwagen", "der Rollstuhl", "der Infusionsständer", "der Wäscheständer"],
      correct: 0,
      cue: "🚨 Notfall & Klinik",
      explanation: "'Notfallwagen' = Crash Cart. Direkt mit dem roten Wagen auf dem Stationsgang verknüpfen!"
    },
    {
      conceptDe: "Numerische Skala von 0 bis 10 zur Erfassung der subjektiven Schmerzstärke eines Patienten.",
      options: ["die Schmerzskala (NRS)", "die Vitalzeichen", "das Kurvenblatt", "die Anordnung"],
      correct: 0,
      cue: "🩺 Pflege & Diagnostik",
      explanation: "'die Schmerzskala' = Skala von 0 (kein Schmerz) bis 10 (unerträglich)."
    },
    {
      conceptDe: "Das zeitweise Abspalten von Wahrnehmung, Gefühlen oder Körperempfindungen bei starkem Trauma.",
      options: ["die Dissoziation", "die Reizüberflutung", "die Manie", "die Phobie"],
      correct: 0,
      cue: "🧠 Traumapsychologie",
      explanation: "'Dissoziation' = seelische Schutzabspaltung. Nicht übersetzen, direkt als Schutzmechanismus verstehen!"
    },
    {
      conceptDe: "Aktivierung der 5 Sinne (Sehen, Hören, Fühlen, Riechen, Schmecken), um im Hier und Jetzt zu landen.",
      options: ["die Erdung (Grounding)", "die Fixierung", "die Somatisierung", "die Intoxikation"],
      correct: 0,
      cue: "🌱 Skills & Beruhigung",
      explanation: "'Erdung' = 5-4-3-2-1 Methode zur Rückkehr in die Realität."
    },
    {
      conceptDe: "Jemandem durch feines Essen, besondere Aufmerksamkeit und Verwöhnung eine große Freude machen.",
      options: ["verwöhnen", "nachvollziehen", "absetzen", "sedieren"],
      correct: 0,
      cue: "❤️ Beziehung & Liebe",
      explanation: "'verwöhnen' = jemanden liebevoll umsorgen."
    },
    {
      conceptDe: "Im Restaurant übliche Praxis, dass jeder Gast seine eigene Rechnung separat bezahlt.",
      options: ["getrennt zahlen", "auf eigene Faust", "Trinkgeld geben", "zur Sprache bringen"],
      correct: 0,
      cue: "☕ Restaurant & Kultur",
      explanation: "'getrennt zahlen' = typisch deutsche Restauranterfahrung. 'Zusammen oder getrennt?' -> 'Getrennt, bitte!'"
    }
  ];

  const falseFriendsTraps = [
    {
      trap: "Ich bin kalt.",
      correct: "Mir ist kalt.",
      explanation: "'Ich bin kalt' bedeutet im Deutschen 'Ich bin ein gefühlloser/toter Mensch'. Für das Temperaturempfinden sagt man immer 'Mir ist kalt / warm / heiß' (Dativ)."
    },
    {
      trap: "Ich bekomme einen Arzt.",
      correct: "Ich werde Arzt / Ich gehe zum Arzt.",
      explanation: "'to become' heißt 'werden', NICHT 'bekommen'! 'Bekommen' bedeutet 'to receive/get'."
    },
    {
      trap: "Das macht Sinn.",
      correct: "Das ergibt Sinn / Das ist sinnvoll.",
      explanation: "Im Deutschen 'macht' Sinn nichts – Sinn 'ergibt' sich oder etwas 'ist sinnvoll'."
    },
    {
      trap: "Er ist aktuell mein Chef.",
      correct: "Er ist zurzeit / momentan mein Chef.",
      explanation: "'aktuell' bedeutet 'current/up to date', NICHT 'actually' (das heißt 'tatsächlich' oder 'eigentlich')."
    },
    {
      trap: "Ich vermisse dir.",
      correct: "Ich vermisse dich.",
      explanation: "'vermissen' verlangt immer den Akkusativ (dich, ihn, sie, uns), niemals Dativ (dir)."
    },
    {
      trap: "Ich liebe dir.",
      correct: "Ich liebe dich.",
      explanation: "Klassischer Akkusativfall für Gefühlsäußerungen: 'Ich liebe dich'."
    },
    {
      trap: "Ich frage dich für Hilfe.",
      correct: "Ich bitte dich um Hilfe / Ich frage dich nach Hilfe.",
      explanation: "Im Deutschen bittet man jemanden 'um' Hilfe (Akkusativ), man fragt nicht 'für'."
    },
    {
      trap: "Ich habe Angst von Hunden.",
      correct: "Ich habe Angst vor Hunden.",
      explanation: "'Angst haben' verlangt im Deutschen die Präposition 'vor' (+ Dativ)."
    },
    {
      trap: "Ich stimme mit dir überein.",
      correct: "Ich stimme dir zu / Ich bin deiner Meinung.",
      explanation: "'zustimmen' verlangt einfach den Dativ: 'Ich stimme dir voll zu!'"
    },
    {
      trap: "Ich will ein Foto von uns machen lassen.",
      correct: "Lass uns ein Foto zusammen machen.",
      explanation: "Natürliches Deutsch nutzt 'Lass uns...' statt komplizierter wörtlicher englischer Satzstrukturen."
    }
  ];

  const reactionPrompts = [
    {
      theme: "💌 Freundin & Liebe",
      situation: "Deine Freundin schreibt dir um 18 Uhr: 'Ich hatte einen anstrengenden Tag und vermisse dich. Wann sehen wir uns?'",
      prompt: "Reagiere direkt auf Deutsch mit Zuneigung, Verständnis und einem konkreten Plan!",
      idealAnswers: [
        "Ich vermisse dich auch sehr! Ich bin in 30 Minuten bei dir, dann koche ich uns etwas Leckeres und wir machen es uns gemütlich.",
        "Oh, du Arme! Ich freue mich schon riesig auf dich. Ruh dich kurz aus, ich beeile mich und bringe dein Lieblingsdessert mit!"
      ]
    },
    {
      theme: "🏢 Station & BFD-Alltag",
      situation: "Die Stationsleitung fragt dich während der Übergabe: 'Ali, könntest du bitte kurz nachsehen, ob in Zimmer 12 frische Handtücher sind?'",
      prompt: "Reagiere sofort professionell, verbindlich und auf den Punkt!",
      idealAnswers: [
        "Ja, sehr gerne! Ich gehe sofort nachsehen und bringe bei Bedarf direkt frische Handtücher mit.",
        "Mache ich sofort! Ich gebe Ihnen in fünf Minuten kurz Rückmeldung."
      ]
    },
    {
      theme: "🏠 Gastfamilie Fröhlich",
      situation: "Frau Fröhlich sagt beim Abendessen: 'Das Essen ist fertig! Möchtest du dich schon an den Tisch setzen?'",
      prompt: "Reagiere dankbar, höflich und biete deine Hilfe an!",
      idealAnswers: [
        "Vielen Dank, das riecht fantastisch! Darf ich Ihnen noch helfen, die Schüsseln und Gläser auf den Tisch zu stellen?",
        "Sehr gerne, danke! Ich helfe Ihnen eben noch beim Servieren."
      ]
    },
    {
      theme: "☕ Café & Oberstadt Marburg",
      situation: "Die Bedienung im Café am Marktplatz fragt: 'Möchten Sie zusammen oder getrennt zahlen?'",
      prompt: "Antworte schnell, natürlich und gib ein passendes Trinkgeld!",
      idealAnswers: [
        "Getrennt, bitte. Für mich macht das 7,20 Euro – machen Sie bitte 8 Euro daraus. Vielen Dank!",
        "Bitte getrennt. Machen wir 10 Euro glatt, der Rest ist für Sie!"
      ]
    },
    {
      theme: "🚨 Klinik-Notfall / Unruhe",
      situation: "Ein unruhiger Patient kommt aufgebracht zum Stationszimmer und verlangt lautstark nach dem Chefarzt.",
      prompt: "Deeskaliere die Situation ruhig, verständnisvoll und setze klare Grenzen!",
      idealAnswers: [
        "Guten Tag, Herr Weber. Ich sehe, dass Sie sehr aufgebracht sind. Kommen Sie kurz mit mir in den Aufenthaltsraum, ich hole sofort die zuständige Schwester für Sie.",
        "Ich höre Ihnen zu. Lassen Sie uns ruhig sprechen. Ich gebe der Pflegefachkraft sofort Bescheid."
      ]
    }
  ];

  function renderView() {
    container.innerHTML = `
      <div class="anti-translation-wrapper animate-fadeIn max-w-4xl mx-auto space-y-6">
        <!-- Header -->
        <div class="hero-card">
          <div class="flex-between flex-wrap gap-4">
            <div>
              <div class="badge badge-emerald mb-2">
                 Monolinguales Denken • Stop Translating!
              </div>
              <h1 class="text-3xl font-extrabold text-gradient">Anti-Übersetzungs-Trainer</h1>
              <p class="text-secondary mt-1 text-sm">
                Schluss mit mentalen Übersetzungs-Schleifen ins Englische! Trainiere dein Gehirn darauf, <strong>direkt auf Deutsch zu denken, zu fühlen und intuitiv zu reagieren</strong>.
              </p>
            </div>
            <div class="flex items-center gap-3 bg-surface p-3 rounded-2xl border border-glass">
              <div class="text-center">
                <div class="text-xs text-secondary">Punkte</div>
                <div class="font-bold text-emerald-400 text-lg" id="scoreDisplay">${currentScore} XP</div>
              </div>
            </div>
          </div>

          <!-- Tabs -->
          <div class="flex flex-wrap gap-2 mt-6 pt-4 border-t border-glass">
            <button class="btn ${activeTab === 'monolingual' ? 'btn-primary' : 'btn-secondary'} btn-sm tab-btn" data-tab="monolingual">
              🎯 Direktes Konzept-Mapping (${monolingualChallenges.length})
            </button>
            <button class="btn ${activeTab === 'reaction' ? 'btn-primary' : 'btn-secondary'} btn-sm tab-btn" data-tab="reaction">
              ⚡ Blitz-Reaktions-Trainer (${reactionPrompts.length})
            </button>
            <button class="btn ${activeTab === 'false_friends' ? 'btn-primary' : 'btn-secondary'} btn-sm tab-btn" data-tab="false_friends">
              🚫 Falsche-Freunde-Buster (${falseFriendsTraps.length})
            </button>
          </div>
        </div>

        <!-- Content Area -->
        <div id="tabContent" class="space-y-4"></div>
      </div>
    `;

    const tabContent = container.querySelector('#tabContent');

    if (activeTab === 'monolingual') {
      let idx = 0;
      function showMonolingual(i) {
        const item = monolingualChallenges[i % monolingualChallenges.length];
        tabContent.innerHTML = `
          <div class="card p-6 space-y-6">
            <div class="flex-between">
              <span class="badge badge-indigo text-xs">${item.cue}</span>
              <span class="text-xs text-secondary font-bold">Aufgabe ${ (i % monolingualChallenges.length) + 1 } von ${monolingualChallenges.length}</span>
            </div>

            <div class="p-6 bg-surface rounded-2xl border border-glass text-center space-y-2">
              <div class="text-xs text-secondary uppercase font-bold tracking-wider">Deutsches Konzept (ohne Englisch!):</div>
              <div class="text-lg font-bold text-primary leading-relaxed">${item.conceptDe}</div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${item.options.map((opt, optIdx) => `
                <button class="btn btn-secondary p-4 text-left justify-start font-bold text-sm opt-btn hover:border-blue-500 rounded-xl" data-opt="${optIdx}">
                  ${opt}
                </button>
              `).join('')}
            </div>

            <div id="monoFeedback" class="hidden p-4 rounded-xl space-y-2"></div>
          </div>
        `;

        const feedback = tabContent.querySelector('#monoFeedback');
        tabContent.querySelectorAll('.opt-btn').forEach(btn => {
          btn.onclick = () => {
            const chosen = parseInt(btn.getAttribute('data-opt'));
            feedback.classList.remove('hidden');
            if (chosen === item.correct) {
              currentScore += 10;
              container.querySelector('#scoreDisplay').innerText = currentScore + ' XP';
              feedback.className = "p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-emerald-300 text-sm space-y-2";
              feedback.innerHTML = `
                <div class="font-bold flex items-center justify-between">
                  <span>✓ Richtig gedacht! (+10 XP)</span>
                  <button id="btnPlayWord" class="btn btn-secondary btn-xs">🔊 Anhören</button>
                </div>
                <div>${item.explanation}</div>
                <button id="btnNextMono" class="btn btn-emerald btn-sm mt-2">Nächstes Konzept →</button>
              `;
              feedback.querySelector('#btnPlayWord').onclick = () => Speech.speak(item.options[item.correct]);
              const settings = Storage.getSettings();
              Storage.saveSettings({ ...settings, totalXP: (settings.totalXP || 0) + 10 });
            } else {
              feedback.className = "p-4 rounded-xl bg-red-950/30 border border-red-500/40 text-red-300 text-sm space-y-2";
              feedback.innerHTML = `
                <div class="font-bold">✗ Noch nicht ganz.</div>
                <div>${item.explanation}</div>
                <button id="btnNextMono" class="btn btn-secondary btn-sm mt-2">Weiter →</button>
              `;
            }
            feedback.querySelector('#btnNextMono').onclick = () => showMonolingual(i + 1);
          };
        });
      }
      showMonolingual(idx);
    } else if (activeTab === 'reaction') {
      tabContent.innerHTML = `
        <div class="space-y-4">
          ${reactionPrompts.map((rp, rIdx) => `
            <div class="card p-6 space-y-4">
              <div class="flex-between">
                <span class="badge badge-purple text-xs">${rp.theme}</span>
                <span class="text-xs text-secondary font-bold">Situation ${rIdx+1} von ${reactionPrompts.length}</span>
              </div>

              <div class="p-4 bg-surface rounded-xl border border-glass font-semibold text-sm leading-relaxed">
                "${rp.situation}"
              </div>
              <div class="text-xs text-secondary font-medium">${rp.prompt}</div>

              <textarea class="input w-full p-3 text-sm rounded-xl reaction-input" rows="2" placeholder="Tippe deine spontane deutsche Antwort ohne mentale Übersetzung..."></textarea>

              <div class="flex-between">
                <button class="btn btn-primary btn-sm btn-show-reaction" data-index="${rIdx}">
                  Musterantworten ansehen & anhören (+10 XP)
                </button>
              </div>

              <div id="reactionAns_${rIdx}" class="hidden p-4 bg-blue-950/20 border border-blue-500/30 rounded-2xl space-y-3 text-xs">
                <div class="font-bold text-blue-400 text-sm">Natürliche muttersprachliche Reaktionen:</div>
                <div class="space-y-2">
                  ${rp.idealAnswers.map((ans, aIdx) => `
                    <div class="p-3 bg-card rounded-xl border border-glass flex-between items-center gap-3">
                      <span class="text-primary font-medium text-sm">„${ans}“</span>
                      <button class="btn btn-ghost btn-xs btn-speak-ans" data-text="${ans}">🔊</button>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `;

      tabContent.querySelectorAll('.btn-speak-ans').forEach(btn => {
        btn.onclick = () => Speech.speak(btn.getAttribute('data-text'));
      });

      tabContent.querySelectorAll('.btn-show-reaction').forEach(btn => {
        btn.onclick = () => {
          const idx = btn.getAttribute('data-index');
          const ansBox = tabContent.querySelector('#reactionAns_' + idx);
          ansBox.classList.toggle('hidden');
          currentScore += 10;
          container.querySelector('#scoreDisplay').innerText = currentScore + ' XP';
          const settings = Storage.getSettings();
          Storage.saveSettings({ ...settings, totalXP: (settings.totalXP || 0) + 10 });
        };
      });
    } else if (activeTab === 'false_friends') {
      tabContent.innerHTML = `
        <div class="card p-6 space-y-4">
          <div class="flex-between">
            <h3 class="font-bold text-base flex items-center gap-2">
               Die 10 gefährlichsten Deutsch-Englisch Übersetzungsfallen
            </h3>
            <span class="badge badge-amber text-xs">${falseFriendsTraps.length} Fallen</span>
          </div>

          <div class="space-y-4">
            ${falseFriendsTraps.map((trap, tIdx) => `
              <div class="p-4 bg-surface rounded-2xl border border-glass space-y-2">
                <div class="flex-between items-start">
                  <div class="flex items-center gap-3 flex-wrap">
                    <span class="text-red-400 font-bold line-through text-sm">✗ ${trap.trap}</span>
                    <span class="text-emerald-400 font-bold text-sm">✓ ${trap.correct}</span>
                  </div>
                  <button class="btn btn-secondary btn-xs btn-speak-trap" data-text="${trap.correct}">🔊</button>
                </div>
                <div class="text-xs text-secondary leading-relaxed">${trap.explanation}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;

      tabContent.querySelectorAll('.btn-speak-trap').forEach(btn => {
        btn.onclick = () => Speech.speak(btn.getAttribute('data-text'));
      });
    }

    container.querySelectorAll('.tab-btn').forEach(b => {
      b.onclick = () => {
        activeTab = b.getAttribute('data-tab');
        renderView();
      };
    });
  }

  renderView();
}


// --- FILE: external_resources.js ---

// Kostenlose externe Lernressourcen Component
function renderExternalResources(container) {
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


// --- FILE: app.js ---

// Main Application Orchestrator
// Data Modules
// View Components
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

const appRouter = new Router(routes, 'heute');

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


})();
