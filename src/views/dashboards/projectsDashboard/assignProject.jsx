import React from 'react'

import assignIn from '@assets/images/dashboards/projects/asssign.png'
import { Link } from 'react-router-dom'

import AnimatedCounter from '../analyticsDashboards/counter'

const AssignProject = () => {
  return (
    <React.Fragment>
      <div className="relative order-5 col-span-12 overflow-hidden md:col-span-6 lg:col-span-12 2xl:col-span-3 card">
        <div className="absolute top-0 ltr:right-0 rtl:left-0 bg-primary-500/20 blur-2xl size-32"></div>
        <img
          src={assignIn}
          alt="assignInImg"
          className="absolute bottom-0 ltr:right-3 rtl:left-3"
        />
        <div className="relative card-body">
          <h6 className="mb-3 card-title">Assign a Project</h6>
          <div className="mb-3">
            <h6>
              <AnimatedCounter start={500} end={311} duration={3000} />+
            </h6>
            <p className="text-gray-500 dark:text-dark-500">Completed Task</p>
          </div>
          <div className="mb-3">
            <h6>
              <AnimatedCounter start={500} end={594} duration={3000} />
            </h6>
            <p className="text-gray-500 dark:text-dark-500">Assigned</p>
          </div>
          <Link to="#!" className="btn btn-primary">
            Start Now
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}
export default AssignProject
