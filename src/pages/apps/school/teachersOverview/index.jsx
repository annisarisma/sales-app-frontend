import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import Achievements from '@src/views/apps/school/teachersOverview/achievements'
import Quiz from '@src/views/apps/school/teachersOverview/quiz'
import TeacherInformation from '@src/views/apps/school/teachersOverview/teacherInformation'
import Test from '@src/views/apps/school/teachersOverview/test'
import UpcomingLecture from '@src/views/apps/school/teachersOverview/upcomingLecture'

import TimeSpendingLecture from '../../../../views/apps/school/teachersOverview/timeSpendingLecture'

const TeachersOverview = () => {
  useEffect(() => {
    document.title = 'Overview | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Overview" subTitle="Teachers" />
      <div className="grid grid-cols-12 gap-x-space">
        <TeacherInformation />
        <Achievements />
        <Test />
        <TimeSpendingLecture />
        <Quiz />
        <UpcomingLecture />
      </div>
    </React.Fragment>
  )
}

export default TeachersOverview
