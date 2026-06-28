// _SALT: change this each academic year to invalidate codes from previous years.
// Students cannot generate valid codes without solving problems in the browser —
// the salt is compiled in, but the hash is only revealed on passing tests.
const _SALT = 'Lx9mK2vP4qR7wT2n';

const Codes = {
  async forProblem(problemId) {
    const raw = new TextEncoder().encode(problemId + _SALT);
    const buf = await crypto.subtle.digest('SHA-256', raw);
    const bytes = new Uint8Array(buf);
    // 5 bytes → 40-bit integer → 8 base-34 chars (no I or O to avoid confusion)
    const CHARS = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    let n = 0;
    for (let i = 0; i < 5; i++) n = n * 256 + bytes[i];
    let s = '';
    for (let i = 0; i < 8; i++) {
      s = CHARS[n % 34] + s;
      n = Math.floor(n / 34);
    }
    return 'LBOA-' + s.slice(0, 4) + '-' + s.slice(4);
  },

  async validate(input) {
    const tokens = input.toUpperCase().trim().split(/[\s,;\n]+/).filter(Boolean);
    const results = [];
    for (const token of tokens) {
      const canonical = token.startsWith('LBOA-') ? token : 'LBOA-' + token;
      let matched = null;
      for (const p of PROBLEMS) {
        if ((await this.forProblem(p.id)) === canonical) {
          matched = p;
          break;
        }
      }
      results.push({ code: canonical, problem: matched, valid: !!matched });
    }
    return results;
  }
};
