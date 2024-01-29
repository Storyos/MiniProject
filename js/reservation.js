
const movie_menu = document.querySelector("#reserve-movie");
const theater_menu = document.querySelector("#reserve-theater");
const date_menu = document.querySelector("#reserve-datentime")
const movie_list = document.querySelector(".movie-list")
const movie_title = ['웡카','시민덕희','소풍','도그데이즈','외계+인 2부','위시','서울의 봄','데드맨'];
const movie_time = ['116분','113분','113분','120분','122분','95분','141분','108분'];
const movie_date = ['2024.01.31]','2024.01.24','2024.02.07','2024.02.07','2024.01.10','2024.01.03','2023.11.22','2024.02.07'];

for(let i = 0; i <8; i++){
    const movie_item1 = document.createElement("div");
    movie_item1.className='movie-item';
    console.log(movie_item1.className);
    movie_item1.innerHTML=`          
    <div class="movie-poster">
    <!-- 여기에 영화-포스터가 들어감 -->
</div>
<div class="movie-info">
    <h3 class="movie-title">${movie_title[i]}</h3>
    <p class="movie-time">${movie_time[i]}</p>
    <p class="movie-date">${movie_date[i]}</p>
    <p class="movie-detail"><a href="#상세보기">상세정보</a></p>
    <button>영화선택</button>
</div>
</div>`;
console.log(movie_list);
movie_list.appendChild(movie_item1);
console.log(movie_item1.innerHTML);
}