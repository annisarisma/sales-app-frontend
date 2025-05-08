import AddToast from '@src/components/CustomComponents/Toast/AddToast'
import DeleteToast from '@src/components/CustomComponents/Toast/DeleteToast'
import ErrorToast from '@src/components/CustomComponents/Toast/ErrorToast'
import UpdateToast from '@src/components/CustomComponents/Toast/UpdateToast'
import api from '@src/utils/axios_api'
import { REACT_APP_CATEGORY_API } from '@src/utils/url_helper'

import {
  getCategoryReducer,
  getCategoryByIdReducer,
  createCategoryReducer,
  updateCategoryReducer,
  destroyCategoryReducer,
  destroyCategorySelectedReducer,
  setEditModeReducer,
} from './reducer'

const CATEGORY_API = REACT_APP_CATEGORY_API
const IsApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

// get
export const getCategory = () => async (dispatch) => {
  try {
    // axios
    const response = await api.get(CATEGORY_API)
    
    // reducer
    dispatch(getCategoryReducer(response))
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
export const getCategoryById = (id) => async (dispatch) => {
  try {
    const response = await api.get(`${CATEGORY_API}/${id}`)
    dispatch(getCategoryByIdReducer(response))
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
export const createCategory = (record) => async (dispatch) => {
  try {
    // axios
    const response = await api.post(CATEGORY_API,record,'Category')
    const { message } = response
    
    // toast and reducer
    AddToast(message)
    dispatch(createCategoryReducer(response.data))
  } catch (error) {
    // message
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Category addition failed.'
    
    // toast and console
    ErrorToast(errorMessage)
    console.error('Error in patients adding record:', error)
  }
}

// update user
export const updateCategory = (record) => async (dispatch) => {
  try {
    // axios
    const response = await api.put(`${CATEGORY_API}`, record, 'Category')
    const { message } = response;

    // toast and reducer
    UpdateToast(message || 'Category record added successfully') 
    dispatch(updateCategoryReducer(response.data))
  } catch (error) {
    // message
    const errorMessage = error.response?.data?.message || error.message || 'Category addition failed.'
    
    // toast and console
    ErrorToast(errorMessage)
    console.error('Error in patients adding record:', error)
  }
}

// destroy user
export const destroyCategory = (reviews) => async (dispatch) => {
  try {
    const deletePromises = reviews.map(async (catId) => {
      // axios
      const response = await api.delete(CATEGORY_API, catId, 'Category')
      const { message } = response
      
      // toast
      DeleteToast(message || 'Category deleted successfully')
      return catId
    })

    // reducer
    const deletedCategory = await Promise.all(deletePromises)
    dispatch(destroyCategoryReducer(deletedCategory))
  } catch (error) {
    // message
    const errorMessage = error.response?.data?.message || error.message || 'Category record deletion failed.'
    
    // toast and console
    ErrorToast(errorMessage)
    console.error('Error in deleting products: ', error)
  }
}

// destroy user selected
export const destroyCategorySelected = (reviews) => async (dispatch) => {
  try {
    const deletePromises = reviews.map(async (catId) => {
      // axios
      const response = await api.delete(CATEGORY_API, catId, 'Category')
      const { message } = response
      
      // toast
      DeleteToast(message || 'Category deleted successfully')
      return catId
    })

    // reducer
    const deletedCategory = await Promise.all(deletePromises)
    dispatch(destroyCategorySelectedReducer(deletedCategory))
  } catch (error) {
    // message
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Category record deletion failed.'
    
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