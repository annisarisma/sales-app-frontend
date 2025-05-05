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
import { deleteEventListData, getEventListData } from '@src/slices/thunk'
import AddEditEventList from '@src/views/apps/event/addEditEventList'
import { Plus, SlidersHorizontal } from 'lucide-react'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { createSelector } from 'reselect'

const EventList = () => {
  const dispatch = useDispatch()
  const customerData = createSelector(
    (state) => state.EventList,
    (state) => state.eventList
  )
  const eventList = useSelector(customerData)
  const { layoutDirection } = useSelector((state) => state.Layout)
  const [event, setEvent] = useState(null)
  const [show, setShow] = useState(false)
  const [eventListData, setEventListData] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [currentEvent, setCurrentEvent] = useState(null)
  const [sortOption, setSortOption] = useState('none')

  useEffect(() => {
    document.title = 'List View | Domiex - React JS Admin & Dashboard Template'
  }, [])

  useEffect(() => {
    if (!eventList) {
      dispatch(getEventListData())
    } else {
      setEventListData(eventList)
    }
  }, [eventList, dispatch])

  const toggleDelete = () => {
    setShow(false)
    setEvent(null)
  }

  const onClickEventListDelete = (list) => {
    setEvent(list)
    setShow(true)
  }

  const handleDeleteList = () => {
    if (event) {
      dispatch(deleteEventListData([event._id]))
      setShow(false)
    }
  }

  const [modalState, setModalState] = useState({
    showAddContactForm: false,
    showEditContactForm: false,
  })

  const openModal = (key) => setModalState((prev) => ({ ...prev, [key]: true }))
  const closeModal = (key) =>
    setModalState((prev) => ({ ...prev, [key]: false }))

  const handleOpenModal = useCallback((editMode = false, event = null) => {
    setEditMode(editMode)
    setCurrentEvent(event)
    const modalKey = editMode ? 'showEditContactForm' : 'showAddContactForm'
    openModal(modalKey)
  }, [])

  const handleCloseModal = () => {
    const modalKey = editMode ? 'showEditContactForm' : 'showAddContactForm'
    closeModal(modalKey)
    setEditMode(false)
    setCurrentEvent(null)
  }

  const getStatusClass = (status) => {
    switch (status) {
      case 'Published':
        return 'badge badge-green'
      case 'Expired':
        return 'badge badge-red'
      case 'Coming Soon':
        return 'badge badge-yellow'
      default:
        return 'badge'
    }
  }

  const handleSort = (option) => {
    let sortedList = [...eventListData]
    switch (option) {
      case 'eventNameAsc':
        sortedList.sort((a, b) => a.eventName.localeCompare(b.eventName))
        break
      case 'eventNameDesc':
        sortedList.sort((a, b) => b.eventName.localeCompare(a.eventName))
        break
      case 'status':
        sortedList.sort((a, b) => a.status.localeCompare(b.status))
        break
      default:
        break
    }
    setSortOption(option)
    setEventListData(sortedList)
  }

  const columns = useMemo(
    () => [
      {
        header: 'Event Name',
        accessorKey: 'eventName',
        cell: (value) => {
          return (
            <>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center p-1 border border-gray-200 rounded-sm size-9 dark:border-dark-800">
                  <img
                    src={value.row.original.image}
                    alt="valueImg"
                    className="rounded"
                    width={26}
                    height={26}
                  />
                </div>
                <h6>
                  <Link to="apps-ecommerce-event-overview"></Link>
                  {value.row.original.eventName}
                </h6>
              </div>
            </>
          )
        },
      },
      {
        header: 'Event Date',
        accessorKey: 'eventDate',
      },
      {
        header: 'People Size',
        accessorKey: 'peopleSize',
      },
      {
        header: 'Location',
        accessorKey: 'location',
      },
      {
        header: 'Event Type',
        accessorKey: 'eventType',
      },
      {
        header: 'Price',
        accessorKey: 'price',
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
        cell: (value) => (
          <>
            <Dropdown
              position="right"
              trigger="click"
              dropdownClassName="dropdown">
              <DropdownButton colorClass="flex items-center text-gray-500 dark:text-dark-500">
                <i className="ri-more-2-fill"></i>
              </DropdownButton>
              <DropdownMenu>
                <Link to="/apps/events/overview" className="dropdown-item ">
                  <i className="align-middle ltr:mr-2 rtl:ml-2 ri-eye-line"></i>{' '}
                  <span>Overview</span>
                </Link>

                <Link
                  to="#!"
                  className="dropdown-item "
                  onClick={(e) => {
                    e.preventDefault()
                    handleOpenModal(true, value.row.original)
                  }}>
                  <i className="align-middle ltr:mr-2 rtl:ml-2 ri-pencil-line"></i>{' '}
                  <span>Edit</span>
                </Link>
                <Link
                  to="#!"
                  className="dropdown-item"
                  onClick={(e) => {
                    e.preventDefault()
                    onClickEventListDelete(value.row.original)
                  }}>
                  <i className="align-middle ltr:mr-2 rtl:ml-2 ri-delete-bin-line"></i>{' '}
                  <span>Delete</span>
                </Link>
              </DropdownMenu>
            </Dropdown>
          </>
        ),
      },
    ],
    [handleOpenModal]
  )

  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedEvents = eventListData.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  return (
    <React.Fragment>
      <BreadCrumb title="List View" subTitle="Events" />
      <div>
        <div className="flex flex-wrap items-center gap-5">
          <h6 className="grow">
            Event Listings (<span>{eventListData.length}</span>)
          </h6>
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <Dropdown
              position="right"
              trigger="click"
              dropdownClassName="dropdown">
              <DropdownButton colorClass="btn btn-sub-gray btn-icon btn-icon-text">
                <SlidersHorizontal className="size-4" />
              </DropdownButton>
              <DropdownMenu>
                <button
                  onClick={() => handleSort('none')}
                  className="dropdown-item text-start">
                  <span>No Sorting</span>
                </button>
                <button
                  onClick={() => handleSort('eventNameAsc')}
                  className="dropdown-item text-start">
                  <span>Alphabetical (A -&gt; Z)</span>
                </button>
                <button
                  onClick={() => handleSort('eventNameDesc')}
                  className="dropdown-item text-start">
                  <span>Reverse Alphabetical (Z -&gt; A)</span>
                </button>
                <button
                  onClick={() => handleSort('status')}
                  className="dropdown-item text-start">
                  <span>Status</span>
                </button>
              </DropdownMenu>
            </Dropdown>

            <button
              className="btn btn-primary shrink-0"
              data-modal-target="addEventModal"
              onClick={() => openModal('showAddContactForm')}>
              <Plus className="inline-block size-4 me-1" />
              <span className="align-baseline">Add New Event</span>
            </button>
          </div>
        </div>

        <TableContainer
          columns={columns || []}
          data={paginatedEvents || sortOption}
          thClassName="!font-medium cursor-pointer"
          divClassName="mt-5 overflow-x-auto"
          tableClassName="table whitespace-nowrap"
          thTrClassName="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500"
        />
        <div className="mb-5">
          <Pagination
            totalItems={eventListData.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>

      <Toaster
        position="top-right"
        reverseOrder={layoutDirection === LAYOUT_DIRECTION.RTL}
      />

      <AddEditEventList
        modalState={modalState}
        closeModal={handleCloseModal}
        eventList={eventListData}
        editMode={editMode}
        currentEvent={currentEvent}
      />

      <DeleteModal
        show={show}
        handleHide={toggleDelete}
        deleteModalFunction={handleDeleteList}
      />
    </React.Fragment>
  )
}

export default EventList
