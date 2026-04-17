import React, { useState } from 'react'

const Contact = () => {
    const [showCV, setShowCV] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (response.ok) {
                setShowSuccess(true);
                form.reset();
            } else {
                console.error("Form submission failed");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="section-header">
                <div className="header-left">
                    <span className="section-num">04</span>
                    <h2>Contact</h2>
                </div>
                <p className="header-desc">Let's connect and build something together</p>
            </div>

            <div className="contact-wrapper">
                <div className="contact-left">
                    <div className="contact-grid">
                        <a href="mailto:varrentlionel@gmail.com" className="contact-card">
                            <div className="contact-icon email">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="contact-card-content">
                                <h4>Email</h4>
                                <p>varrentlionel@gmail.com</p>
                            </div>
                            <i className="fas fa-arrow-right arrow"></i>
                        </a>

                        <a href="https://linkedin.com/in/varrentlionel/" target="_blank" rel="noreferrer" className="contact-card">
                            <div className="contact-icon linkedin">
                                <i className="fab fa-linkedin-in"></i>
                            </div>
                            <div className="contact-card-content">
                                <h4>LinkedIn</h4>
                                <p>@varrentlionel</p>
                            </div>
                            <i className="fas fa-arrow-right arrow"></i>
                        </a>

                        <a href="https://github.com/rendragonnn" target="_blank" rel="noreferrer" className="contact-card">
                            <div className="contact-icon github">
                                <i className="fab fa-github"></i>
                            </div>
                            <div className="contact-card-content">
                                <h4>GitHub</h4>
                                <p>@rendragonnn</p>
                            </div>
                            <i className="fas fa-arrow-right arrow"></i>
                        </a>

                        <a href="https://wa.me/6285810256707" target="_blank" rel="noreferrer" className="contact-card">
                            <div className="contact-icon whatsapp">
                                <i className="fab fa-whatsapp"></i>
                            </div>
                            <div className="contact-card-content">
                                <h4>WhatsApp</h4>
                                <p>+62 858 1025 6707</p>
                            </div>
                            <i className="fas fa-arrow-right arrow"></i>
                        </a>
                    </div>

                    <div className="contact-cta">
                        <p>Interested in working together?</p>
                        <button onClick={() => setShowCV(true)} className="btn-download">
                            <i className="fas fa-eye"></i>
                            <span>Preview CV</span>
                        </button>
                    </div>
                </div>

                <div className="contact-right">
                    <form className="contact-form" action="https://formspree.io/f/xwvalgjp" method="POST" onSubmit={handleSubmit}>
                        <div className="form-header">
                            <h3>Send Message</h3>
                            <p>I'll get back to you as soon as possible.</p>
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="name" required placeholder="John Doe" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" required placeholder="john@example.com" />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea name="message" rows="4" required placeholder="Hi Varrent, I'd like to discuss..."></textarea>
                        </div>
                        <button type="submit" className="btn-submit" disabled={isSubmitting}>
                            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                            <i className={isSubmitting ? "fas fa-spinner fa-spin" : "fas fa-paper-plane"}></i>
                        </button>
                    </form>
                </div>
            </div>

            {/* CV Modal Overlay */}
            {showCV && (
                <div className="cv-modal-overlay" onClick={() => setShowCV(false)}>
                    <div className="cv-modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="cv-modal-header">
                            <h3>CV Preview</h3>
                            <div className="cv-modal-actions">
                                <a href="/cv/CV VARRENT LIONEL KUSNADI.pdf" download="CV_VARRENT_LIONEL.pdf" className="cv-download-btn" title="Download CV">
                                    <i className="fas fa-download"></i>
                                </a>
                                <button className="cv-close-btn" onClick={() => setShowCV(false)}>
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <iframe 
                            src="/cv/CV VARRENT LIONEL KUSNADI.pdf" 
                            className="cv-iframe" 
                            title="CV Preview"
                        ></iframe>
                    </div>
                </div>
            )}

            {/* Success Modal Overlay */}
            {showSuccess && (
                <div className="cv-modal-overlay" onClick={() => setShowSuccess(false)}>
                    <div className="success-modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="success-icon">
                            <i className="fas fa-check-circle"></i>
                        </div>
                        <h3>Message Sent!</h3>
                        <p>Thank you for reaching out. I'll get back to you shortly.</p>
                        <button className="btn-submit" onClick={() => setShowSuccess(false)} style={{ marginTop: '0' }}>
                            <span>Back to Portfolio</span>
                        </button>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Contact