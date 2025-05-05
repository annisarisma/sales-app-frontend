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
import { REACT_APP_GROUP_CHAT_API } from '@src/utils/url_helper'

import {
  addGroupChatListRecord,
  addNewGroupChatMessage,
  deleteGroupChatListRecord,
  deleteGroupChatMessage,
  editGroupChatListRecord,
  getGroupChatList,
  setCurrentGroupChatRecord,
} from './reducer'

const DEFAULT_GROUP_CHAT_LIST_API = REACT_APP_GROUP_CHAT_API
const IsApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

// get customer list
export const getGroupChatData = () => async (dispatch) => {
  try {
    if (IsApi === false) {
      const responseData = await getLocalStorage('d-group-chat')
      if (!responseData) {
        const response = await api.get(DEFAULT_GROUP_CHAT_LIST_API)
        createLocalStorage('d-group-chat', response)
        dispatch(getGroupChatList(response))
      } else {
        dispatch(getGroupChatList(responseData))
      }
    } else {
      const response = await api.get(DEFAULT_GROUP_CHAT_LIST_API)
      dispatch(getGroupChatList(response))
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Group Chat List Fetch Failed'
    ErrorToast(errorMessage)
    console.error('Error fetching group chat data:', error)
  }
}

// set current chat record
export const setCurrentGroupChatListRecord = (chat) => async (dispatch) => {
  try {
    const response = { data: chat }
    dispatch(setCurrentGroupChatRecord(response.data))
  } catch (error) {
    console.error('Error setting current chat record:', error)
  }
}

// add new Chat
export const addGroupChatRecordData = (newRecord) => async (dispatch) => {
  try {
    const response = await api.post(
      DEFAULT_GROUP_CHAT_LIST_API,
      newRecord,
      'Group Chat'
    )
    const { message } = response
    AddToast(message || 'Chat record added successfully')
    addLocalStorageRecord('d-group-chat', newRecord)
    dispatch(addGroupChatListRecord(newRecord))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Group Chat record addition failed.'
    ErrorToast(errorMessage)
    console.error('Error adding group chat record:', error)
  }
}

// delete current chat
export const deleteGroupChatRecordData = (question) => async (dispatch) => {
  try {
    const deletePromises = question.map(async (_id) => {
      const response = await api.delete(
        DEFAULT_GROUP_CHAT_LIST_API,
        _id,
        'Group Chat'
      )
      const { message } = response
      DeleteToast(message || 'Group Chat record deleted successfully')
      return _id
    })

    const deletedGroupChat = await Promise.all(deletePromises)
    dispatch(deleteGroupChatListRecord(deletedGroupChat))
    deleteLocalStorageRecord({
      key: 'd-group-chat',
      listRecord: question,
      multipleRecords: true,
    })
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Group Chat record deletion failed.'
    ErrorToast(errorMessage)
    console.error('Error in deleting group chat record: ', error)
  }
}

// edit customer record
export const editGroupChatListRecordData = (question) => async (dispatch) => {
  try {
    const response = await api.put(
      DEFAULT_GROUP_CHAT_LIST_API,
      question,
      'Chat'
    )
    const { message } = response
    setTimeout(() => {
      UpdateToast(message || 'Chat record updated successfully')
    }, 2000)
    updateLocalStorageRecord('d-group-chat', question)
    dispatch(editGroupChatListRecord(question))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Group Chat record updation failed.'
    ErrorToast(errorMessage)
    console.error('Error updating group chat record:', error)
  }
}

// add new message
export const addGroupChatMessageRecord =
  (userId, newMessage) => async (dispatch) => {
    try {
      const response = { _id: userId, message: newMessage }
      dispatch(
        addNewGroupChatMessage({ _id: response._id, message: response.message })
      )
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        'Chat record addition failed.'
      ErrorToast(errorMessage || 'Chat record addition failed.')
      console.error('Error adding group chat record:', error)
    }
  }

// delete message
export const deleteGroupChatMessageRecord =
  (userId, deletedMessage) => async (dispatch) => {
    try {
      const response = { _id: userId, message: deletedMessage }
      dispatch(
        deleteGroupChatMessage({ _id: response._id, message: response.message })
      )
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        'Chat record deletion failed.'
      ErrorToast(errorMessage || 'Chat record deletion failed.')
      console.error('Error deleting group chat record:', error)
    }
  }
