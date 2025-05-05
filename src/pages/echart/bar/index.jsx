import React, { useEffect } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import AxisAlignBarChart from '@views/eCharts/barCharts/axisAlignBarChart'
import BackgroundBarChart from '@views/eCharts/barCharts/backgroundBarChart'
import BasicBarChart from '@views/eCharts/barCharts/basicBarChart'
import SingleBarChart from '@views/eCharts/barCharts/singleBarChart'
import WorldPopulationBarChart from '@views/eCharts/barCharts/worldPopulationBarChart'
import { Link } from 'react-router-dom'

const BarEcharts = () => {
  useEffect(() => {
    document.title = 'Bar Charts | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Bar Charts" subTitle="Echarts" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Basic</h6>
          </div>
          <div className="card-body">
            <BasicBarChart
              chartColors="[bg-sky-500, bg-gray-200, bg-gray-800]"
              chartDarkColors="[bg-sky-500, bg-dark-800, bg-dark-100]"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Axis Align with Tick</h6>
          </div>
          <div className="card-body">
            <AxisAlignBarChart
              chartColors="[bg-primary-500, bg-gray-200, bg-gray-800]"
              chartDarkColors="[bg-primary-500, bg-dark-800, bg-dark-100]"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Bar with Background</h6>
          </div>
          <div className="card-body">
            <BackgroundBarChart />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Set Style of Single Bar</h6>
          </div>
          <div className="card-body">
            <SingleBarChart />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">World Population</h6>
          </div>
          <div className="card-body">
            <WorldPopulationBarChart />
          </div>
        </div>
      </div>
      {/* more options */}
      <div className="mb-5 text-center">
        <Link
          to="https://echarts.apache.org/examples/en/index.html#chart-type-bar"
          target="_blank"
          className="btn btn-primary">
          More Example{' '}
          <i data-lucide="move-right" className="inline-block ml-1 size-4"></i>
        </Link>
      </div>
    </React.Fragment>
  )
}
export default BarEcharts
