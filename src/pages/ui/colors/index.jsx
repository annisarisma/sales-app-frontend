import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import ColorsShades from '@views/uiElements/uiColors/colorsShades'

const Colors = () => {
  useEffect(() => {
    document.title = 'Colors | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Colors" subTitle="UI" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Colors Shades</h6>
          </div>
          <div className="card-body">
            <ColorsShades />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Colors
