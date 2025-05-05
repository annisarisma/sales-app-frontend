import React, { useEffect } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import BasicAreaChart from '@views/apexcharts/areaCharts/basicAreaChart'
import MissingNullAreaChart from '@views/apexcharts/areaCharts/missingNullAreaChart'
import NegativeAreaChart from '@views/apexcharts/areaCharts/negativeAreaChart'
import SpLineAreaChart from '@views/apexcharts/areaCharts/spLineAreaChart'
import StackedAreaChart from '@views/apexcharts/areaCharts/stackedAreaChart'

const AreaCharts = () => {
  useEffect(() => {
    document.title =
      'Area Charts | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Area Charts" subTitle="Apexcharts" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Basic</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <BasicAreaChart
                chartId="basicAreaChart"
                chartColors={''}
                chartDarkColors={''}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Spline Area</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <SpLineAreaChart
                chartId="splineAreaChart"
                chartColors="[bg-sky-500, bg-green-500]"
                chartDarkColors={''}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Negative</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <NegativeAreaChart
                chartColors="[bg-primary-500, bg-gray-300]"
                chartDarkColors="[bg-primary-500, bg-dark-700]"
                chartId="negativeAreaChart"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Stacked</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <StackedAreaChart
                chartColors="[bg-primary-500, bg-green-500, bg-gray-200]"
                chartDarkColors="[bg-primary-500, bg-green-500, bg-dark-700]"
                chartId="stackedAreaChart"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Missing / Null values</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <MissingNullAreaChart
                chartColors="[bg-primary-500]"
                chartDarkColors={''}
                chartId="missingAreaChart"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default AreaCharts
