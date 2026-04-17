# Design Spec: Experience Milestone Stack

## Goal
Redesign the "Experience" section of the Varrent Lionel portfolio to move away from a rigid grid into a high-end, card-based "Milestone Stack" using premium glassmorphism.

## Architecture & Layout

### 1. Section Structure
- **Container**: A single-column vertically stacked layout.
- **Categorization**: 
  - `Work Experience` Group
  - `Organizations` Group
  - Each group starts with a minimalist, uppercase, tracking-wide header.

### 2. The Experience Card (`.exp-glass-card`)
- **Card Material**:
  - `backdrop-filter: blur(24px) saturate(180%)`
  - `background: rgba(var(--bg-rgb), 0.4)`
  - `border: 1px solid rgba(var(--text-rgb), 0.1)`
  - `box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2)`
- **Internal Layout**:
  - Flexbox/Grid container.
  - **Logo Area (Left)**: 64x64px glass icon container.
  - **Content Area (Right)**:
    - Top row: Company/Org Name (Bold) + Date (Mono font, aligned right).
    - Middle row: Role Tag (Pill style: `[ Role Name ]`).
    - Bottom row: Description text (improved readability).

## Visual Style & Interactions

### 1. Color System
- Uses existing RGB design tokens.
- Hover state adds a subtle radial glow: `background: radial-gradient(circle at top left, rgba(var(--accent-rgb), 0.1) 0%, transparent 70%)`.

### 2. Animations
- **Hover Lift**: `transform: translateY(-5px) scale(1.02)`.
- **Entrance**: Fade-in and slide-up using the existing `reveal` observer.

## Data Structure Changes
- Ensure `WORK` and `ORGANIZATIONS` arrays consistently include a `logo` field.

## Verification Plan
1. **Desktop**: Check 1-column stack and card spacing.
2. **Mobile**: Verify cards wrap correctly and margins are sufficient.
3. **Accessibility**: Ensure sufficient contrast for the glass cards and tags.
