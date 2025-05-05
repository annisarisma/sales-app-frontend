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
import { REACT_APP_HOSPITAL_DEPARTMENT_API } from '@src/utils/url_helper'

import {
  addDepartment,
  deleteDepartment,
  editDepartment,
  getDepartment,
} from './reducer'

const HOSPITAL_DEPARTMENT_API = REACT_APP_HOSPITAL_DEPARTMENT_API
const IsApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

//get department data
export const getDepartmentsData = () => async (dispatch) => {
  try {
    if (IsApi === false) {
      const responseData = await getLocalStorage('d-hospital-department')
      if (!responseData) {
        const response = await api.get(HOSPITAL_DEPARTMENT_API)
        createLocalStorage('d-hospital-department', response)
        dispatch(getDepartment(response))
      } else {
        dispatch(getDepartment(responseData))
      }
    } else {
      const response = await api.get(HOSPITAL_DEPARTMENT_API)
      dispatch(getDepartment(response))
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Department Fetch Failed'
    ErrorToast(errorMessage)
    console.error('Error fetching appointments data:', error)
  }
}

//add department
export const addDepartmentsData = (newRecord) => async (dispatch) => {
  try {
    const response = await api.post(
      HOSPITAL_DEPARTMENT_API,
      newRecord,
      'Departments'
    )
    const { message } = response
    AddToast(message || 'Department added successfully')
    addLocalStorageRecord('d-hospital-department', newRecord)
    dispatch(addDepartment(newRecord))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Department addition failed.'
    ErrorToast(errorMessage)
    console.error('Error in hospital department adding record:', error)
  }
}

//edit department
export const editDepartmentsData = (appointment) => async (dispatch) => {
  try {
    const response = await api.put(
      HOSPITAL_DEPARTMENT_API,
      appointment,
      'Departments'
    )
    const { message } = response
    setTimeout(() => {
      UpdateToast(message || 'Departments updated successfully')
    }, 2000)
    updateLocalStorageRecord('d-hospital-department', appointment)
    dispatch(editDepartment(appointment))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Departments update failed.'
    ErrorToast(errorMessage)
    console.error('Error updating medicine record:', error)
  }
}

//delete department
export const deleteDepartmentsData = (question) => async (dispatch) => {
  try {
    const deletePromises = question.map(async (_id) => {
      const response = await api.delete(
        HOSPITAL_DEPARTMENT_API,
        _id,
        'Department'
      )
      const { message } = response
      DeleteToast(message || 'Department deleted successfully')
      return _id
    })

    const deletedDepartment = await Promise.all(deletePromises)
    dispatch(deleteDepartment(deletedDepartment))
    deleteLocalStorageRecord({
      key: 'd-hospital-department',
      listRecord: question,
      multipleRecords: true,
    })
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Department deletion failed.'
    ErrorToast(errorMessage)
    console.error('Error in deleting Department: ', error)
  }
}
