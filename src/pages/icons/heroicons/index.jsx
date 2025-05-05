import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import HeroiconsIcons from '@src/views/icons/iconsHeroicons/heroiconsIcons'
import OutlineSolidIcons from '@src/views/icons/iconsHeroicons/outline&SolidIcons'
import SizesIcons from '@src/views/icons/iconsHeroicons/sizesIcons'

const Heroiocns = () => {
  useEffect(() => {
    document.title = 'Heroicons | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Heroicons" subTitle="Icons" />
      <HeroiconsIcons />
      <OutlineSolidIcons />
      <SizesIcons />
    </React.Fragment>
  )
}
export default Heroiocns
