import React from 'react'

import UseNumberCounter from '@common//NumberCounter'
import { Activity, Aperture, CircleArrowUp } from 'lucide-react'

import AdsRevenueApp from './adsRevenueChart'
import AdsRevenueChart2 from './adsRevenueChart2'
import SalesRevenueApp from './salesRevenueChart'

const RevenueCharts = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 xl:col-span-6 2xl:col-span-4 card">
        <div className="card-body">
          <div className="flex gap-3 mb-3">
            <div className="flex items-center justify-center text-red-500 border-2 border-red-400 rounded-full ring-1 ring-offset-2 dark:ring-offset-dark-900 ring-red-500/20 size-12">
              <Activity className="fill-red-500/10" />
            </div>
            <div>
              <p className="mb-1 text-gray-500 dark:text-dark-500">
                Ads Revenue
              </p>
              <h5>
                $<UseNumberCounter start={10} end={145} duration={3000} />M
              </h5>
            </div>
          </div>
          <div dir="ltr">
            <AdsRevenueApp
              chartColors="[bg-red-500]"
              chartDarkColors={''}
              chartId="adsRevenueChart"
            />
          </div>
        </div>
      </div>
      <div className="col-span-12 xl:col-span-6 2xl:col-span-4 card">
        <div className="card-body">
          <div className="flex gap-3 mb-3">
            <div className="flex items-center justify-center border-2 rounded-full text-primary-500 ring-1 ring-offset-2 dark:ring-offset-dark-900 ring-primary-500/20 size-12 border-primary-500">
              <CircleArrowUp className="fill-primary-500/10" />
            </div>
            <div>
              <p className="mb-1 text-gray-500 dark:text-dark-500">
                Sales Revenue
              </p>
              <h5>
                $<UseNumberCounter start={10} end={145} duration={3000} />M
              </h5>
            </div>
          </div>
          <div dir="ltr">
            <SalesRevenueApp
              chartColors="[bg-primary-500, bg-primary-100, bg-primary-50, bg-primary-300]"
              chartDarkColors={''}
              chartId="salesRevenueChart"
            />
          </div>
        </div>
      </div>
      <div className="col-span-12 xl:col-span-6 2xl:col-span-4 card">
        <div className="card-body">
          <div className="flex gap-3 mb-3">
            <div className="flex items-center justify-center text-purple-500 border-2 border-purple-400 rounded-full ring-1 ring-offset-2 dark:ring-offset-dark-900 ring-purple-500/20 size-12">
              <Aperture className="fill-purple-500/10" />
            </div>
            <div>
              <p className="mb-1 text-gray-500 dark:text-dark-500">
                Ads Revenue
              </p>
              <h5>
                $<UseNumberCounter start={10} end={145} duration={3000} />M
              </h5>
            </div>
          </div>
          <div dir="ltr">
            <AdsRevenueChart2
              chartColors="[bg-purple-500]"
              chartDarkColors={''}
              chartId="adsRevenueChart"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default RevenueCharts
