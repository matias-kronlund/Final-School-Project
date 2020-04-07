//Nav Element
let navbar = document.getElementById("nav");
//100vh
let bannerHeight = document.getElementById("header-banner").offsetHeight;

//Updates the vh size if the screen is resized
let updateWindowHeight = () => {
  bannerHeight = document.getElementById("header-banner").offsetHeight;
}
for(let img of document.getElementsByClassName("img")){
  img.style.marginTop = "-"+img.offsetHeight/2 + "px";
}
for(let img of document.getElementsByClassName("bar-text")){
  img.style.marginTop = "-"+img.offsetHeight/2 + "px";
}

let imgMargin = () => {
  
  for(let img of document.getElementsByClassName("img")){
    img.style.marginTop = "-"+img.offsetHeight/2 + "px";
  }
  for(let img of document.getElementsByClassName("bar-text")){
    img.style.marginTop = "-"+img.offsetHeight/2 + "px";
  }
}
let resizeUpdate = () => {
  updateWindowHeight();
  imgMargin();
}
window.onresize = resizeUpdate

//Runs functions on Scroll
let scrollUpdate = () => {
  navbarUpdate();
  fadecontent();
}
window.onscroll = scrollUpdate;

//moves the navbar
let navbarUpdate = () => {
  if (window.scrollY >= bannerHeight) {
    navbar.classList.add("past-banner");
  } else {
    navbar.classList.remove("past-banner")
  }
}

//Fades in the content
let fadecontent = () => {
  let contents = document.getElementsByClassName("fade");
  let show_amount = (scrollY/bannerHeight) + 0.7;
  show_amount = show_amount.toString().split(".")[0]
  for(let i = 1; i <= show_amount; i++){
    let target = i-1
    try{
      contents[target].classList.add("fade1")
    }catch{}
  }
  for(let i = show_amount; i < contents.length; i++){
    try{
      contents[i].classList.remove("fade1")
    }catch{}
  }
}
