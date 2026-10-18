import React from 'react';
import { createRoot } from 'react-dom/client';
import GooeyNav from './components/GooeyNav.jsx';
import FluxLines from './components/FluxLines.jsx';
import IntroSplash from './components/IntroSplash.jsx';
import ScrambledText from './components/ScrambledText.jsx';
import ScrollReveal from './components/ScrollReveal.jsx';
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

const splashRoot = document.getElementById('intro-splash-root');
if (splashRoot) {
  createRoot(splashRoot).render(
    <IntroSplash
      onStart={() => {
        document.body.classList.remove('site-locked');
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
        window.scrollTo({ top: 0, behavior: 'instant' });
        splashRoot.classList.add('intro-splash-exit');
        window.setTimeout(() => splashRoot.remove(), 500);
      }}
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

const scrambledRoot = document.getElementById('hero-scrambled-root');
if (scrambledRoot) {
  createRoot(scrambledRoot).render(
    <ScrambledText
      className="hero-scrambled-copy"
      effect="scramble"
      radius={100}
      strength={1}
      trail={0.6}
      duration={1.2}
      speed={0.5}
      scrambleChars=".:"
      clickBurst
      intro
    >
      {'I build communities people want to stay in and help them become active contributors through clear communication, strong relationships, ecosystem growth and content that gives people a reason to care'}
    </ScrambledText>
  );
}

const whatIDoScrambledRoot = document.getElementById('what-i-do-scrambled-root');
if (whatIDoScrambledRoot) {
  createRoot(whatIDoScrambledRoot).render(
    <ScrollReveal
      containerClassName="what-i-do-scroll-reveal"
      textClassName="what-i-do-scroll-reveal-text"
      highlightColor={null}
      mode="scrub"
      splitBy="words"
      effect="fade"
      stagger={0.05}
      duration={0.8}
      smoothing={0}
      baseOpacity={0.1}
      baseRotation={3}
      baseOffset={0}
      enableBlur={true}
      blurStrength={4}
    >
      {'I build communities people want to stay in and help them become active contributors through clear communication, strong relationships, ecosystem growth and content that gives people a reason to care'}
    </ScrollReveal>
  );
}
