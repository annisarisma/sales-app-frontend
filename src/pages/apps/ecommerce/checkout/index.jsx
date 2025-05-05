import React, { useCallback, useEffect, useState } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import { LAYOUT_DIRECTION } from '@src/components/Constants/layout'
import ErrorToast from '@src/components/CustomComponents/Toast/ErrorToast'
import {
  deleteCheckoutListData,
  deleteShopProduct,
  editCheckoutListData,
  getCheckoutAddressData,
  getECommerceShopCartData,
} from '@src/slices/thunk'
import { formatPhoneNumber } from '@src/utils/ValidationFormate'
import { Pencil, ShieldCheck, Trash2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { addCheckoutListData } from '../../../../slices/ecommerce/checkout/thunk'

const Checkout = () => {
  const dispatch = useDispatch()
  const { checkoutAddressList } = useSelector((state) => state.Checkout)
  const { shopCartList } = useSelector((state) => state.ShopCarts)
  const { layoutDirection } = useSelector((state) => state.Layout)
  const navigate = useNavigate()
  const [checkoutAddressData, setCheckoutAddressData] = useState(null)
  const [checkoutProductData, setCheckoutProductData] = useState(null)
  const [selectedAddress, setSelectedAddress] = useState(1)
  const [currentAddress, setCurrentAddress] = useState(null)
  const [isEditMode, setIsEditMode] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [shippingCharge] = useState(35.0)
  const [discountCode, setDiscountCode] = useState('')
  const vatRate = 0.06
  const discountRate = 0.1

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    document.title = 'Checkout | Domiex - React JS Admin & Dashboard Template'
  }, [])

  // use effect for get checkout address
  useEffect(() => {
    if (!checkoutAddressList) {
      dispatch(getCheckoutAddressData())
    } else {
      setCheckoutAddressData(checkoutAddressList)
    }
  }, [checkoutAddressList, dispatch])

  // use effect for get checkout shop cart data
  useEffect(() => {
    if (!shopCartList) {
      dispatch(getECommerceShopCartData())
    } else {
      setCheckoutProductData(shopCartList)
    }
  }, [shopCartList, dispatch])

  // set current address
  const handleSelectCurrentAddress = (_id) => {
    setSelectedAddress(_id)
  }
  // edit address
  const handleEditAddress = (address) => {
    setIsFormOpen(true)
    setIsEditMode(true)
    setCurrentAddress(address)
  }
  // add new address
  const handleAddNewAddress = () => {
    setIsFormOpen(true)
    setIsEditMode(false)
    setCurrentAddress(null)
  }
  // delete address
  const handleDeleteAddress = (address) => {
    dispatch(deleteCheckoutListData([address._id]))
    setCurrentAddress(null)
    setIsFormOpen(false)
    setIsEditMode(false)
  }
  // delete product
  const handleDeleteProduct = (product) => {
    dispatch(deleteShopProduct([product._id]))
  }
  // close form
  const handleCloseForm = () => {
    setIsFormOpen(false)
    setIsEditMode(false)
    setCurrentAddress(null)
  }

  // Total Price Calculation
  const subtotal =
    checkoutProductData?.reduce(
      (sum, item) => sum + item.price * item.count * (1 - item.discount),
      0
    ) || 0
  const vat = subtotal * vatRate
  const discount = discountCode ? subtotal * discountRate : 0
  const total = subtotal + vat + shippingCharge - discount

  const resetForm = useCallback(() => {
    reset({
      _id:
        checkoutAddressList && checkoutAddressList.length > 0
          ? checkoutAddressList.length + 1
          : 1,
      type: '',
      firstName: '',
      lastName: '',
      phone: '',
      alternatePhone: '',
      address: '',
      city: '',
      country: '',
      zip: '',
    })
  }, [checkoutAddressList, reset])

  // submit form data
  const submitForm = (data) => {
    if (isEditMode && currentAddress) {
      dispatch(editCheckoutListData(data))
    } else {
      const formData = {
        ...data,
        _id:
          checkoutAddressList && checkoutAddressList.length > 0
            ? checkoutAddressList.length + 1
            : 1,
      }
      dispatch(addCheckoutListData(formData))
    }
    handleCloseForm()
    resetForm()
  }
  const handleCheckout = () => {
    if (selectedAddress > 0) {
      navigate('/apps/ecommerce/payment')
    } else {
      ErrorToast('Please select your current address.')
    }
  }

  // set form data to edit
  useEffect(() => {
    if (isEditMode && currentAddress) {
      Object.keys(currentAddress).forEach((key) => {
        setValue(key, currentAddress[key])
      })
    } else {
      resetForm()
    }
  }, [isEditMode, currentAddress, setValue, reset, resetForm])

  return (
    <React.Fragment>
      <BreadCrumb title="Checkout" subTitle="E-commerce" />
      <div className="grid grid-cols-12 gap-space">
        <div className="col-span-12 2xl:col-span-8">
          <div className="card">
            <div className="card-header">
              <h6 className="card-title">Personal Details</h6>
            </div>
            <div className="card-body">
              <div>
                {checkoutAddressData &&
                  checkoutAddressData.length > 0 &&
                  checkoutAddressData.map((address, index) => (
                    <div className="card" key={index}>
                      <div className="card-body">
                        <div className="flex items-center gap-2 float-end">
                          <button
                            className="font-medium link link-primary"
                            onClick={() => handleEditAddress(address)}>
                            <Pencil className="inline-block size-4" />
                            <span className="align-center">Edit</span>
                          </button>
                          <button
                            className="font-medium link link-primary"
                            onClick={() => handleDeleteAddress(address)}>
                            <Trash2 className="inline-block size-4" />
                            <span className="align-center">Delete</span>
                          </button>
                        </div>
                        <span className="badge badge-gray">{address.type}</span>
                        <h6 className="mt-2 mb-1">{`${address.firstName} ${address.lastName} - ${address.phone}`}</h6>
                        <p className="mb-3 text-gray-500 dark:text-dark-500">
                          {address.address}, {address.city}, {address.country} -{' '}
                          {address.zip}
                        </p>
                        <button
                          onClick={() =>
                            handleSelectCurrentAddress(address._id)
                          }
                          className={
                            selectedAddress === address._id
                              ? 'btn btn-primary'
                              : 'btn btn-sub-gray'
                          }>
                          <span>
                            {selectedAddress === address._id
                              ? 'Selected Address'
                              : 'Select Here'}
                          </span>
                        </button>
                      </div>
                    </div>
                  ))}
              </div>

              <div>
                <div className="text-right">
                  <button
                    className="btn btn-green"
                    onClick={handleAddNewAddress}>
                    Add a New Address
                  </button>
                </div>

                {isFormOpen && (
                  <div className={`mt-3 ${isFormOpen ? 'show d-block' : ''}`}>
                    <h6 className="mb-2">
                      {isEditMode ? 'Edit Address' : 'Add New Address'}
                    </h6>

                    <form action="" onSubmit={handleSubmit(submitForm)}>
                      <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12 md:col-span-6">
                          <label htmlFor="firstName" className="form-label">
                            First Name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            className="form-input"
                            placeholder="Enter first name"
                            {...register('firstName', {
                              required: 'First name is required.',
                            })}
                          />
                          {errors.firstName && (
                            <span className="text-red-500">
                              {errors.firstName.message}
                            </span>
                          )}
                        </div>
                        <div className="col-span-12 md:col-span-6">
                          <label htmlFor="lastName" className="form-label">
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            className="form-input"
                            placeholder="Enter last name"
                            {...register('lastName', {
                              required: 'Last name is required.',
                            })}
                          />
                          {errors.lastName && (
                            <span className="text-red-500">
                              {errors.lastName.message}
                            </span>
                          )}
                        </div>
                        <div className="col-span-12 md:col-span-6">
                          <label htmlFor="phoneNumber" className="form-label">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phoneNumber"
                            className="form-input"
                            placeholder="(000) 000 0000"
                            maxLength={14}
                            {...register('phone', {
                              required: 'Phone is required.',
                              pattern: {
                                value: /^\(\d{3}\) \d{3} \d{4}$/,
                                message:
                                  'Invalid phone number format. Expected format: (000) 000 0000',
                              },
                              onChange: (e) => {
                                const formattedPhoneNumber = formatPhoneNumber(
                                  e.target.value
                                )
                                setValue('phone', formattedPhoneNumber)
                              },
                            })}
                          />
                          {errors.phone && (
                            <span className="text-red-500">
                              {errors.phone.message}
                            </span>
                          )}
                        </div>
                        <div className="col-span-12 md:col-span-6">
                          <label
                            htmlFor="alternatePhoneNumber"
                            className="form-label">
                            Alternate Phone Number (Optional)
                          </label>
                          <input
                            type="tel"
                            id="alternatePhoneNumber"
                            className="form-input"
                            placeholder="(000) 000 0000"
                            maxLength={14}
                            {...register('alternatePhone', {
                              pattern: {
                                value: /^\(\d{3}\) \d{3} \d{4}$/,
                                message:
                                  'Invalid phone number format. Expected format: (000) 000 0000',
                              },
                              onChange: (e) => {
                                const formattedPhoneNumber = formatPhoneNumber(
                                  e.target.value
                                )
                                setValue('alternatePhone', formattedPhoneNumber)
                              },
                            })}
                          />
                          {errors.phone && (
                            <span className="text-red-500">
                              {errors.phone.message}
                            </span>
                          )}
                        </div>
                        <div className="col-span-12">
                          <label
                            htmlFor="textareaInput2"
                            className="form-label">
                            Address (Area and Street)
                          </label>
                          <textarea
                            id="textareaInput2"
                            rows={3}
                            className="h-auto form-input"
                            placeholder="Area and Street"
                            {...register('address', {
                              required: 'Address is required.',
                            })}></textarea>
                          {errors.address && (
                            <span className="text-red-500">
                              {errors.address.message}
                            </span>
                          )}
                        </div>
                        <div className="col-span-12 md:col-span-4">
                          <label
                            htmlFor="cityDistrictTownInput"
                            className="form-label">
                            City/District/Town
                          </label>
                          <input
                            type="text"
                            id="cityDistrictTownInput"
                            className="form-input"
                            placeholder="Enter city name"
                            {...register('city', {
                              required: 'City is required.',
                            })}
                          />
                          {errors.city && (
                            <span className="text-red-500">
                              {errors.city.message}
                            </span>
                          )}
                        </div>
                        <div className="col-span-12 md:col-span-4">
                          <label
                            htmlFor="countryNameInput"
                            className="form-label">
                            Country Name
                          </label>
                          <input
                            type="text"
                            id="countryNameInput"
                            className="form-input"
                            placeholder="Enter country"
                            {...register('country', {
                              required: 'Country date is required.',
                            })}
                          />
                          {errors.country && (
                            <span className="text-red-500">
                              {errors.country.message}
                            </span>
                          )}
                        </div>
                        <div className="col-span-12 md:col-span-4">
                          <label htmlFor="zipCodeInput" className="form-label">
                            Zip Code
                          </label>
                          <input
                            type="text"
                            id="zipCodeInput"
                            className="form-input"
                            placeholder="Enter zip code"
                            {...register('zip', {
                              required: 'Zip code is required.',
                            })}
                          />
                          {errors.zip && (
                            <span className="text-red-500">
                              {errors.zip.message}
                            </span>
                          )}
                        </div>
                        <div className="col-span-12">
                          <h6 className="mb-2">Address Type</h6>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-space">
                            <div>
                              <div className="input-radio-group">
                                <input
                                  id="homeRadio"
                                  className="input-radio input-radio-primary"
                                  type="radio"
                                  value="Home"
                                  defaultChecked={
                                    isEditMode &&
                                    currentAddress?.type === 'Home'
                                  }
                                  {...register('type', {
                                    required: 'Address type is required.',
                                  })}
                                />
                                <label
                                  htmlFor="homeRadio"
                                  className="input-radio-label">
                                  Home (All day delivery)
                                </label>
                              </div>
                            </div>
                            <div>
                              <div className="input-radio-group">
                                <input
                                  id="workRadio"
                                  className="input-radio input-radio-primary"
                                  type="radio"
                                  value="Work"
                                  defaultChecked={
                                    isEditMode &&
                                    currentAddress?.type === 'Work'
                                  }
                                  {...register('type', {
                                    required: 'Address type is required.',
                                  })}
                                />
                                <label
                                  htmlFor="workRadio"
                                  className="input-radio-label">
                                  Work (Delivery between 10 AM - 5 PM)
                                </label>
                              </div>
                            </div>
                            {errors.type && (
                              <span className="text-red-500">
                                {errors.type.message}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-span-12">
                          <div className="flex flex-wrap justify-end gap-2">
                            <button
                              type="button"
                              className="btn btn-active-red"
                              onClick={handleCloseForm}>
                              Cancel
                            </button>
                            <button className="btn btn-primary" type="submit">
                              Save and Deliver Here
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 2xl:col-span-4">
          <div className="sticky mb-5 top-24">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Order Summary</h6>
              </div>
              <div className="card-body">
                {checkoutProductData &&
                  checkoutProductData?.length > 0 &&
                  checkoutProductData?.map((product, index) => (
                    <div className="mb-3" key={index}>
                      <button
                        className="float-end"
                        onClick={() => handleDeleteProduct(product)}>
                        <i className="link size-4 link-red ri-close-line"></i>
                      </button>
                      <div className="flex flex-col gap-3 md:flex-row">
                        <div className="flex items-center justify-center w-16 bg-gray-100 rounded-md dark:bg-dark-850">
                          <img
                            src={product.image1}
                            alt="productImg"
                            width={64}
                            height={64}
                          />
                        </div>
                        <div>
                          <h6 className="mb-1">{product.productName}</h6>
                          <p className="mb-2 text-gray-500 dark:text-dark-500">
                            <span className="px-2 border-r border-gray-200 dark:border-dark-800 first:pl-0">
                              {product.count} Qty
                            </span>
                            <span className="px-2 border-r border-gray-200 dark:border-dark-800 first:pl-0">
                              {product.activeColor}
                            </span>
                            <span className="px-2 ltr:first:pl-0 rtl:first:pr-0">
                              {product.activeSize}
                            </span>
                          </p>
                          <h5>{product.price}</h5>
                        </div>
                      </div>
                    </div>
                  ))}

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
                      <th className="!border-0">Sub Amount</th>
                      <td>
                        $<span>{subtotal?.toFixed(2)}</span>
                      </td>
                    </tr>
                    <tr>
                      <th className="!border-0">Vat Amount (6%)</th>
                      <td>
                        $<span>{vat.toFixed(2)}</span>
                      </td>
                    </tr>
                    <tr>
                      <th className="!border-0">Discount (10%)</th>
                      <td>
                        -$<span>{discount.toFixed(2)}</span>
                      </td>
                    </tr>
                    <tr>
                      <th className="!border-0">Shipping Charge</th>
                      <td>
                        $<span>{shippingCharge.toFixed(2)}</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-dark-800">
                      <th className="!border-0">Total Amount</th>
                      <td>
                        $<span>{total?.toFixed(2)}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="my-4">
                  <button
                    className="w-full btn btn-primary"
                    onClick={handleCheckout}>
                    Checkout Now
                  </button>
                </div>
                <p className="text-center text-gray-500 dark:text-dark-500">
                  By clicking the "checkout order" button, you agree to the
                  terms of the public offers.
                </p>
              </div>
            </div>
            <div className="flex gap-4 mb-5">
              <div className="flex items-center justify-center bg-gray-100 rounded-md size-12 shrink-0 dark:bg-dark-850">
                <ShieldCheck className="text-gray-500 dark:text-dark-500 fill-gray-200 dark:fill-dark-850" />
              </div>
              <div>
                <h6 className="mb-1">Safe and Secure</h6>
                <p className="text-gray-500 dark:text-dark-500">
                  Safe and Secure Payments. Easy returns. 100% Authentic
                  products.
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

export default Checkout
