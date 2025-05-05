import React from 'react'

import user from '@assets/images/avatar/user-17.png'
import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '@custom/Dropdown/Dropdown'
import { Headset, Moon, Phone, UserRound, VenetianMask } from 'lucide-react'
import { Link } from 'react-router-dom'

const ProfileDropdown = () => {
  return (
    <React.Fragment>
      <Dropdown position="" trigger="click" dropdownClassName="dropdown">
        <DropdownButton
          colorClass="flex items-center gap-2 btn btn-primary"
          arrow={true}>
          Profile
        </DropdownButton>
        <DropdownMenu menuClass="!fixed !w-72">
          <div className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-dark-800">
            <img
              src={user}
              alt="userImg"
              className="rounded-full size-9 shrink-0"
            />
            <div className="overflow-hidden grow">
              <h6>Sophia Mia</h6>
              <Link to="#!" className="truncate link link-primary">
                sophia@example.com
              </Link>
            </div>
            <div className="shrink-0">
              <span className="badge badge-pink">Pro</span>
            </div>
          </div>
          <div className="p-4 *:flex space-y-4 *:items-center">
            <Link to="#!" className="link link-primary">
              <UserRound className="size-4 ltr:mr-1 rtl:ml-1" /> Account
              Settings
            </Link>
            <Link to="#!" className="link link-primary">
              <VenetianMask className="size-4 ltr:mr-1 rtl:ml-1" /> Go Incognito
            </Link>
            <Link to="#!" className="link link-primary">
              <Headset className="size-4 ltr:mr-1 rtl:ml-1" /> Help Center
            </Link>
            <Link to="#!" className="link link-primary">
              <Moon className="size-4 ltr:mr-1 rtl:ml-1" />
              <span className="grow">Dark Mode</span>
              <label
                htmlFor="darkModeProfile"
                className="flex items-center cursor-pointer select-none text-dark dark:text-white shrink-0">
                <div className="relative">
                  <input
                    type="checkbox"
                    id="darkModeProfile"
                    className="sr-only peer"
                  />
                  <div className="block w-10 h-6 border border-gray-200 rounded-full"></div>
                  <div className="absolute transition bg-gray-200 rounded-full size-4 left-1 top-1 peer-checked:translate-x-full peer-checked:bg-sky-500"></div>
                </div>
              </label>
            </Link>
            <Link to="#!" className="link link-primary">
              <Phone className="size-4 ltr:mr-1 rtl:ml-1" /> Contact Us
            </Link>
          </div>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  )
}
export default ProfileDropdown
