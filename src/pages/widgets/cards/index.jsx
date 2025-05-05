import React, { useEffect } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import ClientInformation from '@views/widgets/cards/clientInformation'
import Employee from '@views/widgets/cards/employee'
import Facility from '@views/widgets/cards/facility'
import InChargeDoctor from '@views/widgets/cards/inChargeDoctor'
import Information from '@views/widgets/cards/information'
import InternsDoctors from '@views/widgets/cards/internsDoctors'
import PatientsList from '@views/widgets/cards/patients'
import PerformanceComponent from '@views/widgets/cards/performance'
import Schedule from '@views/widgets/cards/schedule'

import Widgets from '../../../views/widgets/cards/widgets'

const WidgetsCard = () => {
  useEffect(() => {
    document.title = 'Cards | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Cards" subTitle="Widgets" />
      <Information />
      <Facility />
      <ClientInformation />
      <Widgets />
      <PerformanceComponent />
      <Employee />
      <div className="grid grid-cols-12 gap-x-space">
        <Schedule />
        <InChargeDoctor />
        <PatientsList />
        <InternsDoctors />
      </div>
    </React.Fragment>
  )
}

export default WidgetsCard
