import AddToast from '@src/components/CustomComponents/Toast/AddToast'
import DeleteToast from '@src/components/CustomComponents/Toast/DeleteToast'
import ErrorToast from '@src/components/CustomComponents/Toast/ErrorToast'
import UpdateToast from '@src/components/CustomComponents/Toast/UpdateToast'
import api from '@src/utils/axios_api'
import { REACT_APP_PRODUCT_API } from '@src/utils/url_helper'

import {
  getProductReducer,
  getProductByIdReducer,
  createProductReducer,
  updateProductReducer,
  destroyProductReducer,
  destroyProductSelectedReducer,
  setEditModeReducer,
} from './reducer'

const PRODUCT_API = REACT_APP_PRODUCT_API
const IsApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

// get
export const getProduct = () => async (dispatch) => {
  try {
    // axios
    const response = await api.get(PRODUCT_API)
    
    // reducer
    dispatch(getProductReducer(response))
  } catch (error) {
    // message
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Product List Fetch Failed'
    
    // toast and console
    ErrorToast(errorMessage)
    console.error('Error fetching Product data:', error)
  }
}

// get by id
export const getProductById = (id) => async (dispatch) => {
  try {
    const response = await api.get(`${PRODUCT_API}/${id}`)
    dispatch(getProductByIdReducer(response))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Product List Fetch Failed'
    ErrorToast(errorMessage)
    console.error('Error fetching Product data:', error)
  }
}

// create
export const createProduct = (record) => async (dispatch) => {
  try {
    // axios
    const response = await api.post(PRODUCT_API,record,'Product')
    const { message } = response
    
    // toast and reducer
    AddToast(message)
    dispatch(createProductReducer(response.data))
  } catch (error) {
    // message
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Product addition failed.'
    
    // toast and console
    ErrorToast(errorMessage)
    console.error('Error in patients adding record:', error)
  }
}

// update user
export const updateProduct = (record) => async (dispatch) => {
  try {
    // axios
    const response = await api.put(`${PRODUCT_API}`, record, 'Product')
    const { message } = response;

    // toast and reducer
    UpdateToast(message || 'Product record added successfully') 
    dispatch(updateProductReducer(response.data))
  } catch (error) {
    // message
    const errorMessage = error.response?.data?.message || error.message || 'Product addition failed.'
    
    // toast and console
    ErrorToast(errorMessage)
    console.error('Error in patients adding record:', error)
  }
}

// destroy user
export const destroyProduct = (reviews) => async (dispatch) => {
  try {
    const deletePromises = reviews.map(async (prdId) => {
      // axios
      const response = await api.delete(PRODUCT_API, prdId, 'Product')
      const { message } = response
      
      // toast
      DeleteToast(message || 'Product deleted successfully')
      return prdId
    })

    // reducer
    const deletedProduct = await Promise.all(deletePromises)
    dispatch(destroyProductReducer(deletedProduct))
  } catch (error) {
    // message
    const errorMessage = error.response?.data?.message || error.message || 'Product record deletion failed.'
    
    // toast and console
    ErrorToast(errorMessage)
    console.error('Error in deleting products: ', error)
  }
}

// destroy user selected
export const destroyProductSelected = (reviews) => async (dispatch) => {
  try {
    const deletePromises = reviews.map(async (prdId) => {
      // axios
      const response = await api.delete(PRODUCT_API, prdId, 'Product')
      const { message } = response
      
      // toast
      DeleteToast(message || 'Product deleted successfully')
      return prdId
    })

    // reducer
    const deletedProduct = await Promise.all(deletePromises)
    dispatch(destroyProductSelectedReducer(deletedProduct))
  } catch (error) {
    // message
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Product record deletion failed.'
    
    // toast and console
    ErrorToast(errorMessage)
    console.error('Error in deleting products: ', error)
  }
}

// set edit mode
export const setEditMode = (editMode) => async (dispatch) => {
  try {
    const response = { data: editMode }
    dispatch(setEditModeReducer(response.data))
    return response.data
  } catch (error) {
    return error
  }
}