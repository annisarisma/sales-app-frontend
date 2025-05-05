import React, { useEffect, useMemo, useState } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import DeleteModal from '@src/components/Common/DeleteModal'
import Pagination from '@src/components/Common/Pagination'
import { LAYOUT_DIRECTION } from '@src/components/Constants/layout'
import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '@src/components/CustomComponents/Dropdown/Dropdown'
import {
  deleteProductListData,
  getProductListData,
  setCurrentProductList,
  setEditModeProductList,
} from '@src/slices/ecommerce/products/list/thunk'
import { addNewShopProduct } from '@src/slices/ecommerce/shop_cart/thunk'
import {
  addWishListProductRecord,
  deleteWishListProduct,
} from '@src/slices/ecommerce/wishlist/thunk'
import Filter from '@views/apps/ecommerce/products/grid/filter'
import {
  Heart,
  List,
  Plus,
  ShoppingCart,
  SlidersHorizontal,
} from 'lucide-react'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const ProductGrid = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [deletedRecord, setDeletedRecord] = useState(null)
  const [search, setSearch] = useState('')
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedActiveColors, setSelectedActiveColors] = useState([])
  const itemsPerPage = 8
  const [currentPage, setCurrentPage] = useState(1)
  const { productList } = useSelector((state) => state.ProductList)
  const { shopCartList } = useSelector((state) => state.ShopCarts)
  const { wishListData } = useSelector((state) => state.WishList)
  const { layoutDirection } = useSelector((state) => state.Layout)
  const [filters, setFilters] = useState({ categories: [], colors: [] })
  const [cartCount, setCartCount] = useState(0)
  const [isDrawerOpen, setDrawerOpen] = useState(false)
  const openDrawer = () => setDrawerOpen(true)
  const closeDrawer = () => setDrawerOpen(false)
  const [productGrid, setProductGrid] = useState([])
  const [wishlistCount, setWishlistCount] = useState(0)

  useEffect(() => {
    document.title =
      'Product Grid | Domiex - React JS Admin & Dashboard Template'
  }, [])

  useEffect(() => {
    if (!productList) {
      dispatch(getProductListData())
    } else {
      setProductGrid(productList)
    }
  }, [productList, dispatch])

  useEffect(() => {
    const count =
      wishListData && wishListData.length > 0 ? wishListData.length : 0
    setWishlistCount(count)
  }, [wishListData])

  // Add/remove from wishlist
  const handleToggleWishlist = (product) => {
    const isWished = wishListData?.some(
      (item) => item.productId === product.productId
    )
    if (isWished) {
      dispatch(deleteWishListProduct([product._id]))
    } else {
      const newProduct = { ...product, qty: 1 }
      dispatch(addWishListProductRecord(newProduct))
    }
  }

  // Cart functionality (unchanged)shopCartList
  useEffect(() => {
    if (!shopCartList) {
      dispatch(getProductListData())
    } else {
      const count = shopCartList && shopCartList.length
      setCartCount(count)
    }
  }, [shopCartList, dispatch])

  const handleAddToCartProduct = (product) => {
    const isCart = shopCartList?.some(
      (item) => item.productId === product.productId
    )

    if (isCart) {
      dispatch(deleteWishListProduct([product._id]))
    } else {
      const newProduct = { ...product }
      dispatch(addNewShopProduct(newProduct))
    }
  }

  // Edit and add products
  const handleEditProduct = (product) => {
    dispatch(setEditModeProductList(true))
    dispatch(setCurrentProductList(product))
    navigate('/apps/ecommerce/products/create-products')
  }

  const handleAddProduct = () => {
    dispatch(setEditModeProductList(false))
    localStorage.setItem('previousPage', '/apps/ecommerce/products/grid')
    navigate('/apps/ecommerce/products/create-products')
  }

  // Overview products
  const handleOverviewProduct = (product) => {
    dispatch(setCurrentProductList(product))
    navigate('/apps/ecommerce/products/overview')
  }
  const handleDeleteRecord = (_id) => {
    setIsModalOpen(true)
    setDeletedRecord([_id])
  }
  const setDeleteRecord = () => {
    if (deletedRecord && isModalOpen) {
      dispatch(deleteProductListData(deletedRecord))
      setIsModalOpen(false)
      setDeletedRecord(null)
    }
  }

  const updateCountCategory = (value) => {
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    )
  }

  const updateCountActiveColor = (value) => {
    setSelectedActiveColors((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    )
  }

  const filteredProducts = useMemo(() => {
    return productGrid.filter((product) => {
      const isCategoryMatched =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category)
      const isColorMatched =
        selectedActiveColors.length === 0 ||
        selectedActiveColors.includes(product.activeColor)
      const isSearchMatched =
        search === '' ||
        product.category.toLowerCase().includes(search.toLowerCase()) ||
        product.activeColor.toLowerCase().includes(search.toLowerCase())

      return isCategoryMatched && isColorMatched && isSearchMatched
    })
  }, [productGrid, selectedCategories, selectedActiveColors, search])

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const paginatedEvents = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredProducts && filteredProducts.length > 0
      ? filteredProducts.slice(startIndex, startIndex + itemsPerPage)
      : productGrid.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredProducts, currentPage, itemsPerPage, productGrid])

  return (
    <React.Fragment>
      <BreadCrumb title="Product Grid" subTitle="E-commerce" />
      <div className="flex flex-wrap items-center gap-5 mb-5">
        <div className="grow">
          <h6 className="mb-1 card-title">Product Grid</h6>
          <p className="text-gray-500 dark:text-dark-500">
            Track your store's progress to boost your sales.
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <Link to="/apps/ecommerce/wishlist" className="relative inline-block">
            <Heart className="inline-block mt-2 mr-2 text-red-500 size-6 fill-red-500" />
            <span className="absolute -top-0 -right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-red-500 bg-red-100 rounded-full">
              {wishlistCount}
            </span>
          </Link>
          <Link
            to="/apps/ecommerce/shop-cart"
            className="relative inline-block">
            <ShoppingCart className="inline-block mt-2 mr-2 text-blue-500 size-6 fill-blue-500" />
            <span className="absolute -top-0 -right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-blue-500 bg-blue-100 rounded-full">
              {cartCount}
            </span>
          </Link>
          <button className="btn btn-sub-gray" onClick={openDrawer}>
            <SlidersHorizontal className="inline-block ltr:mr-1 rt:ml-1 align-center size-4" />{' '}
            Filters
          </button>
          <Link
            to="#!"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault()
              handleAddProduct()
            }}>
            <Plus className="inline-block ltr:mr-1 rt:ml-1 align-center size-4" />{' '}
            Add Product
          </Link>
          <Link
            to="/apps/ecommerce/products/list"
            className="btn btn-purple btn-icon">
            <List className="size-5" />
          </Link>
        </div>
      </div>

      <div>
        {filters ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5">
            {paginatedEvents.map((item, index) => (
              <div className="card" key={index}>
                <div className="p-2 card-body">
                  <div
                    className={`relative p-5 bg-opacity-15 ${item.color}/15`}>
                    <Dropdown
                      position="right"
                      trigger="click"
                      dropdownClassName="dropdown absolute right-2 top-2 ">
                      <DropdownButton colorClass="flex items-center justify-center bg-white rounded-full size-10 link link-red dark:bg-dark-850">
                        <i className="ri-more-2-fill"></i>
                      </DropdownButton>
                      <DropdownMenu menuClass="p-2">
                        <Link
                          to="/apps/ecommerce/products/overview"
                          className="dropdown-item ">
                          <i className="align-middle ltr:mr-2 rtl:ml-2 ri-eye-line"></i>{' '}
                          <span>Overview</span>
                        </Link>
                        <Link
                          to="#!"
                          className="dropdown-item "
                          onClick={(e) => {
                            e.preventDefault()
                            handleEditProduct(item)
                          }}>
                          <i className="align-middle ltr:mr-2 rtl:ml-2 ri-pencil-line"></i>{' '}
                          <span>Edit</span>
                        </Link>
                        <Link
                          to="#!"
                          className="dropdown-item"
                          onClick={(e) => {
                            e.preventDefault()
                            handleDeleteRecord(item._id)
                          }}>
                          <i className="align-middle ltr:mr-2 rtl:ml-2 ri-delete-bin-line"></i>{' '}
                          <span>Delete</span>
                        </Link>
                      </DropdownMenu>
                    </Dropdown>

                    <img
                      src={item.image1}
                      className="h-[270px] w-[270px]"
                      alt="image1"
                      height={270}
                      width={270}
                    />
                  </div>
                  <div className="p-1 mt-2">
                    <h5 className="mb-2">{item.price}</h5>
                    <h6 className="mb-1">
                      <Link to="/apps/ecommerce/products/overview">
                        {item.productName}
                      </Link>
                    </h6>
                    <p className="text-gray-400">{item.description}</p>
                    <div className="flex gap-2 mt-3">
                      {shopCartList &&
                      shopCartList.some(
                        (wishItem) => wishItem.productId === item.productId
                      ) ? (
                        <button
                          type="button"
                          className={`w-full btn btn-sub-primary`}
                          onClick={() => {
                            navigate('/apps/ecommerce/shop-cart')
                          }}>
                          Go to Cart
                        </button>
                      ) : (
                        <button
                          type="button"
                          className={`w-full btn btn-primary`}
                          onClick={(e) => {
                            e.preventDefault()
                            handleAddToCartProduct(item)
                          }}>
                          Add to Cart
                        </button>
                      )}
                      <button
                        className="btn btn-sub-gray btn-icon shrink-0"
                        onClick={(e) => {
                          e.preventDefault()
                          handleOverviewProduct(item)
                        }}>
                        <i className="text-lg ri-eye-line hover:text-red-500"></i>
                      </button>

                      {wishListData &&
                      wishListData.some(
                        (wishItem) => wishItem.productId === item.productId
                      ) ? (
                        <button
                          className="btn btn-sub-gray btn-icon shrink-0"
                          onClick={() => {
                            navigate('/apps/ecommerce/wishlist')
                          }}>
                          <Heart
                            className={`inline-block size-4 text-red-500 fill-red-500 `}
                          />
                        </button>
                      ) : (
                        <button
                          className="btn btn-sub-gray btn-icon shrink-0"
                          onClick={(e) => {
                            e.preventDefault()
                            handleToggleWishlist(item)
                          }}>
                          <Heart
                            className={`inline-block size-4 text-gray-500`}
                          />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="!p-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="mx-auto size-12"
              viewBox="0 0 48 48">
              <linearGradient
                id="SVGID_1__h35ynqzIJzH4_gr1"
                x1="34.598"
                x2="15.982"
                y1="15.982"
                y2="34.598"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#60e8fe"></stop>
                <stop offset=".033" stopColor="#6ae9fe"></stop>
                <stop offset=".197" stopColor="#97f0fe"></stop>
                <stop offset=".362" stopColor="#bdf5ff"></stop>
                <stop offset=".525" stopColor="#dafaff"></stop>
                <stop offset=".687" stopColor="#eefdff"></stop>
                <stop offset=".846" stopColor="#fbfeff"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
              <path
                fill="url(#SVGID_1__h35ynqzIJzH4_gr1)"
                d="M40.036,33.826L31.68,25.6c0.847-1.739,1.335-3.684,1.335-5.748c0-7.27-5.894-13.164-13.164-13.164	S6.688,12.582,6.688,19.852c0,7.27,5.894,13.164,13.164,13.164c2.056,0,3.995-0.485,5.728-1.326l3.914,4.015l4.331,4.331	c1.715,1.715,4.496,1.715,6.211,0C41.751,38.321,41.751,35.541,40.036,33.826z"></path>
              <path
                fill="none"
                stroke="#10cfe3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="M31.95,25.739l8.086,8.086c1.715,1.715,1.715,4.496,0,6.211l0,0c-1.715,1.715-4.496,1.715-6.211,0	l-4.331-4.331"></path>
              <path
                fill="none"
                stroke="#10cfe3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="M7.525,24.511c-1.771-4.694-0.767-10.196,3.011-13.975c3.847-3.847,9.48-4.817,14.228-2.912"></path>
              <path
                fill="none"
                stroke="#10cfe3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="M30.856,12.603c3.376,5.114,2.814,12.063-1.688,16.565c-4.858,4.858-12.565,5.129-17.741,0.814"></path>
            </svg>
            <p className="mt-2 text-center text-gray-500 dark:text-dark-500">
              No matching records found
            </p>
          </div>
        )}
        {filteredProducts.length !== 0 && (
          <Pagination
            totalItems={
              filteredProducts && filteredProducts.length > 0
                ? filteredProducts.length
                : productGrid.length
            }
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>

      {isModalOpen && (
        <DeleteModal
          show={isModalOpen}
          handleHide={() => setIsModalOpen(false)}
          deleteModalFunction={setDeleteRecord}
        />
      )}

      <Filter
        isDrawerOpen={isDrawerOpen}
        closeDrawer={closeDrawer}
        onFilterChange={handleFilterChange}
        updateCountCategory={updateCountCategory}
        updateCountColor={updateCountActiveColor}
        selectedCategories={selectedCategories}
        selectedColors={selectedActiveColors}
        setSelectedCategories={setSelectedCategories}
        setSelectedColors={setSelectedActiveColors}
        search={search}
        setSearch={setSearch}
      />

      <Toaster
        position="top-right"
        reverseOrder={layoutDirection === LAYOUT_DIRECTION.RTL}
      />
    </React.Fragment>
  )
}

export default ProductGrid
