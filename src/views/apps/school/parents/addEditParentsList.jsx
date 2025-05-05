import React, { useEffect, useState } from 'react'

import { Modal } from '@src/components/CustomComponents/Modal/Modal'
import {
  addParentsListData,
  editParentsListData,
} from '@src/slices/school/parents/thunk'
import { Upload } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Select from 'react-select'

const gender = [
  { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' },
]

const AddEditParentsList = ({
  modalState,
  closeModal,
  parentsList,
  editMode,
  currentParent,
}) => {
  const dispatch = useDispatch()
  const [preview, setPreview] = useState(null)
  const [selectedGender, setSelectedGender] = useState(null)

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
    clearErrors,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  })

  useEffect(() => {
    clearErrors()
    if (editMode && currentParent) {
      Object.keys(currentParent).forEach((key) => {
        setValue(key, currentParent[key])
      })
      setPreview(currentParent.image)

      // Correct gender setting logic
      if (currentParent.gender) {
        const selectedGender = gender.find(
          (item) => item.value === currentParent.gender
        ) // Changed to currentParent.gender
        setSelectedGender(selectedGender || null)
      }
    } else {
      reset({
        _id: '',
        parentsName: '',
        studentName: '',
        image: '',
        relation: '',
        occupation: '',
        gender: '',
        email: '',
        phone: '',
        address: '',
      })
      setSelectedGender(null)
      clearErrors()
    }
  }, [editMode, currentParent, setValue, reset, clearErrors])

  const submitForm = (data, onClose) => {
    clearErrors()
    if (editMode && currentParent) {
      const updatedParentsList = { ...data, image: preview || '' }
      dispatch(editParentsListData(updatedParentsList))
      setPreview(null)
    } else {
      const newParents = {
        ...data,
        _id: parentsList.length + 1,
        image: preview || '',
      }
      dispatch(addParentsListData(newParents))
      setPreview(null)
    }
    reset()
    onClose()
  }

  const handleGenderChange = (selectedOption) => {
    setSelectedGender(selectedOption)
    setValue('gender', selectedOption?.value || '')
  }

  const validatePhoneNumber = (value) => {
    const phoneNumberPattern = /^\d{10}$/ // Only 10 digits
    return (
      phoneNumberPattern.test(value) ||
      'Phone number must be exactly 10 digits.'
    )
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
            ? modalState.showEditParentsForm
            : modalState.showAddParentsForm)
        }
        onClose={() =>
          handleCloseModal(
            editMode ? 'showEditParentsForm' : 'showAddParentsForm'
          )
        }
        position="modal-center"
        id={editMode ? 'showEditParentsForm' : 'showAddParentsForm'}
        contentClass="p-2 modal-content"
        content={(onClose) => (
          <>
            <form onSubmit={handleSubmit((data) => submitForm(data, onClose))}>
              <div className="h-24 p-5 rounded-t ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-primary-200 via-pink-500/20 to-green-500/20"></div>

              <div className="p-4">
                <div className="-mt-16">
                  <label htmlFor="logo">
                    <div className="inline-flex items-center justify-center overflow-hidden bg-gray-100 border-2 border-white rounded-full cursor-pointer dark:border-dark-900 dark:bg-dark-850 size-24">
                      {preview ? (
                        <img
                          src={preview}
                          alt="Profile Image"
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
                        className="block w-full text-sm file:rounded-md focus:outline-0 text-slate-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                      />
                    </label>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-4 mt-space">
                  <div className="col-span-12">
                    <label htmlFor="parentsInput" className="form-label">
                      Parents Name
                    </label>
                    <input
                      type="text"
                      id="parentsInput"
                      className="form-input"
                      placeholder="Parents Name"
                      {...register('parentsName', {
                        required: 'Parents Name is required.',
                      })}
                    />
                    {errors.parentsName && (
                      <span className="text-red-500">
                        {errors.parentsName.message}
                      </span>
                    )}
                  </div>
                  <div className="col-span-12">
                    <label htmlFor="studentNameInput" className="form-label">
                      Student Name
                    </label>
                    <input
                      type="text"
                      id="studentNameInput"
                      className="form-input"
                      placeholder="Student Name"
                      {...register('studentName', {
                        required: 'Student Name is required.',
                      })}
                    />
                    {errors.studentName && (
                      <span className="text-red-500">
                        {errors.studentName.message}
                      </span>
                    )}
                  </div>
                  <div className="col-span-6">
                    <label htmlFor="relationInput" className="form-label">
                      Relation
                    </label>
                    <input
                      type="text"
                      id="relationInput"
                      className="form-input"
                      placeholder="Relation"
                      {...register('relation', {
                        required: 'Relation is required.',
                      })}
                    />
                    {errors.relation && (
                      <span className="text-red-500">
                        {errors.relation.message}
                      </span>
                    )}
                  </div>
                  <div className="col-span-6">
                    <label htmlFor="genderSelect" className="form-label">
                      Gender
                    </label>
                    <Select
                      classNamePrefix="select"
                      id="genderSelect"
                      options={gender}
                      value={selectedGender}
                      onChange={(value) => {
                        handleGenderChange(value)
                        clearErrors('gender')
                      }}
                      placeholder="Select Gender"
                    />
                    <input
                      type="hidden"
                      {...register('gender', {
                        required: 'Gender is required.',
                      })}
                    />
                    {errors.gender && (
                      <span className="text-red-500">
                        {errors.gender.message}
                      </span>
                    )}
                  </div>
                  <div className="col-span-12">
                    <label htmlFor="occupationInput" className="form-label">
                      Occupation
                    </label>
                    <input
                      type="text"
                      id="occupationInput"
                      className="form-input"
                      placeholder="Occupation"
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
                  <div className="col-span-6">
                    <label htmlFor="emailInput" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="emailInput"
                      className="form-input"
                      placeholder="Email"
                      {...register('email', { required: 'Email is required.' })}
                    />
                    {errors.email && (
                      <span className="text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className="col-span-6">
                    <label htmlFor="phonenumberInput" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      id="phonenumberInput"
                      className="form-input"
                      placeholder="Phone Number"
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
                            clearErrors('phone') // Clear error if valid
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
                    <label htmlFor="addressInput" className="form-label">
                      Address
                    </label>
                    <textarea
                      id="addressInput"
                      className="form-input"
                      placeholder="Enter Address"
                      {...register('address', {
                        required: 'Address is required.',
                      })}
                    />
                    {errors.address && (
                      <span className="text-red-500">
                        {errors.address.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-8 text-right">
                  <button
                    type="button"
                    className="ml-2 btn btn-secondary"
                    onClick={() => onClose()}>
                    Cancel
                  </button>
                  <button className="btn btn-primary" type="submit">
                    {editMode ? 'Update Parent' : 'Submit Parent'}
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

export default AddEditParentsList
