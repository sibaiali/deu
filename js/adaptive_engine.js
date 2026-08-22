// Adaptive Learning & FSRS Engine
// Berechnet den optimalen täglichen Lernpfad basierend auf Abruferfolg und Zustand.

export class AdaptiveEngine {
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
