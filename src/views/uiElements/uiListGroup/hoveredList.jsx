import React from 'react'

const HoveredList = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 sm:col-span-6 xl:col-span-4 card">
        <div className="card-header">
          <h6 className="card-title">Hovered List</h6>
        </div>
        <div className="card-body">
          <ul className="flex flex-col *:border-b *:border-gray-200 dark:*:border-dark-800 *:p-2">
            <li className="transition duration-200 ease-linear hover:bg-gray-100 dark:hover:bg-dark-850">
              Build functional APIs with zero coding.
            </li>
            <li className="transition duration-200 ease-linear hover:bg-gray-100 dark:hover:bg-dark-850">
              Resources with permissions.
            </li>
            <li className="transition duration-200 ease-linear hover:bg-gray-100 dark:hover:bg-dark-850">
              Built in user authentication.
            </li>
            <li className="transition duration-200 ease-linear hover:bg-gray-100 dark:hover:bg-dark-850">
              Easy Integration with existing apps and tools.
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}
export default HoveredList
