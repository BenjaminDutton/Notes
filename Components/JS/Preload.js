let preloader;
function preload(opacity) {
  if (opacity <= 0) {
    removePreloader();
  } else {
    preloader.style.opacity = opacity;
    window.setTimeout(function () {
      preload(opacity - 0.05);
    }, 50);
  }
}
function removePreloader() {
  preloader.style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {
  preloader = document.getElementById("preloader");
  preload(0.5);
});
