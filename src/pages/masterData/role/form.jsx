import React, { useCallback, useEffect, useState } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import { countryCode } from '@src/data'
import {
  addUserData,
  updateUser,
  getUserById,
} from '@src/slices/masterData/users/thunk'
import Flatpickr from 'react-flatpickr'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Select from 'react-select'

const roleItems = [
  { label: 'Admin', value: 'Admin' },
  { label: 'Superadmin', value: 'Superadmin' },
]

const categoryItems = [
  { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' },
]

const RoleCreate = () => {
  const { userById, userList } = useSelector((state) => state.UserList)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    document.title =
      'Create Role | Domiex - React JS Admin & Dashboard Template'
  }, [])

  useEffect(() => {
    if (!userById) {
      dispatch(getUserById(id));
    } else {
      setUserData(userById);
    }
  }, [userById, dispatch]);
  

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

  console.log('check id: ', id);

  const [selectedDate, setSelectedDate] = useState(undefined)
  const {
    handleSubmit,



    register,
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
      usrId: userList && userList.length > 0 ? userList.length + 1 : 1,
      username: '',
      email: '',
      role: '',
    })
    clearErrors()
  }, [reset, clearErrors, userList])

  const formatDate = (date) => {
    const options = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }
    return date.toLocaleDateString('en-GB', options).replace(',', '')
  }

  // submit form
  const submitForm = (data) => {
    if (id && userData) {
      const updatedRequest = { ...data, usrId: userData.usr_id }
      dispatch(updateUser(updatedRequest))
      navigate('/master-data/user')
    } else {
      const createdRequest = { ...data, usrId: userList.length + 1 }
      dispatch(addUserData(createdRequest))
      navigate('/master-data/user')
      resetForm()
      clearErrors()
    }
  }

  useEffect(() => {
    if (userData) {
      setValue('username', userData.username)
      setValue('email', userData.email)
      setValue('role', userData.rol_id)
    } else {
      resetForm()
      clearErrors()
    }
  }, [resetForm, userData, id, setValue, clearErrors])

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
      <BreadCrumb title="Create Role" subTitle="Master Data" />
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit(submitForm)}>
              <div className="grid grid-cols-12 gap-space">

                {/* Role Code */}
                <div className="col-span-12 md:col-span-6 xl:col-span-6">
                  <label htmlFor="role_code" className="form-label">
                    Role Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="role_code"
                    className="form-input"
                    placeholder="Enter your role code"
                    pattern="[A-Za-z ]+"
                    title="Only letters and spaces allowed"
                    {...register('role_code', {
                      required: 'Role code is required.',
                    })}
                  />
                  {errors.role_code && (
                    <span className="text-red-500">{errors.role_code.message}</span>
                  )}
                </div>
                
                {/* Role Name */}
                <div className="col-span-12 md:col-span-6 xl:col-span-6">
                  <label htmlFor="role_name" className="form-label">
                    Role Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="role_name"
                    className="form-input"
                    placeholder="Enter your role name"
                    pattern="[A-Za-z ]+"
                    title="Only letters and spaces allowed"
                    {...register('role_name', {
                      required: 'Role name is required.',
                    })}
                  />
                  {errors.role_name && (
                    <span className="text-red-500">{errors.role_name.message}</span>
                  )}
                </div>
                
                {/* Role Description */}
                <div className="col-span-12 md:col-span-6 xl:col-span-12">
                  <label htmlFor="role_description" className="form-label">
                    Role Description <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="role_description"
                    className="form-input"
                    placeholder="Enter your role description"
                    pattern="[A-Za-z ]+"
                    title="Only letters and spaces allowed"
                    {...register('role_description', {
                      required: 'Role description is required.',
                    })}
                  />
                  {errors.role_description && (
                    <span className="text-red-500">{errors.role_description.message}</span>
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

export default RoleCreate
