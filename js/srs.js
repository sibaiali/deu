// Spaced Repetition Engine (SM-2 / FSRS-Style Scheduling)
// Berechnet Wiederholungsintervalle, Stabilitätsfaktoren und Meisterschaftslevel (0 bis 6)

import { Storage } from './storage.js';

export const MASTERY_LEVELS = {
  0: { label: "Nicht gelernt", badge: "badge-gray", color: "#6b7280" },
  1: { label: "Gesehen", badge: "badge-blue", color: "#3b82f6" },
  2: { label: "Erkannt", badge: "badge-indigo", color: "#6366f1" },
  3: { label: "Erinnert", badge: "badge-purple", color: "#a855f7" },
  4: { label: "Verwendet", badge: "badge-teal", color: "#14b8a6" },
  5: { label: "Sicher verwendet", badge: "badge-green", color: "#22c55e" },
  6: { label: "Spontan verwendet", badge: "badge-emerald", color: "#10b981" }
};

export class SRSEngine {
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

export const SRS = new SRSEngine();
