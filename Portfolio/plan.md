## Web Portfolio with Bootstrap — Plan of Action and Decisions

This document explains the structure, design choices, and implementation plan for a minimal-yet-professional portfolio built with Bootstrap. The goal is a fast, accessible, single-page experience that you can easily customize and deploy.

### Objectives
- Provide a clean, responsive portfolio with sections for Home, About, Projects, and Contact .
- Use only four root-level files: `index.html`, `style.css`, `index.js`, `plan.md`.
- Leverage Bootstrap for grid, components, and sensible defaults; add light custom styling.
- Keep the app framework-free for easy hosting (GitHub Pages, Netlify, Vercel, static hosting).

### Deliverables
- `index.html`: Single-page layout with a fixed navbar, hero, about, projects, and contact sections.
- `style.css`: Small layer of theming (spacing, focus states, hero figure, nav active states).
- `index.js`: Non-intrusive behaviors (year auto-fill, ScrollSpy, basic contact form handling).
- `plan.md`: This planning and decision record.

---

## Architecture and Structure

### File Structure (root only)
- `index.html` — The entire portfolio markup and Bootstrap includes
- `style.css` — Custom CSS
- `index.js` — Minimal JavaScript
- `plan.md` — Documentation

No build tools or package managers are required. The site is portable, and all dependencies are loaded via CDN.

### Technology Decisions
- Bootstrap 5.3 (CDN): stable, modern, supports CSS variables, utilities, and accessible components.
- Vanilla JS: sufficient for ScrollSpy and light form UX; reduces complexity and dependencies.
- No images/assets repo-wide: placeholder images used; swap with your own when ready.

### Accessibility Targets
- Semantic HTML5 landmarks: `nav`, `main`, `section`, and `footer`.
- `aria-label` on sections for assistive tech clarity.
- Keyboard support: visible `:focus-visible` outline, accessible navbar, logical tab order.
- Color contrast: rely on Bootstrap defaults and ensure text on dark navbar is readable.
- Reduced motion: respect `prefers-reduced-motion` query.

### Performance Considerations
- CDN-hosted Bootstrap CSS/JS for fast delivery and caching.
- Minimal custom CSS and JS to keep payload small.
- Images referenced via placeholder service; replace with optimized, real assets (WebP/JPEG) later.

---

## Page Composition and Content Strategy

### Navbar
- Fixed-top `navbar` with brand and anchor links to in-page sections.
- Uses ScrollSpy to highlight the active section while scrolling.
- Mobile: collapsible menu via the default toggler and Bootstrap JS bundle.

### Hero (Home)
- Clear value statement and primary CTAs: “View Projects” and “Contact Me”.
- Decorative figure at right to balance layout; replace with a headshot or illustration later.

### About
- Short intro + bullet list of skills/tools/interests.
- Left-aligned image placeholder; replace with a real profile photo.

### Projects
- Card-based grid responsive across breakpoints.
- Each card: image, title, short description, and actions for Live Demo and Source.
- Replace placeholder links with actual project URLs and repositories.

### Contact
- Simple form (name, email, message) without backend integration.
- Client-side validation via HTML5 `required` + minimal JS feedback.
- When ready, integrate with a form backend (see Future Enhancements).

### Footer
- Copyright line with dynamic year.
- Quick anchor links back to sections.

---

## Styling Guidelines (`style.css`)
- Section spacing managed via `--section-padding-y` CSS variable.
- Smooth scrolling with `scroll-behavior: smooth`; auto-disabled for users preferring reduced motion.
- Fixed navbar compensation: top padding on `body` matches navbar height.
- Enhanced focus states for accessibility and clear active nav styles when ScrollSpy marks a section.

---

## Behavior Guidelines (`index.js`)
- Auto-insert current year into footer.
- Initialize Bootstrap ScrollSpy after DOMContentLoaded.
- Contact form: prevent default submit, validate, log payload, show quick success feedback, then reset.

---

## Customization Checklist
1. Replace “Your Name” with your real name/brand in `index.html`.
2. Update hero copy and CTAs to reflect your specialties.
3. Swap placeholder images with your own assets (optimize and add `alt` text).
4. Populate Projects with real titles, descriptions, live/source links, and tech tags.
5. Personalize About content: skills, tools, interests.
6. Adjust `--section-padding-y` in `style.css` for your spacing preferences.
7. Add social links (GitHub, LinkedIn, X, etc.) to the navbar or footer.

---

## Future Enhancements
- Dark mode toggle with CSS variables and `prefers-color-scheme` support.
- Project filtering using Bootstrap buttons and custom JS.
- Lazy-loaded images and responsive `srcset` for performance.
- Analytics (privacy-friendly) to measure engagement.
- Contact form backend: options include
  - Static form services (Formspree, Getform)
  - Serverless functions (Netlify, Vercel) forwarding to email/CRM
  - Full backend with rate limiting and spam protection

---

## Deployment
- You can deploy as plain static files. Options:
  - GitHub Pages: push to `main`, enable Pages for the repo, set root.
  - Netlify or Vercel: drag-and-drop the folder or connect your repo.
- Verify after deploy: responsive layout, section links, ScrollSpy, and form UX.

---

## Maintenance
- Keep content fresh: add new projects and update descriptions.
- Run accessibility checks periodically (e.g., Lighthouse, axe).
- Track broken links and replace placeholder assets.

---

## Rationale Summary
- Minimal footprint (4 files) keeps the portfolio easy to host and maintain.
- Bootstrap provides responsive, accessible foundations with little custom code.
- Clear sections communicate your value quickly, with obvious CTAs for work and contact.


