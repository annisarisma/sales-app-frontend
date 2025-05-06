import AddToast from '@src/components/CustomComponents/Toast/AddToast'
import DeleteToast from '@src/components/CustomComponents/Toast/DeleteToast'
import ErrorToast from '@src/components/CustomComponents/Toast/ErrorToast'
import UpdateToast from '@src/components/CustomComponents/Toast/UpdateToast'
import api from '@src/utils/axios_api'
import {
  addLocalStorageRecord,
  createLocalStorage,
  deleteLocalStorageRecord,
  getLocalStorage,
  updateLocalStorageRecord,
} from '@src/utils/crud_functions'
import { REACT_APP_USER_API } from '@src/utils/url_helper'

import {
  addProductList,
  changeStatusProductList,
  deleteProductList,
  editProductList,
  getUserList,
  addUser,
  setCurrentEditMode,
  setCurrentProduct,
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

// add new patients
export const addUserData = (newRecord) => async (dispatch) => {
  try {
    const response = await api.post(
      USER_API,
      newRecord,
      'Patients'
    )
    const { message } = response
    AddToast(message || 'User record added successfully')
    // addLocalStorageRecord('d-hospital-patients-list', newRecord)
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

// set edit mode for product
export const setEditModeProductList = (editMode) => async (dispatch) => {
  try {
    const response = { data: editMode }
    dispatch(setCurrentEditMode(response.data))
    return response.data
  } catch (error) {
    return error
  }
}

// set current product
export const setCurrentProductList = (product) => async (dispatch) => {
  try {
    const response = { data: product }
    dispatch(setCurrentProduct(response.data))
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
