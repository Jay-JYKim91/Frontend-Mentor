const navImg = document.querySelector('#mb-nav-img');
const mbNav = document.querySelector('.mb-nav-menu');
const navImgClose = document.querySelector('#mb-nav-img-close');

navImg.addEventListener('click', (event) => {
  mbNav.classList.add('mb-nav-active');
})
navImgClose.addEventListener('click', (event) => {
  mbNav.classList.remove('mb-nav-active');
})
