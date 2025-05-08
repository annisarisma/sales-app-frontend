import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productList: null,
  productById: null,
  isLoading: false,
  editMode: false,
}

const ListSlice = createSlice({
  name: 'product_list',
  initialState,
  reducers: {
    // get
    getProductReducer(state, action) {
      state.productList = action.payload
    },

    // get user by id
    getProductByIdReducer(state, action) {
      state.productById = action.payload
    },

    // create
    createProductReducer(state, action) {
      const response = action.payload
      if (state.productList !== null) {
        state.productList.unshift(response)
      } else {
        state.productList = [response]
      }
    },

    // update user
    updateProductReducer(state, action) {
      const updatedProduct = action.payload
      if (state.productList !== null) {
        const existingUser = state.productList.findIndex(
          (productItem) => productItem.prd_id === updatedProduct.prd_id
        )
        if (existingUser !== -1) {
          state.productList[existingUser] = updatedProduct
          state.currentUser = updatedProduct
        }
      }
    },

    // destroy user
    destroyProductReducer(state, action) {
      if (state.productList !== null) {
        state.productList = state.productList.filter(
          (item) => !action.payload.includes(item.prd_id)
        )
      }
    },

    // destroy user selected
    destroyProductSelectedReducer(state, action) {
      if (state.productList !== null) {
        state.productList = state.productList.filter(
          (item) => !action.payload.includes(item.prd_id)
        )
      }
    },

    // set edit mode
    setEditModeReducer(state, action) {
      state.editMode = action.payload
    },
  },
})

export const {
  getProductReducer,
  getProductByIdReducer,
  createProductReducer,
  updateProductReducer,
  destroyProductReducer,
  destroyProductSelectedReducer,
  setEditModeReducer,
} = ListSlice.actions
export default ListSlice.reducer
