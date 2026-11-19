/* =========================================================
   SITE CONFIGURATION — Edit client details here in 2 minutes
   ========================================================= */
   
const SITE_CONFIG = {
  brandName: "AUERLIA ESTATE",
  brandInitial: "A",
  primaryColor: "#B8924A",      // Swap to match client logo
  primaryHover: "#9E7B38",

  // Hero Section
  heroEyebrow: "THE ART OF EXCEPTIONAL LIVING",
  heroTitleStart: "Find a Place",
  heroTitleAccent: "Beyond Ordinary.",
  heroSubtitle:
    "Discover an exclusive collection of extraordinary residences, thoughtfully selected for those who appreciate timeless elegance.",
  heroImage: "images/hero.jpg",
  heroBadgeTitle: "Fast & reliable",
  heroBadgeSub: "Tailored to your goals",
  proofTitle: "Trusted by local businesses",
  proofSubtitle: "Delivering reliable work since 2016",

  // Value Strip
  stripLabel: "BUILT WITH CARE & CRAFT",
  stripItems: ["QUALITY", "CARE", "EXPERIENCE", "TRUST"],

  // Services (3 to 6 items)
  servicesSubtitle:
    "Showcase your main services. Keep each description specific, clear, and focused on customer benefits.",
  services: [
    {
      title: "Service One",
      description:
        "Describe the service and the exact problem it solves for your customers in plain, friendly language.",
      icon: "sparkles"
    },
    {
      title: "Service Two",
      description:
        "Explain your second core offering and highlight what makes your approach faster or more dependable.",
      icon: "layers"
    },
    {
      title: "Service Three",
      description:
        "Highlight a third specialty or ongoing support option that keeps clients coming back.",
      icon: "shield"
    }
  ],

  // Portfolio / Selected Work
  workSubtitle: "Explore a collection of distinctive residences, selected for their architecture, character and exceptional locations.",
portfolio: [
  {
    title: "The Aurelia Villa",
    type: "LUXURY VILLA • MARBELLA",
    beds: "4 Bedrooms",
    baths: "4 Bathrooms",
    sqft: "5,200 sq. ft.",
    image: "images/properties1.jpg",
  },
  {
    title: "The Grand Penthouse",
    type: "PENTHOUSE • DUBAI MARINA",
    beds: "3 Bedrooms",
    baths: "3 Bathrooms",
    sqft: "3,800 sq. ft.",
    image: "images/properties2.jpg",
  },
  {
    title: "The Estate Residence",
    type: "PRIVATE ESTATE • SURREY",
    beds: "5 Bedrooms",
    baths: "5 Bathrooms",
    sqft: "7,200 sq. ft.",
    image: "images/properties3.jpg",
  },
],

  // About Section
  aboutImage:
    "images/about.jpg",
  aboutBadge: "Client-first approach",
  aboutTitleStart: "Good work begins with",
  aboutTitleAccent: "understanding people.",
  aboutDescription:
    "Tell your story. Explain what you believe in, how you work, and why customers choose your business. Keep it genuine and easy to understand.",
  aboutPoints: [
    "A personal, transparent approach from day one",
    "Clear communication at every milestone",
    "Quality you can feel confident in"
  ],
  stats: [
    { value: "10+", label: "Years of experience" },
    { value: "250+", label: "Happy customers" },
    { value: "98%", label: "Client satisfaction" }
  ],

  // Contact & Integrations
  phone: "+44 20 7946 0192",
  email: "advisory@aureliaestates.com",
  address: "Mayfair, London ",
  whatsappNumber: "918194827185", // Country code + number (no + or spaces)
  whatsappMessage: "Hi! I visited your website and would like to inquire about your services.",
  googleMapEmbedUrl:
    "https://www.google.com/maps?q=Mohali,Punjab,India&output=embed",
  web3FormsAccessKey: "ea84e4be-e322-48ed-90dd-905a823e945c",

  socials: [
    { label: "Instagram", url: "https://instagram.com" },
    { label: "LinkedIn", url: "https://linkedin.com" },
    { label: "Facebook", url: "https://facebook.com" }
  ],

  ctaTitle: "Let's make your next move a great one."
};

/* =========================================================
   ICON LIBRARY (Lightweight Inline SVGs)
   ========================================================= */
const ICONS = {
  sparkles:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3z"/></svg>',
  layers:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
  shield:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  check:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'
};

/* =========================================================
   HYDRATE PAGE CONTENT FROM SITE_CONFIG
   ========================================================= */
function applySiteConfig() {
  const root = document.documentElement;
  if (SITE_CONFIG.primaryColor) {
    root.style.setProperty("--primary", SITE_CONFIG.primaryColor);
  }
  if (SITE_CONFIG.primaryHover) {
    root.style.setProperty("--primary-hover", SITE_CONFIG.primaryHover);
  }

  document.title = `${SITE_CONFIG.brandName} — Official Website`;

  // Brand & Footer
  setText("brand-mark", SITE_CONFIG.brandInitial);
  setText("nav-brand-name", SITE_CONFIG.brandName);
  setText("footer-brand-mark", SITE_CONFIG.brandInitial);
  setText("footer-brand-name", SITE_CONFIG.brandName);
  setText(
    "footer-copyright",
    `© ${new Date().getFullYear()} ${SITE_CONFIG.brandName}. All rights reserved.`
  );

  // Hero
  setText("hero-eyebrow-text", SITE_CONFIG.heroEyebrow);
  const heroTitle = document.getElementById("hero-title");
  if (heroTitle) {
    heroTitle.innerHTML = `${SITE_CONFIG.heroTitleStart} <span class="accent">${SITE_CONFIG.heroTitleAccent}</span>`;
  }
  setText("hero-subtitle", SITE_CONFIG.heroSubtitle);
  setText("hero-badge-title", SITE_CONFIG.heroBadgeTitle);
  setText("hero-badge-sub", SITE_CONFIG.heroBadgeSub);
  setText("proof-title", SITE_CONFIG.proofTitle);
  setText("proof-subtitle", SITE_CONFIG.proofSubtitle);
  const heroImg = document.getElementById("hero-image");
  if (heroImg && SITE_CONFIG.heroImage) heroImg.src = SITE_CONFIG.heroImage;

  // Value Strip
  setText("strip-label", SITE_CONFIG.stripLabel);
  const stripContainer = document.getElementById("strip-items");
  if (stripContainer && Array.isArray(SITE_CONFIG.stripItems)) {
    stripContainer.innerHTML = SITE_CONFIG.stripItems
      .map((item) => `<span>${item}</span>`)
      .join("");
  }

  // Services
  setText("services-subtitle", SITE_CONFIG.servicesSubtitle);
  const servicesGrid = document.getElementById("services-grid");
  if (servicesGrid && Array.isArray(SITE_CONFIG.services)) {
    servicesGrid.innerHTML = SITE_CONFIG.services
      .map(
        (service) => `
        <article class="service-card">
          <div class="service-icon">${ICONS[service.icon] || ICONS.sparkles}</div>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
        </article>`
      )
      .join("");
  }

  // Portfolio
  setText("work-subtitle", SITE_CONFIG.workSubtitle);
  const portfolioGrid = document.getElementById("portfolio-grid");
  if (portfolioGrid && Array.isArray(SITE_CONFIG.portfolio)) {
    portfolioGrid.innerHTML = SITE_CONFIG.portfolio.map((item) => `
  <article class="portfolio-card">
    <div class="portfolio-image">
      <img src="${item.image}" alt="${item.title}" loading="lazy" />
    </div>
    <div class="portfolio-body">
      <h3>${item.title}</h3>
      <span class="property-type">${item.type}</span>
      <div class="property-specs">
        <div class="spec-row">
          <span>${item.beds}</span>
          <span class="spec-divider">|</span>
          <span>${item.baths}</span>
        </div>
        <div class="spec-row">
          <span>${item.sqft}</span>
        </div>
      </div>
      <a href="#contact" class="btn-property" data-property="${item.title}">VIEW PROPERTY &rarr;</a>
    </div>
  </article>
`).join("");
  }

  // About
  const aboutImg = document.getElementById("about-image");
  if (aboutImg && SITE_CONFIG.aboutImage) aboutImg.src = SITE_CONFIG.aboutImage;
  setText("about-badge", SITE_CONFIG.aboutBadge);
  const aboutTitle = document.getElementById("about-title");
  if (aboutTitle) {
    aboutTitle.innerHTML = `${SITE_CONFIG.aboutTitleStart} <span class="accent">${SITE_CONFIG.aboutTitleAccent}</span>`;
  }
  setText("about-description", SITE_CONFIG.aboutDescription);

  const aboutPoints = document.getElementById("about-points");
  if (aboutPoints && Array.isArray(SITE_CONFIG.aboutPoints)) {
    aboutPoints.innerHTML = SITE_CONFIG.aboutPoints
      .map((pt) => `<li>${ICONS.check}<span>${pt}</span></li>`)
      .join("");
  }

  const aboutStats = document.getElementById("about-stats");
  if (aboutStats && Array.isArray(SITE_CONFIG.stats)) {
    aboutStats.innerHTML = SITE_CONFIG.stats
      .map(
        (s) => `
        <div class="stat-item">
          <strong>${s.value}</strong>
          <span>${s.label}</span>
        </div>`
      )
      .join("");
  }

  // Contact Details
  setText("contact-phone", SITE_CONFIG.phone);
  const phoneLink = document.getElementById("contact-phone-link");
  if (phoneLink) phoneLink.href = `tel:${SITE_CONFIG.phone.replace(/\s+/g, "")}`;

  setText("contact-email", SITE_CONFIG.email);
  const emailLink = document.getElementById("contact-email-link");
  if (emailLink) emailLink.href = `mailto:${SITE_CONFIG.email}`;

  setText("contact-address", SITE_CONFIG.address);

  // Social Links
  const socialRow = document.getElementById("social-links");
  if (socialRow && Array.isArray(SITE_CONFIG.socials)) {
    socialRow.innerHTML = SITE_CONFIG.socials
      .map(
        (soc) =>
          `<a class="social-pill" href="${soc.url}" target="_blank" rel="noopener noreferrer">${soc.label}</a>`
      )
      .join("");
  }

  // Google Map Embed
  const mapFrame = document.getElementById("google-map");
  const mapWrap = document.getElementById("map-wrap");
  if (mapFrame && SITE_CONFIG.googleMapEmbedUrl) {
    mapFrame.src = SITE_CONFIG.googleMapEmbedUrl;
  } else if (mapWrap) {
    mapWrap.style.display = "none";
  }

  // Web3Forms Access Key
  const keyInput = document.getElementById("web3forms-key");
  if (keyInput) keyInput.value = SITE_CONFIG.web3FormsAccessKey;

  // CTA Banner
  setText("cta-title", SITE_CONFIG.ctaTitle);

  // WhatsApp Floating Button
  const waBtn = document.getElementById("whatsapp-btn");
  if (waBtn && SITE_CONFIG.whatsappNumber) {
    const encodedMsg = encodeURIComponent(SITE_CONFIG.whatsappMessage || "");
    waBtn.href = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodedMsg}`;
  } else if (waBtn) {
    waBtn.style.display = "none";
  }
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el && value !== undefined) el.textContent = value;
}

/* =========================================================
   LIGHT / DARK MODE WITH LOCALSTORAGE PERSISTENCE
   ========================================================= */
function initThemeToggle() {
  const savedTheme = localStorage.getItem("site-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", initialTheme);

  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("site-theme", next);
  });
}

/* =========================================================
   MOBILE NAVIGATION DRAWER
   ========================================================= */
function initMobileNav() {
  const btn = document.getElementById("mobile-menu-btn");
  const drawer = document.getElementById("mobile-nav");
  if (!btn || !drawer) return;

  btn.addEventListener("click", () => {
    drawer.classList.toggle("open");
  });

  drawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => drawer.classList.remove("open"));
  });
}

/* =========================================================
   WEB3FORMS CONTACT FORM SUBMISSION
   ========================================================= */
function initContactForm() {
  const contactForm = document.getElementById("contact-form");
  if (!contactForm) return;

  const submitBtn =
    document.getElementById("submit-btn") ||
    contactForm.querySelector('button[type="submit"]');
  const formStatus =
    document.getElementById("form-status") ||
    contactForm.querySelector(".form-note");

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const originalBtnText = submitBtn ? submitBtn.innerHTML : "";
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "SENDING REQUEST...";
    }
    if (formStatus) formStatus.textContent = "";

    const formData = new FormData(contactForm);
    formData.append("access_key", SITE_CONFIG.web3FormsAccessKey);
    formData.append("subject", "New Private Viewing Request — Aurelia Estates");
    formData.append("from_name", "Aurelia Estates Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        if (formStatus) {
          formStatus.textContent = "Thank you. Your private viewing request has been received.";
          formStatus.style.color = "var(--primary)";
        }
        contactForm.reset();
      } else {
        if (formStatus) {
          formStatus.textContent = result.message || "Something went wrong. Please try again.";
          formStatus.style.color = "#C94A4A";
        }
      }
    } catch (err) {
      if (formStatus) {
        formStatus.textContent = "Network error. Please check your connection and try again.";
        formStatus.style.color = "#C94A4A";
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    }
  });
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-property");
  if (!btn) return;
  const select = document.getElementById("residence");
  if (select && btn.dataset.property) {
    select.value = btn.dataset.property;
  }
});

/* Initialize everything on DOM ready */
document.addEventListener("DOMContentLoaded", () => {
  applySiteConfig();
  initThemeToggle();
  initMobileNav();
  initContactForm();
});
