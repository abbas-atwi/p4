const menu = document.querySelectorAll(".menu a");

function showLine() {
  menu.forEach((item) => {
    item.classList.remove("active");
  });
}
menu.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    showLine();
    item.classList.add("active");
  });
});

// sliders
const sectionSliders = document.querySelector(".section-sliders");
const slider = document.querySelectorAll(".section-slider");
const arrayPositionSlider = ["0", "-100", "-200"];
// base
// sectionSliders.style.marginLeft = arrayPositionSlider[2] + "vw";
let count = 0;
// arrows ao clicar vou trocar de slider
const arrow = document.querySelectorAll(".arrow");
arrow.forEach((item) => {
  item.addEventListener("click", () => {
    item.getAttribute("id") === "right"
      ? (sectionSliders.style.marginLeft = arrayPositionSlider[++count] + "vw")
      : (sectionSliders.style.marginLeft = arrayPositionSlider[--count] + "vw");
  });
});

// ao clicar no menu fazer scroll
const menuClick = document.querySelectorAll(".menu a[href^='#']");
menuClick.forEach((item) => {
  item.addEventListener("click", () => {
    const href = item.getAttribute("href");
    const section = document.querySelector(href);
    const sectionTop = section.getBoundingClientRect().top;
    section.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// animateScroll.forEach((item) => {
//   item.classList.remove("active");
// });

const media = window.matchMedia("(max-width: 500px)").matches;
media ? console.log(10) : console.log(15);
console.log(media);
const animateScroll = document.querySelectorAll(".scroll");
let metade = innerHeight * 0.9;
function activeSection() {
  animateScroll.forEach((item) => {
    const section = item.getBoundingClientRect().top - metade;
    console.log(section);
    if (section < 0) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", () => {
  console.log(activeSection());
});
