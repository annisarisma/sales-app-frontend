import React, { useEffect, useState } from 'react'

import World from '@data/worldMap.json'
import { VectorMap } from '@south-paw/react-vector-maps'

const ImageMarkerMap = () => {
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
      setTooltipPosition({
        top: event.clientY - 200,
        left: event.clientX - 900,
      })
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

  // Image markers with their coordinates
  const imageMarkers = [
    {
      name: 'Egypt',
      coords: { cx: '550', cy: '300' }, // Coordinates for Egypt (adjust as necessary)
      image: 'https://images.kcubeinfotech.com/domiex/images/others/pin.png', // Marker image for Egypt
    },
    {
      name: 'United States',
      coords: { cx: '200', cy: '200' }, // Coordinates for the US
      image: 'https://images.kcubeinfotech.com/domiex/images/others/pin.png', // Marker image for US
    },
    {
      name: 'United Kingdom',
      coords: { cx: '400', cy: '150' }, // Coordinates for the UK
      image: 'https://images.kcubeinfotech.com/domiex/images/others/pin.png', // Marker image for UK
    },
  ]

  return (
    <div style={{ position: 'relative', display: 'flex', gap: '10px' }}>
      {/* Apply zoom with transform */}
      <svg
        style={{ width: '100%', height: '384px', transformOrigin: 'center' }}>
        <VectorMap
          {...World}
          layerProps={layerProps}
          style={{
            fill: isDarkMode ? '#1e293b' : '#f3f4f6',
            stroke: isDarkMode ? '#0f172a' : '#fff',
          }}
        />

        {imageMarkers.map((marker, index) => (
          <image
            key={index}
            xlinkHref={marker.image}
            x={marker.coords.cx}
            y={marker.coords.cy}
            width="20"
            height="20"
            style={{ pointerEvents: 'none' }}
          />
        ))}
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

export default ImageMarkerMap
