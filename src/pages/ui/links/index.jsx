import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import BasicLinks from '@views/uiElements/uiLinks/basicLinks'
import ColoredLinks from '@views/uiElements/uiLinks/coloredLinks'
import HoverLinks from '@views/uiElements/uiLinks/hoverLinks'
import IconLinks from '@views/uiElements/uiLinks/iconLinks'
import UnderlineColored from '@views/uiElements/uiLinks/underlineColored'
import UnderlineHover from '@views/uiElements/uiLinks/underlineHover'
import UnderlineHoverColored from '@views/uiElements/uiLinks/underlineHoverColored'
import UnderlineLinks from '@views/uiElements/uiLinks/underlineLinks'

const Links = () => {
  useEffect(() => {
    document.title = 'Links | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="UI Links" subTitle="UI" />
      <div className="grid grid-cols-12 gap-x-space">
        <BasicLinks />
        <UnderlineLinks />
        <UnderlineHover />
        <HoverLinks />
        <ColoredLinks />
        <UnderlineColored />
        <UnderlineHoverColored />
        <IconLinks />
      </div>
    </React.Fragment>
  )
}

export default Links
