import React from 'react'

import { Link } from 'react-router-dom'

const LinkList = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 sm:col-span-6 xl:col-span-4 card">
        <div className="card-header">
          <h6 className="card-title">Link List</h6>
        </div>
        <div className="card-body">
          <ul className="flex flex-col *:border-b *:border-gray-200 dark:*:border-dark-800">
            <li className="transition duration-200 ease-linear hover:bg-gray-100 dark:hover:bg-dark-850">
              <Link to="#!" className="block p-2">
                Build functional APIs with zero coding.
              </Link>
            </li>
            <li className="transition duration-200 ease-linear hover:bg-gray-100 dark:hover:bg-dark-850">
              <Link to="#!" className="block p-2">
                Resources with permissions.
              </Link>
            </li>
            <li className="transition duration-200 ease-linear hover:bg-gray-100 dark:hover:bg-dark-850">
              <Link to="#!" className="block p-2">
                Built in user authentication.
              </Link>
            </li>
            <li className="transition duration-200 ease-linear hover:bg-gray-100 dark:hover:bg-dark-850">
              <Link to="#!" className="block p-2">
                Easy Integration with existing apps and tools.
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}
export default LinkList
