import React from 'react'

import {
  CalendarDays,
  CalendarPlus,
  CalendarPlus2,
  CalendarX2,
} from 'lucide-react'

const AppointmentsInformation = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-x-space">
        <div className="card">
          <div className="flex items-center gap-3 card-body">
            <div className="flex items-center justify-center text-green-500 rounded-md size-12 shrink-0 bg-gradient-to-r from-yellow-500/15 to-green-500/15">
              <CalendarPlus2 className="size-6" />
            </div>
            <div className="grow">
              <p className="mb-1 text-gray-500 dark:text-dark-500">
                Today Appointment
              </p>
              <h6>10</h6>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center gap-3 card-body">
            <div className="flex items-center justify-center rounded-md text-sky-500 size-12 shrink-0 bg-gradient-to-r from-sky-500/15 to-green-500/15">
              <CalendarPlus className="size-6" />
            </div>
            <div className="grow">
              <p className="mb-1 text-gray-500 dark:text-dark-500">
                New Appointment
              </p>
              <h6>21</h6>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center gap-3 card-body">
            <div className="flex items-center justify-center text-red-500 rounded-md size-12 shrink-0 bg-gradient-to-r from-red-500/15 to-pink-500/15">
              <CalendarX2 className="size-6" />
            </div>
            <div className="grow">
              <p className="mb-1 text-gray-500 dark:text-dark-500">
                Cancel Appointment
              </p>
              <h6>09</h6>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center gap-3 card-body">
            <div className="flex items-center justify-center text-purple-500 rounded-md size-12 shrink-0 bg-gradient-to-r from-purple-500/15 to-pink-500/15">
              <CalendarDays className="size-6" />
            </div>
            <div className="grow">
              <p className="mb-1 text-gray-500 dark:text-dark-500">
                Total Appointment
              </p>
              <h6>153</h6>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AppointmentsInformation
