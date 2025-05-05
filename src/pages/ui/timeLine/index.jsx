import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import BasicTimeline from '@views/uiElements/uiTimeline/basicTimeline'
import ChangLogTimeline from '@views/uiElements/uiTimeline/changLogTimeline'
import ColoredTimeline from '@views/uiElements/uiTimeline/coloredTimeline'
import SquareTimeline from '@views/uiElements/uiTimeline/squareTimeline'

const TimeLine = () => {
  useEffect(() => {
    document.title = 'Timeline | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Timeline" subTitle="UI" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-4 card">
          <div className="card-header">
            <h6 className="card-title">Basic Timeline</h6>
          </div>
          <div className="card-body">
            <BasicTimeline />
          </div>
        </div>

        <div className="col-span-4 card">
          <div className="card-header">
            <h6 className="card-title">Square Timeline</h6>
          </div>
          <div className="card-body">
            <SquareTimeline />
          </div>
        </div>

        <div className="col-span-4 card">
          <div className="card-header">
            <h6 className="card-title">Colored Timeline</h6>
          </div>
          <div className="card-body">
            <ColoredTimeline />
          </div>
        </div>

        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">ChangLog Timeline</h6>
          </div>
          <div className="card-body">
            <ChangLogTimeline />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default TimeLine
