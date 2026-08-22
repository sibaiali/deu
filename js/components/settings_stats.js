// Settings & Stats Component

import { Storage } from '../storage.js';

export function renderSettingsStats(container) {
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
