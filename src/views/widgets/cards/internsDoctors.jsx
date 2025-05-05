import React from 'react'

import { internDoctors } from '@data/index'
import { Link } from 'react-router-dom'

const InternsDoctors = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-6 xl:col-span-4 card">
        <div className="card-body">
          <h6 className="mb-2">Interns Doctors</h6>
          <div className="flex -space-x-2 rtl:space-x-reverse grow">
            {internDoctors.map((item, index) => {
              return (
                <Link
                  key={index}
                  to="#!"
                  className="transition duration-300 ease-linear hover:z-10">
                  <img
                    className="border-2 border-white rounded-full dark:border-dark-900 size-7"
                    src={item.src}
                    alt="internDoctorsImg"
                  />
                </Link>
              )
            })}
            <Link
              to="#!"
              className="transition duration-300 ease-linear hover:z-10">
              <div className="flex items-center justify-center text-white border-2 border-white rounded-full dark:border-dark-900 text-11 bg-primary-500 size-7">
                +14
              </div>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default InternsDoctors
