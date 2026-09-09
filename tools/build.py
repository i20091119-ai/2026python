#!/usr/bin/env python3
"""
content/week*.py 를 읽어 다음을 수행한다.

1) 모든 예제 코드(CODE 블록)를 실제 CPython 으로 실행해 출력을 채워 넣는다.
2) 모든 문제의 모범답안을 실행해 각 테스트의 기대 출력을 만든다.
3) 채점 함수가 있으면 모범답안이 실제로 통과하는지 검증한다.
4) 결과를 js/data.js 로 저장한다.

즉, 화면에 보이는 모든 출력값과 정답은 사람이 손으로 적은 것이 아니라
실제 실행 결과다. 오타로 인한 오답 처리가 생기지 않는다.
"""
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, os.path.join(ROOT, "runner"))
sys.path.insert(0, os.path.join(ROOT, "content"))

import runner  # noqa: E402

WEEKS = ["week1", "week2", "week3", "week4", "week5", "week6"]

problems_total = 0
errors = []
warnings = []


def run_code(code, stdin=None, seed=None, time_limit=10):
    return runner.run(code, inputs=stdin, time_limit=time_limit, seed=seed)


def build_concept(week_id, c):
    for b in c["blocks"]:
        if b["t"] != "code" or not b.get("live"):
            continue
        res = run_code(b["code"], b.get("stdin"), time_limit=10)
        b["output"] = res["display"]
        b["is_error"] = res["error"] is not None
        if res["error"]:
            b["error_text"] = res["error"]["traceback"]
            # 오류를 '보여주려고' 만든 예제인지 확인 (note 에 오류명이 있으면 의도된 것)
            note = (b.get("note") or "")
            etype = res["error"]["type"]
            if etype not in note and "오류" not in note and "Error" not in note:
                warnings.append(
                    f"[{week_id}/{c['id']}] 예제에서 예상치 못한 {etype}: "
                    f"{res['error']['message'][:70]}"
                )
        b.pop("live", None)
    return c


def build_problem(week_id, p):
    global problems_total
    problems_total += 1

    if p["type"] == "predict":
        res = run_code(p["code"], p.get("stdin"), seed=p.get("seed"))
        if res["error"]:
            errors.append(f"[{week_id}/{p['id']}] 예측 문제 코드에서 오류: {res['error']['traceback']}")
            return None
        p["expected"] = runner.normalize_output(res["stdout"])
        p["display"] = res["display"]
        p.pop("stdin", None)
        return p

    if p["type"] == "choice":
        if not isinstance(p.get("answer"), int) or not (0 <= p["answer"] < len(p["options"])):
            errors.append(f"[{week_id}/{p['id']}] 객관식 정답 번호가 범위를 벗어납니다.")
            return None
        return p

    # ptype == "code": 모범답안을 실행해 각 테스트의 기대 결과를 만든다
    if not p.get("solution"):
        errors.append(f"[{week_id}/{p['id']}] 모범답안이 없습니다.")
        return None

    for t in p["tests"]:
        res = run_code(p["solution"], t["stdin"], seed=p.get("seed"), time_limit=p["time_limit"])
        if res["error"]:
            errors.append(
                f"[{week_id}/{p['id']}] 모범답안 실행 오류 (입력={t['stdin']}): "
                f"{res['error']['traceback']}"
            )
            return None
        t["expected"] = runner.normalize_output(res["stdout"])
        t["expected_display"] = res["display"]

        if t.get("check"):
            chk = runner.run(p["solution"], inputs=t["stdin"], seed=p.get("seed"),
                             time_limit=p["time_limit"], check=t["check"])
            if not chk["check"] or not chk["check"]["ok"]:
                msg = chk["check"]["message"] if chk["check"] else "채점 함수 실행 실패"
                errors.append(f"[{week_id}/{p['id']}] 모범답안이 자체 채점을 통과하지 못했습니다: {msg}")
                return None
        elif not t["expected"].strip():
            warnings.append(f"[{week_id}/{p['id']}] 모범답안의 출력이 비어 있습니다 (입력={t['stdin']}).")

    if not p.get("hints"):
        warnings.append(f"[{week_id}/{p['id']}] 힌트가 없습니다.")
    return p


def main():
    weeks = []
    for i, name in enumerate(WEEKS, start=1):
        mod = __import__(name)
        week = {
            "id": name,
            "no": i,
            "title": mod.TITLE,
            "subtitle": mod.SUBTITLE,
            "concepts": [build_concept(name, c) for c in mod.CONCEPTS],
            "problems": [],
        }
        for p in mod.PROBLEMS:
            built = build_problem(name, p)
            if built:
                week["problems"].append(built)
        weeks.append(week)
        print(f"  {name}: 개념 {len(week['concepts'])}개, 문제 {len(week['problems'])}개")

    data = {"weeks": weeks}
    out = os.path.join(ROOT, "js", "data.js")
    with open(out, "w", encoding="utf-8") as f:
        f.write("// 이 파일은 tools/build.py 가 자동 생성합니다. 직접 수정하지 마세요.\n")
        f.write("window.COURSE_DATA = ")
        json.dump(data, f, ensure_ascii=False, indent=1)
        f.write(";\n")

    size = os.path.getsize(out)
    print(f"\n생성: {out} ({size / 1024:.1f} KB)")
    print(f"총 문제 수: {problems_total}")

    if warnings:
        print(f"\n경고 {len(warnings)}건:")
        for w in warnings:
            print("  -", w)
    if errors:
        print(f"\n오류 {len(errors)}건:")
        for e in errors:
            print("  -", e)
        return 1
    print("\n모든 예제와 모범답안이 정상 실행되었습니다.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
