import React, { useRef, useEffect } from 'react'

const Magnetic = ({ children, strength = 30 }) => {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const handleMouseMove = (e) => {
            const { left, top, width, height } = el.getBoundingClientRect()
            const x = e.clientX - (left + width / 2)
            const y = e.clientY - (top + height / 2)

            el.style.transform = `translate(${x * (strength / 100)}px, ${y * (strength / 100)}px)`
        }

        const handleMouseLeave = () => {
            el.style.transform = 'translate(0px, 0px)'
        }

        el.addEventListener('mousemove', handleMouseMove)
        el.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            el.removeEventListener('mousemove', handleMouseMove)
            el.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [strength])

    return (
        <div ref={ref} style={{ display: 'inline-block', transition: 'transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}>
            {children}
        </div>
    )
}

export default Magnetic
