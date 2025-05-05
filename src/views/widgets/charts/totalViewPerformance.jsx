import React from 'react'

import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '@custom/Dropdown/Dropdown'
import { Ellipsis } from 'lucide-react'
import { Link } from 'react-router-dom'

import ViewPerformanceChart from './viewPerformanceChart'

const TotalViewPerformance = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-6 2xl:col-span-3">
        <div className="card">
          <div className="flex items-center gap-3 card-header">
            <h6 className="card-title grow">Total View Performance</h6>
            <Dropdown position="" trigger="click" dropdownClassName="dropdown">
              <DropdownButton colorClass="flex link link-primary">
                <Ellipsis className="size-5" />
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
              <ViewPerformanceChart
                chartColors="[bg-primary-500, bg-pink-400]"
                chartDarkColors={''}
                chartId="semiDonutChart"
              />
            </div>
            <div className="mt-3 text-center">
              <p className="mb-3 text-gray-500 dark:text-dark-500">
                Ensure your information is kept updated to enhance performance.
              </p>
              <Link to="#!" className="btn btn-primary">
                Guide Views{' '}
                <i className="ml-1 align-bottom ri-arrow-right-s-line"></i>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 text-sm card-footer">
            <Link to="#!" className="text-gray-500 dark:text-dark-500">
              <i className="align-bottom ri-circle-fill text-primary-500"></i>{' '}
              View Count:{' '}
              <span className="font-medium text-gray-800 dark:text-dark-100">
                148
              </span>
            </Link>
            <Link to="#!" className="text-gray-500 dark:text-dark-500">
              <i className="text-pink-400 align-bottom ri-circle-fill"></i>{' '}
              Percentage:{' '}
              <span className="font-medium text-gray-800 dark:text-dark-100">
                59%
              </span>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default TotalViewPerformance
