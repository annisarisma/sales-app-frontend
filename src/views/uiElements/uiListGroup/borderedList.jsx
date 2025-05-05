import React from 'react'

const BorderedList = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 sm:col-span-6 xl:col-span-4 card">
        <div className="card-header">
          <h6 className="card-title">Bordered List</h6>
        </div>
        <div className="card-body">
          <ul className="flex flex-col *:border *:border-gray-200 dark:*:border-dark-800 *:border-b-0 *:p-2">
            <li className="last:border-b [&.active]:bg-primary-500 [&.active]:text-white [&.active]:border-primary-500">
              Build functional APIs with zero coding.
            </li>
            <li className="last:border-b [&.active]:bg-primary-500 [&.active]:text-white [&.active]:border-primary-500 active">
              Resources with permissions.
            </li>
            <li className="last:border-b [&.active]:bg-primary-500 [&.active]:text-white [&.active]:border-primary-500">
              Built in user authentication.
            </li>
            <li className="last:border-b [&.active]:bg-primary-500 [&.active]:text-white [&.active]:border-primary-500">
              Easy Integration with existing apps and tools.
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}
export default BorderedList
