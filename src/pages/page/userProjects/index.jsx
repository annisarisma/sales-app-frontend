import React, { useEffect } from 'react'

import UserProfileHeader from '@common//UserProfileHeader'

import UserProjectsContent from './userProjects'

const UserProjects = () => {
  useEffect(() => {
    document.title =
      'User Projects | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <UserProfileHeader />
      <UserProjectsContent />
    </React.Fragment>
  )
}
export default UserProjects
