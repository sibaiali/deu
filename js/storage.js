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

export const Storage = new StorageService();
