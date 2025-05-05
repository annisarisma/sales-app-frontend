import React, { useEffect } from 'react'

import { LAYOUT_DIRECTION } from '@src/components/Constants/layout'
import ForgotPasswordModern from '@views/auth/forgotPassword/forgotPasswordModern'
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'

const ForgotPasswordModernPage = () => {
  const { layoutDirection } = useSelector((state) => state.Layout)

  useEffect(() => {
    document.title =
      'Forgot Password | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <ForgotPasswordModern />

      <Toaster
        position={'top-right'}
        reverseOrder={layoutDirection === LAYOUT_DIRECTION.RTL}
      />
    </React.Fragment>
  )
}

export default ForgotPasswordModernPage
