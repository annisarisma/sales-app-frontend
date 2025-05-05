import React, { useEffect } from 'react'

import listPlugin from '@fullcalendar/list'
import FullCalendar from '@fullcalendar/react'
import BreadCrumb from '@src/components/Common/BreadCrumb'

const CalendarListView = () => {
  const events = [
    { title: 'Meeting', start: new Date() },
    { title: 'Update Weekly', start: new Date() },
  ]

  useEffect(() => {
    document.title = 'List View | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="List View" subTitle="Calendar" />
      <div className="card">
        <div className="card-body">
          <div id="listViewCalendar">
            <FullCalendar
              plugins={[listPlugin]}
              initialView="listWeek"
              editable={true}
              events={events}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CalendarListView
