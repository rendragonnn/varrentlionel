import React from 'react'

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-brand">
                <div className="footer-logo">V<span className="accent">L</span></div>
                <p>Building digital experiences with passion.</p>
            </div>
            <nav className="footer-nav">
                <a href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#organizations">Experience</a>
                <a href="#contact">Contact</a>
            </nav>
            <div className="footer-social">
                <a href="https://github.com/rendragonnn" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/varrentlionel/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://instagram.com/varentlionel/" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer