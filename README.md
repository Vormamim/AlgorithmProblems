# LBOA — Little Book of Algorithms: Python Pathway

An interactive, browser-based Python coding trainer built on the content of *The Little Book of Algorithms 2.01* by William Lau. Students work through 48 challenges in the browser using a live Python runtime — no install required.

## Features

- **48 challenges** across 8 topics, from beginner if-statements to advanced file I/O, sorting, and binary conversion
- **Four problem types**: coding (with auto-testing), multiple choice, Parsons puzzles (drag-and-drop code ordering), and tracing/analysis
- **Live Python in the browser** via [Pyodide](https://pyodide.org) — students write and run real Python without installing anything
- **Hash code system** — each challenge has a unique code derived from SHA-256, revealed only when the student passes all tests; codes change if the teacher rotates the classroom salt; no personal data is stored
- **Teacher validator** — paste a student's codes to see exactly which challenges they completed, no login needed
- **C64 amber-phosphor aesthetic** using [NES.css](https://nostalgic-css.github.io/NES.css/) and Press Start 2P font, with CRT scanline overlay
- **Prev/next navigation** and keyboard shortcuts (← →) between problems
- **Progress saved** in `localStorage` — codes persist between sessions in the same browser

## Topics

| Topic | Challenges | Difficulty |
|---|---|---|
| If Statements / Functions | 1–8 | Beginner |
| String Slicing / Concatenation | 9–13 | Beginner |
| Loops (for / while) | 14–20 | Intermediate |
| Lists / Linear Search | 21–27 | Intermediate |
| 2D Lists | 28–36 | Intermediate |
| File I/O | 37–41 | Advanced |
| Binary & Hex | 42–45 | Advanced |
| Sorting & Analysis | 46–48 | Advanced |

## Files

```
index.html        — Home page: problem grid, progress bar, C64 boot sequence
problem.html      — Problem viewer + Pyodide editor (URL param: ?id=ch01)
validate.html     — Code validator for teacher or student

js/problems.js    — All 48 problems: descriptions, starter code, test cases, codes
js/runner.js      — Pyodide loader, RUN and CHECK handlers
js/progress.js    — localStorage read/write for collected codes
js/codes.js       — Code validation logic

css/theme.css     — Amber phosphor theme on top of NES.css
```

## Usage

Open `index.html` in any modern browser. An internet connection is required on first load to fetch Pyodide (~10 MB) and NES.css from CDN — subsequent loads are cached.

**For students:** work through the problems in order or jump to any challenge. Write Python in the editor, click **RUN** to see output, then **CHECK** to run automated tests. On passing, a unique code is revealed — write it down or screenshot it.

**For teachers:** go to `validate.html`. Students share their collected codes; paste them in to instantly see which challenges they completed. No names, no accounts.

## Code Format

Codes follow the format `LBOA-XXXX-XXXX` (e.g. `LBOA-C2J1-EDYY`). They are computed in the browser from a SHA-256 hash of the problem ID and a classroom salt defined in `js/codes.js`. No server or database is involved.

**Changing the salt** (`_SALT` in `js/codes.js`) invalidates all existing codes — useful at the start of a new academic year to prevent code-sharing between cohorts.

## Tech Stack

| Component | Technology |
|---|---|
| Python runtime | [Pyodide 0.27](https://pyodide.org) |
| UI framework | [NES.css 2.3](https://nostalgic-css.github.io/NES.css/) |
| Font | [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) |
| Language | Vanilla HTML / CSS / JS — no build step |
| Storage | Browser `localStorage` only |

## Source Material

Based on *The Little Book of Algorithms 2.01* by William Lau, used for educational purposes. Solutions and video walkthroughs available at [bit.do/LBOA2](http://bit.do/LBOA2).
