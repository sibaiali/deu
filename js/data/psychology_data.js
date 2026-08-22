// Psychologie verstehen — Sprach- und Handlungswissen für das psychiatrische Arbeitsumfeld
// Synthese aus: PsyDeutsch_Idee.pdf, 11a3b5a3-c006-4da8-b3c5-9676d5fcc49e_Psychotherapie.pdf, 85e84574-7323-429f-90b9-dce257bf5641_KJP.pdf, intus_Booklet.pdf, Elisabeth Wagner

export const PSYCHOLOGY_DATA = {
  overview: {
    title: "Psychologie & Psychiatrische Kommunikation verstehen",
    disclaimer: "Dieses Modul dient dem Kommunikations-, Sprach- und Handlungswissen im Rahmen des Freiwilligendienstes. Es dient ausdrücklich NICHT der medizinischen Eigendiagnostik oder Therapieentscheidung.",
    provenance: "AUS_QUELLE"
  },

  concepts: [
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
      source: "PsyDeutsch_Idee.pdf (S. 20-22)",
      explanationGerman: "Eine strukturierte sensorische Achtsamkeitsübung, um Personen bei Dissoziation oder Flashbacks durch Aktivierung der 5 Sinne im gegenwärtigen Moment zu verankern.",
      steps: [
        "5 Dinge benennen, die man im Raum sieht (z. B. Tisch, Lampe, Uhr, Bild, Tür).",
        "4 Dinge benennen, die man körperlich spürt (z. B. Stuhllehne, Kleidung, Fußboden, Kühle des Glases).",
        "3 Geräusche benennen, die man gerade hört (z. B. Straßenlärm, Lüftung, Vogelgezwitscher).",
        "2 Dinge benennen, die man riechen kann (z. B. Seife, Tee, frische Luft).",
        "1 Sache benennen, die man schmecken kann (z. B. Minze, ein Schluck kaltes Wasser)."
      ],
      workplaceContext: "Bei akuter Dissoziation oder starkem Zittern eines Patienten.",
      speakingPractice: "Lassen Sie uns gemeinsam 5 Dinge suchen, die blau sind. Sehen Sie die Decke dort? Was sehen Sie noch?"
    },
    {
      id: "psy_attachment",
      term: "Die Bindungstypen (Bindungstheorie nach Ainsworth/Bowlby)",
      domain: "Entwicklungspsychologie",
      provenance: "AUS_QUELLE",
      source: "PsyDeutsch_Idee.pdf (S. 13-14) & Psychotherapie.pdf (S. 3-4)",
      explanationGerman: "Das Muster emotionaler Verbundenheit zwischen Kind und primärer Bezugsperson. Man unterscheidet: 1. Sichere Bindung (kann Nähe suchen und sich beruhigen), 2. Unsicher-vermeidende Bindung (unterdrückt Hilfebedürfnis, wirkt scheinbar unabhängig), 3. Unsicher-ambivalente Bindung (übermäßige Verunsicherung, schwer beruhigbar), 4. Desorganisierte Bindung (widersprüchliches Verhalten, Erstarren).",
      workplaceContext: "Muster zeigen sich bei erwachsenen Patienten in der Beziehungsgestaltung zum Pflegeteam (z. B. extremes Klammern oder abrupter Rückzug).",
      whatToDo: ["Verlässlichkeit, Berechenbarkeit und Transparenz leben.", "Absprachen absolut pünktlich einhalten."],
      whatToAvoid: ["Persönliche Kränkung bei ablehnendem Patientenverhalten."],
      relevantVocabulary: ["die Bezugsperson", "das Bindungsmuster", "die Feinfühligkeit", "die Verlässlichkeit", "die Berechenbarkeit"]
    },
    {
      id: "psy_parentification",
      term: "Die Parentifizierung",
      domain: "Familienpsychologie",
      provenance: "AUS_QUELLE",
      source: "PsyKurs_GK.pdf (S. 9) & PsyDeutsch_Idee.pdf (S. 15)",
      explanationGerman: "Ein Rollenumkehr-Prozess, bei dem ein Kind emotionale oder praktische Verantwortung für seine psychisch erkrankten Eltern übernimmt. Unterschieden wird instrumentelle Parentifizierung (Kochen, Haushalt, Geschwister versorgen) und emotionale Parentifizierung (Tröster, Partnerersatz, Konfliktschlichter).",
      workplaceContext: "Besonders relevant bei Angehörigenbesuchen und in der Kinder- und Jugendpsychiatrie (KJP).",
      whatToDo: ["Das Verantwortungsgefühl des Kindes anerkennen, aber altersgerechte Entlastung ermöglichen.", "Klare Grenzen zwischen Erwachsenen- und Kinderaufgaben kommunizieren."],
      whatToAvoid: ["Dem Kind zusätzliche Verantwortung für den Genesungsprozess der Eltern aufbürden."],
      relevantVocabulary: ["die Rollenumkehr", "die Überverantwortung", "der Loyalitätskonflikt", "die emotionale Überforderung"]
    },
    {
      id: "psy_active_listening",
      term: "Das Aktive Zuhören & Beziehungslernen",
      domain: "Kommunikation",
      provenance: "AUS_QUELLE",
      source: "intus_Booklet.pdf (S. 3-11)",
      explanationGerman: "Empathische Gesprächsführung, bei der man dem Gegenüber ungeteilte Aufmerksamkeit schenkt, ohne zu unterbrechen, ohne vorschnelle Ratschläge zu geben und durch Paraphrasieren ('Habe ich Sie richtig verstanden, dass...') die Gefühle des anderen spiegelt.",
      workplaceContext: "Wenn ein Patient Redebedarf hat oder seine Sorgen äußern möchte.",
      whatToDo: [
        "Blickkontakt halten und offene Körperhaltung einnehmen.",
        "Kurze Pausen und Stille aushalten können.",
        "Gefühle anerkennen ('Das klingt wirklich sehr anstrengend für Sie')."
      ],
      whatToAvoid: [
        "Vorschnelle Lösungen anbieten ('Kopf hoch, das wird schon wieder').",
        "Eigene private Geschichten vergleichen ('Bei mir war das auch mal so...')."
      ],
      relevantVocabulary: ["das Paraphrasieren", "der Potenzialblick", "die Resonanz", "die Wertschätzung", "die Validierung"],
      speakingPractice: "Wenn ich Sie richtig verstehe, fühlen Sie sich heute besonders müde und kraftlos. Möchten Sie sich einen Moment ausruhen?"
    },
    {
      id: "psy_deescalation",
      term: "Die Verbale Deeskalation",
      domain: "Sicherheit & Krisenintervention",
      provenance: "AUS_QUELLE",
      source: "Elisabeth Wagner & starthilfe_krankenhausalltag.pdf (S. 34, 46)",
      explanationGerman: "Gezielte deeskalierende Gesprächstechniken, um bei aufkommender Wut, Aggression oder Verzweiflung eines Patienten die emotionale Anspannung stufenweise abzubauen, ohne Machtkämpfe einzugehen.",
      workplaceContext: "Patient schimpft lautstark im Stationsflur über das Essen, die Ärzte oder die Stationsregeln.",
      whatToDo: [
        "Stimme bewusst leiser und langsamer stellen (Pacing).",
        "Seitlich zum Patienten stehen (nicht frontal konfrontativ).",
        "Anliegen ernst nehmen, ohne Regelverstöße zu erlauben ('Ich höre Ihren Ärger. Lassen Sie uns in Ruhe darüber sprechen')."
      ],
      whatToAvoid: [
        "Lauter werden als der Patient.",
        "Sarkastisch oder belehrend antworten.",
        "Den Patienten in eine Ecke drängen."
      ],
      relevantVocabulary: ["die Frustrationstoleranz", "die Reizbarkeit", "die Deeskalation", "der Fluchtweg", "das Distanzgebot"],
      speakingPractice: "Herr Wagner, ich höre, wie wütend Sie gerade sind. Ich möchte Ihnen gerne zuhören. Bitte sprechen Sie mit mir in normaler Lautstärke, damit wir eine Lösung finden können."
    }
  ]
};
