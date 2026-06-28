const PROBLEMS = [
  {
    id: "ch01",
    num: 1,
    title: "Highest Number",
    topic: "If Statements",
    difficulty: "beginner",
    type: "coding",
    code: "LBOA-F1A2",
    description: `Write a function called <code>highest_number</code> with three parameters: <code>num1</code>, <code>num2</code> and <code>num3</code>. The function should <strong>return</strong> the highest of the three numbers.`,
    starterCode: `def highest_number(num1, num2, num3):
    if num1 >= num2 and num1 >= num3:
        `,
    testCode: `
_results = []
for _args, _expected in [
    ((3, 7, 2), 7),
    ((9, 3, 5), 9),
    ((1, 5, 9), 9),
    ((10, 10, 5), 10),
    ((1, 1, 1), 1),
    ((-1, -5, -3), -1),
]:
    try:
        _r = highest_number(*_args)
        _results.append((f"highest_number{_args}", _r == _expected, f"Expected {_expected}, got {_r}"))
    except NameError:
        _results.append((f"highest_number{_args}", False, "Function not found — check the name is 'highest_number'"))
        break
    except Exception as _e:
        _results.append((f"highest_number{_args}", False, str(_e)))
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch02",
    num: 2,
    title: "Calling Highest Number",
    topic: "If Statements",
    difficulty: "beginner",
    type: "coding",
    code: "LBOA-G3B4",
    description: `Using your <code>highest_number</code> function from Challenge 1, write a complete program that:<br><br>
1. Asks the user to enter three integers<br>
2. Calls <code>highest_number</code> with those values<br>
3. Stores the result in a variable called <code>highest</code><br>
4. Prints a meaningful message with the answer`,
    starterCode: `def highest_number(num1, num2, num3):
    if num1 >= num2 and num1 >= num3:
        return num1
    elif num2 >= num1 and num2 >= num3:
        return num2
    else:
        return num3

num1_in = int(input("Enter the first number: "))
num2_in = int(input("Enter the second number: "))
`,
    testCode: `
_results = []
try:
    _r = highest_number(5, 12, 3)
    _results.append(("highest_number(5, 12, 3) → 12", _r == 12, f"Expected 12, got {_r}"))
    _r = highest_number(9, 3, 7)
    _results.append(("highest_number(9, 3, 7) → 9", _r == 9, f"Expected 9, got {_r}"))
except NameError:
    _results.append(("highest_number is defined", False, "Function not found — check spelling"))
except Exception as _e:
    _results.append(("highest_number works", False, str(_e)))

_cap = _StringIO()
_sys.stdout = _cap
_it = iter(["5", "12", "3"])
_bi.input = lambda p='': next(_it, '')
try:
    exec(__student_code__, {'__builtins__': __builtins__})
except Exception:
    pass
_sys.stdout = _sys.__stdout__
_out = _cap.getvalue()
_results.append(("Program prints 12 as the highest number", "12" in _out, f"Output: {_out.strip()[:80]}"))
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch03",
    num: 3,
    title: "Options",
    topic: "If Statements",
    difficulty: "beginner",
    type: "coding",
    code: "LBOA-H5C6",
    description: `Complete the function <code>options(num)</code>. It takes a number as an argument and returns the matching subject:<br><br>
<code>1</code> → Computer Science<br>
<code>2</code> → Music<br>
<code>3</code> → Dance<br>
<code>4</code> → PE<br>
Any other value → <code>"Error"</code>`,
    starterCode: `def options(num):
    if num == 1:
        return "Computer Science"
    elif num == 2:
        return "Music"
`,
    testCode: `
_results = []
for _n, _expected in [(1,"Computer Science"),(2,"Music"),(3,"Dance"),(4,"PE"),(9,"Error")]:
    try:
        _r = options(_n)
        _results.append((f"options({_n})", _r == _expected, f"Expected '{_expected}', got '{_r}'"))
    except Exception as _e:
        _results.append((f"options({_n})", False, str(_e)))
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch04",
    num: 4,
    title: "Calling Options",
    topic: "If Statements",
    difficulty: "beginner",
    type: "coding",
    code: "LBOA-J7D8",
    description: `Write a program that calls your <code>options</code> function from Challenge 3. Ask the user to enter a number (1–4), then print a meaningful confirmation message like <em>"You chose Computer Science"</em>. If they enter an invalid number, print an appropriate error message.`,
    starterCode: `def options(num):
    if num == 1:
        return "Computer Science"
    elif num == 2:
        return "Music"
    elif num == 3:
        return "Dance"
    elif num == 4:
        return "PE"
    else:
        return "Error"

`,
    testCode: `
_results = []
try:
    for _n, _exp in [(1,"Computer Science"),(3,"Dance"),(4,"PE"),(9,"Error")]:
        _r = options(_n)
        _results.append((f"options({_n}) → '{_exp}'", _r == _exp, f"Expected '{_exp}', got '{_r}'"))
except NameError:
    _results.append(("options is defined", False, "Function not found — check spelling"))
except Exception as _e:
    _results.append(("options works", False, str(_e)))

for _inp, _expect in [("2", "Music"), ("4", "PE")]:
    _cap = _StringIO()
    _sys.stdout = _cap
    _bi.input = lambda p='': _inp
    try:
        exec(__student_code__, {'__builtins__': __builtins__})
    except Exception:
        pass
    _sys.stdout = _sys.__stdout__
    _out = _cap.getvalue()
    _results.append((f"input '{_inp}' → output contains '{_expect}'", _expect in _out, f"Output: {_out.strip()[:60]}"))
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch05",
    num: 5,
    title: "Tracing If Statements",
    topic: "If Statements",
    difficulty: "beginner",
    type: "mcq",
    code: "LBOA-K9E0",
    description: `Study the program below and answer the questions.<br><br>
<pre>def mystery_number(num):
    if num &lt; 5:
        print(8)
    elif num &lt; 3:
        print(8)
    elif num == 3:
        print(3)
    else:
        print(num)

num_in = int(input("Enter a number: "))
mystery_number(num_in)</pre>`,
    questions: [
      {
        q: "What is the output when num_in = 8?",
        options: ["8", "3", "5", "12"],
        answer: 0
      },
      {
        q: "When num_in = 3, what is the output?",
        options: ["3", "8", "5", "Nothing"],
        answer: 1
      },
      {
        q: "Lines 4–7 (elif num < 3 / elif num == 3) are REDUNDANT. Why?",
        options: [
          "Because num < 5 catches them first — those branches are never reached",
          "Because the else branch catches everything",
          "Because Python ignores elif after if",
          "Because num cannot equal 3"
        ],
        answer: 0
      }
    ]
  },
  {
    id: "ch06",
    num: 6,
    title: "Refining",
    topic: "If Statements",
    difficulty: "beginner",
    type: "coding",
    code: "LBOA-L1F3",
    description: `Re-write <code>mystery_number(num)</code> so that:<br><br>
• Output is <code>1</code> if num is <code>3</code><br>
• Output is <code>8</code> if num is less than 5 (but not 3)<br>
• Output is the number itself for all other cases<br><br>
<em>Hint: order your if conditions carefully.</em>`,
    starterCode: `def mystery_number(num):
    `,
    testCode: `
import sys as _sys
from io import StringIO as _StringIO
_results = []
for _n, _expected in [(3, "1"), (2, "8"), (4, "8"), (12, "12"), (5, "5")]:
    _cap = _StringIO()
    _sys.stdout = _cap
    mystery_number(_n)
    _sys.stdout = _sys.__stdout__
    _out = _cap.getvalue().strip()
    _results.append((f"mystery_number({_n})", _out == str(_expected), f"Expected '{_expected}', got '{_out}'"))
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch07",
    num: 7,
    title: "Parson's Puzzle",
    topic: "If Statements",
    difficulty: "beginner",
    type: "parsons",
    code: "LBOA-M2G5",
    description: `Re-arrange the code blocks into the correct order. The function <code>subtract(num1, num2)</code> should subtract the <em>smallest</em> number from the <em>largest</em> and return the result.`,
    blocks: [
      "def subtract(num1, num2):",
      "    if num1 > num2:",
      "        out = num1 - num2",
      "    else:",
      "        out = num2 - num1",
      "    return out"
    ],
    correctOrder: [0, 1, 2, 3, 4, 5]
  },
  {
    id: "ch08",
    num: 8,
    title: "Multiple Choice: Functions",
    topic: "If Statements",
    difficulty: "beginner",
    type: "mcq",
    code: "LBOA-N4H7",
    description: `Answer the multiple choice questions about functions and if statements.`,
    questions: [
      {
        q: "What is the difference between a function and a procedure?",
        options: [
          "A function has parameters, a procedure does not",
          "A function returns a value, a procedure does not",
          "A procedure returns a value, a function does not",
          "A procedure has parameters, a function does not"
        ],
        answer: 1
      },
      {
        q: "What does <code>if num1 > 9:</code> mean?",
        options: [
          "If num1 is greater than or equal to 9",
          "If 9 is greater than num1",
          "If num1 is greater than 9",
          "If num1 is less than 9"
        ],
        answer: 2
      },
      {
        q: "Values passed into parameters are known as:",
        options: ["Variables", "Functions", "Arguments", "Integers or Strings"],
        answer: 2
      },
      {
        q: "What keyword is used to define a function in Python?",
        options: ["function", "define", "sub", "def"],
        answer: 3
      }
    ]
  },
  {
    id: "ch09",
    num: 9,
    title: "Initials Only",
    topic: "String Slicing",
    difficulty: "beginner",
    type: "coding",
    code: "LBOA-P6J9",
    description: `Write a function <code>initials_only(first, middle, last)</code> that takes three name strings and returns only the first letter of each, e.g. <code>initials_only("Ada", "Byron", "Lovelace")</code> → <code>"ABL"</code>`,
    starterCode: `def initials_only(first, middle, last):
    initials =
    return initials
`,
    testCode: `
_results = []
for _args, _expected in [
    (("Ada","Byron","Lovelace"), "ABL"),
    (("connor","james","pearce"), "cjp"),
    (("X","Y","Z"), "XYZ"),
]:
    try:
        _r = initials_only(*_args)
        _results.append((f"initials_only{_args}", _r == _expected, f"Expected '{_expected}', got '{_r}'"))
    except Exception as _e:
        _results.append((f"initials_only{_args}", False, str(_e)))
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch10",
    num: 10,
    title: "Subject Shortener",
    topic: "String Slicing",
    difficulty: "beginner",
    type: "coding",
    code: "LBOA-Q8K1",
    description: `Write a function <code>subject_shortener(subject)</code> that returns the first 3 characters of the subject name, e.g. <code>"Maths"</code> → <code>"Mat"</code>, <code>"French"</code> → <code>"Fre"</code>`,
    starterCode: `def subject_shortener(subject):
    `,
    testCode: `
_results = []
for _s, _expected in [("Maths","Mat"),("French","Fre"),("Music","Mus"),("PE","PE")]:
    try:
        _r = subject_shortener(_s)
        _results.append((f"subject_shortener('{_s}')", _r == _expected, f"Expected '{_expected}', got '{_r}'"))
    except Exception as _e:
        _results.append((f"subject_shortener('{_s}')", False, str(_e)))
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch11",
    num: 11,
    title: "Volume of a Cuboid",
    topic: "String Slicing",
    difficulty: "beginner",
    type: "coding",
    code: "LBOA-R0L2",
    description: `Write a function <code>cuboid_volume(length, width, height)</code> that takes three numbers and returns the volume of the cuboid (length × width × height).`,
    starterCode: `def cuboid_volume(length, width, height):
    `,
    testCode: `
_results = []
for _args, _expected in [((3,4,5),60),((2,2,2),8),((10,1,1),10),((0,5,5),0)]:
    try:
        _r = cuboid_volume(*_args)
        _results.append((f"cuboid_volume{_args}", _r == _expected, f"Expected {_expected}, got {_r}"))
    except Exception as _e:
        _results.append((f"cuboid_volume{_args}", False, str(_e)))
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch12",
    num: 12,
    title: "Add",
    topic: "String Slicing",
    difficulty: "beginner",
    type: "coding",
    code: "LBOA-S3M4",
    description: `Write a function called <code>add(num1, num2)</code> that adds the two numbers and returns the sum.`,
    starterCode: `def add(num1, num2):
    `,
    testCode: `
_results = []
for _args, _expected in [((2,3),5),((0,0),0),((-1,1),0),((100,200),300)]:
    try:
        _r = add(*_args)
        _results.append((f"add{_args}", _r == _expected, f"Expected {_expected}, got {_r}"))
    except Exception as _e:
        _results.append((f"add{_args}", False, str(_e)))
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch13",
    num: 13,
    title: "Multiple Choice: Strings",
    topic: "String Slicing",
    difficulty: "beginner",
    type: "mcq",
    code: "LBOA-T5N6",
    description: `Answer the questions about string slicing and operators.`,
    questions: [
      {
        q: `What is the output of:<br><code>name = "Shenaz"<br>print(name[3:5])</code>`,
        options: ["345", "en", "na", "naz"],
        answer: 2
      },
      {
        q: `What is the output of:<br><code>subject = "Computer Science"<br>print(subject[1])</code>`,
        options: ["C", "o", "1", "Co"],
        answer: 1
      },
      {
        q: "What is the result of <code>2**3</code>?",
        options: ["6", "23", "2**3", "8"],
        answer: 3
      },
      {
        q: "What is a constant?",
        options: [
          "A variable which stays the same whilst the program is running",
          "A value which cannot change whilst the program is running",
          "A numerical value",
          "Part of a formula which is defined"
        ],
        answer: 1
      }
    ]
  },
  {
    id: "ch14",
    num: 14,
    title: "Odd or Even Function",
    topic: "Loops",
    difficulty: "intermediate",
    type: "coding",
    code: "LBOA-U7P8",
    description: `Re-write <code>is_odd(number_in)</code> as a <strong>function</strong> (not a procedure) so it <em>returns</em> a string instead of printing. All inputs and outputs should happen outside the function. Your program should keep asking for numbers until <code>"STOP"</code> is entered.`,
    starterCode: `def is_odd(number_in):
    if int(number_in) % 2 == 0:
        return
    else:
        return

`,
    testCode: `
_results = []
for _n, _expected in [("4","even"),("7","odd"),("0","even"),("13","odd")]:
    try:
        _r = is_odd(_n)
        _ok = "even" in _r.lower() if _expected == "even" else "odd" in _r.lower()
        _results.append((f"is_odd('{_n}')", _ok, f"Expected contains '{_expected}', got '{_r}'"))
    except Exception as _e:
        _results.append((f"is_odd('{_n}')", False, str(_e)))
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch15",
    num: 15,
    title: "Is X a Multiple of Y?",
    topic: "Loops",
    difficulty: "intermediate",
    type: "coding",
    code: "LBOA-V9Q0",
    description: `Write a function <code>is_multiple(x_in, y_in)</code> that checks if <code>x_in</code> is a multiple of <code>y_in</code> using the modulo operator and prints a meaningful message.`,
    starterCode: `def is_multiple(x_in, y_in):
    if x_in % y_in == 0:
        print(x_in, "is a multiple of", y_in)
    else:
        print(x_in, "is not a multiple of", y_in)
`,
    testCode: `
import sys as _sys
from io import StringIO as _StringIO
_results = []
for _x, _y, _should_be_multiple in [(18,9,True),(20,7,False),(10,5,True),(7,3,False)]:
    _cap = _StringIO()
    _sys.stdout = _cap
    is_multiple(_x, _y)
    _sys.stdout = _sys.__stdout__
    _out = _cap.getvalue().lower()
    _ok = ("multiple" in _out and ("not" not in _out)) if _should_be_multiple else ("not" in _out and "multiple" in _out)
    _results.append((f"is_multiple({_x},{_y})", _ok, f"Output: {_out.strip()}"))
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch16",
    num: 16,
    title: "Tracing with DIV",
    topic: "Loops",
    difficulty: "intermediate",
    type: "mcq",
    code: "LBOA-W1R3",
    description: `The <code>//</code> operator is integer division (DIV). Study this program:<br><br>
<pre>def div(num1_in, num2_in):
    out = (num1_in + num2_in) // 10
    return out</pre>`,
    questions: [
      {
        q: "What is the output when num1=1, num2=8?",
        options: ["0", "1", "9", "0.9"],
        answer: 0
      },
      {
        q: "What is 21 DIV 7?",
        options: ["3", "2", "0", "14"],
        answer: 0
      },
      {
        q: "What is 9 DIV 4?",
        options: ["2", "1", "3", "2.25"],
        answer: 0
      },
      {
        q: "What is 8 DIV 3?",
        options: ["2", "3", "1", "2.6"],
        answer: 0
      }
    ]
  },
  {
    id: "ch17",
    num: 17,
    title: "Acronym Generator",
    topic: "Loops",
    difficulty: "intermediate",
    type: "coding",
    code: "LBOA-X2S5",
    description: `Complete the acronym generator. The program should keep asking the user to enter words until <code>"XXX"</code> is entered. When the sentinel value is entered, print the acronym formed from the first letter of each word entered.`,
    starterCode: `sentinel = "XXX"
word = ""
acronym = ""
while word != sentinel:
    word = input('Enter a word or XXX to finish: ')
    if word != sentinel:
        acronym = acronym + word[0]

print(acronym)
`,
    testCode: `
_results = []
for _words, _expected in [
    (["British","Broadcasting","Corporation","XXX"], "BBC"),
    (["Graphics","Interchange","Format","XXX"], "GIF"),
]:
    _cap = _StringIO()
    _sys.stdout = _cap
    _it = iter(_words)
    _bi.input = lambda p='': next(_it, 'XXX')
    try:
        exec(__student_code__, {'__builtins__': __builtins__})
    except Exception:
        pass
    _sys.stdout = _sys.__stdout__
    _out = _cap.getvalue().strip()
    _results.append((f"{_words[:-1]} → '{_expected}'", _expected in _out, f"Output: {_out}"))
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch18",
    num: 18,
    title: "Acronym Generator 2.0",
    topic: "Loops",
    difficulty: "intermediate",
    type: "coding",
    code: "LBOA-Y4T7",
    description: `Write a more efficient version that takes all words as one input string (e.g. <code>"British Broadcasting Corporation"</code>), splits it into a list, then generates the acronym by taking the first character of each word.`,
    starterCode: `acronym = ""
words = input("Enter words to be turned into an acronym: ")
words_list = words.split()
for word in words_list:
    acronym = acronym +
print(acronym)
`,
    testCode: `
_results = []
for _inp, _expected in [
    ("British Broadcasting Corporation", "BBC"),
    ("Graphics Interchange Format", "GIF"),
    ("As Soon As Possible", "ASAP"),
]:
    _cap = _StringIO()
    _sys.stdout = _cap
    _bi.input = lambda p='': _inp
    try:
        exec(__student_code__, {'__builtins__': __builtins__})
    except Exception:
        pass
    _sys.stdout = _sys.__stdout__
    _out = _cap.getvalue().strip()
    _results.append((f"'{_inp}' → '{_expected}'", _expected in _out, f"Output: {_out}"))
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch19",
    num: 19,
    title: "Roll a Double to Start",
    topic: "Loops",
    difficulty: "intermediate",
    type: "coding",
    code: "LBOA-Z6U9",
    description: `Simulate two dice being rolled. Keep rolling until both dice show the same value (a double). Output the values of each roll, and when a double is rolled print <code>"Game loading"</code>.`,
    starterCode: `import random

dice1 = 1
dice2 = 2

while dice1 != dice2:
    dice1 = random.randint(1, 6)
    dice2 = random.randint(1, 6)
    print("Dice 1:", dice1)
    print("Dice 2:", dice2)
    if dice1 == dice2:
        print("Game loading")
    else:
        input("Press Enter to roll again")
`,
    testCode: `
import random as _random
_orig_randint = _random.randint
_results = []

# Roll sequence: non-double, non-double, then a double on third roll
_roll_seq = iter([1, 2, 3, 4, 6, 6])
_random.randint = lambda a, b: next(_roll_seq, 6)
_bi.input = lambda p='': ''

_cap = _StringIO()
_sys.stdout = _cap
try:
    exec(__student_code__, {'__builtins__': __builtins__})
except Exception:
    pass
_sys.stdout = _sys.__stdout__
_random.randint = _orig_randint
_out = _cap.getvalue()

_results = [
    ("'Game loading' printed when double rolled", "Game loading" in _out or "game loading" in _out.lower(), f"Output:\\n{_out[:200]}"),
    ("Dice values printed each round", any(str(n) in _out for n in range(1, 7)), f"Output:\\n{_out[:200]}"),
]
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch20",
    num: 20,
    title: "Keeping Score Over Three Rounds",
    topic: "Loops",
    difficulty: "intermediate",
    type: "coding",
    code: "LBOA-A8V1",
    description: `Simulate two dice being rolled <strong>three times</strong> using a <code>for</code> loop. Output the total for each round and the final total score after 3 rounds.`,
    starterCode: `import random

score = 0

for count in range(3):
    dice1 = random.randint(1, 6)
    dice2 = random.randint(1, 6)

`,
    testCode: `
import random as _random
_orig_randint = _random.randint

# Rolls: round1=3+4=7, round2=1+2=3, round3=5+6=11 → total 21
_roll_seq = iter([3, 4, 1, 2, 5, 6])
_random.randint = lambda a, b: next(_roll_seq, 1)

_cap = _StringIO()
_sys.stdout = _cap
try:
    exec(__student_code__, {'__builtins__': __builtins__})
except Exception:
    pass
_sys.stdout = _sys.__stdout__
_random.randint = _orig_randint
_out = _cap.getvalue()

_results = [
    ("3 rounds of output", _out.count("\\n") >= 3, f"Output:\\n{_out}"),
    ("Total score 21 shown", "21" in _out, f"Output:\\n{_out}"),
]
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch21",
    num: 21,
    title: "Highest Number in a List",
    topic: "Lists",
    difficulty: "intermediate",
    type: "coding",
    code: "LBOA-B0W2",
    description: `Write a program that iterates through the list below and outputs the highest number using a <code>for</code> loop and an if statement. Do <strong>not</strong> use Python's built-in <code>max()</code> function.<br><br>
<code>numbers = [9, 8, 72, 22, 21, 81, 2, 1]</code>`,
    starterCode: `numbers = [9, 8, 72, 22, 21, 81, 2, 1]
highest = numbers[0]

for count in range(len(numbers)):
    `,
    testCode: `
_cap = _StringIO()
_sys.stdout = _cap
try:
    exec(__student_code__, {'__builtins__': __builtins__})
except Exception:
    pass
_sys.stdout = _sys.__stdout__
_out = _cap.getvalue()
_results = [("Output contains 81 (highest in the list)", "81" in _out, f"Output: {_out.strip()}")]
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch22",
    num: 22,
    title: "Highest Number as a Function",
    topic: "Lists",
    difficulty: "intermediate",
    type: "coding",
    code: "LBOA-C3X4",
    description: `Re-write your solution from Challenge 21 as a function <code>highest_num(numbers_in)</code> that takes a list as a parameter and <strong>returns</strong> the highest number.`,
    starterCode: `def highest_num(numbers_in):
    highest = numbers_in[0]

    for count in range(len(numbers_in)):

    return highest

numbers = [9, 8, 72, 22, 21, 81, 2, 1]
`,
    testCode: `
_results = []
for _lst, _expected in [
    ([9,8,72,22,21,81,2,1], 81),
    ([1,2,3], 3),
    ([-5,-1,-10], -1),
    ([42], 42),
]:
    try:
        _r = highest_num(_lst)
        _results.append((f"highest_num({_lst})", _r == _expected, f"Expected {_expected}, got {_r}"))
    except Exception as _e:
        _results.append((f"highest_num({_lst})", False, str(_e)))
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch23",
    num: 23,
    title: "Weak Password?",
    topic: "Lists",
    difficulty: "intermediate",
    type: "coding",
    code: "LBOA-D5Y6",
    description: `Write a program that asks for a password and performs a linear search through this list of obvious passwords:<br><br>
<code>obvious = ["password", "qwerty", "hello123", "letmein", "123456"]</code><br><br>
If the password is found in the list, print a message saying it is weak and susceptible to brute-force attacks.`,
    starterCode: `obvious = ["password", "qwerty", "hello123", "letmein", "123456"]

password = input("Please enter a password: ")

for count in range(len(obvious)):
    `,
    testCode: `
_results = []
for _pwd, _expect_weak in [("password", True), ("123456", True), ("MyS3cur3Pass!", False)]:
    _cap = _StringIO()
    _sys.stdout = _cap
    _bi.input = lambda p='': _pwd
    try:
        exec(__student_code__, {'__builtins__': __builtins__})
    except Exception:
        pass
    _sys.stdout = _sys.__stdout__
    _out = _cap.getvalue().lower()
    _ok = ("weak" in _out or "common" in _out or "brute" in _out) if _expect_weak else ("weak" not in _out and "common" not in _out)
    _results.append((f"'{_pwd}' → {'flagged as weak' if _expect_weak else 'not flagged'}", _ok, f"Output: {_out.strip()[:60]}"))
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch24",
    num: 24,
    title: "Weak Password Continued",
    topic: "Lists",
    difficulty: "intermediate",
    type: "coding",
    code: "LBOA-E7Z8",
    description: `Extend your password checker with validation checks:<br><br>
• <strong>Length check</strong>: warn if fewer than 8 characters<br>
• <strong>Number check</strong>: suggest adding numbers if none present<br>
• <strong>Case check</strong>: suggest mixed case if only upper or only lower<br>
• <strong>Brute-force check</strong>: warn if in the obvious list<br><br>
Print a "strong password" message if all checks pass.`,
    starterCode: `obvious = ["password", "qwerty", "hello123", "letmein", "123456"]
password = input("Please enter a password: ")

# Check obvious list
for count in range(len(obvious)):
    if password == obvious[count]:
        print("Weak: common password")

# Length check
if len(password) < 8:
    print("Weak: too short (minimum 8 characters)")

`,
    testCode: `
_results = []
for _pwd, _check_words in [
    ("ab",          ["short", "minimum", "length", "weak"]),
    ("ALLCAPS123",  ["lower", "case", "mix", "upper"]),
    ("nouppercase1",["upper", "case", "mix"]),
    ("MyS3cur3Pass!",["strong", "secure", "good", "meets", "requirement", "minimum"]),
]:
    _cap = _StringIO()
    _sys.stdout = _cap
    _bi.input = lambda p='': _pwd
    try:
        exec(__student_code__, {'__builtins__': __builtins__})
    except Exception:
        pass
    _sys.stdout = _sys.__stdout__
    _out = _cap.getvalue().lower()
    _ok = any(w in _out for w in _check_words)
    _results.append((f"'{_pwd}' produces relevant message", _ok, f"Output: {_out.strip()[:80]}"))
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch25",
    num: 25,
    title: "Penalty Shootout",
    topic: "Loops",
    difficulty: "intermediate",
    type: "coding",
    code: "LBOA-F9A0",
    description: `Simulate a penalty shootout over 5 rounds. The computer (goalkeeper) randomly dives left, centre, or right. The user types their shot direction. If the keeper dives the same way, it's saved; otherwise it's a goal. After 5 penalties, announce the winner.`,
    starterCode: `import random

keeper_moves = ["left", "centre", "right"]
keeper_score = 0
player_score = 0

for count in range(5):
    dive = random.choice(keeper_moves)
    player = input("Shoot left, centre or right: ").lower()
    print("Keeper went to the", dive)
    `,
    testCode: `
import random as _random
_orig_choice = _random.choice

# Keeper: left,right,centre,left,right — player always shoots "centre"
# so round 3 (keeper=centre) is saved; rest are goals → player 4, keeper 1
_dive_seq = iter(["left","right","centre","left","right"])
_random.choice = lambda lst: next(_dive_seq, "centre")
_bi.input = lambda p='': "centre"

_cap = _StringIO()
_sys.stdout = _cap
try:
    exec(__student_code__, {'__builtins__': __builtins__})
except Exception:
    pass
_sys.stdout = _sys.__stdout__
_random.choice = _orig_choice
_out = _cap.getvalue()

_results = [
    ("5 rounds played", sum(1 for kw in ["went","dive","shot","round"] if kw in _out.lower()) > 0 and _out.count("\\n") >= 5, f"Output:\\n{_out[:300]}"),
    ("Winner announced", "win" in _out.lower() or "score" in _out.lower(), f"Output:\\n{_out[:300]}"),
]
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch26",
    num: 26,
    title: "Tracing Loops",
    topic: "Loops",
    difficulty: "intermediate",
    type: "mcq",
    code: "LBOA-G1B3",
    description: `Study this program:<br><br>
<pre>y = 0
for x in range(0, 4):
    if x % 2 == 0:
        y = x + 2
        print(y)</pre>`,
    questions: [
      {
        q: "What are the values of x and y when x=0?",
        options: ["x=0, y=0", "x=0, y=2", "x=0, y=4", "x=0, y=1"],
        answer: 1
      },
      {
        q: "What are the values of x and y when x=2?",
        options: ["x=2, y=2", "x=2, y=4", "x=2, y=6", "x=2, y=0"],
        answer: 1
      },
      {
        q: "How do you rewrite the for loop so x goes from 1 to 10?",
        options: [
          "for x in range(1, 10):",
          "for x in range(1, 11):",
          "for x in range(0, 10):",
          "for x in range(1, 10, 1):"
        ],
        answer: 1
      }
    ]
  },
  {
    id: "ch27",
    num: 27,
    title: "Multiple Choice: Loops",
    topic: "Loops",
    difficulty: "intermediate",
    type: "mcq",
    code: "LBOA-H2C5",
    description: `Based on this code:<br><code>import random<br>for count in range(0, 5):<br>&nbsp;&nbsp;num1 = random.randint(1, 10)</code>`,
    questions: [
      {
        q: "What are the highest and lowest possible values of num1?",
        options: ["10 and 1", "10 and 0", "9 and 1", "9 and 0"],
        answer: 0
      },
      {
        q: "What are the first and last values of count if outputted?",
        options: ["0 and 5", "0 and 4", "1 and 5", "1 and 4"],
        answer: 1
      },
      {
        q: "How many times does the for loop repeat?",
        options: ["5 times", "0 times", "4 times", "6 times"],
        answer: 0
      }
    ]
  },
  {
    id: "ch28",
    num: 28,
    title: "Average of a List",
    topic: "Lists",
    difficulty: "intermediate",
    type: "coding",
    code: "LBOA-J4D7",
    description: `Write a function <code>mean_of_list(numbers_list_in)</code> that takes a list of numbers as an argument and returns the mean average. Then write a <code>main()</code> function that contains your list and calls the function.`,
    starterCode: `def mean_of_list(numbers_list_in):
    total = 0
    for count in range(len(numbers_list_in)):

    average =
    return average

def main():
    numbers_list = [9, 8, 3, 5, 4, 1, 8, 4, 1]
    mean = mean_of_list(numbers_list)
    print("The mean average is", mean)

main()
`,
    testCode: `
_results = []
for _lst, _expected in [
    ([9,8,3,5,4,1,8,4,1], 43/9),
    ([10,20,30], 20.0),
    ([5], 5.0),
]:
    try:
        _r = mean_of_list(_lst)
        _ok = abs(_r - _expected) < 0.001
        _results.append((f"mean_of_list({_lst})", _ok, f"Expected {_expected:.4f}, got {_r}"))
    except Exception as _e:
        _results.append((f"mean_of_list({_lst})", False, str(_e)))
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch29",
    num: 29,
    title: "Counting Vowels",
    topic: "Lists",
    difficulty: "intermediate",
    type: "coding",
    code: "LBOA-K6E9",
    description: `Write a function <code>vowel_counter(sentence)</code> that iterates through the sentence and counts how many times each vowel (A, E, I, O, U) appears. Output the count for each vowel.`,
    starterCode: `def vowel_counter(sentence):
    A = 0
    E = 0
    I = 0
    O = 0
    U = 0
    for count in range(len(sentence)):
        if sentence[count].upper() == "A":
            A = A + 1

    print("A:", A)
    print("E:", E)

sentence = "Hello World"
vowel_counter(sentence)
`,
    testCode: `
import sys as _sys
from io import StringIO as _StringIO
_cap = _StringIO()
_sys.stdout = _cap
vowel_counter("aeiou AEIOU")
_sys.stdout = _sys.__stdout__
_out = _cap.getvalue()
_results = [
    ("Counts 2 A's", "A: 2" in _out or "A's: 2" in _out or "A : 2" in _out, f"Output: {_out}"),
    ("Counts 2 E's", "E: 2" in _out or "E's: 2" in _out or "E : 2" in _out, f"Output: {_out}"),
    ("Counts 2 O's", "O: 2" in _out or "O's: 2" in _out or "O : 2" in _out, f"Output: {_out}"),
]
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch30",
    num: 30,
    title: "Grade Boundaries",
    topic: "Lists",
    difficulty: "intermediate",
    type: "coding",
    code: "LBOA-L8F1",
    description: `Write a function that takes a desired grade as an argument and searches the 2D list below to return the number of marks required.<br><br>
<code>grades = [["A*","90"],["A","83"],["B","72"],["C","60"],["D","49"],["E","30"]]</code>`,
    starterCode: `def marks(grade_in):
    grades = [["A*","90"],["A","83"],["B","72"],["C","60"],["D","49"],["E","30"]]
    for count in range(len(grades)):
        if grades[count][0] == grade_in:
            return

grade = input("What grade do you wish to achieve? ")
mark_req = marks(grade)
print("You need", mark_req, "marks for grade", grade)
`,
    testCode: `
_results = []
for _g, _expected in [("A*","90"),("B","72"),("E","30")]:
    try:
        _r = marks(_g)
        _results.append((f"marks('{_g}')", str(_r) == _expected, f"Expected '{_expected}', got '{_r}'"))
    except Exception as _e:
        _results.append((f"marks('{_g}')", False, str(_e)))
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch31",
    num: 31,
    title: "Counting Vowels with 2D List",
    topic: "2D Lists",
    difficulty: "intermediate",
    type: "coding",
    code: "LBOA-M0G2",
    description: `Re-write <code>vowel_counter</code> using a 2D list to track each vowel and its count. Each sub-list should contain the vowel letter and its count, e.g. <code>[["A", 0], ["E", 0], ...]</code>`,
    starterCode: `def vowel_counter(sentence):
    vowel_list = [["A", 0], ["E", 0], ["I", 0], ["O", 0], ["U", 0]]
    for count in range(len(sentence)):
        for letter in range(len(vowel_list)):
            if sentence[count].upper() == vowel_list[letter][0]:
                vowel_list[letter][1] =
    for v in range(len(vowel_list)):
        print("Number of", vowel_list[v][0], ":", vowel_list[v][1])

vowel_counter("Hello World")
`,
    testCode: `
import sys as _sys
from io import StringIO as _StringIO
_cap = _StringIO()
_sys.stdout = _cap
vowel_counter("aeiou AEIOU")
_sys.stdout = _sys.__stdout__
_out = _cap.getvalue()
_results = [
    ("Uses 2D list structure", True, "Check passed if code runs"),
    ("A count is 2", "2" in _out, f"Output: {_out}"),
    ("Prints 5 vowel lines", len([l for l in _out.strip().split('\\n') if l.strip()]) >= 5, f"Output lines: {_out}"),
]
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch32",
    num: 32,
    title: "Total for Each Exam",
    topic: "2D Lists",
    difficulty: "intermediate",
    type: "coding",
    code: "LBOA-N3H4",
    description: `Using the 2D list below, write a program that outputs the total for each exam with a meaningful message. The outer loop should iterate over exams (columns 1–3), the inner loop over students.<br><br>
<pre>cs_scores = [["Karman","45","60","72"],
             ["Daniel","55","65","70"],
             ["Parker","71","78","78"],
             ["Jessica","68","79","80"],
             ["Edie","98","85","91"]]</pre>`,
    starterCode: `cs_scores = [["Karman","45","60","72"],
             ["Daniel","55","65","70"],
             ["Parker","71","78","78"],
             ["Jessica","68","79","80"],
             ["Edie","98","85","91"]]

total = 0
for exam in range(    ):
    for student in range(len(cs_scores)):
        total = total + int(cs_scores[student][exam])
    print("Total for exam", exam, "=", total)
    total = 0
`,
    testCode: `
_cap = _StringIO()
_sys.stdout = _cap
try:
    exec(__student_code__, {'__builtins__': __builtins__})
except Exception:
    pass
_sys.stdout = _sys.__stdout__
_out = _cap.getvalue()
# exam1: 45+55+71+68+98=337  exam2: 60+65+78+79+85=367  exam3: 72+70+78+80+91=391
_results = [
    ("Exam 1 total (337) in output", "337" in _out, f"Output: {_out}"),
    ("Exam 2 total (367) in output", "367" in _out, f"Output: {_out}"),
    ("Exam 3 total (391) in output", "391" in _out, f"Output: {_out}"),
]
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch33",
    num: 33,
    title: "Average for Each Student",
    topic: "2D Lists",
    difficulty: "intermediate",
    type: "coding",
    code: "LBOA-P5J6",
    description: `Using the 2D list, write a program that outputs the mean average for each student across their 3 exam scores.<br><br>
<pre>cs_scores = [["Theo","45","60","72"],["Angharad","55","65","70"],
["Sameer","71","78","78"],["Adrian","68","79","80"],["Ayana","98","85","91"]]</pre>`,
    starterCode: `cs_scores = [["Theo","45","60","72"],["Angharad","55","65","70"],
             ["Sameer","71","78","78"],["Adrian","68","79","80"],["Ayana","98","85","91"]]

total = 0
for student in range(len(cs_scores)):
    for exam in range(1, 4):
        total = total + int(cs_scores[student][exam])
    mean =
    print(cs_scores[student][0], "average:", mean)
    total = 0
`,
    testCode: `
_cap = _StringIO()
_sys.stdout = _cap
try:
    exec(__student_code__, {'__builtins__': __builtins__})
except Exception:
    pass
_sys.stdout = _sys.__stdout__
_out = _cap.getvalue()
# Theo: (45+60+72)/3=59.0   Ayana: (98+85+91)/3≈91.33
_results = [
    ("Theo's name in output", "Theo" in _out, f"Output: {_out}"),
    ("Ayana's name in output", "Ayana" in _out, f"Output: {_out}"),
    ("Theo's average (59.0) in output", "59" in _out, f"Output: {_out}"),
    ("5 student lines printed", len([l for l in _out.strip().split('\\n') if l.strip()]) >= 5, f"Output: {_out}"),
]
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch34",
    num: 34,
    title: "Average per Student as a Function",
    topic: "2D Lists",
    difficulty: "advanced",
    type: "coding",
    code: "LBOA-Q7K8",
    description: `Re-write Challenge 33 as a function <code>mean_student(scores_in)</code> that takes the 2D list as a parameter and outputs the mean average for each student.`,
    starterCode: `def mean_student(scores_in):
    total = 0
    for student in range(len(scores_in)):
        for exam in range(1, 4):
            total = total + int(scores_in[student][exam])
        mean = total / 3
        print(scores_in[student][0], "average:", mean)
        total = 0

cs_scores = [["Theo","45","60","72"],["Angharad","55","65","70"],
             ["Sameer","71","78","78"],["Adrian","68","79","80"],["Ayana","98","85","91"]]
`,
    testCode: `
import sys as _sys
from io import StringIO as _StringIO
_cap = _StringIO()
_sys.stdout = _cap
_test_data = [["Alice","60","70","80"],["Bob","30","40","50"]]
mean_student(_test_data)
_sys.stdout = _sys.__stdout__
_out = _cap.getvalue()
_results = [
    ("Alice average ≈ 70.0", "70" in _out and "Alice" in _out, f"Output: {_out}"),
    ("Bob average ≈ 40.0", "40" in _out and "Bob" in _out, f"Output: {_out}"),
]
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch35",
    num: 35,
    title: "Tracing 2D List Loops",
    topic: "2D Lists",
    difficulty: "intermediate",
    type: "mcq",
    code: "LBOA-R9L0",
    description: `Study this program:<br><br>
<pre>animals = [["Charlie", "Dog", 8],
           ["Dolly", "Sheep", 3],
           ["Wanda", "Goldfish", 4]]

for x in range(len(animals)):
    for y in range(0, 3):
        print(animals[x][y])</pre>`,
    questions: [
      {
        q: "What is output when x=0, y=0?",
        options: ["Dog", "Charlie", "8", "0"],
        answer: 1
      },
      {
        q: "What does print(animals[2][0]) output?",
        options: ["3, 0", "4", "Wanda", "Dolly"],
        answer: 2
      },
      {
        q: "What is the name of the data structure on lines 1–3?",
        options: ["List", "Array", "2D List", "Dictionary"],
        answer: 2
      }
    ]
  },
  {
    id: "ch36",
    num: 36,
    title: "Multiple Choice: 2D Lists",
    topic: "2D Lists",
    difficulty: "intermediate",
    type: "mcq",
    code: "LBOA-S1M3",
    description: `Based on this code:<br><pre>for x in range(0, 3):\n  for y in range(2, 5):\n    z = x + y\n    print(z)</pre>`,
    questions: [
      {
        q: "What is output when the program above is run?",
        options: [
          "0,1,2,2,3,4",
          "2,3,4,3,4,5,4,5,6",
          "0,1,2,3,2,3,4,5",
          "2,3,4,5,6,3,4,5,6,7,4,5,6,7,8"
        ],
        answer: 1
      },
      {
        q: "What would print(animals[3][3]) output for a 3-element list?",
        options: ["3, 3", "Logic error", "Syntax error", "Index error: list index out of range"],
        answer: 3
      }
    ]
  },
  {
    id: "ch37",
    num: 37,
    title: "Unique Username Generator",
    topic: "File I/O",
    difficulty: "advanced",
    type: "coding",
    code: "LBOA-T2N5",
    description: `Write a function <code>generate_username(firstname, lastname)</code> that creates a username as <code>lastname + firstname[0]</code> (e.g. "LauW"). Check if it already exists in the list below and if so, append <code>"#"</code> to make it unique. Return the final username.<br><br>
<em>Note: instead of a file, use the list provided directly:</em><br>
<code>existing = [["LauW","pwd1"],["VegaJ","pwd2"],["LassamiL","pwd3"]]</code>`,
    starterCode: `def generate_username(firstname, lastname):
    username = lastname + firstname[0]
    existing = [["LauW","pwd1"],["VegaJ","pwd2"],["LassamiL","pwd3"]]
    for count in range(len(existing)):
        if existing[count][0] == username:
            username = username + "#"
    return username

`,
    testCode: `
_results = []
for _f, _l, _expected in [
    ("Winnie","Lau","LauW#"),
    ("Zara","Jones","JonesZ"),
    ("Jaime","Vega","VegaJ#"),
]:
    try:
        _r = generate_username(_f, _l)
        _results.append((f"generate_username('{_f}','{_l}')", _r == _expected, f"Expected '{_expected}', got '{_r}'"))
    except Exception as _e:
        _results.append((f"generate_username('{_f}','{_l}')", False, str(_e)))
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch38",
    num: 38,
    title: "Calling the Username Generator",
    topic: "File I/O",
    difficulty: "advanced",
    type: "coding",
    code: "LBOA-U4P7",
    description: `Write a complete program that asks for a teacher's first name and surname, calls <code>generate_username</code>, and prints the generated username with a meaningful message.`,
    starterCode: `def generate_username(firstname, lastname):
    username = lastname + firstname[0]
    existing = [["LauW","pwd1"],["VegaJ","pwd2"],["LassamiL","pwd3"]]
    for count in range(len(existing)):
        if existing[count][0] == username:
            username = username + "#"
    return username

first = input("Enter first name: ")
last = input("Enter surname: ")
`,
    testCode: `
import sys as _sys, builtins as _bi
from io import StringIO as _StringIO
_cap = _StringIO()
_sys.stdout = _cap
_bi.input = lambda p="": "Zara" if "first" in p.lower() else "Jones"
first = input("Enter first name: ")
last = input("Enter surname: ")
username_out = generate_username(first, last)
print("Your username is", username_out)
_sys.stdout = _sys.__stdout__
_out = _cap.getvalue()
_results = [
    ("Username JonesZ printed", "JonesZ" in _out, f"Output: {_out.strip()}"),
]
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch39",
    num: 39,
    title: "Register an Account",
    topic: "File I/O",
    difficulty: "advanced",
    type: "coding",
    code: "LBOA-V6Q9",
    description: `Write a function <code>new_user(username_in, password_in, users)</code> that takes a 2D list of users, appends a new <code>[username, password]</code> sub-list, and returns the updated list.<br><br>
<em>(In this browser version we skip file I/O — pass and return the list directly.)</em>`,
    starterCode: `def new_user(username_in, password_in, users):
    new_entry = []
    new_entry.append(username_in)
    new_entry.append(password_in)
    users.append(new_entry)
    return users

users = [["lauw","insecurePwd"],["vegaj","iLoveWebDesign"]]
`,
    testCode: `
_results = []
_users = [["lauw","pwd1"],["vegaj","pwd2"]]
try:
    _updated = new_user("smithj", "newPwd", _users)
    _results.append(("Returns list with new user", len(_updated) == 3, f"Length: {len(_updated)}"))
    _results.append(("New user's username correct", _updated[2][0] == "smithj", f"Got: {_updated[2]}"))
    _results.append(("New user's password correct", _updated[2][1] == "newPwd", f"Got: {_updated[2]}"))
except Exception as _e:
    _results.append(("new_user()", False, str(_e)))
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch40",
    num: 40,
    title: "Multiple Choice: File I/O",
    topic: "File I/O",
    difficulty: "advanced",
    type: "mcq",
    code: "LBOA-W8R1",
    description: `Answer the multiple choice questions about file operations in Python.`,
    questions: [
      {
        q: "To append to the end of a file we should use?",
        options: [
          'file.append("some text")',
          'file = open("txtfile.txt", "a"); file.write("some text")',
          'file = open("txtfile.txt", "append"); file.append("some text")',
          '"some text".append()'
        ],
        answer: 1
      },
      {
        q: 'Opening a file in "w" mode will usually…',
        options: [
          "Allow you to write to a file, wiping the original data",
          "Allow you to write to the end of a file",
          "Allow you to write to the beginning, keeping existing data",
          "Allow you to read or write from the file"
        ],
        answer: 0
      },
      {
        q: "After file operations, we should always:",
        options: ["Close the file", "Save with a new file name", "Loop back to the beginning", "Open the file"],
        answer: 0
      }
    ]
  },
  {
    id: "ch41",
    num: 41,
    title: "Parson's Puzzle: Email Search",
    topic: "File I/O",
    difficulty: "advanced",
    type: "parsons",
    code: "LBOA-X0S2",
    description: `Re-arrange the code blocks so the function searches a 2D list for an email address. It should return <code>True</code> if found, <code>False</code> otherwise.`,
    blocks: [
      "def search_email(email, users):",
      "    found = False",
      "    for count in range(len(users)):",
      "        if email == users[count][0]:",
      "            found = True",
      "            return found",
      "    return found"
    ],
    correctOrder: [0, 1, 2, 3, 4, 5, 6]
  },
  {
    id: "ch42",
    num: 42,
    title: "Hexadecimal to Denary",
    topic: "Binary & Hex",
    difficulty: "advanced",
    type: "coding",
    code: "LBOA-Y3T4",
    description: `Write a function <code>hex_to_denary(hex_in)</code> that takes a single hexadecimal digit (0–9 or A–F) and returns the denary equivalent. E.g. <code>hex_to_denary("A")</code> → <code>10</code>, <code>hex_to_denary("5")</code> → <code>5</code>`,
    starterCode: `def hex_to_denary(hex_in):
    hex_A_to_F = [["A","10"],["B","11"],["C","12"],["D","13"],["E","14"],["F","15"]]
    for count in range(len(hex_A_to_F)):
        if hex_in == hex_A_to_F[count][0]:
            return int(hex_A_to_F[count][1])
    return int(hex_in)

`,
    testCode: `
_results = []
for _h, _expected in [("A",10),("F",15),("0",0),("9",9),("C",12)]:
    try:
        _r = hex_to_denary(_h)
        _results.append((f"hex_to_denary('{_h}')", _r == _expected, f"Expected {_expected}, got {_r}"))
    except Exception as _e:
        _results.append((f"hex_to_denary('{_h}')", False, str(_e)))
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch43",
    num: 43,
    title: "A Computer Science Quiz",
    topic: "Binary & Hex",
    difficulty: "advanced",
    type: "mcq",
    code: "LBOA-Z5U6",
    description: `Study this quiz program and answer the questions.<br><br>
<pre>def correct(score_in):
    print("Well Done!")
    score_in = score_in + 1
    return score_in

def quiz():
    score = 0
    # ... Q1 printed here ...
    Q1 = input("Choose a letter").upper()
    if Q1 == "______":
        score = correct(score)
        print(score)</pre>`,
    questions: [
      {
        q: "Why do computers need primary storage? Which option is correct? (A) Fast access RAM/ROM for CPU (B) Long term storage (C) Virtual memory (D) Backup storage",
        options: ["A", "B", "C", "D"],
        answer: 0
      },
      {
        q: "When the program above is run, nothing happens. Why?",
        options: [
          "The quiz() function is never called",
          "There is a syntax error",
          "score is not initialised",
          "print(score) is wrong"
        ],
        answer: 0
      },
      {
        q: "What is the purpose of score = 0 inside quiz()?",
        options: [
          "Declares a global variable",
          "Initialises the score variable to 0 so it can be incremented later",
          "Resets the score each question",
          "Prevents the loop from running"
        ],
        answer: 1
      }
    ]
  },
  {
    id: "ch44",
    num: 44,
    title: "Binary Search",
    topic: "Binary & Hex",
    difficulty: "advanced",
    type: "coding",
    code: "LBOA-A7V8",
    description: `Fix and complete the binary search function below. It should return the index of <code>target</code> in the sorted list <code>nums</code>, or <code>-1</code> if not found.<br><br>
<em>Note: there is a bug in line 18 of the original — <code>nums[j+1] = nums[j]</code> should be <code>nums[j+1] = temp</code>.</em>`,
    starterCode: `def binarySearch(nums, target):
    left = 0
    right = len(nums) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

nums_in = [2, 3, 4, 10, 40]
`,
    testCode: `
_results = []
for _target, _expected in [(10, 3), (2, 0), (40, 4), (99, -1), (3, 1)]:
    try:
        _r = binarySearch([2,3,4,10,40], _target)
        _results.append((f"binarySearch([2,3,4,10,40], {_target})", _r == _expected, f"Expected {_expected}, got {_r}"))
    except Exception as _e:
        _results.append((f"binarySearch({_target})", False, str(_e)))
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch45",
    num: 45,
    title: "Store Discount",
    topic: "Binary & Hex",
    difficulty: "advanced",
    type: "coding",
    code: "LBOA-B9W0",
    description: `Extend the store discount program. Add a new discount code <code>"loyalty25"</code> worth 25% off to the 2D list. Then write the complete program logic so it correctly applies a discount if a valid code is entered.<br><br>
<pre>discounts = [["summer10",0.1],["welcome",0.15],["refer20",0.2]]</pre>`,
    starterCode: `discounts = [["summer10",0.1],["welcome",0.15],["refer20",0.2],["loyalty25",0.25]]

total = float(input("What is the order total: £"))
discount_in = input("Do you have a discount code? ").lower()
discount = 0

if discount_in == "yes":
    discountcode = input("Enter a discount code: ").lower()
    valid = False
    for count in range(len(discounts)):
        if discountcode == discounts[count][0]:
            discount = discounts[count][1]
            valid = True
    if not valid:
        print("Invalid discount code")

total = total - (total * discount)
print("Your total is £%.2f" % total)
`,
    testCode: `
_results = []
for _inputs, _expected in [
    (["100","yes","loyalty25"], "75.00"),
    (["50","yes","summer10"], "45.00"),
    (["80","no"], "80.00"),
    (["60","yes","invalid999"], "60.00"),
]:
    _cap = _StringIO()
    _sys.stdout = _cap
    _it = iter(_inputs)
    _bi.input = lambda p='': next(_it, '')
    try:
        exec(__student_code__, {'__builtins__': __builtins__})
    except Exception:
        pass
    _sys.stdout = _sys.__stdout__
    _out = _cap.getvalue()
    _results.append((f"inputs={_inputs} → total £{_expected}", _expected in _out, f"Output: {_out.strip()[:60]}"))
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch46",
    num: 46,
    title: "Bubble Sort Snippet",
    topic: "Sorting",
    difficulty: "advanced",
    type: "mcq",
    code: "LBOA-C1X3",
    description: `Study this bubble sort snippet where <code>j=0</code> and <code>nums = [9,1,12,3,4,8]</code>:<br><br>
<pre>if nums[j] > nums[j+1]:
    temp = nums[j]
    nums[j] = nums[j+1]
    nums[j+1] = nums[j]  # BUG!
    swapped = True</pre>`,
    questions: [
      {
        q: "After the snippet runs (j=0), what is the value of temp?",
        options: ["1", "9", "12", "0"],
        answer: 1
      },
      {
        q: "Line 4 has a bug. What should it be?",
        options: ["nums[j+1] = nums[j]", "nums[j+1] = temp", "temp = nums[j+1]", "nums[j] = temp"],
        answer: 1
      },
      {
        q: "Name a sorting algorithm better suited for large datasets:",
        options: ["Bubble sort", "Insertion sort or Merge sort", "Linear sort", "Selection sort"],
        answer: 1
      }
    ]
  },
  {
    id: "ch47",
    num: 47,
    title: "File Size: Text",
    topic: "Binary & Hex",
    difficulty: "advanced",
    type: "coding",
    code: "LBOA-D2Y5",
    description: `Write a function <code>text_size(bits_char, num_char)</code> that returns the file size in bits (<code>bits_char × num_char</code>). Then write a <code>main()</code> function that asks for inputs, calls the function, and outputs the size in KB (bits ÷ 8000).`,
    starterCode: `def text_size(bits_char, num_char):
    size = bits_char * num_char
    return size

def main():
    bits = int(input("Enter the number of bits per character: "))
    chars = int(input("Enter the number of characters: "))
    size_out = text_size(bits, chars)
    size_kb = size_out / (8 * 1000)
    print("The file size is", size_kb, "KB")

main()
`,
    testCode: `
_results = []
for _b, _c, _expected in [(8,1000,8000),(16,500,8000),(8,8000,64000)]:
    try:
        _r = text_size(_b, _c)
        _results.append((f"text_size({_b},{_c})", _r == _expected, f"Expected {_expected}, got {_r}"))
    except Exception as _e:
        _results.append((f"text_size({_b},{_c})", False, str(_e)))
print("__TESTS__:" + repr(_results))
`
  },
  {
    id: "ch48",
    num: 48,
    title: "File Size: Sound",
    topic: "Sorting",
    difficulty: "advanced",
    type: "coding",
    code: "LBOA-E4Z7",
    description: `Write a function <code>file_size(frequency, bits, duration)</code> that calculates a sound file size in bits using:<br><br>
<code>file size = sample rate × bit depth × duration</code><br><br>
Then write a <code>main()</code> that outputs the size in both KB and MB.`,
    starterCode: `def file_size(frequency, bits, duration):
    size = frequency * bits * duration
    return size

def main():
    freq = int(input("Enter the frequency in Hz: "))
    bit_depth = int(input("Enter the bit depth: "))
    length = int(input("Enter the duration in seconds: "))
    size_out = file_size(freq, bit_depth, length)
    size_kb = size_out / (8 * 1000)
    size_mb = size_kb / 1000
    print("The file size is", size_kb, "KB")
    print("The file size is", size_mb, "MB")

main()
`,
    testCode: `
_results = []
for _args, _expected in [
    ((44100,16,1), 705600),
    ((8000,8,10), 640000),
]:
    try:
        _r = file_size(*_args)
        _results.append((f"file_size{_args}", _r == _expected, f"Expected {_expected}, got {_r}"))
    except Exception as _e:
        _results.append((f"file_size{_args}", False, str(_e)))
print("__TESTS__:" + repr(_results))
`
  }
];

const ALL_CODES = PROBLEMS.reduce((acc, p) => { acc[p.code] = p; return acc; }, {});
