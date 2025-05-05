import React, { useEffect } from 'react'

import UserProfileHeader from '@common//UserProfileHeader'

import UserDocumentsContent from './userDocuments'

const UserDocuments = () => {
  useEffect(() => {
    document.title =
      'User Documents | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <UserProfileHeader />
      <UserDocumentsContent />
    </React.Fragment>
  )
}
export default UserDocuments
