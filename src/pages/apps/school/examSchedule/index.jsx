import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import { LAYOUT_DIRECTION } from '@src/components/Constants/layout'
import ExamInformation from '@src/views/apps/school/examSchedule/examInformation'
import ExamScheduleList from '@src/views/apps/school/examSchedule/examScheduleList'
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'

const ExamSchedule = () => {
  const { layoutDirection } = useSelector((state) => state.Layout)

  useEffect(() => {
    document.title = 'Schedule | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Schedule" subTitle="Exam" />
      <ExamInformation />
      <ExamScheduleList />

      <Toaster
        position={'top-right'}
        reverseOrder={layoutDirection === LAYOUT_DIRECTION.RTL}
      />
    </React.Fragment>
  )
}

export default ExamSchedule
