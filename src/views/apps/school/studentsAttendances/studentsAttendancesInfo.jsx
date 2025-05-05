import React from 'react'

import user14 from '@assets/images/avatar/user-14.png'
import UseNumberCounter from '@src/components/Common/NumberCounter'
import { Dot, SunMedium } from 'lucide-react'

const StudentsAttendancesInfo = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 md:col-span-7">
          <h6 className="mb-1">Attendance History</h6>
          <p className="mb-5 text-gray-500 dark:text-dark-500">
            <SunMedium className="inline-block size-4 ltr:mr-1 rtl:ml-1"></SunMedium>{' '}
            Today Mon, July 8, 2024
          </p>
          <div className="flex items-center mb-space">
            <button className="border-gray-200 rounded-r-none dark:border-dark-800 btn">
              <Dot className="inline-block ltr:mr-0.5 rtl:ml-0.5 text-green-500 size-6" />
              <strong className="whitespace-nowrap">On Time</strong>
              <span className="text-gray-500 dark:text-dark-500"> 80%</span>
            </button>
            <button className="border-gray-200 rounded-none dark:border-dark-800 border-x-0 btn">
              <Dot className="inline-block ltr:mr-0.5 rtl:ml-0.5 text-orange-500 size-6" />
              <strong>Late</strong>
              <span className="text-gray-500 dark:text-dark-500"> 10%</span>
            </button>
            <button className="border-gray-200 rounded-l-none dark:border-dark-800 btn">
              <Dot className="inline-block ltr:mr-0.5 rtl:ml-0.5 text-red-500 size-6" />
              <strong>Absent</strong>
              <span className="text-gray-500 dark:text-dark-500"> 10%</span>
            </button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5">
          <div className="flex justify-end gap-3 mb-space">
            <img
              src={user14}
              alt="user14Img"
              className="rounded-full size-10"
            />
            <div>
              <h6>Michael Johnson</h6>
              <p className="text-sm text-gray-500 dark:text-dark-500">
                Class: 12 (A)
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-3 card">
          <div className="card-body">
            <p className="mb-2 text-gray-500 dark:text-dark-500">
              Total Attendance
            </p>
            <h5>
              <span>
                <UseNumberCounter start={5} end={21} duration={1000} />
              </span>
            </h5>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-3 card">
          <div className="card-body">
            <p className="mb-2 text-gray-500 dark:text-dark-500">
              Absent Attendance
            </p>
            <h5>
              <span>
                <UseNumberCounter start={0} end={3} duration={1000} />
              </span>
            </h5>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-3 card">
          <div className="card-body">
            <p className="mb-2 text-gray-500 dark:text-dark-500">
              Late Attendance
            </p>
            <h5>
              <span>
                <UseNumberCounter start={1} end={5} duration={1000} />
              </span>
            </h5>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-3 card">
          <div className="card-body">
            <p className="mb-2 text-gray-500 dark:text-dark-500">Total Hours</p>
            <h5>
              <span>
                <UseNumberCounter start={10} end={178} duration={1000} />
              </span>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default StudentsAttendancesInfo
