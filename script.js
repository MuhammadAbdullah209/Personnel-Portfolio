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
// Get saved theme
const savedTheme = localStorage.getItem("Theme");
// Apply saved theme on page load
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    darkModeToggle.checked = true;
}

// Toggle dark mode
darkModeToggle.addEventListener("change", () => {

    if (darkModeToggle.checked) {

        document.body.classList.add("dark-mode");
        localStorage.setItem("Theme", "dark");

    } else {

        document.body.classList.remove("dark-mode");
        localStorage.setItem("Theme", "light");
    }
});
