import React, { useEffect } from 'react'

import UserProfileHeader from '@common//UserProfileHeader'

import UserFollowersContent from './userFollowers'

const UserFollowers = () => {
  useEffect(() => {
    document.title =
      'User Followers | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <UserProfileHeader />
      <UserFollowersContent />
    </React.Fragment>
  )
}
export default UserFollowers
