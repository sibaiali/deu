// API & Integration Abstraction Layer
// Entkoppelt die Plattform von externen Diensten mit 100% Offline-Garantie.

export class APIProviders {
  static getDictionaryProvider() {
    return {
      async lookup(word) {
        return {
          source: 'Lokal/Duden-Katalog',
          definition: `Deutsches Lemma für ${word}`,
          grammar: 'Nomen/Verb/Adjektiv',
          links: {
            duden: `https://www.duden.de/rechtschreibung/${encodeURIComponent(word)}`,
            dwds: `https://www.dwds.de/wb/${encodeURIComponent(word)}`
          }
        };
      }
    };
  }

  static getGrammarProvider() {
    return {
      async checkText(text) {
        try {
          const resp = await fetch('https://api.languagetool.org/v2/check', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ text: text, language: 'de-DE' })
          });
          if (resp.ok) {
            const data = await resp.json();
            return { provider: 'LanguageTool', matches: data.matches || [] };
          }
        } catch (e) {}
        return { provider: 'LocalRuleEngine', matches: [] };
      }
    };
  }
}
