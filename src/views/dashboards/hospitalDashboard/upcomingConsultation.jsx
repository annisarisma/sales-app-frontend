import React from 'react'

import user25 from '@assets/images/avatar/user-25.png'

const UpcomingConsultation = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 xl:col-span-4">
        <h6 className="mb-2">Upcoming Consultation</h6>
        <div className="card">
          <div className="card-body">
            <div className="flex gap-3">
              <img
                src={user25}
                alt="user25Img"
                className="rounded-md size-11 shrink-0"
              />
              <div className="grow">
                <h6 className="mb-1">Dr. Waylon Modin</h6>
                <p className="text-gray-500 dark:text-dark-500">
                  Dental Specialist
                </p>
              </div>
            </div>
            <div className="px-3 py-2 my-4 text-gray-500 bg-gray-100 rounded-md dark:text-dark-500 dark:bg-dark-850 text-13">
              <p>
                <i className="align-baseline ri-calendar-todo-line text-14 ltr:mr-1 rtl:ml-1"></i>{' '}
                24 Jul, 2024 - 11:00 AM - 12:00 PM
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" className="w-full btn btn-outline-red">
                Cancel
              </button>
              <button type="button" className="w-full btn btn-primary">
                Reschedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default UpcomingConsultation
