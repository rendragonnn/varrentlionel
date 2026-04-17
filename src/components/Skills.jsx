import React from 'react'
import SpotlightCard from './SpotlightCard'

const Skills = () => {
    const skillCategories = [
        {
            category: 'Data & Analytics',
            skills: ['Python', 'SQL', 'Tableau', 'Power BI', 'RStudio', 'SAS', 'Machine Learning'],
            colorClass: 'data-analytics',
            spotlightColor: 'rgba(249, 115, 22, 0.2)'
        },
        {
            category: 'Frontend',
            skills: ['HTML', 'CSS', 'React', 'Java'],
            colorClass: 'frontend',
            spotlightColor: 'rgba(59, 130, 246, 0.2)'
        },
        {
            category: 'Design & Tools',
            skills: ['Figma', 'MySQL', 'Git'],
            colorClass: 'design-tools',
            spotlightColor: 'rgba(168, 85, 247, 0.2)'
        }
    ]

    return (
        <section id="skills" className="skills-section">
            <div className="skills-header">
                <span className="section-num">01</span>
                <h2>Skills</h2>
            </div>

            <div className="skills-grid">
                {skillCategories.map((cat, i) => (
                    <SpotlightCard key={i} className="spotlight-wrapper" color={cat.spotlightColor}>
                        <div className={`skill-category ${cat.colorClass}`}>
                            <h3>{cat.category}</h3>
                            <div className="category-pills">
                                {cat.skills.map((skill) => (
                                    <span key={skill} className="skill-pill">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </SpotlightCard>
                ))}
            </div>
        </section>
    )
}

export default Skills