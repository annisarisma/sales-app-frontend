import React from 'react'

const PingLoader = () => {
  return (
    <React.Fragment>
      <div className="flex flex-wrap items-center gap-6">
        <span className="rounded-full spin size-4 animate-ping loader-primary"></span>
        <span className="rounded-full spin size-4 animate-ping loader-purple"></span>
        <span className="rounded-full spin size-4 animate-ping loader-green"></span>
        <span className="rounded-full spin size-4 animate-ping loader-red"></span>
        <span className="rounded-full spin size-4 animate-ping loader-yellow"></span>
        <span className="rounded-full spin size-4 animate-ping loader-sky"></span>
        <span className="rounded-full spin size-4 animate-ping loader-pink"></span>
        <span className="rounded-full spin size-4 animate-ping loader-gray"></span>
        <span className="rounded-full spin size-4 animate-ping loader-gray border-opacity-10"></span>
      </div>
    </React.Fragment>
  )
}
export default PingLoader
