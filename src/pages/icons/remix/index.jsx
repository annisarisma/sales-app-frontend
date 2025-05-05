import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import ColorIcons from '@src/views/icons/iconsRemix/colorIconss'
import RemixIcons from '@src/views/icons/iconsRemix/remixIcons'
import SizesIcons from '@src/views/icons/iconsRemix/sizesIcons'
import SVGCode from '@src/views/icons/iconsRemix/svgCode'

const Remix = () => {
  useEffect(() => {
    document.title = 'Remix | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Remix" subTitle="Icons" />
      <div className="grid grid-cols-12 gap-x-space">
        <RemixIcons />
        <ColorIcons />
        <SVGCode />
        <SizesIcons />
      </div>
    </React.Fragment>
  )
}

export default Remix
