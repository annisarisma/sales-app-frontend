import React, { useEffect } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import HelpCenterPage from '@views/helpCenter/Index'

const HelpCenter = () => {
  useEffect(() => {
    document.title =
      'Help Center | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Help Center" subTitle="Pages" />
      <HelpCenterPage />
    </React.Fragment>
  )
}
export default HelpCenter
