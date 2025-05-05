import React from 'react'

import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '@custom/Dropdown/Dropdown'
import { userProjectsData } from '@data/index'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  Box,
  Ellipsis,
  Eye,
  Globe,
  MessagesSquare,
  Ruler,
  SquareUser,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const UserProjectsContent = () => {
  const IconComponent = ({ icon, color }) => {
    switch (icon) {
      case 'messages-square':
        return <MessagesSquare className={`stroke-1 size-7 ${color}`} />
      case 'box':
        return <Box className={`stroke-1 size-7 ${color}`} />
      case 'users':
        return <Users className={`stroke-1 size-7 ${color}`} />
      case 'globe':
        return <Globe className={`stroke-1 size-7 ${color}`} />
      case 'square-user':
        return <SquareUser className={`stroke-1 size-7 ${color}`} />
      case 'ruler':
        return <Ruler className={`stroke-1 size-7 ${color}`} />
      default:
        return null
    }
  }

  return (
    <React.Fragment>
      <h5 className="mt-4 mb-5 text-16">Projects</h5>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5">
        {userProjectsData.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-body">
              <div className="flex gap-3">
                <div
                  className={`flex items-center justify-center size-12 bg-gradient-to-t ${item.iconColor} rounded-modern shrink-0`}>
                  <IconComponent icon={item.icon} color={item.color} />
                </div>
                <div className="grow">
                  <h6 className="mb-1">
                    <Link
                      to={item.link}
                      className="transition duration-200 ease-linear hover:text-primary-500">
                      {item.title}
                    </Link>
                  </h6>
                  <p className="text-gray-500 dark:text-dark-500 line-clamp-5">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <Link
                  to={item.link}
                  className="ltr:mr-auto rtl:ml-auto badge badge-gray">
                  {item.tag}
                </Link>
                <div className="text-gray-500 dark:text-dark-500 shrink-0 text-15">
                  <p>
                    <Eye className="inline-block size-4" />
                    <span className="align-middle">{item.views}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 border-t border-gray-200 card-body dark:border-dark-800">
              <div className="flex -space-x-3 grow rtl:space-x-reverse">
                {item.avatars &&
                  Array.isArray(item.avatars) &&
                  item.avatars.map((avatar, index) => (
                    <Link
                      to="#!"
                      key={index}
                      className="transition duration-300 ease-linear hover:z-10">
                      <img
                        className="border-2 border-white rounded-full dark:border-dark-900 size-7"
                        src={avatar}
                        alt="avatar"
                        width={24}
                        height={24}
                      />
                    </Link>
                  ))}
              </div>
              <Dropdown
                trigger="click"
                position="right"
                dropdownClassName="dropdown">
                <DropdownButton colorClass="link link-primary">
                  <Ellipsis className="size-5" />
                </DropdownButton>
                <DropdownMenu>
                  <Link to="#" className="dropdown-item">
                    Overview
                  </Link>
                  <Link to="#" className="dropdown-item">
                    Edit
                  </Link>
                  <Link to="#" className="dropdown-item">
                    Delete
                  </Link>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        ))}
      </div>

      {/* pagination */}
      <div className="grid items-center grid-cols-12 gap-5 mb-5">
        <div className="col-span-6">
          <p className="text-gray-500 dark:text-dark-500">
            Showing <b>6</b> of <b>76</b> Results
          </p>
        </div>
        <div className="col-span-6">
          <div className="flex justify-end pagination pagination-primary">
            <button type="button" className="pagination-pre" disabled>
              <ChevronLeft className="mr-1 ltr:inline-block rtl:hidden size-5"></ChevronLeft>
              <ChevronRight className="ml-1 ltr:hidden rtl:inline-block size-5"></ChevronRight>
              Prev
            </button>
            <button type="button" className="pagination-item active">
              1
            </button>
            <button type="button" className="pagination-item">
              2
            </button>
            <button type="button" className="pagination-item">
              3
            </button>
            <button type="button" className="pagination-item">
              ...
            </button>
            <button type="button" className="pagination-item">
              10
            </button>
            <button type="button" className="pagination-next">
              Next
              <ChevronRight className="ml-1 rtl:hidden size-5 ltr:inline-block"></ChevronRight>
              <ChevronLeft className="mr-1 rtl:inline-block ltr:hidden size-5"></ChevronLeft>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default UserProjectsContent
