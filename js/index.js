// 화면 스크롤 > 메뉴 변경
const topMenu = document.getElementById("header_bot_back")
const topMenuBack = document.getElementById("header_bot_back")
const topMenu_right = document.getElementById("header_bot_grid03")
const topMenu_center_btn = document.querySelectorAll(".header_menu_btn a")
const topMenu_right_btn = document.querySelectorAll("#header_bot_grid03 a")
const topDropMenu = document.getElementById("header_bot_drop")
const topDropHover = document.querySelectorAll(".dropBox a")
// .offsetTop은 요소의 위치값을 찾아옴.
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
    topDropHover.forEach((e)=>{
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
    topDropHover.forEach((e)=>{
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
const slideList = document.querySelectorAll('.content_slides_box li');
const slideImg = document.querySelectorAll('.content_slides_box li img');
const slideBox = document.querySelector('.content_slides_box');

if(window.innerWidth===414){
  let imgNum = 0;
  // 모바일 환경에서 li의 이미지 경로를 통으로 수정.
  slideImg.forEach(e => {
    imgNum++
    e.src = `image/index/index_mSlide_img0${imgNum}.jpg`
  })
}

function moveImgSlide(n) {
  slideIndex += n;
  if (slideIndex >= slideList.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slideList.length - 1;
  }
  const offset = -slideIndex * 25;
  slideBox.style.transform = `translateX(${offset}%)`;
}

// cardSlide
let cardIndex = 0;
const cards = document.querySelectorAll('#content_cardBox li')
const cardBox = document.getElementById('content_cardBox')
const lArrow = document.querySelector('.card_prev')
const rArrow = document.querySelector('.card_next')

function moveCardSlide(e){
  // 슬라이드 이동 거리 계산 그냥 노가다로 값을찾음. 알아보고 수정할것.
  const cardOffset = -e * 9.1;
  cardBox.style.transform = `translateX(${cardOffset}%)`
}

lArrow.addEventListener('click', ()=>{
  cardIndex--;
  if(cardIndex<0){
    cardIndex = cards.length-5
  }
  
  moveCardSlide(cardIndex)
})
rArrow.addEventListener('click', ()=>{
  cardIndex++;
  if(cardIndex>cards.length-5){
    cardIndex = 0;
  }
  moveCardSlide(cardIndex)
})

//special
const spLogo = document.querySelectorAll('.mSpecial_img > img')
const spBg = document.querySelector('.index_mSpecial_cardBox')
const spImg = document.querySelector('.mSpecial_grid > img')
const spUderLine = document.querySelectorAll('.index_title')

if(window.innerWidth===414){
  spUderLine[1].classList.remove('gray_underline')
}

console.log(spBg)
spLogo.forEach( e => {
  e.addEventListener('click', ()=>{
    // 너무 무식하게 만든거같음. 다른방법이없을까? 
    switch(e) {
      case spLogo[0]:
        spBg.style.backgroundColor = '#D8CDB1'
        spImg.src = 'image/index/mSpecial_grid_img01.png'
        e.style.border = '2px solid #FF8E00'
        spLogo.forEach(e => {
          if(e!=spLogo[0]){
            e.style.border = ''
          }
        })
        break;
      case spLogo[1]:
        spBg.style.backgroundColor = '#C0CCDF'
        spImg.src = 'image/index/mSpecial_grid_img02.png'
        e.style.border = '2px solid #5B74E8'
        spLogo.forEach(e => {
          if(e!=spLogo[1]){
            e.style.border = ''
          }
        })
        break;
      case spLogo[2]:
        spBg.style.backgroundColor = '#D3D9EB'
        spImg.src = 'image/index/mSpecial_grid_img03.png'
        e.style.border = '2px solid #1C57FF'
        spLogo.forEach(e => {
          if(e!=spLogo[2]){
            e.style.border = ''
          }
        })
        break;
      case spLogo[3]:
        spBg.style.backgroundColor = '#EFCFD3'
        spImg.src = 'image/index/mSpecial_grid_img04.png'
        e.style.border = '2px solid #FF5C70'
        spLogo.forEach(e => {
          if(e!=spLogo[3]){
            e.style.border = ''
          }
        })
        break;
      case spLogo[4]:
        spBg.style.backgroundColor = '#C2D3DF'
        spImg.src = 'image/index/mSpecial_grid_img05.png'
        e.style.border = '2px solid #539DD6'
        spLogo.forEach(e => {
          if(e!=spLogo[4]){
            e.style.border = ''
          }
        })
        break;
      case spLogo[5]:
        spBg.style.backgroundColor = '#DEC7E5'
        spImg.src = 'image/index/mSpecial_grid_img06.png'
        e.style.border = '2px solid #9B2BB9'
        spLogo.forEach(e => {
          if(e!=spLogo[5]){
            e.style.border = ''
          }
        })
        break;
      case spLogo[6]:
        spBg.style.backgroundColor = '#C8D7E0'
        spImg.src = 'image/index/mSpecial_grid_img07.png'
        e.style.border = '2px solid #5BC1E9'
        spLogo.forEach(e => {
          if(e!=spLogo[6]){
            e.style.border = ''
          }
        })
        break;
      case spLogo[7]:
        spBg.style.backgroundColor = '#D4CEE0'
        spImg.src = 'image/index/mSpecial_grid_img08.png'
        e.style.border = '2px solid #5830B7'
        spLogo.forEach(e => {
          if(e!=spLogo[7]){
            e.style.border = ''
          }
        })
        break;
    }
  })
})



// mfooter 
const mfooterArrow = document.querySelector('.mfooter_title > i')
const mfooterInfo = document.querySelector('.mfooter_info')

mfooterArrow.addEventListener('click', ()=>{
  // if조건과 else조건의 순서가 바뀌면 한번쉬고 작동하는데 이유가뭘까?
  mfooterArrow.classList.toggle('fa-angle-up')
  if(mfooterInfo.style.height==='171px'){
    mfooterInfo.style.height='0'
  }else{
    mfooterInfo.style.height='171px'
  }
})


