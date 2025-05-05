import { createSlice } from '@reduxjs/toolkit'
import LoadingToast from '@src/components/CustomComponents/Toast/LoadingToast'
import { initStore } from '@src/utils/init_store'

const initialState = {
  checkoutAddressList: initStore('d-address-list'),
  isLoading: false,
}

const CheckoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    // get checkout list
    getCheckoutList(state, action) {
      state.checkoutAddressList = action.payload
    },

    // add new checkout list record
    addCheckoutListRecord(state, action) {
      const newAddress = action.payload
      if (state.checkoutAddressList !== null) {
        state.checkoutAddressList.unshift(newAddress)
      } else {
        state.checkoutAddressList = [newAddress]
      }
    },

    // edit checkout list record
    editCheckoutListRecord(state, action) {
      const existAddress = action.payload
      if (state.checkoutAddressList !== null) {
        const findAddressIndex = state.checkoutAddressList.findIndex(
          (item) => item._id === existAddress._id
        )
        if (findAddressIndex !== -1) {
          state.checkoutAddressList[findAddressIndex] = existAddress
        }
        LoadingToast()
      }
    },

    // delete checkout list record
    deleteCheckoutListRecord(state, action) {
      if (state.checkoutAddressList !== null) {
        state.checkoutAddressList = state.checkoutAddressList.filter(
          (item) => !action.payload.includes(item._id)
        )
      }
    },
  },
})

export const {
  getCheckoutList,
  editCheckoutListRecord,
  addCheckoutListRecord,
  deleteCheckoutListRecord,
} = CheckoutSlice.actions
export default CheckoutSlice.reducer
