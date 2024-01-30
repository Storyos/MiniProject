
/* 성인 + - 버튼 기능 */
const add_btn = document.querySelector('#add_btn');
const min_btn = document.querySelector('#min_btn');
let a = 0;
const adult_num = document.querySelector('#adult_num');
add_btn.addEventListener("click",()=>{
    if(a<8){
    a++;
    adult_num.innerText=a;
    }
})
min_btn.addEventListener("click", ()=>{
    if(a!=0){
    a--;
    adult_num.innerText=a;
    }
})

const add_btn1 = document.querySelector('#add_btn1');
const min_btn1 = document.querySelector('#min_btn1');
let b = 0;
const teen_num = document.querySelector('#teen_num');
add_btn1.addEventListener("click",()=>{
    if(b<8){
    b++;
    teen_num.innerText=b;
    }
})
min_btn1.addEventListener("click", ()=>{
    if(b!=0){
    b--;
    teen_num.innerText=b;
    }
})

const add_btn2 = document.querySelector('#add_btn2');
const min_btn2 = document.querySelector('#min_btn2');
let c = 0;
const old_num = document.querySelector('#older_num');
add_btn2.addEventListener("click",()=>{
    if(c<8){
    c++;
    old_num.innerText=c;
    }
})
min_btn2.addEventListener("click", ()=>{
    if(c!=0){
    c--;
    old_num.innerText=c;
    }
})
const goseat = document.querySelector('#goseat');
goseat.addEventListener("click",()=>{
    zeroupeightdown();
})
function zeroupeightdown(){
    if(a+b+c>8 || a+b+c<=0)
    {
        alert("인원은 최소 1명 최대 8명입니다!");
        a=0;
        b=0;
        c=0;
        old_num.innerText=c;
        teen_num.innerText=b;
        adult_num.innerText=a;
    }
    else if(a+b+c==count){
        window.location.href="./reserv_payment.html";
    }
    else{
        alert("좌석을 모두 선택해주세요");
    }
}

const seats = document.querySelectorAll('.seat');
let count=0;
for(s of seats){
    s.addEventListener("click", function(){
        if(this.classList.contains("selected"))
        {
            count--;
            this.classList.remove("selected");
        }
        else{
        this.classList.add("selected");
        count++
        if(count>a+b+c){
            alert(`${a+b+c}명 보다 많이 선택할 수 없습니다.`);
            this.classList.toggle("selected");
            count--;
        };
    }
    });
}