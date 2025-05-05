import React, { useCallback, useEffect, useState } from 'react'

import { productData } from '@src/data'
import { Columns3, Columns4, Search } from 'lucide-react'
import { Link } from 'react-router-dom'

const Products = () => {
  const [activeTab, setActiveTab] = useState('Brand')
  const [filteredProducts, setFilteredProducts] = useState(productData)
  const [gridLayout, setGridLayout] = useState('columns-4')

  const filterProducts = useCallback(() => {
    const filtered = productData.filter(
      (product) => product.category === activeTab
    )
    setFilteredProducts(filtered)
  }, [activeTab])

  useEffect(() => {
    filterProducts()
  }, [activeTab, filterProducts])

  return (
    <section className="relative -mt-10 pb-14 md:pb-24">
      <div className="container mx-auto px-4 lg:max-w-[1350px]">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <div className="p-5 bg-white rounded-lg dark:bg-dark-950">
              <form
                action="#!"
                className="relative block group/form"
                onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  className="ltr:pl-9 rtl:pr-9 form-input dark:bg-transparent"
                  placeholder="Search for product, brand etc..."
                />
                <button
                  title="search"
                  type="submit"
                  className="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 focus:outline-hidden">
                  <Search className="size-4" />
                </button>
              </form>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-2 whitespace-nowrap">
                <h6>Popular Search:</h6>
                <Link to="#!" title="link" className="link link-primary">
                  Fashion,
                </Link>
                <Link to="#!" title="link" className="link link-primary">
                  Girl Top,
                </Link>
                <Link to="#!" title="link" className="link link-primary">
                  Boys Fashion,
                </Link>
                <Link to="#!" title="link" className="link link-primary">
                  Watch
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-5">
            <ul className="flex items-center gap-6 overflow-x-auto grow">
              {['Men', 'Women', 'Children', 'Brand'].map((tab) => (
                <li key={tab}>
                  <Link
                    to="#!"
                    title={`${tab} tab`}
                    onClick={() => setActiveTab(tab)}
                    className={`relative block py-2 text-center link link-primary ${
                      activeTab === tab ? 'text-primary-500 active' : ''
                    }`}>
                    {tab}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="items-center hidden gap-3 lg:flex shrink-0">
              <Link
                to="#!"
                title="4 Columns"
                className={`link link-primary ${gridLayout === 'columns-4' ? 'text-primary-500 active' : ''}`}
                onClick={() => setGridLayout('columns-4')}>
                <Columns4 className="size-5" />
              </Link>
              <Link
                to="#!"
                title="3 Columns"
                className={`link link-primary ${gridLayout === 'columns-3' ? 'text-primary-500' : ''}`}
                onClick={() => setGridLayout('columns-3')}>
                <Columns3 className="size-5" />
              </Link>
            </div>
          </div>
          <div
            className={`grid gap-8 mt-5 ${
              gridLayout === 'columns-4'
                ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'
            }`}>
            {filteredProducts.map((product) => (
              <div key={product.id} className="relative">
                <div className="relative overflow-hidden bg-gray-100 rounded-md dark:bg-dark-900/40 group/item">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto"
                  />
                  <div className="absolute flex transition-all duration-300 ease-linear opacity-0 top-2 group-hover/item:top-5 ltr:right-5 rtl:left-5 group-hover/item:opacity-100">
                    <button
                      title="Add to Wishlist"
                      type="button"
                      className="text-lg rounded-full bg-white/90 link link-red btn btn-icon">
                      <i data-lucide="star" className="ri-star-fill"></i>
                    </button>
                  </div>
                </div>
                <div className="mt-3">
                  <h6 className="mb-1 truncate">
                    <Link
                      to="#!"
                      className="text-current link hover:text-primary-500 dark:text-current dark:hover:text-primary-500">
                      {product.name}
                    </Link>
                  </h6>
                  <p className="text-gray-500 dark:text-dark-500">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center mt-6">
            <button
              type="button"
              title="Load More"
              className="flex items-center gap-2 btn btn-primary">
              Load More
              <svg
                className="size-4 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  className="opacity-0"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
