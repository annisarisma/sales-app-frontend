import React, { useEffect, useState } from 'react'

import truck from '@assets/images/others/truck.png'
import BreadCrumb from '@src/components/Common/BreadCrumb'
import LineStyleOrderMap from '@views/apps/ecommerce/order/lineStyleMap'
import TrackTable from '@views/apps/ecommerce/order/trackTable'
import { MoveLeft, MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const OrderTrack = () => {
  const [activeTab, setActiveTab] = useState(2)
  const progress = 33

  useEffect(() => {
    document.title =
      'Order Track | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Order Track" subTitle="Orders" />
      <div className="card">
        <div className="tabs-pills card-header">
          <h6 className="card-title grow">Order Tracking</h6>
          <div className="shrink-0">
            <ul className="flex gap-2">
              <li>
                <Link
                  to="#"
                  onClick={() => setActiveTab(1)}
                  className={`nav-item ${activeTab === 1 ? 'bg-gray-100 text-gray-800 dark:bg-dark-800 dark:text-dark-50' : 'text-gray-500 dark:text-dark-500 hover:text-primary-500 dark:hover:text-primary-500'}`}>
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  onClick={() => setActiveTab(2)}
                  className={`nav-item ${activeTab === 2 ? 'bg-gray-100 text-gray-800 dark:bg-dark-800 dark:text-dark-50' : 'text-gray-500 dark:text-dark-500 hover:text-primary-500 dark:hover:text-primary-500'}`}>
                  Map View
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="card-body">
          <div className="w-full mt-4">
            {activeTab === 1 && (
              <div>
                <div className="grid grid-cols-12 gap-space">
                  <div className="col-span-12 md:col-span-3 xl:col-span-2">
                    <p className="mb-1 text-gray-500 dark:text-dark-500">
                      Order ID
                    </p>
                    <h6>
                      <Link to="#!" className="text-current link link-primary">
                        PEO-14521
                      </Link>
                    </h6>
                  </div>
                  <div className="col-span-12 md:col-span-3 xl:col-span-2">
                    <p className="mb-1 text-gray-500 dark:text-dark-500">
                      Delivery Date
                    </p>
                    <h6>08 Sep, 2024</h6>
                  </div>
                  <div className="col-span-12 md:col-span-3 xl:col-span-2">
                    <p className="mb-1 text-gray-500 dark:text-dark-500">
                      Payment Method
                    </p>
                    <span className="badge badge-green">Paid</span>
                  </div>
                  <div className="col-span-12 md:col-span-3 xl:col-span-3">
                    <p className="mb-1 text-gray-500 dark:text-dark-500">
                      Courier Partner
                    </p>
                    <h6>SRBThemes Express</h6>
                  </div>
                  <div className="col-span-12 md:col-span-6 xl:col-span-3">
                    <p className="mb-1 text-gray-500 dark:text-dark-500">
                      Delivery Address
                    </p>
                    <h6>
                      0588 Macey Ranch, Port Blake, New Mexico - 96153-1460
                    </h6>
                  </div>
                </div>
                <div
                  className="p-5 bg-gray-100 rounded-md mt-space dark:bg-dark-850"
                  dir="ltr">
                  <div className="relative h-32">
                    <div className="absolute left-5 inset-y-0 h-32 w-[2px] bg-gray-200 dark:bg-dark-800 before:absolute before:size-3 before:border-4 before:border-white dark:before:border-dark-900 before:bg-green-500 before:rounded-full before:-left-[5px]"></div>
                    <div className="absolute right-5 inset-y-0 h-32 w-[2px] bg-gray-200 dark:bg-dark-800 before:absolute before:size-3 before:border-4 before:border-white dark:before:border-dark-900 before:bg-gray-100 dark:before:bg-dark-800 before:rounded-full before:-left-[5px]"></div>
                    <div className="relative mx-10">
                      <img
                        src={truck}
                        alt="truck"
                        className="absolute animate-pulse"
                        style={{ left: `${progress - 11}%` }}
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gray-200 dark:bg-dark-800 progress-bar progress-2">
                      <div
                        style={{ width: `${progress}%` }}
                        className="text-white rounded-full progress-bar-wrap bg-primary-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-space">
                  <div>
                    <p className="mb-1 text-gray-500 dark:text-dark-500">
                      Order ID
                    </p>
                    <h6>
                      <Link to="#!" className="text-current link link-primary">
                        PEO-14521
                      </Link>
                    </h6>
                  </div>
                  <div>
                    <p className="mb-1 text-gray-500 dark:text-dark-500">
                      Order Status
                    </p>
                    <span className="badge badge-purple">Shipping</span>
                  </div>
                  <div>
                    <p className="mb-1 text-gray-500 dark:text-dark-500">
                      Delivery Date
                    </p>
                    <h6>08 Sep, 2024</h6>
                  </div>
                  <div>
                    <p className="mb-1 text-gray-500 dark:text-dark-500">
                      Courier Partner
                    </p>
                    <h6>SRBThemes Express</h6>
                  </div>
                  <div>
                    <p className="mb-1 text-gray-500 dark:text-dark-500">
                      Delivery Address
                    </p>
                    <h6>New Mexico</h6>
                  </div>
                </div>
                <div className="mt-space h-72">
                  <LineStyleOrderMap />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center mb-5">
        <h6 className="text-16 grow">Recent Orders</h6>
        <div className="shrink-0">
          <Link to="/apps/ecommerce/orders/list" className="btn btn-green">
            <span className="align-center">View All Orders</span>
            <MoveRight className="ml-1 ltr:inline-block rtl:hidden size-5"></MoveRight>
            <MoveLeft className="mr-1 rtl:inline-block ltr:hidden size-5"></MoveLeft>
          </Link>
        </div>
      </div>

      {/* track table */}
      <TrackTable />
    </React.Fragment>
  )
}

export default OrderTrack
