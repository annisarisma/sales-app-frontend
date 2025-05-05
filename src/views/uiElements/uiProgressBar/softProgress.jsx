import React from 'react'

const SoftProgress = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-6">
          <div className="flex flex-col gap-3">
            <div className="progress-bar">
              <div className="w-1/2 progress-bar-wrap text-primary-500 bg-primary-500/20"></div>
            </div>
            <div className="progress-bar">
              <div className="w-1/3 text-purple-500 bg-purple-500/20 progress-bar-wrap"></div>
            </div>
            <div className="progress-bar">
              <div className="w-2/3 text-green-500 bg-green-500/20 progress-bar-wrap"></div>
            </div>
            <div className="progress-bar">
              <div className="w-4/5 text-red-500 bg-red-500/20 progress-bar-wrap"></div>
            </div>
            <div className="progress-bar">
              <div className="w-3/4 text-yellow-500 bg-yellow-500/20 progress-bar-wrap"></div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="flex flex-col gap-3">
            <div className="progress-bar">
              <div className="w-1/2 progress-bar-wrap text-sky-500 bg-sky-500/20"></div>
            </div>
            <div className="progress-bar">
              <div className="w-2/3 text-pink-500 bg-pink-500/20 progress-bar-wrap"></div>
            </div>
            <div className="progress-bar">
              <div className="w-3/5 text-gray-500 bg-gray-500/20 progress-bar-wrap dark:text-dark-500"></div>
            </div>
            <div className="progress-bar">
              <div className="w-full text-gray-800 bg-gray-300 dark:bg-dark-800 dark:text-dark-100 progress-bar-wrap"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default SoftProgress
