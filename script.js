// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    themeToggle.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
});

// Mobile Navigation Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
});

// Section Fade-In with IntersectionObserver
const sections = document.querySelectorAll(".section");
const sectionObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                sectionObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.2 }
);
sections.forEach(section => sectionObserver.observe(section));

// Smooth Scroll & Active Navigation State
const navItems = document.querySelectorAll(".nav-links li a");

navItems.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        // Remove mobile menu open state if applicable
        if (navLinks.classList.contains("open")) {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", false);
        }

        // Trigger ripple and button press animations
        this.classList.add("clicked");
        setTimeout(() => this.classList.remove("clicked"), 600);

        // Update active state
        navItems.forEach(lnk => lnk.classList.remove("active"));
        this.classList.add("active");

        // Smooth scroll to target section
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Bounce Animation for "View My Work" Button in Hero
const viewMyWorkBtn = document.querySelector('a[href="#projects"].btn');
if (viewMyWorkBtn) {
    viewMyWorkBtn.addEventListener("click", function (e) {
        e.preventDefault();
        this.classList.add("btn-animate");
        setTimeout(() => this.classList.remove("btn-animate"), 600);
        const projectsSection = document.querySelector("#projects");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    });
}

// Wait for the full page to load before removing the loading overlay
window.addEventListener('load', () => {
    const loadingOverlay = document.getElementById('loading');
    // Optional slight delay for smoother transition
    setTimeout(() => {
        loadingOverlay.classList.add('hidden');
    }, 300);
});