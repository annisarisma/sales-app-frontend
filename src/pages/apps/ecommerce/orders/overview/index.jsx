import React, { useEffect } from 'react'

import img1 from '@assets/images/products/img-01.png'
import img4 from '@assets/images/products/img-04.png'
import img8 from '@assets/images/products/img-08.png'
import BreadCrumb from '@src/components/Common/BreadCrumb'
import { CircleArrowDown, Pencil } from 'lucide-react'
import { Link } from 'react-router-dom'

const OrderOverview = () => {
  useEffect(() => {
    document.title =
      'Orders Overview | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="Overview" subTitle="Orders" />
      <div className="card">
        <div className="card-body">
          <div className="flex flex-wrap items-center gap-5">
            <div className="grow">
              <h6 className="mb-1">Order ID: PEO-14521</h6>
              <p className="mb-3 text-gray-500 dark:text-dark-500">
                Order Date: 01 Sep, 2024
              </p>
              <span className="align-middle badge badge-red">
                Payment Pending
              </span>
            </div>
            <div className="items-center gap-2 sm:flex shrink-0">
              <button className="btn btn-primary btn-icon-overlay">
                <span className="icon">
                  <CircleArrowDown className="size-4"></CircleArrowDown>
                </span>{' '}
                Download Invoice
              </button>
              <button className="mt-3 btn btn-sub-gray sm:mt-0">
                <Pencil className="inline-block ltr:mr-1 rtl:ml-1 size-4"></Pencil>{' '}
                <span className="align-center">Edit</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            <div className="space-y-2">
              <p className="text-gray-500 dark:text-dark-500">
                Customer Name:{' '}
                <span className="font-medium text-gray-800 dark:text-dark-50">
                  Isabella Thomas
                </span>
              </p>
              <p className="text-gray-500 dark:text-dark-500">
                Email:{' '}
                <span className="font-medium text-gray-800 dark:text-dark-50">
                  isabella@example.com
                </span>
              </p>
              <p className="text-gray-500 dark:text-dark-500">
                Phone No:{' '}
                <span className="font-medium text-gray-800 dark:text-dark-50">
                  +(245) 012 345 678
                </span>
              </p>
              <p className="text-gray-500 dark:text-dark-500">
                Delivery Place:{' '}
                <span className="font-medium text-gray-800 dark:text-dark-50">
                  Home
                </span>
              </p>
              <p className="text-gray-500 dark:text-dark-500">
                Payment Method:{' '}
                <span className="font-medium text-gray-800 dark:text-dark-50">
                  Online Payment
                </span>
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-500 dark:text-dark-500">
                Address Line:{' '}
                <span className="font-medium text-gray-800 dark:text-dark-50">
                  0588 Macey Ranch
                </span>
              </p>
              <p className="text-gray-500 dark:text-dark-500">
                City:{' '}
                <span className="font-medium text-gray-800 dark:text-dark-50">
                  Port Blake
                </span>
              </p>
              <p className="text-gray-500 dark:text-dark-500">
                Country:{' '}
                <span className="font-medium text-gray-800 dark:text-dark-50">
                  New Mexico
                </span>
              </p>
              <p className="text-gray-500 dark:text-dark-500">
                Pin Code:{' '}
                <span className="font-medium text-gray-800 dark:text-dark-50">
                  96153-1460
                </span>
              </p>
              <p className="text-gray-500 dark:text-dark-500">
                Delivery Status:{' '}
                <span className="badge badge-purple">Shipping</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h6 className="card-title">Product Items</h6>
        </div>
        <div className="card-body">
          <div className="overflow-x-auto">
            <table className="table flush whitespace-nowrap">
              <tbody>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td className="whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="p-2 border border-gray-200 rounded-md dark:border-dark-800 shrink-0 size-16">
                        <img src={img1} alt="img1" />
                      </div>
                      <div>
                        <h6 className="mb-2">
                          <Link
                            to="/apps/ecommerce/overview"
                            className="text-current link link-primary">
                            Blouse Ruffle Tube top
                          </Link>
                        </h6>
                        <div className="text-sm *:px-2.5 divide-x divide-gray-200 dark:divide-dark-800 rtl:divide-x-reverse">
                          <Link
                            to="/apps/ecommerce/category"
                            className="underline ltr:first:pl-0 rtl:first:pr-0">
                            Fashion
                          </Link>{' '}
                          <span>XL</span> <span>Sky Blue</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>$14.99</td>
                  <td>04</td>
                  <td>$59.96</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="p-2 border border-gray-200 rounded-md dark:border-dark-800 shrink-0 size-16">
                        <img src={img4} alt="img4" />
                      </div>
                      <div>
                        <h6 className="mb-2">
                          <Link
                            to="/apps/ecommerce/overview"
                            className="text-current link link-primary">
                            Crop top Sweater Clothing
                          </Link>
                        </h6>
                        <div className="text-sm *:px-2.5 divide-x rtl:divide-x-reverse dark:divide-dark-800 divide-gray-200">
                          <Link
                            to="/apps/ecommerce/category"
                            className="underline ltr:first:pl-0 rtl:first:pr-0">
                            Fashion
                          </Link>{' '}
                          <span>M</span> <span>Pink</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>$29.49</td>
                  <td>06</td>
                  <td>$176.94</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="p-2 border border-gray-200 rounded-md dark:border-dark-800 shrink-0 size-16">
                        <img src={img8} alt="img8" />
                      </div>
                      <div>
                        <h6 className="mb-2">
                          <Link
                            to="/apps/ecommerce/overview"
                            className="text-current link link-primary">
                            Tote bag Leather Handbag Dolce
                          </Link>
                        </h6>
                        <div className="text-sm *:px-2.5 divide-x rtl:divide-x-reverse dark:divide-dark-800 divide-gray-200">
                          <Link
                            to="/apps/ecommerce/category"
                            className="underline ltr:first:pl-0 rtl:first:pr-0">
                            Bags
                          </Link>{' '}
                          <span>Red</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>$79.99</td>
                  <td>01</td>
                  <td>$79.99</td>
                </tr>
                <tr>
                  <td colSpan={3}></td>
                  <td>Sub Amount</td>
                  <td>$316.89</td>
                </tr>
                <tr>
                  <td colSpan={3}></td>
                  <td>Vat Amount (6%)</td>
                  <td>$19.19</td>
                </tr>
                <tr>
                  <td colSpan={3}></td>
                  <td>Discount (10%)</td>
                  <td>-$31.98</td>
                </tr>
                <tr>
                  <td colSpan={3}></td>
                  <td>Shipping Charge</td>
                  <td>$35.00</td>
                </tr>
                <tr>
                  <td colSpan={3}></td>
                  <td>Total Amount</td>
                  <td>$339.10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="flex items-center gap-5 card-header">
          <h6 className="card-title grow">Delivery Status</h6>
          <Link to="/apps/ecommerce/orders/track" className="btn btn-sub-red">
            Track Order
          </Link>
        </div>
        <div className="card-body">
          <div className="px-12 py-2">
            <div className="relative flex items-center justify-between lg:w-full horizontal timeline before:absolute before:block before:w-full before:h-[0.2em] before:bg-gray-200 dark:before:bg-dark-800">
              <div className="relative flex items-center justify-between w-full ltr:pl-0 rtl:pr-0 steps before:!hidden after:!hidden">
                <div className="relative z-10 block p-1.5 mx-1 border-2 border-white dark:border-dark-900 rounded-full bg-gray-200 dark:bg-gray-800 [&.done]:bg-primary-500 bottom-1.5 ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0 [&.current]:before:absolute [&.current]:before:bottom-0 ltr:[&.current]:before:left-0 rtl:[&.current]:before:right-0 [&.current]:before:w-3 [&.current]:before:h-3 [&.current]:before:-mt-1 ltr:[&.current]:before:-mr-1 rtl:[&.current]:before:-ml-1 [&.current]:before:bg-primary-500 [&.current]:before:rounded-full [&.current]:before:animate-ping done">
                  <span className="absolute text-gray-500 -translate-x-1/2 dark:text-dark-500 top-5 left-1/2 whitespace-nowrap">
                    Order Place
                  </span>
                </div>
                <div className="relative z-10 block p-1.5 mx-1 border-2 border-white dark:border-dark-900 rounded-full bg-gray-200 dark:bg-gray-800 [&.done]:bg-primary-500 bottom-1.5 ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0 [&.current]:before:absolute [&.current]:before:bottom-0 ltr:[&.current]:before:left-0 rtl:[&.current]:before:right-0 [&.current]:before:w-3 [&.current]:before:h-3 [&.current]:before:-mt-1 ltr:[&.current]:before:-mr-1 rtl:[&.current]:before:-ml-1 [&.current]:before:bg-primary-500 [&.current]:before:rounded-full [&.current]:before:animate-ping done">
                  <span className="absolute text-gray-500 -translate-x-1/2 dark:text-dark-500 top-5 left-1/2 whitespace-nowrap">
                    Pickup
                  </span>
                </div>
                <div className="relative z-10 block p-1.5 mx-1 border-2 border-white dark:border-dark-900 rounded-full bg-gray-200 dark:bg-gray-800 [&.done]:bg-primary-500 bottom-1.5 ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0 [&.current]:before:absolute [&.current]:before:bottom-0 ltr:[&.current]:before:left-0 rtl:[&.current]:before:right-0 [&.current]:before:w-3 [&.current]:before:h-3 [&.current]:before:-mt-1 ltr:[&.current]:before:-mr-1 rtl:[&.current]:before:-ml-1 [&.current]:before:bg-primary-500 [&.current]:before:rounded-full [&.current]:before:animate-ping done current">
                  <span className="absolute text-gray-500 -translate-x-1/2 dark:text-dark-500 top-5 left-1/2 whitespace-nowrap">
                    Shipped
                  </span>
                </div>
                <div className="relative z-10 block p-1.5 mx-1 border-2 border-white dark:border-dark-900 rounded-full bg-gray-200 dark:bg-gray-800 [&.done]:bg-primary-500 bottom-1.5 ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0 [&.current]:before:absolute [&.current]:before:bottom-0 ltr:[&.current]:before:left-0 rtl:[&.current]:before:right-0 [&.current]:before:w-3 [&.current]:before:h-3 [&.current]:before:-mt-1 ltr:[&.current]:before:-mr-1 rtl:[&.current]:before:-ml-1 [&.current]:before:bg-primary-500 [&.current]:before:rounded-full [&.current]:before:animate-ping">
                  <span className="absolute text-gray-500 -translate-x-1/2 dark:text-dark-500 top-5 left-1/2 whitespace-nowrap">
                    Out of Delivery
                  </span>
                </div>
                <div className="relative z-10 block p-1.5 mx-1 border-2 border-white dark:border-dark-900 rounded-full bg-gray-200 dark:bg-gray-800 [&.done]:bg-green-500 bottom-1.5 ltr:first:ml-0 rtl:first:mr-0 ltr:last:mr-0 rtl:last:ml-0 [&.current]:before:absolute [&.current]:before:bottom-0 ltr:[&.current]:before:left-0 rtl:[&.current]:before:right-0 [&.current]:before:w-3 [&.current]:before:h-3 [&.current]:before:-mt-1 ltr:[&.current]:before:-mr-1 rtl:[&.current]:before:-ml-1 [&.current]:before:bg-primary-500 [&.current]:before:rounded-full [&.current]:before:animate-ping">
                  <span className="absolute text-gray-500 -translate-x-1/2 dark:text-dark-500 top-5 left-1/2 whitespace-nowrap">
                    Delivered
                  </span>
                </div>
              </div>

              <div className="line block absolute w-1/2 inset-x-0 h-[0.2em] bg-primary-500 !pb-0 before:!hidden after:!hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default OrderOverview
