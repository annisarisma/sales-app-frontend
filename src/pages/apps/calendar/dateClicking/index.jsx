import React, { useEffect } from 'react'

import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import BreadCrumb from '@src/components/Common/BreadCrumb'

const CalendarDateClicking = () => {
  useEffect(() => {
    document.title =
      'Date Clicking & Selecting | Domiex - React JS Admin & Dashboard Template'
  }, [])

  // Handle date click event
  const handleDateClick = (info) => {
    alert('clicked ' + info.dateStr)
  }

  // Handle select event (when date range is selected)
  const handleSelect = (info) => {
    alert('selected ' + info.startStr + ' to ' + info.endStr)
  }

  return (
    <React.Fragment>
      <BreadCrumb title="Date Clicking & Selecting" subTitle="Calendar" />
      <div className="card">
        <div className="card-body">
          <div id="dateClickingSelectingCalendar">
            <FullCalendar
              plugins={[interactionPlugin, dayGridPlugin, timeGridPlugin]}
              selectable={true}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay',
              }}
              dateClick={handleDateClick}
              select={handleSelect}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CalendarDateClicking
