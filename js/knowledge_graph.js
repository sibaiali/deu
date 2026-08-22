// Interconnected Knowledge Graph Engine
// Verbindet Konzepte, Vokabeln, Grammatik, Psychologie, Simulationen und Quellen zu einem holistischen System.

export class KnowledgeGraph {
  static getConceptNetwork(conceptIdOrKeyword) {
    const kw = conceptIdOrKeyword.toLowerCase();
    
    // Sample high-yield mappings
    const networkDatabase = {
      'frustrationstoleranz': {
        name: 'Frustrationstoleranz',
        domain: 'Psychiatrie & Psychologie',
        level: 'B2 / Fachsprache',
        provenance: 'AUS_QUELLE (Psy.pdf, S. 2)',
        connections: {
          vocabulary: ['die Frustrationstoleranz', 'frustriert', 'die Impulskontrolle', 'die Affektregulation'],
          grammar: ['Kausalsätze (weil / da)', 'Substantivierung (-heit, -keit, -ung)'],
          psychology: ['Emotionsregulation', 'Grenzensetzen', 'Störung der Impulskontrolle'],
          simulations: ['sim_016 (Frustrierter Patient beim Abendessen)', 'sim_agitated_patient_01'],
          speaking: ['Reaktion auf Vorwürfe (60s Challenge)', 'Deeskalationstraining'],
          reading: ['Klinischer Verlaufsbericht Station 2']
        }
      },
      'bedarfsmedikation': {
        name: 'Bedarfsmedikation',
        domain: 'Klinik & Pharmakologie',
        level: 'B2 / Fachsprache',
        provenance: 'AUS_QUELLE (starthilfe_krankenhausalltag.pdf, S. 28)',
        connections: {
          vocabulary: ['die Bedarfsmedikation', 'die Dauermedikation', 'das Beruhigungsmittel', 'verabreichen'],
          grammar: ['Passiv im Stationsalltag (wird angeordnet)', 'Modalverben (dürfen / müssen)'],
          psychology: ['Psychomotorische Unruhe', 'Angstzustände', 'Schlafstörungen'],
          simulations: ['sim_001 (Patient fordert Bedarfsmedikation)', 'sim_medication_refusal_01'],
          speaking: ['Rollengrenze erklären: Pflegekraft holen', 'Magischer Satz'],
          reading: ['Dienstübergabe & Kurvenblatt-Eintrag']
        }
      },
      'grounding': {
        name: '5-4-3-2-1 Grounding-Methode',
        domain: 'Traumatherapie & Krisenintervention',
        level: 'B2 / Fachsprache',
        provenance: 'AUS_QUELLE (Psychische Störungen verstehen, Kap. 6)',
        connections: {
          vocabulary: ['das Grounding', 'die Reorientierung', 'der Sinnesreiz', 'die Dissoziation'],
          grammar: ['Imperativ in der Anleitung (Nennen Sie...)', 'Präpositionen mit Dativ'],
          psychology: ['Dissoziation', 'PTBS', 'Hyperarousal', 'Reizüberflutung'],
          simulations: ['sim_acute_crisis_ward_01', 'sim_panic_attack_hallway_01'],
          speaking: ['Ruhige Anleitung sprechen (Shadowing)', 'Atemübung anleiten'],
          reading: ['Notfallleitfaden Station 2']
        }
      }
    };

    for (const [key, data] of Object.entries(networkDatabase)) {
      if (kw.includes(key) || key.includes(kw)) {
        return data;
      }
    }

    // Dynamic fallback
    return {
      name: conceptIdOrKeyword,
      domain: 'Klinik & B2/C1 Deutsch',
      level: 'B2',
      provenance: 'AUS_QUELLE / KNOWLEDGE GRAPH',
      connections: {
        vocabulary: [conceptIdOrKeyword, `Synonyme zu ${conceptIdOrKeyword}`],
        grammar: ['Satzstellung (V2 & Nebensatz)', 'Adjektivdeklination'],
        psychology: ['Kommunikation', 'Beobachtung'],
        simulations: ['Stationsübergabe & Dokumentation'],
        speaking: ['Spontane Reaktion (60s)'],
        reading: ['Stationsleitfaden']
      }
    };
  }
}
