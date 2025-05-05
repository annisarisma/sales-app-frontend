import React, { useEffect, useState } from 'react'

import { Modal } from '@src/components/CustomComponents/Modal/Modal'
import {
  addAppointmentsListData,
  editAppointmentsListData,
} from '@src/slices/thunk'
import { Plus, Upload, X } from 'lucide-react'
import Flatpickr from 'react-flatpickr'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Select from 'react-select'

const categoryItems = [
  { label: 'New', value: 'New' },
  { label: 'Pending', value: 'Pending' },
  { label: 'Confirmed', value: 'Confirmed' },
  { label: 'Completed', value: 'Completed' },
]

const AddEditAppointmentsList = ({
  modalState,
  closeModal,
  editMode = false,
  currentAppointment = null,
}) => {
  const dispatch = useDispatch()
  const [preview, setPreview] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [categorylist, setCategorylist] = useState(null)

  const {
    register,
    handleSubmit,
    setValue,
    control,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm()

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(file)
    } else {
      setPreview(null)
    }
  }

  const handleStatusChange = (selected, onChange) => {
    setCategorylist(selected)
    onChange(selected ? selected.value : '') // Handle case where selected could be null
  }

  useEffect(() => {
    clearErrors()
    if (editMode && currentAppointment) {
      Object.keys(currentAppointment).forEach((key) => {
        setValue(key, currentAppointment[key])
      })
      setPreview(currentAppointment.image)

      // Ensure `selectedDate` is a valid date object
      if (currentAppointment.date) {
        setSelectedDate(new Date(currentAppointment.date))
      } else {
        setSelectedDate(null)
      }

      if (currentAppointment.startTime) {
        setValue('startTime', currentAppointment.startTime)
      }

      if (currentAppointment.endTime) {
        setValue('endTime', currentAppointment.endTime)
      }

      if (currentAppointment.status) {
        const selectedStatus = categoryItems.find(
          (item) => item.value === currentAppointment.status
        )
        setCategorylist(selectedStatus || null)
      }
    } else {
      reset({
        _id: 0,
        image: '',
        date: '',
        startTime: '',
        endTime: '',
        patientName: '',
        doctor: '',
        treatmentType: '',
        status: '',
      })
      setSelectedDate(null) // Reset the date
      setCategorylist(null)
      clearErrors()
    }
  }, [editMode, currentAppointment, setValue, reset, clearErrors])

  const submitForm = (data, onClose) => {
    if (editMode && currentAppointment) {
      const updatedAppointmentList = { ...data, image: preview || '' }
      dispatch(editAppointmentsListData(updatedAppointmentList))
      setPreview(null)
    } else {
      const newStaff = { ...data, image: preview || '' }
      dispatch(addAppointmentsListData(newStaff))
      setPreview(null)
    }
    reset()
    onClose()
  }

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0')
    const month = date.toLocaleString('default', { month: 'short' })
    const year = date.getFullYear()
    return `${day} ${month}, ${year}`
  }

  const handleCloseModal = (modal) => {
    closeModal(modal)
    clearErrors()
  }

  return (
    <React.Fragment>
      <Modal
        isOpen={
          editMode == true
            ? modalState.showEditAppointmentForm
            : modalState.showAddAppointmentForm
        }
        onClose={() =>
          handleCloseModal(
            editMode ? 'showEditAppointmentForm' : 'showAddAppointmentForm'
          )
        }
        position="modal-center"
        id={editMode ? 'showEditAppointmentForm' : 'showAddAppointmentForm'}
        contentClass="p-2 modal-content"
        content={(onClose) => (
          <>
            <form onSubmit={handleSubmit((data) => submitForm(data, onClose))}>
              <div className="h-24 p-5 rounded-t bg-gradient-to-r from-primary-500/20 via-pink-500/20 to-green-500/20"></div>
              <div className="p-4">
                <div className="-mt-16">
                  <label htmlFor="logo">
                    <div className="inline-flex items-center justify-center overflow-hidden bg-gray-100 border-2 border-white border-solid rounded-full cursor-pointer dark:border-dark-900 dark:bg-dark-850 size-24">
                      {preview ? (
                        <img
                          src={preview}
                          alt="Profile Photo"
                          width={92}
                          height={92}
                          className="object-cover w-full h-full rounded-full"
                        />
                      ) : (
                        <div className="flex flex-col items-center text-gray-500 dark:text-dark-500">
                          <Upload />
                        </div>
                      )}
                    </div>
                  </label>
                  <div className="hidden mt-4">
                    <label className="block">
                      <span className="sr-only">Choose profile photo</span>
                      <input
                        type="file"
                        name="logo"
                        id="logo"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                        className="block w-full text-sm file:rounded-md focus:outline-0 text-slate-500 dark:text-dark-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                      />
                    </label>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-4 mt-4">
                  <div className="col-span-12">
                    <label htmlFor="joiningDateInput" className="form-label">
                      Joining Date
                    </label>
                    <Flatpickr
                      id="dueDateInput"
                      className="form-input"
                      placeholder="Select due date"
                      value={selectedDate || undefined}
                      options={{
                        mode: 'single',
                      }}
                      onChange={(date) => {
                        const formattedDate = formatDate(date[0])
                        setValue('date', formattedDate)
                      }}
                    />
                    <input
                      type="hidden"
                      {...register('date', {
                        required: 'Joining date is required.',
                      })}
                    />
                    {/* Display error if date is not selected */}
                    {errors.date && (
                      <span className="text-red-500">
                        {errors.date.message}
                      </span>
                    )}
                  </div>

                  <div className="col-span-12">
                    <label htmlFor="startTime" className="form-label">
                      Start Time
                    </label>
                    <Flatpickr
                      options={{
                        enableTime: true,
                        noCalendar: true,
                        dateFormat: 'h:i K',
                        time_24hr: false,
                      }}
                      placeholder="00:00"
                      className="form-input"
                      value={currentAppointment?.startTime || ''}
                      onChange={(selectedDates) => {
                        const selectedTime = selectedDates[0]
                          ?.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: true,
                          })
                          .toLowerCase()
                        setValue('startTime', selectedTime)
                      }}
                    />
                    <input
                      type="hidden"
                      {...register('startTime', {
                        required: 'start Time date is required.',
                      })}
                    />
                    {errors.startTime && (
                      <span className="text-red-500">
                        {errors.startTime.message}
                      </span>
                    )}
                  </div>
                  <div className="col-span-12">
                    <label htmlFor="endTime" className="form-label">
                      End Time
                    </label>
                    <Flatpickr
                      options={{
                        enableTime: true,
                        noCalendar: true,
                        dateFormat: 'h:i K',
                        time_24hr: false,
                      }}
                      placeholder="00:00"
                      className="form-input"
                      value={currentAppointment?.endTime || ''}
                      onChange={(selectedDates) => {
                        const selectedTime = selectedDates[0]
                          ?.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: true,
                          })
                          .toLowerCase()
                        setValue('endTime', selectedTime)
                      }}
                    />
                    <input
                      type="hidden"
                      {...register('endTime', {
                        required: 'end Time date is required.',
                      })}
                    />
                    {errors.endTime && (
                      <span className="text-red-500">
                        {errors.endTime.message}
                      </span>
                    )}
                  </div>

                  <div className="col-span-12">
                    <label htmlFor="treatmentType" className="form-label">
                      Treatment Type
                    </label>
                    <input
                      id="treatmentType"
                      type="text"
                      className="form-input"
                      {...register('treatmentType', {
                        required: 'treatment Type is required.',
                      })}
                    />
                    {errors.treatmentType && (
                      <span className="text-red-500">
                        {errors.treatmentType.message}
                      </span>
                    )}
                  </div>
                  <div className="col-span-12">
                    <label htmlFor="doctor" className="form-label">
                      Doctor Name
                    </label>
                    <input
                      id="doctor"
                      type="text"
                      className="form-input"
                      {...register('doctor', {
                        required: 'doctor Name is required.',
                      })}
                    />
                    {errors.doctor && (
                      <span className="text-red-500">
                        {errors.doctor.message}
                      </span>
                    )}
                  </div>
                  <div className="col-span-12">
                    <label htmlFor="patientName" className="form-label">
                      Patient Name
                    </label>
                    <input
                      // {...register('patientName')}
                      id="patientName"
                      type="text"
                      className="form-input"
                      {...register('patientName', {
                        required: 'patientName Name is required.',
                      })}
                    />
                    {errors.patientName && (
                      <span className="text-red-500">
                        {errors.patientName.message}
                      </span>
                    )}
                  </div>
                  <div className="col-span-12">
                    <Controller
                      name="status"
                      control={control}
                      render={({ field: { onChange } }) => (
                        <>
                          <label className="form-label">Status</label>
                          <Select
                            classNamePrefix="select"
                            options={categoryItems}
                            value={categorylist}
                            onChange={(selected) =>
                              handleStatusChange(selected, onChange)
                            }
                          />
                        </>
                      )}
                    />
                    <input
                      type="hidden"
                      {...register('status', {
                        required: 'status is required.',
                      })}
                    />
                    {errors.status && (
                      <span className="text-red-500">
                        {errors.status.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 mt-5 mb-3">
                <button
                  type="button"
                  className="btn btn-active-red"
                  onClick={() => onClose()}>
                  <X className="inline-block size-4" />
                  Cancel
                </button>
                <button className="btn btn-primary" type="submit">
                  <Plus className="inline-block ltr:mr-1 rtl:ml-1 size-4" />
                  {editMode ? 'Update Appointment' : 'Add Appointment'}
                </button>
              </div>
            </form>
          </>
        )}
      />
    </React.Fragment>
  )
}

export default AddEditAppointmentsList
