import React, { useState, useEffect } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Header scroll effect
            const header = document.querySelector('header')
            if (header) {
                header.classList.toggle('scrolled', window.scrollY > 50)
            }

            // Active nav
            const sections = document.querySelectorAll('section[id]')
            const navLinks = document.querySelectorAll('.nav-menu a')

            sections.forEach(section => {
                const top = section.offsetTop - 100
                const height = section.offsetHeight
                if (window.scrollY >= top && window.scrollY < top + height) {
                    navLinks.forEach(link => {
                        link.classList.remove('active')
                        if (link.getAttribute('href') === `#${section.id}`) {
                            link.classList.add('active')
                        }
                    })
                }
            })
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header>
            <nav>
                <div className="logo">
                    <a href="#">V<span className="accent">L.</span></a>
                </div>
                <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                        <li><a href="#organizations" onClick={() => setMenuOpen(false)}>Experience</a></li>
                        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                    </ul>
                </div>
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <i className="fas fa-bars"></i>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
