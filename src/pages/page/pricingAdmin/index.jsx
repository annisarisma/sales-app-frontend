import React, { useEffect, useState } from 'react'

import BreadCrumb from '@common/BreadCrumb'
import Pagination from '@common/Pagination'
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from '@custom/Dropdown/Dropdown'
import TableContainer from '@custom/Table/Table'
import { pricingAdmin } from '@data/index'
import { Ellipsis, Eye, Pencil, Trash2 } from 'lucide-react'

import Widgets from './widgets'

const data = [
  {
    icon: <Eye className="inline-block ltr:mr-2 rtl:ml-2 size-4" />,
    text: 'Overview',
  },
  {
    icon: <Pencil className="inline-block ltr:mr-2 rtl:ml-2 size-4" />,
    text: 'Edit',
  },
  {
    icon: <Trash2 className="inline-block ltr:mr-2 rtl:ml-2 size-4" />,
    text: 'Delete',
  },
]

const PricingAdmin = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 7

  useEffect(() => {
    document.title = 'Pricing | Domiex - React JS Admin & Dashboard Template'
  }, [])

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedEvents = pricingAdmin.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  // Table
  const columns = React.useMemo(
    () => [
      {
        header: 'User ID',
        accessorKey: 'id',
        enableSorting: false,
      },
      {
        header: 'Name',
        accessorKey: 'name',
        enableSorting: false,
      },
      {
        header: 'Start date',
        accessorKey: 'startDate',
        enableSorting: false,
      },
      {
        header: 'End date',
        accessorKey: 'endDate',
        enableSorting: false,
      },
      {
        header: 'Plan Type',
        accessorKey: 'type',
        enableSorting: false,
      },
      {
        header: 'Total Payment',
        accessorKey: 'price',
        enableSorting: false,
      },
      {
        header: 'Status',
        accessorKey: 'status',
        enableSorting: false,
        cell: (cell) => (
          <>
            {cell.row.original.status === 'Successfully' ? (
              <span className="badge badge-green">
                {cell.row.original.status}
              </span>
            ) : cell.row.original.status === 'Failed' ? (
              <span className="badge badge-red">
                {cell.row.original.status}
              </span>
            ) : (
              <span className="badge badge-yellow">
                {cell.row.original.status}
              </span>
            )}
          </>
        ),
      },
      {
        header: 'Action',
        accessorKey: 'action',
        enableSorting: false,
        cell: (cell) => (
          <>
            <Dropdown
              trigger="click"
              position={cell.row.index ? 'right' : 'right'}
              dropdownClassName="dropdown">
              <DropdownButton colorClass="flex items-center text-gray-500 dark:text-dark-500">
                <Ellipsis className="size-5"></Ellipsis>
              </DropdownButton>
              <DropdownMenu>
                <ul>
                  {data.map((item, idx) => (
                    <DropdownItem key={idx}>
                      {item.icon}
                      <span>{item.text}</span>
                    </DropdownItem>
                  ))}
                </ul>
              </DropdownMenu>
            </Dropdown>
          </>
        ),
      },
    ],
    []
  )

  return (
    <React.Fragment>
      <BreadCrumb title="Pricing" subTitle="Pages" />

      <Widgets />

      {/* Table */}
      <h6 className="mt-2 mb-5">All Users</h6>

      <TableContainer
        columns={columns || []}
        data={paginatedEvents || []}
        divClassName="overflow-x-auto"
        tableClassName="table bordered"
        thClassName="whitespace-nowrap"
        tdClassName="whitespace-nowrap"
        isPagination={false}
      />

      {/* pagination */}
      <div className="mb-5">
        <Pagination
          totalItems={pricingAdmin.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </React.Fragment>
  )
}
export default PricingAdmin
