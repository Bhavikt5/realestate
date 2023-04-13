/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== SWIPER POPULAR ===============*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "fraction",
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

/*=============== VALUE ACCORDION ===============*/

const accordion = document.querySelectorAll(".accordion");
const showContent = document.querySelectorAll(".showContent");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", () => {
    if (showContent.className === "showContent active") console.log("active");
    showContent[i].classList.toggle("active");
  });
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== DARK LIGHT THEME ===============*/

const darkModeToggle = document.querySelector("#dark-mode-toggle");

const lightMode = document.querySelector(".fa-sun");
const darkedMode = document.querySelector(".fa-moon");

lightMode.style.display = "none";

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add("darkmode");

  darkedMode.style.display = "none";
  lightMode.style.display = "block";
};

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove("darkmode");

  darkedMode.style.display = "block";
  lightMode.style.display = "none";
};

/*=============== SCROLL REVEAL ANIMATION ===============*/
