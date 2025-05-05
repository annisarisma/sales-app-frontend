import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '@custom/Dropdown/Dropdown'
import { clientData } from '@data/index'
import { Ellipsis, MessagesSquare } from 'lucide-react'
import { Link } from 'react-router-dom'

const ClientList = () => {
  return (
    <div className="order-4 col-span-12 2xl:col-span-9">
      <div className="flex items-center gap-3 mb-3">
        <h6 className="grow">Client List</h6>
        <Link to="#!" className="link link-primary">
          View All{' '}
          <i className="align-baseline ri-arrow-left-line ltr:hidden rtl:inline-block"></i>
          <i className="align-baseline ri-arrow-right-line ltr:inline-block rtl:hidden"></i>
        </Link>
      </div>
      <div className="grid grid-cols-12 gap-x-space">
        {clientData.map((client) => (
          <div
            key={client.id}
            className="col-span-12 md:col-span-6 lg:col-span-4 card">
            <div className="card-body">
              <div className="flex flex-wrap items-center gap-3 p-2 bg-gray-100 rounded-md dark:bg-dark-850">
                <img
                  src={client.image}
                  alt="clientImg"
                  className="rounded-full size-10 shrink-0"
                  width={40}
                  height={40}
                />
                <div className="grow">
                  <h6>{client.name}</h6>
                  <p className="text-gray-500 dark:text-dark-500">
                    {client.email}
                  </p>
                </div>
                <Dropdown
                  position=""
                  trigger="click"
                  dropdownClassName="dropdown">
                  <DropdownButton colorClass="flex items-center text-gray-500 dark:text-dark-500">
                    {' '}
                    <Ellipsis className="size-5" />
                  </DropdownButton>
                  <DropdownMenu>
                    <Link to="#!" className="dropdown-item ">
                      <span>Weekly</span>
                    </Link>
                    <Link to="#!" className="dropdown-item ">
                      <span>Monthly</span>
                    </Link>
                    <Link to="#!" className="dropdown-item">
                      <span>Yearly</span>
                    </Link>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="flex flex-wrap gap-2 my-4">
                {client.badges.map((badge, index) => (
                  <span key={index} className={`badge ${badge.class}`}>
                    {badge.label}
                  </span>
                ))}
              </div>
              <p>
                Date Created:{' '}
                <span className="text-gray-500 dark:text-dark-500">
                  {client.dateCreated}
                </span>
              </p>
              <div className="pt-3 mt-3 text-center border-t border-gray-200 dark:border-dark-800">
                <Link to="#!" className="text-primary-500">
                  <MessagesSquare className="inline-block size-4 ltr:mr-1 rtl:ml-1" />{' '}
                  Get a Chat
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClientList
