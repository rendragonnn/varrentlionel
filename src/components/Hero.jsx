import React, { useEffect } from 'react'
import Magnetic from './Magnetic'

const Hero = () => {
    useEffect(() => {
        const texts = ['BI Analyst', 'Data Analyst', 'Front End Developer']
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
            setTimeout(type, isDeleting ? 40 : 80)
        }

        const timer = setTimeout(type, 500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <div className="hero-badge">
                        <span className="dot"></span>
                        <span>Available for work</span>
                    </div>

                    <h1 className="hero-name">
                        <span className="first">Varrent</span>
                        <span className="last">Lionel</span>
                    </h1>

                    <div className="hero-title">
                        <span className="typed-text"></span>
                        <span className="cursor">|</span>
                    </div>

                    <p className="hero-desc">
                        Information Systems student at Universitas Multimedia Nusantara, specializing in Big Data Analysis. I transform complex data into actionable insights.
                    </p>

                    <div className="hero-location">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>Tangerang, Banten</span>
                    </div>

                    <div className="hero-actions">
                        <a href="#contact" className="btn btn-primary">
                            <span>Let's Talk</span>
                            <i className="fas fa-arrow-right"></i>
                        </a>
                        <a href="#projects" className="btn btn-secondary">
                            <span>View Projects</span>
                        </a>
                    </div>

                    <div className="hero-socials">
                        <a href="https://github.com/rendragonnn" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/varrentlionel/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://www.instagram.com/varentlionel/" target="_blank" rel="noreferrer" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="frame">
                        <img src="/images/baruuu.jpg" alt="Varrent Lionel" loading="lazy" />
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <span>Scroll</span>
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero