import React from 'react'

import { CircleDotDashed } from 'lucide-react'
import { Link } from 'react-router-dom'

import { WebAnalyticsApp } from './chart'
import AnimatedCounter from './counter'

const WebAnalytics = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 xl:col-span-6 2xl:col-span-9 card">
        <div className="flex flex-col gap-3 md:flex-row md:items-center card-header">
          <h6 className="card-title grow">Web Analytics</h6>
          <div className="flex items-center gap-2">
            <Link to="#!" className="link link-primary">
              <CircleDotDashed className="inline-block text-primary-500 size-4" />{' '}
              <span className="leading-none align-middle">Referral</span>
            </Link>
            <Link to="#!" className="link link-green">
              <CircleDotDashed className="inline-block text-green-500 size-4 " />{' '}
              <span className="leading-none align-middle">Direct</span>
            </Link>
            <Link to="#!" className="link link-purple">
              <CircleDotDashed className="inline-block text-purple-500 size-4 " />{' '}
              <span className="leading-none align-middle">Ads</span>
            </Link>
          </div>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-3">
              <p className="text-gray-500 dark:text-dark-500">Page Views </p>
              <h5>
                <AnimatedCounter start={500} end={17415} duration={3000} />+{' '}
                <span className="text-xs text-green-500">
                  <i className="align-baseline ri-arrow-up-line"></i> 4.5%
                </span>
              </h5>
            </div>
            <div className="col-span-3">
              <p className="text-gray-500 dark:text-dark-500">Page Views</p>
              <h5>
                <AnimatedCounter start={0} end={2} duration={3000} />m{' '}
                <AnimatedCounter start={0} end={18} duration={3000} />s{' '}
                <span className="text-xs text-red-500">
                  <i className="align-baseline ri-arrow-down-line"></i> 0.9%
                </span>
              </h5>
            </div>
          </div>
          <WebAnalyticsApp
            chartColors="[bg-primary-500, bg-green-500, bg-purple-500]"
            chartDarkColors={''}
            chartId="webAnalyticsChart"
          />
        </div>
      </div>
    </React.Fragment>
  )
}
export default WebAnalytics
