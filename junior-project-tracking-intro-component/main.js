const navBtn = window.document.querySelector("#navBtn");
const navImg = window.document.querySelector("#navImg");
const mbNav = window.document.querySelector(".mb-nav-menu");

function changeImg(src){
  if(src == "./images/icon-hamburger.svg") {
    return "./images/icon-close.svg"
  } else {
    return "./images/icon-hamburger.svg";
  }
}

navImg.addEventListener('click', (event) => {
  navImg.src = changeImg(navImg.getAttribute('src'));
  mbNav.classList.toggle('nav-active');
});
