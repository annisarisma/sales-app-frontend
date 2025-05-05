import { createSlice } from '@reduxjs/toolkit'
import LoadingToast from '@src/components/CustomComponents/Toast/LoadingToast'
import { initStore } from '@src/utils/init_store'

const initialState = {
  holidays: initStore('d-hospital-holidays'),
  isLoading: false,
}

const HolidaysListSlice = createSlice({
  name: 'holidays',
  initialState,
  reducers: {
    getHolidays(state, action) {
      state.holidays = action.payload
    },
    addHolidays(state, action) {
      if (state.holidays !== null) {
        state.holidays.unshift(action.payload)
      } else {
        state.holidays = [action.payload]
      }
    },

    editHolidays(state, action) {
      const customer = action.payload
      if (state.holidays !== null) {
        const findHolidayIndex = state.holidays.findIndex(
          (item) => item._id === customer._id
        )
        const findHolidayRecord = state.holidays.find(
          (item) => item._id === customer._id
        )
        if (findHolidayIndex !== -1 && findHolidayRecord) {
          state.holidays[findHolidayIndex] = customer
        }
        LoadingToast()
      }
    },

    deleteHolidays(state, action) {
      if (state.holidays !== null) {
        state.holidays = state.holidays.filter(
          (item) => !action.payload.includes(item._id)
        )
      }
    },
  },
})

export const { getHolidays, addHolidays, editHolidays, deleteHolidays } =
  HolidaysListSlice.actions
export default HolidaysListSlice.reducer
