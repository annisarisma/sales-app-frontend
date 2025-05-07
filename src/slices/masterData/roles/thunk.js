import AddToast from '@src/components/CustomComponents/Toast/AddToast'
import DeleteToast from '@src/components/CustomComponents/Toast/DeleteToast'
import ErrorToast from '@src/components/CustomComponents/Toast/ErrorToast'
import UpdateToast from '@src/components/CustomComponents/Toast/UpdateToast'
import api from '@src/utils/axios_api'
import { REACT_APP_ROLE_API } from '@src/utils/url_helper'

import {
  getRoleReducer,
  getRoleByIdReducer,
  createRoleReducer,

  

  destroyUserSelectedSuccess,
  destroyUserSuccess,
  updateRoleReducer,
  setEditModeReducer,
} from './reducer'

const ROLE_API = REACT_APP_ROLE_API
const IsApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

// get
export const getRole = () => async (dispatch) => {
  try {
    // axios
    const response = await api.get(ROLE_API)
    
    // reducer
    dispatch(getRoleReducer(response))
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
export const getRoleById = (id) => async (dispatch) => {
  try {
    const response = await api.get(`${ROLE_API}/${id}`)
    dispatch(getRoleByIdReducer(response))
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
export const createRole = (record) => async (dispatch) => {
  try {
    // axios
    const response = await api.post(ROLE_API,record,'Role')
    const { message } = response
    
    // toast and reducer
    AddToast(message)
    dispatch(createRoleReducer(record))
  } catch (error) {
    // message
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Role addition failed.'
    
    // toast and console
    ErrorToast(errorMessage)
    console.error('Error in patients adding record:', error)
  }
}

// update user
export const updateRole = (record) => async (dispatch) => {
  try {
    // axios
    const response = await api.put(`${ROLE_API}`, record, 'Role')
    const { message } = response;

    // toast and reducer
    AddToast(message || 'Role record added successfully') 
    dispatch(updateRoleReducer(record))
  } catch (error) {
    // message
    const errorMessage = error.response?.data?.message || error.message || 'Role addition failed.'
    
    // toast and console
    ErrorToast(errorMessage)
    console.error('Error in patients adding record:', error)
  }
}

// destroy user
export const destroyUser = (reviews) => async (dispatch) => {
  try {
    const deletePromises = reviews.map(async (usrId) => {
      const response = await api.delete(ROLE_API, usrId, 'Role')
      const { message } = response
      DeleteToast(message || 'Role deleted successfully')
      return usrId
    })

    const deletedUser = await Promise.all(deletePromises)
    dispatch(destroyUserSuccess(deletedUser))
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Role record deletion failed.'
    ErrorToast(errorMessage)
    console.error('Error in deleting products: ', error)
  }
}

// destroy user selected
export const destroyUserSelected = (reviews) => async (dispatch) => {
  try {
    const deletePromises = reviews.map(async (usrId) => {
      const response = await api.delete(ROLE_API, usrId, 'Role')
      const { message } = response
      DeleteToast(message || 'Role deleted successfully')
      return usrId
    })

    const deletedUser = await Promise.all(deletePromises)
    dispatch(destroyUserSelectedSuccess(deletedUser))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Role record deletion failed.'
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