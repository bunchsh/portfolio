// @Filename slider.js
// @Author 한송희
// @Description slider js 기능 구성

const carouselSlide = document.querySelector('.banner_slider');
const carouselContent = document.querySelectorAll('.banner_slider li');

const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

let counter = 1;
carouselSlide.style.left = -829 * counter + "px" ;


// Buttons
prevBtn.addEventListener('click', e => {
  e.preventDefault();
  if(counter <= 0) return;
  carouselSlide.style.transition = '.5s'
  counter--;
  carouselSlide.style.left = -829 * counter + "px" ;
});

nextBtn.addEventListener('click', e => {
  e.preventDefault();
  if(counter >= carouselContent.length -1) return;
  carouselSlide.style.transition = '.5s'
  counter++;
  carouselSlide.style.left = -829 * counter + "px" ;
});

// loop
carouselSlide.addEventListener("transitionend", function () {
  if (carouselContent[counter].id === "lastClone") {
    carouselSlide.style.transition = '.5s'
    counter = carouselContent.length - 2;
    carouselSlide.style.left = -829 * counter + "px" ;
  }
  if (carouselContent[counter].id === "firstClone") {
    carouselSlide.style.transition = '.5s'
    counter = carouselContent.length - counter;
    carouselSlide.style.left = -829 * counter + "px" ;
  }
});

// auto slide
let auto = 0;
let i = 0;

function moveleft() {
  if (i < carouselContent.length - 2) {
    auto += 829;
    i++;
    carouselSlide.style.transition = '.5s'
    setTimeout('moveleft()', 3000);
  } else {
    carouselSlide.style.transition = '0s'
    auto = 0;
    i = 0;
    setTimeout('moveleft()', 0);
  }
  
  carouselSlide.style.left = "-" + auto + "px" ;
}

moveleft();