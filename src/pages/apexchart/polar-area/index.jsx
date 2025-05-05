import React, { useEffect, useRef } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import BasicPolarAreaChart from '@views/apexcharts/polarAreaCharts/basicPolarAreaChart'
import MonochromePolarAreaChart from '@views/apexcharts/polarAreaCharts/monochromePolarAreaChart'

const PolarAreaCharts = () => {
  useEffect(() => {
    document.title =
      'Polar Charts | Domiex - React JS Admin & Dashboard Template'
  }, [])

  const basicPolarChart = useRef()
  const monochromePolarChart = useRef()

  return (
    <React.Fragment>
      <BreadCrumb title="Polar Area Charts" subTitle="Apexcharts" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Basic</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <BasicPolarAreaChart
                chartColors="[bg-primary-500, bg-green-500, bg-yellow-500, bg-purple-500, bg-red-500, bg-red-500]"
                chartDarkColors={''}
                chartId={basicPolarChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Monochrome</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <MonochromePolarAreaChart chartId={monochromePolarChart} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default PolarAreaCharts
