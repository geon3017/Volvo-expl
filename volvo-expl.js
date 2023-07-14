// 햄버거메뉴 열고 닫기
$(function () {
  $('.checkbox').on('click', () => {
    $('.header').toggleClass('active');
    $('.logo').toggleClass('active');
    $('.checkmark span').toggleClass('active');
    $('.menu').slideToggle(); // == display: block
  });
});

let swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
