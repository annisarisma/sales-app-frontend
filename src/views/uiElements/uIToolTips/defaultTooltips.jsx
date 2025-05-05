import React from 'react'

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const DefaultToolTips = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-6 card">
        <div className="card-header">
          <h6 className="card-title">Default Behaviour Tooltip</h6>
        </div>
        <div className="card-body">
          <div className="flex flex-wrap items-center gap-2">
            <button
              className="btn btn-primary"
              data-tip="Hover for Button!"
              data-for="hoverTooltip"
              data-tooltip-id="hoverTooltip">
              Hover for Button!
            </button>
            <Tooltip id="hoverTooltip" place="top" content="Hover Tooltip" />
            <button
              className="btn btn-primary"
              data-tip="Click Tooltip"
              data-for="clickTooltip"
              data-tooltip-id="clickTooltip">
              Click Me
            </button>
            <Tooltip
              id="clickTooltip"
              place="top"
              content="Click Tooltip"
              openOnClick={true}
            />

            <button
              className="btn btn-primary"
              data-tip="Mouseenter Tooltip"
              data-for="mouseenterTooltip"
              data-tooltip-id="mouseenterTooltip">
              Mouseenter
            </button>
            <Tooltip
              id="mouseenterTooltip"
              place="top"
              content="Mouseenter Tooltip"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default DefaultToolTips
