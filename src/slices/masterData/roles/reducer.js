import { createSlice } from '@reduxjs/toolkit'
import { initStore } from '@src/utils/init_store'

const initialState = {
  roleList: null,
  roleById: null,
  isLoading: false,
  editMode: false,
}

const ListSlice = createSlice({
  name: 'product_list',
  initialState,
  reducers: {
    // get
    getRoleReducer(state, action) {
      state.roleList = action.payload
    },

    // get user by id
    getRoleByIdReducer(state, action) {
      state.roleById = action.payload
    },

    // create
    createRoleReducer(state, action) {
      const response = action.payload
      if (state.roleList !== null) {
        state.roleList.unshift(response)
      } else {
        state.roleList = [response]
      }
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

    // set edit mode
    setEditModeReducer(state, action) {
      state.editMode = action.payload
    },
  },
})

export const {
  getRoleReducer,
  getRoleByIdReducer,
  createRoleReducer,
  setEditModeReducer,




  destroyUserSelectedSuccess,
  updateUserSuccess,
  setCurrentUser,
  changeStatusProductList,
  addProductList,
  editProductList,
  destroyUserSuccess,
} = ListSlice.actions
export default ListSlice.reducer
