const yearEl = document.querySelector(".year");
const currentDate = new Date().getFullYear();
yearEl.textContent = currentDate;

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});
