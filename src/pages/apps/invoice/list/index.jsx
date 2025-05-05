import React, { useCallback, useEffect, useMemo, useState } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import DeleteModal from '@src/components/Common/DeleteModal'
import InvoiceStatus from '@src/components/Common/InvoiceStatus'
import Pagination from '@src/components/Common/Pagination'
import Widgets from '@src/components/Common/Widgets'
import { LAYOUT_DIRECTION } from '@src/components/Constants/layout'
import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '@src/components/CustomComponents/Dropdown/Dropdown'
import TableContainer from '@src/components/CustomComponents/Table/Table'
import {
  deleteInvoiceListRecordData,
  getInvoiceListData,
  setCurrentInvoiceListRecord,
} from '@src/slices/thunk'
import { LayoutGrid, Search, Trash } from 'lucide-react'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const ListInvoice = () => {
  const dispatch = useDispatch()
  const { invoiceList } = useSelector((state) => state.Invoice)
  const { layoutDirection } = useSelector((state) => state.Layout)
  const navigate = useNavigate()
  const [invoiceListData, setInvoiceListData] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [selectAll, setSelectAll] = useState(false)
  const [deletedListData, setDeletedListData] = useState([])
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [deletedRecord, setDeletedRecord] = useState(null)

  useEffect(() => {
    document.title = 'List View | Domiex - React JS Admin & Dashboard Template'
  }, [])

  useEffect(() => {
    if (!invoiceList) {
      dispatch(getInvoiceListData())
    } else {
      setInvoiceListData(invoiceList)
    }
  }, [invoiceList, dispatch])

  useEffect(() => {
    if (invoiceList && invoiceList.length === 0) {
      setInvoiceListData([])
    } else {
      setInvoiceListData(invoiceList)
    }
  }, [invoiceList])

  const handleSearchClient = (value) => {
    setSearchValue(value)

    if (value.trim() !== '') {
      const filteredCustomers = invoiceList.filter((item) => {
        return (
          item.clientName.toLowerCase().includes(value.toLowerCase()) ||
          item.country.toLowerCase().includes(value.toLowerCase()) ||
          item.invoiceId.toLowerCase().includes(value.toLowerCase()) ||
          item.invoiceDate.toLowerCase().includes(value.toLowerCase()) ||
          item.dueDate.toLowerCase().includes(value.toLowerCase()) ||
          item.status.toLowerCase().includes(value.toLowerCase())
        )
      })
      setInvoiceListData(filteredCustomers)
    } else {
      setInvoiceListData(invoiceList)
    }
  }

  // select all or unselect all
  const handleSelectAll = useCallback(() => {
    if (selectAll) {
      setDeletedListData([])
    } else {
      setDeletedListData(invoiceListData.map((invoice) => invoice._id))
    }
    setSelectAll(!selectAll)
  }, [selectAll, invoiceListData])

  // set multiple delete records
  const handleSelectRecord = (_id) => {
    setDeletedListData((prev) =>
      prev.includes(_id) ? prev.filter((item) => item !== _id) : [...prev, _id]
    )
  }

  // delete multiple records
  const handleRemoveSelectedRecords = () => {
    dispatch(deleteInvoiceListRecordData(deletedListData))
    setDeletedListData([])
    setSelectAll(false)
  }

  // handle delete record
  const handleDeleteRecord = (_id) => {
    setDeletedRecord(_id)
    setIsDeleteModalOpen(true)
  }

  // delete record
  const setDeleteRecord = () => {
    if (deletedRecord && isDeleteModalOpen) {
      dispatch(deleteInvoiceListRecordData([deletedRecord]))
      setIsDeleteModalOpen(false)
      setDeletedRecord(null)
    }
  }

  // set status badge color
  const getStatusClass = (status) => {
    switch (status) {
      case 'Paid':
        return 'badge badge-green'
      case 'Unpaid':
        return 'badge badge-pink'
      case 'Pending':
        return 'badge badge-yellow'
      case 'Overdue':
        return 'badge badge-red'
      default:
        return 'badge'
    }
  }

  const handleInvoiceOverview = useCallback(
    (isOpen = false, invoice) => {
      dispatch(setCurrentInvoiceListRecord(isOpen, invoice))
      navigate('/apps/invoice/overview-1')
    },
    [dispatch, navigate]
  )

  const columns = useMemo(
    () => [
      {
        header: (
          <input
            id="checkboxAll"
            className="input-check input-check-primary"
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAll}
          />
        ),
        accessorKey: 'id',
        enableSorting: false,
        cell: ({ row }) => (
          <input
            className="input-check input-check-primary"
            type="checkbox"
            checked={deletedListData.includes(row.original._id)}
            onChange={() => handleSelectRecord(row.original._id)}
          />
        ),
      },
      {
        header: 'ID',
        accessorKey: 'invoiceId',
        cell: ({ row }) => {
          const base = 15475
          return <span>{`PEI-${base + row.index}`}</span>
        },
      },
      {
        header: 'Client',
        accessorKey: 'clientName',
        cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <img
              src={row.original.clientImage}
              alt="rowImg"
              className="rounded-full shrink-0 size-7"
              width={32}
              height={32}
            />
            <Link to="#!" className="text-current link link-primary grow">
              {row.original.clientName}
            </Link>
          </div>
        ),
      },
      {
        header: 'Country',
        accessorKey: 'country',
      },
      {
        header: 'Invoice Date',
        accessorKey: 'invoiceDate',
      },
      {
        header: 'Due Date',
        accessorKey: 'dueDate',
      },
      {
        header: 'Amount',
        accessorKey: 'totalAmount',
        cell: ({ row }) => {
          const { totalAmount } = row.original
          return (
            <span>${isNaN(totalAmount) ? '0.00' : totalAmount.toFixed(2)}</span>
          )
        },
      },
      {
        header: 'status',
        accessorKey: 'status',
        cell: ({ row }) => {
          const { status } = row.original
          return <span className={getStatusClass(status)}>{status}</span>
        },
      },
      {
        header: 'Action',
        accessorKey: '',
        cell: ({ row }) => (
          <Dropdown
            position="right"
            trigger="click"
            dropdownClassName="dropdown">
            <DropdownButton colorClass="flex items-center text-gray-500 dark:text-dark-500">
              <i className="ri-more-2-fill"></i>
            </DropdownButton>
            <DropdownMenu>
              <Link
                to="#!"
                className="dropdown-item"
                onClick={(e) => {
                  e.preventDefault()
                  handleInvoiceOverview(false, row.original)
                }}>
                <i className="align-middle ltr:mr-2 rtl:ml-2 ri-eye-line"></i>{' '}
                <span>Overview</span>
              </Link>
              <Link
                to="#!"
                className="dropdown-item"
                onClick={(e) => {
                  e.preventDefault()
                }}>
                <i className="align-middle ltr:mr-2 rtl:ml-2 ri-pencil-line"></i>{' '}
                <span>Edit</span>
              </Link>
              <Link
                to="#!"
                className="dropdown-item"
                onClick={(e) => {
                  e.preventDefault()
                  handleDeleteRecord(row.original._id)
                }}>
                <i className="align-middle ltr:mr-2 rtl:ml-2 ri-delete-bin-line"></i>{' '}
                <span>Delete</span>
              </Link>
            </DropdownMenu>
          </Dropdown>
        ),
      },
    ],
    [deletedListData, selectAll, handleSelectAll, handleInvoiceOverview]
  )

  // pagination
  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedEvents =
    invoiceListData && invoiceListData.length > 0
      ? invoiceListData.slice(startIndex, startIndex + itemsPerPage)
      : []

  return (
    <React.Fragment>
      <BreadCrumb title="List View" subTitle="Invoice" />
      <div>
        <div className="grid grid-cols-12 gap-x-space">
          {/* invoice widgets */}
          <Widgets invoices={invoiceList} />

          {/* invoice status chart */}
          <InvoiceStatus invoices={invoiceList} />
        </div>

        {/* invoice header & search */}
        <div className="justify-between md:flex">
          <div>
            <h6 className="mb-1">All Invoices</h6>
            <p className="text-gray-500 dark:text-dark-500">
              Manage your invoice
            </p>
          </div>
          <div>
            <div className="flex items-center gap-5 mt-3 md:mt-0">
              <div className="relative group/form grow">
                <input
                  type="email"
                  className="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4"
                  placeholder="Search invoice ..."
                  onChange={(e) => handleSearchClient(e.target.value)}
                  value={searchValue}
                />
                <button className="absolute inset-y-0 flex items-center ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-hidden">
                  <Search className="text-gray-500 dark:text-dark-500 size-4 fill-gray-100 dark:fill-dark-850" />
                </button>
              </div>
              <Link to="/apps/invoice/grid" className="btn btn-purple btn-icon">
                <LayoutGrid className="size-5" />
              </Link>
              <Link
                to="/apps/invoice/create"
                className="btn btn-primary shrink-0">
                Create Invoice
              </Link>
              {deletedListData.length > 0 && (
                <button
                  className="btn btn-red btn-icon"
                  onClick={handleRemoveSelectedRecords}>
                  <Trash className="inline-block size-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* invoice table */}
        <div>
          {paginatedEvents && (
            <TableContainer
              columns={columns}
              data={paginatedEvents}
              isSearch={false}
              thClassName="!font-medium cursor-pointer"
              divClassName="overflow-x-auto"
              tableClassName="table border-separate hovered flush border-spacing-y-2 whitespace-nowrap"
              PaginationClassName="pagination-container"
              thTrClassName="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500"
              isTFooter={false}
            />
          )}
          {invoiceListData && invoiceListData.length != 0 && (
            <Pagination
              totalItems={invoiceListData.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>

      {/* delete record Modal */}
      {isDeleteModalOpen && (
        <DeleteModal
          show={isDeleteModalOpen}
          handleHide={() => setIsDeleteModalOpen(false)}
          deleteModalFunction={setDeleteRecord}
        />
      )}

      <Toaster
        position={'top-right'}
        reverseOrder={layoutDirection === LAYOUT_DIRECTION.RTL}
      />
    </React.Fragment>
  )
}

export default ListInvoice
