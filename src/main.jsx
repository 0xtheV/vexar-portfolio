import React from 'react';
import { createRoot } from 'react-dom/client';
import GooeyNav from './components/GooeyNav.jsx';
import ScrambledText from './components/ScrambledText.jsx';
import ScrollReveal from './components/ScrollReveal.jsx';
import TechText from './components/TechText.jsx';
import BlurText from './components/BlurText.jsx';
import './react-bits-layer.css';
import './lenis-inspired.css';
import './responsive-editorial.css';

const navItems = [
  { label: 'Work', href: '#case-studies' },
  { label: 'Results', href: '#results' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

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

detectDeviceProfile();
window.addEventListener('resize', detectDeviceProfile, { passive: true });
window.addEventListener('orientationchange', detectDeviceProfile, { passive: true });
window.visualViewport?.addEventListener('resize', detectDeviceProfile, { passive: true });

const mount = (id, element) => {
  const root = document.getElementById(id);
  if (root) createRoot(root).render(element);
};

mount('gooey-nav-root', (
  <GooeyNav
    items={navItems}
    initialActiveIndex={0}
    theme="dark"
    size="md"
    frame
    particleCount={15}
    spread={56}
    animationTime={600}
    timeVariance={300}
    gooeyness={0.5}
    wobble={0.5}
    hoverEffect
    onChange={() => {}}
  />
));

mount('hero-blur-line-1', <BlurText text="COMMUNITIES." delay={120} animateBy="letters" direction="top" effect="focus" blur={8} distance={24} stepDuration={0.24} />);
mount('hero-blur-line-2', <BlurText text="CONTENT THAT" delay={180} animateBy="letters" direction="top" effect="focus" blur={8} distance={24} stepDuration={0.24} />);
mount('hero-blur-line-3', <BlurText text="MOVES." delay={240} animateBy="letters" direction="top" effect="focus" blur={8} distance={24} stepDuration={0.24} color="var(--accent)" />);
mount('hero-scrambled-root', <ScrambledText radius={90} duration={1.1} speed={0.42} effect="scramble" color="inherit">I help teams and creators build active communities, communicate clearly, and grow their presence across social platforms. My work combines community operations, content strategy, audience engagement and creator coordination across crypto, trading and digital communities.</ScrambledText>);
mount('what-i-do-scrambled-root', <ScrollReveal baseOpacity={0.12} enableBlur blurStrength={3} baseRotation={2} stagger={0.035} splitBy="words" effect="fade" mode="scrub">I build communities people want to stay in and help them become active contributors through clear communication, strong relationships, ecosystem growth and content that gives people a reason to care.</ScrollReveal>);
mount('contact-tech-text-root', <TechText text="LET'S TALK" fontSize={150} fontWeight={800} color="#f2f4f7" accentColor="#4D7CFE" align="left" reach={180} softness={0.72} intro="draw" introDuration={1.6} />);
