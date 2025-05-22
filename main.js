document.addEventListener("DOMContentLoaded", function () {
  const icons = document.querySelectorAll("#nav-icon");

  icons.forEach(function (icon) {
    icon.addEventListener("click", function () {
      this.classList.toggle("open");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navIcon = document.getElementById("nav-icon");
  const sidebar = document.getElementById("sidebar");

  navIcon.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });
});
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});
