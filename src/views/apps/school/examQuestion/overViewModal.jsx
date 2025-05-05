import React from 'react'

import { Modal } from '@src/components/CustomComponents/Modal/Modal'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'

const OverViewModal = ({ show, handleHide, book }) => {
  // Check if book is defined before rendering
  if (!book) {
    return null // Optionally render null or a placeholder if book is undefined
  }

  return (
    <React.Fragment>
      <Modal
        isOpen={show}
        onClose={handleHide}
        position="modal-center"
        size="modal-sm"
        contentClass="modal-content"
        title="Review Question"
        content={(onClose) => (
          <>
            <h6>
              <Link to="#!">
                Q{book.id} {book.question}
              </Link>
            </h6>

            <div className="mt-3 space-y-2">
              {book.options.map((option, index) => (
                <div className="input-radio-group" key={index}>
                  <input
                    id={`qOption${book.id}${index}`}
                    className="hidden input-radio peer"
                    type="radio"
                    name={`optionQ${book.id}`}
                  />
                  <label
                    htmlFor={`qOption${book.id}${index}`}
                    className="flex items-center justify-center border border-gray-200 rounded-md text-15 size-9 peer-checked:bg-primary-500 peer-checked:border-primary-500 peer-checked:text-white">
                    {String.fromCharCode(65 + index)}
                  </label>
                  <label
                    htmlFor={`qOption${book.id}${index}`}
                    className="py-1.5 px-3 rounded-md border border-gray-200 input-radio-label grow">
                    {option}
                  </label>
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                type="button"
                className="btn btn-active-red"
                onClick={onClose}>
                <X className="inline-block size-4" />
                <span className="align-baseline">Close</span>
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onClose}>
                Send Ans
              </button>
            </div>
          </>
        )}
      />
    </React.Fragment>
  )
}

export default OverViewModal
