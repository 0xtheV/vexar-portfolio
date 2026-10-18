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

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Results', href: '#results' },

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

const particlesRoot = document.getElementById('site-particles-root');
if (particlesRoot) {
  createRoot(particlesRoot).render(
    <Particles
      particleColors={['#ffffff']}
      particleCount={200}
      particleSpread={10}
      speed={0.1}
      particleBaseSize={100}
      glow={0.5}
      twinkle={0.3}
      moveParticlesOnHover={true}
      hoverEffect="parallax"
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
      wordAnimationEnd="bottom bottom"
      baseOpacity={0.1}
      baseRotation={0}
      baseOffset={0}
      enableBlur={true}
      blurStrength={4}
    >
      {'I build communities people want to stay in and help them become active contributors through clear communication, strong relationships, ecosystem growth and content that gives people a reason to care'}
    </ScrollReveal>
  );
}

const contactTechTextRoot = document.getElementById('contact-tech-text-root');
if (contactTechTextRoot) {
  createRoot(contactTechTextRoot).render(
    <div className="contact-tech-text-stack">
      <div className="contact-tech-line">
        <TechText
          text="BUILD"
          fontWeight={800}
          fontSize={150}
          reveal="letter"
          dashLength={4}
          dashGap={2}
          specks={15}
          intro="none"
          introDuration={2}
          clickKick
          guides={false}
          align="left"
          color="#f2f4f7"
          accentColor="#4d7cfe"
          className="contact-tech-canvas"
        />
      </div>
      <div className="contact-tech-line">
        <TechText
          text="SOMETHING"
          fontWeight={800}
          fontSize={150}
          reveal="letter"
          dashLength={4}
          dashGap={2}
          specks={15}
          intro="none"
          introDuration={2}
          clickKick
          guides={false}
          align="left"
          color="#4d7cfe"
          accentColor="#f2f4f7"
          className="contact-tech-canvas"
        />
      </div>
      <div className="contact-tech-line">
        <TechText
          text="INTERESTING"
          fontWeight={800}
          fontSize={150}
          reveal="letter"
          dashLength={4}
          dashGap={2}
          specks={15}
          intro="none"
          introDuration={2}
          clickKick
          guides={false}
          align="left"
          color="#f2f4f7"
          accentColor="#4d7cfe"
          className="contact-tech-canvas"
        />
      </div>
    </div>
  );
}

const blurTextConfig = {
  effect: 'blur',
  animateBy: 'words',
  direction: 'top',
  staggerFrom: 'start',
  trigger: 'view',
  threshold: 0.05,
  rootMargin: '0px 0px -5% 0px',
  delay: 420,
  stepDuration: 0.9,
  blur: 14,
  distance: 52,
  onAnimationComplete: () => console.log('Hero text animation completed!')
};
[
  ['hero-blur-line-1', 'MAKING CRYPTO', 'hero-blur-white'],
  ['hero-blur-line-2', 'IMPOSSIBLE TO', 'hero-blur-outline-text'],
  ['hero-blur-line-3', 'IGNORE', 'hero-blur-blue']
].forEach(([id, text, className]) => {
  const root = document.getElementById(id);
  if (root) {
    createRoot(root).render(
      <BlurText text={text} className={`hero-blur-piece ${className}`} {...blurTextConfig} />
    );
  }
});
