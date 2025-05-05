import React from 'react'

import { VisitBrowsersApp } from './chart'
import AnimatedCounter from './counter'

const VisitBrowsers = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-6 2xl:col-span-2 card">
        <div className="card-body">
          <p className="mb-1 text-gray-500 dark:text-dark-500 text-13">
            Payment Method
          </p>
          <h5>
            <AnimatedCounter start={500} end={4510} duration={3000} />+{' '}
            <span className="text-xs text-green-500">
              <i className="align-baseline ri-arrow-up-line"></i> 1.9%
            </span>
          </h5>
          <VisitBrowsersApp
            chartColors="[bg-primary-500, bg-orange-500, bg-yellow-500]"
            chartDarkColors={''}
            chartId="visitBrowsersChart"
          />
        </div>
      </div>
    </React.Fragment>
  )
}
export default VisitBrowsers
