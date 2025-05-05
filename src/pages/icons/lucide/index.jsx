import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import ColorIcons from '@src/views/icons/iconLucide/colorIcons'
import DuotuneIcons from '@src/views/icons/iconLucide/duotuneIcons'
import LucideIcons from '@src/views/icons/iconLucide/lucideIcons'
import SizesIcons from '@src/views/icons/iconLucide/sizesIcons'
import StrokeWidth from '@src/views/icons/iconLucide/strokeWidth'

const Lucide = () => {
  useEffect(() => {
    document.title = 'Lucide | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Lucide" subTitle="Icons" />
      <div className="grid grid-cols-12 gap-x-space">
        <LucideIcons />
        <ColorIcons />
        <StrokeWidth />
        <SizesIcons />
        <DuotuneIcons />
      </div>
    </React.Fragment>
  )
}

export default Lucide
