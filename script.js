// Theme Toggle
const themeToggle = document.getElementById("toggle");
themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("light-mode");
});

// Mobile Navigation Toggle with Overlay
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const menuOverlay = document.getElementById("menu-overlay");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", isOpen);

  // Toggle overlay visibility
  if (isOpen) {
    menuOverlay.classList.add("open");
  } else {
    menuOverlay.classList.remove("open");
  }
});

// Optional: Hide the mobile menu when clicking the overlay
menuOverlay.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.classList.remove("open");
  menuOverlay.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", false);
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
      menuToggle.classList.remove("open");
      menuOverlay.classList.remove("open");
    }

    // Trigger ripple animation
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

// Bounce Animation for "View My Work" Button in Hero (if exists)
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

// Remove loading overlay once the page is fully loaded
window.addEventListener("load", () => {
  const loadingOverlay = document.getElementById("loading");
  if (loadingOverlay) {
    setTimeout(() => {
      loadingOverlay.classList.add("hidden");
    }, 300);
  }
});
