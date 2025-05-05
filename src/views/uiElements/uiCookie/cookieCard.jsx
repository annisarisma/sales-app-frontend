import React, { useState } from 'react'

import cookieImage from '@assets/images/cookie.png'
import { X } from 'lucide-react'

// Ensure you have lucide-react installed or adjust to your icon library

const CookieCard = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    isOpen && (
      <React.Fragment>
        <div className="relative card-body min-h-72">
          <div className="absolute p-4 ltr:ml-5 rtl:mr-5 max-w-80 card ltr:right-5 rtl:left-5 bottom-5">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={cookieImage}
                alt="Cookie"
                className="h-6"
                style={{ width: '24px', height: '24px' }}
              />
              <h6 className="grow">Cookie Policy</h6>
              <button
                onClick={() => setIsOpen(false)}
                className="link link-red">
                <X className="size-5" />
              </button>
            </div>
            <p className="mb-3 text-gray-500 dark:text-dark-500">
              By visiting this site, you consent to the use of cookies, which
              are employed to enrich your browsing experience.
            </p>
            <div>
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="btn btn-green">
                Accept
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  )
}

export default CookieCard
