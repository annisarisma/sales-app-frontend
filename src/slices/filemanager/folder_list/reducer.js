import { createSlice } from '@reduxjs/toolkit'
import LoadingToast from '@src/components/CustomComponents/Toast/LoadingToast'
import { initStore } from '@src/utils/init_store'

const initialState = {
  folderList: initStore('d-folder-list'),
  isLoading: false,
}

const folderListSlice = createSlice({
  name: 'folderList',
  initialState,
  reducers: {
    // get folderList data
    getFolderList(state, action) {
      state.folderList = action.payload
    },

    // delete folders
    deleteFolderList(state, action) {
      if (state.folderList !== null) {
        state.folderList = state.folderList.filter(
          (item) => !action.payload.includes(item._id)
        )
      }
    },

    // edit folderList data
    editFolderList(state, action) {
      const folder = action.payload
      if (state.folderList !== null) {
        const findFolderIndex = state.folderList.findIndex(
          (item) => item._id === folder._id
        )
        const findFolderRecord = state.folderList.find(
          (item) => item._id === folder._id
        )
        if (findFolderIndex !== -1 && findFolderRecord) {
          state.folderList[findFolderIndex] = folder
          LoadingToast()
        }
      }
    },

    // Add folders
    addFolderList(state, action) {
      const newRecord = action.payload
      if (newRecord !== null) {
        state.folderList?.unshift(newRecord)
      } else {
        state.folderList = [newRecord]
      }
    },
  },
})

export const {
  getFolderList,
  deleteFolderList,
  editFolderList,
  addFolderList,
} = folderListSlice.actions
export default folderListSlice.reducer
