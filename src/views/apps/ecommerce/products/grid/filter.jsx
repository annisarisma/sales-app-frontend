import React, { ChangeEvent, useState } from 'react'

import { Drawer } from '@src/components/CustomComponents/Drawer/Drawer'
import {
  ChevronDown,
  ChevronUp,
  Search,
  SlidersHorizontal,
  X,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

const Filter = ({
  isDrawerOpen,
  closeDrawer,
  updateCountCategory,
  updateCountColor,
  selectedCategories = [],
  selectedColors = [],
  setSelectedCategories,
  setSelectedColors,
  onFilterChange,
  setSearch,
  search,
}) => {
  const [showMore, setShowMore] = useState(false)
  const [showMore1, setShowMore1] = useState(false)
  const [tempSelectedCategories, setTempSelectedCategories] =
    useState(selectedCategories)
  const [tempSelectedActiveColors, setTempSelectedActiveColors] =
    useState(selectedColors)

  const handleCategoryChange = (event) => {
    const value = event.target.value
    setTempSelectedCategories((prev) => {
      const updated = prev.includes(value)
        ? prev.filter((cat) => cat !== value)
        : [...prev, value]
      return updated
    })
  }

  const handleColorChange = (event) => {
    const value = event.target.value
    setTempSelectedActiveColors((prev) => {
      const updated = prev.includes(value)
        ? prev.filter((col) => col !== value)
        : [...prev, value]
      return updated
    })
  }

  const applyFilters = () => {
    if (
      tempSelectedCategories.length > 0 ||
      tempSelectedCategories !== selectedCategories
    ) {
      setSelectedCategories(tempSelectedCategories)
      updateCountCategory(tempSelectedCategories.length)
    }
    if (
      tempSelectedActiveColors.length > 0 ||
      tempSelectedActiveColors !== selectedColors
    ) {
      setSelectedColors(tempSelectedActiveColors)
      updateCountColor(tempSelectedActiveColors.length)
    }
    onFilterChange({
      categories:
        tempSelectedCategories.length > 0
          ? tempSelectedCategories
          : selectedCategories,
      colors:
        tempSelectedActiveColors.length > 0
          ? tempSelectedActiveColors
          : selectedColors,
    })
    closeDrawer()
  }

  const clearFilters = () => {
    setTempSelectedCategories([])
    setTempSelectedActiveColors([])
    updateCountCategory(0)
    updateCountColor(0)
  }

  return (
    <React.Fragment>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        position="right"
        size="large"
        title="Filter & Sorting"
        footerClass="flex items-center justify-end gap-2"
        content={
          <>
            <SimpleBar>
              <div className="relative group/form">
                <input
                  type="text"
                  className="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4"
                  placeholder="Search products, price etc..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value.trim())}
                />
                <button className="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 rtl ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-hidden">
                  <Search className="size-4" />
                </button>
              </div>
              <div className="mt-5">
                <h6 className="mb-3">
                  Product Category (<span>{tempSelectedCategories.length}</span>
                  )
                </h6>
                <div className="space-y-2">
                  {['Fashion', 'Footwear', 'Bags', 'Watch', 'Accessories'].map(
                    (category, index) => (
                      <div className="input-check-group" key={index}>
                        <input
                          id={`productCategory${index + 1}`}
                          className="input-check input-check-primary"
                          type="checkbox"
                          value={category}
                          checked={tempSelectedCategories.includes(category)}
                          onChange={handleCategoryChange}
                        />
                        <label
                          htmlFor={`productCategory${index + 1}`}
                          className="input-check-label">
                          {category}
                        </label>
                      </div>
                    )
                  )}
                  {showMore &&
                    ['Jewelry', 'Sunglasses', 'Belts'].map(
                      (category, index) => (
                        <div className="input-check-group" key={index + 5}>
                          <input
                            id={`productCategory${index + 6}`}
                            className="input-check input-check-primary"
                            type="checkbox"
                            value={category}
                            checked={tempSelectedCategories.includes(category)}
                            onChange={handleCategoryChange}
                          />
                          <label
                            htmlFor={`productCategory${index + 6}`}
                            className="input-check-label">
                            {category}
                          </label>
                        </div>
                      )
                    )}
                  <Link
                    to="#!"
                    className="block mt-3 link link-primary"
                    onClick={() => setShowMore((prev) => !prev)}>
                    <span>
                      {showMore ? 'Show Less' : 'Show More'}
                      {showMore ? (
                        <ChevronUp className="inline-block size-4" />
                      ) : (
                        <ChevronDown className="inline-block size-4" />
                      )}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="mt-5">
                <h6 className="mb-3">
                  Colors (<span>{tempSelectedActiveColors.length}</span>)
                </h6>
                <div className="space-y-2">
                  {['Blue', 'Green', 'Red', 'Yellow', 'Sky'].map(
                    (color, index) => (
                      <div className="input-check-group" key={index}>
                        <input
                          id={`productColor${index + 1}`}
                          className="input-check input-check-primary"
                          type="checkbox"
                          value={color}
                          checked={tempSelectedActiveColors.includes(color)}
                          onChange={handleColorChange}
                        />
                        <label
                          htmlFor={`productColor${index + 1}`}
                          className="input-check-label">
                          {color}
                        </label>
                      </div>
                    )
                  )}
                  {showMore1 &&
                    ['Pink', 'Black', 'Gray'].map((color, index) => (
                      <div className="input-check-group" key={index + 5}>
                        <input
                          id={`productColor${index + 6}`}
                          className="input-check input-check-primary"
                          type="checkbox"
                          value={color}
                          checked={tempSelectedActiveColors.includes(color)}
                          onChange={handleColorChange}
                        />
                        <label
                          htmlFor={`productColor${index + 6}`}
                          className="input-check-label">
                          {color}
                        </label>
                      </div>
                    ))}
                  <Link
                    to="#!"
                    className="block mt-3 link link-primary"
                    onClick={() => setShowMore1((prev) => !prev)}>
                    <span>
                      {showMore1 ? 'Show Less' : 'Show More'}
                      {showMore1 ? (
                        <ChevronUp className="inline-block size-4" />
                      ) : (
                        <ChevronDown className="inline-block size-4" />
                      )}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="mt-5">
                <h6 className="mb-3">Sort By</h6>
                <div className="space-y-2">
                  <div className="input-radio-group">
                    <input
                      id="bestSellerByRadio"
                      className="input-radio input-radio-primary"
                      type="radio"
                      name="sortBy"
                    />
                    <label
                      htmlFor="bestSellerByRadio"
                      className="input-radio-label">
                      Best Sellers
                    </label>
                  </div>
                  <div className="input-radio-group">
                    <input
                      id="newArrivalsSortBy"
                      className="input-radio input-radio-primary"
                      type="radio"
                      name="sortBy"
                    />
                    <label
                      htmlFor="newArrivalsSortBy"
                      className="input-radio-label">
                      New Arrivals
                    </label>
                  </div>
                  <div className="input-radio-group">
                    <input
                      id="trendingSortBy"
                      className="input-radio input-radio-primary"
                      type="radio"
                      name="sortBy"
                    />
                    <label
                      htmlFor="trendingSortBy"
                      className="input-radio-label">
                      Trending
                    </label>
                  </div>
                  <div className="input-radio-group">
                    <input
                      id="lowToHighSortBy"
                      className="input-radio input-radio-primary"
                      type="radio"
                      name="sortBy"
                    />
                    <label
                      htmlFor="lowToHighSortBy"
                      className="input-radio-label">
                      Price (Low to High)
                    </label>
                  </div>
                  <div className="input-radio-group">
                    <input
                      id="highToLowSortBy"
                      className="input-radio input-radio-primary"
                      type="radio"
                      name="sortBy"
                    />
                    <label
                      htmlFor="highToLowSortBy"
                      className="input-radio-label">
                      Price (High to Low)
                    </label>
                  </div>
                </div>
              </div>
            </SimpleBar>
          </>
        }
        footer={
          <>
            <button className="btn btn-sub-gray" onClick={clearFilters}>
              <X className="inline-block ltr:mr-1 rtl:ml-1 align-center size-4" />{' '}
              Reset
            </button>
            <button className="btn btn-primary" onClick={applyFilters}>
              <SlidersHorizontal className="inline-block ltr:mr-1 rtl:ml-1 align-center size-4" />
              <span className="align-middle">Filter</span>
            </button>
          </>
        }
      />
    </React.Fragment>
  )
}

export default Filter
