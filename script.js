document.documentElement.style.scrollBehavior = "smooth";

/* ========================= */
/* HAMBURGER MENU */
/* ========================= */

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    // Toggle hamburger ↔ cross

    if (hamburger.classList.contains("active")) {

        hamburger.classList.remove("active");
        hamburger.innerHTML = "☰";

    } else {

        hamburger.classList.add("active");
        hamburger.innerHTML = "✖";
    }
});

/* ========================= */
/* DARK MODE */
/* ========================= */

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

/* ========================= */
/* SCROLL REVEAL ANIMATION */
/* ========================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", revealSections);

function revealSections() {

    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach((section) => {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {

            section.classList.add("show");

        } else {

            section.classList.remove("show");
        }
    });
}

// Initial check

revealSections();

/* ========================= */
/* PROJECT CARD STAGGER EFFECT */
/* ========================= */

const cards = document.querySelectorAll(".project-card");

cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";

    setTimeout(() => {

        card.style.transition = "all 0.8s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";

    }, index * 200);
});

/* ========================= */
/* PARALLAX HERO EFFECT */
/* ========================= */

// window.addEventListener("scroll", () => {

//     const hero = document.querySelector(".hero");

//     let offset = window.pageYOffset;

//     hero.style.backgroundPositionY = offset * 0.5 + "px";
// });

/* ========================= */
/* SMOOTH ACTIVE NAV LINK */
/* ========================= */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navItems.forEach(item => item.classList.remove("active-link"));

        link.classList.add("active-link");

        // Close mobile menu after click

        navLinks.classList.remove("active");

        hamburger.classList.remove("active");

        hamburger.innerHTML = "☰";
    });
});

/* ========================= */
/* TYPING EFFECT */
/* ========================= */

const heroHeading = document.querySelector(".hero-text h2");

const text = "Hello, I'm Abdullah";

let index = 0;

heroHeading.innerHTML = "";

function typeEffect() {

    if (index < text.length) {

        heroHeading.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 80);
    }
}

typeEffect();