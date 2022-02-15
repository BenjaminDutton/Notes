"use strict";

/* 
=================================================================
REVEAL SECTIONS
=================================================================
*/

class Reveal {
  constructor() {
    const allSections = document.querySelectorAll(".section");

    // reveal section upon intersection
    const revealSection = function (entries, observer) {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      entry.target.classList.remove("section--hidden");
      observer.unobserve(entry.target);
    };

    // create observer
    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });

    // add section--hidden class
    allSections.forEach(function (section) {
      sectionObserver.observe(section);
      section.classList.add("section--hidden");
    });
  }
}

export default new Reveal();
