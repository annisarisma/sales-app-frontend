import React, { useEffect, useRef } from 'react'

import dayGridPlugin from '@fullcalendar/daygrid'
import FullCalendar from '@fullcalendar/react'
import BreadCrumb from '@src/components/Common/BreadCrumb'

const CalendarDayView = () => {
  const calendarRef = useRef(null)

  useEffect(() => {
    document.title =
      'Day Grid View | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Day Grid View" subTitle="Calendar" />
      <div className="card">
        <div className="card-body">
          <div id="dayGridViewCalendar">
            <FullCalendar
              ref={calendarRef}
              plugins={[dayGridPlugin]}
              initialView="dayGridWeek"
              timeZone="America/New_York"
              headerToolbar={{
                left: 'prev,next',
                center: 'title',
                right: 'dayGridWeek,dayGridDay',
              }}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CalendarDayView
