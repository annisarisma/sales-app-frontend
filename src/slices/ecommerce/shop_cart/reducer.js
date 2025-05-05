import { createSlice } from '@reduxjs/toolkit'
import LoadingToast from '@src/components/CustomComponents/Toast/LoadingToast'
import { initStore } from '@src/utils/init_store'

const initialState = {
  shopCartList: initStore('d-shop-cart-list'),
  isLoading: false,
}

const ShopCartSlice = createSlice({
  name: 'shop_cart_list',
  initialState,
  reducers: {
    // get ecommerce shop cart list data
    getEcommerceShopCartList(state, action) {
      state.shopCartList = action.payload
    },

    // edit shop cart list
    modifyProduct(state, action) {
      const updatedShopCart = action.payload
      if (state.shopCartList !== null) {
        const findShopCartIndex = state.shopCartList.findIndex(
          (item) => item._id === updatedShopCart._id
        )
        if (findShopCartIndex !== -1) {
          state.shopCartList[findShopCartIndex] = updatedShopCart
        }
        LoadingToast()
      }
    },

    // delete shop cart product
    removeShopProduct(state, action) {
      if (state.shopCartList !== null) {
        state.shopCartList = state.shopCartList.filter(
          (item) => !action.payload.includes(item._id)
        )
      }
    },

    // add new shop cart product
    addShopProduct(state, action) {
      const newProduct = action.payload
      if (state.shopCartList !== null) {
        state.shopCartList.unshift(newProduct)
      } else {
        state.shopCartList = [newProduct]
      }
    },
  },
})

export const {
  getEcommerceShopCartList,
  modifyProduct,
  removeShopProduct,
  addShopProduct,
} = ShopCartSlice.actions
export default ShopCartSlice.reducer
