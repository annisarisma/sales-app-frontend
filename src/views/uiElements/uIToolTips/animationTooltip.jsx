import React from 'react'

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const AnimationTooltip = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-6 card">
        <div className="card-header">
          <h6 className="card-title">Animation Tooltip</h6>
        </div>
        <div className="card-body">
          <div className="flex flex-wrap items-center gap-2">
            <div>
              <button
                className="btn btn-purple tooltip-scale"
                data-tip
                data-for="scaleTooltip"
                data-tooltip-id="scaleTooltip">
                Scale
              </button>
              <Tooltip id="scaleTooltip" place="top" className="tooltip-scale">
                I am a Tooltip
              </Tooltip>
            </div>
            <div>
              <button
                className="btn btn-purple tooltip-scale-subtle"
                data-tip
                data-for="scaleSubtleTooltip"
                data-tooltip-id="scaleSubtleTooltip">
                Scale-subtle
              </button>
              <Tooltip
                id="scaleSubtleTooltip"
                place="top"
                className="tooltip-scale-subtle">
                I am a Tooltip
              </Tooltip>
            </div>
            <div>
              <button
                className="btn btn-purple tooltip-scale-extreme"
                data-tip
                data-for="scaleExtremeTooltip"
                data-tooltip-id="scaleExtremeTooltip">
                Scale-extreme
              </button>
              <Tooltip
                id="scaleExtremeTooltip"
                place="top"
                className="tooltip-scale-extreme">
                I am a Tooltip
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AnimationTooltip
