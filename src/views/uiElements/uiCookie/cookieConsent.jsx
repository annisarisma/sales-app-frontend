import React, { useState } from 'react'

const CookieConsent = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    isOpen && (
      <React.Fragment>
        <div className="relative card-body min-h-44">
          <div className="absolute text-center inset-x-5 bottom-5">
            <div className="items-center gap-3 p-3 rounded-full ltr:pl-5 rtl:pr-5 sm:inline-flex card">
              <p className="mb-0 text-gray-500 dark:text-dark-500">
                This website utilizes cookies to enhance your browsing
                experience.
              </p>
              <div>
                <button
                  onClick={() => setIsOpen(false)}
                  type="button"
                  className="rounded-full btn btn-xs btn-gray">
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  )
}

export default CookieConsent
