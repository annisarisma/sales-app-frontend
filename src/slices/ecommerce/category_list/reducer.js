import { createSlice } from '@reduxjs/toolkit'
import LoadingToast from '@src/components/CustomComponents/Toast/LoadingToast'
import { initStore } from '@src/utils/init_store'

const initialState = {
  categoryList: initStore('d-category-list'),
  isLoading: false,
}

const CategoryListSlice = createSlice({
  name: 'categoryList',
  initialState,
  reducers: {
    // get category list
    getCategoryList(state, action) {
      state.categoryList = action.payload
    },

    // delete Category list
    deleteCategoryList(state, action) {
      if (state.categoryList !== null) {
        state.categoryList = state.categoryList.filter(
          (item) => !action.payload.includes(item._id)
        )
      }
    },

    // edit Category list
    editCategoryList(state, action) {
      const categoryList = action.payload
      if (state.categoryList !== null) {
        const findProjectIndex = state.categoryList.findIndex(
          (item) => item._id === categoryList._id
        )
        const findProjectRecord = state.categoryList.find(
          (item) => item._id === categoryList._id
        )
        if (findProjectIndex !== -1 && findProjectRecord) {
          state.categoryList[findProjectIndex] = categoryList
        }
        LoadingToast()
      }
    },

    // add Category list
    addCategoryList(state, action) {
      const newCategory = action.payload
      if (state.categoryList !== null) {
        state.categoryList.unshift(newCategory)
      } else {
        state.categoryList = [newCategory]
      }
    },
  },
})

export const {
  getCategoryList,
  addCategoryList,
  editCategoryList,
  deleteCategoryList,
} = CategoryListSlice.actions
export default CategoryListSlice.reducer
