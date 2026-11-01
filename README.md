# Yassine — 3D Creator Portfolio

An immersive, interactive front-end portfolio for a 3D Creator. This project features a custom WebGL-powered "Living Portrait" that reacts to mouse movements, clicks, and scrolls, alongside modern scroll animations and layout effects.

🔗 **Live Demo:** [https://brilliant-dango-3cb9b8.netlify.app](https://brilliant-dango-3cb9b8.netlify.app)

## ✨ Features

- **The Living Portrait:** A fully interactive, WebGL-rendered 3D face. It tracks the user's cursor, blinks, reacts to hover states, stretching physics, and idle animations (powered by vanilla WebGL and custom physics simulation).
- **Scroll-Synced Marquee:** Two rows of GIFs moving in opposite directions based on the page scroll offset.
- **Character-by-Character Text Reveal:** The "About Me" paragraph reveals its opacity smoothly as you scroll.
- **Sticky Stacking Projects:** Project cards stack on top of each other with a scaling effect as you scroll down.
- **Fully Responsive:** Fluid typography using `clamp()` and a mobile-first approach.
- **Dark Aesthetic:** Deep `#0C0C0C` background with gradient text highlights, styled using the Kanit font.

## 🛠️ Built With

- **HTML5** & Semantic markup
- **CSS3** (Custom properties, Flexbox, Grid, Animations)
- **Vanilla JavaScript** (ES6+)
- **WebGL** (Custom shaders for the interactive portrait physics)
- **Google Fonts** (Kanit: 300-900)
- **Netlify** (Hosting & Deployment)

## 📁 Project Structure

```text
project/
├── index.html          # Main HTML file (includes inline CSS/JS for single-file version)
├── css/                # (If using modular version) Main styles and section-specific styles
├── js/                 # (If using modular version) UI logic and WebGL portrait engine
└── data/               # (If using modular version) Arrays for marquee images and project data
