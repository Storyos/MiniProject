



// 관람권 개수를 조절하는 기능 추가
var decreaseBtn = document.getElementById("decrease-btn");
  var increaseBtn = document.getElementById("increase-btn");
  var ticketCount = document.getElementById("ticket-count");
  var totalPrice = document.getElementById("total-price");

  decreaseBtn.addEventListener("click", function() {
    var count = parseInt(ticketCount.textContent);
    if (count > 1) {
      count--;
      ticketCount.textContent = count;
      totalPrice.textContent = count * 56000; // 가격을 적절히 계산합니다.
    }
  });

  increaseBtn.addEventListener("click", function() {
    var count = parseInt(ticketCount.textContent);
    count++;
    ticketCount.textContent = count;
    totalPrice.textContent = count * 56000; // 가격을 적절히 계산합니다.
  });














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






