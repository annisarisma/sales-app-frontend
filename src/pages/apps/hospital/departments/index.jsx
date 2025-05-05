import React, { useCallback, useEffect, useMemo, useState } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import DeleteModal from '@src/components/Common/DeleteModal'
import Pagination from '@src/components/Common/Pagination'
import { LAYOUT_DIRECTION } from '@src/components/Constants/layout'
import TableContainer from '@src/components/CustomComponents/Table/Table'
import { deleteDepartmentsData, getDepartmentsData } from '@src/slices/thunk'
import { CirclePlus } from 'lucide-react'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import AddEditDepartment from '../../../../views/apps/hospital/department/addEditDepartment'
import DistributedColumnChart from '../../../../views/apps/hospital/department/distributedColumnChart'

const Departments = () => {
  //get
  const dispatch = useDispatch()
  const { department } = useSelector((state) => state.Departments)
  const { layoutDirection } = useSelector((state) => state.Layout)
  const [show, setShow] = useState(false)
  const [event, setEvent] = useState(null)
  const [departmentData, setDepartmentData] = useState([])

  useEffect(() => {
    document.title =
      'Departments | Domiex - React JS Admin & Dashboard Template'
  }, [])

  useEffect(() => {
    if (department === null) {
      dispatch(getDepartmentsData())
    } else {
      setDepartmentData(department)
    }
  }, [department, dispatch])

  const toggleDelete = () => {
    setShow(false)
    setEvent(null)
  }

  const handleDeleteList = () => {
    if (event) {
      dispatch(deleteDepartmentsData([event._id]))
      setShow(false)
    }
  }

  const onClickEventListDelete = (list) => {
    setEvent(list)
    setShow(true)
  }

  //add and edit
  const [modalState, setModalState] = useState({
    showAddDepartment: false,
    showEditDepartment: false,
  })

  const openModal = (key) => setModalState((prev) => ({ ...prev, [key]: true }))
  const closeModal = (key) =>
    setModalState((prev) => ({ ...prev, [key]: false }))

  const [editMode, setEditMode] = useState(false)

  const [currentEvent, setCurrentEvent] = useState(null)

  const handleOpenModal = useCallback((editMode = false, event = null) => {
    setEditMode(editMode)
    setCurrentEvent(event)
    const modalKey = editMode ? 'showEditDepartment' : 'showAddDepartment'
    openModal(modalKey)
  }, [])

  const handleCloseModal = () => {
    const modalKey = editMode ? 'showEditDepartment' : 'showAddDepartment'
    closeModal(modalKey)
    setEditMode(false)
    setCurrentEvent(null)
  }

  //pagination
  const itemsPerPage = 5
  const [currentPage, setCurrentPage] = useState(1)
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedEvents = departmentData.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  const getStatusClass = (status) => {
    switch (status) {
      case 'Active':
        return 'badge badge-green'
      case 'Unactive':
        return 'badge badge-red'
      default:
        return 'badge'
    }
  }

  const columns = useMemo(
    () => [
      {
        header: 'Id',
        accessorKey: 'departmentId',
        cell: ({ row }) => {
          return <span>{`PED-${row.index + 1}`}</span>
        },
      },
      {
        header: 'Department Name',
        accessorKey: 'departmentName',
      },
      {
        header: 'Doctor',
        accessorKey: 'doctor',
        cell: ({ row }) => {
          const { doctor, image } = row.original
          return (
            <div className="flex">
              <div className="flex items-center gap-3">
                <div className="relative text-gray-500 bg-gray-100 rounded-full dark:text-dark-500 dark:bg-dark-850 size-10">
                  {image ? (
                    <img
                      src={image}
                      alt="image"
                      className="rounded-full"
                      width={40}
                      height={40}
                    />
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-500 bg-gray-100 rounded-full dark:text-dark-500 dark:bg-dark-850">
                      CE
                    </span>
                  )}
                </div>
                <div>
                  <h6>
                    <Link to="#!"></Link>
                    {doctor}
                  </h6>
                </div>
              </div>
            </div>
          )
        },
      },
      {
        header: 'Total Employee',
        accessorKey: 'totalEmployee',
      },
      {
        header: 'Head of Dept.',
        accessorKey: 'headOfDepartment',
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
        accessorKey: 'id',
        cell: (value) => (
          <>
            <div className="flex items-center gap-2">
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

  return (
    <React.Fragment>
      <BreadCrumb title="Departments" subTitle="Hospital" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 card">
          <div className="flex items-center gap-3 card-header">
            <h6 className="card-title grow">Employee</h6>
            <p className="text-gray-500 shrink-0 dark:text-dark-500">
              Number of Staff according to department
            </p>
          </div>
          <div className="card-body">
            <div dir="ltr">
              <DistributedColumnChart
                chartColors="[bg-primary-500, bg-pink-500, bg-sky-500, bg-green-300, bg-yellow-200, bg-orange-200, bg-purple-500, bg-red-500]"
                chartDarkColors={''}
                chartId="distributedColumnChart"
              />
            </div>
          </div>
        </div>

        <div className="col-span-12 card">
          <div className="flex items-center gap-3 card-header">
            <h6 className="card-title grow">Department List</h6>
            <button
              type="button"
              className="btn btn-primary shrink-0"
              data-modal-target="addDepartmentModal"
              onClick={() => openModal('showAddDepartment')}>
              <CirclePlus className="inline-block ltr:mr-1 rtl:ml-1 size-4" />{' '}
              Add Department
            </button>
          </div>
          <div className="pt-0 card-body">
            <div>
              <TableContainer
                columns={columns || []}
                data={paginatedEvents}
                thClassName="!font-medium cursor-pointer"
                // isSearch={false}
                divClassName="overflow-x-auto table-box whitespace-nowrap"
                tableClassName="table flush"
                thTrClassName="text-gray-500 bg-gray-100 dark:text-dark-500 dark:bg-dark-850"
              />
            </div>

            <Pagination
              totalItems={departmentData.length}
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
        show={show}
        handleHide={toggleDelete}
        deleteModalFunction={handleDeleteList}
      />

      <AddEditDepartment
        modalState={modalState}
        closeModal={handleCloseModal}
        departmentList={department}
        editMode={editMode}
        currentDepartment={currentEvent}
      />
    </React.Fragment>
  )
}

export default Departments
