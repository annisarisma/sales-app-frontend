import { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import LeavesList from '@src/views/apps/hospital/staffLleaves/leavesList'

const StaffLeave = () => {
  useEffect(() => {
    document.title =
      'Leave Management | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <div>
      <BreadCrumb title="Leave Management" subTitle="Staff" />
      <LeavesList />
    </div>
  )
}

export default StaffLeave
