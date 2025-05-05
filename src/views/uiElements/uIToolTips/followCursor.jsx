import React from 'react'

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const FollowCursor = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-6 card">
        <div className="card-header">
          <h6 className="card-title">Follow Cursor</h6>
        </div>
        <div className="card-body">
          <div className="flex flex-wrap items-center gap-2">
            <div>
              <button
                className="btn btn-green"
                data-tip
                data-for="defaultTooltip"
                data-tooltip-id="defaultTooltip">
                Default
              </button>
              <Tooltip
                id="defaultTooltip"
                place="top"
                content="I am a Tooltip"
              />
            </div>
            <div>
              <button
                className="btn btn-green"
                data-tip
                data-for="horizontalTooltip"
                data-tooltip-id="horizontalTooltip">
                Horizontal
              </button>
              <Tooltip
                id="horizontalTooltip"
                place="top"
                content="I am a Tooltip"
              />
            </div>
            <div>
              <button
                className="btn btn-green"
                data-tip
                data-for="initialTooltip"
                data-tooltip-id="initialTooltip">
                Initial
              </button>
              <Tooltip
                id="initialTooltip"
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

export default FollowCursor
