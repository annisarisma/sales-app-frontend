import React, { useEffect, useState } from 'react'

import google from '@assets/images/others/google.png'
import security from '@assets/images/others/security.png'
import { Tab, Tabs } from '@custom/Tabs/Tab'
import {
  Bell,
  CircleCheckBig,
  Eye,
  EyeOff,
  Gem,
  ListTree,
  LogOut,
  MoveLeft,
  MoveRight,
  ShieldCheck,
  UserRound,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import CommonAccount from '../../../components/Common/commonAccount'

const AccountSecurity = () => {
  const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false)
  const [newPasswordVisible, setNewPasswordVisible] = useState(false)
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)

  useEffect(() => {
    document.title =
      'Account Security | Domiex - React JS Admin & Dashboard Template'
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
          path="/page/account-security">
          <>
            <h6 className="mt-5 mb-1 text-16">Security</h6>
            <p className="mb-5 text-gray-500 dark:text-dark-500">
              <Link
                to="#!"
                className="underline transition duration-300 ease-linear text-primary-500 hover:text-primary-600">
                Learn More
              </Link>{' '}
              about securing your account from external and unknown intrusion.
            </p>

            <div className="card">
              <div className="grid grid-cols-12 card-body">
                <div className="col-span-12 md:col-span-9">
                  <h6 className="mb-1">Account Security</h6>
                  <p className="mb-2 text-gray-500 dark:text-dark-500">
                    Secured Account means any account for which the related
                    obligor has pledged assets or made a cash collateral deposit
                    as security for payment of receivables that arise in such an
                    account.
                  </p>
                  <Link
                    to="#!"
                    className="underline link text-primary-500 dark:text-primary-500 hover:text-primary-600">
                    Learn More
                    <MoveRight className="ml-1 ltr:inline-block rtl:hidden size-4"></MoveRight>
                    <MoveLeft className="ml-1 ltr:hidden rtl:inline-block size-4"></MoveLeft>
                  </Link>
                </div>
                <div className="col-span-12 md:col-span-3">
                  <img
                    src={security}
                    alt="securityImg"
                    className="block h-24 mx-auto mt-5 md:mt-0 ltr:md:ml-auto rtl:md:mr-auto"
                    width={103}
                    height={96}
                  />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="gap-3 md:flex card-body">
                <div className="shrink-0">
                  <div className="flex items-center gap-2">
                    <img src={google} alt="Google" className="size-5" />
                    <h6>Google Authentication</h6>
                  </div>
                </div>
                <div className="flex-grow my-3 md:my-0">
                  <p className="mb-3 text-gray-500 dark:text-dark-500">
                    If you set up 2-Step Verification, you can use the Google
                    Authenticator app to generate codes. You can still generate
                    codes without internet connection or mobile service. Learn
                    more about{' '}
                    <Link
                      to="#!"
                      className="transition duration-300 ease-linear text-primary-500 hover:text-primary-600">
                      2-Step Verification
                    </Link>
                    .
                  </p>
                  <span className="badge badge-green">
                    <CircleCheckBig className="inline-block ltr:mr-1 rtl:ml-1 size-3" />

                    <span className="align-middle">Connected</span>
                  </span>
                </div>
                <div className="shrink-0">
                  <button
                    type="button"
                    data-modal-target="googleAuth1Modal"
                    className="btn btn-sub-gray">
                    Enable
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Update Password</h6>
              </div>
              <div className="card-body">
                <p className="mb-3 text-gray-500 dark:text-dark-500">
                  To change your password, please enter your current password.
                </p>
                <form action="#!">
                  <div className="mb-5">
                    <label
                      htmlFor="currentPasswordInput"
                      className="form-label">
                      Current Password
                    </label>
                    <div className="relative">
                      <input
                        type={currentPasswordVisible ? 'text' : 'password'}
                        id="currentPasswordInput"
                        className="ltr:pr-8 rtl:pl-8 form-input"
                        autoComplete="off"
                        placeholder="Enter current password"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setCurrentPasswordVisible(!currentPasswordVisible)
                        }
                        className="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:right-3 rtl:left-3 focus:outline-hidden">
                        {currentPasswordVisible ? (
                          <EyeOff className="size-5" />
                        ) : (
                          <Eye className="size-5" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="newPasswordInput" className="form-label">
                      New Password
                    </label>
                    <div className="relative">
                      <input
                        type={newPasswordVisible ? 'text' : 'password'}
                        id="newPasswordInput"
                        className="ltr:pr-8 rtl:pl-8 form-input"
                        autoComplete="off"
                        placeholder="New password"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setNewPasswordVisible(!newPasswordVisible)
                        }
                        className="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:right-3 rtl:left-3 focus:outline-hidden">
                        {newPasswordVisible ? (
                          <EyeOff className="size-5" />
                        ) : (
                          <Eye className="size-5" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="confirmPasswordInput"
                      className="form-label">
                      Confirm New Password
                    </label>
                    <div className="relative">
                      <input
                        type={confirmPasswordVisible ? 'text' : 'password'}
                        id="confirmPasswordInput"
                        className="ltr:pr-8 rtl:pl-8 form-input"
                        autoComplete="off"
                        placeholder="Confirm password"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setConfirmPasswordVisible(!confirmPasswordVisible)
                        }
                        className="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:right-3 rtl:left-3 focus:outline-hidden">
                        {confirmPasswordVisible ? (
                          <EyeOff className="size-5" />
                        ) : (
                          <Eye className="size-5" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <Link to="#!" className="btn btn-primary">
                      Update Password
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </>
        </Tab>
        <Tab
          icon={<Gem className="inline-block size-4 ltr:mr-2 rtl:ml-2" />}
          label="Billing & Plans"
          path="/page/account-billing-plan"></Tab>
        <Tab
          icon={<Bell className="inline-block size-4 ltr:mr-2 rtl:ml-2" />}
          label="Notification"
          path="/page/account-notification"></Tab>
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

export default AccountSecurity
