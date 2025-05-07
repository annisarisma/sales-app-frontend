import { createSlice } from '@reduxjs/toolkit'
import { initStore } from '@src/utils/init_store'

const initialState = {
  roleList: initStore('d-product-list'),
  userById: null,
  isLoading: false,
  editMode: false,
}

const ListSlice = createSlice({
  name: 'product_list',
  initialState,
  reducers: {
    // get user
    getRoleReducer(state, action) {
      state.roleList = action.payload
    },

    // get user by id
    getUserByIdData(state, action) {
      state.userById = action.payload
    },

    // update user
    updateUserSuccess(state, action) {
      const updatedUser = action.payload
      if (state.roleList !== null) {
        const existingUser = state.roleList.findIndex(
          (userItem) => userItem.usr_id === updatedUser.usrId
        )
        if (existingUser !== -1) {
          state.roleList[existingUser] = updatedUser
          state.currentUser = updatedUser
        }
      }
    },

    // destroy user
    destroyUserSuccess(state, action) {
      if (state.roleList !== null) {
        state.roleList = state.roleList.filter(
          (item) => !action.payload.includes(item._id)
        )
      }
    },

    // destroy user selected
    destroyUserSelectedSuccess(state, action) {
      if (state.roleList !== null) {
        state.roleList = state.roleList.filter(
          (item) => !action.payload.includes(item.usr_id)
        )
      }
    },
  },
})

export const {
  getRoleReducer,




  destroyUserSelectedSuccess,
  getUserByIdData,
  addUser,
  updateUserSuccess,
  setCurrentUser,
  changeStatusProductList,
  setCurrentEditMode,
  addProductList,
  editProductList,
  destroyUserSuccess,
} = ListSlice.actions
export default ListSlice.reducer
