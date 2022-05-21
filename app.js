const slides = document.querySelectorAll('.slide');

for(const slide of slides) {
  slide.addEventListener('click', () => {
    removeClassActive();
    slide.classList.add('slide_active');
  })
}

function removeClassActive() {
  slides.forEach((slide) => {
    slide.classList.remove('slide_active');
  } )
}

