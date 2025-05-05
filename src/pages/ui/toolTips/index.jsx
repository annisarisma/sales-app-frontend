import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import AnimationTooltip from '@views/uiElements/uIToolTips/animationTooltip'
import ArrowLessTooltip from '@views/uiElements/uIToolTips/arrowLessTooltip'
import CustomTooltip from '@views/uiElements/uIToolTips/customTooltip'
import DefaultToolTips from '@views/uiElements/uIToolTips/defaultTooltips'
import FollowCursor from '@views/uiElements/uIToolTips/followCursor'
import NoFlipTooltip from '@views/uiElements/uIToolTips/noFlipTooltip'
import PlacementTooltip from '@views/uiElements/uIToolTips/placementTooltip'

const Tooltips = () => {
  useEffect(() => {
    document.title =
      'Ui Tooltips | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="UI Tooltip" subTitle="UI" />
      <div className="grid grid-cols-12 gap-x-space">
        <DefaultToolTips />
        <FollowCursor />
        <ArrowLessTooltip />
        <NoFlipTooltip />
        <CustomTooltip />
        <AnimationTooltip />
        <PlacementTooltip />
      </div>
    </React.Fragment>
  )
}

export default Tooltips
