const back_btn = document.querySelector("#back_btn");

back_btn.addEventListener("click",()=>{
    a = confirm("현재 예매중인 정보는 모두 사라집니다 \n진행하시겠습니까?");
    if(a==true){
        location.href="./reservation.html";
    }
})
