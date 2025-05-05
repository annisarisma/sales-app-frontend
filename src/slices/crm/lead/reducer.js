import { createSlice } from '@reduxjs/toolkit'
import LoadingToast from '@src/components/CustomComponents/Toast/LoadingToast'
import { initStore } from '@src/utils/init_store'

const initialState = {
  lead: initStore('d-crm-lead-list'),
  isLoading: false,
}

const LeadSlice = createSlice({
  name: 'lead',
  initialState,
  reducers: {
    // get lead list data
    getLeadList(state, action) {
      state.lead = action.payload
    },

    // delete lead record
    deleteLeadList(state, action) {
      if (state.lead !== null) {
        state.lead = state.lead.filter(
          (item) => !action.payload.includes(item._id)
        )
      }
    },

    // edit lead record
    editLeadList(state, action) {
      const lead = action.payload
      if (state.lead !== null) {
        const findLeadIndex = state.lead.findIndex(
          (item) => item._id === lead._id
        )
        const findLeadRecord = state.lead.find((item) => item._id === lead._id)
        if (findLeadIndex !== -1 && findLeadRecord) {
          state.lead[findLeadIndex] = lead
        }
        LoadingToast()
      }
    },

    // add new lead record
    addLeadList(state, action) {
      const newLead = action.payload
      if (state.lead !== null) {
        state.lead.unshift(newLead)
      } else {
        state.lead = [newLead]
      }
    },
  },
})

export const { getLeadList, addLeadList, editLeadList, deleteLeadList } =
  LeadSlice.actions
export default LeadSlice.reducer
