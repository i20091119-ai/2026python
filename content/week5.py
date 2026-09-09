"""5주차 — 불 자료형과 if 조건문 (교재 6장)"""
from blocks import P, UL, CODE, TABLE, TIP, WARN, OUT, concept, problem, test

TITLE = "불 자료형과 if 조건문"
SUBTITLE = "교재 6장 (불 자료형과 if 조건문)"

CONCEPTS = [
    concept("w5-bool", "불(bool) 자료형과 비교 연산자", [
        P("""
        불은 `True`(참)와 `False`(거짓) 두 값만 가지는 자료형입니다.
        비교 연산자의 결과가 바로 불입니다. **첫 글자는 반드시 대문자**입니다.
        """),
        CODE("""
        print(10 == 100)
        print(10 != 100)
        print(10 < 100)
        print(10 >= 100)
        print(type(10 < 100))
        """),
        P("`and`, `or`, `not` 으로 조건을 조합할 수 있습니다."),
        TABLE(["연산자", "의미", "예", "결과"], [
            ["and", "둘 다 참이어야 참", "True and False", "False"],
            ["or", "하나만 참이어도 참", "True or False", "True"],
            ["not", "참/거짓을 뒤집음", "not True", "False"],
        ]),
        CODE("""
        x = 15
        print(x > 10 and x < 20)
        print(x < 10 or x > 20)
        print(not (x == 15))
        """),
        TIP("""
        파이썬에서는 `10 < x < 20` 처럼 **연달아 비교**할 수 있습니다.
        `x > 10 and x < 20` 과 같은 뜻이면서 훨씬 읽기 좋습니다.
        """),
    ], summary="True/False. == != < > <= >= 와 and or not"),

    concept("w5-if", "if 조건문", [
        P("`if 조건:` 다음 줄부터 **네 칸 들여쓰기**한 코드는 조건이 참일 때만 실행됩니다."),
        CODE("""
        number = int(input("정수 입력> "))

        if number % 2 == 0:
            print("짝수입니다")
        """, stdin=["4"]),
        WARN("""
        **IndentationError** — `if` 다음 줄에는 반드시 들여쓰기가 있어야 합니다.
        파이썬은 들여쓰기로 코드의 소속을 판단하므로, 빠뜨리면 오류입니다. 네 칸(스페이스)이 표준입니다.
        """),
        CODE("""
        if True:
        print("들여쓰기가 없습니다")
        """, note="IndentationError: expected an indented block"),
    ], summary="if 조건: — 참일 때만 들여쓴 코드 실행"),

    concept("w5-else", "else 와 elif", [
        P("""
        정반대 상황에서 `if`를 두 번 쓰는 것은 낭비입니다.
        `else`를 쓰면 조건 비교를 **단 한 번만** 하므로 두 배 효율적입니다.
        """),
        CODE("""
        number = int(input("정수 입력> "))

        if number % 2 == 0:
            print("짝수입니다")
        else:
            print("홀수입니다")
        """, stdin=["13"]),
        P("세 개 이상의 조건을 연결할 때는 `elif`를 `if`와 `else` 사이에 넣습니다."),
        CODE("""
        month = 4

        if 3 <= month <= 5:
            print("현재는 봄입니다.")
        elif 6 <= month <= 8:
            print("현재는 여름입니다.")
        elif 9 <= month <= 11:
            print("현재는 가을입니다.")
        else:
            print("현재는 겨울입니다.")
        """),
        TIP("""
        `elif`는 **위 조건이 모두 거짓일 때만** 검사합니다.
        그래서 위에서 이미 걸러진 조건은 아래에서 다시 쓸 필요가 없습니다.
        예를 들어 `if score >= 90` 다음의 `elif score >= 80` 은 `score < 90` 을 덧붙이지 않아도 됩니다.
        조건 비교가 반으로 줄고 코드 가독성도 좋아집니다.
        """),
    ], summary="if / elif / else — 위에서부터 검사, 하나만 실행"),

    concept("w5-falsy", "False로 변환되는 값", [
        P("""
        `if`의 조건에 불이 아닌 값이 오면 자동으로 불로 변환됩니다.
        이때 **False로 변환되는 값**은 다음과 같습니다.
        """),
        UL(
            "`None`",
            "`0`, `0.0`",
            "빈 문자열 `\"\"`",
            "빈 리스트 `[]`, 빈 튜플 `()`, 빈 딕셔너리 `{}`",
        ),
        P("나머지는 모두 True로 변환됩니다."),
        CODE("""
        if 0:
            print("0은 True로 변환됩니다")
        else:
            print("0은 False로 변환됩니다")

        if "":
            print("빈 문자열은 True로 변환됩니다")
        else:
            print("빈 문자열은 False로 변환됩니다")

        if "안녕":
            print("내용이 있는 문자열은 True입니다")
        """),
        TIP("""
        이 성질 덕분에 `if len(리스트) > 0:` 대신 `if 리스트:` 라고 짧게 쓸 수 있습니다.
        '비어 있지 않으면' 이라는 뜻이 됩니다.
        """),
    ], summary="None, 0, 0.0, 빈 문자열, 빈 컨테이너가 False"),

    concept("w5-pass", "pass 키워드", [
        P("""
        전체 골격만 잡아 두고 내부는 나중에 만들고 싶을 때가 있습니다.
        하지만 `if` 다음을 비워 두면 `IndentationError`가 납니다. 이때 `pass`를 씁니다.
        """),
        CODE("""
        number = 10

        if number > 0:
            # 양수일 때: 아직 미구현 상태입니다.
            pass
        else:
            # 음수일 때: 아직 미구현 상태입니다.
            pass

        print("프로그램이 정상적으로 끝났습니다")
        """, note="pass 는 '아무것도 하지 않는다'는 뜻의 자리 채우기입니다."),
    ], summary="pass — 아무것도 하지 않고 자리만 채움"),
]

PROBLEMS = [
    problem("w5-p1", "짝수 홀수 판별", level=1, tags=["if", "else"],
        prompt=[
            P("정수를 입력받아 짝수인지 홀수인지 출력하세요. 프롬프트는 `정수 입력> ` 입니다."),
            OUT("홀수입니다"),
            P("입력값이 `13`일 때의 결과입니다. 짝수면 `짝수입니다` 를 출력합니다."),
        ],
        tests=[test(stdin=["13"]), test(stdin=["4"]), test(stdin=["0"])],
        hints=[
            "input() 의 결과는 문자열이므로 int() 로 바꿔야 계산할 수 있습니다.",
            "짝수는 2로 나눈 나머지가 0입니다. number % 2 == 0",
            "if 로 짝수를 검사하고, else 로 나머지 경우를 처리합니다.",
        ],
        solution='number = int(input("정수 입력> "))\n\nif number % 2 == 0:\n    print("짝수입니다")\nelse:\n    print("홀수입니다")',
        explain=[
            P("`%`는 나머지 연산자입니다. `2`로 나눈 나머지는 `0` 아니면 `1`뿐입니다."),
            P("`else`를 쓰면 조건을 한 번만 검사합니다. `if number % 2 == 1:` 을 또 쓰는 것보다 효율적입니다."),
            WARN("`=`와 `==`를 혼동하지 마세요. 조건에는 `==`입니다."),
        ]),

    problem("w5-p2", "중첩 조건문 예측", level=2, tags=["if", "중첩"], ptype="predict",
        prompt=[P("아래 코드의 실행 결과를 예측하세요.")],
        code="""
        x = 2
        y = 10

        if x > 4:
            if y > 2:
                print(x * y)
        else:
            print(x + y)
        """,
        hints=[
            "가장 바깥 조건부터 검사합니다. x는 2인데 4보다 큰가요?",
            "바깥 조건이 거짓이면 안쪽 if 는 아예 실행되지 않습니다.",
            "else 는 바깥 if 와 짝입니다. 들여쓰기 위치를 보세요.",
        ],
        explain=[
            P("`x > 4`가 거짓이므로 안쪽 `if`는 건너뛰고 `else`로 갑니다."),
            P("`else`는 들여쓰기 위치로 보아 **바깥 `if`의 짝**입니다. 그래서 `x + y = 12`가 출력됩니다."),
            TIP("들여쓰기가 `else`의 소속을 결정합니다. 안쪽 `if`와 짝이 되려면 네 칸 더 들여써야 합니다."),
        ]),

    problem("w5-p3", "학점 판정", level=2, tags=["elif"],
        prompt=[
            P("점수를 입력받아 학점을 출력하세요. 프롬프트는 `점수> ` 입니다."),
            P("`90` 이상 A, `80` 이상 B, `70` 이상 C, 그 미만은 F 입니다."),
            OUT("B"),
            P("입력값이 `85`일 때의 결과입니다."),
        ],
        tests=[test(stdin=["85"]), test(stdin=["90"]), test(stdin=["70"]), test(stdin=["55"])],
        hints=[
            "int() 로 숫자를 만든 뒤, 큰 값부터 차례로 검사하세요.",
            "if score >= 90: 으로 시작하고 elif 로 이어 갑니다.",
            "elif 는 위 조건이 거짓일 때만 검사하므로, elif score >= 80: 만 써도 됩니다. score < 90 을 덧붙일 필요가 없습니다.",
        ],
        solution='score = int(input("점수> "))\n\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelif score >= 70:\n    print("C")\nelse:\n    print("F")',
        explain=[
            P("`elif`는 위에서부터 순서대로 검사하고, **처음 참이 되는 하나만** 실행합니다."),
            P("`85`는 `>= 90`이 거짓이라 다음으로 넘어가고, `>= 80`이 참이라 B가 출력된 뒤 나머지는 검사하지 않습니다."),
            WARN("순서를 뒤집어 `>= 70`을 먼저 쓰면 `85`도 C가 됩니다. **큰 값부터** 검사해야 합니다."),
        ]),

    problem("w5-p4", "논리 연산자로 합치기", level=2, tags=["논리 연산자"],
        prompt=[
            P("아래 중첩 조건문과 **똑같이 동작하는** 코드를 `if` 하나로 만드세요."),
            OUT("if x > 10:\n    if x < 20:\n        print(\"조건에 맞습니다.\")"),
            P("`x`는 이미 정해져 있다고 보고, `x = 15` 로 두고 작성하세요."),
        ],
        tests=[test()],
        hints=[
            "두 조건이 모두 참이어야 하므로 and 를 씁니다.",
            "if x > 10 and x < 20: 으로 합칠 수 있습니다.",
            "파이썬에서는 10 < x < 20 처럼 연달아 쓰는 방법이 더 깔끔합니다.",
        ],
        solution='x = 15\n\nif 10 < x < 20:\n    print("조건에 맞습니다.")',
        explain=[
            P("중첩 `if`는 '둘 다 참일 때'라는 뜻이므로 `and`로 합칠 수 있습니다."),
            P("파이썬은 `10 < x < 20` 같은 연쇄 비교를 지원합니다. 수학 표기와 같아서 읽기 쉽습니다."),
            TIP("들여쓰기 단계가 줄어들면 코드가 훨씬 읽기 편해집니다. 중첩이 깊어지면 합칠 수 있는지 살펴보세요."),
        ]),

    problem("w5-p5", "False로 변환되는 값", level=2, tags=["불"], ptype="choice",
        prompt=[P("아래 값 중 `if` 조건에서 **True로 변환되는 것**을 고르세요.")],
        options=[
            {"text": "①", "code": 'if 0:'},
            {"text": "②", "code": 'if "":'},
            {"text": "③", "code": 'if "False":'},
            {"text": "④", "code": 'if []:'},
        ],
        answer=2,
        hints=[
            "False로 변환되는 값은 None, 0, 0.0, 빈 문자열, 빈 컨테이너입니다.",
            '"False" 는 빈 문자열인가요? 따옴표 안에 글자가 다섯 개 있습니다.',
            "내용이 있는 문자열은 그 내용이 무엇이든 True 입니다.",
        ],
        explain=[
            P("③의 `\"False\"`는 **글자가 들어 있는 문자열**이라 True로 변환됩니다."),
            P("불 값 `False`와 문자열 `\"False\"`는 완전히 다릅니다. 따옴표가 있으면 그냥 글자입니다."),
            WARN("`input()`의 결과는 항상 문자열이라 `if input():` 은 사용자가 그냥 엔터만 치지 않는 한 언제나 True입니다."),
        ]),

    problem("w5-p6", "계절 구하기", level=3, tags=["elif"],
        prompt=[
            P("월을 입력받아 계절을 출력하세요. 프롬프트는 `월> ` 입니다."),
            P("`3~5`월 봄, `6~8`월 여름, `9~11`월 가을, 나머지(`12, 1, 2`월)는 겨울입니다."),
            OUT("현재는 여름입니다."),
            P("입력값이 `7`일 때의 결과입니다."),
        ],
        tests=[test(stdin=["7"]), test(stdin=["3"]), test(stdin=["11"]), test(stdin=["12"]), test(stdin=["1"])],
        hints=[
            "연쇄 비교를 쓰면 3 <= month <= 5 처럼 간단히 쓸 수 있습니다.",
            "봄, 여름, 가을을 elif 로 이어 쓰고 나머지는 else 로 처리합니다.",
            "겨울(12, 1, 2월)은 연속된 범위가 아니라서 else 로 두는 것이 가장 깔끔합니다.",
        ],
        solution='month = int(input("월> "))\n\nif 3 <= month <= 5:\n    print("현재는 봄입니다.")\nelif 6 <= month <= 8:\n    print("현재는 여름입니다.")\nelif 9 <= month <= 11:\n    print("현재는 가을입니다.")\nelse:\n    print("현재는 겨울입니다.")',
        explain=[
            P("겨울은 `12, 1, 2`월로 범위가 끊겨 있습니다. `else`로 처리하면 조건을 따로 쓸 필요가 없습니다."),
            P("`elif`는 위 조건이 거짓일 때만 검사하므로, 봄·여름·가을이 아니면 자동으로 겨울입니다."),
            TIP("교재에서는 `import datetime` 으로 현재 월을 가져오는 예제가 나옵니다. `now = datetime.datetime.now()` 로 만든 뒤 `now.month` 를 쓰면 오늘 날짜 기준으로 동작합니다."),
        ]),
]
