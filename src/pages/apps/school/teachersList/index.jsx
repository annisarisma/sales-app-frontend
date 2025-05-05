import React, { useCallback, useEffect, useMemo, useState } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import DeleteModal from '@src/components/Common/DeleteModal'
import Pagination from '@src/components/Common/Pagination'
import { LAYOUT_DIRECTION } from '@src/components/Constants/layout'
import TableContainer from '@src/components/CustomComponents/Table/Table'
import { deleteTeacherListData, getTeacherListData } from '@src/slices/thunk'
import AddEditTeacherList from '@src/views/apps/school/teachersList/addEditTeacherList'
import Information from '@src/views/apps/school/teachersList/information'
import { CirclePlus, Search } from 'lucide-react'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const TeachersList = () => {
  //get
  const dispatch = useDispatch()
  const { teacherList } = useSelector((state) => state.TeacherList)
  const { layoutDirection } = useSelector((state) => state.Layout)
  const [teacherListData, setTeacherListData] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [teacher, setTeacher] = useState(null)
  const [show, setShow] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [currentTeacher, setCurrentTeacher] = useState(null)
  useEffect(() => {
    document.title = 'List View | Domiex - React JS Admin & Dashboard Template'
  }, [])

  useEffect(() => {
    if (!teacherList) {
      dispatch(getTeacherListData())
    } else {
      setTeacherListData(teacherList)
    }
  }, [dispatch, teacherList])

  //delete

  const toggleDelete = () => {
    setShow(false)
    setTeacher(null)
  }

  const onClickEventListDelete = (list) => {
    setTeacher(list)
    setShow(true)
  }

  const handleDeleteList = () => {
    if (teacher) {
      dispatch(deleteTeacherListData([teacher._id]))
      setShow(false)
    }
  }

  const [modalState, setModalState] = useState({
    showAddTeacherForm: false,
    showEditTeacherForm: false,
  })

  const openModal = (key) => setModalState((prev) => ({ ...prev, [key]: true }))
  const closeModal = (key) =>
    setModalState((prev) => ({ ...prev, [key]: false }))

  const handleOpenModal = useCallback((editMode = false, event = null) => {
    setEditMode(editMode)
    setCurrentTeacher(event)
    const modalKey = editMode ? 'showEditTeacherForm' : 'showAddTeacherForm'
    openModal(modalKey)
  }, [])

  const handleCloseModal = () => {
    const modalKey = editMode ? 'showEditTeacherForm' : 'showAddTeacherForm'
    closeModal(modalKey)
    setEditMode(false)
    setCurrentTeacher(null)
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const filterRecord = teacherListData.filter((data) => {
    const filterEmil = data.email
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    return filterEmil
  })

  const getTitleClass = (title) => {
    switch (title) {
      case 'Teacher':
        return 'badge badge-primary'
      case 'Professor':
        return 'badge badge-purple'
      case 'Instructor':
        return 'badge badge-green'
      case 'Lecturer':
        return 'badge badge-red'
      case 'Senior Lecturer':
        return 'badge badge-orange'
      case 'Associate Professor':
        return 'badge badge-gray'
      case 'Assistant Professor':
        return 'badge badge-indigo'
      case 'Assistant':
        return 'badge badge-yellow'
      default:
        return 'badge'
    }
  }

  //pagination
  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedEvents = filterRecord.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  const columns = useMemo(
    () => [
      {
        header: 'Id',
        accessorKey: 'teacherId',
      },
      {
        header: 'Teacher Name',
        accessorKey: 'teacherName',
        cell: ({ row }) => {
          const { image, teacherName } = row.original
          return (
            <div className="flex items-center gap-3">
              <div className="relative text-gray-500 bg-gray-100 rounded-full dark:text-dark-500 dark:bg-dark-850 size-8">
                {image ? (
                  <img
                    src={image}
                    alt="image"
                    className="rounded-full"
                    width={32}
                    height={32}
                    style={{ width: '32px', height: '32px' }}
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-500 bg-gray-100 rounded-full dark:text-dark-500 dark:bg-dark-850">
                    {teacherName.charAt(0)}
                  </span>
                )}
              </div>
              <div>
                <h6>
                  <Link to="/apps/school/teachers-overview">{teacherName}</Link>
                </h6>
              </div>
            </div>
          )
        },
      },
      {
        header: 'Email',
        accessorKey: 'email',
      },
      {
        header: 'Phone',
        accessorKey: 'phone',
      },
      {
        header: '	Salary',
        accessorKey: 'salary',
      },
      {
        header: 'Experience',
        accessorKey: 'experience',
      },
      {
        header: 'Title',
        accessorKey: 'title',
        cell: ({ row }) => {
          const { title } = row.original
          return (
            <span className={`badge ${getTitleClass(title)}`}>{title}</span>
          )
        },
      },
      {
        header: 'Joining Date',
        accessorKey: 'date',
      },
      {
        header: 'Action',
        accessorKey: '',
        cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <button
              className="btn btn-sub-gray btn-icon !size-8 rounded-md"
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
      <BreadCrumb title="List View" subTitle="Teachers" />
      <Information />

      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 card">
          <div className="card-header">
            <div className="grid items-center grid-cols-12 gap-space">
              <div className="col-span-12 md:col-span-4 2xl:col-span-3">
                <div className="relative group/form grow">
                  <input
                    type="email"
                    className="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4"
                    placeholder="Search for ..."
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                  <button className="absolute inset-y-0 flex items-center ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-hidden">
                    <Search className="text-gray-500 dark:text-dark-500 size-4 fill-gray-100 dark:fill-dark-850" />
                  </button>
                </div>
              </div>
              <div className="col-span-12 md:col-start-9 md:col-span-4 2xl:col-span-2 2xl:col-start-11 md:ltr:text-right md:rtl:text-left">
                <button
                  className="btn btn-primary shrink-0"
                  data-modal-target="addTeacherModal"
                  onClick={() => openModal('showAddTeacherForm')}>
                  <CirclePlus className="inline-block ltr:mr-1 rtl:ml-1 size-4" />{' '}
                  Add Teacher
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
                totalItems={filterRecord.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>

      <DeleteModal
        show={show}
        handleHide={toggleDelete}
        deleteModalFunction={handleDeleteList}
      />

      <AddEditTeacherList
        modalState={modalState}
        closeModal={handleCloseModal}
        teacherList={teacherListData}
        editMode={editMode}
        currentTeacher={currentTeacher}
      />

      <Toaster
        position={'top-right'}
        reverseOrder={layoutDirection === LAYOUT_DIRECTION.RTL}
      />
    </React.Fragment>
  )
}

export default TeachersList
