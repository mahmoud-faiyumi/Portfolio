// Theme toggle: supports legacy checkbox (#toggle) and new button (#theme-toggle)
const legacyToggle = document.getElementById("toggle");
const themeButton = null;

function applyTheme(isLight) {
  document.body.classList.toggle('light-mode', !!isLight);
  try { localStorage.setItem('lightMode', !!isLight); } catch (e) {}
}

// initialize from storage
try {
  const saved = localStorage.getItem('lightMode');
  if (saved !== null) applyTheme(saved === 'true');
} catch (e) {}

if (legacyToggle) {
  legacyToggle.addEventListener('change', (e) => {
    applyTheme(e.target.checked);
  });
}

// theme toggle removed

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navContainer = document.querySelector('.nav');
const menuOverlay = null;

function setMenuOpen(open) {
  if (!navLinks || !menuToggle) return;
  navLinks.classList.toggle('open', open);
  if (navContainer) navContainer.classList.toggle('open', open);
  menuToggle.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  // overlay removed
  try { document.body.classList.toggle('menu-open', open); } catch (e) {}
}

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const isOpen = !navLinks.classList.contains('open');
    setMenuOpen(isOpen);
    if (isOpen) menuToggle.focus();
  });
}

// overlay removed

// Close menu when clicking outside nav / toggle
document.addEventListener('click', (event) => {
  try {
    const isOpen = (navLinks && navLinks.classList.contains('open')) || (navContainer && navContainer.classList.contains('open'));
    if (!isOpen) return;
    const target = event.target;
    if (menuToggle && menuToggle.contains(target)) return;
    if (navContainer && navContainer.contains(target)) return;
    setMenuOpen(false);
  } catch (err) { /* ignore */ }
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

    if (navLinks.classList.contains("open") || (navContainer && navContainer.classList.contains('open'))) {
      if (navContainer) navContainer.classList.remove("open");
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", false);
      menuToggle.classList.remove("open");
      // overlay removed
      try { document.body.classList.remove('menu-open'); } catch (err) {}
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

// Create floating particles for hero section
function createParticles() {
  const heroParticles = document.querySelector('.hero-particles');
  if (!heroParticles) return;

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heroParticles.appendChild(particle);
  }
}

// Terminal typing effect for hero title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Add scroll effect to header
function handleHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Enhanced loading screen with terminal effects
window.addEventListener("load", () => {
  const loadingOverlay = document.getElementById("loading");
  const loadingText = document.querySelector('.loading-text');
  
  if (loadingText) {
    const messages = [
      'Initializing Portfolio...',
      'Loading Components...',
      'Compiling Assets...',
      'Ready to Launch!'
    ];
    
    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      if (messageIndex < messages.length - 1) {
        messageIndex++;
        loadingText.textContent = messages[messageIndex];
      } else {
        clearInterval(messageInterval);
      }
    }, 1000);
  }

  if (loadingOverlay) {
    // fade out then remove to ensure it doesn't block interaction
    setTimeout(() => {
      // make non-interactive immediately
      try { loadingOverlay.style.pointerEvents = 'none'; } catch (err) {}
      loadingOverlay.classList.add("hidden");

      // remove after transitionend, or fallback after 900ms
      let removed = false;
      const onEnd = (e) => {
        if (e.target === loadingOverlay && !removed) {
          removed = true;
          try { loadingOverlay.remove(); } catch (err) { /* ignore */ }
          loadingOverlay.removeEventListener('transitionend', onEnd);
        }
      };
      loadingOverlay.addEventListener('transitionend', onEnd);

      // Fallback: if transitionend doesn't fire, remove after timeout
      setTimeout(() => {
        if (!removed) {
          try { loadingOverlay.remove(); } catch (err) { /* ignore */ }
          removed = true;
        }
      }, 900);
    }, 4500); // longer delay for more time on loading screen
  }
});

// Initialize all effects
document.addEventListener("DOMContentLoaded", function () {
  createParticles();
  handleHeaderScroll();
  
  // Add glitch effect to logo on hover
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('mouseenter', () => {
      logo.classList.add('glitch');
      logo.setAttribute('data-text', logo.textContent);
    });
    
    logo.addEventListener('mouseleave', () => {
      logo.classList.remove('glitch');
    });
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
