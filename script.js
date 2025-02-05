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

var imagesSwiper = new Swiper(".imagesSwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Inicijalizacija GLightbox-a
function openLightbox(img) {
  document.getElementById("lightbox-img").src = img.src;
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}