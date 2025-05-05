import React, { useState } from 'react'

import cookieImage from '@assets/images/cookie.png'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'

const CookieHorizontal = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    isOpen && (
      <React.Fragment>
        <div className="relative card-body min-h-96">
          <div className="absolute p-5 ltr:ml-5 rtl:mr-5 max-w-96 card ltr:right-5 rtl:left-5 bottom-5">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 link link-red ltr:right-5 rtl:left-5">
              <X className="size-5" />
            </button>
            <img
              src={cookieImage}
              alt="Cookie"
              className="h-9"
              style={{ width: '36px', height: '36px' }}
            />
            <h6 className="mt-4 mb-2">
              Here&apos;s another reminder about cookies!
            </h6>
            <p className="mb-3 text-gray-500 dark:text-dark-500">
              By utilizing UI Design Daily, you acknowledge our use of cookies
              to enhance your experience and agree to the data collection
              outlined in our
              <Link
                to="#!"
                className="text-gray-500 underline transition duration-200 ease-linear hover:text-primary-500">
                Cookie Policy
              </Link>
              .
            </p>
            <div className="flex items-center gap-3 ltr:justify-end rtl:justify-start">
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="btn btn-active-red">
                Ignore
              </button>
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="btn btn-primary">
                Accept
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  )
}

export default CookieHorizontal
