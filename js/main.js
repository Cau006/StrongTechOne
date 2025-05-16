document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuIcon = document.getElementById('mobileMenuIcon');
  const nav = document.querySelector('.nav');

  if (mobileMenuIcon && nav) {
    mobileMenuIcon.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      mobileMenuIcon.classList.toggle('open');
    });
  }

  // Carrossel
  const track = document.querySelector('.carousel-track');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');

  if (track && prevButton && nextButton) {
    const slides = Array.from(track.children);
    const totalSlides = slides.length;
    let currentSlide = 0;

    if (totalSlides > 0) {
      function updateCarousel() {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
      }

      prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;
        updateCarousel();
      });

      nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
      });

      // Auto-slide, 3s
      let autoSlide = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
      }, 3000);

      // Pausar auto-slide ao interagir
      [prevButton, nextButton].forEach(button => {
        button.addEventListener('click', () => {
          clearInterval(autoSlide);
          autoSlide = setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
          }, 3000);
        });
      });

      updateCarousel();
    }
  }
});
