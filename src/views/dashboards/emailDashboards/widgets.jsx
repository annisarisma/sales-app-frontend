import React from 'react'

import { TrendingDown, TrendingUp } from 'lucide-react'

import AnimatedCounter from '../analyticsDashboards/counter'

const Widgets = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-6 xl:col-span-2 card">
        <div className="card-body">
          <p className="mb-2 text-gray-500">Emails Sent</p>
          <h5>
            <AnimatedCounter start={0} end={48} duration={3000} />k{' '}
            <TrendingUp className="inline-block text-green-500 ltr:ml-1 rtl:mr-1 size-4" />{' '}
            <small className="text-sm font-normal text-gray-500 dark:text-dark-500">
              This years
            </small>
          </h5>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 xl:col-span-2 card">
        <div className="card-body">
          <p className="mb-2 text-gray-500 dark:text-dark-500">
            Average Click Rate
          </p>
          <h5>
            <AnimatedCounter start={0} end={32} duration={3000} />k{' '}
            <TrendingUp className="inline-block text-green-500 ltr:ml-1 rtl:mr-1 size-4" />{' '}
            <small className="text-sm font-normal text-gray-500 dark:text-dark-500">
              This years
            </small>
          </h5>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 xl:col-span-2 card">
        <div className="card-body">
          <p className="mb-2 text-gray-500 dark:text-dark-500">Open Rate</p>
          <h5>
            <AnimatedCounter start={0} end={84} duration={3000} />%{' '}
            <TrendingDown className="inline-block text-red-500 ltr:ml-1 rtl:mr-1 size-4" />{' '}
            <small className="text-sm font-normal text-gray-500 dark:text-dark-500">
              This years
            </small>
          </h5>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 xl:col-span-2 card">
        <div className="card-body">
          <p className="mb-2 text-gray-500 dark:text-dark-500">Unsubscribe</p>
          <h5>
            <AnimatedCounter start={0} end={26} duration={3000} />%{' '}
            <TrendingDown className="inline-block text-red-500 ltr:ml-1 rtl:mr-1 size-4" />{' '}
            <small className="text-sm font-normal text-gray-500 dark:text-dark-500">
              This years
            </small>
          </h5>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Widgets
