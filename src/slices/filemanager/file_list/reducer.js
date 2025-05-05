import { createSlice } from '@reduxjs/toolkit'
import LoadingToast from '@src/components/CustomComponents/Toast/LoadingToast'
import { initStore } from '@src/utils/init_store'

const initialState = {
  fileList: initStore('d-file-list'),
  isLoading: false,
}

const FileListSlice = createSlice({
  name: 'fileList',
  initialState,
  reducers: {
    // get FileList data
    getFileList(state, action) {
      state.fileList = action.payload
    },

    // delete files
    deleteFileList(state, action) {
      if (state.fileList !== null) {
        state.fileList = state.fileList.filter(
          (item) => !action.payload.includes(item._id)
        )
      }
    },

    // edit FileList data
    editFileList(state, action) {
      const file = action.payload
      if (state.fileList !== null) {
        const findFileIndex = state.fileList.findIndex(
          (item) => item._id === file._id
        )
        const findFileRecord = state.fileList.find(
          (item) => item._id === file._id
        )
        if (findFileIndex !== -1 && findFileRecord) {
          state.fileList[findFileIndex] = file
          LoadingToast()
        }
      }
    },

    // Add files
    addFileList(state, action) {
      const newRecord = action.payload
      if (newRecord !== null) {
        state.fileList?.unshift(newRecord)
      } else {
        state.fileList = [newRecord]
      }
    },
  },
})

export const { getFileList, deleteFileList, editFileList, addFileList } =
  FileListSlice.actions
export default FileListSlice.reducer
