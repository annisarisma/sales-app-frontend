import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import AttendanceList from '@src/views/apps/school/studentsAttendances/attendanceList'
import StudentsAttendancesInfo from '@src/views/apps/school/studentsAttendances/studentsAttendancesInfo'

const StudentsAttendances = () => {
  useEffect(() => {
    document.title = 'Students | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Students" subTitle="Attendances" />
      <StudentsAttendancesInfo />
      <AttendanceList />
    </React.Fragment>
  )
}

export default StudentsAttendances
