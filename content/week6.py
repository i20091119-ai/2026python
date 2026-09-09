"""6주차 — 컨테이너 자료형 (리스트, 딕셔너리, 튜플)"""
from blocks import P, UL, CODE, TABLE, TIP, WARN, OUT, concept, problem, test

WEEK_NO = 6
TITLE = "컨테이너 자료형"
SUBTITLE = "리스트 · 딕셔너리(사전) · 튜플"

CONCEPTS = [
    concept("w6-container", "컨테이너 자료형과 괄호", [
        P("""
        지금까지 배운 자료형은 문자열, 정수, 실수처럼 값을 **하나**만 담습니다.
        **컨테이너**는 데이터를 한 개 이상 저장할 수 있는 자료형입니다.
        """),
        TABLE(["괄호", "자료형", "예", "특징"], [
            ["[대괄호]", "리스트 (list)", '["one", "two"]', "내용 변경 가능"],
            ["{중괄호}", "사전 (dict)", '{1: "고양이"}', "키로 값을 찾음"],
            ["(소괄호)", "튜플 (tuple)", '("one", "two")', "내용 변경 불가"],
        ]),
        P("""
        문자열도 문자를 순서대로 저장하는 컨테이너와 비슷합니다.
        그래서 인덱싱과 슬라이싱이 리스트와 똑같이 동작합니다.
        """),
        TIP("괄호 모양만 봐도 어떤 자료형인지 알 수 있습니다. 이게 파이썬에서 괄호를 구분해 쓰는 이유입니다."),
    ], summary="[] 리스트 · {} 사전 · () 튜플"),

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
        P("**한 리스트 안에 자료형을 섞어** 담을 수도 있습니다. 다만 연산할 때 주의해야 합니다."),
        CODE("""
        a = [1, 2, 3, 4, 5, "life", "love", "hate"]

        print(a[0])
        print(a[7])
        print(a[0] + a[1])
        """, note="0번은 숫자, 7번은 문자열입니다."),
        CODE("""
        a = [1, 2, 3, 4, 5, "life", "love", "hate"]
        print(a[0] + a[7])
        """, note="숫자와 문자열을 더하려 해서 TypeError 가 납니다."),
        CODE("""
        a = [1, 2, 3, 4, 5, "life", "love", "hate"]
        print(str(a[4]) + a[7])
        """, note="str() 로 숫자를 문자열로 바꾸면 이어 붙일 수 있습니다."),
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

        a.insert(0, 100)
        print(a)

        a.sort()
        print(a)

        a.reverse()
        print(a)

        a.remove(2)
        print(a)
        """),
        WARN("""
        `append(값)` 은 인수가 **하나**지만 `insert(위치, 값)` 은 **둘**입니다.
        `a.insert(0)` 처럼 하나만 주면 `TypeError` 가 납니다.
        """),
        WARN("""
        `sort()`와 `reverse()`는 **원본을 직접 바꾸고 아무것도 돌려주지 않습니다.**
        `a = a.sort()` 라고 쓰면 `a`가 `None`이 되어 버립니다. 그냥 `a.sort()` 라고만 쓰세요.
        """),
        WARN("""
        슬라이드에는 뒤집기가 `revers()` 로 적혀 있는데 **`e` 가 빠진 오타**입니다.
        올바른 이름은 `reverse()` 이고, 오타로 부르면 `AttributeError` 가 납니다.
        """),
    ], summary="리스트 = 순서 있고 변경 가능. append/insert/sort/reverse"),

    concept("w6-list2", "슬라이스 대입과 중첩 리스트", [
        P("슬라이싱으로 **여러 자리를 한 번에** 바꿀 수 있습니다."),
        CODE("""
        b = [6, 7, 8, 9, 10]

        b[0] = 100
        print(b)

        b[0:2] = [200, 200]
        print(b)
        """, note="[0:2] 는 0번과 1번 두 자리입니다. 그 자리를 통째로 바꿉니다."),
        P("리스트 안에 리스트를 넣을 수도 있습니다. **중첩 리스트**라고 합니다."),
        CODE("""
        c = []
        d = [1, 2, [3, 4, 5, 6, 7]]

        print(c)
        print(d)
        print(d[2])
        print(d[2][1])
        print(len(d))
        """, note="d[2] 가 안쪽 리스트이고, d[2][1] 은 그 안의 1번 값입니다."),
        TIP("`len(d)` 는 `3` 입니다. 안쪽 리스트는 통째로 **하나**로 셉니다."),
        P("리스트도 `+` 와 `*` 를 쓸 수 있습니다."),
        CODE("""
        a = [1, 2]
        b = [3, 4]

        print(a + b)
        print(a * 3)
        """),
    ], summary="b[0:2] = [...] 로 여러 자리 교체 · d[2][1] 로 중첩 접근"),

    concept("w6-dict", "사전 (딕셔너리)", [
        P("""
        사전은 위치가 아니라 **키(key)** 로 값을 찾습니다.
        중괄호로 만들고, 키와 값을 **콜론**으로 구분합니다.
        """),
        CODE("""
        my_dictionary = {1: "고양이", 2: "개", 3: "말", 4: "물고기"}

        print(my_dictionary)
        print(my_dictionary[2])
        print(my_dictionary.get(3))
        """, note="키에는 문자열, 정수, 실수, 튜플을 쓸 수 있습니다."),
        WARN("""
        **키의 자료형이 다르면 다른 키입니다.**
        `{1: "고양이"}` 의 키는 정수 `1` 이고, `{"1": "고양이"}` 의 키는 문자열 `"1"` 입니다.
        전자는 `d[1]`, 후자는 `d["1"]` 로 꺼내야 합니다.
        """),
        P("한 사전 안에 서로 다른 자료형의 키를 섞을 수도 있습니다."),
        CODE("""
        a = {1: "one", "name": "hong", 7: "seven"}

        print(a[1])
        print(a["name"])

        a[8] = "eight"
        print(a)

        del a[7]
        print(a)
        """, note="새 키에 값을 넣으면 추가되고, del 로 지웁니다."),
        TABLE(["함수", "의미"], [
            ["keys()", "키 목록"],
            ["values()", "값 목록"],
            ["items()", "키와 값의 쌍 목록"],
            ["get(키)", "키로 값 얻기 (없으면 None)"],
            ["in", "해당 키가 있는지 검사"],
            ["clear()", "모두 지우기"],
        ]),
        CODE("""
        character = {"name": "기사", "hp": 200, "level": 5}

        print(list(character.keys()))
        print(list(character.values()))

        for key in character:
            print(key, ":", character[key])
        """, note="for 로 반복하면 키가 하나씩 나옵니다."),
        WARN("""
        슬라이드에 나온 **`has_key()` 는 파이썬 3 에서 없어졌습니다.**
        파이썬 2 에서만 쓰던 함수라 지금 쓰면 `AttributeError` 가 납니다.
        키가 있는지 확인할 때는 **`in`** 을 쓰세요.
        """),
        CODE("""
        a = {"name": "hong"}

        if "name" in a:
            print("name 키가 있습니다:", a["name"])

        print(a.get("없는키"))
        print(a["없는키"])
        """, note="get() 은 없는 키에 None 을 주지만, [] 는 KeyError 를 냅니다."),
    ], summary="사전 = {키: 값}. 키로 찾고, 확인은 in, 안전하게 꺼내려면 get()"),

    concept("w6-tuple", "튜플", [
        P("""
        튜플은 리스트와 비슷하지만 **한 번 만들면 내용을 바꿀 수 없습니다.**
        소괄호로 만들고 값은 콤마로 구분합니다.
        """),
        CODE("""
        my_tuple = ("one", "two", "three", "four")

        print(my_tuple)
        print(my_tuple[1])
        print(my_tuple[1:])
        print(my_tuple + ("five",))
        print(my_tuple * 2)
        print(len(my_tuple))
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
        WARN("""
        값이 하나뿐인 튜플은 `(\"one\",)` 처럼 **콤마를 붙여야** 합니다.
        `(\"one\")` 은 그냥 괄호로 감싼 문자열입니다.
        """),
        CODE("""
        a = ("one",)
        b = ("one")

        print(type(a), a)
        print(type(b), b)
        """),
        TIP("`+` 로 튜플을 이어 붙이는 것은 **원본을 바꾸는 게 아니라 새 튜플을 만드는** 것이라 가능합니다."),
    ], summary="튜플 = 변경 불가. 값 하나면 콤마 필수"),
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
            "정렬은 sort(), 뒤집기는 reverse() 입니다. reverse 의 e 를 빠뜨리지 마세요.",
            "a = a.sort() 라고 쓰면 안 됩니다. a.sort() 만 쓰고 print(a) 로 확인하세요.",
        ],
        solution="a = [3, 1, 4, 1, 5]\n\na.append(9)\nprint(a)\n\na.sort()\nprint(a)\n\na.reverse()\nprint(a)",
        explain=[
            P("`append()`, `sort()`, `reverse()`는 모두 **원본 리스트를 직접 바꿉니다.**"),
            WARN("이 함수들은 `None`을 돌려줍니다. `a = a.sort()` 로 쓰면 `a`가 `None`이 되어 다음 줄에서 오류가 납니다."),
            TIP("슬라이드의 `revers()` 는 오타입니다. `reverse()` 로 써야 하고, 오타로 부르면 `AttributeError` 가 납니다."),
        ]),

    problem("w6-p2", "인덱스로 값 꺼내기", level=1, tags=["리스트", "인덱싱"], ptype="predict",
        prompt=[
            P("아래 코드의 실행 결과를 예측하세요."),
            P("리스트에 숫자와 문자열이 섞여 있습니다."),
        ],
        code="""
        a = [1, 2, 3, 4, 5, "life", "love", "hate"]
        print(a[0])
        print(a[5])
        print(a[-1])
        print(a[1:4])
        print(len(a))
        """,
        hints=[
            "인덱스는 0부터 셉니다. a[0] 은 첫 번째 값입니다.",
            "음수 인덱스는 뒤에서부터입니다. a[-1] 은 마지막 값입니다.",
            "슬라이싱 a[1:4] 는 1, 2, 3번이고 4번은 빠집니다. 결과는 리스트 모양으로 나옵니다.",
        ],
        explain=[
            P("`a[0]`은 `1`, `a[5]`는 `life` 입니다. 문자열은 따옴표 없이 출력됩니다."),
            P("`a[1:4]` 는 슬라이싱이라 결과가 **리스트** 입니다. `[2, 3, 4]` 처럼 대괄호가 붙습니다."),
            P("리스트 전체 길이는 `8` 입니다."),
        ]),

    problem("w6-p3", "섞인 자료형 이어 붙이기", level=2, tags=["리스트", "형변환"],
        prompt=[
            P("리스트 `a = [1, 2, 3, 4, 5, \"life\", \"love\", \"hate\"]` 가 있습니다."),
            P("`a[4]` 와 `a[7]` 을 **이어 붙여** 출력하세요."),
            OUT("5hate"),
        ],
        tests=[test()],
        hints=[
            "a[4] 는 숫자 5, a[7] 은 문자열 \"hate\" 입니다.",
            "숫자와 문자열을 그냥 + 로 이으면 TypeError 가 납니다.",
            "str() 로 숫자를 문자열로 바꾸세요. print(str(a[4]) + a[7]) 입니다.",
        ],
        solution='a = [1, 2, 3, 4, 5, "life", "love", "hate"]\nprint(str(a[4]) + a[7])',
        explain=[
            P("한 리스트에 자료형이 섞여 있으면 꺼낸 값의 자료형도 제각각입니다."),
            P("`str()` 로 숫자를 문자열로 바꾸면 `+` 로 이을 수 있습니다. 3주차의 캐스트가 여기서 다시 쓰입니다."),
            TIP("반대로 숫자끼리 더하고 싶다면 `int()` 를 쓰면 되지만, `\"hate\"` 는 숫자로 바꿀 수 없어 `ValueError` 가 납니다."),
        ]),

    problem("w6-p4", "딕셔너리 만들기", level=2, tags=["사전", "for"],
        prompt=[
            P("아래 두 리스트를 조합해 하나의 사전을 만들어 출력하세요."),
            OUT('key_list = ["name", "hp", "mp", "level"]\nvalue_list = ["기사", 200, 30, 5]'),
            P("출력 결과는 아래와 같아야 합니다."),
            OUT("{'name': '기사', 'hp': 200, 'mp': 30, 'level': 5}"),
        ],
        tests=[test()],
        hints=[
            "빈 사전은 character = {} 로 만듭니다.",
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
            P("`사전[키] = 값` 형태로 새 항목을 추가하거나 기존 값을 바꿉니다."),
            P("두 리스트의 **같은 인덱스**끼리 짝지어야 해서, 요소가 아니라 인덱스로 반복했습니다."),
            TIP("파이썬 3.7부터 사전은 **넣은 순서를 유지**합니다. 그래서 출력 순서가 리스트 순서와 같습니다."),
            TIP("실무에서는 `dict(zip(key_list, value_list))` 한 줄로 끝납니다. 교재 범위 밖이지만 알아 두면 좋습니다."),
        ]),

    problem("w6-p5", "사전에서 키 다루기", level=2, tags=["사전"],
        prompt=[
            P("사전 `{1: \"one\", \"name\": \"hong\", 7: \"seven\"}` 을 만든 뒤 아래 순서로 처리하세요."),
            UL(
                "키 `8` 에 값 `\"eight\"` 을 추가하고 사전 전체를 출력",
                "키 `7` 을 삭제하고 사전 전체를 출력",
            ),
            OUT("{1: 'one', 'name': 'hong', 7: 'seven', 8: 'eight'}\n{1: 'one', 'name': 'hong', 8: 'eight'}"),
        ],
        tests=[test()],
        hints=[
            "새 키에 값을 넣으려면 a[8] = \"eight\" 처럼 씁니다.",
            "지울 때는 del a[7] 입니다.",
            "각 단계마다 print(a) 로 전체를 출력하세요.",
        ],
        solution='a = {1: "one", "name": "hong", 7: "seven"}\n\na[8] = "eight"\nprint(a)\n\ndel a[7]\nprint(a)',
        explain=[
            P("한 사전 안에 정수 키와 문자열 키가 섞여 있어도 괜찮습니다."),
            P("없는 키에 값을 넣으면 **추가**되고, 있는 키에 넣으면 **덮어씁니다.**"),
            TIP("`del` 대신 `a.pop(7)` 을 쓰면 지우면서 값을 돌려받을 수도 있습니다."),
        ]),

    problem("w6-p6", "파이썬 3에 없는 함수", level=2, tags=["사전", "오류"], ptype="choice",
        prompt=[P("사전 `a` 에 `\"name\"` 키가 있는지 확인하려고 합니다. **오류가 발생하는 것**을 고르세요.")],
        options=[
            {"text": "①", "code": 'if "name" in a:\n    print("있습니다")'},
            {"text": "②", "code": 'if a.get("name") != None:\n    print("있습니다")'},
            {"text": "③", "code": 'if a.has_key("name"):\n    print("있습니다")'},
            {"text": "④", "code": 'if "name" in a.keys():\n    print("있습니다")'},
        ],
        answer=2,
        hints=[
            "슬라이드에 나온 함수 중 하나는 파이썬 2 에서만 쓰던 것입니다.",
            "파이썬 3 에서 키 확인은 in 연산자를 씁니다.",
            "has_key() 는 파이썬 3 에서 삭제되었습니다.",
        ],
        explain=[
            P("③이 `AttributeError: 'dict' object has no attribute 'has_key'` 를 냅니다."),
            P("`has_key()` 는 **파이썬 2 전용**이고 파이썬 3 에서는 없어졌습니다. 슬라이드에는 아직 남아 있으니 주의하세요."),
            P("파이썬 3 에서는 `in` 을 씁니다. `a.keys()` 를 거쳐도 되지만 그냥 `in a` 가 더 간단합니다."),
        ]),

    problem("w6-p7", "튜플 오류 찾기", level=2, tags=["튜플"], ptype="choice",
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

    problem("w6-p8", "중첩 리스트에서 값 꺼내기", level=3, tags=["리스트", "인덱싱"],
        prompt=[
            P("리스트 `d = [1, 2, [3, 4, 5, 6, 7]]` 이 있습니다."),
            P("아래 세 가지를 순서대로 각각 한 줄씩 출력하세요."),
            UL("`d` 의 길이", "안쪽 리스트 전체", "안쪽 리스트의 `5`"),
            OUT("3\n[3, 4, 5, 6, 7]\n5"),
        ],
        tests=[test()],
        hints=[
            "안쪽 리스트도 통째로 값 하나로 셉니다. len(d) 는 3 입니다.",
            "안쪽 리스트는 d[2] 로 꺼냅니다.",
            "그 안의 값은 대괄호를 한 번 더 씁니다. 5 는 안쪽 리스트의 2번입니다.",
        ],
        solution="d = [1, 2, [3, 4, 5, 6, 7]]\n\nprint(len(d))\nprint(d[2])\nprint(d[2][2])",
        explain=[
            P("`len(d)` 가 `3` 인 이유는 안쪽 리스트를 **하나**로 세기 때문입니다."),
            P("`d[2]` 로 안쪽 리스트를 꺼내고, 대괄호를 한 번 더 붙여 `d[2][2]` 로 그 안의 값을 꺼냅니다."),
            TIP("중첩이 깊어지면 `d[2][0][1]` 처럼 계속 이어 붙일 수 있습니다. 표(행과 열)를 다룰 때 자주 씁니다."),
        ]),
]
