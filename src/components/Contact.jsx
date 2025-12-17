import React from 'react'

const Contact = () => {
    return (
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
    )
}

export default Contact
