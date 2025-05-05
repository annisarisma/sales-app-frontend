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
import { REACT_APP_CRM_CONTACT_API } from '@src/utils/url_helper'

import {
  addContactList,
  deleteContactList,
  editContactList,
  getContactList,
} from './reducer'

const CONTACT_LIST_API = REACT_APP_CRM_CONTACT_API
const IsApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

// get contact
export const getContactData = () => async (dispatch) => {
  try {
    if (IsApi === false) {
      const responseData = await getLocalStorage('d-crm-contact-list')
      if (!responseData) {
        const response = await api.get(CONTACT_LIST_API)
        createLocalStorage('d-crm-contact-list', response)
        dispatch(getContactList(response))
      } else {
        dispatch(getContactList(responseData))
      }
    } else {
      const response = await api.get(CONTACT_LIST_API)
      dispatch(getContactList(response))
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Contact List Fetch Failed'
    ErrorToast(errorMessage)
    console.error('Error fetching contact data:', error)
  }
}

// add contact record
export const addContactListData = (newRecord) => async (dispatch) => {
  try {
    const response = await api.post(CONTACT_LIST_API, newRecord, 'Contact')
    const { message } = response
    AddToast(message || 'Contact record added successfully')
    addLocalStorageRecord('d-crm-contact-list', newRecord)
    dispatch(addContactList(newRecord))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Contact record addition failed.'
    ErrorToast(errorMessage)
    console.error('Error adding contact record:', error)
  }
}

// edit contact record
export const editContactListData = (question) => async (dispatch) => {
  try {
    const response = await api.put(CONTACT_LIST_API, question, 'Contact')
    const { message } = response
    setTimeout(() => {
      UpdateToast(message || 'Contact record updated successfully')
    }, 2000)
    updateLocalStorageRecord('d-crm-contact-list', question)
    dispatch(editContactList(question))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Contact record updation failed.'
    ErrorToast(errorMessage)
    console.error('Error adding contact record:', error)
  }
}

// delete customer record
export const deleteContactListData = (question) => async (dispatch) => {
  try {
    const deletePromises = question.map(async (id) => {
      const response = await api.delete(CONTACT_LIST_API, id, 'Contact')
      const { message } = response
      DeleteToast(message || 'Deal record deleted successfully')
      return id
    })

    const deletedContacts = await Promise.all(deletePromises)
    dispatch(deleteContactList(deletedContacts))
    deleteLocalStorageRecord({
      key: 'd-crm-contact-list',
      listRecord: question,
      multipleRecords: true,
    })
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Contact record deletion failed.'
    ErrorToast(errorMessage)
    console.error('Error in deleting contact: ', error)
  }
}
