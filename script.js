document.documentElement.style.scrollBehavior = "smooth";


const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Toggle hamburger ↔ cross
    if (hamburger.classList.contains("active")) {
        hamburger.classList.remove("active");
        hamburger.innerHTML = "☰"; // hamburger icon
    } else {
        hamburger.classList.add("active");
        hamburger.innerHTML = "✖"; // cross icon
    }
});
const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
});
