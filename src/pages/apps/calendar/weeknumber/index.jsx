import React, { useEffect } from 'react'

import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import BreadCrumb from '@src/components/Common/BreadCrumb'

const CalendarWeekNumber = () => {
  useEffect(() => {
    document.title =
      'Week Number | Domiex - React JS Admin & Dashboard Template'
  }, [])
  return (
    <React.Fragment>
      <BreadCrumb title="Week Number" subTitle="Calendar" />
      <div className="card">
        <div className="card-body">
          <div id="weekNumberCalendar">
            <FullCalendar
              plugins={[interactionPlugin, dayGridPlugin]}
              initialView="dayGridMonth"
              timeZone="America/New_York"
              weekNumbers={true}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CalendarWeekNumber
