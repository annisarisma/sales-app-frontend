import React, { useEffect } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import AnchorPlacement from '@views/uiAdvanced/uiAdvancedAnimation/anchorPlacement'
import DifferentSettingsExamplesAnimation from '@views/uiAdvanced/uiAdvancedAnimation/differentsettingsexamplesAnimation'
import FadeAnimation from '@views/uiAdvanced/uiAdvancedAnimation/fadeAnimation'
import FlipAnimation from '@views/uiAdvanced/uiAdvancedAnimation/flipAnimation'
import ZoomAnimation from '@views/uiAdvanced/uiAdvancedAnimation/zoomAnimation'

const AdvancedAnimation = () => {
  useEffect(() => {
    document.title = 'Animation | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Animation" subTitle="UI Advanced" />
      <FadeAnimation />
      <FlipAnimation />
      <ZoomAnimation />
      <DifferentSettingsExamplesAnimation />
      <AnchorPlacement />
    </React.Fragment>
  )
}

export default AdvancedAnimation
