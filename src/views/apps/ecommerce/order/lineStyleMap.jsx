import React, { useEffect, useState } from 'react'

import { VectorMap } from '@south-paw/react-vector-maps'
import World from '@src/data/worldMap.json'

const LineStyleOrderMap = () => {
  const [hovered, setHovered] = React.useState('None')
  const [tooltipPosition, setTooltipPosition] = React.useState({
    top: 0,
    left: 0,
  })
  const [isDarkMode, setIsDarkMode] = useState(false)

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
    { name: 'Brazil', coords: [206.37675, 617.5064], fill: 'grey' },
    { name: 'Greenland', coords: [151.7069, 792.6043], fill: 'grey' },
  ]

  // Lines between markers
  const lines = [{ from: 'Brazil', to: 'Greenland' }]

  const layerProps = {
    onMouseEnter: (event) => {
      const target = event.currentTarget
      setHovered(target.getAttribute('name') || 'None')
    },
    onMouseLeave: () => {
      setHovered('None')
    },
    onMouseMove: (event) => {
      setTooltipPosition({ top: event.clientY + 10, left: event.clientX - 480 })
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

  const getMarkerByName = (name) =>
    markers.find((marker) => marker.name === name)

  return (
    <div style={{ position: 'relative' }}>
      <svg style={{ width: '100%', height: '288px', position: 'relative' }}>
        {/* World map */}
        <VectorMap
          {...World}
          layerProps={layerProps}
          style={{
            fill: isDarkMode ? '#1e293b' : '#f3f4f6',
            stroke: isDarkMode ? '#0f172a' : '#fff',
            height: '288px',
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
                x1={fromCoords[1]}
                y1={fromCoords[0]}
                x2={toCoords[1]}
                y2={toCoords[0]}
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
          const latitude = marker.coords[0]
          const longitude = marker.coords[1]

          return (
            <circle
              key={index}
              cx={longitude}
              cy={latitude}
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

export default LineStyleOrderMap
