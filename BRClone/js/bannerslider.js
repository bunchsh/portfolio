const carouselSlide = document.querySelector('.slide_wrap');
const carouselContent = document.querySelectorAll('.slide_wrap li');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const numBtn1 = document.querySelector('.act1');
const numBtn2 = document.querySelector('.act2');
const numBtn3 = document.querySelector('.act3');
const numBtn4 = document.querySelector('.act4');
const numBtn5 = document.querySelector('.act5');

let counter = 1;
const size = carouselContent[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-1519.2 * counter) + 'px)';


// Buttons
prevBtn.addEventListener('click', e => {
  e.preventDefault();
  if(counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-1519.2 * counter) + 'px)';
});

nextBtn.addEventListener('click', e => {
  e.preventDefault();
  if(counter >= carouselContent.length -1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-1519.2 * counter) + 'px)';
});

// loop
carouselSlide.addEventListener("transitionend", function () {
  if (carouselContent[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselContent.length - 2;
    carouselSlide.style.transform = "translateX(" + (-1519.2 * counter) + "px)";
  }
  if (carouselContent[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselContent.length - counter;
    carouselSlide.style.transform = "translateX(" + (-1519.2 * counter) + "px)";
  }
});


// Number buttons
  numBtn1.addEventListener('click', e => {
    e.preventDefault();
    if(counter >= carouselContent.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform = 'translateX(' + (-1519.2 * 1) + 'px)';
  });

  numBtn2.addEventListener('click', e => {
    e.preventDefault();
    if(counter >= carouselContent.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform = 'translateX(' + (-1519.2 * 2) + 'px)';
  });

  numBtn3.addEventListener('click', e => {
    e.preventDefault();
    if(counter >= carouselContent.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform = 'translateX(' + (-1519.2 * 3) + 'px)';
  });

  numBtn4.addEventListener('click', e => {
    e.preventDefault();
    if(counter >= carouselContent.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform = 'translateX(' + (-1519.2 * 4) + 'px)';
  });

  numBtn5.addEventListener('click', e=> {
    e.preventDefault();
    if(counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform = 'translateX(' + (-1519.2 * 5) + 'px)';
  });