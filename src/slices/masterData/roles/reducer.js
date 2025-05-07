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
    updateRoleReducer(state, action) {
      const updatedRole = action.payload
      if (state.roleList !== null) {
        const existingUser = state.roleList.findIndex(
          (roleItem) => roleItem.rol_id === updatedRole._id
        )
        if (existingUser !== -1) {
          state.roleList[existingUser] = updatedRole
          state.currentUser = updatedRole
        }
      }
    },

    // destroy user
    destroyRoleReducer(state, action) {
      if (state.roleList !== null) {
        state.roleList = state.roleList.filter(
          (item) => !action.payload.includes(item.rol_id)
        )
      }
    },

    // destroy user selected
    destroyRoleSelectedReducer(state, action) {
      if (state.roleList !== null) {
        state.roleList = state.roleList.filter(
          (item) => !action.payload.includes(item.rol_id)
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
  updateRoleReducer,
  destroyRoleReducer,
  destroyRoleSelectedReducer,
  setEditModeReducer,
} = ListSlice.actions
export default ListSlice.reducer
