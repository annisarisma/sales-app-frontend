import React, { useEffect } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import RecentInvoice from '@views/widgets/data/RecentInvoice'
import TopProducts from '@views/widgets/data/TopProducts'

const WidgetsData = () => {
  useEffect(() => {
    document.title = 'Domiex | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Data" subTitle="Widgets" />
      <div className="grid grid-cols-12 gap-x-space">
        <TopProducts />
        <RecentInvoice />
      </div>
    </React.Fragment>
  )
}

export default WidgetsData
