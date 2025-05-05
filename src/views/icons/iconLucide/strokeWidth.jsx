import React from 'react'

import { Box } from 'lucide-react'

const StrokeWidth = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-6 card">
        <div className="card-header">
          <h6 className="card-title">Stroke Width</h6>
        </div>
        <div className="card-body">
          <div className="*:size-10 *:flex *:items-center *:justify-center flex items-center *:border *:border-gray-200 dark:*:border-dark-800 gap-2 *:rounded-md">
            <div>
              <Box className="stroke-1 size-5 text-primary-500" />
            </div>
            <div>
              <Box className="stroke-2 size-5 text-primary-500" />
            </div>
            <div>
              <Box className="stroke-3 size-5 text-primary-500" />
            </div>
            <div>
              <Box className="stroke-4 size-5 text-primary-500" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default StrokeWidth
