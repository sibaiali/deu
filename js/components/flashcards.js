// Flashcards Component — Anki-Style SRS Wiederholung & Vokabel-Explorer
// Vollständige Abdeckung: Präfix-Verben (ab-, unter-, über-, an-, auf-, etc.), Klinik, Alltag & B2/C1

import { Storage } from '../storage.js';
import { SRS } from '../srs.js';
import { Speech } from '../speech.js';

export function renderFlashcards(container, data, params = {}) {
  const mode = params.mode || 'explorer'; // Default to explorer so user immediately sees all words!

  SRS.setVocabList(data.vocabulary);
  SRS.getDueCards().then(({ dueCards, newCards, totalDueCount }) => {
    container.innerHTML = `
      <div class="space-y-6 animate-fadeIn max-w-5xl mx-auto">
        <!-- Header -->
        <div class="hero-card">
          <div class="flex-between flex-wrap gap-4">
            <div>
              <span class="badge badge-blue mb-2">Vokabel- & Verb-Zentrale</span>
              <h1 class="page-title">Vokabeln, Verben & SRS (${data.vocabulary.length} Einträge)</h1>
              <p class="subtitle mt-1">
                Umfassender Wortschatz mit allen essenziellen Präfix-Verben (<em>ab-, unter-, über-, an-, auf-, aus-, ein-</em>), Klinikbegriffen und Alltags-Chunks.
              </p>
            </div>
            <div class="flex gap-2">
              <button id="btnExplorerMode" class="btn btn-sm ${mode === 'explorer' ? 'btn-primary' : 'btn-secondary'}">
                📚 Wortschatz & Verben (${data.vocabulary.length})
              </button>
              <button id="btnReviewMode" class="btn btn-sm ${mode === 'review' ? 'btn-primary' : 'btn-secondary'}">
                🔄 SRS-Wiederholung (${totalDueCount})
              </button>
            </div>
          </div>
        </div>

        <div id="flashcardsContent"></div>
      </div>
    `;

    const contentArea = container.querySelector('#flashcardsContent');

    if (mode === 'review') {
      const reviewDeck = dueCards.length > 0 ? dueCards : (newCards.length > 0 ? newCards : data.vocabulary.slice(0, 15));
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
        <div class="bento-card p-8 text-center max-w-lg mx-auto space-y-4">
          <div class="text-4xl">🎉</div>
          <h2 class="section-title">Hervorragend gemacht!</h2>
          <p class="text-xs text-secondary">Du hast alle Wiederholungskarten für diese Einheit gemeistert.</p>
          <div class="flex justify-center gap-3 pt-2">
            <a href="#heute" class="btn btn-primary btn-sm">Zum Dashboard</a>
            <button id="btnRestart" class="btn btn-secondary btn-sm">Weitere Karten lernen</button>
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
      <div class="max-w-2xl mx-auto space-y-4">
        <!-- Progress Bar -->
        <div class="flex-between text-xs text-secondary">
          <span>Karte ${currentIndex + 1} von ${deck.length}</span>
          <span class="badge badge-blue">${card.level} • ${card.domain}</span>
        </div>
        <div class="w-full bg-subtle h-1.5 rounded-full overflow-hidden">
          <div class="bg-primary h-full transition-all" style="width: ${((currentIndex + 1) / deck.length) * 100}%"></div>
        </div>

        <!-- The Flashcard Box -->
        <div id="cardBox" class="bento-card p-8 cursor-pointer text-center min-h-[300px] flex flex-col justify-between transition-all select-none">
          <div class="flex-between items-center text-xs text-secondary">
            <span class="badge badge-gray">${card.partOfSpeech}</span>
            <span class="badge ${card.provenance === 'AUS_QUELLE' ? 'badge-emerald' : 'badge-amber'}">${card.provenance}</span>
          </div>

          <!-- Front Content -->
          <div class="my-6">
            ${card.article && card.article !== '-' ? `<div class="text-sm font-bold uppercase text-blue-500 mb-1">${card.article}</div>` : ''}
            <div class="text-3xl font-extrabold text-primary tracking-tight">${card.word}</div>
            ${card.plural && card.plural !== '-' ? `<div class="text-xs text-secondary mt-1">Plural: ${card.plural}</div>` : ''}
          </div>

          <!-- Hint -->
          <div id="flipHint" class="text-xs text-muted">
            Klicke auf die Karte oder drücke [Leertaste], um die Erklärung aufzudecken
          </div>

          <!-- Back Content (Initially Hidden) -->
          <div id="backContent" class="hidden text-left space-y-3 pt-4 border-t border-subtle">
            <div>
              <div class="text-xs font-bold text-muted uppercase">Bedeutung auf Deutsch</div>
              <div class="text-sm text-primary font-medium mt-0.5">${card.germanDefinition}</div>
            </div>

            <div class="p-3 bg-subtle rounded-xl text-xs space-y-1">
              <div class="font-bold text-primary">Beispielsatz:</div>
              <div class="text-secondary italic">"${card.exampleGerman}"</div>
              ${card.exampleEnglish ? `<div class="text-muted text-[11px]">${card.exampleEnglish}</div>` : ''}
            </div>

            ${card.collocations && card.collocations.length > 0 ? `
              <div class="text-xs">
                <span class="font-bold text-muted">Typische Kollokationen: </span>
                <span class="text-secondary">${card.collocations.join(' · ')}</span>
              </div>
            ` : ''}
          </div>
        </div>

        <!-- Grading Buttons (Visible after flip) -->
        <div id="gradingButtons" class="grid grid-cols-4 gap-2 hidden">
          <button class="btn btn-secondary btn-sm border-red-500/30 text-red-500 hover:bg-red-500/10" data-rating="1">
            ❌ Noch einmal<br><span class="text-[10px] text-muted">&lt; 10 Min</span>
          </button>
          <button class="btn btn-secondary btn-sm border-amber-500/30 text-amber-500 hover:bg-amber-500/10" data-rating="2">
            ⚠️ Schwer<br><span class="text-[10px] text-muted">1 Tag</span>
          </button>
          <button class="btn btn-secondary btn-sm border-blue-500/30 text-blue-500 hover:bg-blue-500/10" data-rating="3">
            ✓ Gut<br><span class="text-[10px] text-muted">3 Tage</span>
          </button>
          <button class="btn btn-secondary btn-sm border-emerald-500/30 text-emerald-500 hover:bg-emerald-500/10" data-rating="4">
            ⭐ Einfach<br><span class="text-[10px] text-muted">7 Tage</span>
          </button>
        </div>

        <!-- Audio Speed Selector & Pronunciation -->
        <div class="flex justify-center items-center gap-2 pt-2">
          <span class="text-xs text-muted font-semibold">Geschwindigkeit:</span>
          <button class="btn btn-ghost btn-xs audio-speed-btn" data-rate="0.7">0.7x</button>
          <button class="btn btn-ghost btn-xs audio-speed-btn active" data-rate="0.95">1.0x</button>
          <button class="btn btn-ghost btn-xs audio-speed-btn" data-rate="1.2">1.2x</button>
          <button id="btnPlayCardAudio" class="btn btn-primary btn-xs flex items-center gap-1 ml-2">
            <span>▶ Anhören</span>
          </button>
        </div>
      </div>
    `;

    const cardBox = container.querySelector('#cardBox');
    const backContent = container.querySelector('#backContent');
    const flipHint = container.querySelector('#flipHint');
    const gradingButtons = container.querySelector('#gradingButtons');
    const btnAudio = container.querySelector('#btnPlayCardAudio');

    let currentRate = 0.95;
    container.querySelectorAll('.audio-speed-btn').forEach(b => {
      b.onclick = () => {
        currentRate = parseFloat(b.getAttribute('data-rate'));
        container.querySelectorAll('.audio-speed-btn').forEach(btn => btn.classList.remove('btn-primary'));
        b.classList.add('btn-primary');
      };
    });

    function flip() {
      if (!isFlipped) {
        isFlipped = true;
        backContent.classList.remove('hidden');
        flipHint.classList.add('hidden');
        gradingButtons.classList.remove('hidden');
      }
    }

    cardBox.onclick = flip;

    btnAudio.onclick = (e) => {
      e.stopPropagation();
      Speech.speak(card.word, currentRate);
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
  let activePrefix = 'alle';

  container.innerHTML = `
    <div class="space-y-4">
      <!-- Search & Filters Bar -->
      <div class="bento-card space-y-3">
        <div class="flex-between flex-wrap gap-3">
          <input type="text" id="searchInput" placeholder="Vokabel, Bedeutung oder Präfix suchen (z. B. 'ablegen', 'unter-', 'übernehmen', 'Belastung')..." class="p-2.5 bg-subtle border border-subtle rounded-lg text-primary text-sm outline-none flex-1 min-w-[260px]" />
          <div class="flex gap-2">
            <select id="filterLevel" class="p-2 bg-subtle border border-subtle rounded-lg text-primary text-xs outline-none">
              <option value="">Alle Niveaus</option>
              <option value="A1">A1</option>
              <option value="A2">A2</option>
              <option value="B1">B1</option>
              <option value="B1+">B1+</option>
              <option value="B2">B2</option>
              <option value="C1">C1</option>
            </select>
            <select id="filterDomain" class="p-2 bg-subtle border border-subtle rounded-lg text-primary text-xs outline-none">
              <option value="">Alle Fachgebiete</option>
              <option value="Klinik">Klinik & Station</option>
              <option value="Psychiatrie">Psychiatrie</option>
              <option value="Psychologie">Psychologie</option>
              <option value="Hygiene">Hygiene & Pflege</option>
              <option value="BFD">BFD & Vertrag</option>
              <option value="Alltag">Alltag & Wohnen</option>
              <option value="Kommunikation">Kommunikation</option>
            </select>
          </div>
        </div>

        <!-- Quick Prefix Filter Buttons (AB, UNTER, ÜBER, AN, AUF, AUS, EIN, VOR, MIT, VER, BE, ENT, ZER) -->
        <div class="flex flex-wrap items-center gap-1.5 pt-2 border-t border-subtle text-xs">
          <span class="font-bold text-muted uppercase text-[11px] mr-1">Präfix-Verben:</span>
          <button class="btn btn-xs ${activePrefix === 'alle' ? 'btn-primary' : 'btn-secondary'} prefix-btn" data-prefix="alle">Alle</button>
          <button class="btn btn-xs ${activePrefix === 'ab' ? 'btn-primary' : 'btn-secondary'} prefix-btn" data-prefix="ab">ab-</button>
          <button class="btn btn-xs ${activePrefix === 'unter' ? 'btn-primary' : 'btn-secondary'} prefix-btn" data-prefix="unter">unter-</button>
          <button class="btn btn-xs ${activePrefix === 'ueber' ? 'btn-primary' : 'btn-secondary'} prefix-btn" data-prefix="ueber">über-</button>
          <button class="btn btn-xs ${activePrefix === 'an' ? 'btn-primary' : 'btn-secondary'} prefix-btn" data-prefix="an">an-</button>
          <button class="btn btn-xs ${activePrefix === 'auf' ? 'btn-primary' : 'btn-secondary'} prefix-btn" data-prefix="auf">auf-</button>
          <button class="btn btn-xs ${activePrefix === 'aus' ? 'btn-primary' : 'btn-secondary'} prefix-btn" data-prefix="aus">aus-</button>
          <button class="btn btn-xs ${activePrefix === 'ein' ? 'btn-primary' : 'btn-secondary'} prefix-btn" data-prefix="ein">ein-</button>
          <button class="btn btn-xs ${activePrefix === 'vor' ? 'btn-primary' : 'btn-secondary'} prefix-btn" data-prefix="vor">vor-</button>
          <button class="btn btn-xs ${activePrefix === 'mit' ? 'btn-primary' : 'btn-secondary'} prefix-btn" data-prefix="mit">mit-</button>
          <button class="btn btn-xs ${activePrefix === 'ver' ? 'btn-primary' : 'btn-secondary'} prefix-btn" data-prefix="ver">ver-</button>
          <button class="btn btn-xs ${activePrefix === 'be' ? 'btn-primary' : 'btn-secondary'} prefix-btn" data-prefix="be">be-</button>
          <button class="btn btn-xs ${activePrefix === 'ent' ? 'btn-primary' : 'btn-secondary'} prefix-btn" data-prefix="ent">ent-</button>
        </div>
      </div>

      <!-- Word Count Badge -->
      <div class="flex-between text-xs text-secondary px-1">
        <span>Gefundene Wörter: <strong id="vocabCount">${vocabList.length}</strong></span>
        <span>Klicke auf <strong>▶</strong> für Sprachausgabe</span>
      </div>

      <!-- Vocabulary Grid -->
      <div id="vocabGrid" class="grid grid-cols-1 md:grid-cols-2 gap-3"></div>
    </div>
  `;

  const grid = container.querySelector('#vocabGrid');
  const searchInput = container.querySelector('#searchInput');
  const filterLevel = container.querySelector('#filterLevel');
  const filterDomain = container.querySelector('#filterDomain');
  const vocabCount = container.querySelector('#vocabCount');

  function renderList() {
    vocabCount.textContent = filtered.length;
    if (filtered.length === 0) {
      grid.innerHTML = `<div class="col-span-2 p-8 text-center text-secondary bg-surface rounded-xl border border-subtle">Keine passenden Vokabeln gefunden.</div>`;
      return;
    }

    grid.innerHTML = filtered.map(v => `
      <div class="bento-card p-4 justify-between space-y-3">
        <div class="space-y-1.5">
          <div class="flex-between flex-wrap gap-2">
            <div class="flex items-center gap-1.5">
              <span class="badge badge-blue text-xs">${v.level}</span>
              <span class="badge badge-gray text-xs">${v.domain}</span>
              <span class="badge badge-gray text-xs">${v.partOfSpeech}</span>
            </div>
            <span class="badge ${v.provenance === 'AUS_QUELLE' ? 'badge-emerald' : 'badge-amber'} text-[10px]">${v.provenance}</span>
          </div>

          <div class="flex items-baseline gap-2 pt-1">
            ${v.article && v.article !== '-' ? `<span class="text-xs font-bold uppercase text-blue-500">${v.article}</span>` : ''}
            <h3 class="font-bold text-lg text-primary">${v.word}</h3>
          </div>
          ${v.plural && v.plural !== '-' ? `<div class="text-[11px] text-muted">Plural: ${v.plural}</div>` : ''}

          <p class="text-xs text-secondary font-medium leading-relaxed">${v.germanDefinition}</p>

          <div class="p-2.5 bg-subtle rounded-lg text-xs space-y-0.5 mt-2">
            <div class="text-primary italic">"${v.exampleGerman}"</div>
            ${v.exampleEnglish ? `<div class="text-muted text-[11px]">${v.exampleEnglish}</div>` : ''}
          </div>

          ${v.collocations && v.collocations.length > 0 ? `
            <div class="text-[11px] text-muted pt-1">
              <span class="font-semibold text-secondary">Kollokation:</span> ${v.collocations.slice(0, 2).join(' · ')}
            </div>
          ` : ''}
        </div>

        <div class="pt-2 border-t border-subtle flex-between">
          <div class="flex items-center gap-1">
            <button class="btn btn-primary btn-xs btn-play-fast" data-word="${v.word}" title="Normal anhören">
              ▶ 1.0x
            </button>
            <button class="btn btn-secondary btn-xs btn-play-slow" data-word="${v.word}" title="Langsam anhören">
              🐢 0.7x
            </button>
          </div>
          <a href="${v.dictionaryLinks?.duden || '#'}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-xs text-blue-500">
            Duden ↗
          </a>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('.btn-play-fast').forEach(btn => {
      btn.onclick = () => Speech.speak(btn.getAttribute('data-word'), 0.95);
    });
    grid.querySelectorAll('.btn-play-slow').forEach(btn => {
      btn.onclick = () => Speech.speak(btn.getAttribute('data-word'), 0.7);
    });
  }

  function applyFilter() {
    const q = searchInput.value.toLowerCase().trim();
    const lvl = filterLevel.value;
    const dom = filterDomain.value;

    filtered = vocabList.filter(v => {
      const matchQ = !q || v.word.toLowerCase().includes(q) || v.germanDefinition.toLowerCase().includes(q) || (v.tags || []).some(t => t.toLowerCase().includes(q));
      const matchLvl = !lvl || v.level === lvl;
      const matchDom = !dom || v.domain.toLowerCase().includes(dom.toLowerCase());
      
      let matchPrefix = true;
      if (activePrefix !== 'alle') {
        const pTag = `praefix_${activePrefix}`;
        matchPrefix = (v.tags || []).includes(pTag) || v.word.toLowerCase().startsWith(activePrefix) || v.word.toLowerCase().includes(` ${activePrefix}`);
      }

      return matchQ && matchLvl && matchDom && matchPrefix;
    });
    renderList();
  }

  container.querySelectorAll('.prefix-btn').forEach(btn => {
    btn.onclick = () => {
      activePrefix = btn.getAttribute('data-prefix');
      container.querySelectorAll('.prefix-btn').forEach(b => b.classList.remove('btn-primary'));
      btn.classList.add('btn-primary');
      applyFilter();
    };
  });

  searchInput.oninput = applyFilter;
  filterLevel.onchange = applyFilter;
  filterDomain.onchange = applyFilter;

  renderList();
}
