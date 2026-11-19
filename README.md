# Client-ready static landing page starter

A reusable, responsive HTML/CSS/JavaScript landing page with centralized client configuration.

## Files
- `index.html` — semantic page structure, SEO/OpenGraph metadata, sections and form markup
- `styles.css` — responsive mobile-first styling, light/dark theme variables
- `script.js` — **edit `CLIENT_CONFIG` at the top** for each client

## Quick start
1. Extract the ZIP.
2. Open `index.html` in a browser, or use VS Code Live Server.
3. Open `script.js` and edit only the `CLIENT_CONFIG` object at the top.
4. Replace business details, images, service cards, portfolio cards, stats, social URLs, map query and brand colors.
5. Complete the setup below before publishing.

## Web3Forms contact form setup
1. Visit https://web3forms.com/ and create an access key for the client's receiving email.
2. Paste the key into `CLIENT_CONFIG.contact.web3formsAccessKey`.
3. Submit a real test enquiry on the deployed HTTPS website and confirm the email arrives.
4. Check spam/junk folders if the test email does not appear.

The form is static and sends submissions to Web3Forms; it does not require your own server. The access key is used in browser code, so treat it as a public form identifier, not a password. Configure allowed domains / spam protection in Web3Forms where available. Never put private API secrets in front-end JavaScript.

## WhatsApp
Set `whatsappNumber` to country code + phone number, digits only (example format: `919876543210`). Set `whatsappGreeting` to the pre-filled message. The visitor still chooses whether to send it in WhatsApp.

## Google Maps
Set `mapQuery` to the client's full address or business name and locality. The page builds a public Google Maps query embed. For a more controlled branded map, use an official Google Maps Embed API URL and check any API key/billing requirements that apply.

## SEO and social previews
Update `brand.title`, `brand.description`, `brand.canonicalUrl`, and `brand.socialImage` in `CLIENT_CONFIG`. Also keep the matching fallback metadata in `index.html` correct. Use an absolute public URL for the canonical URL and social preview image. Social platforms may cache previews; use their preview/debug tools to refresh after changing metadata.

## Before delivery
- Replace every demo text, placeholder image, sample statistic, social link, phone, email, address and map query.
- Only publish real testimonials, customer counts, qualifications and claims approved by the client.
- Use image assets you have permission to use; optimize and preferably self-host them.
- Add a favicon and a real social-preview image.
- Test keyboard navigation, contrast, form validation, mobile layout, all links and the form on the deployed site.
- Add privacy/cookie notices and analytics only where appropriate and with required consent.
- This starter is static: no CMS, database, appointment booking, payments or admin dashboard are included.
- Google Fonts and Unsplash demo images load over the internet. Download licensed assets and host locally if you need a fully self-hosted deployment.

## Hosting
This is plain static HTML, CSS and JavaScript and can be hosted on GitHub Pages, Netlify, Cloudflare Pages or Vercel static hosting. No build step is required.
