import React from 'react'

import insurance from '@assets/images/others/insurance.png'
import { HeartHandshake } from 'lucide-react'

const InsuranceOverview = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-6 xl:col-span-3">
        <div className="card">
          <div className="card-header">
            <h6 className="card-title">Insurance Overview</h6>
          </div>
          <div className="card-body">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full text-primary-500 bg-primary-500/10 size-12">
                <HeartHandshake className="size-5" />
              </div>
              <div className="grow">
                <h6 className="mb-1">HealthCare Insurance</h6>
                <p className="text-gray-500 dark:text-dark-500">
                  #157-PE9871-541
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-green-500/10 border-green-500/20 card">
          <div className="card-body">
            <div className="flex items-center gap-3">
              <div className="grow">
                <img src={insurance} alt="insuranceImg" className="size-14" />
                <h6 className="mt-5 mb-1">
                  Get peace of mind with the right insurance coverage.
                </h6>
                <p className="mb-3 text-gray-500 dark:text-dark-500">
                  Receive your personalized quote in just a few clicks!
                </p>
                <button type="button" className="btn btn-green">
                  Buy Insurance
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default InsuranceOverview
