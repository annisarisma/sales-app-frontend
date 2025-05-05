import React from 'react'

import img1 from '@assets/images/invoice/img-01.jpg'
import { MoveLeft, MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const OnlineInvoicing = () => {
  return (
    <React.Fragment>
      <section className="relative py-20" id="case">
        <div className="container mx-auto px-4 max-w-[1350px]">
          <div className="grid items-center grid-cols-12">
            <div className="col-span-12 lg:col-span-5">
              <h2 className="mb-2 text-2xl leading-normal capitalize sm:text-3xl md:text-4xl">
                Get paid quickly and easily with Domiex&apos;s online invoicing
                software and system.
              </h2>
              <p className="mb-5 text-gray-500 dark:text-muted-invoice">
                Invoicing software generates billing for services and products.
                It streamlines the process for getting paid, giving your
                business an accurate picture of its finances, ensuring
                liquidity.
              </p>
              <Link href="/apps/invoice/overview-1" className="btn btn-purple">
                View Invoice
                <MoveRight className="ml-1 size-4 ltr:inline-block rtl:hidden" />
                <MoveLeft className="mr-1 rtl:inline-block size-4 ltr:hidden" />
              </Link>
            </div>
            <div className="col-span-12 mt-10 lg:col-span-5 lg:col-start-8 lg:mt-0">
              <div className="relative">
                <svg
                  viewBox="0 0 402 397"
                  className="absolute right-0 -bottom-24 2xl:-right-24 size-64">
                  <g id="&lt;Group&gt;">
                    <g id="&lt;Group&gt;">
                      <g id="&lt;Group&gt;">
                        <path
                          id="&lt;Compound Path&gt;"
                          fillRule="evenodd"
                          className="fill-gray-100/50 dark:fill-muted-invoice/10"
                          d="m28.9 275.3c-42.1-96.6 2.3-209.3 98.8-251.4 96.6-42.1 209.3 2.3 251.4 98.8 42 96.6-2.3 209.3-98.8 251.4-96.6 42-209.3-2.3-251.4-98.8zm346.5-151c-41.2-94.5-151.6-137.9-246.1-96.7-94.5 41.1-137.9 151.5-96.7 246.1 41.1 94.5 151.5 137.9 246.1 96.7 94.5-41.2 137.9-151.6 96.7-246.1z"
                        />
                      </g>
                    </g>
                    <g id="&lt;Group&gt;">
                      <g id="&lt;Group&gt;">
                        <path
                          id="&lt;Compound Path&gt;"
                          fillRule="evenodd"
                          className="fill-gray-100/50 dark:fill-muted-invoice/10"
                          d="m57.3 262.7c-33.3-76.4-1.4-166.6 72.5-205.4 78.1-40.9 174.9-10.6 215.8 67.5 1.8 3.4 3.5 6.9 5.1 10.5 33.2 76.4 1.4 166.6-72.5 205.3-37.9 19.8-81.1 23.7-121.9 11-40.8-12.7-74.1-40.6-94-78.4-1.7-3.4-3.4-7-5-10.5zm289.7-125.8c-1.5-3.5-3.2-6.9-4.9-10.2-39.9-76.2-134.3-105.7-210.4-65.8-72.1 37.7-103.2 125.7-70.7 200.2 1.5 3.4 3.1 6.9 4.9 10.2 19.3 36.9 51.8 64.1 91.6 76.5 39.7 12.4 81.9 8.6 118.8-10.7 72.1-37.8 103.1-125.7 70.7-200.2z"
                        />
                      </g>
                    </g>
                    <g id="&lt;Group&gt;">
                      <g id="&lt;Group&gt;">
                        <path
                          id="&lt;Compound Path&gt;"
                          fillRule="evenodd"
                          className="fill-gray-100/50 dark:fill-muted-invoice/10"
                          d="m84.7 250.8c-25.1-57.7-5.3-125 47.1-160 59.7-39.7 140.5-23.6 180.3 36 4.3 6.5 8.1 13.3 11.2 20.4 25.1 57.7 5.3 125-47.2 159.9-59.6 39.8-140.5 23.7-180.3-36-4.3-6.4-8-13.3-11.1-20.3zm234.9-102c-3-6.8-6.6-13.5-10.8-19.7-38.6-57.8-116.9-73.5-174.7-34.9-50.9 33.9-70.1 99.1-45.7 155 3 6.8 6.6 13.5 10.8 19.7 38.5 57.8 116.9 73.5 174.7 34.9 50.8-33.9 70-99.1 45.7-155z"
                        />
                      </g>
                    </g>
                    <g id="&lt;Group&gt;">
                      <g id="&lt;Group&gt;">
                        <path
                          id="&lt;Compound Path&gt;"
                          fillRule="evenodd"
                          className="fill-gray-100/50 dark:fill-muted-invoice/10"
                          d="m110.1 239.9c-17.2-39.5-7.7-85.9 23.7-115.5 19.9-18.7 45.9-28.6 73.3-27.8 27.3 0.9 52.7 12.3 71.4 32.2 8.2 8.6 14.7 18.5 19.4 29.3 17.2 39.5 7.7 85.9-23.7 115.4-41.1 38.7-106.1 36.8-144.8-4.3-8.1-8.7-14.6-18.5-19.3-29.3zm184.1-80.2c-4.5-10.4-10.8-19.9-18.6-28.2-18-19.1-42.4-30.1-68.7-30.9-26.2-0.8-51.2 8.7-70.4 26.8-30.1 28.4-39.3 72.9-22.7 110.9 4.5 10.4 10.7 19.8 18.6 28.1 37.1 39.5 99.5 41.4 139 4.2 30.2-28.4 39.4-73 22.8-110.9z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
                <img
                  src={img1}
                  alt="invoiceImg"
                  className="rounded-md shadow-lg shadow-gray-200 thumbnail"
                  width={543}
                  height={504}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default OnlineInvoicing
