import React from 'react'

const OvalShapedSpinner = () => {
  return (
    <React.Fragment>
      <div className="flex flex-wrap items-center gap-3 card-body">
        <div className="relative">
          <div className="border-t-4 border-b-4 border-gray-200 rounded-full dark:border-dark-800 size-8"></div>
          <div className="absolute top-0 left-0 border-t-4 border-b-4 rounded-full border-primary-500 size-8 animate-spin"></div>
        </div>
        <div className="relative">
          <div className="border-t-4 border-b-4 border-gray-200 rounded-full dark:border-dark-800 size-8"></div>
          <div className="absolute top-0 left-0 border-t-4 border-b-4 border-purple-500 rounded-full size-8 animate-spin"></div>
        </div>
        <div className="relative">
          <div className="border-t-4 border-b-4 border-gray-200 rounded-full dark:border-dark-800 size-8"></div>
          <div className="absolute top-0 left-0 border-t-4 border-b-4 border-green-500 rounded-full size-8 animate-spin"></div>
        </div>
        <div className="relative">
          <div className="border-t-4 border-b-4 border-gray-200 rounded-full dark:border-dark-800 size-8"></div>
          <div className="absolute top-0 left-0 border-t-4 border-b-4 border-red-500 rounded-full size-8 animate-spin"></div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default OvalShapedSpinner
