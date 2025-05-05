import { createSlice } from '@reduxjs/toolkit'
import LoadingToast from '@src/components/CustomComponents/Toast/LoadingToast'
import { initStore } from '@src/utils/init_store'

const initialState = {
  attendance: initStore('d-hospital-staff-attendance'),
  isLoading: false,
}

const AttendanceListSlice = createSlice({
  name: 'attendance',
  initialState,
  reducers: {
    // get attendance list
    getAttendanceList(state, action) {
      state.attendance = action.payload
    },

    // add new attendance record
    addAttendanceList(state, action) {
      if (state.attendance !== null) {
        state.attendance.push(action.payload)
      } else {
        state.attendance = [action.payload]
      }
    },

    // edit attendance record
    editAttendanceList(state, action) {
      const customer = action.payload
      if (state.attendance !== null) {
        const findAttendanceIndex = state.attendance.findIndex(
          (item) => item._id === customer._id
        )
        const findAttendanceRecord = state.attendance.find(
          (item) => item._id === customer._id
        )
        if (findAttendanceIndex !== -1 && findAttendanceRecord) {
          state.attendance[findAttendanceIndex] = customer
        }
        LoadingToast()
      }
    },

    // delete attendance record
    deleteAttendanceList(state, action) {
      if (state.attendance !== null) {
        state.attendance = state.attendance.filter(
          (item) => !action.payload.includes(item._id)
        )
      }
    },
  },
})

export const {
  getAttendanceList,
  addAttendanceList,
  editAttendanceList,
  deleteAttendanceList,
} = AttendanceListSlice.actions
export default AttendanceListSlice.reducer
