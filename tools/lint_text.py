#!/usr/bin/env python3
"""
문구 서식 검사.

앱은 문단·목록·표·팁/주의 안에서만 `코드` 와 **굵게** 를 HTML 로 바꾼다.
그 밖의 칸(예제 설명, 힌트, 개념 요약)은 글자 그대로 보여 준다.

여기서 두 가지를 잡는다.
1) 서식이 적용되는 칸인데 변환에 실패해 `` 나 ** 가 화면에 그대로 노출되는 경우
2) 서식이 적용되지 않는 칸에 서식 기호를 써서 기호가 그대로 보이는 경우

js/app.js 의 richText 와 같은 규칙을 파이썬으로 옮겨 두었다.
둘 중 하나를 고치면 다른 쪽도 함께 고쳐야 한다.
"""
import re

PH = "\x01"

_CODE = re.compile(r"`([^`]+)`")
_BOLD = re.compile(r"\*\*(\S(?:[\s\S]*?\S)?)\*\*")
_PH = re.compile(PH + r"(\d+)" + PH)


def esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def rich_text(s):
    """js/app.js 의 richText 와 같은 변환."""
    codes = []

    def take_code(m):
        codes.append(m.group(1))
        return PH + str(len(codes) - 1) + PH

    out = _CODE.sub(take_code, esc(s))
    out = _BOLD.sub(lambda m: "<strong>" + m.group(1) + "</strong>", out)
    out = _PH.sub(lambda m: '<code class="inline">' + codes[int(m.group(1))] + "</code>", out)
    return out


MASK = "\x02"


def _mask_code(text):
    """
    백틱으로 감싼 부분을 공백이 아닌 한 글자로 바꾼다.

    공백으로 바꾸면 '**굵게 `*`**' 처럼 코드가 굵게의 끝에 붙은 경우를
    굵게로 쓰려던 것이 아니라고 잘못 판단하게 되므로, 자리를 유지하되
    공백이 아닌 글자로 둔다.
    """
    return _CODE.sub(MASK, text)


def check_rich(text, where):
    """서식이 적용되는 칸을 검사한다."""
    problems = []
    if not isinstance(text, str):
        return problems

    if text.count("`") % 2 == 1:
        problems.append((where, "백틱(`) 개수가 홀수라 코드 표기가 깨집니다", text))

    # 굵게로 쓰려던 것인지 판단한다.
    # 코드 부분을 가린 뒤에도 **...** 짝이 보이면 굵게 의도가 있는 것이다.
    # 'a ** b' 처럼 제곱 연산자로 쓴 경우는 별표 뒤가 공백이라 여기에 걸리지 않는다.
    if _BOLD.search(_mask_code(text)):
        out = rich_text(text)
        # 변환 결과에서 코드 부분을 들어낸 뒤에도 ** 가 남아 있으면 적용에 실패한 것이다
        rendered_bare = re.sub(r"<code class=\"inline\">.*?</code>", MASK, out, flags=re.S)
        if "**" in rendered_bare:
            problems.append((where, "굵게(**) 표시가 적용되지 않고 그대로 보입니다", text))

    return problems


def check_plain(text, where, kind):
    """
    글자 그대로 보여 주는 칸을 검사한다.

    이런 칸에서 ** 는 파이썬의 제곱 연산자로 쓰는 것이 정상이므로 문제 삼지 않는다.
    (힌트에 '2 ** 3' 이라고 쓰는 것이 오히려 맞다.)
    반면 백틱은 코드로 보이게 하려던 의도가 분명한데 기호가 그대로 노출되므로 잡아낸다.
    """
    problems = []
    if not isinstance(text, str):
        return problems
    if "`" in text:
        problems.append((where, f"{kind}에는 서식이 적용되지 않아 백틱이 그대로 보입니다", text))
    return problems


# 앱에서 richText 를 거치는 블록 종류
RICH_BLOCKS = {"p", "tip", "warn"}


def check_blocks(blocks, where):
    problems = []
    for i, b in enumerate(blocks or []):
        at = f"{where}[{i}]"
        t = b.get("t")
        if t in RICH_BLOCKS:
            problems += check_rich(b.get("text"), f"{at}.{t}")
        elif t == "ul":
            for j, item in enumerate(b.get("items") or []):
                problems += check_rich(item, f"{at}.ul[{j}]")
        elif t == "table":
            for j, h in enumerate(b.get("head") or []):
                problems += check_rich(h, f"{at}.표머리[{j}]")
            for ri, row in enumerate(b.get("rows") or []):
                for ci, cell in enumerate(row):
                    problems += check_rich(cell, f"{at}.표[{ri}][{ci}]")
        elif t == "code":
            # 예제 아래 설명은 글자 그대로 나온다
            problems += check_plain(b.get("note"), f"{at}.예제설명", "예제 설명")
    return problems


def check_week(week):
    """한 주차 전체를 검사해 문제 목록을 돌려준다."""
    problems = []
    no = week.get("no")

    for c in week.get("concepts", []):
        base = f"{no}주차/{c['id']}"
        problems += check_blocks(c.get("blocks"), base)
        problems += check_plain(c.get("summary"), base + ".요약", "개념 요약")

    for p in week.get("problems", []):
        base = f"{no}주차/{p['id']}"
        problems += check_blocks(p.get("prompt"), base + "/문제")
        problems += check_blocks(p.get("explain"), base + "/해설")
        for j, h in enumerate(p.get("hints") or []):
            problems += check_plain(h, f"{base}/힌트[{j}]", "힌트")
        for j, o in enumerate(p.get("options") or []):
            problems += check_plain(o.get("text"), f"{base}/보기[{j}]", "객관식 보기")

    return problems
