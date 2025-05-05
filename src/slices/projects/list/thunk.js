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
import { REACT_APP_PROJECT_LIST_API } from '@src/utils/url_helper'

import {
  addProjectList,
  deleteProjectList,
  editProjectList,
  getProjectList,
} from './reducer'

const PROJECT_LIST_API = REACT_APP_PROJECT_LIST_API
const IsApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

// get data
export const getProjectListData = () => async (dispatch) => {
  try {
    if (IsApi === false) {
      const responseData = await getLocalStorage('d-project-list')
      if (!responseData) {
        const response = await api.get(PROJECT_LIST_API)
        createLocalStorage('d-project-list', response)
        dispatch(getProjectList(response))
      } else {
        dispatch(getProjectList(responseData))
      }
    } else {
      const response = await api.get(PROJECT_LIST_API)
      dispatch(getProjectList(response))
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Project List Fetch Failed'
    ErrorToast(errorMessage)
    console.error('Error fetching project list data:', error)
  }
}

// add record
export const addProjectListData = (newRecord) => async (dispatch) => {
  try {
    const response = await api.post(PROJECT_LIST_API, newRecord, 'Project List')
    const { message } = response
    AddToast(message || 'Project List added successfully')
    addLocalStorageRecord('d-project-list', newRecord)
    dispatch(addProjectList(newRecord))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Project List addition failed.'
    ErrorToast(errorMessage)
    console.error('Error adding project list record:', error)
  }
}

// edit data
export const editProjectData = (question) => async (dispatch) => {
  try {
    const response = await api.put(PROJECT_LIST_API, question, 'Project List')
    const { message } = response
    setTimeout(() => {
      UpdateToast(message || 'Project List updated successfully')
    }, 2000)
    updateLocalStorageRecord('d-project-list', question)
    dispatch(editProjectList(question))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Project List update failed.'
    ErrorToast(errorMessage)
    console.error('Error updating project list record:', error)
  }
}

// delete data
export const deleteProjectListData = (question) => async (dispatch) => {
  try {
    const deletePromises = question.map(async (_id) => {
      const response = await api.delete(PROJECT_LIST_API, _id, 'Project List')
      const { message } = response
      DeleteToast(message || 'Project List deleted successfully')
      return _id
    })

    const deletedList = await Promise.all(deletePromises)
    dispatch(deleteProjectList(deletedList))
    deleteLocalStorageRecord({
      key: 'd-project-list',
      listRecord: question,
      multipleRecords: true,
    })
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Project List deletion failed.'
    ErrorToast(errorMessage)
    console.error('Error in deleting project list: ', error)
  }
}
