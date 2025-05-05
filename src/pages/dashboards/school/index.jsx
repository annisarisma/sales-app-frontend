import React, { useEffect } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import Explore from '@views/dashboards/schoolDashboard/explore'
import TopScoreTable from '@views/dashboards/schoolDashboard/topScore'
import TotalStudents from '@views/dashboards/schoolDashboard/totalStudents'
import UpcomingTest from '@views/dashboards/schoolDashboard/upcomingTest'
import Videos from '@views/dashboards/schoolDashboard/videos'
import Widgets from '@views/dashboards/schoolDashboard/widgets'

const School = () => {
  useEffect(() => {
    document.title = 'School | Domiex - React JS Admin & Dashboard Template'
  }, [])
  return (
    <React.Fragment>
      <BreadCrumb title="School" subTitle="Dashboards" />
      <div className="grid grid-cols-12 gap-x-space">
        <Widgets />
        <TotalStudents />
        <UpcomingTest />
        <TopScoreTable />
        <Videos />
        <Explore />
      </div>
    </React.Fragment>
  )
}
export default School
