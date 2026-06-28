const Codes = {
  validate(input) {
    const raw = input.toUpperCase().replace(/\s+/g, "");
    const tokens = raw.split(/[,;\n]+/).map(t => t.trim()).filter(Boolean);
    const results = [];
    for (const token of tokens) {
      const canonical = token.startsWith("LBOA-") ? token : "LBOA-" + token;
      const problem = ALL_CODES[canonical];
      if (problem) {
        results.push({ code: canonical, problem, valid: true });
      } else {
        results.push({ code: token, problem: null, valid: false });
      }
    }
    return results;
  },

  formatCode(code) {
    return code.replace("LBOA-", "");
  }
};
