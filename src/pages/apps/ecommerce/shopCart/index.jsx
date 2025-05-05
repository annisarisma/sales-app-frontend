import React, { useEffect, useState } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import { LAYOUT_DIRECTION } from '@src/components/Constants/layout'
import {
  deleteShopProduct,
  getECommerceShopCartData,
  updateShopCartProduct,
} from '@src/slices/thunk'
import { Check, Percent, ShieldCheck, Truck } from 'lucide-react'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ShopCart = () => {
  const dispatch = useDispatch()
  const { shopCartList } = useSelector((state) => state.ShopCarts)
  const { layoutDirection } = useSelector((state) => state.Layout)
  const [products, setProducts] = useState([])
  const [time, setTime] = useState(300)
  const [discountCode, setDiscountCode] = useState('')
  let shippingCharge = 35.0

  useEffect(() => {
    document.title = 'Shop Cart | Domiex - React JS Admin & Dashboard Template'
  }, [])

  // Countdown Timer Effect
  useEffect(() => {
    const countdown = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(countdown)
          window.history.back()
          return 0
        }
        return prevTime - 1
      })
    }, 1000)
    return () => clearInterval(countdown)
  }, [])

  useEffect(() => {
    if (!shopCartList) {
      dispatch(getECommerceShopCartData())
    } else {
      setProducts(shopCartList)
    }
  }, [shopCartList, dispatch])

  // Total Price Calculation
  const subtotal = products.reduce(
    (sum, item) => sum + item.price * item.count * (1 - item.discount),
    0
  )
  const vat = subtotal * 0.06
  const discount = discountCode ? subtotal * 0.1 : 0
  const total = subtotal + vat + shippingCharge - discount

  // Timer Format (Minutes:Seconds)
  const formatTime = () => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
  }

  // update product active color
  const handleColorChange = (product, color) => {
    const updatedProduct = { ...product, activeColor: color }
    dispatch(updateShopCartProduct(updatedProduct))
  }

  // update product active size
  const handleSizeChange = (product, size) => {
    const updatedProduct = { ...product, activeSize: size }
    dispatch(updateShopCartProduct(updatedProduct))
  }

  // update product quantity
  const handleQuantityChange = (product, qty) => {
    const updatedProduct = { ...product, count: qty }
    dispatch(updateShopCartProduct(updatedProduct))
  }

  // remove product
  const handleRemoveProduct = (product) => {
    dispatch(deleteShopProduct([product]))
  }

  return (
    <React.Fragment>
      <BreadCrumb title="Shop Cart" subTitle="Ecommerce" />
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 xl:col-span-8">
          <div className="flex items-center gap-5 mb-5">
            <h6 className="card-title grow">Shopping Cart</h6>
            <div className="flex items-center justify-center shrink-0">
              <p className="text-gray-500 dark:text-dark-500">
                <span className="font-semibold text-red-500">
                  {formatTime()}
                </span>{' '}
                left until the end of the process
              </p>
            </div>
          </div>

          {/* product list */}
          {products.map((product, index) => (
            <div key={index}>
              <div className="card">
                <div className="card-body">
                  <div className="gap-5 sm:flex">
                    <div className="w-full sm:w-[300px] shrink-0 bg-gray-100 dark:bg-dark-850 rounded-md">
                      <img
                        src={product.image1}
                        alt="productImg"
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="mt-5 sm:mt-0">
                      <span className="badge badge-gray">
                        {product.category}
                      </span>
                      <h6 className="mt-2 mb-3">
                        <Link to="#">{product.productName}</Link>
                      </h6>

                      <div className="grid grid-cols-2 gap-space">
                        <div>
                          <h6>Select Colors</h6>
                          <div className="flex items-center gap-2 mt-2 grow">
                            {product.colors &&
                              product.colors.map((color, index) => (
                                <button
                                  key={index}
                                  className={`flex items-center justify-center text-white border-2 border-white rounded-full dark:border-dark-900 outline-1 outline size-6 group/item 
                                                            ${color === 'Blue' && 'bg-blue-500 outline-blue-500/20'}
                                                            ${color === 'Gray' && 'bg-gray-500 outline-gray-200 dark:outline-gray-800'}
                                                            ${color === 'Pink' && 'bg-pink-500 outline-pink-500/20'}
                                                            ${color === 'Green' && 'bg-green-500 outline-green-500/20'}
                                                            ${color === 'Red' && 'bg-red-500 outline-red-500/20'}
                                                            ${color === 'Yellow' && 'bg-yellow-500 outline-yellow-500/20'}
                                                            ${color === 'Purple' && 'bg-purple-500 outline-purple-500/20'}
                                                            ${color === 'Sky' && 'bg-sky-500 outline-sky-500/20'}
                                                            ${product.activeColor === color && 'active'}
                                                        `}
                                  onClick={() =>
                                    handleColorChange(product, color)
                                  }>
                                  {product.activeColor === color && (
                                    <Check className="size-4 hidden group-[&.active]/item:block" />
                                  )}
                                </button>
                              ))}
                          </div>
                        </div>

                        {/* Size Selection */}
                        <div>
                          <h6>Select Size</h6>
                          <div className="flex items-center gap-2 mt-3 font-medium shrink-0">
                            {product.size.map((size, index) => (
                              <button
                                key={index}
                                className={`text-gray-500 dark:text-dark-500 [&.active]:text-green-500 ${product.activeSize === size ? 'active' : ''}`}
                                onClick={() => handleSizeChange(product, size)}>
                                {size}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Price Calculation */}
                      <h5 className="flex items-center gap-2 mt-4">
                        <span>
                          $
                          {(
                            product.price *
                            product.count *
                            (1 - product.discount)
                          ).toFixed(2)}
                        </span>
                        {product.discount > 0 && (
                          <>
                            <small className="font-normal text-gray-500 line-through dark:text-dark-500">
                              ${(product.price * product.count).toFixed(2)}
                            </small>
                            <span className="text-xs badge badge-red shrink-0">
                              {(product.discount * 100).toFixed(0)}%
                            </span>
                          </>
                        )}
                      </h5>

                      {/* Quantity Adjuster */}
                      <div className="mt-5">
                        <div className="flex items-center w-32 p-1 text-center border border-gray-200 rounded-md dark:border-dark-800">
                          <button
                            className="flex items-center justify-center transition duration-200 ease-linear rounded-md text-primary-500 minus size-8 shrink-0 bg-primary-500/20 hover:text-primary-700"
                            onClick={() =>
                              handleQuantityChange(
                                product,
                                product.count > 1 ? product.count - 1 : 1
                              )
                            }>
                            <i className="size-4 ri-subtract-line"></i>
                          </button>
                          <input
                            type="text"
                            value={product.count}
                            className="h-8 p-0 text-center border-0 rounded-none form-input"
                            readOnly
                          />
                          <button
                            onClick={() =>
                              handleQuantityChange(
                                product,
                                product.count < product.stock
                                  ? product.count + 1
                                  : product.stock
                              )
                            }
                            className="flex items-center justify-center transition duration-200 ease-linear rounded-md text-primary-500 plus size-8 shrink-0 bg-primary-500/20 hover:text-primary-700">
                            <i className="size-4 ri-add-line"></i>
                          </button>
                        </div>
                      </div>

                      {/* remove */}
                      <button
                        className="mt-3 text-gray-500 hover:text-red-500"
                        onClick={() => handleRemoveProduct(product._id)}>
                        <i className="link size-4 link-red ri-close-line"></i>{' '}
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* bill section */}
        <div className="col-span-12 xl:col-span-4">
          <div className="sticky mb-5 top-24">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Order Summary</h6>
              </div>
              <div className="card-body">
                <div className="mb-4">
                  <label htmlFor="discountCode" className="form-label">
                    Discount Code
                  </label>
                  <input
                    type="text"
                    id="discountCode"
                    className="form-input"
                    placeholder="Enter coupon code"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                  />
                </div>
                <table className="table flush">
                  <tbody>
                    <tr>
                      <td className="font-semibold">Sub Amount</td>
                      <td>${subtotal.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Vat Amount (6%)</td>
                      <td>${vat.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Discount (10%)</td>
                      <td>-${discount.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Shipping Charge</td>
                      <td>${shippingCharge.toFixed(2)}</td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-dark-800">
                      <td className="font-semibold">Total Amount</td>
                      <td>${total.toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="my-4">
                  <Link
                    to="/apps/ecommerce/checkout"
                    className="w-full btn btn-primary">
                    Checkout Now
                  </Link>
                </div>
                <p className="text-center text-gray-500 dark:text-dark-500">
                  By clicking the "checkout order" button, you agree to the
                  terms of the public offers.
                </p>
              </div>
            </div>

            {/* free delivery */}
            <div className="flex gap-4 mb-5">
              <div className="flex items-center justify-center bg-gray-100 rounded-md size-12 dark:bg-dark-850 shrink-0">
                <Truck className="text-gray-500 fill-gray-200 dark:text-dark-500 dark:fill-dark-850" />
              </div>
              <div>
                <h6 className="mb-1">Free delivery on May 24 </h6>
                <p className="text-gray-500 dark:text-dark-500">
                  To the address, by courier - with fitting, free of charge for
                  purchases over $500.
                </p>
              </div>
            </div>

            {/* safety */}
            <div className="flex gap-4 mb-5">
              <div className="flex items-center justify-center bg-gray-100 rounded-md size-12 dark:bg-dark-850 shrink-0">
                <ShieldCheck className="text-gray-500 dark:text-dark-500 fill-gray-200 dark:fill-dark-850" />
              </div>
              <div>
                <h6 className="mb-1">Safety</h6>
                <p className="text-gray-500 dark:text-dark-500">
                  The security of payments is guaranteed through the use of the
                  SSL protocol. Your bank card details are securely protected
                  during online transactions.
                </p>
              </div>
            </div>

            {/* discount */}
            <div className="flex gap-4">
              <div className="flex items-center justify-center bg-gray-100 rounded-md size-12 dark:bg-dark-850 shrink-0">
                <Percent className="text-gray-500 dark:text-dark-500 fill-gray-200 dark:fill-dark-850" />
              </div>
              <div>
                <h6 className="mb-1">5% discount</h6>
                <p className="text-gray-500 dark:text-dark-500">
                  When paying online, you receive a 5% discount on your next
                  purchase.
                </p>
              </div>
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

export default ShopCart
