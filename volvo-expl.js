// 햄버거메뉴 열고 닫기
$(function () {
  $('.checkbox').on('click', () => {
    $('.header').toggleClass('active');
    $('.logo').toggleClass('active');
    $('.checkmark span').toggleClass('active');
    $('.menu').slideToggle(); // == display: block
  });
});

// menu 버튼
$(function () {
  $('.checkbox').on('click', () => {
    $('.hamburger_btn').toggleClass('active');
    $('.menu').slideToggle(); // == display: block
  });
});

$('#project').on('click', () => {
  $('.menu').slideToggle();
});

$('#about').on('click', () => {
  $('.menu').slideToggle();
});

$('#home').on('click', () => {
  $('.menu').slideToggle();
});

// swiper
let swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
