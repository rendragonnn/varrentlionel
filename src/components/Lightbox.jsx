import React from 'react'

const Lightbox = ({ show, img, caption, onClose }) => {
    if (!show) return null

    return (
        <div className="lightbox" onClick={onClose}>
            <span className="lightbox-close">&times;</span>
            <img className="lightbox-img" src={img} alt={caption} onClick={(e) => e.stopPropagation()} />
            <div className="lightbox-caption">{caption}</div>
        </div>
    )
}

export default Lightbox
