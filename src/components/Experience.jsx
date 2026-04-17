import React from 'react'

const Experience = ({ onImageClick }) => {
    const timelineItems = [
        {
            title: "Multimedia Staff Intern",
            org: "GKJ Season City",
            period: "Jan 2022 – May 2022",
            desc: "Created multimedia content, graphic designs, video edits, and managed event documentation.",
            tags: ["Graphic Design", "Video Editing", "Content Creation"],
            logo: "/images/gkj.jpg",
            type: "work"
        },
        {
            title: "Logistics & Catering",
            org: "Disco XII UMN",
            period: "May 2025 – Dec 2025",
            desc: "Coordinated logistics and catering requirements for the Disco UMN event.",
            tags: ["Teamwork", "Event Planning", "Time Management"],
            logo: "/images/disco.png",
            type: "org"
        },
        {
            title: "Logistics",
            org: "COMMFEST 2025 UMN",
            period: "Mar 2025 – Nov 2025",
            desc: "Managed all logistical requirements and equipment setup for Communication Festival 2025.",
            tags: ["Equipment Setup", "Coordination", "Problem Solving"],
            logo: "/images/commfest.jpg",
            type: "org"
        },
        {
            title: "Accommodation",
            org: "SUA ASA Art Exhibition",
            period: "Mar 2023 – Jun 2023",
            desc: "Organized accommodation needs for the SUA ASA multimedia exhibition.",
            tags: ["Event Logistics", "Scheduling", "Communication"],
            logo: "/images/suaasa.png",
            type: "org"
        }
    ]

    const galleryImages = [
        { src: "/images/closingcommfest.jpg", caption: "COMMFEST 2025" },
        { src: "/images/disco dokum.jpg", caption: "DISCO XII 2025" },
        { src: "/images/suasa dokum 2.jpeg", caption: "SUA ASA TALKSHOW" },
        { src: "/images/sua asa dokum.jpeg", caption: "SUA ASA" }
    ]

    return (
        <section id="organizations" className="experience-section">
            <div className="section-header">
                <div className="header-left">
                    <span className="section-num">03</span>
                    <h2>Experience</h2>
                </div>
                <p className="header-desc">Organizations and work that shaped my journey</p>
            </div>

            <div className="experience-timeline">
                {timelineItems.map((item, i) => (
                    <div key={i} className="timeline-item">
                        <div className="timeline-card">
                            <div className="timeline-header">
                                <div className="timeline-logo">
                                    <img src={item.logo} alt={item.org} />
                                </div>
                                <div className="timeline-info">
                                    <div className="timeline-meta">
                                        <span className="timeline-period">{item.period}</span>
                                        <span className={`timeline-badge ${item.type}`}>
                                            {item.type === 'work' ? 'Work' : 'Organization'}
                                        </span>
                                    </div>
                                    <h4>{item.org}</h4>
                                    <span className="timeline-role">{item.title}</span>
                                </div>
                            </div>
                            <p>{item.desc}</p>
                            {item.tags && (
                                <div className="timeline-tags">
                                    {item.tags.map((tag, idx) => (
                                        <span key={idx} className="timeline-tag">{tag}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="doc-gallery">
                <h3 className="gallery-title">
                    <i className="fas fa-images"></i>
                    Documentation
                </h3>
                <div className="gallery-grid">
                    {galleryImages.map((img, i) => (
                        <div key={i} className="gallery-item" onClick={() => onImageClick(img.src, img.caption)}>
                            <img src={img.src} alt={img.caption} loading="lazy" />
                            <div className="gallery-overlay">
                                <span>{img.caption}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience