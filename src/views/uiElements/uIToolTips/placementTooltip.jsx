import React from 'react'

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const PlacementTooltip = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 card">
        <div className="card-header">
          <h6 className="card-title">Placement Tooltip</h6>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
            {/* Top Placement */}
            <div>
              <button
                className="w-full btn btn-purple"
                data-tip
                data-for="topTooltip"
                data-tooltip-id="topTooltip">
                Top
              </button>
              <Tooltip id="topTooltip" place="top" className="tooltip-custom">
                I am a Tooltip
              </Tooltip>
            </div>

            {/* Top Start Placement */}
            <div>
              <button
                className="w-full btn btn-purple"
                data-tip
                data-for="topStartTooltip"
                data-tooltip-id="topStartTooltip">
                Top Start
              </button>
              <Tooltip
                id="topStartTooltip"
                place="top-start"
                className="tooltip-custom tooltip-top-start">
                I am a Tooltip
              </Tooltip>
            </div>

            {/* Top End Placement */}
            <div>
              <button
                className="w-full btn btn-purple"
                data-tip
                data-for="topEndTooltip"
                data-tooltip-id="topEndTooltip">
                Top End
              </button>
              <Tooltip
                id="topEndTooltip"
                place="top-end"
                className="tooltip-custom tooltip-top-end">
                I am a Tooltip
              </Tooltip>
            </div>

            {/* Right Placement */}
            <div>
              <button
                className="w-full btn btn-purple"
                data-tip
                data-for="rightTooltip"
                data-tooltip-id="rightTooltip">
                Right
              </button>
              <Tooltip
                id="rightTooltip"
                place="right"
                className="tooltip-custom">
                I am a Tooltip
              </Tooltip>
            </div>

            {/* Right Start Placement */}
            <div>
              <button
                className="w-full btn btn-purple"
                data-tip
                data-for="rightStartTooltip"
                data-tooltip-id="rightStartTooltip">
                Right Start
              </button>
              <Tooltip
                id="rightStartTooltip"
                place="right"
                className="tooltip-custom tooltip-right-start">
                I am a Tooltip
              </Tooltip>
            </div>

            {/* Right End Placement */}
            <div>
              <button
                className="w-full btn btn-purple"
                data-tip
                data-for="rightEndTooltip"
                data-tooltip-id="rightEndTooltip1">
                Right End
              </button>
              <Tooltip
                id="rightEndTooltip1"
                place="right-end"
                className="tooltip-custom tooltip-right-end">
                I am a Tooltip
              </Tooltip>
            </div>

            {/* Bottom Placement */}
            <div>
              <button
                className="w-full btn btn-purple"
                data-tip
                data-for="bottomTooltip"
                data-tooltip-id="bottomTooltip">
                Bottom
              </button>
              <Tooltip
                id="bottomTooltip"
                place="bottom"
                className="tooltip-custom">
                I am a Tooltip
              </Tooltip>
            </div>

            {/* Bottom Start Placement */}
            <div>
              <button
                className="w-full btn btn-purple"
                data-tip
                data-for="bottomStartTooltip"
                data-tooltip-id="bottomStartTooltip">
                Bottom Start
              </button>
              <Tooltip
                id="bottomStartTooltip"
                place="bottom-start"
                className="tooltip-custom tooltip-bottom-start">
                I am a Tooltip
              </Tooltip>
            </div>

            {/* Bottom End Placement */}
            <div>
              <button
                className="w-full btn btn-purple"
                data-tip
                data-for="bottomEndTooltip"
                data-tooltip-id="bottomEndTooltip">
                Bottom End
              </button>
              <Tooltip
                id="bottomEndTooltip"
                place="bottom-end"
                className="tooltip-custom tooltip-bottom-end">
                I am a Tooltip
              </Tooltip>
            </div>

            {/* Left Placement */}
            <div>
              <button
                className="w-full btn btn-purple"
                data-tip
                data-for="leftTooltip"
                data-tooltip-id="leftTooltip3">
                Left
              </button>
              <Tooltip
                id="leftTooltip3"
                place="right"
                className="tooltip-custom">
                I am a Tooltip
              </Tooltip>
            </div>

            {/* Left Start Placement */}
            <div>
              <button
                className="w-full btn btn-purple"
                data-tip
                data-for="leftStartTooltip"
                data-tooltip-id="leftStartTooltip">
                Left Start
              </button>
              <Tooltip
                id="leftStartTooltip"
                place="left"
                className="tooltip-custom tooltip-left-start">
                I am a Tooltip
              </Tooltip>
            </div>

            {/* Left End Placement */}
            <div>
              <button
                className="w-full btn btn-purple"
                data-tip
                data-for="leftEndTooltip"
                data-tooltip-id="leftEndTooltip">
                Left End
              </button>
              <Tooltip
                id="leftEndTooltip"
                place="right"
                className="tooltip-custom tooltip-left-end">
                I am a Tooltip
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default PlacementTooltip
