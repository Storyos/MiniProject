// 화면 스크롤 > 메뉴 변경
const topMenu = document.getElementById("header_bot_back")
const topMenuBack = document.getElementById("header_bot_back")
const topMenu_right = document.getElementById("header_bot_grid03")
const topMenu_center_btn = document.querySelectorAll(".header_menu_btn a")
const topMenu_right_btn = document.querySelectorAll("#header_bot_grid03 a")
const topDropMenu = document.getElementById("header_bot_drop")
console.log(topDropMenu)

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

// 메뉴 마우스오버 > 드롭다운 메뉴 생성
const dropDown = document.querySelectorAll(".header_menu_btn")
const dropDownMenu = document.querySelectorAll(".dropBox")
console.log(dropDown)
console.log(dropDownMenu)

dropDown.forEach((e)=>{
  e.addEventListener('mouseover', ()=>{
    if(e===dropDown[0]){
      console.log('예매')
      dropDownMenu[0].style.display = ""
    }else if(e===dropDown[1]){
      console.log('영화')
      dropDownMenu[1].style.display = ""
    }else if(e===dropDown[2]){
      console.log('영화관')
      dropDownMenu[2].style.display = ""
    }else if(e===dropDown[3]){
      console.log('이벤트')
      dropDownMenu[3].style.display = ""
    }else if(e===dropDown[4]){
      console.log('스토어')
      dropDownMenu[4].style.display = ""
    }

    e.addEventListener('mouseout', ()=>{
      dropDownMenu.forEach(e => {
        e.style.display='none'
      });
    })
  })
})

// 모달박스버튼
const modarIcon = document.getElementById('header_bot_grid03')
console.log(modarIcon)
