/* =========================================================================
   파이썬 학습 워크북 — 화면 구성과 채점
   ========================================================================= */
(function () {
  "use strict";

  var DATA = window.COURSE_DATA;
  var R = window.PyRunner;

  /* ---------- 작은 도우미 ------------------------------------------------ */

  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "class") n.className = attrs[k];
        else if (k === "text") n.textContent = attrs[k];
        else if (k === "html") n.innerHTML = attrs[k];
        else if (k.indexOf("on") === 0) n.addEventListener(k.slice(2), attrs[k]);
        else if (attrs[k] !== null && attrs[k] !== undefined) n.setAttribute(k, attrs[k]);
      });
    }
    (children || []).forEach(function (c) {
      if (c === null || c === undefined) return;
      n.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return n;
  }

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /** **굵게** 와 `코드` 를 표시용 HTML 로 바꾼다 */
  function richText(s) {
    var out = esc(s);
    out = out.replace(/`([^`]+)`/g, function (_, c) {
      return '<code class="inline">' + c + "</code>";
    });
    out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    return out;
  }

  /* ---------- 파이썬 구문 강조 (IDLE 배색) -------------------------------- */

  var KEYWORDS = ("and as assert async await break class continue def del elif else except " +
    "finally for from global if import in is lambda nonlocal not or pass raise return try " +
    "while with yield True False None").split(" ");
  var BUILTINS = ("print input int float str len range list dict tuple set type bool abs sum " +
    "min max round sorted reversed enumerate zip open format append sort reverse remove insert " +
    "pop index count extend keys values items get clear random randint time datetime").split(" ");

  function highlight(code) {
    var out = "";
    var i = 0;
    var n = code.length;

    while (i < n) {
      var ch = code[i];

      // 주석
      if (ch === "#") {
        var e = code.indexOf("\n", i);
        if (e === -1) e = n;
        out += '<span class="tok-com">' + esc(code.slice(i, e)) + "</span>";
        i = e;
        continue;
      }

      // 문자열 (삼중 따옴표 포함)
      if (ch === '"' || ch === "'") {
        var triple = code.substr(i, 3);
        var isTriple = triple === '"""' || triple === "'''";
        var quote = isTriple ? triple : ch;
        var j = i + quote.length;
        while (j < n) {
          if (code[j] === "\\") { j += 2; continue; }
          if (code.substr(j, quote.length) === quote) { j += quote.length; break; }
          if (!isTriple && code[j] === "\n") break;
          j++;
        }
        if (j > n) j = n;
        out += '<span class="tok-str">' + esc(code.slice(i, j)) + "</span>";
        i = j;
        continue;
      }

      // 숫자
      if (/[0-9]/.test(ch) && (i === 0 || !/[A-Za-z_0-9]/.test(code[i - 1]))) {
        var k = i;
        while (k < n && /[0-9.]/.test(code[k])) k++;
        out += '<span class="tok-num">' + esc(code.slice(i, k)) + "</span>";
        i = k;
        continue;
      }

      // 이름
      if (/[A-Za-z_À-￿]/.test(ch)) {
        var m = i;
        while (m < n && /[A-Za-z_0-9À-￿]/.test(code[m])) m++;
        var word = code.slice(i, m);
        var cls = null;
        if (KEYWORDS.indexOf(word) !== -1) cls = "tok-kw";
        else if (BUILTINS.indexOf(word) !== -1) cls = "tok-bi";
        // def / class 바로 뒤의 이름은 정의 색
        var before = code.slice(Math.max(0, i - 7), i);
        if (/\b(def|class)\s+$/.test(before)) cls = "tok-def";
        out += cls ? '<span class="' + cls + '">' + esc(word) + "</span>" : esc(word);
        i = m;
        continue;
      }

      out += esc(ch);
      i++;
    }
    return out;
  }

  /* ---------- 진행 상황 저장 --------------------------------------------- */

  var STORE_KEY = "python-workbook-progress-v1";
  var remoteDb = null;

  var progress = { solved: {}, revealed: {}, drafts: {} };

  function loadLocal() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        var p = JSON.parse(raw);
        progress.solved = p.solved || {};
        progress.revealed = p.revealed || {};
        progress.drafts = p.drafts || {};
      }
    } catch (e) { /* 저장소를 못 쓰는 환경이면 그냥 진행 */ }
  }

  var saveTimer = null;
  function saveProgress() {
    progress.drafts = state.drafts;
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(progress));
    } catch (e) { /* 무시 */ }
    if (remoteDb) {
      clearTimeout(saveTimer);
      saveTimer = setTimeout(function () {
        try {
          remoteDb.doc("progress/main").set({
            solved: progress.solved,
            revealed: progress.revealed,
            drafts: progress.drafts || {},
            updatedAt: Date.now(),
          });
        } catch (e) { /* 무시 */ }
      }, 700);
    }
  }

  var draftTimer = null;
  /** 코드를 입력하는 동안 계속 저장하지 않도록 잠시 모아서 저장한다 */
  function scheduleDraftSave() {
    clearTimeout(draftTimer);
    draftTimer = setTimeout(saveProgress, 900);
  }

  /** 서버에 저장된 진행 상황이 있으면 합친다 (푼 문제는 합집합으로) */
  function mergeRemote(data) {
    if (!data) return false;
    var changed = false;
    var incomingDrafts = data.drafts || {};
    Object.keys(incomingDrafts).forEach(function (id) {
      if (!state.drafts[id] && incomingDrafts[id]) {
        state.drafts[id] = incomingDrafts[id];
        changed = true;
      }
    });
    ["solved", "revealed"].forEach(function (key) {
      var incoming = data[key] || {};
      Object.keys(incoming).forEach(function (id) {
        if (incoming[id] && !progress[key][id]) {
          progress[key][id] = incoming[id];
          changed = true;
        }
      });
    });
    return changed;
  }

  function connectDb() {
    if (!window.claude || typeof window.claude.use !== "function") return;
    window.claude.use("db").then(function (db) {
      if (!db) return;
      remoteDb = db;
      return db.doc("progress/main").get().then(function (doc) {
        if (doc && mergeRemote(doc.data || doc)) render();
      });
    }).catch(function () { /* 없으면 로컬 저장만 쓴다 */ });
  }

  /* ---------- 상태 -------------------------------------------------------- */

  var state = {
    week: 0,
    tab: "concepts",
    openConcepts: {},
    openProbs: {},
    openHints: {},
    drafts: {},
    stdins: {},
    results: {},
    runs: {},      // 문제별 마지막 실행 결과 (Shell 과 Variables 에 보여줄 내용)
    picks: {},
  };

  function problemKey(p) { return p.id; }

  function weekStats(w) {
    var done = w.problems.filter(function (p) { return progress.solved[p.id]; }).length;
    return { done: done, total: w.problems.length };
  }

  function totalStats() {
    var done = 0, total = 0;
    DATA.weeks.forEach(function (w) {
      var s = weekStats(w);
      done += s.done; total += s.total;
    });
    return { done: done, total: total };
  }

  /* ---------- 블록 렌더링 -------------------------------------------------- */

  function renderBlock(b) {
    if (b.t === "p") return el("p", { class: "prose", html: richText(b.text) });

    if (b.t === "ul") {
      return el("ul", { class: "bullets" }, b.items.map(function (it) {
        return el("li", { html: richText(it) });
      }));
    }

    if (b.t === "tip" || b.t === "warn") {
      return el("div", { class: "callout " + (b.t === "tip" ? "tip" : "warn") }, [
        el("span", { class: "callout-label", text: b.t === "tip" ? "알아 두면 좋은 점" : "주의" }),
        el("div", { html: richText(b.text) }),
      ]);
    }

    if (b.t === "table") {
      return el("div", { class: "table-wrap" }, [
        el("table", null, [
          el("thead", null, [
            el("tr", null, b.head.map(function (h) { return el("th", { text: h }); })),
          ]),
          el("tbody", null, b.rows.map(function (r) {
            return el("tr", null, r.map(function (c) { return el("td", { text: c }); }));
          })),
        ]),
      ]);
    }

    if (b.t === "out") return el("div", { class: "sample-out", text: b.text });

    if (b.t === "code") return renderCodeExample(b);

    return null;
  }

  /** 개념 설명 안의 예제 코드 — 실행 결과가 함께 붙어 있고, 편집기로 보낼 수 있다 */
  function renderCodeExample(b) {
    var bar = el("div", { class: "codeblock-bar" }, [
      el("span", { text: b.stdin && b.stdin.length ? "예제 · 입력값 " + b.stdin.join(", ") : "예제" }),
      el("span", { class: "spacer" }),
      el("button", {
        class: "mini-btn",
        type: "button",
        onclick: function () { openInScratch(b.code, b.stdin || []); },
      }, ["직접 고쳐 보기"]),
    ]);

    var kids = [bar, el("pre", { html: highlight(b.code) })];

    if (b.output !== undefined && b.output !== "") {
      kids.push(el("div", { class: "result" + (b.is_error ? " is-error" : "") }, [
        el("div", { class: "result-label", text: b.is_error ? "오류" : "실행 결과" }),
        el("pre", { text: b.is_error ? b.error_text : b.output }),
      ]));
    } else if (b.is_error) {
      kids.push(el("div", { class: "result is-error" }, [
        el("div", { class: "result-label", text: "오류" }),
        el("pre", { text: b.error_text }),
      ]));
    }

    if (b.note) {
      kids.push(el("div", {
        class: "result",
      }, [el("div", { class: "result-label", text: "설명" }),
        el("pre", { text: b.note, style: "white-space:pre-wrap;font-family:var(--font-body);font-size:13px;color:var(--ink-soft)" })]));
    }

    return el("div", { class: "codeblock" }, kids);
  }

  /* ---------- 연습장 ------------------------------------------------------ */

  function openInScratch(code, stdin) {
    state.tab = "scratch";
    state.scratchCode = code;
    state.scratchStdin = (stdin || []).join("\n");
    state.scratchResult = null;
    render();
    setTimeout(function () {
      var ta = document.querySelector("#scratch-editor");
      if (ta) { ta.focus(); ta.scrollIntoView({ block: "center", behavior: "smooth" }); }
    }, 40);
  }


  /* ---------- Thonny 를 닮은 실습 패널 -------------------------------------- */

  /**
   * 수업에서 쓰는 Thonny 와 비슷한 배치의 실습 패널을 만든다.
   * 위에서부터 도구 모음 · 파일 탭 · 편집기 · 입력값 · Shell · Variables 순이다.
   *
   * opts = {
   *   fileName, code, onCodeChange,
   *   stdinText, stdinReadonly, onStdinChange,
   *   run: 실행 버튼을 눌렀을 때 부를 함수,
   *   extraButtons: [{label, onClick}],
   *   result: 마지막 실행 결과 (PyRunner.run 의 반환값),
   *   editorId
   * }
   */
  function buildThonny(opts) {
    var box = el("div", { class: "thonny" });

    /* 도구 모음 */
    var toolbar = el("div", { class: "th-toolbar" }, [
      el("button", {
        class: "th-run",
        type: "button",
        onclick: opts.run,
      }, [
        el("span", { html: '<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>' }),
        document.createTextNode(opts.runLabel || "실행"),
      ]),
    ]);
    (opts.extraButtons || []).forEach(function (b) {
      toolbar.appendChild(el("button", {
        class: "th-btn", type: "button", onclick: b.onClick,
      }, [b.label]));
    });
    toolbar.appendChild(el("span", { class: "th-spacer" }));
    toolbar.appendChild(el("span", { class: "th-kbd", text: "Ctrl+Enter 실행 · Tab 들여쓰기" }));
    box.appendChild(toolbar);

    /* 파일 탭 */
    box.appendChild(el("div", { class: "th-tabs" }, [
      el("span", { class: "th-tab", text: opts.fileName || "untitled.py" }),
    ]));

    /* 편집기 (줄 번호 + 입력 영역) */
    var gutter = el("div", { class: "th-gutter" });
    var ta = el("textarea", {
      class: "th-code",
      id: opts.editorId,
      spellcheck: "false",
      autocapitalize: "off",
      autocomplete: "off",
      autocorrect: "off",
      placeholder: opts.placeholder || "여기에 코드를 작성하세요",
      oninput: function (e) {
        syncGutter(gutter, e.target);
        if (opts.onCodeChange) opts.onCodeChange(e.target.value);
      },
      onkeydown: function (e) {
        if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
          e.preventDefault();
          opts.run();
          return;
        }
        editorKeys(e);
        setTimeout(function () { syncGutter(gutter, ta); }, 0);
      },
      onscroll: function () { gutter.scrollTop = ta.scrollTop; },
    });
    ta.value = opts.code || "";
    syncGutter(gutter, ta);
    box.appendChild(el("div", { class: "th-editor" }, [gutter, ta]));

    /* 입력값 */
    if (opts.stdinText !== null && opts.stdinText !== undefined) {
      var sb = el("textarea", {
        rows: String(Math.max(1, String(opts.stdinText).split("\n").length)),
        placeholder: "input() 이 필요하면 한 줄에 하나씩",
        title: opts.stdinReadonly ? "채점에 사용되는 입력값입니다" : "input() 에 순서대로 들어갈 값",
        oninput: function (e) { if (opts.onStdinChange) opts.onStdinChange(e.target.value); },
      });
      if (opts.stdinReadonly) sb.setAttribute("readonly", "readonly");
      sb.value = opts.stdinText;
      box.appendChild(el("div", { class: "th-stdin" }, [
        el("label", { text: "입력값" }),
        sb,
      ]));
    }

    /* Shell */
    box.appendChild(el("div", { class: "th-pane-title" }, [
      document.createTextNode("Shell"),
      el("span", { class: "th-badge", text: opts.fileName ? ">>> %Run " + opts.fileName : "" }),
    ]));
    box.appendChild(buildShell(opts.result, opts.fileName));

    /* 오류 도움말 */
    if (opts.result && opts.result.error && opts.result.error.hint) {
      box.appendChild(el("div", { class: "th-assist" }, [
        el("b", { text: "도움말" }),
        el("span", { text: opts.result.error.hint }),
      ]));
    }

    /* Variables */
    box.appendChild(el("div", { class: "th-pane-title" }, [
      document.createTextNode("Variables"),
      el("span", { class: "th-badge", text: "실행이 끝난 뒤 변수에 남은 값" }),
    ]));
    box.appendChild(buildVars(opts.result));

    return box;
  }

  /** 줄 번호를 코드 줄 수에 맞춘다 */
  function syncGutter(gutter, ta) {
    var n = ta.value.split("\n").length;
    var lines = [];
    for (var i = 1; i <= n; i++) lines.push(i);
    gutter.textContent = lines.join("\n");
    gutter.scrollTop = ta.scrollTop;
  }

  /** Shell 영역: 실행 명령줄 + 출력(또는 오류) */
  function buildShell(result, fileName) {
    var pre = el("pre", { class: "th-shell" });
    if (!result) {
      pre.appendChild(el("span", { class: "th-empty", text: "실행 버튼을 누르면 결과가 여기에 나옵니다." }));
      return pre;
    }
    pre.appendChild(el("span", {
      class: "th-run-line",
      text: ">>> %Run " + (fileName || "untitled.py") + "\n",
    }));
    if (result.display) pre.appendChild(document.createTextNode(result.display));
    if (result.error) {
      pre.appendChild(el("span", {
        class: "th-err",
        text: (result.display && !/\n$/.test(result.display) ? "\n" : "") +
          "Traceback (most recent call last):\n  File \"" + (fileName || "untitled.py") + "\"" +
          (result.error.line ? ", line " + result.error.line : "") + "\n" +
          result.error.type + ": " + result.error.message + "\n",
      }));
    } else if (!result.display) {
      pre.appendChild(el("span", { class: "th-empty", text: "(출력 없음)" }));
    }
    return pre;
  }

  /** Variables 영역: 실행 후 남은 변수 목록 */
  function buildVars(result) {
    if (!result || !result.variables || !result.variables.length) {
      return el("div", {
        class: "th-vars-empty",
        text: result ? "표시할 변수가 없습니다." : "아직 실행하지 않았습니다.",
      });
    }
    return el("div", { class: "th-vars" }, [
      el("table", null, [
        el("thead", null, [
          el("tr", null, [
            el("th", { text: "Name" }),
            el("th", { text: "Value" }),
            el("th", { text: "형" }),
          ]),
        ]),
        el("tbody", null, result.variables.map(function (v) {
          return el("tr", null, [
            el("td", { text: v.name }),
            el("td", { text: v.value }),
            el("td", { text: v.type }),
          ]);
        })),
      ]),
    ]);
  }

  /* ---------- 편집기 ------------------------------------------------------ */

  function makeEditor(id, value, placeholder, onInput) {
    var ta = el("textarea", {
      class: "editor",
      id: id,
      spellcheck: "false",
      autocapitalize: "off",
      autocomplete: "off",
      placeholder: placeholder || "여기에 코드를 작성하세요",
      oninput: function (e) { onInput(e.target.value); },
      onkeydown: function (e) { editorKeys(e); },
    });
    ta.value = value || "";
    return ta;
  }

  /** 탭 들여쓰기와 콜론 뒤 자동 들여쓰기 — IDLE 과 비슷하게 동작하도록 */
  function editorKeys(e) {
    var ta = e.target;
    if (e.key === "Tab") {
      e.preventDefault();
      var s = ta.selectionStart, en = ta.selectionEnd;
      if (s !== en) {
        var before = ta.value.slice(0, s);
        var sel = ta.value.slice(s, en);
        var after = ta.value.slice(en);
        var lineStart = before.lastIndexOf("\n") + 1;
        var head = before.slice(0, lineStart);
        var block = before.slice(lineStart) + sel;
        var lines = block.split("\n");
        var shifted = lines.map(function (l) {
          return e.shiftKey ? l.replace(/^ {1,4}/, "") : "    " + l;
        });
        ta.value = head + shifted.join("\n") + after;
        ta.selectionStart = lineStart + head.length;
        ta.selectionEnd = head.length + lineStart + shifted.join("\n").length;
      } else {
        ta.setRangeText("    ", s, en, "end");
      }
      ta.dispatchEvent(new Event("input", { bubbles: true }));
      return;
    }

    if (e.key === "Enter") {
      var pos = ta.selectionStart;
      var line = ta.value.slice(0, pos).split("\n").pop();
      var indent = (line.match(/^\s*/) || [""])[0];
      if (/:\s*$/.test(line)) indent += "    ";
      if (indent) {
        e.preventDefault();
        ta.setRangeText("\n" + indent, ta.selectionStart, ta.selectionEnd, "end");
        ta.dispatchEvent(new Event("input", { bubbles: true }));
      }
    }
  }

  function parseStdin(text) {
    if (!text) return [];
    var lines = String(text).replace(/\r\n/g, "\n").split("\n");
    while (lines.length && lines[lines.length - 1] === "") lines.pop();
    return lines;
  }

  /* ---------- 채점 -------------------------------------------------------- */

  /** 두 출력의 첫 차이 지점을 찾아 표시한다 */
  function diffMark(mine, want) {
    var a = R.normalize(mine).split("\n");
    var b = R.normalize(want).split("\n");
    var box = el("div", { class: "diff-box" });
    var maxLen = Math.max(a.length, b.length);
    for (var i = 0; i < maxLen; i++) {
      var line = a[i];
      if (line === undefined) continue;
      var same = b[i] !== undefined && R.normalizeFloats(line) === R.normalizeFloats(b[i]);
      if (same) {
        box.appendChild(document.createTextNode(line + (i < a.length - 1 ? "\n" : "")));
      } else {
        box.appendChild(el("mark", { text: line === "" ? "(빈 줄)" : line }));
        if (i < a.length - 1) box.appendChild(document.createTextNode("\n"));
      }
    }
    if (a.length === 1 && a[0] === "") {
      box.textContent = "";
      box.appendChild(el("mark", { text: "(아무것도 출력되지 않았습니다)" }));
    }
    return box;
  }

  function firstDifference(mine, want) {
    var a = R.normalize(mine).split("\n");
    var b = R.normalize(want).split("\n");
    for (var i = 0; i < Math.max(a.length, b.length); i++) {
      var x = a[i] === undefined ? null : R.normalizeFloats(a[i]);
      var y = b[i] === undefined ? null : R.normalizeFloats(b[i]);
      if (x !== y) {
        if (x === null) return (i + 1) + "번째 줄이 없습니다. 출력이 " + b.length + "줄이어야 하는데 " + a.length + "줄입니다.";
        if (y === null) return (i + 1) + "번째 줄이 더 있습니다. 출력은 " + b.length + "줄이어야 합니다.";
        return (i + 1) + "번째 줄이 다릅니다.";
      }
    }
    return null;
  }

  function gradeCode(p) {
    var code = state.drafts[p.id] !== undefined ? state.drafts[p.id] : (p.starter || "");
    if (!code.trim()) {
      return { kind: "info", title: "코드를 먼저 작성하세요.", note: "왼쪽 문제 설명을 읽고 편집기에 코드를 입력한 뒤 실행하세요." };
    }

    for (var i = 0; i < p.tests.length; i++) {
      var t = p.tests[i];
      var res = t.check
        ? R.runWithCheck(code, t.check, { inputs: t.stdin, timeLimit: (p.time_limit || 10) * 1000 })
        : R.run(code, { inputs: t.stdin, timeLimit: (p.time_limit || 10) * 1000 });

      var label = p.tests.length > 1 ? "입력값 [" + t.stdin.join(", ") + "] 에서 " : "";

      if (res.error) {
        return {
          kind: "fail",
          title: label + res.error.type + " 가 발생했습니다.",
          note: res.error.hint,
          errorText: res.error.text,
          line: res.error.line,
          display: res.display,
        };
      }

      if (t.check) {
        if (!res.check || !res.check.ok) {
          return {
            kind: "fail",
            title: label + "결과가 올바르지 않습니다.",
            note: res.check ? res.check.message : "채점하지 못했습니다.",
            display: res.display,
          };
        }
        continue;
      }

      if (!R.sameOutput(res.stdout, t.expected)) {
        return {
          kind: "fail",
          title: label + "출력이 정답과 다릅니다.",
          note: firstDifference(res.stdout, t.expected),
          mine: res.stdout,
          want: t.expected,
          display: res.display,
        };
      }
    }

    return {
      kind: "pass",
      title: p.tests.length > 1
        ? "정답입니다. " + p.tests.length + "가지 입력에서 모두 맞았습니다."
        : "정답입니다.",
      note: "아래 해설에서 왜 이렇게 되는지 확인해 보세요.",
    };
  }

  function gradePredict(p) {
    var answer = state.drafts[p.id] || "";
    if (!answer.trim()) {
      return { kind: "info", title: "예측한 결과를 입력하세요.", note: "코드를 눈으로 따라가며 어떤 값이 출력될지 적어 보세요." };
    }
    if (R.sameOutput(answer, p.expected)) {
      return { kind: "pass", title: "정확히 맞혔습니다.", note: "코드를 읽고 결과를 예측하는 힘이 실력의 핵심입니다." };
    }
    return {
      kind: "fail",
      title: "예측한 결과가 다릅니다.",
      note: firstDifference(answer, p.expected),
      mine: answer,
      want: p.expected,
    };
  }

  function gradeChoice(p) {
    var pick = state.picks[p.id];
    if (pick === undefined) {
      return { kind: "info", title: "보기를 하나 고르세요." };
    }
    if (pick === p.answer) {
      return { kind: "pass", title: "정답입니다." };
    }
    return { kind: "fail", title: "다시 생각해 보세요.", note: "고른 보기는 정답이 아닙니다. 힌트를 열어 보세요." };
  }

  /* ---------- 문제 렌더링 -------------------------------------------------- */

  var KIND_LABEL = { code: "코드 작성", predict: "결과 예측", choice: "객관식" };
  var LEVEL_LABEL = { 1: "기본", 2: "응용", 3: "심화" };

  function renderProblem(p, idx) {
    var open = !!state.openProbs[p.id];
    var solved = !!progress.solved[p.id];

    var head = el("button", {
      class: "prob-head",
      type: "button",
      "aria-expanded": open ? "true" : "false",
      onclick: function () {
        state.openProbs[p.id] = !state.openProbs[p.id];
        render();
      },
    }, [
      el("span", { class: "prob-status", text: "✓", "aria-hidden": "true" }),
      el("span", { class: "prob-name", text: (idx + 1) + ". " + p.title }),
      el("span", { class: "prob-meta" }, [
        el("span", { class: "kind", text: KIND_LABEL[p.type] }),
        el("span", { class: "level", "data-lv": p.level, text: LEVEL_LABEL[p.level] }),
        el("span", {
          class: "chev",
          html: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>',
        }),
      ]),
    ]);

    var card = el("div", { class: "prob", "data-open": open ? "true" : "false", "data-solved": solved ? "true" : "false" }, [head]);
    if (open) card.appendChild(renderProblemBody(p));
    return card;
  }

  function renderProblemBody(p) {
    var left = el("div", { class: "panel" }, [el("div", { class: "panel-label", text: "문제" })]);
    p.prompt.forEach(function (b) {
      var node = renderBlock(b);
      if (node) left.appendChild(node);
    });

    // 예측 문제는 코드가 문제의 일부
    if (p.type === "predict") {
      left.appendChild(el("div", { class: "codeblock" }, [
        el("div", { class: "codeblock-bar" }, [el("span", { text: "이 코드의 실행 결과는?" })]),
        el("pre", { html: highlight(p.code) }),
      ]));
    }

    left.appendChild(renderHints(p));

    var right = el("div", { class: "panel" }, [
      el("div", { class: "panel-label", text: p.type === "code" ? "내 코드" : p.type === "predict" ? "내 예측" : "보기" }),
    ]);

    if (p.type === "code") right.appendChild(renderCodeWorkbench(p));
    else if (p.type === "predict") right.appendChild(renderPredictInput(p));
    else right.appendChild(renderChoices(p));

    var res = state.results[p.id];
    if (res) right.appendChild(renderVerdict(p, res));

    right.appendChild(renderActions(p));

    if (progress.revealed[p.id] || progress.solved[p.id]) {
      right.appendChild(renderExplain(p));
    }

    return el("div", { class: "prob-body" }, [left, right]);
  }

  function renderCodeWorkbench(p) {
    var stdinNeeded = p.tests.some(function (t) { return t.stdin && t.stdin.length; });
    var holder = el("div", { class: "panel", style: "gap:9px" });

    holder.appendChild(buildThonny({
      fileName: p.id + ".py",
      editorId: "editor-" + p.id,
      code: state.drafts[p.id] !== undefined ? state.drafts[p.id] : (p.starter || ""),
      onCodeChange: function (v) { state.drafts[p.id] = v; scheduleDraftSave(); },
      stdinText: stdinNeeded ? (p.tests[0].stdin || []).join("\n") : null,
      stdinReadonly: true,
      result: state.runs[p.id],
      runLabel: "실행",
      run: function () { runProblem(p, false); },
      extraButtons: [
        { label: "실행하고 채점", onClick: function () { runProblem(p, true); } },
      ],
    }));

    if (p.tests.length > 1) {
      holder.appendChild(el("p", {
        class: "verdict-note",
        style: "font-size:12px;color:var(--ink-faint)",
        text: "채점은 " + p.tests.length + "가지 입력으로 합니다. 특정 값에만 맞는 코드는 통과하지 못합니다. "
          + "위 입력값 칸은 그중 첫 번째입니다.",
      }));
    }
    return holder;
  }

  /** 문제를 실행한다. grade 가 true 면 채점까지 한다. */
  function runProblem(p, grade) {
    var code = state.drafts[p.id] !== undefined ? state.drafts[p.id] : (p.starter || "");
    var stdin = (p.tests[0] && p.tests[0].stdin) || [];
    state.runs[p.id] = R.run(code, {
      inputs: stdin,
      timeLimit: (p.time_limit || 10) * 1000,
    });
    state.results[p.id] = grade ? gradeCode(p) : null;
    if (grade && state.results[p.id].kind === "pass" && !progress.solved[p.id]) {
      progress.solved[p.id] = true;
      saveProgress();
    }
    render();
  }

  function renderPredictInput(p) {
    var ta = el("textarea", {
      class: "predict-input",
      spellcheck: "false",
      placeholder: "출력될 내용을 그대로 적어 보세요 (여러 줄이면 줄을 나눠서)",
      oninput: function (e) { state.drafts[p.id] = e.target.value; scheduleDraftSave(); },
    });
    ta.value = state.drafts[p.id] || "";
    return ta;
  }

  function renderChoices(p) {
    var res = state.results[p.id];
    var showVerdict = res && res.kind !== "info";
    return el("div", { class: "choices" }, p.options.map(function (o, i) {
      var verdict = null;
      if (showVerdict) {
        if (i === p.answer) verdict = "ok";
        else if (state.picks[p.id] === i) verdict = "no";
      }
      return el("button", {
        class: "choice",
        type: "button",
        "data-picked": state.picks[p.id] === i ? "true" : "false",
        "data-verdict": verdict,
        onclick: function () {
          state.picks[p.id] = i;
          delete state.results[p.id];
          render();
        },
      }, [
        el("span", { class: "choice-mark", text: o.text || String(i + 1) }),
        o.code
          ? el("pre", { html: highlight(o.code), style: "flex:1;min-width:0" })
          : el("span", { text: o.text }),
      ]);
    }));
  }

  function renderActions(p) {
    var acts = el("div", { class: "actions" });

    if (p.type !== "code") {
      acts.appendChild(el("button", {
        class: "btn btn-primary",
        type: "button",
        onclick: function () {
          var res = p.type === "predict" ? gradePredict(p) : gradeChoice(p);
          state.results[p.id] = res;
          if (res.kind === "pass" && !progress.solved[p.id]) {
            progress.solved[p.id] = true;
            saveProgress();
          }
          render();
        },
      }, ["정답 확인"]));
    }

    acts.appendChild(el("button", {
      class: "btn btn-ghost",
      type: "button",
      onclick: function () {
        progress.revealed[p.id] = true;
        saveProgress();
        render();
      },
    }, [progress.revealed[p.id] || progress.solved[p.id] ? "해설 다시 보기" : "해설 보기"]));

    return acts;
  }

  function renderVerdict(p, res) {
    var cls = res.kind === "pass" ? "pass" : res.kind === "fail" ? "fail" : "info";
    var icon = res.kind === "pass" ? "✓" : res.kind === "fail" ? "✕" : "▸";

    var kids = [el("div", { class: "verdict-title" }, [
      el("span", { text: icon, "aria-hidden": "true" }),
      el("span", { text: res.title }),
    ])];

    if (res.note) kids.push(el("div", { class: "verdict-note", text: res.note }));

    if (res.mine !== undefined && res.want !== undefined) {
      kids.push(el("div", { class: "diff-grid" }, [
        el("div", { class: "diff-col" }, [
          el("div", { class: "panel-label", text: "내 결과" }),
          diffMark(res.mine, res.want),
        ]),
        el("div", { class: "diff-col" }, [
          el("div", { class: "panel-label", text: "정답" }),
          el("div", { class: "diff-box", text: R.normalize(res.want) }),
        ]),
      ]));
    }

    return el("div", { class: "verdict " + cls }, kids);
  }

  function renderHints(p) {
    if (!p.hints || !p.hints.length) return el("span");
    var box = el("div", { class: "hints" }, [el("div", { class: "panel-label", text: "힌트" })]);
    p.hints.forEach(function (h, i) {
      var key = p.id + ":" + i;
      var open = !!state.openHints[key];
      var prevOpen = i === 0 || state.openHints[p.id + ":" + (i - 1)];
      var hint = el("div", { class: "hint", "data-open": open ? "true" : "false" }, [
        el("button", {
          class: "hint-btn",
          type: "button",
          "aria-expanded": open ? "true" : "false",
          onclick: function () {
            state.openHints[key] = !state.openHints[key];
            render();
          },
        }, [
          el("span", { class: "hint-no", text: "힌트 " + (i + 1) }),
          el("span", { text: open ? "닫기" : (i === p.hints.length - 1 ? "거의 정답에 가까운 힌트" : "열어 보기") }),
          prevOpen ? null : el("span", { class: "hint-lock", text: "앞 힌트부터 보는 것을 권합니다" }),
        ]),
        el("div", { class: "hint-text", text: h }),
      ]);
      box.appendChild(hint);
    });
    return box;
  }

  function renderExplain(p) {
    var box = el("div", { class: "explain" }, [el("div", { class: "panel-label", text: "해설" })]);
    (p.explain || []).forEach(function (b) {
      var node = renderBlock(b);
      if (node) box.appendChild(node);
    });

    if (p.type === "code" && p.solution) {
      box.appendChild(el("div", { class: "codeblock" }, [
        el("div", { class: "codeblock-bar" }, [
          el("span", { text: "모범답안" }),
          el("span", { class: "spacer" }),
          el("button", {
            class: "mini-btn",
            type: "button",
            onclick: function () {
              state.drafts[p.id] = p.solution;
              delete state.results[p.id];
              render();
            },
          }, ["편집기에 넣기"]),
        ]),
        el("pre", { html: highlight(p.solution) }),
      ]));
    }

    if (p.type === "predict") {
      box.appendChild(el("div", { class: "codeblock" }, [
        el("div", { class: "codeblock-bar" }, [el("span", { text: "실제 실행 결과" })]),
        el("pre", { text: p.display || p.expected }),
      ]));
    }

    if (p.type === "choice") {
      box.appendChild(el("p", {
        class: "prose",
        html: richText("정답은 **" + (p.options[p.answer].text || String(p.answer + 1)) + "** 입니다."),
      }));
    }

    return box;
  }

  /* ---------- 연습장 화면 -------------------------------------------------- */

  function renderScratch() {
    var wrap = el("div", { class: "concept", "data-open": "true" }, [
      el("div", { class: "concept-head", style: "cursor:default" }, [
        el("span", { class: "concept-title", text: "연습장" }),
      ]),
      el("div", {
        class: "concept-summary",
        text: "채점 없이 자유롭게 코드를 실행해 보는 곳입니다. 개념 설명의 예제를 여기로 가져와 고쳐 볼 수 있습니다.",
      }),
    ]);

    var body = el("div", { class: "concept-body" });
    body.appendChild(buildThonny({
      fileName: "연습장.py",
      editorId: "scratch-editor",
      code: state.scratchCode !== undefined ? state.scratchCode : 'print("안녕하세요")\n',
      onCodeChange: function (v) { state.scratchCode = v; },
      stdinText: state.scratchStdin || "",
      stdinReadonly: false,
      onStdinChange: function (v) { state.scratchStdin = v; },
      result: state.scratchResult,
      run: function () {
        state.scratchResult = R.run(state.scratchCode || "", {
          inputs: parseStdin(state.scratchStdin),
          timeLimit: 8000,
        });
        render();
      },
      extraButtons: [
        {
          label: "비우기",
          onClick: function () {
            state.scratchCode = "";
            state.scratchResult = null;
            render();
          },
        },
      ],
    }));

    wrap.appendChild(body);
    return wrap;
  }

  /* ---------- 전체 화면 ---------------------------------------------------- */

  var root = null;

  function render() {
    if (!root) return;
    var week = DATA.weeks[state.week];
    root.innerHTML = "";

    /* 왼쪽 레일 */
    var total = totalStats();
    var pct = total.total ? Math.round((total.done / total.total) * 100) : 0;

    var weekList = el("div", { class: "week-list" }, DATA.weeks.map(function (w, i) {
      var s = weekStats(w);
      return el("button", {
        class: "week-item",
        type: "button",
        "aria-current": i === state.week ? "true" : "false",
        onclick: function () {
          state.week = i;
          state.tab = "concepts";
          window.scrollTo({ top: 0, behavior: "smooth" });
          render();
        },
      }, [
        el("span", { class: "week-no", text: String(w.no) }),
        el("span", { class: "week-name", text: w.title.split(" · ")[0] }),
        el("span", {
          class: "week-score",
          "data-done": s.done === s.total ? "true" : "false",
          text: s.done + "/" + s.total,
        }),
      ]);
    }));

    var rail = el("aside", { class: "rail" }, [
      el("div", { class: "rail-card progress-card" }, [
        el("div", { class: "progress-total" }, [
          el("div", { class: "rail-heading", text: "전체 진행" }),
          el("div", { class: "progress-figure" }, [
            el("b", { text: String(pct) + "%" }),
            el("span", { text: total.done + " / " + total.total + " 문제" }),
          ]),
          el("div", { class: "bar" }, [el("i", { style: "width:" + pct + "%" })]),
          el("button", {
            class: "reset-link",
            type: "button",
            onclick: function () {
              if (!confirm("풀이 기록을 모두 지울까요? 되돌릴 수 없습니다.")) return;
              progress = { solved: {}, revealed: {}, drafts: {} };
              state.drafts = {};
              state.picks = {};
              state.results = {};
              saveProgress();
              render();
            },
          }, ["기록 초기화"]),
        ]),
      ]),
      el("nav", { class: "rail-card" }, [
        el("div", { class: "rail-heading", text: "주차" }),
        weekList,
      ]),
    ]);

    /* 본문 */
    var tabs = el("div", { class: "tabs", role: "tablist" }, [
      tabButton("concepts", "개념 정리", week.concepts.length),
      tabButton("problems", "예제 문제", week.problems.length),
      tabButton("scratch", "연습장", null),
    ]);

    var head = el("header", { class: "week-head" }, [
      el("div", { class: "week-eyebrow", text: week.no + "주차" }),
      el("h1", { class: "week-title", text: week.title }),
      el("p", { class: "week-subtitle", text: week.subtitle }),
      tabs,
    ]);

    var body = el("section", { class: "main-body" });

    if (state.tab === "concepts") {
      week.concepts.forEach(function (c) { body.appendChild(renderConcept(c)); });
    } else if (state.tab === "problems") {
      var s = weekStats(week);
      body.appendChild(el("p", {
        class: "week-subtitle",
        style: "margin-bottom:12px",
        text: s.done === s.total
          ? "이 주차의 문제를 모두 풀었습니다."
          : "푼 문제 " + s.done + "개 / 전체 " + s.total + "개. 막히면 힌트를 순서대로 열어 보세요.",
      }));
      var list = el("div", { class: "prob-list" });
      week.problems.forEach(function (p, i) { list.appendChild(renderProblem(p, i)); });
      body.appendChild(list);
    } else {
      body.appendChild(renderScratch());
    }

    var main = el("div", { class: "main" }, [head, body]);
    root.appendChild(el("div", { class: "shell" }, [rail, main]));
  }

  function tabButton(id, label, count) {
    return el("button", {
      class: "tab",
      type: "button",
      role: "tab",
      "aria-selected": state.tab === id ? "true" : "false",
      onclick: function () { state.tab = id; render(); },
    }, [
      document.createTextNode(label),
      count !== null && count !== undefined ? el("span", { class: "tab-count", text: String(count) }) : null,
    ].filter(Boolean));
  }

  function renderConcept(c) {
    var open = state.openConcepts[c.id] !== false;
    var card = el("div", { class: "concept", "data-open": open ? "true" : "false" }, [
      el("button", {
        class: "concept-head",
        type: "button",
        "aria-expanded": open ? "true" : "false",
        onclick: function () {
          state.openConcepts[c.id] = !open;
          render();
        },
      }, [
        el("span", {
          class: "chev",
          html: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>',
        }),
        el("span", { class: "concept-title", text: c.title }),
      ]),
    ]);

    if (c.summary) card.appendChild(el("div", { class: "concept-summary", text: "▸ " + c.summary }));

    if (open) {
      var body = el("div", { class: "concept-body" });
      c.blocks.forEach(function (b) {
        var node = renderBlock(b);
        if (node) body.appendChild(node);
      });
      card.appendChild(body);
    }
    return card;
  }

  /* ---------- 테마 -------------------------------------------------------- */

  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem("python-workbook-theme"); } catch (e) {}
    if (saved === "dark" || saved === "light") {
      document.documentElement.setAttribute("data-theme", saved);
    }
    var btn = document.querySelector("#theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var cur = document.documentElement.getAttribute("data-theme");
      var isDark = cur
        ? cur === "dark"
        : window.matchMedia("(prefers-color-scheme: dark)").matches;
      var next = isDark ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("python-workbook-theme", next); } catch (e) {}
    });
  }

  /* ---------- 시작 -------------------------------------------------------- */

  function markEngine() {
    var badge = document.querySelector("#engine-badge");
    if (!badge) return;
    if (R.ready()) {
      badge.setAttribute("data-state", "ready");
      badge.textContent = "파이썬 실행 준비됨";
    } else {
      badge.setAttribute("data-state", "loading");
      badge.textContent = "실행기 불러오는 중";
      setTimeout(markEngine, 400);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    root = document.querySelector("#app");
    loadLocal();
    state.drafts = progress.drafts || {};
    initTheme();
    render();
    markEngine();
    connectDb();
  });
})();
