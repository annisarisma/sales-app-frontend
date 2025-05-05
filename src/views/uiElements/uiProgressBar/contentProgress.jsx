import React from 'react'

const ContentProgress = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col gap-3">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h6 className="text-xs grow">Project Workforce</h6>
            <h6 className="text-xs font-semibold text-red-500">32.21%</h6>
          </div>
          <div className="progress-bar progress-1">
            <div className="w-1/2 text-white progress-bar-wrap bg-primary-500"></div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h6 className="text-xs grow">Critical Hours</h6>
            <h6 className="text-xs font-semibold text-red-500">64%</h6>
          </div>
          <div className="progress-bar progress-1">
            <div className="w-[64%] text-white progress-bar-wrap bg-green-500"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default ContentProgress
