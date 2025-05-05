import React, { useEffect, useState } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import DeleteModal from '@src/components/Common/DeleteModal'
import InvoiceStatus from '@src/components/Common/InvoiceStatus'
import Pagination from '@src/components/Common/Pagination'
import Widgets from '@src/components/Common/Widgets'
import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '@src/components/CustomComponents/Dropdown/Dropdown'
import {
  deleteInvoiceListRecordData,
  getInvoiceListData,
  setCurrentInvoiceListRecord,
} from '@src/slices/thunk'
import { List } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Select from 'react-select'

const clientStatusOptions = [
  { label: 'Paid', value: 'Paid' },
  { label: 'Unpaid', value: 'Unpaid' },
  { label: 'Pending', value: 'Pending' },
  { label: 'Overdue', value: 'Overdue' },
]

const GridInvoice = () => {
  const dispatch = useDispatch()
  const { invoiceList } = useSelector((state) => state.Invoice)
  const navigate = useNavigate()

  const [invoiceListData, setInvoiceListData] = useState([])
  const [status, setStatus] = useState(null)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [deletedRecord, setDeletedRecord] = useState(null)

  useEffect(() => {
    document.title = 'Grid View | Domiex - React JS Admin & Dashboard Template'
  }, [])

  // handle status change
  const handleStatusChange = (selected) => {
    setStatus(selected)
    if (selected) {
      const { value } = selected
      setInvoiceListData(
        invoiceList.filter((invoice) => invoice.status === value)
      )
    } else {
      setInvoiceListData(invoiceList)
    }
  }

  // get status color
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

  // handle view invoice
  const handleInvoiceOverview = (mode = false, invoice) => {
    dispatch(setCurrentInvoiceListRecord(mode, invoice))
    navigate(`/apps/invoice/overview-2`)
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

  // use effect for get checkout shop cart data
  useEffect(() => {
    if (!invoiceList) {
      dispatch(getInvoiceListData())
    } else {
      setInvoiceListData(invoiceList)
    }
  }, [invoiceList, dispatch])

  // pagination
  const itemsPerPage = 8
  const [currentPage, setCurrentPage] = useState(1)
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedEvents = invoiceListData
    ? invoiceListData.slice(startIndex, startIndex + itemsPerPage)
    : []

  return (
    <React.Fragment>
      <BreadCrumb title="Grid View" subTitle="Invoice" />
      {/* widgets & status */}
      <div>
        <div className="grid grid-cols-12 gap-x-space">
          {/* invoice widgets */}
          <Widgets invoices={invoiceList} />

          {/* invoice status chart */}
          <InvoiceStatus invoices={invoiceList} />
        </div>

        <div className="items-center gap-3 mb-4 space-y-3 md:flex md:space-y-0">
          <div className="grow">
            <h6 className="mb-1">All Invoices</h6>
            <p className="text-gray-500 dark:text-dark-500">
              Manage your invoice
            </p>
          </div>
          <div className="w-44 shrink-0">
            <Select
              classNamePrefix="select"
              options={clientStatusOptions}
              value={status}
              onChange={(selected) => handleStatusChange(selected)}
              placeholder="Invoice Type..."
              id="statusSelect"
              isClearable={true}
              isSearchable={true}
            />
          </div>
          <Link to="/apps/invoice/list" className="btn btn-purple btn-icon">
            <List className="size-5" />
          </Link>
          <Link to="/apps/invoice/create" className="btn btn-primary shrink-0">
            Create Invoice
          </Link>
        </div>

        {/* all invoice grid data */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-x-5">
          {paginatedEvents &&
            paginatedEvents.length > 0 &&
            paginatedEvents.map((invoice, index) => (
              <React.Fragment key={index}>
                <div className="card">
                  <div className="card-body">
                    <div className="flex items-center mb-4">
                      <h6 className="grow">
                        Invoice <span>{invoice.invoiceId}</span>
                      </h6>

                      <Dropdown
                        position="right"
                        trigger="click"
                        dropdownClassName="dropdown">
                        <DropdownButton colorClass="flex items-center text-gray-500 dark:text-dark-500">
                          <i className="ri-more-fill"></i>
                        </DropdownButton>
                        <DropdownMenu>
                          <Link
                            to="#!"
                            className="dropdown-item"
                            onClick={(e) => {
                              e.preventDefault()
                              handleInvoiceOverview(false, invoice)
                            }}>
                            Overview
                          </Link>
                          <Link
                            to="#!"
                            className="dropdown-item"
                            onClick={(e) => {
                              e.preventDefault()
                            }}>
                            Edit
                          </Link>
                          <Link
                            to="#!"
                            className="dropdown-item"
                            onClick={(e) => {
                              e.preventDefault()
                              handleDeleteRecord(invoice._id)
                            }}>
                            Delete
                          </Link>
                        </DropdownMenu>
                      </Dropdown>
                    </div>

                    <div className="p-3 border border-gray-200 rounded-md dark:border-dark-800">
                      <p className="mb-2 text-gray-500 dark:text-dark-500">
                        {invoice?.content}
                      </p>

                      <div className="grid grid-cols-2">
                        <div className="p-2 text-center border-r border-gray-200 dark:border-dark-800">
                          <h6 className="mb-1">${invoice.totalAmount}</h6>
                          <p className="text-gray-500 dark:text-dark-500">
                            Total Amount
                          </p>
                        </div>
                        <div className="p-2 text-center">
                          <h6 className="mb-1">{invoice?.dueDate}</h6>
                          <p className="text-gray-500 dark:text-dark-500">
                            Due Date
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex items-center gap-2">
                        <img
                          src={invoice?.clientImage}
                          alt="clientImage"
                          className="rounded-full shrink-0 size-8"
                          width={32}
                          height={32}
                        />
                        <Link
                          to="#!"
                          className="font-medium text-current link link-primary grow">
                          {invoice.clientName}
                        </Link>
                        <span className={getStatusClass(invoice.status)}>
                          {invoice.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
        </div>
        {invoiceListData.length != 0 && (
          <Pagination
            totalItems={invoiceListData.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>

      {/* delete record Modal */}
      {isDeleteModalOpen && (
        <DeleteModal
          show={isDeleteModalOpen}
          handleHide={() => setIsDeleteModalOpen(false)}
          deleteModalFunction={setDeleteRecord}
        />
      )}
    </React.Fragment>
  )
}

export default GridInvoice
