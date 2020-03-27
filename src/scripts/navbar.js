let navbar = document.getElementById("nav");
let bannerHeight = document.getElementById("header-banner").offsetHeight;
let updateWindowHeight = () => {
    bannerHeight = document.getElementById("header-banner").offsetHeight;
}
window.onresize = updateWindowHeight
let updateNavbar = () => {
    if(window.scrollY >= bannerHeight){
        navbar.classList.add("past-banner");
    }else{
        navbar.classList.remove("past-banner")
    }
}
window.onscroll = updateNavbar;