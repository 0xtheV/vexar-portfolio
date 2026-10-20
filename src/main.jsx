import React from 'react';
import { createRoot } from 'react-dom/client';
import IntroSplash from './components/IntroSplash.jsx';
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

// A plain, reliable navigation rail replaces the canvas-driven GooeyNav.
// The old animated overlay could drift away from its label after CSS scaling.
const navRoot = document.getElementById('gooey-nav-root');
if (navRoot) {
  const nav = document.createElement('div');
  nav.className = 'site-nav';
  nav.setAttribute('aria-label', 'Main navigation');
  nav.innerHTML = navItems.map((item, index) =>
    `<a class="site-nav__link${index === 0 ? ' is-active' : ''}" href="${item.href}"${index === 0 ? ' aria-current="location"' : ''}>${item.label}</a>`
  ).join('');
  navRoot.replaceChildren(nav);

  const links = [...nav.querySelectorAll('.site-nav__link')];
  const setActive = (link) => {
    links.forEach((candidate) => {
      const active = candidate === link;
      candidate.classList.toggle('is-active', active);
      if (active) candidate.setAttribute('aria-current', 'location');
      else candidate.removeAttribute('aria-current');
    });
  };

  links.forEach((link) => {
    link.addEventListener('click', () => setActive(link));
  });

  if ('IntersectionObserver' in window) {
    const targets = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const active = links.find((link) => link.hash === `#${visible.target.id}`);
      if (active) setActive(active);
    }, { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.15, 0.35, 0.6] });
    targets.forEach((target) => observer.observe(target));
  }
}


