import React, { useEffect, useState } from 'react'
import Magnetic from './Magnetic'

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        } else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible)
    }, [])

    return (
        <div className={`back-to-top ${visible ? 'show' : ''}`} onClick={scrollToTop}>
            <Magnetic strength={50}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                    <i className="fas fa-arrow-up"></i>
                </div>
            </Magnetic>
        </div>
    )
}

export default ScrollToTop
