import { createSlice } from '@reduxjs/toolkit'
import { initStore } from '@src/utils/init_store'

const initialState = {
  categoryList: null,
  categoryById: null,
  isLoading: false,
  editMode: false,
}

const ListSlice = createSlice({
  name: 'product_list',
  initialState,
  reducers: {
    // get
    getCategoryReducer(state, action) {
      state.categoryList = action.payload
    },

    // get user by id
    getCategoryByIdReducer(state, action) {
      state.categoryById = action.payload
    },

    // create
    createCategoryReducer(state, action) {
      const response = action.payload
      if (state.categoryList !== null) {
        state.categoryList.unshift(response)
      } else {
        state.categoryList = [response]
      }
    },

    // update user
    updateCategoryReducer(state, action) {
      const updatedCategory = action.payload
      if (state.categoryList !== null) {
        const existingUser = state.categoryList.findIndex(
          (categoryItem) => categoryItem.cat_id === updatedCategory.cat_id
        )
        if (existingUser !== -1) {
          state.categoryList[existingUser] = updatedCategory
          state.currentUser = updatedCategory
        }
      }
    },

    // destroy user
    destroyCategoryReducer(state, action) {
      if (state.categoryList !== null) {
        state.categoryList = state.categoryList.filter(
          (item) => !action.payload.includes(item.cat_id)
        )
      }
    },

    // destroy user selected
    destroyCategorySelectedReducer(state, action) {
      if (state.categoryList !== null) {
        state.categoryList = state.categoryList.filter(
          (item) => !action.payload.includes(item.cat_id)
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
  getCategoryReducer,
  getCategoryByIdReducer,
  createCategoryReducer,
  updateCategoryReducer,
  destroyCategoryReducer,
  destroyCategorySelectedReducer,
  setEditModeReducer,
} = ListSlice.actions
export default ListSlice.reducer
