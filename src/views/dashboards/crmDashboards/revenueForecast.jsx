import React from 'react'

import { Link } from 'react-router-dom'

import { BasicRadialBarApp } from './crmChart'

const RevenueForecast = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 2xl:col-span-5 card">
        <div className="flex items-center gap-3 card-header">
          <h6 className="card-title grow">Deal Revenue Forecast</h6>
          <Link to="#!" className="link link-primary shrink-0">
            View All <i className="align-baseline ri-arrow-right-line"></i>
          </Link>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-12 gap-x-space">
            <div className="col-span-12 md:col-span-5">
              <BasicRadialBarApp
                chartColors="[bg-slate-600, bg-slate-100]"
                chartDarkColors={''}
                chartId="basicRadialBarChart"
              />
            </div>
            <div className="col-span-12 md:col-span-7">
              <h6 className="mb-2">Team Goal</h6>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h6 className="text-xs grow">Marketing</h6>
                    <h6 className="text-xs text-gray-500 dark:text-dark-500">
                      $15,498/$80,000
                    </h6>
                  </div>
                  <div className="progress-bar progress-1">
                    <div className="w-[26%] text-white progress-bar-wrap bg-sky-400"></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h6 className="text-xs grow">Sales Revenue</h6>
                    <h6 className="text-xs text-gray-500 dark:text-dark-500">
                      $44,000/$1,00,000
                    </h6>
                  </div>
                  <div className="progress-bar progress-1">
                    <div className="w-[44%] text-white progress-bar-wrap bg-sky-400"></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h6 className="text-xs grow">Ads Revenue</h6>
                    <h6 className="text-xs text-gray-500 dark:text-dark-500">
                      $82,578/$1,50,000
                    </h6>
                  </div>
                  <div className="progress-bar progress-1">
                    <div className="w-[67%] text-white progress-bar-wrap bg-sky-400"></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h6 className="text-xs grow">Digital Marketing</h6>
                    <h6 className="text-xs text-gray-500 dark:text-dark-500">
                      $1,57,000/$2,00,000
                    </h6>
                  </div>
                  <div className="progress-bar progress-1">
                    <div className="w-[79%] text-white progress-bar-wrap bg-sky-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default RevenueForecast
