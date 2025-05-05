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
import { REACT_APP_MANAGE_REVIEWS_API } from '@src/utils/url_helper'

import {
  addManageReview,
  deleteManageReview,
  getManageReviews,
  updateManageReview,
} from './reducer'

const USER_REVIEW_LIST_API = REACT_APP_MANAGE_REVIEWS_API
const IsApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

// get manage reviews data
export const getManageReviewData = () => async (dispatch) => {
  try {
    if (IsApi === false) {
      const responseData = await getLocalStorage('d-user-review-list')
      if (!responseData) {
        const response = await api.get(USER_REVIEW_LIST_API)
        createLocalStorage('d-user-review-list', response)
        dispatch(getManageReviews(response))
      } else {
        dispatch(getManageReviews(responseData))
      }
    } else {
      const response = await api.get(USER_REVIEW_LIST_API)
      dispatch(getManageReviews(response))
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'User Review List Fetch Failed'
    ErrorToast(errorMessage)
    console.error('Error fetching user reviews data:', error)
  }
}

// add customer record
export const addUserReviewRecord = (newRecord) => async (dispatch) => {
  try {
    const response = await api.post(
      USER_REVIEW_LIST_API,
      newRecord,
      'User Review'
    )
    const { message } = response
    AddToast(message || 'User review added successfully')
    addLocalStorageRecord('d-user-review-list', newRecord)
    dispatch(addManageReview(newRecord))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'User review addition failed.'
    ErrorToast(errorMessage)
    console.error('Error adding review record:', error)
  }
}

// edit review record
export const updateUserReviewRecord = (review) => async (dispatch) => {
  try {
    const response = await api.put(USER_REVIEW_LIST_API, review, 'User Review')
    const { message } = response
    setTimeout(() => {
      UpdateToast(message || 'User Review updated successfully')
    }, 2000)
    updateLocalStorageRecord('d-user-review-list', review)
    dispatch(updateManageReview(review))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'User Review record updation failed.'
    ErrorToast(errorMessage)
    console.error('Error updating review record:', error)
  }
}

// delete review record
export const deleteUserReviewRecord = (reviews) => async (dispatch) => {
  try {
    const deletePromises = reviews.map(async (_id) => {
      const response = await api.delete(
        USER_REVIEW_LIST_API,
        _id,
        'User Review'
      )
      const { message } = response
      DeleteToast(message || 'Address deleted successfully')
      return _id
    })

    const deletedReviews = await Promise.all(deletePromises)
    dispatch(deleteManageReview(deletedReviews))
    deleteLocalStorageRecord({
      key: 'd-user-review-list',
      listRecord: reviews,
      multipleRecords: true,
    })
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'User Review deletion failed.'
    ErrorToast(errorMessage)
    console.error('Error in deleting review: ', error)
  }
}
