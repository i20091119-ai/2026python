#!/usr/bin/env python3
"""
index.html 과 모든 자원을 하나의 HTML 파일로 합친다.

결과물(dist/workbook.html)은 인터넷 연결이나 웹 서버 없이도
브라우저로 바로 열어 쓸 수 있고, Artifact 로 게시할 수도 있다.

Artifact 로 게시할 때는 <head>/<body> 를 감싸 주므로,
본문만 담은 dist/artifact.html 도 함께 만든다.
"""
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST = os.path.join(ROOT, "dist")


def read(*parts):
    with open(os.path.join(ROOT, *parts), encoding="utf-8") as f:
        return f.read()


def guard(js):
    """인라인 <script> 안에서 </script> 문자열이 태그를 닫아 버리지 않게 한다."""
    return js.replace("</script", "<\\/script")


def main():
    os.makedirs(DIST, exist_ok=True)

    css = read("css", "app.css")
    scripts = [
        ("skulpt", read("js", "vendor", "skulpt.min.js")),
        ("skulpt-stdlib", read("js", "vendor", "skulpt-stdlib.js")),
        ("runner", read("js", "runner.js")),
        ("data", read("js", "data.js")),
        ("app", read("js", "app.js")),
    ]

    html = read("index.html")

    # <head> 안의 내용(폰트 링크 + 제목)과 <body> 안의 내용을 뽑아 온다
    head_links = re.search(r'(<link rel="preconnect".*?display=swap">)', html, re.S).group(1)
    body = re.search(r"<body>(.*?)<script", html, re.S).group(1).strip()

    inline_scripts = "\n".join(
        '<script data-src="%s">\n%s\n</script>' % (name, guard(src)) for name, src in scripts
    )

    style = "<style>\n%s\n</style>" % css

    # 1) 단독 실행용 전체 문서
    standalone = """<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>AI 프로그래밍 심화 워크북</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
{links}
{style}
</head>
<body>
{body}
{scripts}
</body>
</html>
""".format(links=head_links, style=style, body=body, scripts=inline_scripts)

    out1 = os.path.join(DIST, "workbook.html")
    with open(out1, "w", encoding="utf-8") as f:
        f.write(standalone)

    # 2) Artifact 게시용 (head/body 골격은 게시할 때 자동으로 붙는다)
    artifact = """<title>AI 프로그래밍 심화 워크북</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
{links}
{style}
{body}
{scripts}
""".format(links=head_links, style=style, body=body, scripts=inline_scripts)

    out2 = os.path.join(DIST, "artifact.html")
    with open(out2, "w", encoding="utf-8") as f:
        f.write(artifact)

    for path in (out1, out2):
        print("생성: %s (%.1f MB)" % (path, os.path.getsize(path) / 1024 / 1024))

    if os.path.getsize(out2) > 15 * 1024 * 1024:
        print("경고: Artifact 크기 제한(16MB)에 가깝습니다.")
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
