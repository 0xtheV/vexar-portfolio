import React from 'react';
import { createRoot } from 'react-dom/client';
import GooeyNav from './components/GooeyNav.jsx';
import FluxLines from './components/FluxLines.jsx';
import StarBorder from './components/StarBorder.jsx';
import './react-bits-layer.css';

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Results', href: '#results' },
  { label: 'Warzone', href: '#warzone' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'About', href: '#about' },
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

const ctaRoot = document.getElementById('star-border-cta-root');
if (ctaRoot) {
  createRoot(ctaRoot).render(
    <StarBorder
      as="a"
      href="#work"
      color="#ffffff"
      trailColor="#ffffff"
      duration={4}
      direction="clockwise"
      stars={1}
      trailLength={0.3}
      thickness={1}
      radius={12}
      glow={0.6}
      hover="lap"
      sparkle={false}
      clickPulse
      theme="dark"
    >
      Get started
    </StarBorder>
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
