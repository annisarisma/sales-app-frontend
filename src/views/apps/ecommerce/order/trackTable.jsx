import React, { useState } from 'react'

import { orderData } from '@src/data'
import { ChevronLeft, ChevronRight, MoveLeft, MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const TrackTable = () => {
  let products = orderData

  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 4
  const totalPages = Math.ceil(products.length / productsPerPage)

  const displayedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  )

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  const gotoPage = (page) => {
    setCurrentPage(page)
  }

  const getBadgeClass = (status) => {
    switch (status) {
      case 'Delivered':
        return 'badge-green'
      case 'New':
        return 'badge-primary'
      case 'Cancelled':
        return 'badge-red'
      case 'Shipping':
        return 'badge-purple'
      case 'Pending':
        return 'badge-yellow'
      default:
        return ''
    }
  }

  return (
    <React.Fragment>
      <div className="grid grid-cols-12 gap-x-5">
        {displayedProducts.map((product, index) => (
          <div key={index} className="col-span-12 md:col-span-6 xl:col-span-3">
            <div className="card">
              <div className="card-body">
                <div className="flex items-center gap-2">
                  <p className="text-gray-500 dark:text-dark-500 grow">
                    Orders ID:{' '}
                    <Link to="#!" className="link link-primary">
                      PEO-1452{index + 1}
                    </Link>
                  </p>
                  <div>
                    <span className={`badge ${getBadgeClass(product.status)}`}>
                      {product.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <div className="p-1 border border-gray-200 rounded-md dark:border-dark-800 size-16 shrink-0">
                    <img src={product.image} alt="productImg" />
                  </div>
                  <div className="overflow-hidden grow">
                    <h6 className="mb-1 truncate">
                      <Link to="/apps/ecommerce/product/overview">
                        {product.productName}
                      </Link>
                    </h6>
                    <Link
                      to="/apps/ecommerce/orders/overview"
                      className="underline link link-red">
                      Show Details{' '}
                      <MoveRight className=" ltr:inline-block rtl:hidden size-4"></MoveRight>
                      <MoveLeft className=" rtl:inline-block ltr:hidden size-4"></MoveLeft>
                    </Link>
                  </div>
                </div>

                <p className="mt-3 text-gray-500 dark:text-dark-500">
                  Order Expected Date
                </p>
                <h6>{product.deliveredDate}</h6>

                <div className="flex flex-wrap items-center gap-2 mt-4 2xl:flex-nowrap">
                  <Link
                    to="/apps/ecommerce/orders/overview"
                    className="w-full btn btn-sub-gray">
                    <i className="ltr:mr-0.5 rtl:ml-0.5 align-bottom ri-eye-line"></i>{' '}
                    Overview
                  </Link>
                  <button className="w-full btn btn-primary">
                    Track Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="grid grid-cols-12 gap-5 mb-5 items-center">
        <div className="col-span-12 md:col-span-6">
          <p className="text-gray-500 dark:text-dark-500">
            Showing <b>{(currentPage - 1) * productsPerPage + 1}</b> -
            <b>{Math.min(currentPage * productsPerPage, products.length)}</b> of{' '}
            <b>{products.length}</b> Results
          </p>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="flex justify-start md:justify-end pagination pagination-primary">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="pagination-pre">
              <ChevronLeft className="mr-1 ltr:inline-block rtl:hidden size-4"></ChevronLeft>
              <ChevronRight className="ml-1 rtl:inline-block ltr:hidden size-4"></ChevronRight>
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, page) => (
              <button
                key={page + 1}
                onClick={() => gotoPage(page + 1)}
                className={`pagination-item ${currentPage === page + 1 ? 'active' : ''}`}>
                {page + 1}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="pagination-next">
              Next
              <ChevronRight className="ml-1 ltr:inline-block rtl:hidden size-4"></ChevronRight>
              <ChevronLeft className="mr-1 rtl:inline-block ltr:hidden size-4"></ChevronLeft>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default TrackTable
