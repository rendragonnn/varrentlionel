# Design Spec: Ultra Glass Enhancements

## Goal
Elevate the Varrent Lionel portfolio to an "Ultra Glass" aesthetic by adding dynamic background elements, glossy animations, and refined glass UI components.

## Proposed Features

### 1. Motion: Floating Glass Orbs
- **Implementation**: 3-4 large absolute-positioned `div` elements inside the main container.
- **Visuals**: 
  - `backdrop-filter: blur(80px)`
  - Translucent radial gradients (using `--accent-rgb`).
  - Subtle opacity (0.1 - 0.2).
- **Animation**: Smooth, infinite oscillation (`translate` and `scale`) using keyframes for a parallax-like depth.

### 2. Interaction: Glossy Reflection Sweep
- **Effect**: A diagonal "light sweep" line that passes over `.glass-card` elements.
- **Implementation**: A CSS `:after` pseudo-element on glass cards with a linear-gradient (`rgba(255,255,255,0.2)`) and an infinite 10s animation loop.

### 3. UI Refinement: Frosted Tags & Pills
- **Scope**: Project tags, Date labels, and Role tags.
- **Style**: 
  - `background: rgba(var(--text-rgb), 0.05)`
  - `backdrop-filter: blur(8px)`
  - Semi-transparent border.

### 4. Browser Environment: Glass Scrollbar & Selection
- **Scrollbar**: Thin (8px) track with a translucent thumb (`rgba(var(--text-rgb), 0.2)`).
- **Selection**: Custom background using `--accent` color with white text.

## Verification Plan
1. **Performance Check**: Verify that the background orbs and reflection sweeps don't cause frame drops during scrolling.
2. **Visual Consistency**: Ensure orbs don't obscure content (kept at high blur and low index).
3. **Contrast**: Check legibility of frosted tags across different themes.
4. **Theme Toggling**: Ensure all "Ultra Glass" elements react correctly to Dark/Light mode.
