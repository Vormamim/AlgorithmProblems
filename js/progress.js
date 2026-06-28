const STORAGE_KEY = "lboa_collected_codes";

const Progress = {
  getAll() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch {
      return {};
    }
  },

  collect(code) {
    const all = this.getAll();
    all[code] = Date.now();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  },

  has(code) {
    return !!this.getAll()[code];
  },

  count() {
    return Object.keys(this.getAll()).length;
  },

  clear() {
    localStorage.removeItem(STORAGE_KEY);
  }
};
