


  // JavaScript로 관람권 개수 조절 및 가격 계산 구현
  var ticketCount = 1; // 초기 관람권 개수
  var pricePerTicket = 56000; // 1개당 가격

  // DOM 요소 가져오기
  var decreaseBtn = document.getElementById("decrease-btn");
  var increaseBtn = document.getElementById("increase-btn");
  var ticketCountSpan = document.getElementById("ticket-count");
  var totalPriceSpan = document.getElementById("total-price");

  // - 버튼 클릭 시 관람권 개수 감소 및 가격 업데이트
  decreaseBtn.addEventListener("click", function() {
    if (ticketCount > 1) {
      ticketCount--;
      updateTicketCountAndPrice();
    }
  });

  // + 버튼 클릭 시 관람권 개수 증가 및 가격 업데이트
  increaseBtn.addEventListener("click", function() {
    ticketCount++;
    updateTicketCountAndPrice();
  });

  // 관람권 개수 및 총 가격 업데이트 함수
  function updateTicketCountAndPrice() {
    ticketCountSpan.textContent = ticketCount;
    totalPriceSpan.textContent = (ticketCount * pricePerTicket).toLocaleString(); // 가격에 천 단위 구분자 추가
  }






















var acc = document.querySelectorAll(".accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      // 현재 아코디언 열려 있는 경우 다른 아코디언 닫기
      for (var j = 0; j < acc.length; j++) {
        if (acc[j] !== this && acc[j].classList.contains("active")) {
          acc[j].classList.remove("active");
          acc[j].nextElementSibling.style.maxHeight = null;
        }
      }
      // 현재 아코디언 열기
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}





