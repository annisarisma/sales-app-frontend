import React, { useEffect, useState } from 'react'

import World from '@data/worldMap.json'
import { VectorMap } from '@south-paw/react-vector-maps'

const ToolTipMap = () => {
  const [hovered, setHovered] = React.useState('None')
  const [tooltipPosition, setTooltipPosition] = React.useState({
    top: 0,
    left: 0,
  })
  const [zoom, setZoom] = React.useState(1) // State for zoom level
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

  // Handle zoom in and zoom out
  const handleZoomIn = () => setZoom((prevZoom) => Math.min(prevZoom + 0.2, 5))
  const handleZoomOut = () => setZoom((prevZoom) => Math.max(prevZoom - 0.2, 1))

  // Define layerProps with correct event types for SVG elements
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
        top: event.clientY - 100,
        left: event.clientX - 1100,
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

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        gap: '10px',
        justifyContent: 'space-between',
      }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Zoom controls */}
        <button
          onClick={handleZoomOut}
          style={{
            padding: '5px',
            lineHeight: '4px',
            background: isDarkMode ? '#64748b' : 'black',
            color: 'white',
            borderRadius: '6px',
          }}>
          -
        </button>
        <button
          onClick={handleZoomIn}
          style={{
            padding: '5px',
            lineHeight: '6px',
            background: isDarkMode ? '#64748b' : 'black',
            color: 'white',
            borderRadius: '6px',
            marginTop: '6px',
          }}>
          +
        </button>
      </div>
      {/* Apply zoom with transform */}
      <div
        style={{
          overflow: 'hidden',
          position: 'relative',
          textAlign: 'center',
        }}>
        <VectorMap
          {...World}
          layerProps={layerProps}
          style={{
            fill: isDarkMode ? '#1e293b' : '#f3f4f6',
            stroke: isDarkMode ? '#0f172a' : '#fff',
            transform: `scale(${zoom})`,
            transformOrigin: 'center',
            height: '384px',
            width: '100%',
          }}
        />
      </div>

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
          <h6 className="mb-2">{hovered} - Country</h6>
          <p className="text-xs">Get better UX with SRBThemes.</p>
        </div>
      )}
    </div>
  )
}

export default ToolTipMap
