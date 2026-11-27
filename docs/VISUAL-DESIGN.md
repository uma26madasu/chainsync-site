# ChainSync visual refinement

## Direction

A precise infrastructure schematic, using the existing navy, pale blue, and teal brand. Dark surfaces anchor the homepage hero and closing pilot invitation. Light surfaces keep the content, technical reference, and inquiry form easy to read. No design is generated with or claimed to come from Google Stitch; this implementation uses the existing React/Vite stack and installed Lucide icons.

## Principles implemented

- Hierarchy: a clear product message, two primary evaluation paths, and a supporting partnership link before detailed explanations.
- Progressive disclosure: a selectable architecture illustration explains Connect, Understand, and Coordinate without requiring the visitor to read the full reference first.
- Wayfinding: page-section links and homepage links to the restored agent catalog and stack. Main navigation calls the technical destination Technology.
- Restraint: a subtle schematic grid, original line illustrations for the two industries, tinted surfaces, and a consistent teal accent rather than glow effects or large decorative animations.
- Readability: balanced headings, bounded paragraphs, consistent font weights, and a more deliberate spacing scale. Mobile architecture controls stack vertically to preserve readable labels and 44-pixel targets.
- Consistency: shared navigation, secondary-page headings, cards, forms, stack tables, agent disclosures, and footer use the same surface and border system.
- Interaction: visible pressed state and an announced detail panel for architecture layer buttons; focus indicators; brief entry/hover motion with reduced-motion alternatives. There is no auto-advancing illustration.

## Content and functionality inventory

Preserved from main:

- All 17 agent names and expandable responsibilities on Platform.
- Three-layer platform architecture diagram.
- Expandable stack explanations, 14 technology reference rows, and 13 API reference paths.
- Interactive chatbot with typed questions, quick replies, and predefined answers.
- Existing EmailJS inquiry service/template/public-key flow and all four inquiry intents.
- Industry, pilot, partnership, security, about, privacy, insights, roadmap, and illustrative walkthrough routes.
- Incident portal routes and external backend request contract.

No backend, delivery, pricing, security, certification, or product capability changes are introduced. Schematic controls change explanatory text only. There are no simulated incident metrics, customer logos, or fake product dashboards.

## Changed files

- `client/src/components/HeroArchitecture.tsx`: new interactive explanatory schematic.
- `client/src/pages/Home.tsx`: redesigned hero, operational value layout, industry illustrations, technical links, and pilot invitation.
- `client/src/components/Header.tsx`: optional dark presentation, clearer Technology label, and close mobile menu when resizing to desktop.
- `client/src/marketing-design.css`: scoped marketing presentation and responsive rules.
- `client/src/main.tsx`: imports the marketing stylesheet after base styles.
- `docs/VISUAL-DESIGN.md`: design intent, preserved functionality, and validation limits.

## Verification

TypeScript, production build, and the eight existing tests passed after implementation. Tests cover the existing inquiry and chatbot behavior and metadata output. The final CSS adjustment receives another production build. No new libraries or dependencies were introduced.

The managed preview failed to open browser port 4173 because its relay timed out. Browser screenshots, mobile rendering, keyboard interaction, and actual assistive-technology behavior remain unverified. CSS breakpoints and semantics have been implemented but are not claimed as a browser QA pass. Review on staging before production release. Nothing is merged or deployed by this change.
