const headerBtn = document.querySelector(".header__btn");
const outterItems = document.querySelectorAll(".header__oitem");

headerBtn.addEventListener("click", toggleMenu);

outterItems.forEach((e) => {
  e.querySelector("button").addEventListener("click", () => toggleInnerMenu(e));
});

function toggleMenu() {
  const headerNav = document.querySelector(".header__nav");
  headerNav.classList.toggle("active");

  if (headerNav.classList.contains("active")) {
    headerBtn.innerHTML = '<img src="images/icon-close.svg" alt="menu" />';
  } else {
    headerBtn.innerHTML = '<img src="images/icon-hamburger.svg" alt="menu" />';
  }
}

function toggleInnerMenu(elem) {
  outterItems.forEach((e) => {
    if (e !== elem) e.classList.remove("active");
  });

  elem.classList.toggle("active");
}
