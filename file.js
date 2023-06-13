// Script for Text autoplay
var typeData = new Typed(".role", {
  strings: [
    "Full Stack Developer",
    "Web Developer",
    "Backend Developer",
    "Coder",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 1500,
});

// Script code for slideview
      const swiper = new Swiper(".swiper", {
        // Optional parameters
        autoplay:{
          delay:3000,
          disableOnInteraction:false,
        },
        loop: true,

        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
          clickable: 'true'
        },

        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

// For hamberger

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

