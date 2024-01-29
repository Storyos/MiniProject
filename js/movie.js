// ./js/movie.js
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider');
    const sliderItems = document.querySelectorAll('.slider__item');
    let currentIndex = 0;

    function showSlide(index) {
        sliderItems.forEach((item, i) => {
            item.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % sliderItems.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000); // 3초마다 슬라이드 변경
});
