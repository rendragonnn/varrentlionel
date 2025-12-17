import { useState, useEffect } from 'react'
import './App.css'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Lightbox from './components/Lightbox'

function App() {
  const [loading, setLoading] = useState(true)
  const [lightbox, setLightbox] = useState({ show: false, img: '', caption: '' })

  useEffect(() => {
    setTimeout(() => setLoading(false), 800)

    // Scroll Reveal Logic
    const handleScroll = () => {
      // Reveal sections and items
      const elements = document.querySelectorAll('section, .project-card, .exp-item, .contact-card, .gallery-item, .text-reveal')
      elements.forEach(el => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight - 80) {
          el.classList.add('revealed')
        }
      })
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll)

    // Particles
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: '#64ffda' },
          opacity: { value: 0.3, random: true },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: '#64ffda', opacity: 0.2, width: 1 },
          move: { enable: true, speed: 1, direction: 'none', random: true }
        }
      })
    }
  }, [])

  return (
    <>
      <Loader loading={loading} />

      <div id="particles-js" className="particles-bg"></div>

      <ScrollToTop />

      <Navbar />

      <Hero />

      <Skills />

      <Projects />

      <Experience onImageClick={(img, caption) => setLightbox({ show: true, img, caption })} />

      <Contact />

      <Footer />

      <Lightbox
        show={lightbox.show}
        img={lightbox.img}
        caption={lightbox.caption}
        onClose={() => setLightbox({ show: false, img: '', caption: '' })}
      />
    </>
  )
}

export default App
