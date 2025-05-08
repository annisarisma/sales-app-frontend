import React, { useCallback, useEffect, useMemo, useState } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'
import { countryCode } from '@src/data'
import {
  addUserData,
  updateUser,
  getUserById,
} from '@src/slices/masterData/users/thunk'
import {
  getRole,
} from '@src/slices/masterData/roles/thunk'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Select from 'react-select'

const UserCreate = () => {
  const { userList, userById } = useSelector((state) => state.UserList)
  const { roleList } = useSelector((state) => state.RoleList)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [allUserList, setAllUserList] = useState(null);
  const [allRoleList, setAllRoleList] = useState([]);

  console.log('user list ini: ', userList);

  useEffect(() => {
    console.log('ini role state: ', roleList);
    if (!roleList) {
      dispatch(getRole());
    } else {
      setAllRoleList(roleList)
    }
  }, [roleList, dispatch]);

  const roleItems = useMemo(() => {
    console.log('ini isi rol item: ', allRoleList)
    return allRoleList?.map(role => ({
      label: role.role_name,
      value: role.rol_id
    })) || [];
  }, [allRoleList]);
  

  useEffect(() => {
    document.title =
      'Create User | Domiex - React JS Admin & Dashboard Template'
  }, [])

  useEffect(() => {
    if (!userById) {
      dispatch(getUserById(id));
    } else {
      setAllUserList(userById);
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

  const submitForm = (data) => {
    if (id && allUserList) {
      console.log('masuk edit');
      const updatedRequest = { ...data, _id: allUserList.usr_id }
      // thunk process
      console.log('masuk edit data: ', updatedRequest);
      dispatch(updateUser(updatedRequest))
      navigate('/master-data/user')
    } else {
      console.log('user list: ', userList);
      console.log('masuk add');
      const createdResponse = { ...data, usrId: userList.length + 1 }
      dispatch(addUserData(createdResponse))
      navigate('/master-data/user')
      resetForm()
      clearErrors()
    }
  }

  useEffect(() => {
    if (allUserList) {
      setValue('username', allUserList.username)
      setValue('email', allUserList.email)
      setValue('rol_id', allUserList.rol_id)
    } else {
      resetForm()
      clearErrors()
    }
  }, [resetForm, allUserList, id, setValue, clearErrors])

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

                {!allUserList && (
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
                )}

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
