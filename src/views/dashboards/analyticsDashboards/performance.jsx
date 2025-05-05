import React from 'react'

import user13 from '@assets/images/avatar/user-13.png'
import { Tab, Tabs } from '@custom/Tabs/Tab'
import { Ellipsis, MoveUp } from 'lucide-react'
import { Link } from 'react-router-dom'

import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '../../../components/CustomComponents/Dropdown/Dropdown'
import { OnlineSalesChart, OnlineWeeklyApp } from './chart'
import AnimatedCounter from './counter'

const Performance = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 xl:col-span-6 2xl:col-span-3 card">
        <div className="card-header">
          <div className="flex justify-between items-center ">
            <h6 className="card-title">Performance</h6>
            <Dropdown
              position="right"
              trigger="click"
              dropdownClassName="dropdown">
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
        </div>
        <div className="card-body">
          <Tabs
            ulProps="flex p-1.5 bg-gray-100 dark:bg-dark-850 rounded-full *:grow"
            activeTabClass="bg-white text-gray-800 dark:bg-dark-900 dark:text-dark-50"
            inactiveTabClass="hover:text-gray-800 dark:hover:text-dark-50"
            otherClass="relative block px-2 py-1 font-medium text-center rounded-full link text-13"
            contentProps="w-full mt-4">
            <Tab label="New Users">
              <div>
                <div className="card">
                  <div className="card-body">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full size-24">
                        <img src={user13} alt="" className="rounded-full" />
                      </div>
                      <div>
                        <p className="mb-1 text-gray-500 dark:text-dark-500 text-13">
                          Top User
                        </p>
                        <h6 className="mb-2">Jabari Mayer</h6>
                        <p className="mb-1 text-gray-500 dark:text-dark-500 text-13">
                          Daily Visit
                        </p>
                        <h6>244 Clicks</h6>
                      </div>
                    </div>
                    <div className="pt-4 mt-4 border-t border-gray-200 border-dashed dark:border-dark-800">
                      <div className="flex items-center gap-3">
                        <div className="grow">
                          <p className="mb-1 text-gray-500 dark:text-dark-500 text-13">
                            New Users
                          </p>
                          <h5>
                            +
                            <AnimatedCounter
                              start={0}
                              end={54}
                              duration={3000}
                            />
                            M
                          </h5>
                        </div>
                        <div className="shrink-0">
                          <span className="inline-block font-medium text-green-500">
                            <MoveUp className="inline-block size-3" /> 9.63%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-gray-500 dark:text-dark-500">
                  Increase your email marketing by{' '}
                  <span className="text-primary-500">41%</span> to reach your
                  user acquisition and monthly targets.
                </p>
              </div>
            </Tab>

            <Tab label="Online Sales">
              <div>
                <div className="grid grid-cols-12 gap-space">
                  <div className="col-span-6 p-3 text-center border border-gray-200 border-dashed rounded-md dark:border-dark-800">
                    <p className="mb-1 text-gray-500 dark:text-dark-500 text-13">
                      Landing Products
                    </p>
                    <h6>
                      <AnimatedCounter start={500} end={1150} duration={3000} />
                      +
                    </h6>
                  </div>
                  <div className="col-span-6 p-3 text-center border border-gray-200 border-dashed rounded-md dark:border-dark-800">
                    <p className="mb-1 text-gray-500 dark:text-dark-500 text-13">
                      Admin Products
                    </p>
                    <h6>
                      <AnimatedCounter start={500} end={2387} duration={3000} />
                      +
                    </h6>
                  </div>
                </div>
                <p className="mt-3 mb-1 text-gray-500 dark:text-dark-500">
                  Average Online Sales
                </p>
                <h5 className="mb-2">
                  <AnimatedCounter start={500} end={4321} duration={3000} />+
                </h5>
                {/* <FollowersApp chartColors="[bg-primary-500, bg-primary-200]" chartDarkColors={''} chartId='followersChart' timeFrame={'weekly'}/> */}
                {/* <OnlineSalesChart chartColors="[bg-sky-500, bg-primary-100, bg-primary-50, bg-primary-300]" chartDarkColors={''} chartId='averageOnlineSalesChart' /> */}
                <OnlineSalesChart
                  chartColors="[bg-sky-500]"
                  chartDarkColors={''}
                  chartId="averageOnlineSalesChart"
                />
              </div>
            </Tab>

            <Tab label="Daily Sale">
              <div>
                <div className="grid grid-cols-12 gap-space">
                  <div className="col-span-6 p-3 text-center border border-gray-200 border-dashed rounded-md dark:border-dark-800">
                    <p className="mb-1 text-gray-500 dark:text-dark-500 text-13">
                      Landing Products
                    </p>
                    <h6>
                      <AnimatedCounter start={45} end={500} duration={3000} />+
                    </h6>
                  </div>
                  <div className="col-span-6 p-3 text-center border border-gray-200 border-dashed rounded-md dark:border-dark-800">
                    <p className="mb-1 text-gray-500 dark:text-dark-500 text-13">
                      Admin Products
                    </p>
                    <h6>
                      <AnimatedCounter start={78} end={500} duration={3000} />+
                    </h6>
                  </div>
                </div>
                <p className="mt-3 mb-1 text-gray-500 dark:text-dark-500">
                  Average Weekly Sales
                </p>
                <h5 className="mb-2">
                  <AnimatedCounter start={500} end={1073} duration={3000} />+
                </h5>
                <OnlineWeeklyApp
                  chartColors="[bg-sky-500]"
                  chartDarkColors={''}
                  chartId="averageOnlineWeeklyChart"
                />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Performance
