import AddToast from '@src/components/CustomComponents/Toast/AddToast'
import DeleteToast from '@src/components/CustomComponents/Toast/DeleteToast'
import ErrorToast from '@src/components/CustomComponents/Toast/ErrorToast'
import UpdateToast from '@src/components/CustomComponents/Toast/UpdateToast'
import api from '@src/utils/axios_api'
import {
  addLocalStorageRecord,
  deleteLocalStorageRecord,
  updateLocalStorageRecord,
} from '@src/utils/crud_functions'
import { REACT_APP_USER_API } from '@src/utils/url_helper'

import {
  addProductList,
  changeStatusProductList,
  destroyUserSelectedSuccess,
  destroyUserSuccess,
  editProductList,
  getUserList,
  getUserByIdData,
  addUser,
  updateUserSuccess,
  setCurrentEditMode,
  setCurrentUser,
} from './reducer'

const USER_API = REACT_APP_USER_API
const IsApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

// get product list
export const getUserListData = () => async (dispatch) => {
  try {
    const response = await api.get(USER_API)
    console.log('response: ', response);
    dispatch(getUserList(response))
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
    const response = await api.get(`${USER_API}/${id}`)
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
      USER_API,
      newRecord,
      'User'
    )
    const { message } = response
    AddToast(message || 'User record added successfully')
    dispatch(addUser(response.data))
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
    const response = await api.put(`${USER_API}`, record, 'User')
    
    const { message } = response;
    AddToast(message || 'User record added successfully')
     
    dispatch(updateUserSuccess(response.data))
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
      const response = await api.delete(USER_API, usrId, 'User')
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
      const response = await api.delete(USER_API, usrId, 'User')
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







































// set edit mode for product
export const setEditModeUserList = (editMode) => async (dispatch) => {
  try {
    const response = { data: editMode }
    dispatch(setCurrentEditMode(response.data))
    return response.data
  } catch (error) {
    return error
  }
}

// set current user
export const setCurrentUserList = (user) => async (dispatch) => {
  try {
    const response = { data: user }
    dispatch(setCurrentUser(response.data))
    return response.data
  } catch (error) {
    return error
  }
}

// set product list
export const setProductListStatus = (product) => async (dispatch) => {
  try {
    const response = { data: product }
    dispatch(changeStatusProductList(response.data))
    return response.data
  } catch (error) {
    return error
  }
}



// add product
export const addProductListData = (newRecord) => async (dispatch) => {
  try {
    const response = await api.post(USER_API, newRecord, 'Product')
    const { message } = response
    AddToast(message || 'Product transferred to cart.')
    addLocalStorageRecord('d-product-list', newRecord)
    dispatch(addProductList(newRecord))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Product record addition failed.'
    ErrorToast(errorMessage)
    console.error('Error adding product record:', error)
  }
}

// edit product
export const editProductListData = (product) => async (dispatch) => {
  try {
    const response = await api.put(USER_API, product, 'Product')
    const { message } = response
    setTimeout(() => {
      UpdateToast(message || 'Product updated successfully')
    }, 2000)
    updateLocalStorageRecord('d-product-list', product)
    dispatch(editProductList(product))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Product record updation failed.'
    ErrorToast(errorMessage)
    console.error('Error updating product record:', error)
  }
}

// delete ProductList
export const deleteProductListData = (reviews) => async (dispatch) => {
  try {
    const deletePromises = reviews.map(async (_id) => {
      const response = await api.delete(USER_API, _id, 'Product')
      const { message } = response
      DeleteToast(message || 'Product deleted successfully')
      return _id
    })

    const deletedProducts = await Promise.all(deletePromises)
    dispatch(deleteProductList(deletedProducts))
    deleteLocalStorageRecord({
      key: 'd-product-list',
      listRecord: reviews,
      multipleRecords: true,
    })
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Product record deletion failed.'
    ErrorToast(errorMessage)
    console.error('Error in deleting products: ', error)
  }
}
