import React, { useState } from 'react'

import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '@custom/Dropdown/Dropdown'
import { Ellipsis } from 'lucide-react'
import { Link } from 'react-router-dom'

// Define the possible options as a union type
const TaskActivity = () => {
  const [selectedOption, setSelectedOption] = useState('Weekly')

  // Example data for different periods
  const data = {
    Weekly: {
      uiDesign: 56.8,
      development: 29.3,
      webDesign: 12,
      message: 'This week task activity by department',
    },
    Monthly: {
      uiDesign: 65.0,
      development: 20.0,
      webDesign: 15.0,
      message: 'This month task activity by department',
    },
    Yearly: {
      uiDesign: 70.0,
      development: 15.0,
      webDesign: 15.0,
      message: 'This year task activity by department',
    },
  }

  // Change the data based on the selected option
  const { uiDesign, development, webDesign, message } = data[selectedOption]

  return (
    <React.Fragment>
      <div className="order-8 col-span-12 xl:col-span-6 2xl:col-span-4 card">
        <div className="flex items-center gap-3 card-header">
          <h6 className="card-title grow">Task Activity</h6>
          <Dropdown position="" trigger="click" dropdownClassName="dropdown">
            <DropdownButton colorClass="flex items-center text-gray-500 dark:text-dark-500">
              <Ellipsis className="size-5" />
            </DropdownButton>
            <DropdownMenu>
              <Link
                to="#!"
                className="dropdown-item"
                onClick={() => setSelectedOption('Weekly')}>
                <span>Weekly</span>
              </Link>
              <Link
                to="#!"
                className="dropdown-item"
                onClick={() => setSelectedOption('Monthly')}>
                <span>Monthly</span>
              </Link>
              <Link
                to="#!"
                className="dropdown-item"
                onClick={() => setSelectedOption('Yearly')}>
                <span>Yearly</span>
              </Link>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="card-body">
          <div
            className="relative flex items-center justify-center h-64 space-x-4"
            dir="ltr">
            <div className="absolute left-28 top-12">
              <svg className="drop-shadow-xl size-40" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50" className="fill-green-500/80" />
                <text
                  x="50%"
                  y="45%"
                  textAnchor="middle"
                  className="font-semibold fill-green-50"
                  fontSize="15px"
                  dy=".3em">
                  {uiDesign}%
                </text>
                <text
                  x="50%"
                  y="62%"
                  textAnchor="middle"
                  className="fill-green-50"
                  fontSize="10px"
                  dy=".3em">
                  UI Design
                </text>
              </svg>
            </div>

            <div className="absolute left-0 top-5">
              <svg className="size-32 drop-shadow-xl" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50" className="fill-sky-500/80" />
                <text
                  x="50%"
                  y="45%"
                  textAnchor="middle"
                  className="font-semibold fill-sky-50"
                  fontSize="15px"
                  dy=".3em">
                  {development}%
                </text>
                <text
                  x="50%"
                  y="62%"
                  textAnchor="middle"
                  className="fill-sky-50"
                  fontSize="10px"
                  dy=".3em">
                  Development
                </text>
              </svg>
            </div>

            <div className="absolute left-28 bottom-2">
              <svg className="size-24 drop-shadow-xl" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50" className="fill-yellow-500/80" />
                <text
                  x="50%"
                  y="45%"
                  textAnchor="middle"
                  className="font-semibold fill-yellow-50"
                  fontSize="15px"
                  dy=".3em">
                  {webDesign}%
                </text>
                <text
                  x="50%"
                  y="65%"
                  textAnchor="middle"
                  className="fill-yellow-50"
                  fontSize="10px"
                  dy=".3em">
                  Web Design
                </text>
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-12 mt-4 divide-y divide-gray-200 md:divide-y-0 md:divide-x rtl:divide-x-reverse dark:divide-dark-800 divide-dashed">
            <div className="col-span-12 p-3 text-center md:col-span-4">
              <h6 className="mb-1">{uiDesign}%</h6>
              <p className="text-gray-500 dark:text-dark-500">UI Design</p>
            </div>
            <div className="col-span-12 p-3 text-center md:col-span-4">
              <h6 className="mb-1">{development}%</h6>
              <p className="text-gray-500 dark:text-dark-500">Development</p>
            </div>
            <div className="col-span-12 p-3 text-center md:col-span-4">
              <h6 className="mb-1">{webDesign}%</h6>
              <p className="text-gray-500 dark:text-dark-500">Web Design</p>
            </div>
          </div>
          <p className="mt-3 text-center text-gray-500 dark:text-dark-500">
            {message}
          </p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default TaskActivity
