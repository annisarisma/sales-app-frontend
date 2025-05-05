import { createSlice } from '@reduxjs/toolkit'
import { initStore } from '@src/utils/init_store'

const initialState = {
  deal: initStore('d-crm-deals-list'),
  isLoading: false,
}

const DealSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    // get contact list data
    getDealList(state, action) {
      state.deal = action.payload
    },
    deleteDealList(state, action) {
      if (state.deal !== null) {
        state.deal = state.deal.filter(
          (item) => !action.payload.includes(item.id)
        )
      }
    },
  },
})

export const { getDealList, deleteDealList } = DealSlice.actions
export default DealSlice.reducer
