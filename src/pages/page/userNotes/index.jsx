import React, { useEffect } from 'react'

import UserProfileHeader from '@common//UserProfileHeader'

import UserNotesContent from './userNotes'

const UserNotes = () => {
  useEffect(() => {
    document.title = 'User Notes | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <UserProfileHeader />
      <UserNotesContent />
    </React.Fragment>
  )
}
export default UserNotes
