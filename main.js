const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelectorAll(".site-nav");

navToggle.addEventListener("click", function() {
    siteNav.classList.toggle("open");

    const isOpen = siteNav.classList.contains("open");
    navToggle.setAttribute("aria-expanded", isOpen);
});