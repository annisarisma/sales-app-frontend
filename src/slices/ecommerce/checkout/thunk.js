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
import { REACT_APP_CHECKOUT_API } from '@src/utils/url_helper'

import {
  addCheckoutListRecord,
  deleteCheckoutListRecord,
  editCheckoutListRecord,
  getCheckoutList,
} from './reducer'

const USER_CHECKOUT_API = REACT_APP_CHECKOUT_API
const IsApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

// get checkout data
export const getCheckoutAddressData = () => async (dispatch) => {
  try {
    if (IsApi === false) {
      const responseData = await getLocalStorage('d-address-list')
      if (!responseData) {
        const response = await api.get(USER_CHECKOUT_API)
        createLocalStorage('d-address-list', response)
        dispatch(getCheckoutList(response))
      } else {
        dispatch(getCheckoutList(responseData))
      }
    } else {
      const response = await api.get(USER_CHECKOUT_API)
      dispatch(getCheckoutList(response))
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Checkout List Fetch Failed'
    ErrorToast(errorMessage)
    console.error('Error fetching address data:', error)
  }
}

// add new address
export const addCheckoutListData = (newRecord) => async (dispatch) => {
  try {
    const response = await api.post(USER_CHECKOUT_API, newRecord, 'Address')
    const { message } = response
    AddToast(message || 'New Address Added successfully')
    addLocalStorageRecord('d-address-list', newRecord)
    dispatch(addCheckoutListRecord(newRecord))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Address addition failed.'
    ErrorToast(errorMessage)
    console.error('Error adding address record:', error)
  }
}

// edit existing address
export const editCheckoutListData = (address) => async (dispatch) => {
  try {
    const response = await api.put(USER_CHECKOUT_API, address, 'Address')
    const { message } = response
    setTimeout(() => {
      UpdateToast(message || 'Address record updated successfully')
    }, 2000)
    updateLocalStorageRecord('d-address-list', address)
    dispatch(editCheckoutListRecord(address))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'address record updation failed.'
    ErrorToast(errorMessage)
    console.error('Error updating address record:', error)
  }
}

// delete address
export const deleteCheckoutListData = (checkout) => async (dispatch) => {
  try {
    const deletePromises = checkout.map(async (_id) => {
      const response = await api.delete(USER_CHECKOUT_API, _id, 'Address')
      const { message } = response
      DeleteToast(message || 'Address deleted successfully')
      return _id
    })

    const deletedAddress = await Promise.all(deletePromises)
    dispatch(deleteCheckoutListRecord(deletedAddress))
    deleteLocalStorageRecord({
      key: 'd-address-list',
      listRecord: checkout,
      multipleRecords: true,
    })
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Address deletion failed.'
    ErrorToast(errorMessage)
    console.error('Error in deleting address: ', error)
  }
}
