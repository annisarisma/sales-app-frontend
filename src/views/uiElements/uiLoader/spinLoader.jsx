import React from 'react'

const SpinLoader = () => {
  return (
    <React.Fragment>
      <div className="flex flex-wrap items-center gap-4">
        <span className="spin loader-spin loader-primary"></span>
        <span className="spin loader-spin loader-purple"></span>
        <span className="spin loader-spin loader-green"></span>
        <span className="spin loader-spin loader-red"></span>
        <span className="spin loader-spin loader-yellow"></span>
        <span className="spin loader-spin loader-sky"></span>
        <span className="spin loader-spin loader-pink"></span>
        <span className="spin loader-spin loader-gray"></span>
        <span className="spin loader-spin loader-gray border-opacity-15"></span>
      </div>
    </React.Fragment>
  )
}
export default SpinLoader
