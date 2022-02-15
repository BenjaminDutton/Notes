"use strict";

class Nav {
  constructor() {
    /* 
=================================================================
MENU LINKS FADE
=================================================================
*/
    const handleHover = function (e) {
      // listen for "nav_link"s
      if (e.target.classList.contains("nav__link")) {
        const link = e.target;
        // select siblings /
        const siblings = link.closest(".nav").querySelectorAll(".nav__link");
        const dropdown = link
          .closest(".nav__item")
          .querySelector(".nav__dropdown");
        const arrow = link.querySelector(".nav__arrow");
        const logo = link.closest(".nav").querySelector("img");

        siblings.forEach((el) => {
          if (el !== link) el.style.opacity = this;
        });
        logo.style.opacity = this;
        if (dropdown) {
          dropdown.classList.toggle("nav__hide");
        }
        if (arrow) {
          arrow.classList.toggle("nav__arrow-spin");
        }
      }
    };

    // use "this value as opacity arg" - clever
    const nav = document.querySelector(".nav");
    nav.addEventListener("mouseover", handleHover.bind(0.5));
    nav.addEventListener("mouseout", handleHover.bind(1));

    /* 
=================================================================
STICKY NAV (INTERSECTION OBSERVER API)
=================================================================
*/

    const header = document.querySelector(".header");
    const navHeight = nav.getBoundingClientRect().height;

    // add / remove sticky class
    const stickyNav = function (entries) {
      const [entry] = entries;

      if (!entry.isIntersecting) nav.classList.add("sticky");
      else nav.classList.remove("sticky");
    };

    // create observer
    const headerObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    });

    headerObserver.observe(header);
  }
}

export default new Nav();
