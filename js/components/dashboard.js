// Bento Grid Dashboard - Calm, Professional, Structured & High-Yield Learning
// 12-Spalten Layout: Hero Mission (Span 8), Station 2 Überlebensmodus (Span 4),
// 4 Säulen-Sprints (Span 3 je) und adaptiver Tagesablauf (Span 12).

import { Storage } from '../storage.js';
import { SRS } from '../srs.js';
import { VOCABULARY_DATA } from '../data/vocabulary_data.js';
import { AdaptiveEngine } from '../adaptive_engine.js';
import { NUANCES_DATA } from '../data/nuances_data.js';

export async function renderDashboard(container) {
  const settings = Storage.getSettings();
  SRS.setVocabList(VOCABULARY_DATA);
  
  let dueCount = 0;
  try {
    const res = await SRS.getDueCards();
    if (res && typeof res.totalDueCount === 'number') {
      dueCount = res.totalDueCount;
    } else if (res && Array.isArray(res.dueCards)) {
      dueCount = res.dueCards.length;
    }
  } catch (err) {
    console.warn('SRS count calculation error:', err);
    dueCount = 0;
  }

  let activeMode = '45'; // '5min_shift' | '10min_review' | '10' | '20' | '45' | '90' | 'tired'
  let userState = 'normal'; // 'normal' | 'tired'

  function renderView() {
    const adaptivePlan = AdaptiveEngine.getDailyPlan(activeMode, userState);

    container.innerHTML = `
      <div class="space-y-6 animate-fadeIn max-w-6xl mx-auto">
        <!-- Quick Session Launcher (Adaptive State Controls) -->
        <div class="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-surface rounded-xl border border-subtle">
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
              🌙 Ich bin müde (Passiv)
            </button>
            <button class="btn btn-xs ${activeMode === '45' && userState === 'normal' ? 'btn-primary' : 'btn-secondary'} mode-btn" data-mode="45">
              ⭐ Standard (45 Min)
            </button>
          </div>
        </div>

        <!-- 12-Column Bento Grid: Row 1 (Hero Check-in & Critical Survival Card) -->
        <div class="bento-grid">
          <!-- Span 8: Tages-Check-in / Dein nächster Schritt -->
          <div class="col-span-8 bento-card justify-between space-y-4">
            <div class="space-y-3">
              <div class="flex-between">
                <div class="flex items-center gap-2">
                  <span class="badge badge-blue">Tages-Check-in</span>
                  <span class="badge badge-emerald">BFD • UKGM Station 2</span>
                </div>
                <span class="text-xs text-muted font-semibold">B1+ → C1 System</span>
              </div>

              <div>
                <h1 class="page-title">Guten Tag, Ali!</h1>
                <p class="subtitle mt-1">
                  Systematischer Lernfortschritt für deine Schichten in der Psychiatrie, fehlerfreies Deutsch und flüssiges Sprechen.
                </p>
              </div>

              <!-- Dein nächster Schritt (Single Focused Primary Action) -->
              <div class="p-4 bg-subtle rounded-xl border border-subtle space-y-2 mt-2">
                <div class="text-xs font-bold text-muted uppercase tracking-wider">Empfohlene Tages-Mission</div>
                <div class="flex-between flex-wrap gap-3">
                  <div class="space-y-0.5">
                    <div class="font-bold text-base text-primary">
                      ${dueCount > 0 ? `Spaced Repetition: ${dueCount} Vokabeln wiederholen` : 'Simulation: Grenzen setzen & Deeskalieren'}
                    </div>
                    <div class="text-xs text-secondary">
                      ${dueCount > 0 ? 'Fällige Verben und Chunks im Langzeitgedächtnis festigen.' : 'Trainiere 4 Sprachebenen im Patientenkontakt auf Station 2.'}
                    </div>
                  </div>
                  <a href="${dueCount > 0 ? '#wiederholen?mode=review' : '#simulation'}" class="btn btn-primary btn-sm whitespace-nowrap">
                    Mission starten →
                  </a>
                </div>
              </div>
            </div>

            <!-- Distinct Metric Cards (Never overlapping) -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-subtle">
              <div class="p-2.5 bg-surface rounded-xl border border-subtle text-center">
                <div class="text-[11px] font-semibold text-muted">Fällig</div>
                <div class="font-extrabold text-base ${dueCount > 0 ? 'text-amber-400' : 'text-emerald-400'}">${dueCount}</div>
              </div>
              <div class="p-2.5 bg-surface rounded-xl border border-subtle text-center">
                <div class="text-[11px] font-semibold text-muted">Wortschatz</div>
                <div class="font-extrabold text-base text-primary">${VOCABULARY_DATA.length}</div>
              </div>
              <div class="p-2.5 bg-surface rounded-xl border border-subtle text-center">
                <div class="text-[11px] font-semibold text-muted">Lernserie</div>
                <div class="font-extrabold text-base text-amber-400">${settings.streak || 1} Tag</div>
              </div>
              <div class="p-2.5 bg-surface rounded-xl border border-subtle text-center">
                <div class="text-[11px] font-semibold text-muted">Zielniveau</div>
                <div class="font-extrabold text-base text-blue-400">B2 / C1</div>
              </div>
            </div>
          </div>

          <!-- Span 4: Erster-Tag-Überlebensmodus -->
          <div class="col-span-4 bento-card justify-between space-y-3 border-amber-500/30">
            <div class="space-y-3">
              <div class="flex-between">
                <span class="badge badge-amber">STATION 2 PRAXIS</span>
                <span class="text-amber-500 font-bold text-sm">🛡️</span>
              </div>
              <div>
                <h2 class="text-lg font-bold text-primary">Überlebensmodus & Grenzen</h2>
                <p class="text-xs text-secondary mt-1 leading-relaxed">
                  Die wichtigsten Notfall-Sätze, rechtlichen Leitplanken und Schutzregeln für den Klinikdienst.
                </p>
              </div>

              <div class="p-3 bg-subtle rounded-xl space-y-1.5 text-xs">
                <div class="font-bold text-primary">Klinische Schutzregeln:</div>
                <div class="text-secondary">✓ Keine eigenständige Medikamentengabe</div>
                <div class="text-secondary">✓ Schweigepflicht nach § 203 StGB</div>
                <div class="text-secondary">✓ Der magische Satz bei Unklarheiten</div>
              </div>
            </div>

            <div class="pt-2">
              <a href="#bfd?tab=survival" class="btn btn-secondary btn-sm w-full border-amber-500/40 text-amber-400 hover:bg-amber-500/10">
                Überlebensmodus öffnen →
              </a>
            </div>
          </div>
        </div>

        <!-- 12-Column Bento Grid: Row 2 (4 Power Learning Pillars - Span 3 each) -->
        <div class="bento-grid">
          <!-- Pillar 1: Vokabeln & Präfix-Verben -->
          <div class="col-span-3 bento-card justify-between space-y-3">
            <div class="space-y-2">
              <div class="flex-between">
                <span class="badge badge-blue">Wortschatz</span>
                <span class="text-xs font-semibold ${dueCount > 0 ? 'text-amber-500' : 'text-emerald-500'}">
                  ${dueCount > 0 ? `${dueCount} fällig` : '✓ Bereit'}
                </span>
              </div>
              <h3 class="font-bold text-base text-primary">Verben & SRS</h3>
              <p class="text-xs text-secondary">
                ${VOCABULARY_DATA.length} Einträge mit allen Präfixen (<em>ab-, unter-, über-, an-, ein-</em>), Stammformen und Audio.
              </p>
            </div>
            <div class="pt-2">
              <a href="#wiederholen" class="btn btn-secondary btn-sm w-full">
                Vokabeln lernen →
              </a>
            </div>
          </div>

          <!-- Pillar 2: Nuancen & Synonyme -->
          <div class="col-span-3 bento-card justify-between space-y-3">
            <div class="space-y-2">
              <div class="flex-between">
                <span class="badge badge-indigo">Unterschiede</span>
                <span class="badge badge-gray text-[10px]">${NUANCES_DATA.length} Gruppen</span>
              </div>
              <h3 class="font-bold text-base text-primary">Wann welches Wort?</h3>
              <p class="text-xs text-secondary">
                <em>absagen vs. abbrechen vs. ablehnen</em> · <em>untersuchen vs. überwachen</em> · Keine Verwechslungen mehr.
              </p>
            </div>
            <div class="pt-2">
              <a href="#unterschiede" class="btn btn-secondary btn-sm w-full">
                Nuancen vergleichen →
              </a>
            </div>
          </div>

          <!-- Pillar 3: Sprechtrainer & Audio -->
          <div class="col-span-3 bento-card justify-between space-y-3">
            <div class="space-y-2">
              <div class="flex-between">
                <span class="badge badge-purple">Sprechen</span>
                <span class="text-xs text-secondary font-semibold">0.7x – 1.2x</span>
              </div>
              <h3 class="font-bold text-base text-primary">Sprechtrainer</h3>
              <p class="text-xs text-secondary">
                Schattensprechen, Aussprachetraining und spontane Reaktionsübungen für den Stationsalltag.
              </p>
            </div>
            <div class="pt-2">
              <a href="#sprechen" class="btn btn-secondary btn-sm w-full">
                Sprechen trainieren →
              </a>
            </div>
          </div>

          <!-- Pillar 4: Satz-Korrektor (KI-Regeln) -->
          <div class="col-span-3 bento-card justify-between space-y-3">
            <div class="space-y-2">
              <div class="flex-between">
                <span class="badge badge-emerald">Grammatik</span>
                <span class="badge badge-gray text-[10px]">Live-Korrektur</span>
              </div>
              <h3 class="font-bold text-base text-primary">Satz-Korrektor</h3>
              <p class="text-xs text-secondary">
                Tippe deutsche Sätze ein: Live-Korrektur von Satzstellung (Verbzweit/Verbletzt), Fällen und Kommasetzung.
              </p>
            </div>
            <div class="pt-2">
              <a href="#satzkorrektor" class="btn btn-secondary btn-sm w-full">
                Sätze korrigieren →
              </a>
            </div>
          </div>
        </div>

        <!-- 12-Column Bento Grid: Row 3 (Timeline Daily Plan - Adaptiv) -->
        <div class="bento-card col-span-12 space-y-4">
          <div class="flex-between flex-wrap gap-3">
            <div>
              <div class="flex items-center gap-2">
                <span class="badge badge-blue text-xs">Strukturierter Ablauf</span>
                <h2 class="section-title">${adaptivePlan.title}</h2>
              </div>
              <p class="text-xs text-secondary mt-1">
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

          <!-- Timeline Step Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            ${adaptivePlan.steps.map((item, idx) => `
              <div class="p-3.5 bg-subtle rounded-xl border border-subtle flex flex-col justify-between space-y-2">
                <div>
                  <div class="text-[11px] font-bold text-blue-400 uppercase">Schritt ${idx + 1} • ${item.duration}</div>
                  <div class="font-bold text-sm text-primary mt-0.5">${item.title}</div>
                </div>
                <div class="pt-2 border-t border-subtle flex-between">
                  <span class="text-[11px] text-muted">Aktivität</span>
                  <a href="#${item.route}" class="btn btn-primary btn-xs">
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
