import React from 'react'

import { Tab, Tabs } from '@custom/Tabs/Tab'
import { Link } from 'react-router-dom'

import allMessages from '../../../data/EcommerceDashboard/all-messages'
import newMessage from '../../../data/EcommerceDashboard/new-messages'

const Message = () => {
  return (
    <React.Fragment>
      <div className="order-last col-span-12 xl:col-span-6 2xl:col-span-4 card">
        <div className="flex items-center gap-3 card-header">
          <h6 className="card-title grow">My Message</h6>
          <Link
            to="#!"
            className="flex px-3 py-1.5 text-xs border-gray-200 font-medium dark:border-dark-800 link link-primary btn">
            <i className="ri-add-line ltr:mr-1 rtl:ml-1"></i> New Chat
          </Link>
        </div>
        <div className="card-body">
          <Tabs
            ulProps="tabs-pills *:grow bg-gray-100 rounded-md dark:bg-dark-850"
            otherClass="nav-item [&.active]:bg-primary-500 [&.active]:text-primary-50"
            activeTabClass="active" // Custom class for active tab
            inactiveTabClass="text-gray-500 hover:text-primary-500 dark:text-dark-500 dark:hover:text-primary-500"
            contentProps="mt-4" // Custom class for the content area
          >
            <Tab label="New Message">
              <div className="space-y-4">
                {newMessage.map((item, index) => {
                  return (
                    <Link key={index} to="#!" className="flex gap-3">
                      <div className="rounded-full size-10 shrink-0">
                        <img src={item.image} alt="" className="rounded-full" />
                      </div>
                      <div className="overflow-hidden grow">
                        <h6 className="mb-0.5">{item.name}</h6>
                        <p className="text-xs text-gray-500 truncate dark:text-dark-500">
                          {item.description}
                        </p>
                      </div>
                      <p className="text-xs shrink-0">{item.time}</p>
                    </Link>
                  )
                })}
              </div>
            </Tab>
            <Tab label="All Message">
              <div className="space-y-4">
                {allMessages.map((item, index) => {
                  return (
                    <Link key={index} to="#!" className="flex gap-3">
                      <div className="rounded-full size-10 shrink-0">
                        <img src={item.image} alt="" className="rounded-full" />
                      </div>
                      <div className="overflow-hidden grow">
                        <h6 className="mb-0.5">{item.name}</h6>
                        <p className="text-xs text-gray-500 truncate dark:text-dark-500">
                          {item.description}
                        </p>
                      </div>
                      <p className="text-xs shrink-0">{item.time}</p>
                    </Link>
                  )
                })}
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Message
