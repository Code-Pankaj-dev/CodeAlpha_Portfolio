# 🌌 3D Developer Portfolio &mdash; Pankaj Upadhyay

[![CodeAlpha Internship](https://img.shields.io/badge/CodeAlpha-Frontend%20Development%20Internship-00f2fe?style=for-the-badge&logo=codeforces&logoColor=black)](https://www.linkedin.com/company/codealpha/)
[![GitHub Repository](https://img.shields.io/badge/GitHub-CodeAlpha__Portfolio-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Code-Pankaj-dev/CodeAlpha_Portfolio)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

---

## 📌 Project Overview

This project is a complete, production-grade personal developer portfolio engineered from the ground up for **Pankaj Upadhyay**, a Computer Science professional specializing in **Python &amp; Django development** and full-stack web solutions.

Developed as a cornerstone project for the **CodeAlpha Frontend Development Internship**, the portfolio demonstrates advanced frontend engineering capabilities without relying on external UI frameworks or third-party component libraries. Built with pure **semantic HTML5**, modern **CSS3 (Custom Properties, Flexbox, Grid, CSS 3D Transforms, Glassmorphism)**, and **vanilla JavaScript (ES6+)**, the site delivers a futuristic 3D aesthetic, dynamic theme switching, smooth motion design, and strict accessibility compliance.

All academic credentials, project records, training history, and contact details reflected across this portfolio are authentic and verified from Pankaj Upadhyay's official curriculum vitae.

---

## 🎓 CodeAlpha Frontend Development Internship Details

- **Organization**: [CodeAlpha](https://www.linkedin.com/company/codealpha/)
- **Domain / Track**: Frontend Development Internship
- **Intern Name**: Pankaj Upadhyay
- **Task**: Personal Developer Portfolio Website
- **Core Objective**: Architect and implement an interactive, fully responsive, and accessible personal developer portfolio from scratch using pure web fundamentals (HTML, CSS, JavaScript) that showcases technical skill sets, academic projects, verified achievements, and contact channels.

---

## 🔗 Live Demo & Repository Links

| Resource | Link | Description |
| :--- | :--- | :--- |
| **Portfolio GitHub Repository** | [github.com/Code-Pankaj-dev/CodeAlpha_Portfolio](https://github.com/Code-Pankaj-dev/CodeAlpha_Portfolio) | Official source repository for this portfolio |
| **Portfolio Live Demo** | [code-pankaj-dev.github.io/CodeAlpha_Portfolio](https://code-pankaj-dev.github.io/CodeAlpha_Portfolio/) | GitHub Pages live deployment *(deployable via repository settings)* |
| **Featured Project Demo (HemoCampus)** | [hemocampus.onrender.com](https://hemocampus.onrender.com/) | Live deployment of the award-winning Blood Bank Management System |
| **Featured Project Repo (HemoCampus)** | [github.com/Code-Pankaj-dev/HemoCampus](https://github.com/Code-Pankaj-dev/HemoCampus) | Source code repository for the HemoCampus Django application |
| **Learning Journey Repo** | [github.com/Code-Pankaj-dev/Python_Learning_Journey](https://github.com/Code-Pankaj-dev/Python_Learning_Journey) | Algorithms, data structures, and OOP exercises in Python |

> **Note on Portfolio Live Demo**: The codebase is configured with deployment-safe relative paths for instant hosting on **GitHub Pages** (`https://code-pankaj-dev.github.io/CodeAlpha_Portfolio/`) or **Netlify**. If not already active on your GitHub account, enable GitHub Pages via **Repository Settings &rarr; Pages &rarr; Source: Deploy from branch `main` / root**.

---

## ✨ Features & Functionality

### 1. 🪐 Custom 3D Motion & Parallax System
- **Pointer-Responsive 3D Portrait Frame**: Features multi-layered CSS 3D perspective (`preserve-3d`, `perspective: 1000px`) that calculates desktop pointer coordinates in real time to produce restrained `rotateX` and `rotateY` tilt transformations with dynamic ambient glow.
- **3D Floating Orbit Badges**: Technology tags (**Python 3**, **Django Web**, **SQLite DBMS**, and **JS &amp; CSS3**) float at distinct $Z$-depth layers (`translateZ(45px)` to `translateZ(70px)`) around the portrait with continuous fluid elevation.
- **Project Card 3D Tilt**: Desktop cards smoothly tilt on mousemove to give tactile feedback.
- **PU Monogram Branding**: Custom glassmorphic brand badge with linear gradient border and depth lighting.

### 2. 🌓 Dynamic Dark & Light Theme Engine
- **Instant Theme Switching**: Toggle button (`#themeToggle`) in the navigation bar seamlessly transitions between **Midnight Obsidian** (dark) and **Clean Slate** (light) themes.
- **System Preference Sync**: Automatically detects and respects the visitor's operating system preference (`prefers-color-scheme`).
- **State Persistence**: Theme choice is saved to `localStorage` (`pku_theme`) so user preferences persist across sessions.

### 3. 🌌 Ambient Interactive Particle Constellation
- **Custom HTML5 Canvas 2D Engine**: Lightweight vanilla JavaScript particle system rendering connecting star nodes that respond to cursor proximity.
- **Performance Optimized**: Automatically scales with device pixel ratio (`devicePixelRatio`), throttles particle count based on viewport width, and pauses execution via `document.visibilitychange` when the browser tab is hidden to save battery and GPU cycles.
- **Accessibility Respect**: Disables particle animation entirely when `prefers-reduced-motion` is active.

### 4. ⌨️ Dynamic Role Typing & Rotator
- Custom vanilla typewriter engine on `#roleRotator` that cycles through verified specializations:
  1. `Python & Django Developer`
  2. `Full-Stack Web Enthusiast`
  3. `Backend Systems Builder`
  4. `HemoCampus Project Architect`

### 5. 🛠️ Interactive Skills Filter Tabs
- Skills organized into functional categories: **All Skills**, **Backend Development**, **Frontend Development**, **Database &amp; Tools**, and **Core Computer Science**.
- Clicking any category tab dynamically filters cards with instant CSS opacity and transform transitions.
- Strictly authentic technical skills: Python, Django, SQLite, HTML5, CSS3, JavaScript, Git &amp; GitHub, and CS fundamentals (no fabricated progress bars or percentages).

### 6. 🏆 Featured Project Showcases with Original SVG Illustrations
- **HemoCampus (Blood Bank Management System)**:
  - Highlights full-stack academic project built with Python, Django, SQLite, HTML5, CSS3, and JavaScript.
  - Recipient of the **Best Project Award** for automated inventory tracking, hospital request dispatch, and responsive interface design.
  - Features an original custom SVG illustration depicting real-time blood inventory matrices (A+, B+, O+, AB+), an active cardiac pulse line, and live status indicators (no fake screenshots).
  - Working buttons for **Live Demo** on Render and **GitHub Repository**.
- **Python Learning Journey**:
  - Highlights open-source repository containing data structure implementations (linked lists, binary trees), algorithmic challenges, and OOP patterns.
  - Features an interactive SVG terminal graphic depicting unit tests and Git commit history.

### 7. 📄 Verified Interactive Resume System
- **One-Click Download**: "Download Resume" buttons point directly to the authentic [`Pankaj_Upadhyay_Resume.pdf`](assets/documents/Pankaj_Upadhyay_Resume.pdf) with the HTML5 `download` attribute.
- **In-Page Accessible Modal Viewer**: "View Full Resume" button opens an embedded modal dialog (`#resumeModal`) featuring an integrated PDF reader (`<iframe>`), close button, background backdrop dismiss, and `Escape` key listener.
- **Direct Tab View**: An "Open in Tab" button allows inspecting the document natively in a new browser tab.

### 8. 📬 Transparent Direct Contact & Quick Inquiry Composer
- **Direct Verified Channels**: Published email (`pankajupadhyay.dev@gmail.com`), phone (`+91 7393834932`), location (Kushinagar, UP, India), GitHub, and LinkedIn profiles.
- **One-Click Email Copy**: Dedicated copy button copies the email address to clipboard with instant `"Copied!"` visual feedback.
- **Client-Side Inquiry Composer**: Enables recruiters and managers to input their name, select an inquiry purpose (*Internship Opportunity*, *Junior Developer Role*, *Project Collaboration*, *Technical Discussion*), and add notes. Clicking **"Launch Email Client"** generates an authentic, formatted `mailto:` link without misleading fake backend form submissions.

### 9. ♿ Accessibility, SEO & Responsiveness
- **Semantic HTML5**: Organized with landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Keyboard Navigation**: Accessible skip-to-content link (`#main-content`), visible `:focus-visible` outline rings, and keyboard-operable modal.
- **Responsive Drawer**: Mobile hamburger menu (`#mobileToggle`) with smooth transition and `aria-expanded` toggle.
- **SEO & Social Sharing**: Complete `<meta>` tags, Open Graph (OG) tags, Twitter card tags, custom SVG/PNG favicon, and JSON-LD structured data (`schema.org/Person`).
- **Reduced Motion**: Full `@media (prefers-reduced-motion: reduce)` rules disable 3D tilts, floating orbits, and canvas loops for motion-sensitive users.

---

## 💻 Technologies Used

| Category | Technology | Usage & Implementation |
| :--- | :--- | :--- |
| **Markup** | HTML5 | Semantic landmarks, accessible ARIA attributes, structured metadata, skip link |
| **Styling** | CSS3 | Custom Properties (variables), Flexbox, CSS Grid, Media Queries, Liquid Glassmorphism |
| **3D & Visuals** | CSS 3D Transforms | `perspective`, `transform-style: preserve-3d`, `translateZ`, `rotateX`, `rotateY` |
| **Canvas** | HTML5 Canvas 2D API | Vanilla interactive particle constellation with distance-based node connections |
| **Vector Graphics** | Inline SVG | Custom project diagrams, technology emblems, cardiac pulse lines, PU monogram |
| **Scripting** | Vanilla JavaScript (ES6+) | Theme engine, pointer parallax, role rotator, modal dialog, skill filtering, mailto composer |
| **SEO & Schema** | JSON-LD / Open Graph | Rich search snippets (`schema.org/Person`), social preview cards |
| **Storage** | LocalStorage API | Persisting user dark/light theme preferences |
| **Version Control** | Git &amp; GitHub | Version tracking, branching, and repository hosting |

---

## 📁 Project Folder Structure

```text
PKU_Portfolio/
│
├── index.html                                  # Semantic single-page portfolio application
├── README.md                                   # Comprehensive project documentation
│
├── css/
│   └── style.css                               # Design tokens, CSS 3D transforms, glassmorphism, responsive styles
│
├── js/
│   └── script.js                               # Interaction engine: theme toggle, 3D tilt, canvas particles, modal
│
├── assets/
│   ├── documents/
│   │   └── Pankaj_Upadhyay_Resume.pdf          # Verified official curriculum vitae PDF
│   │
│   ├── images/
│   │   ├── favicon.png                         # High-resolution monogram browser favicon (192x192)
│   │   ├── pankaj_photo.jpg                    # High-resolution portrait photograph (1721x2292)
│   │   └── pankaj_photo.webp                   # Optimized WebP portrait for rapid Largest Contentful Paint (LCP)
│   │
│   └── icons/                                  # Vector iconography directory
│
└── .git/                                       # Git version control metadata
```

---

## 🖼️ Screenshots Section

> *Visual captures of the portfolio across different sections and theme modes.*

| Desktop Hero (Dark Theme) | Desktop Featured Projects |
| :---: | :---: |
| ![Desktop Hero Preview](assets/images/pankaj_photo.webp) <br> *(Hero section with 3D tilted portrait & floating orbit badges)* | *HemoCampus project card with interactive SVG architecture illustration* |

| Skills & Category Filters | Verified Resume Section & Modal |
| :---: | :---: |
| *Category filtering tabs for Backend, Frontend, and Database* | *Interactive in-page PDF resume reader and download CTAs* |

| Mobile Responsive Layout | Light Mode Appearance |
| :---: | :---: |
| *Mobile drawer navigation & stacked responsive layout (320px–768px)* | *Clean Slate theme with accessible high-contrast colors* |

*(Note: Custom full-page screenshots can be captured and placed into `assets/images/screenshots/` to display additional previews in this section).*

---

## ⚙️ Installation and Setup

### Prerequisites
To run this project locally, you only need:
- A modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari).
- *(Optional)* [Git](https://git-scm.com/) for version control.
- *(Optional)* [Python 3](https://www.python.org/) or [Node.js](https://nodejs.org/) to run a lightweight local HTTP server.

### Clone the Repository
```bash
git clone https://github.com/Code-Pankaj-dev/CodeAlpha_Portfolio.git
cd CodeAlpha_Portfolio
```

---

## 🚀 How to Run the Project

You can run the portfolio locally using any of the following methods:

### Method 1: Using Python Built-in Server (Recommended)
Python is available on most systems. Open your terminal in the project directory and run:

```bash
# Python 3
python -m http.server 8000
```
Open your browser and navigate to:
```text
http://localhost:8000
```

### Method 2: Using Node.js `npx serve` or `live-server`
```bash
npx serve .
```
Navigate to the local URL displayed in the console (e.g., `http://localhost:3000`).

### Method 3: Using VS Code Live Server
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension by Ritwick Dey.
3. Right-click on `index.html` and select **"Open with Live Server"**.

### Method 4: Direct Browser Opening
Because this portfolio is built with pure vanilla HTML, CSS, and JavaScript with self-contained assets, you can double-click `index.html` or open it directly in any browser:
```text
file:///path/to/PKU_Portfolio/index.html
```
*(Note: Some browsers apply strict local CORS restrictions on `<iframe>` PDF rendering when opened via the `file://` protocol. Running via Method 1 or Method 2 ensures full iframe PDF modal preview support).*

---

## 🌐 Deployment Instructions

### Deploy to GitHub Pages (Free)
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete developer portfolio"
   git push origin main
   ```
2. Navigate to your repository on GitHub:
   - Click **Settings** &rarr; **Pages** (under the "Code and automation" sidebar).
   - Under **Build and deployment &rarr; Source**, choose **Deploy from a branch**.
   - Under **Branch**, select `main` and set the folder to `/ (root)`.
   - Click **Save**.
3. Within 1–2 minutes, your portfolio will be published live at:
   `https://code-pankaj-dev.github.io/CodeAlpha_Portfolio/`

### Deploy to Netlify
- **Drag &amp; Drop**: Log in to [Netlify](https://app.netlify.com/), drag the `PKU_Portfolio` folder onto the dashboard, and your site goes live instantly.
- **Git Continuous Deployment**: Connect your GitHub repository to Netlify, leave the build command blank, set publish directory to `.`, and click **Deploy Site**.

---

## 👤 Author Information

**Pankaj Upadhyay**  
*Python &amp; Django Developer | Full-Stack Web Development Enthusiast*  
*Frontend Development Intern &mdash; CodeAlpha*

- **Location**: Kushinagar, Uttar Pradesh 274302, India
- **Email**: [pankajupadhyay.dev@gmail.com](mailto:pankajupadhyay.dev@gmail.com)
- **Phone**: [+91 7393834932](tel:+917393834932)
- **GitHub**: [@Code-Pankaj-dev](https://github.com/Code-Pankaj-dev)
- **LinkedIn**: [in/pankaj-dev12](https://www.linkedin.com/in/pankaj-dev12)
- **Education**: Diploma in Computer Science &amp; Engineering &bull; Mahamaya Polytechnic of Information Technology, Bansi, Siddharth Nagar (2024&ndash;Present)

---

## 📜 License

This project was built for academic and internship submission under the **CodeAlpha Frontend Development Internship**. All rights to personal documents, photographs, and original branding are retained by **Pankaj Upadhyay**. Source code structure is open for educational reference under the [MIT License](LICENSE).
