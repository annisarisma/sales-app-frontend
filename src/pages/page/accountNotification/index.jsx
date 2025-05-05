import React, { useEffect } from 'react'

import { Tab, Tabs } from '@custom/Tabs/Tab'
import {
  Bell,
  Gem,
  ListTree,
  LogOut,
  ShieldCheck,
  UserRound,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import CommonAccount from '../../../components/Common/commonAccount'

const AccountNotification = () => {
  useEffect(() => {
    document.title =
      'Account Notification | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <CommonAccount />

      {/* tab section */}
      <Tabs
        ulProps="pb-2 overflow-x-auto tabs-pills lg:pb-0"
        activeTabClass="active"
        contentProps="mt-5"
        otherClass="nav-item text-gray-500 dark:text-dark-500 [&.active]:bg-primary-500 [&.active]:text-primary-50"
        spanProps="align-middle whitespace-nowrap">
        <Tab
          icon={<UserRound className="inline-block size-4 ltr:mr-2 rtl:ml-2" />}
          label="Account"
          path="/page/account-settings"></Tab>
        <Tab
          icon={
            <ShieldCheck className="inline-block size-4 ltr:mr-2 rtl:ml-2" />
          }
          label="Security"
          path="/page/account-security"></Tab>
        <Tab
          icon={<Gem className="inline-block size-4 ltr:mr-2 rtl:ml-2" />}
          label="Billing & Plans"
          path="/page/account-billing-plan"></Tab>
        <Tab
          icon={<Bell className="inline-block size-4 ltr:mr-2 rtl:ml-2" />}
          label="Notification"
          path="/page/account-notification">
          <>
            <div className="items-center gap-3 mt-5 md:flex">
              <div className="grow">
                <h6 className="mb-1 text-16 grow">Notifications</h6>
                <p className="text-gray-500 dark:text-dark-500">
                  Where would you like to receive notifications?
                </p>
              </div>
              <div className="shrink-0">
                <Link
                  to="#!"
                  className="font-medium underline link link-primary">
                  Reset to Default Settings
                </Link>
              </div>
            </div>

            <div className="mt-5 card">
              <div className="card-header">
                <h6 className="card-title">
                  Receive notifications about new activities in projects you're
                  involved in
                </h6>
              </div>
              <div className="space-y-4 card-body">
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="notification1"
                    className="mb-0 cursor-pointer form-label grow">
                    New comments by others comments
                  </label>
                  <label htmlFor="notification1" className="switch-group">
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="notification1"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="switch-wrapper"></div>
                      <div className="switch-dot peer-checked:translate-x-full rtl:peer-checked:-translate-x-full switch-primary"></div>
                    </div>
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="notification2"
                    className="mb-0 cursor-pointer form-label grow">
                    Comments fro you tasks
                  </label>
                  <label htmlFor="notification2" className="switch-group">
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="notification2"
                        className="sr-only peer"
                      />
                      <div className="switch-wrapper"></div>
                      <div className="switch-dot peer-checked:translate-x-full rtl:peer-checked:-translate-x-full switch-primary"></div>
                    </div>
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="notification3"
                    className="mb-0 cursor-pointer form-label grow">
                    New tasks assigned to you
                  </label>
                  <label htmlFor="notification3" className="switch-group">
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="notification3"
                        className="sr-only peer"
                      />
                      <div className="switch-wrapper"></div>
                      <div className="switch-dot peer-checked:translate-x-full rtl:peer-checked:-translate-x-full switch-primary"></div>
                    </div>
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="notification4"
                    className="mb-0 cursor-pointer form-label grow">
                    Tasks completed (For tasks you created or assigned to)
                  </label>
                  <label htmlFor="notification4" className="switch-group">
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="notification4"
                        className="sr-only peer"
                      />
                      <div className="switch-wrapper"></div>
                      <div className="switch-dot peer-checked:translate-x-full rtl:peer-checked:-translate-x-full switch-primary"></div>
                    </div>
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="notification5"
                    className="mb-0 cursor-pointer form-label grow">
                    You are mentioned in a projects, task, etc,.
                  </label>
                  <label htmlFor="notification5" className="switch-group">
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="notification5"
                        className="sr-only peer"
                      />
                      <div className="switch-wrapper"></div>
                      <div className="switch-dot peer-checked:translate-x-full rtl:peer-checked:-translate-x-full switch-primary"></div>
                    </div>
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="notification6"
                    className="mb-0 cursor-pointer form-label grow">
                    Change in status of a task you're
                  </label>
                  <label htmlFor="notification6" className="switch-group">
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="notification6"
                        className="sr-only peer"
                      />
                      <div className="switch-wrapper"></div>
                      <div className="switch-dot peer-checked:translate-x-full rtl:peer-checked:-translate-x-full switch-primary"></div>
                    </div>
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="notification7"
                    className="mb-0 cursor-pointer form-label grow">
                    Added new projects
                  </label>
                  <label htmlFor="notification7" className="switch-group">
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="notification7"
                        className="sr-only peer"
                      />
                      <div className="switch-wrapper"></div>
                      <div className="switch-dot peer-checked:translate-x-full rtl:peer-checked:-translate-x-full switch-primary"></div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Get notified wherever you are</h6>
              </div>
              <div className="space-y-4 card-body">
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="notification11"
                    className="mb-0 cursor-pointer form-label grow">
                    Email notifications
                  </label>
                  <label htmlFor="notification11" className="switch-group">
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="notification11"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="switch-wrapper"></div>
                      <div className="switch-dot peer-checked:translate-x-full rtl:peer-checked:-translate-x-full switch-primary"></div>
                    </div>
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="notification12"
                    className="mb-0 cursor-pointer form-label grow">
                    Notifications via domiex
                  </label>
                  <label htmlFor="notification12" className="switch-group">
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="notification12"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="switch-wrapper"></div>
                      <div className="switch-dot peer-checked:translate-x-full rtl:peer-checked:-translate-x-full switch-primary"></div>
                    </div>
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="notification13"
                    className="mb-0 cursor-pointer form-label grow">
                    Browser push notifications
                  </label>
                  <label htmlFor="notification13" className="switch-group">
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="notification13"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="switch-wrapper"></div>
                      <div className="switch-dot peer-checked:translate-x-full rtl:peer-checked:-translate-x-full switch-primary"></div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </>
        </Tab>
        <Tab
          icon={<ListTree className="inline-block size-4 ltr:mr-2 rtl:ml-2" />}
          label="Statements"
          path="/page/account-statements"></Tab>
        <Tab
          icon={<LogOut className="inline-block size-4 ltr:mr-2 rtl:ml-2" />}
          label="Logs"
          path="/page/account-logs"></Tab>
      </Tabs>
    </React.Fragment>
  )
}
export default AccountNotification
