document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const lightbox = document.createElement('div');
  lightbox.classList.add('lightbox');
  document.body.appendChild(lightbox);

  let currentIndex = 0;

  slides.forEach((slide, index) => {
    slide.addEventListener('click', () => openLightbox(index));
  });

  function showSlide(index) {
    if (index < 0) {
      index = slides.length - 1;
    } else if (index >= slides.length) {
      index = 0;
    }

    const translateValue = -index * 100 + '%';
    slider.style.transform = 'translateX(' + translateValue + ')';
    currentIndex = index;

    // Обновляем большую картинку в модальном окне
    const bigImage = document.querySelector('.lightbox-big-image img');
    const bigImageUrl = slides[index].style.backgroundImage.slice(5, -2);
    bigImage.src = bigImageUrl;
  }

  function openLightbox(index) {
    const lightboxContent = document.createElement('div');
    lightboxContent.classList.add('lightbox-content');

    // Отображаем выбранную картинку вверху
    const bigImage = document.createElement('div');
    bigImage.classList.add('lightbox-big-image');
    const imageUrl = slides[index].style.backgroundImage.slice(5, -2);
    bigImage.innerHTML = `<img src="${imageUrl}" alt="Lightbox Image">`;
    lightboxContent.appendChild(bigImage);

    // Добавляем миниатюры внизу
    const thumbnails = document.createElement('div');
    thumbnails.classList.add('lightbox-thumbnails');

    slides.forEach((slide, i) => {
      const thumbImageUrl = slide.style.backgroundImage.slice(5, -2);
      const thumbnail = document.createElement('div');
      thumbnail.classList.add('lightbox-thumbnail');
      thumbnail.innerHTML = `<img src="${thumbImageUrl}" alt="Thumbnail Image">`;
      thumbnail.addEventListener('click', () => showSlide(i));
      thumbnails.appendChild(thumbnail);
    });

    lightboxContent.appendChild(thumbnails);

    lightbox.appendChild(lightboxContent);

    lightbox.style.display = 'flex';

    const lightboxClose = document.createElement('span');
    lightboxClose.classList.add('lightbox-close');
    lightboxClose.innerHTML = '&times;';
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.appendChild(lightboxClose);

    // Добавляем обработчик событий для нажатия клавиши "Esc"
    document.addEventListener('keydown', handleKeyPress);

    // Добавляем обработчик событий для закрытия по клику вне контента
    lightbox.addEventListener('click', handleOutsideClick);

    // Добавляем класс для блокировки прокрутки
    document.body.classList.add('modal-open');
  }

  function closeLightbox() {
    lightbox.innerHTML = '';
    lightbox.style.display = 'none';

    // Удаляем обработчики событий при закрытии модального окна
    document.removeEventListener('keydown', handleKeyPress);

    // Удаляем класс для разблокировки прокрутки
    document.body.classList.remove('modal-open');
  }

  function handleKeyPress(event) {
    // Проверяем, была ли нажата клавиша "Esc"
    if (event.key === 'Escape') {
      closeLightbox();
    }
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function handleOutsideClick(event) {
    if (event.target === lightbox) {
      closeLightbox();
    }
  }

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);
  setInterval(nextSlide, 10000);
});
