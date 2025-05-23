// import Swiper from "swiper";
// import "swiper/css";

// import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";

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
// var swiper = new Swiper(".mySwiper", {
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });

// const swiper = new Swiper(".mySwiper", {
//   modules: [Pagination],
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

const targetTimestamp = 1751121000000;
function toPersianDigits(str) {
  return str.toString().replace(/\d/g, d => "۰۱۲۳۴۵۶۷۸۹"[d]);
}
function updateCountdown() {
  const now = new Date();
  const distance = targetTimestamp - now;

  if (distance <= 0) {
    document.getElementById("countdown").innerText = "زمان تخفیف به پایان رسید!";
    return;
  }
  const days = `${Math.floor(distance / (1000 * 60 * 60 * 24))
    .toString()
    .padStart(2, "0")}`;
  document.getElementById("days").innerText = toPersianDigits(days);

  const hours = `${Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    .toString()
    .padStart(2, "0")}`;
  document.getElementById("hours").innerText = toPersianDigits(hours);

  const minutes = `${Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, "0")} : `;
  document.getElementById("minutes").innerText = toPersianDigits(minutes);

  const seconds = `${Math.floor((distance % (1000 * 60)) / 1000)
    .toString()
    .padStart(2, "0")} : `;
  document.getElementById("seconds").innerText = toPersianDigits(seconds);


  // const text = `${days.toString().padStart(2, "0")}  ${hours.toString().padStart(2, "0")} : ${minutes
  //   .toString()
  //   .padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
  // document.getElementById("countdown").innerText = toPersianDigits(text);
}

setInterval(updateCountdown, 1000);
updateCountdown();

function submitForm() {
  const phone = document.getElementById("phone").value.trim();
  const name = document.getElementById("name").value.trim();

  if (!phone || !name) {
    alert("لطفا نام و شماره تماس را وارد کنید.");
    return;
  }

  // نمایش کد تخفیف
  alert(`${name} عزیز، کد تخفیف شما: OFF50`);

  // می‌تونی اینجا اطلاعات رو به سرور هم بفرستی
}
