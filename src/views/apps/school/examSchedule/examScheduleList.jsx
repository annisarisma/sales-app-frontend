import React, { useCallback, useEffect, useMemo, useState } from 'react'

import DeleteModal from '@common//DeleteModal'
import Pagination from '@common//Pagination'
import TableContainer from '@custom/Table/Table'
import { deleteExamListData, getExamListData } from '@src/slices/thunk'
import { CirclePlus } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'

import AddEditExamSchedule from './addEditExamSchedule'

const studentStd = [
  { label: 'All', value: 'All' },
  { label: 'STD 12', value: '12' },
  { label: 'STD 11', value: '11' },
  { label: 'STD 10', value: '10' },
  { label: 'STD 9', value: '9' },
  { label: 'STD 8', value: '8' },
  { label: 'STD 7', value: '7' },
  { label: 'STD 6', value: '6' },
]

const timeDuration = [
  { label: 'All', value: 'All' },
  { label: 'Today', value: 'Today' },
  { label: 'Tomorrow', value: 'Tomorrow' },
  { label: 'Weekly', value: 'Weekly' },
  { label: 'Monthly', value: 'Monthly' },
  { label: 'Yearly', value: 'Yearly' },
]

const ExamScheduleList = () => {
  const dispatch = useDispatch()
  const { examSchedule } = useSelector((state) => state.ExamList)
  const [examListData, setExamListData] = useState([])
  const [selectedStudentStd, setSelectedStudentStd] = useState(null)
  const [selectedTimeDuration, setSelectedTimeDuration] = useState(null)
  const [editMode, setEditMode] = useState(false)
  const [currentExam, setCurrentExam] = useState(null)
  useEffect(() => {
    if (!examSchedule) {
      dispatch(getExamListData())
    } else {
      setExamListData(examSchedule)
    }
  }, [examSchedule, dispatch])

  const filterByTimeDuration = (exam) => {
    const today = new Date()
    const startDate = new Date(exam.startDate)

    switch (selectedTimeDuration?.value) {
      case 'Today':
        return startDate.toDateString() === today.toDateString()
      case 'Tomorrow':
        const tomorrow = new Date(today)
        tomorrow.setDate(today.getDate() + 1)
        return startDate.toDateString() === tomorrow.toDateString()
      case 'Weekly':
        const nextWeek = new Date(today)
        nextWeek.setDate(today.getDate() + 7)
        return startDate >= today && startDate <= nextWeek
      case 'Monthly':
        return (
          startDate.getMonth() === today.getMonth() &&
          startDate.getFullYear() === today.getFullYear()
        )
      case 'Yearly':
        return startDate.getFullYear() === today.getFullYear()
      case 'All':
      default:
        return true
    }
  }

  const [modalState, setModalState] = useState({
    showAddExamForm: false,
    showEditExamForm: false,
  })

  const handleStudentStd = (selectedOption) => {
    setSelectedStudentStd(selectedOption)
  }

  const filteredData = examListData.filter((exam) => {
    const matchesType =
      !selectedStudentStd ||
      selectedStudentStd.value === 'All' ||
      exam.class === selectedStudentStd.value
    const matchesDuration = !selectedTimeDuration || filterByTimeDuration(exam)
    return matchesType && matchesDuration
  })

  const openModal = (key) => setModalState((prev) => ({ ...prev, [key]: true }))
  const closeModal = (key) =>
    setModalState((prev) => ({ ...prev, [key]: false }))

  const handleOpenModal = useCallback((editMode = false, event = null) => {
    setEditMode(editMode)
    setCurrentExam(event)
    const modalKey = editMode ? 'showEditExamForm' : 'showAddExamForm'
    openModal(modalKey)
  }, [])

  const handleCloseModal = () => {
    const modalKey = editMode ? 'showEditExamForm' : 'showAddExamForm'
    closeModal(modalKey)
    setEditMode(false)
    setCurrentExam(null)
  }

  const [event, setEvent] = useState(null)
  const [show, setShow] = useState(false)

  const toggleDelete = () => {
    setShow(false)
    setEvent(null)
  }

  const onClickEventListDelete = (list) => {
    setEvent(list)
    setShow(true)
  }

  const handleTimeDuration = (selectedOption) => {
    setSelectedTimeDuration(selectedOption)
  }

  const handleDeleteList = () => {
    if (event) {
      dispatch(deleteExamListData([event._id]))
      setShow(false)
    }
  }

  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedEvents = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  const getStatusClass = (status) => {
    switch (status) {
      case 'New':
        return 'badge badge-sky'
      case 'Scheduled':
        return 'badge badge-yellow'
      case 'Completed':
        return 'badge badge-green'
      default:
        return 'badge'
    }
  }

  const columns = useMemo(
    () => [
      {
        header: 'Id',
        accessorKey: 'testId',
      },
      {
        header: 'Test Name',
        accessorKey: 'testName',
      },
      {
        header: 'Test Category',
        accessorKey: 'testCategory',
      },
      {
        header: 'Test Type',
        accessorKey: 'testType',
      },
      {
        header: 'Class',
        accessorKey: 'class',
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
              className="btn btn-sub-gray btn-icon !size-8 rounded-md"
              data-modal-target="addExamModal"
              onClick={(e) => {
                e.preventDefault()
                handleOpenModal(true, row.original)
              }}>
              <i className="ri-pencil-line"></i>
            </button>
            <button
              className="btn btn-sub-red btn-icon !size-8 rounded-md"
              onClick={(e) => {
                e.preventDefault()
                onClickEventListDelete(row.original)
              }}>
              {' '}
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
      <div className="card">
        <div className="justify-between md:flex card-header gap-space">
          <div>
            <h6 className="card-title">Exam Schedule List</h6>
          </div>
          <div className="flex flex-wrap gap-2 mt-3 md:mt-0">
            <div>
              <div id="stdFilterSelect">
                <Select
                  classNamePrefix="select"
                  options={studentStd}
                  value={selectedStudentStd}
                  onChange={handleStudentStd}
                  placeholder="Select STD"
                  isClearable={true}
                />
              </div>
            </div>
            <div>
              <div id="dateFilterSelect">
                <Select
                  classNamePrefix="select"
                  options={timeDuration}
                  value={selectedTimeDuration}
                  onChange={handleTimeDuration}
                  placeholder="Select Filters."
                  isClearable={true}
                />
              </div>
            </div>
            <div>
              <button
                type="button"
                className="w-full btn btn-primary"
                data-modal-target="addExamModal"
                onClick={() => openModal('showAddExamForm')}>
                <CirclePlus className="inline-block ltr:mr-1 rtl:ml-1 size-4" />{' '}
                Add Exam Schedule
              </button>
            </div>
          </div>
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
              totalItems={filteredData.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
      <DeleteModal
        show={show}
        handleHide={toggleDelete}
        deleteModalFunction={handleDeleteList}
      />
      <AddEditExamSchedule
        modalState={modalState}
        closeModal={handleCloseModal}
        examList={examListData}
        editMode={editMode}
        currentExam={currentExam}
      />
    </React.Fragment>
  )
}

export default ExamScheduleList
