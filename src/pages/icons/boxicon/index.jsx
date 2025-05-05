import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import BoxIcons from '@src/views/icons/iconsBoxicon/boxIcons'
import ColorIcons from '@src/views/icons/iconsBoxicon/colorIcons'
import SizesIcons from '@src/views/icons/iconsBoxicon/sizesIcons'
import SVGCode from '@src/views/icons/iconsBoxicon/svgCode'

const Boxicon = () => {
  useEffect(() => {
    document.title = 'Boxicon | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Boxicon" subTitle="Icons" />
      <div className="grid grid-cols-12 gap-x-space">
        <BoxIcons />
        <ColorIcons />
        <SVGCode />
        <SizesIcons />
      </div>
    </React.Fragment>
  )
}

export default Boxicon
