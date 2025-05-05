import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import AttendanceList from '@src/views/apps/hospital/staffAttendance/attendanceList'
import Information from '@src/views/apps/hospital/staffAttendance/information'

const StaffAttendance = () => {
  useEffect(() => {
    document.title = 'Attendance | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Attendance" subTitle="Staff" />
      <div className="grid grid-cols-12 gap-x-space">
        <Information />
        <AttendanceList />
      </div>
    </React.Fragment>
  )
}

export default StaffAttendance
