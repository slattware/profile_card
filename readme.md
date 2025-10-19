Profile Card Component
A simple, accessible, and responsive profile card built with semantic HTML, CSS (Flexbox), and vanilla JavaScript.
Features

Semantic HTML structure (article, header, figure, nav, section, ul/li).
Responsive layout: Stacks vertically on mobile (<480px), side-by-side avatar/content on tablet/desktop (≥768px).
Current time in milliseconds using Date.now().
Avatar with alt text.
Social links open in new tabs with proper rel attributes.
Keyboard-focusable links with visible focus outlines.
All required data-testid attributes included.

Running Locally

Clone the repo: 

    git clone https://github.com/slattware/profile_card.git

Open index.html in a browser (no build step needed).

Tests
Automated tests can target the data-testid attributes (e.g., via Cypress or Playwright). No tests included here, but the structure supports them.
Deployment
Hosted on Netlify or GitHub Pages.
Live URL: https://slattprofilecard.netlify.app
Repo: https://github.com/slattware/profile_card