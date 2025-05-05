import { createSlice } from '@reduxjs/toolkit'
import LoadingToast from '@src/components/CustomComponents/Toast/LoadingToast'
import { initStore } from '@src/utils/init_store'

const initialState = {
  eventList: initStore('d-events-list'),
  isLoading: false,
}

const EventListSlice = createSlice({
  name: 'eventList',
  initialState,
  reducers: {
    // get event list data
    getEventList(state, action) {
      state.eventList = action.payload
    },

    // add new event list
    addEventList(state, action) {
      const newEvent = action.payload
      if (state.eventList !== null) {
        state.eventList.unshift(newEvent)
      } else {
        state.eventList = [newEvent]
      }
    },

    // update event list
    editEventList(state, action) {
      const events = action.payload
      if (state.eventList !== null) {
        const findEventIndex = state.eventList.findIndex(
          (item) => item._id === events._id
        )
        const findEventRecord = state.eventList.find(
          (item) => item._id === events._id
        )
        if (findEventIndex !== -1 && findEventRecord) {
          state.eventList[findEventIndex] = events
        }
        LoadingToast()
      }
    },

    // delete event list
    deleteEventList(state, action) {
      if (state.eventList !== null) {
        state.eventList = state.eventList.filter(
          (item) => !action.payload.includes(item._id)
        )
      }
    },
  },
})

export const { getEventList, addEventList, editEventList, deleteEventList } =
  EventListSlice.actions
export default EventListSlice.reducer
