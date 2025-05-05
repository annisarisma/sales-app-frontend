import React, { useState } from 'react'

import {
  Droplets,
  MessagesSquare,
  Presentation,
  ShoppingBag,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import { MyTask1App } from './projectCharts'

const MyTasks = () => {
  const [active, setActive] = useState('activeTask')
  return (
    <React.Fragment>
      <div className="order-9 col-span-12 xl:col-span-6 2xl:col-span-4">
        <h6 className="mb-3">My Tasks</h6>
        <div className="mb-space">
          <ul className="flex border-b border-gray-200 mb-space dark:border-dark-800">
            <li>
              <Link
                to="#!"
                className={`relative block px-4 text-center py-2 font-medium after:absolute after:h-[1px] transition duration-200 ease-linear after:w-0 hover:after:w-full after:transition-all after:duration-200 after:opacity-0 after:-bottom-[1px] hover:after:opacity-100 [&.active]:after:opacity-100 [&.active]:after:w-full [&.active]:text-primary-500 after:mx-auto after:bg-primary-500 after:rounded-full after:inset-x-0 ${active === 'activeTask' ? 'active' : ''}`}
                onClick={() => setActive('activeTask')}>
                Active Task
              </Link>
            </li>
            <li>
              <Link
                to="#!"
                className={`relative block px-4 text-center py-2 font-medium after:absolute after:h-[1px] transition duration-200 ease-linear after:w-0 hover:after:w-full after:transition-all after:duration-200 after:opacity-0 after:-bottom-[1px] hover:after:opacity-100 [&.active]:after:opacity-100 [&.active]:after:w-full [&.active]:text-primary-500 after:mx-auto after:bg-primary-500 after:rounded-full after:inset-x-0 ${active === 'completedTask' ? 'active' : ''}`}
                onClick={() => setActive('completedTask')}>
                Completed
              </Link>
            </li>
            <li className="ml-auto">
              <Link to="#!" className="btn btn-primary py-1.5 px-3.5">
                <i className="align-baseline ri-add-line ltr:mr-1 rtl:ml-1"></i>{' '}
                Create
              </Link>
            </li>
          </ul>
          <div className="flex flex-col gap-3">
            <div className="mb-0 card">
              <div className="flex items-center gap-3 card-body">
                <div className="flex items-center justify-center rounded-md bg-primary-500/10 size-12 shrink-0">
                  <ShoppingBag className="text-primary-500 fill-primary-500/15" />
                </div>
                <div className="grow">
                  <h6 className="mb-1">
                    <Link to="#!">Ecommerce HTML Template</Link>
                  </h6>
                  <div className="flex divide-x divide-gray-200 divide-dashed dark:divide-dark-800">
                    <Link to="#!" className="pr-3 link link-primary">
                      <i className="align-baseline ltr:mr-1 rtl:ml-1 ri-message-3-line"></i>{' '}
                      154 Comments
                    </Link>
                    <Link to="#!" className="pl-3 link link-primary">
                      <i className="align-baseline ltr:mr-1 rtl:ml-1 ri-file-list-3-line"></i>{' '}
                      2+ Files
                    </Link>
                  </div>
                </div>
                <div className="shrink-0">
                  <MyTask1App
                    chartColors="bg-primary-500"
                    chartDarkColors={''}
                    chartId="myTask1Chart"
                    series={[32]}
                  />
                </div>
              </div>
            </div>
            <div className="mb-0 card">
              <div className="flex items-center gap-3 card-body">
                <div className="flex items-center justify-center rounded-md bg-purple-500/10 size-12 shrink-0">
                  <Presentation className="text-purple-500 fill-purple-500/15" />
                </div>
                <div className="grow">
                  <h6 className="mb-1">
                    <Link to="#!">Project Management Admin</Link>
                  </h6>
                  <div className="flex divide-x divide-gray-200 divide-dashed dark:divide-dark-800">
                    <Link to="#!" className="pr-3 link link-primary">
                      <i className="align-baseline ltr:mr-1 rtl:ml-1 ri-message-3-line"></i>{' '}
                      321 Comments
                    </Link>
                    <Link to="#!" className="pl-3 link link-primary">
                      <i className="align-baseline ltr:mr-1 rtl:ml-1 ri-file-list-3-line"></i>{' '}
                      16+ Files
                    </Link>
                  </div>
                </div>
                <div className="shrink-0">
                  <MyTask1App
                    chartColors="bg-green-500"
                    chartDarkColors={''}
                    chartId="myTask1Chart"
                    series={[45]}
                  />
                </div>
              </div>
            </div>
            <div className="mb-0 card">
              <div className="flex items-center gap-3 card-body">
                <div className="flex items-center justify-center rounded-md bg-green-500/10 size-12 shrink-0">
                  <Droplets className="text-green-500 fill-green-500/15" />
                </div>
                <div className="grow">
                  <h6 className="mb-1">
                    <Link to="#!">Dropbox Development</Link>
                  </h6>
                  <div className="flex divide-x divide-gray-200 divide-dashed dark:divide-dark-800">
                    <Link to="#!" className="pr-3 link link-primary">
                      <i className="align-baseline ltr:mr-1 rtl:ml-1 ri-message-3-line"></i>{' '}
                      29 Comments
                    </Link>
                    <Link to="#!" className="pl-3 link link-primary">
                      <i className="align-baseline ltr:mr-1 rtl:ml-1 ri-file-list-3-line"></i>{' '}
                      3+ Files
                    </Link>
                  </div>
                </div>
                <div className="shrink-0">
                  <MyTask1App
                    chartColors="bg-red-500"
                    chartDarkColors={''}
                    chartId="myTask1Chart"
                    series={[79]}
                  />
                </div>
              </div>
            </div>
            <div className="mb-0 card">
              <div className="flex items-center gap-3 card-body">
                <div className="flex items-center justify-center rounded-md bg-sky-500/10 size-12 shrink-0">
                  <MessagesSquare className="text-sky-500 fill-sky-500/15" />
                </div>
                <div className="grow">
                  <h6 className="mb-1">
                    <Link to="#!">Real Chat Application with Socket</Link>
                  </h6>
                  <div className="flex divide-x divide-gray-200 divide-dashed dark:divide-dark-800">
                    <Link to="#!" className="pr-3 link link-primary">
                      <i className="align-baseline ltr:mr-1 rtl:ml-1 ri-message-3-line"></i>{' '}
                      8 Comments
                    </Link>
                    <Link to="#!" className="pl-3 link link-primary">
                      <i className="align-baseline ltr:mr-1 rtl:ml-1 ri-file-list-3-line"></i>{' '}
                      1+ Files
                    </Link>
                  </div>
                </div>
                <div className="shrink-0">
                  <MyTask1App
                    chartColors="bg-yellow-500"
                    chartDarkColors={''}
                    chartId="myTask1Chart"
                    series={[100]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default MyTasks
