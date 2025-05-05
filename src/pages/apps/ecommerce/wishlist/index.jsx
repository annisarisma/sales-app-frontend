import React, { useEffect, useState } from 'react'

import shoppingCart from '@assets/images/others/shopping-cart.png'
import BreadCrumb from '@src/components/Common/BreadCrumb'
import { LAYOUT_DIRECTION } from '@src/components/Constants/layout'
import {
  deleteWishListProduct,
  getWishList,
  updateWishListProductQuantity,
} from '@src/slices/ecommerce/wishlist/thunk'
import { addNewShopProduct } from '@src/slices/thunk'
import { MoveLeft, MoveRight } from 'lucide-react'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const WishList = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { wishListData } = useSelector((state) => state.WishList)
  const { shopCartList } = useSelector((state) => state.ShopCarts)
  const { layoutDirection } = useSelector((state) => state.Layout)

  const [allWishListData, setAllWishListData] = useState([])

  useEffect(() => {
    document.title = 'Wishlist | Domiex - React JS Admin & Dashboard Template'
  }, [])

  useEffect(() => {
    if (!wishListData) {
      dispatch(getWishList())
    } else {
      setAllWishListData(wishListData)
    }
  }, [wishListData, dispatch])

  // Update product quantity
  const handleQuantityChange = (product, count) => {
    const newProduct = { ...product, count: count }
    dispatch(updateWishListProductQuantity(newProduct))
  }

  // Add product to cart
  const handleAddToCartProduct = (product) => {
    const newProduct = {
      ...product,
      _id: shopCartList ? shopCartList.length + 1 : 1,
    }
    dispatch(addNewShopProduct(newProduct))
  }

  // Delete product from wishlist
  const handleDeleteProduct = (_id) => {
    dispatch(deleteWishListProduct([_id]))
  }

  return (
    <React.Fragment>
      <BreadCrumb title="Wishlist" subTitle="E-commerce" />
      <div className="card">
        <div className="card-header">
          <h6 className="card-title">💖 Wishlist</h6>
        </div>
        <div className="pt-0 card-body">
          <div>
            <div className="overflow-x-auto table-box">
              <table className="table flush">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allWishListData && allWishListData.length < 1 && (
                    <tr>
                      <td colSpan={5} className="whitespace-nowrap">
                        <div className="p-4 text-center">
                          <img
                            src={shoppingCart}
                            alt="shoppingCartImg"
                            className="block mx-auto size-16"
                          />
                          <h6 className="mt-4 mb-1">
                            Your wishlist is waiting for you.
                          </h6>
                          <p className="mb-3 text-gray-500 dark:text-dark-500">
                            Add items to your wishlist as you browse, and they
                            will magically appear here.
                          </p>

                          <div className="flex items-center justify-center gap-2">
                            <button className="btn btn-primary">
                              Browse our catalog
                            </button>
                            <button className="btn btn-outline-purple">
                              Go to your cart
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}

                  {allWishListData &&
                    allWishListData.length > 0 &&
                    allWishListData.map((item, index) => (
                      <tr className="*:px-3 *:py-2.5" key={index}>
                        <td className="whitespace-nowrap">
                          <div className="flex items-center gap-4">
                            <div className="relative flex items-center justify-center p-2 bg-gray-100 dark:bg-dark-850 size-16">
                              <button
                                className="absolute flex items-center justify-center bg-white dark:bg-dark-900 rounded-full shadow-lg shadow-gray-200 dark:shadow-dark-800 hover:text-red-500 transition duration-300 ease-linear -top-1.5 ltr:-right-1.5 rtl:-left-1.5 size-4"
                                onClick={() => handleDeleteProduct(item._id)}>
                                <i className="ri-close-line"></i>
                              </button>
                              <img
                                src={item.image1}
                                alt="itemImg"
                                width={48}
                                height={48}
                              />
                            </div>
                            <div className="grow">
                              <h6 className="mb-1">{item.productName}</h6>
                              <p className="mb-2 text-gray-500 dark:text-dark-500">
                                <span className="px-2 first:pl-0">
                                  <span className="px-2 border-r border-gray-200 dark:border-dark-800 first:pl-0">
                                    {item.activeColor}
                                  </span>

                                  <span className="px-2 first:pl-0">
                                    {item.activeSize}
                                  </span>
                                </span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>{item.price}</td>
                        <td>
                          <div className="input-spin-group input-spin-primary">
                            <button
                              className="text-lg input-spin-minus"
                              onClick={() =>
                                handleQuantityChange(
                                  item,
                                  item.count > 1 ? item.count - 1 : 1
                                )
                              }>
                              <i className="ri-subtract-line"></i>
                            </button>
                            <input
                              type="text"
                              className="text-center input-spin form-input"
                              readOnly
                              value={item.count}
                            />
                            <button
                              className="text-lg input-spin-plus"
                              onClick={() =>
                                handleQuantityChange(
                                  item,
                                  item.count < item.stock
                                    ? item.count + 1
                                    : item.stock
                                )
                              }>
                              <i className="ri-add-line"></i>
                            </button>
                          </div>
                        </td>
                        <td>{(item.price * item.count).toFixed(2)}</td>
                        <td>
                          <Link
                            to="/apps/ecommerce/shop-cart"
                            type="btn btn-sub-gray whitespace-nowrap"
                            onClick={(e) => {
                              handleAddToCartProduct(item)
                            }}
                            className="btn btn-sub-gray whitespace-nowrap">
                            <i className='class="align-bottom ri-shopping-cart-line me-2'></i>
                            Add to Cart
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 mt-3">
              <Link
                to="/apps/ecommerce/products/grid"
                className="btn btn-sub-purple">
                <MoveLeft className="inline-block ltr:mr-1 rtl:ml-1 size-5" />{' '}
                Continue Shopping
              </Link>
              <Link
                to="/apps/ecommerce/shop-cart"
                className="btn btn-sub-green">
                Update to Cart{' '}
                <MoveRight className="inline-block ltr:ml-1 rtl:mr-1 size-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Toaster
        position="top-right"
        reverseOrder={layoutDirection === LAYOUT_DIRECTION.RTL}
      />
    </React.Fragment>
  )
}

export default WishList
