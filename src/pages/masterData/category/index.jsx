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
import {
  getCategory,
  getCategoryById,
  setEditMode,
  destroyCategory,
  destroyCategorySelected,
} from '@src/slices/masterData/categories/thunk'
import { Download, Filter, LayoutGrid, Plus, Search, Trash } from 'lucide-react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Select from 'react-select'

const CategoryList = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  // data
  const { categoryList } = useSelector((state) => state.CategoryList)
  const [ allCategoryList, setAllCategoryList ] = React.useState([])

  // crud
  const [deletedRecord, setDeletedRecord] = useState(null)
  const [deletedSelectedRecord, setDeletedSelectedData] = useState([])

  // filter
  const [appliedFilters, setAppliedFilters] = useState({isPublished: false, isInactive: false})

  // app setting
  const { layoutDirection } = useSelector((state) => state.Layout)
  const [selectAll, setSelectAll] = useState(false)
  const [selectedProductOption, setSelectedProductOption] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [isPublishedFilter, setIsPublishedFilter] = useState(false)
  const [isInactiveFilter, setIsInactiveFilter] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 100000])
  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)

  // set tittle
  useEffect(() => {
    document.title =
      'Products Category List | Domiex - React JS Admin & Dashboard Template'
  }, [])

  // set data
  useEffect(() => {
    if (categoryList) {
      setAllCategoryList(categoryList)
    }
  }, [categoryList, dispatch])

  // handle create record
  const handleCreate = () => {
    dispatch(setEditMode(false))
    localStorage.setItem('previousPage', '/master-data/category')
    navigate('/master-data/category/create-category')
  }

  // handle update record
  const handleUpdateRecord = useCallback(
    (category) => {
      dispatch(setEditMode(true))
      dispatch(getCategoryById(category.cat_id))
      navigate(`/master-data/category/update-category/${category.cat_id}`)
    },
    [dispatch, navigate]
  )

  // handle destroy record
  const handleDestroyRecord = (rolId) => {
    setIsModalOpen(true)
    setDeletedRecord([rolId])
  }

  // handle destroy record selected
  const handleDestroyRecordSelected = () => {
    dispatch(destroyCategorySelected(deletedSelectedRecord))
    setDeletedSelectedData([])
    setSelectAll(false)
  }

  // destroy record
  const destroyRecord = () => {
    if (deletedRecord && isModalOpen) {
      dispatch(destroyCategory(deletedRecord))
      setIsModalOpen(false)
      setDeletedRecord(null)
    }
  }

  // handle checkboxes
  const handleSelectRecord = (rolId) => {
    setDeletedSelectedData((prev) =>
      prev.includes(rolId) ? prev.filter((item) => item !== rolId) : [...prev, rolId]
    )
  }

  // handle all select
  const handleSelectAll = useCallback(() => {
    if (selectAll) {
      setDeletedSelectedData([])
    } else {
      setDeletedSelectedData(allCategoryList.map((order) => order.cat_id))
    }
    setSelectAll((prev) => !prev)
  }, [selectAll, allCategoryList])

  // handle select
  const handleSelectProduct = (selectedOption) => {
    setSelectedProductOption(selectedOption)
  }

  // table
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
        accessorKey: 'cat_id',
        enableSorting: false,
        cell: ({ row }) => (
          <input
            className="input-check input-check-primary"
            type="checkbox"
            checked={deletedSelectedRecord.includes(row.original.cat_id)}
            onChange={() => handleSelectRecord(row.original.cat_id)}
          />
        ),
      },
      {
        header: 'Category ID',
        accessorKey: 'rowNumber',
        enableSorting: false,
        cell: ({ row }) => row.index + 1,
      },
      {
        header: 'Category Code',
        accessorKey: 'category_code',
      },
      {
        header: 'Category Name',
        accessorKey: 'category_name',
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
                <Link
                  to="#!"
                  className="dropdown-item"
                  onClick={(e) => {
                    e.preventDefault()
                    handleOverviewProduct(value.row.original)
                  }}>
                  <i className="align-middle ltr:mr-2 rtl:ml-2 ri-eye-line"></i>{' '}
                  <span>Overview</span>
                </Link>

                <button
                  className="dropdown-item "
                  onClick={() => {
                    handleUpdateRecord(value.row.original)
                  }}>
                  <i className="align-middle ltr:mr-2 rtl:ml-2 ri-pencil-line"></i>{' '}
                  <span>Edit</span>
                </button>
                <Link
                  to="#!"
                  className="dropdown-item"
                  onClick={(e) => {
                    e.preventDefault()
                    handleDestroyRecord(value.row.original.cat_id)
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
    [
      deletedSelectedRecord,
      handleUpdateRecord,
      handleSelectAll,
      selectAll,
    ]
  )

  // filtered data for table
  const filteredData = useMemo(() => {
    return allCategoryList.filter((item) => {
      const matchesSearchTerm =
        item.category_code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category_name.toLowerCase().includes(searchTerm.toLowerCase())
      return (
        matchesSearchTerm
      )
    })
  }, [
    allCategoryList,
    searchTerm,
    appliedFilters,
    selectedProductOption,
    priceRange,
  ])

  const handlePublishedFilterChange = (e) => {
    setIsPublishedFilter(e.target.checked)
  }

  const handleInactiveFilterChange = (e) => {
    setIsInactiveFilter(e.target.checked)
  }

  // Handle the apply button click
  const handleApplyFilters = () => {
    setAppliedFilters({
      isPublished: isPublishedFilter,
      isInactive: isInactiveFilter,
    })
  }

  // Handle reset button click
  const handleResetFilters = () => {
    setIsPublishedFilter(false)
    setIsInactiveFilter(false)
    setAppliedFilters({
      isPublished: false,
      isInactive: false,
    })
  }
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedEvents = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  // handle slider based set filter
  const handleSliderChange = (value) => {
    if (Array.isArray(value) && value.length === 2) {
      setPriceRange([value[0], value[1]])
    }
  }

  const exportTable = () => {
    if (!categoryList || categoryList.length === 0) return

    // Prepare CSV headers based on ProductListItem interface
    const headers = [
      'id',
      'productId',
      'productName',
      'description',
      'category',
      'price',
      'discount',
      'count',
      'selling_price',
      'revenue',
      'color',
      'size',
      'colors',
      'gender',
      'stock',
      'qty',
      'image1',
      'image2',
      'image3',
      'status',
      'payment_method',
      'brand',
      'activeColor',
      'activeSize',
    ]

    let csvContent = headers.join(',') + '\n'
    categoryList.forEach((user) => {
      const row = headers.map((header) => {
        const value = user[header]
        if (Array.isArray(value)) {
          return `"${value.join(',')}"`
        }
        if (typeof value === 'object' && value !== null) {
          return `"${JSON.stringify(value)}"`
        }
        return `"${value}"`
      })
      csvContent += row.join(',') + '\n'
    })

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.download = 'products.csv'
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <React.Fragment>
      <BreadCrumb subTitle="Transactions" title="Category" />
      {/* header */}
      <div className="card">
        {/* card header  */}
        <div className="card-header">
          <div className="flex flex-wrap items-center gap-5">
            <div className="grow">
              <h6 className="mb-1 card-title">Category</h6>
              <p className="text-gray-500 dark:text-dark-500">
                Track your category's progress to boost your stocks.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              <button className="btn btn-sub-gray" onClick={exportTable}>
                <Download className="inline-block ltr:mr-1 rtl:ml-1 align-center size-4" />{' '}
                Export
              </button>
              <button
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault()
                  handleCreate()
                }}>
                <Plus className="inline-block ltr:mr-1 rtl:ml-1 align-center size-4" />{' '}
                Add Category
              </button>
            </div>
          </div>
        </div>

        {/* card body */}
        <div className="card-body">
          <div className="flex flex-wrap justify-between gap-2">
            <div>
              <div className="relative group/form">
                <input
                  type="text"
                  className="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4"
                  placeholder="Search for ..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-hidden">
                  <Search className="size-4" />
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3">
                {deletedSelectedRecord.length > 0 && (
                  <button
                    className="btn btn-red btn-icon"
                    onClick={handleDestroyRecordSelected}>
                    <Trash className="inline-block size-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* main table  */}
        <div className="pt-0 card-body">
          <div>
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

      <Toaster
        position="top-right"
        reverseOrder={layoutDirection === LAYOUT_DIRECTION.RTL}
      />

      <DeleteModal
        show={isModalOpen}
        handleHide={() => setIsModalOpen(false)}
        deleteModalFunction={destroyRecord}
      />
    </React.Fragment>
  )
}

export default CategoryList
