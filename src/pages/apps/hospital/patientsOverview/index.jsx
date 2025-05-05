import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import { LAYOUT_DIRECTION } from '@src/components/Constants/layout'
import AppointmentsHistory from '@src/views/apps/hospital/patientsOverview/appointmentsHistory'
import InsuranceOverview from '@src/views/apps/hospital/patientsOverview/insuranceOverview'
import MedicineHistory from '@src/views/apps/hospital/patientsOverview/medicineHistory'
import Overview from '@src/views/apps/hospital/patientsOverview/overview'
import Timeline from '@src/views/apps/hospital/patientsOverview/timeline'
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'

import Reports from '../../../../views/apps/hospital/patientsOverview/reports'

const PatientsOverview = () => {
  const { layoutDirection } = useSelector((state) => state.Layout)

  useEffect(() => {
    document.title = 'Overview | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Overview" subTitle="Patients" />
      <div className="grid grid-cols-12 gap-x-space">
        <Overview />
        <Timeline />
        <InsuranceOverview />
        <Reports />
        <MedicineHistory />
        <AppointmentsHistory />
        <Toaster
          position="top-right"
          reverseOrder={layoutDirection === LAYOUT_DIRECTION.RTL}
        />
      </div>
    </React.Fragment>
  )
}

export default PatientsOverview
