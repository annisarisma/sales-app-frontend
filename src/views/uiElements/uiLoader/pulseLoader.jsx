import React from 'react'

const PulseLoader = () => {
  return (
    <React.Fragment>
      <div className="flex flex-wrap items-center gap-4">
        <span className="spin pulse-primary animate-pulse"></span>
        <span className="spin pulse-purple animate-pulse"></span>
        <span className="spin pulse-green animate-pulse"></span>
        <span className="spin pulse-red animate-pulse"></span>
        <span className="spin pulse-yellow animate-pulse"></span>
        <span className="spin pulse-sky animate-pulse"></span>
        <span className="spin pulse-pink animate-pulse"></span>
        <span className="spin pulse-gray animate-pulse"></span>
        <span className="spin pulse-gray animate-pulse bg-opacity-10"></span>
      </div>
    </React.Fragment>
  )
}
export default PulseLoader
