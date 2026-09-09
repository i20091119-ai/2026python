"""7주차 — 함수 (정의, 매개변수, 가변/기본/키워드 매개변수, 리턴)"""
from blocks import P, UL, CODE, TABLE, TIP, WARN, OUT, concept, problem, test

WEEK_NO = 7
TITLE = "함수"
SUBTITLE = "함수 정의 · 매개변수 · 가변/기본/키워드 매개변수 · 리턴"

CONCEPTS = [
    concept("w7-why", "함수는 왜 필요한가", [
        P("""
        같은 코드가 여러 번 반복되면 고칠 때마다 모든 곳을 찾아 고쳐야 합니다.
        **함수**로 묶어 두면 한 번만 고치면 됩니다.
        """),
        CODE("""
        for i in range(1, 21):
            print("*", end="")
        print("\\n안녕하세요. 홍길동입니다.")
        for i in range(1, 21):
            print("*", end="")
        print("\\n오늘도 열심히 파이썬을 배웁니다.")
        for i in range(1, 21):
            print("*", end="")
        """, note="구분선을 그리는 두 줄이 세 번 반복됩니다. 이걸 함수로 묶으면 좋겠죠."),
        P("세 가지 용어를 먼저 익혀 둡시다."),
        UL(
            "**호출(call)** — 함수를 실행하는 행위",
            "**매개변수** — 함수를 호출할 때 괄호 안에 넣는 자료",
            "**리턴값** — 함수를 호출해 최종적으로 나오는 결과",
        ),
        P("""
        이미 써 온 `len(\"안녕하세요\")` 가 그 예입니다.
        매개변수로 `\"안녕하세요\"` 를 넣으면 리턴값으로 `5` 가 나옵니다.
        """),
    ], summary="호출 · 매개변수 · 리턴값"),

    concept("w7-print", "print() 의 sep 과 end", [
        P("""
        `print` 자체도 매개변수를 가진 함수입니다. 자주 쓰는 두 가지를 알아 둡시다.
        """),
        UL(
            "**`sep`** — 값들 **사이**에 넣을 문자열 (기본값은 공백 한 칸)",
            "**`end`** — 마지막 값 **뒤**에 붙일 문자열 (기본값은 줄바꿈 `\\n`)",
        ),
        CODE("""
        print("a", "b", "c")
        print("a", "b", "c", sep="-")
        print("2026", "9", "9", sep="/")
        """, note="1주차에서 '쉼표를 쓰면 공백이 들어간다'고 한 것이 사실 sep 의 기본값 때문이었습니다."),
        CODE("""
        for i in range(1, 21):
            print("*", end="")
        print()
        print("줄바꿈 없이", end=" ")
        print("이어집니다")
        """, note="end=\"\" 로 두면 줄이 바뀌지 않아 한 줄에 이어서 출력됩니다."),
        TIP("`print()` 를 인수 없이 부르면 빈 줄이 나옵니다. `end` 의 기본값인 줄바꿈만 출력되기 때문입니다."),
    ], summary="sep 값 사이 · end 값 뒤 (기본은 줄바꿈)"),

    concept("w7-def", "함수 만들기와 매개변수", [
        P("`def 함수이름():` 으로 정의하고 `함수이름()` 으로 **호출**합니다."),
        CODE("""
        def print_3_times():
            print("안녕하세요")
            print("안녕하세요")
            print("안녕하세요")

        print_3_times()
        """),
        P("**매개변수**를 넣으면 호출할 때마다 다른 값으로 일할 수 있습니다."),
        CODE("""
        def print_n_times(value, n):
            for i in range(n):
                print(value)

        print_n_times("안녕하세요", 3)
        print()
        print_n_times("반갑습니다", 2)
        """),
        WARN("""
        **매개변수 개수가 맞지 않으면 TypeError** 입니다.
        - 부족: `missing 1 required positional argument: 'n'`
        - 초과: `takes 2 positional arguments but 3 were given`
        """),
        CODE("""
        def print_n_times(value, n):
            for i in range(n):
                print(value)

        print_n_times("안녕하세요")
        """, note="매개변수를 2개 지정했는데 1개만 넣어서 TypeError 가 납니다."),
    ], summary="def 이름(매개변수): — 호출은 이름(값)"),

    concept("w7-vararg", "가변 매개변수", [
        P("`*values` 처럼 별표를 붙이면 **원하는 만큼** 값을 받을 수 있습니다."),
        CODE("""
        def print_all(*values):
            for value in values:
                print(value)

        print_all("안녕하세요", "즐거운", "파이썬 프로그래밍")
        """, note="함수 안에서 values 는 튜플처럼 반복할 수 있습니다."),
        CODE("""
        def print_n_times(n, *values):
            for i in range(n):
                for value in values:
                    print(value)
                print()

        print_n_times(2, "안녕하세요", "즐거운")
        """, note="일반 매개변수를 앞에, 가변 매개변수를 뒤에 둡니다."),
        WARN("""
        **제약 두 가지**
        - 가변 매개변수 뒤에는 일반 매개변수가 올 수 없습니다
        - 가변 매개변수는 하나만 쓸 수 있습니다
        """),
    ], summary="*values — 값을 원하는 만큼 받아 튜플처럼 사용"),

    concept("w7-default", "기본 매개변수와 키워드 매개변수", [
        P("**기본 매개변수**는 값을 넣지 않았을 때 들어가는 값입니다."),
        CODE("""
        def print_n_times(value, n=2):
            for i in range(n):
                print(value)

        print_n_times("안녕하세요")
        print()
        print_n_times("안녕하세요", 4)
        """),
        P("""
        **키워드 매개변수**는 이름을 지정해서 값을 넘기는 방식입니다.
        순서를 지키지 않아도 되고, 중간 것만 건너뛸 수도 있습니다.
        """),
        CODE("""
        def test(a, b=10, c=100):
            print(a + b + c)

        test(10, 20, 30)
        test(a=10, b=100, c=200)
        test(c=10, a=100, b=200)
        test(10, c=200)
        """, note="마지막 호출은 b 를 생략해 기본값 10 이 쓰입니다."),
        WARN("""
        **기본 매개변수를 가변 매개변수 앞에 두면 기본값의 의미가 사라집니다.**
        `def f(n=2, *values)` 로 만들고 `f("안녕", "즐거운")` 을 호출하면
        `"안녕"` 이 `n` 에 들어가 버려 오류가 납니다.
        """),
        CODE("""
        def print_n_times(n=2, *values):
            for i in range(n):
                for value in values:
                    print(value)

        print_n_times("안녕하세요", "즐거운")
        """, note="\"안녕하세요\" 가 n 에 들어가 range(\"안녕하세요\") 가 되어 TypeError 입니다."),
        P("반대로 **가변 매개변수를 앞에** 두면 가변 쪽이 값을 모두 가져갑니다."),
        CODE("""
        def print_n_times(*values, n=2):
            for i in range(n):
                for value in values:
                    print(value)
                print()

        print_n_times("안녕하세요", "즐거운", 3)
        """, note="3 도 values 에 들어가 버리고 n 은 기본값 2 그대로입니다."),
        CODE("""
        def print_n_times(*values, n=2):
            for i in range(n):
                for value in values:
                    print(value)
                print()

        print_n_times("안녕하세요", "즐거운", n=3)
        """, note="n=3 처럼 키워드로 지정해야 제대로 전달됩니다."),
        TIP("이것이 이 단원 제목이 **키워드 매개변수** 인 이유입니다. 가변 매개변수 뒤의 값은 반드시 이름을 붙여 넘겨야 합니다."),
    ], summary="기본값은 뒤에 · 가변 뒤의 매개변수는 키워드로만 전달 가능"),

    concept("w7-return", "리턴", [
        P("""
        `return`은 함수를 **호출했던 위치로 돌려보냅니다.**
        뒤에 값을 적으면 그 값을 가지고 돌아갑니다. 이 값이 **리턴값**입니다.
        """),
        CODE("""
        def return_test():
            print("A 위치입니다.")
            return
            print("B 위치입니다.")

        return_test()
        """, note="return 을 만나면 함수가 즉시 끝나므로 B는 출력되지 않습니다."),
        CODE("""
        def return_test():
            return 100

        value = return_test()
        print(value)
        """),
        P("아무것도 리턴하지 않는 함수는 `None`을 돌려줍니다."),
        CODE("""
        def no_return():
            print("출력만 합니다")

        value = no_return()
        print(value)
        """),
        P("일반적인 함수는 **값을 만들어 리턴**하는 형태입니다."),
        CODE("""
        def sum_all(start, end):
            output = 0
            for i in range(start, end + 1):
                output += i
            return output

        print("0 to 100:", sum_all(0, 100))
        print("50 to 100:", sum_all(50, 100))

        k = sum_all(1, 10)
        print("리턴값을 변수에 담아 계산:", k * 2)
        """),
        TIP("""
        **print 와 return 은 다릅니다.** `print`는 화면에 보여줄 뿐이고,
        `return`은 값을 돌려줘서 다른 계산에 쓸 수 있게 합니다.
        `sum_all(0, 100) * 2` 같은 계산은 `return`이 있어야 가능합니다.
        """),
        WARN("""
        값을 누적할 때 **초깃값**을 잘 골라야 합니다.
        더하기는 `0`, 곱하기는 `1` 에서 시작합니다.
        곱하기를 `0` 에서 시작하면 무엇을 곱해도 결과가 `0` 입니다.
        """),
    ], summary="return 값 — 함수를 끝내고 값을 돌려줌. 없으면 None"),
]

PROBLEMS = [
    problem("w7-p1", "구분선 함수 만들기", level=1, tags=["함수", "end"],
        prompt=[
            P("별(`*`)을 `20`개 한 줄로 출력하는 함수 `line()` 을 만들고, 세 번 호출하세요."),
            OUT("********************\n********************\n********************"),
        ],
        tests=[test(check='''def check(stdout, g):
    if "line" not in g:
        return False, "line 이라는 이름의 함수를 만들어야 합니다."
    lines = [l for l in stdout.strip().split("\\n") if l]
    if len(lines) != 3:
        return False, "세 줄이 나와야 하는데 {}줄입니다. line() 을 세 번 호출했나요?".format(len(lines))
    return True, "함수를 만들고 세 번 호출했습니다."''')],
        hints=[
            "def line(): 으로 함수를 만듭니다.",
            'print("*", end="") 를 20번 반복한 뒤, print() 로 줄을 바꿉니다.',
            "함수 정의 아래에서 line() 을 세 번 쓰면 됩니다.",
        ],
        solution='def line():\n    for i in range(20):\n        print("*", end="")\n    print()\n\nline()\nline()\nline()',
        explain=[
            P("`end=\"\"` 로 두면 줄이 바뀌지 않아 별이 한 줄에 이어집니다."),
            P("반복이 끝난 뒤 `print()` 를 한 번 불러 줄을 바꿉니다."),
            TIP("함수로 묶어 두면 별 개수를 바꿀 때 함수 안 한 곳만 고치면 됩니다."),
        ]),

    problem("w7-p2", "sep 으로 형식 만들기", level=1, tags=["print", "sep"],
        prompt=[
            P("`print()` 를 **한 번만** 써서 아래처럼 출력하세요."),
            OUT("2026/9/9"),
            P("값은 `2026`, `9`, `9` 세 개를 쉼표로 넘기고, 사이를 `/` 로 이으세요."),
        ],
        tests=[test()],
        hints=[
            "print() 에 값 세 개를 쉼표로 넘기면 기본적으로 공백이 들어갑니다.",
            "값 사이에 넣을 문자열은 sep 으로 바꿀 수 있습니다.",
            'print(2026, 9, 9, sep="/") 입니다.',
        ],
        solution='print(2026, 9, 9, sep="/")',
        explain=[
            P("`sep` 의 기본값이 공백 한 칸이라 평소에는 `2026 9 9` 로 나옵니다."),
            P("`sep=\"/\"` 로 바꾸면 값 사이가 모두 `/` 로 이어집니다."),
            TIP("`sep=\"\"` 로 두면 아무것도 없이 붙어 `202699` 가 됩니다."),
        ]),

    problem("w7-p3", "매개변수 개수 오류", level=2, tags=["함수", "오류"], ptype="choice",
        prompt=[
            P("아래처럼 함수가 정의되어 있습니다."),
            OUT("def print_n_times(value, n):\n    for i in range(n):\n        print(value)"),
            P("호출 중 **오류가 발생하지 않는 것**을 고르세요."),
        ],
        options=[
            {"text": "①", "code": 'print_n_times("안녕하세요")'},
            {"text": "②", "code": 'print_n_times("안녕하세요", 10, 20)'},
            {"text": "③", "code": 'print_n_times("안녕하세요", 3)'},
            {"text": "④", "code": 'print_n_times()'},
        ],
        answer=2,
        hints=[
            "매개변수를 2개 지정했으므로 넣는 값도 2개여야 합니다.",
            "부족해도 오류, 많아도 오류입니다.",
            "값을 정확히 두 개 넣은 것은 어느 것인가요?",
        ],
        explain=[
            P("③만 값이 정확히 두 개라 정상 동작합니다."),
            P("①과 ④는 `missing ... required positional argument`, ②는 `takes 2 positional arguments but 3 were given` 이 납니다."),
            TIP("기본 매개변수를 쓰면 일부를 생략할 수 있습니다. `def print_n_times(value, n=2)` 처럼요."),
        ]),

    problem("w7-p4", "방정식을 함수로", level=2, tags=["함수", "return"],
        prompt=[
            P("아래 두 방정식을 각각 파이썬 함수로 만들고, `x = 10` 일 때의 값을 출력하세요."),
            UL("`f(x) = 2x + 1` → 함수 이름 `f`", "`g(x) = x² + 2x + 1` → 함수 이름 `g`"),
            OUT("21\n121"),
        ],
        tests=[test(check='''def check(stdout, g):
    f = g.get("f")
    gg = g.get("g")
    if f is None or gg is None:
        return False, "함수 f 와 g 를 모두 정의해야 합니다."
    if f(3) != 7:
        return False, "f(3)은 7이어야 하는데 {} 입니다.".format(f(3))
    if gg(3) != 16:
        return False, "g(3)은 16이어야 하는데 {} 입니다.".format(gg(3))
    return True, "다른 값으로도 정확히 계산됩니다."''')],
        hints=[
            "def f(x): 로 정의하고 다음 줄에 return 을 씁니다.",
            "return 2 * x + 1 처럼 계산 결과를 돌려줍니다.",
            "제곱은 x ** 2 또는 x * x 입니다. 마지막에 print(f(10)) 과 print(g(10)) 으로 출력하세요.",
        ],
        solution="def f(x):\n    return 2 * x + 1\n\ndef g(x):\n    return x ** 2 + 2 * x + 1\n\nprint(f(10))\nprint(g(10))",
        explain=[
            P("`return`이 있어야 함수 밖에서 결과를 쓸 수 있습니다. `print`만 하면 값을 돌려주지 않아 `None`이 됩니다."),
            P("매개변수 `x`는 함수를 부를 때마다 다른 값으로 채워집니다. `f(10)`이면 `x`는 `10`이 됩니다."),
            TIP("`k = f(10)` 처럼 리턴값을 변수에 담아 두면 다른 계산에도 쓸 수 있습니다."),
        ]),

    problem("w7-p5", "return 뒤의 코드", level=2, tags=["return"], ptype="predict",
        prompt=[P("아래 코드의 실행 결과를 예측하세요.")],
        code="""
        def test():
            print("A 위치입니다.")
            return
            print("B 위치입니다.")

        test()

        def no_return():
            print("출력만 합니다")

        print(no_return())
        """,
        hints=[
            "return 을 만나면 함수가 그 자리에서 끝납니다.",
            "그 아래에 코드가 있어도 실행되지 않습니다.",
            "리턴값이 없는 함수를 print() 로 감싸면 무엇이 나올까요? 파이썬은 '없음'을 None 이라고 씁니다.",
        ],
        explain=[
            P("`return` 을 만나면 함수가 즉시 끝나므로 `B 위치입니다.` 는 출력되지 않습니다."),
            P("`no_return()` 은 화면에 출력만 하고 아무것도 리턴하지 않아 `None` 을 돌려줍니다."),
            TIP("`print()` 만 하는 함수와 `return` 하는 함수의 차이를 보여주는 예입니다. 값을 계산에 쓰려면 `return` 이 필요합니다."),
        ]),

    problem("w7-p6", "키워드 매개변수", level=2, tags=["함수", "키워드"], ptype="predict",
        prompt=[
            P("아래 코드의 실행 결과를 예측하세요."),
            P("함수는 `def test(a, b=10, c=100)` 이고 `a + b + c` 를 출력합니다."),
        ],
        code="""
        def test(a, b=10, c=100):
            print(a + b + c)

        test(10, 20, 30)
        test(a=10, b=100, c=200)
        test(c=10, a=100, b=200)
        test(10, c=200)
        """,
        hints=[
            "첫 번째는 순서대로 들어갑니다. 10 + 20 + 30.",
            "키워드로 지정하면 순서를 바꿔 써도 이름대로 찾아갑니다.",
            "마지막은 b 를 생략했으니 기본값 10 이 쓰입니다.",
        ],
        explain=[
            P("1번은 순서대로 `10 + 20 + 30 = 60` 입니다."),
            P("2번과 3번은 값이 같고 순서만 다릅니다. 키워드로 지정하면 순서는 상관없어 둘 다 `310` 입니다."),
            P("4번은 `b` 를 건너뛰어 기본값 `10` 이 쓰이므로 `10 + 10 + 200 = 220` 입니다."),
            TIP("키워드 매개변수의 장점이 3번과 4번에 잘 드러납니다. 순서를 외울 필요가 없고, 중간 것만 건너뛸 수 있습니다."),
        ]),

    problem("w7-p7", "범위의 합을 구하는 함수", level=3, tags=["함수", "return"],
        prompt=[
            P("`start` 부터 `end` 까지의 정수를 모두 더해 **리턴**하는 함수 `sum_all(start, end)` 을 만드세요."),
            P("만든 뒤 아래처럼 출력하세요."),
            OUT("0 to 100: 5050\n50 to 100: 3825"),
        ],
        tests=[test(check='''def check(stdout, g):
    f = g.get("sum_all")
    if f is None:
        return False, "sum_all 함수를 정의해야 합니다."
    cases = [((0, 100), 5050), ((50, 100), 3825), ((1, 10), 55), ((5, 5), 5)]
    for args, want in cases:
        got = f(*args)
        if got != want:
            return False, "sum_all{} 는 {} 여야 하는데 {} 입니다.".format(args, want, got)
    return True, "여러 범위에서 정확히 동작합니다."''')],
        hints=[
            "함수 안에서 output = 0 으로 시작합니다.",
            "for i in range(start, end + 1): 로 반복하며 output += i 합니다. end 를 포함하려면 +1 이 필요합니다.",
            "반복이 끝난 뒤 return output 을 씁니다. print 가 아니라 return 입니다.",
        ],
        solution='''def sum_all(start, end):
    output = 0
    for i in range(start, end + 1):
        output += i
    return output

print("0 to 100:", sum_all(0, 100))
print("50 to 100:", sum_all(50, 100))''',
        explain=[
            P("`range(start, end + 1)` 처럼 `+1` 을 해야 `end` 까지 포함됩니다."),
            P("`return` 으로 값을 돌려주므로 `sum_all(0, 100) * 2` 같은 계산에도 쓸 수 있습니다."),
            TIP("이 문제는 네 가지 범위로 채점합니다. `start` 와 `end` 가 같은 경우도 있으니 확인해 보세요."),
        ]),

    problem("w7-p8", "모두 곱해서 리턴하기", level=3, tags=["함수", "가변 매개변수"],
        prompt=[
            P("전달된 값들을 **모두 곱해서 리턴**하는 가변 매개변수 함수 `mul` 을 만드세요."),
            P("`print(mul(5, 7, 9, 10))` 의 결과는 아래와 같아야 합니다."),
            OUT("3150"),
        ],
        tests=[test(check='''def check(stdout, g):
    mul = g.get("mul")
    if mul is None:
        return False, "mul 함수를 정의해야 합니다."
    if mul(5, 7, 9, 10) != 3150:
        return False, "mul(5, 7, 9, 10)은 3150이어야 하는데 {} 입니다. 더하기를 하고 있지는 않나요?".format(mul(5, 7, 9, 10))
    if mul(2, 3) != 6:
        return False, "mul(2, 3)은 6이어야 하는데 {} 입니다.".format(mul(2, 3))
    if mul(4) != 4:
        return False, "mul(4)는 4여야 하는데 {} 입니다. 초깃값이 1인지 확인하세요.".format(mul(4))
    return True, "여러 개수의 인수에 대해 정확히 동작합니다."''')],
        hints=[
            "def mul(*values): 로 정의하면 값을 원하는 만큼 받을 수 있습니다.",
            "곱셈의 누적이므로 시작값은 0이 아니라 1이어야 합니다.",
            "output = 1 로 시작해 for value in values: 안에서 output *= value 합니다. 마지막에 return output.",
        ],
        solution="def mul(*values):\n    output = 1\n    for value in values:\n        output *= value\n    return output\n\nprint(mul(5, 7, 9, 10))",
        explain=[
            P("`*values` 는 전달된 모든 값을 **튜플로 묶어** 받습니다. 그래서 `for`로 반복할 수 있습니다."),
            WARN("""
            수업 실습에서 이 문제를 풀 때 함수 이름은 `mul` 인데 안에서는 더하기를 해서
            `3150` 대신 `31` 이 나왔습니다. `5 + 7 + 9 + 10 = 31` 이죠.
            """),
            WARN("""
            `+=` 를 `*=` 로 바꾸는 것만으로는 부족합니다. **초깃값도 `1` 로 바꿔야** 합니다.
            `0` 으로 두면 무엇을 곱해도 결과가 `0` 입니다.
            """),
            TIP("덧셈 누적은 `0`, 곱셈 누적은 `1` 에서 시작합니다. 각 연산의 항등원이기 때문입니다."),
        ]),

    problem("w7-p9", "매개변수 순서 오류", level=3, tags=["함수", "가변 매개변수"], ptype="choice",
        prompt=[P("아래 함수 정의와 호출 중 **오류가 발생하는 것**을 고르세요.")],
        options=[
            {"text": "①", "code": "def function(*values, valueA, valueB):\n    pass\n\nfunction(1, 2, 3, 4, 5)"},
            {"text": "②", "code": "def function(*values, valueA=10, valueB=20):\n    pass\n\nfunction(1, 2, 3, 4, 5)"},
            {"text": "③", "code": "def function(valueA, valueB, *values):\n    pass\n\nfunction(1, 2, 3, 4, 5)"},
            {"text": "④", "code": "def function(valueA=10, valueB=20, *values):\n    pass\n\nfunction(1, 2, 3, 4, 5)"},
        ],
        answer=0,
        hints=[
            "가변 매개변수(*values)는 위치로 넘긴 값을 남김없이 다 가져갑니다.",
            "가변 매개변수 뒤에 오는 매개변수는 위치로는 값을 받을 수 없습니다.",
            "기본값이 있으면 안 넣어도 되지만, 기본값이 없으면 반드시 받아야 합니다.",
        ],
        explain=[
            P("①은 `*values`가 `1, 2, 3, 4, 5`를 모두 가져가므로 `valueA`와 `valueB`에 넣을 값이 남지 않습니다."),
            P("`TypeError: function() missing 2 required keyword-only arguments` 가 납니다."),
            P("②는 기본값이 있어 괜찮고, ③④는 일반 매개변수가 앞에 있어 순서대로 받을 수 있습니다."),
            TIP("정리하면 **가변 매개변수 뒤에는 기본값이 있는 매개변수만** 올 수 있고, 그 값은 반드시 키워드로 넘겨야 합니다."),
        ]),
]
