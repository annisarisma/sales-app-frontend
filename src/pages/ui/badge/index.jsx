import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import BaseBadge from '@views/uiElements/uiBadge/baseBadge'
import ButtonBadge from '@views/uiElements/uiBadge/buttonBadge'
import CloseBadge from '@views/uiElements/uiBadge/closeBadge'
import InsideButtonBadge from '@views/uiElements/uiBadge/insideButtonBadge'
import OutlineBadge from '@views/uiElements/uiBadge/outlineBadge'
import RoundedBadge from '@views/uiElements/uiBadge/roundedBadge'
import SoftBadges from '@views/uiElements/uiBadge/softBadge'
import SolidBadges from '@views/uiElements/uiBadge/solidBadge'
import SquareBadge from '@views/uiElements/uiBadge/squareBadge'

const Badge = () => {
  useEffect(() => {
    document.title = 'Badges | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Badge" subTitle="UI" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Base Badge</h6>
          </div>
          <div className="card-body">
            <BaseBadge />
          </div>
        </div>

        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Outline Badge</h6>
          </div>
          <div className="card-body">
            <OutlineBadge />
          </div>
        </div>

        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Soft Badge</h6>
          </div>
          <div className="card-body">
            <SoftBadges />
          </div>
        </div>

        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Solid Badge</h6>
          </div>
          <div className="card-body">
            <SolidBadges />
          </div>
        </div>

        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Close Badge</h6>
          </div>
          <div className="card-body">
            <CloseBadge />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Square Badge</h6>
          </div>
          <div className="card-body">
            <SquareBadge />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">rounded-sm Badge</h6>
          </div>
          <div className="card-body">
            <RoundedBadge />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Button Badge</h6>
          </div>
          <div className="card-body">
            <ButtonBadge />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Inside Button Badge</h6>
          </div>
          <div className="card-body">
            <InsideButtonBadge />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Badge
