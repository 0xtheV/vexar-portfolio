import React from 'react';
import { createRoot } from 'react-dom/client';
import GooeyNav from './components/GooeyNav.jsx';
import FluxLines from './components/FluxLines.jsx';
import './react-bits-layer.css';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

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
      onChange={(index, item) => console.log(index, item.label)}
    />
  );
}

const fluxRoot = document.getElementById('flux-lines-react');
if (fluxRoot) {
  createRoot(fluxRoot).render(
    <FluxLines
      colors={['#ffffff', '#ffffff', '#ffffff']}
      glow={2}
      rimWidth={0.2}
      lineWidth={1}
      flowDirection="down"
      mouseInteraction={true}
      clickSwirl={true}
    />
  );
}
