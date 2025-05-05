import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import { Tab, Tabs } from '@src/components/CustomComponents/Tabs/Tab'
import ApplicationOverviewTab from '@src/views/apps/school/studentsAdmission/applicationOverviewTab'
import DocumentsTab from '@src/views/apps/school/studentsAdmission/documentsTab'
import EducationalBackground from '@src/views/apps/school/studentsAdmission/educationalBackground'
import FeesStructure from '@src/views/apps/school/studentsAdmission/feesStructure'
import GuardianDetailsTab from '@src/views/apps/school/studentsAdmission/guardianDetailsTab'
import PersonalDetailsTab from '@src/views/apps/school/studentsAdmission/personalDetailsTab'

const StudentsAdmission = () => {
  useEffect(() => {
    document.title =
      'Admission Form | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Admission Form" subTitle="Students" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
          <div className="card">
            <div className="card-header">
              <Tabs
                ulProps="overflow-x-auto tabs-pills"
                otherClass="nav-item [&.active]:bg-primary-500 [&.active]:text-primary-50"
                activeTabClass="bg-primary-500 text-primary-50"
                inactiveTabClass="text-gray-500 hover:text-primary-500"
                contentProps="mt-4 card-body">
                <Tab label="Personal Details">
                  <PersonalDetailsTab />
                </Tab>
                <Tab label="Guardian Details">
                  <GuardianDetailsTab />
                </Tab>
                <Tab label="Educational Background">
                  <EducationalBackground />
                </Tab>
                <Tab label="Documents">
                  <DocumentsTab />
                </Tab>
                <Tab label="Application Overview">
                  <ApplicationOverviewTab />
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
        <FeesStructure />
      </div>
    </React.Fragment>
  )
}

export default StudentsAdmission
