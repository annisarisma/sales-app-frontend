import React from 'react'

import user9 from '@assets/images/avatar/user-9.png'
import user12 from '@assets/images/avatar/user-12.png'
import user18 from '@assets/images/avatar/user-18.png'
import { contributorOptionsData, typeOptionsData } from '@data/index'
import {
  File,
  FileText,
  Github,
  MessageSquareText,
  MonitorDot,
  ScrollText,
  ShoppingBag,
  Smile,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import FilterActivity from './filterActivity'

const UserActivityContent = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-12 mt-5 gap-x-5">
        <div className="col-span-12 md:col-span-4 xl:col-span-3">
          <div className="card">
            <div className="card-header">
              <h6 className="card-title">Filter Activity</h6>
            </div>
            <div className="card-body">
              {/* filter activity type */}
              <FilterActivity title="Type" options={typeOptionsData} />
              <p className="mt-5 mb-3 text-sm font-medium text-gray-500 uppercase dark:text-dark-500">
                Contributor
              </p>

              <FilterActivity options={contributorOptionsData} />
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-8 xl:col-span-9">
          <div className="flex items-center pb-1 border-b border-gray-200 dark:border-dark-800">
            <h6 className="grow">Today</h6>
            <p className="text-sm text-gray-500 dark:text-dark-500">
              Monday, May 20, 2024
            </p>
          </div>

          <ul className="*:before:absolute *:before:w-[1px] *:before:bg-gray-200 dark:*:before:bg-gray-800 *:before:-inset-y-5 *:relative ltr:*:before:left-4 rtl:*:before:right-4 flex flex-col mt-5">
            <li className="last:before:hidden last:pb-0">
              <div className="relative">
                <div className="relative flex items-start space-x-3 rtl:space-x-reverse">
                  <div className="relative shrink-0">
                    <div className="flex items-center justify-center text-green-500 rounded-full bg-green-500/10 size-8 ring-4 ring-white dark:ring-dark-900">
                      <ShoppingBag className="size-4" />
                    </div>
                  </div>
                  <div className="card card-body grow">
                    <span className="text-sm text-gray-500 dark:text-dark-500 ltr:float-end rtl:float-start">
                      02:35 PM
                    </span>
                    <h6>New Sale</h6>
                    <p className="text-gray-500 dark:text-dark-500">
                      A returning visitor from thomas, Italy just bought a new{' '}
                      <Link to="#!" className="text-primary-500">
                        Mackbook Pro
                      </Link>{' '}
                      for <span className="font-medium">$1999.99</span>
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="last:before:hidden last:pb-0">
              <div className="relative">
                <div className="relative flex items-start space-x-3 rtl:space-x-reverse">
                  <div className="relative shrink-0">
                    <img
                      src={user12}
                      alt="user12Img"
                      className="rounded-full size-8 ring-4 ring-white dark:ring-dark-900"
                    />
                  </div>
                  <div className="card card-body grow">
                    <span className="text-sm text-gray-500 dark:text-dark-500 ltr:float-end rtl:float-start">
                      12:59 PM
                    </span>
                    <h6>Jerome send message</h6>
                    <p className="mb-3 text-gray-500 dark:text-dark-500">
                      <span className="font-medium">@jerome</span> send message
                      to thread in channel
                      <span className="font-medium">#show-tell</span>
                    </p>

                    <div className="mb-2 space-x-1">
                      <span className="text-gray-500 bg-transparent border-gray-200 dark:border-dark-800 dark:text-dark-500 badge">
                        #marketing
                      </span>
                      <span className="text-gray-500 bg-transparent border-gray-200 dark:border-dark-800 dark:text-dark-500 badge">
                        #promotion
                      </span>
                    </div>
                    <p>Hello Everyone</p>
                    <p>
                      I have a question regarding email marketing. What are some
                      strategies or techniques to prevent automated marketing
                      emails from being flagged as promotions, spam, or junk?
                    </p>

                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      <p className="text-gray-500 dark:text-dark-500">
                        <Smile className="inline-block size-4" />
                        <span className="align-middle whitespace-nowrap">
                          <b>2</b> reactions
                        </span>
                      </p>
                      <p className="text-gray-500 dark:text-dark-500">
                        <MessageSquareText className="inline-block size-4" />{' '}
                        <span className="align-middle whitespace-nowrap">
                          <b>6</b> replies
                        </span>
                      </p>
                      <p className="text-gray-500 dark:text-dark-500">
                        Last Today at 07:30 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="last:before:hidden last:pb-0">
              <div className="relative">
                <div className="relative flex items-start space-x-3 rtl:space-x-reverse">
                  <div className="relative shrink-0">
                    <div className="flex items-center justify-center rounded-full bg-primary-500/10 text-primary-500 size-8 ring-4 ring-white dark:ring-dark-900">
                      <MonitorDot className="size-4" />
                    </div>
                  </div>
                  <div className="card card-body grow">
                    <span className="text-sm text-gray-500 dark:text-dark-500 ltr:float-end rtl:float-start">
                      10:27 AM
                    </span>
                    <h6>Project status updated</h6>
                    <p className="text-gray-500 dark:text-dark-500">
                      <span className="align-middle whitespace-nowrap">
                        Marked
                      </span>
                      <Link to="#!" className="link link-primary">
                        <Github className="inline-block size-4" />
                        <span className="align-middle whitespace-nowrap">
                          #25 Marge
                        </span>
                      </Link>{' '}
                      as{' '}
                      <span className="badge badge-sub-green">Completed</span>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <div className="flex items-center pb-1 border-b border-gray-200 dark:border-dark-800">
            <h6 className="grow">Yesterday</h6>
            <p className="text-sm text-gray-500 dark:text-dark-500">
              Sunday, May 19, 2024
            </p>
          </div>

          <ul className="*:before:absolute *:before:w-[1px] *:before:bg-gray-200 dark:*:before:bg-dark-800 *:before:-inset-y-5 *:relative ltr:*:before:left-4 rtl:*:before:right-4 flex flex-col mt-5">
            <li className="last:before:hidden last:pb-0">
              <div className="relative">
                <div className="relative flex items-start space-x-3 rtl:space-x-reverse">
                  <div className="relative shrink-0">
                    <img
                      src={user18}
                      alt="user18Img"
                      className="rounded-full size-8 ring-4 ring-white dark:ring-dark-900"
                    />
                  </div>
                  <div className="card card-body grow">
                    <span className="text-sm text-gray-500 dark:text-dark-500 ltr:float-end rtl:float-start">
                      03:41 AM
                    </span>
                    <h6>Paul Stirling commented on @domiex</h6>
                    <div className="p-3 mt-3 bg-gray-100 rounded-md dark:bg-dark-850">
                      <p className="text-gray-500 dark:text-dark-500">
                        Paul, I believe we should seriously consider removing
                        this column altogether. It seems redundant as it
                        duplicates content we already have. Additionally,
                        consolidating information into a single source ensures
                        accuracy and avoids having disparate information spread
                        across multiple sources. What do you think about this?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="last:before:hidden last:pb-0">
              <div className="relative">
                <div className="relative flex items-start space-x-3 rtl:space-x-reverse">
                  <div className="relative shrink-0">
                    <div className="flex items-center justify-center rounded-full text-sky-500 bg-sky-500/10 size-8 ring-4 ring-white dark:ring-dark-900">
                      <File className="size-4" />
                    </div>
                  </div>
                  <div className="card card-body grow">
                    <span className="text-sm text-gray-500 dark:text-dark-500 ltr:float-end rtl:float-start">
                      11:59 AM
                    </span>
                    <h6>Task Report - uploaded weekly reports</h6>
                    <p className="text-gray-500 dark:text-dark-500">
                      Added <b>2</b> files to task report by{' '}
                      <Link to="#!" className="font-medium text-primary-500">
                        domiex
                      </Link>
                    </p>

                    <div className="grid grid-cols-1 gap-5 mt-3 md:grid-cols-2 xl:grid-cols-3">
                      <Link
                        to="#!"
                        className="flex items-center gap-3 p-4 border border-gray-200 border-dashed rounded-md dark:border-dark-800">
                        <div>
                          <FileText className="text-red-500 stroke-1 size-8 fill-red-500/10" />
                        </div>
                        <div>
                          <h6 className="mb-1">task-reports.pdf</h6>
                          <p className="text-xs text-gray-500 dark:text-dark-500">
                            45 KB
                          </p>
                        </div>
                      </Link>
                      <Link
                        to="#!"
                        className="flex items-center gap-3 p-4 border border-gray-200 border-dashed rounded-md dark:border-dark-800">
                        <div>
                          <ScrollText className="text-yellow-500 stroke-1 size-8 fill-yellow-500/10" />
                        </div>
                        <div>
                          <h6 className="mb-1">requirement-research.txt</h6>
                          <p className="text-xs text-gray-500 dark:text-dark-500">
                            1.5 MB
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="last:before:hidden last:pb-0">
              <div className="relative">
                <div className="relative flex items-start space-x-3 rtl:space-x-reverse">
                  <div className="relative shrink-0">
                    <img
                      src={user9}
                      alt="user9Img"
                      className="rounded-full size-8 ring-4 ring-white dark:ring-dark-900"
                    />
                  </div>
                  <div className="card card-body grow">
                    <span className="text-sm text-gray-500 dark:text-dark-500 ltr:float-end rtl:float-start">
                      04:21 PM
                    </span>
                    <h6>
                      John Brown request joined{' '}
                      <Link to="#!" className="text-primary-500">
                        #domiex-project
                      </Link>{' '}
                      channel
                    </h6>
                    <div className="flex items-center gap-2 mt-3">
                      <button type="button" className="btn btn-primary">
                        Accept
                      </button>
                      <button type="button" className="btn btn-sub-gray">
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default UserActivityContent
