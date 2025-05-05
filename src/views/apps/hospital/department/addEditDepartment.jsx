import React, { useCallback, useEffect, useState } from 'react'

import { Modal } from '@src/components/CustomComponents/Modal/Modal'
import { addDepartmentsData, editDepartmentsData } from '@src/slices/thunk'
import { Plus, Upload, X } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Select from 'react-select'

const categoryItems = [
  { label: 'Active', value: 'Active' },
  { label: 'Unactive', value: 'Unactive' },
]

const AddEditDepartment = ({
  modalState,
  closeModal,
  departmentList,
  editMode = false,
  currentDepartment = null,
}) => {
  const dispatch = useDispatch()

  // image
  const [preview, setPreview] = useState(null)
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
    reset,
    clearErrors,
    formState: { errors },
  } = useForm()

  const handleStatusChange = (selected, onChange) => {
    setCategoryList(selected)
    onChange(selected ? selected.value : '')
  }

  const resetForm = useCallback(() => {
    reset({
      _id: 0,
      departmentId: '',
      image: '',
      departmentName: '',
      doctor: '',
      totalEmployee: '',
      headOfDepartment: '',
      status: '',
    })
    setPreview(null)
    setCategoryList(null)
    clearErrors()
  }, [reset, clearErrors])

  useEffect(() => {
    if (editMode && currentDepartment) {
      Object.keys(currentDepartment).forEach((key) => {
        setValue(key, currentDepartment[key])
      })
      setPreview(currentDepartment.image)
    }

    if (currentDepartment?.status) {
      const selectedStatus = categoryItems.find(
        (item) => item.value === currentDepartment.status
      )
      setCategoryList(selectedStatus || null)
    } else {
      resetForm()
      setCategoryList(null)
      clearErrors()
    }
  }, [editMode, currentDepartment, setValue, reset, resetForm, clearErrors])

  const getRecordId = (list, key, prefix) => {
    const maxId =
      list.length > 0
        ? Math.max(
            ...list.map((item) => {
              const numericPart = parseInt(item[key]?.split('-')[1], 10)
              return isNaN(numericPart) ? 0 : numericPart
            })
          )
        : 0
    const newId = maxId + 1
    return `${prefix}-${newId}`
  }

  const submitForm = (data, onClose) => {
    if (editMode && currentDepartment) {
      const updatedDepartment = {
        ...data,
        image: preview || '',
        status: categoryList?.value || '',
      }
      dispatch(editDepartmentsData(updatedDepartment))
    } else {
      const newDepartment = {
        ...data,
        departmentId: getRecordId(departmentList, 'departmentId', 'PED'),
        image: preview || '',
      }
      dispatch(addDepartmentsData(newDepartment))
    }
    setCategoryList(null)
    reset()
    onClose()
    clearErrors()
  }

  const handleCloseModal = (modal) => {
    closeModal(modal)
    resetForm()
  }

  return (
    <React.Fragment>
      <Modal
        isOpen={
          modalState &&
          (editMode == true
            ? modalState.showEditDepartment
            : modalState.showAddDepartment)
        }
        onClose={() =>
          handleCloseModal(
            editMode ? 'showEditDepartment' : 'showAddDepartment'
          )
        }
        position="modal-center"
        id={editMode ? 'showEditDepartment' : 'showAddDepartment'}
        contentClass="p-2 modal-content"
        content={(onClose) => (
          <>
            <form onSubmit={handleSubmit((data) => submitForm(data, onClose))}>
              <div className="h-24 p-5 rounded-t bg-gradient-to-r from-primary-500/20 via-pink-500/20 to-green-500/20"></div>
              <div className="p-4">
                <div className="-mt-16">
                  <label htmlFor="logo">
                    <div className="inline-flex items-center justify-center overflow-hidden bg-gray-100 border-2 border-white border-solid rounded-full cursor-pointer dark:bg-dark-850 dark:border-dark-900 size-24">
                      {preview ? (
                        <img
                          src={preview || ''}
                          alt="preview"
                          width={92}
                          height={92}
                          className="object-cover h-24"
                        />
                      ) : (
                        <div className="flex flex-col items-center text-gray-500">
                          <Upload />
                          <span className="block mt-3"></span>
                        </div>
                      )}
                    </div>
                  </label>
                  <div className="hidden mt-4">
                    <label className="block">
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
                <div className="grid grid-cols-12 gap-4 mt-4">
                  <div className="col-span-12">
                    <label htmlFor="departmentNameInput" className="form-label">
                      Department Name
                    </label>
                    <input
                      type="text"
                      id="departmentNameInput"
                      className="form-input"
                      placeholder="Department Name"
                      {...register('departmentName', {
                        required: 'Department Name is required.',
                      })}
                    />
                    {errors.departmentName && (
                      <span className="text-red-500">
                        {errors.departmentName.message}
                      </span>
                    )}
                  </div>
                  <div className="col-span-12">
                    <label htmlFor="doctorInput" className="form-label">
                      Doctor
                    </label>
                    <input
                      type="text"
                      id="doctorInput"
                      className="form-input"
                      placeholder="Enter doctor name"
                      {...register('doctor', {
                        required: 'Doctor is required.',
                      })}
                    />
                    {errors.doctor && (
                      <span className="text-red-500">
                        {errors.doctor.message}
                      </span>
                    )}
                  </div>
                  <div className="col-span-12">
                    <label htmlFor="totalEmployeeInput" className="form-label">
                      Total Employee
                    </label>
                    <input
                      type="number"
                      id="totalEmployeeInput"
                      className="form-input"
                      placeholder="0"
                      {...register('totalEmployee', {
                        required: 'Total Employee is required.',
                      })}
                    />
                    {errors.totalEmployee && (
                      <span className="text-red-500">
                        {errors.totalEmployee.message}
                      </span>
                    )}
                  </div>
                  <div className="col-span-12">
                    <label htmlFor="headOfDeptInput" className="form-label">
                      Head of Dept.
                    </label>
                    <input
                      type="text"
                      id="headOfDeptInput"
                      className="form-input"
                      placeholder="Head of dept."
                      {...register('headOfDepartment', {
                        required: 'Head of Dept is required.',
                      })}
                    />
                    {errors.headOfDepartment && (
                      <span className="text-red-500">
                        {errors.headOfDepartment.message}
                      </span>
                    )}
                  </div>
                  <div className="col-span-12">
                    <label htmlFor="statusSelect" className="form-label">
                      Status
                    </label>
                    <Select
                      classNamePrefix="select"
                      id="statusSelect"
                      options={categoryItems}
                      value={categoryList}
                      onChange={(selectedOption) =>
                        handleStatusChange(selectedOption, (value) =>
                          setValue('status', value)
                        )
                      }
                      placeholder="Select Status"
                      isClearable
                    />
                    <input
                      type="hidden"
                      {...register('status', {
                        required: 'status is required.',
                      })}
                    />
                    {/* Display error if date is not selected */}
                    {errors.status && (
                      <span className="text-red-500">
                        {errors.status.message}
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
                    Close
                  </button>
                  <button className="btn btn-primary" type="submit">
                    <Plus className="inline-block mr-1 size-4" />
                    {editMode ? 'Edit Department' : 'Add Department'}
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

export default AddEditDepartment
