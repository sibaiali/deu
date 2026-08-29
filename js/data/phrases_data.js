// "Was sage ich?" — Master Phrasen- & Redemittel-Transformator
// Stufenförmige Transformationen: Basic (B1) -> Natürlich -> Professionell (B2) -> C1-Register
// Vollständig integriert für Klinik, Station 2, Familie, Alltag und Partnerschaft (GF / Wifey)

export const PHRASES_DATA = {
  title: "Praktischer Phrasen- & Redemittel-Transformator",
  provenance: "AUS_QUELLE",
  categories: [
    // ----------------------------------------
    // 1. VERSTÄNDIGUNG & HÖFLICHE RÜCKFRAGEN
    // ----------------------------------------
    {
      id: "cat_verstaendigung_nachfragen",
      name: "Verständigung sichern & Rückfragen",
      icon: "👂",
      phrases: [
        {
          id: "phr_001",
          situation: "Man hat ein Wort oder eine ärztliche Anweisung akustisch nicht genau verstanden.",
          basic: "Könnten Sie das bitte wiederholen?",
          natural: "Könnten Sie das bitte noch einmal wiederholen?",
          professionalB2: "Würden Sie diesen Punkt bitte noch einmal kurz wiederholen? Ich möchte sicherstellen, dass ich alles richtig erfasst habe.",
          c1: "Wären Sie so freundlich, Ihre Ausführungen dahingehend noch einmal kurz zu rekapitulieren?",
          relatedWords: ["wiederholen", "die Wiederholung", "das Nachfragen", "die Akustik"],
          whyExplanation: "Das B2/C1-Muster signalisiert aktive Professionalität und Qualitätssicherung, statt nur 'nicht gehört' zu haben."
        },
        {
          id: "phr_002",
          situation: "Man ist unsicher, ob man den genauen Sinn einer Anweisung verstanden hat.",
          basic: "Ich glaube, das habe ich nicht richtig verstanden.",
          natural: "Ich glaube, ich habe das vorhin nicht ganz richtig verstanden.",
          professionalB2: "Darf ich mich kurz vergewissern: Habe ich Sie richtig verstanden, dass die Vitalwerte vor dem Frühstück erhoben werden sollen?",
          c1: "Um Missverständnisse von vornherein auszuschließen: Verstehe ich Ihre Anweisung dahingehend zutreffend, dass Priorität auf der Dokumentation liegt?",
          relatedWords: ["verstehen", "das Missverständnis", "die Rückversicherung", "die Priorität"],
          whyExplanation: "Paraphrasieren ('Darf ich mich vergewissern...') verhindert Behandlungsfehler auf Station."
        },
        {
          id: "phr_003",
          situation: "Ein Arzt oder Kollege spricht im Stress viel zu schnell.",
          basic: "Könnten Sie bitte etwas langsamer sprechen?",
          natural: "Könnten Sie vielleicht ein kleines bisschen langsamer sprechen?",
          professionalB2: "Wären Sie so nett, das Sprechtempo ein wenig anzupassen, damit ich alle Details lückenlos notieren kann?",
          c1: "Ich wäre Ihnen dankbar, wenn wir das Tempo kurz drosseln könnten, um eine fehlerfreie Erfassung der Informationen zu gewährleisten.",
          relatedWords: ["langsam", "das Sprechtempo", "die Deutlichkeit", "lückenlos"],
          whyExplanation: "Die B2-Begründung ('damit ich notieren kann') nimmt den Druck vom Gegenüber."
        }
      ]
    },

    // ----------------------------------------
    // 2. KLINIK, STATION 2 & GRENZEN
    // ----------------------------------------
    {
      id: "cat_klinik_grenzen",
      name: "Klinik, Station 2 & Rollengrenzen",
      icon: "🏥",
      phrases: [
        {
          id: "phr_004",
          situation: "Ein Patient fordert Schmerzmittel oder Beruhigungstabletten von Ihnen.",
          basic: "Ich darf keine Medikamente geben. Ich hole die Schwester.",
          natural: "Ich darf Ihnen leider keine Medikamente aushändigen. Ich sage aber sofort der zuständigen Pflegekraft Bescheid!",
          professionalB2: "Als Bundesfreiwilliger bin ich rechtlich nicht befugt, Medikamente auszugeben. Ich informiere aber augenblicklich Ihre Pflegefachkraft darüber.",
          c1: "Bitte haben Sie Verständnis dafür, dass die Verabreichung von Arzneimitteln ausschließlich dem examinierten Fachpersonal obliegt. Ich leite Ihren Bedarf unverzüglich an den Dienstarzt weiter.",
          relatedWords: ["befugt sein", "die Aushändigung", "die Rollengrenze", "obliegen"],
          whyExplanation: "Juristische und ethische Rollenwahrung nach § 630a BGB schützt Sie vor Haftung."
        },
        {
          id: "phr_005",
          situation: "Angehörige fordern am Telefon medizinische Diagnosen oder Befunde ein.",
          basic: "Ich darf Ihnen am Telefon nichts sagen wegen Datenschutz.",
          natural: "Aus Datenschutzgründen darf ich Ihnen leider keine Auskunft über Diagnosen geben. Ich verbinde Sie mit dem Stationsarzt.",
          professionalB2: "Aufgrund der ärztlichen Schweigepflicht nach § 203 StGB darf ich telefonisch keine medizinischen Auskünfte erteilen. Ich verbinde Sie sehr gerne direkt mit der behandelnden Ärztin.",
          c1: "Unter Verweis auf die gesetzliche Schweigepflicht sowie den Patientendatenschutz ist mir eine telekommunikative Befundübermittlung untersagt. Ich transferiere Sie umgehend in das Arztzimmer.",
          relatedWords: ["die Schweigepflicht", "die Auskunft", "der Datenschutz", "untersagt"],
          whyExplanation: "Klare Nennung der Schweigepflicht wirkt hochkompetent und deeskaliert Drängen der Angehörigen."
        }
      ]
    },

    // ----------------------------------------
    // 3. PARTNERSCHAFT, LIEBE & EMOTIONEN (GF / WIFEY)
    // ----------------------------------------
    {
      id: "cat_partnerschaft_liebe",
      name: "Partnerschaft, Trösten & Liebe (GF / Wifey)",
      icon: "❤️",
      phrases: [
        {
          id: "phr_006",
          situation: "Die Freundin / Ehefrau kommt erschöpft nach Hause und braucht emotionalen Rückhalt.",
          basic: "Komm her, Schatz. Das tut mir leid. Ruh dich aus.",
          natural: "Komm erst mal in meine Arme, mein Schatz! Es tut mir so leid, dass dein Tag so anstrengend war. Lehn dich einfach an mich an.",
          professionalB2: "Lass dich ganz fest umarmen, Liebling. Es bricht mir das Herz zu sehen, wie erschöpft du bist. Du musst jetzt gar nichts tun – ich koche uns etwas Schönes und bin einfach nur für dich da.",
          c1: "Mein geliebter Schatz, ich spüre, wie sehr dich die heutigen Ereignisse mitgenommen haben. Tritt einen Moment innerlich zurück und finde bei mir Geborgenheit. Ich halte dir heute den Rücken vollständig frei.",
          relatedWords: ["die Geborgenheit", "trösten", "erschöpft", "der Rückhalt", "den Rücken freihalten"],
          whyExplanation: "Echte deutsche Empathieausdrücke ('Komm in meine Arme', 'Ich halte dir den Rücken frei') schaffen emotionale Geborgenheit."
        },
        {
          id: "phr_007",
          situation: "Man möchte seiner Partnerin im Alltag tiefe Liebe, Wertschätzung und Dankbarkeit mitteilen.",
          basic: "Ich liebe dich sehr und bin froh, dass du da bist.",
          natural: "Ich liebe dich von ganzem Herzen, Schatz. Du machst mein Leben jeden Tag so viel schöner!",
          professionalB2: "Ich möchte dir einfach mal sagen, wie unglaublich dankbar ich für dich bin. Mit dir an meiner Seite fühle ich mich vollkommen angekommen und geborgen.",
          c1: "Worte können kaum beschreiben, welch unschätzbare Bereicherung du für mein Leben darstellst. Deine Wärme, Klugheit und Liebe sind mein größtes Geschenk, für das ich täglich dankbar bin.",
          relatedWords: ["die Wertschätzung", "geborgen", "die Bereicherung", "unschätzbar", "angekommen sein"],
          whyExplanation: "Das Gefühl des 'Angekommenseins' gilt im Deutschen als einer der tiefsten Ausdrücke partnerschaftlichen Glücks."
        },
        {
          id: "phr_008",
          situation: "Man möchte einen kleinen Beziehungs-Konflikt liebevoll und ohne Vorwürfe ansprechen (Ich-Botschaft).",
          basic: "Ich war traurig, weil wir uns gestern nicht gesehen haben.",
          natural: "Ich habe dich gestern so sehr vermisst, Schatz. Es hat mir ein bisschen wehgetan, dass wir so wenig Zeit hatten.",
          professionalB2: "Mir liegt unsere gemeinsame Zeit unglaublich am Herzen, Liebling. Als wir uns gestern verpasst haben, habe ich mich etwas einsam gefühlt. Lass uns schauen, wie wir das besser planen können.",
          c1: "Unsere partnerschaftliche Zweisamkeit hat für mich höchste Priorität. Wenn berufsbedingt Termine kollidieren, schmerzt mich diese Distanz. Ich wünsche mir sehr, dass wir gemeinsam feste Ruheoasen für uns reservieren.",
          relatedWords: ["die Zweisamkeit", "vermissen", "die Priorität", "die Ich-Botschaft", "die Ruheoase"],
          whyExplanation: "Ich-Botschaften ('Ich habe mich einsam gefühlt' statt 'Du bist nie da') verhindern defensive Reaktionen."
        }
      ]
    },

    // ----------------------------------------
    // 4. FAMILIE, GASTFREUNDSCHAFT & ALLTAG
    // ----------------------------------------
    {
      id: "cat_familie_alltag",
      name: "Familie, Gastfreundschaft & Alltag",
      icon: "🏡",
      phrases: [
        {
          id: "phr_009",
          situation: "Man wird bei der Familie zum Essen empfangen und möchte herzlich danken.",
          basic: "Danke für das leckere Essen und die Einladung.",
          natural: "Vielen Dank für die Einladung! Das Essen riecht wirklich fantastisch.",
          professionalB2: "Herzlichen Dank für die liebevolle Gastfreundschaft und dieses köstliche Mahl! Es ist wunderschön, heute bei Ihnen in so gemütlicher Runde zusammenzusitzen.",
          c1: "Ich möchte meinen aufrichtigen Dank für Ihre überaus herzliche Gastfreundschaft zum Ausdruck bringen. Dieses exquisite Menü und die anregende Gesellschaft bereiten mir außerordentliche Freude.",
          relatedWords: ["die Gastfreundschaft", "köstlich", "das Mahl", "die Runde", "anregend"],
          whyExplanation: "Deutsche Tischkultur honoriert sowohl das Essen als auch die gemütliche Geselligkeit."
        },
        {
          id: "phr_010",
          situation: "Man möchte bei Tisch höflich ablehnen, wenn man bereits satt ist.",
          basic: "Nein danke, ich bin voll.",
          natural: "Vielen Dank, aber ich bin wirklich pappsatt! Es war super lecker.",
          professionalB2: "Es hat ganz hervorragend geschmeckt, aber ich bin nun wirklich wunschlos satt und rundum zufrieden, vielen Dank!",
          c1: "Ich danke Ihnen für den überaus großzügigen Nachschlag, muss jedoch dankend ablehnen, da ich vollends gesättigt bin. Das Mahl war vorzüglich.",
          relatedWords: ["pappsatt", "wunschlos", "gesättigt", "vorzüglich", "der Nachschlag"],
          whyExplanation: "'Ich bin pappsatt' ist umgangssprachlich herzlich; 'wunschlos satt' ist das ideale B2-Kompliment."
        }
      ]
    },

    // ----------------------------------------
    // 5. DISKURS & DISKUSSION (B2/C1)
    // ----------------------------------------
    {
      id: "cat_diskurs_meinung",
      name: "Diskurs, Meinung äußern & Einwände",
      icon: "💬",
      phrases: [
        {
          id: "phr_011",
          situation: "Höflich unterbrechen, um in der Teamsitzung einen wichtigen Gedanken zu ergänzen.",
          basic: "Darf ich auch etwas sagen?",
          natural: "Dürfte ich dazu ganz kurz etwas ergänzen?",
          professionalB2: "Wenn ich kurz einhaken dürfte: Zu diesem Aspekt gibt es eine wichtige Beobachtung aus dem Frühdienst.",
          c1: "Gestatten Sie mir an dieser Stelle eine kurze Intervention, um die Argumentation um eine wesentliche klinische Nuance zu erweitern.",
          relatedWords: ["einhaken", "die Intervention", "der Aspekt", "ergänzen", "die Nuance"],
          whyExplanation: "'Wenn ich kurz einhaken dürfte' ist der eleganteste B2-Diskursmarker in deutschen Teambesprechungen."
        },
        {
          id: "phr_012",
          situation: "Einen Vortrag, eine Übergabe oder ein langes Argument zusammenfassend beenden.",
          basic: "Ich bin jetzt fertig. Gibt es noch Fragen?",
          natural: "Ich komme jetzt zum Schluss. Habt ihr dazu noch Fragen?",
          professionalB2: "Zusammenfassend lässt sich festhalten, dass der Zustand stabil ist. Damit schließe ich meinen Bericht und stehe für Rückfragen zur Verfügung.",
          c1: "Resümierend darf ich konstatieren, dass die eingeleiteten Maßnahmen greifen. Ich bedanke mich für Ihre Aufmerksamkeit und freue mich auf den anschließenden Diskurs.",
          relatedWords: ["zusammenfassend", "konstatieren", "resümierend", "der Diskurs", "festhalten"],
          whyExplanation: "'Zusammenfassend lässt sich festhalten...' ist das Standard-Fazit für B2/C1 Prüfungen und Konferenzen."
        }
      ]
    }
  ]
};
