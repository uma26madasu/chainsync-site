# Implementation Plan - visual_overhaul.md

## Objective
Redesign the current landing page into a futuristic, high-end "Command Center" aesthetic while maintaining all existing technical content.

## Visual Direction
- **Theme**: "Agentic Dark Mode" (Background: #020617).
- **Elements**: Glassmorphism, Emerald Green (#10B981) glows.
- **Layout**: Bento Grid for features.
- **Typography**: Inter (already in use), responsive sizing.

## Implementation Steps

### Phase 1: Foundation (CSS Variables)
- [ ] Update `:root` variables in `assets/css/style.css`.
    - Set `--bg-primary` to `#020617`.
    - Set `--text-primary` to `#F8FAFC` (Slate 50).
    - Set `--text-secondary` to `#94A3B8` (Slate 400).
    - Set `--ocean-primary` and related accents to Emerald Green (#10B981).
    - Define glassmorphism utility classes.

### Phase 2: Navigation Redesign
- [ ] Refactor `<nav id="navbar">` in `index.html`.
    - Change from full-width bar to floating "Pill" design.
    - Center at top of viewport.
    - Apply blur effect (`backdrop-filter`).

### Phase 3: Hero Overhaul
- [ ] Update Hero content in `index.html`.
    - Headline: "Intelligent Environmental Response Automation".
    - Fix vertical clipping (`line-height: 1.2`, `overflow: visible`).
    - Apply glowing text effects.

### Phase 4: Features Bento Grid
- [ ] Refactor "How We Help" section in `index.html` and `style.css`.
    - Convert flex/grid layout to a true Bento Grid (`grid-template-areas`).
    - Style individual cards with glassmorphism and borders.

### Phase 5: Verification
- [ ] Use browser tool to verify spacing and responsiveness.
- [ ] Ensure specific content (Stats, "Slotify") remains intact.

## Technical Note
This plan adapts the requested "React + Tailwind + Shadcn" aesthetic to the existing HTML/CSS codebase to maintain project continuity and avoid disruption. All visual requirements (Glassmorphism, Bento Grid) will be implemented using modern CSS.
