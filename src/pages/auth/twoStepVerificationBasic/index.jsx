import React, { useEffect } from 'react'

import { LAYOUT_DIRECTION } from '@src/components/Constants/layout'
import TwoStepVerificationBasic from '@views/auth/twoStepVerification/twoStepVerificationBasic'
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'

const TwoStepVerificationBasicPage = () => {
  const { layoutDirection } = useSelector((state) => state.Layout)

  useEffect(() => {
    document.title =
      'Two Step Verification | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <TwoStepVerificationBasic formId="otp-form1" />

      <Toaster
        position={'top-right'}
        reverseOrder={layoutDirection === LAYOUT_DIRECTION.RTL}
      />
    </React.Fragment>
  )
}

export default TwoStepVerificationBasicPage
