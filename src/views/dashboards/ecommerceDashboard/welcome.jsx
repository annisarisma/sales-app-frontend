import React from 'react'

import EComImage from '@assets/images/dashboards/ecommerce/img-01.png'
import pattern from '@assets/images/dashboards/ecommerce/pattern.png'
import { TrendingUp } from 'lucide-react'

import AnimatedCounter from '../analyticsDashboards/counter'

const Welcome = () => {
  return (
    <React.Fragment>
      <div className="relative order-1 col-span-12 2xl:col-span-8 card">
        <div className="card-body">
          <h6 className="mb-2 card-title">Welcome Back Shopia Mia</h6>
          <p className="text-gray-500 dark:text-dark-500">
            You have earned 49% more than last month which is great thing.
          </p>

          <div className="grid grid-cols-12 mt-12 mb-5 md:mb-0">
            <div className="col-span-6 border-gray-200 md:col-span-4 lg:col-span-2 ltr:border-r rtl:border-l dark:border-dark-800">
              <h6 className="mb-1.5">
                $<AnimatedCounter start={500} end={4878} duration={3000} />{' '}
                <TrendingUp className="inline-block ml-1 text-green-500 size-4" />
              </h6>
              <p className="text-gray-500 dark:text-dark-500">Today's Sales</p>
            </div>
            <div className="col-span-6 md:col-span-4 lg:col-span-3 ltr:pl-5 rtl:pr-5">
              <h6 className="mb-1.5">
                <AnimatedCounter start={1} end={49} duration={3000} />%{' '}
                <TrendingUp className="inline-block ml-1 text-green-500 size-4" />
              </h6>
              <p className="text-gray-500 dark:text-dark-500">
                Overall Performance
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 hidden ltr:right-0 rtl:left-0 lg:block">
            <div className="absolute inset-0 ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-white dark:from-dark-900"></div>
            <img
              src={pattern}
              alt="patternImage"
              className="h-32"
              width={386}
              height={128}
            />
          </div>
          <img
            src={EComImage}
            alt="EComImage"
            className="mx-auto md:absolute bottom-2 ltr:right-5 rtl:left-5"
            width={200}
            height={198}
          />
        </div>
      </div>
    </React.Fragment>
  )
}
export default Welcome
