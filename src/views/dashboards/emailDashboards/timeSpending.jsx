import React from 'react'

import { MoveLeft, MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { TimeSpendingApp } from './emailChart'

const TimeSpending = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 xl:col-span-4 card">
        <div className="flex items-center gap-5 card-header">
          <h6 className="card-title grow">All Time Spending</h6>
          <Link to="#!" className="badge badge-sub-gray">
            See All{' '}
            <MoveRight className="ltr:inline-block rtl:hidden ml-0.5 size-4" />{' '}
            <MoveLeft className="rtl:inline-block ltr:hidden mr-0.5 size-4" />
          </Link>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-12">
            <div className="col-span-6">
              <h5>7.4%</h5>
              <p className="text-gray-500 dark:text-dark-500">
                Conversion Rate
              </p>
            </div>
            <div className="col-span-6">
              <h5>48,759</h5>
              <p className="text-gray-500 dark:text-dark-500">Users</p>
            </div>
            <div className="col-span-12">
              <TimeSpendingApp
                chartColors="[bg-primary-500, bg-green-500]"
                chartDarkColors={''}
                chartId="timeSpendingChart"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default TimeSpending
