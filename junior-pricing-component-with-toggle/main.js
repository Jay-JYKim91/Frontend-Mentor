const monthly = document.querySelector('.checkbox');
const basic = document.querySelector('.basic-price');
const pro = document.querySelector('.pro-price');
const master = document.querySelector('.master-price');

let toggle = "true"

monthly.addEventListener('click', (event) => {
  console.log(basic);
  toggle = !toggle;
  if (!toggle) {
    basic.innerHTML = `<span class="sm-dollar">$</span>19.99`;
    pro.innerHTML = `<span class="sm-dollar">$</span>24.99`;
    master.innerHTML = `<span class="sm-dollar">$</span>39.99`;
  } else {
    basic.innerHTML = `<span class="sm-dollar">$</span>199.99`;
    pro.innerHTML = `<span class="sm-dollar">$</span>249.99`;
    master.innerHTML = `<span class="sm-dollar">$</span>399.99`;
  }
})
