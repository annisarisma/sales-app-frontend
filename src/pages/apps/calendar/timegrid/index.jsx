import React, { useEffect } from 'react'

import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import BreadCrumb from '@src/components/Common/BreadCrumb'

const CalendarTimeGrid = () => {
  useEffect(() => {
    document.title =
      'Time Grid View | Domiex - React JS Admin & Dashboard Template'
  }, [])
  return (
    <React.Fragment>
      <BreadCrumb title="Time Grid View" subTitle="Calendar" />
      <div className="card">
        <div className="card-body">
          <div id="listViewCalendar">
            <FullCalendar
              plugins={[timeGridPlugin]}
              initialView="timeGridWeek"
              timeZone="America/New_York"
              headerToolbar={{
                left: 'prev,next',
                center: 'title',
                right: 'timeGridWeek,timeGridDay',
              }}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CalendarTimeGrid
