import React, { useEffect } from 'react'

import UserProfileHeader from '@common//UserProfileHeader'
import UserProfileOverView from '@common//UserProfileOverView'

const UserPage = () => {
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
export default UserPage
