import React from 'react'

import { Tooltip } from 'react-tooltip'

const ArrowLessTooltip = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-6 card">
        <div className="card-header">
          <h6 className="card-title">Arrowless Tooltip</h6>
        </div>
        <div className="card-body">
          <div className="flex flex-wrap items-center gap-2">
            <div>
              <button
                className="btn btn-purple"
                data-tooltip-id="defaultTooltip">
                Arrowless
              </button>
              <Tooltip
                id="defaultTooltip"
                place="top"
                content="I am a Tooltip"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default ArrowLessTooltip
