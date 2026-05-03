import SwiperCore, {
  A11y,
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  HashNavigation,
  History,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
  Virtual,
} from "swiper";

SwiperCore.use([
  Mousewheel,
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  EffectCreative,
  Virtual,
  Pagination,
  HashNavigation,
  History,
  Thumbs,
  Scrollbar,
  Keyboard,
  A11y,
]);

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

var menu = ['<div class="mil-custom-dot mil-slide-1"></div>', '<div class="mil-custom-dot mil-slide-2"></div>', '<div class="mil-custom-dot mil-slide-3"></div>', '<div class="mil-custom-dot mil-slide-4"></div>', '<div class="mil-custom-dot mil-slide-5"></div>', '<div class="mil-custom-dot mil-slide-6"></div>', '<div class="mil-custom-dot mil-slide-7"></div>'];

export const SliderProps = {
  milReviewsSlider: {
    pagination: {
        el: '.mil-revi-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },
    speed: 800,
    effect: 'fade',
    parallax: true,
    navigation: {
        nextEl: '.mil-revi-next',
        prevEl: '.mil-revi-prev',
    },
  },
  milInfiniteSlider: {
    slidesPerView: 2,
    spaceBetween: 30,
    speed: 5000,
    autoplay: true,
    autoplay: {
        delay: 0,
    },
    loop: true,
    freeMode: true,
    breakpoints: {
        992: {
            slidesPerView: 4,
        },
    },
  },
  milPortfolioSlider: {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    parallax: true,
    mousewheel: {
        enable: true
    },
    navigation: {
        nextEl: '.mil-portfolio-next',
        prevEl: '.mil-portfolio-prev',
    },
    pagination: {
        el: '.swiper-portfolio-pagination',
        type: 'fraction',
    },
  },
  milOneSlider: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    parallax: true,
    navigation: {
        nextEl: '.mil-portfolio-next',
        prevEl: '.mil-portfolio-prev',
    },
    pagination: {
        el: '.swiper-portfolio-pagination',
        type: 'fraction',
    },
  },
  milTwoSlider: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    parallax: true,
    navigation: {
        nextEl: '.mil-portfolio-next',
        prevEl: '.mil-portfolio-prev',
    },
    pagination: {
        el: '.swiper-portfolio-pagination',
        type: 'fraction',
    },
    breakpoints: {
        992: {
            slidesPerView: 2,
        },
    },
  }
};
