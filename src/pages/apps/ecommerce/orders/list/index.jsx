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
import { deleteOrderData, getOrderData } from '@src/slices/thunk'
import OrderWidgets from '@src/views/apps/ecommerce/order/orderWidgets'
import AddEditOrder from '@views/apps/ecommerce/order/addEditOrder'
import OrderListTab from '@views/apps/ecommerce/order/orderListTab'
import OverviewModal from '@views/apps/ecommerce/order/overviewModal'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const OrderList = () => {
  const dispatch = useDispatch()
  const { orderList } = useSelector((state) => state.Order)
  const { layoutDirection } = useSelector((state) => state.Layout)
  const [orders, setOrders] = useState([])
  const [ordersWithID, setOrdersWithID] = useState([])
  const [activeTab, setActiveTab] = useState('All')
  const [editMode, setEditMode] = useState(false)
  const [currentOrderList, setCurrentOrderList] = useState(null)
  const [deletedListData, setDeletedListData] = useState([])
  const [selectAll, setSelectAll] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [deletedRecord, setDeletedRecord] = useState(null)
  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const [overviewShow, setOverviewShow] = useState(false)
  const [modalState, setModalState] = useState({
    showAddOrderForm: false,
    showEditOrderForm: false,
  })

  useEffect(() => {
    document.title =
      'Orders List | Domiex - React JS Admin & Dashboard Template'
  }, [])

  useEffect(() => {
    if (!orderList) {
      dispatch(getOrderData())
    } else {
      setOrders(orderList)
    }
  }, [orderList, dispatch])

  useEffect(() => {
    setOrdersWithID(ordersWithID)
  }, [ordersWithID])

  const filteredOrders = useMemo(() => {
    return activeTab === 'All'
      ? orders
      : orders.filter((order) => order.status === activeTab)
  }, [activeTab, orders])

  const openModal = (key) => setModalState((prev) => ({ ...prev, [key]: true }))
  const closeModal = (key) =>
    setModalState((prev) => ({ ...prev, [key]: false }))

  const handleOpenOverviewEditModal = useCallback(
    (editMode = false, orderList = null) => {
      setEditMode(editMode)
      setCurrentOrderList(orderList)
      const modalKey = editMode ? 'showEditOrderForm' : 'showAddOrderForm'
      openModal(modalKey)
    },
    []
  )

  const handleCloseModal = () => {
    const modalKey = editMode ? 'showEditOrderForm' : 'showAddOrderForm'
    closeModal(modalKey)
    setEditMode(false)
    setCurrentOrderList(null)
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
      setDeletedListData(orderList.map((order) => order._id))
    }
    setSelectAll((prev) => !prev)
  }, [selectAll, orderList])

  const handleDeleteRecord = (_id) => {
    setIsModalOpen(true)
    setDeletedRecord([_id])
  }

  const handleRemoveSelectedRecords = () => {
    dispatch(deleteOrderData(deletedListData))
    setDeletedListData([])
    setSelectAll(false)
  }
  const setDeleteRecord = () => {
    if (deletedRecord && isModalOpen) {
      dispatch(deleteOrderData(deletedRecord))
      setIsModalOpen(false)
      setDeletedRecord(null)
    }
  }

  const getStatusClass = (status) => {
    switch (status) {
      case 'Delivered':
        return 'badge badge-green'
      case 'New':
        return 'badge badge-primary'
      case 'Cancelled':
        return 'badge badge-red'
      case 'Shipping':
        return 'badge badge-purple'
      default:
        return 'badge badge-yellow'
    }
  }

  const getPaymentClass = (payment) => {
    switch (payment) {
      case 'Paid':
        return 'badge badge-green'
      case 'COD':
        return 'badge badge-gray'
      case 'Unpaid':
        return 'badge badge-red'
      default:
        return 'badge'
    }
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedEvents =
    filteredOrders && filteredOrders.length > 0
      ? filteredOrders.slice(startIndex, startIndex + itemsPerPage)
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
        header: 'Order ID',
        accessorKey: 'ordersID',
        cell: ({ row }) => {
          return (
            <Link to="#!" className="link link-primary">
              {row.original.ordersID}
            </Link>
          )
        },
      },
      {
        header: 'Order Date',
        accessorKey: 'ordersDate',
      },
      {
        header: 'Delivered Date',
        accessorKey: 'deliveredDate',
      },
      {
        header: 'Customers',
        accessorKey: 'customersName',
      },
      {
        header: 'Product',
        accessorKey: 'productName',
      },
      {
        header: 'Payment',
        accessorKey: 'payment',
        cell: ({ row }) => {
          const payment = row.original.payment
          return <span className={getPaymentClass(payment)}>{payment}</span>
        },
      },
      {
        header: 'Total',
        accessorKey: 'total',
      },
      {
        header: 'QTY',
        accessorKey: 'qty',
      },
      {
        header: 'Status',
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
                  handleOpenOverviewModal(true, row.original)
                }}>
                <i className="align-middle ltr:mr-2 rtl:ml-2 ri-eye-line"></i>{' '}
                <span>Overview</span>
              </Link>
              <Link
                to="#!"
                className="dropdown-item"
                onClick={(e) => {
                  e.preventDefault()
                  handleOpenOverviewEditModal(true, row.original)
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
    [deletedListData, selectAll, handleOpenOverviewEditModal, handleSelectAll]
  )

  const handleOpenOverviewModal = (overview, orderList = null) => {
    setOverviewShow(overview)
    setCurrentOrderList(orderList)
  }

  return (
    <React.Fragment>
      <BreadCrumb title="Orders List" subTitle="Orders" />
      <div>
        <OrderWidgets />

        <div>
          <OrderListTab
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            openModal={openModal}
            deletedListData={deletedListData}
            handleRemoveSelectedRecords={handleRemoveSelectedRecords}
          />

          <div className="card">
            <div className="pt-0 card-body">
              <div>
                <TableContainer
                  columns={columns}
                  data={paginatedEvents || []}
                  thClassName="!font-medium whitespace-nowrap cursor-pointer"
                  isSearch={false}
                  divClassName="overflow-x-auto table-box"
                  tableClassName="table hovered"
                  PaginationClassName="grid grid-cols-12 gap-5 mt-5"
                  thTrClassName="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500"
                  isTableFooter={false}
                />
                {filteredOrders.length != 0 && (
                  <Pagination
                    totalItems={filteredOrders.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                  />
                )}
              </div>
            </div>
          </div>

          <AddEditOrder
            modalState={modalState}
            closeModal={handleCloseModal}
            orders={orders}
            editMode={editMode}
            currentOrderList={currentOrderList}
          />
          <OverviewModal
            overviewShow={overviewShow}
            closeOverviewModal={() => setOverviewShow(false)}
            selectedOrder={currentOrderList}
            handleOpenOverviewEditModal={handleOpenOverviewEditModal}
          />
          <DeleteModal
            show={isModalOpen}
            handleHide={() => setIsModalOpen(false)}
            deleteModalFunction={setDeleteRecord}
          />
        </div>
      </div>

      <Toaster
        position="top-right"
        reverseOrder={layoutDirection === LAYOUT_DIRECTION.RTL}
      />
    </React.Fragment>
  )
}

export default OrderList
