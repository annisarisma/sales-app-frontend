import React, { useCallback, useEffect, useState } from 'react'

import { Modal } from '@src/components/CustomComponents/Modal/Modal'
import { addReportstData, editReportstData } from '@src/slices/thunk'
import { Plus, X } from 'lucide-react'
import Flatpickr from 'react-flatpickr'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Select from 'react-select'

const categoryItems = [
  { label: 'Pending', value: 'Pending' },
  { label: 'Completed', value: 'Completed' },
  { label: 'In Progress', value: 'In Progress' },
]

const Recommendations = [
  { label: 'N/A', value: 'N/A' },
  { label: 'Follow up required', value: 'Completed' },
  { label: 'Consult with surgron', value: 'In Progress' },
]
const reportsType = [
  { label: 'X-Ray', value: 'X-Ray' },
  { label: 'Blood Test', value: 'Blood Test' },
  { label: 'MRI', value: 'MRI' },
  { label: 'CT Scan', value: 'CT Scan' },
  { label: 'Ultrasound', value: 'Ultrasound' },
]

const AddEditReports = ({
  modalState,
  closeModal,
  reportsList,
  editMode = false,
  currentReports = null,
}) => {
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    clearErrors,
    formState: { errors },
  } = useForm()

  const [selectedDate, setSelectedDate] = useState(null)
  const [categorylist, setCategorylist] = useState(null)
  const [recommendations, setRecommendations] = useState(null)
  const [reportstype, setReportstype] = useState(null)

  const handleStatusChange = (selected, onChange) => {
    setCategorylist(selected)
    onChange(selected ? selected.value : '')
  }

  const handleRecommendaChange = (selected, onChange) => {
    setRecommendations(selected)
    onChange(selected ? selected.value : '') // Handle case where selected could be null
  }

  const handleReportsTypeChange = (selected, onChange) => {
    setReportstype(selected)
    onChange(selected ? selected.value : '')
  }

  const resetForm = useCallback(() => {
    reset({
      _id: 0,
      name: '',
      clinical: '',
      impressions: '',
      recommendations: '',
      date: '',
      status: '',
      doctor: '',
    })
    setSelectedDate(null)
    setCategorylist(null)
    setRecommendations(null)
    setReportstype(null)
  }, [reset])

  useEffect(() => {
    clearErrors()
    if (editMode && currentReports) {
      Object.keys(currentReports).forEach((key) => {
        setValue(key, currentReports[key])
      })

      if (currentReports.date) {
        setSelectedDate(new Date(currentReports.date))
      }

      const selectedStatus = categoryItems.find(
        (item) => item.value === currentReports?.status
      )
      setCategorylist(selectedStatus || null)

      const selectedRecommendations = Recommendations.find(
        (item) => item.value === currentReports?.recommendations
      )
      setRecommendations(selectedRecommendations || null)

      const selectedReports = reportsType.find(
        (item) => item.value === currentReports?.name
      )
      setReportstype(selectedReports || null)
    } else {
      resetForm()
      clearErrors()
    }
  }, [editMode, currentReports, setValue, reset, clearErrors, resetForm])

  const submitForm = (data, onClose) => {
    try {
      const updatedData = {
        ...data,
        status: categorylist?.value || '',
        recommendations: recommendations?.value || '',
        name: reportstype?.value || '',
      }

      if (editMode && currentReports) {
        dispatch(editReportstData(updatedData))
      } else {
        const newReport = { ...updatedData, _id: reportsList.length + 1 }
        dispatch(addReportstData(newReport))
      }

      reset()
      onClose()
    } catch (error) {
      console.error('Error during form submission:', error)
    }
    resetForm()
  }

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0')
    const month = date.toLocaleString('default', { month: 'short' })
    const year = date.getFullYear()
    return `${day} ${month}, ${year}`
  }

  const handleCloseModal = () => {
    closeModal(editMode ? 'showEditReportForm' : 'showAddReportForm')
    resetForm()
    clearErrors()
  }

  const handleClose = () => {
    closeModal(editMode ? 'showEditReportForm' : 'showAddReportForm')
    resetForm()
  }

  return (
    <React.Fragment>
      <Modal
        isOpen={modalState.showAddReportForm}
        title="Add Report"
        onClose={() => handleCloseModal()}
        position="modal-center"
        id="showAddReportForm"
        contentClass="modal-content"
        content={(onClose) => (
          <form onSubmit={handleSubmit((data) => submitForm(data, onClose))}>
            <div className="grid grid-cols-12 gap-space">
              <div className="col-span-12">
                <label htmlFor="reportTypeSelect" className="form-label">
                  Report Type <span className="text-red-500">*</span>
                </label>
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: 'Reports Type is required.' }}
                  render={({ field: { onChange } }) => (
                    <Select
                      classNamePrefix="select"
                      options={reportsType}
                      value={reportstype}
                      onChange={(selected) =>
                        handleReportsTypeChange(selected, onChange)
                      }
                      placeholder="select report type"
                      id="reportTypeSelect"
                    />
                  )}
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
                  placeholder="Select due date"
                  value={selectedDate || undefined}
                  options={{ mode: 'single' }}
                  onChange={(date) => {
                    const formattedDate = formatDate(date[0])
                    setValue('date', formattedDate)
                    setSelectedDate(date[0])
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
                <label htmlFor="doctorNameInput" className="form-label">
                  Doctor <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="doctorNameInput"
                  className="form-input"
                  placeholder="Enter doctor name"
                  {...register('doctor', {
                    required: 'doctor type is required.',
                  })}
                />
                {errors.doctor && (
                  <span className="text-red-500">{errors.doctor.message}</span>
                )}
              </div>
              <div className="col-span-12">
                <label htmlFor="textareaInput2" className="form-label">
                  Clinical Details
                </label>
                <textarea
                  id="textareaInput2"
                  rows={3}
                  className="h-auto form-input"
                  placeholder="Enter your description"
                  {...register('clinical', {
                    required: 'clinical type is required.',
                  })}></textarea>
                {errors.clinical && (
                  <span className="text-red-500">
                    {errors.clinical.message}
                  </span>
                )}
              </div>
              <div className="col-span-6">
                <label htmlFor="impressionsInput" className="form-label">
                  Impressions
                </label>
                <input
                  type="text"
                  id="impressionsInput"
                  className="form-input"
                  placeholder="Impressions"
                  {...register('impressions', {
                    required: 'impressions  is required.',
                  })}
                />
                {errors.impressions && (
                  <span className="text-red-500">
                    {errors.impressions.message}
                  </span>
                )}
              </div>
              <div className="col-span-6">
                <label htmlFor="recommendationsSelect" className="form-label">
                  Recommendations
                </label>
                <Controller
                  name="recommendations"
                  control={control}
                  rules={{ required: 'Recommendations is required.' }}
                  render={({ field: { onChange } }) => (
                    <Select
                      classNamePrefix="select"
                      options={Recommendations}
                      value={recommendations}
                      onChange={(selected) =>
                        handleRecommendaChange(selected, onChange)
                      }
                      placeholder="recommendations"
                      id="recommendationsSelect"
                    />
                  )}
                />
                {errors.recommendations && (
                  <span className="text-red-500">
                    {errors.recommendations.message}
                  </span>
                )}
              </div>
              <div className="col-span-12">
                <label htmlFor="statusSelect" className="form-label">
                  Status <span className="text-red-500">*</span>
                </label>
                <Controller
                  name="status"
                  control={control}
                  rules={{ required: 'Status is required.' }}
                  render={({ field: { onChange } }) => (
                    <Select
                      classNamePrefix="select"
                      options={categoryItems}
                      value={categorylist}
                      onChange={(selected) =>
                        handleStatusChange(selected, onChange)
                      }
                      placeholder="Select status"
                      id="statusSelect"
                    />
                  )}
                />
                {errors.status && (
                  <span className="text-red-500">{errors.status.message}</span>
                )}
              </div>

              <div className="col-span-12">
                <div className="flex items-center justify-end gap-2">
                  <button
                    type="submit"
                    className="btn btn-active-red"
                    onClick={onClose}>
                    <X className="inline-block size-4" />
                    Cancel
                  </button>
                  <button className="btn btn-primary" type="submit">
                    <Plus className="inline-block mr-1 size-4" />
                    {editMode ? 'Edit Report' : 'Add Report'}
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

export default AddEditReports
