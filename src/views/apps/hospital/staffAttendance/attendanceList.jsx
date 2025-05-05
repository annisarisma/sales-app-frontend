import React, { useCallback, useEffect, useMemo, useState } from 'react'

import DeleteModal from '@src/components/Common/DeleteModal'
import Pagination from '@src/components/Common/Pagination'
import { LAYOUT_DIRECTION } from '@src/components/Constants/layout'
import TableContainer from '@src/components/CustomComponents/Table/Table'
import { deleteAttendanceData, getAttendanceData } from '@src/slices/thunk'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'

import EditAttendance from './editAttendance'

const AttendanceList = () => {
  const dispatch = useDispatch()
  const { attendance } = useSelector((state) => state.Attendance)
  const { layoutDirection } = useSelector((state) => state.Layout)

  const [patientToDelete, setPatientToDelete] = useState(null)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [attendanceListData, setAttendanceListData] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [currentAttendance, setCurrentAttendance] = useState(null)
  useEffect(() => {
    if (attendance === null) {
      dispatch(getAttendanceData())
    } else {
      setAttendanceListData(attendance)
    }
  }, [attendance, dispatch])

  const toggleDeleteModal = useCallback(() => {
    setShowDeleteModal((prev) => !prev)
  }, [])

  const onClickEventListDelete = useCallback(
    (patient) => {
      setPatientToDelete(patient)
      toggleDeleteModal()
    },
    [toggleDeleteModal]
  )

  const handleDeletePatients = () => {
    if (patientToDelete) {
      dispatch(deleteAttendanceData([patientToDelete._id]))
      toggleDeleteModal()
    }
  }

  const [modalState, setModalState] = useState({
    showAddAttendanceForm: false,
    showEditAttendanceForm: false,
  })

  const openModal = (key) => setModalState((prev) => ({ ...prev, [key]: true }))
  const closeModal = (key) =>
    setModalState((prev) => ({ ...prev, [key]: false }))

  const handleOpenModal = useCallback((editMode = false, event = null) => {
    setEditMode(editMode)
    setCurrentAttendance(event)
    const modalKey = editMode
      ? 'showEditAttendanceForm'
      : 'showAddAttendanceForm'
    openModal(modalKey)
  }, [])

  const handleCloseModal = () => {
    const modalKey = editMode
      ? 'showEditAttendanceForm'
      : 'showAddAttendanceForm'
    closeModal(modalKey)
    setEditMode(false)
    setCurrentAttendance(null)
  }

  const itemsPerPage = 5
  const [currentPage, setCurrentPage] = useState(1)
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedEvents = attendanceListData.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  const parseTime = (timeString) => {
    if (!timeString || typeof timeString !== 'string')
      return { hours: 0, minutes: 0 }

    const [time, modifier] = timeString.split(' ')
    if (!time || !modifier) return { hours: 0, minutes: 0 }

    const [hours, minutes] = time.split(':').map(Number)
    let parsedHours = hours % 12
    if (modifier.toLowerCase() === 'pm') {
      parsedHours += 12
    }

    return {
      hours: parsedHours,
      minutes: minutes || 0,
    }
  }

  const calculateWorkedTime = useCallback((checkInTime, checkOutTime) => {
    const checkIn = parseTime(checkInTime)
    const checkOut = parseTime(checkOutTime)

    let hours = checkOut.hours - checkIn.hours
    let minutes = checkOut.minutes - checkIn.minutes

    if (minutes < 0) {
      minutes += 60
      hours--
    }

    if (hours < 0) {
      hours += 24
    }

    return { hours, minutes }
  }, [])

  // Calculate difference time
  const calculateDifferenceTime = useCallback((workedTime, shiftTime) => {
    const shiftHoursMatch = shiftTime.match(/\d+/)
    const shiftHours = shiftHoursMatch ? parseInt(shiftHoursMatch[0], 10) : 9 // Default to 9 hrs
    const shiftMinutes = 0

    let hours = workedTime.hours - shiftHours
    let minutes = workedTime.minutes - shiftMinutes

    if (minutes < 0) {
      minutes += 60
      hours--
    }

    return { hours, minutes }
  }, [])

  const processedAttendanceData = useMemo(() => {
    return paginatedEvents.map((event) => {
      const { checkInTime, checkOutTime, shiftTime = '9 hrs Shift' } = event // Default shift time

      const workedTime = calculateWorkedTime(checkInTime, checkOutTime)
      const difference = calculateDifferenceTime(workedTime, shiftTime)

      return {
        ...event,
        shiftTime, // Ensure the shiftTime is part of the data
        workedTime: `${workedTime.hours} hrs ${workedTime.minutes} min`,
        difference: `${difference.hours} hrs ${difference.minutes} min`,
      }
    })
  }, [paginatedEvents, calculateWorkedTime, calculateDifferenceTime])

  const columns = useMemo(
    () => [
      {
        header: 'Date',
        accessorKey: 'date',
      },
      {
        header: 'Shift Time',
        accessorKey: 'shiftTime',
        cell: () => <div className="badge badge-gray">9 hrs Shift</div>,
      },
      {
        header: 'Check In',
        accessorKey: 'checkInTime',
      },
      {
        header: 'Check Out',
        accessorKey: 'checkOutTime',
      },
      {
        header: 'Worked Time',
        accessorKey: 'workedTime',
      },
      {
        header: 'Difference',
        accessorKey: 'difference',
      },
      {
        header: 'Status',
        accessorKey: 'status',
        cell: ({ row }) => {
          const { status } = row.original
          return (
            <span className={`badge ${getStatusClass(status)}`}>{status}</span>
          )
        },
      },
      {
        header: 'Action',
        accessorKey: '',
        cell: (value) => (
          <div className="flex items-center gap-2">
            <button
              className="btn btn-sub-primary btn-icon !size-8"
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
    [handleOpenModal, onClickEventListDelete]
  )

  const getStatusClass = (status) => {
    switch (status) {
      case 'Present':
        return 'badge-green'
      case 'Late':
        return 'badge-yellow'
      case 'Absent':
        return 'badge-red'
      default:
        return 'badge'
    }
  }
  return (
    <React.Fragment>
      <div className="col-span-12 card">
        <div className="flex items-center gap-3 card-header">
          <h6 className="card-title grow">Attendance List</h6>
          <button
            type="button"
            className="btn btn-primary shrink-0"
            onClick={() => handleOpenModal(false)}>
            Start Timing
          </button>
        </div>
        <div className="pt-0 card-body">
          <div>
            <TableContainer
              columns={columns}
              data={processedAttendanceData}
              thClassName="!font-medium cursor-pointer"
              divClassName="overflow-x-auto table-box"
              tableClassName="table flush whitespace-nowrap"
              thTrClassName="text-gray-500 dark:text-dark-500"
            />
            <Pagination
              totalItems={attendanceListData.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>

      <Toaster
        position="top-right"
        reverseOrder={layoutDirection === LAYOUT_DIRECTION.RTL}
      />
      <DeleteModal
        show={showDeleteModal}
        handleHide={toggleDeleteModal}
        deleteModalFunction={handleDeletePatients}
      />

      <EditAttendance
        modalState={modalState}
        closeModal={handleCloseModal}
        attendanceList={attendanceListData}
        editMode={editMode}
        currentAttendance={currentAttendance}
      />
    </React.Fragment>
  )
}

export default AttendanceList
