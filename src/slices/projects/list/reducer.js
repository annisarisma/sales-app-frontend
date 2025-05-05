import { createSlice } from '@reduxjs/toolkit'
import LoadingToast from '@src/components/CustomComponents/Toast/LoadingToast'
import { initStore } from '@src/utils/init_store'

const initialState = {
  projectList: initStore('d-project-list'),
  isLoading: false,
}

const ProjectSlice = createSlice({
  name: 'projectList',
  initialState,
  reducers: {
    getProjectList(state, action) {
      state.projectList = action.payload
    },

    deleteProjectList(state, action) {
      if (state.projectList !== null) {
        state.projectList = state.projectList.filter(
          (item) => !action.payload.includes(item._id)
        )
      }
    },

    editProjectList(state, action) {
      const projectList = action.payload
      if (state.projectList !== null) {
        const findProjectIndex = state.projectList.findIndex(
          (item) => item._id === projectList._id
        )
        const findProjectRecord = state.projectList.find(
          (item) => item._id === projectList._id
        )
        if (findProjectIndex !== -1 && findProjectRecord) {
          state.projectList[findProjectIndex] = projectList
        }
        LoadingToast()
      }
    },

    addProjectList(state, action) {
      const newProject = action.payload
      if (state.projectList !== null) {
        state.projectList.unshift(newProject)
      } else {
        state.projectList = [newProject]
      }
    },
  },
})

export const {
  getProjectList,
  addProjectList,
  editProjectList,
  deleteProjectList,
} = ProjectSlice.actions
export default ProjectSlice.reducer
