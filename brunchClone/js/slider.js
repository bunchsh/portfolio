// 전체 슬라이드 컨테이너
const slides = document.querySelector(".articles");
const slideCal = document.querySelectorAll(".articles li"); // 전체 슬라이드의 li 들
let currentIDx = 0; // 현재 슬라이드
const slideCount = slideCal.length; // 슬라이드 갯수
const prev = document.querySelector(".prev_btn"); // 이전 버튼
const next = document.querySelector(".next_btn"); // 다음 버튼
const slideWidth = 300;
const slideMargin = 100;

slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';

function moveSlide(num) { 
    slides.style.left = -num * 400 + 'px'; 
    currentIDx = num; 
};


prev.addEventListener('click', function () { 
    if (currentIDx !== 0) moveSlide(currentIDx - 1); 
});

next.addEventListener('click', function () { 
    if (currentIDx !== slideCount - 1) { moveSlide(currentIDx + 1); } 
});