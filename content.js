/**
 * Portfolio content — single source of truth.
 * Edit this file to update site copy without touching layout markup.
 */
window.PORTFOLIO = {
  meta: {
    title: "Mahmoud Alfayoumi - Portfolio",
    description:
      "Mahmoud Alfayoumi — Software Engineer specializing in Angular, micro-frontends, and full-stack development. Portfolio, projects, and technical articles.",
    keywords:
      "Mahmoud Alfayoumi, Software Engineer, Angular, Micro-frontends, TypeScript, Computer Engineer, Web Developer, Portfolio",
    author: "Mahmoud Alfayoumi",
    url: "https://mahmoud-faiyumi.github.io/Portfolio/",
    image: "assets/preview.webp",
    email: "mahmoud.faiyumi98@outlook.com",
    phone: "+962782185255",
    location: "Amman, Jordan",
    jobTitle: "Software Engineer",
    sameAs: [
      "https://www.linkedin.com/in/mahmoud-faiyumi/",
      "https://github.com/mahmoud-faiyumi",
      "https://wa.me/962782185255",
    ],
  },

  hero: {
    prompt: "$ whoami",
    name: "Mahmoud Alfayoumi",
    subtitle: "Software Engineer | Angular & Micro-frontends | Full-Stack Developer",
    techStrip: [
      "Angular",
      "TypeScript",
      "C#",
      ".NET",
      "SQL Server",
      "Git",
      "Firebase",
      "SCSS",
    ],
  },

  about: {
    lead: "Computer Engineering graduate with hands-on experience in IT maintenance, technical support, and software development. Creator of Health Mate and MT Library. Skilled in C#, .NET, Angular, Python, and SQL Server — with a strong work ethic, problem-solving mindset, and leadership in volunteer-driven tech initiatives.",
    strengths: [
      {
        label: "Frontend",
        value: "HTML, CSS, SCSS, JavaScript, TypeScript, Angular, Micro‑frontends",
      },
      {
        label: "Backend / Desktop",
        value: "C#, .NET, WinForms, Python, PHP, SQL Server",
      },
      {
        label: "Tooling",
        value: "Git, GitHub, Postman, Newman, Cursor, PowerShell",
      },
    ],
    quickFacts:
      "Full‑time Software Engineer at InvoiceQ, building Angular-based micro‑frontend features. Team lead for volunteer IT maintenance since 2018. Certified in A+, ICDL, and Security+. Open to collaborations and freelance work.",
    focusAreas: [
      "Angular & TypeScript front‑end",
      "Micro‑frontend architecture",
      "Accessible, responsive UI",
      "Performance and clean architecture",
    ],
    toolbox: [
      "HTML",
      "CSS",
      "SCSS",
      "JavaScript",
      "TypeScript",
      "Angular",
      "React",
      "C# / .NET",
      "SQL Server",
      "MySQL",
      "Python",
      "PHP",
      "Git",
      "Postman",
      "Firebase",
    ],
    principles: [
      "Ship iteratively with quality",
      "Automate repeatable workflows",
      "Communicate clearly, document decisions",
    ],
  },

  education: [
    {
      id: "edu-bsc",
      icon: "fas fa-graduation-cap",
      title: "Bachelor of Computer Engineering",
      school: "BAU, Faculty of Engineering Technology (FET)",
      start: "2020",
      end: "2024",
      description:
        "GPA: 2.54 (Good) — Ranked second in the Computer Engineering Department.",
      chips: ["GPA 2.54", "Dept. Rank #2"],
    },
    {
      id: "edu-diploma",
      icon: "fas fa-network-wired",
      title: "Diploma in Communications and Computer Networks Engineering",
      school: "BAU, Faculty of Engineering Technology (FET)",
      start: "2017",
      end: "2020",
      description:
        "GPA: 84.9% (Very Good) — Ranked third in the major nationwide.",
      chips: ["GPA 84.9%", "Nationwide Top 3"],
    },
  ],

  experience: [
    {
      id: "exp-invoiceq",
      icon: "fas fa-briefcase",
      category: "work",
      title: "Software Engineer (Full‑time)",
      org: "InvoiceQ",
      start: "2025",
      end: "Present",
      summary:
        "Developing dynamic, responsive, high-performance web applications using Angular.",
      bullets: [
        "Helped scale front-end delivery across teams by building reusable Angular micro-frontend modules",
        "Shipped production features with components, services, routing, state management, and API integration",
        "Improved maintainability through modular architecture and performance-focused UI work",
      ],
      chips: ["Full‑time", "Angular", "Micro‑frontends"],
    },
    {
      id: "exp-frontend",
      icon: "fas fa-code",
      category: "work",
      title: "Front‑End Developer",
      org: "Digiskills & IIH",
      start: "2024",
      end: "2025",
      summary:
        "Developed responsive, high-performance web applications using Angular and modern front-end technologies.",
      bullets: [
        "Delivered modular Angular apps with TypeScript, SCSS, routing, and API integration",
        "Applied performance optimization practices across UI components and data flows",
        "Completed hands-on projects with collaborative tooling and real case studies",
      ],
      chips: ["Angular", "TypeScript", "SCSS"],
    },
    {
      id: "exp-fullstack",
      icon: "fas fa-layer-group",
      category: "work",
      title: "Full‑Stack Developer",
      org: "Clever Mind POB",
      start: "2024",
      end: "2025",
      summary:
        "Built robust, scalable web applications through hands-on projects and real-world case studies.",
      bullets: [
        "Owned front-end delivery with HTML, CSS, JavaScript, and UI/UX focus",
        "Implemented PHP back-end features and database workflows",
        "Collaborated on projects emphasizing scalability and maintainability",
      ],
      chips: ["PHP", "Full‑Stack", "UI/UX"],
    },
    {
      id: "exp-maint",
      icon: "fas fa-tools",
      category: "work",
      title: "IT Maintenance Technician (Team Lead)",
      org: "Volunteer Work",
      start: "2018",
      end: "Present",
      summary:
        "Maintained software and hardware for laptops and desktops; provided technical support for college students.",
      bullets: [
        "Led volunteer maintenance team supporting student devices across campus",
        "Reduced repair and OS-reinstall turnaround through standardized troubleshooting",
        "Built repeatable support playbooks for recurring hardware and software issues",
      ],
      chips: ["Team Lead", "Hardware", "Support"],
    },
    {
      id: "exp-writer",
      icon: "fas fa-pen-nib",
      category: "work",
      title: "Technical Content Writer (Freelance)",
      org: "Freelance on Facebook",
      start: "2014",
      end: "2016",
      summary:
        "Collaborated with an international team to create and publish technical content for a broad audience.",
      bullets: [
        "Published concise tutorials with reproducible steps for international readers",
        "Improved engagement by focusing on practical examples and clear structure",
      ],
      chips: ["Writing", "Tutorials", "Education"],
    },
    {
      id: "exp-data",
      icon: "fas fa-database",
      category: "training",
      title: "Data Entry",
      org: "efe Jordan",
      start: "2025",
      end: "2025",
      summary:
        "Entered, updated, and maintained accurate data in company systems and databases.",
      bullets: [
        "Verified data integrity and resolved discrepancies through regular audits",
        "Documented processes while following data privacy and team communication standards",
      ],
      chips: ["Data Entry", "Auditing"],
    },
    {
      id: "exp-network",
      icon: "fas fa-network-wired",
      category: "training",
      title: "Networking Engineer",
      org: "Jordanian Customs",
      start: "2019",
      end: "2020",
      summary:
        "Designed, optimized, and secured network infrastructure; monitored uptime and reliability.",
      bullets: [
        "Improved operational reliability by troubleshooting and monitoring network systems",
        "Maintained compliance through clear documentation and change communication",
      ],
      chips: ["Networking", "Security", "Monitoring"],
    },
  ],

  projects: [
    {
      id: "proj-healthmate-angular",
      title: "Health Mate (Angular)",
      image: "assets/HealthMate-Angular.webp",
      alt: "Health Mate (Angular) web app preview",
      summary:
        "Modern web rebuild of Health Mate with Angular, Firebase, and Material UI.",
      problem:
        "The original desktop health tracker needed a cross-platform web experience with auth, cloud sync, and localization.",
      role: "Designed and built the Angular front end, Firebase integration, and Material-based UI flows.",
      result:
        "Shipped a responsive web app with login, localization, and cloud-backed health tracking at health-mate-web.web.app.",
      tech: ["Angular", "Firebase", "Angular Material", "Localization"],
      links: [
        { label: "Live", href: "https://health-mate-web.web.app/login" },
      ],
    },
    {
      id: "proj-healthmate",
      title: "Health Mate",
      image: "assets/HealthMate.webp",
      alt: "Health Mate screenshot",
      summary:
        "Feature-rich C# WinForms health tracking app with calories and workouts.",
      problem:
        "Users needed a local desktop tool to track calories, workouts, and health goals without a complex setup.",
      role: "Built the full WinForms application and SQL Server data layer end to end.",
      result:
        "Delivered a maintainable desktop tracker with structured data persistence and core health workflows.",
      tech: ["C#", "WinForms", "SQL Server"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/mahmoud-faiyumi/HealthMate.git",
        },
      ],
    },
    {
      id: "proj-mtlibrary",
      title: "MT Library (MT-Team)",
      image: "assets/mt-library.png",
      alt: "MT Library Arabic site showing About and Services libraries for فريق الصيانة",
      summary:
        "Arabic RTL web library for فريق الصيانة — catalog of apps, OS images, and browser extensions with search, filters, and feedback.",
      problem:
        "Arabic-speaking students needed a trusted hub for recommended software, OS images, and extensions instead of scattered Drive/Telegram links — plus a way to request tools and report broken downloads.",
      role: "Built and shipped the Eleventy site end to end: Arabic RTL UX, Fuse.js search, Markdown-driven catalogs, EmailJS forms, Firestore page views, PWA, and Firebase Hosting.",
      result:
        "Live at mt-library.web.app with 100+ catalog items across Applications, OS, and Extensions libraries, dark mode, blog, and team projects.",
      tech: [
        "Eleventy",
        "HTML/CSS/JS",
        "Firebase Hosting",
        "Firestore",
        "EmailJS",
        "Fuse.js",
        "PWA",
      ],
      links: [
        { label: "Live", href: "https://mt-library.web.app/" },
      ],
    },
    {
      id: "proj-port-killer",
      title: "Port Killer",
      image: "assets/port-killer.png",
      alt: "Port Killer desktop app showing TCP listeners and kill actions",
      summary:
        "Windows desktop tool to scan TCP listeners, filter fast, and end processes by PID when a port is stuck.",
      problem:
        "Local Angular, Vite, webpack, or other services often leave ports occupied — digging through netstat is slow and error-prone.",
      role: "Designed and built the Electron app: TCP scan, filtering, kill-by-PID, favorites, and Windows packaging.",
      result:
        "Shipped a Windows installer with refresh, filter, kill, kill-history, and GitHub Releases auto-update support.",
      tech: ["Electron", "JavaScript", "Windows", "netstat"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/mahmoud-faiyumi/port-killer",
        },
      ],
    },
    {
      id: "proj-image-converter-webp",
      title: "Image Converter to WebP",
      image: "assets/image-converter-webp.png",
      alt: "Image Converter to WebP CLI tool preview",
      summary:
        "Python batch tool that converts images to WebP, generates thumbnails, and reports compression savings.",
      problem:
        "Preparing large image folders for the web meant slow one-by-one conversion without clear size analytics or resume-friendly re-runs.",
      role: "Built the converter with multiprocessing, JSON/env configuration, progress tracking, smart skipping, and detailed logging.",
      result:
        "Published an open-source CLI that batch-converts JPEG/PNG/GIF/TIFF to WebP with thumbs, EXIF/ICC/alpha preservation, and space-savings reports.",
      tech: ["Python", "Pillow", "WebP", "Multiprocessing"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/mahmoud-faiyumi/image-converter-webp",
        },
      ],
    },
    {
      id: "proj-todo",
      title: "FlowBoard",
      image: "assets/todo.png",
      alt: "FlowBoard personal kanban board with To Do, In Progress, and Done columns",
      summary:
        "Local-first Angular kanban for personal tasks — custom columns, drag-and-drop, filters, templates, and a productivity dashboard.",
      problem:
        "Needed a backend-free board to organize work with priorities, due dates, and column flow — not only a flat checklist.",
      role: "Built the full Angular 22 app: signal-based board state, CDK drag-drop, localStorage persistence, import/export, theme, and dashboard.",
      result:
        "Shipped a live GitHub Pages board with durable browser storage, multi-column workflow, and keyboard shortcuts.",
      tech: ["Angular 22", "Angular CDK", "TypeScript", "Signals", "localStorage"],
      links: [
        {
          label: "Live",
          href: "https://mahmoud-faiyumi.github.io/ToDoList/",
        },
      ],
    },
    {
      id: "proj-setup-ts",
      title: "Setup-TypeScript",
      image: "assets/Setup-TypeScript.webp",
      alt: "Setup TypeScript script",
      summary:
        "PowerShell automation for installing and configuring TypeScript tooling.",
      problem:
        "Manual TypeScript environment setup was repetitive and error-prone on Windows.",
      role: "Authored the automation script and documented the setup flow.",
      result:
        "Reduced local TypeScript bootstrap time with a one-command PowerShell setup.",
      tech: ["PowerShell", "TypeScript"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/mahmoud-faiyumi/Setup-TypeScript",
        },
      ],
    },
    {
      id: "proj-angular-cli",
      title: "Angular-CLI-NVM-Setup",
      image: "assets/Angular-CLI-NVM-Setup.webp",
      alt: "Angular CLI and NVM setup",
      summary:
        "PowerShell script for automated Angular CLI and NVM installation.",
      problem:
        "Developers needed a reliable Windows path to install NVM and Angular CLI consistently.",
      role: "Built and published the automation script for Node/Angular tooling setup.",
      result:
        "Enabled repeatable Angular environment setup with fewer manual configuration steps.",
      tech: ["PowerShell", "Node", "Angular CLI"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/mahmoud-faiyumi/Angular-CLI-NVM-Setup",
        },
      ],
    },
  ],

  skills: {
    technical: [
      {
        icon: "fas fa-code",
        title: "Programming",
        text: "C#, JavaScript, TypeScript, Python, HTML, CSS, SCSS, SQL, Java, Node.js, Angular, React, Micro‑frontend Architecture",
      },
      {
        icon: "fas fa-database",
        title: "Databases",
        text: "MSSQL, MySQL, SQL Server Management Studio",
      },
      {
        icon: "fas fa-server",
        title: "Backend & APIs",
        text: ".NET, WinForms, PHP, REST, Postman, Newman",
      },
      {
        icon: "fas fa-tools",
        title: "Tools",
        text: "Git & GitHub, Microsoft Office, Cursor, Vibe Coding",
      },
      { icon: "fas fa-cloud", title: "Cloud", text: "Firebase" },
      {
        icon: "fas fa-network-wired",
        title: "Networking",
        text: "Infrastructure maintenance, troubleshooting",
      },
      {
        icon: "fas fa-paint-brush",
        title: "Design",
        text: "Adobe Illustrator, Canva",
      },
    ],
    soft: [
      {
        icon: "fas fa-users",
        title: "Teamwork",
        text: "Collaborative and supportive",
      },
      {
        icon: "fas fa-comments",
        title: "Communication",
        text: "Clear, concise, and effective",
      },
      {
        icon: "fas fa-lightbulb",
        title: "Problem Solving",
        text: "Analytical and innovative thinker",
      },
      {
        icon: "fas fa-chart-line",
        title: "Adaptability",
        text: "Quick learner and flexible",
      },
      {
        icon: "fas fa-handshake",
        title: "Leadership",
        text: "Mentoring and team-building abilities",
      },
    ],
  },

  volunteer: {
    intro:
      "Extensive volunteer experience with organizations such as ZerOne, Maintenance Team, IEEE, Shaghaf Family, Mujaddidun Jo, and Nahno — developing skills in IT maintenance, teamwork, and leadership.",
    items: [
      {
        image: "assets/ZerOne.webp",
        alt: "ZerOne logo",
        title: "ZerOne",
        caption: "Community tech workshops",
      },
      {
        image: "assets/mt-team.webp",
        alt: "Maintenance Team logo",
        title: "Maintenance Team",
        caption: "IT support & hardware maintenance",
      },
      {
        image: "assets/ieee.webp",
        alt: "IEEE logo",
        title: "IEEE",
        caption: "Student branch activities",
      },
      {
        image: "assets/shaghaf.webp",
        alt: "Shaghaf Family logo",
        title: "Shaghaf Family",
        caption: "Community outreach",
      },
      {
        image: "assets/Mujaddidun.webp",
        alt: "Mujaddidun logo",
        title: "Mujaddidun Jo",
        caption: "Education initiatives",
      },
      {
        image: "assets/nahno.webp",
        alt: "Nahno logo",
        title: "Nahno",
        caption: "Local volunteering",
      },
    ],
  },

  certifications: [
    {
      id: "cert-a-plus",
      icon: "fas fa-certificate",
      title: "A+ Certification",
      meta: "CompTIA A+ — 2016",
      date: "2016",
      description:
        "Foundational hardware and troubleshooting certification covering PC hardware, OS, and basic networking.",
    },
    {
      id: "cert-icdl",
      icon: "fas fa-laptop-code",
      title: "ICDL",
      meta: "International Computer Driving License — 2020 (Edraak)",
      date: "2020",
      description:
        "Validated competency in essential computer skills and office productivity tools.",
    },
    {
      id: "cert-security",
      icon: "fas fa-shield-alt",
      title: "Security+",
      meta: "CompTIA Security+ — 2022 (Pioneers Academy)",
      date: "2022",
      description:
        "Focus on network security, threat management, and risk mitigation fundamentals.",
    },
  ],

  articles: [
    {
      id: "art-npm",
      icon: "fab fa-npm",
      category: "Package Management",
      categoryClass: "package-manager",
      title: "NPM vs Yarn on Angular",
      summary:
        "When to choose NPM or Yarn in Angular projects — lockfiles, install speed, and day-to-day workflow trade-offs.",
      tags: ["Angular", "NPM", "Yarn", "Performance"],
      size: "100.12 KB",
      readTime: "5 min read",
      href: "articles/NPM vs Yarn on Angular.pdf",
    },
    {
      id: "art-loops",
      icon: "fas fa-sync-alt",
      category: "JavaScript",
      categoryClass: "javascript",
      title: "for vs forEach vs for...in in JavaScript",
      summary:
        "Practical guide to JavaScript iteration patterns — readability, performance, and when each loop style fits best.",
      tags: ["JavaScript", "Performance", "Loops", "Best Practices"],
      size: "3.9 MB",
      readTime: "12 min read",
      href: "articles/for vs forEach vs for...in in JavaScript.pdf",
    },
    {
      id: "art-ngclass",
      icon: "fab fa-angular",
      category: "Angular",
      categoryClass: "angular",
      title: "[Class] vs [ngClass], and [Style] vs [ngStyle] in Angular",
      summary:
        "Clear rules for Angular property binding vs directive-based styling — with maintainable, performant examples.",
      tags: ["Angular", "CSS", "Directives", "Styling"],
      size: "132.24 KB",
      readTime: "8 min read",
      href: "articles/Understanding the Differences Between [Class] and [ngClass], and [Style] and [ngStyle] in Angular.pdf",
    },
    {
      id: "art-inputs",
      icon: "fas fa-exchange-alt",
      category: "Angular",
      categoryClass: "angular",
      title: "Comparing @Input, @Output, Two-Way Binding, and ViewChild",
      summary:
        "Component communication patterns in Angular — inputs, outputs, two-way binding, and ViewChild with practical trade-offs.",
      tags: ["Angular", "Components", "Communication", "Architecture"],
      size: "163.54 KB",
      readTime: "10 min read",
      href: "articles/Comparing [Input], [Output], Two-Way Binding, and ViewChild in Angular.pdf",
    },
    {
      id: "art-ng20",
      icon: "fas fa-rocket",
      category: "Angular",
      categoryClass: "angular",
      title: "Angular 20: What's New and How to Upgrade",
      summary:
        "Angular 20 highlights, breaking-change notes, and a practical upgrade path for existing applications.",
      tags: ["Angular", "Updates", "Migration", "New Features"],
      size: "255.78 KB",
      readTime: "15 min read",
      href: "articles/Angular 20 What's New and How to Upgrade.pdf",
    },
  ],

  contact: {
    intro:
      "Ready to build something amazing together? I'm always excited to discuss freelance work, collaborations, or tech ideas.",
    availability: [
      { label: "Freelance Projects", open: true },
      { label: "Consulting / Collaborations", open: true },
      { label: "Open Source Contributions", open: true },
      { label: "Full-time Opportunities", open: false, note: "Not open — currently at InvoiceQ" },
    ],
    responseTime: "Response time: < 24 hours",
  },
};
