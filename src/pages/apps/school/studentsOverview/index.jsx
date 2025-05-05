import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import PendingQuiz from '@src/views/apps/school/studentsOverview/pendingQuiz'
import StudentAchievements from '@src/views/apps/school/studentsOverview/studentAchievements'
import StudentInformation from '@src/views/apps/school/studentsOverview/studentInformation'
import TestMarks from '@src/views/apps/school/studentsOverview/testMarks'
import UpcomingLecture from '@src/views/apps/school/studentsOverview/upcomingLecture'

const StudentsOverview = () => {
  useEffect(() => {
    document.title = 'Overview | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Overview" subTitle="Students" />
      <div className="grid grid-cols-12 gap-x-space">
        <StudentInformation />
        <StudentAchievements />
        <TestMarks />
        <PendingQuiz />
        <UpcomingLecture />
      </div>
    </React.Fragment>
  )
}

export default StudentsOverview
