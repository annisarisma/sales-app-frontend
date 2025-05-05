import React from 'react'

const BounceLoader = () => {
  return (
    <React.Fragment>
      <div className="flex flex-wrap items-center gap-4">
        <span className="spin animate-bounce loader-primary"></span>
        <span className="spin animate-bounce loader-purple"></span>
        <span className="spin animate-bounce loader-green"></span>
        <span className="spin animate-bounce loader-red"></span>
        <span className="spin animate-bounce loader-yellow"></span>
        <span className="spin animate-bounce loader-sky"></span>
        <span className="spin animate-bounce loader-pink"></span>
        <span className="spin animate-bounce loader-gray"></span>
        <span className="spin animate-bounce loader-gray border-opacity-10"></span>
      </div>
    </React.Fragment>
  )
}
export default BounceLoader
