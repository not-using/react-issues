# Most Comments!

특정 리포지토리(facebook/react)의 이슈 목록을 확인하는 페이지입니다.

- [배포링크](http://react-issues.s3-website.ap-northeast-2.amazonaws.com/)
- [원티드 프리온보딩 인턴십 8월](https://www.wanted.co.kr/events/pre_ob_fe_12)의 둘째주 과제를 수행한 결과물입니다.
- 개발 기간 : 약 2일 (2023.08.29 ~ 2023.08.30)
- 개발 인원 : [@notusing11](https://github.com/notusing11)
  + 환경 세팅에 도움주신 분 : [@HWAHAEBANG](https://github.com/HWAHAEBANG)

## 실행 방법

- 실행하기 위해서는 Node.js가 설치된 환경이 필요합니다. (LTS, 18.17.0 버전 기준)

- 해당 레포지토리를 클론 후 디렉토리로 이동합니다.
- `npm install & npm start` 명령어로 실행하실 수 있습니다.

```
  git clone https://github.com/notusing11/react-issues.git && cd react-issues;
  npm install & npm start;
```

## 주요 기능

- 지정한 조건에 맞는 데이터 요청 및 표시 (코멘트 수 많은 순, 열려있는 이슈 한정)
- 이슈 목록 및 상세 화면 기능 구현
- 에러 화면 구현
- Markdown 형식의 본문의 HTML 변환
- 무한 스크롤 및 데이터 요청 중 로딩 표시
- 특정 이슈 개수마다 정해진 광고 이미지 및 링크 표시

## 기술 스택 및 사용한 라이브러리

- Create React App (+ typescript)
- react-router-dom : client-side routing용
- octokit : Github api 활용을 위한 SDK
- styled-components : 컴포넌트 기반 css 처리

## 폴더 구조

```
src
├── apis
├── components
│   ├── commons
│   └── issue
├── configs
├── hooks
├── pages
├── types
└── utils

```

### 폴더 구조별 설명

- api : 네트워크 api 호출관련 로직
- components : 도메인별 분리
- configs : 정책 및 설정
- hooks : api 호출과 상관없는 로직
- pages : 페이지를 구성하는 컴포넌트
- utils : 커스텀훅이 아닌 함수들

## 추가 정보

### 배포

- 해당 프로젝트는 AWS S3를 통해 배포되었습니다. [배포링크](http://react-issues.s3-website.ap-northeast-2.amazonaws.com/)
