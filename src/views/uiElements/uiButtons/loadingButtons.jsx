import React, { useState } from 'react'

const LoadingButtons = () => {
  // Define states for each button
  const [loadingButton1, setLoadingButton1] = useState(false)
  const [isActive1, setIsActive1] = useState(false)

  const [loadingButton2, setLoadingButton2] = useState(false)
  const [isActive2, setIsActive2] = useState(false)

  const [loadingButton3, setLoadingButton3] = useState(false)
  const [isActive3, setIsActive3] = useState(false)

  const handleClick1 = () => {
    setLoadingButton1(true)
    setTimeout(() => {
      setLoadingButton1(false)
      setIsActive1(!isActive1)
    }, 2000)
  }

  const handleClick2 = () => {
    setLoadingButton2(true)
    setTimeout(() => {
      setLoadingButton2(false)
      setIsActive2(!isActive2)
    }, 2000)
  }

  const handleClick3 = () => {
    setLoadingButton3(true)
    setTimeout(() => {
      setLoadingButton3(false)
      setIsActive3(!isActive3)
    }, 2000)
  }

  return (
    <React.Fragment>
      <div className="col-span-12 xl:col-span-6 card">
        <div className="card-header">
          <h6 className="card-title">Loading Buttons</h6>
        </div>
        <div className="card-body">
          <div className="flex flex-wrap gap-4">
            <div>
              <button
                onClick={handleClick1}
                className="btn btn-primary btn-icon-text">
                {!isActive1 ? 'Active' : 'Inactive'}
                {loadingButton1 && (
                  <svg
                    className="text-white size-4 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24">
                    <circle
                      className="opacity-0"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
              </button>
            </div>
            <div>
              <button
                onClick={handleClick2}
                className="btn btn-purple btn-icon-text">
                {!isActive2 ? 'Launching' : 'Welcome to Domiex 😍'}
                {loadingButton2 && (
                  <svg
                    className="text-white size-4 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24">
                    <circle
                      className="opacity-0"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
              </button>
            </div>
            <div>
              <button
                onClick={handleClick3}
                className="btn btn-pink btn-icon-text">
                {!isActive3 ? (
                  <span className="flex items-center gap-2">
                    <i className="ri-user-add-line"></i> Follow
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <i className="ri-user-unfollow-line"></i> UnFollow
                  </span>
                )}
                {loadingButton3 && (
                  <svg
                    className="text-white size-4 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24">
                    <circle
                      className="opacity-0"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LoadingButtons
