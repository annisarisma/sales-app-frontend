import React, { useState } from 'react'

import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '@src/components/CustomComponents/Dropdown/Dropdown'
import { Link } from 'react-router-dom'

import TicketSaleCharts from './ticketSaleChart'

const TicketSale = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }
  return (
    <React.Fragment>
      <div className="card">
        <div className="flex items-center card-header">
          <h6 className="card-title grow">Ticket Sale</h6>
          <Dropdown position="" trigger="click" dropdownClassName="dropdown">
            <DropdownButton colorClass="flex px-2 py-1 text-xs border-gray-200 dark:border-dark-800 link link-red btn">
              This Week
              <svg
                onClick={toggle}
                className={`transition-transform duration-300 ltr:ml-1 rtl:mr-1 size-4 ${open ? 'transform rotate-180' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </DropdownButton>
            <DropdownMenu>
              <Link to="#!" className="dropdown-item ">
                <span>This Week</span>
              </Link>

              <Link to="#!" className="dropdown-item ">
                <span>This Month</span>
              </Link>
              <Link to="#!" className="dropdown-item">
                <span>This Years</span>
              </Link>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="card-body">
          <TicketSaleCharts
            chartColors="[bg-primary-500]"
            chartDarkColors={''}
            chartId="ticketSaleChart"
          />
        </div>
      </div>
    </React.Fragment>
  )
}

export default TicketSale
