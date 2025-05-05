import React, { useEffect, useRef } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import SlopeMultiChart from '@views/apexcharts/slopChart/slopMultiChart'
import SlopeBasicChart from '@views/apexcharts/slopChart/slopeBasicChart'

const SlopeCharts = () => {
  useEffect(() => {
    document.title =
      'Slope Charts | Domiex - React JS Admin & Dashboard Template'
  }, [])

  const slopeBasicChart = useRef()
  return (
    <React.Fragment>
      <BreadCrumb title="Slope Charts" subTitle="ApexCharts" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Basic</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <SlopeBasicChart chartId={slopeBasicChart} />
            </div>
          </div>
        </div>
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Multi Group</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <SlopeMultiChart
                chartColors="[bg-primary-500, bg-purple-500, bg-red-500, bg-green-500]"
                chartDarkColors={''}
                chartId={slopeBasicChart}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default SlopeCharts
