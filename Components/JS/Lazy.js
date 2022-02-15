"use strict";

/* 
=================================================================
LAZY LOADING IMAGES
=================================================================
*/

class Lazy {
  constructor() {
    const imgTargets = document.querySelectorAll("img[data-src]");

    const loadImg = function (entries, observer) {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      // replace src img with data-src img
      entry.target.src = entry.target.dataset.src;

      // remove lazy class after high res image loads
      entry.target.addEventListener("load", () => {
        entry.target.classList.remove("lazy-img");
      });

      // relieve observer
      observer.unobserve(entry.target);
    };

    const imgObserver = new IntersectionObserver(loadImg, {
      root: null,
      threshold: 0,
      rootMargin: "200px",
    });

    imgTargets.forEach((img) => imgObserver.observe(img));
  }
}

export default new Lazy();
