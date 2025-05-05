import React from 'react'

import img9 from '@assets/images/ecommerce/landing/products/img-09.png'
import img10 from '@assets/images/ecommerce/landing/products/img-10.png'
import img11 from '@assets/images/ecommerce/landing/products/img-11.png'
import img12 from '@assets/images/ecommerce/landing/products/img-12.png'
import { Link } from 'react-router-dom'

const NewSeasonProducts = () => {
  return (
    <React.Fragment>
      <section className="relative py-8 md:py-24" id="new-arrivals">
        <div className="container mx-auto px-4 lg:max-w-[1350px]">
          <div className="grid items-center grid-cols-12 gap-5 mb-8">
            <div className="col-span-12 2xl:col-span-5">
              <h1 className="relative leading-normal capitalize ltr:pl-5 rtl:pr-5 before:rounded-full drop-shadow-lg before:absolute before:w-1 before:bg-primary-500 before:h-1/2 ltr:before:left-0 rtl:before:right-0">
                New Arrivals this Spring Season
              </h1>
            </div>
            <div className="col-span-12 2xl:col-span-5 2xl:col-start-8">
              <p className="mb-3 text-gray-500 dark:text-dark-500">
                Spring is the time when nature blossoms, so look for pieces of
                clothing that feature flowers, leaves, and pale colors.
                Additionally, opt for light-weight fabrics like cotton or linen,
                since the weather is warming up.
              </p>
              <button
                title="All Collection"
                type="button"
                className="font-medium border-gray-200 dark:border-dark-800 btn btn-outline-gray">
                Show All Collection
                <i className="ml-1 align-baseline ri-arrow-right-line ltr:inline-block rtl:hidden"></i>
                <i className="mr-1 align-baseline ri-arrow-left-line ltr:hidden rtl:inline-block"></i>
              </button>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="relative">
              <div className="relative overflow-hidden bg-gray-100 group/item dark:bg-dark-900/40">
                <img src={img9} alt="landingImg" />
                <div className="absolute flex transition-all duration-300 ease-linear opacity-0 top-2 group-hover/item:top-5 ltr:right-5 rtl:left-5 group-hover/item:opacity-100">
                  <button
                    title="Rating Star Icon"
                    type="button"
                    className="text-lg rounded-full bg-white/90 link link-red btn btn-icon">
                    <i className="ri-star-fill"></i>
                  </button>
                </div>
                <div className="absolute px-4 py-1 text-red-100 bg-red-500 ltr:left-0 rtl:right-0 before:border-4 before:absolute ltr:before:border-l-transparent rtl:before:border-r-transparent before:border-b-transparent before:size-2 before:-bottom-2 before:border-red-500 ltr:before:right-0 rtl:before:left-0 top-2">
                  50% OFF
                </div>
              </div>
              <div className="mt-4">
                <h6 className="mb-1 truncate">
                  <Link
                    to="#!"
                    className="text-current link hover:text-primary-500 dark:text-current dark:hover:text-primary-500">
                    Fashion Hub Women Peach Net Dress
                  </Link>
                </h6>
                <p className="text-gray-500 dark:text-dark-500">
                  $74.99 <span className="line-through">$149.99</span>
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden bg-gray-100 group/item dark:bg-dark-900/40">
                <img src={img10} alt="landingImg" />
                <div className="absolute flex transition-all duration-300 ease-linear opacity-0 top-2 group-hover/item:top-5 ltr:right-5 rtl:left-5 group-hover/item:opacity-100">
                  <button
                    title="Rating Star Icon"
                    type="button"
                    className="text-lg rounded-full bg-white/90 link link-red btn btn-icon">
                    <i className="ri-star-fill"></i>
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h6 className="mb-1 truncate">
                  <Link
                    to="#!"
                    className="text-current link hover:text-primary-500 dark:text-current dark:hover:text-primary-500">
                    Fashion portrait of young elegant woman
                  </Link>
                </h6>
                <p className="text-gray-500 dark:text-dark-500">$187.00</p>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden bg-gray-100 group/item dark:bg-dark-900/40">
                <img src={img11} alt="landingImg" />
                <div className="absolute flex transition-all duration-300 ease-linear opacity-0 top-2 group-hover/item:top-5 ltr:right-5 rtl:left-5 group-hover/item:opacity-100">
                  <button
                    type="button"
                    title="Rating Star Icon"
                    className="text-lg rounded-full bg-white/90 link link-red btn btn-icon">
                    <i className="ri-star-fill"></i>
                  </button>
                </div>
                <div className="absolute px-4 py-1 text-red-100 bg-red-500 ltr:left-0 rtl:right-0 before:border-4 before:absolute ltr:before:border-l-transparent rtl:before:border-r-transparent before:border-b-transparent before:size-2 before:-bottom-2 before:border-red-500 ltr:before:right-0 rtl:before:left-0 top-2">
                  25% OFF
                </div>
              </div>
              <div className="mt-4">
                <h6 className="mb-1 truncate">
                  <Link
                    to="#!"
                    className="text-current link hover:text-primary-500 dark:text-current dark:hover:text-primary-500">
                    Demonstrating winter Clothes
                  </Link>
                </h6>
                <p className="text-gray-500 dark:text-dark-500">
                  $59.99 <span className="line-through">$79.99</span>
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden bg-gray-100 group/item dark:bg-dark-900/40">
                <img src={img12} alt="landingImg" />
                <div className="absolute flex transition-all duration-300 ease-linear opacity-0 top-2 group-hover/item:top-5 ltr:right-5 rtl:left-5 group-hover/item:opacity-100">
                  <button
                    type="button"
                    title="Rating Star Icon"
                    className="text-lg rounded-full bg-white/90 link link-red btn btn-icon">
                    <i className="ri-star-fill"></i>
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h6 className="mb-1 truncate">
                  <Link
                    to="#!"
                    className="text-current link hover:text-primary-500 dark:text-current dark:hover:text-primary-500">
                    Y2K Trending Korean Fashion Aesthetic Shirt
                  </Link>
                </h6>
                <p className="text-gray-500 dark:text-dark-500">$79.99</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default NewSeasonProducts
