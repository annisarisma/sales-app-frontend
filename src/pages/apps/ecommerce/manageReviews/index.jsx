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
import { deleteUserReviewRecord, getManageReviewData } from '@src/slices/thunk'
import { Plus, Search } from 'lucide-react'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Widgets from './Widgets'
import AddEditReview from './addEditReview'

const ManageReviews = () => {
  const dispatch = useDispatch()
  const { manageReviews } = useSelector((state) => state.ManageReview)
  const { layoutDirection } = useSelector((state) => state.Layout)
  const [allReviewData, setAllReviewData] = useState([])
  const [search, setSearch] = useState('')
  let sortOption = 'none'
  const [editMode, setEditMode] = useState(false)
  const [currentReview, setCurrentReview] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [deletedRecord, setDeletedRecord] = useState(null)
  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const [modalState, setModalState] = useState({
    showAddReviewForm: false,
    showEditReviewForm: false,
  })

  useEffect(() => {
    document.title =
      'Manage Reviews | Domiex - React JS Admin & Dashboard Template'
  }, [])

  const handleSearchUserRecord = (event) => {
    const { value } = event.target
    setSearch(value)
    const filteredData = manageReviews.filter((user) =>
      user.userName.toLowerCase().includes(value.toLowerCase())
    )
    setAllReviewData(filteredData)
  }

  const openModal = (key) => setModalState((prev) => ({ ...prev, [key]: true }))
  const closeModal = (key) =>
    setModalState((prev) => ({ ...prev, [key]: false }))

  const handleOpenModal = useCallback((editMode = false, review = null) => {
    setEditMode(editMode)
    setCurrentReview(review)
    const modalKey = editMode ? 'showEditReviewForm' : 'showAddReviewForm'
    openModal(modalKey)
  }, [])

  const handleCloseModal = () => {
    const modalKey = editMode ? 'showEditReviewForm' : 'showAddReviewForm'
    closeModal(modalKey)
    setEditMode(false)
    setCurrentReview(null)
  }

  const handleDeleteRecord = (_id) => {
    setIsModalOpen(true)
    setDeletedRecord([_id])
  }
  const setDeleteRecord = () => {
    if (deletedRecord && isModalOpen) {
      dispatch(deleteUserReviewRecord(deletedRecord))
      setIsModalOpen(false)
      setDeletedRecord(null)
    }
  }

  useEffect(() => {
    if (manageReviews === null) {
      dispatch(getManageReviewData())
    } else {
      setAllReviewData(manageReviews)
    }
  }, [manageReviews, dispatch])

  const columns = useMemo(
    () => [
      {
        header: 'User Name',
        accessorKey: 'userName',
        cell: (value) => {
          return (
            <>
              <div className="flex items-center gap-3">
                <img
                  src={value.row.original.image}
                  alt="rowImg"
                  className="rounded-md shrink-0 size-16"
                  width={64}
                  height={64}
                />
                <div className="overflow-hidden grow">
                  <h6 className="mb-1 truncate">
                    <Link to="#!" className="text-current link link-primary">
                      {value.row.original.userName}
                    </Link>
                  </h6>
                  <p className="mb-1 text-sm truncate">
                    {value.row.original.date}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-dark-500">
                    Location: <span>{value.row.original.location}</span>
                  </p>
                </div>
              </div>
            </>
          )
        },
      },
      {
        header: 'Title',
        accessorKey: 'title',
        cell: (value) => {
          const getStarClass = (averageReview, index) => {
            const roundedAverage = averageReview
            if (index <= roundedAverage) {
              return 'ri-star-fill'
            } else if (index - 1 < roundedAverage && roundedAverage % 1 !== 0) {
              return 'ri-star-half-fill'
            }
            return 'ri-star-line'
          }

          return (
            <>
              <div className="max-w-[550px]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={getStarClass(
                          value.row.original.star,
                          i + 1
                        )}></i>
                    ))}
                  </div>
                  <h6>
                    (<span>{value.row.original.star}</span>)
                  </h6>
                </div>
                <h6 className="mb-1">{value.row.original.title}</h6>
                <p className="text-gray-500 whitespace-normal dark:text-dark-500">
                  {value.row.original.content}
                </p>
              </div>
            </>
          )
        },
      },
      {
        header: 'Action',
        accessorKey: '',
        cell: (value) => (
          <>
            <div className="flex items-center justify-end gap-3">
              <button className="btn btn-sub-gray">Direct Message</button>
              <Dropdown
                position="right"
                trigger="click"
                dropdownClassName="dropdown">
                <DropdownButton colorClass="btn btn-icon-text btn-primary btn-icon">
                  <i className="ri-more-2-fill"></i>
                </DropdownButton>
                <DropdownMenu>
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
                      handleDeleteRecord(value.row.original._id)
                    }}>
                    <i className="align-middle ltr:mr-2 rtl:ml-2 ri-delete-bin-line"></i>{' '}
                    <span>Delete</span>
                  </Link>
                </DropdownMenu>
              </Dropdown>
            </div>
          </>
        ),
      },
    ],
    [handleOpenModal]
  )

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedEvents = allReviewData.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  return (
    <React.Fragment>
      <BreadCrumb title="Manage Reviews" subTitle="E-commerce" />
      <div className="grid items-center grid-cols-12 gap-5 mb-5">
        <div className="col-span-12 2xl:col-span-8">
          <h6 className="card-title">Reviews</h6>
        </div>
        <div className="col-span-12 2xl:col-span-4">
          <div className="flex flex-wrap items-center gap-3 2xl:justify-end">
            <div className="relative group/form">
              <input
                type="email"
                className="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4"
                placeholder="Search username, date, etc..."
                value={search}
                onChange={handleSearchUserRecord}
              />
              <span className="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-hidden">
                <Search className="size-4" />
              </span>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => openModal('showAddReviewForm')}>
              <Plus className="inline-block ltr:mr-1 rtl:ml-1 size-4" /> New
              Review
            </button>
          </div>
        </div>
      </div>

      <div>
        <Widgets reviewData={allReviewData} />

        <TableContainer
          columns={columns || []}
          data={paginatedEvents || sortOption}
          thClassName="!font-medium cursor-pointer"
          divClassName="mt-5 overflow-x-auto"
          tableClassName="table flush whitespace-nowrap !overflow-x-auto"
          thTrClassName="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500b"
          tdClassName="align-top whitespace-nowrap"
          isHeader={false}
        />

        {allReviewData.length > 0 && (
          <Pagination
            totalItems={allReviewData.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}

        <AddEditReview
          modalState={modalState}
          closeModal={handleCloseModal}
          reviewList={manageReviews}
          editMode={editMode}
          currentReview={currentReview}
        />

        <DeleteModal
          show={isModalOpen}
          handleHide={() => setIsModalOpen(false)}
          deleteModalFunction={setDeleteRecord}
        />
      </div>
      <Toaster
        position="top-right"
        reverseOrder={layoutDirection === LAYOUT_DIRECTION.RTL}
      />
    </React.Fragment>
  )
}

export default ManageReviews
