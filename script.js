
const legacyToggle = document.getElementById("toggle");
const themeButton = null;

function applyTheme(isLight) {
  document.body.classList.toggle('light-mode', !!isLight);
  try { localStorage.setItem('lightMode', !!isLight); } catch (e) {}
}


try {
  const saved = localStorage.getItem('lightMode');
  if (saved !== null) applyTheme(saved === 'true');
} catch (e) {}

if (legacyToggle) {
  legacyToggle.addEventListener('change', (e) => {
    applyTheme(e.target.checked);
  });
}



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
  
  try { document.body.classList.toggle('menu-open', open); } catch (e) {}
}

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const isOpen = !navLinks.classList.contains('open');
    setMenuOpen(isOpen);
    if (isOpen) menuToggle.focus();
  });
}




document.addEventListener('click', (event) => {
  try {
    const isOpen = (navLinks && navLinks.classList.contains('open')) || (navContainer && navContainer.classList.contains('open'));
    if (!isOpen) return;
    const target = event.target;
    if (menuToggle && menuToggle.contains(target)) return;
    if (navContainer && navContainer.contains(target)) return;
    setMenuOpen(false);
  } catch (err) {  }
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
    
    setTimeout(() => {
      
      try { loadingOverlay.style.pointerEvents = 'none'; } catch (err) {}
      loadingOverlay.classList.add("hidden");

      
      let removed = false;
      const onEnd = (e) => {
        if (e.target === loadingOverlay && !removed) {
          removed = true;
          try { loadingOverlay.remove(); } catch (err) {  }
          loadingOverlay.removeEventListener('transitionend', onEnd);
        }
      };
      loadingOverlay.addEventListener('transitionend', onEnd);

      
      setTimeout(() => {
        if (!removed) {
          try { loadingOverlay.remove(); } catch (err) {  }
          removed = true;
        }
      }, 1600);
    }, 4500); 
  }
});


document.addEventListener("DOMContentLoaded", function () {
  createParticles();
  handleHeaderScroll();
  
  
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
