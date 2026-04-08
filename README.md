# 🚀 Gunawan Wibisono Portfolio

> A modern, minimalist portfolio website showcasing DevOps expertise and technical excellence.

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-cyan?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.3-pink?style=flat-square&logo=framer)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

- 🎨 **Modern Minimalist Design** - Warm neutral palette with editorial elegance
- 🌙 **Dark Mode** - Automatic system preference detection with manual toggle
- 📱 **Fully Responsive** - Mobile-first approach, works on all devices
- ⚡ **Smooth Animations** - Scroll-triggered reveals and micro-interactions
- 🔧 **Production Ready** - Static export for CDN deployment
- 🐳 **Docker Support** - Containerized deployment with Docker & Docker Compose

## 🎯 Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 14.2.4 |
| **UI Library** | React 18 |
| **Styling** | Tailwind CSS 3.4.1 |
| **Animations** | Framer Motion 11.3.21 |
| **Icons** | React Icons 5.2.1 |
| **Runtime** | Node.js 18+ |

## 📂 Project Structure

```
├── app/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx       # Navigation header
│   │   │   └── Footer.jsx       # Site footer
│   │   ├── sections/
│   │   │   ├── Hero.jsx         # Hero landing section
│   │   │   ├── About.jsx        # About me section
│   │   │   ├── Experience.jsx   # Work experience timeline
│   │   │   ├── Skills.jsx       # Skills showcase
│   │   │   ├── Projects.jsx     # Projects gallery
│   │   │   └── Contact.jsx      # Contact information
│   │   └── ui/
│   │       └── ThemeToggle.jsx  # Dark/light mode toggle
│   ├── contexts/
│   │   └── ThemeContext.jsx     # Theme state management
│   └── data/
│       ├── experience.js        # Experience data
│       ├── skills.js           # Skills data
│       └── projects.js         # Projects data
├── public/                     # Static assets
├── Dockerfile                  # Production Docker image
├── Dockerfile.dev             # Development Docker image
├── docker-compose.yml          # Docker Compose configuration
└── tailwind.config.js         # Tailwind CSS configuration
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Docker & Docker Compose (optional)

### Local Development

```bash
# Clone the repository
git clone https://github.com/hellogunawan99/my_portfolio_nextjs.git
cd my_portfolio_nextjs

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3010](http://localhost:3010) in your browser.

### Docker Deployment

#### Production Mode

```bash
# Build and run production container
docker-compose up -d portfolio

# View logs
docker-compose logs -f portfolio
```

#### Development Mode (with hot reload)

```bash
# Start development container
docker-compose up portfolio-dev
```

#### Stop Containers

```bash
docker-compose down
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🐳 Docker Commands Reference

```bash
# Build image
docker build -t gunawan-portfolio .

# Run container
docker run -p 3010:3010 --name portfolio gunawan-portfolio

# Stop and remove container
docker stop portfolio && docker rm portfolio

# Docker Compose
docker-compose up -d          # Start in detached mode
docker-compose down            # Stop containers
docker-compose logs -f         # View logs
docker-compose restart        # Restart containers
docker-compose build --no-cache  # Rebuild without cache
```

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Background Primary | `#FAF9F7` | Main background |
| Background Secondary | `#F5F3EF` | Section backgrounds |
| Accent | `#C4846C` | Highlights, CTAs |
| Text Primary | `#2D2D2D` | Main text |
| Text Secondary | `#6B6B6B` | Secondary text |

### Dark Mode

| Color | Hex | Usage |
|-------|-----|-------|
| Background Primary | `#1C1C1C` | Main background |
| Background Secondary | `#252525` | Section backgrounds |
| Accent | `#C4846C` | Highlights (same) |
| Text Primary | `#F5F3EF` | Main text |
| Text Secondary | `#9CA3AF` | Secondary text |

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 3010) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🚢 Deployment

### Static Export

The project is configured for static export, deployable to:

- **Vercel** (recommended) - Zero configuration
- **Netlify** - Drag & drop deployment
- **GitHub Pages** - Free hosting
- **AWS S3** - Scalable storage
- **Any CDN** - Static file hosting

```bash
# Generate static files
npm run build
# Static output in /out directory
```

### Docker Deployment

Build and deploy with Docker:

```bash
# Pull latest or build
docker-compose up -d --build portfolio

# Access at http://localhost:3010
```

## 👤 About Me

**Gunawan Wibisono**  
DevOps Engineer & System Administrator  
Support Engineer 24/7 APAC @ Hexagon

### Experience

- **Support Engineer 24/7 APAC** @ Hexagon (Dec 2025 - Present)
- **Software Support Engineer 24/7 APAC** @ Hexagon (May - Nov 2025)
- **System Administrator** @ PT. Saptaindra Sejati (Nov 2022 - Apr 2025)

### Skills

- **DevOps:** Docker, Nginx, Linux Admin
- **Languages:** Python, Go, JavaScript, SQL
- **Tools:** GitHub, Next.js, VS Code, Trae
- **AI Tools:** Claude, ChatGPT, MiniMax, Deepseek, Claude Code

## 🔗 Connect

- LinkedIn: [gunawan-wibisono](https://www.linkedin.com/in/gunawan-wibisono-9aa883237/)
- GitHub: [hellogunawan99](https://github.com/hellogunawan99)
- Email: gunawanwibisono4712@gmail.com

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js | Deployed with Docker 🐳
