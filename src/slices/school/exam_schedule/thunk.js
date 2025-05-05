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
import { REACT_APP_SCHOOL_EXAM_SCHEDULE_LIST } from '@src/utils/url_helper'

import {
  addExamList,
  deleteExamList,
  editExamList,
  getExamList,
} from './reducer'

const SCHOOL_EXAM_LIST = REACT_APP_SCHOOL_EXAM_SCHEDULE_LIST
const IsApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

// get exam list
export const getExamListData = () => async (dispatch) => {
  try {
    if (IsApi === false) {
      const responseData = await getLocalStorage('d-exam-schedule')
      if (!responseData) {
        const response = await api.get(SCHOOL_EXAM_LIST)
        createLocalStorage('d-exam-schedule', response)
        dispatch(getExamList(response))
      } else {
        dispatch(getExamList(responseData))
      }
    } else {
      const response = await api.get(SCHOOL_EXAM_LIST)
      dispatch(getExamList(response))
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

// add exam record
export const addExamListData = (newRecord) => async (dispatch) => {
  try {
    const response = await api.post(SCHOOL_EXAM_LIST, newRecord, 'Exam List')
    const { message } = response
    AddToast(message)
    addLocalStorageRecord('d-exam-schedule', newRecord)
    dispatch(addExamList(newRecord || 'exam record added successfully'))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.message || 'exam addition failed.'
    ErrorToast(errorMessage)
    console.error('Error adding record:', error)
  }
}

// edit exam record
export const editExamListData = (question) => async (dispatch) => {
  try {
    const response = await api.put(SCHOOL_EXAM_LIST, question, 'Exam List')
    const { message } = response
    setTimeout(() => {
      UpdateToast(message || 'exam record updated successfully')
    }, 2000)
    updateLocalStorageRecord('d-exam-schedule', question)
    dispatch(editExamList(question))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Exam record updation failed.'
    ErrorToast(errorMessage)
    console.error('Error updating record:', error)
  }
}

// delete exam record
export const deleteExamListData = (question) => async (dispatch) => {
  try {
    const deletePromises = question.map(async (_id) => {
      const response = await api.delete(SCHOOL_EXAM_LIST, _id, 'Exam List')
      const { message } = response
      DeleteToast(message || 'exam record deleted successfully')
      return _id
    })

    const deletedExamList = await Promise.all(deletePromises)
    dispatch(deleteExamList(deletedExamList))
    deleteLocalStorageRecord({
      key: 'd-exam-schedule',
      listRecord: question,
      multipleRecords: true,
    })
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'exam record deletion failed.'
    ErrorToast(errorMessage)
    console.error('Error in deleting exam: ', error)
  }
}
