import DeleteToast from '@src/components/CustomComponents/Toast/DeleteToast'
import ErrorToast from '@src/components/CustomComponents/Toast/ErrorToast'
import UpdateToast from '@src/components/CustomComponents/Toast/UpdateToast'
import api from '@src/utils/axios_api'
import {
  createLocalStorage,
  deleteLocalStorageRecord,
  getLocalStorage,
  updateLocalStorageRecord,
} from '@src/utils/crud_functions'
import { REACT_APP_FILE_MANAGER_API } from '@src/utils/url_helper'

import { deleteFileList, editFileList, getFileList } from './reducer'

const FILE_LIST_API = REACT_APP_FILE_MANAGER_API
const IsApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

// get file data
export const getFileListData = () => async (dispatch) => {
  try {
    if (IsApi === false) {
      const responseData = await getLocalStorage('d-file-list')
      if (!responseData) {
        const response = await api.get(FILE_LIST_API)
        createLocalStorage('d-file-list', response)
        dispatch(getFileList(response))
      } else {
        dispatch(getFileList(responseData))
      }
    } else {
      const response = await api.get(FILE_LIST_API)
      dispatch(getFileList(response))
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.message || 'File List Fetch Failed'
    ErrorToast(errorMessage)
    console.error('Error fetching file data:', error)
  }
}

//  delete file
export const deleteFileData = (files) => async (dispatch) => {
  try {
    const deletePromises = files.map(async (_id) => {
      const response = await api.delete(FILE_LIST_API, _id, 'File')
      const { message } = response
      DeleteToast(message || 'File deleted successfully')
      return _id
    })

    const deletedFiles = await Promise.all(deletePromises)
    dispatch(deleteFileList(deletedFiles))
    deleteLocalStorageRecord({
      key: 'd-file-list',
      listRecord: files,
      multipleRecords: true,
    })
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'File record deletion failed.'
    ErrorToast(errorMessage)
    console.error('Error in deleting file : ', error)
  }
}

// edit customer record
export const editFileRecordData = (question) => async (dispatch) => {
  try {
    const response = await api.put(FILE_LIST_API, question, 'File')
    const { message } = response
    setTimeout(() => {
      UpdateToast(message || 'File updated successfully')
    }, 2000)
    updateLocalStorageRecord('d-file-list', question)
    dispatch(editFileList(question))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'File record update failed.'
    ErrorToast(errorMessage)
    console.error('Error updating file record:', error)
  }
}
