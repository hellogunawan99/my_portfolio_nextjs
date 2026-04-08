# Gunawan Wibisono Portfolio

A modern, minimalist portfolio website built with Next.js 14, featuring a warm neutral design with editorial elegance.

## Tech Stack

- **Framework:** Next.js 14.2.4
- **Styling:** Tailwind CSS 3.4.1
- **Animations:** Framer Motion 11.3.21
- **Icons:** React Icons 5.2.1

## Design Features

- Warm neutral color palette (cream backgrounds, terracotta accents)
- Editorial elegance with generous whitespace
- Dark mode support
- Smooth scroll-triggered animations
- Fully responsive design

## Getting Started

First, install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3010](http://localhost:3010) with your browser to see the result.

## Project Structure

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
├── globals.css
├── layout.js
└── page.js
```

## Scripts

```bash
npm run dev     # Start development server (port 3010)
npm run build   # Build for production
npm run start   # Start production server
npm run lint   # Run ESLint
```

## Deployment

The project is configured for static export. Deploy to Vercel, Netlify, or any static hosting provider.

```bash
npm run build
```

Static files will be generated in the `out` directory.

## Author

**Gunawan Wibisono**  
DevOps Engineer & System Administrator  
Support Engineer 24/7 APAC @ Hexagon

- LinkedIn: [gunawan-wibisono](https://www.linkedin.com/in/gunawan-wibisono-9aa883237/)
- GitHub: [hellogunawan99](https://github.com/hellogunawan99)
- Email: gunawanwibisono4712@gmail.com
