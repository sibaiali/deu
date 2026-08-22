// Mein BFD auf einen Blick — Strukturierte Daten für den persönlichen Einsatz
// Unterscheidung zwischen Fakten (BESTÄTIGT), Notizen (AUS_QUELLE), Wahrscheinlichkeiten (WAHRSCHEINLICH) und offenen Punkten (ZU_PRÜFEN)

export const BFD_DATA = {
  overview: {
    title: "Mein BFD auf einen Blick",
    subtitle: "Bundesfreiwilligendienst im Zentrum für Psychische Gesundheit / UKGM Marburg",
    statusBadge: "AKTIVE_VORBEREITUNG",
    lastUpdated: "2026-08-22"
  },

  finances: {
    summary: {
      totalCashMonthly: 420.00,
      estimatedTotalValueMin: 700.00,
      estimatedTotalValueMax: 950.00,
      currency: "€",
      note: "Wichtig: Der geschätzte Gesamtwert (700–900+ €) ist kein offizielles Gehalt, sondern eine Berechnung aus Barbetrag + Sachleistungen + Sozialversicherungsbeiträgen."
    },
    cashItems: [
      {
        id: "cash_taschengeld",
        label: "Taschengeld",
        amount: 250.00,
        frequency: "monatlich",
        status: "BESTÄTIGT",
        source: "BFD Vertrag / Notizen",
        description: "Gesetzliches Taschengeld für Freiwilligendienstleistende."
      },
      {
        id: "cash_verpflegung",
        label: "Verpflegungspauschale",
        amount: 40.00,
        frequency: "monatlich",
        status: "BESTÄTIGT",
        source: "BFD Vertrag / Notizen",
        description: "Monatlicher Barzuschuss zur Verpflegung."
      },
      {
        id: "cash_kleidung",
        label: "Kleidungspauschale",
        amount: 130.00,
        frequency: "monatlich",
        status: "BESTÄTIGT",
        source: "BFD Vertrag / Notizen",
        description: "Monatlicher Zuschuss für Dienstkleidung / Aufwand."
      }
    ],
    nonCashBenefits: [
      {
        id: "benefit_housing",
        label: "Freie Unterkunft",
        provider: "Familie Fröhlich",
        estimatedValue: "ca. 250–350 €/Monat",
        status: "AUS_QUELLE",
        provenance: "AUS_QUELLE",
        description: "Wohnmöglichkeit wird privat/organisiert bei Familie Fröhlich gestellt."
      },
      {
        id: "benefit_food",
        label: "Freie Verpflegung",
        provider: "Familie Fröhlich",
        estimatedValue: "ca. 150–200 €/Monat",
        status: "AUS_QUELLE",
        provenance: "AUS_QUELLE",
        description: "Tägliche Grundverpflegung im Rahmen der Unterkunft."
      },
      {
        id: "benefit_ticket",
        label: "Jobticket / Monatsticket",
        provider: "DRK (laut Schreiben Wallrath)",
        estimatedValue: "ca. 49–60 €/Monat",
        status: "WAHRSCHEINLICH",
        provenance: "AUS_QUELLE",
        details: "Jobticket wird vom Träger (DRK) übernommen; alternativ Möglichkeit des vergünstigten hessischen Ermäßigungstickets."
      }
    ],
    socialInsurance: {
      label: "Sozialversicherungsbeiträge (100% Arbeitgeber)",
      monthlyPaidByEmployer: 160.58,
      status: "BESTÄTIGT",
      source: "Gesetzliche Regelung BFD / Notizen",
      description: "Die Einsatzstelle zahlt 100% der Beiträge zur Kranken-, Pflege-, Renten- und Arbeitslosenversicherung (ca. 160,58 €/Monat)."
    }
  },

  workSchedule: {
    weeklyHours: 40,
    dailyHours: 8,
    daysPerWeek: 5,
    vacationDays: 26,
    mandatorySeminarDays: 26,
    residentialSeminarDays: 5,
    seminarDetails: "Seminartage gelten rechtlich voll als bezahlte Arbeitszeit. 5 Tage finden als Blockseminar in einem Bildungszentrum statt.",
    probezeit: {
      durationWeeks: 6,
      status: "BESTÄTIGT",
      source: "BFD Gesetz / Vertrag",
      noticePeriod: "Während der 6-wöchigen Probezeit kann der Dienst mit einer Frist von 2 Wochen ohne Angabe von Gründen gekündigt werden.",
      criticalRule: "Nutze die ersten 6 Wochen aktiv, um Fragen zu stellen, die Station kennenzulernen und Routinen aufzubauen."
    }
  },

  locations: [
    {
      id: "loc_psychiatrie",
      name: "Zentrum für Psychische Gesundheit (Klinik für Psychiatrie und Psychotherapie)",
      address: "Rudolf-Bultmann-Straße 8, 35039 Marburg",
      status: "WAHRSCHEINLICH",
      provenance: "AUS_QUELLE",
      relevance: "Vermutlicher tatsächlicher Einsatzort für die psychiatrische Station.",
      notes: "Historisch auch als Ortenberg-Klinik bekannt. Sehr nah am Hauptbahnhof Marburg gelegen (ca. 5–10 Min Fußweg)."
    },
    {
      id: "loc_ukgm_main",
      name: "UKGM Universitätsklinikum Gießen und Marburg (Hauptcampus Lahnberge)",
      address: "Baldingerstraße, 35043 Marburg",
      status: "BESTÄTIGT",
      provenance: "AUS_QUELLE",
      relevance: "Offizielle Vertrags- und Verwaltungsadresse des Klinikums.",
      notes: "Liegt oben auf den Lahnbergen. Hier befindet sich die zentrale Personalverwaltung und Hauptklinik."
    },
    {
      id: "loc_ortenberg",
      name: "Ortenberg-Standort",
      address: "Bereich Rudolf-Bultmann-Straße / Ortenberg",
      status: "AUS_QUELLE",
      provenance: "AUS_QUELLE",
      relevance: "Bezeichnung in älteren Notizen für den psychiatrischen Klinikbereich in Marburg."
    }
  ],

  wards: [
    {
      id: "ward_acute",
      name: "Geschützte Akut- und Kriseninterventionsstation",
      capacity: "22 Betten",
      status: "AUS_QUELLE",
      provenance: "AUS_QUELLE",
      patientFocus: "Akute psychische Krisen, schwere affektive Episoden, Intoxikationen, akute Suizidalität, Psychosen.",
      environment: "Geschützter / geschlossener Bereich. Türen sind gesichert. Besondere Sicherheits- und Kommunikationsregeln.",
      keySafetyRules: [
        "Keine Gegenstände herumliegen lassen (z. B. Scheren, Besteck, Ladekabel, Glas).",
        "Türen beim Verlassen immer sofort abschließen / verriegeln.",
        "Niemals alleine in unübersichtliche Konfliktsituationen eingreifen.",
        "Akute Anspannung oder Wesensveränderungen sofort dem Pflegepersonal melden."
      ]
    },
    {
      id: "ward_open",
      name: "Offene Allgemeinpsychiatrische Stationen & Psychotherapie",
      capacity: "Variabel",
      status: "WAHRSCHEINLICH",
      provenance: "ERGÄNZT",
      patientFocus: "Depressionen, Angst- und Zwangsstörungen, posttraumatische Belastungsstörungen, Persönlichkeitsstörungen.",
      environment: "Freies Ein- und Ausgehen für Patienten. Fokus auf Therapieprogramm, Gruppengespräche und Aktivierung."
    },
    {
      id: "ward_tagesklinik",
      name: "Psychiatrische Tagesklinik",
      capacity: "Teilstationär",
      status: "WAHRSCHEINLICH",
      provenance: "ERGÄNZT",
      patientFocus: "Patienten, die tagsüber therapiert werden und abends nach Hause zurückkehren."
    }
  ],

  roleBoundaries: {
    canDo: [
      {
        action: "Unterstützung der Pflegefachkräfte",
        examples: "Material auffüllen, Betten frisch beziehen, Essen austeilen, Essenstabletts einsammeln, Teeküche betreuen."
      },
      {
        action: "Begleitung von Patienten",
        examples: "Patienten zu internen Terminen (EKG, Röntgen, Ergotherapie, Spaziergänge auf dem Klinikgelände) begleiten – sofern vom Fachpersonal ausdrücklich genehmigt."
      },
      {
        action: "Aktivierung & Gesellschaft leisten",
        examples: "Gemeinsam mit Patienten Gesellschaftsspiele spielen, spazieren gehen, Zeitung vorlesen, bei Freizeitaktivitäten anwesend sein."
      },
      {
        action: "Aufmerksames Beobachten & Melden",
        examples: "Veränderungen im Verhalten eines Patienten wahrnehmen und sachlich der Bezugspflegefachkraft berichten ('Mir ist aufgefallen, dass...')."
      },
      {
        action: "Hilfe bei alltäglichen Handgriffen",
        examples: "Wassergläser reichen, Hilfsmittel wie Rollstuhl oder Rollator bereitstellen, beim Aufstehen nach Weisung der Pflege assistieren."
      },
      {
        action: "Respektvolles, ruhiges Zuhören",
        examples: "Ein offenes Ohr haben, ohne zu bewerten, ohne Ratschläge zu erteilen und ohne Diagnosen zu stellen."
      }
    ],
    cannotDo: [
      {
        action: "Medikamente verabreichen oder vorbereiten",
        reason: "Medikamentengabe ist rechtlich ausschließlich examiniertem Pflegepersonal und Ärzten nach schriftlicher Verordnung vorbehalten. Freiwillige dürfen weder Tabletten aushändigen noch Tropfen dosieren.",
        warningLevel: "KRITISCH"
      },
      {
        action: "Diagnosen stellen oder interpretieren",
        reason: "Freiwillige diagnostizieren nicht. Verhaltensweisen werden sachlich beschrieben, nicht medizinisch gelabelt.",
        warningLevel: "WICHTIG"
      },
      {
        action: "Eigenständige Behandlungsentscheidungen treffen",
        reason: "Therapie- und Ausgangsregeln bestimmt das ärztlich-therapeutische Team. Keine Sondererlaubnisse erteilen!",
        warningLevel: "KRITISCH"
      },
      {
        action: "Geheimnisse vor dem Team bewahren",
        reason: "Wenn ein Patient Gefährdung, Absprachen oder Suizidgedanken äußert, gilt keine Schweigepflicht gegenüber dem Behandlungsteam. Das Team muss sofort informiert werden.",
        warningLevel: "LEBENSWICHTIG"
      },
      {
        action: "Körperliche Fixierungen oder Zwangsmaßnahmen allein durchführen",
        reason: "Fixierungen sind streng geregelte juristische Maßnahmen, die nur nach ärztlicher Anordnung durch geschultes Fachpersonal ausgeführt werden.",
        warningLevel: "KRITISCH"
      },
      {
        action: "Privaten Kontakt oder Geschenke annehmen / austauschen",
        reason: "Wahrung professioneller Grenzen. Keine privaten Telefonnummern, Social Media Kontakte oder Geldgeschenke.",
        warningLevel: "WICHTIG"
      }
    ]
  },

  teamRoles: [
    {
      title: "Stationsleitung (m/w/d)",
      abbrev: "SL",
      description: "Leitet das Pflegeteam der Station, plant Schichten, Urlaub und ist die erste Ansprechperson bei organisatorischen Fragen oder Problemen des BFDlers.",
      whenToContact: "Dienstplanänderungen, Urlaubswünsche, generelle Rückfragen zu Aufgaben, Feedbackgespräche."
    },
    {
      title: "Pflegefachkraft / Bezugspflegekraft (m/w/d)",
      abbrev: "PFK",
      description: "Verantwortlich für die direkte pflegerische und medizinische Versorgung der Patienten, Medikamentenausgabe, Dokumentation und Schichtleitung.",
      whenToContact: "Tägliche Arbeitsanweisungen, Notfälle, wenn ein Patient unruhig wird oder Medikamente verlangt."
    },
    {
      title: "Pflegehilfskraft (m/w/d)",
      abbrev: "PHK",
      description: "Unterstützt bei der Grundpflege, Lagerung, Mobilisation und täglichen Stationsabläufen.",
      whenToContact: "Zusammenarbeit bei praktischen Aufgaben wie Bettenmachen, Essensausgabe, Materialtransport."
    },
    {
      title: "Stationsarzt / Assistenzarzt (m/w/d)",
      abbrev: "Arzt",
      description: "Führt medizinische Aufnahme, Visiten, Diagnostik und Therapie durch. Ordnet Medikamente und Ausgangsstufen an.",
      whenToContact: "Bei akuten somatischen oder psychiatrischen Notfällen; Anweisungen für Untersuchungen."
    },
    {
      title: "Oberarzt / Oberärztin",
      abbrev: "OA / OÄ",
      description: "Facharzt mit Leitungs- und Supervisionfunktion über mehrere Stationen.",
      whenToContact: "Nimmt an wöchentlichen Oberarztvisiten und Fallbesprechungen teil."
    },
    {
      title: "Psychologe / Psychotherapeut (m/w/d)",
      abbrev: "Psych.",
      description: "Führt Einzel- und Gruppentherapien, Testdiagnostik und Kriseninterventionen durch.",
      whenToContact: "Rücksprache bei Fragen zur therapeutischen Gestaltung von Freizeit- und Spielangeboten."
    },
    {
      title: "Ergotherapeut / Bewegungstherapeut (m/w/d)",
      abbrev: "Ergo",
      description: "Fördert handwerkliche, gestalterische und lebenspraktische Fähigkeiten der Patienten.",
      whenToContact: "Begleitung von Patienten zur Ergotherapie, Mitwirkung bei Gruppenprojekten."
    },
    {
      title: "Sozialarbeiter / Sozialdienst (m/w/d)",
      abbrev: "Soz.",
      description: "Unterstützt Patienten bei behördlichen Anträgen, Wohnungsfragen, Nachsorge und beruflicher Wiedereingliederung.",
      whenToContact: "Organisatorische Fragen zur Entlassung oder externen Terminen."
    },
    {
      title: "Pädagogische Begleitung (DRK Träger)",
      contactPerson: "Lydia",
      status: "AUS_QUELLE",
      provenance: "AUS_QUELLE",
      description: "Begleitet die Freiwilligen während der 26 Seminartage, moderiert Gruppengespräche und ist Vertrauensperson bei Konflikten mit der Einsatzstelle.",
      whenToContact: "Seminarfragen, Reflexion über den Dienst, Vermittlung bei Problemen an der Einsatzstelle."
    },
    {
      title: "BFD-Freiwilligendienstleistender (Eigene Rolle)",
      abbrev: "BFDler",
      description: "Freiwilliger Helfer zur Entlastung des Teams und Unterstützung im Stationsalltag.",
      mindset: "Lernbereit, verlässlich, empathisch, grenzbewusst, sicher im Rückfragen."
    }
  ],

  knowledgePriorities: {
    mussIchWissen: [
      "Meine genaue Station, Schichtzeiten und Ansprechperson am ersten Tag.",
      "Die absolute Grenze: Ich vergebe NIEMALS Medikamente und stelle keine Diagnosen.",
      "Wo sich der Notruf / das Stationszimmer befindet und wie ich Hilfe rufe.",
      "Dass ich bei Unsicherheit IMMER sofort eine Pflegefachkraft frage ('Ich frage kurz nach').",
      "Dass alles, was Patienten auf Station erzählen, unter die Schweigepflicht fällt."
    ],
    sollteIchKoennen: [
      "Mich im Team und vor Patienten freundlich und klar auf Deutsch vorstellen.",
      "Strukturierte Rückmeldungen geben ('Ich habe das Zimmer 10 fertig gemacht').",
      "Höflich und sicher nachfragen, wenn ich eine Anweisung nicht verstanden habe.",
      "In Konfliktsituationen ruhig bleiben und Distanz wahren.",
      "Wichtige Stationsobjekte und Alltagsmaterialien auf Deutsch benennen."
    ],
    waereGutZuWissen: [
      "Die medizinischen Fachbegriffe und lateinischen Anatomienamen auf dem Kurvenblatt.",
      "Die Farbkodierung im Pflegebericht (Blau = Tagdienst, Grün = Spätdienst, Rot = Nachtdienst).",
      "Hintergrundwissen über Krankheitsbilder (Depression, Schizophrenie, PTBS) zur besseren Empathie.",
      "Die genaue Struktur des Marburger UKGM-Campus und der Buslinien (Lahnberge vs. Tal)."
    ]
  },

  firstDayChecklist: [
    {
      id: "chk_01",
      category: "Vor dem Verlassen der Wohnung",
      item: "Personalausweis, BFD-Vereinbarung und Notizbuch einstecken.",
      done: false
    },
    {
      id: "chk_02",
      category: "Anfahrt",
      item: "Verbindung zur Einsatzstelle prüfen (Buslinie / Fußweg vom Bahnhof Marburg).",
      done: false
    },
    {
      id: "chk_03",
      category: "Ankunft",
      item: "Pünktlich 15 Minuten vor Dienstbeginn am Haupteingang / Stationszimmer melden.",
      done: false
    },
    {
      id: "chk_04",
      category: "Klärung",
      item: "Name der zuständigen Stationsleitung / Bezugspflegekraft notieren.",
      done: false
    },
    {
      id: "chk_05",
      category: "Kleidung & Spind",
      item: "Umkleideraum, Spindschlüssel und Dienstkleidung erfragen.",
      done: false
    },
    {
      id: "chk_06",
      category: "Rundgang",
      item: "Station zeigen lassen: Wo sind Notrufknöpfe, Teeküche, Wäschesack, Aufenthaltsraum?",
      done: false
    },
    {
      id: "chk_07",
      category: "Dienstplan",
      item: "Schichtzeiten für die erste Woche und Pausenregelungen aufschreiben.",
      done: false
    }
  ],

  firstDaySurvival: {
    tenEssentialPhrases: [
      {
        german: "Guten Morgen! Mein Name ist Ali, ich bin der neue Bundesfreiwillige auf dieser Station.",
        english: "Good morning! My name is Ali, I am the new federal volunteer on this ward.",
        situation: "Beim Betreten der Station und Vorstellen im Team."
      },
      {
        german: "Könnten Sie mir bitte kurz zeigen, wie das hier auf Station gehandhabt wird?",
        english: "Could you please briefly show me how this is handled on the ward?",
        situation: "Wenn man eine neue Aufgabe bekommt."
      },
      {
        german: "Entschuldigung, das habe ich gerade akustisch nicht ganz verstanden. Könnten Sie das bitte noch einmal wiederholen?",
        english: "Excuse me, I didn't quite catch that acoustically. Could you please repeat that?",
        situation: "Wenn jemand zu schnell oder undeutlich spricht."
      },
      {
        german: "Ich bin mir gerade nicht sicher, ob ich diese Aufgabe als BFDler übernehmen darf. Ich frage lieber kurz bei der Pflegekraft nach.",
        english: "I am not sure whether I am allowed to do this task as a volunteer. I'd better check with the nurse.",
        situation: "Wenn ein Patient oder Kollege eine grenzwertige Aufgabe übergibt."
      },
      {
        german: "Herr/Frau Müller, ich darf Ihnen leider keine Medikamente geben. Ich hole sofort die zuständige Schwester/den Pfleger für Sie.",
        english: "Mr./Ms. Müller, I am unfortunately not allowed to give you medication. I will immediately get the nurse for you.",
        situation: "Wenn ein Patient nach Tabletten fragt."
      },
      {
        german: "Ich habe die Betten in Zimmer 4 und 5 frisch bezogen und die Wäsche in den Wäschesack gebracht.",
        english: "I have changed the beds in rooms 4 and 5 and brought the laundry to the laundry bag.",
        situation: "Erledigte Aufgabe an die Pflege zurückmelden."
      },
      {
        german: "Mir ist gerade aufgefallen, dass Herr Becker sehr unruhig im Flur auf und ab geht. Ich wollte kurz Bescheid geben.",
        english: "I just noticed that Mr. Becker is pacing restlessly up and down the hallway. I wanted to let you know.",
        situation: "Auffälliges Patientenverhalten sachlich melden."
      },
      {
        german: "Wo finde ich neue Handschuhe und Desinfektionsmittel?",
        english: "Where can I find new gloves and hand sanitizer?",
        situation: "Im Stationsalltag / Pflegematerial."
      },
      {
        german: "Soll ich bei diesem Gespräch dabeibleiben oder wäre es besser, wenn ich mich kurz zurückziehe?",
        english: "Should I stay for this conversation or would it be better if I step out briefly?",
        situation: "Wahrung der Privatsphäre bei Patientengesprächen."
      },
      {
        german: "Vielen Dank für die Unterstützung heute! Wann genau beginnt morgen mein Dienst?",
        english: "Thank you very much for the support today! What time exactly does my shift start tomorrow?",
        situation: "Schichtende und Verabschiedung."
      }
    ],

    tenCriticalQuestions: [
      "1. Wer ist heute meine direkte Ansprechperson auf Station?",
      "2. Wo befindet sich der Umkleideraum und wie erhalte ich Dienstkleidung?",
      "3. Wann und wie lange sind die offiziellen Frühstücks- und Mittagspausen?",
      "4. Wo sind die Notruftaster und welche Telefonnummer wähle ich bei einem Notfall?",
      "5. Welche Patienten dürfen das Klinikgelände alleine verlassen und welche nicht?",
      "6. Gibt es Patienten, bei denen ich besondere Vorsichtsmaßnahmen beachten muss?",
      "7. Wo befinden sich die Wäschesäcke, Müllentsorgung und Vorratsräume?",
      "8. Wo soll ich mich melden, wenn ich eine mir zugewiesene Aufgabe beendet habe?",
      "9. Wo trage ich meine Arbeitszeiten ein (elektronische Zeiterfassung oder Dienstbuch)?",
      "10. An wen wende ich mich, wenn ich mich krankmelden muss?"
    ],

    emergencyProtocol: {
      step1: "Ruhe bewahren und Blickkontakt halten, ohne den Patienten zu bedrängen.",
      step2: "Nicht argumentieren, nicht diskutieren, keine falschen Versprechungen machen.",
      step3: "Rückzug sichern: Immer zwischen Patient und Ausgangstür bleiben.",
      step4: "Sofort Hilfe holen: Notrufknopf drücken oder lautstark nach einer Fachkraft rufen ('Pflege bitte in Zimmer X!').",
      step5: "Sachlich berichten: Nur Tatsachen mitteilen ('Herr X steht am Fenster und zittert', keine Diagnosen)."
    }
  }
};
