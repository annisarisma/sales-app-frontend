import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import TaskActivitiesChart from '@src/views/apps/projects/overview/taskActivitiesChart'
import WorkingHoursChart from '@src/views/apps/projects/overview/workingHoursChart'

import ProjectsTabs from '../ProjectsTabs'

const ProjectsOverview = () => {
  useEffect(() => {
    document.title = 'Overview | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Overview" subTitle="Projects" />
      {/* tabs */}
      <ProjectsTabs />

      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Project Overview</h6>
          </div>
          <div className="card-body">
            <p className="mb-3 text-gray-500 dark:text-dark-500">
              The goal of this project is to develop an advanced AI model
              capable of predictive analytics within the e-commerce domain. This
              model will leverage machine learning techniques to analyze
              customer behavior, forecast sales trends, and optimize marketing
              strategies, ultimately enhancing the overall customer experience
              and boosting revenue for e-commerce platforms.
            </p>
            <h6 className="mb-2">Objectives:</h6>
            <ul className="mb-5 space-y-2 list-inside list-circle">
              <li>Customer Behavior Analysis</li>
              <li>Sales Forecasting</li>
              <li>Marketing Optimization</li>
              <li>Personalized Recommendations</li>
              <li>Performance Monitoring and Evaluation</li>
            </ul>

            <h6 className="mb-2">Deliverables:</h6>
            <ul className="space-y-2 list-inside list-circle">
              <li>Data Requirements Document</li>
              <li>Data Extraction Scripts</li>
              <li>Cleaned and Transformed Datasets</li>
              <li>Data Quality Report</li>
              <li>Data Storage Setup</li>
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-8 card">
          <div className="card-header">
            <h6 className="card-title">Working Hours</h6>
          </div>
          <div className="card-body">
            <div className="-ml-space" dir="ltr">
              <WorkingHoursChart
                chartColors={'[bg-purple-500, bg-primary-500]'}
                chartDarkColors={''}
                chartId="workingHoursChart"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 card">
          <div className="card-header">
            <h6 className="card-title">Task Activities</h6>
          </div>
          <div className="card-body">
            <div className="-ml-space" dir="ltr">
              <TaskActivitiesChart
                chartColors="[bg-primary-500]"
                chartDarkColors={''}
                chartId="taskActivitiesChart"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProjectsOverview
