import React from 'react'

const LoadingDots = () => {
  return (
    <React.Fragment>
      <div className="flex flex-wrap items-center gap-3 card-body">
        <div className="flex items-center justify-center space-x-1">
          <span className="sr-only">Loading...</span>
          <div className="size-3 bg-gray-900 dark:bg-dark-300 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="size-3 bg-gray-900 dark:bg-dark-300 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="bg-gray-900 rounded-full dark:bg-dark-300 size-3 animate-bounce"></div>
        </div>
        <div className="flex items-center justify-center space-x-1">
          <span className="sr-only">Loading...</span>
          <div className="size-3 bg-primary-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="size-3 bg-primary-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="rounded-full bg-primary-500 size-3 animate-bounce"></div>
        </div>

        <div className="flex items-center justify-center space-x-1">
          <span className="sr-only">Loading...</span>
          <div className="size-3 bg-green-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="size-3 bg-primary-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="bg-purple-500 rounded-full size-3 animate-bounce"></div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default LoadingDots
