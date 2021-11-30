const menu = document.querySelector('#menu-btn');
const navbar = document.querySelector('.header .navbar');

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});
window.addEventListener('scroll', () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
});

const swiper = new Swiper('.home-slider', {
  spaceBetween: 20,
  effect: 'fade',
  grabCursor: true,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});