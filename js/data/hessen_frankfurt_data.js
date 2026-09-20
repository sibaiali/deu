// Hessen & Frankfurt Tone, Slang, Alltagssprache & Humor Guide
// Authentische Redewendungen, Kontraktionen, Kaffeeküchen-Banter und Mentalität in Hessen / Rhein-Main / Marburg

export const HESSEN_FRANKFURT_DATA = {
  title: "Hessen & Frankfurt: Tone, Dialekt, Alltags-Slang & Humor",
  region: "Rhein-Main • Frankfurt • Mittelhessen (Marburg / Gießen)",
  intro: "In Frankfurt, Marburg und ganz Hessen sprechen Einheimische im Alltag oft nicht steifes Hochdeutsch, sondern nutzen typische Sprachrhythmen, Verkürzungen (Kontraktionen) und eine herzliche, direkte Art mit einer Prise trockenem Humor.",

  sections: [
    // 1. Die wichtigsten hessischen Alltagsbegriffe
    {
      id: "hessen_basics",
      title: "Die wichtigsten hessischen Ausdrücke (Überlebenswortschatz)",
      items: [
        {
          term: "Gude! / Ei gude wie?",
          meaning: "Universal-Gruß in Hessen zu jeder Tages- und Nachtzeit. Bedeutet: 'Hallo!', 'Guten Tag!', 'Wie geht es dir?'",
          formalEquivalent: "Guten Tag, wie geht es Ihnen?",
          example: "Ei gude, Ali! Na, wie läuft die Schicht heute?",
          response: "Gude! Läuft super, danke. Und bei dir?",
          humorTip: "Funktioniert morgens um 6 Uhr genauso wie abends in der Kneipe."
        },
        {
          term: "Babbel net! / Hör uff zu babbele",
          meaning: "'Red keinen Unsinn!' oder 'Erzähl keine Märchen!'",
          formalEquivalent: "Reden Sie bitte keinen Unsinn.",
          example: "Babbel net so viel, pack lieber mal mit an beim Bettenbeziehen!",
          response: "Schon gut, ich bin ja schon dabei!",
          humorTip: "Wird unter Kollegen liebevoll-neckend verwendet, wenn jemand zu viel redet statt zu arbeiten."
        },
        {
          term: "Uffbasse! / Pass uff!",
          meaning: "'Aufpassen!', 'Vorsicht!'",
          formalEquivalent: "Geben Sie bitte gut Acht / Passen Sie auf.",
          example: "Uffbasse, der Boden im Flur ist frisch gewischt und spiegelglatt!",
          response: "Danke für die Warnung, ich passe auf.",
          humorTip: "Kurzer, energischer Warnruf auf hessisch."
        },
        {
          term: "Dappisch / Sich dappisch anstelle",
          meaning: "Ungeschickt, tollpatschig oder unbedarft sein.",
          formalEquivalent: "Sich ungeschickt anstellen.",
          example: "Ich hab mich heute beim Verbandswechsel echt dappisch angestellt, die Schere ist mir zweimal runtergefallen.",
          response: "Kein Stress, das passiert jedem am Anfang mal!",
          humorTip: "Perfekt für charmante Selbstironie im Team."
        },
        {
          term: "Mach kaan Zirkus / Kaan Heckmeck",
          meaning: "'Mach kein Drama!', 'Mach es nicht so kompliziert!'",
          formalEquivalent: "Machen Sie bitte keine Umstände.",
          example: "Komm, wir machen kaan Zirkus, wir tragen das Patientenbett schnell zu zweit rüber.",
          response: "Alles klar, packen wir's an!",
          humorTip: "Typisch hessische Pragmatik: Probleme schnell lösen ohne langes Theater."
        },
        {
          term: "Verzähl ma! / Was gibt's Neues?",
          meaning: "'Erzähl mal!', 'Was ist passiert?'",
          formalEquivalent: "Berichten Sie mir bitte von den Ereignissen.",
          example: "Komm in die Kaffeeküche und verzähl ma: Wie war die Visite mit dem Chefarzt?",
          response: "Also, es war echt spannend...",
          humorTip: "Die Standard-Aufforderung zum kollegialen Austausch in der Pause."
        }
      ]
    },

    // 2. Typische Sprachmuster & Kontraktionen im Alltag
    {
      id: "hessen_contractions",
      title: "Umgangssprachliche Verkürzungen (Wie Natives wirklich sprechen)",
      items: [
        {
          pattern: "haste / kannste / machste / willste",
          formal: "hast du / kannst du / machst du / willst du",
          example: "Haste mal kurz 'ne Sekunde Zeit? Kannste mir beim Umlagern helfen?",
          usage: "95% aller Kollegen in der Klinik und im Büro nutzen diese Form im mündlichen Alltag."
        },
        {
          pattern: "guckste mal / schauste mal",
          formal: "siehst du mal / schaust du mal bitte nach",
          example: "Guckste mal bitte schnell nach den Vitalwerten von Zimmer 4?",
          usage: "Schnelle Arbeitsanweisung unter Kollegen."
        },
        {
          pattern: "is so / läuft / passt scho",
          formal: "Das ist in der Tat so / Das funktioniert hervorragend",
          example: "– 'Die Frühschicht war heute echt entspannt.' – 'Is so, hat alles geklappt!'",
          usage: "Bestätigung und Einverständnis ohne viele Worte."
        },
        {
          pattern: "eh / halt / quasi / sozusagen",
          formal: "ohnehin / naturgemäß / gewissermaßen",
          example: "Das müssen wir morgen eh neu dokumentieren, da kommt halt der neue Arzt.",
          usage: "Füllwörter, die den Redefluss flüssig und muttersprachlich klingen lassen."
        }
      ]
    },

    // 3. Humor, Schlagfertigkeit & Kaffeeküchen-Banter
    {
      id: "hessen_humor_banter",
      title: "Schlagfertigkeit & Humor im Arbeitsalltag (Kaffeeküche & Team)",
      items: [
        {
          situation: "Ein Kollege kommt mit Verspätung in die Kaffeeküche und sagt: 'Sorry, die Übergabe hat ewig gedauert.'",
          wittyReply: "Kein Ding, wir haben deinen Kaffee schon mal vorsichtshalber warmgehalten... also in unseren Tassen!",
          humorType: "Kollegialer Neck-Humor (Schlagfertigkeit)",
          tone: "Herzlich & locker"
        },
        {
          situation: "Du machst einen kleinen Fehler und jemand schaut überrascht.",
          wittyReply: "Das war ein taktischer Test, um zu prüfen, ob alle im Team noch aufmerksam sind! Test bestanden!",
          humorType: "Selbstironie (Charming De-escalation)",
          tone: "Entspannend & sympathisch"
        },
        {
          situation: "Montagmorgen, 06:45 Uhr, alle wirken noch müde.",
          wittyReply: "Guten Morgen! Wer auch immer den Kaffee gekocht hat, verdient heute schon die Beförderung des Monats.",
          humorType: "Situationshumor / Stimmungserhellung",
          tone: "Empathisch & teamstärkend"
        },
        {
          situation: "Eine Aufgabe wirkt riesig und alle stöhnen.",
          wittyReply: "Wie isst man einen Elefanten? Stück für Stück! Fangen wir mit dem ersten Bissen an.",
          humorType: "Motivierender Humor",
          tone: "Lösungsorientiert"
        }
      ]
    }
  ]
};
