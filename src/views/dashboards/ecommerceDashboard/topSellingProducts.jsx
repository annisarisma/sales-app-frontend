import React from 'react'

import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'

import { SellingProduct } from '../../../data/index'

const TopSellingProducts = () => {
  return (
    <React.Fragment>
      <div className="col-span-12 2xl:col-span-4 card">
        <div className="flex items-center gap-5 card-header">
          <h6 className="card-title grow">Top Selling Products</h6>
          <Link to="#!" className="underline link link-primary">
            View All <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
        <div className="card-body">
          <SimpleBar className="h-[400px] -mx-space px-space">
            <div className="space-y-4">
              {SellingProduct.map((product, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-3 md:flex-row md:items-center">
                    <div className="bg-gray-100 rounded-md size-16 dark:bg-dark-850 shrink-0">
                      <img src={product.image} alt="" />
                    </div>
                    <div className="grow">
                      <h6>
                        <Link to="/apps-ecommerce-product-overview">
                          {product.name}
                        </Link>
                      </h6>
                      <div className="text-orange-400">
                        <i className={product.renk.star1}></i>{' '}
                        <i className={product.renk.star2}></i>{' '}
                        <i className={product.renk.star3}></i>{' '}
                        <i className={product.renk.star4}></i>{' '}
                        <i className={product.renk.star5}></i>
                      </div>
                      <h6>{product.price}</h6>
                    </div>
                    <div className="flex gap-1 md:flex-col md:items-end shrink-0">
                      <button
                        type="button"
                        className="btn btn-sm btn-sub-green">
                        <i className="ri-pencil-line"></i> Edit
                      </button>
                      <button type="button" className="btn btn-sm btn-sub-red">
                        <i className="ri-close-line"></i> Delete
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </SimpleBar>
        </div>
      </div>
    </React.Fragment>
  )
}
export default TopSellingProducts
