import React from 'react'

import { employee } from '@data/index'
import { Link } from 'react-router-dom'

const Employee = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-x-space">
        {employee.map((employee, index) => {
          return (
            <div key={index} className="text-center card">
              <div className="card-body">
                <img
                  src={employee.image}
                  alt="employeeImg"
                  className="mx-auto rounded-md size-14"
                />
                <h6 className="mt-4">
                  <Link
                    to="#"
                    className="text-current dark:text-current link hover:text-primary-500 dark:hover:text-primary-500">
                    {employee.name}
                  </Link>
                </h6>
                <p className="text-sm text-gray-500 dark:text-dark-500">
                  {employee.role}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default Employee
