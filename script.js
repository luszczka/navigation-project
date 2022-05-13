const mobileButton = document.querySelector(".navigation-menu");
const mobileMenu = document.querySelector(".navigation-links");

mobileButton.addEventListener("click", function() {
    mobileMenu.classList.toggle("d-block");
});