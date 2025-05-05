import React from 'react'

import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '@custom/Dropdown/Dropdown'
import { Ellipsis } from 'lucide-react'
import { Link } from 'react-router-dom'

const Campaign = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 2xl:col-span-4 card">
        <div className="flex items-center gap-3 card-header">
          <h6 className="card-title grow">On Boarding Campaign</h6>
          <Dropdown position="" trigger="click" dropdownClassName="dropdown">
            <DropdownButton colorClass="flex items-center text-gray-500 dark:text-dark-500">
              {' '}
              <Ellipsis className="size-5" />
            </DropdownButton>
            <DropdownMenu>
              <Link to="#!" className="dropdown-item">
                <span>Weekly</span>
              </Link>
              <Link to="#!" className="dropdown-item">
                <span>Monthly</span>
              </Link>
              <Link to="#!" className="dropdown-item">
                <span>Yearly</span>
              </Link>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="card-body">
          <div className="mb-5 alert alert-purple">
            Help new customers appreciate the value they'll receive from your
            admin.
          </div>
          <div className="grid grid-cols-12 gap-space">
            <div className="col-span-12 mb-0 md:col-span-6 card">
              <div className="card-body">
                <p className="badge badge-sub-green">
                  <i className="align-baseline text-11 ri-circle-fill"></i>{' '}
                  Delivered
                </p>
                <h5 className="mt-3">17.9%</h5>
                <p className="text-gray-500 dark:text-dark-500">Last week</p>
              </div>
            </div>
            <div className="col-span-12 mb-0 md:col-span-6 card">
              <div className="card-body">
                <p className="badge badge-sub-sky">
                  <i className="align-baseline text-11 ri-circle-fill"></i>{' '}
                  Clicked
                </p>
                <h5 className="mt-3">54.6%</h5>
                <p className="text-gray-500 dark:text-dark-500">Last week</p>
              </div>
            </div>
            <div className="col-span-12 mb-0 md:col-span-6 card">
              <div className="card-body">
                <p className="badge badge-sub-gray">
                  <i className="align-baseline text-11 ri-circle-fill"></i>{' '}
                  Opened
                </p>
                <h5 className="mt-3">47.3%</h5>
                <p className="text-gray-500 dark:text-dark-500">Last week</p>
              </div>
            </div>
            <div className="col-span-12 mb-0 md:col-span-6 card">
              <div className="card-body">
                <p className="badge badge-sub-yellow">
                  <i className="align-baseline text-11 ri-circle-fill"></i>{' '}
                  Converted
                </p>
                <h5 className="mt-3">11.8%</h5>
                <p className="text-gray-500 dark:text-dark-500">Last week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Campaign
