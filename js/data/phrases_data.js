// "Was sage ich?" & "Ich verstehe nicht!" Phrasentrainer
// Stufenförmige Transformationen: Basic (B1) -> Natürlich -> Professionell (B2) -> C1-Register
// Vollständig erweitert mit allen typischen Alltags- und Stations-Redewendungen

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
          situation: "Ein Patient verlangt vertrauliche Informationen über einen Mitpatienten.",
          basic: "Das weiß ich nicht.",
          natural: "Darüber darf ich leider keine Auskunft geben.",
          professionalB2: "Aus Gründen der gesetzlichen Schweigepflicht (§ 203 StGB) und des Datenschutzes darf ich Ihnen dazu keine Auskunft erteilen.",
          c1: "Ich bitte um Verständnis, dass mir im Rahmen der ärztlichen Schweigepflicht und des Datenschutzes jegliche Auskunft über Dritte strikt untersagt ist."
        }
      ]
    },
    {
      id: "cat_redewendungen_arbeitskultur",
      name: "Arbeitskultur & Deutsche Redewendungen",
      phrases: [
        {
          id: "phr_007",
          situation: "Ein Kollege bietet das 'Du' an ('Du kannst mich übrigens duzen').",
          basic: "Okay, danke.",
          natural: "Danke, sehr gerne! Ich bin Ali.",
          professionalB2: "Vielen Dank für das Angebot, das nehme ich gerne an! Dann machen wir das so.",
          c1: "Herzlichen Dank für das entgegengebrachte Vertrauen. Das erleichtert die kollegiale Zusammenarbeit ungemein.",
          whyExplanation: "In deutschen Krankenhäusern duzen sich Pflegeteams fast immer; Vorgesetzte und Ärzte werden meist gesiezt."
        },
        {
          id: "phr_008",
          situation: "Man möchte jemandem einen guten Feierabend wünschen ('Schönen Feierabend!').",
          basic: "Tschüss bis morgen.",
          natural: "Schönen Feierabend und erhol dich gut!",
          professionalB2: "Ich wünsche allen einen angenehmen und erholsamen Feierabend! Bis morgen früh.",
          c1: "Ich verabschiede mich für heute und wünsche Ihnen einen wohlverdienten, erholsamen Feierabend."
        },
        {
          id: "phr_009",
          situation: "Jemand erklärt, wie der Ablauf auf Station funktioniert ('wie der Hase läuft').",
          basic: "Ich lerne das.",
          natural: "Ich schaue mir erst mal an, wie hier der Hase läuft.",
          professionalB2: "Ich mache mich in den ersten Tagen gründlich mit den internen Stationsabläufen und Routinen vertraut.",
          c1: "Ich nutze die Einarbeitungsphase gezielt, um die stationsspezifischen Prozesse und Gepflogenheiten minutiös zu verinnerlichen."
        },
        {
          id: "phr_010",
          situation: "Ein Kollege muss dringend vertraulich mit einem sprechen ('unter vier Augen').",
          basic: "Komm mal mit.",
          natural: "Können wir kurz unter vier Augen sprechen?",
          professionalB2: "Hätten Sie kurz einen Moment Zeit für ein vertrauliches Gespräch unter vier Augen?",
          c1: "Dürfte ich Sie um eine kurze bilaterale Rücksprache im Dienstzimmer unter Ausschluss Dritter bitten?"
        },
        {
          id: "phr_011",
          situation: "Man verspricht, das Team über wichtige Neuigkeiten zu informieren ('Bescheid geben / auf dem Laufenden halten').",
          basic: "Ich sage es euch.",
          natural: "Ich gebe euch sofort Bescheid, wenn sich etwas ändert.",
          professionalB2: "Ich halte Sie über die weiteren Entwicklungen selbstverständlich lückenlos auf dem Laufenden.",
          c1: "Sobald neue Erkenntnisse oder Laborbefunde vorliegen, werde ich das gesamte Team unverzüglich in Kenntnis setzen."
        },
        {
          id: "phr_012",
          situation: "In einer stressigen Stationssituation Ruhe bewahren ('einen kühlen Kopf bewahren').",
          basic: "Nicht stressen.",
          natural: "Keine Panik, wir bewahren jetzt erst mal einen kühlen Kopf.",
          professionalB2: "Lassen Sie uns trotz der Hektik besonnen vorgehen und die Prioritäten der Reihe nach abarbeiten.",
          c1: "In dieser Akutsituation ist es unabdingbar, Ruhe zu bewahren und ein strukturiertes, deeskalierendes Handeln zu gewährleisten."
        }
      ]
    }
  ]
};
