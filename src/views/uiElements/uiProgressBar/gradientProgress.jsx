import React from 'react'

const GradientProgress = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col gap-3">
        <div className="progress-bar">
          <div className="w-1/2 text-white progress-bar-wrap bg-gradient-to-r from-primary-500 to-green-500"></div>
        </div>
        <div className="progress-bar">
          <div className="w-1/3 text-white progress-bar-wrap bg-gradient-to-r from-primary-500 to-sky-500 via-sky-600"></div>
        </div>
        <div className="progress-bar">
          <div className="w-2/5 text-white progress-bar-wrap bg-gradient-to-r from-indigo-500 to-purple-500"></div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default GradientProgress
