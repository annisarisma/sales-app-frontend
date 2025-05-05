import React from 'react'

const LoaderModern = () => {
  return (
    <React.Fragment>
      <div className="flex flex-wrap items-center gap-4">
        <span className="spin modern-spin loader-primary"></span>
        <span className="spin modern-spin loader-purple"></span>
        <span className="spin modern-spin loader-green"></span>
        <span className="spin modern-spin loader-red"></span>
        <span className="spin modern-spin loader-yellow"></span>
        <span className="spin modern-spin loader-sky"></span>
        <span className="spin modern-spin loader-pink"></span>
        <span className="spin modern-spin loader-gray"></span>
        <span className="spin modern-spin loader-gray border-opacity-15"></span>
      </div>
    </React.Fragment>
  )
}
export default LoaderModern
