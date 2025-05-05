import React, { useState } from 'react'

import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '@custom/Dropdown/Dropdown'
import { Link } from 'react-router-dom'

import { AnalyticsApp } from './fileManagerChart'

const AnalyticsChart = () => {
  const [open, setOpen] = useState(false)
  const [timeFrame, setTimeFrame] = useState('Last Week')
  return (
    <React.Fragment>
      <div className="col-span-12 2xl:col-span-6 card">
        <div className="flex items-center card-header">
          <h6 className="card-title grow">Analytics</h6>
          <Dropdown position="" trigger="click" dropdownClassName="dropdown">
            <DropdownButton colorClass="flex px-3 py-1.5 text-xs border-gray-200 dark:border-dark-800 link link-primary btn">
              Last Week
              <svg
                className={`transition-transform duration-300 size-4 ${open ? 'transform rotate-180' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor"
                onClick={() => setOpen(!open)}>
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </DropdownButton>
            <DropdownMenu>
              <Link
                to="#!"
                className="dropdown-item "
                onClick={() => setTimeFrame('Last Week')}>
                <span>Last Week</span>
              </Link>
              <Link
                to="#!"
                className="dropdown-item "
                onClick={() => setTimeFrame('Last Month')}>
                <span>Last Month</span>
              </Link>
              <Link
                to="#!"
                className="dropdown-item"
                onClick={() => setTimeFrame('Last Year')}>
                <span>Last Year</span>
              </Link>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="card-body">
          <AnalyticsApp
            chartColors="[bg-primary-500, bg-gray-100]"
            chartDarkColors={''}
            chartId="analyticsChart"
            timeFrame={timeFrame}
          />
        </div>
      </div>
    </React.Fragment>
  )
}
export default AnalyticsChart
