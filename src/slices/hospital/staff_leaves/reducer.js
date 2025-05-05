import { createSlice } from '@reduxjs/toolkit'
import LoadingToast from '@src/components/CustomComponents/Toast/LoadingToast'
import { initStore } from '@src/utils/init_store'

const initialState = {
  staffLeave: initStore('d-hospital-staff-leave'),
  isLoading: false,
}

const StaffLeavesListSlice = createSlice({
  name: 'staffleave',
  initialState,
  reducers: {
    getStaffLeaveList(state, action) {
      state.staffLeave = action.payload
    },
    addStaffLeaveList(state, action) {
      if (state.staffLeave !== null) {
        state.staffLeave.unshift(action.payload)
      } else {
        state.staffLeave = [action.payload]
      }
    },
    editStaffLeaveList(state, action) {
      const staffLeave = action.payload
      if (state.staffLeave !== null) {
        const findStaffIndex = state.staffLeave.findIndex(
          (item) => item._id === staffLeave._id
        )
        const findStaffRecord = state.staffLeave.find(
          (item) => item._id === staffLeave._id
        )
        if (findStaffIndex !== -1 && findStaffRecord) {
          state.staffLeave[findStaffIndex] = staffLeave
        }
        LoadingToast()
      }
    },
    deleteStaffLeaveList(state, action) {
      if (state.staffLeave !== null) {
        state.staffLeave = state.staffLeave.filter(
          (item) => !action.payload.includes(item._id)
        )
      }
    },
  },
})

export const {
  getStaffLeaveList,
  addStaffLeaveList,
  editStaffLeaveList,
  deleteStaffLeaveList,
} = StaffLeavesListSlice.actions
export default StaffLeavesListSlice.reducer
