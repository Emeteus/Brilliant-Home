document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
  
    function showSlide(index) {
      if (index < 0) {
        currentIndex = slides.length - 1;
      } else if (index >= slides.length) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }
  
      const translateValue = -currentIndex * 100 + '%';
      slider.style.transform = 'translateX(' + translateValue + ')';
    }
  
    function nextSlide() {
      showSlide(currentIndex + 1);
    }
  
    function prevSlide() {
      showSlide(currentIndex - 1);
    }
  
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
  
    setInterval(nextSlide, 10000); // автоматическое перелистывание каждые 10 секунд
  });
  