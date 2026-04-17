import React, { useState, useEffect } from 'react';
import './index.css';

// Import existing components
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';

// Tech stack for marquee (used in Skills component but we also need it here for marquee section)
const TECH_STACK = [
  'Python', 'Power BI', 'Tableau', 'Java', 'HTML', 'CSS',
  'React', 'SQL', 'Figma', 'SAS', 'MySQL', 'RStudio',
];

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'organizations' },
  { label: 'Connect', id: 'contact' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [lightbox, setLightbox] = useState({ open: false, src: '', caption: '' });

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') return localStorage.getItem('vl-theme') || 'dark';
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('vl-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  // Section observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActiveSection(e.target.id);
      });
    }, { threshold: 0.3, rootMargin: '-60px 0px 0px 0px' });
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Custom Cursor and Reveal Animations
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      '.hero-content, .skills-header, .skill-category, .section-header, .project-card, .timeline-item, .gallery-item, .contact-card, .contact-cta'
    );
    
    // Add base class
    revealElements.forEach(el => el.classList.add('reveal'));
    
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target); // only reveal once
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    revealElements.forEach(el => revealObserver.observe(el));

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  const openLightbox = (src, caption) => {
    setLightbox({ open: true, src, caption });
  };

  const closeLightbox = () => {
    setLightbox({ open: false, src: '', caption: '' });
  };

  return (
    <div className="portfolio">
      <div className="ambient-glow"></div>
      {/* ── NAVIGATION ── */}
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="nav-inner">
          <a href="#home" className="nav-logo" onClick={() => setMenuOpen(false)}>VARRENT</a>

          <div className="nav-links-wrapper">
            <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
              {NAV_ITEMS.map(({ label, id }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={activeSection === id ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
              <i className={`fas fa-${theme === 'dark' ? 'sun' : 'moon'}`} />
            </button>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
              <i className={`fas fa-${menuOpen ? 'times' : 'bars'}`} />
            </button>
          </div>
        </div>
      </nav>

      <main id="main-content">
      {/* ── HERO SECTION ── */}
      <Hero />



      {/* ── SKILLS SECTION ── */}
      <Skills />

      {/* ── PROJECTS SECTION ── */}
      <Projects />

      {/* ── EXPERIENCE SECTION ── */}
      <Experience onImageClick={openLightbox} />

      {/* ── CONTACT SECTION ── */}
      <Contact />

      {/* ── FOOTER ── */}
      <Footer />

      {/* ── LIGHTBOX ── */}
      <Lightbox
        isOpen={lightbox.open}
        src={lightbox.src}
        caption={lightbox.caption}
        onClose={closeLightbox}
      />
      </main>
    </div>
  );
}

export default App;