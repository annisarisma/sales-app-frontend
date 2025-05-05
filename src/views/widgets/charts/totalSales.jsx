import React, { useState } from 'react'

import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '@custom/Dropdown/Dropdown'
import { Link } from 'react-router-dom'

import TotalSalesChart from './totalSalesChart'

const TotalSales = () => {
  const [open, setOpen] = useState(false)
  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-6 2xl:col-span-4">
        <div className="card">
          <div className="flex items-center gap-3 card-header">
            <h6 className="card-title grow">Total Sales</h6>
            <Dropdown position="" trigger="click" dropdownClassName="dropdown">
              <DropdownButton colorClass="flex px-2 py-1 text-xs border-gray-200 dark:border-dark-800 link link-red btn">
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
                <Link to="#!" className="dropdown-item ">
                  <span>Last Week</span>
                </Link>

                <Link to="#!" className="dropdown-item ">
                  <span>Last Month</span>
                </Link>
                <Link to="#!" className="dropdown-item">
                  <span>Last Years</span>
                </Link>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <TotalSalesChart
                chartColors="[bg-primary-500]"
                chartDarkColors={''}
                chartId="labelColumnChart"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default TotalSales
