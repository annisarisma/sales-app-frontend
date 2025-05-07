import AddToast from '@src/components/CustomComponents/Toast/AddToast'
import DeleteToast from '@src/components/CustomComponents/Toast/DeleteToast'
import ErrorToast from '@src/components/CustomComponents/Toast/ErrorToast'
import UpdateToast from '@src/components/CustomComponents/Toast/UpdateToast'
import api from '@src/utils/axios_api'
import { REACT_APP_ROLE_API } from '@src/utils/url_helper'

import {
  getRoleReducer,

  

  destroyUserSelectedSuccess,
  destroyUserSuccess,
  getUserByIdData,
  addUser,
  updateUserSuccess,
} from './reducer'

const ROLE_API = REACT_APP_ROLE_API
const IsApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

// get role
export const getRole = () => async (dispatch) => {
  try {
    const response = await api.get(ROLE_API)
    console.log('response: ', response);
    dispatch(getRoleReducer(response))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Product List Fetch Failed'
    ErrorToast(errorMessage)
    console.error('Error fetching Product data:', error)
  }
}

// get user by id
export const getUserById = (id) => async (dispatch) => {
  try {
    const response = await api.get(`${ROLE_API}/${id}`)
    console.log('response get by id: ', response);
    dispatch(getUserByIdData(response))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Product List Fetch Failed'
    ErrorToast(errorMessage)
    console.error('Error fetching Product data:', error)
  }
}

// create user
export const addUserData = (newRecord) => async (dispatch) => {
  try {
    const response = await api.post(
      ROLE_API,
      newRecord,
      'User'
    )
    const { message } = response
    AddToast(message || 'User record added successfully')
    dispatch(addUser(newRecord))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'User addition failed.'
    ErrorToast(errorMessage)
    console.error('Error in patients adding record:', error)
  }
}

// update user
export const updateUser = (record) => async (dispatch) => {
  try {
    console.log(record);
    const response = await api.put(`${ROLE_API}`, record, 'User')
    
    const { message } = response;
    AddToast(message || 'User record added successfully')
     
    dispatch(updateUserSuccess(record))
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'User addition failed.'
    ErrorToast(errorMessage)
    
    console.error('Error in patients adding record:', error)
  }
}

// destroy user
export const destroyUser = (reviews) => async (dispatch) => {
  try {
    console.log('thunk reviews: ', reviews);
    const deletePromises = reviews.map(async (usrId) => {
      const response = await api.delete(ROLE_API, usrId, 'User')
      const { message } = response
      console.log('thunk message:', message);
      DeleteToast(message || 'User deleted successfully')
      return usrId
    })

    const deletedUser = await Promise.all(deletePromises)
    dispatch(destroyUserSuccess(deletedUser))
  } catch (error) {
    console.log('masuk catch: ', error);
    const errorMessage = error.response?.data?.message || error.message || 'User record deletion failed.'
    ErrorToast(errorMessage)
    console.error('Error in deleting products: ', error)
  }
}

// destroy user selected
export const destroyUserSelected = (reviews) => async (dispatch) => {
  try {
    const deletePromises = reviews.map(async (usrId) => {
      const response = await api.delete(ROLE_API, usrId, 'User')
      const { message } = response
      DeleteToast(message || 'User deleted successfully')
      return usrId
    })

    const deletedUser = await Promise.all(deletePromises)
    dispatch(destroyUserSelectedSuccess(deletedUser))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'User record deletion failed.'
    ErrorToast(errorMessage)
    console.error('Error in deleting products: ', error)
  }
}

// set edit mode
export const setEditMode = (editMode) => async (dispatch) => {
  try {
    const response = { data: editMode }
    dispatch(setCurrentEditMode(response.data))
    return response.data
  } catch (error) {
    return error
  }
}