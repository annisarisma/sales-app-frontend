import React, { useEffect, useRef } from 'react'

import BreadCrumb from '@common//BreadCrumb'

import BasicRadialBarChart from '../../../views/apexcharts/radialBarCharts/basicRadialbarChart'
import CustomAngleRadialBarChart from '../../../views/apexcharts/radialBarCharts/customAngleRadialbarChart'
import GradientRadialBarChart from '../../../views/apexcharts/radialBarCharts/gradientRadialbarChart'
import ImageRadialBarChart from '../../../views/apexcharts/radialBarCharts/imageRadialbarChart'
import MultipleRadialBarChart from '../../../views/apexcharts/radialBarCharts/multipleRadialbarChart'
import SemiGaugeRadialBarChart from '../../../views/apexcharts/radialBarCharts/semiGaugeRadialbarChart'
import StrokedGaugeRadialBarChart from '../../../views/apexcharts/radialBarCharts/strokedGaugeRadialbarChart'

const RadialBarCharts = () => {
  useEffect(() => {
    document.title =
      'Radialbar Charts | Domiex - React JS Admin & Dashboard Template'
  }, [])

  const basicRadialBarChart = useRef()
  const multipleRadialBarChart = useRef()
  const customAngleRadialBarChart = useRef()
  const gradientRadialBarChart = useRef()
  const imageRadialBarChart = useRef()
  const strokedGaugeRadialBarChart = useRef()
  const semiGaugeRadialBarChart = useRef()

  return (
    <React.Fragment>
      <BreadCrumb title="Radialbar Charts" subTitle="Apex Chart" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Basic</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <BasicRadialBarChart
                chartColors="[bg-primary-500]"
                chartDarkColors={''}
                chartId={basicRadialBarChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Multiple</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <MultipleRadialBarChart
                chartColors="[bg-primary-500, bg-green-500, bg-yellow-500, bg-purple-500]"
                chartDarkColors={''}
                chartId={multipleRadialBarChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Custom Angle Circle</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <CustomAngleRadialBarChart
                chartColors="[bg-primary-500, bg-green-500, bg-yellow-500, bg-purple-500]"
                chartDarkColors={''}
                chartId={customAngleRadialBarChart}
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
              <GradientRadialBarChart
                chartColors="[bg-primary-500, bg-green-500]"
                chartDarkColors={''}
                chartId={gradientRadialBarChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Radialbars with Image</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <ImageRadialBarChart chartId={imageRadialBarChart} />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Stroked Gauge</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <StrokedGaugeRadialBarChart
                chartColors="[bg-primary-500]"
                chartDarkColors={''}
                chartId={strokedGaugeRadialBarChart}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Semi Circle Gauge</h6>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <SemiGaugeRadialBarChart
                chartColors="[bg-sky-500]"
                chartDarkColors={''}
                chartId={semiGaugeRadialBarChart}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default RadialBarCharts
