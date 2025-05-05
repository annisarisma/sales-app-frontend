import React, { useEffect, useState } from 'react'

import { Modal } from '@src/components/CustomComponents/Modal/Modal'
import {
  addEmployeeSalaryData,
  editEmployeeSalaryData,
} from '@src/slices/thunk'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Select from 'react-select'

const categoryItems = [
  { label: 'Successful', value: 'Successful' },
  { label: 'Pending', value: 'Pending' },
  { label: 'Failed', value: 'Failed' },
]
const AddEditEmployeeSalary = ({
  modalState,
  closeModal,
  salaryList,
  editMode = false,
  currentSalary = null,
}) => {
  const dispatch = useDispatch()
  const [preview, setPreview] = useState(null)
  const [categoryList, setCategoryList] = useState(null)

  const {
    register,
    handleSubmit,
    setValue,
    control,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm()

  const handleStatusChange = (selected, onChange) => {
    setCategoryList(selected)
    onChange(selected ? selected.value : '')
  }

  useEffect(() => {
    clearErrors()
    if (editMode && currentSalary) {
      Object.keys(currentSalary).forEach((key) => {
        setValue(key, currentSalary[key])
      })
      setPreview(currentSalary.image)

      if (currentSalary.status) {
        const selectedStatus = categoryItems.find(
          (item) => item.value === currentSalary.status
        )
        setCategoryList(selectedStatus || null)
      }
    } else {
      reset({
        _id: 0,
        employeeName: '',
        email: '',
        phoneNumber: '',
        department: '',
        monthlySalary: '',
        status: '',
      })
      setCategoryList(null)
    }
  }, [editMode, currentSalary, setValue, reset, clearErrors])

  const submitForm = (data, onClose) => {
    if (editMode && currentSalary) {
      const updatedContact = { ...data, status: categoryList?.value || '' }
      dispatch(editEmployeeSalaryData(updatedContact))
    } else {
      const newContact = {
        ...data,
        _id: salaryList.length + 1,
        image: preview || '',
        status: categoryList?.value || '',
      }
      dispatch(addEmployeeSalaryData(newContact))
    }
    reset()
    onClose()
    clearErrors()
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
            ? modalState.showEmployeeForm
            : modalState.showAddEmployeeForm)
        }
        title={editMode == true ? 'Edit Event' : 'Add New Event'}
        onClose={() =>
          handleCloseModal(
            editMode ? 'showEmployeeForm' : 'showAddEmployeeForm'
          )
        }
        position="modal-center"
        id={editMode ? 'showEmployeeForm' : 'showAddEmployeeForm'}
        contentClass="modal-content"
        content={(onClose) => (
          <>
            <form onSubmit={handleSubmit((data) => submitForm(data, onClose))}>
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12">
                  <label htmlFor="eventNameInput" className="form-label">
                    Employee Name
                  </label>
                  <input
                    type="text"
                    id="eventNameInput"
                    className="form-input"
                    placeholder="Event name"
                    {...register('employeeName', {
                      required: 'Employee Name is required.',
                    })}
                  />
                  {errors.employeeName && (
                    <span className="text-red-500">
                      {errors.employeeName.message}
                    </span>
                  )}
                </div>
                <div className="col-span-6">
                  <label htmlFor="peopleInput" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="0"
                    id="peopleInput"
                    className="form-input"
                    {...register('email', { required: 'Email is required.' })}
                  />
                  {errors.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                  )}
                </div>
                <div className="col-span-6">
                  <label htmlFor="priceInput" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="$00.00"
                    id="priceInput"
                    className="form-input"
                    {...register('phoneNumber', {
                      required: 'phoneNumber is required.',
                    })}
                  />
                  {errors.phoneNumber && (
                    <span className="text-red-500">
                      {errors.phoneNumber.message}
                    </span>
                  )}
                </div>
                <div className="col-span-12">
                  <label htmlFor="locationInput" className="form-label">
                    Department
                  </label>
                  <input
                    type="text"
                    placeholder="Enter event location"
                    id="locationInput"
                    className="form-input"
                    {...register('department', {
                      required: 'department is required.',
                    })}
                  />
                  {errors.department && (
                    <span className="text-red-500">
                      {errors.department.message}
                    </span>
                  )}
                  <span className="text-red-500"></span>
                </div>
                <div className="col-span-6">
                  <label htmlFor="locationInput" className="form-label">
                    Monthly Salary
                  </label>
                  <input
                    type="text"
                    placeholder="Enter event location"
                    id="locationInput"
                    className="form-input"
                    {...register('monthlySalary', {
                      required: 'monthlySalary is required.',
                    })}
                  />
                  {errors.monthlySalary && (
                    <span className="text-red-500">
                      {errors.monthlySalary.message}
                    </span>
                  )}
                  <span className="text-red-500"></span>
                </div>
                <div className="col-span-6">
                  <label htmlFor="StatusSelect" className="form-label">
                    Status
                  </label>
                  <Controller
                    name="status"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => (
                      <Select
                        classNamePrefix="select"
                        options={categoryItems}
                        value={categoryList}
                        onChange={(selected) =>
                          handleStatusChange(selected, onChange)
                        }
                        placeholder="Select status"
                        id="StatusSelect"
                      />
                    )}
                  />
                  <input
                    type="hidden"
                    {...register('status', { required: 'Status is required.' })}
                  />
                  {errors.status && (
                    <span className="text-red-500">
                      {errors.status.message}
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
                <button className="btn btn-primary" type="submit">
                  {editMode ? 'Edit Event' : 'Add Event'}
                </button>
              </div>
            </form>
          </>
        )}
      />
    </React.Fragment>
  )
}

export default AddEditEmployeeSalary
