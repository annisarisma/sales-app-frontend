import React from 'react'

import user14 from '@assets/images/avatar/user-14.png'
import user17 from '@assets/images/avatar/user-17.png'
import user18 from '@assets/images/avatar/user-18.png'
import { Link } from 'react-router-dom'

const Premium = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 xl:col-span-6 2xl:col-span-3 card">
        <div className="card-body">
          <p className="mb-3 font-medium text-primary-500">
            Upgrade to Premium
          </p>
          <h3 className="mb-2 capitalize">Make the best with the premium</h3>

          <div className="flex -space-x-2 grow rtl:space-x-reverse">
            <Link
              to="#!"
              className="transition duration-300 ease-linear hover:z-10">
              <img
                className="border-2 border-white rounded-full dark:border-dark-900 size-7"
                alt="User Images"
                src={user17}
              />
            </Link>
            <Link
              to="#!"
              className="transition duration-300 ease-linear hover:z-10">
              <img
                className="border-2 border-white rounded-full dark:border-dark-900 size-7"
                alt="User Images"
                src={user18}
              />
            </Link>
            <Link
              to="#!"
              className="transition duration-300 ease-linear hover:z-10">
              <img
                className="border-2 border-white rounded-full dark:border-dark-900 size-7"
                alt="User Images"
                src={user14}
              />
            </Link>
          </div>

          <div className="flex mt-16 mb-3">
            <p className="text-gray-500 dark:text-dark-500 grow text-13">
              Pay Monthly
            </p>
            <h6 className="shrink-0">$19.99</h6>
          </div>
          <button
            type="button"
            className="w-full border-gray-200 dark:border-dark-800 btn btn-outline-gray">
            Upgrade Now
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Premium
