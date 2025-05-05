import React, { useEffect, useState } from 'react'

import { Modal } from '@src/components/CustomComponents/Modal/Modal'
import { addHolidaysData, editHolidaysData } from '@src/slices/thunk'
import { Plus, X } from 'lucide-react'
import Flatpickr from 'react-flatpickr'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

const AddEditHolidays = ({
  modalState,
  closeModal,
  eventList,
  editMode = false,
  currentContact = null,
}) => {
  const dispatch = useDispatch()
  const [selectedDate, setSelectedDate] = useState(null)
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm()

  // Updated formatDate function
  const formatDate = (date) => {
    const day = date.getDate()
    const month = date.toLocaleString('default', { month: 'short' })
    const year = date.getFullYear()
    return `${day} ${month} ${year}`
  }

  useEffect(() => {
    clearErrors()
    if (editMode && currentContact) {
      Object.keys(currentContact).forEach((key) => {
        setValue(key, currentContact[key])
      })
      const parsedDate = new Date(currentContact.date)
      setSelectedDate(parsedDate)
      setValue('date', formatDate(parsedDate))
    } else {
      reset({
        _id: 0,
        name: '',
        date: '',
        day: '',
      })
      setSelectedDate(null)
      clearErrors()
    }
  }, [editMode, currentContact, setValue, reset, clearErrors])

  const submitForm = (data, onClose) => {
    const formattedData = {
      ...data,
      date: formatDate(selectedDate || new Date()),
    }

    if (editMode && currentContact) {
      const updatedContact = { ...formattedData }
      dispatch(editHolidaysData(updatedContact))
    } else {
      const newContact = { ...formattedData, _id: eventList.length + 1 }
      dispatch(addHolidaysData(newContact))
    }
    reset()
    onClose()
  }

  const handleCloseModal = (modal) => {
    closeModal(modal)
    clearErrors()
  }

  return (
    <React.Fragment>
      <Modal
        isOpen={
          modalState &&
          (editMode == true
            ? modalState.showEditHolidaysForm
            : modalState.showAddHolidaysForm)
        }
        title={editMode ? 'Edit Event' : 'Add New Event'}
        onClose={() =>
          handleCloseModal(
            editMode ? 'showEditHolidaysForm' : 'showAddHolidaysForm'
          )
        }
        position="modal-center"
        id={editMode ? 'showEditHolidaysForm' : 'showAddHolidaysForm'}
        contentClass="modal-content"
        content={(onClose) => (
          <form onSubmit={handleSubmit((data) => submitForm(data, onClose))}>
            <div className="grid grid-cols-12 gap-space">
              <div className="col-span-12">
                <label htmlFor="holidayInput" className="form-label">
                  Holiday <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="holidayInput"
                  className="form-input"
                  placeholder="Enter holiday name"
                  {...register('name', { required: 'Name is required.' })}
                />
                {errors.name && (
                  <span className="text-red-500">{errors.name.message}</span>
                )}
              </div>
              <div className="col-span-12">
                <label htmlFor="dateInput" className="form-label">
                  Date <span className="text-red-500">*</span>
                </label>
                <Flatpickr
                  id="dueDateInput"
                  className="form-input"
                  placeholder="Select date"
                  value={selectedDate || undefined}
                  options={{ mode: 'single' }}
                  onChange={(date) => {
                    const selected = date[0]
                    setSelectedDate(selected)
                    setValue('date', formatDate(selected))
                    clearErrors('date')
                  }}
                />
                <input
                  type="hidden"
                  {...register('date', { required: 'Date is required.' })}
                />
                {errors.date && (
                  <span className="text-red-500">{errors.date.message}</span>
                )}
              </div>
              <div className="col-span-12">
                <label htmlFor="daysInput" className="form-label">
                  Day Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="daysInput"
                  className="form-input"
                  placeholder="Enter day name"
                  {...register('day', { required: 'Day is required.' })}
                />
                {errors.day && (
                  <span className="text-red-500">{errors.day.message}</span>
                )}
              </div>
              <div className="col-span-12">
                <div className="flex items-center justify-end gap-2">
                  <button
                    type="button"
                    className="btn btn-active-red"
                    onClick={() => onClose()}>
                    <X className="inline-block size-4" />
                    Cancel
                  </button>
                  <button className="btn btn-primary" type="submit">
                    <Plus className="inline-block mr-1 size-4" />
                    {editMode ? 'Update Holiday' : 'Add Holiday'}
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      />
    </React.Fragment>
  )
}

export default AddEditHolidays
