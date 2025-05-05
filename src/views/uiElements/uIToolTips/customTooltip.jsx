import React, { useState } from 'react'

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const CustomTooltip = () => {
  const [message, setMessage] = useState('Hello, world!')

  return (
    <React.Fragment>
      <div className="col-span-12 md:col-span-6 card">
        <div className="card-header">
          <h6 className="card-title">Custom HTML Input with Tooltip</h6>
        </div>
        <div className="card-body">
          <div>
            <input
              type="text"
              className="form-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="mt-3 btn btn-primary"
              data-tip
              data-for="dynamicHtmlTooltip"
              data-tooltip-id="dynamicHtmlTooltip2">
              Dynamic HTML Content
            </button>
            <Tooltip
              id="dynamicHtmlTooltip2"
              place="top"
              className="tooltip-custom">
              <p className="text-red-500">{message}</p>
            </Tooltip>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CustomTooltip
