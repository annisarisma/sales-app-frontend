import React, { useEffect } from 'react'

import AccountDeactivationModern from '@views/auth/accountDeactivation/accountDeactivationModern'

const AccountDeactivationModernPage = () => {
  useEffect(() => {
    document.title =
      'Account Deactivation | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <AccountDeactivationModern />
    </React.Fragment>
  )
}

export default AccountDeactivationModernPage
