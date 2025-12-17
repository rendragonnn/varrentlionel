import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [loading, setLoading] = useState(true)
  const [lightbox, setLightbox] = useState({ show: false, img: '', caption: '' })

  useEffect(() => {
    // Loading screen
    setTimeout(() => setLoading(false), 800)

    // Scroll handlers
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
      
      // Header scroll effect
      const header = document.querySelector('header')
      if (header) {
        header.classList.toggle('scrolled', window.scrollY > 50)
      }

      // Active nav
      const sections = document.querySelectorAll('section[id]')
      const navLinks = document.querySelectorAll('.nav-menu a')
      sections.forEach(section => {
        const top = section.offsetTop - 100
        const height = section.offsetHeight
        if (window.scrollY >= top && window.scrollY < top + height) {
          navLinks.forEach(link => {
            link.classList.remove('active')
            if (link.getAttribute('href') === `#${section.id}`) {
              link.classList.add('active')
            }
          })
        }
      })

      // Scroll reveal
      const elements = document.querySelectorAll('section, .project-card, .exp-item, .contact-card, .gallery-item')
      elements.forEach(el => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight - 80) {
          el.classList.add('revealed')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
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

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Typing effect
  useEffect(() => {
    const texts = ['Data Analyst', 'BI Analyst', 'Front End Developer', 'Problem Solver']
    let textIndex = 0
    let charIndex = 0
    let isDeleting = false
    const typedSpan = document.querySelector('.typed-text')

    const type = () => {
      if (!typedSpan) return
      const current = texts[textIndex]
      
      if (isDeleting) {
        typedSpan.textContent = current.substring(0, charIndex--)
        if (charIndex === 0) {
          isDeleting = false
          textIndex = (textIndex + 1) % texts.length
        }
      } else {
        typedSpan.textContent = current.substring(0, charIndex++)
        if (charIndex === current.length + 1) {
          isDeleting = true
          setTimeout(type, 1500)
          return
        }
      }
      setTimeout(type, isDeleting ? 50 : 100)
    }
    
    const timer = setTimeout(type, 500)
    return () => clearTimeout(timer)
  }, [])

  const projects = [
    {
      num: "01", title: "Bookly App: Mobile UI Design",
      desc: "High-fidelity mobile interface with interactive prototypes in Figma using Smart Animate and Design System",
      tags: ["Figma", "UI Design", "Prototyping"],
      link: "https://www.figma.com/proto/YghmuX5YUkbgFAHWj6n9Ak/Bookly?page-id=0%3A1&node-id=8-2&viewport=1647%2C233%2C0.71&t=uFtOQGnhw8ouHNic-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=8%3A2&show-proto-sidebar=1",
      image: "/bookly.png"
    },
    {
      num: "02", title: "Generative Art with CycleGAN",
      desc: "Photo-to-Monet style transfer using CycleGAN architecture with TPU acceleration and FID evaluation",
      tags: ["Python", "TensorFlow", "Deep Learning"],
      link: "https://github.com/rendragonnn/CycleGAN-Monet-Inspired-Image",
      image: "/gan porto.png"
    },
    {
      num: "03", title: "Diabetes Risk Detection ML",
      desc: "Machine Learning pipeline with Gradient Boosting achieving 85% accuracy for early diabetes detection",
      tags: ["Python", "Scikit-Learn", "Machine Learning"],
      link: "https://github.com/rendragonnn/Diabetes-Prediction-with-Random-Forest-",
      image: "/diabetes porto.png"
    },
    {
      num: "04", title: "Nike vs Adidas Product Analysis",
      desc: "Comparative market analysis of 3,200+ products analyzing pricing strategies and consumer engagement",
      tags: ["Python", "Pandas", "Data Analysis"],
      link: "https://github.com/rendragonnn/COMPARATIVE-ANALISIS-OF-NIKE-AND-ADIDAS-STOCK-",
      image: "/NIKE VS ADIDAS.png"
    },
    {
      num: "05", title: "Refugee Data Visualization",
      desc: "Built 3 interactive Tableau dashboards analyzing 10,000+ refugee records to visualize global displacement trends",
      tags: ["Tableau", "Data Visualization", "Dashboard"],
      link: "https://public.tableau.com/app/profile/varrent.lionel/viz/gg21_17658824337700/Story1?publish=yes",
      image: "/tablue.png"
    },
    {
      num: "06", title: "Retail Sales Performance Dashboard",
      desc: "Interactive Power BI dashboard for PT Lionel Elektronik Jaya to visualize revenue trends and market share",
      tags: ["Power BI", "Data Visualization", "Dashboard"],
      link: "https://app.powerbi.com/view?r=eyJrIjoiMjU2ZjVkMDYtNzM2Zi00MGMxLTk3NjUtN2JjNzhiYzM2ZjhiIiwidCI6ImJmMzdmMzE1LWJhYzItNDRhOC1hZTZjLTJmMjEzNTFkMjY0YyIsImMiOjEwfQ%3D%3D&pageName=73c6be3e8a1808c78e06",
      image: "/power bi.png"
    }
  ]

  const organizations = [
    {
      title: "Perlengkapan & Konsumsi",
      org: "Disco XII UMN",
      period: "Mei 2025 – Des 2025",
      desc: "Koordinasi kebutuhan perlengkapan dan konsumsi untuk kegiatan Disco UMN.",
      logo: "/disco.png"
    },
    {
      title: "Perlengkapan",
      org: "COMMFEST 2025 UMN",
      period: "Mar 2025 – Nov 2025",
      desc: "Mengelola seluruh kebutuhan perlengkapan untuk Communication Festival 2025.",
      logo: "/commfest.jpg"
    },
    {
      title: "Akomodasi",
      org: "SUA ASA Art Exhibition",
      period: "Mar 2023 – Jun 2023",
      desc: "Mengatur kebutuhan akomodasi untuk pameran multimedia SUA ASA.",
      logo: "/suaasa.png"
    }
  ]

  const workExperience = [
    {
      title: "Multimedia Staff Intern",
      company: "GKJ Season City",
      period: "Jan 2022 – Mei 2022",
      desc: "Pembuatan konten multimedia, desain grafis, video editing, dan dokumentasi.",
      tags: ["Graphic Design", "Video Editing", "Content Creation"],
      logo: "/gkj.jpg"
    }
  ]

  const galleryImages = [
    { src: "images/closingcommfest.jpg", caption: "COMMFEST 2025" },
    { src: "images/disco dokum.jpg", caption: "DISCO XII 2025" },
    { src: "images/suasa dokum 2.jpeg", caption: "SUA ASA TALKSHOW" },
    { src: "images/sua asa dokum.jpeg", caption: "SUA ASA" }
  ]

  return (
    <>
      {loading && (
        <div className="loader-wrapper">
          <div className="loader"><span className="loader-text">VL</span></div>
          <p>Loading...</p>
        </div>
      )}

      <div id="particles-js" className="particles-bg"></div>
      
      {showBackToTop && (
        <a href="#home" className="back-to-top show">
          <i className="fas fa-arrow-up"></i>
        </a>
      )}

      <header>
        <nav>
          <div className="logo">
            <a href="#">V<span className="accent">L.</span></a>
          </div>
          <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <ul>
              <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
              <li><a href="#organizations" onClick={() => setMenuOpen(false)}>Experience</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <i className="fas fa-bars"></i>
          </div>
        </nav>
      </header>

      <section id="home" className="hero-split">
        <div className="hero-left">
          <div className="hero-content">
            <span className="greeting">Hello, I'm</span>
            <h1 className="hero-name">
              <span className="first-name">Varrent</span>
              <span className="last-name">Lionel</span>
            </h1>
            <div className="hero-title">
              <span className="typed-text"></span><span className="cursor">|</span>
            </div>
            <p className="hero-desc">
              I am currently an undergraduate student majoring in Information Systems at Universitas Multimedia Nusantara, 
              now in my fifth semester with a specific specialization in Big Data Analysis. Through this academic path, 
              I am actively building a strong foundation in processing and interpreting data to understand broader digital trends.
            </p>
            
            <div className="hero-location-badge">
              <i className="fas fa-map-marker-alt"></i>
              <span>Tangerang, Banten</span>
            </div>

            <div className="hero-actions">
              <a href="#contact" className="btn-hero primary">
                <span>Let's Talk</span>
                <i className="fas fa-arrow-right"></i>
              </a>
              <a href="#projects" className="btn-hero secondary">
                <span>View Projects</span>
              </a>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/rendragonnn" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/varrentlionel/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com/varentlionel/" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="hero-right">
          <div className="hero-image-wrapper">
            <div className="glow-orb glow-orb-1"></div>
            <div className="glow-orb glow-orb-2"></div>
            <div className="glow-orb glow-orb-3"></div>
            <div className="hero-image-frame">
              <img src="/baruuu.jpg" alt="Varrent Lionel" loading="lazy" />
            </div>
            <div className="floating-tech">
              <div className="tech-item" style={{ '--delay': '0s' }}><i className="fab fa-python"></i></div>
              <div className="tech-item" style={{ '--delay': '0.5s' }}><i className="fas fa-database"></i></div>
              <div className="tech-item" style={{ '--delay': '1s' }}><i className="fas fa-chart-line"></i></div>
              <div className="tech-item" style={{ '--delay': '1.5s' }}><i className="fab fa-java"></i></div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="mouse"><div className="wheel"></div></div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="skills-marquee">
          <div className="skills-track">
            {[...Array(2)].map((_, setIndex) => (
              ['Python', 'Power BI', 'Tableau', 'Java', 'HTML', 'CSS', 'React', 'SQL', 'Figma', 'SAS', 'MySQL', 'RStudio'].map((skill, i) => (
                <div key={`${setIndex}-${i}`} className="skill-item">
                  <i className={skill === 'Python' ? 'fab fa-python' : skill === 'Java' ? 'fab fa-java' : skill === 'HTML' ? 'fab fa-html5' : skill === 'CSS' ? 'fab fa-css3-alt' : skill === 'React' ? 'fab fa-react' : skill === 'Figma' ? 'fab fa-figma' : 'fas fa-chart-bar'}></i>
                  <span>{skill}</span>
                </div>
              ))
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="section-header-alt">
          <div className="header-left">
            <span className="section-num">01</span>
            <div>
              <span className="section-tag">Portfolio</span>
              <h2>Featured Projects</h2>
            </div>
          </div>
          <p className="header-desc">Each project represents my dedication to creating beautiful and functional solutions.</p>
        </div>
        
        <div className="projects-showcase">
          {projects.map((project) => (
            <div key={project.num} className="project-card">
              <a href={project.link} target="_blank" rel="noreferrer" className="project-image-link">
                <img src={project.image} alt={project.title} loading="lazy" />
              </a>
              <div className="card-overlay">
                <span className="project-number">{project.num}</span>
                <h4>{project.title}</h4>
                <p className="project-desc">{project.desc}</p>
                <div className="mini-tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="card-link">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-projects">
          <a href="https://github.com/rendragonnn" target="_blank" rel="noreferrer" className="btn-outline">
            <span>My Github</span>
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section id="organizations" className="experience-section">
        <div className="section-header-alt">
          <div className="header-left">
            <span className="section-num">02</span>
            <div>
              <span className="section-tag">Journey</span>
              <h2>Experience</h2>
            </div>
          </div>
          <p className="header-desc">Organizations and work experience that shaped my professional growth.</p>
        </div>

        <div className="experience-wrapper">
          <div className="exp-column">
            <h3 className="exp-column-title"><i className="fas fa-users"></i> Organizations</h3>
            {organizations.map((org, i) => (
              <div key={i} className="exp-item">
                <div className="exp-logo">
                  <img src={org.logo} alt={org.org} />
                </div>
                <div className="exp-content">
                  <span className="exp-period">{org.period}</span>
                  <h4>{org.org}</h4>
                  <span className="exp-role">{org.title}</span>
                  <p>{org.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="exp-column">
            <h3 className="exp-column-title"><i className="fas fa-briefcase"></i> Work</h3>
            {workExperience.map((work, i) => (
              <div key={i} className="exp-item">
                <div className="exp-logo">
                  <img src={work.logo} alt={work.company} />
                </div>
                <div className="exp-content">
                  <span className="exp-period">{work.period}</span>
                  <h4>{work.company}</h4>
                  <span className="exp-role">{work.title}</span>
                  <p>{work.desc}</p>
                  {work.tags && (
                    <div className="exp-tags">
                      {work.tags.map((tag, idx) => (
                        <span key={idx} className="exp-tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="doc-gallery">
          <h3 className="gallery-title">Documentation</h3>
          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <div key={i} className="gallery-item" onClick={() => setLightbox({ show: true, img: img.src, caption: img.caption })}>
                <img src={img.src} alt={img.caption} loading="lazy" />
                <div className="gallery-caption">{img.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-header-alt">
          <div className="header-left">
            <span className="section-num">03</span>
            <div>
              <span className="section-tag">GET IN TOUCH</span>
              <h2>Let's Connect</h2>
            </div>
          </div>
          <p className="header-desc">Feel free to reach out through any of the platforms below!</p>
        </div>
        
        <div className="contact-grid-modern">
          <a href="mailto:varrentlionel@gmail.com" className="contact-card" target="_blank" rel="noreferrer">
            <div className="contact-card-icon email-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-card-content">
              <h4>Email Me</h4>
              <p>varrentlionel@gmail.com</p>
            </div>
            <i className="fas fa-arrow-right contact-card-arrow"></i>
          </a>

          <a href="https://linkedin.com/in/varrentlionel/" className="contact-card" target="_blank" rel="noreferrer">
            <div className="contact-card-icon linkedin-icon">
              <i className="fab fa-linkedin-in"></i>
            </div>
            <div className="contact-card-content">
              <h4>LinkedIn</h4>
              <p>@varrentlionel</p>
            </div>
            <i className="fas fa-arrow-right contact-card-arrow"></i>
          </a>

          <a href="https://wa.me/6285810256707" className="contact-card" target="_blank" rel="noreferrer">
            <div className="contact-card-icon whatsapp-icon">
              <i className="fab fa-whatsapp"></i>
            </div>
            <div className="contact-card-content">
              <h4>WhatsApp</h4>
              <p>+62 858 1025 6707</p>
            </div>
            <i className="fas fa-arrow-right contact-card-arrow"></i>
          </a>

          <a href="https://instagram.com/varentlionel/" className="contact-card" target="_blank" rel="noreferrer">
            <div className="contact-card-icon instagram-icon">
              <i className="fab fa-instagram"></i>
            </div>
            <div className="contact-card-content">
              <h4>Instagram</h4>
              <p>@varentlionel</p>
            </div>
            <i className="fas fa-arrow-right contact-card-arrow"></i>
          </a>
        </div>

        <div className="contact-cta-modern">
          <p className="cv-text">Or download my resume</p>
          <a href="/cv/CV Varrent Lionel.pdf" download className="btn-download-cv">
            <i className="fas fa-file-download"></i>
            <span>Download CV</span>
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">V<span className="accent">L.</span></div>
            <p>Building digital experiences with passion and precision.</p>
          </div>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#organizations">Experience</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-social">
            <a href="https://github.com/rendragonnn" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://linkedin.com/in/varrentlionel/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://instagram.com/varentlionel/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Varrent Lionel. Built with React ⚛️</p>
        </div>
      </footer>

      {lightbox.show && (
        <div className="lightbox" onClick={() => setLightbox({ show: false, img: '', caption: '' })}>
          <span className="lightbox-close">&times;</span>
          <img className="lightbox-img" src={lightbox.img} alt={lightbox.caption} />
          <div className="lightbox-caption">{lightbox.caption}</div>
        </div>
      )}
    </>
  )
}

export default App
