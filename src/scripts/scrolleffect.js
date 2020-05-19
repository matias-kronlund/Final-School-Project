window.onscroll = moveBanner;
let banner = document.getElementsByClassName("banner")[0];
banner.style.top = 0 + scrollY  + "px";
function moveBanner(){
    banner.style.top = 0 + scrollY  + "px";
}