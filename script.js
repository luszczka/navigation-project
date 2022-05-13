const mobileButton = document.querySelector(".navigation-menu");
const mobileMenu = document.querySelector(".navigation-links");
const burgerBar = document.querySelectorAll(".navigation-menu > span");

mobileButton.addEventListener("click", function() {
    mobileMenu.classList.toggle("d-block");
    for (let i = 0; i < burgerBar.length; i++) {
        burgerBar[i].classList.toggle("burger-bar--clicked");
    }
});