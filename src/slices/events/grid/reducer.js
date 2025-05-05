import { createSlice } from '@reduxjs/toolkit'
import LoadingToast from '@src/components/CustomComponents/Toast/LoadingToast'
import { initStore } from '@src/utils/init_store'

const initialState = {
  eventGrid: initStore('d-events-grid'),
  islodaing: false,
}

const EventGridSlice = createSlice({
  name: 'event_grid',
  initialState,
  reducers: {
    // get event grid data
    getEventGrid(state, action) {
      state.eventGrid = action.payload
    },

    // add new event grid
    addEventGrid(state, action) {
      const newEvent = action.payload
      if (state.eventGrid !== null) {
        state.eventGrid.unshift(newEvent)
      } else {
        state.eventGrid = [newEvent]
      }
    },

    // update event grid
    editEventGrid(state, action) {
      const eventsGrid = action.payload
      if (state.eventGrid !== null) {
        const findGridIndex = state.eventGrid.findIndex(
          (item) => item._id === eventsGrid._id
        )
        const findGridRecord = state.eventGrid.find(
          (item) => item._id === eventsGrid._id
        )
        if (findGridIndex !== -1 && findGridRecord) {
          state.eventGrid[findGridIndex] = eventsGrid
        }
        LoadingToast()
      }
    },

    // delete event grid
    deleteEventGrid(state, action) {
      if (state.eventGrid !== null) {
        state.eventGrid = state.eventGrid.filter(
          (item) => !action.payload.includes(item._id)
        )
      }
    },
  },
})

export const { getEventGrid, addEventGrid, editEventGrid, deleteEventGrid } =
  EventGridSlice.actions
export default EventGridSlice.reducer
