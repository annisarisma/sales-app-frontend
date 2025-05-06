import React, { useCallback, useEffect, useState } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import { countryCode } from '@src/data'
import {
  addUserData,
} from '@src/slices/masterData/users/thunk'
import Flatpickr from 'react-flatpickr'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'

const roleItems = [
  { label: 'Admin', value: 'Admin' },
  { label: 'Superadmin', value: 'Superadmin' },
]

const categoryItems = [
  { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' },
]

const UserCreate = () => {
  const { editMode, currentPatients, patients } = useSelector(
    (state) => state.Patients
  )

  const dispatch = useDispatch()

  const navigate = useNavigate()

  useEffect(() => {
    document.title =
      'Create User | Domiex - React JS Admin & Dashboard Template'
  }, [])

  useEffect(() => {
    if (!patients) {
      dispatch(getPatientsData())
    }
  }, [patients, dispatch])

  const [selectedDialCode, setSelectedDialCode] = useState(
    countryCode[0].dial_code
  )
  const [selectedFormat, setSelectedFormat] = useState(countryCode[0].format)

  //Emergency Number
  const [selectedEmergencyCode, setSelectedEmergencyCode] = useState(
    countryCode[0].dial_code
  )
  const [selectedFormat2, setSelectedFormat2] = useState(countryCode[0].format)

  const handleEmergencyCodeChange = (event) => {
    const selectedCountry = countryCode.find(
      (country) => country.dial_code === event.target.value
    )

    if (selectedCountry) {
      setSelectedEmergencyCode(selectedCountry.dial_code)
      setSelectedFormat2(selectedCountry.format)
    } else {
      setSelectedEmergencyCode('')
      setSelectedFormat2('')
    }
  }

  const [selectedDate, setSelectedDate] = useState(undefined)
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    clearErrors,
    control,
    formState: { errors },
  } = useForm()

  const handleCountryChange = (selectedOption) => {
    setSelectedDialCode(selectedOption.value)
    setSelectedFormat(selectedOption.format)
  }

  const resetForm = useCallback(() => {
    reset({
      _id: patients && patients.length > 0 ? patients.length + 1 : 1,
      username: '',
      email: '',
      role: '',
    })
    clearErrors()
  }, [reset, clearErrors, patients])

  const formatDate = (date) => {
    const options = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }
    return date.toLocaleDateString('en-GB', options).replace(',', '')
  }

  const submitForm = (data) => {
    if (editMode && currentPatients) {
      const updatedPatients = { ...data, _id: currentPatients._id }
      dispatch(editPatientsData(updatedPatients))
      navigate('/master-data/user')
    } else {
      const newUser = { ...data, _id: patients.length + 1 }
      dispatch(addUserData(newUser))
      navigate('/master-data/user')
      resetForm()
      clearErrors()
    }
  }

  useEffect(() => {
    if (editMode && currentPatients) {
      setValue('date', formatDate(new Date(currentPatients.date)))
      setValue('first_name', currentPatients.first_name)
      setValue('last_name', currentPatients.last_name)
      setValue('middle_name', currentPatients.middle_name)
      setValue('age', currentPatients.age)
      setValue('weight', currentPatients.weight)
      setValue('height', currentPatients.height)
      setValue('blood_group', currentPatients.blood_group)
      setValue('occupation', currentPatients.occupation)
      setValue('city', currentPatients.city)
      setValue('stateName', currentPatients.stateName)
      setValue('countryName', currentPatients.countryName)
      setValue('zipCode', currentPatients.zipCode)
      setValue('familyDoctor', currentPatients.familyDoctor)
      setValue('referringDoctor', currentPatients.referringDoctor)
      setValue('pharmacyName', currentPatients.pharmacyName)
      setValue('email', currentPatients.email)
      setValue('phoneNumber', currentPatients.phoneNumber)
      setValue('emergencyNumber', currentPatients.emergencyNumber)
      setValue('insurance', currentPatients.insurance)
      setValue('location', currentPatients.location)
      setValue('treatmentType', currentPatients.treatmentType)
      setValue('doctorName', currentPatients.doctorName)
      setValue('role', currentPatients.role)
      setValue('image', currentPatients.image)
      setSelectedDate(new Date(currentPatients.date))
      setValue('role', currentPatients.role)
    } else {
      resetForm()
      clearErrors()
    }
  }, [resetForm, currentPatients, editMode, setValue, clearErrors])

  useEffect(() => {
    const handleBeforeUnload = () => {
      resetForm()
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [resetForm])

  return (
    <React.Fragment>
      <BreadCrumb title="Create User" subTitle="Master Data" />
        <div className="card">
          <div className="card-header">
            <h6 className="card-title">User Account</h6>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(submitForm)}>
              <div className="grid grid-cols-12 gap-space">
                <div className="col-span-12 md:col-span-6 xl:col-span-6">
                  <label htmlFor="username" className="form-label">
                    Username <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="form-input"
                    placeholder="Enter your username"
                    pattern="[A-Za-z ]+"
                    title="Only letters and spaces allowed"
                    {...register('username', {
                      required: 'Username is required.',
                    })}
                  />
                  {errors.username && (
                    <span className="text-red-500">{errors.username.message}</span>
                  )}
                </div>
                <div className="col-span-12 md:col-span-6 xl:col-span-6">
                  <label htmlFor="emailInput" className="form-label">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="emailInput"
                    className="form-input"
                    placeholder="example@example.com"
                    {...register('email', { required: 'Email is required.' })}
                  />
                  {errors.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                  )}
                </div>

                {/* Role */}
                <div className="col-span-12 md:col-span-6 xl:col-span-6">
                  <label htmlFor="roleSelect" className="form-label">
                    Role <span className="text-red-500">*</span>
                  </label>
                  <div id="roleSelect">
                    <Controller
                      name="rol_id"
                      control={control}
                      rules={{ required: 'Role is required' }} // Validation rule
                      render={({ field: { onChange, value } }) => (
                        <Select
                          classNamePrefix="select"
                          options={roleItems}
                          value={roleItems.find(
                            (option) => option.value === value
                          )}
                          onChange={(selectedOption) =>
                            onChange(selectedOption?.value)
                          }
                          placeholder="Select Gender"
                          id="roleSelect"
                        />
                      )}
                    />
                    {errors.role && (
                      <span className="text-red-500">{errors.role.message}</span>
                    )}
                  </div>
                </div>

                <div className="col-span-12 md:col-span-6 xl:col-span-6">
                  <label htmlFor="password" className="form-label">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="password"
                    className="form-input"
                    placeholder="Enter your password"
                    pattern="[A-Za-z ]+"
                    title="Only letters and spaces allowed"
                    {...register('password', {
                      required: 'Password is required.',
                    })}
                  />
                  {errors.password && (
                    <span className="text-red-500">{errors.password.message}</span>
                  )}
                </div>

                <div className="col-span-12">
                  <div className="flex items-center justify-end gap-2">
                    <button type="submit" className="btn btn-primary">
                      Submit Now
                    </button>
                    <button type="reset" className="btn btn-sub-gray">
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
    </React.Fragment>
  )
}

export default UserCreate
