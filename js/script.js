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

const swiper2 = new Swiper('.review-slider', {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    600: {
      slidesPerView: 2
    }
  }
});

const swiper3 = new Swiper('.blogs-slider', {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    991: {
      slidesPerView: 3
    }
  }
});