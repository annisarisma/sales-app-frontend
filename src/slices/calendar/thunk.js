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
import { REACT_APP_CALENDAR_API } from '@src/utils/url_helper'

import {
  addCalendarList,
  deleteCalendarList,
  editCalendarList,
  getCalendarList,
} from './reducer'

const CALENDAR_LIST_API = REACT_APP_CALENDAR_API
const IsApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

// get calendar data
export const getCalendarData = () => async (dispatch) => {
  try {
    if (IsApi === false) {
      const responseData = await getLocalStorage('d-calendar-list')
      if (!responseData) {
        const response = await api.get(CALENDAR_LIST_API)
        createLocalStorage('d-calendar-list', response)
        dispatch(getCalendarList(response))
      } else {
        dispatch(getCalendarList(responseData))
      }
    } else {
      const response = await api.get(CALENDAR_LIST_API)
      dispatch(getCalendarList(response))
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Calendar List Fetch Failed'
    ErrorToast(errorMessage)
    console.error('Error fetching calendar data:', error)
  }
}

// add new calendar
export const addCalendarData = (newRecord) => async (dispatch) => {
  try {
    const response = await api.post(CALENDAR_LIST_API, newRecord, 'Calendar')
    const { message } = response
    AddToast(message || 'Calendar Event added successfully')
    addLocalStorageRecord('d-calendar-list', newRecord)
    dispatch(addCalendarList(newRecord))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Calendar Event addition failed.'
    ErrorToast(errorMessage)
    console.error('Error adding calender record:', error)
  }
}

// edit calendar
export const editCalendarData = (question) => async (dispatch) => {
  try {
    const response = await api.put(CALENDAR_LIST_API, question, 'Calendar')
    const { message } = response
    setTimeout(() => {
      UpdateToast(message || 'Calendar Event updated successfully')
    }, 2000)
    updateLocalStorageRecord('d-calendar-list', question)
    dispatch(editCalendarList(question))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Calendar event update failed.'
    ErrorToast(errorMessage)
    console.error('Error updating calender record:', error)
  }
}

// delete calendar
export const deleteCalendarData = (question) => async (dispatch) => {
  try {
    const deletePromises = question.map(async (id) => {
      const response = await api.delete(CALENDAR_LIST_API, id, 'Calendar')
      const { message } = response
      DeleteToast(message || 'Exam question deleted successfully')
      return id
    })

    const deletedCalender = await Promise.all(deletePromises)
    dispatch(deleteCalendarList(deletedCalender))
    deleteLocalStorageRecord({
      key: 'd-calendar-list',
      listRecord: question,
      multipleRecords: true,
    })
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Calendar Events deletion failed.'
    ErrorToast(errorMessage)
    console.error('Error in deleting calendar: ', error)
  }
}
