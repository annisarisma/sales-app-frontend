import React from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import UserProfileHeader from '@src/components/Common/UserProfileHeader'
import UserProfileOverView from '@src/components/Common/UserProfileOverView'

const OverView = () => {
  return (
    <React.Fragment>
      <BreadCrumb title="Overview" subTitle="User" />

      {/* user profile header */}
      <UserProfileHeader />

      {/* user profile */}
      <UserProfileOverView />
    </React.Fragment>
  )
}

export default OverView
