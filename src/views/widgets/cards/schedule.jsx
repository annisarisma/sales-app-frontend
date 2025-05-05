import React from 'react'

import { Link } from 'react-router-dom'

const Schedule = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 row-span-2 md:col-span-6 xl:col-span-4 card">
        <div className="flex items-center card-header">
          <h6 className="card-title grow">My Schedule</h6>
          <div className="shrink-0">
            <div className="inline-flex gap-3 text-sm">
              <Link
                to="#!"
                className="relative inline-block text-gray-500 dark:text-dark-500 transition duration-200 ease-linear grow hover:text-purple-500 dark:hover:text-purple-500 after:size-1 after:absolute after:transition-all after:duration-200 after:opacity-0 after:-bottom-3 hover:after:-bottom-1.5 hover:after:opacity-100 after:mx-auto after:rounded-full after:inset-x-0 after:bg-purple-500 [&.active]:after:-bottom-1.5 [&.active]:after:opacity-100 [&.active]:text-purple-500 active">
                Day
              </Link>

              <Link
                to="#!"
                className="relative inline-block text-gray-500 dark:text-dark-500 transition duration-200 ease-linear grow hover:text-purple-500 dark:hover:text-purple-500 after:size-1 after:absolute after:transition-all after:duration-200 after:opacity-0 after:-bottom-3 hover:after:-bottom-1.5 hover:after:opacity-100 after:mx-auto after:rounded-full after:inset-x-0 after:bg-purple-500 [&.active]:after:-bottom-1.5 [&.active]:after:opacity-100 [&.active]:text-purple-500">
                Week
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-5">
              <div className="p-5 text-center bg-gray-100 rounded-md dark:bg-dark-850">
                <div className="flex items-center justify-center mx-auto mb-4 font-medium bg-white rounded-full dark:bg-dark-900 size-12">
                  14
                </div>
                <h6>June, 2024</h6>
              </div>
            </div>
            <div className="col-span-7">
              <p className="mb-1 text-gray-500 dark:text-dark-500">
                Working Time
              </p>
              <h6 className="mb-7">10:30 AM - 9:30 PM</h6>

              <p className="mb-1 text-gray-500 dark:text-dark-500">
                Total Patient:
              </p>
              <h6>10</h6>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Schedule
