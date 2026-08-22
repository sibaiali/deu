// Grammatiksystem — 25 Lektionen von B1-Konsolidierung bis B2 & C1
// Synthese aus: Easy German Step-By-Step, Aspekte neu B2, Constantinos Vayenas Der-Die-Das, 99579913-c48d-49ed-a0df-320f9a70cb87_B1-Deutsch.pdf

export const GRAMMAR_DATA = {
  title: "Vollständiges Grammatik-System (B1 -> B2 -> C1)",
  provenance: "AUS_QUELLE",
  lessons: [
    {
      id: "gram_01",
      number: 1,
      title: "Satzstellung im Hauptsatz & Inversion",
      level: "B1",
      category: "Satzbau",
      summary: "Verb an Position 2 – Das goldene Gesetz des deutschen Hauptsatzes.",
      explanationGerman: `Im deutschen Aussagesatz steht das konjugierte finite Verb IMMER an Position 2. 
Wenn an Position 1 ein anderes Element als das Subjekt steht (z. B. eine Zeitangabe oder eine Ortsangabe), rutscht das Subjekt hinter das Verb (Inversion).

Beispiele:
- Normal (Subjekt an Pos. 1): Der BFDler [1] beginnt [2] heute seinen Dienst.
- Inversion (Zeitangabe an Pos. 1): Heute [1] beginnt [2] der BFDler [3] seinen Dienst.
- Inversion (Objekt an Pos. 1): Diese Aufgabe [1] übernimmt [2] die Pflegekraft [3].

Wichtige Faustregel (TEKAMOLO):
Wenn mehrere Angaben im Mittelfeld stehen, folgt die Reihenfolge meist:
1. TE = Temporal (Wann?)
2. KA = Kausal (Warum?)
3. MO = Modal (Wie?)
4. LO = Lokal (Wo / Wohin?)

Beispiel:
Ich fahre morgen (Temporal) wegen des Seminars (Kausal) mit dem Zug (Modal) nach Marburg (Lokal).`,
      examples: [
        {
          german: "Morgen um 06:30 Uhr beginnt meine Frühschicht auf Station P2.",
          english: "Tomorrow at 06:30 AM, my morning shift starts on ward P2."
        },
        {
          german: "Im Stationszimmer bespricht das Team die aktuellen Patientenkurven.",
          english: "In the nurses' room, the team discusses the current patient charts."
        }
      ],
      commonErrors: [
        "Falsch: *Heute der BFDler beginnt seinen Dienst.* (Verb muss an Position 2!)",
        "Falsch: *Wegen des Verkehrs ich bin zu spät.* -> Richtig: *Wegen des Verkehrs bin ich zu spät.*"
      ],
      exercises: [
        {
          id: "ex_01_1",
          question: "Bringen Sie die Satzglieder in die korrekte Reihenfolge: (auf Station / pünktlich / erscheint / der Freiwillige / jeden Morgen)",
          correctSentence: "Jeden Morgen erscheint der Freiwillige pünktlich auf Station.",
          hint: "Beginnen Sie mit der Zeitangabe 'Jeden Morgen'. Das Verb 'erscheint' muss an Position 2."
        }
      ]
    },

    {
      id: "gram_02",
      number: 2,
      title: "Nebensätze mit weil, dass, obwohl, wenn, während, nachdem, bevor, sodass, damit",
      level: "B1+",
      category: "Nebensätze",
      summary: "Konnektoren und das Verb am Satzende.",
      explanationGerman: `In allen untergeordneten Nebensätzen (eingeleitet durch Subjunktionen wie weil, dass, obwohl, wenn, während, etc.) wandert das konjugierte Verb an das ALLERLETZTE Satzende.

Klassifikation der Subjunktionen:
- Kausal (Grund): weil, da ('... weil der Patient unruhig ist.')
- Objektsatz: dass ('... dass die Übergabe pünktlich beginnt.')
- Konzessiv (Gegensatz): obwohl ('... obwohl er müde war.')
- Konditional (Bedingung): wenn, falls ('... wenn ein Notfall eintritt.')
- Temporal: während (Gleichzeitigkeit), nachdem (Vorzeitigkeit), bevor (Nachzeitigkeit)
- Final (Ziel/Absicht): damit (Subjektwechsel!)
- Konsekutiv (Folge): sodass / so..., dass

Achtung bei trennbaren Verben im Nebensatz:
Im Hauptsatz trennt sich das Verb: 'Der Patient wacht früh auf.'
Im Nebensatz bleibt es ZUSAMMEN am Satzende: '... weil der Patient früh aufwacht.'`,
      examples: [
        {
          german: "Der Pfleger bricht die Gruppentherapie ab, weil der Jugendliche randaliert.",
          english: "The nurse cancels the group therapy because the teenager is rampaging."
        },
        {
          german: "Obwohl der Patient Schmerzen hatte, verweigerte er die Bedarfsmedikation.",
          english: "Although the patient had pain, he refused the PRN medication."
        },
        {
          german: "Nachdem die Frühbesprechung beendet war, bezogen wir die Betten.",
          english: "After the morning briefing was finished, we changed the beds."
        }
      ],
      commonErrors: [
        "Falsch: *... weil der Patient ist unruhig.* -> Richtig: *... weil der Patient unruhig ist.*",
        "Falsch: *... obwohl er hat keine Zeit.* -> Richtig: *... obwohl er keine Zeit hat.*"
      ],
      exercises: [
        {
          id: "ex_02_1",
          question: "Verbinden Sie mit 'weil': Die Eltern fordern die Entlassung. Das Kind zeigt Heimweh.",
          correctSentence: "Die Eltern fordern die Entlassung des Kindes, weil es Heimweh zeigt.",
          hint: "Das Verb 'zeigt' wandert an das Satzende."
        }
      ]
    },

    {
      id: "gram_03",
      number: 3,
      title: "Die 4 Fälle & N-Deklination",
      level: "B1+",
      category: "Deklination",
      summary: "Nominativ, Akkusativ, Dativ, Genitiv und maskuline N-Deklinationen.",
      explanationGerman: `Die 4 Fälle im Deutschen und ihre typischen Signalfragen:
1. Nominativ (Wer oder was?): Subjekt des Satzes (der Pfleger, die Schwester, das Kind, die Patienten)
2. Akkusativ (Wen oder was? / Wohin?): Direktes Objekt (den Pfleger, die Schwester, das Kind, die Patienten)
3. Dativ (Wem? / Wo?): Indirektes Objekt / Nutznießer (dem Pfleger, der Schwester, dem Kind, den Patienten)
4. Genitiv (Wessen?): Besitz / Zugehörigkeit (des Pflegers, der Schwester, des Kindes, der Patienten)

Die N-Deklination (Schwache Maskulina):
Bestimmte maskuline Substantive erhalten im Akkusativ, Dativ und Genitiv (sowie im Plural) die Endung -(e)n.
Wichtige Wörter im Klinik- und BFD-Alltag:
- der Patient -> den Patienten / dem Patienten / des Patienten
- der Assistent -> den Assistenten / dem Assistenten
- der Kollege -> den Kollegen / dem Kollegen
- der Jugendliche -> den Jugendlichen / dem Jugendlichen (adjektivische Deklination)
- der Herr -> den Herrn / dem Herrn / des Herrn

Beispiel:
Ich helfe dem Patienten [Dativ mit -en], die Jacke anzuziehen.`,
      examples: [
        {
          german: "Die Ärztin erklärt dem neuen Patienten die Stationsordnung.",
          english: "The doctor explains the ward rules to the new patient."
        },
        {
          german: "Ich habe den Jugendlichen bei der Visite unterstützt.",
          english: "I supported the teenager during the ward round."
        }
      ],
      commonErrors: [
        "Falsch: *Ich spreche mit dem Patient.* -> Richtig: *Ich spreche mit dem Patienten.* (N-Deklination!)",
        "Falsch: *Ich gebe der Arzt das Dokument.* -> Richtig: *Ich gebe dem Arzt das Dokument.* (Dativ Maskulin = dem)"
      ],
      exercises: [
        {
          id: "ex_03_1",
          question: "Setzen Sie ein: 'Der BFDler begleitet _____ (der Patient, Akk.) zum EKG.'",
          correctSentence: "Der BFDler begleitet den Patienten zum EKG.",
          hint: "Akkusativ Maskulin + N-Deklination bei 'Patient'."
        }
      ]
    },

    {
      id: "gram_04",
      number: 4,
      title: "Präpositionen: Akkusativ, Dativ, Genitiv & Wechselpräpositionen",
      level: "B1+",
      category: "Präpositionen",
      summary: "Wo? (Dativ) vs. Wohin? (Akkusativ) und feste Fallzuordnungen.",
      explanationGerman: `Feste Präpositionen nach Fällen:

1. Nur Akkusativ (DOGFU-Regel):
durch, ohne, gegen, für, um, bis, entlang
Beispiel: Ich mache das für den Patienten. / Wir gehen um das Gebäude.

2. Nur Dativ:
aus, bei, mit, nach, seit, von, zu, gegenüber, ab, außer
Beispiel: Nach der Übergabe spreche ich mit der Stationsleitung.

3. Wechselpräpositionen (an, auf, hinter, in, neben, über, unter, vor, zwischen):
- Statisch / Ort (WO?): DATIV
  Beispiel: Die Akte liegt auf dem Tisch. / Der Pfleger steht im Flur.
- Dynamisch / Richtung (WOHIN?): AKKUSATIV
  Beispiel: Ich lege die Akte auf den Tisch. / Ich gehe in den Flur.

4. Genitiv-Präpositionen (gehoben / B2):
während, wegen, trotz, (an)statt, innerhalb, außerhalb, bezüglich, infolge
Beispiel: Während der Frühschicht bezog ich die Betten. / Wegen des Umbaus ist Zimmer 4 gesperrt.`,
      examples: [
        {
          german: "Trotz der hohen Arbeitsbelastung blieb das Pflegeteam ruhig und konzentriert.",
          english: "Despite the high workload, the nursing team remained calm and focused."
        },
        {
          german: "Ich gehe in das Stationszimmer (Akkusativ: Wohin?), weil die Übergabe im Stationszimmer (Dativ: Wo?) stattfindet.",
          english: "I go into the nurses' room because the handover takes place in the nurses' room."
        }
      ],
      commonErrors: [
        "Falsch: *Ich warte auf dem Bus.* -> Richtig: *Ich warte auf den Bus.* (warten auf + Akkusativ)",
        "Falsch: *Wegen dem Regen...* -> Im B2/C1 Standard: *Wegen des Regens...* (Genitiv)"
      ],
      exercises: [
        {
          id: "ex_04_1",
          question: "Setzen Sie die richtige Form ein: 'Ich stelle den Rollstuhl in _____ (der Flur, Akk./Wohin?).'",
          correctSentence: "Ich stelle den Rollstuhl in den Flur.",
          hint: "Wohin? -> Akkusativ maskulin = den Flur."
        }
      ]
    },

    {
      id: "gram_05",
      number: 5,
      title: "Das System der Artikel (Der, Die, Das nach Vayenas)",
      level: "B1-B2",
      category: "Genusregeln",
      summary: "95% Treffsicherheit bei Artikeln durch Suffixe und semantische Regeln.",
      explanationGerman: `Die Artikelregeln nach Constantinos Vayenas:

1. MASKULIN (DER):
Endungen:
- -ling (der Schmetterling, der Lehrling, der Frühling)
- -or (der Motor, der Reaktor, der Doktor)
- -us (der Rhythmus, der Status, der Optimismus)
- -ismus (der Autismus, der Mechanismus, der Journalismus)
- -ant / -ent (der Praktikant, der Patient, der Dozent)
- -ist (der Spezialist, der Polizist, der Therapeut)
- -er (oft bei handelnden Personen: der Pfleger, der Helfer, der Leiter)
Bedeutungsgruppen: Tage, Monate, Jahreszeiten, Himmelsrichtungen, Wetterphänomene (der Regen, der Schnee, der Wind), alkoholische Getränke (außer das Bier).

2. FEMININ (DIE):
Endungen (100% feminin):
- -ung (die Anweisung, die Übergabe, die Abteilung, die Hoffnung)
- -heit / -keit (die Krankheit, die Einsamkeit, die Frustrationstoleranz, die Aufmerksamkeit)
- -schaft (die Eigenschaft, die Bereitschaft, die Gemeinschaft)
- -tät (die Realität, die Identität, die Suizidalität, die Aktivität)
- -tion / -sion (die Station, die Medikation, die Intervention, die Depression)
- -ik (die Klinik, die Ethik, die Panik, die Diagnostik)
- -ie (die Psychiatrie, die Therapie, die Empathie)
- -ur (die Struktur, die Natur, die Kultur)
- -ei (die Bäckerei, die Bürokratie)
- -anz / -enz (die Toleranz, die Distanz, die Frequenz, die Resilienz)
- -in (weibliche Berufe: die Ärztin, die Pflegerin, die Leiterin)

3. NEUTRUM (DAS):
Endungen:
- -chen / -lein (Verkleinerungsformen: das Mädchen, das Röhrchen, das Bettchen)
- -ment (das Medikament, das Dokument, das Instrument)
- -um (das Zentrum, das Klinikum, das Studium, das Datum)
- -ma (das Trauma, das Thema, das Drama, das Schema)
- -tum (das Eigentum, das Brauchtum)
- Ge-...-e (Kollektiva: das Gebäude, das Gespräch, das Gelände, das Gefühl)
- Substantivierte Infinitive: das Essen, das Trinken, das Schlafen, das Leben, das Zuhören.`,
      examples: [
        {
          german: "Das Medikament (-ment -> Neutrum) liegt auf der Station (-tion -> Feminin) für den Patienten (-ent -> Maskulin).",
          english: "The medication is on the ward for the patient."
        },
        {
          german: "Die Frustrationstoleranz (-anz -> Feminin) des Patienten ist gering.",
          english: "The frustration tolerance of the patient is low."
        }
      ],
      commonErrors: [
        "Falsch: *der Mädchen* -> Richtig: *das Mädchen* (Diminutiv -chen ist immer Neutrum!)",
        "Falsch: *der Thema* -> Richtig: *das Thema* (griechische Endung -ma ist meist Neutrum)"
      ],
      exercises: [
        {
          id: "ex_05_1",
          question: "Welcher Artikel gehört zu 'Dokumentation'? (der, die, das)",
          correctSentence: "die Dokumentation",
          hint: "Wörter auf -tion sind zu 100% feminin."
        }
      ]
    },

    {
      id: "gram_06",
      number: 6,
      title: "Konjunktiv II: Höflichkeit, Wünsche & Professionelle Distanz",
      level: "B2",
      category: "Konjunktiv",
      summary: "Würde + Infinitiv sowie 'hätte', 'wäre', 'könnte', 'sollte', 'müsste'.",
      explanationGerman: `Der Konjunktiv II ist im deutschen Berufsleben das wichtigste Werkzeug für Höflichkeit, vorsichtige Vorschläge und Deeskalation.

1. Höfliche Bitten & Anfragen:
- 'Könnten Sie mir bitte kurz helfen?' (statt: 'Helfen Sie mir!')
- 'Würden Sie bitte Platz nehmen?' (statt: 'Setzen Sie sich!')
- 'Ich hätte eine kurze Frage zum Dienstplan.' (statt: 'Ich habe eine Frage.')
- 'Dürfte ich kurz stören?' (statt: 'Ich störe jetzt.')

2. Ratschläge & vorsichtige Empfehlungen:
- 'Du solltest vielleicht kurz mit der Stationsleitung sprechen.'
- 'Es wäre ratsam, vorher die Vitalwerte zu messen.'

3. Irreale Bedingungen (Gegenwart & Vergangenheit):
- Gegenwart: Wenn ich mehr Zeit hätte, würde ich länger mit dem Patienten sprechen.
- Vergangenheit: Hätte die Pflegekraft den Patienten nicht beruhigt, wäre die Situation eskaliert. (hätte/wäre + Partizip II)`,
      examples: [
        {
          german: "Könnten Sie mir bitte zeigen, wie die Kurve im elektronischen System ausgefüllt wird?",
          english: "Could you please show me how the chart is filled out in the electronic system?"
        },
        {
          german: "Es wäre sehr freundlich, wenn Sie die Wäschebeutel kurz mitnehmen könnten.",
          english: "It would be very kind if you could briefly take the laundry bags along."
        }
      ],
      commonErrors: [
        "Falsch: *Wenn ich habe Zeit, ich würde helfen.* -> Richtig: *Wenn ich Zeit hätte, würde ich helfen.*",
        "Ungeschickt: *Ich will den Dienstplan.* -> Professionell: *Ich würde gerne meinen Dienstplan einsehen.*"
      ],
      exercises: [
        {
          id: "ex_06_1",
          question: "Formulieren Sie die Aufforderung 'Geben Sie mir die Akte!' in eine höfliche Konjunktiv II-Frage um.",
          correctSentence: "Könnten Sie mir bitte die Akte geben?",
          hint: "Verwenden Sie 'Könnten Sie bitte...' oder 'Würden Sie mir bitte...'."
        }
      ]
    },

    {
      id: "gram_07",
      number: 7,
      title: "Vorgangspassiv & Zustandspassiv im klinischen Alltag",
      level: "B2",
      category: "Passiv",
      summary: "Werden + Partizip II (Prozess) vs. Sein + Partizip II (Zustand).",
      explanationGerman: `In der medizinischen und pflegerischen Dokumentation steht die HANDLUNG oder der ZUSTAND im Vordergrund, nicht die handelnde Person. Deshalb wird sehr häufig das Passiv verwendet.

1. Vorgangspassiv (Aktion / Prozess):
Bildung: werden (konjugiert) + ... + Partizip II
- Präsens: Die Betten werden frisch bezogen.
- Präteritum: Der Patient wurde gestern aufgenommen.
- Perfekt: Die Medikamente sind vorbereitet worden.
- Mit Modalverb: Der Verband muss täglich gewechselt werden.

2. Zustandspassiv (Ergebnis / abgeschlossener Zustand):
Bildung: sein (konjugiert) + ... + Partizip II
- Die Wunde ist versorgt. (Ergebnis: Die Versorgung ist abgeschlossen)
- Die Stationsausgangstür ist abgeschlossen.
- Das Zimmer ist desinfiziert.

3. Passiversatzformen (C1-Niveau):
- sich lassen + Infinitiv: 'Die Anspannung lässt sich durch Ruhe abbauen.' (= kann abgebaut werden)
- sein + zu + Infinitiv: 'Die Vitalwerte sind stündlich zu kontrollieren.' (= müssen kontrolliert werden)
- Adjektive auf -bar / -lich: 'Die Symptome sind behandelbar.' (= können behandelt werden)`,
      examples: [
        {
          german: "Alle Medikamente dürfen nur nach ärztlicher Anordnung verabreicht werden.",
          english: "All medications may only be administered following a doctor's order."
        },
        {
          german: "Die Vitalzeichen des Patienten wurden lückenlos dokumentiert.",
          english: "The patient's vital signs were documented without gaps."
        }
      ],
      commonErrors: [
        "Falsch: *Das Zimmer ist gestern gereinigt worden sein.* -> Richtig: *Das Zimmer wurde gestern gereinigt.*",
        "Falsch: *Der Patient ist operiert geworden.* -> Richtig: *Der Patient ist operiert worden.* (im Perfekt: 'worden', nicht 'geworden')"
      ],
      exercises: [
        {
          id: "ex_07_1",
          question: "Wandeln Sie in das Vorgangspassiv Präsens um: 'Das Pflegeteam misst den Blutdruck.'",
          correctSentence: "Der Blutdruck wird vom Pflegeteam gemessen.",
          hint: "Subjekt wird 'Der Blutdruck', Verb wird 'wird ... gemessen'."
        }
      ]
    },

    {
      id: "gram_08",
      number: 8,
      title: "Konjunktiv I & Indirekte Rede in Berichten & Übergaben",
      level: "C1",
      category: "Konjunktiv I",
      summary: "Sachliche Wiedergabe von Patientenaussagen ohne eigene Parteinahme.",
      explanationGerman: `In der psychiatrischen Dokumentation und Übergabe muss klar erkennbar sein, was der Patient selbst behauptet und was die Pflegekraft tatsächlich beobachtet hat. Hierfür dient der Konjunktiv I (indirekte Rede).

Bildung Konjunktiv I:
Verbstamm im Präsens + Konjunktiv-Endungen (-e, -est, -e, -en, -et, -en).
Besonders wichtig: 3. Person Singular (er/sie/es) endet immer auf -e.
- sein -> er sei / sie seien
- haben -> er habe / sie hätten (Ersatzform)
- können -> er könne
- müssen -> er müsse
- sagen -> er sage

Beispiele aus der Praxis:
- Direkt: Patient: 'Ich habe seit drei Tagen nicht geschlafen.'
- Indirekt (Dokumentation): Der Patient berichtet, er habe seit drei Tagen nicht geschlafen.
- Direkt: Patientin: 'Die Medikamente helfen mir nicht.'
- Indirekt: Die Patientin gibt an, die Medikamente hülfen / würden ihr nicht helfen.
- Direkt: Patient: 'Ich bin gesund und will nach Hause.'
- Indirekt: Herr Weber äußert, er sei vollkommen gesund und wolle entlassen werden.`,
      examples: [
        {
          german: "Frau Meier gab an, sie fühle sich auf Station wohl und habe keine Ängste mehr.",
          english: "Ms. Meier stated that she felt comfortable on the ward and no longer had any fears."
        },
        {
          german: "Der Stationsarzt teilte mit, der Patient sei stabil und könne am Freitag entlassen werden.",
          english: "The ward doctor communicated that the patient was stable and could be discharged on Friday."
        }
      ],
      commonErrors: [
        "Falsch in formalen Berichten: *Der Patient sagt, dass er ist krank.* -> B2/C1: *Der Patient berichtet, er sei krank.*"
      ],
      exercises: [
        {
          id: "ex_08_1",
          question: "Setzen Sie in die indirekte Rede: 'Der Patient sagt: Ich bin sehr müde.' -> Der Patient gibt an, er _____ sehr müde.",
          correctSentence: "Der Patient gibt an, er sei sehr müde.",
          hint: "Konjunktiv I von 'sein' in der 3. Person Singular ist 'sei'."
        }
      ]
    }
  ]
};
