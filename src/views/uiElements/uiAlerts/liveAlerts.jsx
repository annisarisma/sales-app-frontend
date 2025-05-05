import React, { useState } from 'react'

import { Link } from 'react-router-dom'

const LiveAlerts = () => {
  const [isOpen, setIsOpen] = useState(false)
  const showAlert = () => {
    setIsOpen(true)
    setTimeout(() => {
      setIsOpen(false)
    }, 7000)
  }

  return (
    <React.Fragment>
      <div className="card">
        <div className="card-header">
          <h6 className="card-title">Live Alerts</h6>
        </div>
        <div className="card-body">
          <div>
            <button
              onClick={showAlert}
              className="text-white bg-primary-500 border-primary-500 btn hover:bg-primary-600 hover:text-white hover:border-primary-600 focus:bg-primary-600 focus:text-white focus:border-primary-600">
              Live Alert
            </button>
            {isOpen && (
              <div className="fixed -translate-x-1/2 alert alert-primary top-5 z-toast left-1/2">
                <span>You have successfully completed this thing!</span>
                <Link
                  to=""
                  onClick={() => setIsOpen(false)}
                  className="text-primary-400 hover:text-primary-500 btn-close">
                  <i className="ri-close-fill"></i>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LiveAlerts
