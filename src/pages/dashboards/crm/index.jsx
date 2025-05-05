import React, { useEffect } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import DealOpen from '@views/dashboards/crmDashboards/dealOpen'
import Premium from '@views/dashboards/crmDashboards/premium'
import RevenueForecast from '@views/dashboards/crmDashboards/revenueForecast'
import SalesAnalytics from '@views/dashboards/crmDashboards/salesAnalytics'
import UserData from '@views/dashboards/crmDashboards/userData'
import Widgets from '@views/dashboards/crmDashboards/widgets'

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title
  }, [title])
}

const CRM = () => {
  useDocumentTitle('CRM | Domiex - React JS Admin & Dashboard Template')

  return (
    <React.Fragment>
      <BreadCrumb title={'CRM'} subTitle={'Dashboards'} />
      <div className="grid grid-cols-12 gap-x-space">
        <SalesAnalytics />
        <Widgets />
        <RevenueForecast />
        <DealOpen />
        <Premium />
        <UserData />
      </div>
    </React.Fragment>
  )
}
export default CRM
