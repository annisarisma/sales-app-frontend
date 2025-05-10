import React, { useCallback, useEffect, useState } from 'react'
import BreadCrumb from '@src/components/Common/BreadCrumb'
import { countryCode } from '@src/data'
import {
  createRole,
  updateRole,
  setEditMode,
} from '@src/slices/masterData/roles/thunk'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'


const RoleCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { roleById, editMode, roleList } = useSelector((state) => state.RoleList)

  const {
    handleSubmit,
    reset,


    register,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm()

  const resetForm = useCallback(() => {
    reset({
      role_code: '',
      role_name: '',
      role_description: '',
    })
    clearErrors()
  }, [reset, clearErrors, roleList])

  // function submit
  const submitForm = (data) => {
    const formData = new FormData();
    formData.append('role_code', data.role_code);
    formData.append('role_name', data.role_name);
    formData.append('role_description', data.role_description);
    
    if (editMode && roleById) {
      formData.append('rolId', roleById.rol_id);
      dispatch(updateRole(formData))
      navigate('/master-data/role')
    } else {
      dispatch(createRole(formData))
      navigate('/master-data/role')
      resetForm()
      clearErrors()
    }
  }

  // set title
  useEffect(() => {
    document.title =
      'Create Role | Sales Application'
  }, [])

  // set edit mode
  useEffect(() => {
    setEditMode(editMode)
  }, [editMode])

  // set value
  useEffect(() => {
    if (roleById && editMode) {
      setValue('role_code', roleById.role_code)
      setValue('role_name', roleById.role_name)
      setValue('role_description', roleById.role_description)
    } else {
      resetForm()
      clearErrors()
    }
  }, [resetForm, roleById, setValue, clearErrors])

  // 
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
            <form onSubmit={handleSubmit(submitForm)} encType="multipart/form-data">
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
