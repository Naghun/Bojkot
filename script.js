var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    loop: true,
    speed: 1200,
    autoplay: {
        delay: 3000, // Svakih 5 sekundi
        disableOnInteraction: false, // Nastavlja automatski nakon interakcije
    },
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
});