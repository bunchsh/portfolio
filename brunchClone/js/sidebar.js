const bookBtn = document.querySelector(".burger");
const section = document.querySelector("#sidemenu");

// 클릭시 사이드 메뉴 생성, 버거 버튼 사라짐
bookBtn.addEventListener('click', function() {
    section.style.left = 0;
});

// 포커스 아웃 시 사이드 메뉴 사라짐
bookBtn.addEventListener('blur', function() {
    section.style.left = '-270px';
});