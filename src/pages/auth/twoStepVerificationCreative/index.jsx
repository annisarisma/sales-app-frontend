import React, { useEffect } from 'react'

import { LAYOUT_DIRECTION } from '@src/components/Constants/layout'
import TwoStepVerificationCreative from '@views/auth/twoStepVerification/twoStepVerificationCreative'
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'

const TwoStepVerificationCreativePage = () => {
  const { layoutDirection } = useSelector((state) => state.Layout)

  useEffect(() => {
    document.title =
      'Two Step Verification | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <TwoStepVerificationCreative formId="otp-form1" />

      <Toaster
        position={'top-right'}
        reverseOrder={layoutDirection === LAYOUT_DIRECTION.RTL}
      />
    </React.Fragment>
  )
}

export default TwoStepVerificationCreativePage
