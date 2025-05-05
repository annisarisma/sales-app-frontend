import React from 'react'

import darkFeature1 from '@assets/images/email/features-1-dark.png'
import feature1 from '@assets/images/email/features-1.png'
import darkFeature2 from '@assets/images/email/features-2-dark.png'
import feature2 from '@assets/images/email/features-2.png'
import darkFeature3 from '@assets/images/email/features-3-dark.png'
import feature3 from '@assets/images/email/features-3.png'
import darkFeature4 from '@assets/images/email/features-4-dark.png'
import feature4 from '@assets/images/email/features-4.png'

const EmailFeatures = () => {
  return (
    <React.Fragment>
      <section className="relative md:pb-28" id="features">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-3 leading-normal capitalize">
              Domiex Email Features
            </h2>
            <p className="text-gray-500 dark:text-dark-500 text-16">
              Collaborate with your teammates using our real-time editor to
              compose professional emails.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-x-space">
            <div className="col-span-12 row-span-2 text-center bg-gray-100 dark:bg-dark-900/40 md:col-span-3 card">
              <div className="card-body">
                <img
                  src={feature1}
                  alt="featureImg"
                  className="w-full rounded-md dark:hidden"
                />{' '}
                <img
                  src={darkFeature1}
                  alt="featureImg"
                  className="w-full rounded-md hidden dark:block"
                />
                <h6 className="mt-4">Easy to change Email Accounts</h6>
              </div>
            </div>
            <div className="col-span-12 row-span-2 text-center bg-gray-100 dark:bg-dark-900/40 md:col-span-5 card">
              <div className="card-body">
                <img
                  src={feature2}
                  alt="featureImg"
                  className="w-full rounded-md dark:hidden"
                />{' '}
                <img
                  src={darkFeature2}
                  alt="featureImg"
                  className="w-full rounded-md hidden dark:block"
                />
                <h6 className="mt-4">Filter wise Email Lists</h6>
              </div>
            </div>
            <div className="col-span-12 text-center bg-gray-100 dark:bg-dark-900/40 md:col-span-4 card">
              <div className="flex flex-col gap-8 card-body">
                <div>
                  <img
                    src={feature3}
                    alt="featureImg"
                    className="w-full rounded-md dark:hidden"
                  />
                  <img
                    src={darkFeature3}
                    alt="featureImg"
                    className="w-full rounded-md hidden dark:block"
                  />
                  <h6 className="mt-4">Reply & New Added</h6>
                </div>

                <div>
                  <img
                    src={feature4}
                    alt="featureImg"
                    className="w-full rounded-md dark:hidden"
                  />
                  <img
                    src={darkFeature4}
                    alt="featureImg"
                    className="w-full rounded-md hidden dark:block"
                  />
                  <h6 className="mt-4">Email Reads</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default EmailFeatures
