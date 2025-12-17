import React from 'react'

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="skills-marquee">
                <div className="skills-track">
                    {[...Array(2)].map((_, setIndex) => (
                        ['Python', 'Power BI', 'Tableau', 'Java', 'HTML', 'CSS', 'React', 'SQL', 'Figma', 'SAS', 'MySQL', 'RStudio'].map((skill, i) => (
                            <div key={`${setIndex}-${i}`} className="skill-item">
                                <i className={skill === 'Python' ? 'fab fa-python' : skill === 'Java' ? 'fab fa-java' : skill === 'HTML' ? 'fab fa-html5' : skill === 'CSS' ? 'fab fa-css3-alt' : skill === 'React' ? 'fab fa-react' : skill === 'Figma' ? 'fab fa-figma' : 'fas fa-chart-bar'}></i>
                                <span>{skill}</span>
                            </div>
                        ))
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
