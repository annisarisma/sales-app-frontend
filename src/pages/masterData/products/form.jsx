import React, { useCallback, useEffect, useMemo, useState } from 'react'
import BreadCrumb from '@src/components/Common/BreadCrumb'
import { countryCode } from '@src/data'
import {
  createProduct,
  updateProduct,
  setEditMode,
} from '@src/slices/masterData/products/thunk'
import { getCategory } from '@src/slices/masterData/categories/thunk'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select'
import { ImagePlus } from 'lucide-react'


const ProductCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productById, editMode, productList } = useSelector((state) => state.ProductList)
  const { categoryList } = useSelector((state) => state.CategoryList)
  const [allCategoryList, setAllCategoryList] = useState([]);
  const [preview1, setPreview1] = useState(null)
  const [preview1Error, setPreview1Error] = useState(false)
  const [preview2, setPreview2] = useState(null)
  const [preview3, setPreview3] = useState(null)
  const {
    handleSubmit,
    reset,
    register,
    setValue,
    clearErrors,
    control,
    formState: { errors },
  } = useForm()

  // category data
  useEffect(() => {
      if (!categoryList) {
        dispatch(getCategory());
      } else {
        setAllCategoryList(categoryList)
      }
    }, [categoryList, dispatch]);

  // option data
  const categoryItems = useMemo(() => {
    console.log("list option: ", productById)
    return allCategoryList?.map(category => ({
      label: category.category_name,
      value: category.cat_id
    })) || [];
  }, [allCategoryList]);

  // reset form
  const resetForm = useCallback(() => {
    reset({
      product_code: '',
      product_name: '',
      product_description: '',
      cat_id: '',
    })
    clearErrors()
  }, [reset, clearErrors, productList])

  // function submit
  const submitForm = (data) => {
    if (editMode && productById) {
      const updatedRequest = { ...data, _id: productById.prd_id }
      dispatch(updateProduct(updatedRequest))
      navigate('/master-data/product')
    } else {
      const createdRequest = { ...data, prdId: productList.length + 1 }
      dispatch(createProduct(createdRequest))
      navigate('/master-data/product')
      resetForm()
      clearErrors()
    }
  }

  // set title
  useEffect(() => {
    document.title =
      'Create Product | Sales Application'
  }, [])

  // set edit mode
  useEffect(() => {
    setEditMode(editMode)
  }, [editMode])

  // set value
  useEffect(() => {
    if (productById && editMode) {
      setValue('product_code', productById.product_code)
      setValue('product_name', productById.product_name)
      setValue('product_description', productById.product_description)
    } else {
      setPreview1(null)
      setPreview2(null)
      setPreview3(null)
      setPreview1Error(false)
      resetForm()
      clearErrors()
    }
  }, [resetForm, productById, setValue, clearErrors])

  useEffect(() => {
    const handleBeforeUnload = () => {
      resetForm()
    }
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [resetForm])

  const handleFileChange = (event, setPreview) => {
    const file = event.target.files?.[0] || null
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(file)
      setPreview1Error(false)
    } else {
      setPreview(null)
      setPreview1Error(true)
    }
  }

  return (
    <React.Fragment>
      <BreadCrumb title="Create Product" subTitle="Master Data" />
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="card">
            <div className="card-body">
                <div className="grid grid-cols-12 gap-space">

                  {/* Product Code */}
                  <div className="col-span-12 md:col-span-6 xl:col-span-6">
                    <label htmlFor="product_code" className="form-label">
                      Product Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="product_code"
                      className="form-input"
                      placeholder="Enter your product code"
                      title="Only letters and spaces allowed"
                      {...register('product_code', {
                        required: 'Product code is required.',
                      })}
                    />
                    {errors.product_code && (
                      <span className="text-red-500">{errors.product_code.message}</span>
                    )}
                  </div>
                  
                  {/* Product Name */}
                  <div className="col-span-12 md:col-span-6 xl:col-span-6">
                    <label htmlFor="product_name" className="form-label">
                      Product Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="product_name"
                      className="form-input"
                      placeholder="Enter your product name"
                      title="Only letters and spaces allowed"
                      {...register('product_name', {
                        required: 'Product name is required.',
                      })}
                    />
                    {errors.product_name && (
                      <span className="text-red-500">{errors.product_name.message}</span>
                    )}
                  </div>
                  
                  {/* Product Description */}
                  <div className="col-span-12 md:col-span-6 xl:col-span-6">
                    <label htmlFor="product_description" className="form-label">
                      Product Description <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="product_description"
                      className="form-input"
                      placeholder="Enter your product description"
                      title="Only letters and spaces allowed"
                      {...register('product_description', {
                        required: 'Product description is required.',
                      })}
                    />
                    {errors.product_description && (
                      <span className="text-red-500">{errors.product_description.message}</span>
                    )}
                  </div>

                  {/* Category */}
                  <div className="col-span-12 md:col-span-6 xl:col-span-6">
                    <label htmlFor="categorySelect" className="form-label">
                      Category <span className="text-red-500">*</span>
                    </label>
                    <div id="categorySelect">
                      <Controller
                        name="cat_id"
                        control={control}
                        rules={{ required: 'Category is required' }} // Validation rule
                        render={({ field: { onChange, value } }) => (
                          <Select
                            classNamePrefix="select"
                            options={categoryItems}
                            value={categoryItems.find(
                              (option) => option.value === productById?.cat_id
                            )}
                            onChange={(selectedOption) =>
                              onChange(selectedOption?.value)
                            }
                            placeholder="Select categories"
                            id="categorySelect"
                          />
                        )}
                      />
                      {errors.cat_id && (
                        <span className="text-red-500">{errors.cat_id.message}</span>
                      )}
                    </div>
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
            </div>
          </div>
          {/* product images */}
          <div className="card">
            <div className="card-header">
              <h6 className="card-title">Products Images</h6>
            </div>
            <div className="card-body">
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 md:col-span-7 md:row-span-2">
                  <div className="h-full">
                    <label
                      htmlFor="logo1"
                      className="flex items-center justify-center h-full p-5 text-center border border-gray-200 border-dashed cursor-pointer dark:border-dark-800">
                      {preview1 ? (
                        <img
                          src={preview1 || ''}
                          alt="preview1Img"
                          className="mx-auto h-60"
                          width={472}
                          height={240}
                        />
                      ) : (
                        <div className="text-gray-500 dark:text-dark-500">
                          <ImagePlus className="mx-auto" />
                          <div className="mt-3">Product Image 1</div>
                        </div>
                      )}
                    </label>
                    <div className="hidden mt-4">
                      <input
                        type="file"
                        name="logo1"
                        id="logo1"
                        className="block w-full text-sm file:rounded-md focus:outline-0 text-slate-500 dark:text-dark-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 "
                        onChange={(e) => handleFileChange(e, setPreview1)}
                      />
                    </div>
                    {preview1Error && (
                      <span className="mt-2 text-red-500">
                        Image is required
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-span-12 md:col-span-5">
                  <div>
                    <label
                      htmlFor="logo2"
                      className="flex items-center justify-center h-56 p-5 text-center border border-gray-200 border-dashed cursor-pointer dark:border-dark-800">
                      {preview2 ? (
                        <img
                          src={preview2 || ''}
                          alt="preview2Img"
                          className="mx-auto h-44"
                          width={319}
                          height={176}
                        />
                      ) : (
                        <div className="text-gray-500 dark:text-dark-500">
                          <ImagePlus className="mx-auto" />
                          <div className="mt-3">Product Image 2</div>
                        </div>
                      )}
                    </label>
                    <div className="hidden mt-4">
                      <input
                        type="file"
                        name="logo2"
                        id="logo2"
                        className="block w-full text-sm file:rounded-md focus:outline-0 text-slate-500 dark:text-dark-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 "
                        onChange={(e) => handleFileChange(e, setPreview2)}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <div>
                    <label
                      htmlFor="logo3"
                      className="flex items-center justify-center h-56 p-5 text-center border border-gray-200 border-dashed cursor-pointer dark:border-dark-800">
                      {preview3 ? (
                        <img
                          src={preview3 || ''}
                          alt="preview3Img"
                          className="mx-auto h-44"
                          width={319}
                          height={176}
                        />
                      ) : (
                        <div className="text-gray-500 dark:text-dark-500">
                          <ImagePlus className="mx-auto" />
                          <div className="mt-3">Product Image 3</div>
                        </div>
                      )}
                    </label>
                    <div className="hidden mt-4">
                      <input
                        type="file"
                        name="logo3"
                        id="logo3"
                        className="block w-full text-sm file:rounded-md focus:outline-0 text-slate-500 dark:text-dark-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 "
                        onChange={(e) => handleFileChange(e, setPreview3)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
    </React.Fragment>
  )
}

export default ProductCreate
