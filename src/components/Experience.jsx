import React, { useState } from 'react'
import Lightbox from './Lightbox'
import SpotlightCard from './SpotlightCard'

const Experience = ({ onImageClick }) => {
    const organizations = [
        {
            title: "Perlengkapan & Konsumsi",
            org: "Disco XII UMN",
            period: "Mei 2025 – Des 2025",
            desc: "Koordinasi kebutuhan perlengkapan dan konsumsi untuk kegiatan Disco UMN.",
            logo: "/images/disco.png"
        },
        {
            title: "Perlengkapan",
            org: "COMMFEST 2025 UMN",
            period: "Mar 2025 – Nov 2025",
            desc: "Mengelola seluruh kebutuhan perlengkapan untuk Communication Festival 2025.",
            logo: "/images/commfest.jpg"
        },
        {
            title: "Akomodasi",
            org: "SUA ASA Art Exhibition",
            period: "Mar 2023 – Jun 2023",
            desc: "Mengatur kebutuhan akomodasi untuk pameran multimedia SUA ASA.",
            logo: "/images/suaasa.png"
        }
    ]

    const workExperience = [
        {
            title: "Multimedia Staff Intern",
            company: "GKJ Season City",
            period: "Jan 2022 – Mei 2022",
            desc: "Pembuatan konten multimedia, desain grafis, video editing, dan dokumentasi.",
            tags: ["Graphic Design", "Video Editing", "Content Creation"],
            logo: "/images/gkj.jpg"
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
            <div className="section-header-alt">
                <div className="header-left">
                    <span className="section-num">02</span>
                    <div>
                        <span className="section-tag">Journey</span>
                        <h2 className="text-reveal">Experience</h2>
                    </div>
                </div>
                <p className="header-desc">Organizations and work experience that shaped my professional growth.</p>
            </div>

            <div className="experience-wrapper">
                <div className="exp-column">
                    <h3 className="exp-column-title"><i className="fas fa-users"></i> Organizations</h3>
                    {organizations.map((org, i) => (
                        <SpotlightCard key={i} className="exp-item">
                            <div className="exp-logo">
                                <img src={org.logo} alt={org.org} />
                            </div>
                            <div className="exp-content">
                                <span className="exp-period">{org.period}</span>
                                <h4>{org.org}</h4>
                                <span className="exp-role">{org.title}</span>
                                <p>{org.desc}</p>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>

                <div className="exp-column">
                    <h3 className="exp-column-title"><i className="fas fa-briefcase"></i> Work</h3>
                    {workExperience.map((work, i) => (
                        <SpotlightCard key={i} className="exp-item">
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
                        </SpotlightCard>
                    ))}
                </div>
            </div>

            <div className="doc-gallery">
                <h3 className="gallery-title">Documentation</h3>
                <div className="gallery-grid">
                    {galleryImages.map((img, i) => (
                        <div key={i} className="gallery-item" onClick={() => onImageClick(img.src, img.caption)}>
                            <img src={img.src} alt={img.caption} loading="lazy" />
                            <div className="gallery-caption">{img.caption}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
