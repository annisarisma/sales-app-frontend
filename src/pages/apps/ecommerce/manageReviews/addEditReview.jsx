import React, { useCallback, useEffect, useState } from 'react'

import { Modal } from '@src/components/CustomComponents/Modal/Modal'
import { addUserReviewRecord, updateUserReviewRecord } from '@src/slices/thunk'
import Flatpickr from 'react-flatpickr'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

const AddEditReview = ({
  modalState,
  closeModal,
  reviewList,
  editMode = false,
  currentReview = null,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm()

  const dispatch = useDispatch()

  const [selectedDate, setSelectedDate] = useState(null)
  const [userRating, setUserRating] = useState(0)

  const handleKeyDown = (e) => {
    const value = e.target.value
    if (value === '5' && e.key !== 'Backspace') {
      e.preventDefault()
    }
  }

  const handleRatingChange = (e) => {
    const value = e.target.value
    if (value.trim() === '') {
      setUserRating(0)
      setValue('star', 0)
      return
    }
    let floatValue = parseFloat(value)
    if (!isNaN(floatValue)) {
      if (floatValue < 1) floatValue = 1
      if (floatValue > 5) floatValue = 5
      setValue('star', floatValue)
      setUserRating(floatValue)
    }
  }

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0')
    const month = date.toLocaleString('default', { month: 'short' })
    const year = date.getFullYear()
    return `${day} ${month}, ${year}`
  }

  const resetForm = useCallback(() => {
    reset({
      _id: 1,
      image: 'https://images.kcubeinfotech.com/domiex/images/avatar/user-1.png',
      userName: '',
      location: '',
      star: 0,
      date: '',
      title: '',
      content: '',
    })
    setUserRating(0)
    clearErrors()
  }, [reset, clearErrors])

  const submitForm = (data, onClose) => {
    if (editMode && currentReview) {
      const updatedReview = {
        ...data,
        date: selectedDate ? selectedDate.toISOString() : '',
      }
      dispatch(updateUserReviewRecord(updatedReview))
    } else {
      const newReview = {
        ...data,
        _id: reviewList.length > 0 ? reviewList.length + 1 : 1,
      }
      dispatch(addUserReviewRecord(newReview))
      resetForm()
    }
    clearErrors()
    onClose()
  }

  useEffect(() => {
    if (modalState.showAddCustomerForm || modalState.showEditCustomerForm) {
      resetForm()
    }
    if (editMode && currentReview) {
      clearErrors()
      Object.keys(currentReview).forEach((key) => {
        setValue(key, currentReview[key])
      })
      setUserRating(currentReview.star)
      setSelectedDate(new Date(currentReview.date))
    } else {
      clearErrors()
      resetForm()
      setUserRating(0)
      setSelectedDate(null)
    }
  }, [
    editMode,
    currentReview,
    modalState,
    setValue,
    reset,
    clearErrors,
    resetForm,
  ])

  return (
    <React.Fragment>
      <Modal
        isOpen={
          modalState &&
          (editMode == true
            ? modalState.showEditReviewForm
            : modalState.showAddReviewForm)
        }
        title={editMode ? 'Edit Review' : 'Add Review'}
        onClose={() =>
          closeModal(editMode ? 'showEditReviewForm' : 'showAddReviewForm')
        }
        position="modal-center"
        id={editMode ? 'showEditReviewForm' : 'showAddReviewForm'}
        contentClass="modal-content"
        content={(onClose) => (
          <>
            <form
              action="#!"
              onSubmit={handleSubmit((data) => submitForm(data, onClose))}>
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12">
                  <div className="flex flex-col justify-center gap-5">
                    <h6 className="text-center">Your Rating?</h6>
                    <div className="relative flex justify-center gap-3">
                      <div
                        className={`flex justify-center w-10 h-2 transition-all duration-200 rounded-md cursor-pointer ${userRating >= 1 ? 'bg-yellow-500' : 'bg-gray-200'}`}>
                        <p
                          className={`mt-4 text-2xl pointer-events-none select-none ${userRating >= 1 && userRating < 2 ? '' : 'invisible'}`}>
                          😒
                        </p>
                      </div>

                      <div
                        className={`flex justify-center w-10 h-2 transition-all duration-200 rounded-md cursor-pointer ${userRating >= 2 ? 'bg-yellow-500' : 'bg-gray-200'}`}>
                        <p
                          className={`mt-4 text-2xl pointer-events-none select-none ${userRating >= 2 && userRating < 3 ? '' : 'invisible'}`}>
                          🤨
                        </p>
                      </div>

                      <div
                        className={`flex justify-center w-10 h-2 transition-all duration-200 rounded-md cursor-pointer ${userRating >= 3 ? 'bg-yellow-500' : 'bg-gray-200'}`}>
                        <p
                          className={`mt-4 text-2xl pointer-events-none select-none ${userRating >= 3 && userRating < 4 ? '' : 'invisible'}`}>
                          😊
                        </p>
                      </div>

                      <div
                        className={`flex justify-center w-10 h-2 transition-all duration-200 rounded-md cursor-pointer ${userRating >= 4 ? 'bg-yellow-500' : 'bg-gray-200'}`}>
                        <p
                          className={`mt-4 text-2xl pointer-events-none select-none ${userRating >= 4 && userRating < 5 ? '' : 'invisible'}`}>
                          😚
                        </p>
                      </div>

                      <div
                        className={`flex justify-center w-10 h-2 transition-all duration-200 rounded-md cursor-pointer ${userRating >= 5 ? 'bg-yellow-500' : 'bg-gray-200'}`}>
                        <p
                          className={`mt-4 text-2xl pointer-events-none select-none ${userRating >= 5 ? '' : 'invisible'}`}>
                          🥰
                        </p>
                      </div>
                    </div>
                    <div className="mt-5">
                      <label htmlFor="rating" className="form-label">
                        Rating Input:
                      </label>
                      <input
                        id="rating"
                        type="number"
                        step="0.1" // Allow decimal input
                        className="form-input"
                        {...register('star', {
                          required: 'Rating is required.',
                          min: { value: 1, message: 'Minimum rating is 1.' },
                          max: { value: 5, message: 'Maximum rating is 5.' },
                        })}
                        onChange={handleRatingChange}
                        onKeyDown={(e) => handleKeyDown(e)}
                      />
                      {errors.star && (
                        <span className="text-sm text-red-500">
                          {errors.star.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-span-6">
                  <label htmlFor="userNameInput" className="form-label">
                    User Name
                  </label>
                  <input
                    type="text"
                    id="userNameInput"
                    className="form-input"
                    placeholder="User name"
                    {...register('userName', {
                      required: 'User name is required.',
                    })}
                  />
                  {errors.userName && (
                    <span className="text-sm text-red-500">
                      {errors.userName.message}
                    </span>
                  )}
                </div>
                <div className="col-span-6">
                  <label htmlFor="createDateInput" className="form-label">
                    Create Date
                  </label>
                  <Flatpickr
                    id="createDateInput"
                    className="form-input"
                    placeholder="Select due date"
                    value={selectedDate || undefined}
                    options={{ mode: 'single' }}
                    onChange={(date) => {
                      const formattedDate = formatDate(date[0])
                      setValue('date', formattedDate)
                      setSelectedDate(date[0])
                    }}
                  />
                  <span className="text-sm text-red-500"></span>
                </div>
                <div className="col-span-12">
                  <label htmlFor="locationInput" className="form-label">
                    Location
                  </label>
                  <input
                    type="text"
                    id="locationInput"
                    className="form-input"
                    placeholder="Location"
                    {...register('location', {
                      required: 'User name is required.',
                    })}
                  />
                  {errors.location && (
                    <span className="text-sm text-red-500">
                      {errors.location.message}
                    </span>
                  )}
                </div>
                <div className="col-span-12">
                  <label htmlFor="titleInput" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    id="titleInput"
                    className="form-input"
                    placeholder="Review title"
                    {...register('title', { required: 'Title is required.' })}
                  />
                  {errors.title && (
                    <span className="text-sm text-red-500">
                      {errors.title.message}
                    </span>
                  )}
                </div>
                <div className="col-span-12">
                  <label htmlFor="writeReviewInput" className="form-label">
                    Write your Content
                  </label>
                  <textarea
                    id="writeReviewInput"
                    rows={3}
                    className="h-auto form-input"
                    placeholder="Enter your description"
                    {...register('content', {
                      required: 'Content is required.',
                    })}></textarea>
                  {errors.content && (
                    <span className="text-sm text-red-500">
                      {errors.content.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-5">
                <button
                  type="button"
                  className="btn btn-active-red"
                  onClick={() => onClose()}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  {editMode ? 'Update review' : 'Add review'}
                </button>
              </div>
            </form>
          </>
        )}
      />
    </React.Fragment>
  )
}

export default AddEditReview
