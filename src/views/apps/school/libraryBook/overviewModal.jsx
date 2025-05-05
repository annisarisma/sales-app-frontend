import React from 'react'

import booking from '@assets/images/school/book/img-01.jpg'
import { Modal } from '@src/components/CustomComponents/Modal/Modal'
import { Link } from 'react-router-dom'

const OverviewModal = ({ show, handleHide, book }) => {
  const fullStars = (rating) => Math.floor(rating)
  const halfStars = (rating) => rating % 1 !== 0
  const emptyStars = (rating) => 5 - Math.ceil(rating)

  if (!book) return null

  return (
    <React.Fragment>
      <Modal
        isOpen={show}
        onClose={handleHide}
        position="modal-center"
        size="modal-sm"
        contentClass="modal-content"
        title="Book Overview"
        content={(onClose) => (
          <>
            <img
              src={book.image || booking}
              alt="Book Image"
              className="mx-auto rounded-md h-44"
              width={113}
              height={176}
            />
            <div className="mt-5">
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

              <h6 className="mb-1 truncate">
                <Link to="#!" className="text-current link link-primary">
                  The Wager: A Tale of Shipwreck, Mutiny and Murder
                </Link>
              </h6>
              <p className="mb-2 text-gray-500 dark:text-dark-500">
                By{' '}
                <Link to="#!" className="underline link link-green">
                  {book.author}
                </Link>
              </p>
              <h5 className="mb-2">${book.price}</h5>
              <button type="button" className="w-full btn btn-sub-red">
                Buy Now
              </button>
            </div>
          </>
        )}
      />
    </React.Fragment>
  )
}

export default OverviewModal
