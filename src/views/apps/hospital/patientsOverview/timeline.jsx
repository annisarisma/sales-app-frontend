import React from 'react'

import SimpleBar from 'simplebar-react'

const Timeline = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 row-span-2 md:col-span-6 xl:col-span-3 card">
        <div className="card-header">
          <h6 className="card-title">Timeline</h6>
        </div>
        <div className="card-body">
          <SimpleBar className="h-[20.8rem] -mx-space px-space">
            <ul className="timeline">
              <li className="timeline-primary">
                <span className="badge badge-gray">
                  19 June, 2024 - 11:15 AM
                </span>
                <h6 className="mt-3 mb-1">Follow Up </h6>
                <p className="text-sm text-gray-500 dark:text-dark-500">
                  Follow-up for rash, prescribed antihistamine
                </p>
              </li>
              <li className="timeline-primary">
                <span className="badge badge-gray">
                  25 May, 2024 - 09:00 AM
                </span>
                <h6 className="mt-3 mb-1">Appointment</h6>
                <p className="text-sm text-gray-500 dark:text-dark-500">
                  Annual physical check-up
                </p>
              </li>
              <li className="timeline-primary">
                <span className="badge badge-gray">
                  21 May, 2024 - 03:30 PM
                </span>
                <h6 className="mt-3 mb-1">Lab Test</h6>
                <p className="text-sm text-gray-500 dark:text-dark-500">
                  Blood test: Complete Blood Count (CBC)
                </p>
              </li>
              <li className="timeline-primary">
                <span className="badge badge-gray">
                  05 May, 2024 - 10:00 AM
                </span>
                <h6 className="mt-3 mb-1">Medication Start</h6>
                <p className="text-sm text-gray-500 dark:text-dark-500">
                  Prescribed Atorvastatin 20mg for high cholesterol
                </p>
              </li>
            </ul>
          </SimpleBar>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Timeline
