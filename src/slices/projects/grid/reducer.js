import { createSlice } from '@reduxjs/toolkit'
import LoadingToast from '@src/components/CustomComponents/Toast/LoadingToast'

import { initStore } from '../../../utils/init_store'

const initialState = {
  projectGrid: initStore('d-project-grid'),
  isLoading: false,
}

const ProjectSlice = createSlice({
  name: 'projectGrid',
  initialState,
  reducers: {
    getProjectGrid(state, action) {
      state.projectGrid = action.payload
    },
    deleteProjectGrid(state, action) {
      if (state.projectGrid !== null) {
        state.projectGrid = state.projectGrid.filter(
          (item) => !action.payload.includes(item._id)
        )
      }
    },

    editProjectGrid(state, action) {
      const projectGrid = action.payload
      if (state.projectGrid !== null) {
        const findProjectIndex = state.projectGrid.findIndex(
          (item) => item._id === projectGrid._id
        )
        const findProjectRecord = state.projectGrid.find(
          (item) => item._id === projectGrid._id
        )
        if (findProjectIndex !== -1 && findProjectRecord) {
          state.projectGrid[findProjectIndex] = projectGrid
        }
        LoadingToast()
      }
    },

    addProjectGrid(state, action) {
      const newProject = action.payload
      if (state.projectGrid !== null) {
        state.projectGrid.unshift(newProject)
      } else {
        state.projectGrid = [newProject]
      }
    },
  },
})

export const {
  getProjectGrid,
  addProjectGrid,
  editProjectGrid,
  deleteProjectGrid,
} = ProjectSlice.actions
export default ProjectSlice.reducer
