// "Was sage ich?" — Master Situations- & Phrasen-Transformator (B2 -> C1)
// Vollständige Abdeckung: Klinik, IT/Engineering, Wohnen & Miete, Familie & Feste, Partnerschaft, Hessen/Frankfurt Dialekt & Humor

export const PHRASES_DATA = {
  title: "Was sage ich in jeder Situation? (B2 -> C1 Situations-Matrix)",
  provenance: "AUS_QUELLE",
  categories: [
    // ----------------------------------------
    // 1. KLINIK, STATION 2 & ROLLENGRENZEN
    // ----------------------------------------
    {
      id: "cat_klinik_grenzen",
      name: "Klinik, Station 2 & Sicherheit",
      icon: "🏥",
      phrases: [
        {
          id: "phr_med_refusal",
          situation: "Ein Patient fordert Schmerzmittel oder Beruhigungstabletten von Ihnen.",
          basic: "Ich darf keine Medikamente geben. Ich hole die Schwester.",
          natural: "Ich darf Ihnen leider keine Medikamente aushändigen. Ich gebe aber sofort Ihrer zuständigen Pflegekraft Bescheid!",
          professionalB2: "Als Bundesfreiwilliger bin ich rechtlich nicht befugt, Medikamente auszugeben. Ich informiere aber augenblicklich Ihre Pflegefachkraft darüber.",
          c1: "Bitte haben Sie Verständnis dafür, dass die Verabreichung von Arzneimitteln ausschließlich dem examinierten Fachpersonal obliegt. Ich leite Ihren Bedarf unverzüglich an den Dienstarzt weiter.",
          relatedWords: ["die Befugnis", "die Aushändigung", "obliegen", "die Schweigepflicht"],
          whyExplanation: "Juristische und ethische Rollenwahrung nach § 630a BGB schützt Sie vor Haftungsrisiken."
        },
        {
          id: "phr_doc_schweigepflicht",
          situation: "Angehörige fordern am Telefon medizinische Diagnosen ein.",
          basic: "Ich darf Ihnen am Telefon nichts sagen wegen Datenschutz.",
          natural: "Aus Datenschutzgründen darf ich Ihnen telefonisch leider keine Auskunft über Diagnosen geben. Ich verbinde Sie direkt mit dem Stationsarzt.",
          professionalB2: "Aufgrund der ärztlichen Schweigepflicht nach § 203 StGB darf ich telefonisch keine medizinischen Auskünfte erteilen. Ich transferiere Sie gerne zur behandelnden Ärztin.",
          c1: "Unter Verweis auf die gesetzliche Schweigepflicht sowie den Patientendatenschutz ist mir eine fernmündliche Befundübermittlung untersagt. Ich verbinde Sie umgehend mit dem zuständigen Dienstarzt.",
          relatedWords: ["die Schweigepflicht", "fernmündlich", "die Befundübermittlung", "untersagt"],
          whyExplanation: "Klare Nennung der Schweigepflicht wirkt hochkompetent und deeskaliert Drängen der Angehörigen."
        }
      ]
    },

    // ----------------------------------------
    // 2. ENGINEERING & COMPUTERWORK / IT-MEETINGS
    // ----------------------------------------
    {
      id: "cat_tech_engineering",
      name: "Engineering & IT-Arbeitsplatz",
      icon: "💻",
      phrases: [
        {
          id: "phr_tech_standup_blocker",
          situation: "Im Daily Stand-up einen Blocker oder Datenbank-Flaschenhals melden.",
          basic: "Ich habe ein Problem mit der Datenbank. Es ist zu langsam.",
          natural: "Ich hänge gerade an den Datenbankabfragen fest, die Latenz ist noch viel zu hoch. Da brauche ich kurz Unterstützung.",
          professionalB2: "Als aktuellen Blocker sehe ich die Abfragezeiten des SQL-Clusters. Wir haben hier einen spürbaren Flaschenhals, den wir durch Index-Optimierung beheben sollten.",
          c1: "Als kritischer Blocker manifestieren sich persistente I/O-Latenzen bei komplexen Joins. Um die geforderte Durchsatzrate zu gewährleisten, plädiere ich für eine relationale Index-Restrukturierung sowie ein Redis-Caching.",
          relatedWords: ["der Flaschenhals", "die Latenz", "die Skalierbarkeit", "das Refactoring"],
          whyExplanation: "Im agilen Tech-Umfeld vermittelt präzise Begrifflichkeit sofortige Seniorität."
        },
        {
          id: "phr_tech_code_review_security",
          situation: "Im Code-Review auf eine Sicherheitslücke oder unverschlüsselte Passwörter hinweisen.",
          basic: "Bitte speichere die Passwörter nicht im Code.",
          natural: "Die API-Keys sollten wir nicht direkt im Code committen. Lass uns die kurz in Umgebungsvariablen auslagern.",
          professionalB2: "Aus Sicherheitsgründen sollten wir Secrets keinesfalls im Repository hardcoden. Ich schlage vor, die Konfiguration über ein Secret-Management oder `.env`-Dateien zu laden.",
          c1: "Unter Sicherheitsaspekten birgt die Hardcodierung der Authentifizierungs-Token ein gravierendes Vulnerabilitätsrisiko. Ich votiere für die Kapselung via Environment-Variablen und strikte Input-Sanitization.",
          relatedWords: ["die Schwachstelle", "die Kapselung", "votiere für", "das Secret-Management"],
          whyExplanation: "Konstruktive Kritik schützt Codequalität und fördert die Zusammenarbeit im Team."
        }
      ]
    },

    // ----------------------------------------
    // 3. WOHNEN, VERMIETER & NACHBARN
    // ----------------------------------------
    {
      id: "cat_wohnen_vermieter",
      name: "Wohnen, Vermieter & Reparaturen",
      icon: "🏡",
      phrases: [
        {
          id: "phr_house_heating_complaint",
          situation: "Heizungsausfall im Winter der Hausverwaltung melden.",
          basic: "Meine Heizung geht nicht und es ist kalt. Bitte reparieren.",
          natural: "Guten Tag, bei mir in der Wohnung ist die Heizung komplett ausgefallen und es hat nur 14 Grad. Bitte schicken Sie heute dringend einen Monteur.",
          professionalB2: "Guten Tag, ich melde hiermit einen dringenden Heizungsausfall in meiner Wohnung. Die Raumtemperatur unterschreitet die Mindestwerte erheblich. Ich bitte um Entsendung eines Notdienstes am heutigen Vormittag.",
          c1: "Ich rüge hiermit gemäß § 536 BGB den Totalausfall der Heizungsanlage. Da die Mietsache bei den aktuellen Minusgraden unbewohnbar wird, fordere ich Sie zur Mängelbeseitigung binnen 24 Stunden auf und behalte mir eine Mietminderung vor.",
          relatedWords: ["die Mängelrüge", "die Mietminderung", "die Mietsache", "die Abhilfe"],
          whyExplanation: "Fristsetzung und rechtliche Klarheit garantieren schnelle Reparaturen."
        },
        {
          id: "phr_house_noise_diplomatic",
          situation: "Den Nachbarn spät abends freundlich um Nachtruhe bitten.",
          basic: "Bitte mach die Musik aus, es ist nach 22 Uhr.",
          natural: "Hi! Entschuldige die Störung, aber könntet ihr die Musik bitte auf Zimmerlautstärke stellen? Ich muss morgen früh um 5 raus zur Frühschicht.",
          professionalB2: "Guten Abend! Ich verstehe total, dass ihr feiert, aber da ich morgen früh um 05:30 Uhr Dienst im Krankenhaus habe, brauche ich dringend Schlaf. Wärt ihr so lieb und würdet die Bässe etwas dämpfen?",
          c1: "Guten Abend! Ich möchte eure Geselligkeit keineswegs stören, appelliere jedoch mit Verweis auf die gesetzliche Nachtruhe an eure Rücksichtnahme, da ich morgen im Klinikum Frühdienst leisten muss. Herzlichen Dank!",
          relatedWords: ["die Nachtruhe", "die Zimmerlautstärke", "die Rücksichtnahme", "dämpfen"],
          whyExplanation: "Freundlichkeit gepaart mit dem Hinweis auf Schichtarbeit deeskaliert jeden Nachbarschaftskonflikt."
        }
      ]
    },

    // ----------------------------------------
    // 4. FAMILIE, FESTE & WEIHNACHTEN
    // ----------------------------------------
    {
      id: "cat_familie_feste",
      name: "Familie, Geburtstage & Weihnachten",
      icon: "🎄",
      phrases: [
        {
          id: "phr_xmas_toast",
          situation: "Ein herzlicher Toast an Heiligabend bei der Familie / Gastfamilie.",
          basic: "Frohe Weihnachten an alle und danke für das leckere Essen!",
          natural: "Vielen Dank für diesen wunderschönen Heiligabend! Ich fühle mich bei euch so herzlich aufgenommen und geborgen. Auf ein frohes und gesegnetes Weihnachtsfest!",
          professionalB2: "Liebe Familie, ich möchte euch von Herzen für eure wunderbare Gastfreundschaft danken. Bei euch habe ich ein echtes zweites Zuhause gefunden. Lasst uns anstoßen auf Gesundheit, Zusammenhalt und ein gesegnetes Fest!",
          c1: "Es erfüllt mich mit tiefer Dankbarkeit, dieses traditionsreiche Fest in eurer warmen Mitte begehen zu dürfen. Die gelebte Menschlichkeit und Geborgenheit, die ihr mir schenkt, ist mein schönstes Geschenk. Auf unser aller Wohl und ein friedvolles Fest!",
          relatedWords: ["die Geborgenheit", "der Zusammenhalt", "gesegnet", "der Toast"],
          whyExplanation: "Weihnachten ist das Fest der emotionalen Verbundenheit in Deutschland."
        },
        {
          id: "phr_birthday_toast",
          situation: "Glückwünsche und Trinkspruch zum Geburtstag eines Kollegen/Freundes.",
          basic: "Alles Gute zum Geburtstag! Auf deine Gesundheit!",
          natural: "Herzlichen Glückwunsch zum Geburtstag! Bleib genau so, wie du bist – voller Energie und Lebensfreude. Auf dein neues Lebensjahr!",
          professionalB2: "Zu deinem Geburtstag gratuliere ich dir von ganzem Herzen! Möge das neue Lebensjahr dir beste Gesundheit, inspirierende Erfolge und viele glückliche Momente bringen. Auf dein Wohl!",
          c1: "Zu diesem feierlichen Wiegenfest entbiete ich meine aufrichtigsten Glück- und Segenswünsche. Möge dir das kommende Lebensjahrzehnt unerschütterliche Vitalität, persönliche Erfüllung und weiterhin so viel Tatkraft bescheren!",
          relatedWords: ["das Wiegenfest", "die Vitalität", "die Segenswünsche", "die Tatkraft"],
          whyExplanation: "Gewandte Toasts erzeugen sofortige Sympathie in gehobener Runde."
        }
      ]
    },

    // ----------------------------------------
    // 5. PARTNERSCHAFT, LIEBE & EMOTIONEN (GF / WIFEY)
    // ----------------------------------------
    {
      id: "cat_partnerschaft_liebe",
      name: "Partnerschaft, Trösten & Liebe",
      icon: "❤️",
      phrases: [
        {
          id: "phr_gf_comfort",
          situation: "Freundin / Ehefrau kommt erschöpft nach Hause und braucht Halt.",
          basic: "Komm her, Schatz. Das tut mir leid. Ruh dich aus.",
          natural: "Komm erst mal in meine Arme, mein Schatz! Es tut mir so leid, dass dein Tag so furchtbar war. Lehn dich an mich an, du bist jetzt in Sicherheit.",
          professionalB2: "Lass dich ganz fest umarmen, Liebling. Es bricht mir das Herz zu sehen, wie erschöpft du bist. Du musst mir jetzt gar nichts erklären – ich mache uns dein Lieblingsessen und halte dir den Rücken frei.",
          c1: "Mein geliebter Schatz, ich spüre, wie sehr dich die heutigen Ereignisse mitgenommen haben. Finde bei mir Ruhe und Geborgenheit. Ich nehme dir heute alle Verpflichtungen ab.",
          relatedWords: ["die Geborgenheit", "den Rücken freihalten", "trösten", "die Zuneigung"],
          whyExplanation: "Echte deutsche Empathieausdrücke schenken tiefe Geborgenheit."
        },
        {
          id: "phr_gf_ich_botschaft",
          situation: "Einen Konflikt liebevoll ohne Anschuldigungen ansprechen (Ich-Botschaft).",
          basic: "Ich war traurig, weil wir uns gestern nicht gesehen haben.",
          natural: "Ich habe dich gestern so sehr vermisst, Schatz. Es hat mir ein bisschen wehgetan, dass wir so wenig Zeit für uns zwei hatten.",
          professionalB2: "Unsere gemeinsame Zeit liegt mir unendlich am Herzen, Liebling. Als wir uns gestern verpasst haben, habe ich mich einsam gefühlt. Lass uns schauen, wie wir feste Zeiten nur für uns reservieren können.",
          c1: "Unsere partnerschaftliche Zweisamkeit hat für mich höchste Priorität. Wenn berufsbedingt Distanz entsteht, schmerzt mich das sehr. Ich wünsche mir, dass wir bewusst verbindliche Ruheoasen für uns etablieren.",
          relatedWords: ["die Zweisamkeit", "die Ich-Botschaft", "die Priorität", "die Ruheoase"],
          whyExplanation: "Ich-Botschaften verhindern Abwehrhaltungen und stärken die Liebe."
        }
      ]
    },

    // ----------------------------------------
    // 6. HESSEN, FRANKFURT & HUMOR
    // ----------------------------------------
    {
      id: "cat_hessen_humor",
      name: "Hessen, Frankfurt Dialekt & Humor",
      icon: "🏙️",
      phrases: [
        {
          id: "phr_hessen_gude",
          situation: "Kollegialer Gruß am Morgen in der Klinik / im Büro.",
          basic: "Hallo, wie geht es dir?",
          natural: "Gude! Na, wie läuft's bei dir heute?",
          professionalB2: "Ei gude wie! Kaffee ist schon gekocht – packen wir den Tag an!",
          c1: "Ei gude, allerseits! Bereit für die Frühbesprechung? Heute machen wir kaan Zirkus, heute flutscht alles!",
          relatedWords: ["Gude", "kaan Zirkus", "flutschen", "der Schoppe"],
          whyExplanation: "'Gude' ist der sympathischste Türöffner in ganz Hessen und Frankfurt."
        },
        {
          id: "phr_humor_schlagfertig_fehler",
          situation: "Schlagfertige Reaktion bei einem kleinen harmlosen Missgeschick.",
          basic: "Entschuldigung, das war ein Versehen.",
          natural: "Ups! Das war der tägliche Wachmacher für uns alle!",
          professionalB2: "Das war ein taktischer Test, um die Reaktionsgeschwindigkeit unseres Teams zu überprüfen: Test bravourös bestanden!",
          c1: "Betrachten wir diesen kleinen Fauxpas als empirischen Beweis dafür, dass auch wir nach der dritten Nachtschicht noch über erstaunliche Reflexe verfügen!",
          relatedWords: ["die Schlagfertigkeit", "der Fauxpas", "bravourös", "die Selbstironie"],
          whyExplanation: "Charmanter Humor nimmt sofort die Schwere aus stressigen Arbeitssituationen."
        }
      ]
    }
  ]
};
