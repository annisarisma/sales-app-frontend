import React, { useState } from 'react'

import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '@custom/Dropdown/Dropdown'
import { Link } from 'react-router-dom'

import { PatientDepartmentApp } from './hospitalChart'

const PatientVisitDepartment = () => {
  const [timeFrame, setTimeFrame] = useState('Last Week')
  const [open, setOpen] = useState(false)

  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-6 xl:col-span-4 card">
        <div className="flex flex-col gap-3 md:items-center card-header md:flex-row">
          <h6 className="card-title grow">Patient Visit by Department</h6>
          <Dropdown
            position=""
            trigger="click"
            dropdownClassName="dropdown shrink-0">
            <DropdownButton colorClass="flex px-2 py-1 text-xs border-gray-200 dark:border-dark-800 link link-red btn">
              Last Week
              <svg
                onClick={() => setOpen(!open)}
                className={`transition-transform duration-300 size-4 ${open ? 'transform rotate-180' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </DropdownButton>
            <DropdownMenu>
              <Link
                to="#!"
                className="dropdown-item "
                onClick={() => setTimeFrame('Weekly')}>
                <span>Weekly</span>
              </Link>
              <Link
                to="#!"
                className="dropdown-item "
                onClick={() => setTimeFrame('Monthly')}>
                <span>Monthly</span>
              </Link>
              <Link
                to="#!"
                className="dropdown-item"
                onClick={() => setTimeFrame('Yearly')}>
                <span>Yearly</span>
              </Link>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="card-body">
          <div dir="ltr">
            <PatientDepartmentApp
              chartColors="[bg-primary-500, bg-green-500, bg-yellow-500, bg-purple-500, bg-red-500]"
              chartDarkColors={''}
              chartId="patientDepartmentChart"
              timeFrame={timeFrame}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default PatientVisitDepartment
