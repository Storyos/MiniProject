window.onload = function() {
  const parkingPopup = document.getElementById('parkingPopup');
  const parkingCloseBtn = document.querySelector('.popup-content .close');
  const confirmButton = document.getElementById('confirmButton'); // 추가
  
  parkingPopup.style.display = 'block';
  document.body.style.overflow = 'hidden'; // 페이지 스크롤 방지

  function closePopup() {
    parkingPopup.style.display = 'none';
    document.body.style.overflow = ''; // 페이지 스크롤 허용
  }

  parkingCloseBtn.addEventListener('click', closePopup);
  confirmButton.addEventListener('click', closePopup); // 추가
};





 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 const modalTransport = document.getElementById('modalTransport');
  const modalParking = document.getElementById('modalParking');
  const modalMap = document.getElementById('modalMap');
  const btnTransport = document.querySelector('.icons span:nth-child(1)');
  const btnParking = document.querySelector('.icons span:nth-child(2)');
  const btnMap = document.querySelector('.icons span:nth-child(3)');
  const closeBtns = document.querySelectorAll('.close');

  let isTransportModalOpen = false;
  let isParkingModalOpen = false;
  let isMapModalOpen = false;

  btnTransport.onclick = function() {
    if (!isTransportModalOpen && !isParkingModalOpen && !isMapModalOpen) {
      modalTransport.style.display = 'block';
      isTransportModalOpen = true;
    }
  }

  btnParking.onclick = function() {
    if (!isParkingModalOpen && !isTransportModalOpen && !isMapModalOpen) {
      modalParking.style.display = 'block';
      isParkingModalOpen = true;
    }
  }

  btnMap.onclick = function() {
    if (!isMapModalOpen && !isTransportModalOpen && !isParkingModalOpen) {
      modalMap.style.display = 'block';
      isMapModalOpen = true;
    }
  }

  closeBtns.forEach(btn => {
    btn.onclick = function() {
      modalTransport.style.display = 'none';
      modalParking.style.display = 'none';
      modalMap.style.display = 'none';
      isTransportModalOpen = false;
      isParkingModalOpen = false;
      isMapModalOpen = false;
    }
  });





















  function toggleCircle(circle) {
    // If the circle is already black, do nothing
    if (circle.classList.contains('black')) {
        return;
    }

    // Remove black class from all circles first
    var allCircles = document.querySelectorAll('.circle');
    allCircles.forEach(function (item) {
        item.classList.remove('black');
    });

    // Add black class to the clicked circle
    circle.classList.add('black');

    // Call function to update movie schedule
    updateMovieSchedule(circle.textContent);
}

// 함수를 호출하여 영화 일정을 업데이트
function updateMovieSchedule(date) {
    var scheduleDataForDate = movieScheduleData[date];
    var movieScheduleDiv = document.getElementById('movieSchedule');

    movieScheduleDiv.innerHTML = '';

    if (scheduleDataForDate) {
        for (var room in scheduleDataForDate) {
            var movieData = scheduleDataForDate[room];

            var box = document.createElement('div');
            box.classList.add('movie-box');

        
            var title = document.createElement('h3');
            title.textContent = movieData["영화제목"];
            box.appendChild(title);

            var startTime = document.createElement('p');
            startTime.textContent = "시작 시간: " + movieData["시작시간"];
            box.appendChild(startTime);

            var roomInfo = document.createElement('p');
            roomInfo.textContent = "상영관: " + room;
            box.appendChild(roomInfo);

            var seatsInfo = document.createElement('p');
            seatsInfo.textContent = "좌석수: " + movieData["좌석수"] + "/" + movieData["전체좌석수"];
            box.appendChild(seatsInfo);

            var reserveBtn = document.createElement('button');
            reserveBtn.textContent = "예약하기";
            reserveBtn.addEventListener('click', function() {
                openModal2(movieData["영화제목"], movieData["시작시간"], room, movieData["좌석수"], movieData["전체좌석수"]);
            });
            box.appendChild(reserveBtn);

            movieScheduleDiv.appendChild(box);
        }
    } else {
        var noScheduleMsg = document.createElement('p');
        noScheduleMsg.textContent = '상영일정이 없습니다.';
        movieScheduleDiv.appendChild(noScheduleMsg);
    }
}





var movieScheduleData = {
    "1": {
        "1관": { "영화제목": "🟢어벤져스", "시작시간": "15:40", "좌석수": "200", "전체좌석수": "211" },
        "2관": { "영화제목": "🔵스파이더맨", "시작시간": "16:00", "좌석수": "180", "전체좌석수": "200" },
        "3관": { "영화제목": "⚫ 베트맨", "시작시간": "15:50", "좌석수": "190", "전체좌석수": "210" }
    },
    "4": {
        "1관": { "영화제목": "🟢어벤져스", "시작시간": "17:30", "좌석수": "190", "전체좌석수": "211" }
    },
    "10": {
        "1관": { "영화제목": "⚫ 베트맨", "시작시간": "16:20", "좌석수": "180", "전체좌석수": "200" }
    },
    "14": {
        "1관": { "영화제목": "🔵스파이더맨", "시작시간": "18:00", "좌석수": "195", "전체좌석수": "200" }
    }
};

// 모달 열기
function openModal(movieTitle, startTime, room, seats, totalSeats) {
    var modal = document.getElementById('ratingModal');
  

    modal.style.display = 'block';
}

// 모달 닫기
function closeModal() {
    var modal = document.getElementById('ratingModal');
    modal.style.display = 'none';
}









// 모달 열기
function openModal2(movieTitle, startTime, room, seats, totalSeats) {
    var modal = document.getElementById('myModal');
    var modalMovieTitle = document.getElementById('modal-movie-title');
    var modalStartTime = document.getElementById('modal-start-time');
    var modalRoom = document.getElementById('modal-room');
    var modalSeats = document.getElementById('modal-seats');
    var modalTotalSeats = document.getElementById('modal-total-seats');

    modalMovieTitle.textContent = movieTitle;
    modalStartTime.textContent = startTime;
    modalRoom.textContent = room;
    modalSeats.textContent = seats;
    modalTotalSeats.textContent = totalSeats;

    modal.style.display = 'block';
}

// 모달 닫기
function closeModal2() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// 예약 버튼 클릭 시 동작
function reserve() {
    // 여기에 예약 기능 추가
    alert('영화를 예약합니다.');
}
















// 페이지 로드 시 초기 설정
document.addEventListener('DOMContentLoaded', function() {
    // 기본으로 첫 번째 날짜와 관련된 일정을 표시
    updateMovieSchedule("1");
});