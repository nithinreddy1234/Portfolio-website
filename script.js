document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");
    const darkModeButton = document.querySelector("#darkmode");


    window.addEventListener("scroll", () => {
        header.classList.toggle("shadow", window.scrollY > 0);
    });


    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });


    window.addEventListener("scroll", () => {
        navbar.classList.remove("active");
    });


    darkModeButton.addEventListener("click", () => {
        document.body.classList.toggle("active");
        darkModeButton.classList.toggle("bx-moon");
        darkModeButton.classList.toggle("bx-sun");
    });
});
