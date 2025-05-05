import React, { useState } from 'react'

import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '@src/components/CustomComponents/Dropdown/Dropdown'
import {
  Calendar,
  ChevronDown,
  CircleAlert,
  Diamond,
  Inbox,
  Plus,
  SendHorizonal,
  SquarePen,
  Star,
  StepForward,
  Trash2,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import { userMailRecords } from '../../../data/email/user-mail'

const SideMail = ({
  filterEmails,
  activeType,
  getBadgeCount,
  handleComposeModal,
}) => {
  const [activeUserEmail, setActiveUserEmail] = useState({
    _id: 1,
    image: 'https://images.kcubeinfotech.com/domiex/images/brands/img-04.png',
    name: 'SRBThemes Account',
    email: 'shopia@example.com',
  })

  return (
 <>
        <Dropdown trigger="click" dropdownClassName="dropdown w-full">
          <DropdownButton colorClass="flex items-center w-full gap-2 text-start card-header">
            <img
              src={activeUserEmail.image}
              alt="activeUserEmail"
              className="size-9"
              height={36}
              width={36}
            />
            <div className="grow">
              <h6>{activeUserEmail.name}</h6>
              <p className="text-gray-500 dark:text-dark-500">
                {activeUserEmail.email}
              </p>
            </div>
            <ChevronDown className="size-4 shrink-0" />
          </DropdownButton>
          <DropdownMenu menuClass="p-2 !w-72 dropdown-menu">
            {userMailRecords.map((email, index) => (
              <ul className="space-y-2" key={'email' + index}>
                <li>
                  <button
                    className="dropdown-item ltr:text-left rtl:text-right"
                    onClick={() => setActiveUserEmail(email)}>
                    <img
                      src={email.image}
                      alt="emailImg"
                      className="size-9"
                      height={36}
                      width={36}
                    />
                    <div className="grow">
                      <h6>{email.name}</h6>
                      <p className="text-gray-500 dark:text-dark-500">
                        {email.email}
                        {'   '}
                      </p>
                    </div>
                  </button>
                </li>
              </ul>
            ))}
          </DropdownMenu>
        </Dropdown>
        <div className="card-body">
          <h6 className="mb-1">Inbox Messages</h6>
          <p className="text-gray-500 dark:text-dark-500">
            1487 messages - 26 unread
          </p>
          <div data-simplebar>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="#!"
                  onClick={() => filterEmails('all')}
                  className={`flex items-center gap-2 link link-primary ${activeType === 'all' ? 'text-primary-500' : ''}`}>
                  <Inbox className="size-4"></Inbox> Inbox
                  <span className="ml-auto shrink-0 badge badge-gray">
                    {getBadgeCount('inbox')}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="#!"
                  onClick={() => filterEmails('starred')}
                  className={`flex items-center gap-2 link link-primary ${activeType === 'starred' ? 'text-primary-500' : ''}`}>
                  <Star className="size-4"></Star> Starred
                  <span className="ml-auto shrink-0 badge badge-gray">2</span>
                </Link>
              </li>
              <li>
                <Link
                  to="#!"
                  onClick={() => filterEmails('sent')}
                  className={`flex items-center gap-2 link link-primary ${activeType === 'sent' ? 'text-primary-500' : ''}`}>
                  <SendHorizonal className="size-4"></SendHorizonal> Sent
                </Link>
              </li>
              <li>
                <Link
                  to="#!"
                  onClick={() => filterEmails('drafts')}
                  className={`flex items-center gap-2 link link-primary ${activeType === 'drafts' ? 'text-primary-500' : ''}`}>
                  <SquarePen className="size-4"></SquarePen> Drafts
                  <span className="ml-auto shrink-0 badge badge-gray">
                    {getBadgeCount('drafts')}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="#!"
                  onClick={() => filterEmails('spam')}
                  className={`flex items-center gap-2 link link-primary ${activeType === 'spam' ? 'text-primary-500' : ''}`}>
                  <CircleAlert className="size-4"></CircleAlert> Spam
                </Link>
              </li>
              <li>
                <Link
                  to="#!"
                  onClick={() => filterEmails('trash')}
                  className={`flex items-center gap-2 link link-red ${activeType === 'trash' ? 'text-red-500' : ''}`}>
                  <Trash2 className="size-4"></Trash2> Trash
                </Link>
              </li>
              <li>
                <Link
                  to="#!"
                  onClick={() => filterEmails('important')}
                  className={`flex items-center gap-2 link link-primary ${activeType === 'important' ? 'text-primary-500' : ''}`}>
                  <StepForward className="size-4"></StepForward> Important
                </Link>
              </li>
              <li>
                <Link
                  to="#!"
                  onClick={() => filterEmails('scheduled')}
                  className={`flex items-center gap-2 link link-primary ${activeType === 'scheduled' ? 'text-primary-500' : ''}`}>
                  <Calendar className="size-4"></Calendar> Scheduled
                </Link>
              </li>
            </ul>

            <div className="flex mt-4 mb-1">
              <h6 className="grow">Labels</h6>
              <Link to="#!" className="inline-block shrink-0 link link-primary">
                <Plus className="size-4"></Plus>
              </Link>
            </div>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="#!"
                  onClick={() => filterEmails('all', 'Team Meetings')}
                  className={`flex items-center gap-2 link text-current link-primary ${activeType === 'Team Meetings' ? 'text-primary-500' : ''}`}>
                  <Diamond className="text-red-500 size-4"></Diamond> Team
                  Meetings
                  <span className="ml-auto text-gray-500 dark:text-dark-500 shrink-0">
                    {getBadgeCount('Team Meetings')}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="#!"
                  onClick={() => filterEmails('all', 'Application')}
                  className={`flex items-center gap-2 link text-current link-primary ${activeType === 'Application' ? 'text-primary-500' : ''}`}>
                  <Diamond className="text-green-500 size-4"></Diamond>{' '}
                  Application
                  <span className="ml-auto text-gray-500 dark:text-dark-500 shrink-0">
                    {getBadgeCount('Application')}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="#!"
                  onClick={() => filterEmails('all', 'Developers')}
                  className={`flex items-center gap-2 link text-current link-primary ${activeType === 'Developers' ? 'text-primary-500' : ''}`}>
                  <Diamond className="text-yellow-500 size-4"></Diamond>{' '}
                  Developers
                  <span className="ml-auto text-gray-500 dark:text-dark-500 shrink-0">
                    {getBadgeCount('Developers')}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="#!"
                  onClick={() => filterEmails('all', 'Photographer')}
                  className={`flex items-center gap-2 link text-current link-primary ${activeType === 'Photographer' ? 'text-primary-500' : ''}`}>
                  <Diamond className="text-primary-500 size-4"></Diamond>{' '}
                  Photographer
                  <span className="ml-auto text-gray-500 dark:text-dark-500 shrink-0">
                    {getBadgeCount('Photographer')}
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <button
            type="button"
            className="w-full mt-4 btn btn-primary"
            onClick={() => handleComposeModal()}>
            Compose
          </button>
        </div>
        </>
  )
}

export default SideMail
