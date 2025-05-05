import React from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import BasicAvatar from '@src/views/uiElements/uiAvatar/BasicAvatar'
import ColoredAvatar from '@src/views/uiElements/uiAvatar/ColoredAvatar'
import GroupAvatar from '@src/views/uiElements/uiAvatar/GroupAvatar'
import IconAvatar from '@src/views/uiElements/uiAvatar/IconAvatar'
import RoundedAvatar from '@src/views/uiElements/uiAvatar/RoundedAvatar'
import RoundedTextAvatar from '@src/views/uiElements/uiAvatar/RoundedTextAvatar'
import TextAvatar from '@src/views/uiElements/uiAvatar/TextAvatar'

const Avatar = () => {
  return (
    <React.Fragment>
      <BreadCrumb title="Avatar" subTitle="UI" />
      <div className="grid grid-cols-12 gap-x-space">
        <BasicAvatar />
        <RoundedAvatar />
        <RoundedTextAvatar />
        <TextAvatar />
        <IconAvatar />
        <RoundedTextAvatar />
        <ColoredAvatar />
        <GroupAvatar />
      </div>
    </React.Fragment>
  )
}

export default Avatar
