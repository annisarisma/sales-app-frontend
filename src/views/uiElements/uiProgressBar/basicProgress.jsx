import React from 'react'

const BasicProgress = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-6">
          <div className="flex flex-col gap-3">
            <div className="progress-bar">
              <div className="w-1/2 text-white progress-bar-wrap bg-primary-500">
                Primary 50%
              </div>
            </div>
            <div className="progress-bar">
              <div className="w-1/3 text-white bg-purple-500 progress-bar-wrap">
                Purple 33.33%
              </div>
            </div>
            <div className="progress-bar">
              <div className="w-2/3 text-white bg-green-500 progress-bar-wrap">
                Green 66.66%
              </div>
            </div>
            <div className="progress-bar">
              <div className="w-4/5 text-white bg-red-500 progress-bar-wrap">
                Red 80%
              </div>
            </div>
            <div className="progress-bar">
              <div className="w-3/4 text-white bg-yellow-500 progress-bar-wrap">
                Yellow 75%
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="flex flex-col gap-3">
            <div className="progress-bar">
              <div className="w-1/2 text-white progress-bar-wrap bg-sky-500">
                Primary 50%
              </div>
            </div>
            <div className="progress-bar">
              <div className="w-2/3 text-white bg-pink-500 progress-bar-wrap">
                Pink 66.66%
              </div>
            </div>
            <div className="progress-bar">
              <div className="w-3/5 text-gray-500 bg-gray-200 dark:bg-dark-800 dark:text-dark-500 progress-bar-wrap">
                Light 60%
              </div>
            </div>
            <div className="progress-bar">
              <div className="w-full text-white bg-gray-900 dark:bg-dark-300 dark:text-dark-500 progress-bar-wrap">
                Dark 100%
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default BasicProgress
