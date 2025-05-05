import React, { useCallback, useEffect, useState } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import { countryCode } from '@src/data'
import {
  addPatientsData,
  editPatientsData,
  getPatientsData,
} from '@src/slices/thunk'
import Flatpickr from 'react-flatpickr'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'

const categoryItems = [
  { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' },
]

const PatientsCreate = () => {
  const { editMode, currentPatients, patients } = useSelector(
    (state) => state.Patients
  )

  const dispatch = useDispatch()

  const navigate = useNavigate()

  useEffect(() => {
    document.title =
      'Create Patient | Domiex - React JS Admin & Dashboard Template'
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
      image: 'https://images.kcubeinfotech.com/domiex/images/avatar/user-2.png',
      date: '',
      first_name: '',
      last_name: '',
      middle_name: '',
      age: '',
      weight: '',
      height: '',
      blood_group: '',
      occupation: '',
      city: '',
      stateName: '',
      countryName: '',
      zipCode: '',
      familyDoctor: '',
      referringDoctor: '',
      pharmacyName: '',
      email: '',
      phoneNumber: '',
      emergencyNumber: '',
      insurance: '',
      location: '',
      treatmentType: '',
      doctorName: '',
      gender: '',
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
      navigate('/apps/hospital/patients-lists')
    } else {
      const newPatients = { ...data, _id: patients.length + 1 }
      dispatch(addPatientsData(newPatients))
      navigate('/apps/hospital/patients-lists')
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
      setValue('gender', currentPatients.gender)
      setValue('image', currentPatients.image)
      setSelectedDate(new Date(currentPatients.date))
      setValue('gender', currentPatients.gender)
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
      <BreadCrumb title="Create Patient" subTitle="Patients" />
      <div className="card">
        <div className="card-header">
          <h6 className="card-title">Patient Personal Details</h6>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="grid grid-cols-12 gap-space">
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <label htmlFor="firstNameInput" className="form-label">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstNameInput"
                  className="form-input"
                  placeholder="Enter your first name"
                  pattern="[A-Za-z ]+"
                  title="Only letters and spaces allowed"
                  {...register('first_name', {
                    required: 'First Name is required.',
                  })}
                />
                {errors.first_name && (
                  <span className="text-red-500">
                    {errors.first_name.message}
                  </span>
                )}
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <label htmlFor="middleNameInput" className="form-label">
                  Middle Name
                </label>
                <input
                  type="text"
                  id="middleNameInput"
                  className="form-input"
                  placeholder="Enter your middle name"
                  pattern="[A-Za-z ]+"
                  title="Only letters and spaces allowed"
                  {...register('middle_name', {
                    required: 'Middle Name is required.',
                  })}
                />
                {errors.middle_name && (
                  <span className="text-red-500">
                    {errors.middle_name.message}
                  </span>
                )}
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <label htmlFor="lastNameInput" className="form-label">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastNameInput"
                  className="form-input"
                  placeholder="Enter your last name"
                  pattern="[A-Za-z ]+"
                  title="Only letters and spaces allowed"
                  {...register('last_name', {
                    required: 'Last Name is required.',
                  })}
                />
                {errors.last_name && (
                  <span className="text-red-500">
                    {errors.last_name.message}
                  </span>
                )}
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <label htmlFor="dateOfBirthInput" className="form-label">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <Flatpickr
                  id="dateOfBirthInput"
                  className="form-input"
                  placeholder="Select date"
                  value={selectedDate || undefined}
                  options={{
                    mode: 'single',
                  }}
                  onChange={(date) => {
                    const formattedDate = formatDate(date[0])
                    setSelectedDate(date[0])
                    setValue('date', formattedDate)
                    clearErrors('date')
                  }}
                />
                <input
                  type="hidden"
                  {...register('date', {
                    required: 'Date of Birth is required.',
                  })}
                />
                {errors.date && (
                  <span className="text-red-500">{errors.date.message}</span>
                )}
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <label htmlFor="ageInput" className="form-label">
                  Age <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="ageInput"
                  minLength={1}
                  maxLength={100}
                  className="form-input"
                  placeholder="0"
                  {...register('age', { required: 'Age is required.' })}
                />
                {errors.age && (
                  <span className="text-red-500">{errors.age.message}</span>
                )}
              </div>

              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <label htmlFor="genderSelect" className="form-label">
                  Gender <span className="text-red-500">*</span>
                </label>
                <div id="genderSelect">
                  <Controller
                    name="gender"
                    control={control}
                    rules={{ required: 'Gender is required' }} // Validation rule
                    render={({ field: { onChange, value } }) => (
                      <Select
                        classNamePrefix="select"
                        options={categoryItems}
                        value={categoryItems.find(
                          (option) => option.value === value
                        )}
                        onChange={(selectedOption) =>
                          onChange(selectedOption?.value)
                        }
                        placeholder="Select Gender"
                        id="genderSelect"
                      />
                    )}
                  />
                  {errors.gender && (
                    <span className="text-red-500">
                      {errors.gender.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <label htmlFor="weightInput" className="form-label">
                  Weight (KG) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="weightInput"
                  className="form-input"
                  placeholder="0 kg"
                  {...register('weight', { required: 'weight is required.' })}
                />
                {errors.weight && (
                  <span className="text-red-500">{errors.weight.message}</span>
                )}
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <label htmlFor="heightInput" className="form-label">
                  Height <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="heightInput"
                  className="form-input"
                  placeholder="0' 0'"
                  {...register('height', { required: 'height is required.' })}
                />
                {errors.height && (
                  <span className="text-red-500">{errors.height.message}</span>
                )}
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <label htmlFor="bloodPressureInput" className="form-label">
                  Blood Pressure <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="bloodPressureInput"
                  className="form-input"
                  placeholder="Blood pressure"
                  {...register('blood_group', {
                    required: 'Blood group is required.',
                  })}
                />
                {errors.blood_group && (
                  <span className="text-red-500">
                    {errors.blood_group.message}
                  </span>
                )}
              </div>

              <div className="col-span-12 md:col-span-6">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="flex form-input">
                  <select
                    id="phoneNumber"
                    className="bg-transparent outline-hidden cursor-pointer dark:bg-dark-900 ltr:pl-3 rtl:pr-3"
                    value={selectedDialCode}
                    onChange={handleCountryChange}>
                    {countryCode.map((country) => (
                      <option key={country.code} value={country.dial_code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    className="w-full p-3 bg-transparent border-gray-200 outline-hidden ltr:ml-3 rtl:mr-3 ltr:border-l-2 dark:border-dark-800 rtl:border-r-2"
                    placeholder={selectedFormat}
                    {...register('phoneNumber', {
                      required: 'phoneNumber is required.',
                    })}
                  />
                </div>
                {errors.phoneNumber && (
                  <span className="text-red-500">
                    {errors.phoneNumber.message}
                  </span>
                )}
              </div>
              <div className="col-span-12 md:col-span-6">
                <label htmlFor="emergencyNumber" className="form-label">
                  Emergency Number <span className="text-red-500">*</span>
                </label>
                <div className="flex form-input">
                  <select
                    id="emergencyNumber"
                    className="bg-transparent outline-hidden cursor-pointer dark:bg-dark-900 ltr:pl-3 rtl:pr-3"
                    value={selectedEmergencyCode}
                    onChange={handleEmergencyCodeChange}>
                    {countryCode.map((country) => (
                      <option key={country.code} value={country.dial_code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    className="w-full p-3 bg-transparent border-gray-200 outline-hidden ltr:ml-3 rtl:mr-3 ltr:border-l-2 dark:border-dark-800 rtl:border-r-2"
                    placeholder={selectedFormat2}
                    {...register('emergencyNumber', {
                      required: 'emergency Number is required.',
                    })}
                  />
                </div>
                {errors.emergencyNumber && (
                  <span className="text-red-500">
                    {errors.emergencyNumber.message}
                  </span>
                )}
              </div>

              <div className="col-span-12 md:col-span-6 xl:col-span-4">
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
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <label htmlFor="occupationInput" className="form-label">
                  Occupation <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="occupationInput"
                  className="form-input"
                  placeholder="Enter your occupation"
                  pattern="[A-Za-z ]+"
                  title="Only letters and spaces allowed"
                  {...register('occupation', {
                    required: 'Occupation is required.',
                  })}
                />
                {errors.occupation && (
                  <span className="text-red-500">
                    {errors.occupation.message}
                  </span>
                )}
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <label htmlFor="cityInput" className="form-label">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="cityInput"
                  className="form-input"
                  placeholder="Enter city name"
                  pattern="[A-Za-z ]+"
                  title="Only letters and spaces allowed"
                  {...register('city', { required: 'City is required.' })}
                />
                {errors.city && (
                  <span className="text-red-500">{errors.city.message}</span>
                )}
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <label htmlFor="stateInput" className="form-label">
                  State Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="stateInput"
                  className="form-input"
                  placeholder="Enter state name"
                  pattern="[A-Za-z ]+"
                  title="Only letters and spaces allowed"
                  {...register('stateName', {
                    required: 'State Name is required.',
                  })}
                />
                {errors.stateName && (
                  <span className="text-red-500">
                    {errors.stateName.message}
                  </span>
                )}
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <label htmlFor="countryInput" className="form-label">
                  Country Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="countryInput"
                  className="form-input"
                  placeholder="Enter country name"
                  pattern="[A-Za-z ]+"
                  title="Only letters and spaces allowed"
                  {...register('countryName', {
                    required: 'Country Name is required.',
                  })}
                />
                {errors.countryName && (
                  <span className="text-red-500">
                    {errors.countryName.message}
                  </span>
                )}
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <label htmlFor="zipCode" className="form-label">
                  Zip Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="zipCode"
                  className="form-input"
                  placeholder="000 000"
                  {...register('zipCode', { required: 'zipCode is required.' })}
                />
                {errors.zipCode && (
                  <span className="text-red-500">{errors.zipCode.message}</span>
                )}
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-3">
                <label htmlFor="familyDoctorName" className="form-label">
                  Family Doctor
                </label>
                <input
                  type="text"
                  id="familyDoctorName"
                  className="form-input"
                  placeholder="Enter doctor name"
                  title="Only letters and spaces allowed"
                  {...register('familyDoctor', {
                    required: 'Family Doctor is required.',
                  })}
                />
                {errors.familyDoctor && (
                  <span className="text-red-500">
                    {errors.familyDoctor.message}
                  </span>
                )}
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-3">
                <label htmlFor="referringDoctorName" className="form-label">
                  Referring Doctor
                </label>
                <input
                  type="text"
                  id="referringDoctorName"
                  className="form-input"
                  placeholder="Referring doctor"
                  title="Only letters and spaces allowed"
                  {...register('referringDoctor', {
                    required: 'Referring Doctor is required.',
                  })}
                />
                {errors.referringDoctor && (
                  <span className="text-red-500">
                    {errors.referringDoctor.message}
                  </span>
                )}
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-3">
                <label htmlFor="assignedDoctorName" className="form-label">
                  Assigned Doctor
                </label>
                <input
                  type="text"
                  id="assignedDoctorName"
                  className="form-input"
                  placeholder="Assigned doctor"
                  title="Only letters and spaces allowed"
                  {...register('doctorName', {
                    required: 'Doctor Name is required.',
                  })}
                />
                {errors.doctorName && (
                  <span className="text-red-500">
                    {errors.doctorName.message}
                  </span>
                )}
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-3">
                <label htmlFor="pharmacyDoctorName" className="form-label">
                  Pharmacy Name
                </label>
                <input
                  type="text"
                  id="pharmacyDoctorName"
                  className="form-input"
                  placeholder="Pharmacy Name"
                  title="Only letters and spaces allowed"
                  {...register('pharmacyName', {
                    required: 'Pharmacy Name is required.',
                  })}
                />
                {errors.pharmacyName && (
                  <span className="text-red-500">
                    {errors.pharmacyName.message}
                  </span>
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

      <div className="card">
        <div className="card-header">
          <h6 className="card-title">Insurance Information</h6>
        </div>
        <div className="card-body">
          <form>
            <div className="grid grid-cols-12 gap-space">
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <label htmlFor="insuranceProviderInput" className="form-label">
                  Insurance Provider<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="insuranceProviderInput"
                  className="form-input"
                  placeholder="Insurance provider"
                  pattern="[A-Za-z ]+"
                  title="Only letters and spaces allowed"
                  required
                />
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <label htmlFor="policyNumberInput" className="form-label">
                  Policy Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="policyNumberInput"
                  className="form-input"
                  placeholder="000 0000 0000 0000 000"
                  pattern="^[A-Za-z0-9]+$"
                  title="Policy number can only contain letters and numbers"
                  required
                />
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <label htmlFor="startDateInput" className="form-label">
                  Start Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="startDateInput"
                  className="form-input"
                  placeholder="Select Date"
                />
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <label htmlFor="effectiveDateInput" className="form-label">
                  Effective Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="effectiveDateInput"
                  className="form-input"
                  placeholder="Select Date"
                />
              </div>
              <div className="col-span-12">
                <div className="flex items-center justify-end gap-2">
                  <button className="btn btn-primary">Save Now</button>
                  <button
                    type="reset"
                    className="btn btn-sub-gray"
                    onClick={resetForm}>
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

export default PatientsCreate
