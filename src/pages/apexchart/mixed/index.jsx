import React, { useEffect, useRef } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import LineAreaChart from '@views/apexcharts/mixedCharts/lineAreaChart'
import LineColumnAreaChart from '@views/apexcharts/mixedCharts/lineColumnAreaChart'
import LineColumnChart from '@views/apexcharts/mixedCharts/lineColumnChart'
import LineScatterChart from '@views/apexcharts/mixedCharts/lineScatterChart'

const MixedCharts = () => {
  useEffect(() => {
    document.title =
      'Mixed Charts | Domiex - React JS Admin & Dashboard Template'
  }, [])

  const lineColumnChart = useRef()
  const lineAreaChart = useRef()
  const lineColumnAreaChart = useRef()
  const lineScatterChart = useRef()

  return (
    <React.Fragment>
      <BreadCrumb title="Mixed Charts" subTitle="Apexcharts" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Line Column</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <LineColumnChart
                chartColors="[bg-primary-500, bg-green-500]"
                chartDarkColors={''}
                chartId={lineColumnChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Line & Area</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <LineAreaChart
                chartColors="[bg-sky-500, bg-green-500]"
                chartDarkColors={''}
                chartId={lineAreaChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Line Column Area</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <LineColumnAreaChart
                chartColors="[bg-primary-500, bg-green-500, bg-yellow-500]"
                chartDarkColors={''}
                chartId={lineColumnAreaChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Line Scatter</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <LineScatterChart
                chartColors="[bg-sky-500, bg-green-500]"
                chartDarkColors={''}
                chartId={lineScatterChart}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default MixedCharts
