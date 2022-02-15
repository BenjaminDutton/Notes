"use strict";

/* 
=================================================================
SLIDER
=================================================================
*/

class Slider {
  constructor() {
    const slider = function () {
      const slides = document.querySelectorAll(".slide");
      const btnLeft = document.querySelector(".slider__btn--left");
      const btnRight = document.querySelector(".slider__btn--right");
      const dotContainer = document.querySelector(".dots");

      let curSlide = 0;
      const maxSlide = slides.length - 1;

      // create buttons styled as dots
      const createDots = function () {
        slides.forEach((_, i) => {
          dotContainer.insertAdjacentHTML(
            "beforeend",
            `<button class="dots__dot" data-slide="${i}"></button>`
          );
        });
      };

      // remove dot class active from all dots
      const activateDot = function (slide) {
        document
          .querySelectorAll(".dots__dot")
          .forEach((dot) => dot.classList.remove("dots__dot--active"));

        // change dot class to active
        document
          .querySelector(`.dots__dot[data-slide="${slide}"]`)
          .classList.add("dots__dot--active");
      };

      // translate hidden slide 100% left
      const goToSlide = function (slide) {
        slides.forEach(
          (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
        );
      };

      // send final slide back to beginning
      const nextSlide = function () {
        if (curSlide === maxSlide) {
          curSlide = 0;
        } else {
          curSlide++;
        }

        goToSlide(curSlide);
        activateDot(curSlide);
      };

      // move to previous slide
      const prevSlide = function () {
        if (curSlide === 0) {
          curSlide = maxSlide;
        } else {
          curSlide--;
        }
        goToSlide(curSlide);
        activateDot(curSlide);
      };

      const init = function () {
        goToSlide(0);
        createDots();

        activateDot(0);
      };
      init();

      // event handlers
      btnRight.addEventListener("click", nextSlide);
      btnLeft.addEventListener("click", prevSlide);

      document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") prevSlide();
        e.key === "ArrowRight" && nextSlide();
      });

      dotContainer.addEventListener("click", function (e) {
        if (e.target.classList.contains("dots__dot")) {
          const { slide } = e.target.dataset;
          goToSlide(slide);
          activateDot(slide);
        }
      });
    };
    slider();
  }
}

export default new Slider();
