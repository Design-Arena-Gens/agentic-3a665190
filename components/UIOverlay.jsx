"use client";

import { useEffect } from 'react';
import gsap from 'gsap';

export default function UIOverlay() {
  useEffect(() => {
    gsap.fromTo(
      '.hero h1',
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out', delay: 0.15 }
    );
    gsap.fromTo(
      '.hero p',
      { y: 14, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.0, ease: 'power3.out', delay: 0.35 }
    );
  }, []);

  return (
    <div className="overlay">
      <nav className="navbar">
        <div className="brand">
          <b>Solar</b><span>System</span><span style={{ opacity: 0.5 }}>/</span><span>Portfolio</span>
        </div>
        <div className="navlinks">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="https://agentic-3a665190.vercel.app" rel="noreferrer" target="_blank">Live</a>
        </div>
      </nav>

      <header className="hero">
        <h1>Crafting Interfaces for the Cosmic Age</h1>
        <p>
          I design and build immersive, performant web experiences using Next.js, React Three Fiber, and
          real-time animations. Explore my work as planets orbit a luminous sun.
        </p>
        <div className="cta">
          <a href="#projects">View Projects</a>
          <a href="#contact" className="secondary">Get in Touch</a>
        </div>
      </header>

      <section className="section" id="about">
        <h2>/ About</h2>
        <div className="grid">
          <article className="card" style={{ gridColumn: 'span 7' }}>
            <h3>Mission</h3>
            <p>
              Build delightful, scalable interfaces with cinematic motion and robust engineering. I combine
              3D scene composition, UX clarity, and performance tuning to deliver world-class products.
            </p>
          </article>
          <article className="card" style={{ gridColumn: 'span 5' }}>
            <h3>Tech Stack</h3>
            <p>Next.js, React, R3F, Drei, GSAP, Framer Motion, Vercel, TypeScript.</p>
          </article>
        </div>
      </section>

      <section className="section" id="projects">
        <h2>/ Projects</h2>
        <div className="grid">
          <article className="card">
            <h3>Stellar Commerce</h3>
            <p>3D product explorer with orbital navigation and buttery-smooth transitions.</p>
          </article>
          <article className="card">
            <h3>Orbital Docs</h3>
            <p>Technical docs with interactive simulation embeds and live playgrounds.</p>
          </article>
          <article className="card">
            <h3>Mission Control</h3>
            <p>Admin analytics dashboard with real-time telemetry and temporal zooming.</p>
          </article>
          <article className="card">
            <h3>Nebula Studio</h3>
            <p>Procedural art tool for generative starfields and cosmic shaders.</p>
          </article>
        </div>
      </section>

      <section className="section" id="contact">
        <h2>/ Contact</h2>
        <div className="grid">
          <article className="card" style={{ gridColumn: 'span 12' }}>
            <h3>Work with me</h3>
            <p>
              Email: <a href="mailto:hello@cosmic.dev" style={{ color: 'var(--accent)' }}>hello@cosmic.dev</a> ?
              LinkedIn: <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>linkedin</a> ?
              GitHub: <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>github</a>
            </p>
          </article>
        </div>
      </section>

      <footer className="footer">
        ? {new Date().getFullYear()} Cosmic Engineer ? Deployed on Vercel
      </footer>
    </div>
  );
}
