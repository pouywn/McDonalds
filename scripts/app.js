const navLogo = document.querySelector(".nav__logo");
const menu = document.querySelector(".menu");
const cover = document.querySelector(".cover");
const menuLink = document.querySelectorAll(".menu__link");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const numberSpan = document.querySelector(".number-btn__number");
const categoriesItem = document.querySelectorAll(".menu__categories-item");
navLogo.addEventListener("click", function () {
   menu.classList.toggle("menu--active")
    cover.classList.toggle("cover--active")
})
cover.addEventListener("click", function () {
    this.classList.remove("cover--active")
    menu.classList.remove("menu--active")
})
menuLink.forEach(link => {
    link.addEventListener("click", function () {
        document.querySelector(".menu__link--active").classList.remove("menu__link--active");
        this.classList.add("menu__link--active")
    })
})
categoriesItem.forEach(item => {
    item.addEventListener("click", function () {
        document.querySelector(".menu__categories-item--active").classList.remove("menu__categories-item--active");
        this.classList.add("menu__categories-item--active")

    })
})
plus.addEventListener("click", () => {
    let current = parseInt(numberSpan.textContent);
    numberSpan["textContent"] = current + 1;
})
minus.addEventListener("click", () => {
    let current = parseInt(numberSpan.textContent);
    if (current > 0) {
        numberSpan["textContent"] = current - 1;
    }
    else {
        numberSpan["textContent"] = 0;
    }
})


