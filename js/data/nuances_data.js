// DEU PLATFORM — Nuancen- & Synonym-Unterscheider ("Wann benutze ich welches Wort?")
// Präzise Differenzierung ähnlicher Wörter für BFD, Klinik, Alltag & B2/C1 Kommunikation

export const NUANCES_DATA = [
  {
    id: "nuance_beenden_absagen",
    topic: "Beenden, Stornieren & Verlassen",
    question: "Was ist der Unterschied zwischen absagen, ablehnen, abbrechen, aufgeben und verlassen?",
    category: "Verben mit Präfix (ab-)",
    level: "B1+ → B2",
    summary: "Man sagt einen Termin ab, lehnt ein Angebot ab, bricht eine laufende Handlung ab, gibt ein Ziel auf und verlässt einen Raum oder eine Person.",
    words: [
      {
        word: "absagen",
        grammar: "sagt ab, sagte ab, hat abgesagt",
        meaning: "Einen geplanten, vereinbarten Termin, Dienst oder ein Treffen vor Beginn stornieren.",
        whenToUse: "Wenn ein Ereignis in der Zukunft lag, aber nicht stattfinden wird.",
        whereToUse: "Dienstplan, Arzttermin, Vorstellungsgespräch, Seminar.",
        collocations: ["einen Termin absagen", "eine Schicht absagen", "kurzfristig absagen"],
        example: "Ich muss den Zahnarzttermin leider absagen, da ich im Spätdienst eingeteilt bin.",
        dontSay: "❌ 'Ich muss die Operation abbrechen.' (wenn sie noch gar nicht begonnen hat)",
        correctSay: "✓ 'Ich muss die Operation absagen.'"
      },
      {
        word: "ablehnen",
        grammar: "lehnt ab, lehnte ab, hat abgelehnt",
        meaning: "Zu einem Angebot, einer Bitte oder einer vorgeschlagenen Behandlung 'Nein' sagen.",
        whenToUse: "Wenn jemand einem etwas anbietet oder verlangt und man nicht zustimmt.",
        whereToUse: "Patientenrechte, Visite, Anträge, Behörden.",
        collocations: ["eine Behandlung ablehnen", "ein Angebot ablehnen", "einen Antrag ablehnen"],
        example: "Der Patient lehnt die Einnahme von Schlafmitteln entschieden ab.",
        dontSay: "❌ 'Der Patient hat den Termin abgelehnt.' (wenn er ihn absagen wollte)",
        correctSay: "✓ 'Der Patient hat den Termin abgesagt.'"
      },
      {
        word: "abbrechen",
        grammar: "bricht ab, brach ab, hat abgebrochen",
        meaning: "Einen bereits laufenden Prozess, eine Untersuchung oder ein Gespräch vorzeitig stoppen.",
        whenToUse: "Wenn etwas schon begonnen hat, aber vor dem regulären Ende beendet werden muss.",
        whereToUse: "Untersuchungen, Telefonate, Studium, Notfälle.",
        collocations: ["die Untersuchung abbrechen", "das Gespräch abbrechen", "die Ausbildung abbrechen"],
        example: "Wegen starker Übelkeit musste die Ärztin die Magenspiegelung vorzeitig abbrechen.",
        dontSay: "❌ 'Ich habe den Termin abgebrochen.' (vor dem Termin)",
        correctSay: "✓ 'Ich habe den Termin abgesagt.'"
      },
      {
        word: "aufgeben",
        grammar: "gibt auf, gab auf, hat aufgegeben",
        meaning: "Die Hoffnung oder Bemühung bei einem schwierigen Vorhaben einstellen; auch Post/Aufgaben abgeben.",
        whenToUse: "Wenn man kapitulierte oder ein Vorhaben resigniert beendet.",
        whereToUse: "Psychologie, Reha, Alltag.",
        collocations: ["die Hoffnung nicht aufgeben", "einen Plan aufgeben", "ein Paket aufgeben"],
        example: "Trotz der Rückschläge in der Physiotherapie darf man den Mut nicht aufgeben.",
        dontSay: "❌ 'Ich habe das Patientenzimmer aufgegeben.'",
        correctSay: "✓ 'Ich habe das Patientenzimmer verlassen.'"
      },
      {
        word: "verlassen",
        grammar: "verlässt, verließ, hat verlassen",
        meaning: "Aus einem Raum/Gebäude herausgehen oder sich von einer Person trennen.",
        whenToUse: "Räumliche Fortbewegung weg von einem Ort oder partnerschaftliche Trennung.",
        whereToUse: "Station, Patientenzimmer, Klinikgelände.",
        collocations: ["das Zimmer verlassen", "die Station verlassen", "sich verlassen auf (+ Akk)"],
        example: "Bitte desinfizieren Sie Ihre Hände, bevor Sie das Isolierzimmer verlassen.",
        dontSay: "❌ 'Ich habe das Zimmer abgesagt.'",
        correctSay: "✓ 'Ich habe das Zimmer verlassen.'"
      }
    ],
    quiz: {
      sentence: "Wegen akuter Kreislaufprobleme während der Visite mussten wir den Belastungstest sofort ______.",
      options: ["absagen", "abbrechen", "ablehnen", "verlassen"],
      correct: "abbrechen",
      explanation: "Der Test lief bereits und musste vorzeitig gestoppt werden -> 'abbrechen'."
    }
  },
  {
    id: "nuance_fragen_erkundigen",
    topic: "Fragen, Nachfragen & Erkundigen",
    question: "Wann benutze ich fragen, nachfragen, hinterfragen, sich erkundigen und ausfragen?",
    category: "Kommunikation & Sicherheit",
    level: "B1+ → B2/C1",
    summary: "Fragen ist die Grundform. Nachfragen klärt Unklarheiten. Hinterfragen prüft kritisch den Sinn. Sich erkundigen ist formell. Ausfragen ist neugierig bis inquisitorisch.",
    words: [
      {
        word: "fragen",
        grammar: "fragt, fragte, hat gefragt (+ Akk)",
        meaning: "Alltägliche Informationsbeschaffung durch eine Frage.",
        whenToUse: "Allgemein, neutral in jeder Situation.",
        whereToUse: "Überall im Alltag und Beruf.",
        collocations: ["nach dem Weg fragen", "den Arzt fragen", "um Erlaubnis fragen"],
        example: "Ich frage die Stationsleitung, wo die neuen Einmalhandschuhe gelagert sind.",
        dontSay: "❌ 'Ich hinterfrage nach der Toilette.'",
        correctSay: "✓ 'Ich frage nach der Toilette.'"
      },
      {
        word: "nachfragen",
        grammar: "fragt nach, fragte nach, hat nachgefragt (bei / nach)",
        meaning: "Noch einmal gezielt nachhaken, wenn etwas unklar, unvollständig oder unverständlich war.",
        whenToUse: "Zur Sicherung von Patientensicherheit und Vermeidung von Missverständnissen.",
        whereToUse: "Dienstübergabe, Arztanordnungen, Medikation.",
        collocations: ["beim Arzt nachfragen", "zur Sicherheit nachfragen", "höflich nachfragen"],
        example: "Weil die Dosierung unleserlich handschriftlich notiert war, habe ich sofort beim Dienstarzt nachgefragt.",
        dontSay: "❌ 'Ich habe die Dosierung ausgefragt.'",
        correctSay: "✓ 'Ich habe bezüglich der Dosierung nachgefragt.'"
      },
      {
        word: "hinterfragen",
        grammar: "hinterfragt, hinterfragte, hat hinterfragt (C1 Register)",
        meaning: "Die Gründe, den Sinn oder die Richtigkeit einer Aussage kritisch und tiefgehend reflektieren.",
        whenToUse: "Bei ethischen Fragen, wissenschaftlichen Studien oder Gewohnheiten.",
        whereToUse: "Psychologie, Teambesprechungen, Supervision.",
        collocations: ["Routinen kritisch hinterfragen", "Motive hinterfragen", "Sinn hinterfragen"],
        example: "In der Traumapädagogik hinterfragen wir, welche unbewusste Funktion ein auffälliges Verhalten für das Kind hat.",
        dontSay: "❌ 'Können Sie mir bitte hinterfragen, wie spät es ist?'",
        correctSay: "✓ 'Können Sie mir bitte sagen, wie spät es ist?'"
      },
      {
        word: "sich erkundigen (nach / über)",
        grammar: "erkundigt sich, erkundigte sich, hat sich erkundigt",
        meaning: "Formell und höflich Informationen über einen Zustand oder Ablauf einholen.",
        whenToUse: "Höfliche, professionelle Gesprächsführung mit Angehörigen oder Behörden.",
        whereToUse: "Telefonate, Pforte, Sozialdienst, Rezeption.",
        collocations: ["sich nach dem Befinden erkundigen", "sich nach den Besuchszeiten erkundigen"],
        example: "Die Angehörigen riefen auf Station an, um sich nach dem Gesundheitszustand des Vaters zu erkundigen.",
        dontSay: "❌ 'Ich erkundige dich.'",
        correctSay: "✓ 'Ich erkundige mich bei Ihnen.'"
      },
      {
        word: "ausfragen",
        grammar: "fragt aus, fragte aus, hat ausgefragt",
        meaning: "Jemanden beharrlich, neugierig oder inquisitorisch über persönliche Details befragen.",
        whenToUse: "Meist negativ / distanzlos konnotiert; im Patientenkontakt zu vermeiden!",
        whereToUse: "Psychologie (Grenzverletzung), Alltag.",
        collocations: ["jemanden neugierig ausfragen", "sich ausgefragt fühlen"],
        example: "Freiwillige sollten Patienten empathisch zuhören, sie aber keinesfalls über ihre Traumata ausfragen.",
        dontSay: "❌ 'Ich frage den Arzt professionell aus.'",
        correctSay: "✓ 'Ich frage beim Arzt nach.'"
      }
    ],
    quiz: {
      sentence: "Wenn du dir bei der Gabe von Tropfen unsicher bist, solltest du unbedingt noch einmal bei der Pflegefachkraft ______.",
      options: ["ausfragen", "nachfragen", "hinterfragen", "verlassen"],
      correct: "nachfragen",
      explanation: "Bei Unsicherheit nochmals kontrollierend nachfragen -> 'nachfragen'."
    }
  },
  {
    id: "nuance_untersuchen_beobachten_pruefen",
    topic: "Untersuchen, Beobachten, Überprüfen & Überwachen",
    question: "Wie unterscheiden sich untersuchen, beobachten, überprüfen und überwachen in der Klinik?",
    category: "Klinik & Pflege",
    level: "B2",
    summary: "Untersuchen ist aktiv-körperlich (Stethoskop, Labor). Beobachten ist wertfreie Wahrnehmung. Überprüfen ist der Abgleich mit Regeln/Werten. Überwachen ist kontinuierliches Monitoring.",
    words: [
      {
        word: "untersuchen",
        grammar: "untersucht, untersuchte, hat untersucht",
        meaning: "Einen Körperteil oder Proben aktiv diagnostisch inspizieren, abtasten oder abhorchen.",
        whenToUse: "Ärztliche Diagnostik (Abtasten des Bauchs, Blutuntersuchung).",
        whereToUse: "Behandlungszimmer, Notaufnahme, Labor.",
        collocations: ["den Bauch untersuchen", "das Blut im Labor untersuchen", "körperlich untersuchen"],
        example: "Die Ärztin untersucht die schmerzende Leiste des Patienten durch Palpation.",
        dontSay: "❌ 'Ich überwache den Bauch mit den Händen.'",
        correctSay: "✓ 'Der Arzt untersucht den Bauch.'"
      },
      {
        word: "beobachten",
        grammar: "beobachtet, beobachtete, hat beobachtet",
        meaning: "Verhalten, Mimik, Sprache und Reaktionen eines Menschen über Zeit aufmerksam wahrnehmen.",
        whenToUse: "Psychiatrische und pflegerische Verhaltensbeobachtung ohne Urteil.",
        whereToUse: "Station 2 (Psychiatrie), Pflegebericht, Übergabe.",
        collocations: ["das Verhalten beobachten", "genau beobachten", "Auffälligkeiten beobachten"],
        example: "Im Frühdienst beobachten wir, ob der depressive Patient eigenständig zum Frühstück kommt.",
        dontSay: "❌ 'Ich untersuche, wie der Patient heute gelaunt ist.'",
        correctSay: "✓ 'Ich beobachte die Stimmung des Patienten.'"
      },
      {
        word: "überprüfen",
        grammar: "überprüft, überprüfte, hat überprüft",
        meaning: "Einen konkreten Wert, Namen oder eine Regel mit der Vorgabe abgleichen (Soll vs. Ist).",
        whenToUse: "Sicherheitskontrollen (5-R-Regel, Identitätsprüfung, Vollständigkeit).",
        whereToUse: "Medikamentengabe, Brandschutz, Hygiene.",
        collocations: ["die Vitalwerte überprüfen", "die Identität überprüfen", "die 5-R-Regel überprüfen"],
        example: "Vor dem Austeilen der Tabletten überprüft die Pflegekraft Name und Geburtsdatum des Patienten.",
        dontSay: "❌ 'Wir beobachten das Geburtsdatum.'",
        correctSay: "✓ 'Wir überprüfen das Geburtsdatum.'"
      },
      {
        word: "überwachen",
        grammar: "überwacht, überwachte, hat überwacht",
        meaning: "Den kontinuierlichen Zustand (meist apparativ über Monitore) lückenlos kontrollieren.",
        whenToUse: "Intensivstation, Überwachungszimmer, nach Narkosen.",
        whereToUse: "Monitorstation, Aufwachraum, EKG.",
        collocations: ["die Sauerstoffsättigung überwachen", "engmaschig überwachen", "den Patienten am Monitor überwachen"],
        example: "Nach dem epileptischen Anfall wird die Patientin für 24 Stunden am Monitor überwacht.",
        dontSay: "❌ 'Ich untersuche den Patienten die ganze Nacht am Bildschirm.'",
        correctSay: "✓ 'Der Patient wird am Monitor überwacht.'"
      }
    ],
    quiz: {
      sentence: "Vor der Bluttransfusion muss die Pflegefachkraft die Patientendaten doppelt ______.",
      options: ["überprüfen", "beobachten", "ausfragen", "ablehnen"],
      correct: "überprüfen",
      explanation: "Datenabgleich zur Sicherheit -> 'überprüfen'."
    }
  },
  {
    id: "nuance_uebernehmen_ueberweisen_uebertragen",
    topic: "Übernehmen, Überweisen & Übertragen",
    question: "Was bedeuten die Präfix-Verben übernehmen, überweisen und übertragen genau?",
    category: "Verben mit Präfix (über-)",
    level: "B2",
    summary: "Übernehmen = Aufgabe/Verantwortung annehmen. Überweisen = Geld transferieren oder Patient weiterleiten. Übertragen = Keime verbreiten oder Gefühle projizieren.",
    words: [
      {
        word: "übernehmen",
        grammar: "übernimmt, übernahm, hat übernommen",
        meaning: "Eine Schicht, Aufgabe oder Verantwortung von jemandem annehmen und fortführen.",
        whenToUse: "Arbeitsplatz, Schichtwechsel, Aufgabenverteilung.",
        whereToUse: "Station, Teamübergabe, BFD.",
        collocations: ["die Schicht übernehmen", "Verantwortung übernehmen", "eine Aufgabe übernehmen"],
        example: "Ich übernehme gerne die Begleitung von Herrn Müller zur Ergotherapie.",
        dontSay: "❌ 'Ich übertrage die Schicht von Maria.' (wenn man sie selbst macht)",
        correctSay: "✓ 'Ich übernehme die Schicht von Maria.'"
      },
      {
        word: "überweisen",
        grammar: "überweist, überwies, hat überwiesen",
        meaning: "Einen Patienten zur Weiterbehandlung an einen Facharzt senden ODER Geld per Bankkonto senden.",
        whenToUse: "Facharzt-Überweisung oder Miete/Taschengeld überweisen.",
        whereToUse: "Arztpraxis, Klinik, Bankwesen.",
        collocations: ["zum Facharzt überweisen", "in die Chirurgie überweisen", "Geld überweisen"],
        example: "Der Hausarzt überweist die Patientin zur weiteren Diagnostik an das Universitätsklinikum.",
        dontSay: "❌ 'Ich übernehme das Geld auf dein Konto.'",
        correctSay: "✓ 'Ich überweise das Geld auf dein Konto.'"
      },
      {
        word: "übertragen",
        grammar: "überträgt, übertrug, hat übertragen",
        meaning: "Krankheitserreger weitergeben ODER unbewusste Gefühle auf jemanden projizieren (Übertragung).",
        whenToUse: "Hygiene (Infektionsketten) oder Psychologie (Psychoanalyse).",
        whereToUse: "Hygiene, Psychotherapie, Team.",
        collocations: ["Krankheiten übertragen", "Keime übertragen", "Gefühle auf die Bezugsperson übertragen"],
        example: "Mangelnde Händedesinfektion kann gefährliche Krankenhauskeime von Patient zu Patient übertragen.",
        dontSay: "❌ 'Er hat mir 50 Euro übertragen.'",
        correctSay: "✓ 'Er hat mir 50 Euro überwiesen.'"
      }
    ],
    quiz: {
      sentence: "Durch das Tragen von Einmalhandschuhen verhindern wir, dass Erreger auf andere Patienten ______ werden.",
      options: ["übertragen", "überwiesen", "übernommen", "unterbrochen"],
      correct: "übertragen",
      explanation: "Infektionskette / Keime weitergeben -> 'übertragen'."
    }
  },
  {
    id: "nuance_erklaeren_erlaeutern_begruenden",
    topic: "Erklären, Erläutern & Begründen",
    question: "Wann benutze ich erklären, erläutern, begründen und anleiten?",
    category: "Kommunikation & Didaktik",
    level: "B2 → C1",
    summary: "Erklären = verständlich machen. Erläutern = detailliert ausführen (C1). Begründen = Argumente & Ursachen liefern. Anleiten = praktische Schritte vormachen.",
    words: [
      {
        word: "erklären",
        grammar: "erklärt, erklärte, hat erklärt",
        meaning: "Einen Sachverhalt oder Ablauf für jemanden verständlich machen.",
        whenToUse: "Allgemeine Erklärungen im Alltag und bei der Patientenaufnahme.",
        whereToUse: "Alltag, Stationsaufnahme, Pflege.",
        collocations: ["den Ablauf erklären", "einen Begriff erklären", "einfach erklären"],
        example: "Ich erkläre dem neuen Patienten, wo sich die Klingel und das Bad befinden.",
        dontSay: "❌ 'Ich begründe dem Patienten den Weg zum Speisesaal.'",
        correctSay: "✓ 'Ich erkläre dem Patienten den Weg zum Speisesaal.'"
      },
      {
        word: "erläutern",
        grammar: "erläutert, erläuterte, hat erläutert (Gehobenes B2/C1 Register)",
        meaning: "Einen komplexen Zusammenhang ausführlich, differenziert und mit Beispielen darlegen.",
        whenToUse: "Fachgespräche, Arztbriefe, Fallpräsentationen, Prüfungen.",
        whereToUse: "Visite, Fortbildung, Übergabebericht.",
        collocations: ["das Konzept näher erläutern", "die Diagnose ausführlich erläutern"],
        example: "Der Chefarzt erläuterte dem Team die differentialdiagnostischen Überlegungen.",
        dontSay: "❌ 'Können Sie mir kurz erläutern, wo der Löffel liegt?'",
        correctSay: "✓ 'Können Sie mir kurz sagen/zeigen, wo der Löffel liegt?'"
      },
      {
        word: "begründen",
        grammar: "begründet, begründete, hat begründet",
        meaning: "Die logischen Ursachen, Motive oder rechtlichen Argumente für eine Entscheidung anführen.",
        whenToUse: "Warum hat man so gehandelt? Warum wird ein Medikament abgesetzt?",
        whereToUse: "Dokumentation, Anträge, juristische Absicherung.",
        collocations: ["eine Entscheidung begründen", "fachlich begründen", "den Verdacht begründen"],
        example: "Der Arzt muss in der Patientenakte genau begründen, warum eine Fixierung angeordnet wurde.",
        dontSay: "❌ 'Ich erkläre die Fixierung mit Argumenten.' (formell unpräzise)",
        correctSay: "✓ 'Ich begründe die Fixierung fachlich.'"
      },
      {
        word: "anleiten",
        grammar: "leitet an, leitete an, hat angeleitet",
        meaning: "Jemanden praktisch instruieren und Schritt für Schritt begleiten, damit er es selbst lernt.",
        whenToUse: "Einarbeitung von neuen Mitarbeitern oder Training von Patienten (Aktivierende Pflege).",
        whereToUse: "Pflege, Ergotherapie, Mentoring.",
        collocations: ["zur Selbstständigkeit anleiten", "Atemübungen anleiten", "einen BFDler anleiten"],
        example: "Die Praxisanleiterin leitet mich bei der Durchführung der Blutzuckermessung an.",
        dontSay: "❌ 'Ich begründe den BFDler beim Blutdruckmessen.'",
        correctSay: "✓ 'Ich leite den BFDler beim Blutdruckmessen an.'"
      }
    ],
    quiz: {
      sentence: "In der Prüfung müssen Sie Ihre Entscheidung für die Pflegemaßnahme fachlich ______.",
      options: ["begründen", "anleiten", "ausfragen", "übertragen"],
      correct: "begründen",
      explanation: "Logische Argumente und Ursachen liefern -> 'begründen'."
    }
  },
  {
    id: "nuance_schmerz_beschwerde_leiden",
    topic: "Schmerz, Beschwerde, Leiden & Einschränkung",
    question: "Was ist der genaue Unterschied zwischen Schmerz, Beschwerde, Leiden und Einschränkung?",
    category: "Klinik & Symptome",
    level: "B2",
    summary: "Schmerz = akute sensorische Empfindung (VAS). Beschwerde = diffuses Unwohlsein oder Reklamation. Leiden = chronische schwere Belastung. Einschränkung = Verlust von Fähigkeiten.",
    words: [
      {
        word: "der Schmerz (-en)",
        meaning: "Akute, unangenehme körperliche Sinnesempfindung (z. B. stechend, brennend, dumpf).",
        whenToUse: "Schmerzmessung (Skala 1–10), Wundschmerz, Kolik.",
        whereToUse: "Kurvenblatt, Notfall, Bedarfsmedikation.",
        collocations: ["stechende Schmerzen", "die Schmerzskala (VAS)", "Schmerzen lindern"],
        example: "Auf einer Schmerzskala von 0 bis 10 stuft der Patient seinen Bauchschmerz bei 7 ein."
      },
      {
        word: "die Beschwerde (-n)",
        meaning: "Diffuses Unwohlsein (Übelkeit, Schwindel, Völlegefühl) ODER formelle Reklamation/Klage.",
        whenToUse: "Anamneseerhebung ('Welche Beschwerden führen Sie zu uns?') oder Kritik am Essen/Zimmer.",
        whereToUse: "Aufnahmegespräch, Beschwerdemanagement.",
        collocations: ["über Beschwerden klagen", "körperliche Beschwerden", "das Beschwerdemanagement"],
        example: "Frau Meyer schildert seit drei Tagen diffuse Magen-Darm-Beschwerden."
      },
      {
        word: "das Leiden (-)",
        meaning: "Länger andauernder, quälender Krankheitszustand oder seelische Not.",
        whenToUse: "Chronische Erkrankungen, Palliativmedizin, Psychiatrie.",
        whereToUse: "Psychiatrie, Ethik, Epikrise.",
        collocations: ["ein chronisches Leiden", "das seelische Leiden mildern", "unter einer Krankheit leiden"],
        example: "Die Psychotherapie zielt darauf ab, das chronische seelische Leiden des Patienten zu verringern."
      },
      {
        word: "die Einschränkung (-en)",
        meaning: "Ein messbarer Verlust oder eine Minderung von alltäglichen Fähigkeiten und Mobilität.",
        whenToUse: "Pflegegrad-Ermittlung, Physiotherapie, Reha.",
        whereToUse: "Pflegeplanung, Ergotherapie, Sozialdienst.",
        collocations: ["körperliche Einschränkungen", "Einschränkung der Mobilität", "kognitive Einschränkungen"],
        example: "Trotz seiner motorischen Einschränkung kann der Patient selbstständig essen."
      }
    ],
    quiz: {
      sentence: "Herr Weber hat keine akuten Schmerzen, klagt aber über ständige Übelkeit und Schwindel — das sind typische ______.",
      options: ["Beschwerden", "Schmerzen", "Einschränkungen", "Absagen"],
      correct: "Beschwerden",
      explanation: "Diffuses Unwohlsein wie Übelkeit/Schwindel -> 'Beschwerden'."
    }
  }
];
