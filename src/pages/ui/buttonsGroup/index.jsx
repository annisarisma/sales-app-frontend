import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import HorizontalGroup from '@views/uiElements/uiButtonsGroup/horizontalGroup'
import VerticalGroup from '@views/uiElements/uiButtonsGroup/verticalGroup'

const ButtonsGroup = () => {
  useEffect(() => {
    document.title =
      'Buttons Group | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Buttons Group" subTitle="UI" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Horizontal Group</h6>
          </div>
          <div className="card-body">
            <HorizontalGroup />
          </div>
        </div>

        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Vertical Group</h6>
          </div>
          <div className="card-body">
            <VerticalGroup />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ButtonsGroup
