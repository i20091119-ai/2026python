// 이 파일은 tools/build.py 가 자동 생성합니다. 직접 수정하지 마세요.
window.COURSE_DATA = {
 "weeks": [
  {
   "id": "week2",
   "no": 2,
   "title": "파이썬 시작 · print()와 계산 · 스크립트 모드",
   "subtitle": "교재 1장 (파이썬과 편집기) · 2장 (문장, 계산, 반복) · 3장 (스크립트 모드, 입력, 모듈)",
   "concepts": [
    {
     "id": "w2-idle",
     "title": "대화형 모드와 스크립트 모드",
     "blocks": [
      {
       "t": "p",
       "text": "파이썬을 쓰는 방법은 두 가지입니다. 수업에서는 **Thonny** 라는 편집기를 씁니다.\n(교재에는 IDLE 로 나오지만 화면 구성과 사용법은 거의 같습니다.)"
      },
      {
       "t": "table",
       "head": [
        "",
        "대화형 모드 (Shell)",
        "스크립트 모드 (편집기)"
       ],
       "rows": [
        [
         "모습",
         "`>>>` 프롬프트가 있는 창",
         "파일을 편집하는 창"
        ],
        [
         "실행",
         "한 줄 쓰면 바로 실행",
         "저장한 뒤 통째로 실행"
        ],
        [
         "결과 보기",
         "값만 써도 결과가 보임",
         "`print()` 를 써야 보임"
        ],
        [
         "쓰임",
         "짧게 시험해 볼 때",
         "프로그램을 만들 때"
        ]
       ]
      },
      {
       "t": "warn",
       "text": "이 차이가 헷갈림의 원인이 되는 경우가 많습니다.\n대화형 모드에서는 `10 + 20` 만 써도 `30` 이 보이지만,\n파일에 그렇게만 쓰면 **아무것도 출력되지 않습니다.**\n파일에서는 `print(10 + 20)` 이라고 써야 합니다."
      },
      {
       "t": "code",
       "code": "10 + 20\nprint(10 + 20)",
       "note": "첫 줄은 계산만 하고 버립니다. 둘째 줄만 화면에 나옵니다.",
       "stdin": [],
       "title": null,
       "output": "30\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "파일로 저장할 때는 이름 끝에 **`.py`** 를 붙입니다. 예: `hello.py`"
      },
      {
       "t": "tip",
       "text": "이 워크북의 편집기는 Thonny 와 비슷하게 만들어 두었습니다.\n실행하면 아래에 **Shell** 창처럼 결과가 나오고, 오른쪽 **Variables** 에\n변수에 무엇이 들어 있는지 보입니다. 수업 화면과 같은 감각으로 연습할 수 있습니다."
      }
     ],
     "summary": "대화형 = 값만 써도 보임 / 스크립트(.py) = print() 필요"
    },
    {
     "id": "w2-print",
     "title": "print() — 화면에 출력하기",
     "blocks": [
      {
       "t": "p",
       "text": "파이썬에서 가장 먼저 쓰는 함수입니다. 괄호 안에 적은 값을 화면에 출력합니다.\n출력할 **문자열은 반드시 따옴표 안에** 있어야 하고, 여러 개를 출력할 땐 **쉼표**로 구분합니다."
      },
      {
       "t": "code",
       "code": "print(\"Hello World!\")\nprint(\"안녕하세요\")",
       "note": null,
       "stdin": [],
       "title": null,
       "output": "Hello World!\n안녕하세요\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "쉼표로 여러 값을 넘기면 파이썬이 **값 사이에 공백 한 칸**을 자동으로 넣어 줍니다."
      },
      {
       "t": "code",
       "code": "print(\"111을 4로 나누면?\", 111 / 4)\nprint(\"나이는\", 25, \"살입니다\")",
       "note": null,
       "stdin": [],
       "title": null,
       "output": "111을 4로 나누면? 27.75\n나이는 25 살입니다\n",
       "is_error": false
      },
      {
       "t": "tip",
       "text": "쉼표(`,`)와 더하기(`+`)는 다릅니다. 쉼표는 자동으로 공백을 넣고 자료형이 달라도 되지만,\n`+`는 공백을 넣지 않고 **문자열끼리만** 가능합니다. 3주차에서 자세히 봅니다."
      }
     ],
     "summary": "print(값1, 값2, ...) — 쉼표로 구분하면 공백이 자동으로 들어간다"
    },
    {
     "id": "w2-escape",
     "title": "특수 문자열 (이스케이프 문자)",
     "blocks": [
      {
       "t": "p",
       "text": "문자열 안에서 특별한 역할을 하는 기호들입니다. 모두 **역슬래시(`\\`)**로 시작합니다."
      },
      {
       "t": "table",
       "head": [
        "특수 문자열",
        "내용"
       ],
       "rows": [
        [
         "\\n",
         "문자열의 줄을 바꿔 줍니다 (newline)"
        ],
        [
         "\\t",
         "탭 형식의 들여쓰기를 삽입합니다 (tab)"
        ],
        [
         "\\\\",
         "역슬래시(\\) 문자 자체를 표현합니다"
        ],
        [
         "\\\"",
         "문자열 안에 큰따옴표를 넣습니다"
        ],
        [
         "\\'",
         "문자열 안에 작은따옴표를 넣습니다"
        ]
       ]
      },
      {
       "t": "code",
       "code": "print(\"Question: What goes clip?\\nAnswer: A one legged horse.\")\nprint(\"이름\\t나이\\t지역\")\nprint(\"윤인성\\t25\\t강서구\")",
       "note": "\\n 은 줄바꿈, \\t 는 탭입니다. 표처럼 정렬해서 출력할 때 유용합니다.",
       "stdin": [],
       "title": null,
       "output": "Question: What goes clip?\nAnswer: A one legged horse.\n이름\t나이\t지역\n윤인성\t25\t강서구\n",
       "is_error": false
      },
      {
       "t": "code",
       "code": "print(\"Here is a speech mark: \\\" and here is a slash: \\\\\")\nprint('I say \"High\", you say \"Low\".')",
       "note": "따옴표 안에 같은 종류의 따옴표를 쓰려면 역슬래시를 붙이거나, 바깥을 다른 따옴표로 감쌉니다.",
       "stdin": [],
       "title": null,
       "output": "Here is a speech mark: \" and here is a slash: \\\nI say \"High\", you say \"Low\".\n",
       "is_error": false
      },
      {
       "t": "warn",
       "text": "`print(\"경로: C:\\new\")` 처럼 쓰면 `\\n`이 줄바꿈으로 해석돼 의도와 다르게 나옵니다.\n역슬래시 자체를 쓰려면 `\\\\` 로 두 번 적으세요."
      }
     ],
     "summary": "\\n 줄바꿈 · \\t 탭 · \\\\ 역슬래시 · \\\" 따옴표"
    },
    {
     "id": "w2-math",
     "title": "산술 연산자",
     "blocks": [
      {
       "t": "p",
       "text": "파이썬은 계산기로도 훌륭합니다. 곱하기는 `*`, 나누기는 `/` 를 씁니다."
      },
      {
       "t": "table",
       "head": [
        "연산자",
        "의미",
        "예제",
        "결괏값"
       ],
       "rows": [
        [
         "*",
         "곱하기",
         "2 * 3",
         "6"
        ],
        [
         "/",
         "나누기 (일반)",
         "20 / 8",
         "2.5"
        ],
        [
         "//",
         "나누기 (정수값만)",
         "20 // 8",
         "2"
        ],
        [
         "%",
         "나머지",
         "20 % 8",
         "4"
        ],
        [
         "+",
         "더하기",
         "2 + 3",
         "5"
        ],
        [
         "-",
         "빼기",
         "7 - 3",
         "4"
        ],
        [
         "**",
         "제곱",
         "2 ** 4",
         "16"
        ]
       ]
      },
      {
       "t": "code",
       "code": "print(\"10 / 4 =\", 10 / 4)\nprint(\"11 / 4 =\", 11 / 4)\nprint(\"11 // 4 =\", 11 // 4)\nprint(\"11 % 4 =\", 11 % 4)\nprint(\"2 ** 10 =\", 2 ** 10)",
       "note": null,
       "stdin": [],
       "title": null,
       "output": "10 / 4 = 2.5\n11 / 4 = 2.75\n11 // 4 = 2\n11 % 4 = 3\n2 ** 10 = 1024\n",
       "is_error": false
      },
      {
       "t": "tip",
       "text": "`/`는 나누어떨어져도 항상 실수(float)를 만듭니다. `10 / 5`의 결과는 `2`가 아니라 `2.0`입니다.\n정수가 필요하면 `//`를 쓰세요. 4주차 `range()`에서 이 차이가 실제 오류로 이어집니다."
      },
      {
       "t": "p",
       "text": "**연산자 우선순위**는 수학과 같습니다. 곱셈·나눗셈이 덧셈·뺄셈보다 먼저입니다."
      },
      {
       "t": "code",
       "code": "print(2 + 3 * 4)\nprint((2 + 3) * 4)",
       "note": "헷갈릴 것 같으면 확실할 때도 괄호로 감싸는 습관이 좋습니다.",
       "stdin": [],
       "title": null,
       "output": "14\n20\n",
       "is_error": false
      }
     ],
     "summary": "* 곱 · / 나누기(실수) · // 몫 · % 나머지 · ** 제곱"
    },
    {
     "id": "w2-while",
     "title": "while 반복 맛보기",
     "blocks": [
      {
       "t": "p",
       "text": "`while` 은 **어떤 조건이 참인 동안** 같은 일을 되풀이합니다.\n조건이 거짓이 되면 멈춥니다. 자세한 내용은 4주차에서 다시 봅니다."
      },
      {
       "t": "code",
       "code": "lines = 0\nwhile lines < 5:\n    print(\"나는 수업 시간에 프로그래밍을 하지 않겠습니다.\")\n    lines = lines + 1",
       "note": "lines 가 0, 1, 2, 3, 4 일 때 참이라 다섯 번 출력됩니다.",
       "stdin": [],
       "title": null,
       "output": "나는 수업 시간에 프로그래밍을 하지 않겠습니다.\n나는 수업 시간에 프로그래밍을 하지 않겠습니다.\n나는 수업 시간에 프로그래밍을 하지 않겠습니다.\n나는 수업 시간에 프로그래밍을 하지 않겠습니다.\n나는 수업 시간에 프로그래밍을 하지 않겠습니다.\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "같은 결과를 문자열 반복으로도 만들 수 있습니다."
      },
      {
       "t": "code",
       "code": "print(\"나는 수업 시간에 프로그래밍을 하지 않겠습니다.\\n\" * 5)",
       "note": "훨씬 짧습니다. 다만 회차마다 다른 일을 시킬 수는 없습니다.",
       "stdin": [],
       "title": null,
       "output": "나는 수업 시간에 프로그래밍을 하지 않겠습니다.\n나는 수업 시간에 프로그래밍을 하지 않겠습니다.\n나는 수업 시간에 프로그래밍을 하지 않겠습니다.\n나는 수업 시간에 프로그래밍을 하지 않겠습니다.\n나는 수업 시간에 프로그래밍을 하지 않겠습니다.\n\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "`while` 조건에는 **비교 연산자**를 씁니다."
      },
      {
       "t": "table",
       "head": [
        "연산자",
        "의미",
        "연산자",
        "의미"
       ],
       "rows": [
        [
         "==",
         "~와 같으면",
         "!=",
         "~와 같지 않다면"
        ],
        [
         ">",
         "~보다 크면",
         "<",
         "~보다 작으면"
        ],
        [
         ">=",
         "~보다 크거나 같으면",
         "<=",
         "~보다 작거나 같으면"
        ]
       ]
      },
      {
       "t": "warn",
       "text": "시작값에 따라 반복 횟수가 달라집니다.\n`lines = 0` 에서 `while lines < 50` 이면 **50번**이지만,\n`lines = 1` 에서 시작하면 **49번**입니다. 수업에서도 이 차이가 나왔습니다."
      },
      {
       "t": "warn",
       "text": "조건을 바꿔 주는 코드(`lines = lines + 1`)를 빠뜨리면 조건이 영원히 참이라\n**무한 반복**에 빠집니다. 이 워크북은 8초가 지나면 자동으로 멈춥니다."
      }
     ],
     "summary": "while 조건: — 참인 동안 반복. 조건을 바꿔 주는 코드를 잊지 말 것"
    },
    {
     "id": "w2-comment",
     "title": "주석과 변수 이름",
     "blocks": [
      {
       "t": "p",
       "text": "`#` 뒤에 쓴 내용은 **주석**입니다. 컴퓨터는 무시하고, 사람이 읽으라고 남기는 메모입니다."
      },
      {
       "t": "code",
       "code": "# 이 줄은 실행되지 않습니다\nprint(\"안녕하세요\")   # 줄 끝에도 붙일 수 있습니다\n# print(\"이 줄도 실행되지 않습니다\")",
       "note": "세 번째 줄처럼 코드를 잠시 꺼 둘 때도 주석을 씁니다.",
       "stdin": [],
       "title": null,
       "output": "안녕하세요\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "코드를 깔끔하게 쓰려면 세 가지가 필요합니다."
      },
      {
       "t": "ul",
       "items": [
        "**빈칸(들여쓰기)** — 코드를 묶으려면 **네 칸** 들여씁니다. 엔터를 치면 자동으로 들여써집니다.",
        "**주석** — `#` 로 설명을 남깁니다.",
        "**변수 이름** — 저장될 내용을 설명하는 이름이 가장 좋습니다."
       ]
      },
      {
       "t": "warn",
       "text": "**예약어**는 변수 이름으로 쓸 수 없습니다.\n`and, as, assert, break, class, continue, def, del, elif, else, except, finally,\nfor, from, global, if, import, in, is, lambda, not, or, pass, raise, return, try, while, with, yield`\n이름을 숫자로 시작하거나 특수문자(`&, !, @, $, *`)를 넣는 것도 안 됩니다."
      },
      {
       "t": "tip",
       "text": "`sum`, `list`, `str` 같은 이름은 예약어는 아니지만 파이썬이 이미 쓰고 있습니다.\n변수 이름으로 쓰면 원래 기능을 못 쓰게 되니 `sum_value` 처럼 바꿔 쓰는 편이 좋습니다."
      }
     ],
     "summary": "# 주석 · 네 칸 들여쓰기 · 예약어는 변수 이름 불가"
    },
    {
     "id": "w2-input-random",
     "title": "input()과 random 모듈 맛보기",
     "blocks": [
      {
       "t": "p",
       "text": "`input()` 은 사용자가 키보드로 입력한 값을 받아 옵니다.\n괄호 안에 적은 문자열이 화면에 먼저 표시되고, 엔터를 누를 때까지 프로그램이 멈춥니다."
      },
      {
       "t": "code",
       "code": "name = input(\"이름이 뭔가요?\\n\")\nprint(\"안녕\", name)",
       "note": "오른쪽 '입력값' 칸에 미리 넣어 둔 값이 순서대로 들어갑니다.",
       "stdin": [
        "김정미"
       ],
       "title": null,
       "output": "이름이 뭔가요?\n김정미\n안녕 김정미\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "`input()` 에는 쓰임이 두 가지 있습니다."
      },
      {
       "t": "ul",
       "items": [
        "**값을 받을 때** — `question = input(\"질문을 입력하세요\\\\n\")` 처럼 변수에 담습니다.",
        "**멈춰 세울 때** — `input(\"\\\\n마치려면 엔터를 누르세요.\")` 처럼 변수에 담지 않습니다."
       ]
      },
      {
       "t": "p",
       "text": "**모듈**은 특별한 코드로 만들어진 파이썬 파일입니다. `import` 로 불러오면\n그 안의 함수들을 쓸 수 있습니다. `random` 은 무작위 값을 만들어 주는 모듈입니다."
      },
      {
       "t": "code",
       "code": "import random\n\ndice = random.randint(1, 6)\nprint(\"주사위:\", dice)",
       "note": "randint(1, 6) 은 1 이상 6 이하의 정수를 무작위로 하나 고릅니다. 실행할 때마다 달라집니다.",
       "stdin": [],
       "title": null,
       "output": "주사위: 2\n",
       "is_error": false,
       "varies": true
      },
      {
       "t": "p",
       "text": "괄호 안에 넣는 값을 **인수(argument)** 라고 합니다. 함수가 일하는 데 필요한 값입니다."
      },
      {
       "t": "warn",
       "text": "`import random` 을 빠뜨리고 `random.randint(1, 6)` 을 쓰면 `NameError` 가 납니다."
      }
     ],
     "summary": "input() 입력받기 · import 모듈 · random.randint(a, b)"
    },
    {
     "id": "w2-error",
     "title": "오류 메시지 읽는 법",
     "blocks": [
      {
       "t": "p",
       "text": "코드를 잘못 쓰면 파이썬이 오류를 알려 줍니다. 오류는 실패가 아니라\n**어디가 잘못됐는지 알려주는 힌트**입니다. 자주 만나는 것부터 익혀 둡시다."
      },
      {
       "t": "table",
       "head": [
        "오류",
        "언제 나는가",
        "예"
       ],
       "rows": [
        [
         "SyntaxError",
         "문법이 잘못됨",
         "콜론(:)이나 괄호를 빠뜨림"
        ],
        [
         "IndentationError",
         "들여쓰기가 잘못됨",
         "if 다음 줄을 들여쓰지 않음"
        ],
        [
         "NameError",
         "없는 이름을 씀",
         "오타, 따옴표를 안 씌운 글자"
        ],
        [
         "TypeError",
         "자료형이 안 맞음",
         "문자열 + 숫자"
        ]
       ]
      },
      {
       "t": "code",
       "code": "print(\"안녕하세요\" + 1)",
       "note": "문자열과 숫자는 + 로 연결할 수 없습니다. TypeError 가 납니다.",
       "stdin": [],
       "title": null,
       "output": "",
       "is_error": true,
       "error_text": "Traceback (most recent call last):\n  File \"<내 코드>\", line 1, in <module>\n    print(\"안녕하세요\" + 1)\nTypeError: can only concatenate str (not \"int\") to str"
      },
      {
       "t": "code",
       "code": "b = 5\nPrint(b)",
       "note": "Print 의 P 가 대문자라 NameError 가 납니다. 파이썬은 대소문자를 구분합니다.",
       "stdin": [],
       "title": null,
       "output": "",
       "is_error": true,
       "error_text": "Traceback (most recent call last):\n  File \"<내 코드>\", line 2, in <module>\n    Print(b)\nNameError: name 'Print' is not defined"
      },
      {
       "t": "tip",
       "text": "오류 메시지는 **맨 아래 줄부터** 읽으세요. 오류 종류와 이유가 거기 있습니다.\n그 위의 `line 2` 같은 표시가 몇 번째 줄이 문제인지 알려 줍니다.\nThonny 는 오른쪽 Assistant 창에서 \"콜론을 빠뜨리셨나요?\" 처럼 더 친절히 알려 주기도 합니다."
      }
     ],
     "summary": "SyntaxError 문법 · NameError 이름 · TypeError 자료형"
    }
   ],
   "problems": [
    {
     "id": "w2-p1",
     "title": "첫 출력",
     "type": "code",
     "level": 1,
     "tags": [
      "print"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "화면에 정확히 `Hello World!` 라고 출력하는 코드를 작성하세요."
      }
     ],
     "hints": [
      "출력에는 print() 함수를 씁니다.",
      "출력할 글자는 따옴표로 감싸야 합니다. 큰따옴표든 작은따옴표든 괜찮습니다.",
      "print(\"Hello World!\") 입니다. 느낌표까지 따옴표 안에 넣으세요."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`print()`는 괄호 안의 값을 화면에 출력합니다."
      },
      {
       "t": "p",
       "text": "문자열은 따옴표로 감싸지 않으면 파이썬이 변수 이름으로 착각해 `NameError`가 납니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "print(\"Hello World!\")",
     "seed": null,
     "tests": [
      {
       "stdin": [],
       "check": null,
       "label": null,
       "expected": "Hello World!",
       "expected_display": "Hello World!\n"
      }
     ]
    },
    {
     "id": "w2-p2",
     "title": "두 줄로 출력하기",
     "type": "code",
     "level": 1,
     "tags": [
      "print",
      "이스케이프"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "`print()`를 **한 번만** 써서 아래처럼 두 줄로 출력하세요."
      },
      {
       "t": "out",
       "text": "첫째 줄\n둘째 줄"
      }
     ],
     "hints": [
      "print()를 두 번 쓰지 않고 줄을 바꾸려면 특수 문자열이 필요합니다.",
      "줄바꿈을 뜻하는 특수 문자열은 \\n 입니다.",
      "print(\"첫째 줄\\n둘째 줄\") 처럼 문자열 가운데에 \\n 을 넣습니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`\\n`은 문자 두 개가 아니라 **줄바꿈 하나**를 뜻하는 특수 문자열입니다."
      },
      {
       "t": "p",
       "text": "문자열 안 어디에든 넣을 수 있어서, 여러 줄을 한 번의 `print()`로 출력할 수 있습니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "print(\"첫째 줄\\n둘째 줄\")",
     "seed": null,
     "tests": [
      {
       "stdin": [],
       "check": null,
       "label": null,
       "expected": "첫째 줄\n둘째 줄",
       "expected_display": "첫째 줄\n둘째 줄\n"
      }
     ]
    },
    {
     "id": "w2-p3",
     "title": "탭으로 표 만들기",
     "type": "code",
     "level": 2,
     "tags": [
      "print",
      "이스케이프"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "탭(`\\t`)을 사용해 아래와 같은 표를 출력하세요. `print()`는 세 번 쓰세요."
      },
      {
       "t": "out",
       "text": "이름\t나이\t지역\n윤인성\t25\t강서구\n윤아린\t24\t강서구"
      }
     ],
     "hints": [
      "탭은 \\t 입니다. 각 항목 사이에 넣으세요.",
      "첫 줄은 print(\"이름\\t나이\\t지역\") 입니다.",
      "나머지 두 줄도 같은 방식으로, 값만 바꿔 쓰면 됩니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`\\t`는 다음 탭 위치까지 커서를 옮깁니다. 항목 길이가 비슷하면 표처럼 정렬돼 보입니다."
      },
      {
       "t": "tip",
       "text": "글자 수가 크게 다르면 정렬이 어긋납니다. 정확한 정렬은 `format()`이나 f-문자열을 씁니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "print(\"이름\\t나이\\t지역\")\nprint(\"윤인성\\t25\\t강서구\")\nprint(\"윤아린\\t24\\t강서구\")",
     "seed": null,
     "tests": [
      {
       "stdin": [],
       "check": null,
       "label": null,
       "expected": "이름\t나이\t지역\n윤인성\t25\t강서구\n윤아린\t24\t강서구",
       "expected_display": "이름\t나이\t지역\n윤인성\t25\t강서구\n윤아린\t24\t강서구\n"
      }
     ]
    },
    {
     "id": "w2-p4",
     "title": "나눗셈 세 가지",
     "type": "code",
     "level": 2,
     "tags": [
      "연산자"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "`17`을 `5`로 나눈 결과를 세 가지 방식으로 각각 한 줄씩 출력하세요."
      },
      {
       "t": "out",
       "text": "3.4\n3\n2"
      },
      {
       "t": "p",
       "text": "순서대로 일반 나누기, 몫, 나머지입니다."
      }
     ],
     "hints": [
      "일반 나누기는 /, 몫은 //, 나머지는 % 입니다.",
      "print(17 / 5) 처럼 계산식을 그대로 print() 안에 넣을 수 있습니다.",
      "print(17 / 5), print(17 // 5), print(17 % 5) 세 줄입니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`/`는 항상 실수를 만들기 때문에 `3.4`가 나옵니다."
      },
      {
       "t": "p",
       "text": "`//`는 소수점 아래를 버리고 정수 부분만 남겨 `3`이 됩니다."
      },
      {
       "t": "p",
       "text": "`%`는 나머지라서 `17 = 5 × 3 + 2`의 `2`가 됩니다."
      },
      {
       "t": "tip",
       "text": "`%`는 짝수/홀수 판별에 자주 씁니다. `n % 2 == 0`이면 짝수입니다. 5주차에서 다시 만납니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "print(17 / 5)\nprint(17 // 5)\nprint(17 % 5)",
     "seed": null,
     "tests": [
      {
       "stdin": [],
       "check": null,
       "label": null,
       "expected": "3.4\n3\n2",
       "expected_display": "3.4\n3\n2\n"
      }
     ]
    },
    {
     "id": "w2-p5",
     "title": "실행 결과 예측 — 연산자 우선순위",
     "type": "predict",
     "level": 2,
     "tags": [
      "연산자"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "아래 코드의 실행 결과를 예측해서 입력하세요."
      }
     ],
     "hints": [
      "곱셈과 나눗셈이 덧셈과 뺄셈보다 먼저 계산됩니다.",
      "괄호가 있으면 괄호 안이 가장 먼저입니다.",
      "제곱(**)은 곱셈보다도 우선순위가 높습니다. 10 - 2**3 = 10 - 8 입니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "우선순위는 `**` → `* / // %` → `+ -` 순입니다."
      },
      {
       "t": "p",
       "text": "첫 줄은 `3*4=12`를 먼저 계산해 `14`, 둘째 줄은 괄호가 먼저라 `5*4=20`입니다."
      },
      {
       "t": "p",
       "text": "셋째 줄은 `2**3=8`이 먼저라 `10-8=2`가 됩니다."
      }
     ],
     "time_limit": 10,
     "code": "print(2 + 3 * 4)\nprint((2 + 3) * 4)\nprint(10 - 2 ** 3)",
     "seed": null,
     "expected": "14\n20\n2",
     "display": "14\n20\n2\n"
    },
    {
     "id": "w2-p6",
     "title": "대소문자 오류 찾기",
     "type": "choice",
     "level": 1,
     "tags": [
      "오류"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "아래 코드 중 **오류가 발생하는 것**을 고르세요."
      }
     ],
     "hints": [
      "파이썬은 대문자와 소문자를 다른 글자로 봅니다.",
      "함수 이름도 정확히 써야 합니다.",
      "출력 함수의 이름은 print 입니다. 첫 글자가 대문자면 어떻게 될까요?"
     ],
     "explain": [
      {
       "t": "p",
       "text": "②가 `NameError: name 'Print' is not defined` 를 냅니다."
      },
      {
       "t": "p",
       "text": "파이썬은 대소문자를 구분하므로 `Print`와 `print`는 완전히 다른 이름입니다."
      },
      {
       "t": "p",
       "text": "③처럼 변수 이름을 대문자로 만드는 것은 괜찮습니다. 만들 때와 쓸 때가 같기만 하면 됩니다."
      },
      {
       "t": "tip",
       "text": "초보자가 가장 자주 겪는 오류입니다. 오류 메시지에 나온 이름의 철자를 그대로 확인해 보세요."
      }
     ],
     "time_limit": 10,
     "options": [
      {
       "text": "①",
       "code": "b = 5\nprint(b)"
      },
      {
       "text": "②",
       "code": "b = 5\nPrint(b)"
      },
      {
       "text": "③",
       "code": "B = 5\nprint(B)"
      },
      {
       "text": "④",
       "code": "b = 5\nprint(b + 1)"
      }
     ],
     "answer": 1
    },
    {
     "id": "w2-p7",
     "title": "while 로 다섯 번 출력하기",
     "type": "code",
     "level": 2,
     "tags": [
      "while"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "`while` 반복문으로 `안녕하세요` 를 **다섯 번** 출력하세요."
      },
      {
       "t": "out",
       "text": "안녕하세요\n안녕하세요\n안녕하세요\n안녕하세요\n안녕하세요"
      },
      {
       "t": "p",
       "text": "반복 횟수를 세는 변수는 `0` 부터 시작하세요."
      }
     ],
     "hints": [
      "먼저 세는 변수를 만듭니다. lines = 0",
      "while lines < 5: 로 조건을 걸고 다음 줄은 네 칸 들여씁니다.",
      "반복문 안에서 print 를 하고 lines = lines + 1 로 값을 키워야 멈춥니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`lines`가 `0, 1, 2, 3, 4`일 때 조건이 참이라 다섯 번 실행됩니다. `5`가 되면 멈춥니다."
      },
      {
       "t": "warn",
       "text": "`lines = 1`로 시작하면 네 번만 출력됩니다. 수업에서도 `lines = 1`, `while lines < 50`이라 50번이 아닌 49번이 나왔습니다."
      },
      {
       "t": "tip",
       "text": "`lines = lines + 1`을 빠뜨리면 조건이 영원히 참이라 무한 반복에 빠집니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "lines = 0\nwhile lines < 5:\n    print(\"안녕하세요\")\n    lines = lines + 1",
     "seed": null,
     "tests": [
      {
       "stdin": [],
       "check": null,
       "label": null,
       "expected": "안녕하세요\n안녕하세요\n안녕하세요\n안녕하세요\n안녕하세요",
       "expected_display": "안녕하세요\n안녕하세요\n안녕하세요\n안녕하세요\n안녕하세요\n"
      }
     ]
    },
    {
     "id": "w2-p8",
     "title": "주석은 실행되지 않는다",
     "type": "predict",
     "level": 1,
     "tags": [
      "주석"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "아래 코드의 실행 결과를 예측하세요."
      }
     ],
     "hints": [
      "# 뒤에 오는 내용은 컴퓨터가 무시합니다.",
      "줄 맨 앞에 # 이 있으면 그 줄 전체가 주석입니다.",
      "줄 중간에 # 이 있으면 그 뒤부터 끝까지가 주석입니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "첫 줄은 전체가 주석이라 실행되지 않습니다."
      },
      {
       "t": "p",
       "text": "둘째 줄은 `print(\"둘째\")` 까지만 실행되고 `#` 뒤는 무시됩니다."
      },
      {
       "t": "p",
       "text": "셋째 줄은 그대로 실행됩니다."
      },
      {
       "t": "tip",
       "text": "코드를 지우지 않고 잠시 꺼 둘 때 주석이 유용합니다. 수업에서도 for 문을 주석 처리하고 while 로 바꿔 보셨습니다."
      }
     ],
     "time_limit": 10,
     "code": "# print(\"첫째\")\nprint(\"둘째\")   # print(\"셋째\")\nprint(\"넷째\")",
     "seed": null,
     "expected": "둘째\n넷째",
     "display": "둘째\n넷째\n"
    },
    {
     "id": "w2-p9",
     "title": "원의 넓이와 둘레",
     "type": "code",
     "level": 3,
     "tags": [
      "연산자",
      "print"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "반지름이 `10`인 원의 **둘레**와 **넓이**를 아래 형식으로 출력하세요. 원주율은 `3.14159265`를 쓰세요."
      },
      {
       "t": "out",
       "text": "원의 둘레 = 62.831853\n원의 넓이 = 314.159265"
      },
      {
       "t": "p",
       "text": "둘레는 `2 × 파이 × r`, 넓이는 `파이 × r × r` 입니다."
      }
     ],
     "hints": [
      "print()에 쉼표를 쓰면 문자열과 계산 결과를 함께 출력할 수 있습니다.",
      "print(\"원의 둘레 =\", 2 * 3.14159265 * 10) 형태입니다.",
      "넓이도 같은 방식으로 3.14159265 * 10 * 10 을 계산합니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "쉼표로 구분하면 문자열과 숫자를 함께 출력할 수 있고, 사이에 공백이 자동으로 들어갑니다."
      },
      {
       "t": "tip",
       "text": "소수 계산에서는 가끔 `28.259999999999998` 처럼 끝자리가 이상하게 나옵니다.\n컴퓨터가 소수를 2진수로 저장하면서 생기는 아주 작은 오차입니다.\n이 워크북은 채점할 때 이런 오차를 무시하므로 계산식만 맞으면 정답입니다."
      },
      {
       "t": "tip",
       "text": "같은 값(3.14159265)을 여러 번 쓰고 있죠? 3주차에서 배울 **변수**를 쓰면 한 번만 적으면 됩니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "print(\"원의 둘레 =\", 2 * 3.14159265 * 10)\nprint(\"원의 넓이 =\", 3.14159265 * 10 * 10)",
     "seed": null,
     "tests": [
      {
       "stdin": [],
       "check": null,
       "label": null,
       "expected": "원의 둘레 = 62.831853\n원의 넓이 = 314.159265",
       "expected_display": "원의 둘레 = 62.831853\n원의 넓이 = 314.159265\n"
      }
     ]
    }
   ]
  },
  {
   "id": "week3",
   "no": 3,
   "title": "변수와 입력 · 자료형과 문자열 · 숫자",
   "subtitle": "혼공파 「변수와 입력」 · 「자료형과 문자열」 · 「숫자」",
   "concepts": [
    {
     "id": "w3-var",
     "title": "변수 — 값에 이름 붙이기",
     "blocks": [
      {
       "t": "p",
       "text": "변수는 값을 저장할 때 쓰는 **이름표**입니다. 숫자뿐 아니라 모든 자료형을 저장할 수 있습니다.\n`=` 기호는 '같다'가 아니라 **오른쪽 값을 왼쪽 이름에 넣어라**는 뜻입니다."
      },
      {
       "t": "ul",
       "items": [
        "**선언** — 변수를 만드는 것",
        "**할당** — 변수에 값을 넣는 것 (`abc = 5`)",
        "**참조** — 변수에서 값을 꺼내 쓰는 것 (`print(abc)`)"
       ]
      },
      {
       "t": "code",
       "code": "# 변수 선언과 할당\npi = 3.14159265\nr = 10\n\n# 변수 참조\nprint(\"원주율 =\", pi)\nprint(\"반지름 =\", r)\nprint(\"원의 둘레 =\", 2 * pi * r)\nprint(\"원의 넓이 =\", pi * r * r)",
       "note": "값에 이름을 붙여 두면 같은 값을 여러 번 쓸 때 편하고, 나중에 고치기도 쉽습니다.",
       "stdin": [],
       "title": null,
       "output": "원주율 = 3.14159265\n반지름 = 10\n원의 둘레 = 62.831853\n원의 넓이 = 314.159265\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "변수에 담긴 것이 숫자면 숫자 연산을 모두 할 수 있습니다."
      },
      {
       "t": "code",
       "code": "pi = 3.14159265\n\nprint(pi + 2)\nprint(pi * 2)\nprint(pi / 2)\nprint(pi * pi)",
       "note": null,
       "stdin": [],
       "title": null,
       "output": "5.14159265\n6.2831853\n1.570796325\n9.869604378534024\n",
       "is_error": false
      },
      {
       "t": "warn",
       "text": "숫자가 담긴 변수와 문자열은 `+` 로 이을 수 없습니다.\n`pi + \"문자열\"` 은 `TypeError` 입니다."
      },
      {
       "t": "tip",
       "text": "좋은 변수 이름은 **저장될 내용을 설명하는 이름**입니다. `a`보다 `student_count`가 낫습니다."
      }
     ],
     "summary": "변수 = 값에 붙이는 이름표. 선언 → 할당 → 참조"
    },
    {
     "id": "w3-compound",
     "title": "복합 대입 연산자",
     "blocks": [
      {
       "t": "p",
       "text": "기본 연산자와 `=`를 함께 써서, 변수의 현재 값을 이용해 새 값을 넣습니다."
      },
      {
       "t": "table",
       "head": [
        "연산자",
        "설명",
        "같은 뜻"
       ],
       "rows": [
        [
         "+=",
         "숫자 덧셈 후 대입",
         "a = a + 10"
        ],
        [
         "-=",
         "숫자 뺄셈 후 대입",
         "a = a - 10"
        ],
        [
         "*=",
         "숫자 곱셈 후 대입",
         "a = a * 10"
        ],
        [
         "/=",
         "숫자 나눗셈 후 대입",
         "a = a / 10"
        ],
        [
         "%=",
         "나머지를 구한 후 대입",
         "a = a % 10"
        ],
        [
         "**=",
         "제곱 후 대입",
         "a = a ** 10"
        ]
       ]
      },
      {
       "t": "code",
       "code": "number = 100\nnumber += 10\nnumber += 20\nnumber += 30\nprint(\"number:\", number)",
       "note": null,
       "stdin": [],
       "title": null,
       "output": "number: 160\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "문자열에도 `+=`(연결)와 `*=`(반복)를 쓸 수 있습니다."
      },
      {
       "t": "code",
       "code": "string = \"안녕하세요\"\nstring += \"!\"\nstring += \"!\"\nprint(\"string:\", string)",
       "note": null,
       "stdin": [],
       "title": null,
       "output": "string: 안녕하세요!!\n",
       "is_error": false
      },
      {
       "t": "tip",
       "text": "`+=`는 4주차 반복문에서 합계를 구할 때 거의 항상 등장합니다. 지금 익혀 두면 편합니다."
      }
     ],
     "summary": "a += 10 은 a = a + 10 의 줄임말"
    },
    {
     "id": "w3-input",
     "title": "input() — 사용자 입력 받기",
     "blocks": [
      {
       "t": "p",
       "text": "`input()`은 사용자가 키보드로 입력한 값을 받아 옵니다.\n괄호 안에 적은 문자열은 **프롬프트**로 화면에 먼저 표시됩니다.\n엔터를 누를 때까지 프로그램은 **블록**(잠시 멈춤) 상태가 됩니다."
      },
      {
       "t": "code",
       "code": "string = input(\"인사말을 입력하세요> \")\nprint(string)",
       "note": "입력받은 값을 변수에 담아 두면 여러 번 쓸 수 있습니다.",
       "stdin": [
        "안녕하세요"
       ],
       "title": null,
       "output": "인사말을 입력하세요> 안녕하세요\n안녕하세요\n",
       "is_error": false
      },
      {
       "t": "warn",
       "text": "**가장 중요한 규칙:** `input()`의 결과는 사용자가 무엇을 입력하든 **무조건 문자열(str)** 입니다.\n`52273`을 입력해도 숫자가 아니라 문자열 `\"52273\"`이 됩니다."
      },
      {
       "t": "code",
       "code": "string = input(\"입력> \")\nprint(\"자료:\", string)\nprint(\"자료형:\", type(string))",
       "note": "type() 함수로 자료형을 확인할 수 있습니다.",
       "stdin": [
        "52273"
       ],
       "title": null,
       "output": "입력> 52273\n자료: 52273\n자료형: <class 'str'>\n",
       "is_error": false
      },
      {
       "t": "code",
       "code": "string = input(\"입력> \")\nprint(\"자료:\", string)\nprint(\"자료형:\", type(string))",
       "note": "True 를 입력해도 불이 아니라 문자열입니다.",
       "stdin": [
        "True"
       ],
       "title": null,
       "output": "입력> True\n자료: True\n자료형: <class 'str'>\n",
       "is_error": false
      },
      {
       "t": "code",
       "code": "string = input(\"입력> \")\nprint(\"입력 + 100:\", string + 100)",
       "note": "문자열 + 숫자라서 TypeError 가 납니다. 이걸 해결하는 게 다음 개념입니다.",
       "stdin": [
        "300"
       ],
       "title": null,
       "output": "입력> 300\n",
       "is_error": true,
       "error_text": "Traceback (most recent call last):\n  File \"<내 코드>\", line 2, in <module>\n    print(\"입력 + 100:\", string + 100)\nTypeError: can only concatenate str (not \"int\") to str"
      }
     ],
     "summary": "input()의 결과는 언제나 문자열(str)"
    },
    {
     "id": "w3-cast",
     "title": "자료형 변환 — int(), float(), str()",
     "blocks": [
      {
       "t": "p",
       "text": "입력받은 문자열을 계산에 쓰려면 숫자로 바꿔야 합니다. 이것을 **캐스트(cast)** 라고 합니다."
      },
      {
       "t": "ul",
       "items": [
        "`int(\"300\")` → `300` — 문자열을 정수로",
        "`float(\"52.273\")` → `52.273` — 문자열을 실수로",
        "`str(52)` → `\"52\"` — 숫자를 문자열로"
       ]
      },
      {
       "t": "code",
       "code": "string_a = input(\"입력A> \")\nint_a = int(string_a)\n\nstring_b = input(\"입력B> \")\nint_b = int(string_b)\n\nprint(\"문자열 자료:\", string_a + string_b)\nprint(\"숫자 자료:\", int_a + int_b)",
       "note": "같은 입력이라도 문자열이면 이어 붙고(27352), 숫자면 더해집니다(325).",
       "stdin": [
        "273",
        "52"
       ],
       "title": null,
       "output": "입력A> 273\n입력B> 52\n문자열 자료: 27352\n숫자 자료: 325\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "`input()`과 `int()`를 한 줄로 합쳐 쓰는 게 더 흔한 방식입니다."
      },
      {
       "t": "code",
       "code": "input_a = float(input(\"첫 번째 숫자> \"))\ninput_b = float(input(\"두 번째 숫자> \"))\n\nprint(\"덧셈 결과:\", input_a + input_b)\nprint(\"나눗셈 결과:\", input_a / input_b)",
       "note": "괄호 안쪽(input)이 먼저 실행되고, 그 결과가 float() 로 들어갑니다.",
       "stdin": [
        "273",
        "52"
       ],
       "title": null,
       "output": "첫 번째 숫자> 273\n두 번째 숫자> 52\n덧셈 결과: 325.0\n나눗셈 결과: 5.25\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "반대로 숫자를 문자열로 바꿀 때는 `str()` 을 씁니다."
      },
      {
       "t": "code",
       "code": "output_a = str(52)\noutput_b = str(52.273)\nprint(type(output_a), output_a)\nprint(type(output_b), output_b)",
       "note": null,
       "stdin": [],
       "title": null,
       "output": "<class 'str'> 52\n<class 'str'> 52.273\n",
       "is_error": false
      },
      {
       "t": "warn",
       "text": "**ValueError** — 숫자로 바꿀 수 없는 것을 바꾸려 하면 납니다.\n`int(\"안녕하세요\")` 는 물론이고, **`int(\"52.273\")` 도 오류**입니다.\n소수점이 있는 문자열은 `int()`가 아니라 `float()`로 변환해야 합니다."
      },
      {
       "t": "code",
       "code": "print(int(\"52.273\"))",
       "note": "ValueError: invalid literal for int() with base 10: '52.273'",
       "stdin": [],
       "title": null,
       "output": "",
       "is_error": true,
       "error_text": "Traceback (most recent call last):\n  File \"<내 코드>\", line 1, in <module>\n    print(int(\"52.273\"))\nValueError: invalid literal for int() with base 10: '52.273'"
      }
     ],
     "summary": "int()/float() 문자열→숫자, str() 숫자→문자열. int(\"52.273\")은 ValueError"
    },
    {
     "id": "w3-type",
     "title": "자료형 — 자료의 형식",
     "blocks": [
      {
       "t": "p",
       "text": "프로그램이 처리할 수 있는 모든 것을 **자료(data)** 라 하고, 자료를 기능과 역할에 따라 구분한 것이\n**자료형(data type)** 입니다. `type()` 함수로 확인할 수 있습니다."
      },
      {
       "t": "table",
       "head": [
        "자료형",
        "이름",
        "예"
       ],
       "rows": [
        [
         "str",
         "문자열 (string)",
         "\"안녕하세요\", \"52\""
        ],
        [
         "int",
         "정수 (integer)",
         "0, 273, -52"
        ],
        [
         "float",
         "실수 (부동소수점)",
         "0.0, 52.273, -1.2"
        ],
        [
         "bool",
         "불 (boolean)",
         "True, False"
        ]
       ]
      },
      {
       "t": "code",
       "code": "print(type(\"안녕하세요\"))\nprint(type(273))\nprint(type(52.273))\nprint(type(True))",
       "note": null,
       "stdin": [],
       "title": null,
       "output": "<class 'str'>\n<class 'int'>\n<class 'float'>\n<class 'bool'>\n",
       "is_error": false
      },
      {
       "t": "tip",
       "text": "`int`와 `float`는 둘 다 숫자지만 다른 자료형입니다. `52`와 `52.0`은 값은 같아도 형식이 다릅니다."
      }
     ],
     "summary": "type()으로 확인. str · int · float · bool"
    },
    {
     "id": "w3-string",
     "title": "문자열 만들기",
     "blocks": [
      {
       "t": "p",
       "text": "문자열은 큰따옴표(`\"`)나 작은따옴표(`'`)로 감싸 만듭니다. 둘 다 똑같이 동작합니다."
      },
      {
       "t": "code",
       "code": "print(\"큰따옴표로 만든 문자열\")\nprint('작은따옴표로 만든 문자열')",
       "note": null,
       "stdin": [],
       "title": null,
       "output": "큰따옴표로 만든 문자열\n작은따옴표로 만든 문자열\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "문자열 **안에** 따옴표를 넣어야 할 때는 바깥을 다른 종류로 감싸면 간단합니다."
      },
      {
       "t": "code",
       "code": "print('\"안녕하세요\"라고 말했습니다')\nprint(\"'안녕하세요'라고 말했습니다\")\nprint(\"역슬래시를 써도 됩니다: \\\"안녕\\\"\")",
       "note": null,
       "stdin": [],
       "title": null,
       "output": "\"안녕하세요\"라고 말했습니다\n'안녕하세요'라고 말했습니다\n역슬래시를 써도 됩니다: \"안녕\"\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "여러 줄 문자열은 따옴표를 **세 번** 반복해 만듭니다."
      },
      {
       "t": "code",
       "code": "print(\"\"\"동해물과 백두산이 마르고 닳도록\n하느님이 보우하사 우리나라 만세\"\"\")",
       "note": "\\n 을 일일이 넣지 않아도 줄바꿈이 그대로 유지됩니다.",
       "stdin": [],
       "title": null,
       "output": "동해물과 백두산이 마르고 닳도록\n하느님이 보우하사 우리나라 만세\n",
       "is_error": false
      },
      {
       "t": "warn",
       "text": "여러 줄 문자열은 시작하는 `\"\"\"` 바로 뒤와 끝나는 `\"\"\"` 앞에서 **의도치 않은 줄바꿈**이 생깁니다.\n줄 끝에 `\\` 를 붙이면 '여기서 줄을 바꾸지 않겠다'는 뜻이 되어 이를 막을 수 있습니다."
      }
     ],
     "summary": "따옴표 / 작은따옴표 / \"\"\"여러 줄\"\"\""
    },
    {
     "id": "w3-strop",
     "title": "문자열 연산자",
     "blocks": [
      {
       "t": "p",
       "text": "자료마다 쓸 수 있는 연산자가 정해져 있습니다. 문자열에는 네 가지가 있습니다."
      },
      {
       "t": "ul",
       "items": [
        "**연결 연산자 `+`** — 두 문자열을 이어 새 문자열을 만듭니다",
        "**반복 연산자 `*`** — 문자열을 숫자만큼 반복합니다",
        "**선택 연산자 `[]`** — 문자 하나를 고릅니다 (인덱싱)",
        "**범위 선택 연산자 `[:]`** — 일부를 잘라 냅니다 (슬라이싱)"
       ]
      },
      {
       "t": "code",
       "code": "print(\"안녕\" + \"하세요\")\nprint(\"안녕하세요\" * 3)\nprint(3 * \"안녕하세요\")",
       "note": null,
       "stdin": [],
       "title": null,
       "output": "안녕하세요\n안녕하세요안녕하세요안녕하세요\n안녕하세요안녕하세요안녕하세요\n",
       "is_error": false
      },
      {
       "t": "code",
       "code": "print(\"안녕하세요\" + 1)",
       "note": "문자열과 숫자는 + 로 연결할 수 없습니다. TypeError 입니다.",
       "stdin": [],
       "title": null,
       "output": "",
       "is_error": true,
       "error_text": "Traceback (most recent call last):\n  File \"<내 코드>\", line 1, in <module>\n    print(\"안녕하세요\" + 1)\nTypeError: can only concatenate str (not \"int\") to str"
      },
      {
       "t": "warn",
       "text": "`+`는 문자열끼리만, 숫자는 숫자끼리만 가능합니다. 숫자를 붙이려면 `str()`로 바꾸세요."
      }
     ],
     "summary": "+ 연결 · * 반복 · [] 선택 · [:] 범위"
    },
    {
     "id": "w3-index",
     "title": "인덱싱 — 문자 하나 고르기",
     "blocks": [
      {
       "t": "p",
       "text": "파이썬은 **제로 인덱스**를 씁니다. 첫 글자가 `0`번입니다.\n대괄호 안에 위치를 적으면 그 자리의 문자 하나를 꺼냅니다."
      },
      {
       "t": "table",
       "head": [
        "문자",
        "안",
        "녕",
        "하",
        "세",
        "요"
       ],
       "rows": [
        [
         "앞에서",
         "[0]",
         "[1]",
         "[2]",
         "[3]",
         "[4]"
        ],
        [
         "뒤에서",
         "[-5]",
         "[-4]",
         "[-3]",
         "[-2]",
         "[-1]"
        ]
       ]
      },
      {
       "t": "code",
       "code": "print(\"안녕하세요\"[0])\nprint(\"안녕하세요\"[2])\nprint(\"안녕하세요\"[-1])\nprint(\"안녕하세요\"[-2])",
       "note": "음수를 쓰면 뒤에서부터 셉니다. [-1] 이 마지막 글자입니다.",
       "stdin": [],
       "title": null,
       "output": "안\n하\n요\n세\n",
       "is_error": false
      },
      {
       "t": "warn",
       "text": "**IndexError** — 문자 개수를 넘는 위치를 고르면 납니다.\n`\"안녕하세요\"`는 5글자이므로 쓸 수 있는 인덱스는 `0~4` 뿐입니다."
      },
      {
       "t": "code",
       "code": "print(\"안녕하세요\"[10])",
       "note": "IndexError: string index out of range",
       "stdin": [],
       "title": null,
       "output": "",
       "is_error": true,
       "error_text": "Traceback (most recent call last):\n  File \"<내 코드>\", line 1, in <module>\n    print(\"안녕하세요\"[10])\nIndexError: string index out of range"
      }
     ],
     "summary": "[0]이 첫 글자, [-1]이 마지막 글자"
    },
    {
     "id": "w3-slice",
     "title": "슬라이싱 — 범위 잘라내기",
     "blocks": [
      {
       "t": "p",
       "text": "`[시작:끝]` 형태로 문자열의 일부를 잘라 냅니다.\n**시작은 포함, 끝은 포함하지 않습니다.** 이게 파이썬 슬라이싱의 핵심 규칙입니다."
      },
      {
       "t": "code",
       "code": "print(\"안녕하세요\"[1:4])\nprint(\"안녕하세요\"[0:2])\nprint(\"안녕하세요\"[2:4])",
       "note": "[1:4] 는 1, 2, 3번 글자입니다. 4번(요)은 포함되지 않습니다.",
       "stdin": [],
       "title": null,
       "output": "녕하세\n안녕\n하세\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "둘 중 하나를 생략할 수도 있습니다."
      },
      {
       "t": "ul",
       "items": [
        "`[1:]` — 1번부터 **끝까지**",
        "`[:3]` — 0번부터 **3번 앞까지**",
        "`[:]` — 전체"
       ]
      },
      {
       "t": "code",
       "code": "print(\"안녕하세요\"[1:])\nprint(\"안녕하세요\"[:3])",
       "note": null,
       "stdin": [],
       "title": null,
       "output": "녕하세요\n안녕하\n",
       "is_error": false
      },
      {
       "t": "tip",
       "text": "슬라이싱은 인덱싱과 달리 **범위를 넘어가도 오류가 나지 않습니다.**\n`\"안녕하세요\"[2:100]` 은 오류 없이 `\"하세요\"` 를 돌려줍니다."
      },
      {
       "t": "p",
       "text": "**`len()`** 은 문자열의 문자 개수를 세어 줍니다."
      },
      {
       "t": "code",
       "code": "print(len(\"안녕하세요\"))\nprint(len(\"Hello\"))\nprint(len(\"\"))",
       "note": null,
       "stdin": [],
       "title": null,
       "output": "5\n5\n0\n",
       "is_error": false
      }
     ],
     "summary": "[시작:끝] — 시작은 포함, 끝은 미포함 · len()은 길이"
    },
    {
     "id": "w3-number",
     "title": "숫자 자료형과 연산자 우선순위",
     "blocks": [
      {
       "t": "p",
       "text": "파이썬은 숫자를 소수점이 없는 것과 있는 것으로 나눕니다."
      },
      {
       "t": "ul",
       "items": [
        "**정수형(int)** — 소수점이 없는 숫자. `0, 1, 273, -52`",
        "**실수형(float)** — 소수점이 있는 숫자. `0.0, 52.273, -1.2` (부동 소수점)"
       ]
      },
      {
       "t": "code",
       "code": "print(\"5 + 7 =\", 5 + 7)\nprint(\"5 - 7 =\", 5 - 7)\nprint(\"5 * 7 =\", 5 * 7)\nprint(\"5 / 7 =\", 5 / 7)\nprint(\"5 // 7 =\", 5 // 7)\nprint(\"5 % 7 =\", 5 % 7)\nprint(\"5 ** 7 =\", 5 ** 7)",
       "note": null,
       "stdin": [],
       "title": null,
       "output": "5 + 7 = 12\n5 - 7 = -2\n5 * 7 = 35\n5 / 7 = 0.7142857142857143\n5 // 7 = 0\n5 % 7 = 5\n5 ** 7 = 78125\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "우선순위는 **`**` → `* / // %` → `+ -`** 순입니다.\n헷갈릴 때는 괄호로 감싸는 것이 가장 안전합니다."
      },
      {
       "t": "warn",
       "text": "**자주 나오는 함정**: 제곱근을 구하려고 `x ** 1/2` 라고 쓰면 안 됩니다.\n`**` 가 `/` 보다 우선이라 `(x ** 1) / 2` 로 계산됩니다.\n제곱근은 `x ** (1/2)` 처럼 괄호를 씌워야 합니다."
      },
      {
       "t": "code",
       "code": "x = 36\n\nprint(\"x ** 1/2   =\", x ** 1/2)\nprint(\"x ** (1/2) =\", x ** (1/2))",
       "note": "위는 36을 2로 나눈 18, 아래는 진짜 제곱근 6.0 입니다.",
       "stdin": [],
       "title": null,
       "output": "x ** 1/2   = 18.0\nx ** (1/2) = 6.0\n",
       "is_error": false
      },
      {
       "t": "code",
       "code": "string = \"문자열\"\nnumber = 273\nprint(string + number)",
       "note": "서로 다른 자료를 연산하면 TypeError 입니다.",
       "stdin": [],
       "title": null,
       "output": "",
       "is_error": true,
       "error_text": "Traceback (most recent call last):\n  File \"<내 코드>\", line 3, in <module>\n    print(string + number)\nTypeError: can only concatenate str (not \"int\") to str"
      }
     ],
     "summary": "int/float · ** 가 / 보다 우선 · 제곱근은 ** (1/2)"
    }
   ],
   "problems": [
    {
     "id": "w3-p1",
     "title": "변수로 정리하기",
     "type": "code",
     "level": 1,
     "tags": [
      "변수"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "반지름이 `10`인 원의 넓이를 출력하세요. 단, 원주율과 반지름을 각각 **변수에 저장**한 뒤 사용하세요."
      },
      {
       "t": "out",
       "text": "원의 넓이 = 314.159265"
      },
      {
       "t": "p",
       "text": "원주율은 `3.14159265`를 쓰세요."
      }
     ],
     "hints": [
      "먼저 pi = 3.14159265 처럼 값에 이름을 붙입니다.",
      "반지름도 r = 10 으로 저장하세요.",
      "print(\"원의 넓이 =\", pi * r * r) 로 출력합니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "변수를 쓰면 반지름을 바꾸고 싶을 때 `r = 10` 한 줄만 고치면 됩니다."
      },
      {
       "t": "p",
       "text": "계산식 안에서 변수는 저장된 값으로 그대로 대체됩니다."
      },
      {
       "t": "tip",
       "text": "`pi * r ** 2` 로 써도 같은 값이 나옵니다. `**` 가 `*` 보다 먼저 계산되기 때문입니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "pi = 3.14159265\nr = 10\nprint(\"원의 넓이 =\", pi * r * r)",
     "seed": null,
     "tests": [
      {
       "stdin": [],
       "check": null,
       "label": null,
       "expected": "원의 넓이 = 314.159265",
       "expected_display": "원의 넓이 = 314.159265\n"
      }
     ]
    },
    {
     "id": "w3-p2",
     "title": "복합 대입 연산자",
     "type": "predict",
     "level": 1,
     "tags": [
      "변수"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "아래 코드의 실행 결과를 예측하세요."
      }
     ],
     "hints": [
      "a += 3 은 a = a + 3 과 같습니다. 2 + 3 = 5.",
      "그 다음 a *= 4 는 a = a * 4 이므로 5 * 4 입니다.",
      "문자열에서 += 는 연결, *= 는 반복입니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`a`는 `2 → 5 → 20`으로 바뀝니다. 복합 대입은 **현재 값을 읽어서 계산한 뒤 다시 넣는** 동작입니다."
      },
      {
       "t": "p",
       "text": "문자열 `s`는 `\"안녕\" → \"안녕하세요\" → \"안녕하세요안녕하세요\"`가 됩니다."
      }
     ],
     "time_limit": 10,
     "code": "a = 2\na += 3\na *= 4\nprint(a)\n\ns = \"안녕\"\ns += \"하세요\"\ns *= 2\nprint(s)",
     "seed": null,
     "expected": "20\n안녕하세요안녕하세요",
     "display": "20\n안녕하세요안녕하세요\n"
    },
    {
     "id": "w3-p3",
     "title": "이름 물어보기",
     "type": "code",
     "level": 1,
     "tags": [
      "input"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "사용자에게 이름을 입력받아 인사하는 프로그램을 만드세요."
      },
      {
       "t": "p",
       "text": "프롬프트는 `이름이 뭔가요? ` 로, 출력은 아래 형식으로 하세요."
      },
      {
       "t": "out",
       "text": "안녕하세요 김정미 님!"
      },
      {
       "t": "p",
       "text": "오른쪽 입력값 칸의 값이 자동으로 입력됩니다."
      }
     ],
     "hints": [
      "name = input(\"이름이 뭔가요? \") 로 입력을 받아 변수에 저장합니다.",
      "print() 에 쉼표로 넘기면 공백이 자동으로 들어가 형식이 안 맞을 수 있습니다.",
      "print(\"안녕하세요 \" + name + \" 님!\") 처럼 + 로 이으면 공백을 직접 조절할 수 있습니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`input()`이 돌려준 값을 변수에 저장해 두면 여러 번 쓸 수 있습니다."
      },
      {
       "t": "tip",
       "text": "쉼표는 공백을 자동으로 넣고 `+`는 넣지 않습니다. 출력 형식을 정확히 맞춰야 할 땐 `+`가 편합니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "name = input(\"이름이 뭔가요? \")\nprint(\"안녕하세요 \" + name + \" 님!\")",
     "seed": null,
     "tests": [
      {
       "stdin": [
        "김정미"
       ],
       "check": null,
       "label": null,
       "expected": "안녕하세요 김정미 님!",
       "expected_display": "이름이 뭔가요? 김정미\n안녕하세요 김정미 님!\n"
      },
      {
       "stdin": [
        "박기동"
       ],
       "check": null,
       "label": null,
       "expected": "안녕하세요 박기동 님!",
       "expected_display": "이름이 뭔가요? 박기동\n안녕하세요 박기동 님!\n"
      }
     ]
    },
    {
     "id": "w3-p4",
     "title": "두 수의 합",
     "type": "code",
     "level": 2,
     "tags": [
      "input",
      "형변환"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "숫자 두 개를 입력받아 **합**을 출력하세요. 프롬프트는 각각 `첫 번째 숫자> `, `두 번째 숫자> ` 입니다."
      },
      {
       "t": "out",
       "text": "합: 325"
      },
      {
       "t": "p",
       "text": "입력값이 `273`, `52`일 때의 결과입니다."
      }
     ],
     "hints": [
      "input()의 결과는 문자열이라 그냥 더하면 이어 붙습니다(27352).",
      "int() 로 감싸서 정수로 바꿔야 합니다.",
      "a = int(input(\"첫 번째 숫자> \")) 처럼 한 줄로 쓸 수 있습니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`int(input(...))`은 괄호 **안쪽부터** 실행됩니다. `input()`이 문자열을 만들고, `int()`가 그걸 정수로 바꿉니다."
      },
      {
       "t": "warn",
       "text": "입력이 `52.273`처럼 소수면 `int()`는 ValueError를 냅니다. 그럴 땐 `float()`를 쓰세요."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "a = int(input(\"첫 번째 숫자> \"))\nb = int(input(\"두 번째 숫자> \"))\nprint(\"합:\", a + b)",
     "seed": null,
     "tests": [
      {
       "stdin": [
        "273",
        "52"
       ],
       "check": null,
       "label": null,
       "expected": "합: 325",
       "expected_display": "첫 번째 숫자> 273\n두 번째 숫자> 52\n합: 325\n"
      },
      {
       "stdin": [
        "100",
        "-30"
       ],
       "check": null,
       "label": null,
       "expected": "합: 70",
       "expected_display": "첫 번째 숫자> 100\n두 번째 숫자> -30\n합: 70\n"
      }
     ]
    },
    {
     "id": "w3-p5",
     "title": "오류 찾기 — 자료형",
     "type": "choice",
     "level": 2,
     "tags": [
      "형변환",
      "오류"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "아래 코드 중 **오류가 발생하는 것**을 고르세요."
      }
     ],
     "hints": [
      "int() 는 소수점이 없는 숫자 형식의 문자열만 정수로 바꿀 수 있습니다.",
      "float() 는 소수점이 있어도 괜찮습니다.",
      "문자열 \"52.273\" 에는 소수점이 있습니다. int() 로 바꿀 수 있을까요?"
     ],
     "explain": [
      {
       "t": "p",
       "text": "③이 `ValueError: invalid literal for int() with base 10: '52.273'` 를 냅니다."
      },
      {
       "t": "p",
       "text": "`int()`는 소수점이 있는 문자열을 받지 못합니다. `int(float(\"52.273\"))` 처럼 두 단계로 바꾸거나 `float()`를 쓰세요."
      },
      {
       "t": "p",
       "text": "④는 `str(52)`가 `\"52\"`가 되어 문자열끼리 연결되므로 `52273`이 출력됩니다. 오류가 아닙니다."
      }
     ],
     "time_limit": 10,
     "options": [
      {
       "text": "①",
       "code": "print(int(\"273\") + 52)"
      },
      {
       "text": "②",
       "code": "print(float(\"52.273\") + 1)"
      },
      {
       "text": "③",
       "code": "print(int(\"52.273\") + 1)"
      },
      {
       "text": "④",
       "code": "print(str(52) + \"273\")"
      }
     ],
     "answer": 2
    },
    {
     "id": "w3-p6",
     "title": "간단한 자기소개",
     "type": "code",
     "level": 3,
     "tags": [
      "input",
      "형변환"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "이름과 나이를 입력받아 **내년 나이**까지 알려 주는 프로그램을 만드세요."
      },
      {
       "t": "p",
       "text": "프롬프트는 `이름> `, `나이> ` 이고 출력은 아래 형식입니다."
      },
      {
       "t": "out",
       "text": "김정미 님은 올해 25살, 내년에는 26살입니다."
      },
      {
       "t": "p",
       "text": "입력값이 `김정미`, `25`일 때의 결과입니다."
      }
     ],
     "hints": [
      "나이는 계산에 쓰이므로 int() 로 바꿔야 합니다.",
      "출력할 때는 숫자를 다시 문자열과 이어 붙여야 합니다. 쉼표를 쓰면 공백이 들어가 형식이 안 맞습니다.",
      "str() 로 숫자를 문자열로 바꿔 + 로 이으세요."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`int()`로 바꿔야 `age + 1` 계산이 됩니다. 문자열 상태면 `TypeError`입니다."
      },
      {
       "t": "p",
       "text": "다시 출력할 때는 `str()`로 되돌려야 `+`로 문자열과 이을 수 있습니다."
      },
      {
       "t": "tip",
       "text": "이 왔다 갔다 하는 변환이 번거롭죠. 실무에서는 f-문자열을 씁니다: `f\"{name} 님은 올해 {age}살\"`. 교재 범위 밖이지만 알아두면 편합니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "name = input(\"이름> \")\nage = int(input(\"나이> \"))\nprint(name + \" 님은 올해 \" + str(age) + \"살, 내년에는 \" + str(age + 1) + \"살입니다.\")",
     "seed": null,
     "tests": [
      {
       "stdin": [
        "김정미",
        "25"
       ],
       "check": null,
       "label": null,
       "expected": "김정미 님은 올해 25살, 내년에는 26살입니다.",
       "expected_display": "이름> 김정미\n나이> 25\n김정미 님은 올해 25살, 내년에는 26살입니다.\n"
      },
      {
       "stdin": [
        "이상우",
        "40"
       ],
       "check": null,
       "label": null,
       "expected": "이상우 님은 올해 40살, 내년에는 41살입니다.",
       "expected_display": "이름> 이상우\n나이> 40\n이상우 님은 올해 40살, 내년에는 41살입니다.\n"
      }
     ]
    },
    {
     "id": "w3-p7",
     "title": "인덱싱 연습",
     "type": "code",
     "level": 1,
     "tags": [
      "인덱싱"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "문자열 `\"파이썬 프로그래밍\"` 에서 **첫 글자**와 **마지막 글자**를 각각 한 줄씩 출력하세요."
      },
      {
       "t": "out",
       "text": "파\n밍"
      }
     ],
     "hints": [
      "첫 글자의 인덱스는 0 입니다.",
      "마지막 글자는 음수 인덱스 -1 로 간단히 고를 수 있습니다.",
      "print(\"파이썬 프로그래밍\"[0]) 과 print(\"파이썬 프로그래밍\"[-1]) 입니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "제로 인덱스이므로 첫 글자는 `[0]`입니다."
      },
      {
       "t": "p",
       "text": "길이를 몰라도 `[-1]`이면 항상 마지막 글자입니다. 이게 음수 인덱스의 장점입니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "print(\"파이썬 프로그래밍\"[0])\nprint(\"파이썬 프로그래밍\"[-1])",
     "seed": null,
     "tests": [
      {
       "stdin": [],
       "check": null,
       "label": null,
       "expected": "파\n밍",
       "expected_display": "파\n밍\n"
      }
     ]
    },
    {
     "id": "w3-p8",
     "title": "슬라이싱 예측",
     "type": "predict",
     "level": 2,
     "tags": [
      "슬라이싱"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "아래 코드의 실행 결과를 예측하세요. 문자열은 `\"안녕하세요\"` 입니다."
      }
     ],
     "hints": [
      "슬라이싱은 시작은 포함, 끝은 포함하지 않습니다.",
      "s[1:3] 은 1번과 2번 글자입니다. 3번은 빠집니다.",
      "인덱스는 안=0, 녕=1, 하=2, 세=3, 요=4 입니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`s[1:3]`은 1번(녕)과 2번(하)이라 `녕하`입니다."
      },
      {
       "t": "p",
       "text": "`s[:2]`는 0번부터 2번 앞까지라 `안녕`입니다."
      },
      {
       "t": "p",
       "text": "`s[3:]`은 3번부터 끝까지라 `세요`입니다."
      },
      {
       "t": "tip",
       "text": "끝 인덱스에서 시작 인덱스를 빼면 잘라낸 길이가 됩니다. `s[1:3]`은 `3-1=2`글자입니다."
      }
     ],
     "time_limit": 10,
     "code": "s = \"안녕하세요\"\nprint(s[1:3])\nprint(s[:2])\nprint(s[3:])\nprint(len(s))",
     "seed": null,
     "expected": "녕하\n안녕\n세요\n5",
     "display": "녕하\n안녕\n세요\n5\n"
    },
    {
     "id": "w3-p9",
     "title": "가운데 글자 뽑기",
     "type": "code",
     "level": 2,
     "tags": [
      "슬라이싱",
      "len"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "문자열 `\"프로그래밍\"` 에서 **가운데 세 글자**를 출력하세요."
      },
      {
       "t": "out",
       "text": "로그래"
      }
     ],
     "hints": [
      "전체는 5글자이고, 앞뒤로 한 글자씩 빼면 됩니다.",
      "슬라이싱 [시작:끝] 을 쓰세요. 시작은 1번입니다.",
      "끝은 포함되지 않으므로 [1:4] 입니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "인덱스는 프=0, 로=1, 그=2, 래=3, 밍=4 입니다."
      },
      {
       "t": "p",
       "text": "`[1:4]`는 1, 2, 3번이라 `로그래`가 됩니다. 4번(밍)은 끝 미포함 규칙으로 빠집니다."
      },
      {
       "t": "tip",
       "text": "`[1:-1]` 로도 같은 결과가 나옵니다. 길이가 달라져도 앞뒤 한 글자씩 빼는 뜻이라 더 유연합니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "print(\"프로그래밍\"[1:4])",
     "seed": null,
     "tests": [
      {
       "stdin": [],
       "check": null,
       "label": null,
       "expected": "로그래",
       "expected_display": "로그래\n"
      }
     ]
    },
    {
     "id": "w3-p10",
     "title": "오류 찾기 — 문자열",
     "type": "choice",
     "level": 3,
     "tags": [
      "문자열 연산자",
      "오류"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "아래 코드 중 **오류가 발생하는 것**을 고르세요."
      }
     ],
     "hints": [
      "인덱싱과 슬라이싱은 범위를 넘어갔을 때 동작이 다릅니다.",
      "슬라이싱은 범위를 넘어가도 오류가 나지 않고, 있는 만큼만 잘라 줍니다.",
      "\"안녕하세요\"는 5글자입니다. [10]은 존재하지 않는 위치를 하나 콕 집어 요구합니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "③이 `IndexError: string index out of range` 를 냅니다."
      },
      {
       "t": "p",
       "text": "②는 슬라이싱이라 오류가 나지 않고 `하세요`를 출력합니다. 인덱싱과 슬라이싱의 결정적 차이입니다."
      },
      {
       "t": "tip",
       "text": "이 차이는 리스트에서도 똑같이 적용됩니다. 6주차에서 다시 만납니다."
      }
     ],
     "time_limit": 10,
     "options": [
      {
       "text": "①",
       "code": "print(\"안녕하세요\" * 3)"
      },
      {
       "text": "②",
       "code": "print(\"안녕하세요\"[2:100])"
      },
      {
       "text": "③",
       "code": "print(\"안녕하세요\"[10])"
      },
      {
       "text": "④",
       "code": "print(\"안녕\" + \"하세요\")"
      }
     ],
     "answer": 2
    },
    {
     "id": "w3-p11",
     "title": "제곱근의 함정",
     "type": "predict",
     "level": 3,
     "tags": [
      "연산자",
      "우선순위"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "아래 코드의 실행 결과를 예측하세요."
      },
      {
       "t": "p",
       "text": "수학에서 제곱근은 `√x = x^(1/2)` 입니다."
      }
     ],
     "hints": [
      "** 는 / 보다 우선순위가 높습니다.",
      "첫 줄은 (36 ** 1) / 2 로 계산됩니다. 제곱근이 아닙니다.",
      "둘째 줄은 괄호 덕분에 36 ** 0.5 가 되어 진짜 제곱근이 나옵니다. 결과는 실수라 6.0 입니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "첫 줄은 `36 ** 1 = 36`을 먼저 계산한 뒤 `2`로 나눠 `18.0`이 됩니다."
      },
      {
       "t": "p",
       "text": "둘째 줄은 괄호 안 `1/2 = 0.5`가 먼저라 `36 ** 0.5 = 6.0`이 됩니다."
      },
      {
       "t": "warn",
       "text": "수업 실습의 헤론의 공식에서 이 실수가 실제로 나왔습니다.\n`(s*(s-a)*(s-b)*(s-c))**1/2` 라고 쓰면 제곱근이 아니라 그냥 반으로 나누기가 됩니다."
      },
      {
       "t": "tip",
       "text": "헷갈리면 `x ** 0.5` 라고 쓰는 방법도 있습니다."
      }
     ],
     "time_limit": 10,
     "code": "x = 36\nprint(x ** 1/2)\nprint(x ** (1/2))",
     "seed": null,
     "expected": "18.0\n6.0",
     "display": "18.0\n6.0\n"
    },
    {
     "id": "w3-p12",
     "title": "삼각형의 넓이",
     "type": "code",
     "level": 3,
     "tags": [
      "input",
      "형변환"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "밑변과 높이를 입력받아 삼각형의 넓이를 출력하세요."
      },
      {
       "t": "p",
       "text": "프롬프트는 `밑변> `, `높이> ` 이고 출력은 아래 형식입니다."
      },
      {
       "t": "out",
       "text": "넓이 = 10000.0"
      },
      {
       "t": "p",
       "text": "입력값이 `100`, `200`일 때의 결과입니다. 넓이는 `밑변 × 높이 ÷ 2` 입니다."
      }
     ],
     "hints": [
      "밑변과 높이 둘 다 int() 로 바꿔야 합니다. 한쪽만 바꾸면 오류가 납니다.",
      "b = int(input(\"밑변> \")) 처럼 양쪽 모두 감싸세요.",
      "print(\"넓이 =\", b * h / 2) 입니다. / 로 나누면 결과가 실수라 .0 이 붙습니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`/` 로 나누면 결과가 항상 실수라 `10000.0` 처럼 `.0` 이 붙습니다."
      },
      {
       "t": "warn",
       "text": "수업 실습에서 한쪽만 `int()` 를 씌워 오류가 났습니다.\n둘 다 문자열이면 `\"100\" * \"200\"` 이 되어 `can't multiply sequence by non-int of type 'str'`,\n한쪽만 숫자면 문자열 반복이 된 뒤 `/ 2` 에서 오류가 납니다."
      },
      {
       "t": "tip",
       "text": "`//` 를 쓰면 `10000` 처럼 정수로 나옵니다. 문제의 형식에 맞게 골라 쓰세요."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "b = int(input(\"밑변> \"))\nh = int(input(\"높이> \"))\nprint(\"넓이 =\", b * h / 2)",
     "seed": null,
     "tests": [
      {
       "stdin": [
        "100",
        "200"
       ],
       "check": null,
       "label": null,
       "expected": "넓이 = 10000.0",
       "expected_display": "밑변> 100\n높이> 200\n넓이 = 10000.0\n"
      },
      {
       "stdin": [
        "7",
        "4"
       ],
       "check": null,
       "label": null,
       "expected": "넓이 = 14.0",
       "expected_display": "밑변> 7\n높이> 4\n넓이 = 14.0\n"
      }
     ]
    }
   ]
  },
  {
   "id": "week4",
   "no": 4,
   "title": "반복문 · range() · break와 continue",
   "subtitle": "for 반복문, while 반복문, 누적 패턴",
   "concepts": [
    {
     "id": "w4-range",
     "title": "range() — 정수의 범위",
     "blocks": [
      {
       "t": "p",
       "text": "특정 횟수만큼 반복할 때 `for` 반복문과 함께 쓰는 값입니다. 매개변수 개수에 따라 의미가 달라집니다."
      },
      {
       "t": "table",
       "head": [
        "형태",
        "의미",
        "예",
        "결과"
       ],
       "rows": [
        [
         "range(A)",
         "0부터 A-1까지",
         "range(5)",
         "[0, 1, 2, 3, 4]"
        ],
        [
         "range(A, B)",
         "A부터 B-1까지",
         "range(5, 10)",
         "[5, 6, 7, 8, 9]"
        ],
        [
         "range(A, B, C)",
         "A부터 B-1까지 C씩 증가",
         "range(0, 10, 2)",
         "[0, 2, 4, 6, 8]"
        ]
       ]
      },
      {
       "t": "code",
       "code": "print(list(range(5)))\nprint(list(range(5, 10)))\nprint(list(range(0, 10, 2)))\nprint(list(range(0, 10, 3)))",
       "note": "range() 자체는 눈에 보이지 않아서, 확인할 때는 list() 로 감싸 봅니다.",
       "stdin": [],
       "title": null,
       "output": "[0, 1, 2, 3, 4]\n[5, 6, 7, 8, 9]\n[0, 2, 4, 6, 8]\n[0, 3, 6, 9]\n",
       "is_error": false
      },
      {
       "t": "warn",
       "text": "**끝 값은 포함되지 않습니다.** `range(0, 10)`에 `10`은 없습니다.\n`1`부터 `10`까지 반복하려면 `range(1, 11)` 이라고 써야 합니다."
      },
      {
       "t": "p",
       "text": "매개변수 안에 수식을 쓸 수도 있는데, 여기서 자주 실수가 납니다."
      },
      {
       "t": "code",
       "code": "n = 10\na = range(0, n / 2)",
       "note": "TypeError: 'float' object cannot be interpreted as an integer — / 는 실수를 만듭니다.",
       "stdin": [],
       "title": null,
       "output": "",
       "is_error": true,
       "error_text": "Traceback (most recent call last):\n  File \"<내 코드>\", line 2, in <module>\n    a = range(0, n / 2)\nTypeError: 'float' object cannot be interpreted as an integer"
      },
      {
       "t": "code",
       "code": "n = 10\nprint(list(range(0, n // 2)))",
       "note": "정수 나누기 // 를 쓰면 정수가 나와서 정상 동작합니다.",
       "stdin": [],
       "title": null,
       "output": "[0, 1, 2, 3, 4]\n",
       "is_error": false
      },
      {
       "t": "tip",
       "text": "`range()`의 매개변수는 **반드시 정수**여야 합니다. 나눗셈이 들어가면 `//`를 쓰세요."
      }
     ],
     "summary": "range(시작, 끝, 간격) — 끝은 포함 안 됨, 매개변수는 정수만"
    },
    {
     "id": "w4-for",
     "title": "for 반복문",
     "blocks": [
      {
       "t": "p",
       "text": "`for 변수 in 범위:` 형태로 씁니다. 콜론 다음 줄은 **네 칸 들여쓰기**합니다."
      },
      {
       "t": "code",
       "code": "for i in range(5):\n    print(str(i) + \" = 반복 변수\")",
       "note": null,
       "stdin": [],
       "title": null,
       "output": "0 = 반복 변수\n1 = 반복 변수\n2 = 반복 변수\n3 = 반복 변수\n4 = 반복 변수\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "리스트의 요소를 하나씩 꺼내 쓸 수도 있습니다."
      },
      {
       "t": "code",
       "code": "for a in [1, 2, 3, 4, 5]:\n    print(a)",
       "note": null,
       "stdin": [],
       "title": null,
       "output": "1\n2\n3\n4\n5\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "**문자열도 반복할 수 있습니다.** 한 글자씩 꺼내집니다."
      },
      {
       "t": "code",
       "code": "for a in \"Hello\":\n    print(a)",
       "note": "리스트뿐 아니라 문자열도 for 로 하나씩 꺼낼 수 있습니다.",
       "stdin": [],
       "title": null,
       "output": "H\ne\nl\nl\no\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "**몇 번째** 반복인지 알아야 할 때는 `range(len(리스트))`를 씁니다."
      },
      {
       "t": "code",
       "code": "array = [273, 32, 103, 57, 52]\n\nfor i in range(len(array)):\n    print(\"{}번째 반복: {}\".format(i, array[i]))",
       "note": "\"{}\".format(값) 은 {} 자리에 값을 끼워 넣습니다.",
       "stdin": [],
       "title": null,
       "output": "0번째 반복: 273\n1번째 반복: 32\n2번째 반복: 103\n3번째 반복: 57\n4번째 반복: 52\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "**역반복문** — 큰 숫자에서 작은 숫자로 반복하는 두 가지 방법입니다."
      },
      {
       "t": "code",
       "code": "for i in range(4, 0 - 1, -1):\n    print(\"현재 반복 변수: {}\".format(i))\n\nprint()\n\nfor i in reversed(range(5)):\n    print(\"현재 반복 변수: {}\".format(i))",
       "note": "reversed() 쪽이 읽기 쉬워서 더 자주 쓰입니다.",
       "stdin": [],
       "title": null,
       "output": "현재 반복 변수: 4\n현재 반복 변수: 3\n현재 반복 변수: 2\n현재 반복 변수: 1\n현재 반복 변수: 0\n\n현재 반복 변수: 4\n현재 반복 변수: 3\n현재 반복 변수: 2\n현재 반복 변수: 1\n현재 반복 변수: 0\n",
       "is_error": false
      },
      {
       "t": "tip",
       "text": "반복이 끝난 뒤에도 반복 변수에는 **마지막 값**이 남아 있습니다.\nThonny 의 Variables 패널에서 확인할 수 있고, 이 워크북에서도 실행 후 오른쪽에 보입니다."
      }
     ],
     "summary": "for 변수 in 범위: — 리스트와 문자열 모두 반복 가능"
    },
    {
     "id": "w4-accum",
     "title": "누적 패턴 — 합계 구하기",
     "blocks": [
      {
       "t": "p",
       "text": "반복문에서 가장 많이 쓰는 형태입니다.\n**반복 전에 변수를 초기화**하고, **반복 안에서 `+=` 로 더해 갑니다.**"
      },
      {
       "t": "code",
       "code": "total = 0\n\nfor a in range(1, 11):\n    total = total + a\n\nprint(total)",
       "note": "1부터 10까지 더해 55가 나옵니다.",
       "stdin": [],
       "title": null,
       "output": "55\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "나눗셈을 누적할 수도 있습니다."
      },
      {
       "t": "code",
       "code": "total = 0\n\nfor i in range(1, 6):\n    total = total + 1 / i\n\nprint(total)",
       "note": "1/1 + 1/2 + 1/3 + 1/4 + 1/5 을 더한 값입니다.",
       "stdin": [],
       "title": null,
       "output": "2.283333333333333\n",
       "is_error": false
      },
      {
       "t": "warn",
       "text": "**초깃값을 잘 골라야 합니다.**\n더하기를 누적할 때는 `0`, 곱하기를 누적할 때는 `1` 에서 시작합니다.\n곱셈을 `0` 에서 시작하면 무엇을 곱해도 결과가 `0` 입니다."
      },
      {
       "t": "warn",
       "text": "`sum` 은 파이썬이 이미 쓰고 있는 이름입니다. 변수 이름으로 써도 동작은 하지만\n원래 기능을 못 쓰게 되므로 `total` 이나 `sum_value` 처럼 바꿔 쓰는 편이 좋습니다."
      }
     ],
     "summary": "누적 = 초기화 → 반복 안에서 += · 덧셈은 0, 곱셈은 1로 시작"
    },
    {
     "id": "w4-while",
     "title": "while 반복문",
     "blocks": [
      {
       "t": "p",
       "text": "`while`은 **조건이 참인 동안** 반복합니다. 반복 횟수가 정해져 있지 않을 때 씁니다."
      },
      {
       "t": "code",
       "code": "i = 0\nwhile i < 10:\n    print(\"{}번째 반복입니다.\".format(i))\n    i += 1",
       "note": "i += 1 이 없으면 조건이 영원히 참이라 무한 반복에 빠집니다.",
       "stdin": [],
       "title": null,
       "output": "0번째 반복입니다.\n1번째 반복입니다.\n2번째 반복입니다.\n3번째 반복입니다.\n4번째 반복입니다.\n5번째 반복입니다.\n6번째 반복입니다.\n7번째 반복입니다.\n8번째 반복입니다.\n9번째 반복입니다.\n",
       "is_error": false
      },
      {
       "t": "table",
       "head": [
        "연산자",
        "의미",
        "연산자",
        "의미"
       ],
       "rows": [
        [
         "==",
         "~와 같으면",
         "!=",
         "~와 같지 않으면"
        ],
        [
         ">",
         "~보다 크면",
         "<",
         "~보다 작으면"
        ],
        [
         ">=",
         "~보다 크거나 같으면",
         "<=",
         "~보다 작거나 같으면"
        ]
       ]
      },
      {
       "t": "warn",
       "text": "`=`와 `==`는 완전히 다릅니다. `=`는 **값을 넣는** 것이고, `==`는 **같은지 비교**하는 것입니다.\n조건에는 반드시 `==`를 쓰세요."
      },
      {
       "t": "p",
       "text": "`for` 로 쓴 것을 `while` 로 바꿀 수도 있습니다. 수업에서 해 본 방식입니다."
      },
      {
       "t": "code",
       "code": "# for 방식\ntotal = 0\nfor i in range(1, 6):\n    total += 1 / i\nprint(total)\n\n# 같은 일을 while 로\ntotal = 0\ni = 1\nwhile i <= 5:\n    total += 1 / i\n    i = i + 1\nprint(total)",
       "note": "range(1, 6) 과 while i <= 5 가 같은 범위입니다.",
       "stdin": [],
       "title": null,
       "output": "2.283333333333333\n2.283333333333333\n",
       "is_error": false
      },
      {
       "t": "tip",
       "text": "**for 와 while 중 무엇을 쓸까?**\n반복 횟수가 정해져 있으면 `for`, '~할 때까지' 처럼 조건에 달려 있으면 `while` 이 자연스럽습니다."
      }
     ],
     "summary": "while 조건: — 조건이 참인 동안 반복"
    },
    {
     "id": "w4-break",
     "title": "break 와 continue",
     "blocks": [
      {
       "t": "p",
       "text": "`break`는 반복문을 **완전히 빠져나가고**, `continue`는 **이번 회차만 건너뛰고** 다음 반복으로 갑니다."
      },
      {
       "t": "code",
       "code": "i = 0\nwhile True:\n    print(\"{}번째 반복문입니다.\".format(i))\n    i = i + 1\n    if i >= 5:\n        print(\"반복을 종료합니다.\")\n        break",
       "note": "while True: 는 무한 반복입니다. 안에 break 가 반드시 있어야 합니다.",
       "stdin": [],
       "title": null,
       "output": "0번째 반복문입니다.\n1번째 반복문입니다.\n2번째 반복문입니다.\n3번째 반복문입니다.\n4번째 반복문입니다.\n반복을 종료합니다.\n",
       "is_error": false
      },
      {
       "t": "code",
       "code": "numbers = [5, 15, 6, 20, 7, 25]\n\nfor number in numbers:\n    if number < 10:\n        continue\n    print(number)",
       "note": "10보다 작은 수는 건너뛰고, 10 이상만 출력합니다.",
       "stdin": [],
       "title": null,
       "output": "15\n20\n25\n",
       "is_error": false
      },
      {
       "t": "tip",
       "text": "`continue` 없이 `if number >= 10:` 안에 코드를 넣어도 결과는 같습니다.\n하지만 `continue`를 쓰면 **이후 처리의 들여쓰기를 한 단계 줄일 수 있어** 코드가 읽기 편해집니다."
      }
     ],
     "summary": "break 반복 탈출 · continue 이번 회차 건너뛰기"
    }
   ],
   "problems": [
    {
     "id": "w4-p1",
     "title": "range 채우기",
     "type": "predict",
     "level": 1,
     "tags": [
      "range"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "아래 코드의 실행 결과를 예측하세요."
      }
     ],
     "hints": [
      "매개변수가 한 개면 0부터 시작합니다.",
      "끝 값은 포함되지 않습니다. range(4, 6) 은 4와 5뿐입니다.",
      "세 번째 매개변수가 -1 이면 거꾸로 셉니다. 7, 6, 5, ... 1 까지입니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`range(5)`는 `0`부터 `4`까지입니다."
      },
      {
       "t": "p",
       "text": "`range(7, 0, -1)`은 `7`에서 시작해 `1`씩 줄어들고, 끝 값 `0`은 포함하지 않아 `1`에서 멈춥니다."
      },
      {
       "t": "p",
       "text": "`range(3, 10, 3)`은 `3, 6, 9`입니다. 다음은 `12`인데 `10`을 넘어 멈춥니다."
      }
     ],
     "time_limit": 10,
     "code": "print(list(range(5)))\nprint(list(range(4, 6)))\nprint(list(range(7, 0, -1)))\nprint(list(range(3, 10, 3)))",
     "seed": null,
     "expected": "[0, 1, 2, 3, 4]\n[4, 5]\n[7, 6, 5, 4, 3, 2, 1]\n[3, 6, 9]",
     "display": "[0, 1, 2, 3, 4]\n[4, 5]\n[7, 6, 5, 4, 3, 2, 1]\n[3, 6, 9]\n"
    },
    {
     "id": "w4-p2",
     "title": "구구단 한 단",
     "type": "code",
     "level": 1,
     "tags": [
      "for",
      "range"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "`7`단을 출력하세요. `1`부터 `9`까지 곱해야 합니다."
      },
      {
       "t": "out",
       "text": "7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63"
      }
     ],
     "hints": [
      "1부터 9까지 반복하려면 range(1, 10) 입니다. 끝 값은 포함되지 않는 걸 기억하세요.",
      "for i in range(1, 10): 으로 시작하고 다음 줄은 네 칸 들여쓰기합니다.",
      "print(\"7 x\", i, \"=\", 7 * i) 로 출력할 수 있습니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`range(1, 10)`이라 `1`부터 `9`까지 아홉 번 반복합니다."
      },
      {
       "t": "p",
       "text": "반복 변수 `i`가 매 회차마다 다음 값으로 바뀌면서 곱셈에 쓰입니다."
      },
      {
       "t": "tip",
       "text": "`range(1, 9)`로 쓰면 `8`까지만 나옵니다. 끝 값 미포함 규칙에서 나오는 가장 흔한 실수입니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "for i in range(1, 10):\n    print(\"7 x\", i, \"=\", 7 * i)",
     "seed": null,
     "tests": [
      {
       "stdin": [],
       "check": null,
       "label": null,
       "expected": "7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63",
       "expected_display": "7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n"
      }
     ]
    },
    {
     "id": "w4-p3",
     "title": "문자열 한 글자씩",
     "type": "code",
     "level": 1,
     "tags": [
      "for",
      "문자열"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "문자열 `\"Hello\"` 의 각 글자를 한 줄에 하나씩 출력하세요."
      },
      {
       "t": "out",
       "text": "H\ne\nl\nl\no"
      }
     ],
     "hints": [
      "문자열도 for 반복문으로 하나씩 꺼낼 수 있습니다.",
      "for a in \"Hello\": 형태로 씁니다.",
      "반복문 안에서 print(a) 를 하면 됩니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "문자열은 문자를 순서대로 담은 컨테이너와 비슷해서 `for` 로 반복할 수 있습니다."
      },
      {
       "t": "p",
       "text": "반복이 끝난 뒤 `a` 에는 마지막 글자 `'o'` 가 남아 있습니다. 오른쪽 Variables 에서 확인해 보세요."
      },
      {
       "t": "tip",
       "text": "`range(len(\"Hello\"))` 로 인덱스를 돌려도 되지만, 글자 자체가 필요하면 이 방식이 훨씬 간단합니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "for a in \"Hello\":\n    print(a)",
     "seed": null,
     "tests": [
      {
       "stdin": [],
       "check": null,
       "label": null,
       "expected": "H\ne\nl\nl\no",
       "expected_display": "H\ne\nl\nl\no\n"
      }
     ]
    },
    {
     "id": "w4-p4",
     "title": "1부터 100까지 합",
     "type": "code",
     "level": 2,
     "tags": [
      "for",
      "누적"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "`1`부터 `100`까지 모든 정수의 합을 출력하세요."
      },
      {
       "t": "out",
       "text": "5050"
      }
     ],
     "hints": [
      "합을 담을 변수를 먼저 0으로 만들어 두세요. total = 0",
      "반복문 안에서 total += i 로 계속 더합니다.",
      "반복이 모두 끝난 뒤에 print(total) 합니다. 들여쓰기 위치에 주의하세요."
     ],
     "explain": [
      {
       "t": "p",
       "text": "**누적 변수** 패턴입니다. 반복 전에 `0`으로 초기화하고, 반복 안에서 `+=`로 더해 갑니다."
      },
      {
       "t": "warn",
       "text": "`print(total)`을 들여쓰기 안에 넣으면 100번 출력됩니다. 반복이 끝난 뒤 한 번만 출력하려면 들여쓰기를 빼야 합니다."
      },
      {
       "t": "tip",
       "text": "변수 이름을 `sum` 으로 쓰지 마세요. 파이썬이 이미 쓰는 이름입니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "total = 0\nfor i in range(1, 101):\n    total += i\nprint(total)",
     "seed": null,
     "tests": [
      {
       "stdin": [],
       "check": null,
       "label": null,
       "expected": "5050",
       "expected_display": "5050\n"
      }
     ]
    },
    {
     "id": "w4-p5",
     "title": "짝수만 출력",
     "type": "code",
     "level": 2,
     "tags": [
      "continue",
      "for"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "`1`부터 `10`까지 중 **짝수만** 한 줄에 하나씩 출력하세요. 단, `continue`를 사용하세요."
      },
      {
       "t": "out",
       "text": "2\n4\n6\n8\n10"
      }
     ],
     "hints": [
      "짝수는 2로 나눈 나머지가 0인 수입니다. i % 2 == 0",
      "홀수일 때 건너뛰려면 if i % 2 == 1: continue 를 씁니다.",
      "for i in range(1, 11): 안에서 조건에 맞으면 continue, 아니면 print(i) 입니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`continue`를 만나면 그 아래 코드를 실행하지 않고 다음 반복으로 넘어갑니다."
      },
      {
       "t": "p",
       "text": "`if i % 2 == 0: print(i)` 로도 같은 결과가 나옵니다. `continue`는 건너뛸 조건이 여러 개일 때 더 유리합니다."
      },
      {
       "t": "tip",
       "text": "`range(2, 11, 2)`로 아예 짝수만 만들어 반복하는 방법도 있습니다. 조건 검사 자체가 필요 없어집니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "for i in range(1, 11):\n    if i % 2 == 1:\n        continue\n    print(i)",
     "seed": null,
     "tests": [
      {
       "stdin": [],
       "check": null,
       "label": null,
       "expected": "2\n4\n6\n8\n10",
       "expected_display": "2\n4\n6\n8\n10\n"
      }
     ]
    },
    {
     "id": "w4-p6",
     "title": "for 를 while 로 바꾸기",
     "type": "code",
     "level": 2,
     "tags": [
      "while",
      "누적"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "아래 `for` 반복문과 **똑같이 동작하는** 코드를 `while` 로 작성하세요."
      },
      {
       "t": "out",
       "text": "total = 0\nfor i in range(1, 11):\n    total += i\nprint(total)"
      },
      {
       "t": "p",
       "text": "출력 결과는 `55` 입니다."
      }
     ],
     "hints": [
      "먼저 i 를 시작값 1 로 만들어 둡니다.",
      "range(1, 11) 은 1부터 10까지이므로 조건은 while i <= 10: 입니다.",
      "반복문 안에서 total 을 더한 뒤 i = i + 1 로 값을 키워야 합니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`for`는 반복 변수를 자동으로 키워 주지만, `while`은 **직접 키워야** 합니다."
      },
      {
       "t": "p",
       "text": "`range(1, 11)`과 `while i <= 10`이 같은 범위입니다. 끝 값 처리가 어떻게 다른지 보세요."
      },
      {
       "t": "tip",
       "text": "수업에서도 `for` 로 만든 코드를 주석 처리하고 `while` 로 바꿔 보셨습니다. 두 방식을 오가며 연습하면 반복의 구조가 잘 보입니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "total = 0\ni = 1\nwhile i <= 10:\n    total += i\n    i = i + 1\nprint(total)",
     "seed": null,
     "tests": [
      {
       "stdin": [],
       "check": null,
       "label": null,
       "expected": "55",
       "expected_display": "55\n"
      }
     ]
    },
    {
     "id": "w4-p7",
     "title": "몇을 더할 때 10000을 넘는가",
     "type": "code",
     "level": 3,
     "tags": [
      "while",
      "누적"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "`1`부터 숫자를 하나씩 증가시키며 더해 나갈 때, **몇을 더하는 순간 합이 10000을 넘는지** 구하세요."
      },
      {
       "t": "p",
       "text": "그때의 합도 함께 출력합니다. 출력 형식은 아래와 같습니다."
      },
      {
       "t": "out",
       "text": "141를 더할 때 10000을 넘으며 그때의 값은 10011입니다."
      }
     ],
     "hints": [
      "sum 은 파이썬이 이미 쓰는 이름이므로 total 같은 다른 이름을 쓰세요.",
      "i = 1, total = 0 으로 시작해 while total <= 10000: 조건으로 반복합니다.",
      "반복 안에서 total += i 하고 i += 1 합니다. 반복이 끝난 뒤 i는 1 더 커져 있으니 출력할 땐 i - 1 을 쓰세요."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`while`은 반복 횟수를 미리 알 수 없을 때 씁니다. 여기서는 '넘을 때까지'가 조건입니다."
      },
      {
       "t": "p",
       "text": "반복이 끝났을 때 `i`는 이미 한 번 더 증가한 상태라 `i - 1`이 실제로 마지막에 더한 수입니다."
      },
      {
       "t": "warn",
       "text": "교재 슬라이드에는 답이 `142`로 적혀 있지만, `1`부터 `141`까지 더하면 `10011`입니다.\n교재 코드가 `i - 1` 대신 `i`를 출력해서 하나 크게 나온 것입니다.\n`141 × 142 ÷ 2 = 10011` 로 확인할 수 있습니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "limit = 10000\ni = 1\ntotal = 0\n\nwhile total <= limit:\n    total += i\n    i += 1\n\nprint(\"{}를 더할 때 {}을 넘으며 그때의 값은 {}입니다.\".format(i - 1, limit, total))",
     "seed": null,
     "tests": [
      {
       "stdin": [],
       "check": null,
       "label": null,
       "expected": "141를 더할 때 10000을 넘으며 그때의 값은 10011입니다.",
       "expected_display": "141를 더할 때 10000을 넘으며 그때의 값은 10011입니다.\n"
      }
     ]
    },
    {
     "id": "w4-p8",
     "title": "구구단 전체",
     "type": "code",
     "level": 3,
     "tags": [
      "for",
      "중첩 반복문"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "`2`단부터 `4`단까지 출력하세요. 각 단 사이에는 빈 줄을 하나 넣습니다."
      },
      {
       "t": "out",
       "text": "2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n\n3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n\n4 x 1 = 4\n4 x 2 = 8\n4 x 3 = 12"
      },
      {
       "t": "p",
       "text": "곱하는 수는 `1`부터 `3`까지만 합니다. 마지막 단 뒤에도 빈 줄이 하나 있습니다."
      }
     ],
     "hints": [
      "반복문 안에 반복문을 넣는 중첩 반복문이 필요합니다.",
      "바깥은 단(2~4), 안쪽은 곱하는 수(1~3)입니다.",
      "안쪽 반복이 끝난 뒤 print() 를 쓰면 빈 줄이 나옵니다. 들여쓰기는 바깥 반복문 안쪽입니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "중첩 반복문에서는 **안쪽 반복이 전부 끝나야** 바깥 반복이 한 번 진행됩니다."
      },
      {
       "t": "p",
       "text": "`print()`를 인수 없이 부르면 빈 줄이 출력됩니다. 위치가 안쪽 반복문 밖, 바깥 반복문 안이어야 각 단마다 한 번씩 나옵니다."
      },
      {
       "t": "tip",
       "text": "들여쓰기 단계가 곧 소속을 뜻합니다. 여덟 칸은 안쪽 반복문, 네 칸은 바깥 반복문에 속합니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "for dan in range(2, 5):\n    for i in range(1, 4):\n        print(dan, \"x\", i, \"=\", dan * i)\n    print()",
     "seed": null,
     "tests": [
      {
       "stdin": [],
       "check": null,
       "label": null,
       "expected": "2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n\n3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n\n4 x 1 = 4\n4 x 2 = 8\n4 x 3 = 12",
       "expected_display": "2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n\n3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n\n4 x 1 = 4\n4 x 2 = 8\n4 x 3 = 12\n\n"
      }
     ]
    }
   ]
  },
  {
   "id": "week5",
   "no": 5,
   "title": "불 자료형과 조건문",
   "subtitle": "if · elif · else · 논리 연산자 · 중첩 조건문",
   "concepts": [
    {
     "id": "w5-bool",
     "title": "불(bool) 자료형과 비교 연산자",
     "blocks": [
      {
       "t": "p",
       "text": "불은 `True`(참)와 `False`(거짓) 두 값만 가지는 자료형입니다.\n비교 연산자의 결과가 바로 불입니다. **첫 글자는 반드시 대문자**입니다."
      },
      {
       "t": "code",
       "code": "print(10 == 100)\nprint(10 != 100)\nprint(10 < 100)\nprint(10 >= 100)\nprint(type(10 < 100))",
       "note": null,
       "stdin": [],
       "title": null,
       "output": "False\nTrue\nTrue\nFalse\n<class 'bool'>\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "`and`, `or`, `not` 으로 조건을 조합할 수 있습니다."
      },
      {
       "t": "table",
       "head": [
        "연산자",
        "의미",
        "예",
        "결과"
       ],
       "rows": [
        [
         "and",
         "둘 다 참이어야 참",
         "True and False",
         "False"
        ],
        [
         "or",
         "하나만 참이어도 참",
         "True or False",
         "True"
        ],
        [
         "not",
         "참/거짓을 뒤집음",
         "not True",
         "False"
        ]
       ]
      },
      {
       "t": "code",
       "code": "x = 15\nprint(x > 10 and x < 20)\nprint(x < 10 or x > 20)\nprint(not (x == 15))\nprint(x != 15)",
       "note": "not (x == 15) 와 x != 15 는 완전히 같은 뜻입니다.",
       "stdin": [],
       "title": null,
       "output": "True\nFalse\nFalse\nFalse\n",
       "is_error": false
      },
      {
       "t": "tip",
       "text": "파이썬에서는 `10 < x < 20` 처럼 **연달아 비교**할 수 있습니다.\n`x > 10 and x < 20` 과 같은 뜻이면서 훨씬 읽기 좋습니다."
      }
     ],
     "summary": "True/False. == != < > <= >= 와 and or not"
    },
    {
     "id": "w5-if",
     "title": "if 조건문",
     "blocks": [
      {
       "t": "p",
       "text": "`if 조건:` 다음 줄부터 **네 칸 들여쓰기**한 코드는 조건이 참일 때만 실행됩니다."
      },
      {
       "t": "code",
       "code": "a = 10\n\nif a > 0:\n    print(\"0보다 큽니다\")",
       "note": null,
       "stdin": [],
       "title": null,
       "output": "0보다 큽니다\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "조건문의 흐름은 **순서도**로 그려 보면 이해가 쉽습니다.\n값을 준비하고 → 조건을 판단하고(마름모) → 참이면 이쪽, 거짓이면 저쪽으로 갑니다."
      },
      {
       "t": "warn",
       "text": "**IndentationError** — `if` 다음 줄에는 반드시 들여쓰기가 있어야 합니다.\n파이썬은 들여쓰기로 코드의 소속을 판단하므로, 빠뜨리면 오류입니다. 네 칸(스페이스)이 표준입니다."
      },
      {
       "t": "code",
       "code": "if True:\nprint(\"들여쓰기가 없습니다\")",
       "note": "IndentationError: expected an indented block",
       "stdin": [],
       "title": null,
       "output": "",
       "is_error": true,
       "error_text": "  File \"<내 코드>\", line 2\n    print(\"들여쓰기가 없습니다\")\n    ^\nIndentationError: expected an indented block after 'if' statement on line 1"
      },
      {
       "t": "warn",
       "text": "조건 끝의 **콜론(`:`)** 을 빠뜨리면 `SyntaxError` 가 납니다.\n`if`, `elif`, `else`, `for`, `while`, `def` 모두 콜론이 필요합니다.\nThonny 는 이럴 때 \"Did you forget the colon?\" 이라고 알려 주기도 합니다."
      }
     ],
     "summary": "if 조건: — 참일 때만 들여쓴 코드 실행. 콜론과 들여쓰기 필수"
    },
    {
     "id": "w5-else",
     "title": "else 와 elif",
     "blocks": [
      {
       "t": "p",
       "text": "정반대 상황에서 `if`를 두 번 쓰는 것은 낭비입니다.\n`else`를 쓰면 조건 비교를 **단 한 번만** 하므로 두 배 효율적입니다."
      },
      {
       "t": "code",
       "code": "number = int(input(\"정수 입력> \"))\n\nif number % 2 == 0:\n    print(\"짝수입니다\")\nelse:\n    print(\"홀수입니다\")",
       "note": null,
       "stdin": [
        "13"
       ],
       "title": null,
       "output": "정수 입력> 13\n홀수입니다\n",
       "is_error": false
      },
      {
       "t": "warn",
       "text": "**`else` 는 만능이 아닙니다.**\n`if a > 0` 다음에 `else: print(\"0보다 작습니다\")` 라고 쓰면\n`a` 가 `0` 일 때도 \"0보다 작습니다\" 가 나옵니다. 0은 크지도 작지도 않은데 말이죠.\n이럴 때 `elif` 가 필요합니다."
      },
      {
       "t": "code",
       "code": "a = 0\n\nif a > 0:\n    print(\"0보다 큽니다\")\nelif a == 0:\n    print(\"0입니다\")\nelse:\n    print(\"0보다 작습니다\")",
       "note": "elif 를 넣어야 세 가지 경우를 제대로 나눌 수 있습니다.",
       "stdin": [],
       "title": null,
       "output": "0입니다\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "세 개 이상의 조건을 연결할 때는 `elif`를 `if`와 `else` 사이에 넣습니다."
      },
      {
       "t": "code",
       "code": "month = 4\n\nif 3 <= month <= 5:\n    print(\"현재는 봄입니다.\")\nelif 6 <= month <= 8:\n    print(\"현재는 여름입니다.\")\nelif 9 <= month <= 11:\n    print(\"현재는 가을입니다.\")\nelse:\n    print(\"현재는 겨울입니다.\")",
       "note": null,
       "stdin": [],
       "title": null,
       "output": "현재는 봄입니다.\n",
       "is_error": false
      },
      {
       "t": "tip",
       "text": "`elif`는 **위 조건이 모두 거짓일 때만** 검사합니다.\n그래서 위에서 이미 걸러진 조건은 아래에서 다시 쓸 필요가 없습니다.\n`if score >= 90` 다음의 `elif score >= 80` 은 `score < 90` 을 덧붙이지 않아도 됩니다."
      }
     ],
     "summary": "if / elif / else — 위에서부터 검사, 하나만 실행"
    },
    {
     "id": "w5-nested",
     "title": "중첩 조건문과 값 비교하기",
     "blocks": [
      {
       "t": "p",
       "text": "조건문 안에 조건문을 넣을 수 있습니다. 들여쓰기가 소속을 결정합니다."
      },
      {
       "t": "code",
       "code": "a = 10\nb = 20\nc = 30\n\nif a > b:\n    if a > c:\n        print(\"a가 제일 큽니다\")\n    else:\n        print(\"c가 제일 큽니다\")\nelse:\n    if b > c:\n        print(\"b가 제일 큽니다\")\n    else:\n        print(\"c가 제일 큽니다\")",
       "note": "세 수 중 가장 큰 수를 찾습니다. else 를 빠뜨리면 답이 안 나오는 경우가 생깁니다.",
       "stdin": [],
       "title": null,
       "output": "c가 제일 큽니다\n",
       "is_error": false
      },
      {
       "t": "warn",
       "text": "중첩 조건문은 **모든 갈래에 결론이 있어야** 합니다.\n안쪽 `else` 를 빠뜨리면 특정 입력에서 아무것도 출력되지 않습니다.\n위 코드에서 마지막 `else` 를 지우면 `a=1, b=2, c=3` 일 때 출력이 사라집니다."
      },
      {
       "t": "p",
       "text": "수가 많아지면 중첩이 깊어져 실수하기 쉽습니다.\n**둘씩 짝지어 이긴 것끼리 다시 비교하는** 방법이 훨씬 간단합니다."
      },
      {
       "t": "code",
       "code": "a, b, c, d = 10, 20, 30, 5\n\nif a > b:\n    max1 = a\nelse:\n    max1 = b\n\nif c > d:\n    max2 = c\nelse:\n    max2 = d\n\nif max1 > max2:\n    print(\"가장 큰 숫자는\", max1)\nelse:\n    print(\"가장 큰 숫자는\", max2)",
       "note": "토너먼트 방식입니다. 중첩이 없어 읽기 쉽고 실수가 적습니다.",
       "stdin": [],
       "title": null,
       "output": "가장 큰 숫자는 30\n",
       "is_error": false
      },
      {
       "t": "tip",
       "text": "중첩이 두 단계를 넘어가면 `and` / `or` 로 합치거나 위처럼 단계를 나눠 보세요."
      }
     ],
     "summary": "중첩 조건문은 모든 갈래에 결론 필요 · 토너먼트 방식이 더 간단"
    },
    {
     "id": "w5-falsy",
     "title": "False로 변환되는 값",
     "blocks": [
      {
       "t": "p",
       "text": "`if`의 조건에 불이 아닌 값이 오면 자동으로 불로 변환됩니다.\n이때 **False로 변환되는 값**은 다음과 같습니다."
      },
      {
       "t": "ul",
       "items": [
        "`None`",
        "`0`, `0.0`",
        "빈 문자열 `\"\"`",
        "빈 리스트 `[]`, 빈 튜플 `()`, 빈 딕셔너리 `{}`"
       ]
      },
      {
       "t": "p",
       "text": "나머지는 모두 True로 변환됩니다."
      },
      {
       "t": "code",
       "code": "if 0:\n    print(\"0은 True로 변환됩니다\")\nelse:\n    print(\"0은 False로 변환됩니다\")\n\nif \"\":\n    print(\"빈 문자열은 True로 변환됩니다\")\nelse:\n    print(\"빈 문자열은 False로 변환됩니다\")\n\nif \"안녕\":\n    print(\"내용이 있는 문자열은 True입니다\")\n\nif \"False\":\n    print(\"'False' 라는 문자열도 True입니다\")",
       "note": null,
       "stdin": [],
       "title": null,
       "output": "0은 False로 변환됩니다\n빈 문자열은 False로 변환됩니다\n내용이 있는 문자열은 True입니다\n'False' 라는 문자열도 True입니다\n",
       "is_error": false
      },
      {
       "t": "tip",
       "text": "이 성질 덕분에 `if len(리스트) > 0:` 대신 `if 리스트:` 라고 짧게 쓸 수 있습니다.\n'비어 있지 않으면' 이라는 뜻이 됩니다."
      }
     ],
     "summary": "None, 0, 0.0, 빈 문자열, 빈 컨테이너가 False"
    },
    {
     "id": "w5-pass",
     "title": "pass 키워드",
     "blocks": [
      {
       "t": "p",
       "text": "전체 골격만 잡아 두고 내부는 나중에 만들고 싶을 때가 있습니다.\n하지만 `if` 다음을 비워 두면 `IndentationError`가 납니다. 이때 `pass`를 씁니다."
      },
      {
       "t": "code",
       "code": "number = 10\n\nif number > 0:\n    # 양수일 때: 아직 미구현 상태입니다.\n    pass\nelse:\n    # 음수일 때: 아직 미구현 상태입니다.\n    pass\n\nprint(\"프로그램이 정상적으로 끝났습니다\")",
       "note": "pass 는 '아무것도 하지 않는다'는 뜻의 자리 채우기입니다.",
       "stdin": [],
       "title": null,
       "output": "프로그램이 정상적으로 끝났습니다\n",
       "is_error": false
      }
     ],
     "summary": "pass — 아무것도 하지 않고 자리만 채움"
    }
   ],
   "problems": [
    {
     "id": "w5-p1",
     "title": "짝수 홀수 판별",
     "type": "code",
     "level": 1,
     "tags": [
      "if",
      "else"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "정수를 입력받아 짝수인지 홀수인지 출력하세요. 프롬프트는 `정수 입력> ` 입니다."
      },
      {
       "t": "out",
       "text": "홀수입니다"
      },
      {
       "t": "p",
       "text": "입력값이 `13`일 때의 결과입니다. 짝수면 `짝수입니다` 를 출력합니다."
      }
     ],
     "hints": [
      "input() 의 결과는 문자열이므로 int() 로 바꿔야 계산할 수 있습니다.",
      "짝수는 2로 나눈 나머지가 0입니다. number % 2 == 0",
      "if 로 짝수를 검사하고, else 로 나머지 경우를 처리합니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`%`는 나머지 연산자입니다. `2`로 나눈 나머지는 `0` 아니면 `1`뿐입니다."
      },
      {
       "t": "p",
       "text": "`else`를 쓰면 조건을 한 번만 검사합니다. `if number % 2 == 1:` 을 또 쓰는 것보다 효율적입니다."
      },
      {
       "t": "warn",
       "text": "`=`와 `==`를 혼동하지 마세요. 조건에는 `==`입니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "number = int(input(\"정수 입력> \"))\n\nif number % 2 == 0:\n    print(\"짝수입니다\")\nelse:\n    print(\"홀수입니다\")",
     "seed": null,
     "tests": [
      {
       "stdin": [
        "13"
       ],
       "check": null,
       "label": null,
       "expected": "홀수입니다",
       "expected_display": "정수 입력> 13\n홀수입니다\n"
      },
      {
       "stdin": [
        "4"
       ],
       "check": null,
       "label": null,
       "expected": "짝수입니다",
       "expected_display": "정수 입력> 4\n짝수입니다\n"
      },
      {
       "stdin": [
        "0"
       ],
       "check": null,
       "label": null,
       "expected": "짝수입니다",
       "expected_display": "정수 입력> 0\n짝수입니다\n"
      }
     ]
    },
    {
     "id": "w5-p2",
     "title": "0을 빠뜨리지 않기",
     "type": "code",
     "level": 2,
     "tags": [
      "elif"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "정수를 입력받아 **양수 / 0 / 음수** 를 구분해 출력하세요. 프롬프트는 `정수 입력> ` 입니다."
      },
      {
       "t": "p",
       "text": "출력은 각각 `0보다 큽니다`, `0입니다`, `0보다 작습니다` 로 하세요."
      },
      {
       "t": "out",
       "text": "0입니다"
      },
      {
       "t": "p",
       "text": "입력값이 `0`일 때의 결과입니다."
      }
     ],
     "hints": [
      "if 와 else 만으로는 세 가지를 나눌 수 없습니다.",
      "if 와 else 사이에 elif 를 넣으세요.",
      "if number > 0: / elif number == 0: / else: 순서입니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`if / else` 만 쓰면 경우가 두 가지뿐이라 `0` 이 어느 한쪽으로 잘못 분류됩니다."
      },
      {
       "t": "p",
       "text": "수업 실습에서도 `if a > 0 / else` 만 있어서 `0` 이 \"0보다 작습니다\" 로 나왔습니다."
      },
      {
       "t": "tip",
       "text": "경우의 수를 셀 때 **경계값**을 꼭 확인하세요. 0, 최솟값, 최댓값에서 실수가 자주 납니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "number = int(input(\"정수 입력> \"))\n\nif number > 0:\n    print(\"0보다 큽니다\")\nelif number == 0:\n    print(\"0입니다\")\nelse:\n    print(\"0보다 작습니다\")",
     "seed": null,
     "tests": [
      {
       "stdin": [
        "0"
       ],
       "check": null,
       "label": null,
       "expected": "0입니다",
       "expected_display": "정수 입력> 0\n0입니다\n"
      },
      {
       "stdin": [
        "10"
       ],
       "check": null,
       "label": null,
       "expected": "0보다 큽니다",
       "expected_display": "정수 입력> 10\n0보다 큽니다\n"
      },
      {
       "stdin": [
        "-5"
       ],
       "check": null,
       "label": null,
       "expected": "0보다 작습니다",
       "expected_display": "정수 입력> -5\n0보다 작습니다\n"
      }
     ]
    },
    {
     "id": "w5-p3",
     "title": "중첩 조건문 예측",
     "type": "predict",
     "level": 2,
     "tags": [
      "if",
      "중첩"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "아래 코드의 실행 결과를 예측하세요."
      }
     ],
     "hints": [
      "가장 바깥 조건부터 검사합니다. x는 2인데 4보다 큰가요?",
      "바깥 조건이 거짓이면 안쪽 if 는 아예 실행되지 않습니다.",
      "else 는 바깥 if 와 짝입니다. 들여쓰기 위치를 보세요."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`x > 4`가 거짓이므로 안쪽 `if`는 건너뛰고 `else`로 갑니다."
      },
      {
       "t": "p",
       "text": "`else`는 들여쓰기 위치로 보아 **바깥 `if`의 짝**입니다. 그래서 `x + y = 12`가 출력됩니다."
      },
      {
       "t": "tip",
       "text": "들여쓰기가 `else`의 소속을 결정합니다. 안쪽 `if`와 짝이 되려면 네 칸 더 들여써야 합니다."
      }
     ],
     "time_limit": 10,
     "code": "x = 2\ny = 10\n\nif x > 4:\n    if y > 2:\n        print(x * y)\nelse:\n    print(x + y)",
     "seed": null,
     "expected": "12",
     "display": "12\n"
    },
    {
     "id": "w5-p4",
     "title": "학점 판정",
     "type": "code",
     "level": 2,
     "tags": [
      "elif"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "점수를 입력받아 학점을 출력하세요. 프롬프트는 `점수> ` 입니다."
      },
      {
       "t": "p",
       "text": "`90` 이상 A, `80` 이상 B, `70` 이상 C, 그 미만은 F 입니다."
      },
      {
       "t": "out",
       "text": "B"
      },
      {
       "t": "p",
       "text": "입력값이 `85`일 때의 결과입니다."
      }
     ],
     "hints": [
      "int() 로 숫자를 만든 뒤, 큰 값부터 차례로 검사하세요.",
      "if score >= 90: 으로 시작하고 elif 로 이어 갑니다.",
      "elif 는 위 조건이 거짓일 때만 검사하므로, elif score >= 80: 만 써도 됩니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`elif`는 위에서부터 순서대로 검사하고, **처음 참이 되는 하나만** 실행합니다."
      },
      {
       "t": "p",
       "text": "`85`는 `>= 90`이 거짓이라 다음으로 넘어가고, `>= 80`이 참이라 B가 출력된 뒤 나머지는 검사하지 않습니다."
      },
      {
       "t": "warn",
       "text": "순서를 뒤집어 `>= 70`을 먼저 쓰면 `85`도 C가 됩니다. **큰 값부터** 검사해야 합니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "score = int(input(\"점수> \"))\n\nif score >= 90:\n    print(\"A\")\nelif score >= 80:\n    print(\"B\")\nelif score >= 70:\n    print(\"C\")\nelse:\n    print(\"F\")",
     "seed": null,
     "tests": [
      {
       "stdin": [
        "85"
       ],
       "check": null,
       "label": null,
       "expected": "B",
       "expected_display": "점수> 85\nB\n"
      },
      {
       "stdin": [
        "90"
       ],
       "check": null,
       "label": null,
       "expected": "A",
       "expected_display": "점수> 90\nA\n"
      },
      {
       "stdin": [
        "70"
       ],
       "check": null,
       "label": null,
       "expected": "C",
       "expected_display": "점수> 70\nC\n"
      },
      {
       "stdin": [
        "55"
       ],
       "check": null,
       "label": null,
       "expected": "F",
       "expected_display": "점수> 55\nF\n"
      }
     ]
    },
    {
     "id": "w5-p5",
     "title": "논리 연산자로 합치기",
     "type": "code",
     "level": 2,
     "tags": [
      "논리 연산자"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "아래 중첩 조건문과 **똑같이 동작하는** 코드를 `if` 하나로 만드세요."
      },
      {
       "t": "out",
       "text": "if x > 10:\n    if x < 20:\n        print(\"조건에 맞습니다.\")"
      },
      {
       "t": "p",
       "text": "`x = 15` 로 두고 작성하세요."
      }
     ],
     "hints": [
      "두 조건이 모두 참이어야 하므로 and 를 씁니다.",
      "if x > 10 and x < 20: 으로 합칠 수 있습니다.",
      "파이썬에서는 10 < x < 20 처럼 연달아 쓰는 방법이 더 깔끔합니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "중첩 `if`는 '둘 다 참일 때'라는 뜻이므로 `and`로 합칠 수 있습니다."
      },
      {
       "t": "p",
       "text": "파이썬은 `10 < x < 20` 같은 연쇄 비교를 지원합니다. 수학 표기와 같아서 읽기 쉽습니다."
      },
      {
       "t": "tip",
       "text": "들여쓰기 단계가 줄어들면 코드가 훨씬 읽기 편해집니다. 중첩이 깊어지면 합칠 수 있는지 살펴보세요."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "x = 15\n\nif 10 < x < 20:\n    print(\"조건에 맞습니다.\")",
     "seed": null,
     "tests": [
      {
       "stdin": [],
       "check": null,
       "label": null,
       "expected": "조건에 맞습니다.",
       "expected_display": "조건에 맞습니다.\n"
      }
     ]
    },
    {
     "id": "w5-p6",
     "title": "False로 변환되는 값",
     "type": "choice",
     "level": 2,
     "tags": [
      "불"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "아래 값 중 `if` 조건에서 **True로 변환되는 것**을 고르세요."
      }
     ],
     "hints": [
      "False로 변환되는 값은 None, 0, 0.0, 빈 문자열, 빈 컨테이너입니다.",
      "\"False\" 는 빈 문자열인가요? 따옴표 안에 글자가 다섯 개 있습니다.",
      "내용이 있는 문자열은 그 내용이 무엇이든 True 입니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "③의 `\"False\"`는 **글자가 들어 있는 문자열**이라 True로 변환됩니다."
      },
      {
       "t": "p",
       "text": "불 값 `False`와 문자열 `\"False\"`는 완전히 다릅니다. 따옴표가 있으면 그냥 글자입니다."
      },
      {
       "t": "warn",
       "text": "`input()`의 결과는 항상 문자열이라 `if input():` 은 사용자가 그냥 엔터만 치지 않는 한 언제나 True입니다."
      }
     ],
     "time_limit": 10,
     "options": [
      {
       "text": "①",
       "code": "if 0:"
      },
      {
       "text": "②",
       "code": "if \"\":"
      },
      {
       "text": "③",
       "code": "if \"False\":"
      },
      {
       "text": "④",
       "code": "if []:"
      }
     ],
     "answer": 2
    },
    {
     "id": "w5-p7",
     "title": "네 수 중 가장 큰 수",
     "type": "code",
     "level": 3,
     "tags": [
      "if",
      "비교"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "네 개의 숫자를 입력받아 **가장 큰 수**를 출력하세요."
      },
      {
       "t": "p",
       "text": "프롬프트는 순서대로 `첫번째> `, `두번째> `, `세번째> `, `네번째> ` 입니다."
      },
      {
       "t": "out",
       "text": "가장 큰 숫자는 30"
      },
      {
       "t": "p",
       "text": "입력값이 `10`, `20`, `30`, `5` 일 때의 결과입니다."
      }
     ],
     "hints": [
      "중첩 if 로 모든 경우를 따지면 아주 복잡해집니다.",
      "둘씩 짝지어 비교하세요. a와 b 중 큰 것을 max1, c와 d 중 큰 것을 max2 에 담습니다.",
      "마지막에 max1 과 max2 를 비교하면 됩니다. print(\"가장 큰 숫자는\", ...) 형식입니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "**토너먼트 방식**입니다. 둘씩 짝지어 이긴 것끼리 다시 비교합니다."
      },
      {
       "t": "p",
       "text": "중첩 `if` 로 모든 경우를 따지는 것보다 훨씬 단순하고 실수가 적습니다."
      },
      {
       "t": "tip",
       "text": "이 문제는 네 가지 입력으로 채점합니다. 음수만 넣은 경우도 있으니 특정 값에만 맞는 코드는 통과하지 못합니다."
      },
      {
       "t": "tip",
       "text": "파이썬에는 `max(a, b, c, d)` 라는 내장 함수가 있습니다. 다만 지금은 조건문 연습이므로 직접 만들어 보세요."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "a = int(input(\"첫번째> \"))\nb = int(input(\"두번째> \"))\nc = int(input(\"세번째> \"))\nd = int(input(\"네번째> \"))\n\nif a > b:\n    max1 = a\nelse:\n    max1 = b\n\nif c > d:\n    max2 = c\nelse:\n    max2 = d\n\nif max1 > max2:\n    print(\"가장 큰 숫자는\", max1)\nelse:\n    print(\"가장 큰 숫자는\", max2)",
     "seed": null,
     "tests": [
      {
       "stdin": [
        "10",
        "20",
        "30",
        "5"
       ],
       "check": null,
       "label": null,
       "expected": "가장 큰 숫자는 30",
       "expected_display": "첫번째> 10\n두번째> 20\n세번째> 30\n네번째> 5\n가장 큰 숫자는 30\n"
      },
      {
       "stdin": [
        "100",
        "2",
        "3",
        "4"
       ],
       "check": null,
       "label": null,
       "expected": "가장 큰 숫자는 100",
       "expected_display": "첫번째> 100\n두번째> 2\n세번째> 3\n네번째> 4\n가장 큰 숫자는 100\n"
      },
      {
       "stdin": [
        "1",
        "2",
        "3",
        "400"
       ],
       "check": null,
       "label": null,
       "expected": "가장 큰 숫자는 400",
       "expected_display": "첫번째> 1\n두번째> 2\n세번째> 3\n네번째> 400\n가장 큰 숫자는 400\n"
      },
      {
       "stdin": [
        "-5",
        "-1",
        "-9",
        "-3"
       ],
       "check": null,
       "label": null,
       "expected": "가장 큰 숫자는 -1",
       "expected_display": "첫번째> -5\n두번째> -1\n세번째> -9\n네번째> -3\n가장 큰 숫자는 -1\n"
      }
     ]
    },
    {
     "id": "w5-p8",
     "title": "성적 등급 매기기",
     "type": "code",
     "level": 3,
     "tags": [
      "elif",
      "논리 연산자"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "국어, 영어, 수학 점수를 입력받아 **평균**으로 등급을 매기세요."
      },
      {
       "t": "p",
       "text": "프롬프트는 `국어> `, `영어> `, `수학> ` 입니다."
      },
      {
       "t": "p",
       "text": "평균 `80` 이상이면 `매우잘함`, `60` 이상이면 `잘함`, `40` 이상이면 `보통`, 그 미만은 `못함` 입니다."
      },
      {
       "t": "out",
       "text": "평균 = 90.0\n매우잘함"
      },
      {
       "t": "p",
       "text": "입력값이 `100`, `90`, `80` 일 때의 결과입니다. 평균을 먼저 출력하세요."
      }
     ],
     "hints": [
      "세 점수를 int() 로 받아 더한 뒤 3 으로 나눕니다.",
      "print(\"평균 =\", avg) 로 평균을 먼저 출력하세요. / 로 나누면 실수가 됩니다.",
      "그다음 if avg >= 80: / elif avg >= 60: / elif avg >= 40: / else: 로 등급을 나눕니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`elif` 는 위 조건이 거짓일 때만 검사하므로 큰 값부터 차례로 쓰면 됩니다."
      },
      {
       "t": "p",
       "text": "수업에서는 `(avg <= 100) and (avg >= 80)` 처럼 위아래를 모두 적으셨는데, 큰 값부터 검사하면 위쪽 조건은 생략할 수 있습니다."
      },
      {
       "t": "tip",
       "text": "평균은 `/` 로 나누므로 항상 실수입니다. 그래서 `90.0` 처럼 `.0` 이 붙습니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "kor = int(input(\"국어> \"))\neng = int(input(\"영어> \"))\nmat = int(input(\"수학> \"))\n\navg = (kor + eng + mat) / 3\nprint(\"평균 =\", avg)\n\nif avg >= 80:\n    print(\"매우잘함\")\nelif avg >= 60:\n    print(\"잘함\")\nelif avg >= 40:\n    print(\"보통\")\nelse:\n    print(\"못함\")",
     "seed": null,
     "tests": [
      {
       "stdin": [
        "100",
        "90",
        "80"
       ],
       "check": null,
       "label": null,
       "expected": "평균 = 90.0\n매우잘함",
       "expected_display": "국어> 100\n영어> 90\n수학> 80\n평균 = 90.0\n매우잘함\n"
      },
      {
       "stdin": [
        "70",
        "60",
        "50"
       ],
       "check": null,
       "label": null,
       "expected": "평균 = 60.0\n잘함",
       "expected_display": "국어> 70\n영어> 60\n수학> 50\n평균 = 60.0\n잘함\n"
      },
      {
       "stdin": [
        "40",
        "40",
        "40"
       ],
       "check": null,
       "label": null,
       "expected": "평균 = 40.0\n보통",
       "expected_display": "국어> 40\n영어> 40\n수학> 40\n평균 = 40.0\n보통\n"
      },
      {
       "stdin": [
        "10",
        "20",
        "30"
       ],
       "check": null,
       "label": null,
       "expected": "평균 = 20.0\n못함",
       "expected_display": "국어> 10\n영어> 20\n수학> 30\n평균 = 20.0\n못함\n"
      }
     ]
    }
   ]
  },
  {
   "id": "week6",
   "no": 6,
   "title": "컨테이너 자료형",
   "subtitle": "리스트 · 딕셔너리(사전) · 튜플",
   "concepts": [
    {
     "id": "w6-container",
     "title": "컨테이너 자료형과 괄호",
     "blocks": [
      {
       "t": "p",
       "text": "지금까지 배운 자료형은 문자열, 정수, 실수처럼 값을 **하나**만 담습니다.\n**컨테이너**는 데이터를 한 개 이상 저장할 수 있는 자료형입니다."
      },
      {
       "t": "table",
       "head": [
        "괄호",
        "자료형",
        "예",
        "특징"
       ],
       "rows": [
        [
         "[대괄호]",
         "리스트 (list)",
         "[\"one\", \"two\"]",
         "내용 변경 가능"
        ],
        [
         "{중괄호}",
         "사전 (dict)",
         "{1: \"고양이\"}",
         "키로 값을 찾음"
        ],
        [
         "(소괄호)",
         "튜플 (tuple)",
         "(\"one\", \"two\")",
         "내용 변경 불가"
        ]
       ]
      },
      {
       "t": "p",
       "text": "문자열도 문자를 순서대로 저장하는 컨테이너와 비슷합니다.\n그래서 인덱싱과 슬라이싱이 리스트와 똑같이 동작합니다."
      },
      {
       "t": "tip",
       "text": "괄호 모양만 봐도 어떤 자료형인지 알 수 있습니다. 이게 파이썬에서 괄호를 구분해 쓰는 이유입니다."
      }
     ],
     "summary": "[] 리스트 · {} 사전 · () 튜플"
    },
    {
     "id": "w6-list",
     "title": "리스트",
     "blocks": [
      {
       "t": "p",
       "text": "리스트는 여러 값을 순서대로 저장하며, **내용을 바꿀 수 있습니다.**"
      },
      {
       "t": "code",
       "code": "my_list = [\"one\", \"two\", \"three\", \"four\"]\n\nprint(my_list)\nprint(my_list[0])\nprint(my_list[-1])\nprint(len(my_list))\nprint(my_list[1:3])",
       "note": "인덱싱과 슬라이싱은 문자열과 완전히 같은 규칙입니다.",
       "stdin": [],
       "title": null,
       "output": "['one', 'two', 'three', 'four']\none\nfour\n4\n['two', 'three']\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "**한 리스트 안에 자료형을 섞어** 담을 수도 있습니다. 다만 연산할 때 주의해야 합니다."
      },
      {
       "t": "code",
       "code": "a = [1, 2, 3, 4, 5, \"life\", \"love\", \"hate\"]\n\nprint(a[0])\nprint(a[7])\nprint(a[0] + a[1])",
       "note": "0번은 숫자, 7번은 문자열입니다.",
       "stdin": [],
       "title": null,
       "output": "1\nhate\n3\n",
       "is_error": false
      },
      {
       "t": "code",
       "code": "a = [1, 2, 3, 4, 5, \"life\", \"love\", \"hate\"]\nprint(a[0] + a[7])",
       "note": "숫자와 문자열을 더하려 해서 TypeError 가 납니다.",
       "stdin": [],
       "title": null,
       "output": "",
       "is_error": true,
       "error_text": "Traceback (most recent call last):\n  File \"<내 코드>\", line 2, in <module>\n    print(a[0] + a[7])\nTypeError: unsupported operand type(s) for +: 'int' and 'str'"
      },
      {
       "t": "code",
       "code": "a = [1, 2, 3, 4, 5, \"life\", \"love\", \"hate\"]\nprint(str(a[4]) + a[7])",
       "note": "str() 로 숫자를 문자열로 바꾸면 이어 붙일 수 있습니다.",
       "stdin": [],
       "title": null,
       "output": "5hate\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "리스트를 다루는 주요 함수들입니다."
      },
      {
       "t": "table",
       "head": [
        "함수",
        "의미",
        "예"
       ],
       "rows": [
        [
         "append(값)",
         "맨 뒤에 추가",
         "a.append(10)"
        ],
        [
         "insert(위치, 값)",
         "지정 위치에 삽입",
         "a.insert(0, 10)"
        ],
        [
         "extend([...])",
         "여러 개를 한 번에 추가",
         "a.extend([10, 200])"
        ],
        [
         "remove(값)",
         "그 값을 하나 삭제",
         "a.remove(10)"
        ],
        [
         "pop()",
         "마지막 값을 꺼내며 삭제",
         "a.pop()"
        ],
        [
         "index(값)",
         "그 값의 위치를 반환",
         "a.index(10)"
        ],
        [
         "count(값)",
         "그 값의 개수를 셈",
         "a.count(10)"
        ],
        [
         "sort()",
         "오름차순 정렬",
         "a.sort()"
        ],
        [
         "reverse()",
         "순서를 뒤집음",
         "a.reverse()"
        ]
       ]
      },
      {
       "t": "code",
       "code": "a = [3, 1, 2]\n\na.append(5)\nprint(a)\n\na.insert(0, 100)\nprint(a)\n\na.sort()\nprint(a)\n\na.reverse()\nprint(a)\n\na.remove(2)\nprint(a)",
       "note": null,
       "stdin": [],
       "title": null,
       "output": "[3, 1, 2, 5]\n[100, 3, 1, 2, 5]\n[1, 2, 3, 5, 100]\n[100, 5, 3, 2, 1]\n[100, 5, 3, 1]\n",
       "is_error": false
      },
      {
       "t": "warn",
       "text": "`append(값)` 은 인수가 **하나**지만 `insert(위치, 값)` 은 **둘**입니다.\n`a.insert(0)` 처럼 하나만 주면 `TypeError` 가 납니다."
      },
      {
       "t": "warn",
       "text": "`sort()`와 `reverse()`는 **원본을 직접 바꾸고 아무것도 돌려주지 않습니다.**\n`a = a.sort()` 라고 쓰면 `a`가 `None`이 되어 버립니다. 그냥 `a.sort()` 라고만 쓰세요."
      },
      {
       "t": "warn",
       "text": "슬라이드에는 뒤집기가 `revers()` 로 적혀 있는데 **`e` 가 빠진 오타**입니다.\n올바른 이름은 `reverse()` 이고, 오타로 부르면 `AttributeError` 가 납니다."
      }
     ],
     "summary": "리스트 = 순서 있고 변경 가능. append/insert/sort/reverse"
    },
    {
     "id": "w6-list2",
     "title": "슬라이스 대입과 중첩 리스트",
     "blocks": [
      {
       "t": "p",
       "text": "슬라이싱으로 **여러 자리를 한 번에** 바꿀 수 있습니다."
      },
      {
       "t": "code",
       "code": "b = [6, 7, 8, 9, 10]\n\nb[0] = 100\nprint(b)\n\nb[0:2] = [200, 200]\nprint(b)",
       "note": "[0:2] 는 0번과 1번 두 자리입니다. 그 자리를 통째로 바꿉니다.",
       "stdin": [],
       "title": null,
       "output": "[100, 7, 8, 9, 10]\n[200, 200, 8, 9, 10]\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "리스트 안에 리스트를 넣을 수도 있습니다. **중첩 리스트**라고 합니다."
      },
      {
       "t": "code",
       "code": "c = []\nd = [1, 2, [3, 4, 5, 6, 7]]\n\nprint(c)\nprint(d)\nprint(d[2])\nprint(d[2][1])\nprint(len(d))",
       "note": "d[2] 가 안쪽 리스트이고, d[2][1] 은 그 안의 1번 값입니다.",
       "stdin": [],
       "title": null,
       "output": "[]\n[1, 2, [3, 4, 5, 6, 7]]\n[3, 4, 5, 6, 7]\n4\n3\n",
       "is_error": false
      },
      {
       "t": "tip",
       "text": "`len(d)` 는 `3` 입니다. 안쪽 리스트는 통째로 **하나**로 셉니다."
      },
      {
       "t": "p",
       "text": "리스트도 `+` 와 `*` 를 쓸 수 있습니다."
      },
      {
       "t": "code",
       "code": "a = [1, 2]\nb = [3, 4]\n\nprint(a + b)\nprint(a * 3)",
       "note": null,
       "stdin": [],
       "title": null,
       "output": "[1, 2, 3, 4]\n[1, 2, 1, 2, 1, 2]\n",
       "is_error": false
      }
     ],
     "summary": "b[0:2] = [...] 로 여러 자리 교체 · d[2][1] 로 중첩 접근"
    },
    {
     "id": "w6-dict",
     "title": "사전 (딕셔너리)",
     "blocks": [
      {
       "t": "p",
       "text": "사전은 위치가 아니라 **키(key)** 로 값을 찾습니다.\n중괄호로 만들고, 키와 값을 **콜론**으로 구분합니다."
      },
      {
       "t": "code",
       "code": "my_dictionary = {1: \"고양이\", 2: \"개\", 3: \"말\", 4: \"물고기\"}\n\nprint(my_dictionary)\nprint(my_dictionary[2])\nprint(my_dictionary.get(3))",
       "note": "키에는 문자열, 정수, 실수, 튜플을 쓸 수 있습니다.",
       "stdin": [],
       "title": null,
       "output": "{1: '고양이', 2: '개', 3: '말', 4: '물고기'}\n개\n말\n",
       "is_error": false
      },
      {
       "t": "warn",
       "text": "**키의 자료형이 다르면 다른 키입니다.**\n`{1: \"고양이\"}` 의 키는 정수 `1` 이고, `{\"1\": \"고양이\"}` 의 키는 문자열 `\"1\"` 입니다.\n전자는 `d[1]`, 후자는 `d[\"1\"]` 로 꺼내야 합니다."
      },
      {
       "t": "p",
       "text": "한 사전 안에 서로 다른 자료형의 키를 섞을 수도 있습니다."
      },
      {
       "t": "code",
       "code": "a = {1: \"one\", \"name\": \"hong\", 7: \"seven\"}\n\nprint(a[1])\nprint(a[\"name\"])\n\na[8] = \"eight\"\nprint(a)\n\ndel a[7]\nprint(a)",
       "note": "새 키에 값을 넣으면 추가되고, del 로 지웁니다.",
       "stdin": [],
       "title": null,
       "output": "one\nhong\n{1: 'one', 'name': 'hong', 7: 'seven', 8: 'eight'}\n{1: 'one', 'name': 'hong', 8: 'eight'}\n",
       "is_error": false
      },
      {
       "t": "table",
       "head": [
        "함수",
        "의미"
       ],
       "rows": [
        [
         "keys()",
         "키 목록"
        ],
        [
         "values()",
         "값 목록"
        ],
        [
         "items()",
         "키와 값의 쌍 목록"
        ],
        [
         "get(키)",
         "키로 값 얻기 (없으면 None)"
        ],
        [
         "in",
         "해당 키가 있는지 검사"
        ],
        [
         "clear()",
         "모두 지우기"
        ]
       ]
      },
      {
       "t": "code",
       "code": "character = {\"name\": \"기사\", \"hp\": 200, \"level\": 5}\n\nprint(list(character.keys()))\nprint(list(character.values()))\n\nfor key in character:\n    print(key, \":\", character[key])",
       "note": "for 로 반복하면 키가 하나씩 나옵니다.",
       "stdin": [],
       "title": null,
       "output": "['name', 'hp', 'level']\n['기사', 200, 5]\nname : 기사\nhp : 200\nlevel : 5\n",
       "is_error": false
      },
      {
       "t": "warn",
       "text": "슬라이드에 나온 **`has_key()` 는 파이썬 3 에서 없어졌습니다.**\n파이썬 2 에서만 쓰던 함수라 지금 쓰면 `AttributeError` 가 납니다.\n키가 있는지 확인할 때는 **`in`** 을 쓰세요."
      },
      {
       "t": "code",
       "code": "a = {\"name\": \"hong\"}\n\nif \"name\" in a:\n    print(\"name 키가 있습니다:\", a[\"name\"])\n\nprint(a.get(\"없는키\"))\nprint(a[\"없는키\"])",
       "note": "get() 은 없는 키에 None 을 주지만, [] 는 KeyError 를 냅니다.",
       "stdin": [],
       "title": null,
       "output": "name 키가 있습니다: hong\nNone\n",
       "is_error": true,
       "error_text": "Traceback (most recent call last):\n  File \"<내 코드>\", line 7, in <module>\n    print(a[\"없는키\"])\nKeyError: '없는키'"
      }
     ],
     "summary": "사전 = {키: 값}. 키로 찾고, 확인은 in, 안전하게 꺼내려면 get()"
    },
    {
     "id": "w6-tuple",
     "title": "튜플",
     "blocks": [
      {
       "t": "p",
       "text": "튜플은 리스트와 비슷하지만 **한 번 만들면 내용을 바꿀 수 없습니다.**\n소괄호로 만들고 값은 콤마로 구분합니다."
      },
      {
       "t": "code",
       "code": "my_tuple = (\"one\", \"two\", \"three\", \"four\")\n\nprint(my_tuple)\nprint(my_tuple[1])\nprint(my_tuple[1:])\nprint(my_tuple + (\"five\",))\nprint(my_tuple * 2)\nprint(len(my_tuple))",
       "note": "슬라이싱, 더하기, 곱하기, 길이 구하기는 모두 가능합니다.",
       "stdin": [],
       "title": null,
       "output": "('one', 'two', 'three', 'four')\ntwo\n('two', 'three', 'four')\n('one', 'two', 'three', 'four', 'five')\n('one', 'two', 'three', 'four', 'one', 'two', 'three', 'four')\n4\n",
       "is_error": false
      },
      {
       "t": "code",
       "code": "my_tuple = (\"one\", \"two\")\nmy_tuple[0] = \"zero\"",
       "note": "TypeError — 튜플은 항목을 바꿀 수 없습니다.",
       "stdin": [],
       "title": null,
       "output": "",
       "is_error": true,
       "error_text": "Traceback (most recent call last):\n  File \"<내 코드>\", line 2, in <module>\n    my_tuple[0] = \"zero\"\nTypeError: 'tuple' object does not support item assignment"
      },
      {
       "t": "ul",
       "items": [
        "메모리에서 빠르게 동작합니다",
        "다른 코드가 실수로 값을 바꿀 수 없어 안전합니다",
        "삽입·삭제는 불가능하지만 슬라이싱·연결·반복·길이 구하기는 가능합니다"
       ]
      },
      {
       "t": "warn",
       "text": "값이 하나뿐인 튜플은 `(\"one\",)` 처럼 **콤마를 붙여야** 합니다.\n`(\"one\")` 은 그냥 괄호로 감싼 문자열입니다."
      },
      {
       "t": "code",
       "code": "a = (\"one\",)\nb = (\"one\")\n\nprint(type(a), a)\nprint(type(b), b)",
       "note": null,
       "stdin": [],
       "title": null,
       "output": "<class 'tuple'> ('one',)\n<class 'str'> one\n",
       "is_error": false
      },
      {
       "t": "tip",
       "text": "`+` 로 튜플을 이어 붙이는 것은 **원본을 바꾸는 게 아니라 새 튜플을 만드는** 것이라 가능합니다."
      }
     ],
     "summary": "튜플 = 변경 불가. 값 하나면 콤마 필수"
    }
   ],
   "problems": [
    {
     "id": "w6-p1",
     "title": "리스트 다루기",
     "type": "code",
     "level": 1,
     "tags": [
      "리스트"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "리스트 `[3, 1, 4, 1, 5]` 를 만든 뒤 아래 순서로 처리하고, 각 단계마다 리스트 전체를 출력하세요."
      },
      {
       "t": "ul",
       "items": [
        "`9`를 맨 뒤에 추가",
        "오름차순 정렬",
        "순서 뒤집기"
       ]
      },
      {
       "t": "out",
       "text": "[3, 1, 4, 1, 5, 9]\n[1, 1, 3, 4, 5, 9]\n[9, 5, 4, 3, 1, 1]"
      }
     ],
     "hints": [
      "맨 뒤에 추가하는 함수는 append() 입니다.",
      "정렬은 sort(), 뒤집기는 reverse() 입니다. reverse 의 e 를 빠뜨리지 마세요.",
      "a = a.sort() 라고 쓰면 안 됩니다. a.sort() 만 쓰고 print(a) 로 확인하세요."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`append()`, `sort()`, `reverse()`는 모두 **원본 리스트를 직접 바꿉니다.**"
      },
      {
       "t": "warn",
       "text": "이 함수들은 `None`을 돌려줍니다. `a = a.sort()` 로 쓰면 `a`가 `None`이 되어 다음 줄에서 오류가 납니다."
      },
      {
       "t": "tip",
       "text": "슬라이드의 `revers()` 는 오타입니다. `reverse()` 로 써야 하고, 오타로 부르면 `AttributeError` 가 납니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "a = [3, 1, 4, 1, 5]\n\na.append(9)\nprint(a)\n\na.sort()\nprint(a)\n\na.reverse()\nprint(a)",
     "seed": null,
     "tests": [
      {
       "stdin": [],
       "check": null,
       "label": null,
       "expected": "[3, 1, 4, 1, 5, 9]\n[1, 1, 3, 4, 5, 9]\n[9, 5, 4, 3, 1, 1]",
       "expected_display": "[3, 1, 4, 1, 5, 9]\n[1, 1, 3, 4, 5, 9]\n[9, 5, 4, 3, 1, 1]\n"
      }
     ]
    },
    {
     "id": "w6-p2",
     "title": "인덱스로 값 꺼내기",
     "type": "predict",
     "level": 1,
     "tags": [
      "리스트",
      "인덱싱"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "아래 코드의 실행 결과를 예측하세요."
      },
      {
       "t": "p",
       "text": "리스트에 숫자와 문자열이 섞여 있습니다."
      }
     ],
     "hints": [
      "인덱스는 0부터 셉니다. a[0] 은 첫 번째 값입니다.",
      "음수 인덱스는 뒤에서부터입니다. a[-1] 은 마지막 값입니다.",
      "슬라이싱 a[1:4] 는 1, 2, 3번이고 4번은 빠집니다. 결과는 리스트 모양으로 나옵니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`a[0]`은 `1`, `a[5]`는 `life` 입니다. 문자열은 따옴표 없이 출력됩니다."
      },
      {
       "t": "p",
       "text": "`a[1:4]` 는 슬라이싱이라 결과가 **리스트** 입니다. `[2, 3, 4]` 처럼 대괄호가 붙습니다."
      },
      {
       "t": "p",
       "text": "리스트 전체 길이는 `8` 입니다."
      }
     ],
     "time_limit": 10,
     "code": "a = [1, 2, 3, 4, 5, \"life\", \"love\", \"hate\"]\nprint(a[0])\nprint(a[5])\nprint(a[-1])\nprint(a[1:4])\nprint(len(a))",
     "seed": null,
     "expected": "1\nlife\nhate\n[2, 3, 4]\n8",
     "display": "1\nlife\nhate\n[2, 3, 4]\n8\n"
    },
    {
     "id": "w6-p3",
     "title": "섞인 자료형 이어 붙이기",
     "type": "code",
     "level": 2,
     "tags": [
      "리스트",
      "형변환"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "리스트 `a = [1, 2, 3, 4, 5, \"life\", \"love\", \"hate\"]` 가 있습니다."
      },
      {
       "t": "p",
       "text": "`a[4]` 와 `a[7]` 을 **이어 붙여** 출력하세요."
      },
      {
       "t": "out",
       "text": "5hate"
      }
     ],
     "hints": [
      "a[4] 는 숫자 5, a[7] 은 문자열 \"hate\" 입니다.",
      "숫자와 문자열을 그냥 + 로 이으면 TypeError 가 납니다.",
      "str() 로 숫자를 문자열로 바꾸세요. print(str(a[4]) + a[7]) 입니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "한 리스트에 자료형이 섞여 있으면 꺼낸 값의 자료형도 제각각입니다."
      },
      {
       "t": "p",
       "text": "`str()` 로 숫자를 문자열로 바꾸면 `+` 로 이을 수 있습니다. 3주차의 캐스트가 여기서 다시 쓰입니다."
      },
      {
       "t": "tip",
       "text": "반대로 숫자끼리 더하고 싶다면 `int()` 를 쓰면 되지만, `\"hate\"` 는 숫자로 바꿀 수 없어 `ValueError` 가 납니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "a = [1, 2, 3, 4, 5, \"life\", \"love\", \"hate\"]\nprint(str(a[4]) + a[7])",
     "seed": null,
     "tests": [
      {
       "stdin": [],
       "check": null,
       "label": null,
       "expected": "5hate",
       "expected_display": "5hate\n"
      }
     ]
    },
    {
     "id": "w6-p4",
     "title": "딕셔너리 만들기",
     "type": "code",
     "level": 2,
     "tags": [
      "사전",
      "for"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "아래 두 리스트를 조합해 하나의 사전을 만들어 출력하세요."
      },
      {
       "t": "out",
       "text": "key_list = [\"name\", \"hp\", \"mp\", \"level\"]\nvalue_list = [\"기사\", 200, 30, 5]"
      },
      {
       "t": "p",
       "text": "출력 결과는 아래와 같아야 합니다."
      },
      {
       "t": "out",
       "text": "{'name': '기사', 'hp': 200, 'mp': 30, 'level': 5}"
      }
     ],
     "hints": [
      "빈 사전은 character = {} 로 만듭니다.",
      "두 리스트의 같은 위치끼리 짝지어야 하므로 range(len(key_list)) 로 반복하세요.",
      "character[key_list[i]] = value_list[i] 처럼 키에 값을 넣습니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`사전[키] = 값` 형태로 새 항목을 추가하거나 기존 값을 바꿉니다."
      },
      {
       "t": "p",
       "text": "두 리스트의 **같은 인덱스**끼리 짝지어야 해서, 요소가 아니라 인덱스로 반복했습니다."
      },
      {
       "t": "tip",
       "text": "파이썬 3.7부터 사전은 **넣은 순서를 유지**합니다. 그래서 출력 순서가 리스트 순서와 같습니다."
      },
      {
       "t": "tip",
       "text": "실무에서는 `dict(zip(key_list, value_list))` 한 줄로 끝납니다. 교재 범위 밖이지만 알아 두면 좋습니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "key_list = [\"name\", \"hp\", \"mp\", \"level\"]\nvalue_list = [\"기사\", 200, 30, 5]\ncharacter = {}\n\nfor i in range(len(key_list)):\n    character[key_list[i]] = value_list[i]\n\nprint(character)",
     "seed": null,
     "tests": [
      {
       "stdin": [],
       "check": null,
       "label": null,
       "expected": "{'name': '기사', 'hp': 200, 'mp': 30, 'level': 5}",
       "expected_display": "{'name': '기사', 'hp': 200, 'mp': 30, 'level': 5}\n"
      }
     ]
    },
    {
     "id": "w6-p5",
     "title": "사전에서 키 다루기",
     "type": "code",
     "level": 2,
     "tags": [
      "사전"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "사전 `{1: \"one\", \"name\": \"hong\", 7: \"seven\"}` 을 만든 뒤 아래 순서로 처리하세요."
      },
      {
       "t": "ul",
       "items": [
        "키 `8` 에 값 `\"eight\"` 을 추가하고 사전 전체를 출력",
        "키 `7` 을 삭제하고 사전 전체를 출력"
       ]
      },
      {
       "t": "out",
       "text": "{1: 'one', 'name': 'hong', 7: 'seven', 8: 'eight'}\n{1: 'one', 'name': 'hong', 8: 'eight'}"
      }
     ],
     "hints": [
      "새 키에 값을 넣으려면 a[8] = \"eight\" 처럼 씁니다.",
      "지울 때는 del a[7] 입니다.",
      "각 단계마다 print(a) 로 전체를 출력하세요."
     ],
     "explain": [
      {
       "t": "p",
       "text": "한 사전 안에 정수 키와 문자열 키가 섞여 있어도 괜찮습니다."
      },
      {
       "t": "p",
       "text": "없는 키에 값을 넣으면 **추가**되고, 있는 키에 넣으면 **덮어씁니다.**"
      },
      {
       "t": "tip",
       "text": "`del` 대신 `a.pop(7)` 을 쓰면 지우면서 값을 돌려받을 수도 있습니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "a = {1: \"one\", \"name\": \"hong\", 7: \"seven\"}\n\na[8] = \"eight\"\nprint(a)\n\ndel a[7]\nprint(a)",
     "seed": null,
     "tests": [
      {
       "stdin": [],
       "check": null,
       "label": null,
       "expected": "{1: 'one', 'name': 'hong', 7: 'seven', 8: 'eight'}\n{1: 'one', 'name': 'hong', 8: 'eight'}",
       "expected_display": "{1: 'one', 'name': 'hong', 7: 'seven', 8: 'eight'}\n{1: 'one', 'name': 'hong', 8: 'eight'}\n"
      }
     ]
    },
    {
     "id": "w6-p6",
     "title": "파이썬 3에 없는 함수",
     "type": "choice",
     "level": 2,
     "tags": [
      "사전",
      "오류"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "사전 `a` 에 `\"name\"` 키가 있는지 확인하려고 합니다. **오류가 발생하는 것**을 고르세요."
      }
     ],
     "hints": [
      "슬라이드에 나온 함수 중 하나는 파이썬 2 에서만 쓰던 것입니다.",
      "파이썬 3 에서 키 확인은 in 연산자를 씁니다.",
      "has_key() 는 파이썬 3 에서 삭제되었습니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "③이 `AttributeError: 'dict' object has no attribute 'has_key'` 를 냅니다."
      },
      {
       "t": "p",
       "text": "`has_key()` 는 **파이썬 2 전용**이고 파이썬 3 에서는 없어졌습니다. 슬라이드에는 아직 남아 있으니 주의하세요."
      },
      {
       "t": "p",
       "text": "파이썬 3 에서는 `in` 을 씁니다. `a.keys()` 를 거쳐도 되지만 그냥 `in a` 가 더 간단합니다."
      }
     ],
     "time_limit": 10,
     "options": [
      {
       "text": "①",
       "code": "if \"name\" in a:\n    print(\"있습니다\")"
      },
      {
       "text": "②",
       "code": "if a.get(\"name\") != None:\n    print(\"있습니다\")"
      },
      {
       "text": "③",
       "code": "if a.has_key(\"name\"):\n    print(\"있습니다\")"
      },
      {
       "text": "④",
       "code": "if \"name\" in a.keys():\n    print(\"있습니다\")"
      }
     ],
     "answer": 2
    },
    {
     "id": "w6-p7",
     "title": "튜플 오류 찾기",
     "type": "choice",
     "level": 2,
     "tags": [
      "튜플"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "아래 코드 중 **오류가 발생하는 것**을 고르세요."
      }
     ],
     "hints": [
      "튜플은 한 번 만들면 내용을 바꿀 수 없습니다.",
      "읽기(인덱싱), 연결(+), 길이(len)는 모두 가능합니다.",
      "값을 대입해서 바꾸려는 코드는 어느 것인가요?"
     ],
     "explain": [
      {
       "t": "p",
       "text": "③이 `TypeError: 'tuple' object does not support item assignment` 를 냅니다."
      },
      {
       "t": "p",
       "text": "②의 `+`는 원본을 바꾸는 게 아니라 **새 튜플을 만드는** 것이라 문제없습니다."
      },
      {
       "t": "tip",
       "text": "리스트였다면 ③도 정상 동작합니다. 이게 리스트와 튜플의 결정적 차이입니다."
      }
     ],
     "time_limit": 10,
     "options": [
      {
       "text": "①",
       "code": "t = (\"a\", \"b\")\nprint(t[0])"
      },
      {
       "text": "②",
       "code": "t = (\"a\", \"b\")\nprint(t + (\"c\",))"
      },
      {
       "text": "③",
       "code": "t = (\"a\", \"b\")\nt[0] = \"z\""
      },
      {
       "text": "④",
       "code": "t = (\"a\", \"b\")\nprint(len(t))"
      }
     ],
     "answer": 2
    },
    {
     "id": "w6-p8",
     "title": "중첩 리스트에서 값 꺼내기",
     "type": "code",
     "level": 3,
     "tags": [
      "리스트",
      "인덱싱"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "리스트 `d = [1, 2, [3, 4, 5, 6, 7]]` 이 있습니다."
      },
      {
       "t": "p",
       "text": "아래 세 가지를 순서대로 각각 한 줄씩 출력하세요."
      },
      {
       "t": "ul",
       "items": [
        "`d` 의 길이",
        "안쪽 리스트 전체",
        "안쪽 리스트의 `5`"
       ]
      },
      {
       "t": "out",
       "text": "3\n[3, 4, 5, 6, 7]\n5"
      }
     ],
     "hints": [
      "안쪽 리스트도 통째로 값 하나로 셉니다. len(d) 는 3 입니다.",
      "안쪽 리스트는 d[2] 로 꺼냅니다.",
      "그 안의 값은 대괄호를 한 번 더 씁니다. 5 는 안쪽 리스트의 2번입니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`len(d)` 가 `3` 인 이유는 안쪽 리스트를 **하나**로 세기 때문입니다."
      },
      {
       "t": "p",
       "text": "`d[2]` 로 안쪽 리스트를 꺼내고, 대괄호를 한 번 더 붙여 `d[2][2]` 로 그 안의 값을 꺼냅니다."
      },
      {
       "t": "tip",
       "text": "중첩이 깊어지면 `d[2][0][1]` 처럼 계속 이어 붙일 수 있습니다. 표(행과 열)를 다룰 때 자주 씁니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "d = [1, 2, [3, 4, 5, 6, 7]]\n\nprint(len(d))\nprint(d[2])\nprint(d[2][2])",
     "seed": null,
     "tests": [
      {
       "stdin": [],
       "check": null,
       "label": null,
       "expected": "3\n[3, 4, 5, 6, 7]\n5",
       "expected_display": "3\n[3, 4, 5, 6, 7]\n5\n"
      }
     ]
    }
   ]
  },
  {
   "id": "week7",
   "no": 7,
   "title": "함수",
   "subtitle": "함수 정의 · 매개변수 · 가변/기본/키워드 매개변수 · 리턴",
   "concepts": [
    {
     "id": "w7-why",
     "title": "함수는 왜 필요한가",
     "blocks": [
      {
       "t": "p",
       "text": "같은 코드가 여러 번 반복되면 고칠 때마다 모든 곳을 찾아 고쳐야 합니다.\n**함수**로 묶어 두면 한 번만 고치면 됩니다."
      },
      {
       "t": "code",
       "code": "for i in range(1, 21):\n    print(\"*\", end=\"\")\nprint(\"\\n안녕하세요. 홍길동입니다.\")\nfor i in range(1, 21):\n    print(\"*\", end=\"\")\nprint(\"\\n오늘도 열심히 파이썬을 배웁니다.\")\nfor i in range(1, 21):\n    print(\"*\", end=\"\")",
       "note": "구분선을 그리는 두 줄이 세 번 반복됩니다. 이걸 함수로 묶으면 좋겠죠.",
       "stdin": [],
       "title": null,
       "output": "********************\n안녕하세요. 홍길동입니다.\n********************\n오늘도 열심히 파이썬을 배웁니다.\n********************",
       "is_error": false
      },
      {
       "t": "p",
       "text": "세 가지 용어를 먼저 익혀 둡시다."
      },
      {
       "t": "ul",
       "items": [
        "**호출(call)** — 함수를 실행하는 행위",
        "**매개변수** — 함수를 호출할 때 괄호 안에 넣는 자료",
        "**리턴값** — 함수를 호출해 최종적으로 나오는 결과"
       ]
      },
      {
       "t": "p",
       "text": "이미 써 온 `len(\"안녕하세요\")` 가 그 예입니다.\n매개변수로 `\"안녕하세요\"` 를 넣으면 리턴값으로 `5` 가 나옵니다."
      }
     ],
     "summary": "호출 · 매개변수 · 리턴값"
    },
    {
     "id": "w7-print",
     "title": "print() 의 sep 과 end",
     "blocks": [
      {
       "t": "p",
       "text": "`print` 자체도 매개변수를 가진 함수입니다. 자주 쓰는 두 가지를 알아 둡시다."
      },
      {
       "t": "ul",
       "items": [
        "**`sep`** — 값들 **사이**에 넣을 문자열 (기본값은 공백 한 칸)",
        "**`end`** — 마지막 값 **뒤**에 붙일 문자열 (기본값은 줄바꿈 `\\n`)"
       ]
      },
      {
       "t": "code",
       "code": "print(\"a\", \"b\", \"c\")\nprint(\"a\", \"b\", \"c\", sep=\"-\")\nprint(\"2026\", \"9\", \"9\", sep=\"/\")",
       "note": "1주차에서 '쉼표를 쓰면 공백이 들어간다'고 한 것이 사실 sep 의 기본값 때문이었습니다.",
       "stdin": [],
       "title": null,
       "output": "a b c\na-b-c\n2026/9/9\n",
       "is_error": false
      },
      {
       "t": "code",
       "code": "for i in range(1, 21):\n    print(\"*\", end=\"\")\nprint()\nprint(\"줄바꿈 없이\", end=\" \")\nprint(\"이어집니다\")",
       "note": "end=\"\" 로 두면 줄이 바뀌지 않아 한 줄에 이어서 출력됩니다.",
       "stdin": [],
       "title": null,
       "output": "********************\n줄바꿈 없이 이어집니다\n",
       "is_error": false
      },
      {
       "t": "tip",
       "text": "`print()` 를 인수 없이 부르면 빈 줄이 나옵니다. `end` 의 기본값인 줄바꿈만 출력되기 때문입니다."
      }
     ],
     "summary": "sep 값 사이 · end 값 뒤 (기본은 줄바꿈)"
    },
    {
     "id": "w7-def",
     "title": "함수 만들기와 매개변수",
     "blocks": [
      {
       "t": "p",
       "text": "`def 함수이름():` 으로 정의하고 `함수이름()` 으로 **호출**합니다."
      },
      {
       "t": "code",
       "code": "def print_3_times():\n    print(\"안녕하세요\")\n    print(\"안녕하세요\")\n    print(\"안녕하세요\")\n\nprint_3_times()",
       "note": null,
       "stdin": [],
       "title": null,
       "output": "안녕하세요\n안녕하세요\n안녕하세요\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "**매개변수**를 넣으면 호출할 때마다 다른 값으로 일할 수 있습니다."
      },
      {
       "t": "code",
       "code": "def print_n_times(value, n):\n    for i in range(n):\n        print(value)\n\nprint_n_times(\"안녕하세요\", 3)\nprint()\nprint_n_times(\"반갑습니다\", 2)",
       "note": null,
       "stdin": [],
       "title": null,
       "output": "안녕하세요\n안녕하세요\n안녕하세요\n\n반갑습니다\n반갑습니다\n",
       "is_error": false
      },
      {
       "t": "warn",
       "text": "**매개변수 개수가 맞지 않으면 TypeError** 입니다.\n- 부족: `missing 1 required positional argument: 'n'`\n- 초과: `takes 2 positional arguments but 3 were given`"
      },
      {
       "t": "code",
       "code": "def print_n_times(value, n):\n    for i in range(n):\n        print(value)\n\nprint_n_times(\"안녕하세요\")",
       "note": "매개변수를 2개 지정했는데 1개만 넣어서 TypeError 가 납니다.",
       "stdin": [],
       "title": null,
       "output": "",
       "is_error": true,
       "error_text": "Traceback (most recent call last):\n  File \"<내 코드>\", line 5, in <module>\n    print_n_times(\"안녕하세요\")\nTypeError: print_n_times() missing 1 required positional argument: 'n'"
      }
     ],
     "summary": "def 이름(매개변수): — 호출은 이름(값)"
    },
    {
     "id": "w7-vararg",
     "title": "가변 매개변수",
     "blocks": [
      {
       "t": "p",
       "text": "`*values` 처럼 별표를 붙이면 **원하는 만큼** 값을 받을 수 있습니다."
      },
      {
       "t": "code",
       "code": "def print_all(*values):\n    for value in values:\n        print(value)\n\nprint_all(\"안녕하세요\", \"즐거운\", \"파이썬 프로그래밍\")",
       "note": "함수 안에서 values 는 튜플처럼 반복할 수 있습니다.",
       "stdin": [],
       "title": null,
       "output": "안녕하세요\n즐거운\n파이썬 프로그래밍\n",
       "is_error": false
      },
      {
       "t": "code",
       "code": "def print_n_times(n, *values):\n    for i in range(n):\n        for value in values:\n            print(value)\n        print()\n\nprint_n_times(2, \"안녕하세요\", \"즐거운\")",
       "note": "일반 매개변수를 앞에, 가변 매개변수를 뒤에 둡니다.",
       "stdin": [],
       "title": null,
       "output": "안녕하세요\n즐거운\n\n안녕하세요\n즐거운\n\n",
       "is_error": false
      },
      {
       "t": "warn",
       "text": "**제약 두 가지**\n- 가변 매개변수 뒤에는 일반 매개변수가 올 수 없습니다\n- 가변 매개변수는 하나만 쓸 수 있습니다"
      }
     ],
     "summary": "*values — 값을 원하는 만큼 받아 튜플처럼 사용"
    },
    {
     "id": "w7-default",
     "title": "기본 매개변수와 키워드 매개변수",
     "blocks": [
      {
       "t": "p",
       "text": "**기본 매개변수**는 값을 넣지 않았을 때 들어가는 값입니다."
      },
      {
       "t": "code",
       "code": "def print_n_times(value, n=2):\n    for i in range(n):\n        print(value)\n\nprint_n_times(\"안녕하세요\")\nprint()\nprint_n_times(\"안녕하세요\", 4)",
       "note": null,
       "stdin": [],
       "title": null,
       "output": "안녕하세요\n안녕하세요\n\n안녕하세요\n안녕하세요\n안녕하세요\n안녕하세요\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "**키워드 매개변수**는 이름을 지정해서 값을 넘기는 방식입니다.\n순서를 지키지 않아도 되고, 중간 것만 건너뛸 수도 있습니다."
      },
      {
       "t": "code",
       "code": "def test(a, b=10, c=100):\n    print(a + b + c)\n\ntest(10, 20, 30)\ntest(a=10, b=100, c=200)\ntest(c=10, a=100, b=200)\ntest(10, c=200)",
       "note": "마지막 호출은 b 를 생략해 기본값 10 이 쓰입니다.",
       "stdin": [],
       "title": null,
       "output": "60\n310\n310\n220\n",
       "is_error": false
      },
      {
       "t": "warn",
       "text": "**기본 매개변수를 가변 매개변수 앞에 두면 기본값의 의미가 사라집니다.**\n`def f(n=2, *values)` 로 만들고 `f(\"안녕\", \"즐거운\")` 을 호출하면\n`\"안녕\"` 이 `n` 에 들어가 버려 오류가 납니다."
      },
      {
       "t": "code",
       "code": "def print_n_times(n=2, *values):\n    for i in range(n):\n        for value in values:\n            print(value)\n\nprint_n_times(\"안녕하세요\", \"즐거운\")",
       "note": "\"안녕하세요\" 가 n 에 들어가 range(\"안녕하세요\") 가 되어 TypeError 입니다.",
       "stdin": [],
       "title": null,
       "output": "",
       "is_error": true,
       "error_text": "Traceback (most recent call last):\n  File \"<내 코드>\", line 6, in <module>\n    print_n_times(\"안녕하세요\", \"즐거운\")\n  File \"<내 코드>\", line 2, in print_n_times\n    for i in range(n):\nTypeError: 'str' object cannot be interpreted as an integer"
      },
      {
       "t": "p",
       "text": "반대로 **가변 매개변수를 앞에** 두면 가변 쪽이 값을 모두 가져갑니다."
      },
      {
       "t": "code",
       "code": "def print_n_times(*values, n=2):\n    for i in range(n):\n        for value in values:\n            print(value)\n        print()\n\nprint_n_times(\"안녕하세요\", \"즐거운\", 3)",
       "note": "3 도 values 에 들어가 버리고 n 은 기본값 2 그대로입니다.",
       "stdin": [],
       "title": null,
       "output": "안녕하세요\n즐거운\n3\n\n안녕하세요\n즐거운\n3\n\n",
       "is_error": false
      },
      {
       "t": "code",
       "code": "def print_n_times(*values, n=2):\n    for i in range(n):\n        for value in values:\n            print(value)\n        print()\n\nprint_n_times(\"안녕하세요\", \"즐거운\", n=3)",
       "note": "n=3 처럼 키워드로 지정해야 제대로 전달됩니다.",
       "stdin": [],
       "title": null,
       "output": "안녕하세요\n즐거운\n\n안녕하세요\n즐거운\n\n안녕하세요\n즐거운\n\n",
       "is_error": false
      },
      {
       "t": "tip",
       "text": "이것이 이 단원 제목이 **키워드 매개변수** 인 이유입니다. 가변 매개변수 뒤의 값은 반드시 이름을 붙여 넘겨야 합니다."
      }
     ],
     "summary": "기본값은 뒤에 · 가변 뒤의 매개변수는 키워드로만 전달 가능"
    },
    {
     "id": "w7-return",
     "title": "리턴",
     "blocks": [
      {
       "t": "p",
       "text": "`return`은 함수를 **호출했던 위치로 돌려보냅니다.**\n뒤에 값을 적으면 그 값을 가지고 돌아갑니다. 이 값이 **리턴값**입니다."
      },
      {
       "t": "code",
       "code": "def return_test():\n    print(\"A 위치입니다.\")\n    return\n    print(\"B 위치입니다.\")\n\nreturn_test()",
       "note": "return 을 만나면 함수가 즉시 끝나므로 B는 출력되지 않습니다.",
       "stdin": [],
       "title": null,
       "output": "A 위치입니다.\n",
       "is_error": false
      },
      {
       "t": "code",
       "code": "def return_test():\n    return 100\n\nvalue = return_test()\nprint(value)",
       "note": null,
       "stdin": [],
       "title": null,
       "output": "100\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "아무것도 리턴하지 않는 함수는 `None`을 돌려줍니다."
      },
      {
       "t": "code",
       "code": "def no_return():\n    print(\"출력만 합니다\")\n\nvalue = no_return()\nprint(value)",
       "note": null,
       "stdin": [],
       "title": null,
       "output": "출력만 합니다\nNone\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "일반적인 함수는 **값을 만들어 리턴**하는 형태입니다."
      },
      {
       "t": "code",
       "code": "def sum_all(start, end):\n    output = 0\n    for i in range(start, end + 1):\n        output += i\n    return output\n\nprint(\"0 to 100:\", sum_all(0, 100))\nprint(\"50 to 100:\", sum_all(50, 100))\n\nk = sum_all(1, 10)\nprint(\"리턴값을 변수에 담아 계산:\", k * 2)",
       "note": null,
       "stdin": [],
       "title": null,
       "output": "0 to 100: 5050\n50 to 100: 3825\n리턴값을 변수에 담아 계산: 110\n",
       "is_error": false
      },
      {
       "t": "tip",
       "text": "**print 와 return 은 다릅니다.** `print`는 화면에 보여줄 뿐이고,\n`return`은 값을 돌려줘서 다른 계산에 쓸 수 있게 합니다.\n`sum_all(0, 100) * 2` 같은 계산은 `return`이 있어야 가능합니다."
      },
      {
       "t": "warn",
       "text": "값을 누적할 때 **초깃값**을 잘 골라야 합니다.\n더하기는 `0`, 곱하기는 `1` 에서 시작합니다.\n곱하기를 `0` 에서 시작하면 무엇을 곱해도 결과가 `0` 입니다."
      }
     ],
     "summary": "return 값 — 함수를 끝내고 값을 돌려줌. 없으면 None"
    }
   ],
   "problems": [
    {
     "id": "w7-p1",
     "title": "구분선 함수 만들기",
     "type": "code",
     "level": 1,
     "tags": [
      "함수",
      "end"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "별(`*`)을 `20`개 한 줄로 출력하는 함수 `line()` 을 만들고, 세 번 호출하세요."
      },
      {
       "t": "out",
       "text": "********************\n********************\n********************"
      }
     ],
     "hints": [
      "def line(): 으로 함수를 만듭니다.",
      "print(\"*\", end=\"\") 를 20번 반복한 뒤, print() 로 줄을 바꿉니다.",
      "함수 정의 아래에서 line() 을 세 번 쓰면 됩니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`end=\"\"` 로 두면 줄이 바뀌지 않아 별이 한 줄에 이어집니다."
      },
      {
       "t": "p",
       "text": "반복이 끝난 뒤 `print()` 를 한 번 불러 줄을 바꿉니다."
      },
      {
       "t": "tip",
       "text": "함수로 묶어 두면 별 개수를 바꿀 때 함수 안 한 곳만 고치면 됩니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "def line():\n    for i in range(20):\n        print(\"*\", end=\"\")\n    print()\n\nline()\nline()\nline()",
     "seed": null,
     "tests": [
      {
       "stdin": [],
       "check": "def check(stdout, g):\n    if \"line\" not in g:\n        return False, \"line 이라는 이름의 함수를 만들어야 합니다.\"\n    lines = [l for l in stdout.strip().split(\"\\n\") if l]\n    if len(lines) != 3:\n        return False, \"세 줄이 나와야 하는데 {}줄입니다. line() 을 세 번 호출했나요?\".format(len(lines))\n    return True, \"함수를 만들고 세 번 호출했습니다.\"",
       "label": null,
       "expected": "********************\n********************\n********************",
       "expected_display": "********************\n********************\n********************\n"
      }
     ]
    },
    {
     "id": "w7-p2",
     "title": "sep 으로 형식 만들기",
     "type": "code",
     "level": 1,
     "tags": [
      "print",
      "sep"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "`print()` 를 **한 번만** 써서 아래처럼 출력하세요."
      },
      {
       "t": "out",
       "text": "2026/9/9"
      },
      {
       "t": "p",
       "text": "값은 `2026`, `9`, `9` 세 개를 쉼표로 넘기고, 사이를 `/` 로 이으세요."
      }
     ],
     "hints": [
      "print() 에 값 세 개를 쉼표로 넘기면 기본적으로 공백이 들어갑니다.",
      "값 사이에 넣을 문자열은 sep 으로 바꿀 수 있습니다.",
      "print(2026, 9, 9, sep=\"/\") 입니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`sep` 의 기본값이 공백 한 칸이라 평소에는 `2026 9 9` 로 나옵니다."
      },
      {
       "t": "p",
       "text": "`sep=\"/\"` 로 바꾸면 값 사이가 모두 `/` 로 이어집니다."
      },
      {
       "t": "tip",
       "text": "`sep=\"\"` 로 두면 아무것도 없이 붙어 `202699` 가 됩니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "print(2026, 9, 9, sep=\"/\")",
     "seed": null,
     "tests": [
      {
       "stdin": [],
       "check": null,
       "label": null,
       "expected": "2026/9/9",
       "expected_display": "2026/9/9\n"
      }
     ]
    },
    {
     "id": "w7-p3",
     "title": "매개변수 개수 오류",
     "type": "choice",
     "level": 2,
     "tags": [
      "함수",
      "오류"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "아래처럼 함수가 정의되어 있습니다."
      },
      {
       "t": "out",
       "text": "def print_n_times(value, n):\n    for i in range(n):\n        print(value)"
      },
      {
       "t": "p",
       "text": "호출 중 **오류가 발생하지 않는 것**을 고르세요."
      }
     ],
     "hints": [
      "매개변수를 2개 지정했으므로 넣는 값도 2개여야 합니다.",
      "부족해도 오류, 많아도 오류입니다.",
      "값을 정확히 두 개 넣은 것은 어느 것인가요?"
     ],
     "explain": [
      {
       "t": "p",
       "text": "③만 값이 정확히 두 개라 정상 동작합니다."
      },
      {
       "t": "p",
       "text": "①과 ④는 `missing ... required positional argument`, ②는 `takes 2 positional arguments but 3 were given` 이 납니다."
      },
      {
       "t": "tip",
       "text": "기본 매개변수를 쓰면 일부를 생략할 수 있습니다. `def print_n_times(value, n=2)` 처럼요."
      }
     ],
     "time_limit": 10,
     "options": [
      {
       "text": "①",
       "code": "print_n_times(\"안녕하세요\")"
      },
      {
       "text": "②",
       "code": "print_n_times(\"안녕하세요\", 10, 20)"
      },
      {
       "text": "③",
       "code": "print_n_times(\"안녕하세요\", 3)"
      },
      {
       "text": "④",
       "code": "print_n_times()"
      }
     ],
     "answer": 2
    },
    {
     "id": "w7-p4",
     "title": "방정식을 함수로",
     "type": "code",
     "level": 2,
     "tags": [
      "함수",
      "return"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "아래 두 방정식을 각각 파이썬 함수로 만들고, `x = 10` 일 때의 값을 출력하세요."
      },
      {
       "t": "ul",
       "items": [
        "`f(x) = 2x + 1` → 함수 이름 `f`",
        "`g(x) = x² + 2x + 1` → 함수 이름 `g`"
       ]
      },
      {
       "t": "out",
       "text": "21\n121"
      }
     ],
     "hints": [
      "def f(x): 로 정의하고 다음 줄에 return 을 씁니다.",
      "return 2 * x + 1 처럼 계산 결과를 돌려줍니다.",
      "제곱은 x ** 2 또는 x * x 입니다. 마지막에 print(f(10)) 과 print(g(10)) 으로 출력하세요."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`return`이 있어야 함수 밖에서 결과를 쓸 수 있습니다. `print`만 하면 값을 돌려주지 않아 `None`이 됩니다."
      },
      {
       "t": "p",
       "text": "매개변수 `x`는 함수를 부를 때마다 다른 값으로 채워집니다. `f(10)`이면 `x`는 `10`이 됩니다."
      },
      {
       "t": "tip",
       "text": "`k = f(10)` 처럼 리턴값을 변수에 담아 두면 다른 계산에도 쓸 수 있습니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "def f(x):\n    return 2 * x + 1\n\ndef g(x):\n    return x ** 2 + 2 * x + 1\n\nprint(f(10))\nprint(g(10))",
     "seed": null,
     "tests": [
      {
       "stdin": [],
       "check": "def check(stdout, g):\n    f = g.get(\"f\")\n    gg = g.get(\"g\")\n    if f is None or gg is None:\n        return False, \"함수 f 와 g 를 모두 정의해야 합니다.\"\n    if f(3) != 7:\n        return False, \"f(3)은 7이어야 하는데 {} 입니다.\".format(f(3))\n    if gg(3) != 16:\n        return False, \"g(3)은 16이어야 하는데 {} 입니다.\".format(gg(3))\n    return True, \"다른 값으로도 정확히 계산됩니다.\"",
       "label": null,
       "expected": "21\n121",
       "expected_display": "21\n121\n"
      }
     ]
    },
    {
     "id": "w7-p5",
     "title": "return 뒤의 코드",
     "type": "predict",
     "level": 2,
     "tags": [
      "return"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "아래 코드의 실행 결과를 예측하세요."
      }
     ],
     "hints": [
      "return 을 만나면 함수가 그 자리에서 끝납니다.",
      "그 아래에 코드가 있어도 실행되지 않습니다.",
      "리턴값이 없는 함수를 print() 로 감싸면 무엇이 나올까요? 파이썬은 '없음'을 None 이라고 씁니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`return` 을 만나면 함수가 즉시 끝나므로 `B 위치입니다.` 는 출력되지 않습니다."
      },
      {
       "t": "p",
       "text": "`no_return()` 은 화면에 출력만 하고 아무것도 리턴하지 않아 `None` 을 돌려줍니다."
      },
      {
       "t": "tip",
       "text": "`print()` 만 하는 함수와 `return` 하는 함수의 차이를 보여주는 예입니다. 값을 계산에 쓰려면 `return` 이 필요합니다."
      }
     ],
     "time_limit": 10,
     "code": "def test():\n    print(\"A 위치입니다.\")\n    return\n    print(\"B 위치입니다.\")\n\ntest()\n\ndef no_return():\n    print(\"출력만 합니다\")\n\nprint(no_return())",
     "seed": null,
     "expected": "A 위치입니다.\n출력만 합니다\nNone",
     "display": "A 위치입니다.\n출력만 합니다\nNone\n"
    },
    {
     "id": "w7-p6",
     "title": "키워드 매개변수",
     "type": "predict",
     "level": 2,
     "tags": [
      "함수",
      "키워드"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "아래 코드의 실행 결과를 예측하세요."
      },
      {
       "t": "p",
       "text": "함수는 `def test(a, b=10, c=100)` 이고 `a + b + c` 를 출력합니다."
      }
     ],
     "hints": [
      "첫 번째는 순서대로 들어갑니다. 10 + 20 + 30.",
      "키워드로 지정하면 순서를 바꿔 써도 이름대로 찾아갑니다.",
      "마지막은 b 를 생략했으니 기본값 10 이 쓰입니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "1번은 순서대로 `10 + 20 + 30 = 60` 입니다."
      },
      {
       "t": "p",
       "text": "2번과 3번은 값이 같고 순서만 다릅니다. 키워드로 지정하면 순서는 상관없어 둘 다 `310` 입니다."
      },
      {
       "t": "p",
       "text": "4번은 `b` 를 건너뛰어 기본값 `10` 이 쓰이므로 `10 + 10 + 200 = 220` 입니다."
      },
      {
       "t": "tip",
       "text": "키워드 매개변수의 장점이 3번과 4번에 잘 드러납니다. 순서를 외울 필요가 없고, 중간 것만 건너뛸 수 있습니다."
      }
     ],
     "time_limit": 10,
     "code": "def test(a, b=10, c=100):\n    print(a + b + c)\n\ntest(10, 20, 30)\ntest(a=10, b=100, c=200)\ntest(c=10, a=100, b=200)\ntest(10, c=200)",
     "seed": null,
     "expected": "60\n310\n310\n220",
     "display": "60\n310\n310\n220\n"
    },
    {
     "id": "w7-p7",
     "title": "범위의 합을 구하는 함수",
     "type": "code",
     "level": 3,
     "tags": [
      "함수",
      "return"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "`start` 부터 `end` 까지의 정수를 모두 더해 **리턴**하는 함수 `sum_all(start, end)` 을 만드세요."
      },
      {
       "t": "p",
       "text": "만든 뒤 아래처럼 출력하세요."
      },
      {
       "t": "out",
       "text": "0 to 100: 5050\n50 to 100: 3825"
      }
     ],
     "hints": [
      "함수 안에서 output = 0 으로 시작합니다.",
      "for i in range(start, end + 1): 로 반복하며 output += i 합니다. end 를 포함하려면 +1 이 필요합니다.",
      "반복이 끝난 뒤 return output 을 씁니다. print 가 아니라 return 입니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`range(start, end + 1)` 처럼 `+1` 을 해야 `end` 까지 포함됩니다."
      },
      {
       "t": "p",
       "text": "`return` 으로 값을 돌려주므로 `sum_all(0, 100) * 2` 같은 계산에도 쓸 수 있습니다."
      },
      {
       "t": "tip",
       "text": "이 문제는 네 가지 범위로 채점합니다. `start` 와 `end` 가 같은 경우도 있으니 확인해 보세요."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "def sum_all(start, end):\n    output = 0\n    for i in range(start, end + 1):\n        output += i\n    return output\n\nprint(\"0 to 100:\", sum_all(0, 100))\nprint(\"50 to 100:\", sum_all(50, 100))",
     "seed": null,
     "tests": [
      {
       "stdin": [],
       "check": "def check(stdout, g):\n    f = g.get(\"sum_all\")\n    if f is None:\n        return False, \"sum_all 함수를 정의해야 합니다.\"\n    cases = [((0, 100), 5050), ((50, 100), 3825), ((1, 10), 55), ((5, 5), 5)]\n    for args, want in cases:\n        got = f(*args)\n        if got != want:\n            return False, \"sum_all{} 는 {} 여야 하는데 {} 입니다.\".format(args, want, got)\n    return True, \"여러 범위에서 정확히 동작합니다.\"",
       "label": null,
       "expected": "0 to 100: 5050\n50 to 100: 3825",
       "expected_display": "0 to 100: 5050\n50 to 100: 3825\n"
      }
     ]
    },
    {
     "id": "w7-p8",
     "title": "모두 곱해서 리턴하기",
     "type": "code",
     "level": 3,
     "tags": [
      "함수",
      "가변 매개변수"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "전달된 값들을 **모두 곱해서 리턴**하는 가변 매개변수 함수 `mul` 을 만드세요."
      },
      {
       "t": "p",
       "text": "`print(mul(5, 7, 9, 10))` 의 결과는 아래와 같아야 합니다."
      },
      {
       "t": "out",
       "text": "3150"
      }
     ],
     "hints": [
      "def mul(*values): 로 정의하면 값을 원하는 만큼 받을 수 있습니다.",
      "곱셈의 누적이므로 시작값은 0이 아니라 1이어야 합니다.",
      "output = 1 로 시작해 for value in values: 안에서 output *= value 합니다. 마지막에 return output."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`*values` 는 전달된 모든 값을 **튜플로 묶어** 받습니다. 그래서 `for`로 반복할 수 있습니다."
      },
      {
       "t": "warn",
       "text": "수업 실습에서 이 문제를 풀 때 함수 이름은 `mul` 인데 안에서는 더하기를 해서\n`3150` 대신 `31` 이 나왔습니다. `5 + 7 + 9 + 10 = 31` 이죠."
      },
      {
       "t": "warn",
       "text": "`+=` 를 `*=` 로 바꾸는 것만으로는 부족합니다. **초깃값도 `1` 로 바꿔야** 합니다.\n`0` 으로 두면 무엇을 곱해도 결과가 `0` 입니다."
      },
      {
       "t": "tip",
       "text": "덧셈 누적은 `0`, 곱셈 누적은 `1` 에서 시작합니다. 각 연산의 항등원이기 때문입니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "def mul(*values):\n    output = 1\n    for value in values:\n        output *= value\n    return output\n\nprint(mul(5, 7, 9, 10))",
     "seed": null,
     "tests": [
      {
       "stdin": [],
       "check": "def check(stdout, g):\n    mul = g.get(\"mul\")\n    if mul is None:\n        return False, \"mul 함수를 정의해야 합니다.\"\n    if mul(5, 7, 9, 10) != 3150:\n        return False, \"mul(5, 7, 9, 10)은 3150이어야 하는데 {} 입니다. 더하기를 하고 있지는 않나요?\".format(mul(5, 7, 9, 10))\n    if mul(2, 3) != 6:\n        return False, \"mul(2, 3)은 6이어야 하는데 {} 입니다.\".format(mul(2, 3))\n    if mul(4) != 4:\n        return False, \"mul(4)는 4여야 하는데 {} 입니다. 초깃값이 1인지 확인하세요.\".format(mul(4))\n    return True, \"여러 개수의 인수에 대해 정확히 동작합니다.\"",
       "label": null,
       "expected": "3150",
       "expected_display": "3150\n"
      }
     ]
    },
    {
     "id": "w7-p9",
     "title": "매개변수 순서 오류",
     "type": "choice",
     "level": 3,
     "tags": [
      "함수",
      "가변 매개변수"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "아래 함수 정의와 호출 중 **오류가 발생하는 것**을 고르세요."
      }
     ],
     "hints": [
      "가변 매개변수(*values)는 위치로 넘긴 값을 남김없이 다 가져갑니다.",
      "가변 매개변수 뒤에 오는 매개변수는 위치로는 값을 받을 수 없습니다.",
      "기본값이 있으면 안 넣어도 되지만, 기본값이 없으면 반드시 받아야 합니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "①은 `*values`가 `1, 2, 3, 4, 5`를 모두 가져가므로 `valueA`와 `valueB`에 넣을 값이 남지 않습니다."
      },
      {
       "t": "p",
       "text": "`TypeError: function() missing 2 required keyword-only arguments` 가 납니다."
      },
      {
       "t": "p",
       "text": "②는 기본값이 있어 괜찮고, ③④는 일반 매개변수가 앞에 있어 순서대로 받을 수 있습니다."
      },
      {
       "t": "tip",
       "text": "정리하면 **가변 매개변수 뒤에는 기본값이 있는 매개변수만** 올 수 있고, 그 값은 반드시 키워드로 넘겨야 합니다."
      }
     ],
     "time_limit": 10,
     "options": [
      {
       "text": "①",
       "code": "def function(*values, valueA, valueB):\n    pass\n\nfunction(1, 2, 3, 4, 5)"
      },
      {
       "text": "②",
       "code": "def function(*values, valueA=10, valueB=20):\n    pass\n\nfunction(1, 2, 3, 4, 5)"
      },
      {
       "text": "③",
       "code": "def function(valueA, valueB, *values):\n    pass\n\nfunction(1, 2, 3, 4, 5)"
      },
      {
       "text": "④",
       "code": "def function(valueA=10, valueB=20, *values):\n    pass\n\nfunction(1, 2, 3, 4, 5)"
      }
     ],
     "answer": 0
    }
   ]
  }
 ]
};
