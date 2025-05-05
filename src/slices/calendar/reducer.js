import { createSlice } from '@reduxjs/toolkit'
import { initStore } from '@src/utils/init_store'

const initialState = {
  calendar: initStore('d-calendar-list'),
  isLoading: false,
}

const CalendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    // get calendar data
    getCalendarList(state, action) {
      state.calendar = action.payload
    },

    // delete calendar data
    deleteCalendarList(state, action) {
      if (state.calendar !== null) {
        state.calendar = state.calendar.filter(
          (item) => !action.payload.includes(item.id)
        )
      }
    },

    // edit calendar data
    editCalendarList(state, action) {
      const calendar = action.payload
      if (state.calendar !== null) {
        const findCalendarIndex = state.calendar.findIndex(
          (item) => item.id === calendar.id
        )
        const findCalendarRecord = state.calendar.find(
          (item) => item.id === calendar.id
        )
        if (findCalendarIndex !== -1 && findCalendarRecord) {
          state.calendar[findCalendarIndex] = calendar
        }
      }
    },

    // add new calendar data
    addCalendarList(state, action) {
      const newCalendar = action.payload
      if (state.calendar !== null) {
        state.calendar.unshift(newCalendar)
      } else {
        state.calendar = [newCalendar]
      }
    },
  },
})

export const {
  getCalendarList,
  addCalendarList,
  editCalendarList,
  deleteCalendarList,
} = CalendarSlice.actions
export default CalendarSlice.reducer
