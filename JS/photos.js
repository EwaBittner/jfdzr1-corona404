ScrollReveal({duration : 1200, viewfactor: 0.4}).reveal('.aboutus__card');
ScrollReveal({duration : 1200, viewfactor: 0.2}).reveal('.aboutus__header');

ScrollReveal({duration : 1200, viewfactor: 0.1}).reveal('.product-info__box');

// slider functions below //

const slider = document.querySelector('#myRange');
const output = document.querySelector('.sliderdays');

slider.step = "1"

slider.oninput = function() {
    output.innerHTML = this.value;
    priceBasic.innerHTML = (slider.value * 10);
    pricePRO.innerHTML = (slider.value * 25);
    priceVIP.innerHTML = (slider.value * 45);
  }

const priceBasic = document.querySelector('.priceBasic');
const pricePRO = document.querySelector('.pricePRO');
const priceVIP = document.querySelector('.priceVIP');
