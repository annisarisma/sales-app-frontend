import React, { useCallback, useEffect, useMemo, useState } from 'react'

import DeleteModal from '@src/components/Common/DeleteModal'
import Pagination from '@src/components/Common/Pagination'
import TableContainer from '@src/components/CustomComponents/Table/Table'
import {
  deleteAppointmentsListData,
  getAppointmentsListData,
} from '@src/slices/thunk'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import AddEditAppointmentsList from './addEidteAppointmentsList'
import AppointmentOverView from './appointmentOverView'
import CallPatientsModal from './callPatientsModal'

const AppointmentsList = () => {
  const dispatch = useDispatch()
  const { appointments } = useSelector((state) => state.Appointments)

  const [appointmentList, setAppointmentList] = useState([])

  useEffect(() => {
    if (appointments === null) {
      dispatch(getAppointmentsListData())
    } else {
      setAppointmentList(appointments)
    }
  }, [appointments, dispatch])

  //delete
  const [appointment, setAppointment] = useState(null)

  const [shows, setShows] = useState(false)
  const toggleDeletes = () => {
    setShows(false)
    setAppointment(null)
  }

  const onClickEventListDeletes = (list) => {
    setAppointment(list)
    setShows(true)
  }

  const handleDeleteLists = () => {
    if (appointment) {
      dispatch(deleteAppointmentsListData([appointment._id]))
      setShows(false)
    }
  }

  //add and edite

  const [modalStates, setModalStates] = useState({
    showAddAppointmentForm: false,
    showEditAppointmentForm: false,
  })

  const openModals = (key) =>
    setModalStates((prev) => ({ ...prev, [key]: true }))
  const closeModals = (key) =>
    setModalStates((prev) => ({ ...prev, [key]: false }))

  const [editModes, setEditModes] = useState(false)

  const [currentAppointment, setCurrentAppointment] = useState(null)

  const handleOpenModals = useCallback((editMode = false, event = null) => {
    setEditModes(editMode)
    setCurrentAppointment(event)
    const modalKey = editMode
      ? 'showEditAppointmentForm'
      : 'showAddAppointmentForm'
    openModals(modalKey)
  }, [])

  const handleCloseModals = () => {
    const modalKey = editModes
      ? 'showEditAppointmentForm'
      : 'showAddAppointmentForm'
    closeModals(modalKey)
    setEditModes(false)
    setCurrentAppointment(null)
  }

  const [isModalOpens, setIsModalOpens] = useState(false)
  const [isCallModalOpen, setIsCallModalOpen] = useState(false)

  // handle close call modal
  const handleCloseCallModals = () => {
    setIsCallModalOpen(false)
    setIsModalOpens(true)
  }

  const [selectedAppointment, setSelectedAppointment] = useState(null) // Updated type here

  const onClickOverview = useCallback(
    (appointment) => {
      if (!selectedAppointment) {
        setSelectedAppointment(appointment) // Type is now correct
      }
      setIsModalOpens(true)
    },
    [selectedAppointment]
  )

  const handleHides = () => {
    setIsModalOpens(false)
    setSelectedAppointment(null) // Reset to null when modal is closed
  }

  //pagiantion
  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedEvents = appointmentList.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  const getStatusClass = (status) => {
    switch (status) {
      case 'New':
        return 'badge badge-primary'
      case 'Cancel':
        return 'badge badge-red'
      case 'Confirmed':
        return 'badge badge-green'
      case 'Completed':
        return 'badge badge-purple'
      case 'Pending':
        return 'badge badge-gray'
      default:
        return 'badge'
    }
  }

  const columns = useMemo(
    () => [
      {
        header: 'Patient Name',
        accessorKey: 'patientName',
        cell: (value) => {
          const { image, patientName } = value.row.original
          return (
            <>
              <div className="flex items-center gap-3">
                <div className="relative text-gray-500 bg-gray-100 rounded-full dark:bg-dark-850 dark:text-dark-500 size-8">
                  {image ? (
                    <img
                      src={image}
                      alt="image"
                      className="rounded-full"
                      height={32}
                      width={32}
                    />
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-500 bg-gray-100 rounded-full dark:bg-dark-850 dark:text-dark-500">
                      {' '}
                      {patientName?.charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <h6>
                    <Link to="#!"></Link>
                    {patientName}
                  </h6>
                </div>
              </div>
            </>
          )
        },
      },
      {
        header: 'Date',
        accessorKey: 'date',
      },
      {
        header: 'Time',
        accessorKey: 'startTime',
        cell: (value) => {
          return (
            <span>
              {value.row.original.startTime} - {value.row.original.endTime}
            </span>
          )
        },
      },
      {
        header: 'Treatment',
        accessorKey: 'treatmentType',
      },
      {
        header: 'Doctor',
        accessorKey: 'doctor',
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
          <div className="flex items-center gap-2">
            <button
              className="btn btn-sub-gray btn-icon !size-8"
              title="overview"
              data-modal-target="overviewModal"
              onClick={(e) => {
                e.preventDefault()
                onClickOverview(value.row.original)
              }}>
              <i className="ri-eye-line"></i>
            </button>
            <button
              className="btn btn-sub-red btn-icon !size-8"
              title="edit"
              onClick={(e) => {
                e.preventDefault()
                handleOpenModals(true, value.row.original)
              }}>
              <i className="ri-pencil-line"></i>
            </button>
            <button
              className="btn btn-sub-red btn-icon !size-8"
              title="delete"
              data-modal-target="deleteModal"
              onClick={(e) => {
                e.preventDefault()
                onClickEventListDeletes(value.row.original)
              }}>
              <i className="ri-delete-bin-line"></i>
            </button>
          </div>
        ),
      },
    ],
    [handleOpenModals, onClickOverview]
  )

  return (
    <React.Fragment>
      <div className="card">
        <div className="flex md:items-center gap-5 card-header flex-col md:flex-row">
          <h6 className="card-title grow">
            Appointments (<span>{appointmentList.length}</span>)
          </h6>
          <button type="button" className="btn btn-primary shrink-0">
            <Link to="/apps/hospital/appointments-book">Book Appointment</Link>
          </button>
        </div>
        <div className="pt-0 card-body">
          <div>
            <TableContainer
              columns={columns || []}
              data={paginatedEvents}
              thClassName="!font-medium cursor-pointer"
              divClassName="overflow-x-auto table-box"
              tableClassName="table whitespace-nowrap mb-4"
              thTrClassName="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500"
            />
            <Pagination
              totalItems={appointmentList.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
      <DeleteModal
        show={shows}
        handleHide={toggleDeletes}
        deleteModalFunction={handleDeleteLists}
      />
      <AddEditAppointmentsList
        modalState={modalStates}
        closeModal={handleCloseModals}
        appointmentList={appointmentList}
        editMode={editModes}
        currentAppointment={currentAppointment}
      />

      {selectedAppointment && (
        <AppointmentOverView
          show={isModalOpens}
          hideOverviewModal={() => setIsModalOpens(false)}
          handleHide={handleHides}
          appointment={selectedAppointment}
          deleteAppointment={onClickEventListDeletes}
          showCallModal={isCallModalOpen}
          handleShowCallModal={() => setIsCallModalOpen(true)}
        />
      )}

      {/* calling modal */}
      {selectedAppointment && (
        <CallPatientsModal
          show={isCallModalOpen}
          patients={selectedAppointment}
          handleHide={handleCloseCallModals}
        />
      )}
    </React.Fragment>
  )
}

export default AppointmentsList
