// Psychologie, KJP-Krankheitsbilder & Psychiatrische Kommunikation
// Diagnostik, Symptomlehre und Deeskalation für Station 2 (UKGM Marburg) & Kinder-/Jugendpsychiatrie (11–17 Jahre)

export const PSYCHOLOGY_DATA = {
  overview: {
    title: "KJP-Psychiatrie & Klinische Symptomlehre (11–17 Jahre)",
    disclaimer: "Dieses Modul vermittelt sprachliches, pflegerisches und deeskalierendes Handlungswissen für die Kinder- und Jugendpsychiatrie (KJP) und Station 2. Es dient der professionellen Kommunikation und NICHT der medizinischen Eigendiagnostik.",
    provenance: "AUS_QUELLE"
  },

  concepts: [
    // ==========================================
    // 1. KRANKHEITSBILDER & AKUTSYMPTOME (KJP)
    // ==========================================
    {
      id: "psy_psychose_wahn",
      term: "Die Psychose & Wahnphänomene (Realitätsverlust & Halluzinationen)",
      domain: "KJP & Akutpsychiatrie",
      provenance: "AUS_QUELLE",
      source: "KJP_Manual.pdf / Schizophrenie & Drogenpsychose",
      explanationGerman: "Ein Zustand mit tiefgreifendem Verlust des Realitätsbezugs. Betroffene Jugendliche erleben akustische Halluzinationen (imperative Stimmen hören), optische Sinnestäuschungen oder Wahnideen (z. B. Verfolgungswahn: 'Die Kameras im Zimmer beobachten mich'). Oft ausgelöst durch Schizophrenie, schwere Traumata oder Cannabiskonsum (Drogenpsychose).",
      simpleExample: "Ein 16-jähriger Patient verbarrikadiert sich im Zimmer, weil er überzeugt ist, das Pflegepersonal wolle ihn vergiften.",
      workplaceContext: "Auf Station 2 niemals gegen den Wahn anargumentieren ('Das bilden Sie sich nur ein!'). Das verstärkt die Panik. Stattdessen die reale Angst validieren und Sicherheit bieten.",
      whatToDo: [
        "Reale Angst anerkennen: 'Ich sehe, dass Sie gerade große Angst haben. Hier im Stationszimmer sind Sie in Sicherheit.'",
        "Auf sensorische Reizüberflutung achten: Licht dimmen, leise und mit ruhiger Stimme sprechen.",
        "Klare, kurze Sätze verwenden; transparent ankündigen, was man tut: 'Ich öffne jetzt die Tür einen Spalt.'"
      ],
      whatToAvoid: [
        "Den Wahn rational widerlegen wollen oder darüber lachen.",
        "Dem Wahn zustimmen (keine Bestätigung von nicht-realen Inhalten).",
        "Sich dem Patienten unerwartet von hinten nähern oder ihn überraschend berühren."
      ],
      relevantVocabulary: ["die Psychose", "der Verfolgungswahn", "die Halluzination", "das Stimmenhören", "der Realitätsverlust", "imperativ"],
      speakingPractice: "Ich höre die Stimmen zwar nicht, aber ich sehe, wie sehr sie Ihnen Angst machen. Ich bleibe hier bei Ihnen am Tisch sitzen."
    },

    {
      id: "psy_autismus_ass",
      term: "Autismus-Spektrum-Störung (ASS) bei Jugendlichen",
      domain: "Entwicklungspsychiatrie & Neurodivergenz",
      provenance: "AUS_QUELLE",
      source: "KJP_Manual.pdf / ASS_Leitlinie",
      explanationGerman: "Eine neurobiologische Besonderheit der Informations- und Reizverarbeitung. Jugendliche im Autismus-Spektrum haben oft eine Reizfilterschwäche, nehmen Sinnesreize intensiv wahr, verstehen Sprache sehr wörtlich (Schwierigkeiten bei Metaphern, Ironie, Redewendungen) und benötigen verlässliche Routinen. Bei Reizüberlastung drohen Meltdowns (explosiver Wut-/Panikausbruch) oder Shutdowns (völliger Rückzug, Sprachlosigkeit).",
      simpleExample: "Ein 13-Jähriger gerät bei plötzlichem Baulärm und Essengerüchen im Speisesaal in Panik und schlägt mit den Händen auf die Ohren.",
      workplaceContext: "Auf Station: Feste Tagespläne aushängen, Ankündigungen im Voraus machen, Rückzugsorte ('Snoezelen-Raum' / reizarmes Zimmer) anbieten.",
      whatToDo: [
        "Klar, direkt und wörtlich sprechen – komplett auf Ironie, Sarkasmus oder doppeldeutige Witze verzichten.",
        "Veränderungen frühzeitig ankündigen: 'In 10 Minuten essen wir zu Mittag.'",
        "Stimming (beruhigende repetitive Bewegungen wie Wippen oder Knetbälle) erlauben und als Selbstregulation respektieren."
      ],
      whatToAvoid: [
        "Unvorhergesehene Planänderungen ohne Erklärung.",
        "Blickkontakt erzwingen ('Schau mir in die Augen, wenn ich mit dir rede').",
        "Metaphorische Redewendungen nutzen ('Wir müssen jetzt die Zähne zusammenbeißen')."
      ],
      relevantVocabulary: ["das Autismus-Spektrum", "die Reizfilterschwäche", "der Meltdown", "der Shutdown", "das Stimming", "reizarm"],
      speakingPractice: "Du kannst deine Kopfhörer aufsetzen. Wenn dir der Gruppenraum zu laut ist, gehen wir in den Ruheraum."
    },

    {
      id: "psy_enuresis_enkopresis",
      term: "Enuresis & Enkopresis (Einnässen & Einkoten)",
      domain: "KJP & Psychosomatik",
      provenance: "AUS_QUELLE",
      source: "KJP_Diagnostik_Ausscheidung.pdf",
      explanationGerman: "Unwillkürliches Einnässen (Enuresis nocturna / diurna) oder Einkoten (Enkopresis) nach Vollendung des 5. Lebensjahres ohne primär organische Ursache. Bei Jugendlichen zwischen 11 und 17 Jahren ist dies fast immer Ausdruck massiver seelischer Not, schwerer Traumatisierung, chronischer Angst oder familiärer Überforderung. Geht einher mit extremer Scham, Selbstwertverlust und Angst vor Mobbing.",
      simpleExample: "Ein 12-jähriger Junge nässt nachts im Klinikbett ein und versucht morgens verzweifelt, die nasse Bettwäsche unter der Matratze zu verstecken.",
      workplaceContext: "Als BFDler oder Pflegekraft: Absolute Diskretion! Niemals vor Mitpatienten ansprechen. Scham aktiv nehmen und sachlich-fürsorglich helfen.",
      whatToDo: [
        "Absolute Verschwiegenheit und Diskretion wahren; Zimmerkollegen diskret ablenken.",
        "Scham aktiv entkräften: 'Das ist überhaupt nicht schlimm. Das passiert vielen Menschen unter Stress. Wir machen das Bett schnell frisch.'",
        "Frische Kleidung und Bettwäsche ohne Aufhebens bereitstellen und unauffällig waschen."
      ],
      whatToAvoid: [
        "Das Einnässen vor anderen Jugendlichen erwähnen oder kommentieren.",
        "Vorwürfe wie 'Du bist doch schon 13!' oder 'Hättest du halt vorher Bescheid gesagt'.",
        "Strafmaßnahmen oder Bloßstellung."
      ],
      relevantVocabulary: ["die Enuresis", "die Enkopresis", "das Einnässen", "die Scham", "die Entstigmatisierung", "die Diskretion"],
      speakingPractice: "Komm, wir wechseln das Laken ganz in Ruhe zusammen. Du brauchst dich dafür überhaupt nicht zu schämen."
    },

    {
      id: "psy_nssv_schnittdruck",
      term: "NSSV & Schnittdruck (Nicht-suizidales selbstverletzendes Verhalten)",
      domain: "KJP & Emotionsregulation",
      provenance: "AUS_QUELLE",
      source: "Dialektisch-Behaviorale Therapie für Adoleszente (DBT-A)",
      explanationGerman: "Gezielte Selbstverletzung (Schneiden, Verbrennen, Schlagen) ohne Suizidabsicht zur Regulierung unerträglicher innerer Spannungszustände oder zur Durchbrechung dissoziativer Taubheitsgefühle. Betrifft häufig Jugendliche mit Borderline-Symptomatik oder Traumafolgestörungen.",
      simpleExample: "Eine 15-Jährige spürt extremen inneren 'Schnittdruck' nach einem Streit und bittet um Hilfe.",
      workplaceContext: "Nicht hysterisch reagieren. Wunden sachlich versorgen, Skills (Reizalternativen) anleiten und Non-Suizid-Absprachen überprüfen.",
      whatToDo: [
        "Skills aus dem Notfallkoffer anbieten: Ammoniak-Riechstäbchen, scharfe Chilibonbons, Igelball, Kühlpack auf die Unterarme.",
        "Wundversorgung ruhig und sachlich durchführen – ohne Vorwürfe, aber auch ohne übermäßige Zuwendung (Verstärker vermeiden).",
        "Spannungsskala erfragen: 'Auf einer Skala von 0 bis 100, wo liegt deine Anspannung gerade?'"
      ],
      whatToAvoid: [
        "Dramatisieren oder Schimpfen ('Warum tust du dir das schon wieder an?').",
        "Versprechen von Geheimhaltung ('Ich erzähle es der Stationsleitung nicht'). Pflegepersonal muss immer im Team transparent sein.",
        "Verletzungsutensilien auf Station zugänglich herumliegen lassen."
      ],
      relevantVocabulary: ["das NSSV", "der Schnittdruck", "der Skillkoffer", "die Anspannungsskala", "die Wundversorgung", "die Non-Suizid-Absprache"],
      speakingPractice: "Deine Anspannung ist bei 80. Lass uns den Kühlpack holen und zwei Minuten die 4-7-8-Atmung machen."
    },

    // ==========================================
    // 2. ENTWICKLUNGSPSYCHOLOGIE & BINDUNG
    // ==========================================
    {
      id: "psy_bindungstheorie",
      term: "Die Bindungstheorie & Bindungsmuster (nach Bowlby / Ainsworth)",
      domain: "Entwicklungspsychologie & KJP",
      provenance: "AUS_QUELLE",
      source: "KJP_Entwicklung.pdf",
      explanationGerman: "Kinder und Jugendliche entwickeln basierend auf frühen Bezugserfahrungen innere Beziehungsmuster: Sicher gebunden (Vertrauen in Bezugspersonen), unsicher-vermeidend (Gefühle werden abgewehrt, Pseudo-Autonomie), unsicher-ambivalent (klammernd, extreme Verlustangst) oder desorganisiert (Angst vor der Bindungsperson bei Traumata).",
      simpleExample: "Ein 14-Jähriger provoziert Betreuer aggressiv, um unbewusst zu testen: 'Schmeißt ihr mich auch raus, wenn ich schwierig werde?'",
      workplaceContext: "Verlässlichkeit und Kontinuität bieten. Wer Verlässlichkeit zusagt, muss sie einhalten.",
      whatToDo: [
        "Verlässlichkeit zeigen ('Ich sage, was ich tue, und tue, was ich sage').",
        "Co-Regulation anbieten: Ein ruhiges Nervensystem beruhigt das erregte Nervensystem des Jugendlichen."
      ],
      whatToAvoid: [
        "Liebesentzug oder Beziehungsabbruch als Erziehungsmaßnahme.",
        "Widersprüchliche Signale (Doppelbotschaften)."
      ],
      relevantVocabulary: ["das Bindungsmuster", "die Feinfühligkeit", "die Co-Regulation", "die Verlässlichkeit"],
      speakingPractice: "Ich sehe, wie wütend du bist. Ich gehe nicht weg. Ich bleibe hier, bis wir eine Lösung haben."
    }
  ]
};
