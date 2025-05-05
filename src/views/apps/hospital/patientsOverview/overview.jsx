import React from 'react'

import avatar5 from '@assets/images/avatar/user-5.png'
import { MessagesSquare, Pencil, Phone } from 'lucide-react'

const Overview = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 card">
        <div className="card-body">
          <div className="flex flex-wrap gap-5">
            <div className="shrink">
              <img src={avatar5} alt="avatar5" className="rounded-md size-40" />
            </div>
            <div className="grow">
              <h6 className="mb-1 text-16">Alice Johnson</h6>
              <div className="overflow-x-auto">
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
                      Accountant
                    </span>
                  </p>
                  <p>
                    <i className="ltr:mr-1 rtl:ml-1 ri-map-pin-2-line"></i>{' '}
                    <span className="text-gray-500 dark:text-dark-500">
                      California
                    </span>
                  </p>
                  <p>
                    <i className="ltr:mr-1 rtl:ml-1 ri-calendar-event-line"></i>{' '}
                    <span className="text-gray-500 dark:text-dark-500">
                      13 Dec, 1998 (25 Years)
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap items-center mt-5 gap-space">
                  <div className="p-4 text-center border border-gray-200 border-dashed rounded-md dark:border-dark-800 w-36 shrink-0">
                    <h4 className="mb-1">
                      26{' '}
                      <small className="text-sm font-normal text-gray-500 dark:text-dark-500">
                        May, 2024
                      </small>
                    </h4>
                    <p className="text-gray-500 dark:text-dark-500">
                      Appo. Date
                    </p>
                  </div>
                  <div className="p-4 text-center border border-gray-200 border-dashed rounded-md dark:border-dark-800 w-36 shrink-0">
                    <h4 className="mb-1">115/50</h4>
                    <p className="text-gray-500 dark:text-dark-500">
                      Blood Pressure
                    </p>
                  </div>
                  <div className="p-4 text-center border border-gray-200 border-dashed rounded-md dark:border-dark-800 w-36 shrink-0">
                    <h4 className="mb-1">B+</h4>
                    <p className="text-gray-500 dark:text-dark-500">
                      Blood Group
                    </p>
                  </div>
                  <div className="p-4 text-center border border-gray-200 border-dashed rounded-md dark:border-dark-800 w-36 shrink-0">
                    <h4 className="mb-1">
                      86{' '}
                      <small className="text-sm font-normal text-gray-500 dark:text-dark-500">
                        kg
                      </small>
                    </h4>
                    <p className="text-gray-500 dark:text-dark-500">Weight</p>
                  </div>
                  <div className="p-4 text-center border border-gray-200 border-dashed rounded-md dark:border-dark-800 w-36 shrink-0">
                    <h4 className="mb-1">
                      178{' '}
                      <small className="text-sm font-normal text-gray-500 dark:text-dark-500">
                        cm
                      </small>
                    </h4>
                    <p className="text-gray-500 dark:text-dark-500">Height</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="shrink-0">
              <div className="flex items-center gap-2">
                <button className="btn btn-sub-green btn-icon" title="phone">
                  <Phone className="size-4" />
                </button>
                <button
                  className="btn btn-sub-purple btn-icon"
                  title="messages-square">
                  <MessagesSquare className="size-4" />
                </button>
                <button type="button" className="btn btn-primary" title="add">
                  <Pencil className="inline-block ltr:mr-1 rtl:ml-1 size-4" />
                  Edit
                </button>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-6 xl:col-span-3">
                <p className="mb-1 text-gray-500 dark:text-dark-500">
                  Family Doctor
                </p>
                <h6>Dr. Vernon Locklin</h6>
              </div>
              <div className="col-span-12 lg:col-span-6 xl:col-span-3">
                <p className="mb-1 text-gray-500 dark:text-dark-500">
                  Assigned Doctor
                </p>
                <h6>Dr. Ellie Maggie</h6>
              </div>
              <div className="col-span-12 lg:col-span-6 xl:col-span-3">
                <p className="mb-1 text-gray-500 dark:text-dark-500">
                  Referring Doctor
                </p>
                <h6>Dr. Jasper Liewald</h6>
              </div>
              <div className="col-span-12 lg:col-span-6 xl:col-span-3">
                <p className="mb-1 text-gray-500 dark:text-dark-500">
                  Pharmacy Name
                </p>
                <h6>PixalEyez Pharmacy</h6>
              </div>
              <div className="col-span-12 lg:col-span-6 xl:col-span-3">
                <div className="whitespace-normal">
                  <p className="mb-1 text-gray-500 dark:text-dark-500">
                    Full Address
                  </p>
                  <h6>
                    Apt. 757 866 Truman Ridge, Bashirianside, OH 34623-2200
                  </h6>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6 xl:col-span-3">
                <p className="mb-1 text-gray-500 dark:text-dark-500">
                  Phone Number
                </p>
                <h6>+33 1 42 68 53 00</h6>
              </div>
              <div className="col-span-12 lg:col-span-6 xl:col-span-3">
                <p className="mb-1 text-gray-500 dark:text-dark-500">
                  Emergency Number
                </p>
                <h6>+34 91 123 45 67</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Overview
