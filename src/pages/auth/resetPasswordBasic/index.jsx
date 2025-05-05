import React, { useEffect } from 'react'

import { LAYOUT_DIRECTION } from '@src/components/Constants/layout'
import ResetPasswordBasic from '@views/auth/resetPassword/resetPasswordBasic'
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'

const ResetPasswordBasicPage = () => {
  const { layoutDirection } = useSelector((state) => state.Layout)

  useEffect(() => {
    document.title =
      'Reset Password | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <ResetPasswordBasic />

      <Toaster
        position={'top-right'}
        reverseOrder={layoutDirection === LAYOUT_DIRECTION.RTL}
      />
    </React.Fragment>
  )
}

export default ResetPasswordBasicPage
