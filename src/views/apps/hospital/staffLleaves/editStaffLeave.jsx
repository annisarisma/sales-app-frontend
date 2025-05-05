import React, { useEffect, useState } from 'react'

import { Modal } from '@src/components/CustomComponents/Modal/Modal'
import { editStaffLeaveData } from '@src/slices/thunk'
import Flatpickr from 'react-flatpickr'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Select from 'react-select'

const categoryItems = [
  { label: 'Approved', value: 'Approved' },
  { label: 'Pending', value: 'Pending' },
  { label: 'Rejected', value: 'Rejected' },
]

const leaveTypes = [
  { label: 'Sick Leave', value: 'Sick Leave' },
  { label: 'Personal', value: 'Personal' },
  { label: 'Vacation', value: 'Vacation' },
  { label: 'Maternity Leave', value: 'Maternity Leave' },
]

const EditStaffLeave = ({
  modalState,
  closeModal,
  editMode = false,
  currentLeave = null,
}) => {
  const dispatch = useDispatch()

  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedDate2, setSelectedDate2] = useState(null)
  const [selectedDate3, setSelectedDate3] = useState(null)
  const [selectedDate4, setSelectedDate4] = useState(null)
  const [categoryList, setCategoryList] = useState(null)
  const [leaveList, setLeaveList] = useState(null)

  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    clearErrors()
    if (editMode && currentLeave) {
      Object.keys(currentLeave).forEach((key) => {
        setValue(key, currentLeave[key])
      })
      setSelectedDate(new Date(currentLeave.startDate))
      setSelectedDate2(new Date(currentLeave.endDate))
      setSelectedDate3(new Date(currentLeave.dateRequested))
      setSelectedDate4(new Date(currentLeave.dateApproved))
      if (currentLeave.leaveType) {
        const selectedLeave = leaveTypes.find(
          (item) => item.value === currentLeave.leaveType
        )
        setLeaveList(selectedLeave || null)
      }
      if (currentLeave.status) {
        const selectedStatus = categoryItems.find(
          (item) => item.value === currentLeave.status
        )
        setCategoryList(selectedStatus || null)
      }
    } else {
      reset({
        id: 0,
        leaveType: '',
        staffId: '',
        startDate: '',
        endDate: '',
        days: 0,
        reason: '',
        approvedBy: '',
        dateRequested: '',
        dateApproved: '',
        status: '',
      })
      setSelectedDate(null)
      setSelectedDate2(null)
      setSelectedDate3(null)
      setSelectedDate4(null)
      setCategoryList(null)
      setLeaveList(null)
      clearErrors()
    }
  }, [editMode, currentLeave, setValue, reset, clearErrors])

  const handleStatusChange = (selected, onChange) => {
    setCategoryList(selected)
    onChange(selected ? selected.value : '')
  }

  const handleLeaveTypeChange = (selected, onChange) => {
    setLeaveList(selected)
    onChange(selected ? selected.value : '')
  }

  const formatDate = (date) => {
    const day = date.getDate()
    const month = date.toLocaleString('default', { month: 'short' })
    const year = date.getFullYear()
    return `${day} ${month} ${year}`
  }

  const submitForm = (data, onClose) => {
    if (editMode && currentLeave) {
      const updatedContact = {
        ...data,
        status: categoryList?.value || '',
        leaveType: leaveList?.value || '',
      }
      dispatch(editStaffLeaveData(updatedContact))
    }
    reset()
    closeModal()
  }

  const handleCloseModal = (modal) => {
    closeModal(modal)
    clearErrors()
  }

  return (
    <React.Fragment>
      <Modal
        isOpen={
          editMode ? modalState.showEditLeaveForm : modalState.showAddLeaveForm
        }
        title={editMode ? 'Edit Leave' : 'Add New Leave'}
        onClose={() =>
          handleCloseModal(editMode ? 'showEditLeaveForm' : 'showAddLeaveForm')
        }
        position="modal-center"
        id={editMode ? 'showEditLeaveForm' : 'showAddLeaveForm'}
        contentClass="modal-content"
        content={(onClose) => (
          <>
            <form onSubmit={handleSubmit((data) => submitForm(data, onClose))}>
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12">
                  <label htmlFor="nameInput" className="form-label">
                    Leave Type
                  </label>
                  <Controller
                    name="leaveType"
                    control={control}
                    rules={{ required: 'Leave type is required.' }}
                    render={({ field: { onChange } }) => (
                      <Select
                        classNamePrefix="select"
                        options={leaveTypes}
                        value={leaveList}
                        onChange={(selected) =>
                          handleLeaveTypeChange(selected, onChange)
                        }
                        placeholder="Select Leave Type"
                        id="nameInput"
                      />
                    )}
                  />
                  {errors.leaveType && (
                    <span className="text-red-500">
                      {errors.leaveType.message}
                    </span>
                  )}
                </div>
                <div className="col-span-6">
                  <label htmlFor="startDateInput" className="form-label">
                    Start Date
                  </label>
                  <Flatpickr
                    id="startDateInput"
                    className="form-input"
                    placeholder="Select Start date"
                    value={selectedDate || undefined}
                    options={{ mode: 'single' }}
                    onChange={(date) => {
                      const formattedDate = formatDate(date[0])
                      setValue('startDate', formattedDate)
                    }}
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="dueDateInput" className="form-label">
                    End Date
                  </label>
                  <Flatpickr
                    id="dueDateInput"
                    className="form-input"
                    placeholder="Select End date"
                    value={selectedDate2 || undefined}
                    options={{ mode: 'single' }}
                    onChange={(date) => {
                      const formattedDate = formatDate(date[0])
                      setValue('endDate', formattedDate)
                    }}
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="peopleInput" className="form-label">
                    Approved By
                  </label>
                  <input
                    type="text"
                    placeholder="Approved By"
                    id="peopleInput"
                    className="form-input"
                    {...register('approvedBy', {
                      required: 'Approved By is required.',
                    })}
                  />
                  {errors.approvedBy && (
                    <span className="text-red-500">
                      {errors.approvedBy.message}
                    </span>
                  )}
                </div>
                <div className="col-span-6">
                  <label htmlFor="requestDate" className="form-label">
                    Requested Date
                  </label>
                  <Flatpickr
                    id="requestDate"
                    className="form-input"
                    placeholder="Select Requested date"
                    value={selectedDate3 || undefined}
                    options={{ mode: 'single' }}
                    onChange={(date) => {
                      const formattedDate = formatDate(date[0])
                      setValue('dateRequested', formattedDate)
                    }}
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="approvedDate" className="form-label">
                    Approved Date
                  </label>
                  <Flatpickr
                    id="approvedDate"
                    className="form-input"
                    placeholder="Select Approved date"
                    value={selectedDate4 || undefined}
                    options={{ mode: 'single' }}
                    onChange={(date) => {
                      const formattedDate = formatDate(date[0])
                      setValue('dateApproved', formattedDate)
                    }}
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="status" className="form-label">
                    Status
                  </label>
                  <Controller
                    name="status"
                    control={control}
                    rules={{ required: 'Status is required.' }}
                    render={({ field: { onChange } }) => (
                      <Select
                        classNamePrefix="select"
                        options={categoryItems}
                        value={categoryList}
                        onChange={(selected) =>
                          handleStatusChange(selected, onChange)
                        }
                        placeholder="Select status"
                        id="status"
                      />
                    )}
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
                  {editMode ? 'Edit Leave' : 'Add Leave'}
                </button>
              </div>
            </form>
          </>
        )}
      />
    </React.Fragment>
  )
}

export default EditStaffLeave
