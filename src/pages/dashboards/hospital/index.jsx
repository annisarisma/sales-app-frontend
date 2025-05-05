import React, { useEffect } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import AppointmentRequest from '@views/dashboards/hospitalDashboard/appointmentRequest'
import BirthAndDeathAnalytics from '@views/dashboards/hospitalDashboard/birthAndDeathAnalytics'
import PatientData from '@views/dashboards/hospitalDashboard/patientData'
import PatientVisitDepartment from '@views/dashboards/hospitalDashboard/patientVisitDepartment'
import PatientsData from '@views/dashboards/hospitalDashboard/patientsData'
import PatientsHistory from '@views/dashboards/hospitalDashboard/patientsHistory'
import RoomsAnalytics from '@views/dashboards/hospitalDashboard/roomsAnalytics'
import SummaryTreatment from '@views/dashboards/hospitalDashboard/summaryTreatment'
import UpcomingConsultation from '@views/dashboards/hospitalDashboard/upcomingConsultation'

const Hospital = () => {
  useEffect(() => {
    document.title = 'Hospital | Domiex - React JS Admin & Dashboard Template'
  }, [])
  return (
    <React.Fragment>
      <BreadCrumb title={'Hospital'} subTitle={'Dashboards'} />
      <div className="grid grid-cols-12 gap-x-space">
        <PatientData />
        <PatientVisitDepartment />
        <AppointmentRequest />
        <PatientsHistory />
        <UpcomingConsultation />
        <BirthAndDeathAnalytics />
        <RoomsAnalytics />
        <SummaryTreatment />
        <PatientsData />
      </div>
    </React.Fragment>
  )
}
export default Hospital
