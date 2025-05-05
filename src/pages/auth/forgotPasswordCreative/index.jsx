import React, { useEffect } from 'react'

import { LAYOUT_DIRECTION } from '@src/components/Constants/layout'
import ForgotPasswordCreative from '@views/auth/forgotPassword/forgotPasswordCreative'
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'

const ForgotPasswordCreativePage = () => {
  const { layoutDirection } = useSelector((state) => state.Layout)

  useEffect(() => {
    document.title =
      'Forgot Password | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <ForgotPasswordCreative />

      <Toaster
        position={'top-right'}
        reverseOrder={layoutDirection === LAYOUT_DIRECTION.RTL}
      />
    </React.Fragment>
  )
}

export default ForgotPasswordCreativePage
