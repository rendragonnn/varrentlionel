import React from 'react'

const Loader = ({ loading }) => {
  if (!loading) return null

  return (
    <div className="loader-wrapper">
      <div className="loader"><span className="loader-text">VL</span></div>
      <p>Loading...</p>
    </div>
  )
}

export default Loader
