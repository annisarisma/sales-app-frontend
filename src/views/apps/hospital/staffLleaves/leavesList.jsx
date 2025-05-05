import React, { useCallback, useEffect, useMemo, useState } from 'react'

import Pagination from '@src/components/Common/Pagination'
import { LAYOUT_DIRECTION } from '@src/components/Constants/layout'
import TableContainer from '@src/components/CustomComponents/Table/Table'
import { getStaffLeaveData } from '@src/slices/thunk'
import { Filter, Search } from 'lucide-react'
import Flatpickr from 'react-flatpickr'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Select from 'react-select'

import EditStaffLeave from './editStaffLeave'
import LeaveInformation from './leaveInformation'

const LeaveStatus = [
  { label: 'All', value: 'All' },
  { label: 'Approved', value: 'Approved' },
  { label: 'Pending', value: 'Pending' },
  { label: 'Rejected', value: 'Rejected' },
]

const LeavesList = () => {
  const dispatch = useDispatch()
  const { staffLeave } = useSelector((state) => state.StaffLeave)
  const { layoutDirection } = useSelector((state) => state.Layout)

  const [staffLeavedData, setStaffLeavedData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [dateRange, setDateRange] = useState([null, null])
  const itemsPerPage = 10
  const [editMode, setEditMode] = useState(false)
  const [currentLeave, setCurrentLeave] = useState(null)

  useEffect(() => {
    if (staffLeave === null) {
      dispatch(getStaffLeaveData())
    } else {
      setStaffLeavedData(staffLeave)
    }
  }, [staffLeave, dispatch])

  const handleLeaveChange = (selectedOption) => {
    setStatusFilter(selectedOption)
  }

  const handleApprove = (_id) => {
    setStaffLeavedData((prev) =>
      prev.map((leave) =>
        leave._id === _id ? { ...leave, status: 'Approved' } : leave
      )
    )
  }

  const handleReject = (_id) => {
    setStaffLeavedData((prev) =>
      prev.map((leave) =>
        leave._id === _id ? { ...leave, status: 'Rejected' } : leave
      )
    )
  }

  const [modalState, setModalState] = useState({
    showAddLeaveForm: false,
    showEditLeaveForm: false,
  })

  const openModal = (key) => setModalState((prev) => ({ ...prev, [key]: true }))
  const closeModal = (key) =>
    setModalState((prev) => ({ ...prev, [key]: false }))

  const handleOpenModal = useCallback((editMode = false, event = null) => {
    setEditMode(editMode)
    setCurrentLeave(event)
    const modalKey = editMode ? 'showEditLeaveForm' : 'showAddLeaveForm'
    openModal(modalKey)
  }, [])

  const handleCloseModal = () => {
    const modalKey = editMode ? 'showEditLeaveForm' : 'showAddLeaveForm'
    closeModal(modalKey)
    setEditMode(false)
    setCurrentLeave(null)
  }

  // Filter leaves based on search term, status, and date range
  const filteredLeaves = useMemo(() => {
    return staffLeavedData.filter((leave) => {
      const matchesSearchTerm = searchTerm
        ? Object.values(leave).some((value) =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
          )
        : true

      const matchesStatus =
        statusFilter?.value === 'All' || !statusFilter
          ? true
          : leave.status === statusFilter.value

      const matchesDateRange =
        dateRange[0] && dateRange[1]
          ? new Date(leave.startDate) >= dateRange[0] &&
            new Date(leave.endDate) <= dateRange[1]
          : true

      return matchesSearchTerm && matchesStatus && matchesDateRange
    })
  }, [staffLeavedData, searchTerm, statusFilter, dateRange])

  const paginatedEvents = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredLeaves.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredLeaves, currentPage, itemsPerPage])

  const columns = useMemo(
    () => [
      {
        header: 'ID',
        accessorKey: 'staffId',
      },
      {
        header: 'Leave Type',
        accessorKey: 'leaveType',
      },
      {
        header: 'Start Date',
        accessorKey: 'startDate',
      },
      {
        header: 'End Date',
        accessorKey: 'endDate',
      },
      {
        header: 'Days',
        accessorKey: 'days',
        cell: ({ row }) => {
          const { startDate, endDate } = row.original
          const start = new Date(startDate)
          const end = new Date(endDate)
          const diffTime = Math.abs(end.getTime() - start.getTime())
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1 // Include the start date
          return diffDays
        },
      },
      {
        header: 'Reason',
        accessorKey: 'reason',
      },
      {
        header: 'Approved By',
        accessorKey: 'approvedBy',
      },
      {
        header: 'Request Date',
        accessorKey: 'dateRequested',
      },
      {
        header: 'Approved Date',
        accessorKey: 'dateApproved',
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
          <div className="flex items-center gap-2">
            <button
              title="Approve"
              className="btn btn-sub-green btn-icon !size-8"
              onClick={() => handleApprove(row.original._id)}>
              <i className="ri-check-line"></i>
            </button>
            <button
              title="Edit"
              className="btn btn-sub-gray btn-icon !size-8"
              onClick={(e) => {
                e.preventDefault()
                handleOpenModal(true, row.original)
              }}>
              <i className="ri-pencil-line"></i>
            </button>
            <button
              title="Reject"
              className="btn btn-sub-red btn-icon !size-8"
              onClick={() => handleReject(row.original._id)}>
              <i className="ri-close-line"></i>
            </button>
          </div>
        ),
      },
    ],
    [handleOpenModal]
  )

  const getStatusClass = (status) => {
    switch (status) {
      case 'Approved':
        return 'badge badge-green'
      case 'Rejected':
        return 'badge badge-red'
      case 'Pending':
        return 'badge badge-yellow'
      default:
        return 'badge'
    }
  }

  return (
    <React.Fragment>
      <LeaveInformation leaves={staffLeavedData} />

      <div className="card">
        <div className="flex items-center gap-3 card-header">
          <h6 className="card-title grow">Leaves</h6>
          <Link to="/apps/hospital/staff-leave-add" className="btn btn-primary">
            New Request
          </Link>
        </div>

        {/* Leave Information Section */}
        <div className="card-header">
          <div className="grid grid-cols-12 gap-space">
            <div className="col-span-12 md:col-span-6 xl:col-span-3 2xl:col-span-4">
              <div className="relative group/form">
                <input
                  type="text"
                  placeholder="Leave Type reason"
                  className="ltr:pl-9 rtl:pr-9 form-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 focus:outline-hidden">
                  <Search className="size-4" />
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-3 2xl:col-span-3">
              <Flatpickr
                options={{
                  mode: 'range',
                  dateFormat: 'd-m-Y',
                  onChange: (selectedDates) => {
                    if (selectedDates.length === 2) {
                      setDateRange([selectedDates[0], selectedDates[1]])
                    } else {
                      setDateRange([null, null])
                    }
                  },
                }}
                className="form-input"
                placeholder="Select date range"
              />
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-3 2xl:col-span-3">
              <Select
                classNamePrefix="select"
                options={LeaveStatus}
                value={statusFilter}
                onChange={handleLeaveChange}
                placeholder="Leave Status"
              />
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-3 2xl:col-span-2">
              <button type="submit" className="w-full btn btn-sub-gray">
                <Filter className="inline-block align-middle size-4" /> Filter
                Now
              </button>
            </div>
          </div>
        </div>
        <div className="pt-0 card-body">
          <TableContainer
            columns={columns}
            data={paginatedEvents}
            thClassName="!font-medium cursor-pointer"
            divClassName="overflow-x-auto table-box"
            tableClassName="table whitespace-nowrap"
            thTrClassName="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500"
          />
          <Pagination
            totalItems={filteredLeaves.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>

      <Toaster
        position="top-right"
        reverseOrder={layoutDirection === LAYOUT_DIRECTION.RTL}
      />

      <EditStaffLeave
        modalState={modalState}
        closeModal={handleCloseModal}
        staffLeveList={staffLeavedData}
        editMode={editMode}
        currentLeave={currentLeave}
      />
    </React.Fragment>
  )
}

export default LeavesList
