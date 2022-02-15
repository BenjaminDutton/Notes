"use strict";

/* 
=================================================================
MODAL
=================================================================
*/

class Modal {
  constructor() {
    const modalBtns = [...document.querySelectorAll(".button")];
    const modalWindows = [...document.querySelectorAll(".modal")];

    // open modal
    modalBtns.forEach(function (btn) {
      btn.addEventListener("click", () => {
        const modal = btn.getAttribute("data-modal");
        document.getElementById(modal).style.display = "block";
      });
    });

    // close modal with button
    const closeBtns = [...document.querySelectorAll(".close")];
    closeBtns.forEach(function (btn) {
      btn.addEventListener("click", () => {
        const modal = btn.closest(".modal");
        modal.style.display = "none";
      });
    });

    // close modal by clicking outside modal box
    window.addEventListener("click", (event) => {
      if (event.target.className === "modal") {
        event.target.style.display = "none";
      }
    });

    // close modal with escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        modalWindows.forEach((btn) => {
          btn.style.display = "none";
        });
      }
    });
  }
}

export default new Modal();
