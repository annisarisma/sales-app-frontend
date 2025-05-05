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
import { REACT_APP_HOSPITAL_STAFF_API } from '@src/utils/url_helper'

import {
  addStaffList,
  deleteStaffList,
  editStaffList,
  getStaffList,
} from './reducer'

const HOSPITAL_STAFF_API = REACT_APP_HOSPITAL_STAFF_API
const IsApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

// get staff list
export const getStaffListData = () => async (dispatch) => {
  try {
    if (IsApi === false) {
      const responseData = await getLocalStorage('d-hospital-staff-list')
      if (!responseData) {
        const response = await api.get(HOSPITAL_STAFF_API)
        createLocalStorage('d-hospital-staff-list', response)
        dispatch(getStaffList(response))
      } else {
        dispatch(getStaffList(responseData))
      }
    } else {
      const response = await api.get(HOSPITAL_STAFF_API)
      dispatch(getStaffList(response))
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Satff List Fetch Failed'
    ErrorToast(errorMessage)
    console.error('Error fetching Satff data:', error)
  }
}

// add staff member record
export const addStaffListData = (newRecord) => async (dispatch) => {
  try {
    const response = await api.post(
      HOSPITAL_STAFF_API,
      newRecord,
      'Staff Member'
    )
    const { message } = response
    AddToast(message || 'Staff Member added successfully')
    addLocalStorageRecord('d-hospital-staff-list', newRecord)
    dispatch(addStaffList(newRecord))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Staff Member addition failed.'
    ErrorToast(errorMessage)
    console.error('Error in staff member adding record:', error)
  }
}

// edit customer record
export const editStaffListData = (appointment) => async (dispatch) => {
  try {
    const response = await api.put(
      HOSPITAL_STAFF_API,
      appointment,
      'Staff Member'
    )
    const { message } = response
    setTimeout(() => {
      UpdateToast(message || 'Staff Member updated successfully')
    }, 2000)
    updateLocalStorageRecord('d-hospital-staff-list', appointment)
    dispatch(editStaffList(appointment))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Staff Member update failed.'
    ErrorToast(errorMessage)
    console.error('Error updating staff member record:', error)
  }
}

// delete customer record
export const deleteStaffListData = (question) => async (dispatch) => {
  try {
    const deletePromises = question.map(async (_id) => {
      const response = await api.delete(HOSPITAL_STAFF_API, _id, 'Staff Member')
      const { message } = response
      DeleteToast(message || 'Staff Member deleted successfully')
      return _id
    })

    const deletedStaffList = await Promise.all(deletePromises)
    dispatch(deleteStaffList(deletedStaffList))
    deleteLocalStorageRecord({
      key: 'd-hospital-staff-list',
      listRecord: question,
      multipleRecords: true,
    })
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Staff Member deletion failed.'
    ErrorToast(errorMessage)
    console.error('Error in staff member: ', error)
  }
}
