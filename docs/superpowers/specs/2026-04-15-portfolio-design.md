# Portfolio Revamp Design Spec: Dark Mode + Liquid Glass Bento Grid

## Overview
This document specifies the design for the complete revamp ("factory reset") of the Varrent Lionel portfolio website. The application will be rebuilt, focusing heavily on a modern, high-end visual aesthetic.

## Visual Identity
*   **Theme**: Dark Mode & Cyber/Industrial foundation.
*   **Aesthetic Style**: Liquid Glass & Modern (Glassmorphism). 
    *   Dark, pure black (`#000000`) or deep charcoal (`#09090b`) backgrounds.
    *   Subtle neon/vibrant gradients (e.g., cyan/purple/blue) blurring behind frosted glass elements.
    *   Translucency, glowing thin borders, and drop-shadows to provide depth.
*   **Typography**: Clean modern sans-serif (e.g., *Inter* or *Outfit*) paired with a monospace font (e.g., *JetBrains Mono*) for tech-centric details.

## Layout Structure
*   **Type**: Bento Box (Grid Dashboard)
*   **Description**: A responsive CSS Grid container where content is organized into various sized "glass cards" or widgets.
*   **Key Grid Components (Bento Boxes)**:
    1.  **Hero/Profile Box (Large)**: Name, role, and a punchy headline.
    2.  **Tech Stack Box**: A collection of tech icons or a scrolling marquee.
    3.  **Projects Showcase Box**: Mini-cards or links to key projects with hover effects.
    4.  **Contact/Social Box**: Links to GitHub, LinkedIn, Email, etc.
    5.  **Decoration Box**: A cool interactive element, such as a particle interaction using `tsparticles` (already in `package.json`).

## Interactions & Animations
*   **Micro-animations**: Smooth hover states on all bento boxes (slight scale up, border glow intensifies).
*   **Entrance**: Staggered fade-up entry animation when the page loads (each box appears sequentially).
*   **Lighting**: Mouse movement tracking (e.g., a subtle glow effect that follows the cursor over the cards).

## Architectural Boundaries
*   Main Application: React + Vite (reusing the current setup).
*   Styling: Vanilla CSS with modern CSS Grid and custom variables (`index.css`), sticking strictly to the *Rich Aesthetics* rules (NO generic styling).
*   Clean component separation: Each Bento Box will ideally be its own independent React component to maintain a tidy structure.

## Next Steps
Once this specification is approved, we will transition to creating a technical Implementation Plan.
