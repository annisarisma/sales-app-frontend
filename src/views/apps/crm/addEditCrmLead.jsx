import React, { useCallback, useEffect, useState } from 'react'

import { Modal } from '@src/components/CustomComponents/Modal/Modal'
import { addLeadData, editLeadData } from '@src/slices/thunk'
import { Plus, Upload, X } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Select from 'react-select'

const statusOptions = [
  { label: 'New', value: 'New' },
  { label: 'Hot', value: 'Hot' },
  { label: 'Pending', value: 'Pending' },
  { label: 'Lost', value: 'Lost' },
]

const AddEditCrmLead = ({
  modalState,
  closeModal,
  leadList,
  editMode = false,
  currentLead = null,
}) => {
  const dispatch = useDispatch()

  const [preview, setPreview] = useState(null)
  const [status, setStatus] = useState(null)
  const [formattedPhone, setFormattedPhone] = useState('')

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

  // status
  const handleStatusChange = (selected, onChange) => {
    setStatus(selected)
    onChange(selected)
  }

  const {
    register,
    handleSubmit,
    control,
    setValue,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm()

  const resetForm = useCallback(() => {
    reset({
      image: '',
      name: '',
      date: '',
      time: '',
      email: '',
      phoneNumber: '',
      status: '',
    })
    setStatus(null)
    setPreview(null)
    setFormattedPhone('')
  }, [reset])

  useEffect(() => {
    if (editMode && currentLead) {
      clearErrors()
      Object.keys(currentLead).forEach((key) => {
        setValue(key, currentLead[key])
      })
      setPreview(currentLead.image)
      setStatus({
        label: currentLead.status,
        value: currentLead.status,
      })
      setFormattedPhone(currentLead.phoneNumber)
    } else {
      resetForm()
      clearErrors()
    }
  }, [editMode, currentLead, setValue, reset, clearErrors, resetForm])

  const formatDate = (date) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' }
    return new Intl.DateTimeFormat('en-GB', options).format(date)
  }

  const formatTime = (date) => {
    const options = { hour: 'numeric', minute: 'numeric', hour12: true }
    return new Intl.DateTimeFormat('en-US', options).format(date)
  }

  const submitForm = (data, onClose) => {
    const currentDate = new Date()
    if (editMode && currentLead) {
      const updatedLead = {
        ...data,
        image: preview || '',
        status: status?.value || '',
        time: formatTime(currentDate),
        date: formatDate(currentDate),
      }
      dispatch(editLeadData(updatedLead))
    } else {
      const newLead = {
        ...data,
        _id: leadList.length + 1,
        image: preview || '',
        status: status?.value || '',
        time: formatTime(currentDate),
        date: formatDate(currentDate),
      }
      dispatch(addLeadData(newLead))
    }
    onClose()
    resetForm()
  }

  const handleClose = () => {
    closeModal(editMode ? 'showEditLeadForm' : 'showAddLeadForm')
    resetForm()
  }

  // Function to format phone number to match +(00) 0000 000 pattern
  const formatPhoneNumber = (value) => {
    let cleanValue = value.replace(/\D/g, '') // Remove non-numeric characters

    // Apply formatting +(00) 0000 000
    const countryCode = cleanValue.slice(0, 2)
    const firstPart = cleanValue.slice(2, 6)
    const secondPart = cleanValue.slice(6, 10)

    let formatted = '+'
    if (countryCode) formatted += `(${countryCode})`
    if (firstPart) formatted += ` ${firstPart}`
    if (secondPart) formatted += ` ${secondPart}`

    return formatted
  }

  // Handle phone number input change
  const handlePhoneNumberChange = (e) => {
    const input = e.target.value
    const formatted = formatPhoneNumber(input)
    setFormattedPhone(formatted)
    setValue('phoneNumber', formatted)
  }

  return (
    <React.Fragment>
      <Modal
        isOpen={
          modalState &&
          (editMode ? modalState.showEditLeadForm : modalState.showAddLeadForm)
        }
        onClose={handleClose}
        position="modal-center"
        id={editMode ? 'showEditLeadForm' : 'showAddLeadForm'}
        contentClass="p-2"
        content={(onClose) => (
          <form onSubmit={handleSubmit((data) => submitForm(data, onClose))}>
            <div className="h-24 p-5 rounded-t bg-gradient-to-r from-primary-500/20 via-pink-500/20 to-green-500/20"></div>
            <div className="p-4">
              <div className="-mt-16">
                <label htmlFor="logo">
                  <div className="inline-flex items-center justify-center overflow-hidden bg-gray-100 border-2 border-white border-solid rounded-full cursor-pointer dark:border-dark-900 dark:bg-dark-850 size-24">
                    {preview ? (
                      <img
                        src={preview || ''}
                        alt="lead image"
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
                      className="block w-full text-sm file:rounded-md focus:outline-0 text-slate-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 "
                    />
                  </label>
                </div>
                {errors.image && (
                  <span className="text-red-500">{errors.image.message}</span>
                )}
              </div>
              <div className="grid grid-cols-12 gap-4 mt-5">
                <div className="col-span-12">
                  <label htmlFor="fullNameInput" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullNameInput"
                    className="form-input"
                    placeholder="Full name"
                    {...register('name', {
                      required: 'Full Name is required.',
                    })}
                  />
                  {errors.name && (
                    <span className="text-red-500">{errors.name.message}</span>
                  )}
                </div>

                <div className="col-span-12">
                  <label htmlFor="emailInput" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="emailInput"
                    className="form-input"
                    placeholder="support@example.com"
                    {...register('email', { required: 'Email is required.' })}
                  />
                  {errors.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                  )}
                </div>

                <div className="col-span-12">
                  <label htmlFor="phoneInput" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phoneInput"
                    className="form-input"
                    placeholder="+(00) 0000 000"
                    value={formattedPhone}
                    onChange={handlePhoneNumberChange} // Call change handler
                  />
                  {errors.phoneNumber && (
                    <span className="text-red-500">
                      {errors.phoneNumber.message}
                    </span>
                  )}
                </div>

                <div className="col-span-6">
                  <label htmlFor="statusSelect2" className="form-label">
                    Status
                  </label>
                  <Controller
                    name="status"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => (
                      <Select
                        classNamePrefix="select"
                        options={statusOptions}
                        value={status}
                        onChange={(selected) =>
                          handleStatusChange(selected, onChange)
                        }
                        placeholder="Select Status"
                        id="statusSelect2"
                      />
                    )}
                  />
                  {errors.status && (
                    <span className="text-red-500">Status is required</span>
                  )}
                </div>
                <div className="flex items-center justify-end col-span-12 gap-2 mt-5">
                  <button
                    type="button"
                    className="btn btn-active-red"
                    onClick={onClose}>
                    <X className="inline-block size-4" />{' '}
                    <span className="align-baseline">Close</span>
                  </button>
                  <button type="submit" className="btn btn-primary">
                    <Plus className="inline-block ltr:mr-1 rtl:ml-1 size-4" />
                    {editMode ? 'Update Lead' : 'Add Lead'}
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

export default AddEditCrmLead
