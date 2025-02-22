const themeToggle = document.getElementById("toggle");
themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("light-mode");
});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const menuOverlay = document.getElementById("menu-overlay");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", isOpen);

  if (isOpen) {
    menuOverlay.classList.add("open");
  } else {
    menuOverlay.classList.remove("open");
  }
});

menuOverlay.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.classList.remove("open");
  menuOverlay.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", false);
});

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

const navItems = document.querySelectorAll(".nav-links li a");
navItems.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    if (navLinks.classList.contains("open")) {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", false);
      menuToggle.classList.remove("open");
      menuOverlay.classList.remove("open");
    }

    this.classList.add("clicked");
    setTimeout(() => this.classList.remove("clicked"), 600);

    navItems.forEach(lnk => lnk.classList.remove("active"));
    this.classList.add("active");

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

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

window.addEventListener("load", () => {
  const loadingOverlay = document.getElementById("loading");
  if (loadingOverlay) {
    setTimeout(() => {
      loadingOverlay.classList.add("hidden");
    }, 300);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".project-card").forEach((card) => {
    card.classList.add("minimized");

    card.addEventListener("click", function () {
      this.classList.toggle("expanded");
    });
  });
});
