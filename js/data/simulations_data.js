// BFD-, Familien- & Partnerschafts-Simulationen (Interaktive Dialog-Szenarien)
// Stufenförmige Musterantworten: Basic (B1) -> Natürlich -> Professionell (B2) -> C1-Register

export const SIMULATIONS_DATA = [
  // ==========================================
  // 1. KLINIK & BFD (Station 2 / UKGM Marburg)
  // ==========================================
  {
    id: "sim_first_day_supervisor",
    title: "Erster Tag: Vorstellung bei der Stationsleitung",
    category: "Klinik & BFD",
    level: "B1+",
    workplace: "Stationszimmer P2 (Zentrum für Psychische Gesundheit)",
    provenance: "AUS_QUELLE",
    situation: "Sie betreten am ersten Arbeitstag um 06:45 Uhr das Stationszimmer. Die Stationsleitung, Frau Schneider, blickt von der Patientenakte auf und begrüßt Sie.",
    userRole: "Neuer BFD-Freiwilliger",
    counterpartRole: "Frau Schneider (Stationsleitung)",
    objective: "Sich freundlich, klar und strukturiert vorstellen, Rollenbereitschaft signalisieren und nach den ersten Schritten für den Tag fragen.",
    turns: [
      {
        speaker: "Frau Schneider",
        text: "Guten Morgen! Sie müssen der neue BFDler sein. Herzlich willkommen auf Station P2. Wie heißen Sie und haben Sie gut hergefunden?",
        guidance: "Stellen Sie sich mit vollem Namen vor, bestätigen Sie Ihre Rolle als Bundesfreiwilliger und bedanken Sie sich für den Empfang.",
        expectedCriteria: ["Name nennen", "Freundlicher Gruß", "Bestätigung der Ankunft", "Höfliche Ansprache (Sie)"],
        responseTiers: {
          basic: "Guten Morgen. Ich bin Ali. Ja, ich habe den Weg gefunden. Ich bin der neue BFDler.",
          natural: "Guten Morgen, Frau Schneider! Mein Name ist Ali. Ja, vielen Dank, ich habe gut hergefunden. Ich freue mich sehr auf meinen Bundesfreiwilligendienst bei Ihnen auf Station.",
          professionalB2: "Guten Morgen, Frau Schneider! Vielen Dank für die freundliche Aufnahme. Mein Name ist Ali, ich trete heute meinen BFD bei Ihnen an. Die Anfahrt vom Bahnhof Marburg hat reibungslos geklappt. Wo kann ich mich umziehen und wer ist heute meine Ansprechperson?",
          c1: "Guten Morgen, Frau Schneider! Herzlichen Dank für das Willkommen. Mein Name ist Ali, und ich freue mich außerordentlich darauf, mein Freiwilligenjahr hier im Zentrum für Psychische Gesundheit zu absolvieren. Der Weg hierher war völlig unkompliziert. Wo darf ich meine Sachen deponieren, und mit wem darf ich den heutigen Tagesablauf abstimmen?"
        },
        whyExplanation: "Die professionelle B2/C1-Antwort verbindet Höflichkeit mit proaktiver Organisation (Umkleide, Ansprechpartner), was sofortige Verlässlichkeit signalisiert."
      },
      {
        speaker: "Frau Schneider",
        text: "Sehr schön, Ali! Der Umkleideraum ist im Untergeschoss, Spind Nummer 14 gehört Ihnen. Die Dienstkleidung liegt bereit. Wenn Sie umgezogen sind, kommen Sie bitte direkt wieder hoch zur Frühbesprechung. Haben Sie vorab noch dringende Fragen?",
        guidance: "Bedanken Sie sich, bestätigen Sie die Anweisung (Umkleide UG, Spind 14) und kündigen Sie an, zur Übergabe pünktlich wieder da zu sein.",
        expectedCriteria: ["Bestätigung der Anweisung", "Pünktlichkeit zusichern", "Dank"],
        responseTiers: {
          basic: "Danke, ich gehe mich jetzt umziehen und komme wieder.",
          natural: "Alles klar, vielen Dank! Ich ziehe mich schnell im Untergeschoss um und bin zur Übergabe pünktlich wieder hier im Stationszimmer.",
          professionalB2: "Vielen Dank für die Einweisung, Frau Schneider! Ich gehe direkt in die Umkleide zu Spind 14 und bin zur Frühbesprechung pünktlich wieder im Stationszimmer.",
          c1: "Hervorragend, vielen Dank! Ich werde mich umgehend im Untergeschoss umziehen und pünktlich zur Frühbesprechung wieder hier sein. Weitere Fragen klären wir gerne im Anschluss an die Übergabe."
        },
        whyExplanation: "Wiederholen der Eckdaten (UG, Spind 14, Frühbesprechung) zeigt aktives Zuhören und vermeidet Missverständnisse."
      }
    ]
  },

  {
    id: "sim_patient_medication_request",
    title: "Sicherheit: Patient verlangt Bedarfsmedikation",
    category: "Klinik & BFD",
    level: "B2",
    workplace: "Flur der geschützten Akutstation",
    provenance: "AUS_QUELLE",
    situation: "Ein sichtlich angespannter Patient (Herr Müller) kommt im Flur auf Sie zu, zittert an den Händen und fordert vehement eine Beruhigungstablette von Ihnen.",
    userRole: "BFD-Freiwilliger",
    counterpartRole: "Herr Müller (Angespannter Patient)",
    objective: "Ruhig bleiben, absolute Rollengrenze wahren (keine Medikamente!), Empathie zeigen und die zuständige Pflegefachkraft herbeirufen.",
    turns: [
      {
        speaker: "Herr Müller",
        text: "Ich halte das nicht mehr aus! Mir zerreißt es den Kopf. Geben Sie mir sofort meine Bedarfsmedikation aus dem Schrank, ich brauche die Tablette jetzt!",
        guidance: "Bleiben Sie ruhig. Signalisieren Sie Verständnis für seine Notlage, aber stellen Sie unmissverständlich klar, dass Sie als BFDler keine Medikamente ausgeben dürfen, und bieten Sie an, sofort die zuständige Pflegekraft zu holen.",
        expectedCriteria: ["Ruhiger Ton", "Verständnis/Validierung", "Klare Rollengrenze (keine Medikamente)", "Sofortige Weiterleitung an Fachkraft"],
        responseTiers: {
          basic: "Ich darf Ihnen keine Medikamente geben. Ich hole die Schwester.",
          natural: "Herr Müller, ich sehe, wie schlecht es Ihnen gerade geht. Als BFDler darf ich Ihnen leider keine Tabletten geben. Ich hole aber sofort Schwester Julia für Sie!",
          professionalB2: "Herr Müller, ich nehme wahr, dass Sie unter enormer Anspannung stehen. Als Bundesfreiwilliger darf ich Ihnen aus rechtlichen und Sicherheitsgründen keine Medikamente aushändigen. Kommen Sie bitte kurz mit zum Stationszimmer, ich informiere sofort Ihre zuständige Pflegefachkraft.",
          c1: "Herr Müller, ich spüre Ihre erhebliche Belastung in diesem Moment. Bitte haben Sie Verständnis dafür, dass ich als Freiwilliger keinesfalls befugt bin, in den Medikamentenschrank einzugreifen. Lassen Sie uns gemeinsam zur Stationszentrale gehen – ich veranlasse umgehend, dass die diensthabende Pflegefachkraft Ihre Bedarfsmedikation prüft."
        },
        whyExplanation: "Deeskalation erfordert Empathie ohne Nachgeben bei Sicherheitsgrenzen. Der 'magische Satz' schützt Patient und BFDler rechtlich."
      }
    ]
  },

  {
    id: "sim_sbar_handover",
    title: "Klinische Schichtübergabe nach SBAR-Schema",
    category: "Klinik & BFD",
    level: "B2/C1",
    workplace: "Besprechungsraum Station 2",
    provenance: "AUS_QUELLE",
    situation: "Zum Schichtwechsel um 14:00 Uhr übergeben Sie Ihre Beobachtungen bezüglich Herrn Becker an die Spätdienst-Pflegekraft Sarah.",
    userRole: "BFD-Freiwilliger",
    counterpartRole: "Sarah (Pflegefachkraft im Spätdienst)",
    objective: "Strukturierte Übergabe nach SBAR (Situation, Background, Assessment, Recommendation) bezüglich Vitalwerten und Verhaltensbeobachtung.",
    turns: [
      {
        speaker: "Sarah",
        text: "Hi Ali! Wie war dein Dienst? Gab es bei Herrn Becker auf Zimmer 12 heute Vormittag irgendwelche Auffälligkeiten beim Essen oder bei den Vitalwerten?",
        guidance: "Berichten Sie strukturiert: Blutdruck war leicht erhöht (145/90), er hat das Mittagessen verweigert, wirkte aber nach dem Spaziergang im Klinikpark deutlich ruhiger.",
        expectedCriteria: ["Konkrete Werte nennen", "Nahrungsaufnahme erwähnen", "Psychischen Zustand schildern", "Strukturierte Sprache"],
        responseTiers: {
          basic: "Er hat nicht gegessen und der Blutdruck war hoch. Nach dem Park ging es ihm besser.",
          natural: "Herr Becker hatte heute Vormittag einen Blutdruck von 145 zu 90. Das Mittagessen hat er leider abgelehnt. Aber nach unserem Spaziergang im Park um 11 Uhr wirkte er viel entspannter.",
          professionalB2: "Zur Übergabe von Herrn Becker: Der Blutdruck lag um 09:30 Uhr bei 145/90 mmHg. Die Mittagsmahlzeit hat er verweigert, aber ca. 600 ml Wasser getrunken. Während unserer Begleitung in den Park war er ansprechbar und wirkte deutlich beruhigter.",
          c1: "Bezüglich Herrn Becker auf Zimmer 12: Die Vitalwertkontrolle am Vormittag ergab eine leichte Hypertonie mit 145/90 mmHg. Die Nahrungsaufnahme verweigerte er zwar, die Flüssigkeitszufuhr lag jedoch bei etwa 600 ml. Im Rahmen der aktivierenden Begleitung im Park zeigte er sich kooperativ und motorisch wesentlich weniger agitiert."
        },
        whyExplanation: "Präzise Fachtermini (Hypertonie, Nahrungsaufnahme, agitiert) erleichtern der Pflegefachkraft die sofortige Dokumentation im Kurvenblatt."
      }
    ]
  },

  {
    id: "sim_deescalation_smoker_area",
    title: "Deeskalation: Patient will unerlaubt Station verlassen",
    category: "Klinik & BFD",
    level: "B2",
    workplace: "Ausgangsbereich / Foyer der Station",
    provenance: "AUS_QUELLE",
    situation: "Frau Weber, die auf richterlichen Beschluss (Unterbringung) auf Station ist, drängt wütend gegen die Ausgangstür und verlangt, die Klinik sofort zu verlassen.",
    userRole: "BFD-Freiwilliger",
    counterpartRole: "Frau Weber (Aufgebrachte Patientin)",
    objective: "Nicht körperlich festhalten, Deeskalationssprache anwenden, räumlichen Abstand halten und das Stationsteam herbeirufen.",
    turns: [
      {
        speaker: "Frau Weber",
        text: "Machen Sie sofort die Tür auf! Sie haben kein Recht, mich hier einzusperren! Wenn Sie mich nicht rauslassen, trete ich die Scheibe ein!",
        guidance: "Bleiben Sie ruhig, blockieren Sie nicht bedrohlich den Weg, halten Sie mindestens 1,5 Meter Abstand und reden Sie mit ruhiger, tiefer Stimme.",
        expectedCriteria: ["Ruhe bewahren", "Keine Provokation/Körperkontakt", "Gefühle anerkennen", "Hilfe rufen"],
        responseTiers: {
          basic: "Bitte treten Sie nicht gegen die Scheibe. Ich rufe den Arzt.",
          natural: "Frau Weber, bitte bleiben Sie einen Moment stehen. Ich sehe, wie wütend Sie sind. Ich darf die Tür nicht aufschließen, aber ich hole sofort den Stationsarzt, damit Sie mit ihm sprechen können.",
          professionalB2: "Frau Weber, ich trete einen Schritt zurück. Ich höre Ihren großen Ärger. Bitte beschädigen Sie nicht die Scheibe. Ich kann die Tür nicht öffnen, aber ich bitte sofort Herrn Dr. Keller hinzu, um Ihre Situation direkt zu klären.",
          c1: "Frau Weber, ich nehme Ihre enorme Verärgerung über die Situation wahr. Ich halte respektvollen Abstand. Da ich aus rechtlichen Gründen nicht schlüsselberechtigt bin, verständige ich augenblicklich den Dienstarzt, damit Sie Ihr Anliegen umgehend im persönlichen Gespräch vortragen können."
        },
        whyExplanation: "In der Akutpsychiatrie gilt: Sicherheit vor Konfrontation. Eigene Grenzen verbalisieren, Abstand wahren und Fachpersonal hinzuziehen."
      }
    ]
  },

  // ==========================================
  // 2. FAMILIE & ALLTAG IN DEUTSCHLAND
  // ==========================================
  {
    id: "sim_family_dinner",
    title: "Abendessen bei der Familie / Gastfamilie",
    category: "Familie & Alltag",
    level: "B1+ → B2",
    workplace: "Esszimmer im Familienhaushalt",
    provenance: "AUS_QUELLE",
    situation: "Sie sind zum Sonntagsabendessen bei der Familie eingeladen. Die Gastgeberin, Frau Klein, serviert das Essen und erkundigt sich nach Ihren ersten Eindrücken in Marburg.",
    userRole: "Gast / Familienmitglied",
    counterpartRole: "Frau Klein (Gastgeberin)",
    objective: "Höflich für das Essen danken, über den Alltag und BFD erzählen, deutsche Tischkonversation meistern und Interesse an der Familie zeigen.",
    turns: [
      {
        speaker: "Frau Klein",
        text: "Greif bitte kräftig zu, Ali! Es gibt Rinderbraten mit Spätzle und frischem Salat. Wie gefällt dir Marburg bisher und wie läuft es im Krankenhaus?",
        guidance: "Bedanken Sie sich für das Essen, loben Sie die Zubereitung und schildern Sie positiv, aber authentisch Ihre Eindrücke von der Stadt und der Arbeit.",
        expectedCriteria: ["Dank für das Essen", "Lob der Speisen", "Eindrücke zu Marburg", "Bericht über das Krankenhaus"],
        responseTiers: {
          basic: "Danke, das Essen schmeckt sehr gut. Marburg ist schön und im Krankenhaus ist es interessant.",
          natural: "Vielen Dank, Frau Klein, das riecht wirklich köstlich! Marburg gefällt mir total gut, besonders die Altstadt. Und im Krankenhaus lerne ich jeden Tag unglaublich viel Neues.",
          professionalB2: "Herzlichen Dank, Frau Klein! Der Braten sieht wirklich hervorragend aus. Marburg hat mich sehr positiv überrascht – die steilen Gassen und das Schloss haben ein tolles Flair. Im Universitätsklinikum werde ich vom Pflegeteam sehr herzlich unterstützt, was mir den Einstieg enorm erleichtert.",
          c1: "Ganz herzlichen Dank für die Einladung und dieses wundervolle Essen, Frau Klein! Die historische Kulisse von Marburg fasziniert mich sehr. Auch meine ersten Wochen im Universitätsklinikum empfinde ich als äußerst bereichernd – die interdisziplinäre Zusammenarbeit auf Station gibt mir wertvolle Einblicke in das deutsche Gesundheitssystem."
        },
        whyExplanation: "Natürliche Wertschätzung und ein lebendiger Bericht über Alltagserfahrungen schaffen sofortige familiäre Nähe und Sympathie."
      },
      {
        speaker: "Herr Klein",
        text: "Möchtest du noch einen Nachschlag, Ali? Es ist noch reichlich da! Und wie kommst du eigentlich mit den Behörden und der Wohnungssuche voran?",
        guidance: "Höflich antworten (annehmen oder satt sein), für das Angebot danken und kurz über den Stand bei Bürgeramt/Wohnung berichten.",
        expectedCriteria: ["Reaktion auf Nachschlag", "Dank", "Statusbericht Wohnung/Amt"],
        responseTiers: {
          basic: "Ja, gern noch etwas Fleisch. Mit der Wohnung suche ich noch.",
          natural: "Ein ganz kleines Stück Fleisch nehme ich gerne noch, danke! Bei der Wohnungssuche habe ich nächste Woche zwei Besichtigungen, und beim Bürgerbüro war die Anmeldung zum Glück ganz unkompliziert.",
          professionalB2: "Gern nehme ich noch eine kleine Portion Spätzle, es schmeckt wirklich vorzüglich. Was die Bürokratie betrifft: Die Ummeldung beim Einwohnermeldeamt hat reibungslos geklappt. Für die Wohnungssuche habe ich bereits einige Bewerbungsunterlagen vorbereitet und hoffe auf eine zeitnahe Rückmeldung.",
          c1: "Ein klein wenig von den Spätzle nehme ich sehr gerne noch, herzlichen Dank! Was die behördlichen Angelegenheiten anbelangt, verlief die Registrierung absolut planmäßig. Bezüglich der Wohnraumbeschaffung habe ich mein Profil auf den gängigen Portalen hinterlegt und stehe bereits im Austausch mit zwei Vermietern."
        },
        whyExplanation: "Flüssige Antworten auf Nachfragen verbinden Höflichkeitsfloskeln mit konkreten Fortschritten im Alltag."
      }
    ]
  },

  {
    id: "sim_family_weekend_chores",
    title: "Wochenendplanung & Haushaltsorganisation",
    category: "Familie & Alltag",
    level: "B2",
    workplace: "Wohnzimmer / Küche",
    provenance: "AUS_QUELLE",
    situation: "Am Samstagmorgen besprechen Sie mit Ihren Mitbewohnern bzw. Familienangehörigen die anstehenden Aufgaben (Einkaufen, Putzen) und den gemeinsamen Sonntagsausflug.",
    userRole: "Familienmitglied / Mitbewohner",
    counterpartRole: "Jonas (Mitbewohner / Bruder)",
    objective: "Aufgaben proaktiv übernehmen, Vorschläge für den Einkauf machen und einen fairen Kompromiss für das Wochenende finden.",
    turns: [
      {
        speaker: "Jonas",
        text: "Morgen steht der Wocheneinkauf an und die Küche müsste auch mal wieder gründlich geputzt werden. Wer übernimmt was? Und hast du eine Idee für morgen Nachmittag?",
        guidance: "Bieten Sie an, einen Teil der Aufgaben (z. B. Bad/Küche oder Großeinkauf) zu übernehmen, und schlagen Sie eine gemeinsame Aktivität vor (z. B. Ausflug zur Lahn).",
        expectedCriteria: ["Proaktive Aufgabenübernahme", "Konkreter Vorschlag", "Kooperativer Ton"],
        responseTiers: {
          basic: "Ich kann einkaufen gehen. Und morgen können wir an die Lahn fahren.",
          natural: "Ich übernehme gerne den Großeinkauf beim Supermarkt, wenn du dafür die Küche machst. Und morgen Nachmittag könnten wir doch bei dem schönen Wetter an die Lahn spazieren gehen!",
          professionalB2: "Lass uns das fair aufteilen: Ich schreibe die Einkaufsliste und besorge alles im Supermarkt, während du dich um die Küche kümmerst. Für morgen Nachmittag schlage ich vor, dass wir eine kleine Fahrradtour entlang der Lahn machen – was hältst du davon?",
          c1: "Ich plädiere für eine pragmatische Aufgabenteilung: Ich übernehme den Wocheneinkauf inklusive Getränkekisten, sodass du freie Hand für die Grundreinigung der Küche hast. Im Anschluss an die Erledigungen böte sich morgen bei Sonnenschein ein ausgedehnter Ausflug ins Lahntal an – fändest du das passend?"
        },
        whyExplanation: "Klare Vorschläge mit 'Lass uns...' oder 'Was hältst du davon...' demonstrieren natürliche Verhandlungskompetenz im Alltag."
      }
    ]
  },

  // ==========================================
  // 3. PARTNERSCHAFT & HERZ (GF / WIFEY)
  // ==========================================
  {
    id: "sim_gf_comfort_after_shift",
    title: "Nach einem schweren Tag: Freundin / Ehefrau trösten",
    category: "Partnerschaft & Herz",
    level: "B2",
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
        guidance: "Nehmen Sie sie in den Arm (verbal & emotional), validieren Sie ihren Schmerz ('Das tut mir so leid, Schatz'), bieten Sie etwas zu trinken/essen an und hören Sie einfach nur verständnisvoll zu.",
        expectedCriteria: ["Liebevolles Kosewort", "Emotionale Validierung", "Keine Vorwürfe/Besserwisserei", "Entlastung anbieten"],
        responseTiers: {
          basic: "Komm her, Schatz. Das tut mir leid. Willst du einen Tee trinken?",
          natural: "Komm erst mal in meine Arme, mein Schatz... Es tut mir so leid, dass dein Tag so furchtbar war. Atme tief durch. Du bist jetzt zu Hause in Sicherheit. Soll ich dir einen warmen Tee machen und dir eine Decke holen?",
          professionalB2: "Komm an mein Herz, Liebling. Es tut mir unglaublich weh zu sehen, wie sehr dich das mitgenommen hat. Das war absolut unfair von deinem Chef. Du musst mir jetzt gar nichts erklären, wenn du nicht möchtest – ruh dich erst mal aus, ich koche uns dein Lieblingsessen und bin einfach nur für dich da.",
          c1: "Mein Schatz, lass dich ganz fest umarmen. Dass du heute so einer ungerechten Behandlung ausgesetzt warst, macht mich traurig und wütend zugleich. Du musst diese Last jetzt nicht mehr alleine tragen. Lehn dich einfach an mich an, ich nehme dir heute alle Pflichten ab und sorge dafür, dass du zur Ruhe kommen kannst."
        },
        whyExplanation: "In emotionalen Momenten zählen emotionale Validierung ('Ich sehe deinen Schmerz') und praktische Entlastung mehr als rationale Ratschläge."
      },
      {
        speaker: "Freundin / Ehefrau",
        text: "Danke, dass du immer für mich da bist... Es tut so gut, deine Stimme zu hören. Manchmal habe ich einfach Angst, dass ich den Anforderungen im Job nicht gewachsen bin.",
        guidance: "Bauen Sie ihr Selbstvertrauen auf: Erinnern Sie sie an ihre Stärken, versichern Sie ihr Ihre bedingungslose Liebe und Loyalität.",
        expectedCriteria: ["Liebesbekundung", "Bestärkung des Selbstwertgefühls", "Zukunftszuversicht"],
        responseTiers: {
          basic: "Du bist sehr schlau und stark, Schatz. Ich liebe dich.",
          natural: "Zweifle bitte niemals an dir selbst, Schatz! Du bist unglaublich kompetent, klug und herzlich. Ein schlechter Tag ändert überhaupt nichts an deinem großen Können. Ich glaube immer an dich und ich liebe dich von ganzem Herzen.",
          professionalB2: "Mein Schatz, bitte lass dir von so einem Tag nicht deinen Selbstwert nehmen. Du leistest jeden Tag Großartiges und hast schon so viele schwierige Hürden mit Bravour gemeistert. Ich bin unfassbar stolz auf dich und stehe bedingungslos hinter dir – egal was passiert.",
          c1: "Liebling, diese Zweifel sind nach solch einer Belastung verständlich, aber sie spiegeln nicht die Realität wider. Du verfügst über eine außergewöhnliche Stärke, Fachkompetenz und Integrität. Wir stehen das gemeinsam durch, und du hast in mir immer deinen verlässlichsten Rückhalt. Ich liebe dich über alles."
        },
        whyExplanation: "Tiefe partnerschaftliche Kommunikation stärkt die emotionale Bindung durch bedingungslose Bestätigung und liebevolle Worte."
      }
    ]
  },

  {
    id: "sim_gf_future_planning",
    title: "Zukunfts- & Wohnungsplanung mit der Partnerin",
    category: "Partnerschaft & Herz",
    level: "B2",
    workplace: "Küchentisch bei einer Tasse Kaffee",
    provenance: "AUS_QUELLE",
    situation: "Sie sitzen sonntags gemütlich zusammen und sprechen über die gemeinsame nächste Lebensphase: eine größere Wohnung, gemeinsame Reisen und die Aufteilung der Ersparnisse.",
    userRole: "Partner / Ehemann",
    counterpartRole: "Freundin / Ehefrau",
    objective: "Wünsche empathisch abstimmen, gemeinsame Träume visualisieren und konstruktiv über Budget und Prioritäten sprechen.",
    turns: [
      {
        speaker: "Freundin / Ehefrau",
        text: "Schatz, schau mal hier auf ImmoScout: Diese 3-Zimmer-Wohnung mit Balkon in der Nähe vom Schlosspark wäre mein absoluter Traum! Meinst du, wir können uns die Miete leisten, wenn du deinen BFD machst?",
        guidance: "Freude über den Traum teilen, realistisch und optimistisch die Finanzen durchgehen und vorschlagen, einen Besichtigungstermin zu vereinbaren.",
        expectedCriteria: ["Begeisterung teilen", "Finanzielle Sicherheit/Pragmatismus", "Konkreter nächster Schritt"],
        responseTiers: {
          basic: "Die Wohnung sieht schön aus. Wir können unser Geld zusammenrechnen und besichtigen.",
          natural: "Die sieht ja wunderschön aus, Schatz! Mit dem Balkon wäre das perfekt für uns. Lass uns kurz unsere Einnahmen und das BFD-Taschengeld zusammenrechnen – ich glaube, wenn wir sparsam wirtschaften, kriegen wir das gut hin. Soll ich direkt eine Anfrage schreiben?",
          professionalB2: "Was für ein toller Fund, Liebling! Der Grundriss und die Lage am Schlosspark sind wirklich traumhaft. Wenn wir mein Taschengeld, dein Gehalt und unsere fixen monatlichen Ausgaben kalkulieren, liegt die Warmmiete absolut im machbaren Rahmen. Lass uns heute Abend direkt die Bewerbungsunterlagen absenden!",
          c1: "Ein fantastisches Objekt, mein Schatz! Die Kombination aus zentrumsnaher Lage und Grünfläche würde unsere Lebensqualität enorm steigern. Aus wirtschaftlicher Sicht ist die Warmmiete durch unsere kombinierte Budgetplanung vollkommen tragbar. Ich schlage vor, dass wir umgehend ein aussagekräftiges Anschreiben formulieren, um unsere Chancen auf einen Besichtigungstermin zu maximieren."
        },
        whyExplanation: "Gemeinsame Zukunftsplanung verbindet Begeisterung mit verlässlicher Partnerschaftlichkeit."
      }
    ]
  },

  {
    id: "sim_gf_resolving_misunderstanding",
    title: "Konfliktklärung ohne Vorwürfe (Ich-Botschaften)",
    category: "Partnerschaft & Herz",
    level: "B2/C1",
    workplace: "Wohnzimmer am Abend",
    provenance: "AUS_QUELLE",
    situation: "Wegen der anstrengenden Schichten im Krankenhaus kam es in den letzten Tagen zu kleinen Spannungen und verpassten Verabredungen. Sie möchten das Gespräch suchen und die Wogen liebevoll glätten.",
    userRole: "Reflektierter Partner",
    counterpartRole: "Freundin / Ehefrau",
    objective: "Ohne Verteidigungshaltung oder Vorwürfe die eigenen Gefühle erklären, Verständnis für die Enttäuschung der Partnerin zeigen und eine liebevolle Lösung vereinbaren.",
    turns: [
      {
        speaker: "Freundin / Ehefrau",
        text: "Ich hatte in den letzten Tagen oft das Gefühl, dass du mit deinen Gedanken nur noch im Krankenhaus bist und ich an zweiter Stelle stehe. Als du gestern wieder zu spät kamst, war ich wirklich traurig.",
        guidance: "Reagieren Sie nicht defensiv ('Ich muss schließlich arbeiten!'), sondern spiegeln Sie ihr Gefühl, entschuldigen Sie sich für die Unruhe und betonen Sie, wie wichtig sie Ihnen ist.",
        expectedCriteria: ["Keine Abwehrhaltung", "Verständnis spiegeln", "Aufrichtige Entschuldigung", "Liebesbekundung & Zeitfenster vereinbaren"],
        responseTiers: {
          basic: "Es tut mir leid, dass ich zu spät war. Du bist mir sehr wichtig, Schatz.",
          natural: "Es tut mir von Herzen leid, Schatz. Ich verstehe total, dass du traurig warst. Die ersten Wochen auf Station sind so voll mit Eindrücken, dass ich manchmal den Kopf voll habe. Aber du stehst für mich immer an erster Stelle. Lass uns dieses Wochenende ganz ohne Handy nur für uns zwei reservieren.",
          professionalB2: "Danke, dass du mir das so offen und ehrlich sagst, Liebling. Es tut mir aufrichtig leid, dass ich dir unabsichtlich das Gefühl gegeben habe, vernachlässigt zu werden. Mein Kopf war von den Klinikfällen überreizt, aber das ist keine Entschuldigung. Du bist das Wichtigste in meinem Leben. Lass uns feste Abendrituale einführen, an denen das Krankenhaus draußen bleibt.",
          c1: "Ich bin dir sehr dankbar für deine Offenheit, mein Schatz. Es schmerzt mich zu hören, dass mein Verhalten bei dir den Eindruck erweckt hat, du hättest keine Priorität. Die hohe mentale Belastung des Dienstbeginns hat mich absorbiert, doch das darf unsere Zweisamkeit keinesfalls beeinträchtigen. Ich möchte mich aufrichtig bei dir entschuldigen und vorschlagen, dass wir jeden Abend eine bewusste Stunde exklusiver Paarzeit fest etablieren."
        },
        whyExplanation: "Gewaltfreie Kommunikation in der Beziehung basiert auf Wertschätzung, Selbstreflexion und dem Angebot konkreter Verbindlichkeit."
      }
    ]
  }
];
