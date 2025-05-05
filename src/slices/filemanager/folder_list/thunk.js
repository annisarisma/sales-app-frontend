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
import { REACT_APP_FILE_MANAGER_FOLDER_API } from '@src/utils/url_helper'

import {
  addFolderList,
  deleteFolderList,
  editFolderList,
  getFolderList,
} from './reducer'

const FOLDER_LIST_API = REACT_APP_FILE_MANAGER_FOLDER_API
const IsApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

// get folder list
export const getFolderListData = () => async (dispatch) => {
  try {
    if (IsApi === false) {
      const responseData = await getLocalStorage('d-folder-list')
      if (!responseData) {
        const response = await api.get(FOLDER_LIST_API)
        createLocalStorage('d-folder-list', response)
        dispatch(getFolderList(response))
      } else {
        dispatch(getFolderList(responseData))
      }
    } else {
      const response = await api.get(FOLDER_LIST_API)
      dispatch(getFolderList(response))
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Folder List Fetch Failed!'
    ErrorToast(errorMessage)
    console.error('Error fetching folder data:', error)
  }
}

//  delete Folder
export const deleteFolderData = (question) => async (dispatch) => {
  try {
    const deletePromises = question.map(async (_id) => {
      const response = await api.delete(FOLDER_LIST_API, _id, 'Folder')
      const { message } = response
      DeleteToast(message || 'Folder deleted successfully')
      return _id
    })

    const deletedQuestions = await Promise.all(deletePromises)
    dispatch(deleteFolderList(deletedQuestions))
    deleteLocalStorageRecord({
      key: 'd-folder-list',
      listRecord: question,
      multipleRecords: true,
    })
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Folder record deletion failed!'
    ErrorToast(errorMessage)
    console.error('Error in deleting folder: ', error)
  }
}

// edit folder record
export const editFolderRecordData = (question) => async (dispatch) => {
  try {
    const response = await api.put(FOLDER_LIST_API, question, 'Folder')
    const { message } = response
    setTimeout(() => {
      UpdateToast(message || 'Folder updated successfully')
    }, 2000)
    updateLocalStorageRecord('d-folder-list', question)
    dispatch(editFolderList(question))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Folder record update failed.'
    ErrorToast(errorMessage)
    console.error('Error updating record:', error)
  }
}

// add folder record
export const addFolderRecordData = (newRecord) => async (dispatch) => {
  try {
    const response = await api.post(FOLDER_LIST_API, newRecord, 'Folder')
    const { message } = response
    AddToast(message || 'Exam question added successfully')
    addLocalStorageRecord('d-folder-list', newRecord)
    dispatch(addFolderList(newRecord))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Folder record addition failed.'
    ErrorToast(errorMessage)
    console.error('Error adding folder record:', error)
  }
}
