import React, { useEffect, useState } from 'react'

import World from '@data/worldMap.json'
import { VectorMap } from '@south-paw/react-vector-maps'

// Component
const LineStyleMap = () => {
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

  // Markers definition
  const markers = [
    { name: 'Brazil', coords: [280.235, 230.9253], fill: 'grey' },
    { name: 'Greenland', coords: [101.7069, 252.6043], fill: 'grey' },
    { name: 'Egypt', coords: [220.8025, 360.8206], fill: 'grey' },
    { name: 'United States', coords: [197.7129, 145.0902], fill: 'grey' },
    { name: 'Norway', coords: [138.9826, 330.8197], fill: 'grey' },
  ]

  // Lines between markers
  const lines = [
    { from: 'Brazil', to: 'Greenland' },
    { from: 'Greenland', to: 'Egypt' },
    { from: 'Egypt', to: 'United States' },
    { from: 'United States', to: 'Norway' },
    { from: 'Norway', to: 'Brazil' },
  ]

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

  // Get marker by name
  const getMarkerByName = (name) =>
    markers.find((marker) => marker.name === name)

  return (
    <div style={{ position: 'relative' }}>
      <svg style={{ width: '100%', height: '384px', position: 'relative' }}>
        {/* World map */}
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

        {/* Render lines connecting markers */}
        {lines.map((line, index) => {
          const fromMarker = getMarkerByName(line.from)
          const toMarker = getMarkerByName(line.to)

          if (fromMarker && toMarker) {
            const fromCoords = fromMarker.coords
            const toCoords = toMarker.coords

            return (
              <line
                key={index}
                x1={fromCoords[1]} // Using Longitude for x1
                y1={fromCoords[0]} // Using Latitude for y1
                x2={toCoords[1]} // Using Longitude for x2
                y2={toCoords[0]} // Using Latitude for y2
                stroke="#676767"
                strokeWidth="1.5"
                strokeDasharray="6 3"
              />
            )
          }
          return null
        })}

        {/* Render markers */}
        {markers.map((marker, index) => {
          const latitude = marker.coords[0] // Using Latitude
          const longitude = marker.coords[1] // Using Longitude

          return (
            <circle
              key={index}
              cx={longitude} // Using Longitude for cx
              cy={latitude} // Using Latitude for cy
              r="5"
              fill={marker.fill}
              stroke="#000"
              strokeWidth="0.5"
            />
          )
        })}
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

export default LineStyleMap
