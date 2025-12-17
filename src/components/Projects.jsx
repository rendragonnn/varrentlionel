import React from 'react'
import TiltCard from './TiltCard'
import SpotlightCard from './SpotlightCard'

const Projects = () => {
    const projects = [
        {
            num: "01", title: "Bookly App: Mobile UI Design",
            desc: "High-fidelity mobile interface with interactive prototypes in Figma using Smart Animate and Design System",
            tags: ["Figma", "UI Design", "Prototyping"],
            link: "https://www.figma.com/proto/YghmuX5YUkbgFAHWj6n9Ak/Bookly?page-id=0%3A1&node-id=8-2&viewport=1647%2C233%2C0.71&t=uFtOQGnhw8ouHNic-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=8%3A2&show-proto-sidebar=1",
            image: "/images/bookly.png"
        },
        {
            num: "02", title: "Generative Art with CycleGAN",
            desc: "Photo-to-Monet style transfer using CycleGAN architecture with TPU acceleration and FID evaluation",
            tags: ["Python", "TensorFlow", "Deep Learning"],
            link: "https://github.com/rendragonnn/CycleGAN-Monet-Inspired-Image",
            image: "/images/gan porto.png"
        },
        {
            num: "03", title: "Diabetes Risk Detection ML",
            desc: "Machine Learning pipeline with Gradient Boosting achieving 85% accuracy for early diabetes detection",
            tags: ["Python", "Scikit-Learn", "Machine Learning"],
            link: "https://github.com/rendragonnn/Diabetes-Prediction-with-Random-Forest-",
            image: "/images/diabetes porto.png"
        },
        {
            num: "04", title: "Nike vs Adidas Product Analysis",
            desc: "Comparative market analysis of 3,200+ products analyzing pricing strategies and consumer engagement",
            tags: ["Python", "Pandas", "Data Analysis"],
            link: "https://github.com/rendragonnn/COMPARATIVE-ANALISIS-OF-NIKE-AND-ADIDAS-STOCK-",
            image: "/images/NIKE VS ADIDAS.png"
        },
        {
            num: "05", title: "Refugee Data Visualization",
            desc: "Built 3 interactive Tableau dashboards analyzing 10,000+ refugee records to visualize global displacement trends",
            tags: ["Tableau", "Data Visualization", "Dashboard"],
            link: "https://public.tableau.com/app/profile/varrent.lionel/viz/gg21_17658824337700/Story1?publish=yes",
            image: "/images/tablue.png"
        },
        {
            num: "06", title: "Retail Sales Performance Dashboard",
            desc: "Interactive Power BI dashboard for PT Lionel Elektronik Jaya to visualize revenue trends and market share",
            tags: ["Power BI", "Data Visualization", "Dashboard"],
            link: "https://app.powerbi.com/view?r=eyJrIjoiMjU2ZjVkMDYtNzM2Zi00MGMxLTk3NjUtN2JjNzhiYzM2ZjhiIiwidCI6ImJmMzdmMzE1LWJhYzItNDRhOC1hZTZjLTJmMjEzNTFkMjY0YyIsImMiOjEwfQ%3D%3D&pageName=73c6be3e8a1808c78e06",
            image: "/images/power bi.png"
        }
    ]

    return (
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
                    <TiltCard key={project.num} className="project-card-wrapper">
                        <SpotlightCard className="project-card">
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
                        </SpotlightCard>
                    </TiltCard>
                ))}
            </div>

            <div className="view-all-projects">
                <a href="https://github.com/rendragonnn" target="_blank" rel="noreferrer" className="btn-outline">
                    <span>My Github</span>
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </section>
    )
}

export default Projects
