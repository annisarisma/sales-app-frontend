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
import { REACT_APP_HOSPITAL_STAFF_ATTENDANCE_API } from '@src/utils/url_helper'

import {
  addAttendanceList,
  deleteAttendanceList,
  editAttendanceList,
  getAttendanceList,
} from './reducer'

const HOSPITAL_STAFF_ATTENDANCE_API = REACT_APP_HOSPITAL_STAFF_ATTENDANCE_API
const IsApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

//get staff attendance list
export const getAttendanceData = () => async (dispatch) => {
  try {
    if (IsApi === false) {
      const responseData = await getLocalStorage('d-hospital-staff-attendance')
      if (!responseData) {
        const response = await api.get(HOSPITAL_STAFF_ATTENDANCE_API)
        createLocalStorage('d-hospital-staff-attendance', response)
        dispatch(getAttendanceList(response))
      } else {
        dispatch(getAttendanceList(responseData))
      }
    } else {
      const response = await api.get(HOSPITAL_STAFF_ATTENDANCE_API)
      dispatch(getAttendanceList(response))
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Attendance List Fetch Failed'
    ErrorToast(errorMessage)
    console.error('Error fetching attendance data:', error)
  }
}

//add attendance record
export const addAttendanceData = (newRecord) => async (dispatch) => {
  try {
    const response = await api.post(
      HOSPITAL_STAFF_ATTENDANCE_API,
      newRecord,
      'Attendance'
    )
    const { message } = response
    AddToast(message || 'Attendance record added successfully')
    addLocalStorageRecord('d-hospital-staff-attendance', newRecord)
    dispatch(addAttendanceList(newRecord))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Attendance addition failed.'
    ErrorToast(errorMessage)
    console.error('Error in attendance adding record:', error)
  }
}

// edit attendance record
export const editAttendanceData = (appointment) => async (dispatch) => {
  try {
    const response = await api.put(
      HOSPITAL_STAFF_ATTENDANCE_API,
      appointment,
      'Attendance'
    )
    const { message } = response
    setTimeout(() => {
      UpdateToast(message || 'Attendance updated successfully')
    }, 2000)
    updateLocalStorageRecord('d-hospital-staff-attendance', appointment)
    dispatch(editAttendanceList(appointment))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Attendance update failed.'
    ErrorToast(errorMessage)
    console.error('Error updating attendance record:', error)
  }
}

// delete attendance record
export const deleteAttendanceData = (question) => async (dispatch) => {
  try {
    const deletePromises = question.map(async (_id) => {
      const response = await api.delete(
        HOSPITAL_STAFF_ATTENDANCE_API,
        _id,
        'Attendance'
      )
      const { message } = response
      DeleteToast(message || 'Attendance deleted successfully')
      return _id
    })

    const deletedAttendance = await Promise.all(deletePromises)
    dispatch(deleteAttendanceList(deletedAttendance))
    deleteLocalStorageRecord({
      key: 'd-hospital-staff-attendance',
      listRecord: question,
      multipleRecords: true,
    })
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Attendance deletion failed.'
    ErrorToast(errorMessage)
    console.error('Error in Attendance: ', error)
  }
}
