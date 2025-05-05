import { createSlice } from '@reduxjs/toolkit'
import LoadingToast from '@src/components/CustomComponents/Toast/LoadingToast'
import { initStore } from '@src/utils/init_store'

const initialState = {
  customerList: initStore('d-customer-list'),
  isLoading: false,
}

const ListSlice = createSlice({
  name: 'customer_list',
  initialState,
  reducers: {
    // get customer product list
    getCustomerProductList(state, action) {
      state.customerList = action.payload
    },

    // delete customer product list
    deleteCustomerProductList(state, action) {
      if (state.customerList !== null) {
        state.customerList = state.customerList.filter(
          (item) => !action.payload.includes(item._id)
        )
      }
    },

    // edit customer product list
    editCustomerProductRecord(state, action) {
      const customer = action.payload
      if (state.customerList !== null) {
        const findCustomerIndex = state.customerList.findIndex(
          (item) => item._id === customer._id
        )
        if (findCustomerIndex !== -1) {
          state.customerList[findCustomerIndex] = customer
        }
        LoadingToast()
      }
    },

    // add customer product list
    addCustomerProductRecord(state, action) {
      const newCustomer = action.payload
      if (state.customerList !== null) {
        state.customerList.unshift(newCustomer)
      } else {
        state.customerList = [newCustomer]
      }
    },
  },
})

export const {
  getCustomerProductList,
  deleteCustomerProductList,
  editCustomerProductRecord,
  addCustomerProductRecord,
} = ListSlice.actions
export default ListSlice.reducer
