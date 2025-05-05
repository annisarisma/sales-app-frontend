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
import { REACT_APP_SCHOOL_STUDENT_LIST_API } from '@src/utils/url_helper'

import {
  addStudentList,
  deleteStudentList,
  editStudentList,
  getStudentList,
  setCurrentStudent,
} from './reducer'

const SCHOOL_STUDENT_LIST_API = REACT_APP_SCHOOL_STUDENT_LIST_API
const IsApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

// get student data
export const getStudentListData = () => async (dispatch) => {
  try {
    if (IsApi === false) {
      const responseData = await getLocalStorage('d-students-list')
      if (!responseData) {
        const response = await api.get(SCHOOL_STUDENT_LIST_API)
        createLocalStorage('d-students-list', response)
        dispatch(getStudentList(response))
      } else {
        dispatch(getStudentList(responseData))
      }
    } else {
      const response = await api.get(SCHOOL_STUDENT_LIST_API)
      dispatch(getStudentList(response))
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'exam schedule Fetch Failed'
    ErrorToast(errorMessage)
    console.error('Error fetching exam schedule data:', error)
  }
}

// add new student
export const addStudentListData = (newRecord) => async (dispatch) => {
  try {
    const response = await api.post(
      SCHOOL_STUDENT_LIST_API,
      newRecord,
      'Student'
    )
    const { message } = response
    AddToast(message)
    addLocalStorageRecord('d-students-list', newRecord)
    dispatch(addStudentList(newRecord || 'student record added successfully'))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'student addition failed.'
    ErrorToast(errorMessage)
    console.error('Error adding record:', error)
  }
}

// edit student
export const editStudentListData = (question) => async (dispatch) => {
  try {
    const response = await api.put(SCHOOL_STUDENT_LIST_API, question, 'Student')
    const { message } = response
    setTimeout(() => {
      UpdateToast(message || 'student record updated successfully')
    }, 2000)
    updateLocalStorageRecord('d-students-list', question)
    dispatch(editStudentList(question))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Exam question update failed.'
    ErrorToast(errorMessage)
    console.error('Error updating record:', error)
  }
}

// delete student
export const deleteStudentListData = (question) => async (dispatch) => {
  try {
    const deletePromises = question.map(async (_id) => {
      const response = await api.delete(SCHOOL_STUDENT_LIST_API, _id, 'Student')
      const { message } = response
      DeleteToast(message || 'Student deleted successfully')
      return _id
    })

    const deletedStudents = await Promise.all(deletePromises)
    dispatch(deleteStudentList(deletedStudents))
    deleteLocalStorageRecord({
      key: 'd-students-list',
      listRecord: question,
      multipleRecords: true,
    })
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Student deletion failed.'
    ErrorToast(errorMessage)
    console.error('Error in deleting student: ', error)
  }
}

// update current student
export const modifyCurrentStudent =
  (modifyStudent, studentMode) => async (dispatch) => {
    try {
      const response = { data: modifyStudent, editMode: studentMode }
      dispatch(
        setCurrentStudent({ student: response.data, mode: response.editMode })
      )
    } catch (error) {
      console.error(error)
    }
  }
