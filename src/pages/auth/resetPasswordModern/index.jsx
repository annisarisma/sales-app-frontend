import React, { useEffect } from 'react'

import { LAYOUT_DIRECTION } from '@src/components/Constants/layout'
import ResetPasswordModern from '@views/auth/resetPassword/resetPasswordModern'
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'

const ResetPasswordModernPage = () => {
  const { layoutDirection } = useSelector((state) => state.Layout)

  useEffect(() => {
    document.title =
      'Reset Password | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <ResetPasswordModern />

      <Toaster
        position={'top-right'}
        reverseOrder={layoutDirection === LAYOUT_DIRECTION.RTL}
      />
    </React.Fragment>
  )
}

export default ResetPasswordModernPage
