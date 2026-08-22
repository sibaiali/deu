// Leseverstehen & Praxistexte (B1+ / B2 / C1)
// Authentische Krankenhaus- und Alltagsdokumente mit Übungsaufgaben

export const READING_DATA = {
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
