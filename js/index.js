// 화면 스크롤 > 메뉴 변경
const topMenu = document.getElementById("header_bot_back")
const topMenuBack = document.getElementById("header_bot_back")
const topMenu_right = document.getElementById("header_bot_grid03")
const topMenu_center_btn = document.querySelectorAll(".header_menu_btn a")
const topMenu_right_btn = document.querySelectorAll("#header_bot_grid03 a")
const topDropMenu = document.getElementById("header_bot_drop")

let topMenuY = topMenu.offsetTop;

window.addEventListener('scroll', () => {
  
  let scrollPosition = window.scrollY;
  
  if(scrollPosition > topMenuY){
    topMenu.setAttribute('id','header_bot_back_scoll')
    topDropMenu.setAttribute('id','header_bot_drop_hover')
    topMenu_center_btn.forEach((e)=>{
      e.style.color = 'black'
    })
    topMenu_right_btn.forEach((e)=>{
      e.style.color = 'black'
    })
    topMenu_right.style.color = 'black'
  }else {
    topMenu.setAttribute('id','header_bot_back')
    topDropMenu.setAttribute('id','header_bot_drop')
    topMenu_center_btn.forEach((e)=>{
      e.style.color = 'white'
    })
    topMenu_right_btn.forEach((e)=>{
      e.style.color = 'white'
    })
    topMenu_right.style.color = 'white'
  }
  
})

//화면 스크롤 > 모바일 메뉴 변경
const mMenuBg = document.querySelector('.mheader_container')
const mMenu = document.querySelector('.mheader_menuBox')

window.addEventListener('scroll',()=>{

  let scrollPosition = window.scrollY;

  if(scrollPosition>200){
    mMenuBg.style.top = '-100px'
    mMenu.style.top = '0'
  }else {
    mMenuBg.style.top = '0'
    mMenu.style.top = '-40px'
  }
})


// 메뉴 마우스오버 > 드롭다운 메뉴 생성
const dropDown = document.querySelectorAll(".header_menu_btn")
const dropDownMenu = document.querySelectorAll(".dropBox")
const dropDownBox = document.getElementById('header_bot_drop')
const menuBox = document.getElementById('header_top')

dropDown.forEach((e)=>{
  e.addEventListener('mouseover', ()=>{
    if(e===dropDown[0]){
      // console.log('예매')
      dropDownMenu.forEach(e => {
        e.style.display='none'
      });
      dropDownMenu[0].style.display = ""
    }else if(e===dropDown[1]){
      // console.log('영화')
      dropDownMenu.forEach(e => {
        e.style.display='none'
      });
      dropDownMenu[1].style.display = ""
    }else if(e===dropDown[2]){
      // console.log('영화관')
      dropDownMenu.forEach(e => {
        e.style.display='none'
      });
      dropDownMenu[2].style.display = ""
    }else if(e===dropDown[3]){
      // console.log('이벤트')
      dropDownMenu.forEach(e => {
        e.style.display='none'
      });
      dropDownMenu[3].style.display = ""
    }else if(e===dropDown[4]){
      // console.log('스토어')
      dropDownMenu.forEach(e => {
        e.style.display='none'
      });
      dropDownMenu[4].style.display = ""
    }
    menuBox.addEventListener('mouseover', ()=>{
      dropDownMenu.forEach(e => {
        e.style.display='none'
      });
    })
    dropDownBox.addEventListener('mouseleave', ()=>{
      dropDownMenu.forEach(e => {
        e.style.display='none'
      });
    })
  })
})

// 모달박스버튼
const modarIcon = document.querySelectorAll('#header_bot_grid03 a')
const modarBox = document.getElementById('index_modal')
const modarBoxEsc = document.getElementById('index_modal_esc')

modarIcon[2].addEventListener('click', (e)=>{
  modarBox.style.display = ""
  modarBox.style.boxShadow = 'rgba(0,0,0,0.5) 0 0 0 9999px';
  document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
})
modarBoxEsc.addEventListener('click', (e)=>{
  modarBox.style.display = "none"
  document.body.style.cssText = ``;
  modarBox.style.boxShadow = '';
  // window.scrollTo(0,window.scrollY);
})


//ImgSlide
let slideIndex = 0;
const slideImg = document.querySelectorAll('.content_slides_box li');
const slideBox = document.querySelector('.content_slides_box');
function moveImgSlide(n) {
  slideIndex += n;
  if (slideIndex >= slideImg.length) {
    slideIndex = 0; // 끝에 도달하면 처음 이미지부터 다시 시작
  }
  if (slideIndex < 0) {
    slideIndex = slideImg.length - 1;
  }
  const offset = -slideIndex * 25; // 슬라이드 이동 거리 계산 (단위: %)
  slideBox.style.transform = `translateX(${offset}%)`;
}

// cardSlide
let cardIndex = 0;
const cards = document.querySelectorAll('#content_cardBox li')
const cardBox = document.getElementById('content_cardBox')
const lArrow = document.querySelector('.card_prev')
const rArrow = document.querySelector('.card_next')

function moveCardSlide(e){
  const cardOffset = -e * 9.1; // 슬라이드 이동 거리 계산 (단위: %)
  cardBox.style.transform = `translateX(${cardOffset}%)`
}

lArrow.addEventListener('click', ()=>{
  cardIndex--;
  if(cardIndex<0){
    cardIndex = cards.length-5
  }
  
  console.log(cardIndex)
  moveCardSlide(cardIndex)
})
rArrow.addEventListener('click', ()=>{
  cardIndex++;
  if(cardIndex>cards.length-5){
    cardIndex = 0;
  }
  console.log(cardIndex)
  moveCardSlide(cardIndex)
})

// mfooter 
const mfooterArrow = document.querySelectorAll('.mfooter_title i')
const mfooterInfo = document.querySelector('.mfooter_info')

mfooterArrow[0].addEventListener('click', ()=>{
  mfooterArrow[0].classList.toggle('fa-angle-up')
  if(mfooterInfo.style.height==='0px'){
    mfooterInfo.style.height='171px'
  }else{
    mfooterInfo.style.height='0'
  }
})


