import React, { useCallback, useEffect, useMemo, useState } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import DeleteModal from '@src/components/Common/DeleteModal'
import Pagination from '@src/components/Common/Pagination'
import { LAYOUT_DIRECTION } from '@src/components/Constants/layout'
import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '@src/components/CustomComponents/Dropdown/Dropdown'
import TableContainer from '@src/components/CustomComponents/Table/Table'
import {
  deleteCustomerProductListData,
  getCustomerProductData,
} from '@src/slices/thunk'
import { Plus, Search, Trash } from 'lucide-react'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import AddEditNewCustomer from '../../../../../views/apps/ecommerce/customer/addEditCustomer'
import OverviewCustomer from '../../../../../views/apps/ecommerce/customer/overviewCustomer'

const CustomerList = () => {
  const { customerList } = useSelector((state) => state.CustomerList)
  const { layoutDirection } = useSelector((state) => state.Layout)
  const dispatch = useDispatch()
  const [customerListData, setCustomerListData] = useState([])
  const [deletedListData, setDeletedListData] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [selectAll, setSelectAll] = useState(false)
  const [currentCustomer, setCurrentCustomer] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [deletedRecord, setDeletedRecord] = useState(null)
  const [isOverviewModalOpen, setIsOverviewModalOpen] = useState(false)
  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  useEffect(() => {
    document.title = 'List View | Domiex - React JS Admin & Dashboard Template'
  }, [])

  useEffect(() => {
    if (!customerList) {
      dispatch(getCustomerProductData())
    } else {
      setCustomerListData(customerList)
    }
  }, [customerList, dispatch])

  const handleSearchCustomer = (value) => {
    setSearchValue(value)

    if (value.trim() !== '') {
      const filteredCustomers = customerList.filter((item) => {
        return (
          item.firstName.toLowerCase().includes(value.toLowerCase()) ||
          item.lastName.toLowerCase().includes(value.toLowerCase()) ||
          item.email.toLowerCase().includes(value.toLowerCase()) ||
          item.gender.toLowerCase().includes(value.toLowerCase()) ||
          item.phoneNumber.toLowerCase().includes(value.toLowerCase()) ||
          item.location.toLowerCase().includes(value.toLowerCase())
        )
      })
      setCustomerListData(filteredCustomers)
    } else {
      setCustomerListData(customerList)
    }
  }

  const handleSelectRecord = (_id) => {
    setDeletedListData((prev) =>
      prev.includes(_id) ? prev.filter((item) => item !== _id) : [...prev, _id]
    )
  }

  const handleSelectAll = useCallback(() => {
    if (selectAll) {
      setDeletedListData([])
    } else {
      setDeletedListData(customerListData.map((customer) => customer._id))
    }
    setSelectAll((prev) => !prev)
  }, [selectAll, customerListData])

  const handleRemoveSelectedRecords = () => {
    dispatch(deleteCustomerProductListData(deletedListData))
    setDeletedListData([])
    setSelectAll(false)
  }

  const [modalState, setModalState] = useState({
    showAddCustomerForm: false,
    showEditCustomerForm: false,
  })
  const openModal = (key) => setModalState((prev) => ({ ...prev, [key]: true }))
  const closeModal = (key) =>
    setModalState((prev) => ({ ...prev, [key]: false }))
  const handleOpenModal = useCallback((editMode = false, customer = null) => {
    setEditMode(editMode)
    setCurrentCustomer(customer)
    const modalKey = editMode ? 'showEditCustomerForm' : 'showAddCustomerForm'
    openModal(modalKey)
  }, [])

  const handleCloseModal = () => {
    const modalKey = editMode ? 'showEditCustomerForm' : 'showAddCustomerForm'
    closeModal(modalKey)
    setEditMode(false)
    setCurrentCustomer(null)
  }
  const getStatusClass = (status) => {
    switch (status) {
      case 'Active':
        return 'badge badge-green'
      case 'Inactive':
        return 'badge badge-red'
      default:
        return 'badge'
    }
  }

  const handleDeleteRecord = (_id) => {
    setIsModalOpen(true)
    setDeletedRecord([_id])
  }

  const setDeleteRecord = () => {
    if (deletedRecord && isModalOpen) {
      dispatch(deleteCustomerProductListData(deletedRecord))
      setIsModalOpen(false)
      setDeletedRecord(null)
    }
  }

  const handleCustomerOverview = (modal = false, customer = null) => {
    setCurrentCustomer(customer)
    setIsOverviewModalOpen(modal)
  }

  const handleCloseOverview = () => {
    setIsOverviewModalOpen(false)
    setCurrentCustomer(null)
    setEditMode(false)
  }

  const handleEditModeOverview = () => {
    setIsOverviewModalOpen(false)
    setEditMode(true)
    openModal('showEditCustomerForm')
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedEvents =
    customerListData && customerListData.length > 0
      ? customerListData.slice(startIndex, startIndex + itemsPerPage)
      : []

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
        accessorKey: 'customerId',
      },
      {
        header: 'Name',
        accessorKey: 'customersName',
        cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <img
              src={row.original.image}
              alt="rowImg"
              className="rounded-full shrink-0 size-8"
              width={32}
              height={32}
            />
            <Link to="#!" className="text-current link link-primary grow">
              {row.original.firstName} {row.original.lastName}
            </Link>
          </div>
        ),
      },
      {
        header: 'Email',
        accessorKey: 'email',
      },
      {
        header: 'Phone Number',
        accessorKey: 'phoneNumber',
      },
      {
        header: 'Subscriber',
        accessorKey: 'subscriber',
      },
      {
        header: 'Gender',
        accessorKey: 'gender',
      },
      {
        header: 'Location',
        accessorKey: 'location',
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
                  handleCustomerOverview(true, row.original)
                }}>
                <i className="align-middle ltr:mr-2 rtl:ml-2 ri-eye-line"></i>{' '}
                <span>Overview</span>
              </Link>
              <Link
                to="#!"
                className="dropdown-item"
                onClick={(e) => {
                  e.preventDefault()
                  handleOpenModal(true, row.original)
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
    [deletedListData, selectAll, handleOpenModal, handleSelectAll]
  )

  return (
    <React.Fragment>
      <BreadCrumb title="List View" subTitle="Customers" />
      <div>
        <div className="grid items-center grid-cols-12 gap-5 mb-5">
          <div className="col-span-12 xl:col-span-8">
            <h6 className="card-title">Customer List</h6>
          </div>
          <div className="flex flex-wrap justify-end col-span-12 gap-3 xl:col-span-4">
            {deletedListData.length > 0 && (
              <button
                className="btn btn-red btn-icon"
                onClick={handleRemoveSelectedRecords}>
                <Trash className="inline-block size-4" />
              </button>
            )}
            <div className="relative group/form">
              <input
                type="text"
                className="ltr:pl-9 rtl:pr-9 form-input"
                placeholder="Search name, email, gender, etc..."
                onChange={(e) => handleSearchCustomer(e.target.value)}
                value={searchValue}
              />
              <span className="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3">
                <Search className="size-4" />
              </span>
            </div>
            <button
              className="btn btn-primary"
              data-modal-target="addCustomerModals"
              onClick={() => openModal('showAddCustomerForm')}>
              <Plus className="inline-block ltr:mr-1 rtl:ml-1 size-4" /> New
              Customer
            </button>
          </div>
        </div>
        <div>
          <TableContainer
            columns={columns}
            data={paginatedEvents}
            thClassName="!font-medium"
            isSearch={false}
            divClassName="overflow-x-auto"
            tableClassName="table border-separate hovered flush border-spacing-y-2 whitespace-nowrap"
            tBodyClassName="*:bg-gray-50 dark:*:bg-dark-850 *:rounded-md"
            PaginationClassName="pagination-container"
            thTrClassName="text-gray-500 bg-gray-100 dark:bg-dark-800 dark:text-dark-500"
            isTableFooter={false}
          />
          {customerListData.length != 0 && (
            <Pagination
              totalItems={customerListData.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          )}
        </div>

        {/* Add Edit Customer Modal */}
        <AddEditNewCustomer
          modalState={modalState}
          closeModal={handleCloseModal}
          customerList={customerList}
          editMode={editMode}
          currentCustomer={currentCustomer}
        />

        {/* overview customer Modal */}
        <OverviewCustomer
          show={isOverviewModalOpen}
          handleClose={handleCloseOverview}
          currentCustomer={currentCustomer}
          editMode={editMode}
          handleEditMode={handleEditModeOverview}
        />

        {/* delete record Modal */}
        <DeleteModal
          show={isModalOpen}
          handleHide={() => setIsModalOpen(false)}
          deleteModalFunction={setDeleteRecord}
        />
      </div>

      <Toaster
        position="top-right"
        reverseOrder={layoutDirection === LAYOUT_DIRECTION.RTL}
      />
    </React.Fragment>
  )
}

export default CustomerList
