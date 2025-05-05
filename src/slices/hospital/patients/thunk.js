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
import { REACT_APP_HOSPITAL_PATIENTS_LIST_API } from '@src/utils/url_helper'

import {
  addPatients,
  deletePatients,
  editPatients,
  getPatients,
  setCurrentPatients,
} from './reducer'

const HOSPITAL_PATIENTS_API = REACT_APP_HOSPITAL_PATIENTS_LIST_API
const IsApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

// get patients data
export const getPatientsData = () => async (dispatch) => {
  try {
    if (IsApi === false) {
      const responseData = await getLocalStorage('d-hospital-patients-list')
      if (!responseData) {
        const response = await api.get(HOSPITAL_PATIENTS_API)
        createLocalStorage('d-hospital-patients-list', response)
        dispatch(getPatients(response))
      } else {
        dispatch(getPatients(responseData))
      }
    } else {
      const response = await api.get(HOSPITAL_PATIENTS_API)
      dispatch(getPatients(response))
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

// add new patients
export const addPatientsData = (newRecord) => async (dispatch) => {
  try {
    const response = await api.post(
      HOSPITAL_PATIENTS_API,
      newRecord,
      'Patients'
    )
    const { message } = response
    AddToast(message || 'Patients record added successfully')
    addLocalStorageRecord('d-hospital-patients-list', newRecord)
    dispatch(addPatients(newRecord))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Patients addition failed.'
    ErrorToast(errorMessage)
    console.error('Error in patients adding record:', error)
  }
}

// edit patients
export const editPatientsData = (appointment) => async (dispatch) => {
  try {
    const response = await api.put(
      HOSPITAL_PATIENTS_API,
      appointment,
      'Patient'
    )
    const { message } = response
    setTimeout(() => {
      UpdateToast(message || 'Patient updated successfully')
    }, 2000)
    updateLocalStorageRecord('d-hospital-patients-list', appointment)
    dispatch(editPatients(appointment))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.message || 'Patient update failed.'
    ErrorToast(errorMessage)
    console.error('Error updating patient record:', error)
  }
}

// delete patients
export const deletePatientsData = (question) => async (dispatch) => {
  try {
    const deletePromises = question.map(async (_id) => {
      const response = await api.delete(HOSPITAL_PATIENTS_API, _id, 'Patient')
      const { message } = response
      DeleteToast(message || 'Patient deleted successfully')
      return _id
    })

    const deletedPatients = await Promise.all(deletePromises)
    dispatch(deletePatients(deletedPatients))
    deleteLocalStorageRecord({
      key: 'd-hospital-patients-list',
      listRecord: question,
      multipleRecords: true,
    })
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Patient deletion failed.'
    ErrorToast(errorMessage)
    console.error('Error in patient: ', error)
  }
}

// update current patients
export const modifyCurrentPatients =
  (modifyPatint, patientMode) => async (dispatch) => {
    try {
      const response = { data: modifyPatint, editMode: patientMode }
      dispatch(
        setCurrentPatients({ patient: response.data, mode: response.editMode })
      )
    } catch (error) {
      console.error(error)
    }
  }
