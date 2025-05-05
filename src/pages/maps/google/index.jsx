import React, { useCallback, useEffect, useRef, useState } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
// event

import { useJsApiLoader } from '@react-google-maps/api'

const mapContainerStyle = {
  height: '400px',
  width: '100%',
}

const defaultCenter = {
  lat: -31.397,
  lng: 125.644,
}

const geoMapCenter = {
  lat: -34.397,
  lng: 150.644,
}

const bounds = {
  north: -25.363882,
  south: -31.203405,
  east: 131.044922,
  west: 125.244141,
}

const secretMessages = ['This', 'is', 'the', 'secret', 'message']

const origin = { lat: -33.871, lng: 151.197 }

const containerStyle = {
  width: '100%',
  height: '400px',
}

const MapComponent = () => {
  const [map, setMap] = useState(null)
  const [geoMap, setGeoMap] = useState(null)

  useEffect(() => {
    document.title = 'Google Map | Domiex - React JS Admin & Dashboard Template'
  }, [])

  useEffect(() => {
    if (geoMap) {
      const locationButton = document.createElement('button')
      locationButton.textContent = 'Pan to Current Location'
      locationButton.classList.add('custom-map-control-button')
      geoMap.controls[google.maps.ControlPosition.TOP_CENTER].push(
        locationButton
      )

      locationButton.addEventListener('click', () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            }
            geoMap.setCenter(pos)
          })
        }
      })
    }
  }, [geoMap])

  useEffect(() => {
    if (map) {
      secretMessages.forEach((message) => {
        const marker = new google.maps.Marker({
          position: {
            lat: bounds.south + (bounds.north - bounds.south) * Math.random(),
            lng: bounds.west + (bounds.east - bounds.west) * Math.random(),
          },
          map: map,
        })
        const infoWindow = new google.maps.InfoWindow({
          content: message,
        })
        marker.addListener('click', () => {
          infoWindow.open(map, marker)
        })
      })
    }
  }, [map])

  const onLoad = (mapInstance) => {
    setMap(mapInstance)
  }

  const onGeoMapLoad = (geoMapInstance) => {
    setGeoMap(geoMapInstance)
    const langMap = new google.maps.Map(
      document.getElementById('latlang-map'),
      {
        zoom: 4,
        center: { lat: -25.363882, lng: 131.044922 },
        mapId: 'AIzaSyB_dQ6dcSGTdhjDI7sGD8R74UnqYdnNK88',
      }
    )
    langMap.fitBounds(bounds)
  }

  // event
  const mapRef = useRef(null)
  const directionsService = useRef(null)
  const directionsRenderer = useRef(null)

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey:
      import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY ??
      'AIzaSyB_dQ6dcSGTdhjDI7sGD8R74UnqYdnNK88', // Replace with your Google Maps API key
  })

  const handleClick = useCallback((event) => {
    if (isIconMouseEvent(event)) {
      event.stop()
      if (event.placeId && typeof event.placeId === 'string') {
        // Ensure placeId is defined and is a string
        calculateAndDisplayRoute(event.placeId)
      } else {
        console.error('Invalid placeId:', event.placeId)
      }
    }
  }, [])

  useEffect(() => {
    if (mapRef.current) {
      directionsService.current = new google.maps.DirectionsService()
      directionsRenderer.current = new google.maps.DirectionsRenderer()
      directionsRenderer.current.setMap(mapRef.current)

      // Listen for clicks on the map.
      mapRef.current.addListener('click', handleClick)
    }
  }, [isLoaded, handleClick])

  const isIconMouseEvent = (e) => {
    // Use a type predicate to ensure e has placeId
    return 'placeId' in e
  }

  const calculateAndDisplayRoute = (placeId) => {
    if (directionsService.current && directionsRenderer.current) {
      directionsService.current.route(
        {
          origin,
          destination: { placeId },
          travelMode: google.maps.TravelMode.WALKING,
        },
        (response, status) => {
          if (status === 'OK') {
            directionsRenderer.current?.setDirections(response)
          } else {
            window.alert('Directions request failed due to ' + status)
          }
        }
      )
    }
  }

  return (
    <React.Fragment>
      <BreadCrumb title="Google Maps" subTitle="Maps" />
      <LoadScript googleMapsApiKey="AIzaSyB_dQ6dcSGTdhjDI7sGD8R74UnqYdnNK88">
        <div className="grid grid-cols-12 gap-x-space">
          <div className="col-span-12 card">
            <div className="card-header">
              <h6 className="card-title">Basic</h6>
            </div>
            <div className="card-body">
              <div id="map" className="w-full">
                <GoogleMap
                  onLoad={onLoad}
                  mapContainerStyle={mapContainerStyle}
                  center={defaultCenter}
                  zoom={6}
                />
              </div>
            </div>
          </div>

          <div className="col-span-12 card">
            <div className="card-header">
              <h6 className="card-title">Track your Location</h6>
            </div>
            <div className="card-body">
              <div id="geolocation" className="w-full">
                <GoogleMap
                  onLoad={onGeoMapLoad}
                  mapContainerStyle={mapContainerStyle}
                  center={geoMapCenter}
                  zoom={6}
                />
              </div>
            </div>
          </div>

          <div className="col-span-12 card">
            <div className="card-header">
              <h6 className="card-title">Map with LatLang</h6>
            </div>
            <div className="card-body">
              <div id="latlang-map" style={mapContainerStyle}></div>
            </div>
          </div>

          <div className="col-span-12 card">
            <div className="card-header">
              <h6 className="card-title">POI Click Events</h6>
            </div>
            <div className="card-body">
              <div id="event-map" className="w-full">
                <GoogleMap
                  id="event-map"
                  mapContainerStyle={containerStyle}
                  zoom={18}
                  center={origin}
                  onLoad={(map) => {
                    mapRef.current = map
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </LoadScript>
    </React.Fragment>
  )
}
export default MapComponent
