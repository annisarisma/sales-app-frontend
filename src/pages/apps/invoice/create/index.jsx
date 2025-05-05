import React, {
  ChangeEvent,
  KeyboardEvent,
  ReactElement,
  useEffect,
  useState,
} from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import { addInvoiceListRecordData } from '@src/slices/thunk'
import {
  formatPhoneNumber,
  handleFileUpload,
  validateField,
} from '@src/utils/ValidationFormate'
import { Printer, RotateCcw, Save, Squirrel, Upload } from 'lucide-react'
import Flatpickr from 'react-flatpickr'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'

const clientStatusOptions = [
  { label: 'Paid', value: 'Paid' },
  { label: 'Unpaid', value: 'Unpaid' },
  { label: 'Pending', value: 'Pending' },
  { label: 'Overdue', value: 'Overdue' },
]

const getRecordId = (list, key, prefix) => {
  const lastId = list
    .map((item) => item[key])
    .filter((id) => id?.startsWith(prefix))
    .map((id) => parseInt(id.replace(`${prefix}-`, ''), 10))
    .reduce((max, current) => Math.max(max, current), 0)
  return `${prefix}-${lastId + 1}`
}

const imageList = [
  'https://images.kcubeinfotech.com/domiex/images/products/img-05.png',
  'https://images.kcubeinfotech.com/domiex/images/products/img-04.png',
  'https://images.kcubeinfotech.com/domiex/images/products/img-06.png',
  'https://images.kcubeinfotech.com/domiex/images/products/img-01.png',
  'https://images.kcubeinfotech.com/domiex/images/products/img-13.png',
  'https://images.kcubeinfotech.com/domiex/images/products/img-02.png',
  'https://images.kcubeinfotech.com/domiex/images/products/img-12.png',
  'https://images.kcubeinfotech.com/domiex/images/products/img-11.png',
  'https://images.kcubeinfotech.com/domiex/images/products/img-10.png',
  'https://images.kcubeinfotech.com/domiex/images/products/img-09.png',
]

// get stock value
const getStockValue = (max = 100) => {
  return Math.floor(Math.random() * (max + 1))
}

// get color value
const getRandomColor = () => {
  const colors = ['blue', 'gray', 'pink', 'green', 'red']
  const randomIndex = Math.floor(Math.random() * colors.length)
  return colors[randomIndex]
}

// get random size
const getRandomSize = () => {
  const sizes = ['S', 'M', 'L', 'XL', '2XL']
  const randomIndex = Math.floor(Math.random() * sizes.length)
  return sizes[randomIndex]
}

// find random number
function getRandomNumber(min = 1, max = 10) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const InvoiceCreate = () => {
  const dispatch = useDispatch()
  const { invoiceList, isEditMode, currentInvoiceRecord } = useSelector(
    (state) => state.Invoice
  )
  const navigate = useNavigate()
  const [status, setStatus] = useState(null)
  const [preview, setPreview] = useState(null)
  const [clientStatusOption, setClientStatusOption] = useState(null)
  const [invoiceDate, setInvoiceDate] = useState(null)
  const [dueDate, setDueDate] = useState(null)
  const [productInfoSize, setProductInfoSize] = useState(0)
  const [productInfo, setProductInfo] = useState([])
  const [vatAmount, setVatAmount] = useState(0)
  const [disCountAmount, setDisCountAmount] = useState(0)
  const [shippingCharge, setShippingCharge] = useState(0)
  const [productRecord, setProductRecord] = useState({
    _id: currentInvoiceRecord ? currentInvoiceRecord.productInfo.length + 1 : 1,
    productId: getRecordId(productInfo, 'productId', 'PEP'),
    productImage: imageList[getRandomNumber()],
    productName: '',
    category: '',
    qty: 0,
    stock: getStockValue(),
    unitPrice: 0,
    unitDiscount: 0,
    unitTotal: 0,
    size: getRandomSize(),
    color: getRandomColor(),
  })

  // calculation
  const orderSubTotal =
    productInfo.length > 0
      ? productInfo.reduce((total, product) => total + product.unitTotal, 0)
      : 0
  const orderVatConst = (orderSubTotal * vatAmount) / 100
  const orderDiscount = (orderSubTotal * disCountAmount) / 100
  const orderShippingCost = (orderSubTotal * shippingCharge) / 100
  const orderTotal =
    orderSubTotal + orderVatConst - orderDiscount + orderShippingCost

  const {
    register,
    unregister,
    handleSubmit,
    control,
    setError,
    setValue,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm()

  // file change
  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(file)
    } else {
      setPreview(null)
    }
  }

  // status change
  const handleStatusChange = (selected, onChange) => {
    setStatus(selected)
    onChange(selected)
  }

  // increase product quantity
  const handleQtyIncrease = (event, product, index) => {
    const updatedProduct = product
    updatedProduct.qty = product.qty + 1
    if (updatedProduct.qty > updatedProduct.stock) {
      setError(`productInfo.${index}.qty`, {
        type: 'manual',
        message: `Quantity should be less than ${productInfo[index].stock}`,
      })
    } else {
      setProductInfo([
        ...productInfo.slice(0, index),
        updatedProduct,
        ...productInfo.slice(index + 1),
      ])
    }
  }

  // decrease product quantity
  const handleQtyDecrease = (product, index) => {
    const updatedProduct = product
    updatedProduct.qty = product.qty <= 0 ? 0 : product.qty - 1
    if (updatedProduct.qty >= 0 && updatedProduct.qty <= updatedProduct.stock) {
      clearErrors(`productInfo.${index}.qty`)
    }
    setProductInfo([
      ...productInfo.slice(0, index),
      updatedProduct,
      ...productInfo.slice(index + 1),
    ])
  }

  // handle unit price change
  const handleUnitPriceChange = (discount, price, product, index) => {
    const updatedProduct = product
    updatedProduct.unitPrice = price
    updatedProduct.unitDiscount = discount
    const subTotalPrice = updatedProduct.unitPrice * updatedProduct.qty
    const discountPrice = (subTotalPrice * updatedProduct.unitDiscount) / 100
    updatedProduct.unitTotal = subTotalPrice - discountPrice
    setProductInfo([
      ...productInfo.slice(0, index),
      updatedProduct,
      ...productInfo.slice(index + 1),
    ])
  }

  // handle new add product
  // Handle adding a new blank product
  const handleAddNewProduct = (event) => {
    event.preventDefault()

    // Create a blank product object with unique properties
    const newProduct = {
      _id: Date.now(),
      productId: 'PEP-19166',
      productImage: imageList[getRandomNumber()],
      productName: '',
      category: '',
      qty: 0,
      stock: getStockValue(),
      unitPrice: 0,
      unitDiscount: 0,
      unitTotal: 0,
      size: getRandomSize(),
      color: getRandomColor(),
    }

    // Add the new blank product to the end of the array
    setProductInfo((prevProducts) => [...prevProducts, newProduct])
    newProduct.productName = ''
    newProduct.category = ''
    newProduct.qty = 0
    newProduct.unitPrice = 0
    newProduct.unitDiscount = 0
    newProduct.unitTotal = 0
  }

  // Handle deleting a specific product by index
  const handleRemoveProduct = (event, index) => {
    event.preventDefault()
    unregister(`productInfo.${index}.productName`)
    unregister(`productInfo.${index}.category`)
    unregister(`productInfo.${index}.qty`)
    unregister(`productInfo.${index}.unitPrice`)
    unregister(`productInfo.${index}.unitDiscount`)
    unregister(`productInfo.${index}.unitTotal`)
    setProductInfo((prevProducts) => {
      const updatedProducts = [
        ...prevProducts.slice(0, index),
        ...prevProducts.slice(index + 1),
      ]

      return updatedProducts
    })
    ;``
  }
  useEffect(() => {}, [productInfo])

  // submit form
  const submitForm = (data) => {
    if (isEditMode && currentInvoiceRecord) {
      const currentInvoice = { ...data }
      currentInvoice.productInfo = productInfo
      navigate('/apps/invoice/list')
    } else {
      const newInvoice = { ...data }
      newInvoice.productInfo = productInfo.map((product) => {
        const match = data.productInfo.find(
          (item) => item.productId === product.productId
        )
        return {
          _id: product._id,
          productId: product.productId,
          productImage: product.productImage,
          qty: product.qty,
          stock: product.stock,
          unitPrice: product.unitPrice,
          unitDiscount: product.unitDiscount,
          unitTotal: product.unitTotal,
          size: product.size,
          color: product.color,
          productName: match ? match.productName : 'Soft Cloth',
          category: match ? match.category : 'Fashion',
        }
      })
      newInvoice._id = invoiceList ? invoiceList.length + 1 : 1
      newInvoice.clientImage =
        preview ||
        'https://images.kcubeinfotech.com/domiex/images/avatar/user-6.png'
      newInvoice.clientAddress =
        'place Denis 11, Chimay, Fosses-la-Ville, Belgium - 4823'
      newInvoice.invoiceId = getRecordId(
        invoiceList,
        `${data.invoiceId}`,
        'PEI'
      )
      newInvoice.companyEmail = 'support@example.com'
      newInvoice.companyName = 'SRBThemes'
      newInvoice.companyPhoneNumber = '+(021) 1452 023 021'
      newInvoice.content = 'Front End Development'
      newInvoice.country = 'New York'
      newInvoice.sellerAddress =
        'Emma-Köhler-Allee 4c, Germering, Nordrhein-Westfalen, Germany - 13907'
      newInvoice.sellerEmail = 'thiele.hanspeter@web.de'
      newInvoice.sellerName = 'Martin Riedel'
      newInvoice.sellerPhoneNumber = '(006) 882-9546'
      newInvoice.subTotal = orderSubTotal
      newInvoice.vatAmount = vatAmount
      newInvoice.discount = orderDiscount
      newInvoice.shippingCharge = orderDiscount
      newInvoice.totalAmount = orderTotal
      newInvoice.status = status?.value || 'Paid'

      dispatch(addInvoiceListRecordData(newInvoice))
      reset()
      navigate('/apps/invoice/list')
    }
  }

  useEffect(() => {
    if (isEditMode && currentInvoiceRecord) {
      Object.keys(currentInvoiceRecord).forEach((key) => {
        setValue(key, currentInvoiceRecord[key])
      })
      if (currentInvoiceRecord.invoiceDate) {
        const parsedDate = new Date(currentInvoiceRecord.invoiceDate)
        setInvoiceDate(parsedDate)
      }
      setProductInfoSize(currentInvoiceRecord?.productInfo.length)
      setProductInfo(currentInvoiceRecord?.productInfo)
      setVatAmount(currentInvoiceRecord.vatAmount)
      setDisCountAmount(currentInvoiceRecord.discount)
      setShippingCharge(currentInvoiceRecord.shippingCharge)
    } else {
      reset({
        _id: 0,
        invoiceId: '',
        companyName: '',
        companyEmail: '',
        companyPhoneNumber: '',
        clientImage: '',
        clientName: '',
        clientPhoneNumber: '',
        clientEmail: '',
        clientAddress: '',
        sellerName: '',
        sellerEmail: '',
        sellerPhoneNumber: '',
        sellerAddress: '',
        content: '',
        country: '',
        invoiceDate: '',
        dueDate: '',
        status: '',
        productInfo: [],
        subTotal: 0,
        vatAmount: 0,
        discount: 0,
        shippingCharge: 0,
        totalAmount: 0,
        accountHolderName: '',
        accountNumber: '',
        expiryDate: '',
        cvv: '',
        termAndCondition: '',
      })
      setPreview(null)
      setInvoiceDate(null)
      setDueDate(null)
      setClientStatusOption(null)
      setProductInfoSize(1)
      setProductInfo([productRecord])
      setVatAmount(0)
      setDisCountAmount(0)
      setShippingCharge(0)
      clearErrors()
      setProductInfo([productRecord])
    }
  }, [
    isEditMode,
    currentInvoiceRecord,
    setValue,
    reset,
    productRecord,
    clearErrors,
  ])

  // handle validation based on key  down
  const handleKeyDownValidation = (e, fieldName, type) => {
    const value = e.target.value

    if (type === 'phone') {
      const numericValue = value.replace(/\D/g, '')
      if (numericValue.length > 10) return
      setValue(fieldName, formatPhoneNumber(numericValue))
    } else {
      setValue(fieldName, value)
    }

    const validationErrors = validateField(fieldName, type, value)

    if (validationErrors['pattern']) {
      setError(fieldName, {
        type: 'pattern',
        message: validationErrors['pattern'],
      })
    } else {
      clearErrors(fieldName)
    }
  }

  // formate date
  const formatDate = (date) => {
    const day = date.getDate()
    const month = date.toLocaleString('default', { month: 'short' })
    const year = date.getFullYear()
    return `${day} ${month}, ${year}`
  }

  // handle reset form
  const handleResetForm = (e) => {
    e.preventDefault()
    reset()
  }

  return (
    <React.Fragment>
      <BreadCrumb title="Create Invoice" subTitle="Invoices" />
      <div>
        <form action="#!" onSubmit={handleSubmit(submitForm)}>
          <div className="card">
            {/* card header */}
            <div className="card-header">
              <div className="items-center gap-3 space-y-3 md:flex md:space-y-0">
                <h6 className="grow">Create Invoice</h6>
                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <button className="btn btn-sub-gray">
                    <RotateCcw className="inline-block size-4" /> Reset
                  </button>
                  <button className="btn btn-sub-green">
                    <Printer className="inline-block size-4" /> Print Invoice
                  </button>
                  {isEditMode ? (
                    <button className="btn btn-primary">
                      <Squirrel className="inline-block size-4" /> Update
                      Invoice
                    </button>
                  ) : (
                    <button className="btn btn-primary">
                      <Save className="inline-block size-4" /> Save Invoice
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* card body */}
            <div className="card-body">
              {/* form first part */}
              <h6 className="mb-3">Client Information</h6>
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12">
                  <h6 className="form-label">Client Image</h6>
                  <div>
                    <label htmlFor="clientImage">
                      <span className="inline-flex items-center justify-center w-full h-32 overflow-hidden bg-gray-100 border border-gray-200 rounded-md cursor-pointer dark:bg-dark-850 dark:border-dark-800">
                        {preview ? (
                          <img
                            src={preview || ''}
                            alt="preview"
                            className="object-cover h-24"
                            width={179}
                            height={96}
                          />
                        ) : (
                          <span className="flex flex-col items-center text-gray-500 dark:text-dark-500">
                            <Upload />
                            <span className="block mt-3">
                              Upload Your Client Image
                            </span>
                          </span>
                        )}
                      </span>
                    </label>
                    <div className="hidden">
                      <label className="block">
                        <span className="sr-only">Choose profile photo</span>
                        <input
                          type="file"
                          name="clientImage"
                          id="clientImage"
                          className="block w-full text-sm file:rounded-md focus:outline-0 text-slate-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <label htmlFor="clientName" className="form-label">
                    Client Name
                  </label>
                  <input
                    type="text"
                    id="clientName"
                    placeholder="Admin"
                    className="form-input"
                    {...register('clientName', {
                      required: 'Client Name is required.',
                    })}
                  />
                  {errors.clientName && (
                    <span className="text-red-500">
                      {errors.clientName.message}
                    </span>
                  )}
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <label htmlFor="clientEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="clientEmail"
                    placeholder="SRBThemes@gmail.com"
                    className="form-input"
                    {...register('clientEmail', {
                      required: 'Client Name is required.',
                    })}
                    onChange={(e) =>
                      handleKeyDownValidation(e, 'clientEmail', 'email')
                    }
                  />
                  {errors.clientEmail && (
                    <span className="text-red-500">
                      {errors.clientEmail.message}
                    </span>
                  )}
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <label htmlFor="clientPhoneNumber" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="clientPhoneNumber"
                    placeholder="(000) 000 0000"
                    maxLength={14}
                    className="form-input"
                    {...register('clientPhoneNumber', {
                      required: 'Client Phone Number is required.',
                    })}
                    onChange={(e) =>
                      handleKeyDownValidation(e, 'clientPhoneNumber', 'phone')
                    }
                  />
                  {errors.clientPhoneNumber && (
                    <span className="text-red-500">
                      {errors.clientPhoneNumber.message}
                    </span>
                  )}
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3">
                  <label htmlFor="invoiceIDInput" className="form-label">
                    Invoice ID
                  </label>
                  <input
                    type="text"
                    id="invoiceIDInput"
                    className="form-input"
                    disabled
                    value={`#${
                      invoiceList
                        ? getRecordId(invoiceList, 'invoiceId', 'PEI')
                        : 'PEI-0001'
                    }`}
                  />
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3">
                  <label htmlFor="invoiceDate" className="form-label">
                    Invoice Date
                  </label>
                  <Flatpickr
                    id="invoiceDateInput"
                    className="form-input"
                    placeholder="DD-MM-YYYY"
                    value={invoiceDate || undefined}
                    options={{
                      mode: 'single',
                      dateFormat: 'd M, Y',
                    }}
                    onChange={(date) => {
                      const formattedDate = formatDate(date[0])
                      setInvoiceDate(date[0])
                      setValue('invoiceDate', formattedDate)
                      clearErrors('invoiceDate')
                    }}
                  />
                  <input
                    type="hidden"
                    {...register('invoiceDate', {
                      required: 'invoice date is required.',
                    })}
                  />
                  {errors.invoiceDate && (
                    <span className="text-red-500">
                      {errors.invoiceDate.message}
                    </span>
                  )}
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3">
                  <label htmlFor="dueDate" className="form-label">
                    Payment Due Date
                  </label>
                  <Flatpickr
                    id="dueDate"
                    className="form-input"
                    placeholder="DD-MM-YYYY"
                    value={dueDate || undefined}
                    options={{
                      mode: 'single',
                      dateFormat: 'd M, Y',
                    }}
                    onChange={(date) => {
                      const formattedDate = formatDate(date[0])
                      setDueDate(date[0])
                      setValue('dueDate', formattedDate)
                      clearErrors('dueDate')
                    }}
                  />
                  <input
                    type="hidden"
                    {...register('dueDate', {
                      required: 'due date is required.',
                    })}
                  />
                  {errors.dueDate && (
                    <span className="text-red-500">
                      {errors.dueDate.message}
                    </span>
                  )}
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3">
                  <label htmlFor="invoiceStatus" className="form-label">
                    Invoice Status
                  </label>
                  <Controller
                    name="status"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value } }) => (
                      <Select
                        classNamePrefix="select"
                        options={clientStatusOptions}
                        value={status}
                        onChange={(selected) =>
                          handleStatusChange(selected, onChange)
                        }
                        placeholder="Invoice Type..."
                        id="invoiceStatus"
                        isClearable={true}
                      />
                    )}
                  />
                  {errors.status && (
                    <span className="text-red-500">Status is required</span>
                  )}
                </div>
              </div>

              {/* form second part */}
              <h6 className="mt-5 mb-3">Products Info</h6>
              <div className="overflow-x-auto">
                <table className="table flush">
                  <tbody>
                    <tr>
                      <th className="w-12 whitespace-nowrap">#</th>
                      <th className="whitespace-nowrap">Product Name</th>
                      <th className="w-52 whitespace-nowrap">Quantity</th>
                      <th className="w-52 whitespace-nowrap">Unit Price</th>
                      <th className="w-52 whitespace-nowrap">Discount (%)</th>
                      <th className="w-52 whitespace-nowrap">Total Amount</th>
                    </tr>
                    {productInfo &&
                      productInfo?.length > 0 &&
                      productInfo?.map((product, index) => (
                        <tr key={product._id}>
                          <td>{index + 1}</td>
                          <td>
                            <input
                              type="text"
                              className="form-input"
                              placeholder="Enter product name"
                              {...register(`productInfo.${index}.productName`, {
                                required: true,
                              })}
                            />
                            {errors.productInfo &&
                              errors.productInfo[index]?.productName && (
                                <span className="text-red-500">
                                  Product name is required
                                </span>
                              )}

                            <input
                              type="text"
                              className="mt-2 mb-3 form-input"
                              placeholder="Category"
                              {...register(`productInfo.${index}.category`, {
                                required: true,
                              })}
                            />
                            {errors.productInfo &&
                              errors.productInfo[index]?.category && (
                                <span className="text-red-500">
                                  Category is required
                                </span>
                              )}
                            <p className="mt-2">
                              <button
                                className="link link-red"
                                type="button"
                                onClick={(e) => handleRemoveProduct(e, index)}>
                                <i className="align-baseline ri-delete-bin-line"></i>{' '}
                                Delete Item
                              </button>
                            </p>
                          </td>
                          <td>
                            <div>
                              <div className="flex input-spin-group">
                                <button
                                  className="input-spin-minus"
                                  onClick={() =>
                                    handleQtyDecrease(product, index)
                                  }>
                                  <i className="ri-subtract-line"></i>
                                </button>
                                <input
                                  type="text"
                                  value={product?.qty}
                                  className="input-spin form-input"
                                  readOnly
                                />
                                <button
                                  className="input-spin-plus"
                                  onClick={(e) =>
                                    handleQtyIncrease(e, product, index)
                                  }>
                                  <i className="ri-add-line"></i>
                                </button>
                              </div>
                              <p>
                                {errors.productInfo &&
                                  errors.productInfo[index]?.qty && (
                                    <span className="text-red-500">
                                      {errors.productInfo[index]?.qty.message}
                                    </span>
                                  )}
                              </p>
                            </div>
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-input"
                              placeholder="$0.00"
                              {...register(`productInfo.${index}.unitPrice`, {
                                required: 'Unit price is required',
                                pattern: {
                                  value: /^[0-9]*\.?[0-9]*$/,
                                  message: 'Only numeric values are allowed',
                                },
                              })}
                              onKeyDown={(e) => {
                                const key = e.key

                                if (
                                  key === 'Backspace' ||
                                  key === 'Delete' ||
                                  key === 'Tab' ||
                                  key === 'ArrowLeft' ||
                                  key === 'ArrowRight' ||
                                  key === '.'
                                ) {
                                  return
                                }

                                if (!/[0-9]/.test(key)) {
                                  e.preventDefault()
                                } else {
                                  clearErrors(`productInfo.${index}.unitPrice`)
                                }
                              }}
                              onChange={(e) => {
                                let value = e.target.value.replace(
                                  /[^0-9.]/g,
                                  ''
                                )
                                let numericValue = parseFloat(value) || 0

                                if (numericValue) {
                                  setValue(
                                    `productInfo.${index}.unitPrice`,
                                    Number(value)
                                  )
                                  handleUnitPriceChange(
                                    product?.unitDiscount,
                                    numericValue,
                                    product,
                                    index
                                  )
                                } else {
                                  setError(`productInfo.${index}.unitPrice`, {
                                    type: 'manual',
                                    message: 'Unit price is required',
                                  })
                                }
                              }}
                            />

                            {errors.productInfo &&
                              errors.productInfo[index]?.unitPrice && (
                                <span className="text-red-500">
                                  {errors.productInfo[index]?.unitPrice.message}
                                </span>
                              )}
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-input"
                              placeholder="0%"
                              {...register(
                                `productInfo.${index}.unitDiscount`,
                                {
                                  required: 'Unit discount is required',
                                  pattern: {
                                    value: /^[0-9]+$/,
                                    message: 'Only numeric values are allowed',
                                  },
                                  validate: (value) => {
                                    const numericValue = Number(value)
                                    if (numericValue > 100) {
                                      return 'The discount cannot exceed 100%'
                                    }
                                    return true
                                  },
                                }
                              )}
                              onKeyDown={(e) => {
                                const key = e.key

                                if (
                                  key === 'Backspace' ||
                                  key === 'Delete' ||
                                  key === 'Tab' ||
                                  key === 'ArrowLeft' ||
                                  key === 'ArrowRight'
                                ) {
                                  return
                                }

                                const value = e.currentTarget.value.replace(
                                  /\D/g,
                                  ''
                                )
                                const numericValue =
                                  parseFloat(value + key) || 0

                                if (numericValue > 100 || /\D/.test(key)) {
                                  e.preventDefault()
                                } else {
                                  clearErrors(
                                    `productInfo.${index}.unitDiscount`
                                  )
                                }
                              }}
                              onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, '')
                                const numericValue = parseFloat(value) || 0

                                if (numericValue <= 100) {
                                  setValue(
                                    `productInfo.${index}.unitDiscount`,
                                    numericValue
                                  )
                                  handleUnitPriceChange(
                                    numericValue,
                                    product?.unitPrice,
                                    product,
                                    index
                                  )
                                }
                              }}
                            />
                            {errors.productInfo &&
                              errors.productInfo[index]?.unitDiscount && (
                                <p className="text-red-500">
                                  {
                                    errors.productInfo[index]?.unitDiscount
                                      ?.message
                                  }
                                </p>
                              )}
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-input"
                              readOnly
                              placeholder="$0.00"
                              value={product?.unitTotal}
                              {...register(`productInfo.${index}.unitTotal`)}
                            />
                          </td>
                        </tr>
                      ))}

                    <tr>
                      <td colSpan={6}>
                        <button
                          className="btn btn-primary"
                          onClick={(e) => handleAddNewProduct(e)}>
                          <i className="align-bottom ri-add-line"></i> Add Item
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={5} className="text-right">
                        Sub Total
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-input"
                          readOnly
                          placeholder="$0.00"
                          value={orderSubTotal}
                          {...register('subTotal')}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={5} className="text-right">
                        Vat Amount (6%)
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-input"
                          readOnly
                          placeholder="$0.00"
                          value={orderVatConst}
                          {...register('vatAmount')}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={5} className="text-right">
                        Discount (10%)
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="10%"
                          {...register(`discount`, {
                            pattern: {
                              value: /^[0-9]+$/,
                              message: 'Only numeric values are allowed',
                            },
                            validate: (value) => {
                              const numericValue = Number(value)
                              if (numericValue > 100) {
                                return 'The discount cannot exceed 100%'
                              }
                              return true
                            },
                          })}
                          onKeyDown={(e) => {
                            const key = e.key

                            if (
                              key === 'Backspace' ||
                              key === 'Delete' ||
                              key === 'Tab' ||
                              key === 'ArrowLeft' ||
                              key === 'ArrowRight'
                            ) {
                              return
                            }

                            const value = e.currentTarget.value.replace(
                              /\D/g,
                              ''
                            )
                            const numericValue = parseFloat(value + key) || 0

                            if (numericValue > 100 || /\D/.test(key)) {
                              e.preventDefault()
                            } else {
                              clearErrors(`discount`)
                            }
                          }}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, '')
                            const numericValue = parseFloat(value) || 0

                            if (numericValue <= 100) {
                              setValue(`discount`, numericValue)
                              setDisCountAmount(numericValue)
                            }
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={5} className="text-right">
                        Shipping Charge
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="$0.00"
                          {...register(`shippingCharge`, {
                            pattern: {
                              value: /^[0-9]+$/,
                              message: 'Only numeric values are allowed',
                            },
                          })}
                          onKeyDown={(e) => {
                            const key = e.key

                            if (
                              key === 'Backspace' ||
                              key === 'Delete' ||
                              key === 'Tab' ||
                              key === 'ArrowLeft' ||
                              key === 'ArrowRight'
                            ) {
                              return
                            }

                            const value = e.currentTarget.value.replace(
                              /\D/g,
                              ''
                            )
                            const numericValue = parseFloat(value + key) || 0

                            if (numericValue > 100 || /\D/.test(key)) {
                              e.preventDefault()
                            } else {
                              clearErrors(`shippingCharge`)
                            }
                          }}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, '')
                            const numericValue = parseFloat(value) || 0

                            if (numericValue <= 100) {
                              setValue(`shippingCharge`, numericValue)
                              setShippingCharge(numericValue)
                            }
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={5} className="text-right">
                        Total Amount
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-input"
                          readOnly
                          placeholder="$0.00"
                          value={orderTotal.toFixed(2)}
                          {...register('totalAmount')}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* form third part */}
              <h6 className="mt-5 mb-3">Payment Method</h6>
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12">
                  <label htmlFor="cardHolderNameInput" className="form-label">
                    Card Holder Name
                  </label>
                  <input
                    type="text"
                    id="cardHolderNameInput"
                    className="form-input"
                    placeholder="Card holder name"
                    {...register(`accountHolderName`, { required: true })}
                  />
                  {errors.accountHolderName && (
                    <p className="text-red-500">Card holder name is required</p>
                  )}
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <label htmlFor="cardNumberInput" className="form-label">
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumberInput"
                    className="form-input"
                    placeholder="0000 0000 0000 0000"
                    maxLength={19}
                    {...register('accountNumber', {
                      required: 'Account number is required.',
                      validate: {
                        isValidCardNumber: (value) => {
                          const numericValue = value.replace(/\s+/g, '')
                          return (
                            /^[0-9]{13,16}$/.test(numericValue) ||
                            'Account number must be between 13 and 16 digits.'
                          )
                        },
                      },
                      onChange: (e) => {
                        const formatted = e.target.value
                          .replace(/\D/g, '')
                          .replace(/(.{4})/g, '$1 ')
                          .trim()
                        setValue('accountNumber', formatted)
                      },
                    })}
                  />
                  {errors.accountNumber && (
                    <p className="text-red-500">
                      {errors.accountNumber.message}
                    </p>
                  )}
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <label htmlFor="expiryInput" className="form-label">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiryInput"
                    className="form-input"
                    placeholder="MM/YY"
                    maxLength={5}
                    {...register('expiryDate', {
                      required: 'Expiry date is required.',
                      pattern: {
                        value: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
                        message: 'Expiry date must be in MM/YY format.',
                      },
                      onChange: (e) => {
                        const formatted = e.target.value
                          .replace(/^(\d{2})(\d{0,2})$/, '$1/$2')
                          .substring(0, 5)
                        setValue('expiryDate', formatted)
                      },
                    })}
                  />
                  {errors.expiryDate && (
                    <p className="text-red-500">{errors.expiryDate.message}</p>
                  )}
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <label htmlFor="cvvInput" className="form-label">
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvvInput"
                    className="form-input"
                    placeholder="000"
                    maxLength={3}
                    {...register('cvv', {
                      required: 'CVV number is required.',
                      pattern: {
                        value: /^[0-9]{3}$/,
                        message: 'CVV must be 3 digits.',
                      },
                    })}
                    onKeyDown={(e) => {
                      if (
                        !/[0-9]/.test(e.key) &&
                        e.key !== 'Backspace' &&
                        e.key !== 'Delete' &&
                        e.key !== 'ArrowLeft' &&
                        e.key !== 'ArrowRight' &&
                        e.key !== 'Tab'
                      ) {
                        e.preventDefault()
                      }
                    }}
                  />
                  {errors.cvv && (
                    <p className="text-red-500">{errors.cvv.message}</p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="termAndCondition" className="form-label">
                  Terms & Conditions
                </label>
                <textarea
                  id="termAndCondition"
                  rows={3}
                  className="h-auto form-input"
                  placeholder="Enter your terms"
                  {...register('termAndCondition', { required: true })} // Fix here
                ></textarea>
                {errors.termAndCondition && (
                  <p className="text-red-500">
                    Terms and conditions are required
                  </p>
                )}
              </div>

              {/* form fifth part */}
              <div className="mt-5">
                <div className="flex flex-wrap items-center justify-end gap-2">
                  <button
                    type="reset"
                    className="btn btn-sub-gray"
                    onClick={(e) => handleResetForm(e)}>
                    <RotateCcw className="inline-block size-4" /> Reset
                  </button>
                  <button type="submit" className="btn btn-primary">
                    <Save className="inline-block size-4" /> Save Invoice
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export default InvoiceCreate
