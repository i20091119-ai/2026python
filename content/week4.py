"""4주차 — 반복문: range, for, while, break, continue"""
from blocks import P, UL, CODE, TABLE, TIP, WARN, OUT, concept, problem, test

WEEK_NO = 4
TITLE = "반복문 · range() · break와 continue"
SUBTITLE = "for 반복문, while 반복문, 누적 패턴"

CONCEPTS = [
    concept("w4-range", "range() — 정수의 범위", [
        P("특정 횟수만큼 반복할 때 `for` 반복문과 함께 쓰는 값입니다. 매개변수 개수에 따라 의미가 달라집니다."),
        TABLE(["형태", "의미", "예", "결과"], [
            ["range(A)", "0부터 A-1까지", "range(5)", "[0, 1, 2, 3, 4]"],
            ["range(A, B)", "A부터 B-1까지", "range(5, 10)", "[5, 6, 7, 8, 9]"],
            ["range(A, B, C)", "A부터 B-1까지 C씩 증가", "range(0, 10, 2)", "[0, 2, 4, 6, 8]"],
        ]),
        CODE("""
        print(list(range(5)))
        print(list(range(5, 10)))
        print(list(range(0, 10, 2)))
        print(list(range(0, 10, 3)))
        """, note="range() 자체는 눈에 보이지 않아서, 확인할 때는 list() 로 감싸 봅니다."),
        WARN("""
        **끝 값은 포함되지 않습니다.** `range(0, 10)`에 `10`은 없습니다.
        `1`부터 `10`까지 반복하려면 `range(1, 11)` 이라고 써야 합니다.
        """),
        P("매개변수 안에 수식을 쓸 수도 있는데, 여기서 자주 실수가 납니다."),
        CODE("""
        n = 10
        a = range(0, n / 2)
        """, note="TypeError: 'float' object cannot be interpreted as an integer — / 는 실수를 만듭니다."),
        CODE("""
        n = 10
        print(list(range(0, n // 2)))
        """, note="정수 나누기 // 를 쓰면 정수가 나와서 정상 동작합니다."),
        TIP("`range()`의 매개변수는 **반드시 정수**여야 합니다. 나눗셈이 들어가면 `//`를 쓰세요."),
    ], summary="range(시작, 끝, 간격) — 끝은 포함 안 됨, 매개변수는 정수만"),

    concept("w4-for", "for 반복문", [
        P("`for 변수 in 범위:` 형태로 씁니다. 콜론 다음 줄은 **네 칸 들여쓰기**합니다."),
        CODE("""
        for i in range(5):
            print(str(i) + " = 반복 변수")
        """),
        P("리스트의 요소를 하나씩 꺼내 쓸 수도 있습니다."),
        CODE("""
        for a in [1, 2, 3, 4, 5]:
            print(a)
        """),
        P("**문자열도 반복할 수 있습니다.** 한 글자씩 꺼내집니다."),
        CODE("""
        for a in "Hello":
            print(a)
        """, note="리스트뿐 아니라 문자열도 for 로 하나씩 꺼낼 수 있습니다."),
        P("**몇 번째** 반복인지 알아야 할 때는 `range(len(리스트))`를 씁니다."),
        CODE("""
        array = [273, 32, 103, 57, 52]

        for i in range(len(array)):
            print("{}번째 반복: {}".format(i, array[i]))
        """, note='"{}".format(값) 은 {} 자리에 값을 끼워 넣습니다.'),
        P("**역반복문** — 큰 숫자에서 작은 숫자로 반복하는 두 가지 방법입니다."),
        CODE("""
        for i in range(4, 0 - 1, -1):
            print("현재 반복 변수: {}".format(i))

        print()

        for i in reversed(range(5)):
            print("현재 반복 변수: {}".format(i))
        """, note="reversed() 쪽이 읽기 쉬워서 더 자주 쓰입니다."),
        TIP("""
        반복이 끝난 뒤에도 반복 변수에는 **마지막 값**이 남아 있습니다.
        Thonny 의 Variables 패널에서 확인할 수 있고, 이 워크북에서도 실행 후 오른쪽에 보입니다.
        """),
    ], summary="for 변수 in 범위: — 리스트와 문자열 모두 반복 가능"),

    concept("w4-accum", "누적 패턴 — 합계 구하기", [
        P("""
        반복문에서 가장 많이 쓰는 형태입니다.
        **반복 전에 변수를 초기화**하고, **반복 안에서 `+=` 로 더해 갑니다.**
        """),
        CODE("""
        total = 0

        for a in range(1, 11):
            total = total + a

        print(total)
        """, note="1부터 10까지 더해 55가 나옵니다."),
        P("나눗셈을 누적할 수도 있습니다."),
        CODE("""
        total = 0

        for i in range(1, 6):
            total = total + 1 / i

        print(total)
        """, note="1/1 + 1/2 + 1/3 + 1/4 + 1/5 을 더한 값입니다."),
        WARN("""
        **초깃값을 잘 골라야 합니다.**
        더하기를 누적할 때는 `0`, 곱하기를 누적할 때는 `1` 에서 시작합니다.
        곱셈을 `0` 에서 시작하면 무엇을 곱해도 결과가 `0` 입니다.
        """),
        WARN("""
        `sum` 은 파이썬이 이미 쓰고 있는 이름입니다. 변수 이름으로 써도 동작은 하지만
        원래 기능을 못 쓰게 되므로 `total` 이나 `sum_value` 처럼 바꿔 쓰는 편이 좋습니다.
        """),
    ], summary="누적 = 초기화 → 반복 안에서 += · 덧셈은 0, 곱셈은 1로 시작"),

    concept("w4-while", "while 반복문", [
        P("""
        `while`은 **조건이 참인 동안** 반복합니다. 반복 횟수가 정해져 있지 않을 때 씁니다.
        """),
        CODE("""
        i = 0
        while i < 10:
            print("{}번째 반복입니다.".format(i))
            i += 1
        """, note="i += 1 이 없으면 조건이 영원히 참이라 무한 반복에 빠집니다."),
        TABLE(["연산자", "의미", "연산자", "의미"], [
            ["==", "~와 같으면", "!=", "~와 같지 않으면"],
            [">", "~보다 크면", "<", "~보다 작으면"],
            [">=", "~보다 크거나 같으면", "<=", "~보다 작거나 같으면"],
        ]),
        WARN("""
        `=`와 `==`는 완전히 다릅니다. `=`는 **값을 넣는** 것이고, `==`는 **같은지 비교**하는 것입니다.
        조건에는 반드시 `==`를 쓰세요.
        """),
        P("`for` 로 쓴 것을 `while` 로 바꿀 수도 있습니다. 수업에서 해 본 방식입니다."),
        CODE("""
        # for 방식
        total = 0
        for i in range(1, 6):
            total += 1 / i
        print(total)

        # 같은 일을 while 로
        total = 0
        i = 1
        while i <= 5:
            total += 1 / i
            i = i + 1
        print(total)
        """, note="range(1, 6) 과 while i <= 5 가 같은 범위입니다."),
        TIP("""
        **for 와 while 중 무엇을 쓸까?**
        반복 횟수가 정해져 있으면 `for`, '~할 때까지' 처럼 조건에 달려 있으면 `while` 이 자연스럽습니다.
        """),
    ], summary="while 조건: — 조건이 참인 동안 반복"),

    concept("w4-break", "break 와 continue", [
        P("`break`는 반복문을 **완전히 빠져나가고**, `continue`는 **이번 회차만 건너뛰고** 다음 반복으로 갑니다."),
        CODE("""
        i = 0
        while True:
            print("{}번째 반복문입니다.".format(i))
            i = i + 1
            if i >= 5:
                print("반복을 종료합니다.")
                break
        """, note="while True: 는 무한 반복입니다. 안에 break 가 반드시 있어야 합니다."),
        CODE("""
        numbers = [5, 15, 6, 20, 7, 25]

        for number in numbers:
            if number < 10:
                continue
            print(number)
        """, note="10보다 작은 수는 건너뛰고, 10 이상만 출력합니다."),
        TIP("""
        `continue` 없이 `if number >= 10:` 안에 코드를 넣어도 결과는 같습니다.
        하지만 `continue`를 쓰면 **이후 처리의 들여쓰기를 한 단계 줄일 수 있어** 코드가 읽기 편해집니다.
        """),
    ], summary="break 반복 탈출 · continue 이번 회차 건너뛰기"),
]

PROBLEMS = [
    problem("w4-p1", "range 채우기", level=1, tags=["range"], ptype="predict",
        prompt=[P("아래 코드의 실행 결과를 예측하세요.")],
        code="""
        print(list(range(5)))
        print(list(range(4, 6)))
        print(list(range(7, 0, -1)))
        print(list(range(3, 10, 3)))
        """,
        hints=[
            "매개변수가 한 개면 0부터 시작합니다.",
            "끝 값은 포함되지 않습니다. range(4, 6) 은 4와 5뿐입니다.",
            "세 번째 매개변수가 -1 이면 거꾸로 셉니다. 7, 6, 5, ... 1 까지입니다.",
        ],
        explain=[
            P("`range(5)`는 `0`부터 `4`까지입니다."),
            P("`range(7, 0, -1)`은 `7`에서 시작해 `1`씩 줄어들고, 끝 값 `0`은 포함하지 않아 `1`에서 멈춥니다."),
            P("`range(3, 10, 3)`은 `3, 6, 9`입니다. 다음은 `12`인데 `10`을 넘어 멈춥니다."),
        ]),

    problem("w4-p2", "구구단 한 단", level=1, tags=["for", "range"],
        prompt=[
            P("`7`단을 출력하세요. `1`부터 `9`까지 곱해야 합니다."),
            OUT("7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63"),
        ],
        tests=[test()],
        hints=[
            "1부터 9까지 반복하려면 range(1, 10) 입니다. 끝 값은 포함되지 않는 걸 기억하세요.",
            "for i in range(1, 10): 으로 시작하고 다음 줄은 네 칸 들여쓰기합니다.",
            'print("7 x", i, "=", 7 * i) 로 출력할 수 있습니다.',
        ],
        solution='for i in range(1, 10):\n    print("7 x", i, "=", 7 * i)',
        explain=[
            P("`range(1, 10)`이라 `1`부터 `9`까지 아홉 번 반복합니다."),
            P("반복 변수 `i`가 매 회차마다 다음 값으로 바뀌면서 곱셈에 쓰입니다."),
            TIP("`range(1, 9)`로 쓰면 `8`까지만 나옵니다. 끝 값 미포함 규칙에서 나오는 가장 흔한 실수입니다."),
        ]),

    problem("w4-p3", "문자열 한 글자씩", level=1, tags=["for", "문자열"],
        prompt=[
            P("문자열 `\"Hello\"` 의 각 글자를 한 줄에 하나씩 출력하세요."),
            OUT("H\ne\nl\nl\no"),
        ],
        tests=[test()],
        hints=[
            "문자열도 for 반복문으로 하나씩 꺼낼 수 있습니다.",
            'for a in "Hello": 형태로 씁니다.',
            "반복문 안에서 print(a) 를 하면 됩니다.",
        ],
        solution='for a in "Hello":\n    print(a)',
        explain=[
            P("문자열은 문자를 순서대로 담은 컨테이너와 비슷해서 `for` 로 반복할 수 있습니다."),
            P("반복이 끝난 뒤 `a` 에는 마지막 글자 `'o'` 가 남아 있습니다. 오른쪽 Variables 에서 확인해 보세요."),
            TIP("`range(len(\"Hello\"))` 로 인덱스를 돌려도 되지만, 글자 자체가 필요하면 이 방식이 훨씬 간단합니다."),
        ]),

    problem("w4-p4", "1부터 100까지 합", level=2, tags=["for", "누적"],
        prompt=[
            P("`1`부터 `100`까지 모든 정수의 합을 출력하세요."),
            OUT("5050"),
        ],
        tests=[test()],
        hints=[
            "합을 담을 변수를 먼저 0으로 만들어 두세요. total = 0",
            "반복문 안에서 total += i 로 계속 더합니다.",
            "반복이 모두 끝난 뒤에 print(total) 합니다. 들여쓰기 위치에 주의하세요.",
        ],
        solution="total = 0\nfor i in range(1, 101):\n    total += i\nprint(total)",
        explain=[
            P("**누적 변수** 패턴입니다. 반복 전에 `0`으로 초기화하고, 반복 안에서 `+=`로 더해 갑니다."),
            WARN("`print(total)`을 들여쓰기 안에 넣으면 100번 출력됩니다. 반복이 끝난 뒤 한 번만 출력하려면 들여쓰기를 빼야 합니다."),
            TIP("변수 이름을 `sum` 으로 쓰지 마세요. 파이썬이 이미 쓰는 이름입니다."),
        ]),

    problem("w4-p5", "짝수만 출력", level=2, tags=["continue", "for"],
        prompt=[
            P("`1`부터 `10`까지 중 **짝수만** 한 줄에 하나씩 출력하세요. 단, `continue`를 사용하세요."),
            OUT("2\n4\n6\n8\n10"),
        ],
        tests=[test()],
        hints=[
            "짝수는 2로 나눈 나머지가 0인 수입니다. i % 2 == 0",
            "홀수일 때 건너뛰려면 if i % 2 == 1: continue 를 씁니다.",
            "for i in range(1, 11): 안에서 조건에 맞으면 continue, 아니면 print(i) 입니다.",
        ],
        solution="for i in range(1, 11):\n    if i % 2 == 1:\n        continue\n    print(i)",
        explain=[
            P("`continue`를 만나면 그 아래 코드를 실행하지 않고 다음 반복으로 넘어갑니다."),
            P("`if i % 2 == 0: print(i)` 로도 같은 결과가 나옵니다. `continue`는 건너뛸 조건이 여러 개일 때 더 유리합니다."),
            TIP("`range(2, 11, 2)`로 아예 짝수만 만들어 반복하는 방법도 있습니다. 조건 검사 자체가 필요 없어집니다."),
        ]),

    problem("w4-p6", "for 를 while 로 바꾸기", level=2, tags=["while", "누적"],
        prompt=[
            P("아래 `for` 반복문과 **똑같이 동작하는** 코드를 `while` 로 작성하세요."),
            OUT("total = 0\nfor i in range(1, 11):\n    total += i\nprint(total)"),
            P("출력 결과는 `55` 입니다."),
        ],
        tests=[test()],
        hints=[
            "먼저 i 를 시작값 1 로 만들어 둡니다.",
            "range(1, 11) 은 1부터 10까지이므로 조건은 while i <= 10: 입니다.",
            "반복문 안에서 total 을 더한 뒤 i = i + 1 로 값을 키워야 합니다.",
        ],
        solution="total = 0\ni = 1\nwhile i <= 10:\n    total += i\n    i = i + 1\nprint(total)",
        explain=[
            P("`for`는 반복 변수를 자동으로 키워 주지만, `while`은 **직접 키워야** 합니다."),
            P("`range(1, 11)`과 `while i <= 10`이 같은 범위입니다. 끝 값 처리가 어떻게 다른지 보세요."),
            TIP("수업에서도 `for` 로 만든 코드를 주석 처리하고 `while` 로 바꿔 보셨습니다. 두 방식을 오가며 연습하면 반복의 구조가 잘 보입니다."),
        ]),

    problem("w4-p7", "몇을 더할 때 10000을 넘는가", level=3, tags=["while", "누적"],
        prompt=[
            P("`1`부터 숫자를 하나씩 증가시키며 더해 나갈 때, **몇을 더하는 순간 합이 10000을 넘는지** 구하세요."),
            P("그때의 합도 함께 출력합니다. 출력 형식은 아래와 같습니다."),
            OUT("141를 더할 때 10000을 넘으며 그때의 값은 10011입니다."),
        ],
        tests=[test()],
        hints=[
            "sum 은 파이썬이 이미 쓰는 이름이므로 total 같은 다른 이름을 쓰세요.",
            "i = 1, total = 0 으로 시작해 while total <= 10000: 조건으로 반복합니다.",
            "반복 안에서 total += i 하고 i += 1 합니다. 반복이 끝난 뒤 i는 1 더 커져 있으니 출력할 땐 i - 1 을 쓰세요.",
        ],
        solution='''limit = 10000
i = 1
total = 0

while total <= limit:
    total += i
    i += 1

print("{}를 더할 때 {}을 넘으며 그때의 값은 {}입니다.".format(i - 1, limit, total))''',
        explain=[
            P("`while`은 반복 횟수를 미리 알 수 없을 때 씁니다. 여기서는 '넘을 때까지'가 조건입니다."),
            P("반복이 끝났을 때 `i`는 이미 한 번 더 증가한 상태라 `i - 1`이 실제로 마지막에 더한 수입니다."),
            WARN("""
            교재 슬라이드에는 답이 `142`로 적혀 있지만, `1`부터 `141`까지 더하면 `10011`입니다.
            교재 코드가 `i - 1` 대신 `i`를 출력해서 하나 크게 나온 것입니다.
            `141 × 142 ÷ 2 = 10011` 로 확인할 수 있습니다.
            """),
        ]),

    problem("w4-p8", "구구단 전체", level=3, tags=["for", "중첩 반복문"],
        prompt=[
            P("`2`단부터 `4`단까지 출력하세요. 각 단 사이에는 빈 줄을 하나 넣습니다."),
            OUT("2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n\n3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n\n4 x 1 = 4\n4 x 2 = 8\n4 x 3 = 12\n"),
            P("곱하는 수는 `1`부터 `3`까지만 합니다. 마지막 단 뒤에도 빈 줄이 하나 있습니다."),
        ],
        tests=[test()],
        hints=[
            "반복문 안에 반복문을 넣는 중첩 반복문이 필요합니다.",
            "바깥은 단(2~4), 안쪽은 곱하는 수(1~3)입니다.",
            "안쪽 반복이 끝난 뒤 print() 를 쓰면 빈 줄이 나옵니다. 들여쓰기는 바깥 반복문 안쪽입니다.",
        ],
        solution='for dan in range(2, 5):\n    for i in range(1, 4):\n        print(dan, "x", i, "=", dan * i)\n    print()',
        explain=[
            P("중첩 반복문에서는 **안쪽 반복이 전부 끝나야** 바깥 반복이 한 번 진행됩니다."),
            P("`print()`를 인수 없이 부르면 빈 줄이 출력됩니다. 위치가 안쪽 반복문 밖, 바깥 반복문 안이어야 각 단마다 한 번씩 나옵니다."),
            TIP("들여쓰기 단계가 곧 소속을 뜻합니다. 여덟 칸은 안쪽 반복문, 네 칸은 바깥 반복문에 속합니다."),
        ]),
]
