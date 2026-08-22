// Behörden- & Alltagsdeutsch in Deutschland
// Sprachbausteine für Ämter, Wohnen, Bank, Krankenkasse und Nahverkehr

export const BUREAUCRACY_DATA = {
  title: "Behörden- & Alltagsdeutsch",
  provenance: "AUS_QUELLE",
  topics: [
    {
      id: "bur_anmeldung",
      title: "Wohnsitzanmeldung (Bürgerbüro / Einwohnermeldeamt)",
      keyDocuments: ["Wohnungsgeberbestätigung vom Vermieter", "Reisepass / Personalausweis", "Ausgefülltes Anmeldeformular"],
      usefulPhrases: [
        {
          german: "Guten Tag, ich habe einen Termin zur Wohnsitzanmeldung.",
          english: "Good day, I have an appointment for residence registration."
        },
        {
          german: "Hier sind mein Pass und die Wohnungsgeberbestätigung meines Vermieters.",
          english: "Here are my passport and the confirmation from my landlord."
        },
        {
          german: "Könnten Sie mir bitte die Meldebestätigung aushändigen?",
          english: "Could you please issue the registration certificate to me?"
        }
      ]
    },
    {
      id: "bur_auslaenderbehoerde",
      title: "Ausländerbehörde (Aufenthaltstitel & BFD)",
      keyDocuments: ["BFD-Vereinbarung", "Pass", "Meldebestätigung", "Nachweis über Krankenversicherung", "Biometrisches Passfoto"],
      usefulPhrases: [
        {
          german: "Ich beantrage eine Aufenthaltserlaubnis zur Ableistung des Bundesfreiwilligendienstes nach § 19e AufenthG.",
          english: "I am applying for a residence permit for the Federal Volunteer Service."
        },
        {
          german: "Hier ist meine offizielle BFD-Vereinbarung mit dem Bundesamt und dem DRK.",
          english: "Here is my official BFD agreement with the Federal Office and the DRK."
        },
        {
          german: "Wann kann ich mit der Ausstellung des elektronischen Aufenthaltstitels (eAT) rechnen?",
          english: "When can I expect the electronic residence permit (eAT) to be issued?"
        }
      ]
    },
    {
      id: "bur_bank_insurance",
      title: "Bankkonto & Krankenkasse",
      usefulPhrases: [
        {
          german: "Ich möchte ein Girokonto eröffnen, auf das mein monatliches BFD-Taschengeld überwiesen werden kann.",
          english: "I would like to open a checking account for my monthly BFD pocket money."
        },
        {
          german: "Ich benötige eine Mitgliedsbescheinigung für meinen Arbeitgeber zur Sozialversicherung.",
          english: "I need a membership certificate for my employer for social security."
        }
      ]
    }
  ]
};
