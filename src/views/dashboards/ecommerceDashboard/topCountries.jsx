import React, { useState } from 'react'

import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '@custom/Dropdown/Dropdown'
import { Link } from 'react-router-dom'

const TopCountries = () => {
  const [open, setOpen] = useState(false)
  const [selectedPeriod, setSelectedPeriod] = useState('Recent') // Default to Weekly

  const toggle = () => {
    setOpen(!open)
  }

  // Percentage data for each period
  const percentageData = {
    Recent: [91, 77, 54, 26, 40, 58, 19],
    Weekly: [40, 50, 70, 20, 40, 90, 20],
    Monthly: [85, 72, 45, 50, 45, 10, 22],
    Yearly: [78, 69, 57, 85, 42, 53, 25],
  }

  // List of countries (static)
  const countries = [
    { name: 'Brazil', color: 'bg-primary-500' },
    { name: 'Russia', color: 'bg-green-500' },
    { name: 'China', color: 'bg-purple-500' },
    { name: 'Turkey', color: 'bg-orange-500' },
    { name: 'Philippines', color: 'bg-yellow-500' },
    { name: 'Denmark', color: 'bg-sky-500' },
    { name: 'New Zealand', color: 'bg-red-500' },
  ]

  // Function to handle period change
  const handlePeriodChange = (period) => {
    setSelectedPeriod(period)
  }

  return (
    <React.Fragment>
      <div className="order-11 col-span-12 2xl:col-span-4 card">
        <div className="flex items-center gap-3 card-header">
          <h6 className="card-title grow">Top Countries</h6>
          <Dropdown position="" trigger="click" dropdownClassName="dropdown">
            <DropdownButton colorClass="flex px-3 py-1.5 text-xs border-gray-200 font-medium dark:border-dark-800 link link-primary btn">
              {selectedPeriod}
              <svg
                onClick={toggle}
                className={`transition-transform duration-300 ltr:ml-1 rtl:mr-1 size-4 ${open ? 'transform rotate-180' : ''}`}
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
                className="dropdown-item"
                onClick={() => handlePeriodChange('Recent')}>
                <span>Recent</span>
              </Link>
              <Link
                to="#!"
                className="dropdown-item"
                onClick={() => handlePeriodChange('Weekly')}>
                <span>Weekly</span>
              </Link>
              <Link
                to="#!"
                className="dropdown-item"
                onClick={() => handlePeriodChange('Monthly')}>
                <span>Monthly</span>
              </Link>
              <Link
                to="#!"
                className="dropdown-item"
                onClick={() => handlePeriodChange('Yearly')}>
                <span>Yearly</span>
              </Link>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="card-body">
          <div className="flex flex-col gap-4">
            {countries.map((country, index) => (
              <div key={country.name}>
                <div className="flex items-center gap-3 mb-2">
                  <h6 className="text-xs grow">{country.name}</h6>
                  <h6 className="text-xs font-semibold text-red-500">
                    {percentageData[selectedPeriod][index]}%
                  </h6>
                </div>
                <div className="progress-bar progress-1">
                  <div
                    className={`text-white progress-bar-wrap ${country.color}`}
                    style={{
                      width: `${percentageData[selectedPeriod][index]}%`,
                    }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default TopCountries
