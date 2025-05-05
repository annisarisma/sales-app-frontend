import { createSlice } from '@reduxjs/toolkit'
import LoadingToast from '@src/components/CustomComponents/Toast/LoadingToast'
import { initStore } from '@src/utils/init_store'

const initialState = {
  studentList: initStore('d-students-list'),
  isLoading: false,
  editMode: false,
  currentStudent: null,
}

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    //get student List
    getStudentList(state, action) {
      state.studentList = action.payload
    },

    //add student list
    addStudentList(state, action) {
      const newStudent = action.payload
      if (state.studentList !== null) {
        state.studentList.unshift(newStudent)
      } else {
        state.studentList = [newStudent]
      }
    },

    //edite student list
    editStudentList(state, action) {
      const student = action.payload
      if (state.studentList !== null) {
        const findStudentIndex = state.studentList.findIndex(
          (item) => item._id === student._id
        )
        const findStudentRecord = state.studentList.find(
          (item) => item._id === student._id
        )
        if (findStudentIndex !== -1 && findStudentRecord) {
          state.studentList[findStudentIndex] = student
          LoadingToast()
        }
      }
    },

    //delete student list
    deleteStudentList(state, action) {
      if (state.studentList !== null) {
        state.studentList = state.studentList.filter(
          (item) => !action.payload.includes(item._id)
        )
      }
    },

    setCurrentStudent(state, action) {
      const { student, mode } = action.payload
      if (student !== null && student !== undefined && mode !== undefined) {
        state.editMode = mode
        state.currentStudent = student
      }
    },
  },
})

export const {
  getStudentList,
  addStudentList,
  editStudentList,
  deleteStudentList,
  setCurrentStudent,
} = studentSlice.actions

export default studentSlice.reducer
