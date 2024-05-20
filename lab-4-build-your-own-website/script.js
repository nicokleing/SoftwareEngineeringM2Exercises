const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPercents = [97, 89, 85, 87, 88, 85, 89];

window.addEventListener("scroll", () => {
  mainFn();
});

const mainFn = () => {
  /* The reason you need this part of the code is because the "sticky" class is not using
  position: sticky. It is using position: fixed instead. If you make the "sticky" class use
  position: sticky instead, this if else statement would not be needed. Using the CSS route would
  be preferred.*/
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      navbarLinks.forEach((navbarLink) => {
        navbarLink.classList.remove("change");
      });
      navbarLinks[i].classList.add("change");
    }
  });

  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    document.querySelectorAll(".progress-percent").forEach((el, i) => {
      el.style.width = `${progressBarPercents[i]}%`;
      el.previousElementSibling.firstElementChild.textContent =
        progressBarPercents[i];
    });
  }
};

mainFn();

/*
This reloads the page every time the size changes.
This uses extra system resources and can make things slow. It is also
inconvenient for the user as everything would disappear and come back if they change the size.
This part should be removed to increase performance and to keep your UI on the screen all the time.
*/
window.addEventListener("resize", () => {
  window.location.reload();
});
