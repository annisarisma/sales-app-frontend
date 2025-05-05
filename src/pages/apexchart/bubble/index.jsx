import React, { useEffect, useRef } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import ThreeDBubbleChart from '@views/apexcharts/bubblesCharts/bubble3bChart'
import SimpleBubbleChart from '@views/apexcharts/bubblesCharts/simpleBubbleChart'

const BubbleChart = () => {
  useEffect(() => {
    document.title =
      'Bubble Charts | Domiex - React JS Admin & Dashboard Template'
  }, [])

  const simpleBubbleChart = useRef()
  const dbubbleChart = useRef()
  return (
    <React.Fragment>
      <BreadCrumb title="Bubble Charts" subTitle="Apexcharts" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Simple</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <SimpleBubbleChart
                chartColors="[bg-primary-500, bg-green-500, bg-red-500, bg-yellow-500]"
                chartDarkColors={''}
                chartId={simpleBubbleChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">3D Bubble</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <ThreeDBubbleChart
                chartColors="[bg-primary-500, bg-green-500, bg-red-500, bg-yellow-500]"
                chartDarkColors={''}
                chartId={dbubbleChart}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default BubbleChart
