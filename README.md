# Aurelia Estates — Luxury Real Estate Concept Website

An editorial-style luxury real estate website built with semantic HTML, modern CSS, and Vanilla JavaScript. Designed to showcase architectural residences, private property advisory, and a concierge viewing experience with full light/dark mode support.

🔗 **Live Demo:** [https://yourusername.github.io/aurelia-estates/](https://yourusername.github.io/aurelia-estates/)

![Aurelia Estates Preview](images/preview.png)

## ✨ Key Features

- **Editorial Design System:** Warm ivory, deep charcoal, and brushed gold palette paired with *Playfair Display* and *DM Sans* typography.
- **Persistent Light & Dark Mode:** Theme switcher powered by CSS custom properties (`[data-theme="dark"]`) and `localStorage`.
- **Functional Private Viewing Form:** Integrated with [Web3Forms](https://web3forms.com/) for serverless email delivery, complete with honeypot spam protection and live submission states.
- **SEO & Social Sharing Ready:** Includes OpenGraph tags, Twitter Cards, a custom inline SVG monogram favicon, and `RealEstateAgent` JSON-LD structured data.
- **Centralized Content Config:** Core brand details, contact info, and listings are managed cleanly via `SITE_CONFIG` in `script.js`.
- **Responsive Layout:** Adapts across desktop, tablet, and mobile viewports using CSS Grid and Flexbox.

## 🛠️ Tech Stack

- **HTML5** — Semantic structure and accessible form controls
- **CSS3** — Custom properties, responsive media queries, dark mode theming
- **Vanilla JavaScript (ES6+)** — DOM rendering, theme persistence, async Fetch API form handling
- **Web3Forms** — Serverless contact form backend

## 📂 Project Structure

```text
aurelia-estates/
├── index.html      # Main page markup, SEO metadata, and JSON-LD schema
├── styles.css      # Design tokens, layout styles, responsive rules, and dark mode
├── script.js       # Site configuration, interactivity, theme toggle, and form logic
├── images/         # Property photography and social preview assets
└── README.md
```

## 🚀 Running Locally

1. Clone the repository:
   ```bash
   git clone [https://github.com/yourusername/aurelia-estates.git](https://github.com/yourusername/aurelia-estates.git)
   ```
2. Open `index.html` directly in your browser (or launch with VS Code's **Live Server** extension).
3. To test live email submissions, add your own key from [Web3Forms](https://web3forms.com/) to `web3FormsAccessKey` in `script.js`.

## 👤 Author

**Tarun Kanojia**  
- GitHub: https://github.com/tarunkanojia98
- LinkedIn: https://www.linkedin.com/in/tarun-kanojia-a08458188/

---

*Note: Aurelia Estates is a fictional luxury real estate brand created as a front-end design and development portfolio project.*
