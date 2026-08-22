// Settings & Stats Component with Interactive Fluency Prognosis Engine

import { Storage } from '../storage.js';
import { VOCABULARY_DATA } from '../data/vocabulary_data.js';

export async function renderSettingsStats(container) {
  const settings = Storage.getSettings();
  const allCards = await Storage.getAllCardsProgress();
  
  // Compute mastery counts
  const masteryCounts = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  allCards.forEach(c => {
    const lvl = c.masteryLevel || 0;
    if (masteryCounts[lvl] !== undefined) masteryCounts[lvl]++;
  });
  masteryCounts[0] = Math.max(0, VOCABULARY_DATA.length - allCards.length);

  container.innerHTML = `
    <div class="settings-wrapper animate-fadeIn space-y-6 max-w-5xl mx-auto">
      <div class="hero-card">
        <div class="flex-between flex-wrap gap-4">
          <div>
            <span class="badge badge-indigo mb-2">PROGNOSE & FORTSCHRITT</span>
            <h1 class="page-title">📊 Wann werde ich fließend Deutsch sprechen?</h1>
            <p class="subtitle mt-1">
              Wissenschaftliche Meilenstein-Prognose basierend auf deinen täglichen Lernminuten, Spaced Repetition und deinem BFD-Einsatz.
            </p>
          </div>
          <a href="#heute" class="btn btn-secondary btn-sm">← Zum Dashboard</a>
        </div>
      </div>

      <!-- Fluency Prediction Hub -->
      <div class="bento-card p-6 space-y-5 border border-subtle">
        <div class="flex-between flex-wrap gap-3 border-b border-subtle pb-4">
          <div>
            <h2 class="text-xl font-bold text-primary">⚡ Dein persönlicher Flüssigkeits-Fahrplan</h2>
            <p class="text-xs text-muted font-medium mt-0.5">Wähle dein tägliches Lernpensum und sieh deine berechneten Zieldaten:</p>
          </div>
          <div class="flex items-center gap-2">
            <label class="text-xs font-semibold text-secondary">Tägliche Lernzeit:</label>
            <select id="selPace" class="p-2 bg-subtle border border-subtle rounded-lg text-primary text-xs font-bold outline-none">
              <option value="20">20 Min. / Tag (Solider Pfad)</option>
              <option value="45" selected>45 Min. / Tag (Optimaler B2-Sprint)</option>
              <option value="90">90 Min. / Tag (Intensiv C1-Turbo)</option>
            </select>
          </div>
        </div>

        <!-- Dynamic Timeline Cards -->
        <div id="fluencyTimeline" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"></div>

        <!-- Clinical Immersion Multiplier Note -->
        <div class="p-4 bg-surface rounded-xl border border-blue-500/30 text-xs space-y-1.5">
          <div class="font-bold text-blue-400 flex items-center gap-1.5">
            <span>💡</span> Der BFD-Immersions-Multiplikator:
          </div>
          <p class="text-secondary leading-relaxed">
            Weil du die Plattform direkt mit deiner praktischen Arbeit im <strong>UKGM (Station 2)</strong> kombinierst, verankert sich das Vokabular <strong>3x schneller</strong> als im reinen Sprachkurs. Das Gelernte wird täglich in echten Situationen (Übergabe, Visite, Patientengespräche) abgerufen.
          </p>
        </div>
      </div>

      <!-- Grid 2: Mastery Breakdown & Settings -->
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Spaced Repetition Mastery Breakdown -->
        <div class="bento-card p-6 space-y-4">
          <div class="flex-between">
            <h2 class="text-base font-bold text-primary">🧠 Gedächtnis-Meisterschaft (SRS)</h2>
            <span class="badge badge-blue text-xs">${VOCABULARY_DATA.length} Vokabeln & Verben</span>
          </div>

          <div class="space-y-2 text-xs">
            <div class="flex-between">
              <span class="text-muted">Stufe 6: Spontan & automatisiert</span>
              <span class="font-bold text-emerald-400">${masteryCounts[6]}</span>
            </div>
            <div class="w-full bg-subtle h-2 rounded-full overflow-hidden">
              <div class="bg-emerald-500 h-full" style="width: ${(masteryCounts[6] / VOCABULARY_DATA.length) * 100}%"></div>
            </div>

            <div class="flex-between">
              <span class="text-muted">Stufe 4-5: Sicher verwendet & gefestigt</span>
              <span class="font-bold text-teal-400">${masteryCounts[4] + masteryCounts[5]}</span>
            </div>
            <div class="w-full bg-subtle h-2 rounded-full overflow-hidden">
              <div class="bg-teal-500 h-full" style="width: ${((masteryCounts[4] + masteryCounts[5]) / VOCABULARY_DATA.length) * 100}%"></div>
            </div>

            <div class="flex-between">
              <span class="text-muted">Stufe 1-3: Im Lernprozess</span>
              <span class="font-bold text-indigo-400">${masteryCounts[1] + masteryCounts[2] + masteryCounts[3]}</span>
            </div>
            <div class="w-full bg-subtle h-2 rounded-full overflow-hidden">
              <div class="bg-indigo-500 h-full" style="width: ${((masteryCounts[1] + masteryCounts[2] + masteryCounts[3]) / VOCABULARY_DATA.length) * 100}%"></div>
            </div>

            <div class="flex-between">
              <span class="text-muted">Stufe 0: Noch nicht gestartet</span>
              <span class="font-bold text-muted">${masteryCounts[0]}</span>
            </div>
            <div class="w-full bg-subtle h-2 rounded-full overflow-hidden">
              <div class="bg-gray-600 h-full" style="width: ${(masteryCounts[0] / VOCABULARY_DATA.length) * 100}%"></div>
            </div>
          </div>
        </div>

        <!-- Configuration & Backup -->
        <div class="bento-card p-6 space-y-4">
          <h2 class="text-base font-bold text-primary">⚙️ Einstellungen & Datensicherung</h2>
          
          <div>
            <label class="block text-xs font-semibold text-secondary mb-1">Standard-Aussprache-Tempo:</label>
            <select id="selSpeed" class="p-2 bg-subtle border border-subtle rounded-lg text-primary text-xs w-full">
              <option value="0.7" ${settings.speechSpeed === 0.7 ? 'selected' : ''}>Langsam (0.7x - Schattensprechen)</option>
              <option value="0.9" ${settings.speechSpeed === 0.9 ? 'selected' : ''}>Normal (0.9x - Standard)</option>
              <option value="1.1" ${settings.speechSpeed === 1.1 ? 'selected' : ''}>Klinik-Tempo (1.1x - Alltagsdeutsch)</option>
            </select>
          </div>

          <div class="pt-2 border-t border-subtle">
            <div class="text-xs font-bold text-primary mb-1">Lernstand sichern (Backup):</div>
            <div class="flex gap-2">
              <button id="btnExport" class="btn btn-secondary btn-xs flex-1">📥 Exportieren (JSON)</button>
              <button id="btnImport" class="btn btn-secondary btn-xs flex-1">📤 Importieren</button>
            </div>
            <input type="file" id="fileImport" class="hidden" accept=".json" />
            <div id="exportStatus" class="text-xs text-emerald-400 font-semibold mt-2 hidden"></div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Timeline Calculation logic
  const paceSelect = container.querySelector('#selPace');
  const timelineContainer = container.querySelector('#fluencyTimeline');

  function updateTimeline(pace) {
    const now = new Date();
    const daysMultiplier = pace === '90' ? 0.5 : (pace === '20' ? 1.6 : 1.0);

    const stages = [
      {
        stage: "Stufe 1",
        name: "Stations-Sicherheit",
        days: Math.round(18 * daysMultiplier),
        level: "B1+ Stabil",
        focus: "Überlebenssätze, Notfallgrenzen, keine Angst vor Schichtbeginn.",
        statusBadge: "badge-emerald"
      },
      {
        stage: "Stufe 2",
        name: "Flüssiges Reagieren",
        days: Math.round(55 * daysMultiplier),
        level: "B2 Aktiv",
        focus: "Kein Übersetzen im Kopf mehr; 430+ Verben & Stammformen sitzen reflexartig.",
        statusBadge: "badge-blue"
      },
      {
        stage: "Stufe 3",
        name: "Nuancierte Fachsprache",
        days: Math.round(110 * daysMultiplier),
        level: "Starkes B2/C1",
        focus: "Visite, Deeskalation, Übergabeberichte und präzise Synonyme (Wann welches Wort?).",
        statusBadge: "badge-indigo"
      },
      {
        stage: "Stufe 4",
        name: "C1 Spontanität",
        days: Math.round(175 * daysMultiplier),
        level: "C1 Spontan",
        focus: "Müheloser Wechsel aller 4 Sprachebenen, Akzentsicherheit & Engineering-Deutsch.",
        statusBadge: "badge-purple"
      }
    ];

    timelineContainer.innerHTML = stages.map(s => {
      const targetDate = new Date();
      targetDate.setDate(now.getDate() + s.days);
      const dateStr = targetDate.toLocaleDateString('de-DE', { day: '2-digit', month: 'short', year: 'numeric' });

      return `
        <div class="p-4 bg-subtle rounded-xl border border-subtle flex flex-col justify-between space-y-3">
          <div class="space-y-2">
            <div class="flex-between">
              <span class="badge ${s.statusBadge} text-xs font-bold">${s.stage}</span>
              <span class="text-[11px] font-mono text-muted">in ~${s.days} Tagen</span>
            </div>
            <div class="font-bold text-sm text-primary">${s.name}</div>
            <div class="text-xs text-blue-400 font-semibold">${s.level}</div>
            <p class="text-[11px] text-secondary leading-relaxed">${s.focus}</p>
          </div>
          <div class="pt-2 border-t border-subtle flex-between">
            <span class="text-[10px] text-muted">Ziel-Datum:</span>
            <span class="text-xs font-extrabold text-primary">${dateStr}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  paceSelect.onchange = () => updateTimeline(paceSelect.value);
  updateTimeline('45');

  // Handle Export / Import
  const btnExport = container.querySelector('#btnExport');
  const btnImport = container.querySelector('#btnImport');
  const fileImport = container.querySelector('#fileImport');
  const exportStatus = container.querySelector('#exportStatus');

  btnExport.onclick = () => {
    const data = Storage.exportAllData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `deu_platform_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    exportStatus.classList.remove('hidden');
    exportStatus.textContent = '✓ Daten erfolgreich exportiert!';
    setTimeout(() => exportStatus.classList.add('hidden'), 3000);
  };

  btnImport.onclick = () => fileImport.click();
  fileImport.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const json = JSON.parse(ev.target.result);
        Storage.importAllData(json);
        alert('Lernstand erfolgreich importiert! Die Seite wird aktualisiert.');
        window.location.reload();
      } catch (err) {
        alert('Fehler beim Importieren der Datei: ' + err.message);
      }
    };
    reader.readAsText(file);
  };
}
