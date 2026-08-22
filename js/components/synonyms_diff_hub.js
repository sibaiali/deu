// Synonym- & Nuancen-Unterscheider Hub ("Wann benutze ich welches Wort?")
// Interaktive Gegenüberstellung, Kontext-Regeln & Übungs-Quiz

import { NUANCES_DATA } from '../data/nuances_data.js';
import { Speech } from '../speech.js';

export function renderSynonymsDiffHub(container) {
  let activeCategory = 'alle';
  let searchQuery = '';

  container.innerHTML = `
    <div class="space-y-6 animate-fadeIn max-w-5xl mx-auto">
      <!-- Header -->
      <div class="hero-card">
        <div class="flex-between flex-wrap gap-4">
          <div>
            <span class="badge badge-indigo mb-2">Nuancen- & Wortunterscheider</span>
            <h1 class="page-title">Wann benutze ich welches Wort?</h1>
            <p class="subtitle mt-1">
              Präzise Bedeutungsunterschiede für ähnliche Verben und Nomen im Krankenhaus, Alltag und in der B2/C1-Kommunikation.
            </p>
          </div>
          <div class="flex gap-2">
            <span class="badge badge-emerald py-1 px-3 text-xs font-semibold">${NUANCES_DATA.length} Wortgruppen analysiert</span>
          </div>
        </div>
      </div>

      <!-- Controls & Search -->
      <div class="bento-card space-y-3">
        <div class="flex-between flex-wrap gap-3">
          <input type="text" id="nuanceSearch" placeholder="Nach Wörtern suchen (z. B. 'absagen', 'ablehnen', 'untersuchen', 'überweisen')..." class="p-2.5 bg-subtle border border-subtle rounded-lg text-primary text-sm outline-none flex-1 min-w-[260px]" />
          <div class="flex gap-1.5 flex-wrap" id="categoryFilterButtons">
            <button class="btn btn-xs btn-primary cat-btn" data-cat="alle">Alle Gruppen</button>
            <button class="btn btn-xs btn-secondary cat-btn" data-cat="Verben mit Präfix (ab-)">Präfix ab-</button>
            <button class="btn btn-xs btn-secondary cat-btn" data-cat="Verben mit Präfix (über-)">Präfix über-</button>
            <button class="btn btn-xs btn-secondary cat-btn" data-cat="Kommunikation & Sicherheit">Kommunikation</button>
            <button class="btn btn-xs btn-secondary cat-btn" data-cat="Klinik & Pflege">Klinik & Diagnostik</button>
            <button class="btn btn-xs btn-secondary cat-btn" data-cat="Klinik & Symptome">Symptome</button>
          </div>
        </div>
      </div>

      <!-- Nuances Content List -->
      <div id="nuancesList" class="space-y-6"></div>
    </div>
  `;

  const listContainer = container.querySelector('#nuancesList');
  const searchInput = container.querySelector('#nuanceSearch');

  function renderClusters() {
    const q = searchQuery.toLowerCase().trim();
    const filtered = NUANCES_DATA.filter(group => {
      const matchCat = activeCategory === 'alle' || group.category === activeCategory;
      const matchQ = !q || group.topic.toLowerCase().includes(q) || group.question.toLowerCase().includes(q) || group.words.some(w => w.word.toLowerCase().includes(q) || w.meaning.toLowerCase().includes(q));
      return matchCat && matchQ;
    });

    if (filtered.length === 0) {
      listContainer.innerHTML = `<div class="p-8 text-center text-secondary bento-card">Keine passenden Wortgruppen gefunden.</div>`;
      return;
    }

    listContainer.innerHTML = filtered.map(group => `
      <div class="bento-card p-6 space-y-5 border border-subtle">
        <!-- Topic Header -->
        <div class="flex-between flex-wrap gap-2 border-b border-subtle pb-3">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="badge badge-blue text-xs">${group.level}</span>
              <span class="badge badge-gray text-xs">${group.category}</span>
            </div>
            <h2 class="text-xl font-bold text-primary">${group.topic}</h2>
            <p class="text-xs text-muted font-medium mt-0.5">${group.question}</p>
          </div>
          <div class="p-2.5 bg-blue-500/10 rounded-xl max-w-md text-xs text-blue-400 font-medium">
            💡 <strong>Merkregel:</strong> ${group.summary}
          </div>
        </div>

        <!-- Comparative Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          ${group.words.map(w => `
            <div class="p-4 bg-subtle rounded-xl border border-subtle flex flex-col justify-between space-y-3">
              <div class="space-y-2">
                <div class="flex-between items-baseline">
                  <span class="font-extrabold text-base text-primary">${w.word}</span>
                  <button class="btn btn-ghost btn-xs btn-speak-word" data-text="${w.word}">▶</button>
                </div>
                ${w.grammar ? `<div class="text-[11px] font-mono text-muted">${w.grammar}</div>` : ''}
                
                <div class="text-xs text-primary font-medium leading-relaxed">${w.meaning}</div>

                <div class="space-y-1 pt-1 border-t border-subtle text-[11px]">
                  <div><strong class="text-secondary">Wann?</strong> <span class="text-muted">${w.whenToUse}</span></div>
                  <div><strong class="text-secondary">Wo?</strong> <span class="text-muted">${w.whereToUse}</span></div>
                  ${w.collocations ? `<div><strong class="text-secondary">Kollokation:</strong> <span class="text-blue-400 font-medium">${w.collocations.join(' · ')}</span></div>` : ''}
                </div>

                <div class="p-2 bg-surface rounded-lg text-xs italic text-secondary border border-subtle">
                  "${w.example}"
                </div>

                ${w.dontSay ? `
                  <div class="text-[11px] space-y-0.5 pt-1">
                    <div class="text-red-400">${w.dontSay}</div>
                    <div class="text-emerald-400 font-medium">${w.correctSay}</div>
                  </div>
                ` : ''}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Interactive Practice Quiz -->
        ${group.quiz ? `
          <div class="p-4 bg-surface rounded-xl border border-indigo-500/30 space-y-3 mt-2">
            <div class="flex items-center gap-2">
              <span class="badge badge-indigo text-xs">Testen Sie sich</span>
              <span class="text-xs font-bold text-primary">Welches Wort passt hier am besten?</span>
            </div>
            <div class="text-sm text-primary font-medium italic">
              "${group.quiz.sentence}"
            </div>
            <div class="flex flex-wrap gap-2 quiz-options-container" data-correct="${group.quiz.correct}" data-exp="${group.quiz.explanation}">
              ${group.quiz.options.map(opt => `
                <button class="btn btn-secondary btn-xs btn-quiz-opt" data-option="${opt}">${opt}</button>
              `).join('')}
            </div>
            <div class="quiz-feedback-box hidden text-xs p-2.5 rounded-lg"></div>
          </div>
        ` : ''}
      </div>
    `).join('');

    // Attach Event Handlers
    listContainer.querySelectorAll('.btn-speak-word').forEach(btn => {
      btn.onclick = () => Speech.speak(btn.getAttribute('data-text'), 0.95);
    });

    listContainer.querySelectorAll('.quiz-options-container').forEach(container => {
      const correct = container.getAttribute('data-correct');
      const exp = container.getAttribute('data-exp');
      const fbBox = container.parentElement.querySelector('.quiz-feedback-box');

      container.querySelectorAll('.btn-quiz-opt').forEach(btn => {
        btn.onclick = () => {
          const selected = btn.getAttribute('data-option');
          container.querySelectorAll('.btn-quiz-opt').forEach(b => {
            b.disabled = true;
            if (b.getAttribute('data-option') === correct) {
              b.classList.remove('btn-secondary');
              b.classList.add('btn-emerald');
            } else if (b === btn) {
              b.classList.remove('btn-secondary');
              b.classList.add('btn-secondary', 'border-red-500/50', 'text-red-500');
            }
          });

          fbBox.classList.remove('hidden');
          if (selected === correct) {
            fbBox.className = 'quiz-feedback-box text-xs p-2.5 rounded-lg bg-emerald-950/20 border border-emerald-500/40 text-emerald-400';
            fbBox.innerHTML = `✓ <strong>Richtig!</strong> ${exp}`;
          } else {
            fbBox.className = 'quiz-feedback-box text-xs p-2.5 rounded-lg bg-red-950/20 border border-red-500/40 text-red-400';
            fbBox.innerHTML = `❌ <strong>Nicht ganz:</strong> Richtig ist <em>${correct}</em>. ${exp}`;
          }
        };
      });
    });
  }

  // Filter Categories Click
  container.querySelectorAll('.cat-btn').forEach(btn => {
    btn.onclick = () => {
      activeCategory = btn.getAttribute('data-cat');
      container.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('btn-primary'));
      btn.classList.add('btn-primary');
      renderClusters();
    };
  });

  searchInput.oninput = () => {
    searchQuery = searchInput.value;
    renderClusters();
  };

  renderClusters();
}
