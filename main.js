const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const showMoreBtn = document.querySelector(".show-more-btn");
const hiddenEntries = document.querySelectorAll(".hidden-entry");
const extraEntries = document.querySelectorAll(".extra-entry");

navToggle.addEventListener("click", function() {
    siteNav.classList.toggle("open");

    const isOpen = siteNav.classList.contains("open");
    navToggle.setAttribute("aria-expanded", isOpen);
});

showMoreBtn.addEventListener("click", function() {
    const isHidden = extraEntries[0].classList.contains("hidden-entry");

    if (isHidden) {
        extraEntries.forEach(function(entry) {
            entry.classList.remove("hidden-entry");
        });

        showMoreBtn.textContent = "SHOW LESS";

    } else {
        extraEntries.forEach(function(entry) {
            entry.classList.add("hidden-entry");
        });

        showMoreBtn.textContent = "SHOW MORE";
    }
});