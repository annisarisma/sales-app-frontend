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
import { REACT_APP_EMAIL_API } from '@src/utils/url_helper'

import {
  addMail,
  deleteMail,
  editMail,
  getMail,
  setCurrentEmail,
} from './reducer'

const EMAIL_LIST_API = REACT_APP_EMAIL_API
const IsApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

// get mail data
export const getMailData = () => async (dispatch) => {
  try {
    if (IsApi === false) {
      const responseData = await getLocalStorage('d-email-list')
      if (!responseData) {
        const response = await api.get(EMAIL_LIST_API)
        createLocalStorage('d-email-list', response)
        dispatch(getMail(response))
      } else {
        dispatch(getMail(responseData))
      }
    } else {
      const response = await api.get(EMAIL_LIST_API)
      dispatch(getMail(response))
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Email List Fetch Failed'
    ErrorToast(errorMessage)
    console.error('Error fetching email data:', error)
  }
}

// delete mail record
export const deleteMailData = (question) => async (dispatch) => {
  try {
    const deletePromises = question.map(async (_id) => {
      const response = await api.delete(EMAIL_LIST_API, _id, 'Email')
      const { message } = response
      DeleteToast(message || 'Email deleted successfully')
      return _id
    })

    const deletedEmails = await Promise.all(deletePromises)
    dispatch(deleteMail(deletedEmails))
    deleteLocalStorageRecord({
      key: 'd-email-list',
      listRecord: question,
      multipleRecords: true,
    })
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Email record deletion failed. '
    ErrorToast(errorMessage)
    console.error('Error in deleting email: ', error)
  }
}

// add email record
export const addEmailListRecordData = (newRecord) => async (dispatch) => {
  try {
    const response = await api.post(EMAIL_LIST_API, newRecord, 'Email')
    const { message } = response
    AddToast(message || 'Email record added successfully')
    addLocalStorageRecord('d-email-list', newRecord)
    dispatch(addMail(newRecord))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Email record addition failed.'
    ErrorToast(errorMessage)
    console.error('Error adding email record:', error)
  }
}

// edit mail record
export const editEmailListRecordData = (question) => async (dispatch) => {
  try {
    const response = await api.put(EMAIL_LIST_API, question, 'Email')
    const { message } = response
    setTimeout(() => {
      UpdateToast(message || 'Email record updated successfully')
    }, 2000)
    updateLocalStorageRecord('d-email-list', question)
    dispatch(editMail(question))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Email record updation failed.'
    ErrorToast(errorMessage)
    console.error('Error adding email record:', error)
  }
}

// set current email record
export const setCurrentEmailRecordData = (email) => async (dispatch) => {
  try {
    const response = { data: email }
    const { data } = response
    dispatch(setCurrentEmail(data))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Email record current set failed.'
    ErrorToast(errorMessage)
    console.error('Error current set record:', error)
  }
}
