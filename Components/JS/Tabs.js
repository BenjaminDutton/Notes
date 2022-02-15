"use strict";

/* 
=================================================================
TAB MENU
=================================================================
*/

class Tab {
  constructor() {
    const tabs = document.querySelectorAll(".tabs__tab");
    const tabsContainer = document.querySelector(".tabs__tab-container");
    const tabsContent = document.querySelectorAll(".tabs__content");

    tabsContainer.addEventListener("click", function (e) {
      const clicked = e.target.closest(".tabs__tab");

      // guard clause
      if (!clicked) return;

      // remove active classes
      tabs.forEach((t) => t.classList.remove("tabs__tab--active"));
      tabsContent.forEach((c) => c.classList.remove("tabs__content--active"));

      // activate tab
      clicked.classList.add("tabs__tab--active");

      // activate content area
      document
        .querySelector(`.tabs__content--${clicked.dataset.tab}`)
        .classList.add("tabs__content--active");
    });
  }
}

export default new Tab();
