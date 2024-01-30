// 날자 Slide 하는 왼쪽 오른쪽 이동키 //
document.getElementById('left_move').addEventListener("click", (e) => {
    document.querySelector('.date_list').scrollBy({ left: -100, behavior:"smooth"});
});
document.getElementById('right_move').addEventListener("click", (e) => {
    document.querySelector('.date_list').scrollBy({
        left:100, behavior:"smooth"});
});


// 날짜 클릭시 스타일 변경//
const dates = document.querySelectorAll('.date');
const cardset = document.querySelector('.time_cardset');
console.log(cardset.innerHTML);
for(date of dates){
    date.addEventListener("click",function(){
        change_html();
        time_cards = document.querySelectorAll('.time_card');
        for(card of time_cards){
            card.addEventListener("click",() => {
            seat_announcer.classList.add('popup');
            });
        }
        for(date of dates){
            if(date!=this){
            if(date.classList.contains("clicked"))
                date.classList.toggle("clicked");
            }
        }
        this.classList.toggle("clicked");
    })
}

// 타임카드 선택 시 나타나는 팝업 필요
var time_cards = document.querySelectorAll('.time_card');
const seat_announcer = document.querySelector('#seat_announce');
for(card of time_cards){
    card.addEventListener("click",() => {
    seat_announcer.classList.add('popup');
    });
}
const close_btn = document.querySelector('#close');
close_btn.addEventListener("click",()=>{
    console.log("clicked");
    seat_announcer.classList.remove('popup');
});



// html 바꾸는 조잡한 방식..
function change_html() {
    cardset.innerHTML=`
        <p>2D | 자막 </p>
        <div class="time_card">
        <div class="running_time">
            <p><span class="start_time">10:00</span> ~ 12:06</p>
            <p class="seats">232 / 254 <t>1관</t></p>
            <!-- js로 넣기 -->
        </div>
    </div>
    <div class="time_card">
        <div class="running_time">
            <p><span class="start_time">11:00</span> ~ 13:06</p>
            <p class="seats">210 / 254 <t>1관</t></p>
            <!-- js로 넣기 -->
        </div>
    </div>
<div class="time_card">
        <div class="running_time">
            <p><span class="start_time">12:30</span> ~ 14:36</p>
            <p class="seats">170 / 183 <t>2관</t></p>
            <!-- js로 넣기 -->
        </div>
    </div>
    <div class="time_card">
        <div class="running_time">
            <p><span class="start_time">13:30</span> ~ 15:36</p>
            <p class="seats">170 / 183 <t>2관</t></p>
            <!-- js로 넣기 -->
        </div>
    </div>
    <div class="time_card">
        <div class="running_time">
            <p><span class="start_time">15:00</span> ~ 17:06</p>
            <p class="seats">250 / 254 <t>1관</t></p>
            <!-- js로 넣기 -->
        </div>
    </div>
    <div class="time_card">
        <div class="running_time">
            <p><span class="start_time">16:00</span> ~ 18:06</p>
            <p class="seats">180 / 183 <t>2관</t></p>
            <!-- js로 넣기 -->
        </div>
    </div>
    <div class="time_card">
        <div class="running_time">
            <p><span class="start_time">17:30</span> ~ 19:36</p>
            <p class="seats">180 / 254 <t>1관</t></p>
            <!-- js로 넣기 -->
        </div>
    </div>
    <div class="time_card">
        <div class="running_time">
            <p><span class="start_time">18:30</span> ~ 20:36</p>
            <p class="seats">170 / 183 <t>2관</t></p>
            <!-- js로 넣기 -->
        </div>
    </div>
    <div class="time_card">
        <div class="running_time">
            <p><span class="start_time">20:00</span> ~ 22:06</p>
            <p class="seats">254 / 254 <t>1관</t></p>
            <!-- js로 넣기 -->
        </div>
    </div>
    <div class="time_card">
        <div class="running_time">
            <p><span class="start_time">21:00</span> ~ 23:06</p>
            <p class="seats">183 / 183 <t>2관</t></p>
        </div>
    </div>
    <div class="time_card">
    <div class="running_time">
        <p><span class="start_time">21:30</span> ~ 23:36</p>
        <p class="seats">183 / 183 <t>2관</t></p>
    </div>
</div>
<div class="time_card">
        <div class="running_time">
            <p><span class="start_time">22:05</span> ~ 23:51</p>
            <p class="seats">183 / 183 <t>2관</t></p>
        </div>
    </div>
    <br>
    <hr>
    <p>2D|더빙</p>
    <div class="time_card">
        <div class="running_time">
            <p><span class="start_time">10:30</span> ~ 12:36</p>
            <p class="seats">232 / 254 <t>1관</t></p>
        </div>
    </div>
    <div class="time_card">
        <div class="running_time">
            <p><span class="start_time">14:00</span> ~ 16:06</p>
            <p class="seats">232 / 254 <t>1관</t></p>
            <!-- js로 넣기 -->
        </div>
    </div>
`;
}

//영화 예매 버튼 클릭시 자리선택 popup //
