import React, { useEffect } from 'react'

import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import BreadCrumb from '@src/components/Common/BreadCrumb'

const CalendarDateNavLink = () => {
  useEffect(() => {
    document.title =
      'Date Nav Link | Domiex - React JS Admin & Dashboard Template'
  }, [])
  return (
    <React.Fragment>
      <BreadCrumb title="Date Nav Link" subTitle="Calendar" />
      <div className="card">
        <div className="card-body">
          <div id="dateNavLinkCalendar">
            <FullCalendar
              plugins={[interactionPlugin, dayGridPlugin, timeGridPlugin]}
              editable={true}
              navLinks={true}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay',
              }}
              events="https://fullcalendar.io/api/demo-feeds/events.json?single-day&for-resource-timeline"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CalendarDateNavLink
