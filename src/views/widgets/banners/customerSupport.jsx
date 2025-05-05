import React, { useState } from 'react'

import { Headset } from 'lucide-react'
import { Link } from 'react-router-dom'

const CustomerSupport = () => {
  const [isOpen, setIsOpen] = useState(true)

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <React.Fragment>
      <div className="col-span-12">
        {isOpen && (
          <div className="mb-5 alert-solid-primary alert">
            <div className="flex items-center gap-3">
              <Headset className="text-primary-100 fill-primary-400/50 size-8" />
              <div>
                <h6 className="mb-1 font-medium text-primary-50">
                  Hello! Need Help?
                </h6>
                <p className="text-primary-200">
                  Feel free to ask me anything!
                </p>
              </div>
              <Link
                to="#"
                onClick={handleClose}
                className="absolute text-lg transition duration-300 ease-linear ltr:right-5 rtl:left-5 top-2 text-primary-300 hover:text-primary-100">
                <i className="ri-close-fill"></i>
              </Link>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  )
}

export default CustomerSupport
