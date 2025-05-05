import React, { useState } from 'react'

import UseNumberCounter from '@src/components/Common/NumberCounter'

import {
  EmailCampaignChart,
  GradientDonutApp,
  LabelColumnApp,
} from './emailChart'

const EmailCampaign = () => {
  const [timeFrame, setTimeFrame] = useState('Monthly')
  return (
    <React.Fragment>
      <div className="col-span-12 xl:col-span-8 xl:row-span-2 card">
        <div className="flex flex-col gap-5 lg:items-center lg:flex-row card-header">
          <h6 className="card-title grow">Email Campaign Performance</h6>
          <div className="flex items-center gap-1 p-1 bg-gray-100 rounded-md dark:bg-dark-850 shrink-0">
            <button
              type="button"
              className={`px-3 py-1 text-xs [&.active]:bg-white dark:[&.active]:bg-dark-900 btn ${timeFrame === 'Monthly' ? 'active' : ''}`}
              onClick={() => setTimeFrame('Monthly')}>
              Monthly
            </button>
            <button
              type="button"
              className={`px-3 py-1 text-xs [&.active]:bg-white dark:[&.active]:bg-dark-900 btn ${timeFrame === 'Weekly' ? 'active' : ''}`}
              onClick={() => setTimeFrame('Weekly')}>
              Weekly
            </button>
            <button
              type="button"
              className={`px-3 py-1 text-xs [&.active]:bg-white dark:[&.active]:bg-dark-900 btn ${timeFrame === 'Yearly' ? 'active' : ''}`}
              onClick={() => setTimeFrame('Yearly')}>
              Yearly
            </button>
          </div>
        </div>
        <div className="card-body">
          <EmailCampaignChart
            chartColors="[bg-primary-500, bg-gray-300]"
            chartDarkColors="[bg-primary-500, bg-dark-600]"
            chartId="labelLineChart"
            timeFrame={timeFrame}
          />
        </div>
      </div>

      <div className="col-span-12 overflow-hidden xl:col-span-4 card">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-8">
            <div className="card-body">
              <GradientDonutApp
                chartColors="[bg-primary-500, bg-red-500]"
                chartDarkColors={''}
                chartId="gradientDonutChart"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 bg-primary-500 card-body !-m-[1px] text-center">
            <div>
              <LabelColumnApp
                chartColors="[bg-primary-200]"
                chartDarkColors={''}
                chartId="labelColumnChart"
              />
            </div>
            <p className="mt-4 text-primary-100">Total Revenue</p>
            <h5 className="text-white">
              $<UseNumberCounter start={145} end={500} duration={3000} />M
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default EmailCampaign
