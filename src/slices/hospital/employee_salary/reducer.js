import { createSlice } from '@reduxjs/toolkit'
import LoadingToast from '@src/components/CustomComponents/Toast/LoadingToast'
import { initStore } from '@src/utils/init_store'

const initialState = {
  salary: initStore('d-hospital-employee-salary'),
  isLoading: false,
}

const EmployeeSalarySlice = createSlice({
  name: 'event_grid',
  initialState,
  reducers: {
    // get empoyee salary data
    getEmaployeeSalary(state, action) {
      state.salary = action.payload
    },

    // add new empoyee salary
    addEmaployeeSalary(state, action) {
      if (state.salary !== null) {
        state.salary.unshift(action.payload)
      } else {
        state.salary = [action.payload]
      }
    },

    //edite salary record
    editEmaployeeSalary(state, action) {
      const salary = action.payload
      if (state.salary !== null) {
        const findSalaryIndex = state.salary.findIndex(
          (item) => item._id === salary._id
        )
        const findSalaryRecord = state.salary.find(
          (item) => item._id === salary._id
        )
        if (findSalaryIndex !== -1 && findSalaryRecord) {
          state.salary[findSalaryIndex] = salary
        }
        LoadingToast()
      }
    },

    //delete salary record
    deleteEmaployeeSalary(state, action) {
      if (state.salary !== null) {
        state.salary = state.salary.filter(
          (item) => !action.payload.includes(item._id)
        )
      }
    },
  },
})

export const {
  getEmaployeeSalary,
  addEmaployeeSalary,
  editEmaployeeSalary,
  deleteEmaployeeSalary,
} = EmployeeSalarySlice.actions
export default EmployeeSalarySlice.reducer
