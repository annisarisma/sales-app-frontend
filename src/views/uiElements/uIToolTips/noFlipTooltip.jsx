import React from 'react'

import { Tooltip } from 'react-tooltip'

const NoFlipTooltip = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-6 card">
        <div className="card-header">
          <h6 className="card-title">No Flip Tooltip</h6>
        </div>
        <div className="card-body">
          <div className="flex flex-wrap items-center gap-2">
            <div>
              <button
                className="btn btn-primary"
                data-tooltip-id="defaultTooltip1">
                No Flip
              </button>
              <Tooltip
                id="defaultTooltip1"
                place="left"
                content="I am a Tooltip"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default NoFlipTooltip
