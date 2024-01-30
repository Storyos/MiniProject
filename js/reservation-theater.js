const area_select = document.querySelectorAll(".final_select");
const next_btn = document.querySelector('.next_btn');

for(area of area_select){
    area.addEventListener("click",(e) => {
        console.log("Clicked!");
        next_btn.style.display = 'block';
    });
}