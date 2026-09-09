"""
학습 내용을 기술할 때 쓰는 작은 도우미들.

개념 설명은 '블록' 목록으로 표현한다.
  P("문단")                  일반 문단 (**굵게**, `코드` 사용 가능)
  UL("항목", ...)            글머리 목록
  CODE("코드", note=..., stdin=[...], title=..., live=True)
                             실행 가능한 코드 예제. build 시 CPython 으로 실행해 결과를 함께 저장한다.
  TABLE(["머리", ...], [[...], ...])
  TIP("문단")                초록색 팁 상자
  WARN("문단")               주황색 주의 상자
  OUT("텍스트")              고정된 실행 결과 표시 (직접 실행하지 않는 경우)
"""
from textwrap import dedent


def _clean(code):
    return dedent(code).strip("\n")


def P(text):
    return {"t": "p", "text": dedent(text).strip()}


def UL(*items):
    return {"t": "ul", "items": [dedent(i).strip() for i in items]}


def CODE(code, note=None, stdin=None, title=None, live=True, nondeterministic=False):
    return {
        "t": "code",
        "code": _clean(code),
        "note": note,
        "stdin": list(stdin) if stdin else [],
        "title": title,
        "live": live,
        "nondeterministic": nondeterministic,
    }


def TABLE(head, rows):
    return {"t": "table", "head": list(head), "rows": [list(r) for r in rows]}


def TIP(text):
    return {"t": "tip", "text": dedent(text).strip()}


def WARN(text):
    return {"t": "warn", "text": dedent(text).strip()}


def OUT(text):
    return {"t": "out", "text": _clean(text)}


def concept(cid, title, blocks, summary=None):
    return {"id": cid, "title": title, "blocks": list(blocks), "summary": summary}


def problem(pid, title, *, level=1, tags=(), prompt=(), starter="", tests=(), hints=(),
            solution="", explain=(), ptype="code", options=None, answer=None, code=None,
            stdin=None, seed=None, time_limit=10):
    """
    ptype = "code"    : 코드를 작성해 실행 결과(또는 채점 함수)로 채점
            "predict" : 코드를 보고 실행 결과를 예측해 입력
            "choice"  : 객관식
    tests : [{"stdin": [...], "check": "python code"}, ...]  expected 는 build 가 채워 넣는다
    """
    p = {
        "id": pid,
        "title": title,
        "type": ptype,
        "level": level,
        "tags": list(tags),
        "prompt": list(prompt),
        "hints": [dedent(h).strip() for h in hints],
        "explain": list(explain),
        "time_limit": time_limit,
    }
    if ptype == "code":
        p["starter"] = _clean(starter) if starter else ""
        p["solution"] = _clean(solution)
        p["seed"] = seed
        p["tests"] = [
            {"stdin": list(t.get("stdin", [])), "check": (dedent(t["check"]).strip() if t.get("check") else None),
             "label": t.get("label")}
            for t in (tests or [{"stdin": []}])
        ]
    elif ptype == "predict":
        p["code"] = _clean(code)
        p["stdin"] = list(stdin or [])
        p["seed"] = seed
    elif ptype == "choice":
        p["options"] = [
            {"text": o.get("text", ""), "code": _clean(o["code"]) if o.get("code") else None}
            for o in options
        ]
        p["answer"] = answer
    return p


def test(stdin=(), check=None, label=None):
    return {"stdin": list(stdin), "check": check, "label": label}
