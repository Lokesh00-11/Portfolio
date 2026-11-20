# 🌌 Chowduvada Lokesh — Personal Developer Portfolio

[![React](https://img.shields.io/badge/React-19-61dafb?style=flat&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?style=flat&logo=vite)](https://vitejs.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-R3F-black?style=flat&logo=three.js)](https://threejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Personal portfolio of **Chowduvada Lokesh** — Aspiring Full Stack & AI/ML Engineer (B.Tech CSE '26). Built with a modern, high-performance dark theme featuring interactive 3D visualizations, smooth hardware-accelerated scrolling, and full-stack project showcases.

---

## 🚀 Key Features

- **🪐 Interactive 3D Tech Universe:** Powered by React Three Fiber and Three.js, featuring an interactive orbiting planetary system representing core technical skills with hover tooltips and physics mouse tracking.
- **⚡ Ultra-Fast Code Splitting:** 3D dependencies are lazily loaded, reducing initial JavaScript bundle to ~112 kB (~35 kB gzipped) for instant First Contentful Paint.
- **🌊 Lenis Smooth Scrolling:** Seamless, cinematic momentum scrolling with native touch fallback.
- **💎 Refined Dark Cyber Aesthetic:** Deep slate/indigo palette (`#060813`) with subtle glassmorphism, floating ambient orbs, and dynamic SVG gradients.
- **📱 Responsive & Touch-Aware:** Hardware-accelerated custom cursor enabled strictly on precision pointer devices (`@media (pointer: fine)`), preventing mobile touch bugs.
- **📬 Streamlined Contact Flow:** Direct inquiry form with one-click email clipboard copy toast.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 19 + Vite
- **3D Graphics & Canvas:** Three.js, `@react-three/fiber`, `@react-three/drei`
- **Animations:** Framer Motion
- **Scroll Engine:** `@studio-freight/lenis`
- **Typography:** Geist, Inter, and Syne
- **Icons:** React Icons (`fa`, `si`), Lucide React

---

## 📁 Project Structure

```
lokesh-portfolio/
├── public/
│   ├── models/            # 3D assets & profile photography
│   ├── projects/          # High-resolution project previews
│   ├── resume/            # Current resume PDF
│   └── video/             # Ambient background video loops
├── src/
│   ├── components/
│   │   ├── About.jsx           # Bio, academic background, and highlights
│   │   ├── Avatar3D.jsx        # 3D Three.js Saturn tech stack scene
│   │   ├── Background.jsx      # Animated ambient canvas & glowing orbs
│   │   ├── Contact.jsx         # Direct contact channels & copy-email tool
│   │   ├── Cursor.jsx          # Mouse follower (desktop only)
│   │   ├── Experience.jsx      # Internships & education timeline
│   │   ├── Footer.jsx          # Social links and copyright
│   │   ├── Hero.jsx            # Dynamic headline, status badge, 3D viewport
│   │   ├── Navbar.jsx          # Glassmorphic floating nav with active pills
│   │   ├── Projects.jsx        # Featured full-stack & AI project cards
│   │   ├── Skills.jsx          # Honeycomb technical skill grid
│   │   └── SocialSidebar.jsx   # Fixed desktop social icons
│   ├── App.jsx                 # Application root & Lenis initialization
│   ├── global.css              # Design tokens, typography & CSS utilities
│   └── main.jsx                # React DOM mount point
├── index.html
├── package.json
└── vite.config.js
```

---

## 💻 Getting Started Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/Lokesh00-11/portfolio.git

# Navigate into project directory
cd portfolio/lokesh-portfolio

# Install dependencies
npm install

# Start the Vite local development server
npm run dev
```

### Production Build

```bash
# Compile and optimize for production
npm run build

# Preview the production build locally
npm run preview
```

---

## 👨‍💻 Author

**Chowduvada Lokesh**
- **Education:** B.Tech in CSE (AI & ML) — Nadimpalli Satyanarayana Raju Institute of Technology (2022–2026) | CGPA: 8.70 / 10
- **Email:** [chowduvadalokesh11@gmail.com](mailto:chowduvadalokesh11@gmail.com)
- **LinkedIn:** [linkedin.com/in/chowduvada-lokesh](https://www.linkedin.com/in/chowduvada-lokesh)
- **GitHub:** [github.com/Lokesh00-11](https://github.com/Lokesh00-11)
