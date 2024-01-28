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