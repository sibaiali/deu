// "Was sage ich?" & "Ich verstehe nicht!" Phrasentrainer
// Stufenförmige Transformationen: Basic (B1) -> Natürlich -> Professionell (B2) -> C1-Register
// Vollständig integriert mit allen Phrasen, Redemitteln und Diskursmarkern aus dem Anki-Deck

export const PHRASES_DATA = {
  title: "Praktischer Phrasen- & Redemittel-Transformator",
  provenance: "AUS_QUELLE",
  categories: [
    {
      id: "cat_verstaendigung_nachfragen",
      name: "Verständigung sichern & Höflich nachfragen",
      phrases: [
        {
          id: "phr_anki_001",
          situation: "Man hat ein Wort oder eine Anweisung akustisch nicht genau verstanden.",
          basic: "Könnten Sie das bitte wiederholen?",
          natural: "Könnten Sie das bitte noch einmal wiederholen?",
          professionalB2: "Würden Sie diesen Punkt bitte noch einmal kurz wiederholen? Ich möchte sicherstellen, dass ich alles richtig erfasst habe.",
          c1: "Wären Sie so freundlich, Ihre Ausführungen dahingehend noch einmal kurz zu rekapitulieren?",
          relatedWords: ["wiederholen", "die Wiederholung", "das Nachfragen", "die Akustik"]
        },
        {
          id: "phr_anki_002",
          situation: "Man ist unsicher, ob man den Sinn einer ärztlichen oder pflegerischen Anweisung richtig verstanden hat.",
          basic: "Ich glaube, das habe ich nicht richtig verstanden.",
          natural: "Ich glaube, ich habe das vorhin nicht ganz richtig verstanden.",
          professionalB2: "Darf ich mich kurz vergewissern: Habe ich Sie richtig verstanden, dass die Vitalwerte vor dem Frühstück erhoben werden sollen?",
          c1: "Um Missverständnisse von vornherein auszuschließen: Verstehe ich Ihre Anweisung dahingehend zutreffend, dass Priorität auf der Dokumentation liegt?",
          relatedWords: ["verstehen", "das Missverständnis", "die Rückversicherung"]
        },
        {
          id: "phr_anki_003",
          situation: "Jemand spricht zu schnell für das aktuelle Sprachverständnis.",
          basic: "Könnten Sie bitte etwas langsamer sprechen?",
          natural: "Könnten Sie vielleicht ein kleines bisschen langsamer sprechen?",
          professionalB2: "Wären Sie so nett, das Sprechtempo ein wenig anzupassen, damit ich alle Details lückenlos notieren kann?",
          c1: "Ich wäre Ihnen dankbar, wenn wir das Tempo kurz drosseln könnten, um eine fehlerfreie Erfassung der Informationen zu gewährleisten.",
          relatedWords: ["langsam", "das Sprechtempo", "die Deutlichkeit"]
        },
        {
          id: "phr_anki_004",
          situation: "Man braucht einen kurzen Augenblick Zeit, um etwas zu holen oder nachzuschauen.",
          basic: "Einen Moment bitte.",
          natural: "Einen kleinen Augenblick bitte, ich bin gleich bei Ihnen.",
          professionalB2: "Dürfte ich Sie um einen kurzen Moment Geduld bitten? Ich hole sofort die passende Unterlage.",
          c1: "Ich bitte um einen kurzen Augenblick Nachsicht, während ich die relevanten Akten zur Einsichtnahme heranziehe.",
          relatedWords: ["der Moment", "die Geduld", "der Augenblick"]
        },
        {
          id: "phr_anki_005",
          situation: "Man möchte rückfragen, ob die eigene Auffassung korrekt ist.",
          basic: "Habe ich Sie richtig verstanden?",
          natural: "Habe ich das so richtig verstanden?",
          professionalB2: "Darf ich noch einmal zusammenfassend rückfragen, ob wir hier vom selben Vorgehen ausgehen?",
          c1: "Darf ich kurz rekapitulieren, um zu überprüfen, ob meine Auffassung mit Ihrer Intention vollends konform geht?",
          relatedWords: ["rückfragen", "die Übereinstimmung", "die Auffassung"]
        }
      ]
    },
    {
      id: "cat_diskussion_einbringen",
      name: "Sich im Team zu Wort melden & Meinungen äußern",
      phrases: [
        {
          id: "phr_anki_006",
          situation: "Man möchte in einer Teambesprechung oder Übergabe höflich das Wort ergreifen.",
          basic: "Dürfte ich dazu auch etwas sagen?",
          natural: "Dürfte ich kurz etwas dazu sagen?",
          professionalB2: "Wenn ich kurz einhaken darf: Ich hätte zu diesem Punkt noch eine wichtige Beobachtung aus dem Frühdienst.",
          c1: "Gestatten Sie mir an dieser Stelle eine kurze sachdienliche Anmerkung aus der praktischen Stationserfahrung.",
          relatedWords: ["das Wort ergreifen", "die Wortmeldung", "der Einwand"]
        },
        {
          id: "phr_anki_007",
          situation: "Man möchte den Gedanken eines Kollegen sinnvoll ergänzen.",
          basic: "Ich möchte dazu etwas ergänzen.",
          natural: "Dazu möchte ich gerne noch kurz etwas ergänzen.",
          professionalB2: "Ergänzend zu den Ausführungen von Schwester Maria möchte ich anmerken, dass der Patient heute deutlich mobiler war.",
          c1: "In Ergänzung zu den treffenden Worten meiner Vorrednerin möchte ich den Aspekt der Frustrationstoleranz nochmals hervorheben.",
          relatedWords: ["ergänzen", "die Ergänzung", "der Aspekt", "hervorheben"]
        },
        {
          id: "phr_anki_008",
          situation: "Man versteht die Sichtweise des Gesprächspartners, hat aber begründete Bedenken.",
          basic: "Ich verstehe das schon, aber ...",
          natural: "Ich verstehe deinen Punkt total, aber lass uns bedenken, dass ...",
          professionalB2: "Ich kann Ihre Argumentation gut nachvollziehen, dennoch sollten wir das erhöhte Sturzrisiko nicht außer Acht lassen.",
          c1: "So plausibel dieser Ansatz primär erscheint, so unverzichtbar ist es doch, die potenziellen Risikofaktoren differentialdiagnostisch zu berücksichtigen.",
          relatedWords: ["nachvollziehen", "bedenken", "das Gegenargument"]
        },
        {
          id: "phr_anki_009",
          situation: "Man muss in einer dringenden Situation eine sprechende Person unterbrechen.",
          basic: "Entschuldigen Sie, wenn ich Sie unterbreche, ...",
          natural: "Entschuldige die kurze Unterbrechung, aber ...",
          professionalB2: "Verzeihen Sie bitte die Unterbrechung, aber hier liegt ein dringender Rückruf aus dem Labor vor.",
          c1: "Ich bitte vielmals um Verzeihung für dieses Dazwischentreten, doch eine akute Rücksprache mit dem Dienstarzt duldet keinen Aufschub.",
          relatedWords: ["unterbrechen", "die Unterbrechung", "dringlich"]
        },
        {
          id: "phr_anki_010",
          situation: "Man wird von jemandem vorschnell unterbrochen und möchte seinen Gedanken beenden.",
          basic: "Lassen Sie mich bitte ausreden.",
          natural: "Lass mich bitte kurz ausreden, dann gebe ich sofort an dich ab.",
          professionalB2: "Dürfte ich meinen Gedanken bitte noch kurz zu Ende führen? Danach stehe ich für Fragen bereit.",
          c1: "Ich wäre Ihnen verbunden, wenn ich meine Ausführungen kurz vollenden dürfte, bevor wir in die Detaildiskussion einsteigen.",
          relatedWords: ["ausreden lassen", "zu Ende führen", "der Redefluss"]
        }
      ]
    },
    {
      id: "cat_vorschlaege_absagen",
      name: "Vorschläge machen, Aushandeln & Absagen",
      phrases: [
        {
          id: "phr_anki_011",
          situation: "Man möchte dem Team oder Partner einen konstruktiven Vorschlag machen.",
          basic: "Wie wäre es, wenn ... ?",
          natural: "Wie wäre es, wenn wir die Pause um eine halbe Stunde vorziehen?",
          professionalB2: "Ich möchte vorschlagen, dass wir den Patiententransport gemeinsam aufteilen, um Wartezeiten zu minimieren.",
          c1: "Es böte sich an, die logistischen Abläufe dahingehend zu modifizieren, dass Synergieeffekte bei der Patientenbegleitung optimal genutzt werden.",
          relatedWords: ["der Vorschlag", "die Optimierung", "die Synergie"]
        },
        {
          id: "phr_anki_012",
          situation: "Man fragt die Meinung eines Kollegen zu einer Idee ab.",
          basic: "Was hältst du davon, wenn ... ?",
          natural: "Was hältst du davon, wenn wir das heute Nachmittag zusammen machen?",
          professionalB2: "Welche Einschätzung hast du zu dem Vorschlag, die Übergabe strukturiert nach ISBAR durchzuführen?",
          c1: "Wie beurteilen Sie die Zweckmäßigkeit einer standardisierten ISBAR-Übergabestruktur im Hinblick auf unsere Stationsabläufe?",
          relatedWords: ["die Einschätzung", "die Beurteilung", "die Zweckmäßigkeit"]
        },
        {
          id: "phr_anki_013",
          situation: "Man muss eine Bitte oder Einladung höflich ablehnen.",
          basic: "Tut mir leid, aber ...",
          natural: "Tut mir echt leid, aber heute schaffe ich das leider nicht.",
          professionalB2: "Ich bedaure sehr, dass ich dieses Mal absagen muss, da ich bereits für den Spätdienst eingeteilt bin.",
          c1: "Ich bedaure aufrichtig, Ihrer geschätzten Einladung aus dienstlichen Gründen dieses Mal nicht Folge leisten zu können.",
          relatedWords: ["bedauern", "absagen", "die Absage", "die Dienstverpflichtung"]
        },
        {
          id: "phr_anki_014",
          situation: "Man würde gerne helfen/teilnehmen, hat aber eine unüberwindbare Hürde.",
          basic: "Eigentlich gern, aber ...",
          natural: "Eigentlich total gerne, aber ich habe genau da einen wichtigen Arzttermin.",
          professionalB2: "Grundsätzlich würde ich Sie dabei sehr gerne unterstützen, allerdings bin ich zeitlich durch die Kurvendokumentation gebunden.",
          c1: "Obschon ich diesem Vorhaben überaus aufgeschlossen gegenüberstehe, verwehren mir vorherige terminliche Verpflichtungen eine Mitwirkung.",
          relatedWords: ["unterstützen", "zeitlich gebunden sein", "das Vorhaben"]
        }
      ]
    },
    {
      id: "cat_vortrag_praesentation_schluss",
      name: "Strukturierung, Diskursmarker & Abschluss",
      phrases: [
        {
          id: "phr_anki_015",
          situation: "Kausalzusammenhang im Vortrag oder Bericht herstellen.",
          basic: "Aus diesem Grund ...",
          natural: "Und genau aus diesem Grund sollten wir darauf besonders achten.",
          professionalB2: "Aus diesem Grund ist eine konsequente Händedesinfektion vor und nach jedem Patientenkontakt unabdingbar.",
          c1: "Aus eben diesem Grunde erweist sich die strikte Einhaltung aseptischer Kautelen als unumgängliches Fundament der Infektionsprävention.",
          relatedWords: ["der Grund", "die Ursache", "die Konsequenz", "folglich", "daher", "darum"]
        },
        {
          id: "phr_anki_016",
          situation: "Einen Vortrag, Fallbericht oder eine Argumentation zusammenfassen.",
          basic: "Zusammenfassend ...",
          natural: "Zusammenfassend kann man sagen, dass sich die Lage stabilisiert hat.",
          professionalB2: "Zusammenfassend lässt sich festhalten, dass die therapeutischen Maßnahmen gut angeschlagen haben.",
          c1: "Zusammenfassend bleibt zu konstatieren, dass die implementierten Interventionen eine messbare Besserung des Gesamtzustandes bewirkt haben.",
          relatedWords: ["zusammenfassend", "das Fazit", "die Schlussfolgerung", "konstatieren"]
        },
        {
          id: "phr_anki_017",
          situation: "Einen Vortrag oder eine Präsentation förmlich beenden.",
          basic: "Ich komme jetzt zum Schluss.",
          natural: "Damit bin ich auch schon am Ende meiner Präsentation angelangt.",
          professionalB2: "Ich komme nun zum abschließenden Fazit meiner Fallvorstellung und bedanke mich für Ihre Aufmerksamkeit.",
          c1: "Mit diesen Ausführungen möchte ich meine Präsentation beschließen und danke Ihnen herzlich für Ihr geschätztes Interesse.",
          relatedWords: ["das Fazit", "der Abschluss", "die Aufmerksamkeit", "beschließen"]
        },
        {
          id: "phr_anki_018",
          situation: "Nach einer Präsentation die Fragerunde für Kollegen oder Prüfer eröffnen.",
          basic: "Gibt es noch Fragen?",
          natural: "Habt ihr dazu noch irgendwelche Fragen?",
          professionalB2: "Stehen Ihrerseits noch Fragen oder Anmerkungen zu den vorgestellten Inhalten im Raum?",
          c1: "Ich stehe Ihnen nun sehr gerne für etwaige Rückfragen oder eine vertiefende Diskussion zur Verfügung.",
          relatedWords: ["die Fragerunde", "die Rückfragen", "die Diskussion"]
        },
        {
          id: "phr_anki_019",
          situation: "Sich zu Beginn eines Telefonats oder Gesprächs vorstellen.",
          basic: "Guten Tag, mein Name ist ...",
          natural: "Guten Tag, mein Name ist Ali, ich bin Freiwilliger auf Station 2.",
          professionalB2: "Guten Tag, mein Name ist Ali Sibaie. Ich melde mich von Station 2 des Universitätsklinikums bezüglich Herrn Müller.",
          c1: "Guten Tag, mein Name ist Ali Sibaie vom Bundesfreiwilligendienst der Station 2 des UKGM. Ich kontaktiere Sie bezüglich der Verlegung.",
          relatedWords: ["die Vorstellung", "sich vorstellen", "das Telefonat", "die Verlegung"]
        }
      ]
    }
  ]
};
