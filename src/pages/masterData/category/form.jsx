import React, { useCallback, useEffect, useState } from 'react'
import BreadCrumb from '@src/components/Common/BreadCrumb'
import { countryCode } from '@src/data'
import {
  createCategory,
  updateCategory,
  setEditMode,
} from '@src/slices/masterData/categories/thunk'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'


const CategoryCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categoryById, editMode, categoryList } = useSelector((state) => state.CategoryList)

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
      category_code: '',
      category_name: '',
      category_description: '',
    })
    clearErrors()
  }, [reset, clearErrors, categoryList])

  // function submit
  const submitForm = (data) => {
    console.log('submit information: ', editMode, categoryById)
    if (editMode && categoryById) {
      const updatedRequest = { ...data, _id: categoryById.cat_id }
      dispatch(updateCategory(updatedRequest))
      navigate('/master-data/category')
    } else {
      const createdRequest = { ...data, rolId: categoryList.length + 1 }
      dispatch(createCategory(createdRequest))
      navigate('/master-data/category')
      resetForm()
      clearErrors()
    }
  }

  // set title
  useEffect(() => {
    document.title =
      'Create Category | Sales Application'
  }, [])

  // set edit mode
  useEffect(() => {
    setEditMode(editMode)
  }, [editMode])

  // set value
  useEffect(() => {
    if (categoryById) {
      setValue('category_code', categoryById.category_code)
      setValue('category_name', categoryById.category_name)
      setValue('category_description', categoryById.category_description)
    } else {
      resetForm()
      clearErrors()
    }
  }, [resetForm, categoryById, setValue, clearErrors])

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
      <BreadCrumb title="Create Category" subTitle="Master Data" />
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit(submitForm)}>
              <div className="grid grid-cols-12 gap-space">

                {/* Category Code */}
                <div className="col-span-12 md:col-span-6 xl:col-span-6">
                  <label htmlFor="category_code" className="form-label">
                    Category Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="category_code"
                    className="form-input"
                    placeholder="Enter your category code"
                    pattern="[A-Za-z ]+"
                    title="Only letters and spaces allowed"
                    {...register('category_code', {
                      required: 'Category code is required.',
                    })}
                  />
                  {errors.category_code && (
                    <span className="text-red-500">{errors.category_code.message}</span>
                  )}
                </div>
                
                {/* Category Name */}
                <div className="col-span-12 md:col-span-6 xl:col-span-6">
                  <label htmlFor="category_name" className="form-label">
                    Category Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="category_name"
                    className="form-input"
                    placeholder="Enter your category name"
                    pattern="[A-Za-z ]+"
                    title="Only letters and spaces allowed"
                    {...register('category_name', {
                      required: 'Category name is required.',
                    })}
                  />
                  {errors.category_name && (
                    <span className="text-red-500">{errors.category_name.message}</span>
                  )}
                </div>
                
                {/* Category Description */}
                <div className="col-span-12 md:col-span-6 xl:col-span-12">
                  <label htmlFor="category_description" className="form-label">
                    Category Description <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="category_description"
                    className="form-input"
                    placeholder="Enter your category description"
                    pattern="[A-Za-z ]+"
                    title="Only letters and spaces allowed"
                    {...register('category_description', {
                      required: 'Category description is required.',
                    })}
                  />
                  {errors.category_description && (
                    <span className="text-red-500">{errors.category_description.message}</span>
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

export default CategoryCreate
