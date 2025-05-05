import React, { useCallback, useEffect, useState } from 'react'

import { Modal } from '@src/components/CustomComponents/Modal/Modal'
import {
  addContactListData,
  editContactListData,
} from '@src/slices/crm/contact/thunk'
import { Upload, X } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Select from 'react-select'

const statusOptions = [
  { label: 'Customer', value: 'Customer' },
  { label: 'Personal', value: 'Personal' },
  { label: 'Employee', value: 'Employee' },
  { label: 'Marketing', value: 'Marketing' },
]

const AddEditCrmContact = ({
  modalState,
  closeModal,
  contactList,
  editMode = false,
  currentContact = null,
}) => {
  const dispatch = useDispatch()

  const [preview, setPreview] = useState(null)
  const [status, setStatus] = useState(null)
  const handleStatusChange = (selected, onChange) => {
    setStatus(selected)
    onChange(selected)
  }

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

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    clearErrors,
    setError,
    watch,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  })

  const resetForm = useCallback(() => {
    clearErrors()
    reset({
      image: '',
      contactName: '',
      phoneNumber: '',
      company: '',
      role: '',
      email: '',
      website: '',
      status: '',
    })
    setPreview(null)
    setStatus(null)
  }, [reset, clearErrors])

  useEffect(() => {
    if (modalState.showAddContactForm || modalState.showEditContactForm) {
      resetForm()
    }

    if (editMode && currentContact) {
      clearErrors()
      Object.keys(currentContact).forEach((key) => {
        setValue(key, currentContact[key])
      })
      setPreview(currentContact.image)
      setStatus({
        label: currentContact.status,
        value: currentContact.status,
      })
    }
  }, [
    editMode,
    currentContact,
    modalState,
    setValue,
    reset,
    resetForm,
    clearErrors,
  ])

  const generateId = (length) => {
    const uniqueNumber = ((length + 1) % 100).toString().padStart(2, '0')
    return `PEC-241${uniqueNumber}`
  }

  const submitForm = (data, onClose) => {
    if (editMode && currentContact) {
      const updatedContact = {
        ...data,
        image: preview || '',
        status: status?.value || '',
      }
      dispatch(editContactListData(updatedContact))
    } else {
      const newContact = {
        ...data,
        contact_id: generateId(contactList.length + 1),
        image: preview || '',
        status: status?.value || '',
      }
      dispatch(addContactListData(newContact))
      resetForm() // Reset the form after adding a contact
    }
    onClose()
  }

  const isModalOpen = editMode
    ? modalState?.showEditContactForm
    : modalState?.showAddContactForm

  const formatPhoneNumber = (value) => {
    let rawNumber = value.replace(/[^\d+]/g, '')
    if (rawNumber.startsWith('+')) {
      rawNumber = rawNumber.substring(1)
    }

    const formattedNumber = rawNumber
      .replace(/^(\d{3})(\d{0,4})(\d{0,5})$/, '+$1 $2 $3')
      .trim()
    return formattedNumber
  }

  const validatePhoneNumber = (value) => {
    const formattedNumber = formatPhoneNumber(value)
    const phonePattern = /^\+\d{3} \d{4} \d{5}$/
    if (!phonePattern.test(formattedNumber)) {
      return 'Phone number must be in the format +XXX XXXX XXXXX'
    }
    return true
  }

  const handlePhoneChange = (e) => {
    const value = e.target.value
    const formattedValue = formatPhoneNumber(value)

    // Set the formatted value in your form state
    setValue('phoneNumber', formattedValue)

    // Validate the formatted value
    const validationResponse = validatePhoneNumber(formattedValue)
    if (typeof validationResponse === 'string') {
      setError('phoneNumber', { type: 'manual', message: validationResponse })
    } else {
      clearErrors('phoneNumber') // Clear error if valid
    }
  }

  const handleCloseModal = (modal) => {
    closeModal(modal)
    clearErrors()
  }

  return (
    <React.Fragment>
      <Modal
        isOpen={isModalOpen}
        onClose={() =>
          handleCloseModal(
            editMode ? 'showEditContactForm' : 'showAddContactForm'
          )
        }
        position="modal-center"
        id={editMode ? 'showEditContactForm' : 'showAddContactForm'}
        contentClass="p-2"
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
                          src={preview || ''}
                          alt="preview"
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
                        className="block w-full text-sm file:rounded-md focus:outline-0 text-slate-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                      />
                    </label>
                  </div>
                </div>
                {errors.image && (
                  <span className="text-red-500">{errors.image.message}</span>
                )}
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
                      {...register('contactName', {
                        required: 'Full name is required.',
                      })}
                    />
                    {errors.contactName && (
                      <span className="text-red-500">
                        {errors.contactName.message}
                      </span>
                    )}
                  </div>
                  <div className="col-span-12">
                    <label htmlFor="companyNameInput" className="form-label">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyNameInput"
                      className="form-input"
                      placeholder="Company name"
                      {...register('company', {
                        required: 'Company name is required.',
                      })}
                    />
                    {errors.company && (
                      <span className="text-red-500">
                        {errors.company.message}
                      </span>
                    )}
                  </div>
                  <div className="col-span-12">
                    <label htmlFor="roleInput" className="form-label">
                      Role
                    </label>
                    <input
                      type="text"
                      id="roleInput"
                      className="form-input"
                      placeholder="Role"
                      {...register('role', { required: 'Role is required.' })}
                    />
                    {errors.role && (
                      <span className="text-red-500">
                        {errors.role.message}
                      </span>
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
                      <span className="text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className="col-span-12">
                    <label htmlFor="phoneNumberInput" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNumberInput"
                      maxLength={15}
                      className="form-input"
                      placeholder="+(00) 0000 000"
                      {...register('phoneNumber', {
                        required: 'Phone Number is required.',
                        validate: (value) => {
                          const isValid = validatePhoneNumber(value)
                          if (typeof isValid === 'string') {
                            setError('phoneNumber', {
                              type: 'manual',
                              message: isValid,
                            })
                          } else {
                            clearErrors('phoneNumber') // Clear error if valid
                          }
                          return isValid
                        },
                      })}
                      onChange={handlePhoneChange} // Custom onChange handler
                      value={watch('phoneNumber') || ''} // Ensure input reflects current state
                    />
                    {errors.phoneNumber && (
                      <span className="text-red-500">
                        {errors.phoneNumber.message}
                      </span>
                    )}
                  </div>
                  <div className="col-span-6">
                    <label htmlFor="websiteInput" className="form-label">
                      WebSite
                    </label>
                    <input
                      type="url"
                      id="websiteInput"
                      className="form-input"
                      placeholder="http://www.domiex.com"
                      {...register('website', {
                        required: 'Website is required.',
                      })}
                    />
                    {errors.website && (
                      <span className="text-red-500">
                        {errors.website.message}
                      </span>
                    )}
                  </div>
                  <div className="col-span-6">
                    <label htmlFor="statusSelect" className="form-label">
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
                          value={status || null}
                          onChange={(selected) =>
                            handleStatusChange(selected, onChange)
                          }
                          placeholder="Select Status"
                          id="statusSelect"
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
                      onClick={() => onClose()}>
                      <X data-lucide="x" className="inline-block size-4" />{' '}
                      <span className="align-baseline">Close</span>
                    </button>
                    <button className="btn btn-primary" type="submit">
                      {editMode ? 'Update Contact' : 'Add Contact'}
                    </button>
                  </div>
                </div>
                {/* <Plus className="inline-block ltr:mr-1 rtl:ml-1 size-4" /> */}
              </div>
            </form>
          </>
        )}
      />
    </React.Fragment>
  )
}

export default AddEditCrmContact
