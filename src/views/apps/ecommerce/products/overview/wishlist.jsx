import React, { useEffect, useState } from 'react'

import { addNewShopProduct } from '@src/slices/ecommerce/shop_cart/thunk'
import { deleteWishListProduct } from '@src/slices/ecommerce/wishlist/thunk'
import {
  Check,
  DownloadCloudIcon,
  Edit2,
  Heart,
  Minus,
  Plus,
  Trash2,
} from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Wishlist = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const currentProduct = useSelector(
    (state) => state.ProductList.currentProduct
  )
  const { shopCartList } = useSelector((state) => state.ShopCarts)
  const [showMore, setShowMore] = useState(false)
  const [showMore1, setShowMore1] = useState(false)
  const [activeSize, setActiveSize] = useState('m')
  const [count, setCount] = useState(1)
  const [activeLink, setActiveLink] = useState('gray')
  const sizes = ['S', 'M', 'L', 'XL', '2XL']

  const colorOptions = [
    { color: 'Blue', bgColor: 'bg-blue-500' },
    { color: 'Purple', bgColor: 'bg-purple-500' },
    { color: 'Yellow', bgColor: 'bg-yellow-500' },
    { color: 'Gray', bgColor: 'bg-gray-300' },
    { color: 'Pink', bgColor: 'bg-pink-500' },
    { color: 'Sky', bgColor: 'bg-sky-500' },
    { color: 'Green', bgColor: 'bg-green-500' },
    { color: 'Red', bgColor: 'bg-red-500' },
  ]

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1)
    }
  }
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1)
  }
  const handleAddToCartProduct = (product) => {
    const isCart = shopCartList.some(
      (item) => item.productId === product.productId
    )
    if (isCart) {
      dispatch(deleteWishListProduct([product.id]))
    } else {
      const newProduct = { ...product }
      dispatch(addNewShopProduct(newProduct))
    }
  }
  useEffect(() => {
    if (!currentProduct) {
      setActiveLink('Gray')
      setActiveSize('M')
      setCount(1)
    } else {
      setActiveLink(currentProduct.activeColor)
      setActiveSize(currentProduct.activeSize)
      setCount(currentProduct.count)
    }
  }, [currentProduct])

  return (
    <React.Fragment>
      <div className="card">
        <div className="card-body">
          <div className="flex items-center mb-5">
            <p className="grow">
              <span className="badge badge-sub-gray">
                <Heart className="inline-block mr-1 text-red-500 size-4 fill-red-500"></Heart>{' '}
                Wishlist
              </span>
            </p>
            <div className="divide-x divide-gray-200 rtl:divide-x-reverse dark:divide-dark-800 shrink-0">
              <Link to="#" className="ltr:pr-1 rtl:pl-1 link link-primary">
                <Edit2 className="size-4 mr-1 inline-block"></Edit2>
                <span className="align-middle">Edit </span>
              </Link>
              <Link to="#" className="ltr:pl-2 rtl:pr-2 link link-red">
                <Trash2 className="size-4 mr-1 inline-block"></Trash2>
                <span className="align-middle">Delete</span>
              </Link>
            </div>
          </div>
          <h5 className="mb-3">
            {currentProduct?.productName || 'Collection Ruffled Cotton Top'}
          </h5>
          <div className="flex items-center divide-x divide-gray-200 dark:divide-dark-800 rtl:divide-x-reverse *:px-3 mb-5">
            <p className="ltr:first:pl-0 rtl:first:pr-0">
              <i className="text-yellow-500 align-bottom ri-star-half-line"></i>{' '}
              4.8
            </p>
            <p className="ltr:first:pl-0 rtl:first:pr-0">149 Reviews</p>
            <p className="ltr:first:pl-0 rtl:first:pr-0">4789 Sales</p>
          </div>

          <h4 className="flex items-center gap-2 mt-3">
            <span>${currentProduct?.price || 49.99}</span>
            <small className="font-normal text-gray-500 line-through dark:text-dark-500">
              $<span>{currentProduct?.selling_price || 99.99}</span>
            </small>
            <span className="text-xs badge badge-red shrink-0">
              {currentProduct?.discount || 50}%
            </span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div>
              <h6 className="mt-5">Select Colors</h6>
              <div className="flex items-center gap-2 mt-2 grow">
                {colorOptions.map(({ color, bgColor }) => (
                  <Link
                    key={color}
                    to="#!"
                    className={`flex items-center justify-center text-white ${bgColor} border-2 border-white rounded-full dark:border-dark-900 outline-1 outline outline-gray-200 dark:outline-dark-800 size-6 group/item ${activeLink === color ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault()
                      setActiveLink(color)
                    }}>
                    <Check
                      className={`size-4 ${activeLink === color ? 'block' : 'hidden'}`}></Check>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h6 className="mt-5">Select Size</h6>
              <div className="flex items-center gap-2 mt-3 font-medium shrink-0">
                {sizes.map((size) => (
                  <Link
                    key={size}
                    to="#!"
                    className={`text-gray-500 dark:text-dark-500 [&.active]:text-green-500 ${activeSize === size ? 'active text-green-500' : ''}`}
                    onClick={(e) => {
                      e.preventDefault()
                      setActiveSize(size)
                    }}>
                    {size.toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="my-5">
            <div className="flex items-center w-32 p-1 text-center border border-gray-200 rounded-md dark:border-dark-800">
              <button
                onClick={handleDecrement}
                className="flex items-center justify-center transition duration-200 ease-linear rounded-md text-primary-500 minus size-8 shrink-0 bg-primary-500/20 hover:text-primary-700">
                <Minus className="size-4"></Minus>
              </button>
              <input
                type="text"
                value={count || 1}
                className="h-8 p-0 text-center border-0 rounded-none form-input"
                readOnly
              />
              <button
                onClick={handleIncrement}
                className="flex items-center justify-center transition duration-200 ease-linear rounded-md text-primary-500 plus size-8 shrink-0 bg-primary-500/20 hover:text-primary-700">
                <Plus className="size-4"></Plus>
              </button>
            </div>
          </div>
          {/* </div> */}

          <div className="flex flex-wrap items-center gap-2 mb-5">
            <button type="button" className="btn btn-red w-36">
              Buy Now
            </button>
            {shopCartList?.some(
              (wishItem) => wishItem.productId === currentProduct?.productId
            ) ? (
              <button
                type="button"
                className={`w-36 btn btn-sub-primary`}
                onClick={() => {
                  navigate('/apps/ecommerce/shop-cart')
                }}>
                Go to Cart
              </button>
            ) : currentProduct ? (
              <button
                type="button"
                className={`w-36 btn btn-gary`}
                onClick={(e) => {
                  e.preventDefault()
                  handleAddToCartProduct(currentProduct)
                }}>
                Add to Cart
              </button>
            ) : (
              <button type="button" className={`w-36 btn btn-gray`}>
                Add to Cart
              </button>
            )}
          </div>

          <h6 className="mb-2">Available offers</h6>
          <div className="mb-5">
            <ul className="space-y-2 text-gray-500 list-inside dark:text-dark-500 list-circle">
              <li>
                <span className="font-semibold">Bank Offer</span> Get ₹50
                instant discount on first Domiex UPI txn on order of ₹200 and
                above{' '}
                <Link to="#!" className="underline link link-red">
                  T&C
                </Link>
              </li>
              <li>
                <span className="font-semibold">Bank Offer</span> 5% Cashback on
                Domiex Axis Bank Card{' '}
                <Link to="#!" className="underline link link-red">
                  T&C
                </Link>
              </li>
              <li>
                <span className="font-semibold">Special Price</span> Get extra
                ₹7000 off (price inclusive of cashback/coupon){' '}
                <Link to="#!" className="underline link link-red">
                  T&C
                </Link>
              </li>
              <li>
                <span className="font-semibold">Freebie</span> Flat ₹1000 off on
                Cleartrip hotels booking along with 300 coins on booking{' '}
                <Link to="#!" className="underline link link-red">
                  T&C
                </Link>
              </li>

              {/* Additional items to be shown/hidden */}
              {showMore && (
                <>
                  <li>
                    <span className="font-semibold">Bank Offer</span> Additional
                    Bank Offer details{' '}
                    <Link to="#!" className="underline link link-red">
                      T&C
                    </Link>
                  </li>
                  <li>
                    <span className="font-semibold">Special Price</span>{' '}
                    Additional Special Price details{' '}
                    <Link to="#!" className="underline link link-red">
                      T&C
                    </Link>
                  </li>
                  <li>
                    <span className="font-semibold">Freebie</span> Additional
                    Freebie details{' '}
                    <Link to="#!" className="underline link link-red">
                      T&C
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <Link
              to="#!"
              className="inline-block mt-3 link link-red"
              onClick={() => setShowMore((prev) => !prev)}>
              <span>{showMore ? 'Show Less' : 'Show More'}</span>
              <i
                className={`inline-block size-4 ${showMore ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}`}></i>
            </Link>
          </div>

          <h6 className="mb-1">Product Overview</h6>
          <p className="mb-4 text-gray-500 dark:text-dark-500">
            We work with monitoring programmes to ensure compliance with our
            social, environmental and health and safety standards for our
            products. To assess compliance, we have developed a programme of
            audits and continuous improvement plans.
          </p>

          <div>
            <table className="table table-sm flush">
              <tbody>
                <tr>
                  <th className="!border-0">Neck</th>
                  <td>U Neck</td>
                </tr>
                <tr>
                  <th className="!border-0">Sleeve Style</th>
                  <td>Sleeveless</td>
                </tr>
                <tr>
                  <th className="!border-0">Sleeve Length</th>
                  <td>Sleeveless</td>
                </tr>
                <tr>
                  <th className="!border-0">Fit</th>
                  <td>Regular</td>
                </tr>
                <tr>
                  <th className="!border-0">Fabric</th>
                  <td>Cotton Blend</td>
                </tr>
                <tr>
                  <th className="!border-0">Type</th>
                  <td>Cami Top</td>
                </tr>
                <tr>
                  <th className="!border-0">Pattern</th>
                  <td>Self Design</td>
                </tr>
                {showMore1 && (
                  <>
                    <tr>
                      <th className="!border-0">Color</th>
                      <td>White</td>
                    </tr>
                    <tr>
                      <th className="!border-0">Pack of</th>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th className="!border-0">Fabric Care</th>
                      <td>hand wash only</td>
                    </tr>
                    <tr>
                      <th className="!border-0">Length</th>
                      <td>Crop</td>
                    </tr>
                    <tr>
                      <th className="!border-0">Net Quantity</th>
                      <td>1</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
            <Link
              to="#!"
              className="inline-block mt-3 link link-red"
              onClick={() => setShowMore1((prev) => !prev)}>
              <span>{showMore1 ? 'Show Less' : 'Show More'}</span>
              <i
                className={`inline-block size-4 ${showMore1 ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}`}></i>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Wishlist
