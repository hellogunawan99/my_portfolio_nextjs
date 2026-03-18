# Claude Code Context - Portfolio Project

## Project Overview
This is a professional portfolio website for Gunawan Wibisono, built with Next.js 14. It showcases experience, skills, projects, and contact information with modern animations and dark mode support.

## Tech Stack
- **Framework:** Next.js 14.2.4 (App Router)
- **Styling:** Tailwind CSS 3.4.1
- **Animations:** Framer Motion 11.3.21
- **Icons:** React Icons 5.2.1
- **Language:** JavaScript (React 18)

## Key Features

### 1. Modern Animations (Framer Motion)
- Scroll-triggered fade-in animations for all sections
- Hover effects on buttons and cards
- Stagger animations for lists and grids
- Animated skill progress bars
- Slide-in mobile menu transitions

### 2. Dark Mode Support
- Theme toggle button (top-right corner)
- System preference detection
- Persistent theme storage (localStorage)
- Complete dark mode styling for all components

### 3. Performance Optimizations
- OptimizedImage component with loading states
- Skeleton loading animations
- Lazy loading for project images
- Error handling for failed image loads

### 4. Responsive Design
- Mobile-first approach
- Breakpoint-based layouts
- Touch-friendly interactions
- Adaptive navigation (hamburger menu on mobile)

## Project Structure

```
app/
├── components/
│   ├── About.js              # About section with animations
│   ├── Contact.js            # Contact form and social links
│   ├── Experience.js         # Timeline of work/education
│   ├── Header.jsx            # Navigation with mobile menu
│   ├── OptimizedImage.jsx    # Custom image component with loading
│   ├── Projects.js           # Project showcase with lazy loading
│   ├── Skills.js             # Skills with progress bars
│   ├── ThemeToggle.jsx       # Dark mode toggle button
│   └── Footer.js             # Site footer
├── contexts/
│   └── ThemeContext.jsx      # Theme provider context
├── layout.js                 # Root layout with theme provider
└── page.js                   # Home page component composition
public/                       # Static assets (images, PDFs)
tailwind.config.js            # Tailwind configuration (dark mode enabled)
```

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Component Patterns

### Using Animations
All components use Framer Motion for animations:
```javascript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

### Dark Mode Classes
Use Tailwind's dark mode prefix:
```javascript
className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300"
```

### Image Optimization
Use OptimizedImage for automatic loading states:
```javascript
<OptimizedImage
  src="/image.png"
  alt="Description"
  width={400}
  height={300}
  priority={true} // For above-the-fold images
/>
```

## Recent Improvements (March 2026)

### Completed
- ✅ Added Framer Motion animations throughout
- ✅ Implemented dark mode toggle
- ✅ Optimized image loading with skeleton screens
- ✅ Cleaned up commented code
- ✅ Fixed icon inconsistencies
- ✅ Enhanced mobile menu with animations

### Potential Future Enhancements
- Add SEO optimization (meta tags, Open Graph)
- Add blog/articles section
- Add testimonials section
- Add certifications section
- Implement form validation for contact
- Add analytics tracking
- Create sitemap.xml
- Add robots.txt

## Git Workflow

### Branches
- `main` - Production branch
- `test-pr` - Testing/development branch

### Commit Convention
```
feat: new feature
fix: bug fix
docs: documentation changes
style: formatting, missing semi colons, etc
refactor: refactoring production code
test: adding tests
chore: updating build tasks, package manager configs, etc
```

### Pull Request Process
1. Create/checkout feature branch
2. Make changes and commit
3. Push to remote
4. Create PR using: `gh pr create --base main --head feature-branch`

## Important Notes

### Theme Provider
The app uses a custom ThemeContext that must wrap all components. It's added in `app/layout.js`.

### Image Assets
- Profile image: `/gunawan.png`
- Project images: `/display_status.jpeg`, `/truck_distance.jpeg`, `/ip_monitoring.jpeg`, `/migration.jpeg`
- Organization logos: Various PNG files in `/public`
- Resume: `/gunawan_resume.pdf`

### Color Scheme
- Primary: Orange (text-orange-400, bg-orange-400)
- Dark background: gray-900
- Light background: gray-100
- Accent: blue-500 (for links and headings)

### Contact Information
- Email: gunawanwibisono4712@gmail.com
- GitHub: https://github.com/hellogunawan99
- LinkedIn: https://www.linkedin.com/in/gunawan-wibisono-9aa883237/
- Instagram: https://www.instagram.com/hello.gunawan/
- WhatsApp: +6285158735552
- Telegram: https://t.me/hellogunawan
- Twitter/X: https://x.com/Gunawan96429055
- Medium: https://medium.com/@gunawanwibisono4712

## Dependencies Status

### Security
Run `npm audit` to check for vulnerabilities. Currently 14 vulnerabilities (1 low, 4 moderate, 8 high, 1 critical).

### Key Dependencies
- next: 14.2.4
- react: ^18
- react-dom: ^18
- framer-motion: ^11.3.21
- react-icons: ^5.2.1
- tailwindcss: ^3.4.1

## Development Server
The development server runs on http://localhost:3000

## Deployment
The project can be deployed to Vercel (recommended for Next.js) or any Node.js hosting platform.

---

**Last Updated:** March 19, 2026
**Maintainer:** Gunawan Wibisono
**Assisted by:** Claude Code (Anthropic)
