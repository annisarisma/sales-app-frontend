import React, { useEffect } from 'react'

import AccountDeactivationBasic from '@views/auth/accountDeactivation/accountDeactivationBasic'

const AccountDeactivationBasicPage = () => {
  useEffect(() => {
    document.title =
      'Account Deactivation | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <AccountDeactivationBasic />
    </React.Fragment>
  )
}

export default AccountDeactivationBasicPage
