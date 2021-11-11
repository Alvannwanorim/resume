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
