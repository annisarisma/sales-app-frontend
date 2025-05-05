import React, { useEffect } from 'react'

import UserProfileHeader from '@common/UserProfileHeader'

import UserActivityContent from './userActivity'

const UserActivity = () => {
  useEffect(() => {
    document.title =
      'User Activity | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <UserProfileHeader />
      <UserActivityContent />
    </React.Fragment>
  )
}
export default UserActivity
