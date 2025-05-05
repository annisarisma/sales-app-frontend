import React, { useEffect, useRef } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import BasicRangeChart from '@views/apexcharts/rangeAreaCharts/basicRangeChart'
import RangeComboChart from '@views/apexcharts/rangeAreaCharts/rangeComboChart'

const RangeAreaCharts = () => {
  useEffect(() => {
    document.title =
      'Range Area Charts | Domiex - React JS Admin & Dashboard Template'
  }, [])

  const rangeBasicChart = useRef()
  const rangeComboChart = useRef()

  return (
    <React.Fragment>
      <BreadCrumb title="Range Area Charts" subTitle="ApexCharts" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Basic</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <BasicRangeChart
                chartColors="[bg-primary-500]"
                chartDarkColors={''}
                chartId={rangeBasicChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Combo</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <RangeComboChart
                chartColors="[bg-sky-500, bg-red-500]"
                chartDarkColors={''}
                chartId={rangeComboChart}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default RangeAreaCharts
