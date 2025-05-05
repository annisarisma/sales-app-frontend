import React from 'react'

import { fancyCard } from '@data/index'
import { Link } from 'react-router-dom'

const FancyCard = () => {
  return (
    <React.Fragment>
      {fancyCard.map((item, index) => {
        return (
          <div
            key={index}
            className="col-span-12 !bg-transparent border-0 shadow-none sm:col-span-6 xl:col-span-4 card">
            <Link to="#">
              <img className="rounded-md" src={item.image} alt="Gallery" />
            </Link>
            <div className="relative mx-10 -mt-16 bg-white rounded-md card-body dark:bg-dark-950">
              <h5 className="mb-3">
                <Link
                  to="#"
                  className="transition duration-500 ease-in-out hover:text-primary-500">
                  {item.label}
                </Link>
              </h5>
              <p className="text-gray-500 dark:text-dark-500">
                {item.description}
              </p>
              <p className="mt-4 text-sm text-gray-500 dark:text-dark-500">
                By{' '}
                <Link
                  to="#"
                  className="transition duration-500 ease-in-out text-primary-500">
                  Daniel
                </Link>{' '}
                | in{' '}
                <Link
                  to="#"
                  className="transition duration-500 ease-in-out text-primary-500">
                  Traveling
                </Link>
                ,{' '}
                <Link
                  to="#"
                  className="transition duration-500 ease-in-out text-primary-500">
                  Business
                </Link>
              </p>
            </div>
          </div>
        )
      })}
    </React.Fragment>
  )
}
export default FancyCard
