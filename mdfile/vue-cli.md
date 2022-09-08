https://cli.vuejs.org/

CLI 
- Command Line Interface
- 명령어를 통한 특정 액션을 수행하는 도구 (명령어 보조/실행 도구)

node -v
npm -v

npm install -g @vue/cli

* npm ?
- node package manager
- 역할
: package.json에서 dependencies 혹은 devDependencies에 대한 라이브러리 설명

* npm run serve
: package.json에 정의돼 있는 scripts 속성 밑의 serve라는 명령어

* npm run serve 명령어 사용시 실행되는 파일 ?
: public 폴더의 index.html
: <!-- built files will be auto injected -->
: 빌드된 파일이 자동으로 주입(추가)될 것이다 
(src 밑에 정의해 놓은 main.js, App.vue 등등 여러 파일을 종합해서 하나의 파일로 변환하여 압축돼서 주입됨)

* error case ?
1. permision error
: 설치하는 라이브러리가 위치하는 폴더에 파일 쓰기 권한이 없는 것(관리자 권한이 아님)
--> sudo npm install -g @vue/cli 입력

* npm가 어디에 설치되나 ?
https://stackoverflow.com/questions/5926672/where-does-npm-install-packages

- 맥 : /user/local/lib/node_modules
- 윈도우 : 계정/AppData/Roaming/npm/node_modules

==
- 서비스를 이용하기 위한 기본 구성을 갖춤 : CLI

* Vue CLI 2.x
: vue init '프로젝트 템플릿 유형' '프로젝트 폴더 위치'
: vue init webpack-simple '프로젝트 폴더 위치'
--> 깃헙에 있는 특정 리포지토리 다운받는 것

* Vue CLI 3.x ~ 5.x
: vue create '프로젝트 폴더 위치'
--> 템플릿 유형이 사라진 이유 ?
--> : 플러그인 기반이었기 때문

vue create vue-cli --> Vue2 선택

- cd : 특정 폴더로 이동하는 명령어
- npm run serve

- 웹 개발할 때 알아두면 좋은 리눅스 명령어 글
https://joshua1988.github.io/web-development/linux-commands-for-beginners/

- localhost : 이 컴퓨터로 간단한 서버를 띄운것(일반적으로 자기 IP)
- :8080.. : 포트 번호

==

* HelloWorld.vue 삭제하기
* App.vue 내용 전체 삭제 후 vti 명령어로 자동완성

==

* NPM 소개 강좌
https://www.inflearn.com/course/%ED%94%84%EB%9F%B0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%9B%B9%ED%8C%A9/unit/37370

* NPM 소개 문서
https://joshua1988.github.io/webpack-guide/build/node-npm.html