import React, { useCallback, useEffect, useMemo, useState } from 'react'

import user12 from '@assets/images/avatar/user-12.png'
import user14 from '@assets/images/avatar/user-14.png'
import user15 from '@assets/images/avatar/user-15.png'
import user16 from '@assets/images/avatar/user-16.png'
import user17 from '@assets/images/avatar/user-17.png'
import user18 from '@assets/images/avatar/user-18.png'
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
import {
  deleteProjectListData,
  getProjectListData,
} from '@src/slices/projects/list/thunk'
import AddEditProjectList from '@src/views/apps/projects/list/addEditProjectList'
import { CirclePlus, Search, Trash } from 'lucide-react'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Select from 'react-select'

const filterOptions = [
  { label: 'Weekly', value: 'Weekly' },
  { label: 'Monthly', value: 'Monthly' },
  { label: 'Yearly', value: 'Yearly' },
]

const statusOptions = [
  { label: 'Active', value: 'Active' },
  { label: 'Pending', value: 'Pending' },
  { label: 'On Hold', value: 'On Hold' },
  { label: 'Completed', value: 'Completed' },
]

const assignee = [
  {
    id: 'assigneeToMax',
    name: 'Max Boucaut',
    image: user14,
  },
  {
    id: 'assigneeTonatasha',
    name: 'Natasha Tegg',
    image: user15,
  },
  {
    id: 'assigneeToEthan',
    name: 'Ethan Zahel',
    image: user16,
  },
  {
    id: 'assigneeToPoppy',
    name: 'Poppy Dalley',
    image: user17,
  },
  {
    id: 'assigneeToRyan',
    name: 'Ryan Frazer',
    image: user18,
  },
  {
    id: 'assigneeToJulian',
    name: 'Julian Marconi',
    image: user12,
  },
]

const ProjectsLists = () => {
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedOption, setSelectedOption] = useState(null)
  const [selectedStatusOption, setSelectedStatusOption] = useState(null)
  const [selectedAssignees, setSelectedAssignees] = useState([])
  const { projectList } = useSelector((state) => state.ProjectsList)
  const { layoutDirection } = useSelector((state) => state.Layout)
  const [projectListData, setProjectListData] = useState([])
  const [projectLists, setProjectLists] = useState(null)
  const [deletedListData, setDeletedListData] = useState([])
  const [selectAll, setSelectAll] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    document.title = 'List View | Domiex - React JS Admin & Dashboard Template'
  }, [])

  // get data
  useEffect(() => {
    if (!projectList) {
      dispatch(getProjectListData())
    } else {
      setProjectListData(projectList)
    }
  }, [projectList, dispatch])

  // Handle Checkbox Change
  const handleCheckboxChange = (assignee) => {
    setSelectedAssignees((prevSelectedAssignees) => {
      const isSelected = prevSelectedAssignees.some(
        (selected) => selected.id === assignee.id
      )
      if (isSelected) {
        return prevSelectedAssignees.filter(
          (selected) => selected.id !== assignee.id
        )
      } else {
        return [...prevSelectedAssignees, assignee]
      }
    })
  }

  const filteredData = (projectListData ?? [])
    .filter((item) => {
      if (selectedOption) {
        const { value } = selectedOption
        const projectDate = new Date(item.dueDate)
        const today = new Date()

        if (value === 'Weekly') {
          const lastWeek = new Date()
          lastWeek.setDate(today.getDate() - 7)
          return projectDate >= lastWeek && projectDate <= today
        }

        if (value === 'Monthly') {
          const lastMonth = new Date()
          lastMonth.setMonth(today.getMonth() - 1)
          return projectDate >= lastMonth && projectDate <= today
        }

        if (value === 'Yearly') {
          const lastYear = new Date()
          lastYear.setFullYear(today.getFullYear() - 1)
          return projectDate >= lastYear && projectDate <= today
        }
      }
      return true
    })
    .filter((item) => {
      if (selectedStatusOption) {
        return item.status === selectedStatusOption.value
      }
      return true
    })
    .filter(
      (item) =>
        item.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.clientName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((item) => {
      if (selectedAssignees.length > 0) {
        return item.assignees.some((assignee) =>
          selectedAssignees.some((selected) => selected.name === assignee.name)
        )
      }
      return true
    })

  const handleChange = (selected) => {
    setSelectedOption(selected)
  }
  const handleStatusChange = (selected) => {
    setSelectedStatusOption(selected)
  }

  const toggleDelete = () => {
    setShow(false)
    setProjectLists(null)
  }

  const onClickProjectListDelete = (_id) => {
    setProjectLists([_id])
    setShow(true)
  }

  const handleDeleteProjectList = () => {
    if (projectLists) {
      dispatch(deleteProjectListData(projectLists))
      setShow(false)
    }
  }

  const handleSelectRecord = (_id) => {
    setDeletedListData((prev) =>
      prev.includes(_id) ? prev.filter((item) => item !== _id) : [...prev, _id]
    )
  }

  const handleSelectAll = useCallback(() => {
    if (selectAll && projectLists) {
      setDeletedListData([])
    } else {
      setDeletedListData(filteredData.map((customer) => customer._id))
    }
    setSelectAll((prev) => !prev)
  }, [selectAll, projectLists, filteredData])

  const handleRemoveSelectedRecords = () => {
    dispatch(deleteProjectListData(deletedListData))
    setDeletedListData([])
    setSelectAll(false)
  }

  // add & edit modal
  const [modalState, setModalState] = useState({
    showAddProjectForm: false,
    showEditProjectForm: false,
  })

  const openModal = (key) => setModalState((prev) => ({ ...prev, [key]: true }))
  const closeModal = (key) =>
    setModalState((prev) => ({ ...prev, [key]: false }))

  // edit and add data
  const [editMode, setEditMode] = useState(false)

  const [currentProjectList, setCurrentProjectList] = useState(null)

  const handleOpenModal = useCallback(
    (editMode = false, projectListData = null) => {
      setEditMode(editMode)
      setCurrentProjectList(projectListData)
      const modalKey = editMode ? 'showEditProjectForm' : 'showAddProjectForm'
      openModal(modalKey)
    },
    []
  )

  const handleCloseModal = () => {
    const modalKey = editMode ? 'showEditProjectForm' : 'showAddProjectForm'
    closeModal(modalKey)
    setEditMode(false)
    setCurrentProjectList(null)
  }

  const getStatusClass = (status) => {
    switch (status) {
      case 'Active':
        return 'badge badge-purple'
      case 'On Hold':
        return 'badge badge-orange'
      case 'Pending':
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
        header: 'ID',
        accessorKey: 'projectId',
      },
      {
        header: 'Project and Client Name',
        accessorKey: 'projectName',
        cell: (value) => {
          return (
            <>
              <h6 className="mb-1">
                <Link
                  to="#!"
                  data-modal-target="contactOverviewModal"
                  className="text-current link link-primary grow">
                  {value.getValue()}
                </Link>
              </h6>
              <p className="text-sm text-gray-500 dark:text-dark-500">
                {value.row.original.clientName}
              </p>
            </>
          )
        },
      },
      {
        header: 'Assigned To',
        accessorKey: 'assignees',
        cell: (value) => {
          return (
            <>
              <div className="flex ml-3 -space-x-3 grow">
                {value.getValue().map((item, idx) => (
                  <Link
                    to="#!"
                    className="transition duration-300 ease-linear hover:z-10"
                    title="avatar link"
                    key={idx}>
                    <img
                      className="border-2 border-white rounded-full dark:border-dark-900 size-8"
                      src={item.image}
                      alt="itemImg"
                      width={32}
                      height={32}
                    />
                  </Link>
                ))}
              </div>
            </>
          )
        },
      },
      {
        header: 'Due Date',
        accessorKey: 'dueDate',
      },
      {
        header: 'Total Amount ($)',
        accessorKey: 'totalAmount',
      },
      {
        header: '% Complete',
        accessorKey: 'progress',
        cell: (value) => (
          <>
            <div className="flex items-center gap-2">
              <p>{value.getValue()} %</p>
              <div className="progress-bar progress-1">
                <div
                  className="text-white progress-bar-wrap bg-primary-500"
                  style={{ width: `${value.getValue()}%` }}></div>
              </div>
            </div>
          </>
        ),
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
                <Link to="#!" className="dropdown-item ">
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
                    onClickProjectListDelete(value.row.original._id)
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
    [selectAll, deletedListData, handleOpenModal, handleSelectAll]
  )

  // pagination
  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedEvents =
    filteredData && filteredData.length > 0
      ? filteredData.slice(startIndex, startIndex + itemsPerPage)
      : []

  return (
    <React.Fragment>
      <BreadCrumb title="List View" subTitle="Projects" />
      <div className="card">
        <div className="flex flex-wrap items-center gap-5 card-header">
          <div className="grow">
            <h6 className="mb-1 card-title">All Projects (264)</h6>
            <p className="text-gray-500">
              Manage your construction projects from start to finish with
              complete control.
            </p>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              openModal('showAddProjectForm')
            }}
            className="btn btn-primary">
            <CirclePlus className="inline-block ltr:mr-1 rtl:ml-1 size-4"></CirclePlus>{' '}
            <span className="align-middle">Add Project</span>
          </button>
        </div>
        <div className="card-header">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 xl:col-span-4">
              <div className="relative group/form">
                <input
                  type="text"
                  className="ltr:pl-9 rtl:pr-9 form-input group-[&.right]/form:pr-9 group-[&.right]/form:pl-4"
                  placeholder="Search for projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 group-[&.right]/form:right-3 group-[&.right]/form:left-auto focus:outline-hidden">
                  <Search className="size-4"></Search>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap col-span-12 gap-2 xl:col-span-8 xl:justify-end">
              {deletedListData.length > 0 && (
                <button
                  className="btn btn-red btn-icon"
                  onClick={handleRemoveSelectedRecords}>
                  <Trash className="inline-block size-4" />
                </button>
              )}
              <div>
                <Select
                  classNamePrefix="select"
                  options={filterOptions}
                  value={selectedOption}
                  onChange={handleChange}
                  placeholder="Filter Date Select"
                  id="filterSelect"
                  isClearable={true}
                  isSearchable={true}
                />
              </div>
              <div>
                <Select
                  classNamePrefix="select"
                  options={statusOptions}
                  value={selectedStatusOption}
                  onChange={handleStatusChange}
                  placeholder="Status Select"
                  id="filterStatusSelect"
                  isClearable={true}
                  isSearchable={true}
                />
              </div>
              <div>
                <Dropdown position="right" dropdownClassName="dropdown">
                  <DropdownButton colorClass="w-full btn btn-sub-gray whitespace-nowrap">
                    Filter By Assignee
                  </DropdownButton>
                  <DropdownMenu menuClass="!fixed p-2 !w-52">
                    <Link to="#!" className="dropdown-item ">
                      <p className="mb-1 text-gray-500 dark:text-dark-500">
                        Filter by Assignee
                      </p>
                    </Link>
                    {assignee.map((item, index) => (
                      <div className="py-2 input-check-group" key={index}>
                        <input
                          id={item.id}
                          className="shrink-0 input-check input-check-primary"
                          type="checkbox"
                          checked={selectedAssignees.some(
                            (selected) => selected.id === item.id
                          )}
                          onChange={() => handleCheckboxChange(item)}
                        />
                        <label
                          htmlFor={item.id}
                          className="flex items-center gap-2 font-medium input-check-label grow">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="rounded-full size-6"
                            height={24}
                            width={24}
                          />
                          {item.name}
                        </label>
                      </div>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-0 card-body">
          <div>
            <div className="overflow-x-auto table-box">
              <TableContainer
                columns={columns}
                data={paginatedEvents}
                thClassName="!font-medium cursor-pointer"
                isSearch={false}
                divClassName="overflow-x-auto"
                tableClassName="table whitespace-nowrap"
                PaginationClassName="pagination-container"
                thTrClassName="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500"
                isTableFooter={false}
              />
              <div className="mx-3">
                {filteredData.length != 0 && (
                  <Pagination
                    totalItems={filteredData.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Edit Delete Modal */}
      <AddEditProjectList
        modalState={modalState}
        closeModal={handleCloseModal}
        projectListData={projectListData}
        editMode={editMode}
        currentProjectList={currentProjectList}
      />

      <DeleteModal
        show={show}
        handleHide={toggleDelete}
        deleteModalFunction={handleDeleteProjectList}
      />

      <Toaster
        position={'top-right'}
        reverseOrder={layoutDirection === LAYOUT_DIRECTION.RTL}
      />
    </React.Fragment>
  )
}

export default ProjectsLists
