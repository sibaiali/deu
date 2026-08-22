// Medical & Privacy Safety Guard
// Strikte Trennung: Sprachtraining vs. Medizinische Handlung

export class SafetyGuard {
  static checkRoleBoundaries(text) {
    const forbidden = [
      { pattern: /\bich gebe ihnen die tablette\b/i, warning: "Rollengrenze: Als BFDler darfst du Medikamente nicht eigenmächtig verabreichen." },
      { pattern: /\bich stelle die diagnose\b/i, warning: "Rollengrenze: Diagnosestellung obliegt ausschließlich Fachärzten." },
      { pattern: /\bich verspreche ihnen\b/i, warning: "Rollengrenze: Keine Behandlungsversprechen abgeben." }
    ];

    for (const rule of forbidden) {
      if (rule.pattern.test(text)) {
        return { safe: false, warning: rule.warning };
      }
    }
    return { safe: true };
  }

  static sanitizePrivacy(text) {
    const hasNameLike = /\b(Herr|Frau)\s+[A-ZÄÖÜ][a-zäöüß]+\s+(aus Zimmer|in Zimmer)\s+\d+/i.test(text);
    if (hasNameLike) {
      return {
        safe: false,
        warning: "Datenschutz-Hinweis: Bitte niemals echte Patientennamen oder Zimmernummern eingeben!"
      };
    }
    return { safe: true };
  }
}
