const Sounds = (() => {
  let _ctx = null;
  let _muted = localStorage.getItem('lboa_sfx') === '0';

  function ctx() {
    if (!_ctx) _ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (_ctx.state === 'suspended') _ctx.resume();
    return _ctx;
  }

  function tone(freq, t, dur, vol = 0.12) {
    if (_muted) return;
    try {
      const c = ctx();
      const o = c.createOscillator();
      const g = c.createGain();
      o.connect(g);
      g.connect(c.destination);
      o.type = 'square';
      o.frequency.setValueAtTime(freq, c.currentTime + t);
      g.gain.setValueAtTime(0, c.currentTime + t);
      g.gain.linearRampToValueAtTime(vol, c.currentTime + t + 0.004);
      g.gain.linearRampToValueAtTime(0, c.currentTime + t + dur - 0.008);
      o.start(c.currentTime + t);
      o.stop(c.currentTime + t + dur + 0.01);
    } catch (e) {}
  }

  const api = {
    // Short UI click
    blip() { tone(440, 0, 0.055); },

    // Option selected
    select() { tone(587, 0, 0.065); },

    // Page / nav click
    nav() { tone(330, 0, 0.05, 0.09); },

    // Wrong answer / fail
    fail() {
      tone(311, 0.00, 0.13);
      tone(233, 0.14, 0.22);
    },

    // All tests / parsons / mcq correct (before reveal)
    success() {
      tone(523, 0.00, 0.08);
      tone(659, 0.09, 0.08);
      tone(784, 0.18, 0.08);
      tone(1047, 0.27, 0.18);
    },

    // Code reveal fanfare
    fanfare() {
      tone(392, 0.00, 0.08);
      tone(523, 0.09, 0.08);
      tone(659, 0.18, 0.08);
      tone(784, 0.27, 0.08);
      tone(659, 0.36, 0.06);
      tone(784, 0.43, 0.06);
      tone(1047, 0.50, 0.45, 0.14);
    },

    isMuted() { return _muted; },

    toggle() {
      _muted = !_muted;
      localStorage.setItem('lboa_sfx', _muted ? '0' : '1');
      return !_muted; // returns true if now playing
    },

    // Inject a mute toggle button into the given element
    initBtn(el) {
      const btn = document.createElement('button');
      const update = (on) => {
        btn.textContent = on ? '♪' : '♪̶'; // ♪ or ♪̶
        btn.className = 'sound-toggle' + (on ? ' on' : '');
        btn.title = on ? 'Sound on — click to mute' : 'Sound off — click to enable';
      };
      update(!_muted);
      btn.addEventListener('click', () => {
        const on = api.toggle();
        update(on);
        if (on) api.blip();
      });
      el.appendChild(btn);
    }
  };

  return api;
})();
