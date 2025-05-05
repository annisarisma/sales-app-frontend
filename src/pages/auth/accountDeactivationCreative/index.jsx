import React, { useEffect } from 'react'

import AccountDeactivationCreative from '@views/auth/accountDeactivation/accountDeactivationCreative'

const AccountDeactivationCreativePage = () => {
  useEffect(() => {
    document.title =
      'Account Deactivation | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <AccountDeactivationCreative />
    </React.Fragment>
  )
}

export default AccountDeactivationCreativePage
