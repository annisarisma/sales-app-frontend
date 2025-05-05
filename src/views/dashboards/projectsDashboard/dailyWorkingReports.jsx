import React, { useState } from 'react'

import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '@custom/Dropdown/Dropdown'
import { Ellipsis } from 'lucide-react'
import { Link } from 'react-router-dom'

import { PatternDonutApp } from './projectCharts'

const DailyWorkingReports = () => {
  const [timeFrame, setTimeFrame] = useState('Weekly')
  return (
    <React.Fragment>
      <div className="order-3 col-span-12 lg:col-span-6 2xl:col-span-4 card">
        <div className="flex items-center gap-3 card-header">
          <h6 className="card-title grow">Daily Working Reports</h6>
          <Dropdown position="" trigger="click" dropdownClassName="dropdown">
            <DropdownButton colorClass="flex items-center text-gray-500 dark:text-dark-500">
              {' '}
              <Ellipsis className="size-5" />
            </DropdownButton>
            <DropdownMenu>
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
          <PatternDonutApp
            chartColors="[bg-primary-500, bg-purple-500, bg-green-500]"
            chartDarkColors={''}
            chartId="patternDonutChart"
            timeFrame={timeFrame}
          />
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              <Link to="#!" className="flex items-center gap-2">
                <i className="text-xs align-baseline ri-circle-fill text-primary-500 shrink-0"></i>
                <div className="grow">
                  <h6 className="font-normal">
                    Afternoon{' '}
                    <span className="text-gray-500 dark:text-dark-500">
                      (54%)
                    </span>
                  </h6>
                </div>
              </Link>
            </div>
            <div className="col-span-4">
              <Link to="#!" className="flex items-center gap-2">
                <i className="text-xs text-purple-500 align-baseline ri-circle-fill shrink-0"></i>
                <div className="grow">
                  <h6 className="font-normal">
                    Evening{' '}
                    <span className="text-gray-500 dark:text-dark-500">
                      (19%)
                    </span>
                  </h6>
                </div>
              </Link>
            </div>
            <div className="col-span-4">
              <Link to="#!" className="flex items-center gap-2">
                <i className="text-xs text-green-500 align-baseline ri-circle-fill shrink-0"></i>
                <div className="grow">
                  <h6 className="font-normal">
                    Morning{' '}
                    <span className="text-gray-500 dark:text-dark-500">
                      (27%)
                    </span>
                  </h6>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default DailyWorkingReports
