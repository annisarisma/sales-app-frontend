import ErrorToast from '@src/components/CustomComponents/Toast/ErrorToast'
import UpdateToast from '@src/components/CustomComponents/Toast/UpdateToast'
import api from '@src/utils/axios_api'
import {
  createLocalStorage,
  getLocalStorage,
  updateLocalStorageRecord,
} from '@src/utils/crud_functions'
import { REACT_APP_HOSPITAL_STAFF_LEAVE_API } from '@src/utils/url_helper'

import { editStaffLeaveList, getStaffLeaveList } from './reducer'

const HOSPITAL_STAFF_LEAVE_API = REACT_APP_HOSPITAL_STAFF_LEAVE_API
const IsApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

export const getStaffLeaveData = () => async (dispatch) => {
  try {
    if (IsApi === false) {
      const responseData = await getLocalStorage('d-hospital-staff-leave')
      if (!responseData) {
        const response = await api.get(HOSPITAL_STAFF_LEAVE_API)
        createLocalStorage('d-hospital-staff-leave', response)
        dispatch(getStaffLeaveList(response))
      } else {
        dispatch(getStaffLeaveList(responseData))
      }
    } else {
      const response = await api.get(HOSPITAL_STAFF_LEAVE_API)
      dispatch(getStaffLeaveList(response))
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Satff  Leave Fetch Failed'
    ErrorToast(errorMessage)
    console.error('Error fetching staff Leave data:', error)
  }
}

export const editStaffLeaveData = (appointment) => async (dispatch) => {
  try {
    const response = await api.put(
      HOSPITAL_STAFF_LEAVE_API,
      appointment,
      'Staff Leave'
    )
    const { message } = response
    setTimeout(() => {
      UpdateToast(message || 'Staff Leave updated successfully')
    }, 2000)
    updateLocalStorageRecord('d-hospital-staff-leave', appointment)
    dispatch(editStaffLeaveList(appointment))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Staff Leave update failed.'
    ErrorToast(errorMessage)
    console.error('Error updating staff leave record:', error)
  }
}
