import React, { useEffect } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import RevenueCharts from '@views/widgets/charts/revenueCharts'
import TotalSales from '@views/widgets/charts/totalSales'
import TotalViewPerformance from '@views/widgets/charts/totalViewPerformance'

const WidgetsCharts = () => {
  useEffect(() => {
    document.title = 'Charts | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Charts" subTitle="Widgets" />
      <div className="grid grid-cols-12 gap-x-space">
        <RevenueCharts />
        <TotalSales />
        <TotalViewPerformance />
      </div>
    </React.Fragment>
  )
}

export default WidgetsCharts
