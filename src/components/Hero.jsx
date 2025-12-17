import React, { useEffect } from 'react'
import Magnetic from './Magnetic'

const Hero = () => {
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

    return (
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
                        <Magnetic>
                            <a href="#contact" className="btn-hero primary">
                                <span>Let's Talk</span>
                                <i className="fas fa-arrow-right"></i>
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="#projects" className="btn-hero secondary">
                                <span>View Projects</span>
                            </a>
                        </Magnetic>
                    </div>

                    <div className="hero-socials">
                        <Magnetic>
                            <a href="https://github.com/rendragonnn" target="_blank" rel="noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="https://www.linkedin.com/in/varrentlionel/" target="_blank" rel="noreferrer">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="https://www.instagram.com/varentlionel/" target="_blank" rel="noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </Magnetic>
                    </div>
                </div>
            </div>

            <div className="hero-right">
                <div className="hero-image-wrapper">
                    <div className="glow-orb glow-orb-1"></div>
                    <div className="glow-orb glow-orb-2"></div>
                    <div className="glow-orb glow-orb-3"></div>
                    <div className="hero-image-frame">
                        <img src="/images/baruuu.jpg" alt="Varrent Lionel" loading="lazy" />
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
    )
}

export default Hero
