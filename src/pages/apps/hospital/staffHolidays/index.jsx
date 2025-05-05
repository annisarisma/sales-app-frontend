import React, { useCallback, useEffect, useMemo, useState } from 'react'

import hospital from '@assets/images/hospital/img-01.png'
import BreadCrumb from '@src/components/Common/BreadCrumb'
import DeleteModal from '@src/components/Common/DeleteModal'
import Pagination from '@src/components/Common/Pagination'
import { LAYOUT_DIRECTION } from '@src/components/Constants/layout'
import TableContainer from '@src/components/CustomComponents/Table/Table'
import { deleteHolidaysData, getHolidaysData } from '@src/slices/thunk'
import { CirclePlus } from 'lucide-react'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'

import AddEditHolidays from '../../../../views/apps/hospital/staffList_Holiday/addEditHolidays'

const StaffHolidays = () => {
  const dispatch = useDispatch()
  const { holidays } = useSelector((state) => state.Holidays)
  const { layoutDirection } = useSelector((state) => state.Layout)

  const [holidaysData, setHolidaysData] = useState([])

  useEffect(() => {
    document.title = 'Holidays | Domiex - React JS Admin & Dashboard Template'
  }, [])

  useEffect(() => {
    if (holidays === null) {
      dispatch(getHolidaysData())
    } else {
      setHolidaysData(holidays)
    }
  }, [holidays, dispatch])

  // Delete handling
  const [medicine, setMedicine] = useState(null)
  const [show, setShow] = useState(false)
  const toggleDelete = () => {
    setShow(false)
    setMedicine(null)
  }

  const onClickEventListDelete = (list) => {
    setMedicine(list)
    setShow(true)
  }

  const handleDeleteList = () => {
    if (medicine) {
      dispatch(deleteHolidaysData([medicine._id]))
      setShow(false)
    }
  }

  // Add and edit handling
  const [modalState, setModalState] = useState({
    showAddHolidaysForm: false,
    showEditHolidaysForm: false,
  })

  const openModal = (key) => setModalState((prev) => ({ ...prev, [key]: true }))
  const closeModal = (key) =>
    setModalState((prev) => ({ ...prev, [key]: false }))

  const [editMode, setEditMode] = useState(false)
  const [currentEvent, setCurrentEvent] = useState(null)

  const handleOpenModal = useCallback((editMode = false, event = null) => {
    setEditMode(editMode)
    setCurrentEvent(event)
    const modalKey = editMode ? 'showEditHolidaysForm' : 'showAddHolidaysForm'
    openModal(modalKey)
  }, [])

  const handleCloseModal = () => {
    const modalKey = editMode ? 'showEditHolidaysForm' : 'showAddHolidaysForm'
    closeModal(modalKey)
    setEditMode(false)
    setCurrentEvent(null)
  }

  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedEvents = holidaysData.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  const formatDate = (date) => {
    const parsedDate = new Date(date)
    const day = parsedDate.getDate()
    const month = parsedDate.toLocaleString('default', { month: 'short' })
    const year = parsedDate.getFullYear()
    return `${day} ${month} ${year}`
  }

  const columns = useMemo(
    () => [
      {
        header: 'Holiday Name',
        accessorKey: 'name',
      },
      {
        header: 'Date',
        accessorKey: 'date',
        cell: ({ row }) => formatDate(row.original.date),
      },
      {
        header: 'Day',
        accessorKey: 'day',
      },
      {
        header: 'Action',
        accessorKey: 'action',
        cell: (value) => (
          <div className="flex items-center gap-2">
            <button
              className="btn btn-sub-gray btn-icon !size-8 rounded-md"
              title="edit"
              onClick={(e) => {
                e.preventDefault()
                handleOpenModal(true, value.row.original)
              }}>
              <i className="ri-pencil-line"></i>
            </button>
            <button
              className="btn btn-sub-red btn-icon !size-8 rounded-md"
              title="delete"
              onClick={(e) => {
                e.preventDefault()
                onClickEventListDelete(value.row.original)
              }}>
              <i className="ri-delete-bin-line"></i>
            </button>
          </div>
        ),
      },
    ],
    [handleOpenModal]
  )

  return (
    <React.Fragment>
      <BreadCrumb title="Holidays" subTitle="Staff" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 xl:col-span-4 2xl:col-span-3">
          <div className="bg-gray-100 card  dark:bg-dark-850">
            <div className="card-body">
              <div className="mx-5 mb-4">
                <img src={hospital} alt="hospitalImg" />
              </div>
              <div className="space-y-4">
                <div className="relative pl-5 before:absolute before:left-0 before:top-1.5 before:size-2 before:bg-primary-500 before:rounded-full">
                  <p className="mb-2 badge badge-gray">Today - 21 Jan, 2024</p>
                  <h6>World Religion Day</h6>
                </div>
                <div className="relative pl-5 before:absolute before:left-0 before:top-1.5 before:size-2 before:bg-yellow-500 before:rounded-full">
                  <p className="mb-2 badge badge-gray">
                    Upcoming - 04 Feb, 2024
                  </p>
                  <h6>World Cancer Day</h6>
                </div>
                <div className="relative pl-5 before:absolute before:left-0 before:top-1.5 before:size-2 before:bg-red-500 before:rounded-full">
                  <p className="mb-2 badge badge-gray">
                    Upcoming - 25 May, 2024
                  </p>
                  <h6>African Liberation Day</h6>
                </div>
                <div className="relative pl-5 before:absolute before:left-0 before:top-1.5 before:size-2 before:bg-red-500 before:rounded-full">
                  <p className="mb-2 badge badge-gray">
                    Upcoming - 29 Sep, 2024
                  </p>
                  <h6>World Heart Day</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 xl:col-span-8 2xl:col-span-9 card">
          <div className="flex items-center gap-3 card-header">
            <h6 className="card-title grow">Holiday</h6>
            <button
              type="button"
              className="btn btn-primary shrink-0"
              onClick={() => openModal('showAddHolidaysForm')}>
              <CirclePlus className="inline-block mr-1 size-4" /> Add Holiday
            </button>
          </div>
          <div className="pt-0 card-body">
            <div>
              <TableContainer
                columns={columns}
                data={paginatedEvents}
                thClassName="!font-medium cursor-pointer"
                divClassName="overflow-x-auto table-box whitespace-nowrap"
                tableClassName="table flush"
                thTrClassName="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500"
              />
              <Pagination
                totalItems={holidaysData.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>

      <Toaster
        position="top-right"
        reverseOrder={layoutDirection === LAYOUT_DIRECTION.RTL}
      />

      <DeleteModal
        show={show}
        handleHide={toggleDelete}
        deleteModalFunction={handleDeleteList}
      />

      <AddEditHolidays
        modalState={modalState}
        closeModal={handleCloseModal}
        eventList={holidaysData}
        editMode={editMode}
        currentContact={currentEvent}
      />
    </React.Fragment>
  )
}

export default StaffHolidays
