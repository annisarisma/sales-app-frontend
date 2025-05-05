import React, { useEffect } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import BasicVectorMap from '@views/maps/vector/basicVectorMap'
import BasicVectorMapWithMarkers from '@views/maps/vector/dataSeriesMap'
import ImageMarkerMap from '@views/maps/vector/imageMarkerVEctorMap'
import LineStyleMap from '@views/maps/vector/lineMarkMap'
import UserLocationMap from '@views/maps/vector/locationMap'
import MarkersVectorMap from '@views/maps/vector/markersVectorMap'
import ToolTipMap from '@views/maps/vector/tooltipMap'

const VectorMaps = () => {
  useEffect(() => {
    document.title = 'Vector | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Vector" subTitle="Maps" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Basic</h6>
          </div>
          <div className="card-body">
            <div id="basicMap" className="flex justify-center h-96">
              <BasicVectorMap />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Markers</h6>
          </div>
          <div className="card-body">
            <div id="markersMap" className="h-96">
              <MarkersVectorMap />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Image Marker</h6>
          </div>
          <div className="card-body">
            <div id="imageMarkersMap" className="h-96">
              <ImageMarkerMap />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Line Style</h6>
          </div>
          <div className="card-body">
            <div id="lineStyleMap" className="h-96">
              <LineStyleMap />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">With Tooltip</h6>
          </div>
          <div className="card-body">
            <div id="tooltipMap" className="h-96">
              <ToolTipMap />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Data Series</h6>
          </div>
          <div className="card-body">
            <div id="dataSeriesMap" className="h-96">
              <BasicVectorMapWithMarkers />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Reflect user location</h6>
          </div>
          <div className="card-body">
            <UserLocationMap />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default VectorMaps
