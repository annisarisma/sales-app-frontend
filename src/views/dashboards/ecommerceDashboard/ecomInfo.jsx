import React, { useState } from 'react'

import user8 from '@assets/images/avatar/user-8.png'
import user18 from '@assets/images/avatar/user-18.png'
import user20 from '@assets/images/avatar/user-20.png'
import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '@src/components/CustomComponents/Dropdown/Dropdown'
import { ShoppingCart, TrendingUp, Video } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

import AnimatedCounter from '../analyticsDashboards/counter'
import { BasicColumnApp, NetProfitApp, SimpleDonutApp } from './ecomCharts'

const EComInfo = () => {
  const [timeFrame, setTimeFrame] = useState('All')
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }
  return (
    <React.Fragment>
      <div className="order-2 col-span-12 md:col-span-6 xl:col-span-3 2xl:col-span-2 card">
        <div className="card-body">
          <p className="mb-1 text-gray-500 dark:text-dark-500">Expense</p>
          <h6 className="text-16">
            $<AnimatedCounter start={500} end={18725} duration={3000} />
          </h6>
          <p className="mb-4 text-sm text-gray-500 dark:text-dark-500">
            <span className="font-medium text-green-500">2.87</span> This month
          </p>
          <SimpleDonutApp
            chartColors="[bg-primary-500, bg-green-500, bg-yellow-500, bg-red-500, bg-purple-500]"
            chartDarkColors={''}
            chartId="simpleDonutChart"
          />
        </div>
      </div>
      <div className="order-3 col-span-12 md:col-span-6 xl:col-span-3 2xl:col-span-2 card">
        <div className="card-body">
          <div className="flex items-center justify-center mb-4 text-orange-500 rounded-md bg-orange-500/10 size-12">
            <ShoppingCart className="size-5" />
          </div>
          <p className="mb-3 text-gray-500 dark:text-dark-500">Sales Profit</p>
          <h6 className="mb-1 text-16">
            $<AnimatedCounter start={500} end={25874} duration={3000} />
          </h6>
          <p className="text-sm text-gray-500 dark:text-dark-500">
            <span className="font-medium text-green-500">2.87</span> This month
          </p>
        </div>
      </div>
      <div className="order-6 col-span-12 2xl:order-4 2xl:row-span-2 2xl:col-span-8 card">
        <div className="flex flex-col md:items-center md:flex-row gap-space card-header">
          <h6 className="card-title grow">Product Sales</h6>
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              type="button"
              className="py-1.5 px-3 btn btn-primary"
              onClick={() => setTimeFrame('All')}>
              All
            </button>
            <button
              type="button"
              className="py-1.5 px-3 btn btn-outline-gray border-gray-200 dark:border-dark-800"
              onClick={() => setTimeFrame('Weekly')}>
              Weekly
            </button>
            <button
              type="button"
              className="py-1.5 px-3 btn btn-outline-gray border-gray-200 dark:border-dark-800"
              onClick={() => setTimeFrame('Monthly')}>
              Monthly
            </button>
            <button
              type="button"
              className="py-1.5 px-3 btn btn-outline-gray border-gray-200 dark:border-dark-800"
              onClick={() => setTimeFrame('Yearly')}>
              Yearly
            </button>
          </div>
        </div>
        <div className="card-body">
          <BasicColumnApp
            chartColors="[bg-red-200, bg-sky-500]"
            chartDarkColors="[bg-red-200, bg-sky-500]"
            chartId="basicColumnChart"
            timeFrame={timeFrame}
          />
        </div>
      </div>
      <div className="order-4 col-span-12 md:col-span-6 xl:col-span-3 2xl:col-span-2 2xl:order-5 card">
        <div className="card-body">
          <div className="flex gap-2">
            <Video className="size-5 fill-primary-500/10 text-primary-500"></Video>
            <div>
              <h6 className="mb-1">Daily Meeting</h6>
              <p className="text-xs text-gray-500 dark:text-dark-500">
                10+ Person
              </p>
            </div>
          </div>
          <div className="flex mt-5 -space-x-3 rtl:space-x-reverse">
            <Link
              to="#!"
              className="transition duration-300 ease-linear hover:z-10">
              <img
                className="border-2 border-white rounded-full dark:border-dark-900 size-7"
                src={user20}
                alt="user20Image"
                data-tooltip-id="lealUser"
                data-tooltip-content="Leal Bureau"
              />
              <Tooltip id="lealUser" />
            </Link>
            <Link
              to="#!"
              className="transition duration-300 ease-linear hover:z-10">
              <img
                className="border-2 border-white rounded-full dark:border-dark-900 size-7"
                src={user18}
                alt="user18Image"
                data-tooltip-id="julieUser"
                data-tooltip-content="Julie Seltzer"
              />
              <Tooltip id="julieUser" />
            </Link>
            <Link
              to="#!"
              className="transition duration-300 ease-linear hover:z-10">
              <img
                className="border-2 border-white rounded-full dark:border-dark-900 size-7"
                src={user8}
                alt="user8Image"
                data-tooltip-id="julie2User"
                data-tooltip-content="Julie Seltzer"
              />
              <Tooltip id="julie2User" />
            </Link>
            <Link
              to="#!"
              className="flex items-center justify-center text-xs transition duration-300 ease-linear bg-gray-100 rounded-full dark:bg-dark-850 hover:z-10 size-7">
              4+
            </Link>
          </div>
          <p className="mt-3 mb-2 text-gray-500 dark:text-dark-500">
            They will product the meeting
          </p>
          <button type="button" className="w-full btn btn-primary">
            Click to meeting
          </button>
        </div>
      </div>
      <div className="order-5 col-span-12 md:col-span-6 xl:col-span-3 2xl:col-span-2 2xl:order-6 card">
        <div className="card-body">
          <p className="mb-3 text-gray-500 dark:text-dark-500">Net Profit</p>
          <h6 className="mb-1 text-16">
            $<AnimatedCounter start={500} end={245} duration={3000} />M
          </h6>

          <NetProfitApp
            chartColors="[bg-primary-500, bg-green-500]"
            chartDarkColors={'[bg-primary-500, bg-green-500]'}
            chartId="netProfitChart"
          />
        </div>
      </div>
      <div className="order-7 col-span-12 2xl:col-span-4 card">
        <div className="card-body">
          <Dropdown
            position=""
            trigger="click"
            dropdownClassName="dropdown float-end">
            <DropdownButton colorClass="flex px-3 py-1.5 text-xs border-gray-200 font-medium dark:border-dark-800 link link-primary btn">
              Recent
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
              <Link to="#!" className="dropdown-item ">
                <span>Weekly</span>
              </Link>

              <Link to="#!" className="dropdown-item ">
                <span>Monthly</span>
              </Link>
              <Link to="#!" className="dropdown-item">
                <span>Yearly</span>
              </Link>
            </DropdownMenu>
          </Dropdown>
          <h5 className="flex items-center gap-2 mb-1.5">
            8,956{' '}
            <span className="leading-4 badge badge-sub-green">
              <TrendingUp className="inline-block text-green-500 ltr:mr-1 rtl:ml-1 size-4" />{' '}
              2.87
            </span>
          </h5>
          <p className="mb-8 text-gray-500 dark:text-dark-500">
            Orders this month
          </p>
          <div className="progress-bar progress-2">
            <div className="w-1/2 text-white bg-green-500 progress-bar-wrap"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default EComInfo
