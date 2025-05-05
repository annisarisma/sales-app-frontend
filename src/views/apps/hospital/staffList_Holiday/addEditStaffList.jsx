import React, { useEffect, useState } from 'react'

import { Modal } from '@src/components/CustomComponents/Modal/Modal'
import { addStaffListData, editStaffListData } from '@src/slices/thunk'
import { Plus, Upload, X } from 'lucide-react'
import Flatpickr from 'react-flatpickr'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Select from 'react-select'

const categoryItems = [
  { label: 'Radiology', value: 'Radiology' },
  { label: 'Orthopedics', value: 'Orthopedics' },
  { label: 'Neurology', value: 'Neurology' },
  { label: 'Cardiology', value: 'Cardiology' },
  { label: 'Pediatrics', value: 'Pediatrics' },
  { label: 'Manager', value: 'Manager' },
  { label: 'Nurse', value: 'Nurse' },
  { label: 'Security Officer', value: 'Security Officer' },
  { label: 'Others', value: 'Others' },
]

const AddEditStaffList = ({
  modalState,
  closeModal,
  staffList,
  editMode = false,
  currentStaff = null,
}) => {
  const dispatch = useDispatch()
  const [preview, setPreview] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [categoryList, setCategoryList] = useState(null)

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
    control,
    clearErrors,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  })

  useEffect(() => {
    clearErrors()
    if (editMode && currentStaff) {
      Object.keys(currentStaff).forEach((key) => {
        setValue(key, currentStaff[key])
      })
      setPreview(currentStaff.image)

      if (currentStaff.date) {
        setSelectedDate(new Date(currentStaff.date))
      } else {
        setSelectedDate(null)
      }

      if (currentStaff.department) {
        const selectedDepartment = categoryItems.find(
          (item) => item.value === currentStaff.department
        )
        setCategoryList(selectedDepartment || null)
      }
    } else {
      reset({
        _id: 0,
        staffId: '',
        name: '',
        image: '',
        role: '',
        department: '',
        email: '',
        phone: '',
        date: '',
      })
      setSelectedDate(null)
      setCategoryList(null)
    }
  }, [editMode, currentStaff, setValue, reset, clearErrors])

  const generateNewStaffId = (staffList) => {
    const maxStaffId =
      staffList.length > 0
        ? Math.max(
            ...staffList.map((staff) => {
              const numericPart = parseInt(staff.staffId.split('-')[1], 10)
              return isNaN(numericPart) ? 0 : numericPart
            })
          )
        : 0
    const newStaffId = maxStaffId + 1
    return `PES-${newStaffId}`
  }

  const submitForm = (data, onClose) => {
    clearErrors()
    if (editMode && currentStaff) {
      const updatedStaffList = {
        ...data,
        image: preview || '',
        department: categoryList?.value || '',
      }
      dispatch(editStaffListData(updatedStaffList))
      setPreview(null)
    } else {
      const newStaffId = generateNewStaffId(staffList)
      const newStaff = {
        ...data,
        staffId: newStaffId,
        image: preview || '',
      }
      dispatch(addStaffListData(newStaff))
      setPreview(null)
    }
    reset()
    onClose()
  }

  const formatDate = (date) => {
    const day = date.getDate()
    const month = date.toLocaleString('default', { month: '2-digit' })
    const year = date.getFullYear()
    return `${year}-${month}-${day}`
  }

  const handleCloseModal = (modal) => {
    closeModal(modal)
    clearErrors()
    setPreview(null)
  }

  const validatePhoneNumber = (value) => {
    const phoneNumberPattern = /^\d{10}$/
    return (
      phoneNumberPattern.test(value) ||
      'Phone number must be exactly 10 digits.'
    )
  }

  return (
    <React.Fragment>
      <Modal
        isOpen={
          modalState &&
          (editMode == true
            ? modalState.showEditStaffForm
            : modalState.showAddStaffForm)
        }
        onClose={() =>
          handleCloseModal(editMode ? 'showEditStaffForm' : 'showAddStaffForm')
        }
        position="modal-center"
        id={editMode ? 'showEditStaffForm' : 'showAddStaffForm'}
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
                        className="block w-full text-sm file:rounded-md focus:outline-0 text-slate-500 dark:text-dark-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                      />
                    </label>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-4 mt-4">
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
                      <span className="text-red-500">
                        {errors.name.message}
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
                    <label htmlFor="departmentSelect" className="form-label">
                      Department
                    </label>
                    <Controller
                      name="department"
                      control={control}
                      rules={{ required: 'Department selection is required.' }}
                      render={({ field: { onChange, value } }) => (
                        <Select
                          classNamePrefix="select"
                          options={categoryItems}
                          value={
                            categoryItems.find(
                              (item) => item.value === value
                            ) || null
                          }
                          onChange={(selected) => {
                            onChange(selected?.value)
                          }}
                          placeholder="Select Department"
                          id="departmentSelect"
                        />
                      )}
                    />
                    {errors.department && (
                      <span className="text-red-500">
                        {errors.department.message}
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
                      type="text"
                      id="phoneNumberInput"
                      className="form-input"
                      placeholder="+(00) 0000 000"
                      {...register('phone', {
                        required: 'Phone Number is required.',
                        validate: (value) => {
                          const isValid = validatePhoneNumber(value)
                          if (typeof isValid === 'string') {
                            setError('phone', {
                              type: 'manual',
                              message: isValid,
                            })
                          } else {
                            clearErrors('phone')
                          }
                          return isValid
                        },
                      })}
                    />
                    {errors.phone && (
                      <span className="text-red-500">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                  <div className="col-span-12">
                    <label htmlFor="joiningDateInput" className="form-label">
                      Joining Date
                    </label>
                    <Flatpickr
                      id="joiningDateInput"
                      className="form-input"
                      placeholder="Select joining date"
                      value={selectedDate || undefined}
                      options={{
                        mode: 'single',
                      }}
                      onChange={(date) => {
                        const formattedDate = formatDate(date[0])
                        setValue('date', formattedDate, {
                          shouldValidate: true,
                        })
                        clearErrors('date')
                        setSelectedDate(date[0])
                      }}
                    />
                    <input
                      type="hidden"
                      {...register('date', {
                        required: 'Joining date is required.',
                      })}
                    />
                    {errors.date && (
                      <span className="text-red-500">
                        {errors.date.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-end gap-2 mt-5">
                  <button
                    type="button"
                    className="btn btn-active-red"
                    onClick={() => onClose()}>
                    <X className="inline-block size-4" />
                    Cancel
                  </button>
                  <button className="btn btn-primary" type="submit">
                    <Plus className="inline-block ltr:mr-1 rtl:ml-1 size-4" />
                    {editMode ? 'Update Staff' : 'Add Staff'}
                  </button>
                </div>
              </div>
            </form>
          </>
        )}
      />
    </React.Fragment>
  )
}

export default AddEditStaffList
