import { createSlice } from '@reduxjs/toolkit'
import LoadingToast from '@src/components/CustomComponents/Toast/LoadingToast'
import { initStore } from '@src/utils/init_store'

const initialState = {
  wishListData: initStore('d-wishlist'),
  isLoading: false,
}

const WishListSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    // get wishlist data
    getWishListData(state, action) {
      state.wishListData = action.payload
    },

    addWishListProduct(state, action) {
      const newProduct = action.payload
      if (state.wishListData !== null) {
        state.wishListData.unshift(newProduct)
      } else {
        state.wishListData = [newProduct]
      }
    },

    // update list product quantity record
    modifyWishListProductQuantity(state, action) {
      const updatedWishListRecord = action.payload
      if (state.wishListData !== null) {
        const findWishListRecordIndex = state.wishListData.findIndex(
          (item) => item._id === updatedWishListRecord._id
        )
        const findWishListRecord = state.wishListData.find(
          (item) => item._id === updatedWishListRecord._id
        )
        if (findWishListRecordIndex !== -1 && findWishListRecord) {
          state.wishListData[findWishListRecordIndex] = updatedWishListRecord
        }
        LoadingToast()
      }
    },

    // delete wishlist product record
    removeWishListProduct(state, action) {
      if (state.wishListData !== null) {
        state.wishListData = state.wishListData.filter(
          (item) => !action.payload.includes(item._id)
        )
      }
    },
  },
})

export const {
  getWishListData,
  addWishListProduct,
  modifyWishListProductQuantity,
  removeWishListProduct,
} = WishListSlice.actions
export default WishListSlice.reducer
