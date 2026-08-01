(function () {
  "use strict";

  const data = window.PORTFOLIO;
  if (!data) {
    console.error("PORTFOLIO content missing. Load content.js before script.js.");
    return;
  }

  const escapeHtml = (value) =>
    String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const renderList = (items, mapper) => (items || []).map(mapper).join("");

  /* ---------- Renderers ---------- */

  function renderTechStrip() {
    const root = document.getElementById("tech-strip");
    if (!root) return;
    root.innerHTML = renderList(
      data.hero.techStrip,
      (tech) => `<span class="tech-strip-item">${escapeHtml(tech)}</span>`
    );
  }

  function renderAbout() {
    const root = document.getElementById("about-root");
    if (!root) return;
    const a = data.about;
    root.innerHTML = `
      <div>
        <p class="lead">${escapeHtml(a.lead)}</p>
        <h3>Core strengths</h3>
        <ul class="list-tight">
          ${renderList(
            a.strengths,
            (s) =>
              `<li><strong>${escapeHtml(s.label)}:</strong> ${escapeHtml(s.value)}</li>`
          )}
        </ul>
        <h3 class="heading-compact">Quick facts</h3>
        <p class="muted-small">${escapeHtml(a.quickFacts)}</p>
      </div>
      <div class="about-cards">
        <article class="about-card">
          <h4 class="about-card-title">Focus Areas</h4>
          <ul class="about-list">
            ${renderList(a.focusAreas, (item) => `<li>${escapeHtml(item)}</li>`)}
          </ul>
        </article>
        <article class="about-card">
          <h4 class="about-card-title">Toolbox</h4>
          <ul class="about-tags">
            ${renderList(a.toolbox, (tag) => `<li class="tag">${escapeHtml(tag)}</li>`)}
          </ul>
        </article>
        <article class="about-card">
          <h4 class="about-card-title">Principles</h4>
          <ul class="about-list">
            ${renderList(a.principles, (item) => `<li>${escapeHtml(item)}</li>`)}
          </ul>
        </article>
      </div>`;
  }

  function renderEducation() {
    const root = document.getElementById("education-root");
    if (!root) return;
    root.innerHTML = renderList(
      data.education,
      (edu) => `
      <article class="edu-card" role="listitem" aria-labelledby="${escapeHtml(edu.id)}">
        <div class="edu-badge" aria-hidden="true"><i class="${escapeHtml(edu.icon)}"></i></div>
        <div class="edu-body">
          <h3 id="${escapeHtml(edu.id)}">${escapeHtml(edu.title)}</h3>
          <p class="edu-meta">
            <span class="edu-school">${escapeHtml(edu.school)}</span>
            <span class="edu-dot">•</span>
            <time datetime="${escapeHtml(edu.start)}">${escapeHtml(edu.start)}</time>
            – <time datetime="${escapeHtml(edu.end)}">${escapeHtml(edu.end)}</time>
          </p>
          <p class="edu-desc">${escapeHtml(edu.description)}</p>
          <div class="edu-footer">
            ${renderList(edu.chips, (chip) => `<span class="edu-chip">${escapeHtml(chip)}</span>`)}
          </div>
        </div>
      </article>`
    );
  }

  function renderExperience() {
    const root = document.getElementById("experience-root");
    if (!root) return;
    root.innerHTML = renderList(
      data.experience,
      (exp) => `
      <article class="exp-card" role="listitem" aria-labelledby="${escapeHtml(exp.id)}">
        <div class="exp-badge" aria-hidden="true"><i class="${escapeHtml(exp.icon)}"></i></div>
        <div class="exp-body">
          <span class="category-badge ${escapeHtml(exp.category)}">${escapeHtml(
            exp.category === "work" ? "Work" : "Training"
          )}</span>
          <h4 id="${escapeHtml(exp.id)}">${escapeHtml(exp.title)}</h4>
          <p class="exp-meta">
            <span class="exp-org">${escapeHtml(exp.org)}</span>
            <span class="exp-dot">•</span>
            <time datetime="${escapeHtml(exp.start)}">${escapeHtml(exp.start)}</time>
            – <time datetime="${escapeHtml(exp.end === "Present" ? "present" : exp.end)}">${escapeHtml(
              exp.end
            )}</time>
          </p>
          <p>${escapeHtml(exp.summary)}</p>
          <ul class="exp-bullets">
            ${renderList(exp.bullets, (b) => `<li>${escapeHtml(b)}</li>`)}
          </ul>
          <div class="exp-footer">
            ${renderList(exp.chips, (chip) => `<span class="exp-chip">${escapeHtml(chip)}</span>`)}
          </div>
        </div>
      </article>`
    );
  }

  function renderProjects() {
    const root = document.getElementById("projects-root");
    if (!root) return;
    root.innerHTML = renderList(
      data.projects,
      (project) => `
      <article class="project-card" aria-labelledby="${escapeHtml(project.id)}">
        <div class="project-image">
          <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.alt)}" loading="lazy" decoding="async" width="640" height="360" />
        </div>
        <div class="project-info">
          <h3 id="${escapeHtml(project.id)}">${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.summary)}</p>
          <div class="tech-list">${escapeHtml(project.tech.join(", "))}</div>
          <div class="project-case" hidden>
            <p><strong>Problem:</strong> ${escapeHtml(project.problem)}</p>
            <p><strong>Role:</strong> ${escapeHtml(project.role)}</p>
            <p><strong>Result:</strong> ${escapeHtml(project.result)}</p>
          </div>
          <div class="project-actions">
            <button type="button" class="btn btn-details" aria-expanded="false">View details</button>
            ${renderList(
              project.links,
              (link) =>
                `<a href="${escapeHtml(link.href)}" class="btn" target="_blank" rel="noopener">${escapeHtml(
                  link.label
                )}</a>`
            )}
          </div>
        </div>
      </article>`
    );

    root.querySelectorAll(".project-card").forEach((card) => {
      const detailsBtn = card.querySelector(".btn-details");
      const caseBlock = card.querySelector(".project-case");
      if (!detailsBtn || !caseBlock) return;
      detailsBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        const open = caseBlock.hasAttribute("hidden");
        if (open) {
          caseBlock.removeAttribute("hidden");
          detailsBtn.setAttribute("aria-expanded", "true");
          detailsBtn.textContent = "Hide details";
          card.classList.add("is-expanded");
        } else {
          caseBlock.setAttribute("hidden", "");
          detailsBtn.setAttribute("aria-expanded", "false");
          detailsBtn.textContent = "View details";
          card.classList.remove("is-expanded");
        }
      });
    });
  }

  function renderSkillGrid(rootId, items) {
    const root = document.getElementById(rootId);
    if (!root) return;
    root.innerHTML = renderList(
      items,
      (skill) => `
      <div class="skill-item">
        <i class="${escapeHtml(skill.icon)} skill-icon" aria-hidden="true"></i>
        <h4>${escapeHtml(skill.title)}</h4>
        <p>${escapeHtml(skill.text)}</p>
      </div>`
    );
  }

  function renderVolunteer() {
    const intro = document.getElementById("volunteer-intro");
    const root = document.getElementById("volunteer-root");
    if (intro) intro.textContent = data.volunteer.intro;
    if (!root) return;
    root.innerHTML = renderList(
      data.volunteer.items,
      (item) => `
      <article class="volunteer-item">
        <figure>
          <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.alt)}" class="volunteer-logo" loading="lazy" decoding="async" width="160" height="160" />
          <figcaption>
            <h4>${escapeHtml(item.title)}</h4>
            <p class="muted-small">${escapeHtml(item.caption)}</p>
          </figcaption>
        </figure>
      </article>`
    );
  }

  function renderCertifications() {
    const root = document.getElementById("certifications-root");
    if (!root) return;
    root.innerHTML = renderList(
      data.certifications,
      (cert) => `
      <article class="cert-card" aria-labelledby="${escapeHtml(cert.id)}" tabindex="0">
        <div class="cert-badge" aria-hidden="true"><i class="${escapeHtml(cert.icon)}"></i></div>
        <div class="cert-body">
          <h3 id="${escapeHtml(cert.id)}">${escapeHtml(cert.title)}</h3>
          <p class="muted-small">${escapeHtml(cert.meta)}</p>
          <p class="cert-desc">${escapeHtml(cert.description)}</p>
        </div>
      </article>`
    );
  }

  function renderArticles() {
    const root = document.getElementById("articles-root");
    if (!root) return;
    root.innerHTML = renderList(
      data.articles,
      (article) => `
      <article class="article-item" role="listitem" aria-labelledby="${escapeHtml(article.id)}">
        <div class="article-icon"><i class="${escapeHtml(article.icon)}" aria-hidden="true"></i></div>
        <div class="article-content">
          <div class="article-category">
            <span class="category-badge ${escapeHtml(article.categoryClass)}">${escapeHtml(
              article.category
            )}</span>
          </div>
          <h3 id="${escapeHtml(article.id)}">${escapeHtml(article.title)}</h3>
          <p class="article-summary">${escapeHtml(article.summary)}</p>
          <div class="article-tags">
            ${renderList(article.tags, (tag) => `<span class="tag">${escapeHtml(tag)}</span>`)}
          </div>
          <div class="article-meta">
            <div class="meta-info">
              <span class="file-size"><i class="fas fa-file-pdf"></i> ${escapeHtml(article.size)}</span>
              <span class="read-time"><i class="fas fa-clock"></i> ${escapeHtml(article.readTime)}</span>
            </div>
            <a href="${escapeHtml(article.href)}" target="_blank" rel="noopener" class="btn btn-code"
               aria-label="Read full PDF: ${escapeHtml(article.title)}">
              <i class="fas fa-external-link-alt"></i> Read full article
            </a>
          </div>
        </div>
      </article>`
    );
  }

  function renderContact() {
    const intro = document.getElementById("contact-intro");
    const root = document.getElementById("contact-root");
    if (intro) intro.textContent = data.contact.intro;
    if (!root) return;

    const availabilityHtml = renderList(
      data.contact.availability,
      (item) => {
        const status = item.open
          ? `<span class="avail-open">Open</span>`
          : `<span class="avail-closed">Not open</span>`;
        const note = item.note
          ? `<span class="avail-note">${escapeHtml(item.note)}</span>`
          : "";
        return `<li class="avail-item ${item.open ? "is-open" : "is-closed"}">
          <span class="avail-label">${escapeHtml(item.label)}</span>
          ${status}${note}
        </li>`;
      }
    );

    root.innerHTML = `
      <div class="contact-methods" role="list">
        <a class="contact-btn" role="listitem" href="mailto:${escapeHtml(data.meta.email)}" aria-label="Send email to Mahmoud" title="Email">
          <span class="contact-icon" aria-hidden="true"><i class="fa-solid fa-envelope"></i></span>
          <span class="contact-text">Send Email</span>
        </a>
        <a class="contact-btn" role="listitem" href="${escapeHtml(data.meta.sameAs[0])}" target="_blank" rel="noopener" aria-label="Open LinkedIn profile" title="LinkedIn">
          <span class="contact-icon" aria-hidden="true"><i class="fa-brands fa-linkedin"></i></span>
          <span class="contact-text">LinkedIn</span>
        </a>
        <a class="contact-btn" role="listitem" href="${escapeHtml(data.meta.sameAs[2])}" target="_blank" rel="noopener" aria-label="Open WhatsApp to chat" title="WhatsApp">
          <span class="contact-icon" aria-hidden="true"><i class="fa-brands fa-square-whatsapp"></i></span>
          <span class="contact-text">WhatsApp</span>
        </a>
        <a class="contact-btn" role="listitem" href="${escapeHtml(data.meta.sameAs[1])}" target="_blank" rel="noopener" aria-label="Open GitHub profile" title="GitHub">
          <span class="contact-icon" aria-hidden="true"><i class="fa-brands fa-github"></i></span>
          <span class="contact-text">GitHub</span>
        </a>
      </div>
      <div class="contact-card">
        <div class="availability-panel">
          <p class="avail-heading code-font">// Availability</p>
          <ul class="avail-list">${availabilityHtml}</ul>
          <p class="avail-response syntax-comment">// ${escapeHtml(data.contact.responseTime)}</p>
        </div>
        <div class="contact-card-actions">
          <a href="mailto:${escapeHtml(data.meta.email)}" class="btn btn-primary">
            <span class="code-font">./send_email.sh</span>
          </a>
          <a href="#projects" class="btn btn-secondary">
            <span class="code-font">./view_projects.sh</span>
          </a>
        </div>
      </div>`;
  }

  function renderAll() {
    const heroPrompt = document.querySelector('[data-bind="hero.prompt"]');
    const heroName = document.querySelector('[data-bind="hero.name"]');
    const heroSubtitle = document.querySelector('[data-bind="hero.subtitle"]');
    if (heroPrompt) heroPrompt.textContent = data.hero.prompt;
    if (heroName) heroName.textContent = data.hero.name;
    if (heroSubtitle) heroSubtitle.textContent = data.hero.subtitle;

    renderTechStrip();
    renderAbout();
    renderEducation();
    renderExperience();
    renderProjects();
    renderSkillGrid("skills-tech-root", data.skills.technical);
    renderSkillGrid("skills-soft-root", data.skills.soft);
    renderVolunteer();
    renderCertifications();
    renderArticles();
    renderContact();
  }

  /* ---------- Mobile menu ---------- */

  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const navContainer = document.querySelector(".nav");

  function setMenuOpen(open) {
    if (!navLinks || !menuToggle) return;
    navLinks.classList.toggle("open", open);
    if (navContainer) navContainer.classList.toggle("open", open);
    menuToggle.classList.toggle("open", open);
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.classList.toggle("menu-open", open);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  function initMenu() {
    if (menuToggle) {
      menuToggle.addEventListener("click", () => {
        const isOpen = !navLinks.classList.contains("open");
        setMenuOpen(isOpen);
      });
    }

    document.addEventListener("click", (event) => {
      const isOpen =
        (navLinks && navLinks.classList.contains("open")) ||
        (navContainer && navContainer.classList.contains("open"));
      if (!isOpen) return;
      const target = event.target;
      if (menuToggle && menuToggle.contains(target)) return;
      if (navContainer && navContainer.contains(target)) return;
      setMenuOpen(false);
    });
  }

  /* ---------- Smooth nav + scroll spy ---------- */

  function setActiveNav(sectionId) {
    const navItems = document.querySelectorAll(".nav-links li a");
    navItems.forEach((link) => {
      const href = link.getAttribute("href");
      const isActive = href === `#${sectionId}`;
      link.classList.toggle("active", isActive);
      if (isActive) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }

  function initNav() {
    const navItems = document.querySelectorAll(".nav-links li a");
    const sectionIds = [
      "about",
      "education",
      "experience",
      "projects",
      "skills",
      "volunteer",
      "certifications",
      "articles",
      "contact",
    ];
    const spySections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    let scrollingToId = null;
    let scrollLockTimer = null;
    let scrollRafId = 0;

    const runScrollWork = () => {
      scrollRafId = 0;
      updateSpyFromScroll();
    };

    const queueScrollWork = () => {
      if (scrollRafId) return;
      scrollRafId = window.requestAnimationFrame(runScrollWork);
    };

    navItems.forEach((link) => {
      link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (!href || !href.startsWith("#")) return;
        e.preventDefault();
        closeMenu();

        const id = href.slice(1);
        scrollingToId = id;
        setActiveNav(id);
        // Drop sticky focus underline from previously focused nav links
        if (typeof this.blur === "function") this.blur();

        const targetSection = document.getElementById(id);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }

        window.clearTimeout(scrollLockTimer);
        scrollLockTimer = window.setTimeout(() => {
          scrollingToId = null;
        }, 800);
      });
    });

    function updateSpyFromScroll() {
      if (scrollingToId) {
        setActiveNav(scrollingToId);
        return;
      }

      const header = document.querySelector(".header");
      const offset = (header ? header.offsetHeight : 72) + 24;
      const probeY = window.scrollY + offset;
      let currentId = spySections[0] ? spySections[0].id : null;

      for (const section of spySections) {
        if (section.offsetTop <= probeY) currentId = section.id;
        else break;
      }

      // Near page bottom → force last section
      const doc = document.documentElement;
      if (window.innerHeight + window.scrollY >= doc.scrollHeight - 4) {
        currentId = spySections[spySections.length - 1].id;
      }

      if (currentId) setActiveNav(currentId);
    }

    window.addEventListener("scroll", queueScrollWork, { passive: true });
    window.addEventListener("resize", updateSpyFromScroll);
    updateSpyFromScroll();

    // Honor hash on load (e.g. #projects)
    const hash = window.location.hash.slice(1);
    if (hash && sectionIds.includes(hash)) {
      setActiveNav(hash);
    }
  }

  /* ---------- Section reveal ---------- */

  function revealSection(section) {
    if (!section || section.classList.contains("visible")) return;
    section.classList.add("visible");
  }

  function isSectionNearViewport(section, marginPx) {
    const rect = section.getBoundingClientRect();
    const margin = marginPx ?? 0;
    return rect.top < window.innerHeight + margin && rect.bottom > -margin;
  }

  function initSectionReveal() {
    const sections = document.querySelectorAll(".section");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      sections.forEach((section) => revealSection(section));
      return;
    }

    const revealMargin = Math.min(window.innerHeight * 0.35, 320);

    sections.forEach((section) => {
      if (isSectionNearViewport(section, revealMargin)) {
        revealSection(section);
      }
    });

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealSection(entry.target);
            sectionObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: `${revealMargin}px 0px ${revealMargin}px 0px`,
      }
    );

    sections.forEach((section) => {
      if (!section.classList.contains("visible")) {
        sectionObserver.observe(section);
      }
    });
  }

  /* ---------- Header scroll + back to top ---------- */

  function initScrollUi() {
    const header = document.querySelector(".header");
    const backToTop = document.getElementById("back-to-top");
    let scrollUiRafId = 0;

    const updateScrollUi = () => {
      scrollUiRafId = 0;
      const y = window.scrollY || window.pageYOffset;
      if (header) header.classList.toggle("scrolled", y > 100);
      if (backToTop) {
        if (y > 500) backToTop.removeAttribute("hidden");
        else backToTop.setAttribute("hidden", "");
      }
    };

    const queueScrollUi = () => {
      if (scrollUiRafId) return;
      scrollUiRafId = window.requestAnimationFrame(updateScrollUi);
    };

    window.addEventListener("scroll", queueScrollUi, { passive: true });
    updateScrollUi();

    if (backToTop) {
      backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  /* ---------- Particles ---------- */

  function createParticles() {
    const heroParticles = document.querySelector(".hero-particles");
    if (!heroParticles) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const count = reduceMotion ? 0 : 40;
    for (let i = 0; i < count; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 6 + "s";
      particle.style.animationDuration = Math.random() * 3 + 3 + "s";
      heroParticles.appendChild(particle);
    }
  }

  function initParticleScrollPause() {
    const hero = document.getElementById("hero");
    if (!hero || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        hero.classList.toggle("particles-paused", !entry.isIntersecting);
      },
      { threshold: 0 }
    );
    observer.observe(hero);
  }

  /* ---------- Loading screen (short) ---------- */

  function hideLoadingOverlay() {
    const loadingOverlay = document.getElementById("loading");
    const loadingText = document.querySelector(".loading-text");
    if (!loadingOverlay || loadingOverlay.classList.contains("hidden")) return;

    if (loadingText) {
      loadingText.textContent = "Ready to Launch!";
    }

    loadingOverlay.style.pointerEvents = "none";
    loadingOverlay.classList.add("hidden");

    let removed = false;
    const onEnd = (e) => {
      if (e.target === loadingOverlay && !removed) {
        removed = true;
        loadingOverlay.remove();
        loadingOverlay.removeEventListener("transitionend", onEnd);
      }
    };
    loadingOverlay.addEventListener("transitionend", onEnd);
    window.setTimeout(() => {
      if (!removed) {
        try {
          loadingOverlay.remove();
        } catch (err) {
          /* ignore */
        }
        removed = true;
      }
    }, 500);
  }

  function initLoading() {
    window.setTimeout(hideLoadingOverlay, 450);
  }

  /* ---------- Boot ---------- */

  document.addEventListener("DOMContentLoaded", () => {
    renderAll();
    initMenu();
    initNav();
    initSectionReveal();
    initScrollUi();
    createParticles();
    initParticleScrollPause();
    initLoading();

    const logo = document.querySelector(".logo");
    if (logo) {
      logo.addEventListener("mouseenter", () => {
        logo.classList.add("glitch");
        logo.setAttribute("data-text", logo.textContent.trim());
      });
      logo.addEventListener("mouseleave", () => {
        logo.classList.remove("glitch");
      });
    }
  });
})();
