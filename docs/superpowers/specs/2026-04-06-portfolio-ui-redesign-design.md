# Portfolio UI Redesign - Design Specification

**Document Version:** 1.0  
**Date:** April 6, 2026  
**Author:** Claude Code (Assisted by User)  
**Status:** Draft - Pending Approval

---

## 1. Concept & Vision

A sophisticated, minimalist portfolio that combines editorial design principles with modern web aesthetics. The design emphasizes warmth, approachability, and professional credibility through generous whitespace, thoughtful typography hierarchy, and subtle micro-interactions. This isn't a typical tech portfolio—it's an elegant showcase that lets the work speak for itself while reflecting Gunawan's attention to detail and design sensibility.

---

## 2. Design Language

### Aesthetic Direction
**Editorial Elegance** - Inspired by modern magazine layouts and premium SaaS landing pages. Clean, confident, and warm. Uses asymmetric layouts and bold section breaks to create visual interest without sacrificing minimalism.

### Color Palette

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Background Primary | Warm White | `#FAF9F7` | Main page background |
| Background Secondary | Soft Cream | `#F5F3EF` | Section backgrounds, cards |
| Background Dark | Charcoal | `#1C1C1C` | Dark mode background |
| Text Primary | Deep Charcoal | `#2D2D2D` | Headlines, body text |
| Text Secondary | Warm Gray | `#6B6B6B` | Captions, metadata |
| Accent Primary | Terracotta | `#C4846C` | CTAs, highlights, links |
| Accent Hover | Deep Terracotta | `#A66B52` | Hover states |
| Border | Soft Beige | `#E8E5E1` | Dividers, card borders |
| White | Pure White | `#FFFFFF` | Card surfaces (light mode) |
| Dark Surface | Soft Black | `#252525` | Card surfaces (dark mode) |

### Typography

**Font Family:** Inter (Google Fonts) - clean geometric sans-serif throughout

| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|---------------|
| Hero H1 | 4rem (64px) | 600 | 1.1 | -0.02em |
| Section H2 | 2.5rem (40px) | 600 | 1.2 | -0.01em |
| Subsection H3 | 1.5rem (24px) | 500 | 1.3 | 0 |
| Body Large | 1.125rem (18px) | 400 | 1.7 | 0 |
| Body | 1rem (16px) | 400 | 1.6 | 0 |
| Caption | 0.875rem (14px) | 400 | 1.5 | 0.01em |
| Small | 0.75rem (12px) | 500 | 1.4 | 0.02em |

### Spatial System

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | 0.5rem (8px) | Tight element spacing |
| `--space-sm` | 1rem (16px) | Component internal padding |
| `--space-md` | 2rem (32px) | Section element gaps |
| `--space-lg` | 4rem (64px) | Section padding vertical |
| `--space-xl` | 6rem (96px) | Major section breaks |
| `--space-2xl` | 8rem (128px) | Hero section spacing |

### Motion Philosophy

**Principle:** Subtle, purposeful, never distracting

| Animation Type | Duration | Easing | Usage |
|----------------|----------|--------|-------|
| Page Load | 600ms | ease-out | Hero content reveal |
| Scroll Reveal | 400ms | ease-out | Section elements entering viewport |
| Hover | 200ms | ease-in-out | Button states, card lifts |
| Page Transitions | 300ms | ease-in-out | Navigation state changes |

**Animation Behaviors:**
- Scroll-triggered fade-up animations (once per element)
- Subtle hover lifts on interactive cards (translateY: -4px)
- Smooth opacity transitions on hover states
- No bouncing, spinning, or attention-grabbing effects
- Dark/light mode transition: 200ms background/color transitions

### Visual Assets

**Icons:** Lucide React - clean, consistent stroke icons
**Images:** High-quality professional photos, soft shadows, rounded corners (12px)
**Decorative Elements:** Minimal - subtle gradient overlays on hero, thin divider lines

---

## 3. Layout & Structure

### Page Architecture

```
┌─────────────────────────────────────────────┐
│  HEADER (Fixed)                              │
│  Logo (left) ─────────── Nav Links (right)  │
├─────────────────────────────────────────────┤
│                                             │
│  HERO SECTION                               │
│  Large intro text, role, brief tagline       │
│  Scroll indicator                           │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  ABOUT SECTION                               │
│  Photo + Bio (asymmetric layout)             │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  EXPERIENCE SECTION                          │
│  Clean timeline, alternating layout          │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  SKILLS SECTION                              │
│  Categorized skill badges, grid layout       │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  PROJECTS SECTION                            │
│  Project cards, hover reveals, 2-col grid    │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  CONTACT SECTION                             │
│  Simple CTA, social links grid                │
│                                             │
├─────────────────────────────────────────────┤
│  FOOTER (Minimal)                           │
│  Copyright, quick links                      │
└─────────────────────────────────────────────┘
```

### Responsive Breakpoints

| Breakpoint | Width | Layout Adjustments |
|------------|-------|-------------------|
| Mobile | < 640px | Single column, stacked elements, hamburger menu |
| Tablet | 640px - 1024px | 2-column grids where applicable |
| Desktop | > 1024px | Full layout, max-width 1200px container |

### Section Spacing
- All sections: `padding: var(--space-lg) 0` (desktop), `padding: var(--space-md) 0` (mobile)
- Section titles: Left-aligned with subtle underline accent
- Content max-width: 1200px, centered

---

## 4. Features & Interactions

### Navigation
- **Fixed header** with blur backdrop on scroll
- **Smooth scroll** to section anchors
- **Mobile:** Hamburger menu with slide-in drawer from right
- **Active state:** Current section highlighted in nav

### Hero Section
- Large H1: "Hi, I'm Gunawan"
- Subtitle: "DevOps Engineer & System Administrator"
- Brief tagline: One sentence about expertise
- Animated scroll indicator (subtle bounce)
- Optional: Subtle animated gradient background

### About Section
- **Layout:** Photo (40%) + Bio (60%) on desktop, stacked on mobile
- **Photo:** Soft shadow, rounded corners, subtle hover scale
- **Bio:** Concise paragraph, key highlights as bullets (optional)
- **CTA:** "Download Resume" button

### Experience Section
- **Layout:** Clean timeline with vertical line
- **Card:** Company logo, title, date, brief description
- **Hover:** Subtle lift, accent border-left
- **Data:** 2-3 most relevant positions (simplified)

### Skills Section
- **Layout:** Categorized grid of skill badges
- **Badge style:** Rounded pill, subtle background, icon + text
- **Categories:** DevOps, Languages, Tools, AI
- **Count:** 15-20 total skills (curated list)

### Projects Section
- **Layout:** 2-column masonry-style grid
- **Card:** Image, title, brief description, tech tags
- **Hover:** Image zoom (scale 1.05), overlay reveal with "View" CTA
- **Data:** 3-4 showcase projects (simplified descriptions)
- **Remove:** PDF links (keep it clean)

### Contact Section
- **Headline:** "Let's Connect" or "Get in Touch"
- **CTA Button:** Primary button linking to email
- **Social Links:** Grid of icon buttons (LinkedIn, GitHub, Email, etc.)
- **Remove:** Inspirational quote (unnecessary clutter)

### Footer
- **Minimal design:** Copyright, quick nav links
- **Social icons:** Small, understated

---

## 5. Component Inventory

### Header Component
**States:**
- Default: Transparent background
- Scrolled: White/dark background with blur, subtle shadow
- Mobile menu open: Overlay with slide-in nav

**Elements:**
- Logo: Text "GUNAWAN" in accent color
- Nav links: Hover underline animation
- Theme toggle: Sun/Moon icon button (top-right, separate from header)

### Button Component
**Variants:**
- Primary: Terracotta background, white text, rounded-full
- Secondary: Transparent, border, text color

**States:**
- Default: Standard appearance
- Hover: Darker shade, subtle scale (1.02)
- Active: Slight press effect
- Disabled: Reduced opacity

### Card Component (Projects/Experience)
**States:**
- Default: White/dark surface, subtle border, rounded-lg (12px)
- Hover: Lift effect, accent border-left appears
- Image hover: Subtle zoom inside container

### Skill Badge Component
**Appearance:**
- Pill shape (rounded-full)
- Background: subtle gray tone
- Icon (optional) + text
- Hover: Slight background darken

### Section Title Component
**Style:**
- Large text (H2)
- Left-aligned
- Subtle underline accent (2px, accent color, 40px width)

### Social Icon Button
**Appearance:**
- Circular button, 44px touch target
- Icon centered
- Hover: Background fill, slight scale

### Theme Toggle
**Appearance:**
- Circular button, fixed position (top-right)
- Sun icon (light mode) / Moon icon (dark mode)
- Hover: Background change, rotate animation

### Scroll Indicator (Hero)
**Appearance:**
- Subtle mouse/triangle icon
- Continuous subtle bounce animation
- Fades out after first scroll

---

## 6. Technical Approach

### Framework & Architecture
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + CSS Variables for theming
- **Animations:** Framer Motion for scroll reveals and transitions
- **Icons:** Lucide React (or continue with react-icons)

### Project Structure
```
app/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   └── ui/
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── SkillBadge.jsx
│       └── ThemeToggle.jsx
├── contexts/
│   └── ThemeContext.jsx
├── data/
│   ├── experience.js
│   ├── skills.js
│   └── projects.js
├── styles/
│   └── globals.css
├── layout.js
└── page.js
```

### Dark Mode Implementation
- CSS variable-based color system
- `darkMode: 'class'` in Tailwind config
- ThemeContext for state management
- localStorage persistence
- System preference detection

### Performance Considerations
- Static export for CDN deployment
- Image optimization with Next.js Image
- Font optimization with next/font
- Minimal JavaScript bundle
- Lazy loading for below-fold images

### Animation Implementation
- Framer Motion `whileInView` for scroll reveals
- `viewport={{ once: true }}` to prevent re-animation
- CSS transitions for hover states
- Reduced motion media query support

---

## 7. Data Cleanup Plan

### Experience Data (Simplify)
**Current:** 4 entries with detailed descriptions  
**New:** 2-3 entries, concise descriptions

| Position | Company | Keep/Remove |
|----------|---------|--------------|
| System Administrator | PT. Saptaindra Sejati | ✅ Keep (main) |
| Field Support Technician | PT. Saptaindra Sejati | ❌ Remove |
| English Mastery Program | Mr. BOB | ❌ Remove (not professional) |
| Associate's Degree | Institut Perkebunan | ✅ Keep (brief) |

### Skills Data (Curate)
**Current:** 25+ skills with detailed descriptions  
**New:** 15-20 skills, no descriptions needed

**Keep:**
- DevOps: Docker, Nginx
- Languages: Python, Go, JavaScript, SQL, Linux
- Tools: GitHub, Next.js, VS Code
- AI: Claude, ChatGPT

**Remove:**
- Duplicate/overlapping skills
- Office tools (Word, Excel, PowerPoint)
- Less relevant items (Flutter, FreeBSD)

### Projects Data (Focus)
**Current:** 4 projects with PDFs  
**New:** 3-4 projects, simple descriptions, no PDFs

**Simplify descriptions to 1-2 sentences each**

### About Section
**Current:** Detailed bio paragraph  
**New:** Concise 2-3 sentence intro + key highlights

---

## 8. Implementation Priority

### Phase 1: Foundation
1. Update Tailwind config with new color palette
2. Update global styles with CSS variables
3. Create component folder structure
4. Update ThemeContext (if needed)

### Phase 2: Layout Components
5. Rebuild Header component
6. Rebuild Footer component
7. Create Hero section
8. Implement theme toggle

### Phase 3: Content Sections
9. Rebuild About section
10. Rebuild Experience section
11. Rebuild Skills section
12. Rebuild Projects section
13. Rebuild Contact section

### Phase 4: Polish
14. Add scroll animations
15. Implement mobile menu
16. Test responsive behavior
17. Verify accessibility

### Phase 5: Cleanup
18. Remove old component files
19. Update page.js composition
20. Remove unused assets
21. Update documentation

---

## 9. Success Criteria

- [ ] Clean, editorial layout with generous whitespace
- [ ] Warm neutral color palette applied consistently
- [ ] Smooth, subtle animations (no distraction)
- [ ] Fully responsive (mobile-first)
- [ ] Dark mode with warm dark palette
- [ ] Simplified content (less is more)
- [ ] Fast load times (static export)
- [ ] Accessible (keyboard nav, ARIA labels)
- [ ] Consistent spacing and typography hierarchy
