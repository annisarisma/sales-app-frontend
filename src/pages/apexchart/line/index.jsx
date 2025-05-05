import React, { useEffect, useRef } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import BasicLineChart from '@views/apexcharts/lineCharts/basicLineChart'
import DashedLineChart from '@views/apexcharts/lineCharts/dashedLineChart'
import DataLabelsLineChart from '@views/apexcharts/lineCharts/dataLabelsLineChart'
import GradientLineChart from '@views/apexcharts/lineCharts/gradientLineChart'
import SteplineLineChart from '@views/apexcharts/lineCharts/steplineLineChart'
import ZoomableLineChart from '@views/apexcharts/lineCharts/zoomableLineChart'

const LineCharts = () => {
  useEffect(() => {
    document.title =
      'Line Charts | Domiex - React JS Admin & Dashboard Template'
  }, [])

  const basicLineChart = useRef()
  const labelLineChart = useRef()
  const zoomableLineChart = useRef()
  const steplineLineChart = useRef()
  const gradientLineChart = useRef()
  const dashedLineChart = useRef()

  return (
    <React.Fragment>
      <BreadCrumb title="Line Charts" subTitle="Apexcharts" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Basic</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <BasicLineChart
                chartColors="[bg-primary-500]"
                chartDarkColors={''}
                chartId={basicLineChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Line with Data Labels</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <DataLabelsLineChart
                chartColors="[bg-primary-500, bg-gray-300]"
                chartDarkColors="[bg-primary-500, bg-gray-300]"
                chartId={labelLineChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Zoomable Timeseries</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <ZoomableLineChart
                chartColors="[bg-sky-500]"
                chartDarkColors={''}
                chartId={zoomableLineChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Stepline</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <SteplineLineChart
                chartColors="[bg-green-500]"
                chartDarkColors={''}
                chartId={steplineLineChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Gradient</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <GradientLineChart
                chartColors="[bg-orange-500, bg-primary-500]"
                chartDarkColors={''}
                chartId={gradientLineChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Dashed</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <DashedLineChart
                chartColors="[bg-primary-500, bg-green-500, bg-gray-200]"
                chartDarkColors={''}
                chartId={dashedLineChart}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default LineCharts
