import React from 'react'

import studentsAttendances from '@src/data/school/students-attendances'

const AttendanceList = () => {
  return (
    <React.Fragment>
      <h6 className="mb-3">Attendance List</h6>
      <div className="grid grid-cols-12 gap-x-space">
        {studentsAttendances.map((attendance, index) => (
          <div
            key={index}
            className={`col-span-12 border-t-2 md:col-span-6 lg:col-span-4 card ${attendance.statusBadge}`}>
            <div className="card-body">
              <div className="flex items-center gap-3">
                <h6 className="grow">{attendance.date}</h6>
                <span className={`badge shrink-0 ${attendance.badge}`}>
                  {attendance.status}
                </span>
              </div>
              <div className="grid grid-cols-3 my-4">
                <div>
                  <p className="mb-1 text-gray-500 dark:text-dark-500">
                    Check In
                  </p>
                  <h6>{attendance.checkIn}</h6>
                </div>
                <div>
                  <p className="mb-1 text-gray-500 dark:text-dark-500">
                    Check Out
                  </p>
                  <h6>{attendance.checkOut}</h6>
                </div>
                <div>
                  <p className="mb-1 text-gray-500 dark:text-dark-500">Total</p>
                  <h6>{attendance.total}</h6>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <p className="grow">Notes:</p>
                <p className="text-gray-500 dark:text-dark-500 shrink-0">
                  {attendance.notes}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default AttendanceList
