import React, { useEffect, useState } from 'react'

import World from '@data/worldMap.json'
import { VectorMap } from '@south-paw/react-vector-maps'

const MarkersVectorMap = () => {
  const [hovered, setHovered] = React.useState('None')
  const [tooltipPosition, setTooltipPosition] = React.useState({
    top: 0,
    left: 0,
  })
  const [isDarkMode, setIsDarkMode] = useState(false) // Dark mode state

  const checkDarkMode = () => {
    const mode = document.documentElement.getAttribute('data-mode')
    setIsDarkMode(mode === 'dark')
  }

  useEffect(() => {
    checkDarkMode()
    const observer = new MutationObserver(() => {
      checkDarkMode()
    })
    observer.observe(document.documentElement, { attributes: true })
    return () => {
      observer.disconnect()
    }
  }, [])

  const layerProps = {
    onMouseEnter: (event) => {
      const target = event.currentTarget
      setHovered(target.getAttribute('name') || 'None')
    },
    onMouseLeave: () => {
      setHovered('None')
    },
    onMouseMove: (event) => {
      setTooltipPosition({ top: event.clientY - 40, left: event.clientX - 480 })
    },
    onFocus: (event) => {
      const target = event.currentTarget
      setHovered(target.getAttribute('name') || 'None')
    },
    onBlur: () => setHovered('None'),
    onClick: (event) => {
      const target = event.currentTarget
      setHovered(target.getAttribute('name') || 'None')
    },
  }
  return (
    <div style={{ position: 'relative', display: 'flex', gap: '10px' }}>
      <svg
        style={{ width: '100%', height: '384px', transformOrigin: 'center' }}>
        <VectorMap
          {...World}
          layerProps={layerProps}
          style={{
            fill: isDarkMode ? '#1e293b' : '#f3f4f6',
            stroke: isDarkMode ? '#0f172a' : '#fff',
            height: '384px',
            width: '100%',
          }}
        />
        <circle
          cx="498.643"
          cy="205.864"
          r="7"
          fill="#374151"
          stroke="#FFF"
          strokeWidth="5"
          strokeOpacity="0.5"
          cursor="pointer"
        />
        <circle
          cx="235.877"
          cy="300.250"
          r="7"
          fill="blue"
          stroke="#FFF"
          strokeWidth="5"
          strokeOpacity="0.5"
          cursor="pointer"
        />
      </svg>

      {hovered !== 'None' && (
        <div
          style={{
            position: 'absolute',
            background: '#007aff',
            color: 'white',
            padding: '0.5rem',
            borderRadius: '4px',
            top: tooltipPosition.top,
            left: tooltipPosition.left,
            whiteSpace: 'nowrap',
            zIndex: 1000,
            pointerEvents: 'none',
          }}>
          {hovered}
        </div>
      )}
    </div>
  )
}

export default MarkersVectorMap
