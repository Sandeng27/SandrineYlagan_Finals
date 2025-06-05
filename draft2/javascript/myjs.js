const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton= document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      SlidesPerView: 1
    },
    768: {
      SlidesPerView: 2
    },
    1020:{
      SlidesPerView: 2
    }
  }
});

function sportInfo(index) {
    let info = document.getElementsByClassName("info");
    info[index].style.display = (info[index].style.display == "none" || info[index].style.display == "") ? "block" : "none";
};
