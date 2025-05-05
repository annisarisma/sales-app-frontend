import React from 'react'

import { EmailCampaignChart } from './crmChart'

const SalesAnalytics = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 xl:col-span-12 2xl:col-span-12 card">
        <div className="col-span-12">
          <div className="mb-space" dir="ltr">
            <div className='p-3'>
              <h6 className="mb-1">Sales Analytics</h6>
              <p className="text-gray-500 dark:text-dark-500">
                Unlocking Insights and Driving Growth Through Data-Driven Sales
                Strategies
              </p>
            </div>
            <div className="mt-5 lg:-mt-8">
              <EmailCampaignChart
                chartColors="[bg-primary-500, bg-pink-300, bg-sky-300, bg-slate-600]"
                chartDarkColors={
                  '[bg-primary-500, bg-pink-300, bg-sky-300, bg-slate-600]'
                }
                chartId="salesAnalyticsChart"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default SalesAnalytics
