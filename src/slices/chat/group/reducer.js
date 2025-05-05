import { createSlice } from '@reduxjs/toolkit'
import LoadingToast from '@src/components/CustomComponents/Toast/LoadingToast'
import { initStore } from '@src/utils/init_store'

const initialState = {
  groupChatList: initStore('d-group-chat'),
  isLoading: false,
  currentGroupChatRecord: null,
}

const ListSlice = createSlice({
  name: 'group_chat_list',
  initialState,
  reducers: {
    // get default chat list
    getGroupChatList(state, action) {
      state.groupChatList = action.payload
    },

    // set current chat record
    setCurrentGroupChatRecord(state, action) {
      state.currentGroupChatRecord = action.payload
    },

    // delete default chat record
    deleteGroupChatListRecord(state, action) {
      if (state.groupChatList !== null) {
        state.groupChatList = state.groupChatList.filter(
          (item) => !action.payload.includes(item._id)
        )
        state.currentGroupChatRecord =
          state.groupChatList[action.payload[0] - 1]
      }
    },

    // edit chat record
    editGroupChatListRecord(state, action) {
      const chat = action.payload
      if (state.groupChatList !== null) {
        const findChatIndex = state.groupChatList.findIndex(
          (item) => item._id === chat._id
        )
        if (findChatIndex !== -1) {
          state.groupChatList[findChatIndex] = chat
          state.currentGroupChatRecord = chat
        }
        LoadingToast()
      }
    },

    // add customer product list
    addGroupChatListRecord(state, action) {
      const newGroupChat = action.payload
      if (state.groupChatList !== null) {
        state.groupChatList.unshift(newGroupChat)
        state.currentGroupChatRecord = newGroupChat
      } else {
        state.groupChatList = [newGroupChat]
        state.currentGroupChatRecord = newGroupChat
      }
    },

    // delete message record
    deleteGroupChatMessage(state, action) {
      const { _id, message } = action.payload
      if (state.groupChatList !== null) {
        const findRecordIndex = state.groupChatList.findIndex(
          (item) => item._id === _id
        )
        const findRecord = state.groupChatList.find((item) => item._id === _id)
        if (findRecordIndex !== -1 && findRecord) {
          const updatedMessages =
            findRecord.messages.filter((msg) => msg._id !== message._id) || []
          state.groupChatList[findRecordIndex] = {
            ...findRecord,
            messages: updatedMessages,
          }
          state.currentGroupChatRecord = {
            ...findRecord,
            messages: updatedMessages,
          }
        }
      }
    },

    // add new message
    addNewGroupChatMessage(state, action) {
      const { _id, message } = action.payload
      if (state.groupChatList !== null) {
        const findRecordIndex = state.groupChatList.findIndex(
          (item) => item._id === _id
        )
        const findRecord = state.groupChatList.find((item) => item._id === _id)
        if (findRecordIndex !== -1 && findRecord) {
          const updatedMessages = [...findRecord.messages, message]
          state.groupChatList[findRecordIndex] = {
            ...findRecord,
            messages: updatedMessages,
          }
          state.currentGroupChatRecord = {
            ...findRecord,
            messages: updatedMessages,
          }
        }
      }
    },
  },
})

export const {
  getGroupChatList,
  setCurrentGroupChatRecord,
  deleteGroupChatListRecord,
  editGroupChatListRecord,
  addGroupChatListRecord,
  deleteGroupChatMessage,
  addNewGroupChatMessage,
} = ListSlice.actions
export default ListSlice.reducer
