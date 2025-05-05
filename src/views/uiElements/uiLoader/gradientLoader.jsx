import React from 'react'

const GradientLoader = () => {
  return (
    <React.Fragment>
      <div className="flex flex-wrap items-center gap-4">
        <span className="inline-block border-4 rounded-full border-primary-500 size-8 animate-spin border-l-green-500 border-r-red-500 border-b-yellow-500"></span>
        <span className="inline-block border-4 rounded-full border-primary-500 size-8 animate-spin border-l-pink-500 border-r-sky-500 border-b-purple-500"></span>
        <span className="inline-block border-4 rounded-full border-primary-200 size-8 animate-spin border-l-green-200 border-r-red-200 border-b-yellow-200"></span>
      </div>
    </React.Fragment>
  )
}
export default GradientLoader
