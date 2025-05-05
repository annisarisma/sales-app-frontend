import React, { useEffect, useState } from 'react'

import World from '@data/worldMap.json'
import { VectorMap } from '@south-paw/react-vector-maps'

const UserLocationMap = () => {
  const [userCoords, setUserCoords] = useState(null)
  const [locationName, setLocationName] = useState(null)
  const [mapMarkers, setMapMarkers] = useState([])
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
        top: event.clientY - 400,
        left: event.clientX - 980,
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
  // Fetch city, country, and IP information
  const fetchLocationDetails = async () => {
    try {
      const response = await fetch('https://ipinfo.io/geo')
      const data = await response.json()
      const { city, country, ip } = data
      return { city, country, ip }
    } catch (error) {
      return { city: '', country: '', ip: '' }
    }
  }

  const latLonToXY = (lat, lon) => {
    const x = ((lon + 180) / 360) * 1000 // SVG width is assumed to be 1000 units
    const y = ((90 - lat) / 180) * 500 // SVG height is assumed to be 500 units
    return [x, y]
  }

  const getUserLocation = async () => {
    const { city, country, ip } = await fetchLocationDetails()
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          const coords = latLonToXY(latitude, longitude)
          const formattedLocation = `• ${city}-${country}(${ip})`
          setUserCoords(coords) // Update state with SVG coordinates
          setLocationName(formattedLocation) // Set the location name
          setMapMarkers([{ coords, name: formattedLocation }])
        },
        (error) => {
          alert(error.message || 'Unable to retrieve your location.')
        },
        { enableHighAccuracy: true }
      )
    } else {
      alert('Geolocation is not supported by this browser.')
    }
  }

  // Clear markers on button click
  const clearMarkers = () => {
    setUserCoords(null) // Clear user coordinates
    setLocationName(null) // Clear the location name
    setMapMarkers([]) // Clear all markers
  }

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* The Map */}
      <svg
        style={{ width: '100%', height: '384px', transformOrigin: 'center' }}>
        <VectorMap
          {...World}
          layerProps={{ ...layerProps }}
          style={{
            fill: isDarkMode ? '#1e293b' : '#f3f4f6',
            stroke: isDarkMode ? '#0f172a' : '#fff',
            height: '384px',
            width: '100%',
          }}
        />

        {/* Display the marker for the user's location */}
        {userCoords && mapMarkers.length > 0 && (
          <circle
            cx={userCoords[1]} // X position from latLonToXY
            cy={userCoords[0]} // Y position from latLonToXY
            r="7"
            fill="#374151"
            stroke="#FFF"
            strokeWidth="5"
            strokeOpacity="0.5"
          />
        )}
      </svg>

      {/* Display the formatted location name */}
      {locationName && (
        <div
          style={{
            position: 'absolute',
            background: '#007aff',
            color: 'white',
            padding: '0.5rem',
            borderRadius: '4px',
            top: '10px',
            left: '10px',
            zIndex: 1000,
          }}>
          {locationName}
        </div>
      )}
      <button
        id="request-location"
        onClick={getUserLocation}
        className="text-white btn"
        style={{ backgroundColor: 'rgb(0, 162, 255)', marginRight: '5px' }}>
        Find My Location
      </button>
      <button
        id="clear-location"
        onClick={clearMarkers}
        className="text-white btn"
        style={{ backgroundColor: '#ef4444' }}>
        Clear Location
      </button>
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

export default UserLocationMap
