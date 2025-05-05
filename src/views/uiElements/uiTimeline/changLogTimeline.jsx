import React from 'react'

import { Plus } from 'lucide-react'
import { Link } from 'react-router-dom'

const ChangLogTimeline = () => {
  return (
    <React.Fragment>
      <div className="max-w-xl mx-auto">
        <ul className="*:before:absolute *:before:w-0.5 *:before:bg-gray-200 dark:*:before:bg-dark-800 *:before:inset-y-0 *:relative rtl:*:before:right-4 ltr:*:before:left-4 flex flex-col *:pb-6">
          <li className="last:before:hidden last:pb-0">
            <div className="relative">
              <div className="relative flex items-start space-x-3 rtl:space-x-reverse">
                <div className="relative shrink-0">
                  <div className="flex items-center justify-center text-white rounded-full bg-primary-500 size-8 ring-8 ring-white dark:ring-dark-900">
                    <Plus className="size-4" />
                  </div>
                </div>
                <div className="mt-1 grow">
                  <div className="flex items-center gap-2 mb-2">
                    <Link to="#" className="font-medium">
                      v1.3.0
                    </Link>
                    <Link
                      to="#"
                      className="relative flex items-center px-3 py-1 text-xs border border-gray-200 rounded-full dark:border-dark-800">
                      <div className="absolute flex items-center justify-center shrink-0">
                        <span
                          className="size-1.5 rounded-full bg-green-500"
                          aria-hidden="true"></span>
                      </div>
                      <h6 className="ltr:ml-3.5 rtl:mr-3.5 text-gray-500 dark:text-dark-500 text-xs">
                        Feature
                      </h6>
                    </Link>
                  </div>
                  <h6 className="mb-3 text-sm text-gray-500 dark:text-dark-500 whitespace-nowrap">
                    15 May, 2024
                  </h6>
                  <ul className="list-disc list-inside">
                    <li>Added Chat Application</li>
                    <li>Added Modern Layout</li>
                    <li>Added Email Application</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="last:before:hidden last:pb-0">
            <div className="relative">
              <div className="relative flex items-start space-x-3 rtl:space-x-reverse">
                <div className="relative shrink-0">
                  <div className="flex items-center justify-center text-white rounded-full bg-primary-500 size-8 ring-8 ring-white dark:ring-dark-900">
                    <Plus className="size-4" />
                  </div>
                </div>
                <div className="mt-1 grow">
                  <div className="flex items-center gap-2 mb-2">
                    <Link to="#" className="font-medium">
                      v1.2.0
                    </Link>
                    <Link
                      to="#"
                      className="relative flex items-center px-3 py-1 text-xs border border-gray-200 rounded-full dark:border-dark-800">
                      <div className="absolute flex items-center justify-center shrink-0">
                        <span
                          className="size-1.5 rounded-full bg-green-500"
                          aria-hidden="true"></span>
                      </div>
                      <h6 className="ltr:ml-3.5 rtl:mr-3.5 text-gray-500 text-xs dark:text-dark-500">
                        Feature & Bag
                      </h6>
                    </Link>
                  </div>
                  <h6 className="mb-3 text-sm text-gray-500 dark:text-dark-500 whitespace-nowrap">
                    05 May, 2024
                  </h6>
                  <ul className="list-disc list-inside">
                    <li>Added Chat Application</li>
                    <li>Added Modern Layout</li>
                    <li>Added Email Application</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="last:before:hidden last:pb-0">
            <div className="relative">
              <div className="relative flex items-start space-x-3 rtl:space-x-reverse">
                <div className="relative shrink-0">
                  <div className="flex items-center justify-center text-white rounded-full bg-primary-500 size-8 ring-8 ring-white dark:ring-dark-900">
                    <Plus className="size-4" />
                  </div>
                </div>
                <div className="mt-1 grow">
                  <div className="flex items-center gap-2 mb-2">
                    <Link to="#" className="font-medium">
                      v1.0.0
                    </Link>
                  </div>
                  <h6 className="mb-3 text-sm text-gray-500 dark:text-dark-500 whitespace-nowrap">
                    29 April, 2024
                  </h6>
                  <ul className="list-disc list-inside">
                    <li>Initial Released</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}
export default ChangLogTimeline
