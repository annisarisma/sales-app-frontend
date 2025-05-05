import React from 'react'

import user3 from '@assets/images/avatar/user-3.png'
import { MessagesSquare, Pencil, Phone } from 'lucide-react'

const Information = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 card">
        <div className="card-body">
          <div className="flex flex-col gap-5 2xl:flex-row">
            <div className="shrink-0">
              <img src={user3} alt="user3Img" className="rounded-md size-40" />
            </div>
            <div className="mt-5 grow 2xl:mt-0">
              <h6 className="mb-1 text-16">Linda Sharp</h6>
              <div className="flex flex-wrap gap-3 item-center *:flex *:items-center">
                <p>
                  <i className="ltr:mr-1 rtl:ml-1 ri-user-3-line"></i>{' '}
                  <span className="text-gray-500 dark:text-dark-500">
                    Female
                  </span>
                </p>
                <p>
                  <i className="ltr:mr-1 rtl:ml-1 ri-briefcase-line"></i>{' '}
                  <span className="text-gray-500 dark:text-dark-500">
                    Merchandiser, retail
                  </span>
                </p>
                <p>
                  <i className="ltr:mr-1 rtl:ml-1 ri-map-pin-2-line"></i>{' '}
                  <span className="text-gray-500 dark:text-dark-500">
                    California
                  </span>
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-5 xl:mr-40 md:gap-space">
                <div className="p-3 md:p-4 text-center border border-gray-200 dark:border-dark-800 border-dashed rounded-md w-[110px] md:w-36 shrink-0">
                  <h5 className="mb-1 text-base md:text-lg">
                    1{' '}
                    <small className="text-sm font-normal text-gray-500 dark:text-dark-500">
                      hr
                    </small>{' '}
                    48{' '}
                    <small className="text-sm font-normal text-gray-500 dark:text-dark-500">
                      m
                    </small>{' '}
                    37{' '}
                    <small className="text-sm font-normal text-gray-500 dark:text-dark-500">
                      s
                    </small>
                  </h5>
                  <p className="text-gray-500 dark:text-dark-500">
                    Today Timing
                  </p>
                </div>
                <div className="p-3 md:p-4 text-center border border-gray-200 dark:border-dark-800 border-dashed rounded-md w-[110px] md:w-36 shrink-0">
                  <h4 className="mb-1 text-base md:text-lg">
                    20{' '}
                    <small className="text-sm font-normal text-gray-500 dark:text-dark-500">
                      Feb, 2021
                    </small>
                  </h4>
                  <p className="text-gray-500 dark:text-dark-500">
                    Joining Date
                  </p>
                </div>
                <div className="p-3 md:p-4 text-center border border-gray-200 dark:border-dark-800 border-dashed rounded-md w-[110px] md:w-36 shrink-0">
                  <h4 className="mb-1 text-base md:text-lg">
                    13{' '}
                    <small className="text-sm font-normal text-gray-500 dark:text-dark-500">
                      Dec, 1998
                    </small>
                  </h4>
                  <p className="text-gray-500 dark:text-dark-500">
                    Birthday Date
                  </p>
                </div>
                <div className="p-3 md:p-4 text-center border border-gray-200 dark:border-dark-800 border-dashed rounded-md w-[110px] md:w-36 shrink-0">
                  <h4 className="mb-1 text-base md:text-lg">
                    25{' '}
                    <small className="text-sm font-normal text-gray-500 dark:text-dark-500">
                      Years
                    </small>
                  </h4>
                  <p className="text-gray-500 dark:text-dark-500">Age</p>
                </div>
                <div className="p-3 md:p-4 text-center border border-gray-200 dark:border-dark-800 border-dashed rounded-md w-[110px] md:w-36 shrink-0">
                  <h6 className="mb-1 text-base md:text-lg">Radiology</h6>
                  <p className="text-gray-500 dark:text-dark-500">Department</p>
                </div>
              </div>
            </div>
            <div className="mt-4 shrink-0 lg:mt-0">
              <div className="flex items-center gap-2">
                <button className="btn btn-sub-green btn-icon" title="phone">
                  <Phone className="size-4" />
                </button>
                <button
                  className="btn btn-sub-purple btn-icon"
                  title="messages-square">
                  <MessagesSquare className="size-4" />
                </button>
                <button type="button" className="btn btn-primary" title="edit">
                  <Pencil className="inline-block mr-1 size-4" /> Edit
                </button>
              </div>
            </div>
          </div>

          <h6 className="mt-5">Summary Overview</h6>

          <div className="grid grid-cols-12 mt-4 gap-space">
            <div className="col-span-12 mb-0 border-dashed md:col-span-6 xl:col-span-4 2xl:col-span-3 card">
              <div className="card-body">
                <h6 className="mb-2">208 hr 30 min (292hr)</h6>
                <p className="text-gray-500 dark:text-dark-500">
                  Total Working Time (Monthly)
                </p>
              </div>
            </div>
            <div className="col-span-12 mb-0 border-dashed md:col-span-6 xl:col-span-4 2xl:col-span-3 card">
              <div className="card-body">
                <h6 className="mb-2">5 hr 15 min</h6>
                <p className="text-gray-500 dark:text-dark-500">
                  Total Delay (Monthly)
                </p>
              </div>
            </div>
            <div className="col-span-12 mb-0 border-dashed md:col-span-6 xl:col-span-4 2xl:col-span-3 card">
              <div className="card-body">
                <h6 className="mb-2 text-red-500">-5 hr 15 min</h6>
                <p className="text-gray-500 dark:text-dark-500">
                  Total Delay (Monthly)
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-3">
              <div className="grid grid-cols-2 gap-space">
                <div className="mb-0 border-dashed card">
                  <div className="card-body">
                    <h6 className="mb-2">3</h6>
                    <p className="text-gray-500 dark:text-dark-500">
                      Missed Shift
                    </p>
                  </div>
                </div>
                <div className="mb-0 border-dashed card">
                  <div className="card-body">
                    <h6 className="mb-2">2</h6>
                    <p className="text-gray-500 dark:text-dark-500">Absence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Information
