import React, { useState } from 'react'

import { Link } from 'react-router-dom'

const CookiePolicy = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    isOpen && (
      <React.Fragment>
        <div className="relative card-body min-h-48 md:min-h-32">
          <div className="absolute inset-x-0 bottom-0 p-3 mb-0 bg-gray-900 border-gray-900 rounded-none card dark:bg-dark-800 dark:border-dark-800">
            <div className="items-center gap-3 sm:flex">
              <p className="mb-0 text-gray-200 dark:text-dark-200 grow">
                Google utilizes cookies for analyzing traffic to this site and
                for displaying personalized advertisements. Please refer to our
                <Link
                  to="#!"
                  className="text-gray-200 transition duration-200 ease-linear hover:text-red-500">
                  privacy policy
                </Link>
                for further details.
              </p>
              <div className="mt-3 shrink-0 sm:mt-0">
                <button
                  onClick={() => setIsOpen(false)}
                  type="button"
                  className="rounded-full btn btn-xs btn-gray">
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  )
}

export default CookiePolicy
