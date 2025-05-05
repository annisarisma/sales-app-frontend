import React from 'react'

import { Ellipsis } from 'lucide-react'
import { Link } from 'react-router-dom'

import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '../../../components/CustomComponents/Dropdown/Dropdown'
import { OverviewStorageApp } from './fileManagerChart'

const Storage = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-6 2xl:col-span-3 card">
        <div className="card-header">
          <div className="flex justify-between items-center ">
            <h6 className="card-title">Overview Storage</h6>
            <Dropdown position="" trigger="click" dropdownClassName="dropdown">
              <DropdownButton colorClass="flex items-center text-gray-500 dark:text-dark-500">
                <Ellipsis className="size-5" />
              </DropdownButton>
              <DropdownMenu>
                <Link
                  to="#!"
                  className="dropdown-item"
                  onClick={() => setSelectedOption('Weekly')}>
                  <span>Weekly</span>
                </Link>
                <Link
                  to="#!"
                  className="dropdown-item"
                  onClick={() => setSelectedOption('Monthly')}>
                  <span>Monthly</span>
                </Link>
                <Link
                  to="#!"
                  className="dropdown-item"
                  onClick={() => setSelectedOption('Yearly')}>
                  <span>Yearly</span>
                </Link>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        <div className="card-body">
          <OverviewStorageApp
            chartColors="[bg-primary-400, bg-green-400, bg-yellow-400, bg-purple-400, bg-red-400]"
            chartDarkColors={''}
            chartId="overviewStorageChart"
          />
          <div className="mt-5">
            <div className="flex items-center gap-3 mb-2">
              <h6 className="text-xs grow">Use Storage</h6>
              <h6 className="text-xs font-semibold text-red-500">74%</h6>
            </div>
            <div className="progress-bar progress-2">
              <div className="w-[74%] text-white progress-bar-wrap bg-primary-500"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Storage
