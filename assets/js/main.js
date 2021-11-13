// /*==================SHOW MENU===========*/

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validate that the variables exist

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      console.log("clicked");
      nav.classList.toggle("show-menu");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

// ===============REMOVE MENU MOBILE ===========
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// ===========SCROLL SECTIONS ACTIVE LINK============

// const sections = document.querySelectorAll("section[id");

// function scrollactive() {
//   const scrollY = window.pageYOffset;
//   //   console.log(scrollY);

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offset - 50;
//     sectionId = current.getAttribute("id");

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector(".nav_menu a[href=" + sectionId + "]")
//         .classList.add("active-link");
//     } else {
//       document
//         .querySelector(".nav_menu a[href=" + sectionId + "]")
//         .classList.remove("active-link");
//     }
//   });
// }
// window.addEventListener("scroll", scrollactive);
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// =======================SHOW SCROLL TOP===================

function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");

  if (this.scrollY >= 560) {
    scrollTop.classList.add("show-scroll");
  } else {
    scrollTop.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollTop);

// ============================DARK LIGHT THEME===================

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () => {
  document.body.classList.contains(darkTheme) ? "dark" : "light";
};
const getCurrentIcon = () => {
  document.body.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";
};

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate or deactivate the theme manually with the button

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// ============REDUCE THE SIZE ON A4============
function scaleCv() {
  document.body.classList.add("scale-cv");
}

// ============REMOVE THE SIZE WHEN CV IS DOWNLOADED============
function removeScaleCv() {
  document.body.classList.remove("scale-cv");
}
let areaCv = document.getElementById("area-cv");
let resumeButton = document.getElementById("resume-button");

function generateResume() {
  html2pdf(areaCv);
}
resumeButton.addEventListener("click", () => {
  scaleCv();
  generateResume();

  setTimeout(removeScaleCv, 500);
});
