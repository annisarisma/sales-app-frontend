import React, { useEffect, useRef } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import BasicScatterChart from '@views/apexcharts/scatterCharts/basicScatterChart'
import DatetimeScatterChart from '@views/apexcharts/scatterCharts/datetimeScatterChart'
import ImagesScatterChart from '@views/apexcharts/scatterCharts/imagesScatterChart'

const ScatterCharts = () => {
  useEffect(() => {
    document.title =
      'Scatter Charts | Domiex - React JS Admin & Dashboard Template'
  }, [])

  const basicScatterChart = useRef()
  const datetimeScatterChart = useRef()
  const imagesScatterChart = useRef()

  return (
    <React.Fragment>
      <BreadCrumb title="Scatter Charts" subTitle="ApexCharts" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Basic</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <BasicScatterChart
                chartColors="[bg-primary-500, bg-yellow-500, bg-red-500]"
                chartDarkColors={''}
                chartId={basicScatterChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Scatter – Datetime</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <DatetimeScatterChart
                chartColors="[bg-primary-500, bg-green-500, bg-purple-500, bg-orange-500, bg-red-500]"
                chartDarkColors={''}
                chartId={datetimeScatterChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Scatter – Images</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <ImagesScatterChart chartId={imagesScatterChart} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default ScatterCharts
