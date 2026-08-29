// Psychologie & Kinder-/Jugendpsychiatrie (KJP) verstehen
// Sprach-, Handlungs- und Deeskalationswissen für Klinik, Pädagogik & Alltag

export const PSYCHOLOGY_DATA = {
  overview: {
    title: "Psychologie & Psychiatrische Kommunikation verstehen",
    disclaimer: "Dieses Modul vermittelt sprachliches und deeskalierendes Handlungswissen für BFD, Klinik und Betreuung. Es dient ausdrücklich NICHT der medizinischen Eigendiagnostik.",
    provenance: "AUS_QUELLE"
  },

  concepts: [
    // ----------------------------------------
    // 1. KINDER- & JUGENDPSYCHOLOGIE / KJP
    // ----------------------------------------
    {
      id: "psy_bindungstheorie",
      term: "Die Bindungstheorie & Bindungsmuster (nach Bowlby / Ainsworth)",
      domain: "Entwicklungspsychologie & KJP",
      provenance: "AUS_QUELLE",
      source: "KJP_Entwicklung.pdf / Psychoanalyse",
      explanationGerman: "Kinder entwickeln basierend auf den ersten Lebensjahren ein inneres Arbeitsmodell von Beziehungen: Sicher gebunden (Vertrauen in Bezugspersonen), unsicher-vermeidend (Gefühle werden unterdrückt, Pseudo-Autonomie), unsicher-ambivalent (klammernd, extreme Verlustangst) oder desorganisiert (Angst vor der Bezugsperson bei traumatischen Erfahrungen).",
      simpleExample: "Ein Kind weint beim Verlassen der Mutter, lässt sich aber nach ihrer Rückkehr schnell trösten (sicher gebunden).",
      workplaceContext: "Traumatisierte Kinder und Jugendliche auf Station testen oft Grenzen extrem aus, um unbewusst zu prüfen: 'Verlässt du mich auch, wenn ich schwierig bin?'",
      whatToDo: [
        "Verlässlichkeit und Vorhersehbarkeit im Verhalten zeigen ('Ich sage, was ich tue, und tue, was ich sage').",
        "Co-Regulation anbieten: Ein ruhiges Nervensystem beruhigt das erregte Nervensystem des Kindes.",
        "Positive Zuwendung nicht an Bedingungen oder 'gutes Verhalten' knüpfen."
      ],
      whatToAvoid: [
        "Liebesentzug oder Drohungen ('Wenn du nicht brav bist, gehe ich weg').",
        "Widersprüchliche Signale (Doppelbotschaften).",
        "Die Bindungsangst des Kindes ins Lächerliche ziehen."
      ],
      relevantVocabulary: ["das Bindungsmuster", "die Feinfühligkeit", "die Co-Regulation", "die Verlässlichkeit", "die Bindungsperson"],
      speakingPractice: "Ich sehe, dass du gerade große Angst hast. Ich bleibe hier bei dir sitzen, bis du dich wieder sicher fühlst."
    },

    {
      id: "psy_trotzphase_wutanfall",
      term: "Die Autonomiephase (Trotzphase) & Emotionsregulation bei Kindern",
      domain: "Entwicklungs- & Traumapädagogik",
      provenance: "AUS_QUELLE",
      source: "Traumapaedagogik_Klinik.pdf",
      explanationGerman: "Zwischen dem 2. und 4. Lebensjahr begreift das Kind sein eigenes 'Ich' und entwickelt einen eigenen Willen. Da der präfrontale Kortex (Sitz der Impulskontrolle) noch unreif ist, führen Frustrationen zu massiven emotionalen Entladungen (Wutanfällen).",
      simpleExample: "Das Kind darf die Steckdose nicht berühren und wirft sich schreiend auf den Boden.",
      workplaceContext: "In der Betreuung oder Kinderklinik geraten Kinder bei kleinsten Verboten in heftige Wut. Strafen verschlimmern die Übererregung der Amygdala.",
      whatToDo: [
        "Auf Augenhöhe gehen (in die Hocke gehen, Blickkontakt auf gleicher Höhe).",
        "Das Gefühl benennen und validieren: 'Du bist gerade richtig wütend, weil du noch weiterspielen wolltest.'",
        "Körperliche Grenzen ruhig und bestimmt halten: 'Wütend sein ist okay, aber Schlagen/Beißen ist nicht erlaubt.'"
      ],
      whatToAvoid: [
        "Selbst laut werden oder das Kind anschreien.",
        "Lange rationale Vorträge halten, während das Kind im Wutanfall ist (das Gehirn ist für Logik blockiert).",
        "Das Kind zur Strafe isolieren ('Time-Out' im Zimmer)."
      ],
      relevantVocabulary: ["die Autonomiephase", "die Impulskontrolle", "das Gefühlschaos", "die Wutbewältigung", "auf Augenhöhe gehen"],
      speakingPractice: "Ich merke, wie wütend du bist. Das ist vollkommen verständlich. Atme kurz mit mir aus – ich helfe dir dabei."
    },

    {
      id: "psy_adhs_reizueberflutung",
      term: "ADHS & Reizüberflutung bei Kindern & Jugendlichen",
      domain: "Kinder- & Jugendpsychiatrie",
      provenance: "AUS_QUELLE",
      source: "KJP_Manual.pdf",
      explanationGerman: "Eine neurobiologische Störung der Reizfilterung und Dopaminregulation. Betroffene Kinder können sensorische Reize (Geräusche, Bewegungen) schlechter filtern, was zu Hyperaktivität, Impulsivität und rascher Erschöpfung durch Reizüberflutung führt.",
      simpleExample: "Ein Kind kann bei Hintergrundmusik oder vielen bunten Bildern im Raum den Hausaufgaben nicht folgen.",
      workplaceContext: "Auf Station oder in der Schule wirken diese Kinder oft 'unruhig', 'störend' oder 'aggressiv', obwohl sie schlicht sensorisch überfordert sind.",
      whatToDo: [
        "Reizarme Umgebung schaffen (visuelle Ablenkungen und Lärm minimieren).",
        "Kurze, präzise Arbeitsaufträge in Einzelschritten geben (1 Anweisung statt 5 auf einmal).",
        "Bewegungspausen gezielt einplanen (Bewegungsdrang als Ressource nutzen)."
      ],
      whatToAvoid: [
        "Pauschale Vorwürfe wie 'Du hörst nie zu!' oder 'Sitz endlich still!'.",
        "Überladene Räume mit ständig wechselnden Sinnesreizen.",
        "Komplexe mehrstufige Aufgabenstellungen ohne Zwischenstopps."
      ],
      relevantVocabulary: ["die Reizfilterung", "die Impulsivität", "die Aufmerksamkeitsspanne", "reizarm", "die Strukturierung"],
      speakingPractice: "Lass uns zuerst nur Aufgabe 1 zusammen machen. Wenn du die geschafft hast, machen wir eine kurze 2-Minuten-Pause."
    },

    {
      id: "psy_kindgerechte_kommunikation",
      term: "Kindgerechte Kommunikation & Angstreduktion in der Klinik",
      domain: "Klinische Pädagogik",
      provenance: "AUS_QUELLE",
      source: "Klinische_Kommunikation_KJP.pdf",
      explanationGerman: "Kinder verstehen Sprache bis etwa zum 10. Lebensjahr sehr wörtlich und bildhaft. Medizinische Fachbegriffe wie 'Blut abnehmen' oder 'Spritze' lösen Todes- oder Verstümmelungsängste aus. Eine kindgerechte Sprache nutzt Metaphern, Entdramatisierung und vorbereitende Ankündigungen.",
      simpleExample: "Statt 'Wir nehmen dir jetzt Blut ab' sagt man: 'Wir zählen kurz deine Blutkörperchen mit einem kleinen Zauber-Röhrchen.'",
      workplaceContext: "Bei Blutdruckmessung, EKG oder Verbandswechsel vor der Durchführung das Gerät am Stofftier oder spielerisch vormachen.",
      whatToDo: [
        "Positive, ehrliche Erklärungen ('Es piekst kurz wie ein Mückenstich, danach ist es vorbei').",
        "Das Kind aktiv einbeziehen ('Möchtest du das Pflaster mit den Dinos oder den Sternen?').",
        "Nach der Untersuchung loben und die Tapferkeit anerkennen."
      ],
      whatToAvoid: [
        "Lügen wie 'Das tut überhaupt gar nicht weh!' (zerstört das Vertrauen, wenn es doch wehtut).",
        "Fachjargon und drohende Worte verwenden.",
        "Ironie oder Sarkasmus (Kinder verstehen Ironie kognitiv noch nicht)."
      ],
      relevantVocabulary: ["die kindgerechte Sprache", "die Angstreduktion", "die Wahlmöglichkeit", "der Zaubermückenstich", "die Tapferkeit"],
      speakingPractice: "Schau mal, diese Manschette pustet sich jetzt auf wie ein kleiner Luftballon und umarmt deinen Arm ganz fest."
    },

    // ----------------------------------------
    // 2. ERWACHSENENPSYCHIATRIE & DEESKALATION
    // ----------------------------------------
    {
      id: "psy_trauma",
      term: "Das Trauma / Die Traumatisierung",
      domain: "Traumapädagogik",
      provenance: "AUS_QUELLE",
      source: "PsyDeutsch_Idee.pdf (S. 1-5)",
      explanationGerman: "Ein Trauma entsteht, wenn eine Person eine Situation als extrem bedrohlich, überwältigend und unkontrollierbar erlebt, während normale Bewältigungsstrategien versagen. Es hinterlässt Gefühle von extremer Angst, Ohnmacht und Hilflosigkeit.",
      simpleExample: "Ein schwerer Autounfall oder Gewalterfahrungen können traumatisch wirken.",
      workplaceContext: "Patienten auf Station können durch plötzliche laute Geräusche, geschlossene Türen oder bestimmte Gerüche getriggert werden und in alte Angstzustände zurückfallen.",
      whatToDo: [
        "Ruhige, berechenbare Atmosphäre schaffen.",
        "Ankündigen, was man als Nächstes tut ('Ich öffne jetzt kurz das Fenster').",
        "Auf körperlichen Abstand achten und den Fluchtweg des Patienten freihalten."
      ],
      whatToAvoid: [
        "Patienten unerwartet von hinten berühren.",
        "Aussagen wie 'Es ist doch gar nichts passiert' oder 'Beruhigen Sie sich einfach'.",
        "Detailliert nach traumatischen Erlebnissen ausfragen."
      ],
      relevantVocabulary: ["das Bindungstrauma", "die Ohnmacht", "überwältigend", "die Bewältigungsstrategie", "die Reizüberflutung"],
      speakingPractice: "Herr Müller, ich sehe, dass Ihnen das gerade zu viel wird. Ich trete einen Schritt zurück. Sie sind hier im Krankenhaus in Sicherheit."
    },

    {
      id: "psy_ptbs_flashback",
      term: "Der Flashback / Das Wiedererleben (PTBS)",
      domain: "Klinische Symptomatik",
      provenance: "AUS_QUELLE",
      source: "PsyDeutsch_Idee.pdf (S. 2, 6, 22)",
      explanationGerman: "Ein Zustand, in dem ein traumatisches Ereignis sich der Person ungewollt wieder aufdrängt. Der Patient erlebt das Gefühl und die Sinneswahrnehmungen des Traumas so intensiv, als fände es genau in diesem Augenblick im Hier und Jetzt erneut statt.",
      simpleExample: "Ein Knallgeräusch lässt eine Person zusammenzucken und panisch den Raum nach Gefahr absuchen.",
      workplaceContext: "Ein Patient erstarrt plötzlich, reagiert kaum noch auf Ansprache oder zittert am ganzen Körper.",
      whatToDo: [
        "5-4-3-2-1 Erdungsmethode anwenden: Den Patienten ins Hier und Jetzt zurückholen.",
        "Den Patienten seinen Namen, das heutige Datum und den Raum laut aussprechen lassen.",
        "Sensorische Reize anbieten (z. B. ein Glas kaltes Wasser, feste Unterlage unter den Füßen spüren lassen)."
      ],
      whatToAvoid: [
        "Den Patienten schütteln oder festhalten.",
        "Inhaltlich auf das Trauma eingehen.",
        "Den Patienten alleine im Raum lassen, ohne vorher Hilfe geholt zu haben."
      ],
      relevantVocabulary: ["die Intrusion", "die Erdung", "die Orientierung im Hier und Jetzt", "das Hyperarousal", "die Schreckreaktion"],
      speakingPractice: "Frau Schmidt, hören Sie meine Stimme. Sie sind hier im Gemeinschaftsraum in Marburg. Es ist August. Spüren Sie Ihre Füße auf dem festen Boden?"
    },

    {
      id: "psy_grounding_54321",
      term: "Die 5-4-3-2-1 Erdungstechnik (Grounding)",
      domain: "Deeskalation & Reorientierung",
      provenance: "AUS_QUELLE",
      source: "PsyDeutsch_Idee.pdf (S. 2, 8, 30)",
      explanationGerman: "Eine strukturierte sensorische Achtsamkeitsübung, die das Nervensystem bei Dissoziation, Panik oder Flashbacks über die 5 Sinne in die Gegenwart zurückholt: 5 Dinge sehen, 4 Dinge spüren, 3 Dinge hören, 2 Dinge riechen, 1 Sache schmecken.",
      simpleExample: "Der Patient zählt laut auf: Ich sehe den Stuhl, das Fenster, die Lampe, die Uhr, die Tür.",
      workplaceContext: "Sofortintervention bei Patienten mit massiver innerer Anspannung oder Panikattacken im Stationsflur.",
      whatToDo: [
        "Mit ruhiger, tiefer Stimme anleiten.",
        "Geduldig warten, bis der Patient jeden Sinn wahrgenommen hat.",
        "Gemeinsam tief durchatmen (längeres Ausatmen als Einatmen)."
      ],
      whatToAvoid: [
        "Hektik verbreiten oder den Patienten drängen.",
        "Komplexe abstrakte Fragen stellen.",
        "Über das auslösende Thema diskutieren."
      ],
      relevantVocabulary: ["die Sinneswahrnehmung", "das Grounding", "die Panikattacke", "die Beruhigung", "das Ein- und Ausatmen"],
      speakingPractice: "Schauen Sie sich im Raum um. Nennen Sie mir bitte fünf Gegenstände mit blauer Farbe, die Sie hier sehen."
    }
  ]
};
