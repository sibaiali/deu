// BFD, Engineering, Wohnen, Feste & Partnerschafts-Simulationen
// Höchstes Niveau: Aktiv B2 -> Professionell B2+ -> C1 Nuanciert -> C2 Idiomatisch

export const SIMULATIONS_DATA = [
  // ==========================================
  // 1. KLINIK & BFD (Station 2 / UKGM Marburg)
  // ==========================================
  {
    id: "sim_sbar_handover",
    title: "Klinische Schichtübergabe nach SBAR-Schema",
    category: "Klinik & BFD",
    level: "B2/C1",
    workplace: "Besprechungsraum Station 2 (UKGM Marburg)",
    provenance: "AUS_QUELLE",
    situation: "Zum Schichtwechsel um 14:00 Uhr übergeben Sie Ihre Beobachtungen bezüglich Herrn Becker (Zimmer 12) an die Spätdienst-Pflegekraft Sarah.",
    userRole: "BFD-Freiwilliger",
    counterpartRole: "Sarah (Pflegefachkraft im Spätdienst)",
    objective: "Strukturierte Übergabe nach SBAR (Situation, Background, Assessment, Recommendation) bezüglich Vitalwerten, Verhaltensbeobachtung und Nahrungsaufnahme.",
    turns: [
      {
        speaker: "Sarah",
        text: "Hi Ali! Wie war dein Frühdienst? Gab es bei Herrn Becker auf Zimmer 12 heute Vormittag Auffälligkeiten beim Essen oder bei den Vitalwerten?",
        guidance: "Berichten Sie präzise: Vitalwerte (145/90 mmHg), Verweigerung der Mittagsmahlzeit, aber 600 ml getrunken, nach Begleitung im Klinikpark motorisch deutlich entspannter.",
        expectedCriteria: ["Konkrete Werte nennen", "Nahrungs-/Flüssigkeitsaufnahme erwähnen", "Psychischen Zustand schildern", "Strukturierte Sprache"],
        responseTiers: {
          basic: "Herr Becker hatte Blutdruck 145 zu 90. Er hat nicht gegessen, aber getrunken. Im Park ging es ihm viel besser.",
          natural: "Herr Becker hatte um 09:30 Uhr einen Blutdruck von 145 zu 90. Das Mittagessen hat er leider abgelehnt, aber ca. 600 ml Wasser getrunken. Nach unserem Spaziergang im Park wirkte er deutlich ruhiger.",
          professionalB2: "Zur Übergabe von Herrn Becker auf Zimmer 12: Die Vitalwertkontrolle ergab einen leichten Blutdruckanstieg auf 145/90 mmHg. Die feste Nahrung hat er verweigert, die Flüssigkeitszufuhr lag jedoch bei etwa 600 ml. Im Rahmen unserer aktivierenden Begleitung im Park zeigte er sich kooperativ und motorisch wesentlich weniger agitiert.",
          c1: "Bezüglich Herrn Becker auf Zimmer 12: Die morgendliche Statuserhebung zeigte eine mäßige Hypertonie von 145/90 mmHg bei normofrequenter Herzaktion. Während die Nahrungsaufnahme aufgrund depressiver Antriebslosigkeit sistierte, konnte eine adäquate Hydratation von 600 ml sichergestellt werden. Psychopathologisch präsentierte er sich nach der milieu-therapeutischen Parkbegleitung affektiv deutlich stabilisierter und zugewandter."
        },
        whyExplanation: "Strukturierte Fachterminologie (Hypertonie, Hydratation, affektiv stabilisiert) spart Zeit und sichert die lückenlose Behandlungsqualität."
      }
    ]
  },

  {
    id: "sim_doctor_rounds_visite",
    title: "Ärztliche Visite & Fallbesprechung mit der Oberärztin",
    category: "Klinik & BFD",
    level: "B2/C1",
    workplace: "Arztzimmer / Visite am Patientenbett",
    provenance: "AUS_QUELLE",
    situation: "Die Oberärztin Dr. Weber bittet Sie während der Visite um Ihre Einschätzung zur Tagesstruktur und Gruppenbeteiligung von Frau Jansen.",
    userRole: "BFD-Freiwilliger",
    counterpartRole: "Dr. Weber (Oberärztin)",
    objective: "Wertfreie, präzise Verhaltensbeobachtung ohne Eigendiagnosen schildern und Kooperation in der Ergotherapie beschreiben.",
    turns: [
      {
        speaker: "Dr. Weber",
        text: "Ali, Sie haben Frau Jansen diese Woche bei der Ergotherapie und beim gemeinsamen Kochen begleitet. Wie erleben Sie ihre Konzentration und ihre soziale Interaktion in der Gruppe?",
        guidance: "Schildern Sie differenziert: Zu Beginn zurückhaltend und reizempfindlich, nach ca. 20 Minuten aktive Teilnahme beim Gemüseschneiden, freundlicher Austausch mit Mitpatienten.",
        expectedCriteria: ["Wertfreie Beobachtung", "Zeitlicher Verlauf", "Gruppeninteraktion", "Rollenangemessene Sprache"],
        responseTiers: {
          basic: "Am Anfang war sie leise, aber danach hat sie gut mitgemacht und mit den anderen gesprochen.",
          natural: "Zu Beginn der Kochgruppe wirkte Frau Jansen noch etwas zurückhaltend und lärmempfindlich. Nach etwa zwanzig Minuten hat sie sich dann aber aktiv beteiligt, beim Schneiden mitgeholfen und sogar gelächelt.",
          professionalB2: "Frau Jansen zeigte anfangs eine deutliche Reizempfindlichkeit und zog sich zurück. Im weiteren Verlauf konnte sie sich jedoch gut auf die praktische Aufgabe konzentrieren und trat von sich aus in einen freundlichen Austausch mit zwei Mitpatientinnen.",
          c1: "Phänomenologisch imponierte Frau Jansen zu Beginn der Intervention durch eine ausgeprägte Reizüberflutung mit Rückzugstendenzen. Durch gezielte Reizreduktion gelang ihr jedoch eine erfreuliche Re-Fokussierung: Sie vollzog komplexe Handlungsabläufe adäquat und zeigte im Gruppenkontakt eine spürbare affektive Aufhellung."
        },
        whyExplanation: "Genaue Verhaltensbeschreibungen unterstützen Ärzte bei der Beurteilung des Therapieerfolgs."
      }
    ]
  },

  // ==========================================
  // 2. ENGINEERING & IT-ARBEITSPLATZ
  // ==========================================
  {
    id: "sim_tech_daily_standup",
    title: "Daily Stand-up & Sprint-Architektur im IT-Team",
    category: "Engineering & IT",
    level: "B2/C1",
    workplace: "Agiler Meetingraum / Remote Video Call",
    provenance: "AUS_QUELLE",
    situation: "Im 15-minütigen Daily Scrum berichten Sie dem Entwicklerteam über den aktuellen Stand der API-Optimierung und bestehende Blocker.",
    userRole: "Software Engineer / IT Specialist",
    counterpartRole: "Markus (Scrum Master / Lead Architect)",
    objective: "Gestern Erledigtes, Heutiges und Blocker (Datenbank-Flaschenhals) klar, prägnant und lösungsorientiert präsentieren.",
    turns: [
      {
        speaker: "Markus",
        text: "Morgen zusammen! Ali, du bist dran: Was hast du gestern geschafft, woran arbeitest du heute und gibt es Blocker bei der Microservice-Migration?",
        guidance: "Berichten Sie: Gestern Endpunkte refaktoriert, heute Unit-Tests und Docker-Containerisierung, Blocker: Latenzprobleme bei SQL-Queries (Datenbank-Flaschenhals).",
        expectedCriteria: ["Struktur (Gestern/Heute/Blocker)", "Präzise IT-Fachsprache", "Lösungsvorschlag anbieten"],
        responseTiers: {
          basic: "Gestern habe ich den Code verbessert. Heute schreibe ich Tests. Bei der Datenbank ist es noch zu langsam.",
          natural: "Gestern habe ich das Refactoring der Authentifizierungs-Endpunkte abgeschlossen. Heute schreibe ich die Unit-Tests und baue den Docker-Container. Als Blocker haben wir noch eine hohe Latenz bei den Datenbank-Queries – da müssen wir die Indizes optimieren.",
          professionalB2: "Gestern konnte ich das Refactoring der REST-API-Schnittstellen erfolgreich abschließen. Mein Fokus liegt heute auf der Testabdeckung mit PyTest sowie dem Container-Deployment. Als potenziellen Flaschenhals sehe ich die Abfragezeiten der SQL-Datenbank; ich schlage vor, nach dem Stand-up mit Jonas ein kurzes Query-Profiling durchzuführen.",
          c1: "Gestern habe ich die serviceübergreifende Schnittstellenarchitektur konsolidiert und redundante Payloads eliminiert. Der heutige Meilenstein umfasst die automatisierte CI/CD-Pipeline-Integration und Lasttests. Als kritischen Blocker identifiziere ich persistente I/O-Latenzen im Datenbankcluster, weshalb ich eine Index-Restrukturierung sowie die Implementierung einer Redis-Caching-Schicht favorisiere."
        },
        whyExplanation: "Im agilen Tech-Umfeld zählen klare Fakten, Fachbegriffe (Refactoring, Latenz, Flaschenhals, Lasttests) und proaktive Lösungen."
      }
    ]
  },

  {
    id: "sim_tech_code_review_discussion",
    title: "Konstruktives Code-Review & Architektur-Debatte",
    category: "Engineering & IT",
    level: "B2/C1",
    workplace: "GitHub Pull Request / Review-Session",
    provenance: "AUS_QUELLE",
    situation: "Ein Kollege hat einen Pull Request eingereicht, bei dem Sicherheitsaspekte und Skalierbarkeit unzureichend gelöst sind. Sie möchten das Feedback kollegial und fachlich fundiert vortragen.",
    userRole: "Senior Software Developer",
    counterpartRole: "Tobias (Entwicklerkollege)",
    objective: "Wertschätzend positives Feedback voranstellen, Sicherheitsrisiken sachlich erläutern und Best Practices vorschlagen.",
    turns: [
      {
        speaker: "Tobias",
        text: "Hi Ali, hast du dir meinen Pull Request für das neue Zahlungs-Gateway schon angeschaut? Ich wollte den Branch eigentlich gleich mergen.",
        guidance: "Loben Sie die schnelle Umsetzung, weisen Sie aber diplomatisch auf fehlende Eingabevalidierung und unverschlüsselte API-Keys hin, und schlagen Sie Umgebungsvariablen (.env) vor.",
        expectedCriteria: ["Wertschätzender Einstieg", "Klares Aufzeigen von Risiken", "Konkreter technischer Gegenvorschlag"],
        responseTiers: {
          basic: "Der Code ist gut, aber die Passwörter stehen im Klartext. Das können wir so nicht mergen.",
          natural: "Danke für die schnelle Umsetzung, Tobias! Die Logik sieht super aus. Mir ist allerdings aufgefallen, dass die API-Keys noch direkt im Quellcode stehen. Lass uns die kurz in Umgebungsvariablen auslagern und eine Validierung einbauen, dann können wir direkt mergen.",
          professionalB2: "Vielen Dank für den PR, die Modulstruktur ist wirklich sauber aufgebaut. Aus Sicherheitsgründen sollten wir die sensiblen Credentials jedoch keinesfalls im Repository committen, sondern über ein Secret-Management laden. Wenn du das kurz anpasst und wir noch zwei Edge-Case-Tests ergänzen, gebe ich sofort mein Approval.",
          c1: "Ich begrüße die elegante Entkopplung der Komponenten in deinem Entwurf ausdrücklich. Unter Sicherheitsaspekten birgt die Hardcodierung der API-Secrets jedoch ein gravierendes Vulnerabilitätsrisiko. Ich plädiere dafür, die Konfiguration über Vault bzw. Environment-Variablen zu kapseln und strikte Input-Sanitization zu implementieren, um Injection-Vektoren verlässlich zu unterbinden."
        },
        whyExplanation: "Konstruktive Kritik im Code-Review trennt die Person von der Sache und schützt die Softwarequalität."
      }
    ]
  },

  // ==========================================
  // 3. WOHNEN, VERMIETER & HAUSGEMEINSCHAFT
  // ==========================================
  {
    id: "sim_house_heating_complaint",
    title: "Mängelrüge an den Vermieter (Heizungsausfall im Winter)",
    category: "Wohnen & Vermieter",
    level: "B2/C1",
    workplace: "Telefonat / Schriftliche Mitteilung an die Hausverwaltung",
    provenance: "AUS_QUELLE",
    situation: "Mitte November fällt in Ihrer Mietwohnung die Heizung komplett aus. Die Raumtemperatur beträgt nur noch 14 Grad. Sie rufen die Hausverwaltung an, um eine sofortige Notfall-Reparatur einzufordern.",
    userRole: "Mieter",
    counterpartRole: "Herr Fischer (Hausverwalter)",
    objective: "Den Sachverhalt sachlich und bestimmt schildern, Dringlichkeit begründen, Frist setzen und Mietminderung ankündigen falls keine Abhilfe erfolgt.",
    turns: [
      {
        speaker: "Herr Fischer",
        text: "Hausverwaltung Fischer, guten Tag. Worum geht es bitte?",
        guidance: "Nennen Sie Namen, Adresse und Wohnungsnummer. Schildern Sie den Totalausfall der Heizung bei Minusgraden und fordern Sie einen Heizungsmonteur für den heutigen Tag an.",
        expectedCriteria: ["Genaue Adressangabe", "Präzise Mängelbeschreibung", "Dringlichkeit/Frist", "Bestimmter, professioneller Ton"],
        responseTiers: {
          basic: "Guten Tag, hier ist Ali. Bei mir ist die Heizung kaputt und es ist sehr kalt. Bitte schicken Sie schnell jemanden.",
          natural: "Guten Tag, Herr Fischer, mein Name ist Ali aus der Weidenhäuser Straße 14, 2. Stock. Bei mir ist seit gestern Abend die Heizung komplett ausgefallen und die Wohnung hat nur noch 14 Grad. Da es draußen friert, brauche ich bitte heute dringend einen Notdienst.",
          professionalB2: "Guten Tag, Herr Fischer. Ich melde hiermit einen dringenden Mangel in meiner Wohnung in der Weidenhäuser Straße 14. Die Heizkörper bleiben trotz voller Einstellung vollkommen kalt, die Raumtemperatur liegt unter 15 Grad Celsius. Da hier akute Unbewohnbarkeit droht, bitte ich Sie um die umgehende Entsendung eines Heizungsmonteurs noch am heutigen Vormittag.",
          c1: "Guten Tag, Herr Fischer. Ich rüge hiermit gemäß § 536 BGB einen gravierenden Mangel an der Mietsache in der Weidenhäuser Straße 14. Es liegt ein vollständiger Ausfall der Heizungsanlage bei winterlichen Außentemperaturen vor, was zu einer Unterschreitung der vertraglich geschuldeten Mindesttemperatur führt. Ich fordere Sie hiermit zur unverzüglichen Mängelbeseitigung binnen 24 Stunden auf und behalte mir andernfalls eine angemessene Mietminderung sowie die Veranlassung einer Ersatzvornahme vor."
        },
        whyExplanation: "Im Mietrecht sichert eine präzise Fristsetzung und Verweis auf Mindesttemperaturen sofortiges Handeln der Hausverwaltung."
      }
    ]
  },

  {
    id: "sim_house_noise_neighbor",
    title: "Ruhezeiten & Lärmbeschwerde bei Nachbarn klären",
    category: "Wohnen & Vermieter",
    level: "B2",
    workplace: "Hausflur / Wohnungstür des Nachbarn",
    provenance: "AUS_QUELLE",
    situation: "Ihr Nachbar spielt um 23:30 Uhr unter der Woche laute Musik, während Sie am nächsten Morgen um 05:30 Uhr Frühdienst im Krankenhaus haben. Sie klingeln freundlich, aber bestimmt.",
    userRole: "Nachbar / BFD-Mitarbeiter",
    counterpartRole: "Lukas (Feiernder Nachbar)",
    objective: "Freundlich bleiben, Verständnis für Geselligkeit zeigen, aber klar die gesetzliche Nachtruhe (ab 22 Uhr) und den frühen Dienstbeginn einfordern.",
    turns: [
      {
        speaker: "Lukas",
        text: "Hi! Sorry, ist die Musik zu laut? Wir feiern nur kurz in meinen Geburtstag rein.",
        guidance: "Gratulieren Sie kurz zum Geburtstag, erklären Sie Ihre Situation (Frühdienst 05:30 Uhr im Krankenhaus) und bitten Sie darum, die Bässe/Lautstärke auf Zimmerlautstärke zu drosseln.",
        expectedCriteria: ["Glückwunsch zum Geburtstag", "Empathie für Anlass", "Eigene Schichtarbeit begründen", "Klare Bitte um Zimmerlautstärke"],
        responseTiers: {
          basic: "Alles Gute zum Geburtstag! Aber bitte mach die Musik leiser, ich muss morgen früh um 5 aufstehen.",
          natural: "Erst mal herzlichen Glückwunsch zum Geburtstag! Ich gönne euch die Feier von Herzen. Ich habe morgen früh allerdings um 05:30 Uhr Frühdienst im Klinikum und muss dringend schlafen. Wäre es möglich, dass ihr die Bässe etwas runterdreht und die Musik auf Zimmerlautstärke stellt?",
          professionalB2: "Ganz herzlichen Glückwunsch zum Geburtstag, Lukas! Ich verstehe vollkommen, dass du deinen Ehrentag zelebrieren möchtest. Da ich morgen früh um 05:30 Uhr meinen Dienst auf der Akutstation im Krankenhaus antrete, bin ich dringend auf meinen Schlaf angewiesen. Ich wäre dir sehr dankbar, wenn ihr die Lautstärke der Musik und der Bässe ab jetzt auf Zimmerlautstärke reduzieren könntet.",
          c1: "Zunächst meine aufrichtigen Glückwünsche zu deinem Geburtstag! Ich möchte eure Feierlaune keineswegs trüben. Da ich jedoch im Rahmen meines Dienstes im Universitätsklinikum morgen früh um 05:30 Uhr voll einsatzfähig sein muss, appelliere ich an deine Rücksichtnahme hinsichtlich der gesetzlichen Nachtruhe. Ich danke dir sehr für dein Verständnis, wenn ihr die Lautstärke entsprechend dämpft."
        },
        whyExplanation: "Die Kombination aus Glückwünschen und klarer Schilderung der beruflichen Verantwortung entwaffnet Konflikte sofort."
      }
    ]
  },

  // ==========================================
  // 4. FAMILIE, FESTE & WEIHNACHTEN
  // ==========================================
  {
    id: "sim_family_christmas_dinner",
    title: "Heiligabend & Weihnachtsfeier bei der Familie",
    category: "Familie, Feste & Feiern",
    level: "B2/C1",
    workplace: "Festlich geschmücktes Wohnzimmer am 24. Dezember",
    provenance: "AUS_QUELLE",
    situation: "Sie verbringen Heiligabend bei der Familie / Gastfamilie in Hessen. Nach der Bescherung am Tannenbaum stoßen alle mit einem Glas Wein / Sekt an und blicken auf das vergangene Jahr zurück.",
    userRole: "Gast / Familienmitglied",
    counterpartRole: "Großmutter / Gastgeberin Elisabeth",
    objective: "Einen herzlichen, feierlichen Toast aussprechen, Dank für die Geborgenheit und Integration ausdrücken und frohe Weihnachten wünschen.",
    turns: [
      {
        speaker: "Elisabeth",
        text: "Lieber Ali, wir freuen uns so sehr, dass du heute an Heiligabend bei uns bist und wir diesen besonderen Abend gemeinsam verbringen dürfen! Möchtest du mit uns anstoßen?",
        guidance: "Erheben Sie das Glas, bedanken Sie sich aufrichtig für die Aufnahme in die Familie, reflektieren Sie kurz über das Jahr und wünschen Sie allen ein gesegnetes Weihnachtsfest.",
        expectedCriteria: ["Dank für die Aufnahme", "Gefühl der Geborgenheit", "Reflexion über das Jahr", "Weihnachtswunsch / Toast"],
        responseTiers: {
          basic: "Danke für die Einladung. Ich freue mich sehr, hier zu sein. Frohe Weihnachten an alle!",
          natural: "Ganz herzlichen Dank, liebe Elisabeth! Es bedeutet mir unglaublich viel, heute Heiligabend mit euch in diesem warmen Kreis zu verbringen. Ich habe mich selten so herzlich aufgenommen und geborgen gefühlt. Auf ein frohes und gesegnetes Weihnachtsfest – Prost zusammen!",
          professionalB2: "Liebe Elisabeth, liebe Familie! Ich möchte diesen Moment nutzen, um euch von ganzem Herzen für eure grenzenlose Gastfreundschaft und Wärme zu danken. Als ich nach Deutschland kam, war vieles neu und herausfordernd – doch durch eure Unterstützung habe ich hier ein echtes Zuhause gefunden. Ich wünsche uns allen erholsame, besinnliche Feiertage und beste Gesundheit. Frohe Weihnachten!",
          c1: "Verehrte Elisabeth, liebe Familie! Es erfüllt mich mit tiefer Rührung und Dankbarkeit, dieses traditionsreiche Fest des Friedens in eurer Mitte begehen zu dürfen. Die gelebte Menschlichkeit und Geborgenheit, die ihr mir zuteilwerden lasst, ist für mich das wertvollste Geschenk dieses Jahres. Lasst uns das Glas erheben auf den Zusammenhalt, die Gesundheit und die gemeinsame Zukunft. Ein frohes und gesegnetes Weihnachtsfest!"
        },
        whyExplanation: "Weihnachten ist in Deutschland das emotionalste Fest des Jahres – persönliche Dankbarkeit und Wärme berühren tief."
      }
    ]
  },

  {
    id: "sim_family_birthday_toast",
    title: "Geburtstagsfeier & Gratulationsrede",
    category: "Familie, Feste & Feiern",
    level: "B2",
    workplace: "Geburtstagsfeier im Restaurant / Garten",
    provenance: "AUS_QUELLE",
    situation: "Ein geschätzter Kollege bzw. Familienfreund feiert seinen 50. Geburtstag. Sie überreichen ein Geschenk und halten einen kurzen humorvollen Trinkspruch.",
    userRole: "Gast & Gratulant",
    counterpartRole: "Jürgen (Das Geburtstagskind)",
    objective: "Herzlich gratulieren, humorvoll auf das Alter anspielen, gute Wünsche aussprechen und das Geschenk überreichen.",
    turns: [
      {
        speaker: "Jürgen",
        text: "Ali, wie schön, dass du da bist! Schön, dass du den Weg gefunden hast. Lass uns erst mal anstoßen!",
        guidance: "Überreichen Sie das Geschenk, wünschen Sie Gesundheit und Glück, machen Sie einen sympathischen Witz über die '50' und stoßen Sie an.",
        expectedCriteria: ["Herzliche Glückwünsche", "Geschenkübergabe", "Humorvoller Spruch", "Trinkspruch"],
        responseTiers: {
          basic: "Alles Gute zum 50. Geburtstag, Jürgen! Hier ist ein kleines Geschenk für dich. Auf deine Gesundheit!",
          natural: "Herzlichen Glückwunsch zum 50. Geburtstag, lieber Jürgen! Man sieht dir die fünfzig wirklich kein bisschen an – du wirst nicht älter, sondern nur erfahrener! Hier ist eine kleine Aufmerksamkeit von mir. Auf deine Gesundheit, viel Glück und ein fantastisches neues Lebensjahr!",
          professionalB2: "Lieber Jürgen, zu deinem runden Geburtstag gratuliere ich dir von ganzem Herzen! 50 Jahre sind ein wunderbarer Meilenstein – voller Erfolge, wertvoller Erfahrungen und lebendiger Geschichten. Ich habe dir ein kleines Präsent mitgebracht, das dir hoffentlich eine Freude bereitet. Ich wünsche dir für das kommende Lebensjahrzehnt unerschütterliche Gesundheit, Lebensfreude und weiterhin so viel Energie!",
          c1: "Lieber Jürgen! Zu diesem herausragenden Jubiläum entbiete ich dir meine herzlichsten Glück- und Segenswünsche. Dein unermüdlicher Tatendrang und deine lebensbejahende Art sind für uns alle eine Inspiration. Möge dir das neue Lebensjahrzehnt beste physische wie mentale Vitalität, inspirierende Momente und berufliche wie private Erfüllung bescheren. Auf dein Wohl und auf die nächsten fünfzig Jahre!"
        },
        whyExplanation: "Runde Geburtstage (30, 40, 50) werden in Deutschland mit besonderer Würdigung gefeiert."
      }
    ]
  },

  // ==========================================
  // 5. PARTNERSCHAFT & HERZ (GF / WIFEY)
  // ==========================================
  {
    id: "sim_gf_comfort_after_shift",
    title: "Nach einem schweren Tag: Freundin / Ehefrau trösten",
    category: "Partnerschaft & Herz",
    level: "B2/C1",
    workplace: "Zuhause auf dem Sofa",
    provenance: "AUS_QUELLE",
    situation: "Ihre Freundin / Ehefrau kommt völlig erschöpft und den Tränen nahe von der Arbeit nach Hause, lässt die Tasche fallen und setzt sich bedrückt auf das Sofa.",
    userRole: "Liebevoller Partner",
    counterpartRole: "Freundin / Ehefrau (Erschöpft & Traurig)",
    objective: "Warmherzig empfangen, ohne vorschnelle Ratschläge aktiv zuhören, emotionale Geborgenheit schenken und liebevolle Fürsorge zeigen.",
    turns: [
      {
        speaker: "Freundin / Ehefrau",
        text: "Heute war einfach der absolute Horror... Mein Chef hat mich vor dem ganzen Team ungerechtfertigt kritisiert und ich hatte keine einzige Pause. Ich fühle mich einfach nur leer und ausgelaugt.",
        guidance: "Nehmen Sie sie verbal und emotional in den Arm, validieren Sie ihren Schmerz ('Das tut mir so leid, Schatz'), bieten Sie Tee/Essen an und hören Sie einfach nur verständnisvoll zu.",
        expectedCriteria: ["Liebevolles Kosewort", "Emotionale Validierung", "Keine Vorwürfe/Besserwisserei", "Entlastung anbieten"],
        responseTiers: {
          basic: "Komm her, Schatz. Das tut mir leid. Willst du einen Tee trinken?",
          natural: "Komm erst mal in meine Arme, mein Schatz... Es tut mir so leid, dass dein Tag so furchtbar war. Atme tief durch. Du bist jetzt zu Hause in Sicherheit. Soll ich dir einen warmen Tee machen und dir eine Decke holen?",
          professionalB2: "Komm an mein Herz, Liebling. Es tut mir unglaublich weh zu sehen, wie sehr dich das mitgenommen hat. Das war absolut unfair von deinem Chef. Du musst mir jetzt gar nichts erklären, wenn du nicht möchtest – ruh dich erst mal aus, ich koche uns dein Lieblingsessen und bin einfach nur für dich da.",
          c1: "Mein Schatz, lass dich ganz fest umarmen. Dass du heute so einer ungerechten Behandlung ausgesetzt warst, macht mich traurig und wütend zugleich. Du musst diese Last jetzt nicht mehr alleine tragen. Lehn dich einfach an mich an, ich nehme dir heute alle Pflichten ab und sorge dafür, dass du zur Ruhe kommen kannst."
        },
        whyExplanation: "In emotionalen Momenten zählen emotionale Validierung ('Ich sehe deinen Schmerz') und praktische Entlastung mehr als rationale Ratschläge."
      }
    ]
  },

  // ==========================================
  // 6. HESSEN & FRANKFURT LOKALKOLORIT
  // ==========================================
  {
    id: "sim_hessen_coffee_banter",
    title: "Kaffeeküchen-Plausch & Frankfurter Dialekt-Banter",
    category: "Hessen & Frankfurt",
    level: "B2 (Authentisch)",
    workplace: "Kaffeeküche auf Station P2 / Universitätsklinikum",
    provenance: "AUS_QUELLE",
    situation: "Um 10:30 Uhr treffen Sie Pfleger Heinz in der Kaffeeküche. Heinz ist ein waschechter Frankfurter und begrüßt Sie mit typischem hessischen Charme.",
    userRole: "BFD-Freiwilliger",
    counterpartRole: "Pfleger Heinz (Ur-Frankfurter)",
    objective: "Locker auf Hessisch antworten, den Witz aufgreifen, Smalltalk über den Tag führen und kollegiale Nähe aufbauen.",
    turns: [
      {
        speaker: "Heinz",
        text: "Ei gude, Ali! Na, machste dir erst mal 'nen Schoppe Kaffee? Wie läuft's denn mit den Patienten uff Zimmer 4, machen die kaan Zirkus?",
        guidance: "Antworten Sie mit einem charmanten 'Gude!', bestätigen Sie den Kaffee und berichten Sie mit einer Prise Humor, dass auf Zimmer 4 alles friedlich ist.",
        expectedCriteria: ["Hessische Grußformel (Gude)", "Lockerer Kaffeeküchen-Ton", "Entwarnung mit Humor"],
        responseTiers: {
          basic: "Gude Heinz! Ja, Kaffee brauche ich. Auf Zimmer 4 ist alles ruhig.",
          natural: "Ei gude, Heinz! Ohne den Kaffee geht heute gar nix mehr! Bei Zimmer 4 ist zum Glück alles friedlich – die machen heute kaan Zirkus, die schlafen tief und fest.",
          professionalB2: "Gude Heinz! Absolut, der Kaffee ist meine Rettung für die zweite Schichthälfte! Auf Zimmer 4 läuft alles wie am Schnürchen, die Patienten sind versorgt und die Stimmung ist total entspannt. Wie sieht's drüben bei dir aus?",
          c1: "Ei gude wie, Heinz! Auf diesen Lebenselixier-Kaffee habe ich den ganzen Vormittag hingearbeitet. Bezüglich Zimmer 4 kann ich vollständige Entwarnung geben: Keinerlei Turbulenzen, alle Vitalwerte sind stabil erfasst und die Patienten sind kooperativ. Gönnen wir uns erst mal fünf Minuten Ruhe!"
        },
        whyExplanation: "Wer in Hessen mit 'Gude' und regionalen Redewendungen antwortet, bricht sofort das Eis im Pflegeteam."
      }
    ]
  }
];
