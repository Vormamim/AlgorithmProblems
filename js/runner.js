let pyodide = null;
let pyodideLoading = false;
let pyodideReady = false;
const pyodideCallbacks = [];

async function loadPyodideOnce() {
  if (pyodideReady) return pyodide;
  if (pyodideLoading) {
    return new Promise(resolve => pyodideCallbacks.push(resolve));
  }
  pyodideLoading = true;
  pyodide = await loadPyodide();
  pyodideReady = true;
  pyodideCallbacks.forEach(cb => cb(pyodide));
  return pyodide;
}

async function runCode(code, onOutput) {
  const py = await loadPyodideOnce();

  py.setStdout({ batched: (text) => onOutput(text + "\n") });
  py.setStderr({ batched: (text) => onOutput("[ERR] " + text + "\n") });

  const inputSetup = `
import builtins as _bi, js as _js
def _prompt_input(prompt=''):
    result = _js.prompt(str(prompt) if prompt else '')
    if result is None:
        result = ''
    print(str(result))
    return str(result)
_bi.input = _prompt_input
`;

  try {
    await py.runPythonAsync(inputSetup + "\n" + code);
  } catch (err) {
    onOutput("[ERR] " + err.message + "\n");
  }
}

async function runTests(studentCode, testCode, onOutput) {
  const py = await loadPyodideOnce();

  // Pass student code as a Python string so testCode can exec() it
  // with controlled inputs for each test case
  py.globals.set('__student_code__', studentCode);

  let rawOutput = "";
  py.setStdout({ batched: (t) => { rawOutput += t + "\n"; } });
  py.setStderr({ batched: (t) => { rawOutput += "[ERR] " + t + "\n"; } });

  const fullCode = `
import sys as _sys, builtins as _bi
from io import StringIO as _StringIO

# Guard: prevent infinite input loops during the initial function-definition pass.
# Programs that loop on input() will hit this limit and stop cleanly.
class _InputLimit(Exception): pass
_ic = [0]
def _safe_input(prompt=''):
    _ic[0] += 1
    if _ic[0] > 8:
        raise _InputLimit()
    return ''
_bi.input = _safe_input

# Run student code once so any def statements register functions in globals.
# Top-level program code may crash (empty input, input limit) — that's fine.
try:
    exec(__student_code__, globals())
except _InputLimit:
    pass
except Exception:
    pass

# Reset counter; testCode takes over from here
_ic[0] = 0

${testCode}
`;

  try {
    await py.runPythonAsync(fullCode);
  } catch (err) {
    rawOutput += "[ERR] " + err.message + "\n";
  }

  const marker = "__TESTS__:";
  const markerIdx = rawOutput.indexOf(marker);
  if (markerIdx === -1) {
    onOutput(rawOutput);
    return null;
  }

  const beforeTests = rawOutput.slice(0, markerIdx);
  if (beforeTests.trim()) onOutput(beforeTests);

  const testLine = rawOutput.slice(markerIdx + marker.length).split("\n")[0].trim();
  try {
    const results = eval(testLine.replace(/True/g, "true").replace(/False/g, "false"));
    return results;
  } catch {
    onOutput("[ERR] Could not parse test results\n");
    return null;
  }
}
