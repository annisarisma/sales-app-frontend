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
import { REACT_APP_DEFAULT_CHAT_API } from '@src/utils/url_helper'

import {
  addChatListRecord,
  addChatNewMessageRecord,
  deleteChatMessageRecord,
  deleteDefaultChatListRecord,
  editDefaultChatListRecord,
  getChatList,
  setCurrentChatRecord,
} from './reducer'

const DEFAULT_CHAT_LIST_API = REACT_APP_DEFAULT_CHAT_API
const IsApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

// get customer list
export const getDefaultChatData = () => async (dispatch) => {
  try {
    if (IsApi === false) {
      const responseData = await getLocalStorage('d-default-chat')
      if (!responseData) {
        const response = await api.get(DEFAULT_CHAT_LIST_API)
        createLocalStorage('d-default-chat', response)
        dispatch(getChatList(response))
      } else {
        dispatch(getChatList(responseData))
      }
    } else {
      const response = await api.get(DEFAULT_CHAT_LIST_API)
      dispatch(getChatList(response))
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.message || 'Chat List Fetch Failed'
    ErrorToast(errorMessage)
    console.error('Error fetching chat data:', error)
  }
}

// set current chat record
export const setCurrentChatListRecord = (chat) => async (dispatch) => {
  try {
    const response = { data: chat }
    dispatch(setCurrentChatRecord(response.data))
  } catch (error) {
    console.error('Error setting current chat record:', error)
  }
}

// add new Chat
export const addDefaultChatRecordData = (newRecord) => async (dispatch) => {
  try {
    const response = await api.post(DEFAULT_CHAT_LIST_API, newRecord, 'Chat')
    const { message } = response
    AddToast(message || 'Chat record added successfully')
    addLocalStorageRecord('d-default-chat', newRecord)
    dispatch(addChatListRecord(newRecord))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Chat record addition failed.'
    ErrorToast(errorMessage)
    console.error('Error adding chat record:', error)
  }
}

// delete current chat
export const deleteDefaultChatRecordData = (question) => async (dispatch) => {
  try {
    const deletePromises = question.map(async (_id) => {
      const response = await api.delete(DEFAULT_CHAT_LIST_API, _id, 'Chat')
      const { message } = response
      DeleteToast(message || 'Chat record deleted successfully')
      return _id
    })

    const deletedChats = await Promise.all(deletePromises)
    dispatch(deleteDefaultChatListRecord(deletedChats))
    deleteLocalStorageRecord({
      key: 'd-default-chat',
      listRecord: question,
      multipleRecords: true,
    })
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      ' Chat record deletion failed.'
    ErrorToast(errorMessage)
    console.error('Error in deleting chat record: ', error)
  }
}

// edit customer record
export const editDefaultChatListRecordData = (question) => async (dispatch) => {
  try {
    const response = await api.put(DEFAULT_CHAT_LIST_API, question, 'Chat')
    const { message } = response
    setTimeout(() => {
      UpdateToast(message || 'Chat record updated successfully')
    }, 2000)
    updateLocalStorageRecord('d-default-chat', question)
    dispatch(editDefaultChatListRecord(question))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Chat record updation failed.'
    ErrorToast(errorMessage)
    console.error('Error updating record:', error)
  }
}

// delete message
export const deleteDefaultChatMessageRecord =
  (userid, deletedMessage) => async (dispatch) => {
    try {
      const response = { _id: userid, message: deletedMessage }
      dispatch(
        deleteChatMessageRecord({
          _id: response._id,
          message: response.message,
        })
      )
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        'Chat record deletion failed.'
      ErrorToast(errorMessage || 'Chat record deletion failed.')
      console.error('Error deleting record:', error)
    }
  }

// add new message
export const addDefaultChatMessageRecord =
  (userId, newMessage) => async (dispatch) => {
    try {
      const response = { _id: userId, message: newMessage }
      dispatch(
        addChatNewMessageRecord({
          _id: response._id,
          message: response.message,
        })
      )
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        'Chat record addition failed.'
      ErrorToast(errorMessage || 'Chat record addition failed.')
      console.error('Error adding chat record:', error)
    }
  }
