# Portfolio UI Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the portfolio into a modern, minimalist design with warm neutrals, editorial elegance, and simplified content.

**Architecture:** A Next.js 14 App Router project with Tailwind CSS for styling, Framer Motion for animations, and a component-based architecture organized by sections. Uses CSS variables for theming and a dedicated data layer for content.

**Tech Stack:** Next.js 14, Tailwind CSS, Framer Motion, React Icons (Lucide-style)

---

## File Structure Overview

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

---

## Phase 1: Foundation

### Task 1: Update Tailwind Configuration

**Files:**
- Modify: `tailwind.config.js`

- [ ] **Step 1: Update Tailwind config with new color palette and theme**

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#FAF9F7',
          secondary: '#F5F3EF',
          dark: '#1C1C1C',
        },
        text: {
          primary: '#2D2D2D',
          secondary: '#6B6B6B',
        },
        accent: {
          DEFAULT: '#C4846C',
          hover: '#A66B52',
        },
        border: '#E8E5E1',
        surface: {
          light: '#FFFFFF',
          dark: '#252525',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 2: Commit**

```bash
git add tailwind.config.js
git commit -m "config: update Tailwind with warm neutral color palette"
```

---

### Task 2: Update Global Styles

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Replace global styles with new CSS variables and base styles**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background-primary: #FAF9F7;
  --background-secondary: #F5F3EF;
  --text-primary: #2D2D2D;
  --text-secondary: #6B6B6B;
  --accent: #C4846C;
  --accent-hover: #A66B52;
  --border-color: #E8E5E1;
  --surface: #FFFFFF;
  
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 2rem;
  --space-lg: 4rem;
  --space-xl: 6rem;
  --space-2xl: 8rem;
}

.dark {
  --background-primary: #1C1C1C;
  --background-secondary: #252525;
  --text-primary: #F5F3EF;
  --text-secondary: #9CA3AF;
  --surface: #252525;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--background-primary);
  color: var(--text-primary);
  font-family: var(--font-inter), system-ui, sans-serif;
  line-height: 1.6;
  transition: background-color 0.2s ease, color 0.2s ease;
}

::selection {
  background-color: var(--accent);
  color: white;
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add app/globals.css
git commit -m "styles: update global CSS with new color variables and base styles"
```

---

### Task 3: Create Data Layer

**Files:**
- Create: `app/data/experience.js`
- Create: `app/data/skills.js`
- Create: `app/data/projects.js`

- [ ] **Step 1: Create experience data**

```javascript
export const experienceData = [
  {
    id: 1,
    type: 'work',
    title: 'Support Engineer APAC',
    company: 'Hexagon',
    period: 'December 2025 - Present',
    description: 'Providing advanced technical support and solutions for Hexagon software products across the Asia-Pacific region.',
  },
  {
    id: 2,
    type: 'work',
    title: 'Software Support Engineer APAC',
    company: 'Hexagon',
    period: 'May 2025 - November 2025',
    description: 'Supported enterprise clients with Hexagon Jigsaw and related Fleet Management solutions across APAC.',
  },
  {
    id: 3,
    type: 'work',
    title: 'Technician',
    company: 'Yuli Computer',
    period: 'April 2025 - May 2025',
    description: 'Hardware and software troubleshooting, computer repair, and technical support services.',
  },
  {
    id: 4,
    type: 'work',
    title: 'System Administrator',
    company: 'PT. Saptaindra Sejati',
    period: 'November 2022 - April 2025',
    description: 'Managed and maintained Fleet Management System (FMS) infrastructure for fleet operations optimization.',
  },
  {
    id: 5,
    type: 'education',
    title: "Associate's Degree in Oil Palm Plantation",
    company: 'Institut Perkebunan Yogyakarta',
    period: '2017 - 2018',
    description: 'Focused on management and agricultural sciences for plantation operations.',
  },
];
```

- [ ] **Step 2: Create skills data**

```javascript
export const skillsData = {
  devops: [
    { name: 'Docker', icon: 'Container' },
    { name: 'Nginx', icon: 'Server' },
  ],
  languages: [
    { name: 'Python', icon: 'Code' },
    { name: 'Go', icon: 'Code' },
    { name: 'JavaScript', icon: 'Code' },
    { name: 'SQL', icon: 'Database' },
    { name: 'Linux', icon: 'Terminal' },
  ],
  tools: [
    { name: 'GitHub', icon: 'GitBranch' },
    { name: 'Next.js', icon: 'Layers' },
    { name: 'VS Code', icon: 'Terminal' },
  ],
  ai: [
    { name: 'Claude', icon: 'Bot' },
    { name: 'ChatGPT', icon: 'MessageSquare' },
  ],
};
```

- [ ] **Step 3: Create projects data**

```javascript
export const projectsData = [
  {
    id: 1,
    title: 'Monitoring Display Jigsaw',
    description: 'Real-time system status visualization dashboard for fleet management operations.',
    image: '/display_status.jpeg',
    tags: ['Dashboard', 'Visualization', 'Real-time'],
  },
  {
    id: 2,
    title: 'Truck Distance Detection',
    description: 'Computer vision solution using YOLO and OpenCV for calculating distance between trucks in real-time.',
    image: '/truck_distance.jpeg',
    tags: ['Computer Vision', 'YOLO', 'Safety'],
  },
  {
    id: 3,
    title: 'IP Monitoring System',
    description: 'Network monitoring solution for rapid problem detection and operational efficiency.',
    image: '/ip_monitoring.jpeg',
    tags: ['Network', 'Monitoring', 'Automation'],
  },
  {
    id: 4,
    title: 'Server Migration',
    description: 'Migration of physical servers to virtual environment with improved performance and manageability.',
    image: '/migration.jpeg',
    tags: ['Infrastructure', 'Virtualization', 'Migration'],
  },
];
```

- [ ] **Step 4: Commit**

```bash
git add app/data/experience.js app/data/skills.js app/data/projects.js
git commit -m "data: create structured data layer for content"
```

---

## Phase 2: Layout Components

### Task 4: Update ThemeContext

**Files:**
- Modify: `app/contexts/ThemeContext.jsx`

- [ ] **Step 1: Update ThemeContext with improved structure**

```javascript
'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
```

- [ ] **Step 2: Commit**

```bash
git add app/contexts/ThemeContext.jsx
git commit -m "feat: update ThemeContext implementation"
```

---

### Task 5: Create ThemeToggle Component

**Files:**
- Create: `app/components/ui/ThemeToggle.jsx`

- [ ] **Step 1: Create ThemeToggle component**

```jsx
'use client';

import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-surface-light dark:bg-surface-dark border border-border shadow-sm hover:shadow-md transition-shadow duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-text-primary dark:text-accent"
      >
        {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
      </motion.div>
    </motion.button>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/components/ui/ThemeToggle.jsx
git commit -m "feat: create ThemeToggle component"
```

---

### Task 6: Create Header Component

**Files:**
- Create: `app/components/layout/Header.jsx`

- [ ] **Step 1: Create Header component with navigation**

```jsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronDown } from 'react-icons/fa';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-background-primary/95 dark:bg-background-dark/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="text-xl font-semibold text-accent">
            GUNAWAN
          </Link>

          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden p-2 text-text-primary"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background-primary/98 dark:bg-background-dark/98 z-50 md:hidden"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-12">
                <span className="text-xl font-semibold text-accent">GUNAWAN</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-text-primary"
                  aria-label="Close menu"
                >
                  <FaTimes size={24} />
                </button>
              </div>

              <ul className="flex flex-col space-y-6">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="text-2xl text-text-primary hover:text-accent transition-colors"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/components/layout/Header.jsx
git commit -m "feat: create Header component with responsive navigation"
```

---

### Task 7: Create Footer Component

**Files:**
- Create: `app/components/layout/Footer.jsx`

- [ ] **Step 1: Create minimal Footer component**

```jsx
'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/gunawan-wibisono-9aa883237/', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/hellogunawan99', label: 'GitHub' },
  { icon: FaEnvelope, href: 'mailto:gunawanwibisono4712@gmail.com', label: 'Email' },
];

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
];

export default function Footer() {
  return (
    <footer className="bg-background-secondary dark:bg-surface-dark py-12 border-t border-border">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-text-secondary hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-secondary hover:text-accent transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-text-secondary">
            © {new Date().getFullYear()} Gunawan Wibisono. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/components/layout/Footer.jsx
git commit -m "feat: create minimal Footer component"
```

---

## Phase 3: Content Sections

### Task 8: Create Hero Section

**Files:**
- Create: `app/components/sections/Hero.jsx`

- [ ] **Step 1: Create Hero section component**

```jsx
'use client';

import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 lg:px-8">
      <div className="max-w-container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-text-primary mb-4 tracking-tight">
            Hi, I'm <span className="text-accent">Gunawan</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary max-w-xl mx-auto mb-6"
          >
            Support Engineer & System Administrator
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base text-text-secondary max-w-2xl mx-auto"
          >
            Building efficient infrastructure and delivering solutions across the APAC region. 
            Passionate about DevOps practices and system optimization.
          </motion.p>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-text-secondary hover:text-accent transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        aria-label="Scroll to about section"
      >
        <FaChevronDown size={24} />
      </motion.button>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/components/sections/Hero.jsx
git commit -m "feat: create Hero section"
```

---

### Task 9: Create About Section

**Files:**
- Create: `app/components/sections/About.jsx`

- [ ] **Step 1: Create About section component**

```jsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background-secondary dark:bg-surface-dark">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-64 h-64 md:w-80 md:h-80 mx-auto"
            >
              <Image
                src="/gunawan.png"
                alt="Gunawan Wibisono"
                fill
                className="object-cover rounded-2xl shadow-lg"
                priority
              />
            </motion.div>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium text-accent uppercase tracking-wider mb-4"
            >
              About Me
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-text-primary mb-4">
                DevOps enthusiast with hands-on experience in system administration
              </h3>

              <div className="space-y-4 text-text-secondary">
                <p>
                  With over 2 years of experience managing Fleet Management System infrastructure, 
                  I specialize in Linux administration, automation, and infrastructure optimization.
                </p>
                <p>
                  Currently working as a Support Engineer APAC at Hexagon, delivering solutions 
                  and technical support across the Asia-Pacific region.
                </p>
              </div>

              <motion.a
                href="/gunawan_resume.pdf"
                download
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-accent text-white rounded-full text-sm font-medium hover:bg-accent-hover transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaDownload size={16} />
                Download Resume
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/components/sections/About.jsx
git commit -m "feat: create About section"
```

---

### Task 10: Create Experience Section

**Files:**
- Create: `app/components/sections/Experience.jsx`
- Create: `app/components/sections/Experience.module.css`

- [ ] **Step 1: Create Experience CSS module**

```css
.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--border-color);
}

.timelineItem {
  position: relative;
  padding-bottom: 2rem;
}

.timelineItem::before {
  content: '';
  position: absolute;
  left: -2rem;
  top: 0.5rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--accent);
  transform: translateX(-5px);
}

.timelineContent {
  padding-left: 1.5rem;
}

.timelineContent h4 {
  color: var(--text-primary);
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.timelineContent .company {
  color: var(--accent);
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.timelineContent .period {
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
}

.timelineContent p {
  color: var(--text-secondary);
  font-size: 0.9375rem;
  line-height: 1.6;
}
```

- [ ] **Step 2: Create Experience section component**

```jsx
'use client';

import { motion } from 'framer-motion';
import { experienceData } from '../../data/experience';
import styles from './Experience.module.css';

export default function Experience() {
  const workExperience = experienceData.filter((exp) => exp.type === 'work');
  const education = experienceData.filter((exp) => exp.type === 'education');

  return (
    <section id="experience" className="py-24 lg:py-32 bg-background-primary dark:bg-background-dark">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-text-primary">Experience</h2>
          <div className="w-10 h-1 bg-accent mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-8">Work</h3>
            <div className={styles.timeline}>
              {workExperience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className={styles.timelineItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={styles.timelineContent}>
                    <h4 className="text-lg font-medium">{exp.title}</h4>
                    <p className="company">{exp.company}</p>
                    <p className="period">{exp.period}</p>
                    <p>{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-8">Education</h3>
            <div className={styles.timeline}>
              {education.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className={styles.timelineItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={styles.timelineContent}>
                    <h4 className="text-lg font-medium">{exp.title}</h4>
                    <p className="company">{exp.company}</p>
                    <p className="period">{exp.period}</p>
                    <p>{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add app/components/sections/Experience.jsx app/components/sections/Experience.module.css
git commit -m "feat: create Experience section with timeline"
```

---

### Task 11: Create Skills Section

**Files:**
- Create: `app/components/sections/Skills.jsx`

- [ ] **Step 1: Create Skills section component**

```jsx
'use client';

import { motion } from 'framer-motion';
import { skillsData } from '../../data/skills';
import { FaDocker, FaPython, FaLinux, FaJs, FaGithub } from 'react-icons/fa';
import { SiGo, SiNginx, SiNextdotjs, SiVisualstudiocode } from 'react-icons/si';
import { FiDatabase } from 'react-icons/fi';
import { BiBot } from 'react-icons/bi';
import { BsChatSquareText } from 'react-icons/bs';

const iconMap = {
  Container: FaDocker,
  Server: SiNginx,
  Code: FaPython,
  Database: FiDatabase,
  Terminal: FaLinux,
  GitBranch: FaGithub,
  Layers: SiNextdotjs,
  Bot: BiBot,
  MessageSquare: BsChatSquareText,
};

const languageIcon = { default: FaJs };

export default function Skills() {
  const renderSkill = (skill, index, categoryIndex) => {
    const IconComponent = iconMap[skill.icon] || languageIcon.default;
    
    return (
      <motion.div
        key={`${categoryIndex}-${index}`}
        className="flex items-center gap-2 px-4 py-2 bg-surface-light dark:bg-surface-dark rounded-full border border-border text-sm text-text-primary"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.05 + categoryIndex * 0.1 }}
        whileHover={{ scale: 1.05, borderColor: 'var(--accent)' }}
      >
        <IconComponent className="text-accent" size={16} />
        <span>{skill.name}</span>
      </motion.div>
    );
  };

  const categories = [
    { name: 'DevOps', skills: skillsData.devops },
    { name: 'Languages', skills: skillsData.languages },
    { name: 'Tools', skills: skillsData.tools },
    { name: 'AI Tools', skills: skillsData.ai },
  ];

  return (
    <section id="skills" className="py-24 lg:py-32 bg-background-secondary dark:bg-surface-dark">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-text-primary">Skills</h2>
          <div className="w-10 h-1 bg-accent mt-4" />
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => renderSkill(skill, index, categoryIndex))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/components/sections/Skills.jsx
git commit -m "feat: create Skills section with categorized badges"
```

---

### Task 12: Create Projects Section

**Files:**
- Create: `app/components/sections/Projects.jsx`
- Create: `app/components/sections/Projects.module.css`

- [ ] **Step 1: Create Projects CSS module**

```css
.projectsGrid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
}

@media (min-width: 768px) {
  .projectsGrid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.projectCard {
  background: var(--surface);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.projectCard:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
}

.projectImageWrapper {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
}

.projectImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.projectCard:hover .projectImage {
  transform: scale(1.05);
}

.projectContent {
  padding: 1.5rem;
}

.projectTitle {
  color: var(--text-primary);
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.projectDescription {
  color: var(--text-secondary);
  font-size: 0.9375rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.projectTags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.projectTag {
  padding: 0.25rem 0.75rem;
  background: var(--background-secondary);
  border-radius: 9999px;
  font-size: 0.75rem;
  color: var(--text-secondary);
}
```

- [ ] **Step 2: Create Projects section component**

```jsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { projectsData } from '../../data/projects';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-background-primary dark:bg-background-dark">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-text-primary">Projects</h2>
          <div className="w-10 h-1 bg-accent mt-4" />
        </motion.div>

        <div className={styles.projectsGrid}>
          {projectsData.map((project, index) => (
            <motion.article
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.projectImageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.projectImage}
                />
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.projectTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add app/components/sections/Projects.jsx app/components/sections/Projects.module.css
git commit -m "feat: create Projects section with card grid"
```

---

### Task 13: Create Contact Section

**Files:**
- Create: `app/components/sections/Contact.jsx`

- [ ] **Step 1: Create Contact section component**

```jsx
'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaWhatsapp, FaTelegram } from 'react-icons/fa';

const socialLinks = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/gunawan-wibisono-9aa883237/', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/hellogunawan99', label: 'GitHub' },
  { icon: FaEnvelope, href: 'mailto:gunawanwibisono4712@gmail.com', label: 'Email' },
  { icon: FaInstagram, href: 'https://www.instagram.com/hello.gunawan/', label: 'Instagram' },
  { icon: FaWhatsapp, href: 'https://wa.me/+6285158735552', label: 'WhatsApp' },
  { icon: FaTelegram, href: 'https://t.me/hellogunawan', label: 'Telegram' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background-secondary dark:bg-surface-dark">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-text-primary mb-4">
              Let's Connect
            </h2>
            <div className="w-10 h-1 bg-accent mx-auto mb-6" />
            
            <p className="text-text-secondary mb-8">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology.
            </p>

            <motion.a
              href="mailto:gunawanwibisono4712@gmail.com"
              className="inline-block px-8 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent-hover transition-colors duration-200 mb-12"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-surface-light dark:bg-background-dark rounded-full border border-border text-text-secondary hover:text-accent hover:border-accent transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/components/sections/Contact.jsx
git commit -m "feat: create Contact section"
```

---

## Phase 4: Main Page Assembly

### Task 14: Update Main Page

**Files:**
- Modify: `app/page.js`
- Modify: `app/layout.js`

- [ ] **Step 1: Update page.js with new component structure**

```javascript
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
```

- [ ] **Step 2: Update layout.js with new structure**

```javascript
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggle from "./components/ui/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gunawan Wibisono - Portfolio",
  description: "DevOps Engineer & System Administrator based in Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeProvider>
          <Header />
          {children}
          <Contact />
          <Footer />
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add app/page.js app/layout.js
git commit -m "feat: update main page with new component structure"
```

---

## Phase 5: Cleanup

### Task 15: Remove Old Components

**Files to delete:**
- `app/components/About.js` (old)
- `app/components/Experience.js` (old)
- `app/components/Experience.module.css` (old)
- `app/components/Footer.js` (old)
- `app/components/Header.jsx` (old)
- `app/components/Header.module.css` (old)
- `app/components/OptimizedImage.jsx` (old)
- `app/components/Projects.js` (old)
- `app/components/Projects.module.css` (old)
- `app/components/Skills.js` (old)
- `app/components/Contact.js` (old)
- `app/components/ThemeToggle.jsx` (old, moved to ui folder)
- `app/utils/smoothScroll.js` (unused)

- [ ] **Step 1: Remove old component files**

```bash
rm -f app/components/About.js \
      app/components/Experience.js \
      app/components/Experience.module.css \
      app/components/Footer.js \
      app/components/Header.jsx \
      app/components/Header.module.css \
      app/components/OptimizedImage.jsx \
      app/components/Projects.js \
      app/components/Projects.module.css \
      app/components/Skills.js \
      app/components/Contact.js \
      app/components/ThemeToggle.jsx \
      app/utils/smoothScroll.js
```

- [ ] **Step 2: Commit cleanup**

```bash
git add -A
git commit -m "chore: remove old component files"
```

---

## Phase 6: Testing

### Task 16: Test the Application

- [ ] **Step 1: Install dependencies and test build**

```bash
npm install
npm run build
```

- [ ] **Step 2: Test in development mode**

```bash
npm run dev
```

- [ ] **Step 3: Verify all sections render correctly**
- [ ] **Step 4: Test theme toggle**
- [ ] **Step 5: Test responsive layout**
- [ ] **Step 6: Commit final changes**

```bash
git add -A
git commit -m "feat: complete portfolio UI redesign"
```

---

## Summary

| Phase | Tasks | Status |
|-------|-------|--------|
| Foundation | Config, Styles, Data | 3 tasks |
| Layout | ThemeContext, ThemeToggle, Header, Footer | 4 tasks |
| Sections | Hero, About, Experience, Skills, Projects, Contact | 6 tasks |
| Assembly | Main Page, Layout | 2 tasks |
| Cleanup | Remove old files | 1 task |
| Testing | Build, Test | 1 task |

**Total: 17 tasks**

---

**Plan complete and saved to `docs/superpowers/plans/2026-04-06-portfolio-ui-redesign.md`**

Two execution options:

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

Which approach would you prefer?