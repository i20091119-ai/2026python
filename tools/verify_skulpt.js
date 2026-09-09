/**
 * Skulpt(브라우저용 파이썬 엔진)의 실행 결과가
 * CPython(tools/build.py 가 만든 기대 출력)과 일치하는지 검사한다.
 *
 * 웹앱은 브라우저에서 Skulpt 로 채점하므로, 두 엔진의 출력이 다르면
 * 맞는 답을 틀렸다고 처리하게 된다. 그런 문제를 미리 찾아내기 위한 도구다.
 *
 * 사용법: node tools/verify_skulpt.js [skulpt 디렉터리]
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.dirname(__dirname);
const SKDIR = process.argv[2] || path.join(ROOT, "js", "vendor");

// 브라우저와 완전히 같은 코드를 쓰기 위해 window 를 만들어 두고 그대로 불러온다
global.window = global;
require(path.join(SKDIR, "skulpt.min.js"));
require(path.join(SKDIR, "skulpt-stdlib.js"));
require(path.join(ROOT, "js", "runner.js"));
require(path.join(ROOT, "js", "data.js"));
const DATA = global.window.COURSE_DATA;
const PyRunner = global.window.PyRunner;

function runSkulpt(code, inputs) {
  const r = PyRunner.run(code, { inputs: inputs, timeLimit: 10000 });
  return { out: r.stdout, display: r.display, error: r.error ? r.error.text : null };
}

// 채점에 쓰이는 것과 같은 비교 규칙 (실수 오차 무시 포함)
const normalize = (t) => PyRunner.normalizeFloats(PyRunner.normalize(t));

let checked = 0;
const mismatches = [];
const skErrors = [];

for (const week of DATA.weeks) {
  // 1) 개념 설명의 예제 코드
  for (const c of week.concepts) {
    for (const b of c.blocks) {
      if (b.t !== "code" || b.output === undefined) continue;
      if (b.is_error) continue; // 오류를 보여주는 예제는 메시지 문구가 엔진마다 달라 제외
      checked++;
      const r = runSkulpt(b.code, b.stdin);
      if (r.error) {
        skErrors.push(`[${week.id}/${c.id}] 예제 실행 오류: ${r.error.split("\n")[0]}`);
        continue;
      }
      // 개념 예제는 화면에 보이는 그대로(프롬프트 + 입력 에코 포함)를 비교한다
      const expected = normalize(b.output);
      if (normalize(r.display) !== expected) {
        mismatches.push({
          where: `${week.id}/${c.id} 예제`,
          code: b.code,
          cpython: expected,
          skulpt: normalize(r.display),
        });
      }
    }
  }

  // 2) 문제의 모범답안 / 예측문제 코드
  for (const p of week.problems) {
    if (p.type === "code") {
      for (const t of p.tests) {
        checked++;
        const r = runSkulpt(p.solution, t.stdin);
        if (r.error) {
          skErrors.push(`[${week.id}/${p.id}] 모범답안 실행 오류: ${r.error.split("\n")[0]}`);
          continue;
        }
        if (normalize(r.out) !== t.expected) {
          mismatches.push({
            where: `${week.id}/${p.id} (입력=${JSON.stringify(t.stdin)})`,
            code: p.solution,
            cpython: t.expected,
            skulpt: normalize(r.out),
          });
        }
      }
    } else if (p.type === "predict") {
      checked++;
      const r = runSkulpt(p.code, p.stdin);
      if (r.error) {
        skErrors.push(`[${week.id}/${p.id}] 예측문제 실행 오류: ${r.error.split("\n")[0]}`);
        continue;
      }
      if (normalize(r.out) !== p.expected) {
        mismatches.push({
          where: `${week.id}/${p.id} 예측문제`,
          code: p.code,
          cpython: p.expected,
          skulpt: normalize(r.out),
        });
      }
    }
  }
}

console.log(`검사한 코드: ${checked}개`);
if (skErrors.length) {
  console.log(`\nSkulpt 실행 오류 ${skErrors.length}건:`);
  skErrors.forEach((e) => console.log("  -", e));
}
if (mismatches.length) {
  console.log(`\n출력 불일치 ${mismatches.length}건:`);
  for (const m of mismatches) {
    console.log("\n--- " + m.where);
    console.log("  코드:", m.code.replace(/\n/g, "\n        "));
    console.log("  CPython:", JSON.stringify(m.cpython));
    console.log("  Skulpt :", JSON.stringify(m.skulpt));
  }
}
if (!skErrors.length && !mismatches.length) {
  console.log("\n두 엔진의 결과가 모두 일치합니다.");
}
process.exit(skErrors.length || mismatches.length ? 1 : 0);
