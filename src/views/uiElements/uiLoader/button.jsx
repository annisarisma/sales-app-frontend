import React from 'react'

import { BellRing, Facebook } from 'lucide-react'

const Button = () => {
  return (
    <React.Fragment>
      <div className="flex flex-wrap gap-4">
        <div className="relative">
          <button className="flex items-center gap-2 text-white bg-primary-500 border-primary-500 btn hover:bg-primary-600 hover:text-white hover:border-primary-600 focus:bg-primary-600 focus:text-white focus:border-primary-600">
            <i className="ri-facebook-fill text-[20px]"></i> Facebook
          </button>
          <div className="absolute top-0 right-0 w-3 h-3 -mt-1 -mr-1 bg-red-500 rounded-full animate-ping"></div>
          <div className="absolute top-0 right-0 w-3 h-3 -mt-1 -mr-1 bg-red-500 rounded-full"></div>
        </div>
        <div className="relative">
          <button className="flex items-center gap-2 text-white bg-purple-500 border-purple-500 btn hover:bg-purple-600 hover:text-white hover:border-purple-600 focus:bg-purple-600 focus:text-white focus:border-purple-600">
            <BellRing className="size-4" /> Notification
          </button>
          <div className="absolute top-0 right-0 w-3 h-3 -mt-1 -mr-1 bg-green-500 rounded-full animate-ping"></div>
          <div className="absolute top-0 right-0 w-3 h-3 -mt-1 -mr-1 bg-green-500 rounded-full"></div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Button
