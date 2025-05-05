import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import AnimationTabs from '@views/uiElements/uiTabs/animationTabs'
import BasicJustifyTab from '@views/uiElements/uiTabs/basicJustifyTab'
import BasicTab from '@views/uiElements/uiTabs/basicTab'
import IconTabs from '@views/uiElements/uiTabs/iconTabs'
import IconWithTextTabs from '@views/uiElements/uiTabs/iconwithTextTabs'
import PillJustifyTabs from '@views/uiElements/uiTabs/pillJustifyTabs'
import PillTabs from '@views/uiElements/uiTabs/pillTabs'

const Tabs = () => {
  useEffect(() => {
    document.title = 'Tabs | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Tabs" subTitle="UI" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 md:col-span-6">
          <div className="card">
            <div className="card-header">
              <h6 className="card-title">Basic</h6>
            </div>
            <div className="card-body">
              <BasicTab />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="card">
            <div className="card-header">
              <h6 className="card-title">Basic Justify</h6>
            </div>
            <div className="card-body">
              <BasicJustifyTab />
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6">
          <div className="card">
            <div className="card-header">
              <h6 className="card-title">Pill Tabs</h6>
            </div>
            <div className="card-body">
              <PillTabs />
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6">
          <div className="card">
            <div className="card-header">
              <h6 className="card-title">Pill Justify Tabs</h6>
            </div>
            <div className="card-body">
              <PillJustifyTabs />
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6">
          <div className="card">
            <div className="card-header">
              <h6 className="card-title">Icon with Animation Tabs</h6>
            </div>
            <div className="card-body">
              <IconTabs />
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6">
          <div className="card">
            <div className="card-header">
              <h6 className="card-title">Icon with Text Tabs</h6>
            </div>
            <div className="card-body">
              <IconWithTextTabs />
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6">
          <div className="card">
            <div className="card-header">
              <h6 className="card-title">Animation Tabs</h6>
            </div>
            <div className="card-body">
              <AnimationTabs />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Tabs
