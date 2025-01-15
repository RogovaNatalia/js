function slider() {
  //Slider
  const slides = document.querySelectorAll(".offer__slide"),
    slider = document.querySelector(".offer__slider"),
    prev = document.querySelector(".offer__slider-prev"),
    next = document.querySelector(".offer__slider-next"),
    current = document.querySelector("#current"),
    total = document.querySelector("#total"),
    slidesWrapper = document.querySelector(".offer__slider-wrapper"),
    width = window.getComputedStyle(slidesWrapper).width,
    slidesField = document.querySelector(".offer__slider-inner");

  let offset = 0;
  let slideIndex = 1;

  // Устанавливаем общее количество слайдов
  function setTotalSlides() {
    total.textContent =
      slides.length < 10 ? `0${slides.length}` : slides.length;
    updateCurrentSlide();
  }

  // Обновляем отображение текущего слайда
  function updateCurrentSlide() {
    current.textContent = slideIndex < 10 ? `0${slideIndex}` : slideIndex;
  }

  // Обновляем точки-индикаторы
  function updateDots() {
    dots.forEach((dot) => (dot.style.opacity = ".5"));
    dots[slideIndex - 1].style.opacity = "1";
  }

  // Устанавливаем параметры слайдов
  function setupSlides() {
    slidesField.style.width = 100 * slides.length + "%";
    slidesField.style.display = "flex";
    slidesField.style.transition = "0.5s all";

    slidesWrapper.style.overflow = "hidden";

    slides.forEach((slide) => {
      slide.style.width = width;
    });

    slider.style.position = "relative";
  }

  // Преобразование строки в число (удаление нецифровых символов)
  function deleteNotDigits(str) {
    return +str.replace(/\D/g, "");
  }

  // Переключение слайдов
  function moveToSlide(index) {
    offset = deleteNotDigits(width) * (index - 1);
    slidesField.style.transform = `translateX(-${offset}px)`;
    slideIndex = index;
    updateCurrentSlide();
    updateDots();
  }

  // Основная настройка слайдера
  setupSlides();
  setTotalSlides();

  const indicators = document.createElement("ol"),
    dots = [];
  indicators.classList.add("carousel-indicators");
  indicators.style.cssText = `
position: absolute;
right: 0;
bottom: 0;
left: 0;
z-index: 15;
display: flex;
justify-content: center;
margin-right: 15%;
margin-left: 15%;
list-style: none;
`;
  slider.append(indicators);

  // Создаем точки-индикаторы
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", i + 1);
    dot.style.cssText = `
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 6px;
  margin-right: 3px;
  margin-left: 3px;
  cursor: pointer;
  background-color: #fff;
  background-clip: padding-box;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: .5;
  transition: opacity .6s ease;
`;
    if (i == 0) {
      dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
  }

  // Слушатели для кнопок
  next.addEventListener("click", () => {
    if (slideIndex === slides.length) {
      moveToSlide(1);
    } else {
      moveToSlide(slideIndex + 1);
    }
  });

  prev.addEventListener("click", () => {
    if (slideIndex === 1) {
      moveToSlide(slides.length);
    } else {
      moveToSlide(slideIndex - 1);
    }
  });

  // Слушатели для точек
  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const slideTo = +e.target.getAttribute("data-slide-to");
      moveToSlide(slideTo);
    });
  });
}

module.exports = slider;
