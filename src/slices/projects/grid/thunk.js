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
import { REACT_APP_PROJECT_GRID_API } from '@src/utils/url_helper'

import {
  addProjectGrid,
  deleteProjectGrid,
  editProjectGrid,
  getProjectGrid,
} from './reducer'

const PROJECT_GRID_API = REACT_APP_PROJECT_GRID_API
const IsApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

// get data
export const getProjectGridData = () => async (dispatch) => {
  try {
    if (IsApi === false) {
      const responseData = await getLocalStorage('d-project-grid')
      if (!responseData) {
        const response = await api.get(PROJECT_GRID_API)
        createLocalStorage('d-project-grid', response)
        dispatch(getProjectGrid(response))
      } else {
        dispatch(getProjectGrid(responseData))
      }
    } else {
      const response = await api.get(PROJECT_GRID_API)
      dispatch(getProjectGrid(response))
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Projects Grid Fetch Failed!'
    ErrorToast(errorMessage)
    console.error('Error fetching project grid data:', error)
  }
}

// add record
export const addProjectGridData = (newRecord) => async (dispatch) => {
  try {
    const response = await api.post(PROJECT_GRID_API, newRecord, 'Project Grid')
    const { message } = response
    AddToast(message || 'Project Grid added successfully')
    addLocalStorageRecord('d-project-grid', newRecord)
    dispatch(addProjectGrid(newRecord))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Project Grid addition failed!'
    ErrorToast(errorMessage)
    console.error('Error adding record:', error)
  }
}

// edit data
export const editProjectGridData = (question) => async (dispatch) => {
  try {
    const response = await api.put(PROJECT_GRID_API, question, 'Project Grid')
    const { message } = response
    setTimeout(() => {
      UpdateToast(message || 'Project Grid updated successfully')
    }, 2000)
    updateLocalStorageRecord('d-project-grid', question)
    dispatch(editProjectGrid(question))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Project Grid update failed!'
    ErrorToast(errorMessage)
    console.error('Error updating project grid record:', error)
  }
}

// delete data
export const deleteProjectGridData = (question) => async (dispatch) => {
  try {
    const deletePromises = question.map(async (_id) => {
      const response = await api.delete(PROJECT_GRID_API, _id, 'Project Grid')
      const { message } = response
      DeleteToast(message || 'Project Grid deleted successfully')
      return _id
    })

    const deletedGrid = await Promise.all(deletePromises)
    dispatch(deleteProjectGrid(deletedGrid))
    deleteLocalStorageRecord({
      key: 'd-project-grid',
      listRecord: question,
      multipleRecords: true,
    })
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Project Grid deletion failed!'
    ErrorToast(errorMessage)
    console.error('Error in deleting project grid: ', error)
  }
}
