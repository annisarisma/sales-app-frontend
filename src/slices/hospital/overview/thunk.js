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
  REACT_APP_HOSPITAL_APPOINTMENT_APT,
  REACT_APP_HOSPITAL_OVERVIEW_MEDICINE_API,
  REACT_APP_HOSPITAL_REPORTS_OVERVIEW_API,
} from '@src/utils/url_helper'

import {
  addAppointments,
  addMedicine,
  addReport,
  deleteAppointments,
  deleteMedicine,
  deleteReport,
  editAppointments,
  editMedicine,
  editReport,
  getAppointments,
  getMedicine,
  getReport,
} from './reducer'

const HOSPITAL_REPORTS_API = REACT_APP_HOSPITAL_REPORTS_OVERVIEW_API
const HOSPITAL_MEDICINE_API = REACT_APP_HOSPITAL_OVERVIEW_MEDICINE_API
const HOSPITAL_APPOINTMENT_API = REACT_APP_HOSPITAL_APPOINTMENT_APT
const IsApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

// get reports data
export const getReportsData = () => async (dispatch) => {
  try {
    if (IsApi === false) {
      const responseData = await getLocalStorage('d-report')
      if (!responseData) {
        const response = await api.get(HOSPITAL_REPORTS_API)
        createLocalStorage('d-report', response)
        dispatch(getReport(response))
      } else {
        dispatch(getReport(responseData))
      }
    } else {
      const response = await api.get(HOSPITAL_REPORTS_API)
      dispatch(getReport(response))
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Patients List Fetch Failed'
    ErrorToast(errorMessage)
    console.error('Error fetching patients data:', error)
  }
}

// add new report
export const addReportstData = (newRecord) => async (dispatch) => {
  try {
    const response = await api.post(HOSPITAL_REPORTS_API, newRecord, 'Reports')
    const { message } = response
    AddToast(message || 'Reports record added successfully')
    addLocalStorageRecord('d-report', newRecord)
    dispatch(addReport(newRecord))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Reports addition failed.'
    ErrorToast(errorMessage)
    console.error('Error adding reports record:', error)
  }
}

//edit reports data
export const editReportstData = (appointment) => async (dispatch) => {
  try {
    const response = await api.put(HOSPITAL_REPORTS_API, appointment, 'Reports')
    const { message } = response
    setTimeout(() => {
      UpdateToast(message || 'Report updated successfully')
    }, 2000)
    updateLocalStorageRecord('d-report', appointment)
    dispatch(editReport(appointment))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.message || 'Report update failed.'
    ErrorToast(errorMessage)
    console.error('Error updating report record:', error)
  }
}

// delete report data
export const deleteReportsData = (question) => async (dispatch) => {
  try {
    const deletePromises = question.map(async (_id) => {
      const response = await api.delete(HOSPITAL_REPORTS_API, _id, 'Reports')
      const { message } = response
      DeleteToast(message || 'Reports deleted successfully')
      return _id
    })

    const deletedReports = await Promise.all(deletePromises)
    dispatch(deleteReport(deletedReports))
    deleteLocalStorageRecord({
      key: 'd-report',
      listRecord: question,
      multipleRecords: true,
    })
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Reports deletion failed.'
    ErrorToast(errorMessage)
    console.error('Error in reports: ', error)
  }
}

//madicin

//get madicine data
export const getMedicineData = () => async (dispatch) => {
  try {
    if (IsApi === false) {
      const responseData = await getLocalStorage('d-medicine')
      if (!responseData) {
        const response = await api.get(HOSPITAL_MEDICINE_API)
        createLocalStorage('d-medicine', response)
        dispatch(getMedicine(response))
      } else {
        dispatch(getMedicine(responseData))
      }
    } else {
      const response = await api.get(HOSPITAL_MEDICINE_API)
      dispatch(getMedicine(response))
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.message || 'Medicine Fetch Failed'
    ErrorToast(errorMessage)
    console.error('Error fetching madicine data:', error)
  }
}

//add madicine data
export const addMedicineData = (newRecord) => async (dispatch) => {
  try {
    const response = await api.post(
      HOSPITAL_MEDICINE_API,
      newRecord,
      'Medicine'
    )
    const { message } = response
    AddToast(message || 'Medicine record added successfully')
    addLocalStorageRecord('d-medicine', newRecord)
    dispatch(addMedicine(newRecord))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Medicine addition failed.'
    ErrorToast(errorMessage)
    console.error('Error adding medicine record:', error)
  }
}

//edite madicine data
export const editMedicineData = (appointment) => async (dispatch) => {
  try {
    const response = await api.put(
      HOSPITAL_MEDICINE_API,
      appointment,
      'Medicine'
    )
    const { message } = response
    setTimeout(() => {
      UpdateToast(message || 'Medicine updated successfully')
    }, 2000)
    updateLocalStorageRecord('d-medicine', appointment)
    dispatch(editMedicine(appointment))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Medicine update failed.'
    ErrorToast(errorMessage)
    console.error('Error updating medicine record:', error)
  }
}

// delete madicine data
export const deleteMedicineData = (question) => async (dispatch) => {
  try {
    const deletePromises = question.map(async (_id) => {
      const response = await api.delete(HOSPITAL_MEDICINE_API, _id, 'Medicine')
      const { message } = response
      DeleteToast(message || 'Medicine deleted successfully')
      return _id
    })

    const deletedMedicine = await Promise.all(deletePromises)
    dispatch(deleteMedicine(deletedMedicine))
    deleteLocalStorageRecord({
      key: 'd-medicine',
      listRecord: question,
      multipleRecords: true,
    })
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Medicine deletion failed.'
    ErrorToast(errorMessage)
    console.error('Error in medicine: ', error)
  }
}

//Appointments

// get appointments data
export const getAppointmentsData = () => async (dispatch) => {
  try {
    if (IsApi === false) {
      const responseData = await getLocalStorage('d-appointments')
      if (!responseData) {
        const response = await api.get(HOSPITAL_APPOINTMENT_API)
        createLocalStorage('d-appointments', response)
        dispatch(getAppointments(response))
      } else {
        dispatch(getAppointments(responseData))
      }
    } else {
      const response = await api.get(HOSPITAL_APPOINTMENT_API)
      dispatch(getAppointments(response))
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

// add new appointments
export const addAppointmentsData = (newRecord) => async (dispatch) => {
  try {
    const response = await api.post(
      HOSPITAL_APPOINTMENT_API,
      newRecord,
      'Appointments'
    )
    const { message } = response
    AddToast(message || 'Appointments record added successfully')
    addLocalStorageRecord('d-appointments', newRecord)
    dispatch(addAppointments(newRecord))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Appointments addition failed.'
    ErrorToast(errorMessage)
    console.error('Error adding appointments record:', error)
  }
}

// edit appointments
export const editAppointmentsData = (appointment) => async (dispatch) => {
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
    updateLocalStorageRecord('d-appointments', appointment)
    dispatch(editAppointments(appointment))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Appointments update failed.'
    ErrorToast(errorMessage)
    console.error('Error updating appointments record:', error)
  }
}

// delete appointments
export const deleteAppointmentsData = (question) => async (dispatch) => {
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

    const deletedAppointment = await Promise.all(deletePromises)
    dispatch(deleteAppointments(deletedAppointment))
    deleteLocalStorageRecord({
      key: 'd-appointments',
      listRecord: question,
      multipleRecords: true,
    })
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Appointments deletion failed.'
    ErrorToast(errorMessage)
    console.error('Error in appointments: ', error)
  }
}
