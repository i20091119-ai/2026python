# 수신함 (적용 대기)

사용자가 강의를 들으며 보내 준 추가 내용을 모아 두는 곳.
**"이제 시작!" 이라고 말하기 전까지는 적용하지 않는다.**

적용할 때 할 일
1. 아래 배치들을 해당 주차 `content/weekN.py` 에 반영
2. 관련 예제 문제 추가 (힌트 3단계 + 해설 + 모범답안)
3. `python3 tools/build.py` 로 실행 결과 생성 및 검증
4. `node tools/verify_skulpt.js` 로 두 엔진 일치 확인
5. `python3 tools/build_artifact.py` 로 단일 파일 재생성
6. 커밋 후 푸시 (Pages 자동 배포) + Artifact 재게시
