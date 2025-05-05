import React from 'react'

import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '@custom/Dropdown/Dropdown'
import { client } from '@data/index'
import { Ellipsis } from 'lucide-react'
import { Link } from 'react-router-dom'

const ClientInformation = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-space">
        {client.map((person, index) => (
          <div className="card" key={index}>
            <div className="card-body">
              <div className="flex flex-wrap items-center gap-2">
                <img
                  src={person.image}
                  alt={person.name}
                  className="rounded-md size-10 shrink-0"
                />
                <div className="grow">
                  <h6 className="mb-1">{person.name}</h6>
                  <p className="text-sm text-gray-500 dark:text-dark-500">
                    {person.role}
                  </p>
                </div>
                <h6 className="grow">{person.amount}</h6>
                <div className="grow">
                  <span className={`badge ${person.status.colorClass}`}>
                    {person.status.text}
                  </span>
                </div>

                <Dropdown trigger="click" dropdownClassName="dropdown">
                  <DropdownButton>
                    <Ellipsis className="size-5" />
                  </DropdownButton>
                  <DropdownMenu menuClass="dropdown-left">
                    <Link to="#!" className="dropdown-item">
                      <span>Overview</span>
                    </Link>

                    <Link to="#!" className="dropdown-item">
                      <span>Edit</span>
                    </Link>
                    <Link to="#!" className="dropdown-item">
                      <span>Delete</span>
                    </Link>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default ClientInformation
