import React, { useState } from 'react'

import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '@custom/Dropdown/Dropdown'
import { Ellipsis } from 'lucide-react'
import { Link } from 'react-router-dom'

import { MailStatisticApp } from './emailChart'

const MailStatistic = () => {
  const [timeFrame, setTimeFrame] = useState('Weekly')
  return (
    <React.Fragment>
      <div className="col-span-12 xl:col-span-4 xl:row-span-2 card">
        <div className="flex items-center gap-5 card-header">
          <h6 className="card-title grow">Mail Statistic</h6>
          <Dropdown position="" trigger="click" dropdownClassName="dropdown">
            <DropdownButton colorClass="flex items-center text-gray-500 dark:text-dark-500  ">
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
          <MailStatisticApp
            chartColors="[bg-primary-500, bg-green-500, bg-red-500]"
            chartDarkColors={''}
            chartId="mailStatisticChart"
            timeFrame={timeFrame}
          />
        </div>
      </div>
    </React.Fragment>
  )
}
export default MailStatistic
