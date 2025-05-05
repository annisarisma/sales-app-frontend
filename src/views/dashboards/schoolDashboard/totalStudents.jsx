import React, { useState } from 'react'

import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '@custom/Dropdown/Dropdown'
import { Ellipsis } from 'lucide-react'
import { Link } from 'react-router-dom'

import { DumbbellColumnApp } from './schoolCharts'

const TotalStudents = () => {
  const [timeFrame, setTimeFrame] = useState('all')
  return (
    <React.Fragment>
      <div className="order-9 col-span-12 md:col-span-6 2xl:col-span-6 card">
        <div className="flex items-center gap-3 card-header">
          <h6 className="card-title grow">Total Students</h6>
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
          <DumbbellColumnApp
            chartColors="[bg-primary-500, bg-red-500]"
            chartDarkColors={''}
            chartId="dumbbellColumnChart"
            timeFrame={timeFrame}
          />
        </div>
      </div>
    </React.Fragment>
  )
}
export default TotalStudents
