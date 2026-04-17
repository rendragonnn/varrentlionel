# Experience Milestone Stack Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the Experience section into a single-column stack of individual glass cards with improved logos and interaction design.

**Architecture:** Switch from 2-column grid to a Flex/Grid-based card stack. Move labels to tags and standardize the logo presentation.

**Tech Stack:** React (Vite), CSS3 (Glassmorphism, Grid/Flexbox).

---

### Task 1: Refactor App.jsx Structures
**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Update navigation and section structure**
Change the `Experience` section layout from the split `exp-grid-container` to a vertical group container.

```jsx
// src/App.jsx rendering logic for Experience section
<div className="experience-stack reveal">
  <div className="exp-group">
    <h3 className="exp-group-title">Work Experience</h3>
    {WORK.map((w, i) => (
      <div key={i} className="exp-glass-card">
        <div className="exp-card-header">
          <div className="exp-logo-container">
            <img src={w.logo} alt={w.company} className="exp-card-logo" />
          </div>
          <div className="exp-title-block">
            <div className="exp-top-row">
              <h4 className="exp-company">{w.company}</h4>
              <span className="exp-card-date">{w.date}</span>
            </div>
            <div className="exp-role-tag">[{w.role}]</div>
          </div>
        </div>
        <p className="exp-card-desc">{w.desc}</p>
      </div>
    ))}
  </div>
  {/* Same for Organizations */}
</div>
```

### Task 2: Revamp CSS for Premium Glass Cards
**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Standardize Card & Logo Styles**
Remove the old `.exp-grid-container` and `.exp-item` styles. Define the new `.exp-glass-card` system.

```css
/* src/index.css additions */
.experience-stack {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 1000px;
  margin: 0 auto;
}

.exp-group-title {
  font-family: var(--mono);
  font-size: 0.8rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(var(--text-rgb), 0.1);
}

.exp-glass-card {
  background: rgba(var(--bg-rgb), 0.4);
  backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid rgba(var(--text-rgb), 0.1);
  border-radius: 24px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.exp-glass-card:hover {
  transform: translateY(-8px) scale(1.01);
  border-color: rgba(var(--accent-rgb), 0.4);
  background: radial-gradient(circle at top left, rgba(var(--accent-rgb), 0.1) 0%, transparent 70%), rgba(var(--bg-rgb), 0.5);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
}

.exp-card-header {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  align-items: center;
}

.exp-logo-container {
  width: 64px;
  height: 64px;
  background: rgba(var(--text-rgb), 0.05);
  border-radius: 16px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(var(--text-rgb), 0.1);
}

.exp-card-logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: grayscale(100%);
  transition: filter 0.4s ease;
}

.exp-glass-card:hover .exp-card-logo {
  filter: grayscale(0%);
}

.exp-title-block {
  flex: 1;
}

.exp-top-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
}

.exp-company {
  font-family: var(--font-head);
  font-size: 1.5rem;
  font-weight: 800;
}

.exp-card-date {
  font-family: var(--mono);
  font-size: 0.8rem;
  color: var(--text-muted);
}

.exp-role-tag {
  display: inline-block;
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--accent);
  background: rgba(var(--accent-rgb), 0.1);
  padding: 0.3rem 0.8rem;
  border-radius: 100px;
  margin-bottom: 1rem;
}

.exp-card-desc {
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.6;
}
```

### Task 3: Verification
- [ ] **Step 1: Mobile check**
Ensure cards stack nicely on mobile. Ensure logos don't shrink too much.
