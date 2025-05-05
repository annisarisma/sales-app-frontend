import React, { useEffect } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import BasicLineChart from '@views/eCharts/lineCharts/basicLineChart'
import CategoryLineChart from '@views/eCharts/lineCharts/categoryLineChart'
import PolarLineChart from '@views/eCharts/lineCharts/polarLineChart'
import SmoothLineChart from '@views/eCharts/lineCharts/smoothLineChart'
import StackedLineChart from '@views/eCharts/lineCharts/stackedLineChart'
import StepLineChart from '@views/eCharts/lineCharts/stepLineChart'
import StyleLineChart from '@views/eCharts/lineCharts/styleLineChart'
import TwoPolarLineChart from '@views/eCharts/lineCharts/twoPolarLineChart'
import { Link } from 'react-router-dom'

const LineECharts = () => {
  useEffect(() => {
    document.title =
      'Line Charts | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Line Charts" subTitle="ECharts" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Basic</h6>
          </div>
          <div className="card-body">
            <BasicLineChart />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Smooth Line</h6>
          </div>
          <div className="card-body">
            <SmoothLineChart />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Stacked Line Chart</h6>
          </div>
          <div className="card-body">
            <StackedLineChart />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Line Y Category</h6>
          </div>
          <div className="card-body">
            <CategoryLineChart />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Step Line</h6>
          </div>
          <div className="card-body">
            <StepLineChart />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Style Line</h6>
          </div>
          <div className="card-body">
            <StyleLineChart />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Two Value-Axes in Polar</h6>
          </div>
          <div className="card-body">
            <PolarLineChart />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Two Value-Axes in Polar</h6>
          </div>
          <div className="card-body">
            <TwoPolarLineChart />
          </div>
        </div>
      </div>

      <div className="mb-5 text-center">
        <Link
          to="https://echarts.apache.org/examples/en/index.html#chart-type-line"
          target="_blank"
          className="btn btn-primary">
          More Example{' '}
          <i data-lucide="move-right" className="inline-block ml-1 size-4"></i>
        </Link>
      </div>
    </React.Fragment>
  )
}
export default LineECharts
