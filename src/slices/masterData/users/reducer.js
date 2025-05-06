import { createSlice } from '@reduxjs/toolkit'
import LoadingToast from '@src/components/CustomComponents/Toast/LoadingToast'
import { initStore } from '@src/utils/init_store'

const initialState = {
  userList: initStore('d-product-list'),
  currentProduct: null,
  isLoading: false,
  editMode: false,
}

const ListSlice = createSlice({
  name: 'product_list',
  initialState,
  reducers: {
    // get product list data
    getUserList(state, action) {
      state.userList = action.payload
    },
    
    // get user data
    addUser(state, action) {
      const newPatients = action.payload
      console.log(newPatients);
      if (state.userList !== null) {
        state.userList.unshift(newPatients)
      } else {
        state.userList = [newPatients]
      }
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
      const productIndex = state.userList?.findIndex(
        (productItem) => productItem._id === action.payload._id
      )
      const activeProduct = state.userList?.find(
        (productItem) => productItem._id === action.payload._id
      )
      if (productIndex !== -1 && activeProduct) {
        if (state.userList) {
          if (activeProduct) {
            activeProduct.status =
              action.payload.status === 'Published' ? 'Inactive' : 'Published'
            state.userList[productIndex] = activeProduct
          }
        }
        LoadingToast()
      }
    },

    // add new product list record
    addProductList(state, action) {
      if (state.userList !== null) {
        state.userList.unshift(action.payload)
      } else {
        state.userList = [action.payload]
      }
    },

    // update product list record
    editProductList(state, action) {
      const updatedProduct = action.payload
      if (state.userList !== null) {
        const existingProductIndex = state.userList.findIndex(
          (productItem) => productItem._id === updatedProduct._id
        )
        if (existingProductIndex !== -1) {
          state.userList[existingProductIndex] = updatedProduct
          state.currentProduct = updatedProduct
        }
      }
    },

    // delete shop cart product
    deleteProductList(state, action) {
      if (state.userList !== null) {
        state.userList = state.userList.filter(
          (item) => !action.payload.includes(item._id)
        )
      }
    },
  },
})

export const {
  getUserList,
  addUser,
  setCurrentProduct,
  changeStatusProductList,
  setCurrentEditMode,
  addProductList,
  editProductList,
  deleteProductList,
} = ListSlice.actions
export default ListSlice.reducer
