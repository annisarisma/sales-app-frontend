import React, { useEffect, useState } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import Pagination from '@src/components/Common/Pagination'
import { getBookListData } from '@src/slices/thunk'
import OverviewModal from '@src/views/apps/school/libraryBook/overviewModal'
import { CirclePlus, Search } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Select from 'react-select'

import AddEditBookList from '../../../../views/apps/school/libraryBook/addEditBookList'

const bookType = [
  { label: 'All', value: 'All' },
  { label: 'Newest', value: 'Newest' },
  { label: 'Oldest', value: 'Oldest' },
  { label: 'Popular Book', value: 'Popular Book' },
  { label: 'Best Sales', value: 'Best Sales' },
]

const LibraryBook = () => {
  const [selectedBookType, setSelectedBookType] = useState(bookType[0])
  const dispatch = useDispatch()
  const { bookList } = useSelector((state) => state.LibraryBooks)

  const [bookListData, setBookListData] = useState([])
  const [selectedBooks, setSelectedBooks] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [currentBook, setCurrentBook] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  useEffect(() => {
    document.title =
      'Library Book | Domiex - React JS Admin & Dashboard Template'
  }, [])

  useEffect(() => {
    if (!bookList) {
      dispatch(getBookListData())
    } else {
      setBookListData(bookList)
    }
  }, [bookList, dispatch])

  const handleBookTypeChange = (selectedOption) => {
    setSelectedBookType(selectedOption)
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const filteredBooks = bookListData.filter((book) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    const matchesType =
      selectedBookType?.value === 'All' || book.type === selectedBookType?.value
    return matchesSearch && matchesType
  })

  const [modalState, setModalState] = useState({
    showAddBookForm: false,
    showEditBookForm: false,
  })

  const openModal = (key) => setModalState((prev) => ({ ...prev, [key]: true }))
  const closeModal = (key) =>
    setModalState((prev) => ({ ...prev, [key]: false }))

  const handleOpenModal = (editMode = false, event = null) => {
    setEditMode(editMode)
    setCurrentBook(event)
    const modalKey = editMode ? 'showEditBookForm' : 'showAddBookForm'
    openModal(modalKey)
  }

  const handleCloseModal = () => {
    const modalKey = editMode ? 'showEditBookForm' : 'showAddBookForm'
    closeModal(modalKey)
    setEditMode(false)
    setCurrentBook(null)
  }

  const onClickOverview = (book) => {
    setSelectedBooks(book)
    setIsModalOpen(true)
  }

  const handleHide = () => {
    setIsModalOpen(false)
    setSelectedBooks(null)
  }

  const itemsPerPage = 12
  const [currentPage, setCurrentPage] = useState(1)
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedEvents = filteredBooks.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  const fullStars = (rating) => Math.floor(rating)
  const halfStars = (rating) => rating % 1 !== 0
  const emptyStars = (rating) => 5 - Math.ceil(rating)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true) // Ensures that hydration is completed
  }, [])

  if (!hydrated) {
    return null
  }

  return (
    <React.Fragment>
      <BreadCrumb title="Book Library" subTitle="School" />
      <div className="grid grid-cols-12 gap-space mb-space">
        <div className="col-span-12 md:col-span-4 xl:col-span-3">
          <div className="relative flex items-center">
            <input
              type="text"
              className="ltr:rounded-r-none rtl:rounded-l-none ltr:border-r-0 rtl:border-l-0 form-input grow"
              placeholder="Search for ..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button
              type="button"
              title="search-button"
              className="border-gray-200 ltr:rounded-l-none rtl:rounded-r-none btn btn-sub-gray btn-icon shrink-0">
              <Search className="size-5" />
            </button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3 2xl:col-span-2 2xl:col-start-9">
          <Select
            classNamePrefix="select"
            options={bookType}
            value={selectedBookType}
            onChange={handleBookTypeChange}
            placeholder="Sort by..."
            isClearable={false}
          />
        </div>
        <div className="col-span-12 md:col-span-3 2xl:col-span-2">
          <button
            type="button"
            className="w-full btn btn-primary"
            onClick={() => handleOpenModal()}>
            <CirclePlus className="inline-block ltr:mr-1 rtl:ml-1 size-4" /> Add
            Book
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-x-space">
        {paginatedEvents.length > 0 &&
          paginatedEvents.map((book, index) => (
            <div
              key={index}
              className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-3 card">
              <div className="flex items-center gap-3 card-body">
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-40 rounded-md shrink-0"
                  width={103}
                  height={160}
                />
                <div className="overflow-hidden grow">
                  <h6
                    className="mb-1 truncate"
                    onClick={() => onClickOverview(book)}>
                    <Link to="#!" className="text-current link link-primary">
                      {book.title}
                    </Link>
                  </h6>
                  <p className="mb-2 text-gray-500 dark:text-dark-500">
                    By{' '}
                    <Link to="#!" className="underline link link-green">
                      {book.author}
                    </Link>
                  </p>
                  <div className="text-yellow-500 flex gap-1.5 mb-2">
                    {Array(fullStars(book.rating))
                      .fill(0)
                      .map((_, i) => (
                        <i key={`full-star-${i}`} className="ri-star-fill"></i>
                      ))}
                    {halfStars(book.rating) && (
                      <i className="ri-star-half-fill"></i>
                    )}
                    {Array(emptyStars(book.rating))
                      .fill(0)
                      .map((_, i) => (
                        <i key={`empty-star-${i}`} className="ri-star-line"></i>
                      ))}
                    <span className="text-gray-800 dark:text-dark-50">
                      ({book.reviewCount})
                    </span>
                  </div>
                  <h5 className="mb-2">${book.price}</h5>
                  <button type="button" className="w-full btn btn-sub-red">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      {paginatedEvents.length < 1 && (
        <div className="flex justify-center ">
          <div className="!p-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="mx-auto size-12"
              viewBox="0 0 48 48">
              <linearGradient
                id="SVGID_1__h35ynqzIJzH4_gr1"
                x1="34.598"
                x2="15.982"
                y1="15.982"
                y2="34.598"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#60e8fe"></stop>
                <stop offset=".033" stopColor="#6ae9fe"></stop>
                <stop offset=".197" stopColor="#97f0fe"></stop>
                <stop offset=".362" stopColor="#bdf5ff"></stop>
                <stop offset=".525" stopColor="#dafaff"></stop>
                <stop offset=".687" stopColor="#eefdff"></stop>
                <stop offset=".846" stopColor="#fbfeff"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
              <path
                fill="url(#SVGID_1__h35ynqzIJzH4_gr1)"
                d="M40.036,33.826L31.68,25.6c0.847-1.739,1.335-3.684,1.335-5.748c0-7.27-5.894-13.164-13.164-13.164	S6.688,12.582,6.688,19.852c0,7.27,5.894,13.164,13.164,13.164c2.056,0,3.995-0.485,5.728-1.326l3.914,4.015l4.331,4.331	c1.715,1.715,4.496,1.715,6.211,0C41.751,38.321,41.751,35.541,40.036,33.826z"></path>
              <path
                fill="none"
                stroke="#10cfe3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="M31.95,25.739l8.086,8.086c1.715,1.715,1.715,4.496,0,6.211l0,0c-1.715,1.715-4.496,1.715-6.211,0	l-4.331-4.331"></path>
              <path
                fill="none"
                stroke="#10cfe3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="M7.525,24.511c-1.771-4.694-0.767-10.196,3.011-13.975c3.847-3.847,9.48-4.817,14.228-2.912"></path>
              <path
                fill="none"
                stroke="#10cfe3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="M30.856,12.603c3.376,5.114,2.814,12.063-1.688,16.565c-4.858,4.858-12.565,5.129-17.741,0.814"></path>
            </svg>
            <p className="mt-2 text-center text-gray-500 dark:text-dark-500">
              No matching records found
            </p>
          </div>
        </div>
      )}
      <div className="mb-5">
        <Pagination
          totalItems={filteredBooks.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>

      <AddEditBookList
        modalState={modalState}
        closeModal={handleCloseModal}
        bookList={bookListData}
        editMode={editMode}
        currentBook={currentBook}
      />

      {selectedBooks && (
        <OverviewModal
          show={isModalOpen}
          handleHide={handleHide}
          book={selectedBooks}
        />
      )}
    </React.Fragment>
  )
}

export default LibraryBook
