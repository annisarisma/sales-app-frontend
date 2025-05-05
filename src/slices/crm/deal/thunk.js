import DeleteToast from '@src/components/CustomComponents/Toast/DeleteToast'
import ErrorToast from '@src/components/CustomComponents/Toast/ErrorToast'
import api from '@src/utils/axios_api'
import {
  createLocalStorage,
  deleteLocalStorageRecord,
  getLocalStorage,
} from '@src/utils/crud_functions'
import { REACT_APP_CRM_DEAL_API } from '@src/utils/url_helper'

import { deleteDealList, getDealList } from './reducer'

const DEAL_LIST_API = REACT_APP_CRM_DEAL_API
const IsApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

// get data
export const getDealData = () => async (dispatch) => {
  try {
    if (IsApi === false) {
      const responseData = await getLocalStorage('d-crm-deals-list')
      if (!responseData) {
        const response = await api.get(DEAL_LIST_API)
        createLocalStorage('d-crm-deals-list', response)
        dispatch(getDealList(response))
      } else {
        dispatch(getDealList(responseData))
      }
    } else {
      const response = await api.get(DEAL_LIST_API)
      dispatch(getDealList(response))
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.message || 'Deal List Fetch Failed'
    ErrorToast(errorMessage)
    console.error('Error fetching deal data:', error)
  }
}

// delete customer record
export const deleteDealListData = (question) => async (dispatch) => {
  try {
    const deletePromises = question.map(async (id) => {
      const response = await api.delete(DEAL_LIST_API, id, 'Deal')
      const { message } = response
      DeleteToast(message || 'Deal record deleted successfully')
      return id
    })

    const deletedDeals = await Promise.all(deletePromises)
    dispatch(deleteDealList(deletedDeals))
    deleteLocalStorageRecord({
      key: 'd-crm-deals-list',
      listRecord: question,
      multipleRecords: true,
    })
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Deal record deletion failed.'
    ErrorToast(errorMessage)
    console.error('Error in deleting deal: ', error)
  }
}
