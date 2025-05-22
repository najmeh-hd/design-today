import Swiper from "swiper";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
const swiper = new Swiper(".swiper", {
  modules: [Pagination],
  direction: "vertical",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});
