import React, { useEffect, useRef } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import BasicHeatmapChart from '@views/apexcharts/heatMapCharts/basicHeatmapChart'
import MultipleColorsChart from '@views/apexcharts/heatMapCharts/multipleColorsChart'
import MultipleColorsFlippedHeatChart from '@views/apexcharts/heatMapCharts/multipleColorsFlippedHeatChart'
import RoundedHeatmapChart from '@views/apexcharts/heatMapCharts/roundedHeatmapChart'

const HeatmapCharts = () => {
  useEffect(() => {
    document.title =
      'Heatmap Charts | Domiex - React JS Admin & Dashboard Template'
  }, [])

  const basicHatmapChart = useRef()
  const multiColorHatmapChart = useRef()
  const multiColorFlippedHatmapChart = useRef()
  const roundedHatmapChart = useRef()

  return (
    <React.Fragment>
      <BreadCrumb title="Heatmap Charts" subTitle="Apexcharts" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Basic</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <BasicHeatmapChart
                chartColors="[bg-primary-500]"
                chartDarkColors={''}
                chartId={basicHatmapChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Multiple Colors</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <MultipleColorsChart
                chartColors="[bg-primary-500, bg-green-500, bg-pink-500, bg-sky-500, bg-indigo-500, bg-purple-500, bg-orange-500, bg-yellow-500]"
                chartDarkColors={''}
                chartId={multiColorHatmapChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Multiple Colors Flipped</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <MultipleColorsFlippedHeatChart
                chartColors="[bg-primary-500, bg-green-500, bg-pink-500, bg-sky-500, bg-indigo-500, bg-purple-500, bg-orange-500, bg-yellow-500]"
                chartDarkColors={''}
                chartId={multiColorFlippedHatmapChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Rounded</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <RoundedHeatmapChart
                chartColors="[bg-primary-500, bg-green-500]"
                chartDarkColors={''}
                chartId={roundedHatmapChart}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default HeatmapCharts
