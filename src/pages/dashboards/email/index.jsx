import React, { useEffect } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import CampaignStats from '@views/dashboards/emailDashboards/campaignStats'
import CustomerAndRate from '@views/dashboards/emailDashboards/customerAndRate'
import EmailCampaign from '@views/dashboards/emailDashboards/emailCampaign'
import EmailPerformanceTable from '@views/dashboards/emailDashboards/emailPerformance'
import MailStatistic from '@views/dashboards/emailDashboards/mailStatistic'
import TimeSpending from '@views/dashboards/emailDashboards/timeSpending'
import TopCampaign from '@views/dashboards/emailDashboards/topCampaign'
import Widgets from '@views/dashboards/emailDashboards/widgets'

const Email = () => {
  useEffect(() => {
    document.title = 'Email | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title={'Email'} subTitle={'Dashboards'} />
      <div className="grid grid-cols-12 gap-x-space">
        <Widgets />
        <TopCampaign />
        <EmailCampaign />
        <MailStatistic />
        <TimeSpending />
        <CampaignStats />
        <CustomerAndRate />
        <EmailPerformanceTable />
      </div>
    </React.Fragment>
  )
}

export default Email
