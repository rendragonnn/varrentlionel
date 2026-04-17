import React, { useRef, useState } from 'react'

const SpotlightCard = ({ children, className = "", color = "rgba(100, 255, 218, 0.15)" }) => {
    const divRef = useRef(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [opacity, setOpacity] = useState(0)

    const handleMouseMove = (e) => {
        if (!divRef.current) return

        const div = divRef.current
        const rect = div.getBoundingClientRect()

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }

    const handleFocus = () => {
        setOpacity(1)
    }

    const handleBlur = () => {
        setOpacity(0)
    }

    const handleMouseEnter = () => {
        setOpacity(1)
    }

    const handleMouseLeave = () => {
        setOpacity(0)
    }

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`spotlight-card ${className}`}
            style={{
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <div
                style={{
                    pointerEvents: 'none',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity,
                    transition: 'opacity 0.3s ease',
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${color}, transparent 40%)`,
                    zIndex: 1
                }}
            />
            <div className="spotlight-inner" style={{ position: 'relative', zIndex: 2 }}>
                {children}
            </div>
        </div>
    )
}

export default SpotlightCard
