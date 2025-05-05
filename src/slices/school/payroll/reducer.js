import { createSlice } from '@reduxjs/toolkit'
import { initStore } from '@src/utils/init_store'

const initialState = {
  payroll: initStore('d-teacher-payroll'),
  isLoading: false,
}

const payrollSlice = createSlice({
  name: 'teacher_payroll',
  initialState,
  reducers: {
    //get teacher payroll data
    getPayrollList(state, action) {
      state.payroll = action.payload
    },
  },
})

export const { getPayrollList } = payrollSlice.actions

export default payrollSlice.reducer
