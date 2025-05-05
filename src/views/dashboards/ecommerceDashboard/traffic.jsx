import React, { useState } from 'react'

import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '@custom/Dropdown/Dropdown'
import { Link } from 'react-router-dom'

import { TrafficApp } from './ecomCharts'

const Traffic = () => {
  const [timeFrame, setTimeFrame] = useState('Recent')
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <React.Fragment>
      <div className="order-12 col-span-12 xl:col-span-6 2xl:col-span-4 card">
        <div className="flex items-center gap-3 card-header">
          <h6 className="card-title grow">Traffic</h6>
          <Dropdown position="" trigger="click" dropdownClassName="dropdown">
            <DropdownButton colorClass="flex px-3 py-1.5 text-xs border-gray-200 font-medium dark:border-dark-800 link link-primary btn">
              Recent
              <svg
                onClick={toggle}
                className={`transition-transform duration-300 ltr:ml-1 rtl:mr-1 size-4 ${open ? 'transform rotate-180' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor">
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
                onClick={() => setTimeFrame('Recent')}>
                <span>Recent</span>
              </Link>
              <Link
                to="#!"
                className="dropdown-item "
                onClick={() => setTimeFrame('Weekly')}>
                <span>Weekly</span>
              </Link>

              <Link
                to="#!"
                className="dropdown-item "
                onClick={() => setTimeFrame('Monthly')}>
                <span>Monthly</span>
              </Link>
              <Link
                to="#!"
                className="dropdown-item"
                onClick={() => setTimeFrame('Yearly')}>
                <span>Yearly</span>
              </Link>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="card-body">
          <TrafficApp
            chartColors="[bg-sky-500, bg-indigo-500]"
            chartDarkColors={''}
            chartId="trafficChart"
            timeFrame={timeFrame}
          />
        </div>
      </div>
    </React.Fragment>
  )
}
export default Traffic
