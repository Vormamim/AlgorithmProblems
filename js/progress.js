const STORAGE_KEY = "lboa_progress_v2";

const Progress = {
  getAll() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    } catch {
      return {};
    }
  },

  collect(problemId, code) {
    const all = this.getAll();
    all[problemId] = code;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  },

  has(problemId) {
    return !!this.getAll()[problemId];
  },

  getCode(problemId) {
    return this.getAll()[problemId] || null;
  },

  count() {
    return Object.keys(this.getAll()).length;
  },

  clear() {
    localStorage.removeItem(STORAGE_KEY);
  }
};
