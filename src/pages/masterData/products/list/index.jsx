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
  deleteProductListData,
  getProductListData,
  setCurrentProductList,
  setEditModeProductList,
  setProductListStatus,
} from '@src/slices/ecommerce/products/list/thunk'
import { Download, Filter, LayoutGrid, Plus, Search, Trash } from 'lucide-react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Select from 'react-select'

const ProductOptions = [
  { label: 'All', value: 'All' },
  { label: 'Watch', value: 'Watch' },
  { label: 'Footwear', value: 'Footwear' },
  { label: 'Fashion', value: 'Fashion' },
  { label: 'Bags', value: 'Bags' },
  { label: 'Accessories', value: 'Accessories' },
]

const ProductList = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { productList } = useSelector((state) => state.ProductList)
  const { layoutDirection } = useSelector((state) => state.Layout)
  const [deletedListData, setDeletedListData] = useState([])
  const [selectAll, setSelectAll] = useState(false)
  const [allProductList, setAllProductList] = React.useState([])
  const [selectedProductOption, setSelectedProductOption] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [deletedRecord, setDeletedRecord] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [isPublishedFilter, setIsPublishedFilter] = useState(false)
  const [isInactiveFilter, setIsInactiveFilter] = useState(false)
  const [appliedFilters, setAppliedFilters] = useState({
    isPublished: false,
    isInactive: false,
  })
  const [priceRange, setPriceRange] = useState([0, 100000])
  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  useEffect(() => {
    document.title =
      'Products Products | Domiex - React JS Admin & Dashboard Template'
  }, [])

  useEffect(() => {
    if (!productList) {
      dispatch(getProductListData())
    } else {
      setAllProductList(productList)
    }
  }, [productList, dispatch])

  const handleChangeStatusProduct = useCallback(
    (product) => {
      dispatch(setProductListStatus(product))
    },
    [dispatch]
  )

  const handleEditProduct = useCallback(
    (product) => {
      dispatch(setEditModeProductList(true))
      dispatch(setCurrentProductList(product))
      navigate('/apps/ecommerce/products/create-products')
    },
    [dispatch, navigate]
  )

  const handleAddProduct = () => {
    dispatch(setEditModeProductList(false))
    localStorage.setItem('previousPage', '/apps/ecommerce/products/list')
    navigate('/apps/ecommerce/products/create-products')
  }

  // status color
  const getStatusClass = (status) => {
    switch (status) {
      case 'Published':
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
      setDeletedListData(allProductList.map((order) => order._id))
    }
    setSelectAll((prev) => !prev)
  }, [selectAll, allProductList])
  const handleDeleteRecord = (_id) => {
    setIsModalOpen(true)
    setDeletedRecord([_id])
  }
  // delete multiple records
  const handleRemoveSelectedRecords = () => {
    dispatch(deleteProductListData(deletedListData))
    setDeletedListData([])
    setSelectAll(false)
  }
  // set customer delete record
  const setDeleteRecord = () => {
    if (deletedRecord && isModalOpen) {
      dispatch(deleteProductListData(deletedRecord))
      setIsModalOpen(false)
      setDeletedRecord(null)
    }
  }
  // overview
  const handleOverviewProduct = useCallback(
    (product) => {
      dispatch(setCurrentProductList(product))
      navigate('/apps/ecommerce/products/overview')
    },
    [dispatch, navigate]
  )
  // handle select product
  const handleSelectProduct = (selectedOption) => {
    setSelectedProductOption(selectedOption)
  }
  // table header
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
        header: 'Product ID',
        accessorKey: 'productId',
      },
      {
        header: 'Material Name',
        accessorKey: 'productName',
        cell: (value) => {
          return (
            <>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center p-1 border border-gray-200 rounded-sm dark:border-dark-800 size-9">
                  <img
                    src={value.row.original.image1}
                    alt="valueImg"
                    className="rounded"
                    width={26}
                    height={26}
                  />
                </div>
                <h6>
                  <Link to="#"></Link>
                  {value.row.original.productName}
                </h6>
              </div>
            </>
          )
        },
      },
      {
        header: 'Supplier Name',
        accessorKey: 'category',
      },
      {
        header: 'QTY',
        accessorKey: 'qty',
      },
      {
        header: 'Price',
        accessorKey: 'price',
        cell: (value) => <span>${value.getValue()}</span>,
      },
      {
        header: 'Total Price',
        accessorKey: 'revenue',
        cell: (value) => (
          <Link to="#!" className="">
            {value.getValue()}
          </Link>
        ),
      },
      {
        header: 'status',
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
                    handleEditProduct(value.row.original)
                  }}>
                  <i className="align-middle ltr:mr-2 rtl:ml-2 ri-pencil-line"></i>{' '}
                  <span>Edit</span>
                </button>
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
          </>
        ),
      },
    ],
    [
      deletedListData,
      handleChangeStatusProduct,
      handleEditProduct,
      handleOverviewProduct,
      handleSelectAll,
      selectAll,
    ]
  )

  // Filter data based on search term and applied filters
  const filteredData = useMemo(() => {
    return allProductList.filter((item) => {
      const matchesSearchTerm =
        item.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesPriceRange =
        item.price >= priceRange[0] && item.price <= priceRange[1]

      const matchesTypeProducts =
        !selectedProductOption ||
        selectedProductOption.value === 'All' ||
        item.category === selectedProductOption.value
      const matchesPublishedFilter = appliedFilters.isPublished
        ? item.status === 'Published'
        : true
      const matchesInactiveFilter = appliedFilters.isInactive
        ? item.status === 'Inactive'
        : true

      return (
        matchesSearchTerm &&
        matchesTypeProducts &&
        matchesPublishedFilter &&
        matchesInactiveFilter &&
        matchesPriceRange
      )
    })
  }, [
    allProductList,
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
    if (!productList || productList.length === 0) return

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
    productList.forEach((product) => {
      const row = headers.map((header) => {
        const value = product[header]
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
      <BreadCrumb subTitle="Transactions" title="Product" />
      {/* header */}
      <div className="card">
        {/* card header  */}
        <div className="card-header">
          <div className="flex flex-wrap items-center gap-5">
            <div className="grow">
              <h6 className="mb-1 card-title">Product</h6>
              <p className="text-gray-500 dark:text-dark-500">
                Track your product's progress to boost your stocks.
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
                  handleAddProduct()
                }}>
                <Plus className="inline-block ltr:mr-1 rtl:ml-1 align-center size-4" />{' '}
                Add Product
              </button>
              <Link
                to="/apps/ecommerce/products/grid"
                className="btn btn-purple btn-icon">
                <LayoutGrid className="size-5" />
              </Link>
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
                {deletedListData.length > 0 && (
                  <button
                    className="btn btn-red btn-icon"
                    onClick={handleRemoveSelectedRecords}>
                    <Trash className="inline-block size-4" />
                  </button>
                )}
                <div id="sampleSelect" className="grow">
                  <Select
                    classNamePrefix="select"
                    options={ProductOptions}
                    value={selectedProductOption}
                    onChange={handleSelectProduct}
                    placeholder="Sorting by class"
                    isClearable={true}
                  />
                </div>
                {/* filter */}
                <Dropdown
                  position="right"
                  trigger="click"
                  dropdownClassName="dropdown"
                  closeOnOutsideClick={false}>
                  <DropdownButton colorClass="btn btn-sub-gray">
                    <Filter className="inline-block ltr:mr-1 rtl:ml-1 align-center size-4" />{' '}
                    Filters
                  </DropdownButton>
                  <DropdownMenu menuClass="!w-64 p-3">
                    <h6 className="mb-4">Filter Options</h6>

                    <form onSubmit={(e) => e.preventDefault()}>
                      <h6 className="mb-2 text-sm">Status</h6>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="input-check-group">
                          <input
                            id="publishedCheckboxFilter"
                            className="input-check input-check-primary"
                            type="checkbox"
                            value="Published"
                            checked={isPublishedFilter}
                            onChange={handlePublishedFilterChange}
                            onClick={(e) => e.stopPropagation()}
                          />
                          <label
                            htmlFor="publishedCheckboxFilter"
                            className="input-check-label">
                            Published
                          </label>
                        </div>
                        <div className="input-check-group">
                          <input
                            id="inactiveCheckboxFilter"
                            className="input-check input-check-primary"
                            type="checkbox"
                            value="Inactive"
                            checked={isInactiveFilter}
                            onChange={handleInactiveFilterChange}
                            onClick={(e) => e.stopPropagation()}
                          />
                          <label
                            htmlFor="inactiveCheckboxFilter"
                            className="input-check-label">
                            Inactive
                          </label>
                        </div>
                        <div className="col-span-2">
                          <label className="mb-3 form-label">Price Range</label>
                          <div>
                            <Slider
                              range
                              min={0}
                              max={100000}
                              defaultValue={priceRange}
                              onChange={handleSliderChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-end gap-2 pt-1 mt-5">
                        <button
                          type="reset"
                          className="btn-sm btn btn-sub-gray"
                          onClick={handleResetFilters}>
                          Reset
                        </button>
                        <button
                          type="submit"
                          className="btn-sm btn btn-primary"
                          onClick={handleApplyFilters}>
                          Apply
                        </button>
                      </div>
                    </form>
                  </DropdownMenu>
                </Dropdown>
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
        deleteModalFunction={setDeleteRecord}
      />
    </React.Fragment>
  )
}

export default ProductList
