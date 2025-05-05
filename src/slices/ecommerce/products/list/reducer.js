import { createSlice } from '@reduxjs/toolkit'
import LoadingToast from '@src/components/CustomComponents/Toast/LoadingToast'
import { initStore } from '@src/utils/init_store'

const initialState = {
  productList: initStore('d-product-list'),
  currentProduct: null,
  isLoading: false,
  editMode: false,
}

const ListSlice = createSlice({
  name: 'product_list',
  initialState,
  reducers: {
    // get product list data
    getProductList(state, action) {
      state.productList = action.payload
    },

    // set current product record
    setCurrentProduct(state, action) {
      state.currentProduct = action.payload
    },

    // set current edit mode
    setCurrentEditMode(state, action) {
      state.editMode = action.payload
    },

    // update product list record status
    changeStatusProductList(state, action) {
      const productIndex = state.productList?.findIndex(
        (productItem) => productItem._id === action.payload._id
      )
      const activeProduct = state.productList?.find(
        (productItem) => productItem._id === action.payload._id
      )
      if (productIndex !== -1 && activeProduct) {
        if (state.productList) {
          if (activeProduct) {
            activeProduct.status =
              action.payload.status === 'Published' ? 'Inactive' : 'Published'
            state.productList[productIndex] = activeProduct
          }
        }
        LoadingToast()
      }
    },

    // add new product list record
    addProductList(state, action) {
      if (state.productList !== null) {
        state.productList.unshift(action.payload)
      } else {
        state.productList = [action.payload]
      }
    },

    // update product list record
    editProductList(state, action) {
      const updatedProduct = action.payload
      if (state.productList !== null) {
        const existingProductIndex = state.productList.findIndex(
          (productItem) => productItem._id === updatedProduct._id
        )
        if (existingProductIndex !== -1) {
          state.productList[existingProductIndex] = updatedProduct
          state.currentProduct = updatedProduct
        }
      }
    },

    // delete shop cart product
    deleteProductList(state, action) {
      if (state.productList !== null) {
        state.productList = state.productList.filter(
          (item) => !action.payload.includes(item._id)
        )
      }
    },
  },
})

export const {
  getProductList,
  setCurrentProduct,
  changeStatusProductList,
  setCurrentEditMode,
  addProductList,
  editProductList,
  deleteProductList,
} = ListSlice.actions
export default ListSlice.reducer
