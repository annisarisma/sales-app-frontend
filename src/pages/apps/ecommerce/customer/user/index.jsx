import React, { useEffect } from 'react'

import UserProfileHeader from '@src/components/Common/UserProfileHeader'
import UserProfileOverView from '@src/components/Common/UserProfileOverView'

const User = () => {
  useEffect(() => {
    document.title =
      'User Overview | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <UserProfileHeader />
      <UserProfileOverView />
    </React.Fragment>
  )
}

export default User
