import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import BasicDrawer from '@views/uiElements/uiDrawer/basicDrawer'
import DrawerPosition from '@views/uiElements/uiDrawer/drawerPosition'
import SizeDrawer from '@views/uiElements/uiDrawer/sizeDrawer'

const Drawer = () => {
  useEffect(() => {
    document.title = 'Drawer | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Drawer" subTitle="UI" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Basic</h6>
          </div>
          <div className="card-body">
            <BasicDrawer />
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 card">
          <div className="card-header">
            <h6 className="card-title">Drawer Position</h6>
          </div>
          <div className="card-body">
            <DrawerPosition />
          </div>
        </div>

        <div className="col-span-12 md:col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Size Drawer</h6>
          </div>
          <div className="card-body">
            <SizeDrawer />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Drawer
