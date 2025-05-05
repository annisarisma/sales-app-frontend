import React from 'react'

import { TeamNumber } from '@data/index'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'

const TeamMembers = () => {
  return (
    <React.Fragment>
      <div className="order-7 col-span-12 xl:col-span-6 2xl:col-span-4 card">
        <div className="flex items-center gap-3 card-header">
          <h6 className="card-title grow">Team Members</h6>
          <Link to="#!" className="link link-primary shrink-0">
            See All{' '}
            <i className="align-baseline ri-arrow-right-line ltr:inline-block rtl:hidden"></i>
            <i className="align-baseline ri-arrow-left-line rtl:inline-block ltr:hidden"></i>
          </Link>
        </div>
        <div className="card-body">
          <SimpleBar className="h-[375px] -mx-space px-space">
            <div className="flex flex-col gap-3">
              {TeamNumber.map((item, index) => {
                return (
                  <div key={index} className="p-3 mb-0 card">
                    <div className="flex items-center gap-2">
                      <img
                        src={item.img}
                        alt=""
                        className="rounded-md size-10"
                      />
                      <div className="grow">
                        <h6 className="mb-1">
                          <Link to="#!">{item.name}</Link>
                        </h6>
                        <p className="text-gray-500 dark:text-dark-500">
                          {item.position}
                        </p>
                      </div>
                      <p className="text-gray-500 dark:text-dark-500">
                        {item.Task} Task
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </SimpleBar>
        </div>
      </div>
    </React.Fragment>
  )
}
export default TeamMembers
