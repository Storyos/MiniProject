# MiniProject - 작업규칙

### 1. 브랜치는 메인 브랜치, 개발 브랜치, 기능 브랜치 3종류로 나눕니다.
- 메인 브랜치(main) : 프로젝트의 안정된 상태 유지.<br><b> ※ 절대 Commit 하지 않음 merge로만 진행할 예정입니다. </b>
  
- 개발 브랜치(develop) : 모든 작업의 기준점으로, 이 브랜치에서 기능 브랜치로 분기하고 , 병합합니다.

- 기능 브랜치(feature/'구현된기능') : 개발 브랜치에서 분기되어 각 구현 할 기능의 이름으로 브랜치를 생성합니다. 이후 구현이 끝나면, develop과 merge 합니다. <b> develop 브랜치로 merge 전에 Pull Request 하여 오류 및 코드리뷰 </b>

### 2. 커밋 규칙
- 커밋 메시지는 "이니셜_작업내용" 으로 통일하고, 길어져도 상관없으니 세부적으로 적어주시면 됩니다. 
<br> ex ) "KBG_로그인폼에서의 ID중복검사 로직추가" 
- 커밋은 큰 변경사항 보다는 작은 단위로 자주 해주시면 좋습니다.

### 3. 작업 전에 항상 pull 하여 최신상태에서 작업
<br>

### 4. 파일명 및 파일 구조 규칙
```
예시
/ (프로젝트 루트)
├── index.html
├── 기타 사용될 page
├── css/
│   ├── style.css
│   └── components/
│       ├── button.css
│       ├── card.css
│       └── navbar.css
├── js/
│   ├── script.js
│   └── components/
│       ├── modal.js
│       └── tab.js
├── components/
│   ├── button.html
│   ├── card.html
│   └── navbar.html
└── images/
    ├── logo.png
    └── background.jpg

//이미지파일 이름명에 대한 규칙은 상의 후 결정..

```
<br>

### ※ components 폴더란❓ ###
저희가 자주 사용하게 될 버튼이나, 카드, Navigation Bar 등 재사용하기 위한 것들을 따로 모아두어, 필요할 때마다 꺼내씁니다. → UI들의 통일성 확보 및 시간 절약

📍 재사용하는 방법 <br>
그냥 복붙하면 됩니다. <br><br>
`button.html 예시`
```
<!-- 기본 버튼 -->
<button class="custom-button">Click Me</button>

<!-- 대형 버튼 -->
<button class="custom-button large">Large Button</button>

<!-- 색상이 적용된 버튼 -->
<button class="custom-button red">Red Button</button>
```

`또한 css/components/button.css 파일에 들어갈 예시는 다음과 같습니다.`
```
/* 기본 버튼 스타일 */
.custom-button {
    padding: 10px 15px;
    border: 2px solid transparent;
    border-radius: 4px;
    background-color: blue;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

.custom-button:hover {
    background-color: darkblue;
    color: #fff;
}

/* 대형 버튼 스타일 */
.custom-button.large {
    padding: 15px 20px;
    font-size: 18px;
}

/* 색상이 적용된 버튼 스타일 (레드) */
.custom-button.red {
    background-color: red;
}

.custom-button.red:hover {
    background-color: darkred;
}

```

이런식으로 button.html 작성해둔 뒤, 나중에 페이지 작업할 때 필요한 버튼들을 복붙하면 됩니다.

----

## ※ Develop Branch에서 분기하여 기능 브랜치 작성 방법

1. 현재 branch에서 develop branch로 이동 후 최신 develop branch 최신화
```
git checkout develop
git pull
```
2. develop branch에서 새로운 브랜치 생성하기
ex) 만약 login-form 기능을 개발하기 위한 브랜치 생성 시, 아래와 같이 입력하시면 됩니다.
```
git checkout -b feature/login-form
```

3. 해당 branch에서 작업 후 커밋&푸시 하시면 됩니다.
```
git add
git commit -m "KBG_로그인폼에서의 ID중복검사 로직추가"
git push origin feature/login-form
```
