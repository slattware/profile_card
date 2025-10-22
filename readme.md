Frontend Wizards Multi-Page Application
A multi-page web application featuring a Profile Card (Stage 0), Contact Us page, and About Me page (Stage 1). Built with semantic HTML, CSS (Flexbox), and vanilla JavaScript, ensuring accessibility, responsiveness, and testability.
Features
Profile Card (Stage 0)

Semantic HTML with article, figure, nav, section, etc.
Responsive layout: vertical stack on mobile, side-by-side on tablet/desktop.
Displays current time in milliseconds via Date.now().
Accessible avatar with alt text.
Social links open in new tabs with rel="noopener noreferrer".
Keyboard navigable with visible focus states.
All required data-testid attributes for automated testing.

Contact Us Page (Stage 1)

Form with fields: name, email, subject, message, and submit button.
Client-side validation:
All fields required.
Email must match valid format.
Message must be ≥10 characters.


Accessible with labels, aria-describedby for errors, and keyboard navigation.
Success message shown only on valid submission.
All required data-testid attributes.

About Me Page (Stage 1)

Sections for bio, goals, low-confidence areas, note to future self, and extra thoughts.
Semantic HTML with main, section, h2, ul, etc.
Responsive and accessible with proper headings and list structures.
All required data-testid attributes.

General

Consistent navigation bar across all pages.
Responsive design for mobile (<480px), tablet (≥768px), and desktop.
Accessible with keyboard navigation, focus outlines, and ARIA attributes.
Modular CSS with custom properties and Flexbox.
Vanilla JavaScript for dynamic behavior (time display, form validation).

Running Locally

Clone the repo: git clone https://github.com/slattware/profile_card.git
Open index.html, contact.html, or about.html in a browser (no build step needed).

Tests
Automated tests can target the data-testid attributes (e.g., via Cypress or Playwright). No tests included here, but the structure supports them.
Deployment
Hosted on Netlify or GitHub Pages.
Live URL: https://slattprofilecard.netlify.app
Repo: https://github.com/slattware/profile_card