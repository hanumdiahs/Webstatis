// Toggle class active untuk menu sidebar
const navbarNav = document.querySelector(".navbar-nav");
// ketika menu di klik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan menu sidebar
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Toggle class active untuk search form
const searchform = document.querySelector(".search-form");
const searchbox = document.querySelector(".search-box");

document.querySelector("#search-button").onclick = () => {
  searchform.classList.toggle("active");
};
