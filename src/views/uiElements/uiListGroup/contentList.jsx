import React from 'react'

import user11 from '@assets/images/avatar/user-11.png'
import user12 from '@assets/images/avatar/user-12.png'
import user13 from '@assets/images/avatar/user-13.png'
import user14 from '@assets/images/avatar/user-14.png'
import user15 from '@assets/images/avatar/user-15.png'
import { Link } from 'react-router-dom'

const ContentList = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 card">
        <div className="card-header">
          <h6 className="card-title">Content List</h6>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 sm:col-span-6 xl:col-span-4">
              <ul className="overflow-hidden border border-gray-200 dark:border-dark-800 sm:rounded-md">
                <li>
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h6>Item 1</h6>
                      <p className="max-w-2xl mt-1 text-sm text-gray-500 dark:text-dark-500">
                        Description for Item 1
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <p className="text-sm font-medium text-gray-500 dark:text-dark-500">
                        Status: <span className="text-green-500">Active</span>
                      </p>
                      <Link
                        to="#"
                        className="font-medium text-primary-500 hover:text-primary-500">
                        Edit
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="border-t border-gray-200 dark:border-dark-800">
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h6>Item 2</h6>
                      <p className="max-w-2xl mt-1 text-sm text-gray-500 dark:text-dark-500">
                        Description for Item 2
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <p className="text-sm font-medium text-gray-500 dark:text-dark-500">
                        Status: <span className="text-red-500">Inactive</span>
                      </p>
                      <Link
                        to="#"
                        className="font-medium text-primary-500 hover:text-primary-500">
                        Edit
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="border-t border-gray-200 dark:border-dark-800">
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h6>Item 3</h6>
                      <p className="max-w-2xl mt-1 text-sm text-gray-500 dark:text-dark-500">
                        Description for Item 3
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <p className="text-sm font-medium text-gray-500 dark:text-dark-500">
                        Status: <span className="text-yellow-500">Pending</span>
                      </p>
                      <Link
                        to="#"
                        className="font-medium text-primary-500 hover:text-primary-500">
                        Edit
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-span-12 sm:col-span-6 xl:col-span-4">
              <div className="overflow-hidden border border-gray-200 rounded-md dark:border-dark-800">
                <div className="px-4 py-2 border-b border-gray-200 dark:border-dark-800">
                  <h6>Top Users</h6>
                </div>
                <ul className="divide-y divide-gray-200 dark:divide-dark-800">
                  <li className="flex items-center gap-3 px-6 py-4">
                    <img
                      className="object-cover rounded-full size-10 shrink-0"
                      src={user11}
                      alt="user"
                    />
                    <div className="grow">
                      <h6>Emily Jones</h6>
                      <p className="text-gray-500 dark:text-dark-500">
                        1234 points
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 px-6 py-4">
                    <img
                      className="object-cover rounded-full size-10 shrink-0"
                      src={user12}
                      alt="user"
                    />
                    <div className="grow">
                      <h6>David Lee</h6>
                      <p className="text-gray-500 dark:text-dark-500">
                        987 points
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 px-6 py-4">
                    <img
                      className="object-cover rounded-full size-10 shrink-0"
                      src={user13}
                      alt="user"
                    />
                    <div className="grow">
                      <h6>Sophia Williams</h6>
                      <p className="text-gray-500 dark:text-dark-500">
                        876 points
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 px-6 py-4">
                    <img
                      className="object-cover rounded-full size-10 shrink-0"
                      src={user14}
                      alt="user"
                    />
                    <div className="grow">
                      <h6>Michael Chen</h6>
                      <p className="text-gray-500 dark:text-dark-500">
                        765 points
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 px-6 py-4">
                    <img
                      className="object-cover rounded-full size-10 shrink-0"
                      src={user15}
                      alt="user"
                    />
                    <div className="grow">
                      <h6>Mia Davis</h6>
                      <p className="text-gray-500 dark:text-dark-500">
                        654 points
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default ContentList
