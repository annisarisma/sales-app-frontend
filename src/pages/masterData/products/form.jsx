import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
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
import { ImagePlus, X } from 'lucide-react'


const ProductCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productById, editMode, productList } = useSelector((state) => state.ProductList)
  const { categoryList } = useSelector((state) => state.CategoryList)
  const [allCategoryList, setAllCategoryList] = useState([]);
  const [preview1, setPreview1] = useState(null)
  const [preview2, setPreview2] = useState(null)
  const [preview3, setPreview3] = useState(null)
  const [existingImages, setExistingImages] = useState(null)
  const [preview1Error, setPreview1Error] = useState(false)
  const refImages = useRef([]);
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
    const formData = new FormData();

    // data
    formData.append('product_code', data.product_code);
    formData.append('product_name', data.product_name);
    formData.append('product_description', data.product_description);
    formData.append('cat_id', data.cat_id);

    
    // image
    const fileInputs = document.querySelectorAll('input[name="images"]');
    fileInputs.forEach(input => {
      if (input.files.length > 0) {
        formData.append('images', input.files[0]);
      }
    });
    
    if (editMode && productById) {
      formData.append('_id', productById.prd_id);
      if (existingImages.length === 0) {
        formData.append('existingImages', []);
      } else {
        existingImages.forEach(image => {
          formData.append('existingImages[]', image);
        });
      }
      dispatch(updateProduct(formData));
      navigate('/master-data/product');
    } else {
      dispatch(createProduct(formData));
      navigate('/master-data/product');
      resetForm();
      clearErrors();
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
      const url = "http://localhost:3000/uploads/products/"
      setValue('product_code', productById.product_code)
      setValue('product_name', productById.product_name)
      setValue('product_description', productById.product_description)
      setPreview1(productById.images[0] ? url+productById.images[0].filename : null)
      setPreview2(productById.images[1] ? url+productById.images[1].filename : null)
      setPreview3(productById.images[2] ? url+productById.images[2].filename : null)

      setExistingImages(productById.images.map(image => image.img_id))
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

  const handleFileRemove= (index, setPreview) => {
    setPreview(null)
    refImages.current[index].value = '';

    if (editMode) {
      const updatedExistingImages = existingImages.filter(existingImage => existingImage !== productById.images[index].img_id);
      setExistingImages(updatedExistingImages);
    }
  } 

  return (
    <React.Fragment>
      <BreadCrumb title="Create Product" subTitle="Master Data" />
        <form onSubmit={handleSubmit(submitForm)} encType="multipart/form-data">
          <div className="card">
            <div className="card-header">
              <h6 className="card-title">Products Information</h6>
            </div>
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
                      htmlFor="images1"
                      className="flex items-center justify-center h-full p-5 text-center border border-gray-200 border-dashed cursor-pointer dark:border-dark-800">
                      {preview1 ? (
                        <div className="relative w-full flex justify-center">
                          <img
                            src={preview1 || ''}
                            alt="preview1Img"
                            className="mx-auto h-60"
                            width={472}
                            height={240}
                          />

                          <button
                            type="button"
                            className="absolute top-2 right-2 bg-white text-red-500 rounded-full p-1 shadow hover:bg-red-100"
                            onClick={(e) => {e.preventDefault(); handleFileRemove(0, setPreview1)}}>
                            <X size={16}/>
                          </button>
                        </div>
                      ) : (
                        <div className="text-gray-500 dark:text-dark-500">
                          <ImagePlus className="mx-auto" />
                          <div className="mt-3">Product Image 1</div>
                        </div>
                      )}
                    </label>
                    <div className="hidden mt-4">
                      <input
                        ref={(el) => refImages.current[0] = el}
                        type="file"
                        name="images"
                        id="images1"
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
                      htmlFor="images2"
                      className="flex items-center justify-center h-56 p-5 text-center border border-gray-200 border-dashed cursor-pointer dark:border-dark-800">
                      {preview2 ? (
                        <div className="relative w-full flex justify-center">
                          <img
                            src={preview2 || ''}
                            alt="preview2Img"
                            className="mx-auto h-44"
                            width={319}
                            height={176}
                          />

                          <button
                            type="button"
                            className="absolute top-2 right-2 bg-white text-red-500 rounded-full p-1 shadow hover:bg-red-100"
                            onClick={(e) => {e.preventDefault(); handleFileRemove(1, setPreview2)}}>
                            <X size={16}/>
                          </button>
                        </div>
                      ) : (
                        <div className="text-gray-500 dark:text-dark-500">
                          <ImagePlus className="mx-auto" />
                          <div className="mt-3">Product Image 2</div>
                        </div>
                      )}
                    </label>
                    <div className="hidden mt-4">
                      <input
                        ref={(el) => refImages.current[1] = el}
                        type="file"
                        name="images"
                        id="images2"
                        className="block w-full text-sm file:rounded-md focus:outline-0 text-slate-500 dark:text-dark-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 "
                        onChange={(e) => handleFileChange(e, setPreview2)}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <div>
                    <label
                      htmlFor="images3"
                      className="flex items-center justify-center h-56 p-5 text-center border border-gray-200 border-dashed cursor-pointer dark:border-dark-800">
                      {preview3 ? (
                        <div className="relative w-full flex justify-center">
                          <img
                            src={preview3 || ''}
                            alt="preview3Img"
                            className="mx-auto h-44"
                            width={319}
                            height={176}
                          />

                          <button
                            type="button"
                            className="absolute top-2 right-2 bg-white text-red-500 rounded-full p-1 shadow hover:bg-red-100"
                            onClick={(e) => {e.preventDefault(); handleFileRemove(2, setPreview3)}}>
                            <X size={16}/>
                          </button>
                        </div>
                      ) : (
                        <div className="text-gray-500 dark:text-dark-500">
                          <ImagePlus className="mx-auto" />
                          <div className="mt-3">Product Image 3</div>
                        </div>
                      )}
                    </label>
                    <div className="hidden mt-4">
                      <input
                        ref={(el) => refImages.current[2] = el}
                        type="file"
                        name="images"
                        id="images3"
                        className="block w-full text-sm file:rounded-md focus:outline-0 text-slate-500 dark:text-dark-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 "
                        onChange={(e) => handleFileChange(e, setPreview3)}
                      />
                    </div>
                  </div>
                </div>
              </div>
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
        </form>
    </React.Fragment>
  )
}

export default ProductCreate
