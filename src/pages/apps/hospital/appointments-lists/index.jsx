import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import { LAYOUT_DIRECTION } from '@src/components/Constants/layout'
import AppointmentsInformation from '@src/views/apps/hospital/appointmentsLists/appointmentsInformation'
import AppointmentsList from '@src/views/apps/hospital/appointmentsLists/appointmentsList'
import TodayAppointments from '@src/views/apps/hospital/appointmentsLists/todayAppointments'
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'

const AppointmentsLists = () => {
  const { layoutDirection } = useSelector((state) => state.Layout)

  useEffect(() => {
    document.title = 'List View | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="List View" subTitle="Appointments" />
      <AppointmentsInformation />
      <TodayAppointments />
      <AppointmentsList />

      <Toaster
        position="top-right"
        reverseOrder={layoutDirection === LAYOUT_DIRECTION.RTL}
      />
    </React.Fragment>
  )
}

export default AppointmentsLists
