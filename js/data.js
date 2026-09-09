// 이 파일은 tools/build.py 가 자동 생성합니다. 직접 수정하지 마세요.
window.COURSE_DATA = {
 "weeks": [
  {
   "id": "week1",
   "no": 1,
   "title": "파이썬 시작 · print()와 문자열 · 산술 연산",
   "subtitle": "교재 1장 (파이썬과 IDLE) + 2장 (문장, 계산, 반복문 맛보기)",
   "concepts": [
    {
     "id": "w1-print",
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
       "nondeterministic": false,
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
       "nondeterministic": false,
       "output": "111을 4로 나누면? 27.75\n나이는 25 살입니다\n",
       "is_error": false
      },
      {
       "t": "tip",
       "text": "쉼표(`,`)와 더하기(`+`)는 다릅니다. 쉼표는 자동으로 공백을 넣고 자료형이 달라도 되지만,\n`+`는 공백을 넣지 않고 **문자열끼리만** 가능합니다. 이건 2주차에서 자세히 봅니다."
      }
     ],
     "summary": "print(값1, 값2, ...) — 쉼표로 구분하면 공백이 자동으로 들어간다"
    },
    {
     "id": "w1-escape",
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
       "nondeterministic": false,
       "output": "Question: What goes clip?\nAnswer: A one legged horse.\n이름\t나이\t지역\n윤인성\t25\t강서구\n",
       "is_error": false
      },
      {
       "t": "code",
       "code": "print(\"Here is a speech mark: \\\" and here is a slash: \\\\\")\nprint('I say \"High\", you say \"Low\".')",
       "note": "따옴표 안에 같은 종류의 따옴표를 쓰려면 역슬래시를 붙이거나, 바깥을 다른 따옴표로 감쌉니다.",
       "stdin": [],
       "title": null,
       "nondeterministic": false,
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
     "id": "w1-math",
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
       "nondeterministic": false,
       "output": "10 / 4 = 2.5\n11 / 4 = 2.75\n11 // 4 = 2\n11 % 4 = 3\n2 ** 10 = 1024\n",
       "is_error": false
      },
      {
       "t": "tip",
       "text": "`/`는 나누어떨어져도 항상 실수(float)를 만듭니다. `10 / 5`의 결과는 `2`가 아니라 `2.0`입니다.\n정수가 필요하면 `//`를 쓰세요. 5주차 `range()`에서 이 차이가 실제 오류로 이어집니다."
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
       "nondeterministic": false,
       "output": "14\n20\n",
       "is_error": false
      }
     ],
     "summary": "* 곱 · / 나누기(실수) · // 몫 · % 나머지 · ** 제곱"
    },
    {
     "id": "w1-error",
     "title": "오류 메시지 읽는 법",
     "blocks": [
      {
       "t": "p",
       "text": "코드를 잘못 쓰면 파이썬이 오류를 알려 줍니다. 오류는 실패가 아니라 **어디가 잘못됐는지 알려주는 힌트**입니다.\n가장 자주 만나는 두 가지를 먼저 익혀 둡시다."
      },
      {
       "t": "ul",
       "items": [
        "`SyntaxError` — 문법이 잘못됐습니다. 괄호나 따옴표를 안 닫은 경우가 대부분입니다.",
        "`TypeError` — 자료형이 안 맞습니다. 문자열과 숫자를 `+`로 붙이려 할 때 나옵니다."
       ]
      },
      {
       "t": "code",
       "code": "print(\"안녕하세요\" + 1)",
       "note": "문자열과 숫자는 + 로 연결할 수 없습니다. TypeError 가 납니다.",
       "stdin": [],
       "title": null,
       "nondeterministic": false,
       "output": "",
       "is_error": true,
       "error_text": "Traceback (most recent call last):\n  File \"<내 코드>\", line 1, in <module>\n    print(\"안녕하세요\" + 1)\nTypeError: can only concatenate str (not \"int\") to str"
      },
      {
       "t": "tip",
       "text": "오류 메시지는 **맨 아래 줄부터** 읽으세요. 오류 종류와 이유가 거기 있습니다.\n그 위의 `line 2` 같은 표시가 몇 번째 줄이 문제인지 알려 줍니다."
      }
     ],
     "summary": "SyntaxError = 문법(괄호·따옴표), TypeError = 자료형 불일치"
    }
   ],
   "problems": [
    {
     "id": "w1-p1",
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
     "id": "w1-p2",
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
     "id": "w1-p3",
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
       "text": "글자 수가 크게 다르면 정렬이 어긋납니다. 정확한 정렬은 나중에 배울 `format()`이나 f-문자열을 씁니다."
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
     "id": "w1-p4",
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
       "text": "`%`는 짝수/홀수 판별에 자주 씁니다. `n % 2 == 0`이면 짝수입니다. 6주차에서 다시 만납니다."
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
     "id": "w1-p5",
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
     "id": "w1-p6",
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
       "text": "반지름이 `5`인 원의 **둘레**와 **넓이**를 아래 형식으로 출력하세요. 원주율은 `3.14159265`를 쓰세요."
      },
      {
       "t": "out",
       "text": "원의 둘레 = 31.4159265\n원의 넓이 = 78.53981625"
      },
      {
       "t": "p",
       "text": "둘레는 `2 × 파이 × r`, 넓이는 `파이 × r × r` 입니다."
      }
     ],
     "hints": [
      "print()에 쉼표를 쓰면 문자열과 계산 결과를 함께 출력할 수 있습니다.",
      "print(\"원의 둘레 =\", 2 * 3.14159265 * 5) 형태입니다.",
      "넓이도 같은 방식으로 3.14159265 * 5 * 5 를 계산합니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "쉼표로 구분하면 문자열과 숫자를 함께 출력할 수 있고, 사이에 공백이 자동으로 들어갑니다."
      },
      {
       "t": "tip",
       "text": "소수 계산에서는 가끔 `28.259999999999998` 처럼 끝자리가 이상하게 나옵니다.\n컴퓨터가 소수를 2진수로 저장하면서 생기는 아주 작은 오차로, 파이썬만의 문제가 아닙니다.\n이 학습 앱은 채점할 때 이런 오차를 무시하므로, 계산식만 맞으면 정답으로 처리됩니다."
      },
      {
       "t": "tip",
       "text": "같은 값(3.14159265)을 여러 번 쓰고 있죠? 2주차에서 배울 **변수**를 쓰면 `pi = 3.14159265` 한 번만 적으면 됩니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "print(\"원의 둘레 =\", 2 * 3.14159265 * 5)\nprint(\"원의 넓이 =\", 3.14159265 * 5 * 5)",
     "seed": null,
     "tests": [
      {
       "stdin": [],
       "check": null,
       "label": null,
       "expected": "원의 둘레 = 31.4159265\n원의 넓이 = 78.53981625",
       "expected_display": "원의 둘레 = 31.4159265\n원의 넓이 = 78.53981625\n"
      }
     ]
    }
   ]
  },
  {
   "id": "week2",
   "no": 2,
   "title": "변수와 입력 · 자료형 변환",
   "subtitle": "교재 3장 (스크립트 모드, 주석, input) + '변수와 입력' 단원",
   "concepts": [
    {
     "id": "w2-var",
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
       "code": "pi = 3.14159265\nr = 10\n\nprint(\"원주율 =\", pi)\nprint(\"반지름 =\", r)\nprint(\"원의 둘레 =\", 2 * pi * r)\nprint(\"원의 넓이 =\", pi * r * r)",
       "note": "값에 이름을 붙여 두면 같은 값을 여러 번 쓸 때 훨씬 편하고, 나중에 고치기도 쉽습니다.",
       "stdin": [],
       "title": null,
       "nondeterministic": false,
       "output": "원주율 = 3.14159265\n반지름 = 10\n원의 둘레 = 62.831853\n원의 넓이 = 314.159265\n",
       "is_error": false
      },
      {
       "t": "warn",
       "text": "변수 이름에는 파이썬 **예약어**를 쓸 수 없습니다.\n`and, as, assert, break, class, continue, def, del, elif, else, except, finally,\nfor, from, global, if, import, in, is, lambda, not, or, pass, raise, return, try, while, with, yield`\n또한 이름을 숫자로 시작하거나 특수문자(`&, !, @, $, *, ...`)를 넣을 수 없습니다."
      },
      {
       "t": "tip",
       "text": "좋은 변수 이름은 **저장될 내용을 설명하는 이름**입니다. `a`보다 `student_count`가 낫습니다."
      }
     ],
     "summary": "변수 = 값에 붙이는 이름표. 선언 → 할당 → 참조"
    },
    {
     "id": "w2-compound",
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
       "nondeterministic": false,
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
       "nondeterministic": false,
       "output": "string: 안녕하세요!!\n",
       "is_error": false
      },
      {
       "t": "tip",
       "text": "`+=`는 5주차 반복문에서 합계를 구할 때 거의 항상 등장합니다. 지금 익혀 두면 편합니다."
      }
     ],
     "summary": "a += 10 은 a = a + 10 의 줄임말"
    },
    {
     "id": "w2-input",
     "title": "input() — 사용자 입력 받기",
     "blocks": [
      {
       "t": "p",
       "text": "`input()`은 사용자가 키보드로 입력한 값을 받아 옵니다.\n괄호 안에 적은 문자열은 **프롬프트**로 화면에 먼저 표시됩니다.\n엔터를 누를 때까지 프로그램은 **블록**(잠시 멈춤) 상태가 됩니다."
      },
      {
       "t": "code",
       "code": "name = input(\"이름이 뭔가요?\\n\")\nprint(\"안녕\", name)",
       "note": "오른쪽 '입력값' 칸에 미리 넣어 둔 값이 순서대로 들어갑니다.",
       "stdin": [
        "김정미"
       ],
       "title": null,
       "nondeterministic": false,
       "output": "이름이 뭔가요?\n김정미\n안녕 김정미\n",
       "is_error": false
      },
      {
       "t": "warn",
       "text": "**가장 중요한 규칙:** `input()`의 결과는 사용자가 무엇을 입력하든 **무조건 문자열(str)** 입니다.\n`52273`을 입력해도 숫자 `52273`이 아니라 문자열 `\"52273\"`이 됩니다."
      },
      {
       "t": "code",
       "code": "string = input(\"입력> \")\nprint(\"자료:\", string)\nprint(\"자료형:\", type(string))",
       "note": "type() 함수로 자료형을 확인할 수 있습니다. <class 'str'> 이 나옵니다.",
       "stdin": [
        "52273"
       ],
       "title": null,
       "nondeterministic": false,
       "output": "입력> 52273\n자료: 52273\n자료형: <class 'str'>\n",
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
       "nondeterministic": false,
       "output": "입력> 300\n",
       "is_error": true,
       "error_text": "Traceback (most recent call last):\n  File \"<내 코드>\", line 2, in <module>\n    print(\"입력 + 100:\", string + 100)\nTypeError: can only concatenate str (not \"int\") to str"
      }
     ],
     "summary": "input()의 결과는 언제나 문자열(str)"
    },
    {
     "id": "w2-cast",
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
       "nondeterministic": false,
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
       "nondeterministic": false,
       "output": "첫 번째 숫자> 273\n두 번째 숫자> 52\n덧셈 결과: 325.0\n나눗셈 결과: 5.25\n",
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
       "nondeterministic": false,
       "output": "",
       "is_error": true,
       "error_text": "Traceback (most recent call last):\n  File \"<내 코드>\", line 1, in <module>\n    print(int(\"52.273\"))\nValueError: invalid literal for int() with base 10: '52.273'"
      }
     ],
     "summary": "int()/float() 문자열→숫자, str() 숫자→문자열. int(\"52.273\")은 ValueError"
    }
   ],
   "problems": [
    {
     "id": "w2-p1",
     "title": "변수로 정리하기",
     "type": "code",
     "level": 1,
     "tags": [
      "변수"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "반지름이 `5`인 원의 넓이를 출력하세요. 단, 원주율과 반지름을 각각 **변수에 저장**한 뒤 사용하세요."
      },
      {
       "t": "out",
       "text": "원의 넓이 = 78.53981625"
      },
      {
       "t": "p",
       "text": "원주율은 `3.14159265`를 쓰세요."
      }
     ],
     "hints": [
      "먼저 pi = 3.14159265 처럼 값에 이름을 붙입니다.",
      "반지름도 r = 5 로 저장하세요.",
      "print(\"원의 넓이 =\", pi * r * r) 로 출력합니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "변수를 쓰면 반지름을 바꾸고 싶을 때 `r = 5` 한 줄만 고치면 됩니다."
      },
      {
       "t": "p",
       "text": "계산식 안에서 변수는 저장된 값으로 그대로 대체됩니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "pi = 3.14159265\nr = 5\nprint(\"원의 넓이 =\", pi * r * r)",
     "seed": null,
     "tests": [
      {
       "stdin": [],
       "check": null,
       "label": null,
       "expected": "원의 넓이 = 78.53981625",
       "expected_display": "원의 넓이 = 78.53981625\n"
      }
     ]
    },
    {
     "id": "w2-p2",
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
     "id": "w2-p3",
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
      "print() 에 쉼표로 문자열과 변수를 함께 넘기면 공백이 자동으로 들어갑니다.",
      "print(\"안녕하세요\", name, \"님!\") 인데, 이러면 \"님\" 앞에도 공백이 생깁니다. 정확히 맞추려면 print(\"안녕하세요 \" + name + \" 님!\") 을 쓰세요."
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
     "id": "w2-p4",
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
     "id": "w2-p5",
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
     "id": "w2-p6",
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
      "str() 로 숫자를 문자열로 바꿔 + 로 이으세요. print(name + \" 님은 올해 \" + str(age) + \"살, 내년에는 \" + str(age + 1) + \"살입니다.\")"
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
       "text": "이 왔다 갔다 하는 변환이 번거롭죠. 실무에서는 f-문자열을 씁니다: `f\"{name} 님은 올해 {age}살\"`. 교재 범위 밖이지만 알아두면 훨씬 편합니다."
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
    }
   ]
  },
  {
   "id": "week3",
   "no": 3,
   "title": "자료형과 문자열 · 인덱싱과 슬라이싱",
   "subtitle": "교재 '자료형과 문자열' + '숫자' 단원",
   "concepts": [
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
       "nondeterministic": false,
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
     "id": "w3-make",
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
       "nondeterministic": false,
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
       "nondeterministic": false,
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
       "nondeterministic": false,
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
     "id": "w3-op",
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
       "nondeterministic": false,
       "output": "안녕하세요\n안녕하세요안녕하세요안녕하세요\n안녕하세요안녕하세요안녕하세요\n",
       "is_error": false
      },
      {
       "t": "code",
       "code": "print(\"안녕하세요\" + 1)",
       "note": "문자열과 숫자는 + 로 연결할 수 없습니다. TypeError 입니다.",
       "stdin": [],
       "title": null,
       "nondeterministic": false,
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
       "nondeterministic": false,
       "output": "안\n하\n요\n세\n",
       "is_error": false
      },
      {
       "t": "warn",
       "text": "**IndexError** — 문자 개수를 넘는 위치를 고르면 납니다.\n`\"안녕하세요\"`는 5글자이므로 쓸 수 있는 인덱스는 `0~4` 뿐입니다. `[5]`나 `[10]`은 오류입니다."
      },
      {
       "t": "code",
       "code": "print(\"안녕하세요\"[10])",
       "note": "IndexError: string index out of range",
       "stdin": [],
       "title": null,
       "nondeterministic": false,
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
       "nondeterministic": false,
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
       "nondeterministic": false,
       "output": "녕하세요\n안녕하\n",
       "is_error": false
      },
      {
       "t": "tip",
       "text": "슬라이싱은 인덱싱과 달리 **범위를 넘어가도 오류가 나지 않습니다.**\n`\"안녕하세요\"[2:100]` 은 오류 없이 `\"하세요\"` 를 돌려줍니다."
      },
      {
       "t": "p",
       "text": "문자열을 잘라 내도 **원본은 변하지 않습니다.** 새 문자열이 만들어질 뿐입니다."
      }
     ],
     "summary": "[시작:끝] — 시작은 포함, 끝은 미포함"
    },
    {
     "id": "w3-len",
     "title": "len() — 길이 구하기",
     "blocks": [
      {
       "t": "p",
       "text": "`len()`은 괄호 안 문자열의 **문자 개수**를 세어 줍니다."
      },
      {
       "t": "code",
       "code": "print(len(\"안녕하세요\"))\nprint(len(\"Hello\"))\nprint(len(\"\"))",
       "note": null,
       "stdin": [],
       "title": null,
       "nondeterministic": false,
       "output": "5\n5\n0\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "함수가 겹쳐 있으면 **괄호 안쪽부터** 실행됩니다."
      },
      {
       "t": "code",
       "code": "print(len(\"안녕하세요\"))",
       "note": "len(\"안녕하세요\") 가 5가 되고, 그 다음 print(5) 가 실행됩니다.",
       "stdin": [],
       "title": null,
       "nondeterministic": false,
       "output": "5\n",
       "is_error": false
      },
      {
       "t": "tip",
       "text": "마지막 글자를 고를 때 `문자열[len(문자열) - 1]` 로도 되지만, `문자열[-1]` 이 훨씬 간단합니다."
      }
     ],
     "summary": "len(문자열) — 문자 개수"
    }
   ],
   "problems": [
    {
     "id": "w3-p1",
     "title": "자료형 확인",
     "type": "predict",
     "level": 1,
     "tags": [
      "자료형"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "아래 코드의 실행 결과를 예측하세요."
      }
     ],
     "hints": [
      "따옴표가 있으면 문자열입니다.",
      "소수점이 없는 숫자는 int, 있는 숫자는 float 입니다.",
      "출력 형태는 <class 'str'> 처럼 나옵니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`\"52\"`는 따옴표 안에 있으므로 문자열입니다."
      },
      {
       "t": "p",
       "text": "`52`와 `52.0`은 값은 같지만 소수점 유무로 자료형이 갈립니다."
      }
     ],
     "time_limit": 10,
     "code": "print(type(\"52\"))\nprint(type(52))\nprint(type(52.0))",
     "seed": null,
     "expected": "<class 'str'>\n<class 'int'>\n<class 'float'>",
     "display": "<class 'str'>\n<class 'int'>\n<class 'float'>\n"
    },
    {
     "id": "w3-p2",
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
     "id": "w3-p3",
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
     "id": "w3-p4",
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
     "id": "w3-p5",
     "title": "이름 거꾸로, 반복해서",
     "type": "code",
     "level": 2,
     "tags": [
      "문자열 연산자"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "이름을 입력받아 아래처럼 출력하세요. 프롬프트는 `이름> ` 입니다."
      },
      {
       "t": "out",
       "text": "=====\n김정미김정미김정미\n마지막 글자: 미"
      },
      {
       "t": "p",
       "text": "입력값이 `김정미`일 때의 결과입니다. 첫 줄의 `=`는 5개입니다."
      }
     ],
     "hints": [
      "\"=\" * 5 로 = 를 5개 만들 수 있습니다.",
      "이름을 3번 반복하려면 name * 3 입니다.",
      "마지막 글자는 name[-1] 입니다. print(\"마지막 글자:\", name[-1]) 로 출력하세요."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`*` 반복 연산자는 구분선을 그릴 때 특히 유용합니다."
      },
      {
       "t": "p",
       "text": "`name[-1]`은 이름 길이와 상관없이 항상 마지막 글자를 가져옵니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "name = input(\"이름> \")\nprint(\"=\" * 5)\nprint(name * 3)\nprint(\"마지막 글자:\", name[-1])",
     "seed": null,
     "tests": [
      {
       "stdin": [
        "김정미"
       ],
       "check": null,
       "label": null,
       "expected": "=====\n김정미김정미김정미\n마지막 글자: 미",
       "expected_display": "이름> 김정미\n=====\n김정미김정미김정미\n마지막 글자: 미\n"
      },
      {
       "stdin": [
        "박기동"
       ],
       "check": null,
       "label": null,
       "expected": "=====\n박기동박기동박기동\n마지막 글자: 동",
       "expected_display": "이름> 박기동\n=====\n박기동박기동박기동\n마지막 글자: 동\n"
      }
     ]
    },
    {
     "id": "w3-p6",
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
    }
   ]
  },
  {
   "id": "week4",
   "no": 4,
   "title": "반복문 · range() · break와 continue",
   "subtitle": "교재 5장 (반복문)",
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
       "nondeterministic": false,
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
       "nondeterministic": false,
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
       "nondeterministic": false,
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
       "nondeterministic": false,
       "output": "0 = 반복 변수\n1 = 반복 변수\n2 = 반복 변수\n3 = 반복 변수\n4 = 반복 변수\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "리스트의 요소를 하나씩 꺼내 쓸 수도 있습니다."
      },
      {
       "t": "code",
       "code": "array = [273, 32, 103, 57, 52]\n\nfor element in array:\n    print(element)",
       "note": null,
       "stdin": [],
       "title": null,
       "nondeterministic": false,
       "output": "273\n32\n103\n57\n52\n",
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
       "nondeterministic": false,
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
       "nondeterministic": false,
       "output": "현재 반복 변수: 4\n현재 반복 변수: 3\n현재 반복 변수: 2\n현재 반복 변수: 1\n현재 반복 변수: 0\n\n현재 반복 변수: 4\n현재 반복 변수: 3\n현재 반복 변수: 2\n현재 반복 변수: 1\n현재 반복 변수: 0\n",
       "is_error": false
      }
     ],
     "summary": "for 변수 in 범위: — 콜론 뒤 네 칸 들여쓰기"
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
       "nondeterministic": false,
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
       "text": "리스트에 특정 값이 남아 있는 동안 반복하는 것처럼, **상태**를 조건으로 쓸 수도 있습니다."
      },
      {
       "t": "code",
       "code": "list_test = [1, 2, 1, 2]\nvalue = 2\n\nwhile value in list_test:\n    list_test.remove(value)\n\nprint(list_test)",
       "note": "remove() 는 값을 하나만 지우므로, 모두 지우려면 반복이 필요합니다.",
       "stdin": [],
       "title": null,
       "nondeterministic": false,
       "output": "[1, 1]\n",
       "is_error": false
      },
      {
       "t": "tip",
       "text": "**for 와 while 중 무엇을 쓸까?**\n반복 횟수가 정해져 있으면 `for`, '~할 때까지' 처럼 조건에 달려 있으면 `while` 이 자연스럽습니다."
      }
     ],
     "summary": "while 조건: — 조건이 참인 동안 반복. 조건을 바꿔 주는 코드를 잊지 말 것"
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
       "nondeterministic": false,
       "output": "0번째 반복문입니다.\n1번째 반복문입니다.\n2번째 반복문입니다.\n3번째 반복문입니다.\n4번째 반복문입니다.\n반복을 종료합니다.\n",
       "is_error": false
      },
      {
       "t": "code",
       "code": "numbers = [5, 15, 6, 20, 7, 25]\n\nfor number in numbers:\n    if number < 10:\n        continue\n    print(number)",
       "note": "10보다 작은 수는 건너뛰고, 10 이상만 출력합니다.",
       "stdin": [],
       "title": null,
       "nondeterministic": false,
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
     "id": "w4-p4",
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
     "id": "w4-p5",
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
      },
      {
       "t": "p",
       "text": "`1 + 2 + 3 + ... ` 식으로 계속 더해 나가면 됩니다."
      }
     ],
     "hints": [
      "sum 은 파이썬이 이미 쓰는 이름이므로 sum_value 같은 다른 이름을 쓰세요.",
      "i = 1, sum_value = 0 으로 시작해 while sum_value <= 10000: 조건으로 반복합니다.",
      "반복 안에서 sum_value += i 하고 i += 1 합니다. 반복이 끝난 뒤 i는 1 더 커져 있으니 출력할 땐 i - 1 을 쓰세요."
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
       "text": "교재 슬라이드에는 답이 `142`로 적혀 있지만, `1`부터 `141`까지 더하면 `10011`입니다.\n교재 코드가 `i - 1` 대신 `i`를 출력해서 하나 크게 나온 것입니다.\n직접 확인해 보세요. `141 × 142 ÷ 2 = 10011` 입니다."
      },
      {
       "t": "tip",
       "text": "`sum`, `list`, `str` 같은 이름은 파이썬이 이미 쓰고 있습니다. 변수 이름으로 쓰면 원래 기능을 못 쓰게 되니 피하세요."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "limit = 10000\ni = 1\nsum_value = 0\n\nwhile sum_value <= limit:\n    sum_value += i\n    i += 1\n\nprint(\"{}를 더할 때 {}을 넘으며 그때의 값은 {}입니다.\".format(i - 1, limit, sum_value))",
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
     "id": "w4-p6",
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
   "title": "불 자료형과 if 조건문",
   "subtitle": "교재 6장 (불 자료형과 if 조건문)",
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
       "nondeterministic": false,
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
       "code": "x = 15\nprint(x > 10 and x < 20)\nprint(x < 10 or x > 20)\nprint(not (x == 15))",
       "note": null,
       "stdin": [],
       "title": null,
       "nondeterministic": false,
       "output": "True\nFalse\nFalse\n",
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
       "code": "number = int(input(\"정수 입력> \"))\n\nif number % 2 == 0:\n    print(\"짝수입니다\")",
       "note": null,
       "stdin": [
        "4"
       ],
       "title": null,
       "nondeterministic": false,
       "output": "정수 입력> 4\n짝수입니다\n",
       "is_error": false
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
       "nondeterministic": false,
       "output": "",
       "is_error": true,
       "error_text": "  File \"<내 코드>\", line 2\n    print(\"들여쓰기가 없습니다\")\n    ^\nIndentationError: expected an indented block after 'if' statement on line 1"
      }
     ],
     "summary": "if 조건: — 참일 때만 들여쓴 코드 실행"
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
       "nondeterministic": false,
       "output": "정수 입력> 13\n홀수입니다\n",
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
       "nondeterministic": false,
       "output": "현재는 봄입니다.\n",
       "is_error": false
      },
      {
       "t": "tip",
       "text": "`elif`는 **위 조건이 모두 거짓일 때만** 검사합니다.\n그래서 위에서 이미 걸러진 조건은 아래에서 다시 쓸 필요가 없습니다.\n예를 들어 `if score >= 90` 다음의 `elif score >= 80` 은 `score < 90` 을 덧붙이지 않아도 됩니다.\n조건 비교가 반으로 줄고 코드 가독성도 좋아집니다."
      }
     ],
     "summary": "if / elif / else — 위에서부터 검사, 하나만 실행"
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
       "code": "if 0:\n    print(\"0은 True로 변환됩니다\")\nelse:\n    print(\"0은 False로 변환됩니다\")\n\nif \"\":\n    print(\"빈 문자열은 True로 변환됩니다\")\nelse:\n    print(\"빈 문자열은 False로 변환됩니다\")\n\nif \"안녕\":\n    print(\"내용이 있는 문자열은 True입니다\")",
       "note": null,
       "stdin": [],
       "title": null,
       "nondeterministic": false,
       "output": "0은 False로 변환됩니다\n빈 문자열은 False로 변환됩니다\n내용이 있는 문자열은 True입니다\n",
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
       "nondeterministic": false,
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
     "id": "w5-p3",
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
      "elif 는 위 조건이 거짓일 때만 검사하므로, elif score >= 80: 만 써도 됩니다. score < 90 을 덧붙일 필요가 없습니다."
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
     "id": "w5-p4",
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
       "text": "`x`는 이미 정해져 있다고 보고, `x = 15` 로 두고 작성하세요."
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
     "id": "w5-p5",
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
     "id": "w5-p6",
     "title": "계절 구하기",
     "type": "code",
     "level": 3,
     "tags": [
      "elif"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "월을 입력받아 계절을 출력하세요. 프롬프트는 `월> ` 입니다."
      },
      {
       "t": "p",
       "text": "`3~5`월 봄, `6~8`월 여름, `9~11`월 가을, 나머지(`12, 1, 2`월)는 겨울입니다."
      },
      {
       "t": "out",
       "text": "현재는 여름입니다."
      },
      {
       "t": "p",
       "text": "입력값이 `7`일 때의 결과입니다."
      }
     ],
     "hints": [
      "연쇄 비교를 쓰면 3 <= month <= 5 처럼 간단히 쓸 수 있습니다.",
      "봄, 여름, 가을을 elif 로 이어 쓰고 나머지는 else 로 처리합니다.",
      "겨울(12, 1, 2월)은 연속된 범위가 아니라서 else 로 두는 것이 가장 깔끔합니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "겨울은 `12, 1, 2`월로 범위가 끊겨 있습니다. `else`로 처리하면 조건을 따로 쓸 필요가 없습니다."
      },
      {
       "t": "p",
       "text": "`elif`는 위 조건이 거짓일 때만 검사하므로, 봄·여름·가을이 아니면 자동으로 겨울입니다."
      },
      {
       "t": "tip",
       "text": "교재에서는 `import datetime` 으로 현재 월을 가져오는 예제가 나옵니다. `now = datetime.datetime.now()` 로 만든 뒤 `now.month` 를 쓰면 오늘 날짜 기준으로 동작합니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "month = int(input(\"월> \"))\n\nif 3 <= month <= 5:\n    print(\"현재는 봄입니다.\")\nelif 6 <= month <= 8:\n    print(\"현재는 여름입니다.\")\nelif 9 <= month <= 11:\n    print(\"현재는 가을입니다.\")\nelse:\n    print(\"현재는 겨울입니다.\")",
     "seed": null,
     "tests": [
      {
       "stdin": [
        "7"
       ],
       "check": null,
       "label": null,
       "expected": "현재는 여름입니다.",
       "expected_display": "월> 7\n현재는 여름입니다.\n"
      },
      {
       "stdin": [
        "3"
       ],
       "check": null,
       "label": null,
       "expected": "현재는 봄입니다.",
       "expected_display": "월> 3\n현재는 봄입니다.\n"
      },
      {
       "stdin": [
        "11"
       ],
       "check": null,
       "label": null,
       "expected": "현재는 가을입니다.",
       "expected_display": "월> 11\n현재는 가을입니다.\n"
      },
      {
       "stdin": [
        "12"
       ],
       "check": null,
       "label": null,
       "expected": "현재는 겨울입니다.",
       "expected_display": "월> 12\n현재는 겨울입니다.\n"
      },
      {
       "stdin": [
        "1"
       ],
       "check": null,
       "label": null,
       "expected": "현재는 겨울입니다.",
       "expected_display": "월> 1\n현재는 겨울입니다.\n"
      }
     ]
    }
   ]
  },
  {
   "id": "week6",
   "no": 6,
   "title": "컨테이너 자료형 · 함수",
   "subtitle": "교재 7장 (컨테이너 자료형) + '함수' 단원",
   "concepts": [
    {
     "id": "w6-container",
     "title": "컨테이너 자료형과 괄호",
     "blocks": [
      {
       "t": "p",
       "text": "데이터를 한 개 이상 저장할 수 있는 자료형을 **컨테이너**라고 합니다.\n파이썬에서는 괄호 모양으로 종류가 구분됩니다."
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
         "딕셔너리 (dict)",
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
       "text": "문자열도 문자를 순서대로 저장하는 컨테이너와 비슷합니다. 그래서 인덱싱과 슬라이싱이 똑같이 동작합니다."
      }
     ],
     "summary": "[] 리스트 · {} 딕셔너리 · () 튜플"
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
       "nondeterministic": false,
       "output": "['one', 'two', 'three', 'four']\none\nfour\n4\n['two', 'three']\n",
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
       "code": "a = [3, 1, 2]\n\na.append(5)\nprint(a)\n\na.sort()\nprint(a)\n\na.reverse()\nprint(a)\n\na.remove(2)\nprint(a)",
       "note": null,
       "stdin": [],
       "title": null,
       "nondeterministic": false,
       "output": "[3, 1, 2, 5]\n[1, 2, 3, 5]\n[5, 3, 2, 1]\n[5, 3, 1]\n",
       "is_error": false
      },
      {
       "t": "warn",
       "text": "`sort()`와 `reverse()`는 **원본을 직접 바꾸고 아무것도 돌려주지 않습니다.**\n`a = a.sort()` 라고 쓰면 `a`가 `None`이 되어 버립니다. 그냥 `a.sort()` 라고만 쓰세요."
      },
      {
       "t": "tip",
       "text": "리스트도 `for element in my_list:` 로 반복할 수 있습니다. 4주차에서 배운 그대로입니다."
      }
     ],
     "summary": "리스트 = 순서 있고 변경 가능. append/remove/sort 등"
    },
    {
     "id": "w6-dict",
     "title": "딕셔너리(사전)",
     "blocks": [
      {
       "t": "p",
       "text": "딕셔너리는 위치가 아니라 **키(key)** 로 값을 찾습니다.\n중괄호로 만들고, 키와 값을 **콜론**으로 구분합니다."
      },
      {
       "t": "code",
       "code": "my_dictionary = {1: \"고양이\", 2: \"개\", 3: \"말\", 4: \"물고기\"}\n\nprint(my_dictionary[2])\nprint(my_dictionary.get(3))",
       "note": "키에는 문자열, 정수, 실수, 튜플을 쓸 수 있습니다.",
       "stdin": [],
       "title": null,
       "nondeterministic": false,
       "output": "개\n말\n",
       "is_error": false
      },
      {
       "t": "code",
       "code": "character = {\"name\": \"기사\", \"hp\": 200, \"level\": 5}\n\nprint(character[\"name\"])\nprint(character.keys())\nprint(character.values())\n\nfor key in character:\n    print(key, \":\", character[key])",
       "note": null,
       "stdin": [],
       "title": null,
       "nondeterministic": false,
       "output": "기사\ndict_keys(['name', 'hp', 'level'])\ndict_values(['기사', 200, 5])\nname : 기사\nhp : 200\nlevel : 5\n",
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
       "t": "tip",
       "text": "`character[\"없는키\"]` 는 `KeyError`를 냅니다. 하지만 `character.get(\"없는키\")` 는 `None`을 돌려줍니다.\n키가 있을지 확실하지 않으면 `get()`이나 `if \"키\" in character:` 를 쓰세요."
      }
     ],
     "summary": "딕셔너리 = {키: 값}. 키로 찾고 get()이 안전"
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
       "code": "my_tuple = (\"one\", \"two\", \"three\", \"four\")\n\nprint(my_tuple[1])\nprint(my_tuple[1:])\nprint(len(my_tuple))\nprint(my_tuple + (\"five\",))",
       "note": "슬라이싱, 더하기, 곱하기, 길이 구하기는 모두 가능합니다.",
       "stdin": [],
       "title": null,
       "nondeterministic": false,
       "output": "two\n('two', 'three', 'four')\n4\n('one', 'two', 'three', 'four', 'five')\n",
       "is_error": false
      },
      {
       "t": "code",
       "code": "my_tuple = (\"one\", \"two\")\nmy_tuple[0] = \"zero\"",
       "note": "TypeError — 튜플은 항목을 바꿀 수 없습니다.",
       "stdin": [],
       "title": null,
       "nondeterministic": false,
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
       "text": "값이 하나뿐인 튜플은 `(\"one\",)` 처럼 **콤마를 붙여야** 합니다. `(\"one\")` 은 그냥 문자열입니다."
      }
     ],
     "summary": "튜플 = 변경 불가. 빠르고 안전"
    },
    {
     "id": "w6-func",
     "title": "함수 만들기",
     "blocks": [
      {
       "t": "p",
       "text": "함수는 **코드의 집합**입니다. 반복되는 작업에 이름을 붙여 두고 필요할 때마다 부릅니다.\n`def 이름():` 으로 정의하고 `이름()` 으로 **호출**합니다."
      },
      {
       "t": "code",
       "code": "def print_3_times():\n    print(\"안녕하세요\")\n    print(\"안녕하세요\")\n    print(\"안녕하세요\")\n\nprint_3_times()",
       "note": null,
       "stdin": [],
       "title": null,
       "nondeterministic": false,
       "output": "안녕하세요\n안녕하세요\n안녕하세요\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "**매개변수**는 함수 호출 시 괄호 안에 넣는 값입니다. 함수가 일할 때 필요한 재료입니다."
      },
      {
       "t": "code",
       "code": "def print_n_times(value, n):\n    for i in range(n):\n        print(value)\n\nprint_n_times(\"안녕하세요\", 3)",
       "note": null,
       "stdin": [],
       "title": null,
       "nondeterministic": false,
       "output": "안녕하세요\n안녕하세요\n안녕하세요\n",
       "is_error": false
      },
      {
       "t": "warn",
       "text": "매개변수 개수가 맞지 않으면 `TypeError`가 납니다.\n`print_n_times(\"안녕\")` → `missing 1 required positional argument: 'n'`\n`print_n_times(\"안녕\", 1, 2)` → `takes 2 positional arguments but 3 were given`"
      },
      {
       "t": "p",
       "text": "**기본 매개변수**를 지정하면 값을 넣지 않았을 때 그 값이 쓰입니다."
      },
      {
       "t": "code",
       "code": "def print_n_times(value, n=2):\n    for i in range(n):\n        print(value)\n\nprint_n_times(\"안녕하세요\")\nprint()\nprint_n_times(\"안녕하세요\", 4)",
       "note": null,
       "stdin": [],
       "title": null,
       "nondeterministic": false,
       "output": "안녕하세요\n안녕하세요\n\n안녕하세요\n안녕하세요\n안녕하세요\n안녕하세요\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "**가변 매개변수** `*values` 는 값을 원하는 만큼 받습니다. 함수 안에서는 튜플처럼 씁니다."
      },
      {
       "t": "code",
       "code": "def print_all(*values):\n    for value in values:\n        print(value)\n\nprint_all(\"안녕하세요\", \"즐거운\", \"파이썬 프로그래밍\")",
       "note": null,
       "stdin": [],
       "title": null,
       "nondeterministic": false,
       "output": "안녕하세요\n즐거운\n파이썬 프로그래밍\n",
       "is_error": false
      },
      {
       "t": "warn",
       "text": "가변 매개변수 뒤에는 일반 매개변수가 올 수 없고, 가변 매개변수는 하나만 쓸 수 있습니다."
      }
     ],
     "summary": "def 이름(매개변수): — 호출은 이름()"
    },
    {
     "id": "w6-return",
     "title": "리턴",
     "blocks": [
      {
       "t": "p",
       "text": "`return`은 함수를 **호출했던 위치로 돌려보냅니다.**\n뒤에 값을 적으면 그 값을 가지고 돌아갑니다. 이 값이 **리턴값**입니다."
      },
      {
       "t": "code",
       "code": "def return_test():\n    return 100\n\nvalue = return_test()\nprint(value)",
       "note": null,
       "stdin": [],
       "title": null,
       "nondeterministic": false,
       "output": "100\n",
       "is_error": false
      },
      {
       "t": "code",
       "code": "def return_test():\n    print(\"A 위치입니다.\")\n    return\n    print(\"B 위치입니다.\")\n\nreturn_test()",
       "note": "return 을 만나면 함수가 즉시 끝나므로 B는 출력되지 않습니다.",
       "stdin": [],
       "title": null,
       "nondeterministic": false,
       "output": "A 위치입니다.\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "아무것도 리턴하지 않는 함수는 `None`을 돌려줍니다. `None`은 '없다'는 뜻입니다."
      },
      {
       "t": "code",
       "code": "def no_return():\n    print(\"출력만 합니다\")\n\nvalue = no_return()\nprint(value)",
       "note": null,
       "stdin": [],
       "title": null,
       "nondeterministic": false,
       "output": "출력만 합니다\nNone\n",
       "is_error": false
      },
      {
       "t": "p",
       "text": "일반적인 함수는 **값을 만들어 리턴**하는 형태입니다."
      },
      {
       "t": "code",
       "code": "def sum_all(start, end):\n    output = 0\n    for i in range(start, end + 1):\n        output += i\n    return output\n\nprint(\"0 to 100:\", sum_all(0, 100))\nprint(\"50 to 100:\", sum_all(50, 100))",
       "note": null,
       "stdin": [],
       "title": null,
       "nondeterministic": false,
       "output": "0 to 100: 5050\n50 to 100: 3825\n",
       "is_error": false
      },
      {
       "t": "tip",
       "text": "**print 와 return 은 다릅니다.** `print`는 화면에 보여줄 뿐이고, `return`은 값을 돌려줘서\n다른 계산에 쓸 수 있게 합니다. `sum_all(0,100) * 2` 같은 계산은 `return`이 있어야 가능합니다."
      }
     ],
     "summary": "return 값 — 함수를 끝내고 값을 돌려줌. 없으면 None"
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
      "정렬은 sort(), 뒤집기는 reverse() 입니다.",
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
     "title": "딕셔너리 만들기",
     "type": "code",
     "level": 2,
     "tags": [
      "딕셔너리",
      "for"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "아래 두 리스트를 조합해 하나의 딕셔너리를 만들어 출력하세요."
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
      "빈 딕셔너리는 character = {} 로 만듭니다.",
      "두 리스트의 같은 위치끼리 짝지어야 하므로 range(len(key_list)) 로 반복하세요.",
      "character[key_list[i]] = value_list[i] 처럼 키에 값을 넣습니다."
     ],
     "explain": [
      {
       "t": "p",
       "text": "`딕셔너리[키] = 값` 형태로 새 항목을 추가하거나 기존 값을 바꿉니다."
      },
      {
       "t": "p",
       "text": "두 리스트의 **같은 인덱스**끼리 짝지어야 해서, 요소가 아니라 인덱스로 반복했습니다."
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
     "id": "w6-p3",
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
     "id": "w6-p4",
     "title": "함수 만들기 — 방정식",
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
     "id": "w6-p5",
     "title": "가변 매개변수 — 모두 곱하기",
     "type": "code",
     "level": 3,
     "tags": [
      "함수",
      "가변 매개변수"
     ],
     "prompt": [
      {
       "t": "p",
       "text": "전달된 값들을 **모두 곱해서 리턴**하는 가변 매개변수 함수 `mul`을 만드세요."
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
       "text": "곱셈 누적의 초깃값은 반드시 `1`입니다. `0`으로 시작하면 무엇을 곱해도 결과가 `0`입니다."
      },
      {
       "t": "tip",
       "text": "덧셈 누적은 `0`, 곱셈 누적은 `1`에서 시작합니다. 각 연산의 항등원이기 때문입니다."
      }
     ],
     "time_limit": 10,
     "starter": "",
     "solution": "def mul(*values):\n    output = 1\n    for value in values:\n        output *= value\n    return output\n\nprint(mul(5, 7, 9, 10))",
     "seed": null,
     "tests": [
      {
       "stdin": [],
       "check": "def check(stdout, g):\n    mul = g.get(\"mul\")\n    if mul is None:\n        return False, \"mul 함수를 정의해야 합니다.\"\n    if mul(2, 3) != 6:\n        return False, \"mul(2, 3)은 6이어야 하는데 {} 입니다.\".format(mul(2, 3))\n    if mul(4) != 4:\n        return False, \"mul(4)는 4여야 하는데 {} 입니다.\".format(mul(4))\n    return True, \"여러 개수의 인수에 대해 정확히 동작합니다.\"",
       "label": null,
       "expected": "3150",
       "expected_display": "3150\n"
      }
     ]
    },
    {
     "id": "w6-p6",
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
       "text": "아래 함수 정의 중 **오류가 발생하는 것**을 고르세요."
      }
     ],
     "hints": [
      "가변 매개변수(*values)는 값을 남김없이 다 가져갑니다.",
      "가변 매개변수 뒤에 오는 일반 매개변수는 값을 받을 방법이 없습니다.",
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
       "text": "정리하면 **가변 매개변수 뒤에는 기본값이 있는 매개변수만** 올 수 있습니다."
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
