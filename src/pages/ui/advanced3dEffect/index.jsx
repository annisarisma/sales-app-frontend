import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import Effect3D from '@views/uiAdvanced/uiAdvanced3d/effect3D'

const AdvancedEffect = () => {
  useEffect(() => {
    document.title = '3D Effect | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="3D Effect" subTitle="UI Advanced" />
      <div className="grid grid-cols-12 gap-x-space">
        <Effect3D />
      </div>
    </React.Fragment>
  )
}

export default AdvancedEffect
