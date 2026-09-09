"""
공용 파이썬 실행기(runner).

- 브라우저(Pyodide)와 로컬 CPython(tools/build.py) 양쪽에서 똑같이 사용한다.
- 학습자가 작성한 코드를 실행해 출력, 오류, 시간 초과 여부를 구조화해서 돌려준다.
- input()은 미리 준비한 입력값 목록에서 순서대로 꺼내 쓰도록 바꿔치기한다.
"""
import sys
import io
import json
import time
import random
import builtins
import linecache
import traceback

FILENAME = "<내 코드>"
CHECK_FILENAME = "<채점 코드>"


class TimeLimitExceeded(BaseException):
    """실행 시간 제한을 넘겼을 때. 학습자 코드의 except 로 잡히지 않도록 BaseException 상속."""


class InputExhausted(EOFError):
    """준비된 입력값을 모두 써버렸는데 input()이 또 호출된 경우."""


class _Tee:
    """print() 출력을 화면용 버퍼와 채점용 버퍼 두 곳에 동시에 쓴다."""

    def __init__(self, display, pure):
        self.display = display
        self.pure = pure

    def write(self, s):
        self.display.write(s)
        self.pure.write(s)
        return len(s)

    def flush(self):
        pass

    # 일부 코드가 sys.stdout.encoding 등을 참조할 수 있어 최소한만 제공
    encoding = "utf-8"

    def isatty(self):
        return False


def _register_source(filename, code):
    lines = [line + "\n" for line in code.splitlines()]
    linecache.cache[filename] = (len(code), None, lines, filename)


def format_error(exc):
    """IDLE 과 비슷한 형태의 traceback 문자열과 구조화된 정보를 만든다."""
    etype = type(exc).__name__
    lines = []
    line_no = None

    if isinstance(exc, SyntaxError):
        line_no = exc.lineno
        lines.append(f'  File "{exc.filename or FILENAME}", line {exc.lineno}')
        text = (exc.text or "").rstrip("\n")
        if text:
            lines.append("    " + text.strip())
            if exc.offset:
                # 원본 줄에서 앞쪽 공백을 제거한 만큼 캐럿 위치도 당겨준다
                stripped = len(text) - len(text.lstrip())
                caret = max(exc.offset - 1 - stripped, 0)
                lines.append("    " + " " * caret + "^")
        message = exc.msg or str(exc)
        lines.append(f"{etype}: {message}")
        return {
            "type": etype,
            "message": message,
            "line": line_no,
            "traceback": "\n".join(lines),
        }

    frames = [
        f for f in traceback.extract_tb(exc.__traceback__)
        if f.filename in (FILENAME, CHECK_FILENAME)
    ]
    lines.append("Traceback (most recent call last):")
    for f in frames:
        lines.append(f'  File "{f.filename}", line {f.lineno}, in {f.name}')
        if f.line:
            lines.append("    " + f.line.strip())
    if frames:
        line_no = frames[-1].lineno
    message = str(exc)
    lines.append(f"{etype}: {message}" if message else etype)
    return {
        "type": etype,
        "message": message,
        "line": line_no,
        "traceback": "\n".join(lines),
    }


def run(code, inputs=None, time_limit=10.0, seed=None, check=None):
    """
    code       : 학습자 코드 문자열
    inputs     : input() 호출 때 순서대로 돌려줄 문자열 목록
    time_limit : 초 단위 실행 제한
    seed       : random 모듈 시드(재현이 필요할 때만)
    check      : 실행 후 추가 검사를 할 파이썬 코드. check(stdout, g) 함수를 정의해야 하며
                 (통과여부, 메시지) 튜플을 돌려준다.
    """
    inputs = list(inputs or [])
    display = io.StringIO()   # 화면에 보여줄 출력(입력 프롬프트/입력값 포함)
    pure = io.StringIO()      # 채점에 쓸 출력(프로그램이 print 한 것만)
    tee = _Tee(display, pure)

    old_stdout, old_stderr = sys.stdout, sys.stderr
    old_input = builtins.input
    old_trace = sys.gettrace()
    used_inputs = []

    def fake_input(prompt=""):
        prompt = str(prompt)
        display.write(prompt)
        if not inputs:
            raise InputExhausted(
                "입력값이 부족합니다. input()이 호출됐지만 남은 입력값이 없어요. "
                "'입력값' 칸에 값을 한 줄에 하나씩 넣어 주세요."
            )
        value = inputs.pop(0)
        used_inputs.append(value)
        display.write(value + "\n")
        return value

    _register_source(FILENAME, code)
    g = {"__name__": "__main__", "__builtins__": builtins}
    result = {
        "stdout": "",
        "display": "",
        "error": None,
        "timed_out": False,
        "inputs_used": 0,
        "inputs_left": 0,
        "check": None,
    }

    start = time.time()
    counter = [0]

    def tracer(frame, event, arg):
        counter[0] += 1
        if counter[0] % 500 == 0 and time.time() - start > time_limit:
            raise TimeLimitExceeded()
        return tracer

    sys.stdout = tee
    sys.stderr = tee
    builtins.input = fake_input
    try:
        if seed is not None:
            random.seed(seed)
        try:
            compiled = compile(code, FILENAME, "exec")
        except SyntaxError as e:  # IndentationError 포함
            result["error"] = format_error(e)
            compiled = None
        if compiled is not None:
            sys.settrace(tracer)
            try:
                exec(compiled, g)
            except TimeLimitExceeded:
                result["timed_out"] = True
                result["error"] = {
                    "type": "TimeLimitExceeded",
                    "message": f"실행 시간이 {time_limit:g}초를 넘어 중단했습니다. 무한 반복이 아닌지 확인하세요.",
                    "line": None,
                    "traceback": f"TimeLimitExceeded: 실행 시간이 {time_limit:g}초를 넘어 중단했습니다.",
                }
            except SystemExit:
                pass
            except BaseException as e:  # noqa: BLE001 - 학습자 코드의 모든 오류를 잡아야 한다
                result["error"] = format_error(e)
            finally:
                sys.settrace(old_trace)
    finally:
        sys.settrace(old_trace)
        sys.stdout, sys.stderr = old_stdout, old_stderr
        builtins.input = old_input

    result["stdout"] = pure.getvalue()
    result["display"] = display.getvalue()
    result["inputs_used"] = len(used_inputs)
    result["inputs_left"] = len(inputs)

    if check and result["error"] is None:
        result["check"] = run_check(check, result["stdout"], g)
    return result


def run_check(check_code, stdout, g):
    """채점 코드를 실행한다. check(stdout, g) -> (bool, str)"""
    _register_source(CHECK_FILENAME, check_code)
    cg = {"__name__": "__check__", "__builtins__": builtins}
    old_stdout = sys.stdout
    sys.stdout = io.StringIO()  # 채점 중 학습자 함수가 print 하더라도 화면에 섞이지 않게
    try:
        exec(compile(check_code, CHECK_FILENAME, "exec"), cg)
        fn = cg.get("check")
        if fn is None:
            return {"ok": False, "message": "채점 코드에 check 함수가 없습니다."}
        ok, message = fn(stdout, g)
        return {"ok": bool(ok), "message": str(message)}
    except BaseException as e:  # noqa: BLE001
        err = format_error(e)
        return {"ok": False, "message": "채점 중 오류: " + err["traceback"].splitlines()[-1]}
    finally:
        sys.stdout = old_stdout


def run_json(code, opts_json="{}"):
    """브라우저(Pyodide)에서 호출하기 쉽도록 JSON 문자열로 주고받는 버전."""
    opts = json.loads(opts_json) if opts_json else {}
    res = run(
        code,
        inputs=opts.get("inputs"),
        time_limit=float(opts.get("time_limit", 10.0)),
        seed=opts.get("seed"),
        check=opts.get("check"),
    )
    return json.dumps(res, ensure_ascii=False)


def normalize_output(text):
    """채점 비교용: 각 줄 끝 공백 제거, 마지막 빈 줄 제거."""
    lines = [line.rstrip() for line in text.replace("\r\n", "\n").split("\n")]
    while lines and lines[-1] == "":
        lines.pop()
    return "\n".join(lines)
