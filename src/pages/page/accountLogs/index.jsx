import React, { useEffect, useState } from 'react'

import { Modal } from '@custom/Modal/Modal'
import { Tab, Tabs } from '@custom/Tabs/Tab'
import {
  Bell,
  ChevronRight,
  Gem,
  ListTree,
  LogOut,
  MonitorSmartphone,
  MoveRight,
  ShieldCheck,
  Smartphone,
  UserRound,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import CommonAccount from '../../../components/Common/commonAccount'

const devices = [
  {
    name: 'Apple Mac 12.5.1',
    status: 'Online',
    location: 'London, United Kingdom',
    ip: '81.64.22.98',
    icon: true,
  },
  {
    name: 'Apple iPhone iOS 14.8.5',
    status: 'Offline',
    location: 'Berlin, Germany',
    ip: '225.222.152.154',
  },
  {
    name: 'Samsung Phone s24',
    status: 'Offline',
    location: 'Paris, France',
    ip: '225.222.152.154',
  },
  {
    name: 'Apple iPhone iOS 14.8.5',
    status: 'Offline',
    location: 'Berlin, Germany',
    ip: '225.222.152.154',
  },
  {
    name: 'Samsung Phone s24',
    status: 'Offline',
    location: 'Paris, France',
    ip: '225.222.152.154',
  },
]

const DeviceCard = ({ icon, name, status, location, ip }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.title =
      'Account Logs | Domiex - React JS Admin & Dashboard Template'
  }, [])

  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <div className="mb-0 card">
      <div className="flex items-center gap-3 card-body">
        <div className="flex items-center justify-center size-12 shrink-0">
          {icon === true ? (
            <MonitorSmartphone
              data-lucide="monitor-smartphone"
              className="text-green-500 fill-green-500/10"></MonitorSmartphone>
          ) : (
            <Smartphone
              data-lucide="smartphone"
              className="text-gray-500 fill-gray-100 dark:text-dark-500 dark:fill-dark-850"></Smartphone>
          )}
        </div>
        <div className="grow">
          <h6 className="mb-1">
            {name}{' '}
            <span
              className={`text-xs ltr:ml-1 rtl:mr-1 badge ${
                status === 'Online' ? 'badge-green' : 'badge-gray'
              }`}>
              {status}
            </span>
          </h6>
          <p className="text-sm text-gray-500 dark:text-dark-500">
            {location}. - {ip}
          </p>
        </div>
        <div className="dropdown shrink-0">
          <button onClick={toggleDropdown} className="flex link link-primary">
            <ChevronRight data-lucide="chevron-right"></ChevronRight>
          </button>
          {isOpen && (
            <div className="p-2 dropdown-menu dropdown-right">
              <Link to="#!" className="dropdown-item">
                Overview
              </Link>
              <Link to="#!" className="dropdown-item">
                Log Out
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
const AccountLogs = () => {
  const [modalState, setModalState] = useState({
    logoutAllModal: false,
  })

  const openModal = (key) => setModalState((prev) => ({ ...prev, [key]: true }))
  const closeModal = (key) =>
    setModalState((prev) => ({ ...prev, [key]: false }))

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
          path="/page/account-notification"></Tab>
        <Tab
          icon={<ListTree className="inline-block size-4 ltr:mr-2 rtl:ml-2" />}
          label="Statements"
          path="/page/account-statements"></Tab>
        <Tab
          icon={<LogOut className="inline-block size-4 ltr:mr-2 rtl:ml-2" />}
          label="Logs"
          path="/page/account-logs">
          <>
            <div className="mt-5 card">
              <div className="flex items-center gap-3 card-header">
                <h6 className="card-title grow">Device and active sessions</h6>
                <button
                  type="button"
                  onClick={() => openModal('logoutAllModal')}
                  data-modal-target="logoutAllModal"
                  className="flex px-3 py-1.5 text-xs font-medium btn-sub-gray btn">
                  All Logouts <MoveRight className="inline-block ml-2 size-4" />
                </button>
              </div>
              <div className="card-body">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {devices.map((device, index) => (
                    <DeviceCard key={index} {...device} />
                  ))}
                </div>
              </div>
            </div>
          </>
        </Tab>
      </Tabs>

      {/* modal */}
      <Modal
        isOpen={modalState.logoutAllModal}
        id="logoutAllModal"
        onClose={() => closeModal('logoutAllModal')}
        position="modal-center"
        size="modal-xs"
        contentClass="text-center p-7"
        content={(onClose) => (
          <>
            <div className="flex items-center justify-center mx-auto mb-4 bg-red-500 rounded-full size-12 text-red-50 ring-4 ring-red-100">
              <LogOut className="size-6"></LogOut>
            </div>
            <h5 className="mb-2">All Devices Logout</h5>
            <p className="mb-5 text-gray-500">
              Are you sure you want to log out from all device?
            </p>
            <div className="flex items-center justify-end gap-2">
              <button className="btn btn-red">Logout Device</button>
              <button
                onClick={() => onClose()}
                className="btn link link-primary">
                Cancel
              </button>
            </div>
          </>
        )}
      />
    </React.Fragment>
  )
}
export default AccountLogs
