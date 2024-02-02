
function toggleSubRegion(regionId) {
    var subRegion = document.getElementById(regionId);
    if (subRegion.style.display === "none") {
        subRegion.style.display = "block";
    } else {
        subRegion.style.display = "none";
    }
}

function showSubRegion(region) {
    var subRegions = document.querySelectorAll('.sub-region');
    subRegions.forEach(function(subRegion) {
        subRegion.style.display = 'none';
    });
    document.getElementById(region).style.display = 'block';
}

// 페이지 로드 시 서울 지역을 기본으로 선택합니다.
window.onload = function() {
    showSubRegion('seoul');
};
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
        //change_html();
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
