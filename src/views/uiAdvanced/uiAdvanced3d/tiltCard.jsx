import React, { useEffect, useRef } from 'react'

import VanillaTilt from 'vanilla-tilt'

const TiltCard = ({ options, className = '', children }) => {
  const tiltRef = useRef(null)

  useEffect(() => {
    const currentTiltRef = tiltRef.current

    if (currentTiltRef) {
      VanillaTilt.init(currentTiltRef, options)
    }

    return () => {
      if (currentTiltRef) {
        currentTiltRef.vanillaTilt.destroy()
      }
    }
  }, [options])

  return (
    <React.Fragment>
      <div
        className={`mx-auto shadow-lg size-56 sm:size-64 md:size-80 ${className}`}
        ref={tiltRef}>
        {children}
      </div>
    </React.Fragment>
  )
}

export default TiltCard
