import React, { useState } from 'react'

import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '@custom/Dropdown/Dropdown'
import { Link } from 'react-router-dom'

import AnimatedCounter from '../analyticsDashboards/counter'
import { PatientVisitApp } from './hospitalChart'

const PatientData = () => {
  const [timeFrame, setTimeFrame] = useState('Last Week')
  const [open, setOpen] = useState(false)

  return (
    <React.Fragment>
      <div className="col-span-12 xl:col-span-8 xl:row-span-2 card">
        <div className="card-body">
          <div className="grid grid-cols-12 gap-space">
            <div className="col-span-12 row-span-2 xl:col-span-6">
              <div className="flex items-center gap-3 mb-space">
                <h6 className="card-title grow">Patient Visit</h6>
                <Dropdown
                  position=""
                  trigger="click"
                  dropdownClassName="dropdown">
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
              <PatientVisitApp
                chartColors="[bg-primary-500, bg-green-500, bg-yellow-500]"
                chartDarkColors={''}
                chartId="patientVisitChart"
                timeFrame={timeFrame}
              />
            </div>
            <div className="relative col-span-12 p-5 overflow-hidden rounded-md bg-purple-500/15 lg:col-span-6 xl:col-span-3">
              <svg
                className="absolute top-0 left-16 size-52"
                viewBox="0 0 1422 800">
                <g
                  shapeRendering="crispEdges"
                  strokeLinejoin="round"
                  fill="none"
                  strokeWidth="2"
                  className="stroke-purple-500/30">
                  <polygon points="1066.5,200 1066.5,0 1422,200"></polygon>
                  <polygon points="1066.5,100 1066.5,0 888.75,100"></polygon>
                  <polygon points="711,0 888.75,100 711,100"></polygon>
                  <polygon points="888.75,100 711,100 711,200"></polygon>
                  <polygon points="977.625,150 1066.5,100 1066.5,150"></polygon>
                  <polygon points="888.75,150 977.625,100 888.75,100"></polygon>
                  <polygon points="888.75,200 977.625,150 977.625,200"></polygon>
                  <polygon points="1066.5,200 977.625,150 1066.5,150"></polygon>
                  <polygon points="977.625,200 1066.5,200 1066.5,250"></polygon>
                  <polygon points="977.625,250 888.75,250 977.625,200"></polygon>
                  <polygon points="977.625,250 888.75,300 977.625,300"></polygon>
                  <polygon points="1066.5,250 977.625,300 1066.5,300"></polygon>
                  <polygon points="888.75,200 888.75,300 711,300"></polygon>
                  <polygon points="888.75,400 888.75,300 711,300"></polygon>
                  <polygon points="888.75,300 1066.5,400 1066.5,300"></polygon>
                  <polygon points="1244.25,300 1422,200 1244.25,200"></polygon>
                  <polygon points="1244.25,300 1066.5,300 1066.5,200"></polygon>
                  <polygon points="1066.5,400 1244.25,400 1244.25,300"></polygon>
                  <polygon points="1422,400 1422,300 1244.25,400"></polygon>
                  <polygon points="533.25,100 533.25,0 711,100"></polygon>
                  <polygon points="533.25,0 533.25,100 355.5,0"></polygon>
                  <polygon points="355.5,100 533.25,100 533.25,200"></polygon>
                  <polygon points="711,100 533.25,100 711,200"></polygon>
                  <polygon points="355.5,0 355.5,200 0,200"></polygon>
                  <polygon points="355.5,300 177.75,300 355.5,200"></polygon>
                  <polygon points="177.75,300 177.75,200 0,200"></polygon>
                  <polygon points="177.75,300 177.75,400 0,400"></polygon>
                  <polygon points="177.75,400 177.75,300 355.5,300"></polygon>
                  <polygon points="711,300 533.25,300 711,200"></polygon>
                  <polygon points="533.25,250 444.375,200 533.25,200"></polygon>
                  <polygon points="444.375,250 355.5,200 444.375,200"></polygon>
                  <polygon points="355.5,300 444.375,250 355.5,250"></polygon>
                  <polygon points="533.25,250 444.375,250 444.375,300"></polygon>
                  <polygon points="355.5,400 533.25,400 355.5,300"></polygon>
                  <polygon points="533.25,400 533.25,300 711,400"></polygon>
                  <polygon points="533.25,500 533.25,400 711,500"></polygon>
                  <polygon points="533.25,500 533.25,400 355.5,500"></polygon>
                  <polygon points="533.25,500 444.375,550 444.375,500"></polygon>
                  <polygon points="444.375,500 444.375,550 355.5,550"></polygon>
                  <polygon points="355.5,550 444.375,550 444.375,600"></polygon>
                  <polygon points="533.25,550 444.375,600 533.25,600"></polygon>
                  <polygon points="711,500 622.125,500 622.125,550"></polygon>
                  <polygon points="533.25,550 622.125,500 533.25,500"></polygon>
                  <polygon points="622.125,550 622.125,600 533.25,550"></polygon>
                  <polygon points="711,550 622.125,550 622.125,600"></polygon>
                  <polygon points="355.5,400 355.5,500 177.75,400"></polygon>
                  <polygon points="0,400 177.75,400 0,500"></polygon>
                  <polygon points="177.75,600 0,500 0,600"></polygon>
                  <polygon points="355.5,500 355.5,600 177.75,500"></polygon>
                  <polygon points="0,800 355.5,600 355.5,800"></polygon>
                  <polygon points="533.25,700 711,600 711,700"></polygon>
                  <polygon points="355.5,700 533.25,600 355.5,600"></polygon>
                  <polygon points="533.25,700 533.25,800 355.5,700"></polygon>
                  <polygon points="533.25,800 711,700 533.25,700"></polygon>
                  <polygon points="1422,400 1422,500 1244.25,500"></polygon>
                  <polygon points="1244.25,500 1066.5,500 1244.25,400"></polygon>
                  <polygon points="1244.25,600 1244.25,500 1066.5,500"></polygon>
                  <polygon points="1422,500 1422,600 1244.25,600"></polygon>
                  <polygon points="1066.5,400 888.75,500 888.75,400"></polygon>
                  <polygon points="888.75,450 888.75,400 799.875,400"></polygon>
                  <polygon points="711,400 799.875,450 799.875,400"></polygon>
                  <polygon points="799.875,500 711,450 799.875,450"></polygon>
                  <polygon points="799.875,500 799.875,450 888.75,450"></polygon>
                  <polygon points="888.75,550 799.875,550 888.75,500"></polygon>
                  <polygon points="711,550 799.875,500 799.875,550"></polygon>
                  <polygon points="799.875,600 799.875,550 711,600"></polygon>
                  <polygon points="799.875,600 888.75,550 888.75,600"></polygon>
                  <polygon points="888.75,600 888.75,500 1066.5,600"></polygon>
                  <polygon points="1066.5,600 888.75,700 1066.5,700"></polygon>
                  <polygon points="888.75,600 711,700 888.75,700"></polygon>
                  <polygon points="888.75,800 711,800 888.75,700"></polygon>
                  <polygon points="888.75,700 1066.5,800 1066.5,700"></polygon>
                  <polygon points="1066.5,800 1422,600 1422,800"></polygon>
                </g>
              </svg>
              <div className="relative">
                <p className="mb-12 text-gray-500 dark:text-dark-500">
                  Total Patients
                </p>

                <h5>
                  <AnimatedCounter start={500} end={1540} duration={3000} />+
                </h5>
                <p className="mt-1 text-gray-500 dark:text-dark-500">
                  Last 28 days
                </p>
              </div>
            </div>
            <div className="relative col-span-12 p-5 overflow-hidden rounded-md bg-red-500/15 lg:col-span-6 xl:col-span-3">
              <svg
                className="absolute top-0 left-16 size-52"
                viewBox="0 0 1422 800">
                <g
                  shapeRendering="crispEdges"
                  strokeLinejoin="round"
                  fill="none"
                  strokeWidth="2"
                  className="stroke-red-500/30">
                  <polygon points="1066.5,200 1066.5,0 1422,200"></polygon>
                  <polygon points="1066.5,100 1066.5,0 888.75,100"></polygon>
                  <polygon points="711,0 888.75,100 711,100"></polygon>
                  <polygon points="888.75,100 711,100 711,200"></polygon>
                  <polygon points="977.625,150 1066.5,100 1066.5,150"></polygon>
                  <polygon points="888.75,150 977.625,100 888.75,100"></polygon>
                  <polygon points="888.75,200 977.625,150 977.625,200"></polygon>
                  <polygon points="1066.5,200 977.625,150 1066.5,150"></polygon>
                  <polygon points="977.625,200 1066.5,200 1066.5,250"></polygon>
                  <polygon points="977.625,250 888.75,250 977.625,200"></polygon>
                  <polygon points="977.625,250 888.75,300 977.625,300"></polygon>
                  <polygon points="1066.5,250 977.625,300 1066.5,300"></polygon>
                  <polygon points="888.75,200 888.75,300 711,300"></polygon>
                  <polygon points="888.75,400 888.75,300 711,300"></polygon>
                  <polygon points="888.75,300 1066.5,400 1066.5,300"></polygon>
                  <polygon points="1244.25,300 1422,200 1244.25,200"></polygon>
                  <polygon points="1244.25,300 1066.5,300 1066.5,200"></polygon>
                  <polygon points="1066.5,400 1244.25,400 1244.25,300"></polygon>
                  <polygon points="1422,400 1422,300 1244.25,400"></polygon>
                  <polygon points="533.25,100 533.25,0 711,100"></polygon>
                  <polygon points="533.25,0 533.25,100 355.5,0"></polygon>
                  <polygon points="355.5,100 533.25,100 533.25,200"></polygon>
                  <polygon points="711,100 533.25,100 711,200"></polygon>
                  <polygon points="355.5,0 355.5,200 0,200"></polygon>
                  <polygon points="355.5,300 177.75,300 355.5,200"></polygon>
                  <polygon points="177.75,300 177.75,200 0,200"></polygon>
                  <polygon points="177.75,300 177.75,400 0,400"></polygon>
                  <polygon points="177.75,400 177.75,300 355.5,300"></polygon>
                  <polygon points="711,300 533.25,300 711,200"></polygon>
                  <polygon points="533.25,250 444.375,200 533.25,200"></polygon>
                  <polygon points="444.375,250 355.5,200 444.375,200"></polygon>
                  <polygon points="355.5,300 444.375,250 355.5,250"></polygon>
                  <polygon points="533.25,250 444.375,250 444.375,300"></polygon>
                  <polygon points="355.5,400 533.25,400 355.5,300"></polygon>
                  <polygon points="533.25,400 533.25,300 711,400"></polygon>
                  <polygon points="533.25,500 533.25,400 711,500"></polygon>
                  <polygon points="533.25,500 533.25,400 355.5,500"></polygon>
                  <polygon points="533.25,500 444.375,550 444.375,500"></polygon>
                  <polygon points="444.375,500 444.375,550 355.5,550"></polygon>
                  <polygon points="355.5,550 444.375,550 444.375,600"></polygon>
                  <polygon points="533.25,550 444.375,600 533.25,600"></polygon>
                  <polygon points="711,500 622.125,500 622.125,550"></polygon>
                  <polygon points="533.25,550 622.125,500 533.25,500"></polygon>
                  <polygon points="622.125,550 622.125,600 533.25,550"></polygon>
                  <polygon points="711,550 622.125,550 622.125,600"></polygon>
                  <polygon points="355.5,400 355.5,500 177.75,400"></polygon>
                  <polygon points="0,400 177.75,400 0,500"></polygon>
                  <polygon points="177.75,600 0,500 0,600"></polygon>
                  <polygon points="355.5,500 355.5,600 177.75,500"></polygon>
                  <polygon points="0,800 355.5,600 355.5,800"></polygon>
                  <polygon points="533.25,700 711,600 711,700"></polygon>
                  <polygon points="355.5,700 533.25,600 355.5,600"></polygon>
                  <polygon points="533.25,700 533.25,800 355.5,700"></polygon>
                  <polygon points="533.25,800 711,700 533.25,700"></polygon>
                  <polygon points="1422,400 1422,500 1244.25,500"></polygon>
                  <polygon points="1244.25,500 1066.5,500 1244.25,400"></polygon>
                  <polygon points="1244.25,600 1244.25,500 1066.5,500"></polygon>
                  <polygon points="1422,500 1422,600 1244.25,600"></polygon>
                  <polygon points="1066.5,400 888.75,500 888.75,400"></polygon>
                  <polygon points="888.75,450 888.75,400 799.875,400"></polygon>
                  <polygon points="711,400 799.875,450 799.875,400"></polygon>
                  <polygon points="799.875,500 711,450 799.875,450"></polygon>
                  <polygon points="799.875,500 799.875,450 888.75,450"></polygon>
                  <polygon points="888.75,550 799.875,550 888.75,500"></polygon>
                  <polygon points="711,550 799.875,500 799.875,550"></polygon>
                  <polygon points="799.875,600 799.875,550 711,600"></polygon>
                  <polygon points="799.875,600 888.75,550 888.75,600"></polygon>
                  <polygon points="888.75,600 888.75,500 1066.5,600"></polygon>
                  <polygon points="1066.5,600 888.75,700 1066.5,700"></polygon>
                  <polygon points="888.75,600 711,700 888.75,700"></polygon>
                  <polygon points="888.75,800 711,800 888.75,700"></polygon>
                  <polygon points="888.75,700 1066.5,800 1066.5,700"></polygon>
                  <polygon points="1066.5,800 1422,600 1422,800"></polygon>
                </g>
              </svg>
              <div className="relative">
                <p className="mb-12 text-gray-500 dark:text-dark-500">
                  Surgery
                </p>

                <h5>
                  <AnimatedCounter start={500} end={241} duration={3000} />
                </h5>
                <p className="mt-1 text-gray-500 dark:text-dark-500">
                  Last 28 days
                </p>
              </div>
            </div>
            <div className="relative col-span-12 p-5 overflow-hidden rounded-md lg:col-span-6 xl:col-span-3 bg-sky-500/15">
              <svg
                className="absolute top-0 left-16 size-52"
                viewBox="0 0 1422 800">
                <g
                  shapeRendering="crispEdges"
                  strokeLinejoin="round"
                  fill="none"
                  strokeWidth="2"
                  className="stroke-sky-500/30">
                  <polygon points="1066.5,200 1066.5,0 1422,200"></polygon>
                  <polygon points="1066.5,100 1066.5,0 888.75,100"></polygon>
                  <polygon points="711,0 888.75,100 711,100"></polygon>
                  <polygon points="888.75,100 711,100 711,200"></polygon>
                  <polygon points="977.625,150 1066.5,100 1066.5,150"></polygon>
                  <polygon points="888.75,150 977.625,100 888.75,100"></polygon>
                  <polygon points="888.75,200 977.625,150 977.625,200"></polygon>
                  <polygon points="1066.5,200 977.625,150 1066.5,150"></polygon>
                  <polygon points="977.625,200 1066.5,200 1066.5,250"></polygon>
                  <polygon points="977.625,250 888.75,250 977.625,200"></polygon>
                  <polygon points="977.625,250 888.75,300 977.625,300"></polygon>
                  <polygon points="1066.5,250 977.625,300 1066.5,300"></polygon>
                  <polygon points="888.75,200 888.75,300 711,300"></polygon>
                  <polygon points="888.75,400 888.75,300 711,300"></polygon>
                  <polygon points="888.75,300 1066.5,400 1066.5,300"></polygon>
                  <polygon points="1244.25,300 1422,200 1244.25,200"></polygon>
                  <polygon points="1244.25,300 1066.5,300 1066.5,200"></polygon>
                  <polygon points="1066.5,400 1244.25,400 1244.25,300"></polygon>
                  <polygon points="1422,400 1422,300 1244.25,400"></polygon>
                  <polygon points="533.25,100 533.25,0 711,100"></polygon>
                  <polygon points="533.25,0 533.25,100 355.5,0"></polygon>
                  <polygon points="355.5,100 533.25,100 533.25,200"></polygon>
                  <polygon points="711,100 533.25,100 711,200"></polygon>
                  <polygon points="355.5,0 355.5,200 0,200"></polygon>
                  <polygon points="355.5,300 177.75,300 355.5,200"></polygon>
                  <polygon points="177.75,300 177.75,200 0,200"></polygon>
                  <polygon points="177.75,300 177.75,400 0,400"></polygon>
                  <polygon points="177.75,400 177.75,300 355.5,300"></polygon>
                  <polygon points="711,300 533.25,300 711,200"></polygon>
                  <polygon points="533.25,250 444.375,200 533.25,200"></polygon>
                  <polygon points="444.375,250 355.5,200 444.375,200"></polygon>
                  <polygon points="355.5,300 444.375,250 355.5,250"></polygon>
                  <polygon points="533.25,250 444.375,250 444.375,300"></polygon>
                  <polygon points="355.5,400 533.25,400 355.5,300"></polygon>
                  <polygon points="533.25,400 533.25,300 711,400"></polygon>
                  <polygon points="533.25,500 533.25,400 711,500"></polygon>
                  <polygon points="533.25,500 533.25,400 355.5,500"></polygon>
                  <polygon points="533.25,500 444.375,550 444.375,500"></polygon>
                  <polygon points="444.375,500 444.375,550 355.5,550"></polygon>
                  <polygon points="355.5,550 444.375,550 444.375,600"></polygon>
                  <polygon points="533.25,550 444.375,600 533.25,600"></polygon>
                  <polygon points="711,500 622.125,500 622.125,550"></polygon>
                  <polygon points="533.25,550 622.125,500 533.25,500"></polygon>
                  <polygon points="622.125,550 622.125,600 533.25,550"></polygon>
                  <polygon points="711,550 622.125,550 622.125,600"></polygon>
                  <polygon points="355.5,400 355.5,500 177.75,400"></polygon>
                  <polygon points="0,400 177.75,400 0,500"></polygon>
                  <polygon points="177.75,600 0,500 0,600"></polygon>
                  <polygon points="355.5,500 355.5,600 177.75,500"></polygon>
                  <polygon points="0,800 355.5,600 355.5,800"></polygon>
                  <polygon points="533.25,700 711,600 711,700"></polygon>
                  <polygon points="355.5,700 533.25,600 355.5,600"></polygon>
                  <polygon points="533.25,700 533.25,800 355.5,700"></polygon>
                  <polygon points="533.25,800 711,700 533.25,700"></polygon>
                  <polygon points="1422,400 1422,500 1244.25,500"></polygon>
                  <polygon points="1244.25,500 1066.5,500 1244.25,400"></polygon>
                  <polygon points="1244.25,600 1244.25,500 1066.5,500"></polygon>
                  <polygon points="1422,500 1422,600 1244.25,600"></polygon>
                  <polygon points="1066.5,400 888.75,500 888.75,400"></polygon>
                  <polygon points="888.75,450 888.75,400 799.875,400"></polygon>
                  <polygon points="711,400 799.875,450 799.875,400"></polygon>
                  <polygon points="799.875,500 711,450 799.875,450"></polygon>
                  <polygon points="799.875,500 799.875,450 888.75,450"></polygon>
                  <polygon points="888.75,550 799.875,550 888.75,500"></polygon>
                  <polygon points="711,550 799.875,500 799.875,550"></polygon>
                  <polygon points="799.875,600 799.875,550 711,600"></polygon>
                  <polygon points="799.875,600 888.75,550 888.75,600"></polygon>
                  <polygon points="888.75,600 888.75,500 1066.5,600"></polygon>
                  <polygon points="1066.5,600 888.75,700 1066.5,700"></polygon>
                  <polygon points="888.75,600 711,700 888.75,700"></polygon>
                  <polygon points="888.75,800 711,800 888.75,700"></polygon>
                  <polygon points="888.75,700 1066.5,800 1066.5,700"></polygon>
                  <polygon points="1066.5,800 1422,600 1422,800"></polygon>
                </g>
              </svg>
              <div className="relative">
                <p className="mb-12 text-gray-500 dark:text-dark-500">
                  Total Reports
                </p>

                <h5>
                  <AnimatedCounter start={500} end={574} duration={3000} />
                </h5>
                <p className="mt-1 text-gray-500 dark:text-dark-500">
                  Last 28 days
                </p>
              </div>
            </div>
            <div className="relative col-span-12 p-5 overflow-hidden rounded-md bg-green-500/15 lg:col-span-6 xl:col-span-3">
              <svg
                className="absolute top-0 left-16 size-52"
                viewBox="0 0 1422 800">
                <g
                  shapeRendering="crispEdges"
                  strokeLinejoin="round"
                  fill="none"
                  strokeWidth="2"
                  className="stroke-green-500/30">
                  <polygon points="1066.5,200 1066.5,0 1422,200"></polygon>
                  <polygon points="1066.5,100 1066.5,0 888.75,100"></polygon>
                  <polygon points="711,0 888.75,100 711,100"></polygon>
                  <polygon points="888.75,100 711,100 711,200"></polygon>
                  <polygon points="977.625,150 1066.5,100 1066.5,150"></polygon>
                  <polygon points="888.75,150 977.625,100 888.75,100"></polygon>
                  <polygon points="888.75,200 977.625,150 977.625,200"></polygon>
                  <polygon points="1066.5,200 977.625,150 1066.5,150"></polygon>
                  <polygon points="977.625,200 1066.5,200 1066.5,250"></polygon>
                  <polygon points="977.625,250 888.75,250 977.625,200"></polygon>
                  <polygon points="977.625,250 888.75,300 977.625,300"></polygon>
                  <polygon points="1066.5,250 977.625,300 1066.5,300"></polygon>
                  <polygon points="888.75,200 888.75,300 711,300"></polygon>
                  <polygon points="888.75,400 888.75,300 711,300"></polygon>
                  <polygon points="888.75,300 1066.5,400 1066.5,300"></polygon>
                  <polygon points="1244.25,300 1422,200 1244.25,200"></polygon>
                  <polygon points="1244.25,300 1066.5,300 1066.5,200"></polygon>
                  <polygon points="1066.5,400 1244.25,400 1244.25,300"></polygon>
                  <polygon points="1422,400 1422,300 1244.25,400"></polygon>
                  <polygon points="533.25,100 533.25,0 711,100"></polygon>
                  <polygon points="533.25,0 533.25,100 355.5,0"></polygon>
                  <polygon points="355.5,100 533.25,100 533.25,200"></polygon>
                  <polygon points="711,100 533.25,100 711,200"></polygon>
                  <polygon points="355.5,0 355.5,200 0,200"></polygon>
                  <polygon points="355.5,300 177.75,300 355.5,200"></polygon>
                  <polygon points="177.75,300 177.75,200 0,200"></polygon>
                  <polygon points="177.75,300 177.75,400 0,400"></polygon>
                  <polygon points="177.75,400 177.75,300 355.5,300"></polygon>
                  <polygon points="711,300 533.25,300 711,200"></polygon>
                  <polygon points="533.25,250 444.375,200 533.25,200"></polygon>
                  <polygon points="444.375,250 355.5,200 444.375,200"></polygon>
                  <polygon points="355.5,300 444.375,250 355.5,250"></polygon>
                  <polygon points="533.25,250 444.375,250 444.375,300"></polygon>
                  <polygon points="355.5,400 533.25,400 355.5,300"></polygon>
                  <polygon points="533.25,400 533.25,300 711,400"></polygon>
                  <polygon points="533.25,500 533.25,400 711,500"></polygon>
                  <polygon points="533.25,500 533.25,400 355.5,500"></polygon>
                  <polygon points="533.25,500 444.375,550 444.375,500"></polygon>
                  <polygon points="444.375,500 444.375,550 355.5,550"></polygon>
                  <polygon points="355.5,550 444.375,550 444.375,600"></polygon>
                  <polygon points="533.25,550 444.375,600 533.25,600"></polygon>
                  <polygon points="711,500 622.125,500 622.125,550"></polygon>
                  <polygon points="533.25,550 622.125,500 533.25,500"></polygon>
                  <polygon points="622.125,550 622.125,600 533.25,550"></polygon>
                  <polygon points="711,550 622.125,550 622.125,600"></polygon>
                  <polygon points="355.5,400 355.5,500 177.75,400"></polygon>
                  <polygon points="0,400 177.75,400 0,500"></polygon>
                  <polygon points="177.75,600 0,500 0,600"></polygon>
                  <polygon points="355.5,500 355.5,600 177.75,500"></polygon>
                  <polygon points="0,800 355.5,600 355.5,800"></polygon>
                  <polygon points="533.25,700 711,600 711,700"></polygon>
                  <polygon points="355.5,700 533.25,600 355.5,600"></polygon>
                  <polygon points="533.25,700 533.25,800 355.5,700"></polygon>
                  <polygon points="533.25,800 711,700 533.25,700"></polygon>
                  <polygon points="1422,400 1422,500 1244.25,500"></polygon>
                  <polygon points="1244.25,500 1066.5,500 1244.25,400"></polygon>
                  <polygon points="1244.25,600 1244.25,500 1066.5,500"></polygon>
                  <polygon points="1422,500 1422,600 1244.25,600"></polygon>
                  <polygon points="1066.5,400 888.75,500 888.75,400"></polygon>
                  <polygon points="888.75,450 888.75,400 799.875,400"></polygon>
                  <polygon points="711,400 799.875,450 799.875,400"></polygon>
                  <polygon points="799.875,500 711,450 799.875,450"></polygon>
                  <polygon points="799.875,500 799.875,450 888.75,450"></polygon>
                  <polygon points="888.75,550 799.875,550 888.75,500"></polygon>
                  <polygon points="711,550 799.875,500 799.875,550"></polygon>
                  <polygon points="799.875,600 799.875,550 711,600"></polygon>
                  <polygon points="799.875,600 888.75,550 888.75,600"></polygon>
                  <polygon points="888.75,600 888.75,500 1066.5,600"></polygon>
                  <polygon points="1066.5,600 888.75,700 1066.5,700"></polygon>
                  <polygon points="888.75,600 711,700 888.75,700"></polygon>
                  <polygon points="888.75,800 711,800 888.75,700"></polygon>
                  <polygon points="888.75,700 1066.5,800 1066.5,700"></polygon>
                  <polygon points="1066.5,800 1422,600 1422,800"></polygon>
                </g>
              </svg>
              <div className="relative">
                <p className="mb-12 text-gray-500 dark:text-dark-500">
                  Total Staffs
                </p>

                <h5>
                  <AnimatedCounter start={0} end={150} duration={3000} />
                </h5>
                <p className="mt-1 text-gray-500 dark:text-dark-500">
                  Last 28 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default PatientData
