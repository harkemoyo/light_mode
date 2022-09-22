const toggleEl = document.querySelector(`input[type = "checkbox"]`);
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle_icon");
const image1El = document.getElementById("image1");
const image2El = document.getElementById("image2");
const image3El = document.getElementById("image3");
const textEl = document.getElementById("text_box");

//color fn

function imageColor(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function darkLightMode(isDark) {
  if (isDark) {
    nav.style.backgroundColor = "rgb(0, 0, 0, 50%)";
    textEl.style.backgroundColor = "rgb(255, 255, 255, 50%)";

    toggleIcon.children[0].textContent = "Dark Mode";
    toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
    imageColor("dark");
  } else {
    nav.style.backgroundColor = "rgb(255, 255, 255, 50%)";
    textEl.style.backgroundColor = "rgb(0, 0, 0, 50%)";
    toggleIcon.children[0].textContent = "Light Mode";
    toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
    imageColor("light");
  }
}

// //dark fn
// function darkMode() {
//   nav.style.backgroundColor = "rgb(0, 0, 0, 50%)";
//   textEl.style.backgroundColor = "rgb(255, 255, 255, 50%)";

//   toggleIcon.children[0].textContent = "Dark Mode";
//   toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
//   imageColor("dark");
// }

// //light fn
// function lightMode() {
//   nav.style.backgroundColor = "rgb(255, 255, 255, 50%)";
//   textEl.style.backgroundColor = "rgb(0, 0, 0, 50%)";
//   toggleIcon.children[0].textContent = "Light Mode";
//   toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");

//   imageColor("light");
// }

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkLightMode(true);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    darkLightMode(false);
  }
}
toggleEl.addEventListener("change", switchTheme);

//localStorage for theme

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleEl.checked = true;
    darkLightMode(true);
  }
}
