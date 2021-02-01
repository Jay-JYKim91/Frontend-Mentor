const checked = document.querySelector('.checkbox');
const backGround = document.querySelector('.bg');
const topBackGround = document.querySelector('.top-bg');
const mainTitle = document.querySelector('.main-title');
const attribution = document.querySelector('.attribution');
const followerNums = document.querySelectorAll('.follower-num');
const overviewText = document.querySelector('.overview-text');
const overviewNums = document.querySelectorAll('.overview-num');
const followerCards= document.querySelectorAll('.follower-card');
const overviewCards= document.querySelectorAll('.overview-card');

checked.addEventListener('click', (event) => {
  topBackGround.classList.toggle('top-bg-dark');
  backGround.classList.toggle('bg-dark');
  mainTitle.classList.toggle('white-text');
  overviewText.classList.toggle('white-text');
  attribution.classList.toggle('white-text');
})
for (const num of followerNums) {
  checked.addEventListener('click', function(event) {
    num.classList.toggle('white-text');
  })
}
for (const num of overviewNums) {
  checked.addEventListener('click', function(event) {
    num.classList.toggle('white-text');
  })
}
for (const card of followerCards) {
  checked.addEventListener('click', function(event) {
    card.classList.toggle('dark-card');
  })
}
for (const card of overviewCards) {
  checked.addEventListener('click', function(event) {
    card.classList.toggle('dark-card');
  })
}
