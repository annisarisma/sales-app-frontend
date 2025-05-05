import React, { useEffect } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import Campaign from '@views/dashboards/analyticsDashboards/campaign'
import CampaignPerformance from '@views/dashboards/analyticsDashboards/campaignPerformance'
import Followers from '@views/dashboards/analyticsDashboards/followers'
import Performance from '@views/dashboards/analyticsDashboards/performance'
import RecentTransaction from '@views/dashboards/analyticsDashboards/recentTransaction'
import TopCountry from '@views/dashboards/analyticsDashboards/topCountry'
import TopUsers from '@views/dashboards/analyticsDashboards/topUsers'
import TrafficSource from '@views/dashboards/analyticsDashboards/trafficSource'
import VisitBrowsers from '@views/dashboards/analyticsDashboards/visitBrowsers'
import WebAnalytics from '@views/dashboards/analyticsDashboards/webAnalytics'
import Widgets from '@views/dashboards/analyticsDashboards/widgets'
import TopSellingProducts from '@src/views/dashboards/ecommerceDashboard/topSellingProducts'
import SalesAnalytics from '@src/views/dashboards/crmDashboards/salesAnalytics'

const Analytics = () => {
  useEffect(() => {
    document.title = 'Analytics | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title={'Analytics'} subTitle={'Dashboards'} />
      <div className="grid grid-cols-12 gap-x-space">
        <Widgets />
        <SalesAnalytics />
        <TopSellingProducts />
        <RecentTransaction />
        <Followers />
        <VisitBrowsers />
        <TrafficSource />
        <TopUsers />
        <TopCountry />
      </div>
    </React.Fragment>
  )
}

export default Analytics
