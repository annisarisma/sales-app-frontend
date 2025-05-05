import React, { useCallback, useEffect, useState } from 'react'

import { addCategoryData, editCategoryData } from '@src/slices/thunk'
import { Plus, RotateCcw, Upload } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Select from 'react-select'

const statusOptions = [
  { label: 'Active', value: 'Active' },
  { label: 'Inactive', value: 'Inactive' },
]

const AddEditCategory = ({ currentCategoryList, editMode, categoryData }) => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    setValue,
    control,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      products: currentCategoryList?.products || 0,
    },
  })
  const [preview, setPreview] = useState(null)
  const [status, setStatus] = useState(null)
  const isDarkMode =
    typeof window !== 'undefined' &&
    document.documentElement.getAttribute('data-mode') === 'dark'

  const darkSelectStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: '#0f172a',
      borderColor: state.isFocused ? '#3b82f6' : '#334155',
      color: '#f1f5f9',
      borderRadius: '0.5rem',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#3b82f6',
      },
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: '#0f172a',
      borderRadius: '0.5rem',
      marginTop: '0.25rem',
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? '#1e293b' : '#0f172a',
      color: '#f1f5f9',
      cursor: 'pointer',
    }),
    singleValue: (base) => ({
      ...base,
      color: '#f1f5f9',
    }),
    placeholder: (base) => ({
      ...base,
      color: '#64748b',
    }),
  }
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

  const handleStatusChange = (selected, onChange) => {
    setStatus(selected)
    onChange(selected?.value)
  }

  const generateId = (categoryData) => {
    const lastId = categoryData?.length
      ? Math.max(
          ...categoryData.map((item) =>
            parseInt(item.categoryID.replace('PEC-', ''), 10)
          )
        )
      : 19127
    return `PEC-${lastId + 1}`
  }
  const resetForm = useCallback(() => {
    reset({
      categoryID: '',
      category: '',
      products: 0,
      image: '',
      status: '',
      description: '',
    })
    setPreview(null)
    setStatus(null)
    clearErrors()
  }, [reset, clearErrors])

  useEffect(() => {
    if (!currentCategoryList || !editMode) {
      resetForm()
    }
    if (editMode && currentCategoryList) {
      clearErrors()
      Object.keys(currentCategoryList).forEach((key) => {
        setValue(key, currentCategoryList[key])
      })
      setPreview(currentCategoryList.image)
      if (currentCategoryList.status) {
        setStatus({
          label: currentCategoryList.status,
          value: currentCategoryList.status,
        })
      }
    } else {
      resetForm()
    }
  }, [editMode, currentCategoryList, setValue, reset, clearErrors, resetForm])

  const submitForm = (data) => {
    if (editMode && currentCategoryList) {
      const updatedCategoryList = {
        ...data,
        image: currentCategoryList.image,
        status: status?.value || data.status,
      }
      dispatch(editCategoryData(updatedCategoryList))
      resetForm()
    } else {
      const newCategoryList = {
        ...data,
        status: status?.value ?? '',
        image: preview || '',
        categoryID: generateId(categoryData),
      }
      dispatch(addCategoryData(newCategoryList))
      resetForm()
    }
  }

  return (
    <React.Fragment>
      <div className="col-span-12 lg:col-span-5 xl:col-span-4">
        <div className="sticky top-24 card">
          <div className="card-header">
            <h6 className="card-title">
              {editMode ? 'Edit Category' : 'Add New Category'}
            </h6>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(submitForm)}>
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12">
                  <div>
                    <label
                      htmlFor="logo"
                      className="flex items-center justify-center p-2 mx-auto overflow-hidden bg-gray-100 border border-gray-200 rounded-sm cursor-pointer dark:bg-dark-850 dark:border-dark-800 size-32">
                      {preview ? (
                        <img
                          src={preview || ''}
                          alt="previewImg"
                          width={92}
                          height={92}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <div className="flex flex-col items-center text-gray-500 dark:text-dark-500">
                          <Upload />
                          <span className="block mt-2">Upload Images</span>
                        </div>
                      )}
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
                          className="block w-full text-sm file:rounded-md focus:outline-0 text-slate-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 "
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-span-12">
                  <label htmlFor="categoryNameInput" className="form-label">
                    Category Name
                  </label>
                  <input
                    type="text"
                    id="categoryNameInput"
                    className="form-input"
                    placeholder="Category name"
                    {...register('category', {
                      required: 'Category Name is required',
                    })}
                  />
                  {errors.category && (
                    <span className="text-red-500">
                      {errors.category.message}
                    </span>
                  )}
                </div>
                <div className="col-span-12">
                  <label htmlFor="productsInput" className="form-label">
                    Products
                  </label>
                  <input
                    type="number"
                    id="productsInput"
                    className="form-input [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="Add Products"
                    {...register('products', {
                      required: 'Products is required',
                      valueAsNumber: true,
                    })}
                  />
                  {errors.products && (
                    <span className="text-red-500">
                      {errors.products.message}
                    </span>
                  )}
                </div>
                <div className="col-span-12">
                  <label htmlFor="descriptionTextarea" className="form-label">
                    Description
                  </label>
                  <textarea
                    id="descriptionTextarea"
                    rows={3}
                    className="h-auto form-input"
                    placeholder="Enter your description"
                    {...register('description', {
                      required: 'Description is required',
                    })}></textarea>
                  {errors.description && (
                    <span className="text-red-500">
                      {errors.description.message}
                    </span>
                  )}
                </div>
                <div className="col-span-12">
                  <label htmlFor="statusSelect" className="form-label">
                    Status
                  </label>
                  <Controller
                    name="status"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => (
                      <Select
                        classNamePrefix="select"
                        options={statusOptions}
                        value={status}
                        onChange={(selected) =>
                          handleStatusChange(selected, onChange)
                        }
                        placeholder="Select Status"
                        id="statusSelect"
                        styles={isDarkMode ? darkSelectStyles : undefined}
                      />
                    )}
                  />
                  {errors.status && (
                    <span className="text-red-500">Status is required</span>
                  )}
                </div>
                <div className="flex items-center justify-end col-span-12 gap-2">
                  <button
                    className="btn btn-sub-gray"
                    type="button"
                    onClick={resetForm}>
                    <RotateCcw className="inline-block ltr:mr-1 rtl:ml-1 align-center size-4" />
                    <span className="align-middle">Reset</span>
                  </button>
                  <button className="btn btn-primary" type="submit">
                    <Plus className="inline-block ltr:mr-1 rtl:ml-1 align-center size-4" />{' '}
                    <span className="align-middle">
                      {editMode ? 'Edit Category' : 'Add Category'}
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AddEditCategory
