const hamburgerMenu = document.querySelector("#hamburgerMenu");

const toogleMenu = (event) => {
  const header = document.querySelector(".header");
  const fadeElms = document.querySelectorAll(".has-fade");
  const body = document.querySelector("body");

  if (header.classList.contains("open")) {
    body.classList.remove("no-scroll");
    header.classList.remove("open");
    fadeElms.forEach((element) => {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    body.classList.add("no-scroll");
    header.classList.add("open");
    fadeElms.forEach((element) => {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
};

hamburgerMenu.addEventListener("click", toogleMenu);
