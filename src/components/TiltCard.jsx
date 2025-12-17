import React, { useRef, useEffect } from 'react'

const TiltCard = ({ children, className }) => {
    const tiltRef = useRef(null)

    useEffect(() => {
        const el = tiltRef.current
        if (!el) return

        const handleMove = (e) => {
            const height = el.clientHeight
            const width = el.clientWidth
            const rect = el.getBoundingClientRect()

            const xVal = e.clientX - rect.left
            const yVal = e.clientY - rect.top

            const yRotation = 20 * ((xVal - width / 2) / width)
            const xRotation = -20 * ((yVal - height / 2) / height)

            const string = `perspective(500px) scale(1.05) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`

            el.style.transform = string
        }

        const handleMouseOut = () => {
            el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
        }

        const handleMouseDown = () => {
            el.style.transform += ' scale(0.95)'
        }

        const handleMouseUp = () => {
            el.style.transform = el.style.transform.replace(' scale(0.95)', ' scale(1.05)')
        }

        el.addEventListener('mousemove', handleMove)
        el.addEventListener('mouseout', handleMouseOut)
        el.addEventListener('mousedown', handleMouseDown)
        el.addEventListener('mouseup', handleMouseUp)

        return () => {
            el.removeEventListener('mousemove', handleMove)
            el.removeEventListener('mouseout', handleMouseOut)
            el.removeEventListener('mousedown', handleMouseDown)
            el.removeEventListener('mouseup', handleMouseUp)
        }
    }, [])

    return (
        <div ref={tiltRef} className={`tilt-card ${className || ''}`} style={{ transition: 'transform 0.1s ease-out' }}>
            {children}
        </div>
    )
}

export default TiltCard
