import React, { useState } from 'react'

import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '@custom/Dropdown/Dropdown'
import { Coins, Ellipsis } from 'lucide-react'
import { Link } from 'react-router-dom'

import AnimatedCounter from '../analyticsDashboards/counter'
import { ProjectStatusApp } from './projectCharts'

const ProjectStatus = () => {
  const [timeFrame, setTimeFrame] = useState('Weekly')
  return (
    <React.Fragment>
      <div className="order-2 col-span-12 2xl:order-1 lg:col-span-6 2xl:col-span-4 card">
        <div className="flex items-center gap-3 card-header">
          <h6 className="card-title grow">Project Status</h6>
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
          <div className="flex gap-3 mb-2">
            <div className="flex items-center justify-center rounded-md bg-primary-500/15 size-10">
              <Coins className="size-6 text-primary-500 fill-primary-500/20" />
            </div>
            <div className="grow">
              <h6>
                $<AnimatedCounter start={500} end={21589} duration={3000} />
              </h6>
              <p className="text-gray-500 dark:text-dark-500">Total Earnings</p>
            </div>
            <div className="shrink-0">
              <span className="font-medium text-green-500">
                <i className="align-baseline ri-arrow-up-line"></i> 4.5%
              </span>
            </div>
          </div>
          <ProjectStatusApp
            chartColors="[bg-primary-500]"
            chartDarkColors={''}
            chartId="projectStatusChart"
            timeFrame={timeFrame}
          />
          <div className="flex items-center gap-3 mt-3">
            <p className="text-gray-500 dark:text-dark-500 grow">Expense</p>
            <h6>$748.99</h6>
            <span className="font-medium badge badge-red">
              <i className="align-baseline ri-arrow-down-line"></i> 4.5%
            </span>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <p className="text-gray-500 dark:text-dark-500 grow">Profit</p>
            <h6>$8721.74</h6>
            <span className="font-medium badge badge-green">
              <i className="align-baseline ri-arrow-up-line"></i> 11.41%
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default ProjectStatus
