import React, { useState } from 'react'

import { TrendingDown, TrendingUp } from 'lucide-react'

import { PatientsHistoryApp } from './hospitalChart'

const PatientsHistory = () => {
  const [timeFrame, setTimeFrame] = useState('All')
  return (
    <React.Fragment>
      <div className="col-span-12 xl:col-span-8 xl:row-span-2 card">
        <div className="flex flex-wrap items-center gap-3 card-header">
          <h6 className="card-title grow">Patients History</h6>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              className="px-3 !text-13 py-1 btn btn-primary"
              onClick={() => setTimeFrame('All')}>
              All
            </button>
            <button
              type="button"
              className="px-3 !text-13 py-1 border-gray-200 dark:border-dark-800 btn btn-outline-gray"
              onClick={() => setTimeFrame('Weekly')}>
              Weekly
            </button>
            <button
              type="button"
              className="px-3 !text-13 py-1 border-gray-200 dark:border-dark-800 btn btn-outline-gray"
              onClick={() => setTimeFrame('Monthly')}>
              Monthly
            </button>
            <button
              type="button"
              className="px-3 !text-13 py-1 border-gray-200 dark:border-dark-800 btn btn-outline-gray"
              onClick={() => setTimeFrame('Yearly')}>
              Yearly
            </button>
          </div>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-12 gap-4 mb-3">
            <div className="col-span-3">
              <h6>241</h6>
              <p className="text-gray-500 dark:text-dark-500">
                Assign Doctors{' '}
                <span className="text-xs font-medium text-green-500 align-baseline">
                  <TrendingUp className="inline-block ltr:ml-1 rtl:mr-1 size-4"></TrendingUp>{' '}
                  3.5%
                </span>
              </p>
            </div>
            <div className="col-span-3">
              <h6>241</h6>
              <p className="text-gray-500 dark:text-dark-500">
                Admit Patients{' '}
                <span className="text-xs font-medium text-red-500 align-baseline">
                  <TrendingDown className="inline-block ltr:ml-1 rtl:mr-1 size-4" />{' '}
                  0.4%
                </span>
              </p>
            </div>
          </div>
          <PatientsHistoryApp
            chartColors="[bg-primary-500, bg-purple-500]"
            chartDarkColors={''}
            chartId="patientsHistoryChart"
            timeFrame={timeFrame}
          />
        </div>
      </div>
    </React.Fragment>
  )
}
export default PatientsHistory
