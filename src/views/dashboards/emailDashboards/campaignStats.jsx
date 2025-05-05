import React, { useMemo, useState } from 'react'

import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '@custom/Dropdown/Dropdown'
import TableContainer from '@custom/Table/Table'
import {
  Ellipsis,
  Mail,
  MousePointer2,
  SquareArrowOutUpRight,
  SquareMousePointer,
  UserRoundCheck,
  UserX,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const CampaignStats = () => {
  const [selectedOption, setSelectedOption] = useState('Monthly')

  const data = {
    Weekly: [
      {
        icon: Mail,
        title: 'Campaign',
        value: '12',
        change: '1.2%',
        color: 'text-green-500',
        bgColor: 'text-green-100 bg-green-500',
      },
      {
        icon: SquareMousePointer,
        title: 'Clicked',
        value: '30.45%',
        change: '3.1%',
        color: 'text-green-500',
        bgColor: 'text-sky-100 bg-sky-500',
      },
      {
        icon: Mail,
        title: 'Emails',
        value: '10,567',
        change: '0.3%',
        color: 'text-green-500',
        bgColor: 'text-orange-100 bg-orange-500',
      },
      {
        icon: SquareArrowOutUpRight,
        title: 'Opened',
        value: '55.24%',
        change: '1.5%',
        color: 'text-red-500',
        bgColor: 'text-yellow-100 bg-yellow-500',
      },
      {
        icon: UserRoundCheck,
        title: 'Subscribe',
        value: '12,345',
        change: '0.6%',
        color: 'text-green-500',
        bgColor: 'text-green-100 bg-green-500',
      },
      {
        icon: UserX,
        title: 'Unsubscribe',
        value: '100',
        change: '0.2%',
        color: 'text-red-500',
        bgColor: 'text-red-100 bg-red-500',
      },
      {
        icon: MousePointer2,
        title: 'Click-Through Rate',
        value: '1,200',
        change: '1.3%',
        color: 'text-green-500',
        bgColor: 'text-purple-100 bg-purple-500',
      },
    ],
    Monthly: [
      {
        icon: Mail,
        title: 'Campaign',
        value: '48',
        change: '0.9%',
        color: 'text-green-500',
        bgColor: 'text-green-100 bg-green-500',
      },
      {
        icon: SquareMousePointer,
        title: 'Clicked',
        value: '48.69%',
        change: '2.9%',
        color: 'text-green-500',
        bgColor: 'text-sky-100 bg-sky-500',
      },
      {
        icon: Mail,
        title: 'Emails',
        value: '47,899',
        change: '0.5%',
        color: 'text-orange-500',
        bgColor: 'text-orange-100 bg-orange-500',
      },
      {
        icon: SquareArrowOutUpRight,
        title: 'Opened',
        value: '71.12%',
        change: '1.7%',
        color: 'text-red-500',
        bgColor: 'text-yellow-100 bg-yellow-500',
      },
      {
        icon: UserRoundCheck,
        title: 'Subscribe',
        value: '47,165',
        change: '0.8%',
        color: 'text-green-500',
        bgColor: 'text-primary-100 bg-primary-500',
      },
      {
        icon: UserX,
        title: 'Unsubscribe',
        value: '287',
        change: '0.4%',
        color: 'text-red-500',
        bgColor: 'text-red-100 bg-red-500',
      },
      {
        icon: MousePointer2,
        title: 'Click-Through Rate',
        value: '1,200',
        change: '1.3%',
        color: 'text-green-500',
        bgColor: 'text-purple-100 bg-purple-500',
      },
    ],
    Yearly: [
      {
        icon: Mail,
        title: 'Campaign',
        value: '450',
        change: '5.2%',
        color: 'text-green-500',
        bgColor: 'text-green-100 bg-green-500',
      },
      {
        icon: SquareMousePointer,
        title: 'Clicked',
        value: '58.12%',
        change: '4.9%',
        color: 'text-green-500',
        bgColor: 'text-sky-100 bg-sky-500',
      },
      {
        icon: Mail,
        title: 'Emails',
        value: '570,123',
        change: '1.5%',
        color: 'text-green-500',
        bgColor: 'text-orange-100 bg-orange-500',
      },
      {
        icon: SquareArrowOutUpRight,
        title: 'Opened',
        value: '82.45%',
        change: '3.4%',
        color: 'text-red-500',
        bgColor: 'text-yellow-100 bg-yellow-500',
      },
      {
        icon: UserRoundCheck,
        title: 'Subscribe',
        value: '98,765',
        change: '2.1%',
        color: 'text-green-500',
        bgColor: 'text-primary-100 bg-primary-500',
      },
      {
        icon: UserX,
        title: 'Unsubscribe',
        value: '1,200',
        change: '1.3%',
        color: 'text-red-500',
        bgColor: 'text-red-100 bg-red-500',
      },
      {
        icon: MousePointer2,
        title: 'Click-Through Rate',
        value: '1,200',
        change: '1.3%',
        color: 'text-green-500',
        bgColor: 'text-purple-100 bg-purple-500',
      },
    ],
  }

  const columns = useMemo(
    () => [
      {
        accessorKey: 'icon',
        cell: ({ row }) => (
          <div className="flex items-center gap-4">
            <div
              className={`flex items-center justify-center ${row.original.bgColor} rounded-md size-9`}>
              <row.original.icon className="size-5" stroke="white" />
            </div>
            {row.original.title}
          </div>
        ),
      },
      {
        accessorKey: 'value',
      },
      {
        accessorKey: 'change',
        cell: ({ row }) => (
          <p className={`${row.original.color}`}>{row.original.change}</p>
        ),
      },
    ],
    []
  )

  return (
    <div className="col-span-12 xl:col-span-4 xl:row-span-2 card">
      <div className="flex items-center gap-5 card-header">
        <h6 className="card-title grow">Monthly Campaign Stats</h6>
        <Dropdown position="" trigger="click" dropdownClassName="dropdown">
          <DropdownButton colorClass="flex items-center text-gray-500 dark:text-dark-500">
            <Ellipsis className="size-5" />
          </DropdownButton>
          <DropdownMenu>
            <Link
              to="#!"
              className="dropdown-item"
              onClick={() => setSelectedOption('Weekly')}>
              <span>Weekly</span>
            </Link>
            <Link
              to="#!"
              className="dropdown-item"
              onClick={() => setSelectedOption('Monthly')}>
              <span>Monthly</span>
            </Link>
            <Link
              to="#!"
              className="dropdown-item"
              onClick={() => setSelectedOption('Yearly')}>
              <span>Yearly</span>
            </Link>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="card-body">
        <TableContainer
          isSearch={false}
          isPagination={false}
          columns={columns}
          data={data[selectedOption]}
          thClassName="hidden"
          divClassName="overflow-x-auto table-box"
          tableClassName="table flush table-sm"
          tdClassName="pr-3 !pl-0 !py-1.5"
          isTableFooter={false}
        />
      </div>
    </div>
  )
}

export default CampaignStats
