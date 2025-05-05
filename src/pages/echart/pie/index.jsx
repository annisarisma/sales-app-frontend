import React, { useEffect } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import BasicPieChart from '@views/eCharts/pieCharts/basicPieChart'
import DoughnutPieChart from '@views/eCharts/pieCharts/doughnutPieChart'
import DoughnutRoundedPieChart from '@views/eCharts/pieCharts/doughnutRoundedPieChart'
import HalfDouglasnutChart from '@views/eCharts/pieCharts/halfDouglasnutChart'
import { Link } from 'react-router-dom'

const PieECharts = () => {
  useEffect(() => {
    document.title = 'Pie Charts | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Pie Charts" subTitle="ECharts" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Basic</h6>
          </div>
          <div className="card-body">
            <BasicPieChart />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">
              Doughnut Chart with rounded-sm Corner
            </h6>
          </div>
          <div className="card-body">
            <DoughnutRoundedPieChart />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Doughnut Chart</h6>
          </div>
          <div className="card-body">
            <DoughnutPieChart />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Doughnut Chart</h6>
          </div>
          <div className="card-body">
            <HalfDouglasnutChart />
          </div>
        </div>
      </div>

      <div className="mb-5 text-center">
        <Link
          to="https://echarts.apache.org/examples/en/index.html#chart-type-pie"
          target="_blank"
          className="btn btn-primary">
          More Example{' '}
          <i data-lucide="move-right" className="inline-block ml-1 size-4"></i>
        </Link>
      </div>
    </React.Fragment>
  )
}
export default PieECharts
