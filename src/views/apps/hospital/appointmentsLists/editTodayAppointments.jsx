import React, { useEffect, useState } from 'react'

import { Modal } from '@src/components/CustomComponents/Modal/Modal'
import {
  addTodayAppointmentsData,
  editTodayAppointmentsData,
} from '@src/slices/thunk'
import { Upload } from 'lucide-react'
import Flatpickr from 'react-flatpickr'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

const EditTodayAppointments = ({
  modalState,
  closeModal,
  eventList,
  editMode = false,
  currentContact = null,
}) => {
  const dispatch = useDispatch()
  const [preview, setPreview] = useState(null)
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    if (editMode && currentContact) {
      Object.keys(currentContact).forEach((key) => {
        setValue(key, currentContact[key])
      })

      setPreview(currentContact.image)
      setValue('startTime', currentContact.startTime)
      setValue('endTime', currentContact.endTime)
    } else {
      reset({
        _id: 0,
        image: '',
        patientName: '',
        treatment: '',
        date: '',
        startTime: '',
        endTime: '',
      })
      setPreview(null)
    }
  }, [editMode, currentContact, setValue, reset])

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

  const submitForm = (data, onClose) => {
    if (editMode && currentContact) {
      const updatedContact = { ...data, image: preview || '' }
      dispatch(editTodayAppointmentsData(updatedContact))
    } else {
      const newContact = {
        ...data,
        _id: eventList.length + 1,
        image: preview || '',
      }
      dispatch(addTodayAppointmentsData(newContact))
    }
    reset()
    onClose()
  }

  return (
    <React.Fragment>
      <Modal
        isOpen={
          editMode
            ? modalState.showEditContactForm
            : modalState.showAddContactForm
        }
        title={editMode ? 'Edit Appointment' : 'Add Appointment'}
        onClose={() =>
          closeModal(editMode ? 'showEditContactForm' : 'showAddContactForm')
        }
        position="modal-center"
        id={editMode ? 'showEditContactForm' : 'showAddContactForm'}
        contentClass="modal-content"
        content={(onClose) => (
          <>
            <form onSubmit={handleSubmit((data) => submitForm(data, onClose))}>
              <div className="grid grid-cols-12 gap-5">
                {/* Image upload and preview */}
                <div className="col-span-12">
                  <div>
                    <label htmlFor="logo">
                      <span className="inline-flex items-center justify-center w-full h-32 overflow-hidden bg-gray-100 border border-gray-200 rounded-md cursor-pointer dark:bg-dark-850 dark:border-dark-800">
                        {preview ? (
                          <img
                            src={preview}
                            alt="Preview"
                            width={92}
                            height={92}
                            className="object-cover h-24"
                          />
                        ) : (
                          <div className="flex flex-col items-center text-gray-500">
                            <Upload />
                            <span className="block mt-3">
                              Upload Your Event Logo
                            </span>
                          </div>
                        )}
                      </span>
                    </label>
                    <input
                      type="file"
                      name="logo"
                      id="logo"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>
                </div>

                {/* Patient Name */}
                <div className="col-span-12">
                  <label htmlFor="nameInput" className="form-label">
                    Patient Name
                  </label>
                  <input
                    type="text"
                    id="nameInput"
                    className="form-input"
                    placeholder="Event name"
                    {...register('patientName', {
                      required: 'Patient name is required.',
                    })}
                  />
                  {errors.patientName && (
                    <span className="text-red-500">
                      {errors.patientName.message}
                    </span>
                  )}
                </div>

                {/* Start Time */}
                <div className="col-span-6">
                  <label htmlFor="startTimeInput" className="form-label">
                    Start Time
                  </label>
                  <Flatpickr
                    className="form-input"
                    placeholder="Select start time"
                    value={currentContact ? currentContact.startTime : ''}
                    options={{
                      enableTime: true,
                      noCalendar: true,
                      dateFormat: 'h:i K',
                      time_24hr: false,
                    }}
                    onChange={(selectedDates) => {
                      const selectedTime = selectedDates[0]?.toLocaleTimeString(
                        [],
                        {
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: true,
                        }
                      )
                      setValue('startTime', selectedTime || '')
                    }}
                  />
                </div>

                {/* End Time */}
                <div className="col-span-6">
                  <label htmlFor="endTimeInput" className="form-label">
                    End Time
                  </label>
                  <Flatpickr
                    className="form-input"
                    placeholder="Select end time"
                    value={currentContact ? currentContact.endTime : ''}
                    options={{
                      enableTime: true,
                      noCalendar: true,
                      dateFormat: 'h:i K',
                      time_24hr: false,
                    }}
                    onChange={(selectedDates) => {
                      const selectedTime = selectedDates[0]?.toLocaleTimeString(
                        [],
                        {
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: true,
                        }
                      )
                      setValue('endTime', selectedTime || '')
                    }}
                  />
                </div>

                {/* Treatment */}
                <div className="col-span-6">
                  <label htmlFor="treatmentInput" className="form-label">
                    Treatment
                  </label>
                  <input
                    type="text"
                    id="treatmentInput"
                    className="form-input"
                    placeholder="Treatment"
                    {...register('treatment', {
                      required: 'Treatment is required.',
                    })}
                  />
                  {errors.treatment && (
                    <span className="text-red-500">
                      {errors.treatment.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-2 mt-5">
                <button
                  type="button"
                  className="btn btn-active-red"
                  onClick={() => onClose()}>
                  Cancel
                </button>
                <button className="btn btn-primary" type="submit">
                  {editMode ? 'Edit Appointment' : 'Add Appointment'}
                </button>
              </div>
            </form>
          </>
        )}
      />
    </React.Fragment>
  )
}

export default EditTodayAppointments
