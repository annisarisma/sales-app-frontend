import React, { useCallback, useEffect, useMemo, useState } from 'react'

import DeleteModal from '@src/components/Common/DeleteModal'
import Pagination from '@src/components/Common/Pagination'
import TableContainer from '@src/components/CustomComponents/Table/Table'
import { deleteAppointmentsData, getAppointmentsData } from '@src/slices/thunk'
import { Plus } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'

import AddEditeAppointments from './addEditeAppointments'

const AppointmentsHistory = () => {
  //get
  const dispatch = useDispatch()
  const { appointments } = useSelector((state) => state.Reports)
  const [appointmentsData, setAppointmentsData] = useState([])
  useEffect(() => {
    if (!appointments) {
      dispatch(getAppointmentsData())
    } else {
      setAppointmentsData(appointments)
    }
  }, [appointments, dispatch])

  //delete
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
      dispatch(deleteAppointmentsData([medicine._id]))
      setShow(false)
    }
  }

  //add and edit
  const [modalState, setModalState] = useState({
    showAddAppointmentsForm: false,
    showAppointmentsForm: false,
  })

  const openModal = (key) => setModalState((prev) => ({ ...prev, [key]: true }))
  const closeModal = (key) =>
    setModalState((prev) => ({ ...prev, [key]: false }))

  const [editMode, setEditMode] = useState(false)

  const [currentAppointment, setCurrentAppointment] = useState(null)

  const handleOpenModal = useCallback((editMode = false, event = null) => {
    setEditMode(editMode)
    setCurrentAppointment(event)
    const modalKey = editMode
      ? 'showAppointmentsForm'
      : 'showAddAppointmentsForm'
    openModal(modalKey)
  }, [])

  const handleCloseModal = () => {
    const modalKey = editMode
      ? 'showAppointmentsForm'
      : 'showAddAppointmentsForm'
    closeModal(modalKey)
    setEditMode(false)
    setCurrentAppointment(null)
  }

  const itemsPerPage = 5
  const [currentPage, setCurrentPage] = useState(1)
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedEvents = appointmentsData.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  const getStatusClass = (status) => {
    switch (status) {
      case 'Confirmed':
        return 'badge badge-green'
      case 'Completed':
        return 'badge badge-green'
      case 'Expired':
        return 'badge badge-red'
      case 'Pending':
        return 'badge badge-yellow'
      default:
        return 'badge'
    }
  }

  const columns = useMemo(
    () => [
      {
        header: 'Date',
        accessorKey: 'date',
      },
      {
        header: 'Treatment Type',
        accessorKey: 'treatmentType',
      },
      {
        header: 'Reason Condition',
        accessorKey: 'reasonCondition',
      },
      {
        header: 'notes',
        accessorKey: 'notes',
      },
      {
        header: 'Time',
        accessorKey: 'time',
      },
      {
        header: 'Doctor',
        accessorKey: 'doctor',
      },

      {
        header: '',
        accessorKey: 'status',
        cell: ({ row }) => {
          const { status } = row.original
          return <span className={getStatusClass(status)}>{status}</span>
        },
      },
      {
        header: 'Action',
        accessorKey: 'action',
        cell: (value) => (
          <div className="flex items-center gap-2">
            <button
              className="btn btn-sub-gray btn-icon !size-8"
              title="overview">
              <i className="ri-eye-line"></i>
            </button>
            <button
              className="btn btn-sub-gray btn-icon !size-8"
              title="edit"
              onClick={(e) => {
                e.preventDefault()
                handleOpenModal(true, value.row.original)
              }}>
              <i className="ri-pencil-line"></i>
            </button>
            <button
              className="btn btn-sub-red btn-icon !size-8"
              title="delete"
              data-modal-target="deleteModalAppointment"
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
      <div className="col-span-12 overflow-hidden card">
        <div className="flex items-center gap-3 card-header">
          <h6 className="card-title grow">Appointments History</h6>
          <button
            className="font-medium shrink-0 text-primary-500 link hover:text-primary-600"
            onClick={() => openModal('showAddAppointmentsForm')}>
            <Plus className="inline-block mb-1 align-middle size-4" /> New
            Appointment
          </button>
        </div>
        <div className="pt-0 card-body">
          <div>
            <TableContainer
              columns={columns || []}
              data={paginatedEvents}
              divClassName="overflow-x-auto table-box"
              tableClassName="table whitespace-nowrap"
              thTrClassName="*:px-3 *:py-2.5"
              isHeader={false}
            />
            <Pagination
              totalItems={appointmentsData.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
      <DeleteModal
        show={show}
        handleHide={toggleDelete}
        deleteModalFunction={handleDeleteList}
      />
      <AddEditeAppointments
        modalState={modalState}
        closeModal={handleCloseModal}
        appointmentsList={appointmentsData}
        editMode={editMode}
        currentAppointment={currentAppointment}
      />
    </React.Fragment>
  )
}

export default AppointmentsHistory
