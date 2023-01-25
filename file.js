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

