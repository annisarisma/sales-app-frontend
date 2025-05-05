import React from 'react'

const ButtonBadge = () => {
  return (
    <React.Fragment>
      <div className="flex flex-wrap items-center gap-6">
        <div className="relative">
          <button type="button" className="btn btn-primary">
            Notification
          </button>
          <span className="absolute border-2 border-white rounded-full dark:border-dark-900 badge badge-square badge-solid-red -top-2 -right-2">
            2
          </span>
        </div>
        <div className="relative">
          <button type="button" className="btn btn-primary">
            Notification
          </button>
          <span className="absolute border-2 border-white rounded-full dark:border-dark-900 badge badge-square badge-solid-green -bottom-2 -right-2">
            2
          </span>
        </div>
        <div className="relative">
          <button type="button" className="btn btn-primary">
            Notification
          </button>
          <span className="absolute border-2 border-white rounded-full dark:border-dark-900 badge badge-square badge-solid-yellow -top-2 -left-2">
            2
          </span>
        </div>
        <div className="relative">
          <button type="button" className="btn btn-primary">
            Notification
          </button>
          <span className="absolute border-2 border-white rounded-full dark:border-dark-900 badge badge-square badge-solid-sky -bottom-2 -left-2">
            2
          </span>
        </div>
      </div>
    </React.Fragment>
  )
}
export default ButtonBadge
