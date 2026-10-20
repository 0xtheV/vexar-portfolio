import React from 'react';
import { createRoot } from 'react-dom/client';
import GooeyNav from './components/GooeyNav.jsx';
import IntroSplash from './components/IntroSplash.jsx';
import ScrambledText from './components/ScrambledText.jsx';
import ScrollReveal from './components/ScrollReveal.jsx';
import TechText from './components/TechText.jsx';
import Particles from './components/Particles.jsx';
import BlurText from './components/BlurText.jsx';
import './react-bits-layer.css';
import './lenis-inspired.css';

// Navigation is intentionally kept to four distinct destinations so it fits on phones.
const navItems = [
  { label: 'Work', href: '#case-studies' },
  { label: 'Results', href: '#results' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

// Classify the current viewing context by viewport width, not user-agent strings.
// CSS media queries remain responsible for layout; this profile also lets effects
// use lighter settings on smaller screens and updates when the viewport changes.
function detectDeviceProfile() {
  const width = Math.round(window.visualViewport?.width || window.innerWidth);
  const device = width <= 600 ? 'mobile' : width <= 1024 ? 'tablet' : 'desktop';
  const hasTouch = window.matchMedia('(pointer: coarse)').matches;
  const hasHover = window.matchMedia('(any-hover: hover)').matches;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.dataset.device = device;
  document.documentElement.dataset.input = hasTouch ? 'touch' : 'pointer';
  return { device, width, hasTouch, hasHover, reducedMotion };
}

const initialDeviceProfile = detectDeviceProfile();
window.addEventListener('resize', detectDeviceProfile, { passive: true });
window.addEventListener('orientationchange', detectDeviceProfile, { passive: true });
window.visualViewport?.addEventListener('resize', detectDeviceProfile, { passive: true });

const navRoot = document.getElementById('gooey-nav-root');
if (navRoot) {
  createRoot(navRoot).render(
    <GooeyNav
      items={navItems}
      initialActiveIndex={0}
      theme="dark"
      size="md"
      frame={true}
      particleCount={15}
      spread={56}
      animationTime={600}
      timeVariance={300}
      gooeyness={0.5}
      wobble={0.5}
      hoverEffect={true}
      onChange={() => {}}
    />
  );
}


