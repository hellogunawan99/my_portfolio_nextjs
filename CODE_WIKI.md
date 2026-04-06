# Code Wiki - Gunawan Wibisono Portfolio

A comprehensive technical documentation for the Next.js portfolio website of Gunawan Wibisono.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Architecture](#project-architecture)
4. [Directory Structure](#directory-structure)
5. [Core Modules](#core-modules)
6. [Component Reference](#component-reference)
7. [Context Providers](#context-providers)
8. [Styling System](#styling-system)
9. [Configuration Files](#configuration-files)
10. [Deployment](#deployment)
11. [Development Guide](#development-guide)

---

## Project Overview

This is a professional portfolio website built with Next.js 14 that showcases Gunawan Wibisono's professional experience, skills, projects, and contact information. The website features modern animations, dark mode support, responsive design, and optimized image loading.

### Key Features

- **Modern Animations**: Scroll-triggered animations using Framer Motion
- **Dark Mode Support**: Theme toggle with system preference detection
- **Performance Optimizations**: Skeleton loading, lazy loading, optimized images
- **Responsive Design**: Mobile-first approach with adaptive navigation
- **SEO Ready**: Static export capability for deployment

---

## Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Next.js | 14.2.4 |
| UI Library | React | ^18 |
| Styling | Tailwind CSS | ^3.4.1 |
| Animations | Framer Motion | ^11.3.21 |
| Icons | React Icons | ^5.2.1 |
| Database | PostgreSQL (pg) | ^8.12.0 |
| Runtime | Node.js | 18+ |

---

## Project Architecture

### Application Architecture Pattern

The project follows the **Next.js App Router** architecture with a component-based design:

```
Root Layout (layout.js)
    │
    ├── ThemeProvider (Context)
    │   └── Children
    │       ├── ThemeToggle (Button Component)
    │       ├── Header (Navigation)
    │       └── Main Content
    │           ├── About Section
    │           ├── Experience Section
    │           ├── Skills Section
    │           ├── Projects Section
    │           └── Contact Section
    └── Footer
```

### Data Flow

1. **Theme Context**: Manages global theme state (light/dark)
2. **Component Props**: Parent-to-child data passing via React props
3. **Event Handlers**: User interactions trigger state updates
4. **Styling**: Tailwind CSS utility classes + CSS Modules for complex styles

---

## Directory Structure

```
my_portfolio_nextjs/
├── app/                          # Next.js App Router directory
│   ├── components/               # Reusable UI components
│   │   ├── About.js              # About section component
│   │   ├── Contact.js            # Contact section component
│   │   ├── Experience.js         # Experience timeline component
│   │   ├── Experience.module.css # Experience section styles
│   │   ├── Footer.js             # Footer component
│   │   ├── Header.jsx            # Navigation header component
│   │   ├── Header.module.css     # Header navigation styles
│   │   ├── OptimizedImage.jsx    # Image optimization wrapper
│   │   ├── Projects.js           # Projects showcase component
│   │   ├── Projects.module.css   # Projects section styles
│   │   ├── Skills.js             # Skills showcase component
│   │   └── ThemeToggle.jsx       # Dark mode toggle button
│   ├── contexts/                 # React Context providers
│   │   └── ThemeContext.jsx      # Theme management context
│   ├── utils/                    # Utility functions
│   │   └── smoothScroll.js       # Smooth scroll helper
│   ├── globals.css               # Global styles
│   ├── layout.js                 # Root layout component
│   └── page.js                   # Home page component
├── public/                       # Static assets
│   ├── images/                   # Portfolio images
│   └── *.pdf                     # Resume and project PDFs
├── server.js                     # Custom production server
├── next.config.mjs               # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── package.json                  # Project dependencies
├── Dockerfile                    # Docker container definition
└── docker-compose.yml            # Docker Compose configuration
```

---

## Core Modules

### 1. app/layout.js - Root Layout

**Purpose**: Defines the root layout structure for all pages.

**Key Responsibilities**:
- Sets up the HTML document structure
- Configures metadata (title, description)
- Wraps children with ThemeProvider
- Includes global components (ThemeToggle, Footer)

**Code Location**: [layout.js](file:///Users/gunawan/dev/web/my_portfolio_nextjs/app/layout.js#L1-L26)

```javascript
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeProvider>
          {children}
          <ThemeToggle />
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

**Dependencies**:
- `Inter` font from Google Fonts
- ThemeContext provider
- ThemeToggle component
- Footer component

---

### 2. app/page.js - Home Page

**Purpose**: Composes the main landing page from all section components.

**Key Responsibilities**:
- Assembles all page sections in order
- Provides the main entry point for the application

**Code Location**: [page.js](file:///Users/gunawan/dev/web/my_portfolio_nextjs/app/page.js#L1-L21)

**Component Order**:
1. Header
2. About
3. Experience
4. Skills
5. Projects
6. Contact

---

### 3. server.js - Custom Production Server

**Purpose**: Custom Node.js server for production deployment.

**Key Responsibilities**:
- Creates HTTP server with Next.js app
- Handles custom routes (`/a`, `/b`)
- Provides error handling middleware

**Code Location**: [server.js](file:///Users/gunawan/dev/web/my_portfolio_nextjs/server.js#L1-L34)

**Usage**: Required for production builds with static export

---

## Component Reference

### Navigation Components

#### Header Component
**File**: [Header.jsx](file:///Users/gunawan/dev/web/my_portfolio_nextjs/app/components/Header.jsx)

**Purpose**: Main navigation header with mobile-responsive menu

**Key Features**:
- Responsive navigation (desktop vs mobile)
- Mobile hamburger menu with slide animation
- Smooth scroll navigation to sections
- Scroll-aware styling (transparent vs solid background)

**State Variables**:
| Variable | Type | Purpose |
|----------|------|---------|
| `isMenuOpen` | boolean | Mobile menu visibility |
| `isMobile` | boolean | Screen size detection |
| `isScrolled` | boolean | Scroll position tracking |
| `mobileNavRef` | ref | Mobile nav DOM reference |

**Navigation Links**:
- About Me → `#about`
- Experience → `#experience`
- Skills → `#skills`
- Projects → `#projects`
- Contact → `#contact`

**Animations**:
- Framer Motion for menu transitions
- Spring animation: `{ damping: 25, stiffness: 200 }`
- Staggered list item appearance

---

### Section Components

#### About Component
**File**: [About.js](file:///Users/gunawan/dev/web/my_portfolio_nextjs/app/components/About.js)

**Purpose**: Personal introduction section with profile image

**Features**:
- Profile image with lazy loading
- Animated skeleton placeholder
- Call-to-action buttons (Get in Touch, Resume download)
- Framer Motion entrance animations

**Props**: None (static content)

**Styling**: Uses Tailwind CSS with dark mode support

---

#### Experience Component
**File**: [Experience.js](file:///Users/gunawan/dev/web/my_portfolio_nextjs/app/components/Experience.js)

**Purpose**: Timeline display of work experience and education

**Data Structure**:
```javascript
{
  id: number,
  type: 'work' | 'education',
  title: string,
  organization: string,
  date: string,
  details: string,
  logo: string
}
```

**Experience Entries**:
1. System Administrator @ PT. Saptaindra Sejati (2022-2025)
2. Field Support Technician @ PT. Saptaindra Sejati (2022)
3. English Mastery Program @ Mr. BOB (2018-2019)
4. Associate's Degree @ Institut Perkebunan Yogyakarta (2017-2018)

**Layout**: Alternating left/right timeline (responsive)

---

#### Skills Component
**File**: [Skills.js](file:///Users/gunawan/dev/web/my_portfolio_nextjs/app/components/Skills.js)

**Purpose**: Display professional skills and proficiency levels

**Skill Categories**:
1. **DevOps**: Docker, Nginx
2. **Programming Languages**: Python, Go, JavaScript, SQL, Bash, CSS
3. **Frameworks & Tools**: GitHub, Flutter, Next.js, React.js, VS Code
4. **Operating Systems**: Linux, FreeBSD, Windows
5. **Office Tools**: Excel, Word, PowerPoint
6. **AI Tools**: Anthropic Claude, ChatGPT, Gemini, DeepSeek

**Featured Skills Display**:
- Python (85% proficiency)
- Go (75% proficiency)
- Next.js (65% proficiency)
- Linux (95% proficiency)
- AI Tools (85% proficiency)

**Features**:
- FeaturedSkills component with animated progress bars
- Hover tooltips showing skill descriptions
- Responsive grid layout

---

#### Projects Component
**File**: [Projects.js](file:///Users/gunawan/dev/web/my_portfolio_nextjs/app/components/Projects.js)

**Purpose**: Showcase of portfolio projects with expandable cards

**Project Data**:
| ID | Title | Description |
|----|-------|-------------|
| 1 | Monitoring Display Jigsaw | Real-time system status visualization |
| 2 | Computer Vision Truck Distance | YOLO/OpenCV distance calculation |
| 3 | IP Monitoring Real Time | Network problem detection system |
| 4 | Server Migration | Physical to VM migration |

**Features**:
- Lazy-loaded images with skeleton loading
- Show More/Show Less functionality
- Project PDF documentation links
- Animated card hover effects

---

#### Contact Component
**File**: [Contact.js](file:///Users/gunawan/dev/web/my_portfolio_nextjs/app/components/Contact.js)

**Purpose**: Contact information and social media links

**Social Links**:
| Platform | URL |
|----------|-----|
| LinkedIn | linkedin.com/in/gunawan-wibisono-9aa883237 |
| GitHub | github.com/hellogunawan99 |
| Email | gunawanwibisono4712@gmail.com |
| Instagram | instagram.com/hello.gunawan |
| WhatsApp | wa.me/+6285158735552 |
| Telegram | t.me/hellogunawan |
| Twitter/X | x.com/Gunawan96429055 |
| Medium | medium.com/@gunawanwibisono4712 |

**Features**:
- Social media icon grid
- Direct email link
- Inspirational quote section
- Call-to-action button

---

#### Footer Component
**File**: [Footer.js](file:///Users/gunawan/dev/web/my_portfolio_nextjs/app/components/Footer.js)

**Purpose**: Site-wide footer with navigation and contact info

**Sections**:
1. Contact Information
2. Social Links
3. Quick Navigation Links

---

### Utility Components

#### ThemeToggle Component
**File**: [ThemeToggle.jsx](file:///Users/gunawan/dev/web/my_portfolio_nextjs/app/components/ThemeToggle.jsx)

**Purpose**: Dark/Light mode toggle button

**Features**:
- Fixed position (top-right corner)
- Icon rotation animation
- Sun/Moon icon switching
- Accessibility: aria-label support

---

#### OptimizedImage Component
**File**: [OptimizedImage.jsx](file:///Users/gunawan/dev/web/my_portfolio_nextjs/app/components/OptimizedImage.jsx)

**Purpose**: Wrapper component for Next.js Image with enhanced features

**Features**:
- Loading skeleton animation
- Error state handling
- Smooth opacity transitions
- Pass-through props to Next.js Image

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | string | required | Image source path |
| `alt` | string | required | Alt text for accessibility |
| `width` | number | optional | Image width |
| `height` | number | optional | Image height |
| `className` | string | '' | Additional CSS classes |
| `priority` | boolean | false | Priority loading |

---

## Context Providers

### ThemeContext
**File**: [ThemeContext.jsx](file:///Users/gunawan/dev/web/my_portfolio_nextjs/app/contexts/ThemeContext.jsx)

**Purpose**: Global theme state management

**State**:
- `theme`: Current theme ('light' | 'dark')

**Methods**:
- `toggleTheme()`: Switch between light and dark mode

**Theme Persistence**:
1. Check localStorage for saved theme
2. Fall back to system preference
3. Apply 'dark' class to `<html>` element

**Usage Pattern**:
```javascript
import { useTheme } from '../contexts/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Current: {theme}</button>;
}
```

---

## Styling System

### Tailwind CSS Configuration
**File**: [tailwind.config.js](file:///Users/gunawan/dev/web/my_portfolio_nextjs/tailwind.config.js)

**Configuration**:
- Dark mode: Enabled via 'class' strategy
- Content paths: pages, components, app directories
- Extended theme with radial/conic gradients

### Global Styles
**File**: [globals.css](file:///Users/gunawan/dev/web/my_portfolio_nextjs/app/globals.css)

**Base Styles**:
- Tailwind base, components, utilities
- CSS custom properties for theming
- Background gradient configuration

### CSS Modules

Used for component-specific complex styles:

| Component | CSS Module File |
|-----------|----------------|
| Header | [Header.module.css](file:///Users/gunawan/dev/web/my_portfolio_nextjs/app/components/Header.module.css) |
| Experience | [Experience.module.css](file:///Users/gunawan/dev/web/my_portfolio_nextjs/app/components/Experience.module.css) |
| Projects | [Projects.module.css](file:///Users/gunawan/dev/web/my_portfolio_nextjs/app/components/Projects.module.css) |

### Color Scheme

**Light Mode**:
- Background: gray-100 (`#f3f4f6`)
- Foreground: black
- Primary accent: orange-400

**Dark Mode**:
- Background: gray-900 (`#111827`)
- Foreground: white
- Primary accent: orange-400

**Theme Classes**:
```javascript
// Backgrounds
bg-gray-100 dark:bg-gray-900

// Text colors
text-gray-700 dark:text-gray-300

// Accent colors
text-orange-400 bg-orange-400
```

---

## Configuration Files

### Next.js Configuration
**File**: [next.config.mjs](file:///Users/gunawan/dev/web/my_portfolio_nextjs/next.config.mjs)

```javascript
const nextConfig = {
    output: "export",     // Static site generation
    images: {
        unoptimized: true, // Disable image optimization for static export
    },
};
```

### Package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev",                    // Development server
    "build": "next build",               // Production build
    "start": "NODE_ENV=production node server.js",  // Production server
    "lint": "next lint"                  // ESLint checking
  }
}
```

---

## Deployment

### Docker Deployment

**Dockerfile**: Multi-stage build for optimized production image

**Build Stage**:
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
```

**Production Stage**:
```dockerfile
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/server.js ./
EXPOSE 3000
CMD ["node", "server.js"]
```

**Docker Compose**:
```yaml
services:
  nextjs:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
    restart: unless-stopped
```

### Static Export Deployment

The project is configured for static export, suitable for:
- Vercel (recommended)
- Netlify
- GitHub Pages
- AWS S3
- Any static hosting provider

---

## Development Guide

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd my_portfolio_nextjs

# Install dependencies
npm install
```

### Development Workflow

```bash
# Start development server
npm run dev
# Opens at http://localhost:3000

# Development with hot reload enabled
# Changes auto-refresh in browser
```

### Production Build

```bash
# Create production build
npm run build
# Outputs static files to /out directory

# Start production server
npm start
# Runs on http://localhost:3000
```

### Code Quality

```bash
# Run ESLint
npm run lint
# Checks for linting errors and warnings
```

### Adding New Components

1. Create component file in `app/components/`
2. Add to `app/page.js` to include in layout
3. Use Framer Motion for animations:
```javascript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

### Adding Dark Mode Styles

Use Tailwind's dark mode prefix:
```javascript
className="bg-white dark:bg-gray-900 text-black dark:text-white"
```

### Image Assets

Place images in `public/` directory:
- Profile: `/gunawan.png`
- Projects: `/project_images/`
- PDFs: `/resume.pdf`, `/project*.pdf`

---

## Animation Patterns

### Scroll-Triggered Animation

```javascript
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
/>
```

### Hover Animation

```javascript
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
/>
```

### Stagger Animation

```javascript
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
```

---

## Dependencies Graph

```
next@14.2.4
├── react@18
│   └── react-dom@18
├── framer-motion@11.3.21
│   └── (animation library)
├── react-icons@5.2.1
│   └── (icon library)
├── tailwindcss@3.4.1
│   ├── postcss
│   └── autoprefixer
├── pg@8.12.0
│   └── (PostgreSQL client)
└── eslint@8
    └── eslint-config-next@14.2.4
```

---

## Environment Variables

Currently no environment variables required for development.

For production, if using PostgreSQL:
```bash
DATABASE_URL=postgresql://user:password@host:5432/database
```

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

**Note**: Uses CSS custom properties and modern JavaScript features.

---

## Performance Considerations

1. **Image Optimization**: Use `OptimizedImage` component for lazy loading
2. **Code Splitting**: Next.js automatic code splitting
3. **Font Optimization**: Google Fonts loaded via `next/font`
4. **Static Export**: Pre-rendered HTML for fast initial load
5. **Skeleton Loading**: Reduces perceived loading time

---

## Troubleshooting

### Common Issues

**Issue**: Images not loading in production
**Solution**: Ensure `images.unoptimized: true` in next.config.mjs for static export

**Issue**: Dark mode not persisting
**Solution**: Check localStorage availability and browser settings

**Issue**: Framer Motion animations not working
**Solution**: Ensure component has 'use client' directive for Next.js App Router

---

## Maintenance

### Updating Content

1. **Personal Info**: Edit `app/components/About.js`
2. **Experience**: Modify `experienceData` array in `Experience.js`
3. **Skills**: Update `skillCategories` and `featuredSkills` in `Skills.js`
4. **Projects**: Edit `allProjects` array in `Projects.js`
5. **Contact**: Update `socialLinks` array in `Contact.js`

### Adding New Sections

1. Create component in `app/components/`
2. Import in `app/page.js`
3. Add section tag with unique ID
4. Update Header navigation links

---

## License

This portfolio is a personal project for Gunawan Wibisono.

---

**Document Version**: 1.0  
**Last Updated**: April 2026  
**Maintainer**: Gunawan Wibisono  
**Assisted by**: Claude Code (Anthropic)
