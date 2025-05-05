import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import ButtonRounded from '@src/views/uiElements/uiButtons/buttonsRounded'
import ActiveStyleButtonCard from '@views/uiElements/uiButtons/activeStyle'
import BaseButtons from '@views/uiElements/uiButtons/baseButtons'
import ButtonIcon from '@views/uiElements/uiButtons/buttonsIcon'
import DButtonCard from '@views/uiElements/uiButtons/dButtonCard'
import DisabledButtons from '@views/uiElements/uiButtons/disabledButtons'
import HoverEffect from '@views/uiElements/uiButtons/hoverEffect'
import HoverEffectButtons from '@views/uiElements/uiButtons/hoverEffectButtons'
import IconButton from '@views/uiElements/uiButtons/iconButton'
import LoadingButtons from '@views/uiElements/uiButtons/loadingButtons'
import OutlineButtonCard from '@views/uiElements/uiButtons/outlineButtons'
import OutlineDashedButtonCard from '@views/uiElements/uiButtons/outlineDashed'
import SizeButton from '@views/uiElements/uiButtons/sizeButton'
import SoftButtonCard from '@views/uiElements/uiButtons/softButtons'

const Button = () => {
  useEffect(() => {
    document.title = 'Buttons | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Buttons" subTitle="UI" />
      <div className="grid grid-cols-12 gap-x-space">
        <BaseButtons />
        <OutlineButtonCard />
        <SoftButtonCard />
        <DButtonCard />
        <OutlineDashedButtonCard />
        <ActiveStyleButtonCard />
        <IconButton />
        <SizeButton />
        <LoadingButtons />
        <ButtonRounded />
        <HoverEffect />
        <ButtonIcon />
        <HoverEffectButtons />
        <DisabledButtons />
      </div>
    </React.Fragment>
  )
}

export default Button
