setTimeout("location.href='index.html'", 5500);
let a = 5;

const timess = document.querySelector('.remain_t');

setInterval(function() {
    console.log(a);
    timess.innerHTML=`${a}초 후에 메인페이지로 돌아갑니다.`
    a--;
},1000)