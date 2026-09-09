/**
 * 브라우저에서 파이썬 코드를 실행하는 모듈 (Skulpt 사용).
 *
 * runner/runner.py 와 같은 규칙으로 동작하도록 맞춰 두었다.
 *  - input() 의 프롬프트는 '화면 표시용' 출력에만 들어가고, 채점용 출력에는 들어가지 않는다.
 *  - 입력값은 미리 준비한 목록에서 순서대로 꺼내 쓴다.
 *  - 무한 반복은 실행 시간 제한으로 끊는다.
 *
 * tools/verify_skulpt.js 가 이 규칙이 CPython 과 일치하는지 검사한다.
 */
(function (global) {
  "use strict";

  var EXEC_LIMIT_MS = 8000;

  function ready() {
    return typeof global.Sk !== "undefined" && typeof global.Sk.importMainWithBody === "function";
  }

  /**
   * 실수 표현 차이를 흡수한다.
   * 파이썬(CPython)과 브라우저 엔진은 0.1 + 0.2 같은 계산의 끝자리를 다르게 표시할 수 있다.
   * 유효숫자 12자리로 반올림해 비교하면 이런 차이 때문에 정답이 오답 처리되는 일을 막을 수 있다.
   */
  function normalizeFloats(text) {
    return text.replace(/-?\d+\.\d+(e[+-]?\d+)?/gi, function (tok) {
      var n = parseFloat(tok);
      if (!isFinite(n)) return tok;
      var r = parseFloat(n.toPrecision(12));
      var out = String(r);
      // 파이썬은 325.0 처럼 소수점을 유지하므로, 원본에 소수점이 있었으면 살려 둔다
      if (out.indexOf(".") === -1 && out.indexOf("e") === -1 && out.indexOf("E") === -1) {
        out += ".0";
      }
      return out;
    });
  }

  /** 줄 끝 공백과 마지막 빈 줄을 정리한다. */
  function normalize(text) {
    var lines = String(text == null ? "" : text).replace(/\r\n/g, "\n").split("\n");
    for (var i = 0; i < lines.length; i++) lines[i] = lines[i].replace(/\s+$/, "");
    while (lines.length && lines[lines.length - 1] === "") lines.pop();
    return lines.join("\n");
  }

  /** 채점용 비교: 공백/빈 줄 정리 + 실수 오차 무시 */
  function sameOutput(a, b) {
    return normalizeFloats(normalize(a)) === normalizeFloats(normalize(b));
  }

  /** Skulpt 의 오류 객체를 사람이 읽을 수 있는 형태로 바꾼다. */
  function formatError(err) {
    var name = (err && err.tp$name) || (err && err.constructor && err.constructor.name) || "Error";
    var text;
    try {
      text = err.toString();
    } catch (e) {
      text = String(err);
    }

    // Skulpt 는 "TypeError: ... on line 3" 형태로 알려 준다
    var line = null;
    if (err && err.traceback && err.traceback.length && err.traceback[0].lineno) {
      line = err.traceback[0].lineno;
    } else {
      var m = /on line (\d+)/.exec(text);
      if (m) line = parseInt(m[1], 10);
    }

    var type = name;
    var m2 = /^([A-Za-z_][A-Za-z0-9_]*Error|[A-Za-z_][A-Za-z0-9_]*Exception|TimeLimitError)\b/.exec(text);
    if (m2) type = m2[1];

    var message = text.replace(/^[A-Za-z_][A-Za-z0-9_]*:\s*/, "").replace(/\s*on line \d+\s*$/, "");

    var friendly = FRIENDLY[type];
    return {
      type: type,
      message: message,
      line: line,
      text: text,
      hint: friendly || null,
    };
  }

  // 자주 나오는 오류에 대한 한국어 도움말
  var FRIENDLY = {
    SyntaxError:
      "문법이 잘못됐습니다. 괄호나 따옴표를 빠뜨리지 않았는지, 조건문·반복문 끝에 콜론(:)을 붙였는지 확인하세요.",
    IndentationError:
      "들여쓰기가 잘못됐습니다. if·for·while·def 다음 줄은 네 칸 들여써야 합니다.",
    TypeError:
      "자료형이 맞지 않습니다. 문자열과 숫자를 + 로 붙이려 했다면 int() 나 str() 로 형을 맞춰 주세요.",
    ValueError:
      "값을 변환할 수 없습니다. int(\"52.273\") 처럼 소수점이 있는 문자열은 float() 를 써야 합니다.",
    NameError:
      "정의되지 않은 이름입니다. 변수 이름의 철자를 확인하거나, 문자열을 따옴표로 감쌌는지 확인하세요.",
    IndexError:
      "범위를 벗어난 위치를 골랐습니다. 인덱스는 0부터 시작하고, 마지막은 길이 - 1 입니다.",
    KeyError: "딕셔너리에 없는 키입니다. get() 을 쓰거나 in 으로 먼저 확인하세요.",
    AttributeError: "그 자료형에는 없는 함수입니다. 함수 이름의 철자를 확인하세요.",
    ZeroDivisionError: "0으로 나눌 수 없습니다.",
    TimeLimitError:
      "실행 시간이 너무 깁니다. 반복문의 조건이 언젠가 거짓이 되는지, 무한 반복이 아닌지 확인하세요.",
  };

  /**
   * 파이썬 코드를 실행한다.
   * opts: { inputs: [...], timeLimit: ms }
   * 반환: { stdout, display, error, timedOut, inputsUsed, inputsLeft }
   */
  function run(code, opts) {
    opts = opts || {};
    var queue = (opts.inputs || []).slice();
    var used = 0;
    var pure = [];     // 채점용: print() 로 출력된 것만
    var display = [];  // 화면용: 프롬프트와 입력값까지 포함

    if (!ready()) {
      return {
        stdout: "",
        display: "",
        error: {
          type: "EngineError",
          message: "파이썬 실행기를 아직 불러오지 못했습니다. 잠시 후 다시 시도하세요.",
          line: null,
          text: "실행기 준비 안 됨",
          hint: null,
        },
        timedOut: false,
        inputsUsed: 0,
        inputsLeft: queue.length,
        variables: [],
      };
    }

    global.Sk.configure({
      output: function (t) {
        pure.push(t);
        display.push(t);
      },
      inputfun: function (prompt) {
        // 프롬프트는 화면에만 보여 주고 채점 대상에서는 뺀다 (CPython 실행기와 동일한 규칙)
        if (prompt) display.push(String(prompt));
        if (queue.length === 0) {
          throw new global.Sk.builtin.EOFError(
            "입력값이 부족합니다. input() 이 호출됐지만 남은 입력값이 없어요. 입력값 칸을 확인하세요."
          );
        }
        var v = queue.shift();
        used++;
        display.push(v + "\n");
        return v;
      },
      inputfunTakesPrompt: true,
      read: function (x) {
        if (
          global.Sk.builtinFiles === undefined ||
          global.Sk.builtinFiles["files"][x] === undefined
        ) {
          throw new Error("모듈을 찾을 수 없습니다: '" + x + "'");
        }
        return global.Sk.builtinFiles["files"][x];
      },
      __future__: global.Sk.python3,
      // killableWhile/killableFor 는 비동기 실행에서만 동작한다.
      // 동기 실행에서 켜면 반복문 결과가 사라지므로 execLimit 만 사용한다.
      execLimit: opts.timeLimit || EXEC_LIMIT_MS,
    });

    var error = null;
    var timedOut = false;
    var variables = [];
    try {
      var mod = global.Sk.importMainWithBody("<내 코드>", false, code, true);
      variables = collectVariables(mod);
    } catch (e) {
      error = formatError(e);
      if (error.type === "TimeLimitError" || /time.*limit/i.test(error.text)) {
        timedOut = true;
        error.type = "TimeLimitError";
        error.message = "실행 시간이 너무 깁니다. 무한 반복이 아닌지 확인하세요.";
        error.hint = FRIENDLY.TimeLimitError;
      }
    }

    return {
      stdout: pure.join(""),
      display: display.join(""),
      error: error,
      timedOut: timedOut,
      inputsUsed: used,
      inputsLeft: queue.length,
      variables: variables,
    };
  }

  /**
   * 실행이 끝난 뒤 남아 있는 변수들을 모은다.
   * Thonny 의 Variables 패널과 같은 내용을 보여주기 위한 것이라,
   * 함수와 모듈처럼 값이 아닌 것은 빼고 사람이 만든 변수만 남긴다.
   */
  function collectVariables(mod) {
    var out = [];
    if (!mod || !mod.$d) return out;
    var g = mod.$d;
    var skip = { __name__: 1, __doc__: 1, __package__: 1, __file__: 1, __builtins__: 1 };
    Object.keys(g).forEach(function (name) {
      if (skip[name] || name.indexOf("__") === 0) return;
      var v = g[name];
      if (!v) return;
      var type = v.tp$name || "";
      if (type === "function" || type === "module" || type === "classobj" || type === "type") return;
      var repr;
      try {
        repr = global.Sk.misceval.objectRepr(v);
      } catch (e) {
        return;
      }
      if (typeof repr !== "string") return;
      if (repr.length > 300) repr = repr.slice(0, 300) + " …";
      out.push({ name: name, value: repr, type: type });
    });
    return out;
  }

  /**
   * 채점 코드를 실행한다.
   * 파이썬 쪽 check(stdout, g) 규약을 브라우저에서도 쓰기 위해,
   * 학습자 코드와 채점 코드를 한 모듈에서 이어 실행한다.
   */
  function runWithCheck(code, checkCode, opts) {
    var res = run(code, opts);
    if (res.error || !checkCode) return res;

    // 학습자 코드의 전역 이름을 사전으로 모아 채점 함수에 넘긴다
    var wrapper =
      code +
      "\n\n__g = dict(globals())\n" +
      checkCode +
      "\n__ok, __msg = check(" +
      JSON.stringify(res.stdout) +
      ", __g)\n" +
      "print('\\x00CHECK', 'OK' if __ok else 'NO', __msg)\n";

    var chk = run(wrapper, opts);
    if (chk.error) {
      res.check = { ok: false, message: "채점 중 오류: " + chk.error.message };
      return res;
    }
    var m = /\x00CHECK (OK|NO) ([\s\S]*?)\n?$/.exec(chk.stdout);
    if (!m) {
      res.check = { ok: false, message: "채점 결과를 읽지 못했습니다." };
      return res;
    }
    res.check = { ok: m[1] === "OK", message: m[2].trim() };
    return res;
  }

  global.PyRunner = {
    ready: ready,
    run: run,
    runWithCheck: runWithCheck,
    normalize: normalize,
    normalizeFloats: normalizeFloats,
    sameOutput: sameOutput,
    FRIENDLY: FRIENDLY,
  };
})(typeof window !== "undefined" ? window : globalThis);
