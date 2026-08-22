// Flashcards Component — Anki-Style SRS Wiederholung & Vokabel-Explorer

import { Storage } from '../storage.js';
import { SRS, MASTERY_LEVELS } from '../srs.js';
import { Speech } from '../speech.js';

export function renderFlashcards(container, data, params = {}) {
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
            <span>🔊</span> Aussprache (S)
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
