import React from 'react'

import PatternImage from '@assets/images/dashboards/ecommerce/pattern.png'
import { TrendingDown } from 'lucide-react'

import AnimatedCounter from '../analyticsDashboards/counter'

const TopCampaign = () => {
  return (
    <React.Fragment>
      <div className="relative col-span-12 overflow-hidden border-0 xl:col-span-4 xl:row-span-2 card ltr:bg-gradient-to-bl rtl:bg-gradient-to-br from-green-500/15 to-primary-500/15">
        <img
          src={PatternImage}
          alt="PatternImage"
          className="absolute bottom-0 ltr:right-0 rtl:left-0 opacity-20"
        />
        <div className="relative card-body">
          <h6 className="mb-5">Top Campaign</h6>

          <h5 className="mb-2 capitalize">
            Feeling embarrassed by your design skills? Here’s what you can do.
          </h5>
          <p className="mb-8 text-gray-500 dark:text-dark-500">29 June, 2024</p>

          <p className="mb-1">Conversion Rate</p>
          <h5>
            <span>
              <AnimatedCounter start={500} end={1097} duration={3000} />
            </span>{' '}
            <TrendingDown className="inline-block ml-2 text-red-500 size-4" />{' '}
            <small className="text-sm font-normal text-gray-500 dark:text-dark-400">
              12.9% This years
            </small>
          </h5>
        </div>
      </div>
    </React.Fragment>
  )
}
export default TopCampaign
