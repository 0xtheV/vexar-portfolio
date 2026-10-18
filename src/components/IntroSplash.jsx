import React from 'react';
import FluxLines from './FluxLines.jsx';
import StarBorder from './StarBorder.jsx';

export default function IntroSplash({ onStart }) {
  return (
    <main className="intro-splash" aria-label="Welcome to VEXAR">
      <div className="intro-splash__background" aria-hidden="true">
        <FluxLines
          colors={['#ffffff', '#ffffff', '#ffffff']}
          glow={2}
          rimWidth={0.2}
          lineWidth={1}
          flowDirection="down"
          mouseInteraction={true}
          clickSwirl={true}
        />
      </div>
      <div className="intro-splash__shade" aria-hidden="true" />
      <div className="intro-splash__content">
        <div className="intro-splash__eyebrow">VEXAR.FYI / COMMUNITY / GROWTH</div>
        <h1 className="intro-splash__title">BUILDING IN WEB3<span>START HERE.</span></h1>
        <p className="intro-splash__copy">Community, ecosystem growth and social strategy for crypto projects that want to matter</p>
        <div className="intro-splash__button">
          <StarBorder
            as="button"
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
            onClick={onStart}
          >
            Get started
          </StarBorder>
        </div>
      </div>
    </main>
  );
}
