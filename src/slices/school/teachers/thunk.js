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
import { REACT_APP_SCHOOL_TEACHER_LIST_API } from '@src/utils/url_helper'

import {
  addTeacherList,
  deleteTeacherList,
  editTeacherList,
  getTeacherList,
} from './reducer'

const SCHOOL_TEACHER_LIST_API = REACT_APP_SCHOOL_TEACHER_LIST_API
const IsApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

// get teacher list
export const getTeacherListData = () => async (dispatch) => {
  try {
    if (IsApi === false) {
      const responseData = await getLocalStorage('d-teacher-list')
      if (!responseData) {
        const response = await api.get(SCHOOL_TEACHER_LIST_API)
        createLocalStorage('d-teacher-list', response)
        dispatch(getTeacherList(response))
      } else {
        dispatch(getTeacherList(responseData))
      }
    } else {
      const response = await api.get(SCHOOL_TEACHER_LIST_API)
      dispatch(getTeacherList(response))
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Teacher List Fetch Failed.'
    ErrorToast(errorMessage)
    console.error('Error fetching teacher list data:', error)
  }
}

// add teacher record
export const addTeacherListData = (newRecord) => async (dispatch) => {
  try {
    const response = await api.post(
      SCHOOL_TEACHER_LIST_API,
      newRecord,
      'Teacher List'
    )
    const { message } = response
    AddToast(message || 'Teacher List added successfully')
    addLocalStorageRecord('d-teacher-list', newRecord)
    dispatch(addTeacherList(newRecord))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Teacher List addition failed.'
    ErrorToast(errorMessage)
    console.error('Error adding teacher list record:', error)
  }
}

// edit teacher record
export const editTeacherListData = (teacher) => async (dispatch) => {
  try {
    const response = await api.put(
      SCHOOL_TEACHER_LIST_API,
      teacher,
      'Teacher List'
    )
    const { message } = response
    setTimeout(() => {
      UpdateToast(message || 'Teacher List updated successfully')
    }, 2000)
    updateLocalStorageRecord('d-teacher-list', teacher)
    dispatch(editTeacherList(teacher))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Teacher List record updation failed.'
    ErrorToast(errorMessage)
    console.error('Error updating teacher list:', error)
  }
}

// delete teacher record
export const deleteTeacherListData = (teacher) => async (dispatch) => {
  try {
    const deletePromises = teacher.map(async (_id) => {
      const response = await api.delete(
        SCHOOL_TEACHER_LIST_API,
        _id,
        'Teacher List'
      )
      const { message } = response
      DeleteToast(message || 'Teacher record deleted successfully')
      return _id
    })

    const deletedTeachers = await Promise.all(deletePromises)
    dispatch(deleteTeacherList(deletedTeachers))
    deleteLocalStorageRecord({
      key: 'd-teacher-list',
      listRecord: deletedTeachers,
      multipleRecords: true,
    })
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Teacher List record deletion failed.'
    ErrorToast(errorMessage)
    console.error('Error in deleting teacher list: ', error)
  }
}
