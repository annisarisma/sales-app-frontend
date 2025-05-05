import React, { useEffect, useState } from 'react'

import whiteLogo from '@assets/images/logo-white.png'
import mainLogo from '@assets/images/main-logo.png'
import BreadCrumb from '@src/components/Common/BreadCrumb'
import { defaultInvoice } from '@src/data'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Overview2 = () => {
  const { currentInvoiceRecord } = useSelector((state) => state.Invoice)

  const [clientInvoice, setClientInvoice] = useState(null)

  const [month, year] = clientInvoice?.expiryDate
    ? clientInvoice.expiryDate.split('/')
    : ['MM', 'YY']

  useEffect(() => {
    document.title = 'Overview | Domiex - React JS Admin & Dashboard Template'
  }, [])

  useEffect(() => {
    if (!currentInvoiceRecord) {
      setClientInvoice(defaultInvoice)
    } else {
      setClientInvoice(currentInvoiceRecord)
    }
  }, [currentInvoiceRecord])

  // print invoice
  const handlePrint = () => {
    window.print()
  }

  return (
    <React.Fragment>
      <BreadCrumb title="Overview" subTitle="Invoice" />
      <div
        className="mx-auto mb-5 sm:max-w-6xl print:max-w-full"
        id="invoice-content">
        <div className="relative overflow-hidden card print:border-0 print:shadow-none">
          <div className="absolute inset-x-0 top-0 bottom-0 bg-gradient-to-b blur-2xl from-primary-500/10"></div>
          <div className="top-0 hidden h-40 md:block md:absolute rtl:left-0 ltr:right-0 rtl:rounded-br-full ltr:rounded-bl-full w-96 bg-primary-500"></div>
          <div className="relative md:p-10 card-body print:p-0">
            <div className="mb-8 md:flex">
              <div className="mb-4 grow md:mb-0">
                <Link to="#!">
                  <img
                    src={mainLogo}
                    alt="mainLogo"
                    className="inline-block h-8 dark:hidden"
                    width={175}
                    height={32}
                  />
                  <img
                    src={whiteLogo}
                    alt="whiteLogo"
                    className="hidden h-8 dark:inline-block"
                    width={175}
                    height={32}
                  />
                </Link>
                <h6 className="mt-3 text-16">{`Invoice #${clientInvoice?.invoiceId}`}</h6>
              </div>
              <div className="mt-6 space-y-2 text-right md:mt-0">
                <p className="text-gray-500 dark:text-dark-500 md:text-primary-100 dark:md:text-primary-100">
                  Support Email:
                  <Link
                    to={`mailto:${clientInvoice?.companyEmail}`}
                    className="font-semibold text-gray-900 dark:text-dark-50 md:text-primary-50 dark:md:text-primary-50">
                    {clientInvoice?.companyEmail}
                  </Link>
                </p>
                <p className="text-gray-500 dark:text-dark-500 md:text-primary-100 dark:md:text-primary-100">
                  Invoice Date:
                  <span className="font-semibold text-gray-900 dark:text-dark-50 md:text-primary-50 dark:md:text-primary-50">
                    {clientInvoice?.invoiceDate}
                  </span>
                </p>
                <p className="text-gray-500 dark:text-dark-500 md:text-primary-100 dark:md:text-primary-100">
                  Due Date:
                  <span className="font-semibold text-gray-900 dark:text-dark-50 md:text-primary-50 dark:md:text-primary-50">
                    {clientInvoice?.dueDate}
                  </span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-12 mb-6">
              <div className="col-span-12 md:col-span-6">
                <p className="mb-1 text-gray-500 dark:text-dark-500">
                  From Address
                </p>
                <h6 className="mb-2">{clientInvoice?.sellerName}</h6>
                <p className="text-gray-500 dark:text-dark-500 font-body font-base max-w-[300px]">
                  {clientInvoice?.sellerAddress}
                </p>
                <p className="mt-1 text-gray-500 dark:text-dark-500">{`Phone No.: ${clientInvoice?.sellerPhoneNumber}`}</p>
                <p className="mt-1 text-gray-500 dark:text-dark-500">{`Email: ${clientInvoice?.sellerEmail}`}</p>
              </div>
              <div className="col-span-12 md:col-span-6">
                <p className="mb-1 text-gray-500 dark:text-dark-500">
                  Billing Address
                </p>
                <h6 className="mb-2">{clientInvoice?.clientName}</h6>
                <p className="text-gray-500 dark:text-dark-500 font-body font-base max-w-[300px]">
                  {clientInvoice?.clientAddress}
                </p>
                <p className="mt-1 text-gray-500 dark:text-dark-500">{`Phone No.: ${clientInvoice?.clientPhoneNumber}`}</p>
                <p className="mt-1 text-gray-500 dark:text-dark-500">{`Email: ${clientInvoice?.clientEmail}`}</p>
              </div>
            </div>

            <div>
              <div className="overflow-x-auto">
                <table className="table flush">
                  <tbody>
                    <tr className="whitespace-nowrap">
                      <th>#</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Subtotal</th>
                    </tr>
                    {clientInvoice &&
                      clientInvoice.productInfo &&
                      clientInvoice.productInfo.length > 0 &&
                      clientInvoice?.productInfo.map((item, index) => (
                        <tr key={index}>
                          <td>
                            {item.id < 10 ? `0${item.id}` : `0${item.id}`}
                          </td>
                          <td>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center justify-center p-1 border border-gray-200 rounded-sm dark:border-dark-800 size-12">
                                <img
                                  src={item.productImage}
                                  onError={(e) =>
                                    (e.currentTarget.src =
                                      'https://images.kcubeinfotech.com/domiex/images/products/img-13.png')
                                  }
                                  alt="productImage"
                                  className="rounded"
                                  width={38}
                                  height={38}
                                />
                              </div>
                              <div>
                                <h6 className="mb-1">
                                  <Link to="/apps/ecommerce/products/overview">
                                    {item.productName}
                                  </Link>
                                </h6>
                                <p className="text-gray-500 dark:text-dark-500">
                                  <span className="px-2 border-r first:pl-0">
                                    {item.color}
                                  </span>
                                  <span className="px-2 first:pl-0">
                                    {item.size}
                                  </span>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>{item.unitPrice}</td>
                          <td>{item.qty}</td>
                          <td>{item.unitTotal}</td>
                        </tr>
                      ))}

                    <tr className="whitespace-nowrap">
                      <td colSpan={3}></td>
                      <td>Subtotal:</td>
                      <th className="!border-0">${clientInvoice?.subTotal}</th>
                    </tr>
                    <tr className="whitespace-nowrap">
                      <td colSpan={3}></td>
                      <td>Vat Amount (6%)</td>
                      <th className="!border-0">${clientInvoice?.vatAmount}</th>
                    </tr>
                    <tr className="whitespace-nowrap">
                      <td colSpan={3}></td>
                      <td>Discount (10%)</td>
                      <th className="!border-0">-${clientInvoice?.discount}</th>
                    </tr>
                    <tr className="whitespace-nowrap">
                      <td colSpan={3}></td>
                      <td>Shipping Charge</td>
                      <th className="!border-0">
                        ${clientInvoice?.shippingCharge}
                      </th>
                    </tr>
                    <tr className="whitespace-nowrap">
                      <td colSpan={3}></td>
                      <td>Total Amount</td>
                      <th className="!border-0 text-primary-600">
                        ${clientInvoice?.totalAmount}
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="grid grid-cols-12 mt-5">
              <div className="col-span-12 md:col-span-6">
                <h6 className="mb-2">
                  Payment Method{' '}
                  <span className="align-middle ltr:ml-1 rtl:mr-1 badge badge-green">
                    Paid
                  </span>
                </h6>
                <p className="mt-1 text-gray-500 dark:text-dark-500">{`Card Holder Name: ${clientInvoice?.accountHolderName}`}</p>
                <p className="mt-1 text-gray-500 dark:text-dark-500">{`Debit Card: XXXX XXXX XXXX ${clientInvoice ? clientInvoice?.accountNumber.slice(-4) : 'XXXX'}`}</p>
                <p className="mt-1 text-gray-500 dark:text-dark-500">{`Expiry Date: ${month}/20${year}`}</p>
                <p className="mt-1 text-gray-500 dark:text-dark-500">{`Total Amount: $${clientInvoice?.totalAmount}`}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center bg-sky-500/10 card-footer border-sky-500/20">
            <h6 className="grow">
              Thank you for purchasing Domiex Admin & Dashboards
            </h6>
            <Link to="#!" className="shrink-0">
              {clientInvoice?.companyPhoneNumber}
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-2 print:hidden">
          <button className="btn btn-sub-red">Download</button>
          <button className="btn btn-primary" onClick={handlePrint}>
            Print Now
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Overview2
