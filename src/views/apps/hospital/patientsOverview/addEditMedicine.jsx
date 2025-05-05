import React, { useEffect, useState } from 'react'

import { Modal } from '@src/components/CustomComponents/Modal/Modal'
import { addMedicineData, editMedicineData } from '@src/slices/thunk'
import { Plus, X } from 'lucide-react'
import Flatpickr from 'react-flatpickr'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

const AddEditMedicine = ({
  modalState,
  closeModal,
  eventList,
  editMode = false,
  currentContact = null,
}) => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm()

  const [selectedStartDate, setSelectedStartDate] = useState(null)
  const [selectedEndDate, setSelectedEndDate] = useState(null)

  useEffect(() => {
    if (editMode && currentContact) {
      Object.keys(currentContact).forEach((key) => {
        setValue(key, currentContact[key])
      })
      setSelectedStartDate(new Date(currentContact.startDate)) // Set initial start date
      setSelectedEndDate(new Date(currentContact.endDate)) // Set initial end date
    } else {
      reset({
        _id: 0,
        date: '',
        time: '',
        medicineName: '',
        dosage: '',
        frequency: '',
        startDate: '',
        endDate: '',
        prescribingDoctor: '',
        reasonCondition: '',
        notes: '',
      })
      setSelectedStartDate(null)
      setSelectedEndDate(null)
    }
  }, [editMode, currentContact, setValue, reset])

  const submitForm = (data, onClose) => {
    let startDate

    if (typeof data.startDate === 'string') {
      startDate = new Date(data.startDate)
    } else {
      startDate = data.startDate
    }

    const formattedDate = startDate.toISOString().slice(0, 10)
    const time = startDate.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })

    if (editMode && currentContact) {
      const updatedContact = {
        ...data,
        date: formattedDate,
        time: time,
      }
      dispatch(editMedicineData(updatedContact))
    } else {
      const newContact = {
        ...data,
        _id: eventList.length + 1,
        date: formattedDate,
        time: time,
      }
      dispatch(addMedicineData(newContact))
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
    reset()
    clearErrors()
  }

  return (
    <React.Fragment>
      <Modal
        isOpen={
          editMode
            ? modalState.showEditMedicineForm
            : modalState.showAddMedicineForm
        }
        title={editMode ? 'Edit Event' : 'Add New Event'}
        onClose={() =>
          handleCloseModal(
            editMode ? 'showEditMedicineForm' : 'showAddMedicineForm'
          )
        }
        position="modal-center"
        id={editMode ? 'showEditMedicineForm' : 'showAddMedicineForm'}
        contentClass="modal-content"
        content={(onClose) => (
          <form onSubmit={handleSubmit((data) => submitForm(data, onClose))}>
            <div className="grid grid-cols-12 gap-space">
              <div className="col-span-12">
                <label htmlFor="medicineNameInput" className="form-label">
                  Medicine Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="medicineNameInput"
                  className="form-input"
                  placeholder="Enter medicine name"
                  {...register('medicineName', {
                    required: 'MedicineName is required.',
                  })}
                />
                {errors.medicineName && (
                  <span className="text-red-500">
                    {errors.medicineName.message}
                  </span>
                )}
              </div>

              <div className="col-span-6">
                <label htmlFor="dosageInput" className="form-label">
                  Dosage <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="dosageInput"
                  className="form-input"
                  placeholder="0mg"
                  {...register('dosage', { required: 'Dosage is required.' })}
                />
                {errors.dosage && (
                  <span className="text-red-500">{errors.dosage.message}</span>
                )}
              </div>

              <div className="col-span-6">
                <label htmlFor="frequencyInput" className="form-label">
                  Frequency <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="frequencyInput"
                  className="form-input"
                  placeholder="Enter frequency"
                  {...register('frequency', {
                    required: 'Frequency is required.',
                  })}
                />
                {errors.frequency && (
                  <span className="text-red-500">
                    {errors.frequency.message}
                  </span>
                )}
              </div>

              <div className="col-span-6">
                <label htmlFor="medicineStartDateInput" className="form-label">
                  Start Date <span className="text-red-500">*</span>
                </label>
                <Flatpickr
                  id="medicineStartDateInput"
                  className="form-input"
                  placeholder="enter start date"
                  value={selectedStartDate || undefined}
                  options={{ mode: 'single' }}
                  onChange={(date) => {
                    setSelectedStartDate(date[0])
                    setValue('startDate', formatDate(date[0]))
                    clearErrors('startDate')
                  }}
                />
                <input
                  type="hidden"
                  {...register('startDate', {
                    required: 'Start Date is required.',
                  })}
                />
                {errors.startDate && (
                  <span className="text-red-500">
                    {errors.startDate.message}
                  </span>
                )}
              </div>

              <div className="col-span-6">
                <label htmlFor="medicineEndDateInput" className="form-label">
                  End Date <span className="text-red-500">*</span>
                </label>
                <Flatpickr
                  id="medicineEndDateInput"
                  className="form-input"
                  placeholder="enter start end"
                  value={selectedEndDate || undefined}
                  options={{ mode: 'single' }}
                  onChange={(date) => {
                    setSelectedEndDate(date[0])
                    setValue('endDate', formatDate(date[0]))
                    clearErrors('endDate')
                  }}
                />
                <input
                  type="hidden"
                  {...register('endDate', {
                    required: 'End Date is required.',
                  })}
                />
                {errors.endDate && (
                  <span className="text-red-500">{errors.endDate.message}</span>
                )}
              </div>

              <div className="col-span-12">
                <label
                  htmlFor="prescribingDoctorNameInput"
                  className="form-label">
                  Prescribing Doctor <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="prescribingDoctorNameInput"
                  className="form-input"
                  placeholder="Enter prescribing doctor"
                  {...register('prescribingDoctor', {
                    required: 'Prescribing Doctor is required.',
                  })}
                />
                {errors.prescribingDoctor && (
                  <span className="text-red-500">
                    {errors.prescribingDoctor.message}
                  </span>
                )}
              </div>

              <div className="col-span-12">
                <label htmlFor="reasonConditionInput" className="form-label">
                  Reason/Condition <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="reasonConditionInput"
                  className="form-input"
                  placeholder="Reason/Condition"
                  {...register('reasonCondition', {
                    required: 'ReasonCondition is required.',
                  })}
                />
                {errors.reasonCondition && (
                  <span className="text-red-500">
                    {errors.reasonCondition.message}
                  </span>
                )}
              </div>

              <div className="col-span-12">
                <label htmlFor="textareaInput2" className="form-label">
                  Notes
                </label>
                <textarea
                  id="textareaInput2"
                  rows={2}
                  className="h-auto form-input"
                  placeholder="Enter notes"
                  {...register('notes', { required: 'Notes is required.' })}
                />
                {errors.notes && (
                  <span className="text-red-500">{errors.notes.message}</span>
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
                    {editMode ? 'Edit Medicine' : 'Add Medicine'}
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

export default AddEditMedicine
