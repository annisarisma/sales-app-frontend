import React, { useCallback, useEffect, useMemo, useState } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import DeleteModal from '@src/components/Common/DeleteModal'
import Pagination from '@src/components/Common/Pagination'
import { LAYOUT_DIRECTION } from '@src/components/Constants/layout'
import TableContainer from '@src/components/CustomComponents/Table/Table'
import {
  deleteEmployeeSalaryData,
  getEmployeeSalaryData,
} from '@src/slices/thunk'
import AddEditEmployeeSalary from '@src/views/apps/hospital/payroll/addEditEmployeeSalary'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'

const PayrollEmployeeSalary = () => {
  const dispatch = useDispatch()
  const { salary } = useSelector((state) => state.EmployeeSalary)
  const { layoutDirection } = useSelector((state) => state.Layout)
  const [show, setShow] = useState(false)
  const [event, setEvent] = useState(null)
  const [employeeSalaryData, setEmployeeSalaryData] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [currentEvent, setCurrentEvent] = useState(null)
  useEffect(() => {
    document.title =
      'Employee Salary | Domiex - React JS Admin & Dashboard Template'
  }, [])

  useEffect(() => {
    if (salary === null) {
      dispatch(getEmployeeSalaryData())
    } else {
      setEmployeeSalaryData(salary)
    }
  }, [salary, dispatch])

  const toggleDelete = () => {
    setShow(false)
    setEvent(null)
  }

  const handleDeleteList = () => {
    if (event) {
      dispatch(deleteEmployeeSalaryData([event._id]))
      setShow(false)
    }
  }

  const onClickEventListDelete = (list) => {
    setEvent(list)
    setShow(true)
  }

  const [modalState, setModalState] = useState({
    showAddEmployeeForm: false,
    showEmployeeForm: false,
  })

  const openModal = (key) => setModalState((prev) => ({ ...prev, [key]: true }))
  const closeModal = (key) =>
    setModalState((prev) => ({ ...prev, [key]: false }))

  const handleOpenModal = useCallback((editMode = false, event = null) => {
    setEditMode(editMode)
    setCurrentEvent(event)
    const modalKey = editMode ? 'showEmployeeForm' : 'showAddEmployeeForm'
    openModal(modalKey)
  }, [])

  const handleCloseModal = () => {
    const modalKey = editMode ? 'showEmployeeForm' : 'showAddEmployeeForm'
    closeModal(modalKey)
    setEditMode(false)
    setCurrentEvent(null)
  }

  const getStatusClass = (status) => {
    switch (status) {
      case 'Successful':
        return 'badge badge-green'
      case 'Pending':
        return 'badge badge-yellow'
      case 'Failed':
        return 'badge badge-red'
      default:
        return 'badge'
    }
  }

  const columns = useMemo(
    () => [
      {
        header: 'Employee Name',
        accessorKey: 'employeeName',
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
        header: 'Department',
        accessorKey: 'department',
      },
      {
        header: 'Monthly Salary',
        accessorKey: 'monthlySalary',
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
                className="btn btn-sub-red btn-icon !size-8"
                title="delete"
                data-modal-target="deleteModal"
                onClick={(e) => {
                  e.preventDefault()
                  onClickEventListDelete(value.row.original)
                }}>
                <i className="ri-delete-bin-line"></i>
              </button>
            </div>
          </>
        ),
      },
    ],
    [handleOpenModal]
  )

  // pagination

  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedEvents = employeeSalaryData.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  return (
    <React.Fragment>
      <BreadCrumb title="Employee Salary" subTitle="Payroll" />
      <div className="card">
        <div className="flex items-center gap-3 card-header">
          <h6 className="card-title grow">Employee</h6>
          <button type="button" className="btn btn-primary shrink-0">
            Download
          </button>
        </div>

        <div className="pt-0 card-body">
          <TableContainer
            columns={columns || []}
            data={paginatedEvents}
            divClassName="overflow-x-auto table-box"
            tableClassName="table flush"
            thTrClassName="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500"
          />
          <Pagination
            totalItems={employeeSalaryData.length}
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

      <DeleteModal
        show={show}
        handleHide={toggleDelete}
        deleteModalFunction={handleDeleteList}
      />

      <AddEditEmployeeSalary
        modalState={modalState}
        closeModal={handleCloseModal}
        salaryList={employeeSalaryData}
        editMode={editMode}
        currentSalary={currentEvent}
      />
    </React.Fragment>
  )
}

export default PayrollEmployeeSalary
