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
## Prompt 4 — Full Premium Café Experience
We are now taking the Brew & Bloom React application from a basic functional scaffold to a polished, production-quality café experience.

I have provided a visual reference image for the desired design direction. Use it ONLY as visual inspiration. Do not copy the exact layout, text, branding, imagery, or implementation. Create an original design for Brew & Bloom.

IMPORTANT:
The application must remain a frontend-only React/Vite application. Do not add a backend, database, authentication service, or external API.

First inspect the entire existing project and understand the current architecture before modifying anything. Preserve working functionality and improve the existing implementation rather than unnecessarily rewriting the project.

==================================================
DESIGN DIRECTION
==================================================

Create a premium specialty café aesthetic inspired by high-end coffee brands, editorial websites, and modern hospitality experiences.

Visual characteristics:
- Warm coffee-inspired color palette
- Espresso brown / deep charcoal
- Warm cream and ivory
- Muted caramel / copper accent
- Strong contrast
- Elegant editorial typography
- Large high-quality food and coffee photography
- Sophisticated whitespace
- Strong visual hierarchy
- Layered image sections
- Subtle shadows
- Thin borders
- Refined hover animations
- Smooth transitions
- Premium card layouts
- Asymmetrical compositions where appropriate
- Large typography for important headings
- Dark photographic hero sections with subtle overlays

Avoid:
- Generic SaaS dashboard styling
- Excessive rounded cards
- Excessive gradients
- Bright neon colors
- Generic purple/blue AI-app styling
- Excessive animations
- Lorem ipsum
- Placeholder-looking content
- Visually repetitive sections

The result should feel like a real premium café brand, not a student template.

==================================================
BRAND
==================================================

Brand name:
Brew & Bloom

Brand personality:
- Premium
- Warm
- Contemporary
- Welcoming
- Craft-focused
- Sophisticated but approachable

Create realistic café copy rather than placeholder text.

Example tone:
"Slow mornings. Bold coffee."
"Crafted with intention."
"Your daily ritual, refined."

You may create original copy that fits this personality.

==================================================
GLOBAL NAVIGATION
==================================================

Create a polished responsive navigation.

Desktop navigation should include:
- Brew & Bloom logo/wordmark
- Home
- Menu
- About
- Contact
- Favorites
- Cart
- Appropriate account/profile UI if useful

Mobile navigation should have:
- Brand
- Menu button
- Accessible mobile navigation drawer/menu

Show useful cart/favorites counts when items exist.

Navigation must use React Router and remain functional.

==================================================
HOME PAGE
==================================================

Create a visually impressive homepage.

Section 1 — Hero:
- Full-width photographic coffee background
- Dark overlay for readability
- Large elegant headline
- Short supporting copy
- Primary CTA: Explore Menu
- Secondary CTA: Our Story
- Subtle entrance animation
- Premium typography
- Visually strong composition inspired by the reference image

Section 2 — Featured Menu:
Show 3–4 featured products with:
- High-quality product image
- Product name
- Short description
- Price
- Rating
- Add to Cart button
- View Details button

Section 3 — Café Story:
Use an editorial split layout:
- Large café/coffee image
- Story text
- Small supporting statistics or highlights
- CTA to About page

Section 4 — Signature Experience:
Create an elegant section highlighting:
- Freshly roasted beans
- Handcrafted drinks
- Fresh pastries
- Welcoming atmosphere

Section 5 — Seasonal Collection:
Create a visually distinctive seasonal product section.

Section 6 — Customer Favorites:
Show selected highly rated products.

Section 7 — Final CTA:
Create a strong visual CTA encouraging users to explore the menu.

==================================================
MENU PAGE
==================================================

Build a complete interactive menu.

Categories:
- All
- Espresso
- Coffee
- Cold Drinks
- Tea
- Pastries
- Desserts

Features:
- Category filtering
- Search
- Product cards
- Price
- Rating
- Favorite toggle
- Add to cart
- View details

Add useful empty states when search/filter results are empty.

The filtering and search must actually work using React state.

==================================================
PRODUCT DETAILS
==================================================

Create a polished product detail page.

Include:
- Large product image
- Product name
- Description
- Rating
- Price
- Size selection
- Milk selection
- Optional add-ons
- Quantity selector
- Favorite button
- Add to Cart button

The final price should update when relevant options change.

Validate selections appropriately.

==================================================
CART
==================================================

Create a fully functional shopping cart.

Features:
- Product image
- Product name
- Selected options
- Quantity controls
- Remove item
- Subtotal
- Tax
- Order total
- Empty cart state
- Continue shopping
- Proceed to checkout

Cart state should persist using localStorage.

==================================================
CHECKOUT
==================================================

Create a frontend-only checkout experience.

Include:
- Customer name
- Email
- Phone
- Delivery/pickup selection
- Address when delivery is selected
- Payment method selection
- Order summary
- Form validation

Do NOT process real payments.

Instead, simulate successful order placement.

After valid submission:
- Generate a simple order number
- Show an order confirmation page
- Display order summary
- Provide a button to return to the menu/home

==================================================
FAVORITES
==================================================

Create a functional Favorites page.

Users should be able to:
- Add/remove products
- View favorite products
- Add favorite products to cart
- See a polished empty state

Persist favorites with localStorage.

==================================================
ABOUT PAGE
==================================================

Create a premium café story page.

Include:
- Brand story
- Mission
- Coffee philosophy
- Image sections
- Values
- Café experience
- CTA to menu

==================================================
CONTACT PAGE
==================================================

Create a polished contact page.

Include:
- Contact information
- Café address
- Opening hours
- Phone
- Email
- Contact form
- Form validation
- Social links

Since there is no backend, the form should simulate successful submission and display a success state.

==================================================
DATA
==================================================

Create a realistic local product dataset.

Include at least 15–20 products across the categories.

Each product should have:
- id
- name
- category
- description
- price
- rating
- image
- optional sizes
- optional milk choices
- optional add-ons
- featured flag

Use realistic product names and descriptions.

Do not use Lorem Ipsum.

==================================================
IMAGES
==================================================

Use high-quality café/coffee/pastry imagery.

Prefer reliable image URLs or appropriately organized local assets.

Images must:
- Match the product being displayed
- Have meaningful alt text
- Use object-fit appropriately
- Be responsive
- Avoid broken-image states

Do not repeatedly use the same image for unrelated products.

If external image URLs are used, centralize them in the product data rather than scattering URLs throughout components.

==================================================
RESPONSIVE DESIGN
==================================================

The entire application must work on:
- Large desktop
- Laptop
- Tablet
- Mobile

Pay particular attention to:
- Navigation
- Hero composition
- Product grids
- Product details
- Cart
- Checkout forms
- Typography
- Image proportions

Do not simply shrink desktop layouts. Recompose sections appropriately for mobile.

==================================================
ACCESSIBILITY
==================================================

Use:
- Semantic HTML
- Proper buttons and links
- Accessible form labels
- Keyboard-accessible controls
- Visible focus states
- Meaningful alt text
- Appropriate ARIA only when necessary
- Good color contrast

Do not use clickable divs where a button or link is appropriate.

==================================================
REACT ARCHITECTURE
==================================================

Maintain reusable components.

Prefer components such as:
- Header
- Footer
- Layout
- ProductCard
- RatingStars
- CategoryFilter
- SearchBar
- QuantitySelector
- ProductOptions
- CartItem
- OrderSummary
- Button
- FormField

Keep product data separate from presentation components.

Keep cart/favorites state centralized in the existing store/context architecture where appropriate.

Avoid duplicated logic.

Do not introduce unnecessary libraries.

==================================================
INTERACTION AND POLISH
==================================================

Add subtle, purposeful interactions:
- Button hover states
- Card hover effects
- Image zoom/scale on hover where appropriate
- Smooth transitions
- Favorite toggle feedback
- Cart feedback after adding an item
- Loading/empty/success states where appropriate

Do not over-animate the interface.

==================================================
VERIFICATION
==================================================

After implementation:

1. Run the development server.
2. Test every navigation route.
3. Test menu search.
4. Test category filtering.
5. Test favorites.
6. Test product customization.
7. Test add-to-cart.
8. Test cart quantity changes.
9. Test cart removal.
10. Test localStorage persistence.
11. Test checkout validation.
12. Test successful order simulation.
13. Test contact form validation.
14. Test mobile responsiveness.
15. Check the browser console for errors.
16. Run:

npm run build

Fix all build errors and obvious runtime issues before finishing.

At the end, provide a concise summary of:
- What was implemented
- What existing code was reused
- What was changed
- What was manually verified
- Any remaining limitations

Do not stop after creating static UI. The goal is a genuinely functional frontend café application.

## Prompt 5 — Premium Menu Redesign
Refine the existing Brew & Bloom Menu page into a significantly more premium, visually engaging café menu.

IMPORTANT:
This is a refinement of the existing Menu implementation. Do not rebuild the application architecture, remove existing functionality, or replace working React logic unnecessarily.

First inspect the current Menu.jsx, ProductCard.jsx, product data, App.css/index.css, and related components.

The current page is functional, but the visual design is too basic. Improve the visual experience while preserving all existing functionality.

DESIGN GOAL:
Make the page feel like a premium specialty coffee shop / boutique café website rather than a basic student React project.

1. MENU HERO
Create a visually rich menu introduction at the top:
- Use a wide, high-quality café/coffee image.
- Add a subtle dark overlay if necessary.
- Large elegant editorial heading: "Our Menu"
- Short original supporting copy about handcrafted drinks and fresh food.
- Use strong typography and visual hierarchy.
- Keep the section visually compact enough that users can reach the products without excessive scrolling.

2. CATEGORY NAVIGATION
Improve the category filter:
- All
- Espresso
- Coffee
- Cold Drinks
- Tea
- Pastries
- Desserts

Make the category controls look refined and intentional.
Use an obvious active state.
Make them horizontally scrollable on small screens rather than wrapping awkwardly.
Preserve the existing filtering functionality.

3. SEARCH
Improve the search experience:
- Create a visually integrated search field.
- Include an appropriate search icon if available without adding an unnecessary dependency.
- Make the input accessible with a proper label or accessible name.
- Search should continue to work with the existing product filtering logic.

4. PRODUCT GRID
Create a premium responsive product grid.

Desktop:
- 4 columns where space allows.

Tablet:
- 2–3 columns.

Mobile:
- 1–2 columns depending on viewport width.

Cards should have:
- Large, consistent image aspect ratio
- High-quality relevant product image
- Product category or subtle metadata
- Product name
- Short description
- Rating
- Price
- Add button
- Favorite control
- Details action

Use consistent image sizing and object-fit.

5. PRODUCT IMAGE QUALITY
Inspect the existing product dataset.

Do not use the same image for unrelated products if suitable alternatives are available.

Use appropriate café imagery for:
- Espresso
- Cappuccino
- Latte
- Cold coffee
- Tea
- Pastries
- Desserts

Centralize image URLs in the product data.

Every image must have meaningful alt text.

6. CARD INTERACTIONS
Add subtle premium interactions:
- Image scale on hover
- Slight card elevation
- Refined button hover states
- Favorite toggle feedback
- Smooth transitions

Do not use excessive animation.

7. EMPTY SEARCH STATE
If no products match the search/category:
Create an elegant empty state with:
- Friendly message
- Clear explanation
- Button to reset filters/search

8. VISUAL SYSTEM
Refine:
- spacing
- typography
- borders
- shadows
- background sections
- button styling
- card proportions
- responsive behavior

Use the existing Brew & Bloom warm coffee palette.

Avoid:
- excessive rounded cards
- generic SaaS styling
- excessive gradients
- bright colors
- huge unnecessary whitespace
- Lorem Ipsum
- placeholder text

9. ACCESSIBILITY
Ensure:
- semantic HTML
- keyboard accessible buttons
- visible focus states
- meaningful alt text
- accessible search
- accessible favorite controls

Do not use clickable divs where buttons or links are appropriate.

10. PRESERVE FUNCTIONALITY
The following must continue working:
- Search
- Category filtering
- Favorites
- Add to cart
- Product details
- React Router navigation

Do not replace the existing store/context implementation unless there is a clear bug that requires it.

11. VERIFICATION
After making the changes:
- Run the development server.
- Test search.
- Test every category.
- Test favorite toggling.
- Test Add to Cart.
- Test Details navigation.
- Check desktop width.
- Check mobile width.
- Check browser console for errors.
- Run npm run build.

Fix any obvious problems you find.

Finally, report:
- What you changed
- What existing functionality you preserved
- What you tested
- Any issues that remain

## Prompt 6 — Premium Homepage Experience
Now focus exclusively on transforming the Brew & Bloom Home page into the visual centerpiece of the application.

Do not rebuild the entire application and do not remove existing functionality.

First inspect the current Home.jsx, Header.jsx, Footer.jsx, ProductCard.jsx, product data, and global CSS.

The current Menu page has established the Brew & Bloom visual identity. The Home page should now feel significantly more impressive and premium.

DESIGN DIRECTION

Create an original premium specialty café homepage inspired by high-end coffee, hospitality, and editorial websites.

The design should have:
- warm cream and espresso tones
- deep coffee brown
- muted caramel/copper accent
- elegant serif display typography paired with a clean sans-serif
- large photographic compositions
- strong visual hierarchy
- sophisticated spacing
- editorial layouts
- subtle borders and shadows
- refined hover effects
- restrained animations

Do NOT make it look like:
- a SaaS dashboard
- a generic Bootstrap template
- a basic student project
- an AI-generated landing page with repetitive cards

HOME PAGE STRUCTURE

1. HERO

Create a large, visually dominant hero section.

Use a high-quality coffee/café image as the visual foundation.

Include:
- small eyebrow text such as "SPECIALTY COFFEE • EST. 2024"
- large editorial headline such as:
  "Your daily ritual,
   beautifully brewed."
- supporting copy
- primary CTA: "Explore the Menu"
- secondary CTA: "Our Story"

Use a dark overlay where necessary so text remains highly readable.

The hero should occupy a substantial portion of the initial viewport.

Include subtle visual details such as:
- small location/opening-hours information
- tasteful decorative typography
- subtle image treatment

Do not overcrowd the hero.

2. FEATURED COFFEE

Create a premium featured-products section.

Instead of simply displaying four identical cards, use an editorial composition.

Feature 3 signature drinks with:
- large relevant images
- product name
- category
- description
- price
- rating
- Add to Cart
- View Details

Use different images for every product.

3. BRAND STORY

Create an asymmetric split section.

One side:
- large atmospheric café image

Other side:
- eyebrow "OUR STORY"
- large heading
- 2–3 paragraphs of original brand copy
- small supporting statistics/highlights
- CTA "Discover Our Story"

4. EXPERIENCE SECTION

Create a visually distinctive section with three or four café experiences:

"Roasted with intention"
"Handcrafted daily"
"Made for slow moments"
"Fresh from the oven"

Each should have a small icon or elegant visual element.

Avoid turning this into generic SaaS cards.

5. SEASONAL FEATURE

Create a large editorial promotional section for a seasonal drink.

For example:
"Summer at Brew & Bloom"

Include:
- large product image
- product name
- description
- price
- CTA
- decorative visual treatment

6. CUSTOMER FAVORITES

Create a refined product section showing several popular products.

Reuse the existing ProductCard component where appropriate.

7. TESTIMONIALS

Create a small, elegant customer testimonial section.

Use 2–3 realistic fictional customer testimonials.

Do not claim they are real customers.

8. FINAL CTA

Create a visually strong final section.

Example:
"Make today a little slower."

Include:
"Explore our menu"

Use an atmospheric café background image.

9. FOOTER

Ensure the existing footer fits naturally with the new homepage.

VISUAL REQUIREMENTS

The homepage should NOT be a sequence of identical rectangular cards.

Use variation:
- full-width image sections
- split layouts
- overlapping elements
- large typography
- editorial spacing
- asymmetric compositions
- restrained cards

Images are extremely important.

Use appropriate high-quality café imagery for every section.

Do not reuse one generic coffee image for multiple unrelated products/sections.

Centralize image URLs in the product/data structure where appropriate.

All images must have meaningful alt text.

RESPONSIVE DESIGN

Desktop should feel expansive and editorial.

Tablet should preserve hierarchy.

Mobile should intelligently recompose sections rather than simply shrinking them.

The hero must remain visually strong on mobile.

ACCESSIBILITY

Maintain:
- semantic HTML
- keyboard accessibility
- visible focus states
- accessible buttons and links
- meaningful alt text
- sufficient color contrast

FUNCTIONALITY

Existing functionality must continue working:
- React Router
- Menu navigation
- Add to Cart
- Favorites
- Product Details

CTA buttons must navigate to the correct pages.

VERIFICATION

After implementation:

1. Run the development server.
2. Inspect the homepage at desktop width.
3. Inspect it at mobile width.
4. Test every CTA.
5. Test navigation to Menu and About.
6. Check for console errors.
7. Run:

npm run build

Fix obvious visual, runtime, or build issues.

At the end, report:
- What was changed
- What components were reused
- What functionality was preserved
- What was manually tested
- Any remaining limitations