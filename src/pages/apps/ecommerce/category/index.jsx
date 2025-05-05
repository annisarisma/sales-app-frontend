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
import { deleteCategoryData, getCategoryData } from '@src/slices/thunk'
import { Search, Trash } from 'lucide-react'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import AddEditCategory from './AddEditCategory'

const CategoryList = () => {
  const dispatch = useDispatch()
  const { categoryList } = useSelector((state) => state.Category)
  const { layoutDirection } = useSelector((state) => state.Layout)
  const [searchTerm, setSearchTerm] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [currentCategoryList, setCurrentCategoryList] = useState(null)
  const [categoryData, setCategoryData] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [deletedRecord, setDeletedRecord] = useState(null)
  const [deletedListData, setDeletedListData] = useState([])
  const [selectAll, setSelectAll] = useState(false)
  // pagination
  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  useEffect(() => {
    document.title =
      'Category List | Domiex - React JS Admin & Dashboard Template'
  }, [])

  useEffect(() => {
    if (!categoryList) {
      dispatch(getCategoryData())
    } else {
      setCategoryData(categoryList)
    }
  }, [categoryList, dispatch])

  const filteredData = categoryData.filter(
    (item) =>
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleOpenEditModal = (editMode = false, orderList = null) => {
    setEditMode(editMode)
    setCurrentCategoryList(orderList)
  }

  const getStatusClass = (status) => {
    switch (status) {
      case 'Active':
        return 'badge badge-green'
      case 'Inactive':
        return 'badge badge-gray'
      default:
        return 'badge'
    }
  }

  // set multiple delete records
  const handleSelectRecord = (_id) => {
    setDeletedListData((prev) =>
      prev.includes(_id) ? prev.filter((item) => item !== _id) : [...prev, _id]
    )
  }
  // select all or unselect all
  const handleSelectAll = useCallback(() => {
    if (selectAll) {
      setDeletedListData([])
    } else {
      setDeletedListData(categoryData.map((order) => order._id))
    }
    setSelectAll((prev) => !prev)
  }, [selectAll, categoryData])

  const handleDeleteRecord = (_id) => {
    setIsModalOpen(true)
    setDeletedRecord([_id])
  }
  // delete multiple records
  const handleRemoveSelectedRecords = () => {
    dispatch(deleteCategoryData(deletedListData))
    setDeletedListData([])
    setSelectAll(false)
    setCurrentCategoryList(null)
  }
  // set customer delete record
  const setDeleteRecord = () => {
    if (deletedRecord && isModalOpen) {
      dispatch(deleteCategoryData(deletedRecord))
      setIsModalOpen(false)
      setDeletedRecord(null)
      setEditMode(false)
    }
  }
  // Table column definitions with memoization
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
        header: 'Category ID',
        accessorKey: 'categoryID',
        cell: ({ row }) => (
          <Link to="#!" className="link link-primary">
            {row.original.categoryID}
          </Link>
        ),
      },
      {
        header: 'Category Name',
        accessorKey: 'category',
        cell: ({ row }) => {
          const { category, image } = row.original
          return (
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center p-1 border border-gray-200 rounded-sm size-9 dark:border-dark-800 shrink-0">
                <img
                  src={image}
                  alt={category}
                  height={26}
                  width={26}
                  className="rounded"
                />
              </div>
              <h6>
                <Link
                  to="#!"
                  className="text-gray-800 link-primary dark:text-white">
                  {category}
                </Link>
              </h6>
            </div>
          )
        },
      },
      {
        header: 'Products',
        accessorKey: 'products',
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
        accessorKey: 'actions',
        cell: ({ row }) => (
          <Dropdown
            position="right"
            trigger="click"
            dropdownClassName="dropdown">
            <DropdownButton colorClass="flex items-center text-gray-500 dark:text-dark-500">
              <i className="ri-more-2-fill"></i>
            </DropdownButton>
            <DropdownMenu>
              <Link to="#!" className="dropdown-item">
                <i className="align-middle ltr:mr-2 rtl:ml-2 ri-eye-line"></i>{' '}
                Overview
              </Link>
              <Link
                to="#!"
                className="dropdown-item"
                onClick={(e) => {
                  e.preventDefault()
                  handleOpenEditModal(true, row.original)
                }}>
                <i className="align-middle ltr:mr-2 rtl:ml-2 ri-pencil-line"></i>{' '}
                Edit
              </Link>
              <Link
                to="#!"
                className="dropdown-item"
                onClick={(e) => {
                  e.preventDefault()
                  handleDeleteRecord(row.original._id)
                }}>
                <i className="align-middle ltr:mr-2 rtl:ml-2 ri-delete-bin-line"></i>{' '}
                Delete
              </Link>
            </DropdownMenu>
          </Dropdown>
        ),
      },
    ],
    [deletedListData, handleSelectAll, selectAll]
  )

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
      <BreadCrumb title="Category List" subTitle="E-commerce" />
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-7 xl:col-span-8">
          <div className="card">
            {/* search */}
            <div className="card-header">
              <div className="grid items-center grid-cols-12 gap-3">
                <div className="col-span-3">
                  <h6 className="card-title">Category List</h6>
                </div>

                <div className="col-span-12 md:col-span-4 md:col-start-9">
                  <div className="flex gap-2">
                    <div className="relative group/form grow">
                      <input
                        type="text"
                        className="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4"
                        placeholder="Search for ..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <button className="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-hidden">
                        <Search className="size-4"></Search>
                      </button>
                    </div>
                    {deletedListData.length > 0 && (
                      <button
                        className="btn btn-red btn-icon"
                        onClick={handleRemoveSelectedRecords}>
                        <Trash className="size-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="pt-0 card-body">
              <TableContainer
                columns={columns}
                data={paginatedEvents}
                thClassName="!font-medium cursor-pointer"
                isSearch={false}
                divClassName="overflow-x-auto table-box"
                tableClassName="table hovered"
                PaginationClassName="pagination-container"
                thTrClassName="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500"
                isTableFooter={false}
              />
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

        {/* Add & Edit Category Modal */}
        <AddEditCategory
          currentCategoryList={currentCategoryList}
          editMode={editMode}
          categoryData={categoryData}
        />
      </div>

      {/* modal */}
      <DeleteModal
        show={isModalOpen}
        handleHide={() => setIsModalOpen(false)}
        deleteModalFunction={setDeleteRecord}
      />

      <Toaster
        position="top-right"
        reverseOrder={layoutDirection === LAYOUT_DIRECTION.RTL}
      />
    </React.Fragment>
  )
}

export default CategoryList
