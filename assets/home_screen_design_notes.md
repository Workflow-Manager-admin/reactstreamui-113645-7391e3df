# Home Screen Design Notes

## 1. Overall Layout
- **Full-width, single-page layout.**
- **Background:** Deep navy/dark purple gradient with lighter geometric and star accents.
- **Layout Method:** CSS Flexbox for main container alignment, CSS Grid or Flex for brand carousel.
- **Responsiveness:** The content is centered and boxed for desktops; aspects of grid/flex can be adapted for smaller screens.

---

## 2. Structural Regions & Containers

### a. HEADER
- **Height:** ~70px
- **Background:** Matches overall dark main bg (#0e1037 or similar).
- **Left:** App logo (white/purplish icon + brand name "scener").
- **Center:** Navigation links ("Premium", "About", "How it works").
  - **Style:** Horizontal list, spaced ~36px apart, white/light-grey text.
- **Right:** Call to Action button ("Get Scener")
  - **Button Style:** Rounded pill shape, solid magenta (#ef3be9 or similar), white text, height ~38px.

### b. MAIN HERO CONTAINER (centered box)
- **Rounded container,** large with two main columns:
  - **Left:** Video preview screen (laptop mockup).
      - Screen showing video still, sidebar chat/participant overlay.
      - Box-shadow/glow effect beneath laptop image.
  - **Right:** Large headline & CTA
      - **Headline:** "Watch TV & movies together"
      - **Description:** Brief (one line) white or light grey text.
      - **Buttons:** 
        - "Get Scener" (magenta, filled, pill shape)
        - "Learn More" (transparent w/ magenta text outline)
      - Spacing: Headline ~32px above description, 24px gap above CTA buttons, 16px gap between buttons.

### c. BRAND CAROUSEL / FOOTER-LIKE STRIP
- **Dark background**, rectangular overlay at the bottom of hero section.
- **Brand logos:** Horizontally aligned (Netflix, Disney+, Hulu, Prime Video, Max, YouTube, Funimation, HBO), white/light logos, evenly spaced.
- Height: ~70px–90px; padding ~24px top/bottom.
---

## 3. Color Palette

- **--bg-canvas:** #0e1037 (dark navy/purple background)
- **--accent:** #ef3be9 (magenta/vibrant pink used for buttons and highlights)
- **--white:** #ffffff (all text headlines, icons, CTA logo)
- **--light-grey:** #bfc4df (secondary text and nav links)
- **--brand-logo-grey:** #2b294e (slider bar under brands)
- **--button-outline:** transparent (secondary CTA), #ef3be9 border
- **--star-accent:** subtle lavender, #553dba or similar (background geometric overlay)
---

## 4. Typography

- **Font-family:** Assume "Helvetica Neue, Arial, sans-serif"
- **Header (logo/appname):** semi-bold, 22-26px, letter-spacing +0.4px, white.
- **Navigation:** Regular, 16px, letter-spacing +0.2px, light grey.
- **Main headline:** Bold, 36-42px, pure white.
- **Description:** Regular, 20px, #bfc4df.
- **Button text:** Bold, 16px, white (filled button), magenta (outline button), all-uppercase.
- **Brand logos:** White, high-contrast, SVG preferred.
---

## 5. Spacing & Sizing

- **Header padding:** 36px left and right, 16px top/bottom.
- **Main container:** Margin-top ~50px from header, horizontal padding ~48px, internal padding ~40px each direction.
- **Between columns:** 48px gap (between video mockup and text).
- **Hero box border-radius:** ~24px.

---

## 6. Navigation

- **Header navigation bar:** Horizontal, left-aligned logo, centered nav, right-aligned CTA button.
- **Navigation Items:** Highlight slightly on hover (opacity or shift color to magenta).

---

## 7. Interactive Elements

- **Primary Button:** "Get Scener" — magenta background, white text, rounded pill, hover: darken magenta slightly.
- **Secondary Button:** "Learn More" — transparent w/ magenta border, magenta text, rounded pill, hover: solid magenta bg, white text.
- **Brand Logos:** Non-interactive, possibly carousel/scrollable if more than fit on one line (responsively).
---

## 8. Image & Icon Placement

- **Laptop/video image:** Left of hero, ~310x200px (adapt to screen)
- **Brand logos:** All SVG or high-res PNG, ~40px tall, padded horizontally.

---

## 9. Responsive Design Notes

- On mobile/tablet: 
  - Navigation collapses to hamburger or stacked.
  - Hero columns stack vertically (video above text).
  - Brand logos flow into 2-3 rows.

---

## 10. Additional Notes

- **Decorative star/geometric elements:** Use SVG or CSS background, subtle, never overpowering core content.
- Consistent use of shadow/elevation to separate hero and brand strip.

---

**This design guide should be sufficient to reproduce the provided UI's layout, structure, and visual style in code with high fidelity.**
