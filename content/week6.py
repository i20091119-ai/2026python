"""6주차 — 컨테이너 자료형(리스트·딕셔너리·튜플)과 함수 (교재 7장 + '함수')"""
from blocks import P, UL, CODE, TABLE, TIP, WARN, OUT, concept, problem, test

TITLE = "컨테이너 자료형 · 함수"
SUBTITLE = "교재 7장 (컨테이너 자료형) + '함수' 단원"

CONCEPTS = [
    concept("w6-container", "컨테이너 자료형과 괄호", [
        P("""
        데이터를 한 개 이상 저장할 수 있는 자료형을 **컨테이너**라고 합니다.
        파이썬에서는 괄호 모양으로 종류가 구분됩니다.
        """),
        TABLE(["괄호", "자료형", "예", "특징"], [
            ["[대괄호]", "리스트 (list)", '["one", "two"]', "내용 변경 가능"],
            ["{중괄호}", "딕셔너리 (dict)", '{1: "고양이"}', "키로 값을 찾음"],
            ["(소괄호)", "튜플 (tuple)", '("one", "two")', "내용 변경 불가"],
        ]),
        P("문자열도 문자를 순서대로 저장하는 컨테이너와 비슷합니다. 그래서 인덱싱과 슬라이싱이 똑같이 동작합니다."),
    ], summary="[] 리스트 · {} 딕셔너리 · () 튜플"),

    concept("w6-list", "리스트", [
        P("리스트는 여러 값을 순서대로 저장하며, **내용을 바꿀 수 있습니다.**"),
        CODE("""
        my_list = ["one", "two", "three", "four"]

        print(my_list)
        print(my_list[0])
        print(my_list[-1])
        print(len(my_list))
        print(my_list[1:3])
        """, note="인덱싱과 슬라이싱은 문자열과 완전히 같은 규칙입니다."),
        P("리스트를 다루는 주요 함수들입니다."),
        TABLE(["함수", "의미", "예"], [
            ["append(값)", "맨 뒤에 추가", "a.append(10)"],
            ["insert(위치, 값)", "지정 위치에 삽입", "a.insert(0, 10)"],
            ["extend([...])", "여러 개를 한 번에 추가", "a.extend([10, 200])"],
            ["remove(값)", "그 값을 하나 삭제", "a.remove(10)"],
            ["pop()", "마지막 값을 꺼내며 삭제", "a.pop()"],
            ["index(값)", "그 값의 위치를 반환", "a.index(10)"],
            ["count(값)", "그 값의 개수를 셈", "a.count(10)"],
            ["sort()", "오름차순 정렬", "a.sort()"],
            ["reverse()", "순서를 뒤집음", "a.reverse()"],
        ]),
        CODE("""
        a = [3, 1, 2]

        a.append(5)
        print(a)

        a.sort()
        print(a)

        a.reverse()
        print(a)

        a.remove(2)
        print(a)
        """),
        WARN("""
        `sort()`와 `reverse()`는 **원본을 직접 바꾸고 아무것도 돌려주지 않습니다.**
        `a = a.sort()` 라고 쓰면 `a`가 `None`이 되어 버립니다. 그냥 `a.sort()` 라고만 쓰세요.
        """),
        TIP("리스트도 `for element in my_list:` 로 반복할 수 있습니다. 4주차에서 배운 그대로입니다."),
    ], summary="리스트 = 순서 있고 변경 가능. append/remove/sort 등"),

    concept("w6-dict", "딕셔너리(사전)", [
        P("""
        딕셔너리는 위치가 아니라 **키(key)** 로 값을 찾습니다.
        중괄호로 만들고, 키와 값을 **콜론**으로 구분합니다.
        """),
        CODE("""
        my_dictionary = {1: "고양이", 2: "개", 3: "말", 4: "물고기"}

        print(my_dictionary[2])
        print(my_dictionary.get(3))
        """, note="키에는 문자열, 정수, 실수, 튜플을 쓸 수 있습니다."),
        CODE("""
        character = {"name": "기사", "hp": 200, "level": 5}

        print(character["name"])
        print(character.keys())
        print(character.values())

        for key in character:
            print(key, ":", character[key])
        """),
        TABLE(["함수", "의미"], [
            ["keys()", "키 목록"],
            ["values()", "값 목록"],
            ["items()", "키와 값의 쌍 목록"],
            ["get(키)", "키로 값 얻기 (없으면 None)"],
            ["in", "해당 키가 있는지 검사"],
            ["clear()", "모두 지우기"],
        ]),
        TIP("""
        `character["없는키"]` 는 `KeyError`를 냅니다. 하지만 `character.get("없는키")` 는 `None`을 돌려줍니다.
        키가 있을지 확실하지 않으면 `get()`이나 `if "키" in character:` 를 쓰세요.
        """),
    ], summary="딕셔너리 = {키: 값}. 키로 찾고 get()이 안전"),

    concept("w6-tuple", "튜플", [
        P("""
        튜플은 리스트와 비슷하지만 **한 번 만들면 내용을 바꿀 수 없습니다.**
        소괄호로 만들고 값은 콤마로 구분합니다.
        """),
        CODE("""
        my_tuple = ("one", "two", "three", "four")

        print(my_tuple[1])
        print(my_tuple[1:])
        print(len(my_tuple))
        print(my_tuple + ("five",))
        """, note="슬라이싱, 더하기, 곱하기, 길이 구하기는 모두 가능합니다."),
        CODE("""
        my_tuple = ("one", "two")
        my_tuple[0] = "zero"
        """, note="TypeError — 튜플은 항목을 바꿀 수 없습니다."),
        UL(
            "메모리에서 빠르게 동작합니다",
            "다른 코드가 실수로 값을 바꿀 수 없어 안전합니다",
            "삽입·삭제는 불가능하지만 슬라이싱·연결·반복·길이 구하기는 가능합니다",
        ),
        WARN("값이 하나뿐인 튜플은 `(\"one\",)` 처럼 **콤마를 붙여야** 합니다. `(\"one\")` 은 그냥 문자열입니다."),
    ], summary="튜플 = 변경 불가. 빠르고 안전"),

    concept("w6-func", "함수 만들기", [
        P("""
        함수는 **코드의 집합**입니다. 반복되는 작업에 이름을 붙여 두고 필요할 때마다 부릅니다.
        `def 이름():` 으로 정의하고 `이름()` 으로 **호출**합니다.
        """),
        CODE("""
        def print_3_times():
            print("안녕하세요")
            print("안녕하세요")
            print("안녕하세요")

        print_3_times()
        """),
        P("**매개변수**는 함수 호출 시 괄호 안에 넣는 값입니다. 함수가 일할 때 필요한 재료입니다."),
        CODE("""
        def print_n_times(value, n):
            for i in range(n):
                print(value)

        print_n_times("안녕하세요", 3)
        """),
        WARN("""
        매개변수 개수가 맞지 않으면 `TypeError`가 납니다.
        `print_n_times("안녕")` → `missing 1 required positional argument: 'n'`
        `print_n_times("안녕", 1, 2)` → `takes 2 positional arguments but 3 were given`
        """),
        P("**기본 매개변수**를 지정하면 값을 넣지 않았을 때 그 값이 쓰입니다."),
        CODE("""
        def print_n_times(value, n=2):
            for i in range(n):
                print(value)

        print_n_times("안녕하세요")
        print()
        print_n_times("안녕하세요", 4)
        """),
        P("**가변 매개변수** `*values` 는 값을 원하는 만큼 받습니다. 함수 안에서는 튜플처럼 씁니다."),
        CODE("""
        def print_all(*values):
            for value in values:
                print(value)

        print_all("안녕하세요", "즐거운", "파이썬 프로그래밍")
        """),
        WARN("가변 매개변수 뒤에는 일반 매개변수가 올 수 없고, 가변 매개변수는 하나만 쓸 수 있습니다."),
    ], summary="def 이름(매개변수): — 호출은 이름()"),

    concept("w6-return", "리턴", [
        P("""
        `return`은 함수를 **호출했던 위치로 돌려보냅니다.**
        뒤에 값을 적으면 그 값을 가지고 돌아갑니다. 이 값이 **리턴값**입니다.
        """),
        CODE("""
        def return_test():
            return 100

        value = return_test()
        print(value)
        """),
        CODE("""
        def return_test():
            print("A 위치입니다.")
            return
            print("B 위치입니다.")

        return_test()
        """, note="return 을 만나면 함수가 즉시 끝나므로 B는 출력되지 않습니다."),
        P("아무것도 리턴하지 않는 함수는 `None`을 돌려줍니다. `None`은 '없다'는 뜻입니다."),
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
        """),
        TIP("""
        **print 와 return 은 다릅니다.** `print`는 화면에 보여줄 뿐이고, `return`은 값을 돌려줘서
        다른 계산에 쓸 수 있게 합니다. `sum_all(0,100) * 2` 같은 계산은 `return`이 있어야 가능합니다.
        """),
    ], summary="return 값 — 함수를 끝내고 값을 돌려줌. 없으면 None"),
]

PROBLEMS = [
    problem("w6-p1", "리스트 다루기", level=1, tags=["리스트"],
        prompt=[
            P("리스트 `[3, 1, 4, 1, 5]` 를 만든 뒤 아래 순서로 처리하고, 각 단계마다 리스트 전체를 출력하세요."),
            UL("`9`를 맨 뒤에 추가", "오름차순 정렬", "순서 뒤집기"),
            OUT("[3, 1, 4, 1, 5, 9]\n[1, 1, 3, 4, 5, 9]\n[9, 5, 4, 3, 1, 1]"),
        ],
        tests=[test()],
        hints=[
            "맨 뒤에 추가하는 함수는 append() 입니다.",
            "정렬은 sort(), 뒤집기는 reverse() 입니다.",
            "a = a.sort() 라고 쓰면 안 됩니다. a.sort() 만 쓰고 print(a) 로 확인하세요.",
        ],
        solution="a = [3, 1, 4, 1, 5]\n\na.append(9)\nprint(a)\n\na.sort()\nprint(a)\n\na.reverse()\nprint(a)",
        explain=[
            P("`append()`, `sort()`, `reverse()`는 모두 **원본 리스트를 직접 바꿉니다.**"),
            WARN("이 함수들은 `None`을 돌려줍니다. `a = a.sort()` 로 쓰면 `a`가 `None`이 되어 다음 줄에서 오류가 납니다."),
        ]),

    problem("w6-p2", "딕셔너리 만들기", level=2, tags=["딕셔너리", "for"],
        prompt=[
            P("아래 두 리스트를 조합해 하나의 딕셔너리를 만들어 출력하세요."),
            OUT('key_list = ["name", "hp", "mp", "level"]\nvalue_list = ["기사", 200, 30, 5]'),
            P("출력 결과는 아래와 같아야 합니다."),
            OUT("{'name': '기사', 'hp': 200, 'mp': 30, 'level': 5}"),
        ],
        tests=[test()],
        hints=[
            "빈 딕셔너리는 character = {} 로 만듭니다.",
            "두 리스트의 같은 위치끼리 짝지어야 하므로 range(len(key_list)) 로 반복하세요.",
            "character[key_list[i]] = value_list[i] 처럼 키에 값을 넣습니다.",
        ],
        solution='''key_list = ["name", "hp", "mp", "level"]
value_list = ["기사", 200, 30, 5]
character = {}

for i in range(len(key_list)):
    character[key_list[i]] = value_list[i]

print(character)''',
        explain=[
            P("`딕셔너리[키] = 값` 형태로 새 항목을 추가하거나 기존 값을 바꿉니다."),
            P("두 리스트의 **같은 인덱스**끼리 짝지어야 해서, 요소가 아니라 인덱스로 반복했습니다."),
            TIP("실무에서는 `dict(zip(key_list, value_list))` 한 줄로 끝납니다. 교재 범위 밖이지만 알아 두면 좋습니다."),
        ]),

    problem("w6-p3", "튜플 오류 찾기", level=2, tags=["튜플"], ptype="choice",
        prompt=[P("아래 코드 중 **오류가 발생하는 것**을 고르세요.")],
        options=[
            {"text": "①", "code": 't = ("a", "b")\nprint(t[0])'},
            {"text": "②", "code": 't = ("a", "b")\nprint(t + ("c",))'},
            {"text": "③", "code": 't = ("a", "b")\nt[0] = "z"'},
            {"text": "④", "code": 't = ("a", "b")\nprint(len(t))'},
        ],
        answer=2,
        hints=[
            "튜플은 한 번 만들면 내용을 바꿀 수 없습니다.",
            "읽기(인덱싱), 연결(+), 길이(len)는 모두 가능합니다.",
            "값을 대입해서 바꾸려는 코드는 어느 것인가요?",
        ],
        explain=[
            P("③이 `TypeError: 'tuple' object does not support item assignment` 를 냅니다."),
            P("②의 `+`는 원본을 바꾸는 게 아니라 **새 튜플을 만드는** 것이라 문제없습니다."),
            TIP("리스트였다면 ③도 정상 동작합니다. 이게 리스트와 튜플의 결정적 차이입니다."),
        ]),

    problem("w6-p4", "함수 만들기 — 방정식", level=2, tags=["함수", "return"],
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
        ]),

    problem("w6-p5", "가변 매개변수 — 모두 곱하기", level=3, tags=["함수", "가변 매개변수"],
        prompt=[
            P("전달된 값들을 **모두 곱해서 리턴**하는 가변 매개변수 함수 `mul`을 만드세요."),
            P("`print(mul(5, 7, 9, 10))` 의 결과는 아래와 같아야 합니다."),
            OUT("3150"),
        ],
        tests=[test(check='''def check(stdout, g):
    mul = g.get("mul")
    if mul is None:
        return False, "mul 함수를 정의해야 합니다."
    if mul(2, 3) != 6:
        return False, "mul(2, 3)은 6이어야 하는데 {} 입니다.".format(mul(2, 3))
    if mul(4) != 4:
        return False, "mul(4)는 4여야 하는데 {} 입니다.".format(mul(4))
    return True, "여러 개수의 인수에 대해 정확히 동작합니다."''')],
        hints=[
            "def mul(*values): 로 정의하면 값을 원하는 만큼 받을 수 있습니다.",
            "곱셈의 누적이므로 시작값은 0이 아니라 1이어야 합니다.",
            "output = 1 로 시작해 for value in values: 안에서 output *= value 합니다. 마지막에 return output.",
        ],
        solution="def mul(*values):\n    output = 1\n    for value in values:\n        output *= value\n    return output\n\nprint(mul(5, 7, 9, 10))",
        explain=[
            P("`*values` 는 전달된 모든 값을 **튜플로 묶어** 받습니다. 그래서 `for`로 반복할 수 있습니다."),
            WARN("곱셈 누적의 초깃값은 반드시 `1`입니다. `0`으로 시작하면 무엇을 곱해도 결과가 `0`입니다."),
            TIP("덧셈 누적은 `0`, 곱셈 누적은 `1`에서 시작합니다. 각 연산의 항등원이기 때문입니다."),
        ]),

    problem("w6-p6", "매개변수 순서 오류", level=3, tags=["함수", "가변 매개변수"], ptype="choice",
        prompt=[P("아래 함수 정의 중 **오류가 발생하는 것**을 고르세요.")],
        options=[
            {"text": "①", "code": "def function(*values, valueA, valueB):\n    pass\n\nfunction(1, 2, 3, 4, 5)"},
            {"text": "②", "code": "def function(*values, valueA=10, valueB=20):\n    pass\n\nfunction(1, 2, 3, 4, 5)"},
            {"text": "③", "code": "def function(valueA, valueB, *values):\n    pass\n\nfunction(1, 2, 3, 4, 5)"},
            {"text": "④", "code": "def function(valueA=10, valueB=20, *values):\n    pass\n\nfunction(1, 2, 3, 4, 5)"},
        ],
        answer=0,
        hints=[
            "가변 매개변수(*values)는 값을 남김없이 다 가져갑니다.",
            "가변 매개변수 뒤에 오는 일반 매개변수는 값을 받을 방법이 없습니다.",
            "기본값이 있으면 안 넣어도 되지만, 기본값이 없으면 반드시 받아야 합니다.",
        ],
        explain=[
            P("①은 `*values`가 `1, 2, 3, 4, 5`를 모두 가져가므로 `valueA`와 `valueB`에 넣을 값이 남지 않습니다."),
            P("`TypeError: function() missing 2 required keyword-only arguments` 가 납니다."),
            P("②는 기본값이 있어 괜찮고, ③④는 일반 매개변수가 앞에 있어 순서대로 받을 수 있습니다."),
            TIP("정리하면 **가변 매개변수 뒤에는 기본값이 있는 매개변수만** 올 수 있습니다."),
        ]),
]
