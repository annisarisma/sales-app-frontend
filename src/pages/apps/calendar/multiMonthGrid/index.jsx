import React, { ReactElement, useEffect } from 'react'

import multiMonthPlugin from '@fullcalendar/multimonth'
import FullCalendar from '@fullcalendar/react'
import BreadCrumb from '@src/components/Common/BreadCrumb'
import Layout from '@src/layout/Layout'

const CalendarMultiMonthGrid = () => {
  useEffect(() => {
    document.title =
      'Multi-Month grid | Domiex - React JS Admin & Dashboard Template'
  }, [])
  return (
    <React.Fragment>
      <BreadCrumb title="Multi-Month grid" subTitle="Calendar" />
      <div className="card">
        <div className="card-body">
          <div id="multiMonthGridCalendar">
            <FullCalendar
              plugins={[multiMonthPlugin]}
              themeSystem="sketchy"
              initialView="multiMonthYear"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CalendarMultiMonthGrid
