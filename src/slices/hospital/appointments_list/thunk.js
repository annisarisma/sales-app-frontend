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
import {
  REACT_APP_HOSPITAL_APPOINTMENTS_API,
  REACT_APP_HOSPITAL_TODAY_APPOINTMENT_API,
} from '@src/utils/url_helper'

import {
  addAppointmentsList,
  addTodaysAppointments,
  deleteAppointmentsList,
  deleteTodaysAppointments,
  editAppointmentsList,
  editTodaysAppointments,
  getAppointmentsList,
  getTodaysAppointments,
} from './reducer'

const HOSPITAL_APPOINTMENT_API = REACT_APP_HOSPITAL_APPOINTMENTS_API
const HOSPITAL_TODAY_APPOINTMENT_API = REACT_APP_HOSPITAL_TODAY_APPOINTMENT_API
const IsApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

// get todays appointments list data
export const getTodayAppointmentsData = () => async (dispatch) => {
  try {
    if (IsApi === false) {
      const responseData = await getLocalStorage(
        'd-hospital-appointment-todaylist'
      )
      if (!responseData) {
        const response = await api.get(HOSPITAL_TODAY_APPOINTMENT_API)
        createLocalStorage('d-hospital-appointment-todaylist', response)
        dispatch(getTodaysAppointments(response))
      } else {
        dispatch(getTodaysAppointments(responseData))
      }
    } else {
      const response = await api.get(HOSPITAL_TODAY_APPOINTMENT_API)
      dispatch(getTodaysAppointments(response))
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Appointments Fetch Failed'
    ErrorToast(errorMessage)
    console.error('Error fetching appointments data:', error)
  }
}

// add new todays appointments data
export const addTodayAppointmentsData = (newRecord) => async (dispatch) => {
  try {
    const response = await api.post(
      HOSPITAL_APPOINTMENT_API,
      newRecord,
      'Appointments'
    )
    const { message } = response
    AddToast(message || 'Appointments added successfully')
    addLocalStorageRecord('d-hospital-appointment-todaylist', newRecord)
    dispatch(addTodaysAppointments(newRecord))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Appointments addition failed.'
    ErrorToast(errorMessage)
    console.error('Error in appointments adding record:', error)
  }
}

// edit todays appointments data
export const editTodayAppointmentsData = (question) => async (dispatch) => {
  try {
    const response = await api.put(
      HOSPITAL_TODAY_APPOINTMENT_API,
      question,
      'Appointments'
    )
    const { message } = response
    setTimeout(() => {
      UpdateToast(message || 'Appointments updated successfully')
    }, 2000)
    updateLocalStorageRecord('d-hospital-appointment-todaylist', question)
    dispatch(editTodaysAppointments(question))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Appointments update failed.'
    ErrorToast(errorMessage)
    console.error('Error updating record appointments:', error)
  }
}

// delete todays appointments data
export const deleteTodayAppointmentsData = (question) => async (dispatch) => {
  try {
    const deletePromises = question.map(async (_id) => {
      const response = await api.delete(
        HOSPITAL_TODAY_APPOINTMENT_API,
        _id,
        'Appointments'
      )
      const { message } = response
      DeleteToast(message || 'Appointments deleted successfully')
      return _id
    })

    const deleteTodayAppointments = await Promise.all(deletePromises)
    dispatch(deleteTodaysAppointments(deleteTodayAppointments))
    deleteLocalStorageRecord({
      key: 'd-hospital-appointment-todaylist',
      listRecord: question,
      multipleRecords: true,
    })
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Appointments deletion failed.'
    ErrorToast(errorMessage)
    console.error('Error in deleting today appointments: ', error)
  }
}

//appintment

// get appointments List data
export const getAppointmentsListData = () => async (dispatch) => {
  try {
    if (IsApi === false) {
      const responseData = await getLocalStorage('d-hospital-appointment-list')
      if (!responseData) {
        const response = await api.get(HOSPITAL_APPOINTMENT_API)
        createLocalStorage('d-hospital-appointment-list', response)
        dispatch(getAppointmentsList(response))
      } else {
        dispatch(getAppointmentsList(responseData))
      }
    } else {
      const response = await api.get(HOSPITAL_APPOINTMENT_API)
      dispatch(getAppointmentsList(response))
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Appointment data Fetch Failed.'
    ErrorToast(errorMessage)
    console.error('Error fetching appointment data:', error)
  }
}

// add new appointments list data
export const addAppointmentsListData = (newRecord) => async (dispatch) => {
  try {
    const response = await api.post(
      HOSPITAL_APPOINTMENT_API,
      newRecord,
      'Appointment'
    )
    const { message } = response
    AddToast(message || 'Appointment added successfully')
    addLocalStorageRecord('d-hospital-appointment-list', newRecord)
    dispatch(addAppointmentsList(newRecord))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Appointment addition failed.'
    ErrorToast(errorMessage)
    console.error('Error in appointment adding record:', error)
  }
}

// edit appointments list data
export const editAppointmentsListData = (appointment) => async (dispatch) => {
  try {
    const response = await api.put(
      HOSPITAL_APPOINTMENT_API,
      appointment,
      'Appointments'
    )
    const { message } = response
    setTimeout(() => {
      UpdateToast(message || 'Appointments updated successfully')
    }, 2000)
    updateLocalStorageRecord('d-hospital-appointment-list', appointment)
    dispatch(editAppointmentsList(appointment))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Appointments update failed.'
    ErrorToast(errorMessage)
    console.error('Error updating record appointments:', error)
  }
}

// delete appointments list data
export const deleteAppointmentsListData = (question) => async (dispatch) => {
  try {
    const deletePromises = question.map(async (_id) => {
      const response = await api.delete(
        HOSPITAL_APPOINTMENT_API,
        _id,
        'Appointments'
      )
      const { message } = response
      DeleteToast(message || 'Appointments deleted successfully')
      return _id
    })

    const deletedAppointmentList = await Promise.all(deletePromises)
    dispatch(deleteAppointmentsList(deletedAppointmentList))
    deleteLocalStorageRecord({
      key: 'd-hospital-appointment-list',
      listRecord: question,
      multipleRecords: true,
    })
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Appointments deletion failed.'
    ErrorToast(errorMessage)
    console.error('Error in deleting appointments : ', error)
  }
}
