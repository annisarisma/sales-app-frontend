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
import { REACT_APP_SCHOOL_EXAM_QUESTION_LIST } from '@src/utils/url_helper'

import {
  addQuestionList,
  deleteQuestionList,
  editQuestionList,
  getQuestionList,
} from './reducer'

const SCHOOL_EXAM_QUESTION_LIST = REACT_APP_SCHOOL_EXAM_QUESTION_LIST
const IsApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

// get question list
export const getQuestionListData = () => async (dispatch) => {
  try {
    if (IsApi === false) {
      const responseData = await getLocalStorage('d-exam-question')
      if (!responseData) {
        const response = await api.get(SCHOOL_EXAM_QUESTION_LIST)
        createLocalStorage('d-exam-question', response)
        dispatch(getQuestionList(response))
      } else {
        dispatch(getQuestionList(responseData))
      }
    } else {
      const response = await api.get(SCHOOL_EXAM_QUESTION_LIST)
      dispatch(getQuestionList(response))
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Exam question Fetch Failed'
    ErrorToast(errorMessage)
    console.error('Error fetching exam question data:', error)
  }
}

// add question record
export const addQuestionListData = (newRecord) => async (dispatch) => {
  try {
    const response = await api.post(
      SCHOOL_EXAM_QUESTION_LIST,
      newRecord,
      'Exam Question'
    )
    const { message } = response
    AddToast(message || 'Exam question added successfully')
    addLocalStorageRecord('d-exam-question', newRecord)
    dispatch(addQuestionList(newRecord))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Exam question addition failed.'
    ErrorToast(errorMessage)
    console.error('Error adding question record:', error)
  }
}

// edit question record
export const editQuestionListData = (question) => async (dispatch) => {
  try {
    const response = await api.put(
      SCHOOL_EXAM_QUESTION_LIST,
      question,
      'Exam Question'
    )
    const { message } = response
    setTimeout(() => {
      UpdateToast(message || 'Exam question updated successfully')
    }, 2000)
    updateLocalStorageRecord('d-exam-question', question)
    dispatch(editQuestionList(question))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Exam question update failed.'
    ErrorToast(errorMessage)
    console.error('Error updating question record:', error)
  }
}

// delete question record
export const deleteQuestionListData = (question) => async (dispatch) => {
  try {
    const deletePromises = question.map(async (_id) => {
      const response = await api.delete(
        SCHOOL_EXAM_QUESTION_LIST,
        _id,
        'Exam Question'
      )
      const { message } = response
      DeleteToast(message || 'Exam question deleted successfully')
      return _id
    })

    const deletedQuestions = await Promise.all(deletePromises)
    dispatch(deleteQuestionList(deletedQuestions))
    deleteLocalStorageRecord({
      key: 'd-exam-question',
      listRecord: question,
      multipleRecords: true,
    })
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Exam question deletion failed.'
    ErrorToast(errorMessage)
    console.error('Error in deleting question: ', error)
  }
}
