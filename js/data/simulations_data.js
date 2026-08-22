// BFD-Simulationen — Interaktive, mehrstufige Kommunikationsszenarien
// Jedes Szenario enthält: Situation, Dialog, Ziel, Kriterien, Bewertungslogik, und gestufte Musterantworten (Basic, Natürlich, B2, C1)

export const SIMULATIONS_DATA = [
  {
    id: "sim_first_day_supervisor",
    title: "Erster Tag: Vorstellung bei der Stationsleitung",
    category: "Onboarding & Team",
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
    category: "Sicherheit & Grenzen",
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
        guidance: "Bleiben Sie ruhig, wahren Sie einen Schritt Abstand. Sagen Sie klar, dass Sie als BFDler keine Medikamente ausgeben dürfen, aber sofort die Pflegekraft holen.",
        expectedCriteria: ["Keine Medikamente versprechen", "Klare Rollengrenze", "Empathie/Validierung", "Pflegefachkraft informieren", "Ruhiger Ton"],
        responseTiers: {
          basic: "Das darf ich nicht. Ich hole Schwester Sarah.",
          natural: "Herr Müller, ich sehe, dass es Ihnen schlecht geht. Ich darf Ihnen als Freiwilliger aber keine Medikamente geben. Ich hole sofort Schwester Sarah für Sie.",
          professionalB2: "Herr Müller, ich nehme wahr, wie stark Ihre Anspannung gerade ist. Da ich als Bundesfreiwilliger keine Medikamente ausgeben darf, hole ich sofort Ihre zuständige Pflegefachkraft, Schwester Sarah. Setzen Sie sich bitte kurz hierhin.",
          c1: "Herr Müller, ich sehe, wie akut belastend die Situation für Sie ist. Aus rechtlichen Gründen und zu Ihrer eigenen Sicherheit bin ich als Freiwilligendienstleistender nicht zur Medikamentenausgabe befugt. Ich werde augenblicklich Schwester Sarah verständigen, damit Sie fachgerecht versorgt werden. Bitte nehmen Sie derweil kurz auf dem Sessel Platz."
        },
        whyExplanation: "Medikamentenausgabe durch BFDler ist ein schwerer Verstoß gegen das Arzneimittel- und Haftungsrecht. Die Antwort validiert den Zustand des Patienten und bietet sofortige, sichere Hilfe an."
      },
      {
        speaker: "Herr Müller",
        text: "Immer muss man warten! Aber gut... bitte beeilen Sie sich, ich warte hier auf dem Stuhl.",
        guidance: "Bestätigen Sie dem Patienten kurz, dass Sie sofort losgehen, und informieren Sie die Fachkraft.",
        expectedCriteria: ["Sofortiges Handeln ankündigen", "Beruhigung"],
        responseTiers: {
          basic: "Ja, ich gehe sofort.",
          natural: "Ich gehe direkt ins Stationszimmer und sage Schwester Sarah Bescheid. Ich bin gleich wieder bei Ihnen.",
          professionalB2: "Ich gehe sofort ins Stationszimmer. Schwester Sarah kommt unverzüglich zu Ihnen.",
          c1: "Vielen Dank für Ihre Geduld, Herr Müller. Ich verständige Schwester Sarah auf der Stelle."
        },
        whyExplanation: "Kurze, verlässliche Handlungszusage ohne endlose Diskussionen deeskaliert die Wartezeit."
      }
    ]
  },

  {
    id: "sim_patient_secret_request",
    title: "Grenzen: Patient bittet um ein Geheimnis",
    category: "Ethik & Schweigepflicht",
    level: "B2",
    workplace: "Patientenzimmer",
    provenance: "AUS_QUELLE",
    situation: "Eine depressive Jugendliche (Lena, 17 Jahre) sitzt auf ihrem Bett und sagt leise zu Ihnen, dass sie Ihnen etwas Wichtiges anvertrauen möchte, aber nur, wenn Sie es niemandem auf Station weitersagen.",
    userRole: "BFD-Freiwilliger",
    counterpartRole: "Lena (Patientin)",
    objective: "Kein blindes Schweigeversprechen abgeben, Teamtransparenz erklären, Gesprächsbereitschaft anbieten.",
    turns: [
      {
        speaker: "Lena",
        text: "Ali, ich muss dir was erzählen... aber du musst mir versprechen, dass du es auf gar keinen Fall den Ärzten oder den Schwestern sagst! Schwörst du?",
        guidance: "Erklären Sie einfühlsam, dass Sie als Teil des Teams keine Geheimnisse versprechen können, die ihre Sicherheit betreffen, aber gerne für sie da sind.",
        expectedCriteria: ["Kein Geheimnis versprechen", "Teamverantwortung erklären", "Wertschätzung zeigen", "Hilfe anbieten"],
        responseTiers: {
          basic: "Das kann ich nicht versprechen. Ich muss alles dem Team sagen.",
          natural: "Lena, ich höre dir gerne zu. Aber ich kann dir vorab nicht versprechen, dass ich es für mich behalte, wenn es um deine Sicherheit geht. Wir arbeiten hier als Team, um dir zu helfen.",
          professionalB2: "Lena, ich schätze dein Vertrauen sehr und bin gerne für dich da. Aber ich kann dir kein Geheimnis versprechen. Wenn es um deine Gesundheit oder Sicherheit geht, muss ich das Team informieren, weil wir alle gemeinsam für dich sorgen.",
          c1: "Lena, es bedeutet mir viel, dass du dich an mich wendest. Dennoch möchte ich ehrlich zu dir sein: Ein bedingungsloses Schweigeversprechen kann ich dir nicht geben. Sollte es um deine Unversehrtheit gehen, bin ich verpflichtet, das Behandlungsteam einzubinden, damit du die bestmögliche Unterstützung erhältst. Möchtest du mir trotzdem erzählen, was dich bedrückt?"
        },
        whyExplanation: "In der Psychiatrie darf NIEMALS ein Vorab-Geheimnis versprochen werden (Gefahr von Suizidabsprachen oder Selbstverletzungen). Ehrliche Transparenz schützt Patient und BFDler."
      }
    ]
  },

  {
    id: "sim_isbar_handover",
    title: "Klinikalltag: Schichtübergabe nach ISBAR-Schema",
    category: "Krankenhaus & Übergabe",
    level: "B2+",
    workplace: "Dienstübergaberaum Station P2",
    provenance: "AUS_QUELLE",
    situation: "Am Ende des Frühdienstes bittet die Schichtleitung Sie, Ihre Beobachtungen aus dem Gemeinschaftsraum kurz für den Spätdienst zusammenzufassen.",
    userRole: "BFD-Freiwilliger",
    counterpartRole: "Herr Becker (Schichtleitung Spätdienst)",
    objective: "Strukturierte, sachliche Beobachtungen ohne Diagnosen wiedergeben (Identifikation, Situation, Beobachtung, Empfehlung).",
    turns: [
      {
        speaker: "Herr Becker",
        text: "Ali, wie war der Vormittag im Gemeinschaftsraum? Gab es Auffälligkeiten bei Herrn Weber oder Frau Klein?",
        guidance: "Berichten Sie sachlich: Herr Weber war ruhig und hat am Spielangebot teilgenommen; Frau Klein hat das Mittagessen verweigert und wirkt sehr zurückgezogen.",
        expectedCriteria: ["Sachliche Fakten", "Keine Eigendiagnosen", "Konkrete Uhrzeiten/Aktivitäten", "Präzises Deutsch"],
        responseTiers: {
          basic: "Herr Weber war gut. Er hat gespielt. Frau Klein hat nichts gegessen und war traurig.",
          natural: "Herr Weber hat heute aktiv am Mensch-ärgere-dich-nicht-Spiel teilgenommen und wirkte entspannt. Frau Klein hingegen hat das Mittagessen verweigert und sich den ganzen Vormittag in ihr Zimmer zurückgezogen.",
          professionalB2: "Im Gemeinschaftsraum verlief der Vormittag weitgehend ruhig. Herr Weber zeigte eine gute Interaktion und nahm aktiv am Gesellschaftsspiel teil. Bei Frau Klein ist mir jedoch aufgefallen, dass sie das Mittagessen verweigert hat und sehr zurückgezogen auf ihrem Zimmer blieb.",
          c1: "Gerne. Die Situation im Aufenthaltsbereich gestaltete sich überwiegend stabil. Herr Weber wies eine erfreuliche Kooperationsbereitschaft auf und interagierte adäquat bei der Spielaktivität. Auffällig war hingegen das ausgeprägte Rückzugsverhalten von Frau Klein, welche zudem die Nahrungsaufnahme zur Mittagszeit vollständig ablehnte."
        },
        whyExplanation: "Klinische Übergaben verlangen Trennung von Fakt und Deutung. Die B2/C1-Formulierungen nutzen standardisierte Begrifflichkeiten ('Interaktion', 'Rückzugsverhalten', 'Nahrungsverweigerung')."
      }
    ]
  }
];
