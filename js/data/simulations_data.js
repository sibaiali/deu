// KJP (11–17 J.), Familie (Frühstück, Dinner, Weihnachten), Frankfurt Crytek Tech & Partnerschaft
// Höchste sprachliche Güte: Aktiv B2 -> Natürlich -> Professionell B2+ -> C1/C2 Fachsprache

export const SIMULATIONS_DATA = [
  // ==========================================
  // 1. KINDER- & JUGENDPSYCHIATRIE (KJP, 11–17 JAHRE)
  // ==========================================
  {
    id: "sim_kjp_autism_meltdown",
    title: "Autismus-Overload: Reizüberflutung bei einem 12-Jährigen",
    category: "KJP Psychiatrie (11–17 J.)",
    level: "B2/C1",
    workplace: "Flur / Essbereich der KJP-Station",
    provenance: "AUS_QUELLE",
    situation: "Ein 12-jähriger Junge im Autismus-Spektrum (Lukas) hält sich vor Baulärm und Essengerüchen panisch die Ohren zu, schreit und wirft seinen Teller auf den Boden.",
    userRole: "BFD-Freiwilliger / Pädagogische Betreuung",
    counterpartRole: "Lukas (12 Jahre, Reizüberflutung / beginnender Meltdown)",
    objective: "Reizreduktion einleiten, ohne Vorwürfe auf Augenhöhe gehen, einfache wörtliche Sprache sprechen (keine Metaphern) und einen sicheren Ruheraum anbieten.",
    turns: [
      {
        speaker: "Lukas (schreit verzweifelt)",
        text: "Es ist viel zu laut! Die Bohrmaschine tut mir im Kopf weh! Macht das sofort aus, ich halte das nicht aus!",
        guidance: "Gehen Sie in die Hocke auf Augenhöhe. Reden Sie leise, kurz und direkt. Keine langen Erklärungen. Bieten Sie Lärmschutzkopfhörer und den Ruheraum an.",
        expectedCriteria: ["Augenhöhe / ruhige Stimme", "Reizreduktion anbieten", "Klare, wörtliche Sprache", "Keine Vorwürfe wegen des Tellers"],
        responseTiers: {
          basic: "Lukas, setz die Kopfhörer auf. Wir gehen jetzt in den Ruheraum, da ist es ganz leise.",
          natural: "Lukas, schau mal zu mir. Hier sind deine Noise-Cancelling-Kopfhörer. Wir gehen jetzt sofort zusammen in den Ruheraum, da hörst du keinen Lärm mehr.",
          professionalB2: "Lukas, ich sehe, dass dir das Geräusch wehtut. Du bist hier sicher. Ich gebe dir jetzt deine Kopfhörer. Nimm meine Hand, wir gehen sofort in den abgedunkelten Snoezelen-Raum.",
          c1: "Lukas, ich nehme deine Reizüberlastung wahr. Wir stoppen den Sinnesinput sofort: Hier ist dein Gehörschutz. Wir verlassen diesen Raum jetzt gemeinsam und begeben uns in den reizarmen Rückzugsort."
        },
        whyExplanation: "Im Autismus-Overload schützt sofortige Reizreduktion (Kopfhörer, Ruheraum) vor der Eskalation zum Vollbild-Meltdown. Lange Sätze überfordern das Gehirn zusätzlich."
      }
    ]
  },

  {
    id: "sim_kjp_psychose_paranoia",
    title: "Psychose & Wahn: 16-Jähriger verbarrikadiert sich im Zimmer",
    category: "KJP Psychiatrie (11–17 J.)",
    level: "B2/C1",
    workplace: "Zimmertür von Zimmer 3 (Akutbereich)",
    provenance: "AUS_QUELLE",
    situation: "Jonas (16 Jahre, akute drogeninduzierte Psychose) hat die Zimmertür mit einem Stuhl blockiert, weil er Stimmen hört und glaubt, man wolle ihn durch das Essen vergiften.",
    userRole: "BFD-Freiwilliger in Begleitung der Fachkraft",
    counterpartRole: "Jonas (16 Jahre, psychotische Angst)",
    objective: "Reale Angst validieren ohne den Wahninhalt zu bestätigen, Transparenz herstellen und ruhigen Kontakt durch die Tür aufbauen.",
    turns: [
      {
        speaker: "Jonas (hinter der Tür)",
        text: "Verschwindet! Ich weiß genau, dass ihr Kameras im Essen versteckt habt! Die Stimmen sagen, dass ihr mich umbringen wollt!",
        guidance: "Nicht diskutieren ('Da sind keine Kameras!'). Bestätigen Sie seine Angst ('Ich höre, wie viel Angst du hast'), stellen Sie klar, wer Sie sind, und signalisieren Sie Schutz.",
        expectedCriteria: ["Kein Diskutieren über den Wahn", "Angst validieren", "Transparenz (Name & Absicht)", "Präsenz & Sicherheit"],
        responseTiers: {
          basic: "Jonas, hier ist Ali. Niemand will dir etwas tun. Du bist im Krankenhaus und in Sicherheit.",
          natural: "Jonas, ich bin's, Ali. Ich höre die Stimmen zwar nicht, aber ich spüre, wie viel Angst du gerade hast. Keiner tut dir etwas. Wir stellen das Essen weg und ich bleibe einfach vor deiner Tür stehen.",
          professionalB2: "Jonas, hier spricht Ali vom Stationsteam. Ich diskutiere nicht über die Stimmen, aber ich sehe deine enorme Angst. Du bist hier auf Station absolut geschützt. Ich schiebe jetzt keinen Stuhl weg – ich bleibe einfach hier ruhig sitzen, bis du bereit bist.",
          c1: "Jonas, ich nehme deine massive Bedrohungswahrnehmung wahr. Bitte sei versichert, dass dir hier keine Gefahr droht. Wir respektieren deine Distanz und veranlassen keinerlei Zwangsmaßnahmen. Ich bleibe als verlässlicher Ansprechpartner vor der Tür präsent."
        },
        whyExplanation: "Psychose-Deeskalation: Niemals den Wahninhalt debattieren, sondern das echte Gefühl (Angst/Panik) spiegeln und körperliche Unversehrtheit garantieren."
      }
    ]
  },

  {
    id: "sim_kjp_enuresis_shame",
    title: "Enuresis & Scham: 13-Jähriger nässt nachts im Klinikbett ein",
    category: "KJP Psychiatrie (11–17 J.)",
    level: "B2",
    workplace: "Patientenzimmer am Morgen um 06:45 Uhr",
    provenance: "AUS_QUELLE",
    situation: "Noah (13 Jahre) steht mit feuchten Augen im Zimmer und versucht hektisch, das nasse Bettlaken unter der Matratze zu verbergen. Er hat furchtbare Angst, dass seine Mitpatienten ihn auslachen.",
    userRole: "BFD-Freiwilliger im Frühdienst",
    counterpartRole: "Noah (13 Jahre, beschämt & verängstigt)",
    objective: "Sofortige Schamreduktion, absolute Diskretion, den Mitpatienten diskret ablenken und das Bett gemeinsam beiläufig und freundlich frisch beziehen.",
    turns: [
      {
        speaker: "Noah (den Tränen nahe, leise)",
        text: "Bitte sag das keinem... Die anderen lachen mich tot, wenn die das mitkriegen. Ich bin so ein Versager...",
        guidance: "Nehmen Sie ihm die Scham komplett: 'Das bleibt unter uns. Das passiert ganz vielen, wenn der Körper unter Stress steht.' Schicken Sie den Zimmernachbarn zum Frühstück und beziehen Sie das Bett zusammen.",
        expectedCriteria: ["Scham aktiv entkräften", "Diskretion zusichern", "Keine Vorwürfe / kein Drama", "Praktische Hilfe anbieten"],
        responseTiers: {
          basic: "Noah, das ist gar kein Problem. Du bist kein Versager. Das bleibt unter uns, wir machen das schnell sauber.",
          natural: "Noah, schau mich an: Du brauchst dich für überhaupt gar nichts zu schämen! Das passiert total vielen Jugendlichen unter Stress. Das bleibt komplett unter uns. Lass uns das Laken kurz in den Wäschesack werfen und frisch beziehen.",
          professionalB2: "Noah, atme erst mal tief durch. Du bist absolut kein Versager. Dein Körper zeigt nur, wie viel Druck auf dir lastet – das ist eine völlig normale Reaktion. Ich ziehe kurz die Vorhänge zu, dann wechseln wir die Wäsche unauffällig in zwei Minuten.",
          c1: "Noah, bitte entlaste dich von diesen Selbstvorwürfen. Eine vegetative Stressreaktion wie das Einnässen ist eine psychosomatische Begleiterscheinung und kein persönliches Versagen. Wir behandeln das mit höchster Diskretion. Ich sorge umgehend für frische Wäsche."
        },
        whyExplanation: "Enuresis im Jugendalter löst schwerste Demütigungsgefühle aus. Ruhige, entlastende Normalisierung verhindert Re-Traumatisierung."
      }
    ]
  },

  {
    id: "sim_kjp_smartphone_boundary",
    title: "Handyabgabe & Regelgrenze: 14-Jähriger rebelliert am Abend",
    category: "KJP Psychiatrie (11–17 J.)",
    level: "B2",
    workplace: "Stationsflur um 20:00 Uhr (Nachtruhe-Vorbereitung)",
    provenance: "AUS_QUELLE",
    situation: "Um 20:00 Uhr müssen laut Stationsordnung alle Smartphones abgegeben werden. Tim (14 Jahre) zockt weiter und weigert sich aggressiv: 'Ich gebe mein Handy sicher nicht ab!'",
    userRole: "BFD-Freiwilliger im Spätdienst",
    counterpartRole: "Tim (14 Jahre, rebellisch)",
    objective: "Ruhig und unnachgiebig bleiben, Verständnis für Frust zeigen, aber die Stationsregel konsequent durchsetzen.",
    turns: [
      {
        speaker: "Tim",
        text: "Ihr wollt mich doch alle nur schikanieren! Meine Runde Fortnite läuft noch! Wenn du mir das Handy wegnimmst, raste ich aus!",
        guidance: "Nicht drohen. Validieren Sie seinen Ärger ('Ich weiß, dass es nervt'), aber halten Sie die Regel fest ('Um 20 Uhr wandert das Handy in den Safe'). Bieten Sie an, den Spielstand noch kurz zu sichern.",
        expectedCriteria: ["Ruhige Tonlage", "Verständnis für Frust zeigen", "Klare Grenzziehung (Regel bleibt)", "Konkreter Kompromiss für sauberes Beenden"],
        responseTiers: {
          basic: "Tim, die Regel gilt für alle. Beende kurz dein Spiel und gib mir dann das Handy.",
          natural: "Tim, ich verstehe vollkommen, dass es dich nervt, mitten im Spiel aufzuhören. Aber 20:00 Uhr ist Stationsregel für alle. Speichere deinen Spielstand noch schnell in einer Minute ab, und dann wandert das Handy wie vereinbart in den Spind.",
          professionalB2: "Tim, ich höre deinen Frust und es ist blöd, eine Runde abbrechen zu müssen. Aber die Vereinbarung steht: Um 20 Uhr ist medienfreie Zeit, damit dein Gehirn zur Ruhe kommt. Du hast noch genau zwei Minuten zum Speichern, dann erwarte ich das Gerät an der Stationszentrale.",
          c1: "Tim, ich akzeptiere deine Verärgerung über die Unterbrechung. Gleichwohl ist die abendliche Medienabgabe eine verbindliche therapeutische Rahmenbedingung. Du hast jetzt noch zwei Minuten Zeit für den geordneten Log-out, danach hinterlegen wir das Gerät plangemäß im Schließfach."
        },
        whyExplanation: "Jugendliche brauchen verlässliche Grenzen ('Reibungsflächen') gepaart mit ruhiger Empathie – kein Nachgeben bei Sicherheitsregeln."
      }
    ]
  },

  // ==========================================
  // 2. ZUHAUSE & DEUTSCHES FAMILIENLEBEN
  // ==========================================
  {
    id: "sim_family_sunday_breakfast",
    title: "Sonntagsfrühstück mit der Familie (Brötchen, Kaffee & Wetter)",
    category: "Zuhause & Familie",
    level: "B2",
    workplace: "Sonniger Küchentisch im Familienhaushalt",
    provenance: "AUS_QUELLE",
    situation: "Sonntagmorgen um 09:30 Uhr. Auf dem Tisch stehen frische Brötchen vom Bäcker, Marmelade, Käse und eine Kanne Kaffee. Die Familie unterhält sich über das Wetter und die Pläne für den Tag.",
    userRole: "Gast / Familienmitglied",
    counterpartRole: "Mutter / Gastgeberin Marianne",
    objective: "Brötchen reichen, Kaffee einschenken, typisch deutsches Smalltalk-Thema (Wetter) aufgreifen und entspannt über den Tag sprechen.",
    turns: [
      {
        speaker: "Marianne",
        text: "Guten Morgen, Ali! Hast du gut geschlafen? Nimm dir gleich ein frisches Mohnbrötchen, die sind noch warm vom Bäcker. Möchtest du Kaffee oder lieber einen Tee?",
        guidance: "Antworten Sie freundlich, loben Sie die frischen Brötchen, wählen Sie Kaffee/Tee und sprechen Sie das sonnige/herbstliche Wetter an.",
        expectedCriteria: ["Freundlicher Gruß & Dank", "Lob der Brötchen", "Wahl von Kaffee/Tee", "Wetter-Kommentar"],
        responseTiers: {
          basic: "Guten Morgen! Ja, danke, ich habe gut geschlafen. Ein Mohnbrötchen nehme ich gern und Kaffee bitte.",
          natural: "Guten Morgen, Marianne! Wunderschön habe ich geschlafen, vielen Dank. Die Brötchen duften herrlich! Ich nehme sehr gerne eine große Tasse Kaffee mit einem Schluck Milch. Schau mal aus dem Fenster – heute soll ja richtig die Sonne rauskommen!",
          professionalB2: "Guten Morgen, Marianne! Vielen Dank, ich habe hervorragend geschlafen. Ein noch warmes Bäckerbrötchen am Sonntagmorgen ist der perfekte Start in den Tag. Eine Tasse schwarzer Kaffee wäre fantastisch. Laut Wetterbericht sollen es heute milde 18 Grad werden – ideal für einen Ausflug!",
          c1: "Einen wunderschönen guten Morgen, liebe Marianne! Herzlichen Dank, die Nacht war überaus erholsam. Dieses reichhaltige Sonntagsfrühstück ist wirklich ein Genuss. Über eine Tasse frisch gebrühten Kaffee würde ich mich sehr freuen. Das milde Herbstwetter lädt heute förmlich zu einer ausgedehnten Erkundungstour ein."
        },
        whyExplanation: "Das deutsche Sonntagsfrühstück ist eine Institution: Frische Brötchen, Kaffee und der Wetterbericht sind die Grundpfeiler familiärer Harmonie."
      },
      {
        speaker: "Vater Heinrich",
        text: "Könntest du mir bitte kurz die Butter und das Messer rüberreichen, Ali? Und was steht heute bei dir an – wollen wir nachher eine Runde im Lahntal spazieren gehen?",
        guidance: "Reichen Sie die Butter höflich herüber und stimmen Sie begeistert dem Spaziergang an der Lahn zu.",
        expectedCriteria: ["Höfliches Reichen ('Bitte sehr / Gerne')", "Zustimmung zum Spaziergang", "Vorschlag für die Uhrzeit"],
        responseTiers: {
          basic: "Hier ist die Butter, bitte sehr. Ja, an der Lahn spazieren gehen klingt gut.",
          natural: "Sehr gerne, hier bitte, Heinrich! Ein Spaziergang an der Lahn wäre herrlich bei dem Wetter. Sollen wir gegen 14 Uhr losgehen, wenn die Mittagssonne am schönsten ist?",
          professionalB2: "Aber natürlich, bitte sehr, die Butter für dich, Heinrich! Die Idee mit dem Lahntal finde ich großartig. Frische Luft nach der anstrengenden Schichtwoche tut mir unglaublich gut. Lass uns nach dem Frühstück gemütlich die Route abstimmen.",
          c1: "Mit Vergnügen, hier ist die Butter, lass es dir schmecken, Heinrich! Einem ausgedehnten Spaziergang entlang der Lahnauen schließe ich mich mit großer Begeisterung an. Die herbstliche Naturkulisse bietet den idealen Ausgleich. Ich schlage vor, dass wir am frühen Nachmittag aufbrechen."
        },
        whyExplanation: "Tischkultur in Deutschland: Dinge mit 'Bitte sehr' reichen und gemeinsame Naturaktivitäten planen."
      }
    ]
  },

  {
    id: "sim_family_dinner_conversation",
    title: "Gemeinsames Abendessen: Kochen & Tagesrückblick",
    category: "Zuhause & Familie",
    level: "B2",
    workplace: "Gemütlicher Esstisch am Abend",
    provenance: "AUS_QUELLE",
    situation: "Nach einem langen Arbeitstag sitzt die Familie beim Abendessen zusammen. Es gibt frisches Brot, Aufschnitt, Käse und einen warmen Gemüseeintopf.",
    userRole: "Familienmitglied / Mitbewohner",
    counterpartRole: "Schwester / Mitbewohnerin Sophie",
    objective: "Über den Tag berichten, für das Essen danken, Fragen zur Arbeit/Schule der anderen stellen und die Unterhaltung lebendig halten.",
    turns: [
      {
        speaker: "Sophie",
        text: "Greif zu, Ali! Der Eintopf ist ganz frisch gekocht. Wie war dein Tag heute auf Station – gab es spannende oder anstrengende Momente?",
        guidance: "Bedanken Sie sich, loben Sie den Eintopf, schildern Sie ausgewogen (anstrengend, aber erfüllend) und fragen Sie Sophie nach ihrem Tag.",
        expectedCriteria: ["Dank für den Eintopf", "Ausgewogener Tagesbericht", "Rückfrage an Sophie", "Natürlicher Plauderton"],
        responseTiers: {
          basic: "Danke, der Eintopf schmeckt super. Mein Tag war anstrengend, aber gut. Wie war deiner?",
          natural: "Vielen Dank, Sophie, der Eintopf schmeckt fantastisch und wärmt richtig gut durch! Auf Station war heute ganz schön viel Trubel bei den Jugendlichen, aber ein Gespräch mit einem 14-Jährigen war wirklich herzergreifend. Und wie war dein Tag in der Uni?",
          professionalB2: "Ganz herzlichen Dank, Sophie, das Essen ist wirklich köstlich nach so einem Tag! Der Dienst auf Station war heute mental ziemlich fordernd, besonders die Konfliktbegleitung bei zwei Jugendlichen. Aber genau diese Arbeit gibt mir unglaublich viel Sinn. Wie lief es denn heute bei deinem Projekt?",
          c1: "Herzlichen Dank für diese wunderbare Stärkung, Sophie! Auf Station war das Schichtaufkommen heute außerordentlich intensiv, doch die erfolgreiche Deeskalation einer Krisensituation hat mich sehr erfüllt. Ich bin nun dankbar für die abendliche Ruhe. Erzähl doch mal: Wie verlief deine heutige Präsentation?"
        },
        whyExplanation: "Das Abendbrot ist im deutschsprachigen Raum der Ort des emotionalen Tagesabschlusses und des aktiven Interesses aneinander."
      }
    ]
  },

  {
    id: "sim_family_christmas_eve",
    title: "Heiligabend & Weihnachten: Bescherung & Festessen",
    category: "Zuhause & Familie",
    level: "B2/C1",
    workplace: "Festlich geschmücktes Wohnzimmer am 24. Dezember",
    provenance: "AUS_QUELLE",
    situation: "Heiligabend unter dem geschmückten Tannenbaum. Die Kerzen brennen, Weihnachtsmusik läuft leise im Hintergrund. Nach dem Festessen und der Bescherung stoßen alle an.",
    userRole: "Gast & Familienmitglied",
    counterpartRole: "Großmutter Elisabeth",
    objective: "Einen herzlichen, feierlichen Toast aussprechen, Dank für Geborgenheit und Aufnahme in der Familie ausdrücken und frohe Weihnachten wünschen.",
    turns: [
      {
        speaker: "Elisabeth",
        text: "Lieber Ali, wir freuen uns von Herzen, dass du heute an Heiligabend bei uns bist! Möchtest du mit uns auf das Fest anstoßen?",
        guidance: "Erheben Sie das Glas, bedanken Sie sich aufrichtig für die Wärme und das Zuhause-Gefühl und wünschen Sie allen ein gesegnetes Weihnachtsfest.",
        expectedCriteria: ["Dank für Geborgenheit", "Glas erheben", "Reflexion über Zusammenhalt", "Weihnachtswunsch"],
        responseTiers: {
          basic: "Danke Elisabeth. Ich freue mich sehr hier zu sein. Frohe Weihnachten an alle!",
          natural: "Ganz herzlichen Dank, liebe Elisabeth! Es bedeutet mir unglaublich viel, heute Heiligabend mit euch in diesem warmen Kreis zu verbringen. Ich habe mich selten so herzlich aufgenommen und geborgen gefühlt. Auf ein frohes und gesegnetes Weihnachtsfest – Prost zusammen!",
          professionalB2: "Liebe Elisabeth, liebe Familie! Ich möchte diesen Moment nutzen, um euch von ganzem Herzen für eure grenzenlose Gastfreundschaft und Wärme zu danken. Bei euch habe ich ein echtes zweites Zuhause gefunden. Ich wünsche uns allen erholsame Feiertage und beste Gesundheit. Frohe Weihnachten!",
          c1: "Verehrte Elisabeth, liebe Familie! Es erfüllt mich mit tiefer Rührung und Dankbarkeit, dieses traditionsreiche Fest des Friedens in eurer Mitte begehen zu dürfen. Die gelebte Menschlichkeit und Geborgenheit, die ihr mir schenkt, ist für mich das wertvollste Geschenk dieses Jahres. Lasst uns das Glas erheben auf den Zusammenhalt, die Gesundheit und die gemeinsame Zukunft. Ein frohes und gesegnetes Fest!"
        },
        whyExplanation: "Weihnachten ist in Deutschland das emotionalste Fest des Jahres – persönliche Dankbarkeit und Wärme berühren tief."
      }
    ]
  },

  {
    id: "sim_family_walk_history",
    title: "Sonntagsspaziergang: Wetter, Natur & Marburger Stadtgeschichte",
    category: "Zuhause & Familie",
    level: "B2",
    workplace: "Weg hinauf zum Marburger Landgrafenschloss",
    provenance: "AUS_QUELLE",
    situation: "Sie spazieren mit der Gastfamilie die steilen Treppen der Marburger Oberstadt hinauf zum Schloss. Der Blick über das Lahntal ist atemberaubend.",
    userRole: "Kulturinteressierter Spaziergänger",
    counterpartRole: "Opa Walter (Geschichtsbegeistert)",
    objective: "Über die historische Altstadt staunen, das Schloss und die Brüder Grimm ansprechen und echtes Interesse an deutscher Kultur zeigen.",
    turns: [
      {
        speaker: "Opa Walter",
        text: "Schau mal da drüben, Ali: Diese Fachwerkhäuser hier stehen seit über 500 Jahren! Weißt du eigentlich, dass die Gebrüder Grimm hier in Marburg studiert haben?",
        guidance: "Bestaunen Sie die Architektur, greifen Sie die Gebrüder Grimm auf und loben Sie das Flair der historischen Altstadt.",
        expectedCriteria: ["Begeisterung über Fachwerk", "Bezug zu den Grimms", "Interesse an Geschichte"],
        responseTiers: {
          basic: "Die Häuser sehen toll aus! Ja, die Gebrüder Grimm und ihre Märchen kenne ich gut.",
          natural: "Das ist wirklich faszinierend, Walter! Über 500 Jahre alt – man spürt die Geschichte in jeder Gasse. Kein Wunder, dass die Brüder Grimm hier zu ihren Märchen inspiriert wurden, die steilen Treppen wirken fast wie verzaubert!",
          professionalB2: "Das ist wirklich beeindruckende Baukunst, Walter. Die Kombination aus den gotischen Kirchen, dem Landgrafenschloss und den Fachwerkhäusern verleiht Marburg einen einzigartigen historischen Charakter. Dass die Grimms hier gelebt haben, passt perfekt zu dieser märchenhaften Kulisse.",
          c1: "Eine wahrhaft imposante historische Kulisse, lieber Walter! Diese architektonische Kontinuität über ein halbes Jahrtausend hinweg ist bemerkenswert. Die universitäre Geistesgeschichte Marburgs und das Wirken der Gebrüder Grimm sind hier auf Schritt und Tritt greifbar. Dieser Weitblick über das Lahntal entschädigt für jeden steilen Treppenabsatz!"
        },
        whyExplanation: "Deutsche lieben es, bei Spaziergängen über lokale Geschichte, Denkmalschutz und Natur zu philosophieren."
      }
    ]
  },

  // ==========================================
  // 3. FRANKFURT TECH & CRYTEK ENGINE VIBES
  // ==========================================
  {
    id: "sim_tech_crytek_engine_standup",
    title: "Crytek Stand-up: Framerate-Drop & GPU-Rendering-Pipeline",
    category: "Crytek Tech & Engine (Frankfurt)",
    level: "B2/C1",
    workplace: "Frankfurt Osthafen / CryEngine Tech-HQ Meetingraum",
    provenance: "AUS_QUELLE",
    situation: "Im morgendlichen Daily Stand-up des Engine-Teams in Frankfurt berichten Sie dem Lead Programmer über drastische Framerate-Einbrüche im Deferred Renderer.",
    userRole: "Engine & C++ Software Developer",
    counterpartRole: "Christian (Lead Rendering Architect)",
    objective: "Stand-up-Format (Gestern/Heute/Blocker) einhalten, GPU-Flaschenhals präzise benennen (Volumetric Clouds Shader) und Profiling-Lösung vorschlagen.",
    turns: [
      {
        speaker: "Christian",
        text: "Morgen zusammen! Ali, wie sieht's bei der 4K-Optimierung aus? Im letzten Build hatten wir üble Ruckler bei den Shadern für volumetrischen Rauch.",
        guidance: "Berichten Sie: Gestern RenderDoc-Profiling durchgeführt, Flaschenhals ist der Pixel-Shader auf alten GPUs, heute Optimierung der Compute-Shader und Memory-Bandenbreite.",
        expectedCriteria: ["Gestern / Heute / Blocker", "C++ / Engine-Fachbegriffe", "Profiling-Ergebnis", "Lösungsvorschlag"],
        responseTiers: {
          basic: "Gestern habe ich den Code profilt. Die Shader sind zu langsam auf alten Grafikkarten. Heute mache ich das schneller.",
          natural: "Morgen Christian! Ich habe gestern mit RenderDoc ein Profiling gemacht: Der Flaschenhals liegt eindeutig beim Pixel-Shader für den volumetrischen Rauch, der frisst zu viel GPU-Bandbreite. Heute lagere ich die Berechnung in einen asynchronen Compute-Shader aus, dann sollten wir wieder stabile 60 FPS erreichen.",
          professionalB2: "Guten Morgen Christian! Die gestrige Laufzeitanalyse ergab massive Latenzen in der Deferred-Shading-Pipeline. Die Shader-Instanzen verursachen auf älteren Architekturen extreme Overdraw-Kosten. Ich implementiere heute Temporal Upscaling und optimiere die Draw-Calls, um die Framerate verlässlich über 60 FPS zu stabilisieren.",
          c1: "Morgen allerseits! Das gestrige GPU-Profiling isolierte den Flaschenhals primär in redundanten Texture-Lookups innerhalb des Raymarching-Loops der Volumetrics. Die Memory-Bandbreite saturiert bei 4K-Auflösung vollständig. Mein heutiger Sprint-Fokus liegt auf der Migration auf Half-Precision-Floats und dem Dispatching via Asynchronous Compute, um die Render-Latenz unter das 16-Millisekunden-Budget zu drücken."
        },
        whyExplanation: "Im Frankfurter High-Performance-Tech-Umfeld (Crytek) schätzen Tech Leads knallharte Metriken (Latenz, FPS, Memory-Bandbreite) und proaktive Architektur-Lösungen."
      }
    ]
  },

  {
    id: "sim_tech_crytek_code_review",
    title: "C++ Code Review: Memory Allocations in the Game Loop",
    category: "Crytek Tech & Engine (Frankfurt)",
    level: "B2/C1",
    workplace: "GitHub Pull Request / Frankfurt Tech Hub",
    provenance: "AUS_QUELLE",
    situation: "Ein Junior-Entwickler hat in der Core-Render-Loop dynamische `std::vector`-Allokationen mit Heap-Speicher vorgenommen, was zu Garbage-Collection-Stottern führt.",
    userRole: "Senior C++ / Systems Engineer",
    counterpartRole: "Felix (Junior Game Developer)",
    objective: "Konstruktiv loben, das Problem von Heap-Allokationen in 60-FPS-Loops erklären und statische Pool-Allokatoren vorschlagen.",
    turns: [
      {
        speaker: "Felix",
        text: "Hi Ali, hast du dir meinen PR für das Partikelsystem angesehen? Ich habe std::vector genutzt, damit sich die Partikel dynamisch anpassen.",
        guidance: "Loben Sie die Logik, erklären Sie aber freundlich, warum Heap-Allokationen in der Render-Loop Frame-Drops auslösen, und schlagen Sie einen festen Ring-Buffer / Pool-Allocator vor.",
        expectedCriteria: ["Positives Feedback zuerst", "Erklärung des Performance-Problems", "Konstruktiver C++ Gegenvorschlag"],
        responseTiers: {
          basic: "Das Partikelsystem sieht gut aus. Aber std::vector im Loop macht den Speicher langsam. Nimm lieber ein festes Array.",
          natural: "Hi Felix, klasse Arbeit beim Partikel-Effekt, das sieht optisch mega aus! Ein wichtiger Punkt für die Engine: Wenn wir `std::vector` direkt in der Update-Schleife allozieren, erzeugen wir Heap-Fragmentierung und Frame-Drops. Lass uns stattdessen einen vorallokierten Pool-Allocator nutzen, dann bleibt die Performance butterweich.",
          professionalB2: "Hallo Felix, vielen Dank für den PR! Die mathematische Trajektorienberechnung der Partikel ist wirklich elegant gelöst. Performancekritisch ist jedoch das dynamsiche Re-Allokieren im Frame-Loop; jede Heap-Allokation kostet wertvolle CPU-Zyklen. Ich empfehle dir, auf einen statischen Ring-Puffer oder Smart-Pointer mit benutzerdefiniertem Stack-Allokator umzustellen.",
          c1: "Hi Felix, ein optisch überaus überzeugendes Feature! Unter Low-Level-Gesichtspunkten triggern die dynamischen Heap-Reallokationen innerhalb des Render-Ticks jedoch erhebliche Cache-Misses und Memory-Fragmentation. In unserem High-Performance-Framework vermeiden wir Heap-Allokationen im Hot-Path strikt. Ich schlage vor, die Partikel-Pools initial zur Compile-Zeit zu allozieren und via Data-Oriented Design im Cache zu halten."
        },
        whyExplanation: "Konstruktives Code-Review in C++ Game-Engines trennt Softwareästhetik von harter Hardware-Effizienz."
      }
    ]
  },

  // ==========================================
  // 4. PARTNERSCHAFT & HERZ (GF / WIFEY)
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
  // 5. HESSEN & FRANKFURT LOKALKOLORIT
  // ==========================================
  {
    id: "sim_hessen_coffee_banter",
    title: "Kaffeeküchen-Plausch & Frankfurter Dialekt-Banter",
    category: "Hessen & Dialekt",
    level: "B2 (Authentisch)",
    workplace: "Kaffeeküche auf Station / Tech-Büro Frankfurt",
    provenance: "AUS_QUELLE",
    situation: "Um 10:30 Uhr treffen Sie Pfleger Heinz in der Kaffeeküche. Heinz ist ein waschechter Frankfurter und begrüßt Sie mit typischem hessischen Charme.",
    userRole: "BFD-Freiwilliger / Entwickler",
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
        whyExplanation: "Wer in Hessen mit 'Gude' und regionalen Redewendungen antwortet, bricht sofort das Eis im Team."
      }
    ]
  }
];
