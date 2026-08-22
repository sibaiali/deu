// Multi-Index Fuzzy Search Engine
// Durchsucht Vokabeln, Grammatik, Simulationen, Psychologie, BFD-Fakten und Quellen

export class SearchEngine {
  constructor(dataset = {}) {
    this.dataset = dataset;
  }

  setDataset(dataset) {
    this.dataset = dataset;
  }

  normalize(str) {
    if (!str) return '';
    return str.toLowerCase()
      .replace(/ä/g, 'ae')
      .replace(/ö/g, 'oe')
      .replace(/ü/g, 'ue')
      .replace(/ß/g, 'ss')
      .trim();
  }

  search(query) {
    const q = this.normalize(query);
    if (!q || q.length < 2) return [];

    const results = [];

    // 1. Search Vocabulary
    if (this.dataset.vocabulary) {
      for (const v of this.dataset.vocabulary) {
        const normWord = this.normalize(v.word);
        const normDef = this.normalize(v.germanDefinition);
        const normColloc = this.normalize((v.collocations || []).join(' '));
        const normTags = this.normalize((v.tags || []).join(' '));

        let score = 0;
        if (normWord === q) score += 100;
        else if (normWord.startsWith(q)) score += 80;
        else if (normWord.includes(q)) score += 60;
        else if (normColloc.includes(q)) score += 40;
        else if (normDef.includes(q)) score += 30;
        else if (normTags.includes(q)) score += 20;

        if (score > 0) {
          results.push({
            type: 'Vokabel',
            title: v.word,
            subtitle: `${v.level} • ${v.domain} • ${v.germanDefinition.slice(0, 80)}...`,
            route: `#wiederholen?id=${v.id}`,
            score,
            item: v
          });
        }
      }
    }

    // 2. Search Grammar
    if (this.dataset.grammar && this.dataset.grammar.lessons) {
      for (const g of this.dataset.grammar.lessons) {
        const normTitle = this.normalize(g.title);
        const normExp = this.normalize(g.explanationGerman);
        let score = 0;
        if (normTitle.includes(q)) score += 70;
        else if (normExp.includes(q)) score += 30;

        if (score > 0) {
          results.push({
            type: 'Grammatik',
            title: `Lektion ${g.number}: ${g.title}`,
            subtitle: `${g.level} • ${g.summary}`,
            route: `#grammatik?id=${g.id}`,
            score,
            item: g
          });
        }
      }
    }

    // 3. Search Psychology
    if (this.dataset.psychology && this.dataset.psychology.concepts) {
      for (const p of this.dataset.psychology.concepts) {
        const normTerm = this.normalize(p.term);
        const normExp = this.normalize(p.explanationGerman);
        let score = 0;
        if (normTerm.includes(q)) score += 75;
        else if (normExp.includes(q)) score += 35;

        if (score > 0) {
          results.push({
            type: 'Psychologie',
            title: p.term,
            subtitle: `${p.domain} • ${p.explanationGerman.slice(0, 80)}...`,
            route: `#psychologie?id=${p.id}`,
            score,
            item: p
          });
        }
      }
    }

    // 4. Search Simulations
    if (this.dataset.simulations) {
      for (const s of this.dataset.simulations) {
        const normTitle = this.normalize(s.title);
        const normSit = this.normalize(s.situation);
        let score = 0;
        if (normTitle.includes(q)) score += 70;
        else if (normSit.includes(q)) score += 30;

        if (score > 0) {
          results.push({
            type: 'Simulation',
            title: s.title,
            subtitle: `${s.level} • ${s.category} • ${s.workplace}`,
            route: `#simulation?id=${s.id}`,
            score,
            item: s
          });
        }
      }
    }

    // 5. Search BFD Data
    if (this.dataset.bfd) {
      const norms = [
        { title: "Vergütung & Finanzen", desc: "Taschengeld 250 €, Verpflegung 40 €, Kleidung 130 € = 420 € Barbetrag", route: "#bfd" },
        { title: "Arbeitsplatz & Standorte", desc: "Rudolf-Bultmann-Straße 8 (Zentrum für Psychische Gesundheit) vs. Baldingerstraße (UKGM)", route: "#bfd" },
        { title: "Team & Rollengrenzen", desc: "Was darf ich als BFDler und was darf ich NICHT (Medikamente, Diagnosen)", route: "#bfd" },
        { title: "Erster-Tag-Überlebensmodus", desc: "10 unverzichtbare Sätze, 10 kritische Fragen und Notfallprotokoll", route: "#bfd" }
      ];
      for (const b of norms) {
        const normTitle = this.normalize(b.title);
        const normDesc = this.normalize(b.desc);
        if (normTitle.includes(q) || normDesc.includes(q)) {
          results.push({
            type: 'BFD-Fakt',
            title: b.title,
            subtitle: b.desc,
            route: b.route,
            score: 50
          });
        }
      }
    }

    results.sort((a, b) => b.score - a.score);
    return results.slice(0, 15);
  }
}

export const Search = new SearchEngine();
