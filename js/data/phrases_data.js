// "Was sage ich?" & "Ich verstehe nicht!" Phrasentrainer
// Stufenförmige Transformationen: Basic (B1) -> Natürlich -> Professionell (B2) -> C1-Register

export const PHRASES_DATA = {
  title: "Praktischer Phrasen-Transformator",
  provenance: "AUS_QUELLE",
  categories: [
    {
      id: "cat_nachfragen",
      name: "Höflich nachfragen & Verstehen sichern",
      phrases: [
        {
          id: "phr_001",
          situation: "Man hat eine Anweisung der Pflegekraft akustisch oder inhaltlich nicht verstanden.",
          basic: "Ich verstehe das nicht.",
          natural: "Ich habe das gerade nicht ganz verstanden.",
          professionalB2: "Könnten Sie mir bitte noch einmal erklären, wie ich dabei genau vorgehen soll?",
          c1: "Könnten Sie den Ablauf bitte noch einmal kurz erläutern, damit ich sicherstellen kann, dass ich die Aufgabe vorschriftsmäßig ausführe?",
          whyExplanation: "Die B2/C1-Formulierungen zeigen professionelle Gewissenhaftigkeit und Verantwortungsübernahme für die korrekte Ausführung."
        },
        {
          id: "phr_002",
          situation: "Jemand spricht extrem schnell oder nuschelt.",
          basic: "Bitte langsamer sprechen.",
          natural: "Könnten Sie bitte ein bisschen langsamer sprechen?",
          professionalB2: "Würden Sie das bitte etwas langsamer wiederholen? Ich möchte sichergehen, dass ich alle Details richtig erfasse.",
          c1: "Wären Sie so freundlich, das Tempo kurz zu drosseln, damit ich Ihre Instruktionen lückenlos nachvollziehen kann?"
        },
        {
          id: "phr_003",
          situation: "Man möchte rückversichern, ob man eine Anweisung richtig verstanden hat.",
          basic: "Habe ich das richtig gemacht?",
          natural: "Habe ich Sie richtig verstanden, dass ich zuerst die Betten machen soll?",
          professionalB2: "Darf ich mich kurz vergewissern: Die Priorität liegt heute zunächst auf der Materialauffüllung, richtig?",
          c1: "Um Missverständnisse auszuschließen: Verstehe ich Ihre Anweisung dahingehend richtig, dass die Patientenbegleitung der Dokumentation vorzuziehen ist?"
        }
      ]
    },
    {
      id: "cat_grenzen_melden",
      name: "Grenzen setzen & Sachlich melden",
      phrases: [
        {
          id: "phr_004",
          situation: "Ein Patient bittet um eine Tablette oder ein Beruhigungsmittel.",
          basic: "Darf ich nicht.",
          natural: "Das darf ich als Freiwilliger leider nicht. Ich sage der Schwester Bescheid.",
          professionalB2: "Herr Becker, die Vergabe von Medikamenten obliegt ausschließlich dem examinierten Pflegepersonal. Ich informiere unverzüglich Ihre zuständige Pflegefachkraft.",
          c1: "Herr Becker, aus rechtlichen und sicherheitsrelevanten Gründen bin ich als Freiwilligendienstleistender nicht zur Medikamentenausgabe befugt. Ich werde augenblicklich das examinierte Fachpersonal verständigen, um Ihr Anliegen weiterzuleiten."
        },
        {
          id: "phr_005",
          situation: "Ein Patient zeigt auffälliges oder beunruhigendes Verhalten.",
          basic: "Herr Schmidt ist komisch.",
          natural: "Mir ist aufgefallen, dass Herr Schmidt sehr traurig wirkt.",
          professionalB2: "Ich möchte kurz eine Beobachtung melden: Herr Schmidt zieht sich heute auffallend zurück und hat die Nahrungsaufnahme verweigert.",
          c1: "Zur pflegerischen Dokumentation möchte ich zurückmelden, dass bei Herrn Schmidt ein ausgeprägtes Meidungsverhalten sowie eine verringerte Interaktionsbereitschaft zu beobachten sind."
        },
        {
          id: "phr_006",
          situation: "Man wird gebeten, eine Aufgabe zu übernehmen, für die man keine Zeit hat.",
          basic: "Ich kann jetzt nicht.",
          natural: "Ich muss erst das Zimmer fertig machen.",
          professionalB2: "Ich bin aktuell noch mit dem Beziehen der Betten auf Zimmer 4 beschäftigt. Soll ich diese Aufgabe unterbrechen oder hat das Vorrang?",
          c1: "Gegenwärtig bindet mich die Materialversorgung auf Station. Sofern die neue Maßnahme prioritär zu behandeln ist, disponiere ich meine Aufgaben gerne um."
        }
      ]
    },
    {
      id: "cat_fehler_feedback",
      name: "Fehler eingestehen & Feedback erbitten",
      phrases: [
        {
          id: "phr_007",
          situation: "Man hat ein Glas umgestoßen oder einen Arbeitsauftrag vergessen.",
          basic: "Tut mir leid.",
          natural: "Entschuldigung, das war mein Fehler, ich mache das sofort sauber.",
          professionalB2: "Bitte entschuldigen Sie das Missgeschick. Ich bringe das unverzüglich in Ordnung und achte in Zukunft verstärkt darauf.",
          c1: "Bedauerlicherweise ist mir hierbei ein Versäumnis unterlaufen. Ich habe bereits die notwendigen Korrekturmaßnahmen eingeleitet, um den ordnungsgemäßen Zustand wiederherzustellen."
        },
        {
          id: "phr_008",
          situation: "Man möchte am Ende der ersten Woche Rückmeldung erhalten.",
          basic: "Wie war ich?",
          natural: "Können Sie mir sagen, wie ich meine Arbeit mache?",
          professionalB2: "Hätten Sie im Laufe des Tages kurz Zeit für eine kurze Rückmeldung zu meiner Arbeitsweise in der ersten Woche?",
          c1: "Ich wäre Ihnen sehr dankbar für ein kurzes orientierendes Feedback bezüglich meiner bisherigen Stationsintegration und möglicher Entwicklungspotenziale."
        }
      ]
    },
    {
      id: "cat_zeit_gewinnen",
      name: "Zeit gewinnen & Deeskalieren",
      phrases: [
        {
          id: "phr_009",
          situation: "Ein Patient drängt auf eine sofortige Entscheidung oder Antwort.",
          basic: "Warten Sie kurz.",
          natural: "Geben Sie mir bitte eine Minute, ich schaue nach.",
          professionalB2: "Ich verstehe, dass Ihnen das wichtig ist. Bitte geben Sie mir einen kurzen Moment, damit ich mich bei der Schichtleitung für Sie erkundigen kann.",
          c1: "Ich nehme Ihr dringliches Anliegen vollkommen wahr. Um Ihnen eine fundierte Auskunft erteilen zu können, halte ich umgehend Rücksprache mit der verantwortlichen Bezugspflegekraft."
        }
      ]
    }
  ],

  emergencyUnderstandingTrainer: {
    title: "Ich verstehe nicht! — Schnelles & undeutliches Deutsch meistern",
    tips: [
      "1. Ruhe bewahren: Es ist völlig normal, dass Muttersprachler im Klinikalltag schnell und mit Dialekt/Abkürzungen sprechen.",
      "2. Signalwort-Technik: Konzentriere dich auf Nomen und Verben (z. B. 'Zimmer 4', 'Wäschesack', 'bringen').",
      "3. Sofortiges Nachfragen signalisiert Kompetenz, kein Versagen.",
      "4. Paraphrasieren ('Du meinst also...') zwingt das Gegenüber zur Verlangsamung."
    ],
    scenarios: [
      {
        spokenFast: "Ali, bring ma eben fix die Kurve von der Zwo rüber ins Arztzimmer zum Doc!",
        clarificationB2: "Habe ich richtig verstanden: Die Patientenkurve aus Zimmer 2 soll zu Dr. Weber ins Arztzimmer gebracht werden?",
        standardGerman: "Ali, bringe bitte einmal schnell das Kurvenblatt aus Zimmer 2 hinüber in das Arztzimmer zum Arzt."
      },
      {
        spokenFast: "Mensch, der 10er dekompensiert grad völlig, hol ma sofort die Bedarfsmedikation aus'm Giftschrank!",
        clarificationB2: "Ich verständige sofort die Schichtleitung für Zimmer 10 – ich selbst darf nicht an den Medikamentenschrank.",
        standardGerman: "Der Patient in Zimmer 10 ist in einer schweren Krise. Als BFDler alarmiere ich sofort das examinierte Pflegepersonal."
      }
    ]
  }
};
