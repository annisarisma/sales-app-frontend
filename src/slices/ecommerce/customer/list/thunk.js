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
import { REACT_APP_CUSTOMER_API } from '@src/utils/url_helper'

import {
  addCustomerProductRecord,
  deleteCustomerProductList,
  editCustomerProductRecord,
  getCustomerProductList,
} from './reducer'

const CUSTOMER_LIST_API = REACT_APP_CUSTOMER_API
const IsApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

// get customer list
export const getCustomerProductData = () => async (dispatch) => {
  try {
    if (IsApi === false) {
      const responseData = await getLocalStorage('d-customer-list')
      if (!responseData) {
        const response = await api.get(CUSTOMER_LIST_API)
        createLocalStorage('d-customer-list', response)
        dispatch(getCustomerProductList(response))
      } else {
        dispatch(getCustomerProductList(responseData))
      }
    } else {
      const response = await api.get(CUSTOMER_LIST_API)
      dispatch(getCustomerProductList(response))
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Customer List Fetch Failed'
    ErrorToast(errorMessage)
    console.error('Error fetching customer data:', error)
  }
}

// delete customer record
export const deleteCustomerProductListData =
  (customers) => async (dispatch) => {
    try {
      const deletePromises = customers.map(async (_id) => {
        const response = await api.delete(CUSTOMER_LIST_API, _id, 'Customer')
        const { message } = response
        DeleteToast(message || 'Address deleted successfully')
        return _id
      })

      const deletedCustomers = await Promise.all(deletePromises)
      dispatch(deleteCustomerProductList(deletedCustomers))
      deleteLocalStorageRecord({
        key: 'd-customer-list',
        listRecord: customers,
        multipleRecords: true,
      })
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        'Customer deletion failed.'
      ErrorToast(errorMessage)
      console.error('Error in deleting customer: ', error)
    }
  }

// edit customer record
export const editCustomerProductRecordData = (customer) => async (dispatch) => {
  try {
    const response = await api.put(CUSTOMER_LIST_API, customer, 'Customer')
    const { message } = response
    setTimeout(() => {
      UpdateToast(message || 'Customer record updated successfully')
    }, 2000)
    updateLocalStorageRecord('d-customer-list', customer)
    dispatch(editCustomerProductRecord(customer))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Customer record updation failed.'
    ErrorToast(errorMessage)
    console.error('Error updating customer:', error)
  }
}

// add customer record
export const addCustomerProductRecordData = (newRecord) => async (dispatch) => {
  try {
    const response = await api.post(CUSTOMER_LIST_API, newRecord, 'Customer')
    const { message } = response
    AddToast(message || 'Customer record added successfully')
    addLocalStorageRecord('d-customer-list', newRecord)
    dispatch(addCustomerProductRecord(newRecord))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Customer record addition failed.'
    ErrorToast(errorMessage)
    console.error('Error adding customer:', error)
  }
}
