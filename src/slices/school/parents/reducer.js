import { createSlice } from '@reduxjs/toolkit'
import LoadingToast from '@src/components/CustomComponents/Toast/LoadingToast'
import { initStore } from '@src/utils/init_store'

const initialState = {
  parentsList: initStore('d-parents-list'),
  isLoading: false,
}

const parentsSlice = createSlice({
  name: 'parents',
  initialState,
  reducers: {
    getParentsList(state, action) {
      state.parentsList = action.payload
    },

    addParentsList(state, action) {
      const newParents = action.payload
      if (state.parentsList !== null) {
        state.parentsList.unshift(newParents)
      } else {
        state.parentsList = [newParents]
      }
    },
    editParentsList(state, action) {
      const parents = action.payload
      if (state.parentsList !== null) {
        const findStaffIndex = state.parentsList.findIndex(
          (item) => item._id === parents._id
        )
        const findStaffRecord = state.parentsList.find(
          (item) => item._id === parents._id
        )
        if (findStaffIndex !== -1 && findStaffRecord) {
          state.parentsList[findStaffIndex] = parents
        }
        LoadingToast()
      }
    },

    deleteParentsList(state, action) {
      if (state.parentsList !== null) {
        state.parentsList = state.parentsList.filter(
          (item) => !action.payload.includes(item._id)
        )
      }
    },
  },
})

export const {
  getParentsList,
  addParentsList,
  editParentsList,
  deleteParentsList,
} = parentsSlice.actions

export default parentsSlice.reducer
