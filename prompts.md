# AI Development Prompts

## Prompt 1 — Initial Project Setup
Build the initial frontend architecture for a professional café web application called “Brew & Bloom” using React and Vite.

The application should be a modern, premium café ordering and discovery experience. It must be frontend-only and must not use a backend, database, authentication service, or external API.

Create a clean, scalable component structure suitable for a production-quality React application.

The planned features are:

* Home/landing page
* Menu with categories and search
* Product details
* Shopping cart
* Favorites
* About café section
* Responsive navigation
* Responsive design for desktop, tablet, and mobile

For now, focus only on establishing the application architecture, reusable component structure, routing/page structure if appropriate, and clean styling foundations. Do not implement every feature yet.

Use semantic HTML and accessible React patterns. Keep components reusable and avoid unnecessary duplication.

Before writing code, briefly explain the proposed architecture and implementation plan. Then implement the foundation.

Do not add unnecessary libraries unless there is a clear reason to use them.

## Prompt 2 — Visual Foundation and Navigation
Now implement the visual foundation and navigation for the Brew & Bloom café application.

Requirements:

* Create a premium, modern café visual identity.
* Use a warm, sophisticated color palette appropriate for a specialty café.
* Establish consistent typography, spacing, border radii, shadows, and reusable CSS variables.
* Build a responsive header/navigation with the café brand, navigation links, and cart/favorites indicators where appropriate.
* Ensure the navigation works correctly with the existing React Router routes.
* Create a polished footer with useful navigation and café information.
* Make the layout responsive for desktop, tablet, and mobile.
* Use semantic HTML and accessible navigation patterns.
* Do not introduce unnecessary dependencies.
* Preserve the existing application architecture and avoid rewriting working functionality unnecessarily.

Before making changes, inspect the existing components and styles and reuse the current architecture where appropriate.

After implementing the changes:

1. Run the application.
2. Check the navigation at desktop and mobile widths.
3. Run `npm run build`.
4. Report any issues you find and fix them before finishing.

Do not implement the complete menu, checkout, or other major features yet. Focus specifically on the visual foundation, header/navigation, footer, and responsive layout.

## Prompt 3 — Premium Café Homepage
Now transform the Brew & Bloom homepage into a polished, premium café landing page.

The current implementation is functional but visually too simple. Treat this as a visual refinement task, not a request to rebuild the entire application.

Design direction:

* Premium specialty-coffee brand
* Warm, sophisticated, editorial feel
* Strong visual hierarchy
* Generous whitespace
* High-quality café photography using reliable image URLs or local assets where appropriate
* Elegant typography pairing
* Warm coffee-inspired neutral palette with one refined accent color
* Subtle shadows, borders, gradients, and hover transitions
* Avoid excessive rounded cards, excessive gradients, generic SaaS styling, and overly bright colors
* The design should feel like a real premium café website rather than a student dashboard

Homepage sections should include:

1. A strong hero section with a compelling headline, supporting text, primary CTA, secondary CTA, and prominent café imagery.
2. A featured drinks section with visually appealing product cards.
3. A short "Our Story" section with image and text.
4. A seasonal/special section that creates visual variety.
5. A café experience section highlighting qualities such as freshly roasted coffee, handcrafted drinks, and a welcoming atmosphere.
6. A final CTA section encouraging users to explore the menu.
7. A polished footer.

UX requirements:

* Maintain the existing React component architecture.
* Reuse ProductCard and existing shared components where appropriate.
* Use semantic HTML.
* Ensure buttons and links have clear hover and focus states.
* Maintain keyboard accessibility.
* Make the entire page responsive for desktop, tablet, and mobile.
* Do not add unnecessary dependencies.

Before modifying files, inspect the existing Home, Header, Footer, ProductCard, App.css, and index.css implementations.

After implementation:

1. Run the development server and inspect the homepage.
2. Check the layout at desktop and mobile widths.
3. Run `npm run build`.
4. Fix any build errors or obvious layout problems before finishing.
5. Briefly report what you changed and what you verified.
