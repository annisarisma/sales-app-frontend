import React, { useEffect, useState } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import Flatpickr from 'react-flatpickr'
import { useForm } from 'react-hook-form'
import Select from 'react-select'

const doctors = [
  { label: 'Dr. Michael Johnson', value: 'Dr. Michael Johnson' },
  { label: 'Dr. Sarah Evans', value: 'Dr. Sarah Evans' },
  { label: 'Dr. Emily Carter', value: 'Dr. Emily Carter' },
  { label: 'Dr. Robert Harris', value: 'Dr. Robert Harris' },
]

const AppointmentsBook = () => {
  const [categoryList, setCategoryList] = useState(null)
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [formErrors, setFormErrors] = useState({})

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    document.title = 'Book | Domiex - React JS Admin & Dashboard Template'
  }, [])

  const handleEventTypeChange = (selected) => {
    setCategoryList(selected)
    setValue('doctor', selected ? selected.value : '')
  }

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value)
    // Clear end time error if it exists and a valid start time is selected
    if (formErrors.endTime && event.target.value) {
      const newErrors = { ...formErrors }
      delete newErrors.endTime
      setFormErrors(newErrors)
    }
  }

  const handleEndTimeChange = (event) => {
    const selectedEndTime = event.target.value
    setEndTime(selectedEndTime)

    // Validate that end time is after start time
    if (startTime && selectedEndTime) {
      const startHour = parseInt(startTime.split(':')[0])
      const startMinutes = parseInt(startTime.split(':')[1].split(' ')[0])
      const startPeriod = startTime.split(' ')[1]

      const endHour = parseInt(selectedEndTime.split(':')[0])
      const endMinutes = parseInt(selectedEndTime.split(':')[1].split(' ')[0])
      const endPeriod = selectedEndTime.split(' ')[1]

      let startTotalMinutes =
        (startHour === 12 ? 0 : startHour) * 60 + startMinutes
      if (startPeriod === 'PM') startTotalMinutes += 12 * 60

      let endTotalMinutes = (endHour === 12 ? 0 : endHour) * 60 + endMinutes
      if (endPeriod === 'PM') endTotalMinutes += 12 * 60

      if (endTotalMinutes <= startTotalMinutes) {
        setFormErrors({
          ...formErrors,
          endTime: 'End time must be after start time',
        })
      } else {
        const newErrors = { ...formErrors }
        delete newErrors.endTime
        setFormErrors(newErrors)
      }
    }
  }

  const onSubmit = (data) => {
    // Validate required fields
    const newErrors = {}

    if (!startTime) {
      newErrors.startTime = 'Please select a start time'
    }

    if (!endTime) {
      newErrors.endTime = 'Please select an end time'
    }

    if (!categoryList) {
      newErrors.doctor = 'Please select a doctor'
    }

    if (Object.keys(newErrors).length > 0) {
      setFormErrors(newErrors)
      return
    }

    // Here you would typically send the data to your backend API
  }

  const getTimeValue = (id) => {
    const label = document.querySelector(`label[for="${id}"]`)
    return label ? label.textContent.trim() : ''
  }

  return (
    <React.Fragment>
      <BreadCrumb title="Book" subTitle="Appointments" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 xl:col-span-8 2xl:col-span-9 card">
          <div className="card-header">
            <h6 className="card-title">Appointment Book</h6>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-12 gap-space">
                <div className="col-span-12">
                  <label htmlFor="patientNameInput" className="form-label">
                    Patient Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="patientNameInput"
                    className={`form-input ${errors.patientName ? 'border-red-500' : ''}`}
                    placeholder="Enter your patient name"
                    {...register('patientName', {
                      required: 'Patient name is required',
                      minLength: {
                        value: 2,
                        message: 'Name must be at least 2 characters',
                      },
                      maxLength: {
                        value: 50,
                        message: 'Name cannot exceed 50 characters',
                      },
                    })}
                  />
                  {errors.patientName && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.patientName.message}
                    </p>
                  )}
                </div>
                <div className="col-span-12 sm:col-span-6 xl:col-span-4">
                  <label htmlFor="emailInput" className="form-label">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="emailInput"
                    className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="Enter your email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="col-span-12 sm:col-span-6 xl:col-span-4">
                  <label htmlFor="phoneNumberInput" className="form-label">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumberInput"
                    className={`form-input ${errors.phoneNumber ? 'border-red-500' : ''}`}
                    placeholder="(00) 000 00 0000"
                    {...register('phoneNumber', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[0-9()\-\s+]{10,15}$/,
                        message: 'Please enter a valid phone number',
                      },
                    })}
                  />
                  {errors.phoneNumber && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
                <div className="col-span-12 sm:col-span-6 xl:col-span-4">
                  <label htmlFor="selectDateInput" className="form-label">
                    Select Date <span className="text-red-500">*</span>
                  </label>

                  <Flatpickr
                    id="dateOfBirthInput"
                    className="form-input"
                    placeholder="Select date"
                    options={{
                      mode: 'single',
                    }}
                  />
                  {errors.date && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.date.message}
                    </p>
                  )}
                </div>
                <div className="col-span-12">
                  <label className="form-label">
                    Start Time <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2 md:gap-5">
                    {Array.from({ length: 19 }, (_, i) => i + 1).map((id) => (
                      <div key={`start-${id}`} className="input-radio-group">
                        <input
                          id={`timeRadio${id}`}
                          className="hidden input-radio peer"
                          name="startTime"
                          type="radio"
                          disabled={id === 3 || id === 13}
                          value={getTimeValue(`timeRadio${id}`)}
                          onChange={handleStartTimeChange}
                        />
                        <label
                          htmlFor={`timeRadio${id}`}
                          className="px-3 py-1.5 border border-gray-200 rounded-md inline-block input-radio-label dark:border-dark-800 peer-checked:border-primary-500 dark:peer-checked:border-primary-500 peer-disabled:bg-gray-100 dark:peer-disabled:bg-dark-850 peer-disabled:text-gray-500 dark:peer-disabled:text-dark-500">
                          {id === 1 && '09:00 AM'}
                          {id === 2 && '09:30 AM'}
                          {id === 3 && '10:00 AM'}
                          {id === 4 && '10:30 AM'}
                          {id === 5 && '11:00 AM'}
                          {id === 6 && '11:30 AM'}
                          {id === 7 && '12:00 PM'}
                          {id === 8 && '12:30 PM'}
                          {id === 9 && '01:00 PM'}
                          {id === 10 && '01:30 PM'}
                          {id === 11 && '02:00 PM'}
                          {id === 12 && '02:30 PM'}
                          {id === 13 && '03:00 PM'}
                          {id === 14 && '03:30 PM'}
                          {id === 15 && '04:00 PM'}
                          {id === 16 && '04:30 PM'}
                          {id === 17 && '05:00 PM'}
                          {id === 18 && '05:30 PM'}
                          {id === 19 && '06:00 PM'}
                        </label>
                      </div>
                    ))}
                  </div>
                  {formErrors.startTime && (
                    <p className="mt-1 text-sm text-red-500">
                      {formErrors.startTime}
                    </p>
                  )}
                </div>
                <div className="col-span-12">
                  <label className="form-label">
                    End Time <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2 md:gap-5">
                    {Array.from({ length: 19 }, (_, i) => i + 1).map((id) => (
                      <div key={`end-${id}`} className="input-radio-group">
                        <input
                          id={`dateRadio${id}`}
                          className="hidden input-radio peer"
                          name="endTime"
                          type="radio"
                          disabled={id === 4 || id === 13}
                          value={getTimeValue(`dateRadio${id}`)}
                          onChange={handleEndTimeChange}
                        />
                        <label
                          htmlFor={`dateRadio${id}`}
                          className="px-3 py-1.5 border border-gray-200 rounded-md inline-block input-radio-label dark:border-dark-800 peer-checked:border-primary-500 dark:peer-checked:border-primary-500 peer-disabled:bg-gray-100 dark:peer-disabled:bg-dark-850 peer-disabled:text-gray-500 dark:peer-disabled:text-dark-500">
                          {id === 1 && '09:00 AM'}
                          {id === 2 && '09:30 AM'}
                          {id === 3 && '10:00 AM'}
                          {id === 4 && '10:30 AM'}
                          {id === 5 && '11:00 AM'}
                          {id === 6 && '11:30 AM'}
                          {id === 7 && '12:00 PM'}
                          {id === 8 && '12:30 PM'}
                          {id === 9 && '01:00 PM'}
                          {id === 10 && '01:30 PM'}
                          {id === 11 && '02:00 PM'}
                          {id === 12 && '02:30 PM'}
                          {id === 13 && '03:00 PM'}
                          {id === 14 && '03:30 PM'}
                          {id === 15 && '04:00 PM'}
                          {id === 16 && '04:30 PM'}
                          {id === 17 && '05:00 PM'}
                          {id === 18 && '05:30 PM'}
                          {id === 19 && '06:00 PM'}
                        </label>
                      </div>
                    ))}
                  </div>
                  {formErrors.endTime && (
                    <p className="mt-1 text-sm text-red-500">
                      {formErrors.endTime}
                    </p>
                  )}
                </div>
                <div className="col-span-12">
                  <label htmlFor="doctorSelect" className="form-label">
                    Doctor Name <span className="text-red-500">*</span>
                  </label>
                  <Select
                    classNamePrefix="select"
                    options={doctors}
                    onChange={handleEventTypeChange}
                    value={categoryList}
                    placeholder="Select doctor"
                    className={
                      formErrors.doctor ? 'border-red-500 rounded-md' : ''
                    }
                  />
                  {formErrors.doctor && (
                    <p className="mt-1 text-sm text-red-500">
                      {formErrors.doctor}
                    </p>
                  )}
                </div>
                <div className="col-span-12">
                  <label htmlFor="treatmentInput" className="form-label">
                    Treatment Details
                  </label>
                  <textarea
                    name="treatmentInput"
                    id="treatmentInput"
                    className={`h-auto form-input ${errors.treatment ? 'border-red-500' : ''}`}
                    rows={3}
                    placeholder="Describe the reason for your visit"
                    {...register('treatment', {
                      maxLength: {
                        value: 500,
                        message:
                          'Treatment details cannot exceed 500 characters',
                      },
                    })}></textarea>
                  {errors.treatment && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.treatment.message}
                    </p>
                  )}
                </div>
                <div className="col-span-12">
                  <div className="flex flex-wrap items-center justify-end gap-2">
                    <button
                      type="reset"
                      className="btn btn-sub-gray"
                      onClick={() => {
                        setStartTime('')
                        setEndTime('')
                        setCategoryList(null)
                        setFormErrors({})
                      }}>
                      Reset
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-span-12 xl:col-span-4 2xl:col-span-3">
          <div className="bg-green-100 !border-green-500/20 dark:bg-green-500/15 card">
            <div className="card-body">
              <h6 className="mb-3">Hospital Hours</h6>
              <p className="mb-2 text-gray-500 dark:text-dark-400">
                Monday - Friday 09:00AM - 06:00PM
              </p>
              <p className="mb-4 text-gray-500 dark:text-dark-400">
                Saturday 09:00AM - 03:00PM
              </p>
              <h6 className="mb-3">Sunday Closed</h6>
              <p className="text-red-500">
                * Every 2nd, 4th Saturday and all govt holidays are closed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AppointmentsBook
