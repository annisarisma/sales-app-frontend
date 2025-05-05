import React, { useEffect } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import BookAppointment from '@views/widgets/banners/bookAppointment'
import CustomerSupport from '@views/widgets/banners/customerSupport'
import SimpleInformation from '@views/widgets/banners/simpleInformation'

const WidgetsBanners = () => {
  useEffect(() => {
    document.title = 'Banners | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Banners" subTitle="Widgets" />
      <div className="grid grid-cols-12 gap-x-space">
        <CustomerSupport />
        <SimpleInformation />
        <BookAppointment />
      </div>
    </React.Fragment>
  )
}

export default WidgetsBanners
