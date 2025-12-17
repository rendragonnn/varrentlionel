import React from 'react'

const Footer = () => {
    return (
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
    )
}

export default Footer
